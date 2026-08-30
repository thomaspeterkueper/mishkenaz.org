# Mishkenaz v0.9 ↔ Website — Kanon-Audit

**Stand:** 2026-08-30  
**Scope:** PR #2 `automation/migrate-full-mishkenaz-content`  
**Referenzstand:** `buecherwelten` PR #2, `work/mishkenaz-intake`, Manuskript v0.9 und lokaler Kernkanon  
**Status:** Merge-Gate — PR #2 darf vor Behebung der Blocker nicht gemergt werden

## 1. Ziel und Source-of-Truth-Regel

PR #2 entstand als Content-Migration des letzten vollständigen Mishkenaz-Stands von `thomas-kueper.de`. Diese historische Quelle stammt im Wesentlichen aus Juni 2026. Seitdem wurde Mishkenaz im Buch-/Authoring-Stand v0.9 substanziell weiterentwickelt.

Für diesen Audit gilt:

1. **Sprachkanon:** der aktuelle v0.9-Kernstand ist Referenz für die Synchronisierung.
2. **Buchdarstellung:** Manuskripttext darf ausführlicher und erzählerischer sein als die Website, aber nicht im Widerspruch zu ihr stehen.
3. **Website:** soll die aktuelle Sprache erklären, nicht den Juni-2026-Zustand konservieren.
4. **Offene Kanonfragen:** werden markiert, nicht stillschweigend redaktionell entschieden.
5. **Cross-World-Fakten:** Figuren-, Orts- oder Universumsfakten werden nicht im Mishkenaz-Repo neu kanonisiert.

## 2. Merge-Blocker

### B1 — `vektoren.astro`: Vektorsystem ist strukturell veraltet

**Schwere:** BLOCKER

Die Seite erklärt zwar bereits korrekt, dass V00 Avi außerhalb der 42 liegt, verwendet danach aber noch die ältere Nummerierung und Oktavstruktur. Dadurch stimmen zahlreiche IDs, Namen und Funktionen nicht mit v0.9 überein.

Aktueller v0.9-Kern:

- V00 Avi — Nullpunkt, außerhalb der 42
- V01–V42 — exakt sieben Oktaven zu je sechs Vektoren
- Oktave 1: V01 Sol · V02 Mira · V03 Sa · V04 Ona · V05 Vya · V06 Saha
- Oktave 2: V07 Nga · V08 Pa · V09 La · V10 Ra · V11 Sa-h · V12 Bi
- Oktave 3: V13 Wi · V14 Ku · V15 Thu · V16 Ma · V17 Ta · V18 Tor
- Oktave 4: V19 Flu · V20 Kin · V21 Syn · V22 Abs · V23 Ref · V24 Lim
- Oktave 5: V25 Tra · V26 Ska · V27 Vol · V28 Res · V29 Avi-Sol · V30 Mö
- Oktave 6: V31 Rek · V32 Log · V33 Sym · V34 Phi · V35 Ona-nO · V36 Ori / -ori
- Oktave 7: V37 -h / ' · V38 -val · V39 -reso · V40 -ira · V41 -vya · V42 -kora

**Konsequenz:** Die Vektorseite darf nicht punktuell nachnummeriert werden. Sie muss aus dem v0.9-Satz vollständig neu aufgebaut bzw. aus kanonischen Daten generiert werden.

### B2 — `grammatik.astro`: Slotmodell enthält Legacy-Bezeichnung

**Schwere:** BLOCKER

Die Website zeigt derzeit:

`(ZEIT) — (NEG) — (INTENS) — STAMM — (COLL) — (ASP) — (EVID)`

v0.9 setzt:

`(ZEIT) — (NEG) — (INTENS) — STAMM — (COLL) — (ASP) — (DEPR)`

`-tum` ist ausdrücklich **kein Evidentialmarker**, sondern Deprivationsmarker für schmerzhaftes Fehlen. Die Website erklärt in der Detailzeile bereits die Deprivationsfunktion, benennt den Slot aber noch als EVID. Diese Inkonsistenz ist zu beheben.

Zusätzlich muss die Seite die v0.9-Regel klarer abbilden:

- jeder Vektor kann direkt als Verbstamm fungieren;
- kein eigener Infinitiv / keine Verbklasse;
- Aspekt ist global, kein Aspekt-auf-Aspekt;
- bewusste Aspektauslassung ist ein markierter Schweigeplatz und kein vierter Aspekt;
- `-tum` steht im DEPR-Slot nach dem Aspekt.

### B3 — `woerterbuch.astro`: Wörterbuch mischt Kanon, Legacy und Interpretation

**Schwere:** BLOCKER

Das Wörterbuch trägt bereits einen Warnhinweis, ist aber als öffentliche Referenz trotzdem zu stark. Es mischt:

- gültige Kernformen,
- alte Vektorbezeichnungen/-nummern,
- freie Bedeutungsverdichtungen,
- Meta-Operatoren als scheinbar eigenständige Lexeme,
- interpretive Komposita.

Beispiel: V38 ist im v0.9-Kern `-val` als Meta-Operator. Ein nacktes `Val` darf nicht ohne Register-/Funktionshinweis als gewöhnlicher Kernvektor erscheinen.

**Konsequenz:** Wörterbuch in mindestens drei Klassen trennen:

1. `KANONISCH — R1/Kernsystem`
2. `REGISTER/GALUT`
3. `INTERPRETATIVE BILDUNG / Arbeitsform`

Langfristig sollen die Einträge aus einer gemeinsamen strukturierten Datenquelle kommen, nicht aus handgeschriebenen HTML-Karten.

### B4 — `rueckuebersetzung.astro`: ältere Operatorsemantik wird als aktuelle Sprache gelesen

**Schwere:** BLOCKER

Die Seite ist grundsätzlich sinnvoll, weil sie die Zerlegungen als Interpretation und nicht als Etymologie kennzeichnet. Mehrere Formeln stammen aber aus einem älteren Operatorstand.

Besonders zu prüfen/korrigieren:

- `Ori` ist v0.9 V36: zyklische Wiederkehr / Revalidierung; **Mö** ist V30: Möbius-Knick / Umkehrung. Ältere Gleichsetzungen von `-ori` mit „Möbius“ sind daher irreführend.
- `-kora` ist v0.9 V42 Integration/Zusammenführung. Formulierungen müssen Ta/Grenze semantisch korrekt behandeln und dürfen nicht gleichzeitig eine Form mit `Ta` zeigen und behaupten, „Ta fehlt“.
- freie Apostroph-Prägungen dürfen nicht wie spontan produktive Komposita behandelt werden. v0.9 definiert Apostroph-Kombinationen als historisch geprägte, nicht frei erfindbare Einheiten.

**Konsequenz:** Rückübersetzungen als ausdrücklich essayistische/interpretative Schicht erhalten, aber gegen v0.9 neu validieren.

## 3. Hohe Priorität, aber kein Merge-Blocker allein

### H1 — `index.astro`: Galut und Register sauber trennen

Die Übersicht führt G1–G6 derzeit in einer gemeinsamen Tabelle. v0.9 trennt jedoch:

- G1–G5 = historische/kulturelle Galut-Kontaktlinien;
- R1, R2, R4 = Register/Klassifikationen, nicht chronologische Stufen;
- R4 Tessán = transversale Registerlinie;
- G6 Galut-Endia = transversale synthetische Kontaktlage, **keine sechste historische Station nach G5**.

Die Website sollte dies visuell ebenfalls trennen.

### H2 — `index.astro`: Kombinationsnotation angleichen

Für die Ta-Konstante ist v0.9 die kanonische Prägung `Ma'U` versus `Ma'Ta'U`. Varianten mit Bindestrich dürfen nicht unbeabsichtigt dieselbe morphologische Aussage suggerieren: Apostroph = Prägung, Bindestrich = transparente Sequenz.

### H3 — `proto-mishkenaz.astro`: artikulatorische Präzision

Die Seite ist im Kern bereits nahe an v0.9. Zu vereinheitlichen sind insbesondere:

- Sa: `Frikativ, Zunge/Zahndamm` statt unscharfer Zahn-Lippen-Beschreibung;
- Ma: bilabial-nasal / Lippenverschluss;
- Pa: P/B als stimmlos/stimmhaftes Plosivpaar; B stammt ausdrücklich von Pa, nicht Ma;
- Avi: Schwa als eigenständiger Reduktionsvokal/Nullpunkt;
- Auv: getrennt von Avi; G3-Merger nur als lokale Galut-Entwicklung.

### H4 — `docs/coherence/mishkenaz-theologie-2026.md`: IDs sind Legacy

Der Kohärenzcheck ist in seinen philosophischen Fragen weiterhin wertvoll, verwendet aber die alte Vektornummerierung. Unter v0.9 gilt:

- `Ona-nO` = V35, nicht V42;
- `-kora` = V42, nicht V40;
- `Ori / -ori` = V36;
- V40 = `-ira`.

Der Text muss auf die neue Nummerierung umgestellt werden, ohne die offenen Kanonfragen vorwegzunehmen.

## 4. Offene Kanonentscheidungen — nicht automatisch ändern

### K1 — Perspektive der Resonanzaspekte

Zu entscheiden bleibt, ob `-om / -ath / -il` primär

- den vom Sprecher wahrgenommenen/gesetzten relationalen Zustand markieren, oder
- eine ontische Aussage über die Wirklichkeit selbst treffen.

Bis zur bewussten Entscheidung keine semantische Uminterpretation.

### K2 — `Ona-nO` (V35)

v0.9 führt `Ona-nO` als Ur-Einheit/Rückkehr und als „letztes Heimkommen“. Zu klären bleibt, ob dies

- ontologische Selbstauflösung,
- gefährlicher Grenzvektor totaler Integration,
- historische Mishkenaz-Lehre,
- oder eine andere bewusst definierte Bedeutung

ist.

Bis dahin keine philosophische Glättung.

## 5. Architekturmaßnahme gegen erneuten Drift

Nach der inhaltlichen Synchronisierung soll der Website-Code eine maschinenlesbare Kernquelle erhalten, z. B. unter `src/data/mishkenaz/`:

- `vectors.ts` / `vectors.json`
- `grammar.ts`
- `registers.ts`
- `lexicon.ts`

Seiten rendern daraus, statt IDs und Kernbedeutungen mehrfach von Hand zu pflegen.

Zusätzlich soll ein Build-/CI-Check mindestens folgende Invarianten prüfen:

- V00 existiert genau einmal und zählt nicht zu V01–V42;
- V01–V42 sind vollständig und ohne doppelte IDs vorhanden;
- sieben Oktaven enthalten jeweils sechs Vektoren;
- `Ona-nO === V35`;
- `Ori === V36`;
- `-kora === V42`;
- Aspekte sind exakt `-om`, `-ath`, `-il`;
- `-tum` ist `DEPR`, nicht `EVID` oder `ASP`.

## 6. Umsetzungsreihenfolge für PR #2

1. Kohärenznotiz auf v0.9-IDs korrigieren.
2. Gemeinsame v0.9-Kerndaten im Website-Repo anlegen.
3. `vektoren.astro` daraus neu rendern.
4. `grammatik.astro` auf v0.9 synchronisieren.
5. `proto-mishkenaz.astro` terminologisch präzisieren.
6. Wörterbuch klassifizieren und auf Kerndaten umstellen.
7. Rückübersetzungen gegen neue Operator-/Prägungsregeln prüfen.
8. Übersicht: G1–G5 von R4/G6 trennen.
9. CI-Kanoncheck hinzufügen.
10. Build, interne Links und inhaltliche Invarianten validieren.

Erst danach kann PR #2 als Merge-Kandidat bewertet werden.
