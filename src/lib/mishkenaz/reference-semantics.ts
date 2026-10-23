import type { SemanticType } from './vector-algebra';

export type ReferentKind =
  | 'proper-name'
  | 'common-noun'
  | 'place-name'
  | 'pronoun'
  | 'group'
  | 'abstract';

export interface Referent {
  id: string;
  surface: string;
  kind: ReferentKind;
  discourseKnown?: boolean;
  lexicalClass?: string | null;
}

export interface TypedReferent {
  referent: Referent;
  semanticTypes: SemanticType[];
  reason: string;
}

export interface PredicateRoleRequirement {
  role: string;
  allowedTypes: SemanticType[];
}

export const roleMarkers = {
  "bi'": 'source',
  "la'": 'target',
} as const;

export function createReferent(
  surface: string,
  kind: ReferentKind,
  id?: string,
): Referent {
  const normalized = surface
    .normalize('NFKD')
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();

  return {
    id: id ?? normalized || 'referent',
    surface,
    kind,
  };
}

/**
 * Assigns semantic types for one occurrence, not permanently to the lexeme.
 * A name remains a discourse referent; its semantic type depends on the current predicate.
 */
export function typeReferentForRole(
  referent: Referent,
  requirement: PredicateRoleRequirement,
): TypedReferent {
  const contextualDefaults: SemanticType[] = (() => {
    switch (referent.kind) {
      case 'proper-name':
      case 'pronoun':
      case 'common-noun':
      case 'group':
        return ['SYS'];
      case 'place-name':
        return ['SYS', 'SPACE'];
      case 'abstract':
        return ['SYS', 'REL', 'MODEL'];
      default:
        return [];
    }
  })();

  const semanticTypes = contextualDefaults.filter(type =>
    requirement.allowedTypes.includes(type),
  );

  return {
    referent,
    semanticTypes,
    reason: semanticTypes.length
      ? 'Kontextuelle Typisierung für Rolle ' + requirement.role + '.'
      : 'Keine kompatible Typisierung für Rolle ' + requirement.role + '.',
  };
}

export function formatTypedReferent(result: TypedReferent): string {
  return [
    result.referent.surface + ' [' + result.referent.kind + ']',
    'Referent: ' + result.referent.id,
    'Kontexttypen: ' + (result.semanticTypes.join(', ') || 'keine'),
    result.reason,
  ].join('\n');
}