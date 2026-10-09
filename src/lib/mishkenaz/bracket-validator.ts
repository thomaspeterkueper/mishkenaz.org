import {
  type SemanticType,
  vectorSignatures,
} from './vector-algebra';

export type ExpressionNode =
  | { kind: 'vector'; vector: string }
  | { kind: 'sequence'; left: ExpressionNode; right: ExpressionNode };

export interface ParseIssue {
  message: string;
  position: number;
}

export interface ParsedExpression {
  source: string;
  ast: ExpressionNode | null;
  issues: ParseIssue[];
}

export interface BracketedCandidate {
  input: SemanticType;
  output: SemanticType;
  trace: string[];
}

export interface BracketedValidation {
  source: string;
  valid: boolean;
  ast: ExpressionNode | null;
  candidates: BracketedCandidate[];
  issues: string[];
}

export interface ExpressionComparison {
  left: BracketedValidation;
  right: BracketedValidation;
  relation:
    | 'same-structure'
    | 'same-output-only'
    | 'different-output'
    | 'one-invalid'
    | 'both-invalid';
  notes: string[];
}

const aliases: Record<string, string> = {
  reso: '-reso',
  ira: '-ira',
  vya: '-vya',
  kora: '-kora',
  val: '-val',
  ori: 'Ori',
};

const compounds = ['Avi-Sol', 'Ona-nO', 'Sa-h'];

function canonical(raw: string): string | null {
  if (vectorSignatures[raw]) return raw;
  if (aliases[raw]) return aliases[raw];
  const lower = raw.toLowerCase();
  const direct = Object.keys(vectorSignatures).find(k => k.toLowerCase() === lower);
  if (direct) return direct;
  const alias = Object.entries(aliases).find(([k]) => k.toLowerCase() === lower);
  return alias?.[1] ?? null;
}

function lex(source: string): { tokens: string[]; issues: ParseIssue[] } {
  const tokens: string[] = [];
  const issues: ParseIssue[] = [];
  let i = 0;

  while (i < source.length) {
    const ch = source[i];

    if (/\s/.test(ch)) {
      i += 1;
      continue;
    }

    if (ch === '(' || ch === ')' || ch === '-') {
      // Preserve known lexical compounds before treating "-" as composition.
      const tail = source.slice(i);
      if (ch !== '-') {
        tokens.push(ch);
        i += 1;
        continue;
      }
      tokens.push('-');
      i += 1;
      continue;
    }

    let j = i;
    while (j < source.length && !/[()\s-]/.test(source[j])) j += 1;
    const word = source.slice(i, j);
    tokens.push(word);
    i = j;
  }

  // Recombine lexicalized compounds.
  const recombined: string[] = [];
  for (let k = 0; k < tokens.length; k += 1) {
    if (
      k + 2 < tokens.length &&
      tokens[k + 1] === '-' &&
      compounds.includes(`${tokens[k]}-${tokens[k + 2]}`)
    ) {
      recombined.push(`${tokens[k]}-${tokens[k + 2]}`);
      k += 2;
      continue;
    }
    recombined.push(tokens[k]);
  }

  for (let k = 0; k < recombined.length; k += 1) {
    const t = recombined[k];
    if (t === '(' || t === ')' || t === '-') continue;
    if (!canonical(t)) {
      issues.push({ message: `Unbekannter Vektor "${t}".`, position: k });
    }
  }

  return { tokens: recombined, issues };
}

export function parseBracketedExpression(source: string): ParsedExpression {
  const { tokens, issues } = lex(source.trim());
  let index = 0;

  function parsePrimary(): ExpressionNode | null {
    const token = tokens[index];
    if (!token) return null;

    if (token === '(') {
      index += 1;
      const inner = parseSequence();
      if (tokens[index] !== ')') {
        issues.push({ message: 'Fehlende schließende Klammer.', position: index });
        return inner;
      }
      index += 1;
      return inner;
    }

    if (token === ')' || token === '-') return null;

    index += 1;
    const vector = canonical(token);
    if (!vector) return null;
    return { kind: 'vector', vector };
  }

  function parseSequence(): ExpressionNode | null {
    let left = parsePrimary();
    if (!left) return null;

    while (tokens[index] === '-') {
      index += 1;
      const right = parsePrimary();
      if (!right) {
        issues.push({ message: 'Nach "-" fehlt ein Vektor oder Teilausdruck.', position: index });
        return left;
      }
      left = { kind: 'sequence', left, right };
    }

    return left;
  }

  const ast = parseSequence();

  if (index < tokens.length) {
    issues.push({ message: `Unerwartetes Token "${tokens[index]}".`, position: index });
  }

  return { source, ast, issues };
}

function signatureOutputs(vector: string, input: SemanticType): SemanticType[] {
  const sig = vectorSignatures[vector];
  if (!sig || !sig.inputs.includes(input)) return [];
  return sig.outputs;
}

function inferNode(
  node: ExpressionNode,
  explicitInputs?: SemanticType[],
): BracketedCandidate[] {
  if (node.kind === 'vector') {
    const sig = vectorSignatures[node.vector];
    if (!sig) return [];
    const inputs = explicitInputs ?? sig.inputs;
    const out: BracketedCandidate[] = [];
    for (const input of inputs) {
      for (const output of signatureOutputs(node.vector, input)) {
        out.push({
          input,
          output,
          trace: [`${node.vector}:${input}>${output}`],
        });
      }
    }
    return out;
  }

  const left = inferNode(node.left, explicitInputs);
  const result: BracketedCandidate[] = [];

  for (const l of left) {
    const right = inferNode(node.right, [l.output]);
    for (const r of right) {
      result.push({
        input: l.input,
        output: r.output,
        trace: [...l.trace, ...r.trace],
      });
    }
  }

  return result;
}

function serialize(node: ExpressionNode | null): string {
  if (!node) return '(invalid)';
  if (node.kind === 'vector') return node.vector;
  return `(${serialize(node.left)}-${serialize(node.right)})`;
}

export function validateBracketedExpression(
  source: string,
  explicitInput?: SemanticType,
): BracketedValidation {
  const parsed = parseBracketedExpression(source);
  if (!parsed.ast || parsed.issues.length) {
    return {
      source,
      valid: false,
      ast: parsed.ast,
      candidates: [],
      issues: parsed.issues.map(i => i.message),
    };
  }

  const candidates = inferNode(parsed.ast, explicitInput ? [explicitInput] : undefined);
  const issues: string[] = [];

  if (!candidates.length) {
    issues.push('Die gewählte Klammerung erzeugt keinen typkompatiblen Pfad.');
  }

  return {
    source,
    valid: candidates.length > 0,
    ast: parsed.ast,
    candidates,
    issues,
  };
}

export function compareBracketings(
  leftSource: string,
  rightSource: string,
): ExpressionComparison {
  const left = validateBracketedExpression(leftSource);
  const right = validateBracketedExpression(rightSource);
  const notes: string[] = [];

  if (!left.valid && !right.valid) {
    return { left, right, relation: 'both-invalid', notes: ['Beide Strukturen sind typologisch derzeit ungültig.'] };
  }

  if (!left.valid || !right.valid) {
    return { left, right, relation: 'one-invalid', notes: ['Nur eine der beiden Klammerungen ist typologisch zulässig.'] };
  }

  const leftAst = serialize(left.ast);
  const rightAst = serialize(right.ast);

  if (leftAst === rightAst) {
    return { left, right, relation: 'same-structure', notes: ['Die Klammerungsstruktur ist identisch.'] };
  }

  const leftOutputs = new Set(left.candidates.map(c => c.output));
  const rightOutputs = new Set(right.candidates.map(c => c.output));
  const shared = [...leftOutputs].filter(t => rightOutputs.has(t));

  if (shared.length) {
    notes.push(
      `Beide Strukturen können denselben Endtyp erreichen (${shared.join(', ')}), ` +
      'aber der semantische Zwischenpfad ist verschieden.',
    );
    return { left, right, relation: 'same-output-only', notes };
  }

  notes.push('Die Klammerungen führen zu unterschiedlichen möglichen Endtypen.');
  return { left, right, relation: 'different-output', notes };
}

export function formatBracketedValidation(result: BracketedValidation): string {
  const lines = [
    `${result.valid ? 'VALID' : 'INVALID'}: ${result.source}`,
    `AST: ${serialize(result.ast)}`,
  ];

  for (const candidate of result.candidates) {
    lines.push(
      `Path: ${candidate.input} -> ${candidate.trace.join(' -> ')} -> ${candidate.output}`,
    );
  }

  for (const issue of result.issues) lines.push(`ERROR: ${issue}`);
  return lines.join('\n');
}

export function formatComparison(result: ExpressionComparison): string {
  return [
    `Vergleich: ${result.relation}`,
    '',
    formatBracketedValidation(result.left),
    '',
    formatBracketedValidation(result.right),
    '',
    ...result.notes,
  ].join('\n');
}
