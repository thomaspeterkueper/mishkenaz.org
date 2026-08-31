export type LexiconEntry = {
  form: string;
  german: string;
  english?: string;
  scope: 'R1' | 'GRAMMAR' | 'G1' | 'LITURGY';
  note?: string;
};

export const canonicalLexicon: LexiconEntry[] = [
  { form: "Saha-om bi'sa-i la'ta-i", german: 'Ich sehe dich — stimmig.', scope: 'R1', note: 'Beispielsatz für Handlung → Quelle → Ziel' },
  { form: "Ma'Ta'U-om", german: 'Bindung mit Grenze — stimmig.', scope: 'R1', note: 'Ta-Konstante; kanonische Apostroph-Prägung' },
  { form: "Ma'U-ath", german: 'Bindung ohne Grenze — dissonant.', scope: 'R1', note: 'Verschmelzung / Übergriff' },
  { form: 'Ku-ref-om', german: 'heiliger Zweifel — stimmig.', scope: 'R1', note: 'produktiver Zweifel' },
  { form: 'Ori-ku-il', german: 'Suchen nach dem Fehlenden.', scope: 'R1', note: 'Wiederkehr + Suche im suchenden Aspekt' },
  { form: 'Essem-om', german: 'Sein — stimmig.', scope: 'R1' },
  { form: 'Wi-essem-ath', german: 'Nicht-Sein — dissonant.', scope: 'R1' },
  { form: 'Ra-La-om', german: 'Fluss durch das Tor — stimmig.', scope: 'R1', note: 'Dvārakā-Ursprungsform von Ma\'yan' },
  { form: "Ma'yan", german: 'Quelle.', scope: 'G1', note: "Galut-Bri'ith; Wort für den Ursprung" },
  { form: 'Ori-Kol', german: 'spiralförmige Rückkehr des Klangs.', scope: 'R1', note: 'philosophisches Prinzip' },
  { form: 'Anāhata-Kol', german: 'der ungeschlagene Klang.', scope: 'LITURGY', note: 'kultureller Vergleichs-/Traditionsbezug' },
  { form: 'Galut-Kol', german: 'der Klang des Exils.', scope: 'LITURGY' },
  { form: 'Bi-La-Ori', german: 'ewiges Haus.', scope: 'R1' },
  { form: 'Ma-Ra-Ori', german: 'ewige Liebe.', scope: 'R1', note: 'Volksformel für dauerhafte Bindung' },
  { form: 'Avi-Avi', german: 'die Ur-Leere.', scope: 'LITURGY', note: 'verdoppelt / heilig' },
  { form: 'Ori-Ori', german: 'die Ur-Wiederkehr.', scope: 'LITURGY', note: 'verdoppelt / heilig' },
];

export const grammarLexicon: LexiconEntry[] = [
  { form: '-om', german: 'konvergent; stimmig / angekommen', scope: 'GRAMMAR', note: 'Resonanzaspekt' },
  { form: '-ath', german: 'divergent; dissonant / nicht stimmig', scope: 'GRAMMAR', note: 'Resonanzaspekt' },
  { form: '-il', german: 'suchend; offen / unterwegs', scope: 'GRAMMAR', note: 'Resonanzaspekt' },
  { form: '-tum', german: 'schmerzhaftes Fehlen / Vermissen', scope: 'GRAMMAR', note: 'DEPR, kein Aspekt' },
  { form: "bi'", german: 'Quelle / von', scope: 'GRAMMAR', note: 'Rollenpartikel' },
  { form: "la'", german: 'Ziel / zu', scope: 'GRAMMAR', note: 'Rollenpartikel' },
  { form: 'sa-i', german: 'ich', scope: 'GRAMMAR', note: '1. Person Singular' },
  { form: 'ta-i', german: 'du', scope: 'GRAMMAR', note: '2. Person Singular' },
  { form: 'ku-i', german: 'er / sie / es', scope: 'GRAMMAR', note: '3. Person Singular' },
  { form: 'sa-mira', german: 'wir — distributiv', scope: 'GRAMMAR' },
  { form: 'sa-ona', german: 'wir — als Einheit', scope: 'GRAMMAR' },
  { form: 'wi-', german: 'einfache Verneinung', scope: 'GRAMMAR' },
  { form: 'avi-', german: 'vergangen', scope: 'GRAMMAR', note: 'optionaler Zeitpartikel' },
  { form: 'sol-', german: 'gegenwärtig', scope: 'GRAMMAR', note: 'optionaler Zeitpartikel' },
  { form: 'val-', german: 'zukünftig', scope: 'GRAMMAR', note: 'optionaler Zeitpartikel; verwandt mit V38 -val' },
  { form: 'ori-', german: 'ewig / zyklisch', scope: 'GRAMMAR', note: 'optionaler Zeitpartikel; Ori V36' },
];
