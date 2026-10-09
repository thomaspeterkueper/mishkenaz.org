export type SemanticType =
  | 'POT'
  | 'SYS'
  | 'REL'
  | 'PROC'
  | 'PATH'
  | 'SPACE'
  | 'BOUND'
  | 'TRACE'
  | 'OBS'
  | 'INFO'
  | 'MODEL'
  | 'MSG'
  | 'HIST'
  | 'CONFIG';

export type StepKind =
  | 'conversion'
  | 'core'
  | 'relation'
  | 'model'
  | 'meta'
  | 'aspect';

export type PathRelation =
  | 'identical'
  | 'equivalent'
  | 'complementary'
  | 'distinct';

export type Compatibility =
  | 'direct'
  | 'operator-lift'
  | 'binding-sensitive'
  | 'undefined';

export interface VectorSignature {
  id: string;
  form: string;
  inputs: SemanticType[];
  outputs: SemanticType[];
  arity?: 1 | 2 | 'many';
  kind: StepKind;
  note?: string;
}

export interface PathStep {
  vector: string;
  kind: StepKind;
  input: SemanticType | SemanticType[];
  output: SemanticType | SemanticType[];
  explicit: boolean;
  note?: string;
}

export interface SemanticPath {
  input: SemanticType | SemanticType[];
  conversions: PathStep[];
  coreOps: PathStep[];
  relationalOps: PathStep[];
  modelOps: PathStep[];
  metaOps: PathStep[];
  aspect?: '-om' | '-ath' | '-il' | null;
  provenance?: string | null;
  history?: string | null;
  output: SemanticType | SemanticType[];
}

export const vectorSignatures: Record<string, VectorSignature> = {
  Sol: { id: 'V01', form: 'Sol', inputs: ['POT', 'SYS'], outputs: ['PROC'], kind: 'core', note: 'Impuls / Initiation' },
  Mira: { id: 'V02', form: 'Mira', inputs: ['PROC'], outputs: ['PROC'], kind: 'core', note: 'Fluss / Bewegung' },
  Sa: { id: 'V03', form: 'Sa', inputs: ['SYS', 'REL'], outputs: ['BOUND', 'SYS'], kind: 'relation', note: 'Bruch / Trennung' },
  Ona: { id: 'V04', form: 'Ona', inputs: ['SYS'], outputs: ['CONFIG'], arity: 'many', kind: 'relation', note: 'Ganzheit / Formation' },
  Vya: { id: 'V05', form: 'Vya', inputs: ['SYS'], outputs: ['PROC'], kind: 'core', note: 'Richtung / Wille / Absicht' },
  Saha: { id: 'V06', form: 'Saha', inputs: ['SYS', 'TRACE'], outputs: ['OBS'], kind: 'conversion', note: 'Wahrnehmung' },
  Nga: { id: 'V07', form: 'Nga', inputs: ['SYS'], outputs: ['MSG', 'PROC'], kind: 'core', note: 'Ruf / Kontaktimpuls' },
  Pa: { id: 'V08', form: 'Pa', inputs: ['MSG', 'PROC'], outputs: ['TRACE', 'MSG'], kind: 'conversion', note: 'Echo / Antwort' },
  La: { id: 'V09', form: 'La', inputs: ['SYS', 'BOUND'], outputs: ['SPACE'], kind: 'relation', note: 'Öffnung / Raum' },
  Ra: { id: 'V10', form: 'Ra', inputs: ['PROC', 'PATH'], outputs: ['PROC', 'PATH'], kind: 'core', note: 'Fortlauf / Strom' },
  'Sa-h': { id: 'V11', form: 'Sa-h', inputs: ['SYS', 'CONFIG'], outputs: ['PROC'], kind: 'core', note: 'Auflösung / Entropisierung' },
  Bi: { id: 'V12', form: 'Bi', inputs: ['SYS', 'INFO'], outputs: ['REL'], kind: 'relation', note: 'Quelle / Herkunft' },
  Wi: { id: 'V13', form: 'Wi', inputs: ['SYS'], outputs: ['CONFIG'], kind: 'core', note: 'Kälte / fehlende Wärme; nicht Negation' },
  Ku: { id: 'V14', form: 'Ku', inputs: ['SYS', 'REL'], outputs: ['REL'], kind: 'relation', note: 'Mangel / Sog' },
  Thu: { id: 'V15', form: 'Thu', inputs: ['SPACE', 'SYS'], outputs: ['SPACE', 'SYS'], kind: 'core', note: 'Ausdehnung' },
  Ma: { id: 'V16', form: 'Ma', inputs: ['SYS'], outputs: ['REL'], arity: 2, kind: 'relation', note: 'Bindung' },
  Ta: { id: 'V17', form: 'Ta', inputs: ['SYS'], outputs: ['BOUND', 'REL'], arity: 2, kind: 'relation', note: 'Differenz / Gegenüber' },
  Tor: { id: 'V18', form: 'Tor', inputs: ['REL', 'PROC'], outputs: ['REL', 'PROC'], kind: 'relation', note: 'Torsion / Spannung' },
  Flu: { id: 'V19', form: 'Flu', inputs: ['SYS', 'PROC'], outputs: ['PROC', 'SYS'], kind: 'core', note: 'Verwandlung' },
  Kin: { id: 'V20', form: 'Kin', inputs: ['SYS'], outputs: ['PATH'], kind: 'core', note: 'Weg / Verlauf' },
  Syn: { id: 'V21', form: 'Syn', inputs: ['SYS', 'PROC', 'MODEL'], outputs: ['REL'], arity: 2, kind: 'relation', note: 'Übereinstimmung / Gleichlauf; nicht Wahrheit' },
  Abs: { id: 'V22', form: 'Abs', inputs: ['INFO', 'TRACE'], outputs: ['INFO', 'SYS'], kind: 'conversion', note: 'Aufnahme / Absorption' },
  Ref: { id: 'V23', form: 'Ref', inputs: ['TRACE', 'OBS', 'MODEL', 'HIST'], outputs: ['INFO', 'MODEL'], kind: 'relation', note: 'Rückbezug / Rückschau' },
  Lim: { id: 'V24', form: 'Lim', inputs: ['SPACE', 'PROC'], outputs: ['BOUND'], kind: 'relation', note: 'Schwelle / Grenze als Ort' },
  Tra: { id: 'V25', form: 'Tra', inputs: ['INFO', 'MODEL', 'MSG'], outputs: ['MSG'], kind: 'conversion', note: 'Weitergabe / Transmission' },
  Ska: { id: 'V26', form: 'Ska', inputs: ['SYS', 'PROC', 'MODEL'], outputs: ['REL', 'MODEL'], arity: 2, kind: 'relation', note: 'Skalierung / Vergleich' },
  Vol: { id: 'V27', form: 'Vol', inputs: ['SYS', 'PROC'], outputs: ['CONFIG'], kind: 'core', note: 'Instabilität / Veränderlichkeit' },
  Res: { id: 'V28', form: 'Res', inputs: ['PROC', 'SYS'], outputs: ['TRACE'], kind: 'conversion', note: 'Residuum / Spur' },
  'Avi-Sol': { id: 'V29', form: 'Avi-Sol', inputs: ['POT'], outputs: ['PROC', 'SYS'], kind: 'conversion', note: 'Auftreten / Aktualisierung' },
  Mö: { id: 'V30', form: 'Mö', inputs: ['CONFIG', 'REL'], outputs: ['CONFIG', 'REL'], kind: 'core', note: 'Innen-Außen-Umkehrung' },
  Rek: { id: 'V31', form: 'Rek', inputs: ['PROC', 'REL', 'SYS'], outputs: ['PROC', 'REL', 'SYS'], kind: 'core', note: 'Rekursion / Rückkopplung' },
  Log: { id: 'V32', form: 'Log', inputs: ['INFO', 'TRACE', 'OBS'], outputs: ['MODEL'], kind: 'model', note: 'Strukturierung / Modellbildung' },
  Sym: { id: 'V33', form: 'Sym', inputs: ['SYS'], outputs: ['CONFIG', 'REL'], arity: 2, kind: 'relation', note: 'Symmetrie' },
  Phi: { id: 'V34', form: 'Phi', inputs: ['CONFIG', 'REL'], outputs: ['CONFIG'], kind: 'relation', note: 'Maß / Harmonie' },
  'Ona-nO': { id: 'V35', form: 'Ona-nO', inputs: ['CONFIG', 'HIST'], outputs: ['BOUND'], kind: 'relation', note: 'Schwelle möglicher Integration / Wiederannäherung' },
  Ori: { id: 'V36', form: 'Ori', inputs: ['HIST', 'SYS', 'PROC'], outputs: ['HIST', 'SYS', 'PROC'], kind: 'core', note: 'Historisch abhängige Wiederbegegnung' },
  "-h/'": { id: 'V37', form: "-h/'", inputs: ['SYS', 'REL', 'CONFIG'], outputs: ['PROC', 'CONFIG'], kind: 'meta', note: 'Auflösung / Loslassen' },
  '-val': { id: 'V38', form: '-val', inputs: ['PROC', 'REL', 'CONFIG'], outputs: ['SYS', 'CONFIG'], kind: 'meta', note: 'Emergenz / neues Erscheinen' },
  '-reso': { id: 'V39', form: '-reso', inputs: ['SYS', 'REL'], outputs: ['REL'], arity: 2, kind: 'meta', note: 'Kopplung / Wechselwirkung' },
  '-ira': { id: 'V40', form: '-ira', inputs: ['REL', 'SPACE'], outputs: ['REL', 'SPACE'], kind: 'meta', note: 'Attraktion / Verdichtung' },
  '-vya': { id: 'V41', form: '-vya', inputs: ['REL', 'SPACE'], outputs: ['REL', 'SPACE'], kind: 'meta', note: 'Distanzierung / Repulsion' },
  '-kora': { id: 'V42', form: '-kora', inputs: ['SYS', 'REL'], outputs: ['CONFIG', 'SYS'], arity: 'many', kind: 'meta', note: 'Integration / Zusammenführung' },
};

export function canConsume(
  signature: VectorSignature,
  type: SemanticType,
): boolean {
  return signature.inputs.includes(type);
}

export function possibleOutputs(
  vector: keyof typeof vectorSignatures,
  input: SemanticType,
): SemanticType[] {
  const signature = vectorSignatures[vector];
  if (!signature || !canConsume(signature, input)) return [];
  return signature.outputs;
}

export function classifyDirectPair(
  first: keyof typeof vectorSignatures,
  second: keyof typeof vectorSignatures,
): Compatibility {
  const a = vectorSignatures[first];
  const b = vectorSignatures[second];
  if (!a || !b) return 'undefined';

  const direct = a.outputs.some(output => b.inputs.includes(output));
  return direct ? 'direct' : 'undefined';
}

export function sameOutputType(a: SemanticPath, b: SemanticPath): boolean {
  const normalize = (v: SemanticType | SemanticType[]) =>
    [...(Array.isArray(v) ? v : [v])].sort().join('|');

  return normalize(a.output) === normalize(b.output);
}

export function pathRelation(a: SemanticPath, b: SemanticPath): PathRelation {
  if (!sameOutputType(a, b)) return 'distinct';

  const sameHistory = (a.history ?? null) === (b.history ?? null);
  const sameProvenance = (a.provenance ?? null) === (b.provenance ?? null);
  const sameAspect = (a.aspect ?? null) === (b.aspect ?? null);

  const flatten = (p: SemanticPath) => [
    ...p.conversions,
    ...p.coreOps,
    ...p.relationalOps,
    ...p.modelOps,
    ...p.metaOps,
  ].map(step => step.vector).join('>');

  if (
    flatten(a) === flatten(b) &&
    sameHistory &&
    sameProvenance &&
    sameAspect
  ) {
    return 'identical';
  }

  if (sameHistory && sameProvenance && sameAspect) {
    return 'equivalent';
  }

  if (sameAspect) return 'complementary';
  return 'distinct';
}
