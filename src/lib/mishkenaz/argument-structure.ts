import type { SemanticType } from './vector-algebra';

export type ArgumentRole =
  | 'left'
  | 'right'
  | 'members'
  | 'source-system'
  | 'target-system'
  | 'reference-a'
  | 'reference-b';

export interface ArgumentSlot {
  role: ArgumentRole;
  types: SemanticType[];
  required: boolean;
  minCount?: number;
  note?: string;
}

export interface ArgumentSchema {
  vector: string;
  slots: ArgumentSlot[];
  result: SemanticType[];
  note: string;
}

export interface SuppliedArgument {
  role: ArgumentRole;
  type: SemanticType;
}

export interface ArgumentIssue {
  severity: 'info' | 'warning' | 'error';
  message: string;
}

export interface ArgumentValidation {
  vector: string;
  valid: boolean;
  complete: boolean;
  issues: ArgumentIssue[];
}

export const argumentSchemas: Record<string, ArgumentSchema> = {
  Ma: {
    vector: 'Ma',
    slots: [
      { role: 'left', types: ['SYS'], required: true },
      { role: 'right', types: ['SYS'], required: true },
    ],
    result: ['REL'],
    note: 'Bindung zwischen zwei unterscheidbaren Formationen.',
  },
  Ta: {
    vector: 'Ta',
    slots: [
      { role: 'left', types: ['SYS'], required: true },
      { role: 'right', types: ['SYS'], required: true },
    ],
    result: ['BOUND', 'REL'],
    note: 'Differenz/Gegenüber zwischen zwei Formationen.',
  },
  Syn: {
    vector: 'Syn',
    slots: [
      { role: 'reference-a', types: ['SYS', 'PROC', 'MODEL'], required: true },
      { role: 'reference-b', types: ['SYS', 'PROC', 'MODEL'], required: true },
    ],
    result: ['REL'],
    note: 'Vergleicht zwei Größen auf Gleichlauf/Übereinstimmung; kein Wahrheitsurteil.',
  },
  Ska: {
    vector: 'Ska',
    slots: [
      { role: 'reference-a', types: ['SYS', 'PROC', 'MODEL'], required: true },
      { role: 'reference-b', types: ['SYS', 'PROC', 'MODEL'], required: true },
    ],
    result: ['REL', 'MODEL'],
    note: 'Skalierungs- oder Mustervergleich zwischen zwei Referenzen.',
  },
  Sym: {
    vector: 'Sym',
    slots: [
      { role: 'reference-a', types: ['SYS'], required: true },
      { role: 'reference-b', types: ['SYS'], required: true },
    ],
    result: ['CONFIG', 'REL'],
    note: 'Symmetrierelation zwischen zwei Formationen.',
  },
  '-reso': {
    vector: '-reso',
    slots: [
      { role: 'left', types: ['SYS', 'REL'], required: true },
      { role: 'right', types: ['SYS', 'REL'], required: true },
    ],
    result: ['REL'],
    note: 'Wechselwirkung/Kopplung; Integration ist nicht impliziert.',
  },
  '-kora': {
    vector: '-kora',
    slots: [
      { role: 'members', types: ['SYS', 'REL'], required: true, minCount: 2, note: 'Mindestens zwei beteiligte Formationen/Relationen.' },
    ],
    result: ['CONFIG', 'SYS'],
    note: 'Integration mehrerer Beteiligter zu Formation/Konfiguration.',
  },
  Ona: {
    vector: 'Ona',
    slots: [
      { role: 'members', types: ['SYS'], required: true, minCount: 1, note: 'Eine oder mehrere als Ganzheit gefasste Formationen.' },
    ],
    result: ['CONFIG'],
    note: 'Ganzheitsbildung; keine Aussage über Wahrheit oder moralische Einheit.',
  },
};

export function validateArguments(
  vector: string,
  supplied: SuppliedArgument[],
): ArgumentValidation {
  const schema = argumentSchemas[vector];
  if (!schema) {
    return {
      vector,
      valid: true,
      complete: true,
      issues: [{ severity: 'info', message: 'Für diesen Vektor ist keine eigene Mehrstellenstruktur definiert.' }],
    };
  }

  const issues: ArgumentIssue[] = [];

  for (const slot of schema.slots) {
    const matches = supplied.filter(arg => arg.role === slot.role);
    const minCount = slot.minCount ?? (slot.required ? 1 : 0);

    if (matches.length < minCount) {
      issues.push({
        severity: 'error',
        message:
          'Rolle ' + slot.role + ' benötigt mindestens ' + minCount +
          ' Argument(e); vorhanden ' + matches.length + '.',
      });
      continue;
    }

    for (const match of matches) {
      if (!slot.types.includes(match.type)) {
        issues.push({
          severity: 'error',
          message: 'Rolle ' + slot.role + ' akzeptiert ' + match.type + ' nicht; erwartet ' + slot.types.join(', ') + '.',
        });
      }
    }
  }

  for (const arg of supplied) {
    if (!schema.slots.some(slot => slot.role === arg.role)) {
      issues.push({ severity: 'warning', message: 'Unbekannte Rolle ' + arg.role + ' für ' + vector + '.' });
    }
  }

  const hasError = issues.some(issue => issue.severity === 'error');
  const complete = schema.slots.filter(slot => slot.required).every(slot => {
    const minCount = slot.minCount ?? 1;
    return supplied.filter(
      arg => arg.role === slot.role && slot.types.includes(arg.type),
    ).length >= minCount;
  });

  return { vector, valid: !hasError, complete, issues };
}

export function formatArgumentValidation(result: ArgumentValidation): string {
  const lines = [
    (result.valid ? 'VALID' : 'INVALID') + ': ' + result.vector,
    'Vollständig: ' + (result.complete ? 'ja' : 'nein'),
  ];
  for (const issue of result.issues) {
    lines.push(issue.severity.toUpperCase() + ': ' + issue.message);
  }
  return lines.join('\n');
}