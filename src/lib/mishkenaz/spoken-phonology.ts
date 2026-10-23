export type PhonologyEvidence = 'A' | 'B' | 'C' | 'M';
export type BoundaryStrength = 'G0' | 'G1' | 'G2' | 'G3' | 'G4';
export type PronunciationClass = 'productive' | 'lexicalized' | 'name' | 'metalabel';

export interface PronunciationTestCase {
  expression: string;
  pronunciationClass: PronunciationClass;
  evidence: PhonologyEvidence;
  morphologicalAnalysis: string;
  prosodicGrouping: string;
  syllableCandidate?: string | null;
  boundary: BoundaryStrength;
  decision: string;
  cautions: string[];
}

export const boundaryGloss: Record<BoundaryStrength, string> = {
  G0: 'innerhalb einer Silbe',
  G1: 'enge phonologische Wortbindung',
  G2: 'Morphemgrenze innerhalb einer prosodischen Gruppe',
  G3: 'Grenze prosodischer Gruppen',
  G4: 'Klauselgrenze',
};

export const pronunciationCorpus: PronunciationTestCase[] = [
  {
    expression: 'Saha-om',
    pronunciationClass: 'productive',
    evidence: 'B',
    morphologicalAnalysis: 'Saha + -om',
    prosodicGrouping: '[Saha-om]',
    syllableCandidate: 'Sa.ha.om',
    boundary: 'G2',
    decision: 'Keine obligatorische Pause oder Vokalverschmelzung; -om bleibt an den Stamm gebunden.',
    cautions: ['Status von h im ältesten R1 bleibt offen.'],
  },
  {
    expression: 'wi-Saha-om',
    pronunciationClass: 'productive',
    evidence: 'B',
    morphologicalAnalysis: 'wi- + Saha + -om',
    prosodicGrouping: '[wi-Saha-om]',
    syllableCandidate: 'wi.Sa.ha.om',
    boundary: 'G2',
    decision: 'Negation und Aspekt bilden mit dem Stamm eine Prädikatsgruppe.',
    cautions: ['Status von w im ältesten R1 bleibt offen.'],
  },
  {
    expression: 'Res-Ref-Log-il',
    pronunciationClass: 'metalabel',
    evidence: 'M',
    morphologicalAnalysis: 'Res + Ref + Log + -il',
    prosodicGrouping: '[Res-Ref-Log-il]',
    syllableCandidate: null,
    boundary: 'G2',
    decision: 'Semantische Grenzstruktur ist analysierbar; segmentale R1-Aussprache bleibt offen.',
    cautions: ['Moderne Inventarlabels sind keine Proto-/R1-Lautbelege.'],
  },
  {
    expression: "bi'sa-i",
    pronunciationClass: 'productive',
    evidence: 'B',
    morphologicalAnalysis: "bi' + sa + -i",
    prosodicGrouping: "[bi'‿sa-i]",
    syllableCandidate: 'bi.sa.i',
    boundary: 'G1',
    decision: 'Rollenmarker bindet eng an den Referenten; a+i bleibt vorläufig Hiatus.',
    cautions: ['Kein obligatorischer Glottisverschluss postuliert.'],
  },
  {
    expression: "la'ta-i",
    pronunciationClass: 'productive',
    evidence: 'B',
    morphologicalAnalysis: "la' + ta + -i",
    prosodicGrouping: "[la'‿ta-i]",
    syllableCandidate: 'la.ta.i',
    boundary: 'G1',
    decision: 'Rollenmarker bindet eng an den Referenten; a+i bleibt vorläufig Hiatus.',
    cautions: ['Status von l in der ältesten Schicht bleibt offen.'],
  },
  {
    expression: "bi'Daria",
    pronunciationClass: 'name',
    evidence: 'C',
    morphologicalAnalysis: "bi' + NAME(Daria)",
    prosodicGrouping: "[bi'‿Daria]",
    syllableCandidate: null,
    boundary: 'G1',
    decision: 'Name bildet eigene phonologische Domäne und behält seinen lexikalischen Akzent.',
    cautions: ['Keine semantische Zerlegung des Namens.', 'Keine R1-Akzentposition ohne festgelegte Namenslesung.'],
  },
  {
    expression: "la'Dvārakā",
    pronunciationClass: 'name',
    evidence: 'C',
    morphologicalAnalysis: "la' + NAME(Dvārakā)",
    prosodicGrouping: "[la'‿Dvārakā]",
    syllableCandidate: null,
    boundary: 'G1',
    decision: 'Namensidentität vor automatischer Reparatur; Kontakt-, Lehn- und Erbform werden getrennt.',
    cautions: ['Keine voreilige Epenthese.', 'Komplexer Anlaut und Vokallänge überschreiten das konservative Kernmodell.'],
  },
  {
    expression: "Ma'Ta'U-reso",
    pronunciationClass: 'lexicalized',
    evidence: 'C',
    morphologicalAnalysis: "Ma'Ta'U + -reso",
    prosodicGrouping: "[Ma'Ta'U-reso]",
    syllableCandidate: null,
    boundary: 'G2',
    decision: 'Historisch gebundene Einheit wird prosodisch enger behandelt als der produktive Meta-Operator.',
    cautions: ['Apostroph ist kein allgemeines Operatorhebungszeichen.', 'Konkrete historische Aussprache bleibt offen.'],
  },
];

export const spokenR1Rules = [
  'Rollenmarker sind proclitic-like und akzentuell schwächer als die folgende Referenzphrase.',
  'Produktive Aspekte und Affixe sind innerhalb der Prädikatsgruppe gebunden.',
  'Morphemgrenzen sind nicht automatisch Silbengrenzen.',
  'Hiatus bleibt vorläufig erhalten; keine automatische Gleitlautbildung oder Vokaltilgung.',
  'Operatorhebung kann prosodische Bindung verändern, bleibt aber analytisch markiert.',
  'Namen bilden eigene phonologische Domänen und werden nicht semantisch zerlegt.',
  'Moderne Vektorlabels sind keine Evidenz für die älteste R1-Aussprache.',
] as const;

export function pronunciationClassLabel(value: PronunciationClass): string {
  return {
    productive: 'produktive R1-Morphologie',
    lexicalized: 'lexikalisiert/historisch gebunden',
    name: 'Name/Fremdreferenz',
    metalabel: 'metasprachliches Inventarlabel',
  }[value];
}