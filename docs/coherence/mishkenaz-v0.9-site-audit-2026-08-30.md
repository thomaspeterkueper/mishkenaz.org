# Mishkenaz v0.9 — Website-Audit

**Stand:** 2026-08-30  
**Scope:** PR #2 `automation/migrate-full-mishkenaz-content`  
**Referenzstand:** `buecherwelten` PR #2, `work/mishkenaz-intake`, Manuskript v0.9 und lokaler Kernkanon  
**Status:** **Audit abgeschlossen — technische, redaktionelle und semantische Kernfragen geklärt**

## 1. Ausgangslage

Der Juni-2026-Webstand war technisch weitgehend vorhanden, enthielt aber veraltete Vektormappings, Legacy-Grammatik und uneinheitliche Begriffe. Der Audit hat deshalb nicht nur geprüft, ob alle Seiten migriert wurden, sondern ob die öffentlich sichtbare Website mit dem v0.9-Sprachkanon übereinstimmt.

## 2. Behobene Kernprobleme

### Vektorsystem

**Behoben.** Die alte Website-Nummerierung wurde durch eine strukturierte v0.9-Kernquelle ersetzt.

Aktuell gilt:

- V00 Avi liegt außerhalb der 42 Vektoren;
- V01–V42 bilden exakt sieben Oktaven zu je sechs Vektoren;
- kritische Zuordnungen wie V11 Sa-h, V19 Flu, V35 Ona-nO, V36 Ori/-ori und V37–V42 sind synchronisiert.

Die Vektorseite rendert aus `src/data/mishkenaz/core.ts`.

### Grammatik

**Behoben.** Der Legacy-Slot `(EVID)` wurde durch `(DEPR)` ersetzt. `-tum` ist ausdrücklich Deprivationsmarker und weder Evidential noch Aspekt.

Zusätzlich sind dokumentiert:

- jeder Vektor kann direkt als Verbstamm fungieren;
- keine separate Verbklasse / kein Infinitiv;
- Aspekt ist global und singular;
- bewusste Aspektauslassung ist markierter Schweigeplatz, kein vierter Aspekt;
- Apostroph = Prägung, Bindestrich = transparente Sequenz, Leerzeichen = Syntax.

### Wörterbuch und Rückübersetzungen

**Behoben.** Das Wörterbuch trennt Vektoren/Nullpunkt, Grammatikformen und kanonische Ausdrücke. Rückübersetzungen sind ausdrücklich Interpretation und nicht Etymologie oder automatische Kanonisierung.

Korrigiert wurden unter anderem:

- V30 Mö = Möbius-Knick / Umkehrung;
- V36 Ori / -ori = zyklische Wiederkehr / Revalidierung;
- V42 -kora = Integration / Zusammenführung;
- Apostroph-Prägungen sind nicht frei produktiv.

## 3. Weitere synchronisierte Bereiche

### Phonologie / Urgesten

Die zwölf Urgesten und die Ableitung der phonologischen Grundschicht sind als eigene Datenquelle ausgelagert. `Avi` und `Auv` bleiben semantisch getrennt; der G3-Merger ist als historische Sonderentwicklung gefasst.

### Galut und Register

Die Übersicht trennt G1–G5 als historische/kulturelle Galut-Kontaktlinien von R1/R2/R4 sowie G6 als Register bzw. transversale Schichten.

## 4. Am 30. August 2026 geschlossene semantische Kernfragen

### K1 — Resonanzaspekte

**Entschieden: relational-epistemisch.**

`-om / -ath / -il` sind keine objektiven Wahrheitsmarker über Zustände der Welt. Sie markieren die Passung zwischen Aussage/Handlung und Situation, wie sie im Sprechen wahrgenommen und mitgeteilt wird.

Konsequenzen:

- Zwei Sprecher können denselben Vorgang ehrlich verschieden aspektieren.
- Die Aspekte bleiben an Körper, Wahrnehmung, Kontext und Relation gebunden und sind daher nicht beliebig.
- Lüge entsteht, wenn ein Sprecher wissentlich gegen die eigene wahrgenommene relationale Passung aspektiert.
- Die operative Auslassung verweigert die Benennung dieser Passung und bleibt ein markierter Schweigeplatz.

### K2 — Ona-nO (V35)

**Entschieden: strukturelle Schwelle möglicher Rückkehr.**

V35 trägt jetzt die Kernsemantik **„Ur-Einheit / mögliche Rückkehr“**. `Ona-nO` markiert die Position, an der Rückkehr oder Integration möglich wird; es behauptet weder vollzogene Selbstauflösung noch verpflichtende ontologische Rückkehr.

Ob sich die Spirale schließt oder eine neue Windung beginnt, liegt außerhalb der Grammatik. V36 `Ori / -ori` nimmt diese Offenheit als Wiederkehr/Revalidierung auf und bildet die Brücke zur Metaebene.

Spätere Galut- oder Kommentarschichten dürfen `Ona-nO` ontologischer deuten; solche Lesarten sind historische Interpretation und nicht R1-Kern.

## 5. Architektur gegen erneuten Drift

Neu bzw. kanonisch genutzt:

- `src/data/mishkenaz/core.ts`
- `src/data/mishkenaz/phonology.ts`
- `src/data/mishkenaz/lexicon.ts`
- `scripts/check-mishkenaz-canon.mjs`

Der CI-Kanoncheck prüft unter anderem:

- V00 außerhalb der 42;
- exakt V01–V42;
- sieben Oktaven × sechs Vektoren;
- die kritischen v0.9-ID-Zuordnungen;
- exakt drei Aspekte `-om`, `-ath`, `-il`;
- DEPR statt EVID;
- `aspectReading = relational-epistemic`;
- `onaNoReading = structural-threshold`;
- Abwesenheit zentraler Legacy- und inzwischen verworfener Semantikmuster auf den öffentlichen Seiten.

## 6. Visualisierungen als eigener Inhaltstyp

Mit `src/data/mishkenaz/visuals.ts` und `src/components/mishkenaz/VisualFigure.astro` ist ein eigener kuratierter Visualisierungs-Layer eingeführt. Bilder werden nicht automatisch als Kanon behandelt, sondern erhalten Typ und Status.

Statusstufen:

- `canonical` — verbindliche Darstellung;
- `work-near` — werknahe Visualisierung, ohne exakte Rekonstruktionsbehauptung;
- `experimental` — explorative Studie.

Die neue Route `/mishkenaz/welt` bündelt Räume und Visualisierungen. Die erste eingetragene Raumstudie ist die Meditationskammer (`VIS-MISH-0001`) mit Status `work-near`. Solange das Binärasset noch nicht im Repository liegt, rendert die Komponente einen kontrollierten Platzhalter statt eines gebrochenen Bildes.

Siehe `docs/coherence/mishkenaz-visualisations.md`.

## 7. Routenprüfung

Die historischen Top-Level-Routen `/vektoren`, `/grammatik`, `/proto-mishkenaz`, `/woerterbuch` und `/rueckuebersetzung` enthalten keine eigenen Sprachkopien. Sie rendern die jeweiligen `/mishkenaz/...`-Seiten und bilden damit keine zweite Source of Truth.

Auch `/` rendert die kanonische Mishkenaz-Übersicht. Die Übersicht verweist zusätzlich auf `/mishkenaz/welt`.

## 8. Ergebnis

Der Juni-2026-Migrationsstand ist nicht mehr die semantische Referenz. PR #2 enthält eine auf v0.9 synchronisierte, strukturierte und gegen zentrale Driftfehler abgesicherte Mishkenaz-Website.

Die zwei früher offenen semantischen Kernfragen sind geschlossen und als CI-Invarianten verankert. Visualisierungen sind als eigener, statusgeführter Inhaltstyp eingeführt, sodass Bildsprache und Sprachkanon künftig kontrolliert nebeneinander wachsen können.
