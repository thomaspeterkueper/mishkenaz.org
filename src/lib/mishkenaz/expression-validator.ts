import {
  type SemanticType,
  type VectorSignature,
  vectorSignatures,
} from './vector-algebra';

export type ValidationSeverity = 'info' | 'warning' | 'error';

export interface ValidationIssue {
  severity: ValidationSeverity;
  code:
    | 'UNKNOWN_VECTOR'
    | 'TYPE_MISMATCH'
    | 'ARITY_CONTEXT'
    | 'AMBIGUOUS_INPUT'
    | 'AMBIGUOUS_OUTPUT'
    | 'BINDING_SENSITIVE'
    | 'HISTORY_REQUIRED';
  message: string;
  token?: string;
  position?: number;
}

export interface TypeTransition {
  vector: string;
  input: SemanticType;
  output: SemanticType;
}

export interface CandidatePath {
  input: SemanticType;
  output: SemanticType;
  transitions: TypeTransition[];
}

export interface ValidationResult {
  expression: string;
  tokens: string[];
  valid: boolean;
  candidates: CandidatePath[];
  issues: ValidationIssue[];
}

const aliases: Record<string, string> = {
  reso: '-reso',
  ira: '-ira',
  vya: '-vya',
  kora: '-kora',
  val: '-val',
  ori: 'Ori',
};

const compoundForms = new Set([
  'Avi-Sol',
  'Sa-h',
  'Ona-nO',
]);

function canonicalToken(raw: string): string | null {
  if (vectorSignatures[raw]) return raw;
  if (aliases[raw]) return aliases[raw];

  const lower = raw.toLowerCase();
  const byForm = Object.keys(vectorSignatures).find(
    key => key.toLowerCase() === lower,
  );
  if (byForm) return byForm;

  const alias = Object.entries(aliases).find(
    ([key]) => key.toLowerCase() === lower,
  );
  return alias?.[1] ?? null;
}

/**
 * Parses the current transparent hyphen notation.
 *
 * Known historical/lexicalized compounds such as Avi-Sol, Sa-h and Ona-nO
 * are preserved as one vector. Meta-operators may be written either with
 * their canonical leading hyphen (-reso) or as a segment (reso) inside a
 * larger expression.
 */
export function tokenizeVectorExpression(expression: string): {
  tokens: string[];
  issues: ValidationIssue[];
} {
  const source = expression.trim();
  if (!source) {
    return {
      tokens: [],
      issues: [{
        severity: 'error',
        code: 'UNKNOWN_VECTOR',
        message: 'Leerer Vektorausdruck.',
      }],
    };
  }

  const raw = source.split('-').filter(Boolean);
  const tokens: string[] = [];
  const issues: ValidationIssue[] = [];

  for (let i = 0; i < raw.length; i += 1) {
    const pair = i + 1 < raw.length ? `${raw[i]}-${raw[i + 1]}` : null;

    if (pair && compoundForms.has(pair) && vectorSignatures[pair]) {
      tokens.push(pair);
      i += 1;
      continue;
    }

    const token = canonicalToken(raw[i]);
    if (!token) {
      issues.push({
        severity: 'error',
        code: 'UNKNOWN_VECTOR',
        message: `Unbekannter Vektor oder Operator: "${raw[i]}".`,
        token: raw[i],
        position: i,
      });
      continue;
    }

    tokens.push(token);
  }

  return { tokens, issues };
}

function transitionsFor(
  signature: VectorSignature,
  input: SemanticType,
): SemanticType[] {
  if (!signature.inputs.includes(input)) return [];
  return signature.outputs;
}

function dedupeCandidates(candidates: CandidatePath[]): CandidatePath[] {
  const seen = new Set<string>();

  return candidates.filter(candidate => {
    const key = [
      candidate.input,
      candidate.output,
      candidate.transitions
        .map(step => `${step.vector}:${step.input}>${step.output}`)
        .join('|'),
    ].join('::');

    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function validateVectorTokens(
  tokens: string[],
  explicitInput?: SemanticType,
  historyAvailable = false,
): Omit<ValidationResult, 'expression' | 'tokens'> {
  const issues: ValidationIssue[] = [];

  if (tokens.length === 0) {
    return { valid: false, candidates: [], issues };
  }

  const first = vectorSignatures[tokens[0]];
  if (!first) {
    issues.push({
      severity: 'error',
      code: 'UNKNOWN_VECTOR',
      message: `Unbekannter Startvektor: "${tokens[0]}".`,
      token: tokens[0],
      position: 0,
    });
    return { valid: false, candidates: [], issues };
  }

  const initialInputs = explicitInput ? [explicitInput] : first.inputs;

  if (explicitInput && !first.inputs.includes(explicitInput)) {
    issues.push({
      severity: 'error',
      code: 'TYPE_MISMATCH',
      message:
        `${tokens[0]} akzeptiert ${explicitInput} nicht als Eingangstyp. ` +
        `Erwartet: ${first.inputs.join(', ')}.`,
      token: tokens[0],
      position: 0,
    });
    return { valid: false, candidates: [], issues };
  }

  if (!explicitInput && initialInputs.length > 1) {
    issues.push({
      severity: 'info',
      code: 'AMBIGUOUS_INPUT',
      message:
        `Der Eingangstyp ist nicht angegeben; ${tokens[0]} erlaubt ` +
        `${initialInputs.join(', ')}. Alle typkompatiblen Pfade werden geprüft.`,
      token: tokens[0],
      position: 0,
    });
  }

  let candidates: CandidatePath[] = [];

  for (const input of initialInputs) {
    for (const output of transitionsFor(first, input)) {
      candidates.push({
        input,
        output,
        transitions: [{
          vector: tokens[0],
          input,
          output,
        }],
      });
    }
  }

  if (first.arity && first.arity !== 1) {
    issues.push({
      severity: 'warning',
      code: 'ARITY_CONTEXT',
      message:
        `${tokens[0]} hat Arität ${first.arity}; der lineare Validator prüft ` +
        'nur den resultierenden semantischen Typ, nicht die Vollständigkeit aller Argumente.',
      token: tokens[0],
      position: 0,
    });
  }

  for (let position = 1; position < tokens.length; position += 1) {
    const vector = tokens[position];
    const signature = vectorSignatures[vector];

    if (!signature) {
      issues.push({
        severity: 'error',
        code: 'UNKNOWN_VECTOR',
        message: `Unbekannter Vektor: "${vector}".`,
        token: vector,
        position,
      });
      candidates = [];
      break;
    }

    const next: CandidatePath[] = [];

    for (const candidate of candidates) {
      const outputs = transitionsFor(signature, candidate.output);

      for (const output of outputs) {
        next.push({
          ...candidate,
          output,
          transitions: [
            ...candidate.transitions,
            {
              vector,
              input: candidate.output,
              output,
            },
          ],
        });
      }
    }

    if (signature.arity && signature.arity !== 1) {
      issues.push({
        severity: 'warning',
        code: 'ARITY_CONTEXT',
        message:
          `${vector} hat Arität ${signature.arity}; zusätzliche relationale Argumente ` +
          'müssen aus Syntax oder Kontext stammen.',
        token: vector,
        position,
      });
    }

    if (next.length === 0) {
      const priorTypes = [...new Set(candidates.map(c => c.output))];
      issues.push({
        severity: 'error',
        code: 'TYPE_MISMATCH',
        message:
          `Typbruch vor ${vector}: vorhanden ${priorTypes.join(', ') || 'kein Typ'}, ` +
          `erwartet ${signature.inputs.join(', ')}.`,
        token: vector,
        position,
      });
      candidates = [];
      break;
    }

    candidates = dedupeCandidates(next);
  }

  const historyDependent = tokens.filter(
    token => vectorSignatures[token]?.requiresHistory,
  );
  if (historyDependent.length && !historyAvailable) {
    issues.push({
      severity: 'error',
      code: 'HISTORY_REQUIRED',
      message:
        'Historischer Kontext erforderlich für: ' +
        [...new Set(historyDependent)].join(', ') + '.',
    });
  }

  const outputTypes = [...new Set(candidates.map(candidate => candidate.output))];
  if (outputTypes.length > 1) {
    issues.push({
      severity: 'info',
      code: 'AMBIGUOUS_OUTPUT',
      message:
        `Der Ausdruck besitzt mehrere typkompatible Endtypen: ${outputTypes.join(', ')}.`,
    });
  }

  const bindingSensitivePairs = new Set([
    'Ma>Ta',
    'Ta>-reso',
    'Ma>-reso',
    'Rek>Ori',
    'Ori>Rek',
    'La>Lim',
    'Lim>Ta',
  ]);

  for (let i = 0; i < tokens.length - 1; i += 1) {
    const key = `${tokens[i]}>${tokens[i + 1]}`;
    if (bindingSensitivePairs.has(key)) {
      issues.push({
        severity: 'warning',
        code: 'BINDING_SENSITIVE',
        message:
          `Die Folge ${tokens[i]}-${tokens[i + 1]} ist bindungssensitiv; ` +
          'eine alternative Klammerung kann die Bedeutung ändern.',
        token: tokens[i + 1],
        position: i + 1,
      });
    }
  }

  return {
    valid: candidates.length > 0 && !issues.some(issue => issue.severity === 'error'),
    candidates: dedupeCandidates(candidates),
    issues,
  };
}

export function validateVectorExpression(
  expression: string,
  explicitInput?: SemanticType,
  historyAvailable = false,
): ValidationResult {
  const parsed = tokenizeVectorExpression(expression);

  if (parsed.issues.some(issue => issue.severity === 'error')) {
    return {
      expression,
      tokens: parsed.tokens,
      valid: false,
      candidates: [],
      issues: parsed.issues,
    };
  }

  const result = validateVectorTokens(parsed.tokens, explicitInput, historyAvailable);

  return {
    expression,
    tokens: parsed.tokens,
    valid: result.valid,
    candidates: result.candidates,
    issues: [...parsed.issues, ...result.issues],
  };
}

export function formatValidation(result: ValidationResult): string {
  const lines = [
    `${result.valid ? 'VALID' : 'INVALID'}: ${result.expression}`,
    `Tokens: ${result.tokens.join(' -> ') || '(none)'}`,
  ];

  for (const candidate of result.candidates) {
    lines.push(
      `Path: ${candidate.input} -> ` +
      candidate.transitions
        .map(step => `${step.vector}[${step.output}]`)
        .join(' -> '),
    );
  }

  for (const issue of result.issues) {
    lines.push(`${issue.severity.toUpperCase()} ${issue.code}: ${issue.message}`);
  }

  return lines.join('\n');
}
