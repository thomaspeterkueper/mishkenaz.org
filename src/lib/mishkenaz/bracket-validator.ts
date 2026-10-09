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
  leftMeaning?: string;
  rightMeaning?: string;
  semanticContrast?: string;
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

type LiftedRule = {
  inputs: SemanticType[];
  outputs: SemanticType[];
  note: string;
};

const liftedRules: Record<string, LiftedRule> = {
  '(Ma-Ta)': {
    inputs: ['SYS'],
    outputs: ['REL'],
    note: 'Bindung unter erhaltener Differenz; zweites Systemargument kommt aus Syntax/Kontext.',
  },
  '(Ta--reso)': {
    inputs: ['SYS'],
    outputs: ['REL'],
    note: 'Differenzrelation, die als gekoppelte Relation weitergeführt wird.',
  },
  '(Ref-Log)': {
    inputs: ['TRACE', 'OBS', 'MODEL', 'HIST'],
    outputs: ['MODEL'],
    note: 'Rückbezug plus Modellbildung als gehobener Rekonstruktionsoperator.',
  },
  '(La-Lim)': {
    inputs: ['SYS', 'BOUND'],
    outputs: ['BOUND'],
    note: 'Öffnung eines Raums mit anschließender Schwellenbildung.',
  },
};

function liftedSignature(node: ExpressionNode): LiftedRule | undefined {
  return liftedRules[serialize(node)];
}


const vectorGloss: Record<string, string> = {
  Ma: 'Bindung herstellen',
  Ta: 'Differenz oder Gegenüber markieren',
  Res: 'als Spur oder Residuum fortbestehen',
  Ref: 'rückbeziehen oder rückschauend einordnen',
  Log: 'strukturieren oder zu einem Modell ordnen',
  La: 'einen Raum oder Zugang öffnen',
  Lim: 'eine Schwelle oder Grenze als Ort markieren',
  Rek: 'rückkoppeln oder rekursiv erneut anwenden',
  Ori: 'unter wirksamer Geschichte erneut begegnen',
  '-reso': 'koppeln oder in Wechselwirkung setzen',
  '-kora': 'integrieren oder zu einer Formation zusammenführen',
};

function simpleMeaning(node: ExpressionNode | null): string {
  if (!node) return 'keine belastbare Lesart';
  if (node.kind === 'vector') {
    return vectorGloss[node.vector] ?? vectorSignatures[node.vector]?.note ?? node.vector;
  }

  const left = simpleMeaning(node.left);
  const right = simpleMeaning(node.right);
  return `zuerst ${left}; darauf ${right}`;
}

function knownInterpretation(source: string): string | undefined {
  const compact = source.replace(/\s+/g, '');

  const known: Record<string, string> = {
    '(Ma-Ta)-reso':
      'Zuerst entsteht eine Bindung, in der Differenz als eigener Zwischenzustand erhalten wird; anschließend wird diese differenzierte Bindung in Wechselwirkung gesetzt.',
    'Ma-(Ta-reso)':
      'Beabsichtigte Lesart: Zuerst soll eine Differenz-Wechselwirkungs-Operation gebildet und diese anschließend gebunden werden. Im aktuellen Typsystem ist diese Operatorhebung noch nicht allgemein formalisiert.',
    '(Res-Ref)-Log':
      'Eine Spur wird zuerst ausdrücklich rückbezogen bzw. historisch eingeordnet und erst danach zu einem Modell strukturiert.',
    'Res-(Ref-Log)':
      'Beabsichtigte Lesart: Auf eine Spur wird eine bereits gebündelte Rekonstruktionsoperation aus Rückbezug und Modellbildung angewandt. Dafür ist Operatorhebung erforderlich.',
    'Rek-Ori':
      'Ein rückgekoppelter Zustand oder Prozess begegnet später unter veränderter wirksamer Geschichte erneut.',
    'Ori-Rek':
      'Ein historisch veränderter Zustand oder Prozess wird anschließend selbst rückgekoppelt.',
    '(Rek-Ori)':
      'Ein rückgekoppelter Zustand oder Prozess begegnet später unter veränderter wirksamer Geschichte erneut.',
    '(Ori-Rek)':
      'Ein historisch veränderter Zustand oder Prozess wird anschließend selbst rückgekoppelt.',
  };

  return known[compact];
}

function contrastFor(leftSource: string, rightSource: string): string | undefined {
  const l = leftSource.replace(/\s+/g, '');
  const r = rightSource.replace(/\s+/g, '');

  const key = `${l}||${r}`;
  const reverse = `${r}||${l}`;

  const contrasts: Record<string, string> = {
    '(Ma-Ta)-reso||Ma-(Ta-reso)':
      'Der Unterschied liegt in der Priorität der Zwischenstruktur: links wird Differenz innerhalb einer Bindung etabliert, rechts wäre eine bereits gekoppelte Differenzrelation der Gegenstand der späteren Bindung.',
    '(Res-Ref)-Log||Res-(Ref-Log)':
      'Links ist der Rückbezug ein eigener semantischer Schritt; rechts wird Rückbezug plus Modellbildung als komplexer Operator behandelt. Das kann denselben Endtyp liefern, aber nicht dieselbe Pfadstruktur.',
    '(Rek-Ori)||(Ori-Rek)':
      'Links wirkt Geschichte auf etwas bereits Rückgekoppeltes; rechts wird erst die historisch veränderte Gestalt erzeugt und danach rückgekoppelt.',
  };

  if (contrasts[key]) return contrasts[key];
  if (contrasts[reverse]) return contrasts[reverse];
  return undefined;
}


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
  const lifted = node.kind === 'sequence' ? liftedSignature(node) : undefined;
  if (lifted) {
    const inputs = explicitInputs ?? lifted.inputs;
    const candidates: BracketedCandidate[] = [];
    for (const input of inputs) {
      if (!lifted.inputs.includes(input)) continue;
      for (const output of lifted.outputs) {
        candidates.push({
          input,
          output,
          trace: [`${serialize(node)}:${input}>${output} [operator-lift]`],
        });
      }
    }
    return candidates;
  }

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
  const leftMeaning = knownInterpretation(leftSource) ?? simpleMeaning(left.ast);
  const rightMeaning = knownInterpretation(rightSource) ?? simpleMeaning(right.ast);
  const semanticContrast = contrastFor(leftSource, rightSource);

  if (!left.valid && !right.valid) {
    return { left, right, relation: 'both-invalid', notes: ['Beide Strukturen sind typologisch derzeit ungültig.'], leftMeaning, rightMeaning, semanticContrast };
  }

  if (!left.valid || !right.valid) {
    return { left, right, relation: 'one-invalid', notes: ['Nur eine der beiden Klammerungen ist typologisch zulässig.'], leftMeaning, rightMeaning, semanticContrast };
  }

  const leftAst = serialize(left.ast);
  const rightAst = serialize(right.ast);

  if (leftAst === rightAst) {
    return { left, right, relation: 'same-structure', notes: ['Die Klammerungsstruktur ist identisch.'], leftMeaning, rightMeaning, semanticContrast };
  }

  const leftOutputs = new Set(left.candidates.map(c => c.output));
  const rightOutputs = new Set(right.candidates.map(c => c.output));
  const shared = [...leftOutputs].filter(t => rightOutputs.has(t));

  if (shared.length) {
    notes.push(
      `Beide Strukturen können denselben Endtyp erreichen (${shared.join(', ')}), ` +
      'aber der semantische Zwischenpfad ist verschieden.',
    );
    return { left, right, relation: 'same-output-only', notes, leftMeaning, rightMeaning, semanticContrast };
  }

  notes.push('Die Klammerungen führen zu unterschiedlichen möglichen Endtypen.');
  return { left, right, relation: 'different-output', notes, leftMeaning, rightMeaning, semanticContrast };
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
    'Bedeutungslesart links:',
    result.leftMeaning ?? '—',
    '',
    'Bedeutungslesart rechts:',
    result.rightMeaning ?? '—',
    '',
    ...(result.semanticContrast ? ['Semantischer Unterschied:', result.semanticContrast, ''] : []),
    formatBracketedValidation(result.left),
    '',
    formatBracketedValidation(result.right),
    '',
    ...result.notes,
  ].join('\n');
}
