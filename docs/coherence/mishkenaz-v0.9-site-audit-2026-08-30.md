# Mishkenaz v0.9 ↔ Website — Kanon-Audit

**Stand:** 2026-08-30  
**Scope:** PR #2 `automation/migrate-full-mishkenaz-content`  
**Referenzstand:** `buecherwelten` PR #2, `work/mishkenaz-intake`, Manuskript v0.9 und lokaler Kernkanon  
**Status:** **Audit abgeschlossen — technische und redaktionelle Merge-Blocker behoben**

## 1. Ausgangslage

PR #2 begann als Migration des letzten vollständigen Mishkenaz-Webstands aus `thomas-kueper.de`. Diese Quelle stammte im Wesentlichen aus Juni 2026. Der inzwischen entwickelte Buch-/Authoring-Stand v0.9 hatte jedoch zentrale Teile des Sprachsystems verändert bzw. präzisiert.

Der Audit hat deshalb nicht nur geprüft, ob alle Seiten migriert wurden, sondern ob die Website den aktuellen v0.9-Kern korrekt wiedergibt.

## 2. Behobene Blocker

### Vektorsystem

**Behoben.** Die alte Website-Nummerierung wurde nicht punktuell repariert, sondern durch eine strukturierte v0.9-Kernquelle ersetzt.

Aktuell gilt:

- V00 Avi = Nullpunkt außerhalb der 42;
- V01–V42 = sieben Oktaven zu je sechs Vektoren;
- V11 Sa-h;
- V19 Flu;
- V35 Ona-nO;
- V36 Ori / -ori;
- V37 -h / ';
- V38 -val;
- V39 -reso;
- V40 -ira;
- V41 -vya;
- V42 -kora.

Die Vektorseite rendert aus `src/data/mishkenaz/core.ts`.

### Grammatik

**Behoben.** Der Legacy-Slot `(EVID)` wurde durch `(DEPR)` ersetzt. `-tum` ist ausdrücklich Deprivationsmarker und weder Evidential noch Aspekt.

Zusätzlich sind nun dokumentiert:

- jeder Vektor kann direkt als Verbstamm fungieren;
- keine separate Verbklasse / kein Infinitiv;
- Aspekt ist global und singular;
- bewusste Aspektauslassung ist markierter Schweigeplatz, kein vierter Aspekt;
- Apostroph = Prägung, Bindestrich = transparente Sequenz, Leerzeichen = Syntax.

### Wörterbuch

**Behoben.** Das frühere Mischformat aus Legacy-Formen, Kernvektoren, Grammatik und freien Deutungen wurde ersetzt. Das Wörterbuch trennt jetzt:

1. Vektoren und Nullpunkt;
2. Grammatikformen;
3. kanonische Ausdrücke.

Die Einträge stammen aus `src/data/mishkenaz/core.ts` und `src/data/mishkenaz/lexicon.ts`.

### Rückübersetzungen

**Behoben.** Rückübersetzungen sind jetzt ausdrücklich als Interpretation und nicht als Etymologie oder automatische Kanonisierung gekennzeichnet.

Korrigiert wurden insbesondere:

- V30 Mö = Möbius-Knick / Umkehrung;
- V36 Ori / -ori = zyklische Wiederkehr / Revalidierung;
- V42 -kora = Integration / Zusammenführung;
- `Ma'Ta'U-kora` enthält Ta weiterhin ausdrücklich und darf nicht zugleich als „Ta fehlt“ erklärt werden;
- neue Apostroph-Prägungen werden nicht als frei produktiv behandelt.

## 3. Weitere synchronisierte Bereiche

### Urgesten / Phonologie

`src/data/mishkenaz/phonology.ts` ist die strukturierte v0.9-Referenz für die zwölf Urgesten und das R1-Phoneminventar.

Unter anderem:

- B stammt von Pa, nicht Ma oder Bi;
- Avi ist Schwa / eigenständiger Nullpunktvokal;
- Auv bleibt davon getrennt;
- der Avi→Auv-Merger ist eine lokale G3-Entwicklung;
- Om ist als Urgeste eine untrennbare Übergangsgeste.

### Galut und Register

Die Übersicht trennt nun:

- G1–G5 als historische/kulturelle Galut-Kontaktlinien;
- R1, R2 und R4 als Register/Klassifikationen;
- R4 Tessán als transversale Registerlinie;
- G6 Galut-Endia als transversale synthetische Kontaktlage, nicht als sechste historische Station.

### Kohärenzcheck

`docs/coherence/mishkenaz-theologie-2026.md` wurde auf die v0.9-Nummerierung gebracht. Die philosophische Prüfung bleibt erhalten, ohne offene Fragen redaktionell zu entscheiden.

## 4. Architektur gegen erneuten Drift

Neu angelegt:

- `src/data/mishkenaz/core.ts`
- `src/data/mishkenaz/phonology.ts`
- `src/data/mishkenaz/lexicon.ts`
- `scripts/check-mishkenaz-canon.mjs`

Der CI-Kanoncheck prüft unter anderem:

- V00 genau einmal und außerhalb der 42;
- V01–V42 vollständig und eindeutig;
- sieben Oktaven mit je sechs Vektoren;
- die kritischen v0.9-ID-Zuordnungen;
- exakt drei Aspekte `-om`, `-ath`, `-il`;
- DEPR statt EVID;
- Abwesenheit zentraler Legacy-Mappings in den öffentlichen Mishkenaz-Seiten.

Der Kanoncheck läuft vor dem Astro-Build in GitHub Actions.

## 5. Routenprüfung

Die historischen Top-Level-Routen `/vektoren`, `/grammatik`, `/proto-mishkenaz`, `/woerterbuch` und `/rueckuebersetzung` enthalten keine eigenen Sprachkopien. Sie rendern die jeweiligen `/mishkenaz/...`-Seiten und bilden damit keine zweite Source of Truth.

Auch `/` rendert die kanonische Mishkenaz-Übersicht.

## 6. Noch offene Kanonentscheidungen

Diese zwei Punkte wurden bewusst **nicht** durch den Audit entschieden:

### K1 — Resonanzaspekte

Sind `-om / -ath / -il` primär

- vom Sprecher wahrgenommene/gesetzte relationale Zustände,
- oder ontische Aussagen über die Wirklichkeit selbst?

Der aktuelle v0.9-Sprachstand bleibt bestehen, bis diese philosophische Ebene bewusst entschieden wird.

### K2 — Ona-nO (V35)

Aktueller v0.9-Kern: **Ur-Einheit / Rückkehr; „das letzte Heimkommen“**.

Offen bleibt, ob dies später genauer als

- ontologische Rückkehr/Selbstauflösung,
- Grenzfall totaler Integration,
- historische Mishkenaz-Lehre,
- oder anders

bestimmt wird.

Diese Fragen sind keine technischen Merge-Blocker, solange die Website keine stärkere Aussage als den aktuellen v0.9-Kern behauptet.

## 7. Validierung

GitHub Actions führt nun vor jedem Build den Kanoncheck aus. Der erste vollständige Lauf mit der neuen Struktur (`Astro Build` Run #50) war erfolgreich.

**Ergebnis:** Der Juni-2026-Migrationsstand ist nicht mehr die semantische Referenz. PR #2 enthält jetzt eine auf v0.9 synchronisierte, strukturierte und gegen zentrale Driftfehler abgesicherte Mishkenaz-Website.
