import type { SemanticType } from './vector-algebra';
import { vectorSignatures } from './vector-algebra';
import { validateVectorExpression } from './expression-validator';
import {
  validateBracketedExpression,
  formatBracketedValidation,
} from './bracket-validator';
import {
  argumentSchemas,
  validateArguments,
  type ArgumentRole,
  type SuppliedArgument,
} from './argument-structure';

export interface UnifiedAnalysis {
  expression: string;
  valid: boolean;
  mode: 'linear' | 'bracketed';
  typeValid: boolean;
  argumentValid: boolean;
  argumentComplete: boolean;
  vectors: string[];
  outputTypes: SemanticType[];
  issues: string[];
  summary: string[];
}

function extractVectors(expression: string): string[] {
  const source = expression.replace(/[()]/g, ' ');
  const known = Object.keys(vectorSignatures).sort((a, b) => b.length - a.length);
  const found: string[] = [];
  let rest = source;

  for (const vector of known) {
    if (!rest.includes(vector)) continue;
    const count = rest.split(vector).length - 1;
    for (let i = 0; i < count; i += 1) found.push(vector);
    rest = rest.split(vector).join(' ');
  }

  const aliases: Record<string, string> = {
    reso: '-reso', ira: '-ira', vya: '-vya', kora: '-kora', val: '-val', ori: 'Ori',
  };
  const pieces = rest.split(/[^A-Za-zÀ-ž']+/).filter(Boolean);
  for (const piece of pieces) {
    const alias = aliases[piece.toLowerCase()];
    if (alias) found.push(alias);
  }

  return found;
}

function parseArgumentSpec(spec?: string): SuppliedArgument[] {
  if (!spec?.trim()) return [];
  return spec
    .split(',')
    .map(part => part.trim())
    .filter(Boolean)
    .map(part => {
      const [role, type] = part.split(':').map(value => value.trim());
      return { role: role as ArgumentRole, type: type as SemanticType };
    })
    .filter(arg => Boolean(arg.role && arg.type));
}

export function analyzeExpression(
  expression: string,
  argumentSpec?: string,
): UnifiedAnalysis {
  const bracketed = /[()]/.test(expression);
  const vectors = extractVectors(expression);
  const issues: string[] = [];
  const summary: string[] = [];
  const supplied = parseArgumentSpec(argumentSpec);

  let typeValid = false;
  let outputTypes: SemanticType[] = [];

  if (bracketed) {
    const result = validateBracketedExpression(expression);
    typeValid = result.valid;
    outputTypes = [...new Set(result.candidates.map(candidate => candidate.output))];
    issues.push(...result.issues);
    if (result.valid) {
      summary.push('Klammerungsstruktur ist typologisch auswertbar.');
      summary.push(...result.candidates.slice(0, 3).map(candidate =>
        'Typpfad: ' + candidate.input + ' -> ' + candidate.trace.join(' -> ') + ' -> ' + candidate.output
      ));
    }
  } else {
    const result = validateVectorExpression(expression);
    typeValid = result.valid;
    outputTypes = [...new Set(result.candidates.map(candidate => candidate.output))];
    issues.push(...result.issues.map(issue => issue.message));
    if (result.valid) {
      summary.push('Lineare Vektorfolge ist typologisch auswertbar.');
      summary.push(...result.candidates.slice(0, 3).map(candidate =>
        'Typpfad: ' + candidate.input + ' -> ' +
        candidate.transitions.map(step => step.vector + '[' + step.output + ']').join(' -> ')
      ));
    }
  }

  let argumentValid = true;
  let argumentComplete = true;
  const multi = vectors.filter(vector => argumentSchemas[vector]);

  if (multi.length === 0) {
    summary.push('Keine explizite Mehrstellenstruktur erforderlich.');
  } else if (supplied.length === 0) {
    argumentValid = true;
    argumentComplete = false;
    summary.push('Mehrstellenoperator vorhanden: ' + multi.join(', ') + '. Argumente wurden nicht mitgeliefert.');
  } else {
    for (const vector of multi) {
      const validation = validateArguments(vector, supplied);
      argumentValid = argumentValid && validation.valid;
      argumentComplete = argumentComplete && validation.complete;
      for (const issue of validation.issues) {
        issues.push(vector + ': ' + issue.message);
      }
      summary.push(
        vector + ': Argumentstruktur ' +
        (validation.valid ? 'typverträglich' : 'fehlerhaft') +
        ', ' + (validation.complete ? 'vollständig' : 'unvollständig') + '.'
      );
    }
  }

  if (vectors.includes('Syn')) {
    summary.push('Syn markiert Übereinstimmung/Gleichlauf, keinen Wahrheitswert.');
  }
  if (vectors.includes('Res')) {
    summary.push('Res markiert Spur/Residuum, keinen Beweis.');
  }
  if (vectors.includes('-reso') && vectors.includes('-kora')) {
    summary.push('Wechselwirkung (-reso) und Integration (-kora) bleiben getrennte Schritte.');
  }
  if (vectors.includes('Ori')) {
    summary.push('Ori ist historienabhängig; gleicher sichtbarer Zustand garantiert keine identische Fortsetzung.');
  }

  const valid = typeValid && argumentValid;
  return {
    expression,
    valid,
    mode: bracketed ? 'bracketed' : 'linear',
    typeValid,
    argumentValid,
    argumentComplete,
    vectors,
    outputTypes,
    issues,
    summary,
  };
}

export function formatUnifiedAnalysis(result: UnifiedAnalysis): string {
  const lines = [
    (result.valid ? 'VALID' : 'INVALID') + ': ' + result.expression,
    'Modus: ' + result.mode,
    'Typprüfung: ' + (result.typeValid ? 'ok' : 'fehlerhaft'),
    'Argumente: ' +
      (result.argumentValid ? (result.argumentComplete ? 'ok' : 'unvollständig') : 'fehlerhaft'),
    'Vektoren: ' + (result.vectors.join(', ') || '—'),
    'Endtypen: ' + (result.outputTypes.join(', ') || '—'),
    '',
    ...result.summary,
  ];

  if (result.issues.length) {
    lines.push('', 'Hinweise/Fehler:');
    for (const issue of result.issues) lines.push('- ' + issue);
  }

  return lines.join('\n');
}