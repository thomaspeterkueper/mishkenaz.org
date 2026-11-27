# Diachrone Sprachwerkstatt – Prüfmatrix R1 und Galut (16.11.2026)

**Arbeitsstand.** Kein Beschluss neuer Lautgesetze, neuer Vektoren oder neuer historischer Daten. Zugehörige öffentliche Einführung: `src/pages/sprachgeschichte.astro`.

## Grundsatz

R1 ist eine fiktionale Rekonstruktion; G1 bis G6 sind Kontakt- und Traditionsschichten, **keine automatisch chronologische Kette**. Sprachkontakt kann neben Vererbung wirken. Für eine konkrete Lautentwicklung muss zunächst bekannt sein, welches Phonem im Ausgangssystem überhaupt vorliegt. Orthographische Formen wie `Avi` beweisen ihre Aussprache nicht.

## Prüfdatenmodell für einzelne Entwicklungslinien

| Feld | Inhalt |
|---|---|
| ID | z. B. `MISH-DIA-001` |
| Einheit | stabile Vektor-ID, Morphem oder belegtes Wort |
| Ausgang | R1-Form mit Aussprache (IPA, wenn abgesichert) |
| Zielschicht | G1…G6 oder dokumentierte Mischschicht |
| Ziel | Ziel-Form mit Aussprache, Quelle und Register |
| Mechanismus | Lautwandel, Analogie, Entlehnung, Bedeutungswandel, grammatische Neubewertung, poetische Variation |
| Bedingung | Lautumgebung, Betonung, Position, Sprechregister, Kontaktlage |
| Beleg | Quelltext/Manuskript, Quelle in Website, historischer fiktionaler Kontext |
| Status | `kanonisch dokumentiert`, `literarisch belegt`, `Hypothese`, `offen`, `verworfen` |
| Widerlegung | Gegenbeispiel oder beobachtbarer Widerspruch im eigenen Sprachkorpus |
| Abhängigkeiten | benötigtes R1-Inventar, Silbenbau, Schrift-Aussprache-Zuordnung |

## Erste Datensätze

### MISH-DIA-001 – Avi / Auv (G3)

- Einheit: `V00 Avi`, ursprünglich als Schwa-Raum `ə` beschrieben.
- Ziel: G3-Klang- und Liedtradition `Auv`; Werkbeleg `Auv-Pa-il`.
- Vorhandene Aussage: `src/pages/proto-mishkenaz.astro` nennt `Avi → Auv` als kanonisch beschriebene G3-Verschiebung.
- **Status:** beschriebene Verwandtschaft; **noch keine hergeleitete Lautregel**.
- Vor dem Beschluss nötig: Ausgangsaussprache von `Avi` im Wortkontext, Zielaussprache von `Auv`, bedingende Umgebung, zwei weitere Anwendungsfälle oder definierte lexikalische Ausnahme.

### MISH-DIA-002 – -ira / -vama

- Ausgang: historische Galut-Verwendung `-ira` für Attraktor/Anziehung.
- Aktuelle Kanonsprache: V40 `-ira` als Selbstreflexion; Anziehung über `Vya-Ma` und `-vama`.
- Korpuspaare: historische `Sa-Ta-Ira`, kanonische `Sa-Ta-vama`.
- **Status:** dokumentierte Bedeutungs- und Normierungsschichten, **nicht** `ira → vama` als phonetisches Gesetz.
- Erforderlich: Datierung der literarischen Belege, getrennte Erklärung von Bedeutungswandel und kanonischer Neubildung.

### MISH-DIA-003 – Ta-Stille

- Einheiten: `Ma'Ta'U`, `Pa'Ta`, `Om'Ta`.
- Vorhandene Aussage: kurze Stille macht die Grenze/Gegenüberstellung in der Kanonsprache hörbar.
- **Status:** grammatisch-symbolische Konvention dokumentiert; historische akustische Realisierung je Galut offen.
- Erforderlich: Prosodie, Apostroph-Konvention, mögliche Abschwächung und funktionale Alternativen, ohne willkürlich gleichlautende Formen für jede Schicht zu erfinden.

## Fragen für jede Galut-Schicht

| Schicht | Kontext, bereits beschrieben | Phonologische Hypothesen, ausdrücklich unbeschlossen |
|---|---|---|
| G1 | Levante, Liturgie, Schutzformeln | Sind tradierte Formen konservativer als Alltagssprache? Wie wirken Rezitationsnormen? |
| G2 | Arabische Wüste, Kürze, Körperwissen | Welche Reduktionsprozesse oder Kontaktphänomene lassen sich an mindestens zwei Wortpaaren zeigen? |
| G3 | Keltische Inseln, Gesang | Sind Veränderungen wie `Avi/Auv` durch Melodie, Reim, Lautwandel oder Lexikalisierung zu erklären? |
| G4 | Kaschmir/Sanskrit-Kontakt, Systematisierung | Welche Formen sind echte morphologische Neuerungen statt philosophische Neudeutungen? |
| G5 | Ostasiatischer Raum, Tonalität | Ist lexikalischer Ton, Intonation oder musikalische Tonhöhenführung gemeint? Ohne Belege keine Tonphoneme festlegen. |
| G6 | Digitale Welt, Zugangs- und Medienwandel | Welche Register und Formen von Normierung, Kürzung oder schriftlicher Neuschöpfung werden im Korpus greifbar? |

## Ablauf der nächsten fachlichen Runde

1. R1-Phoneminventar mit Statusfeldern entwerfen; offene Segmente nicht erraten.
2. Silbenstrukturen, Akzent und Morphemgrenzen definieren.
3. Vorhandene G1/G2/G3-Textbelege sammeln und nach Quelle/Zeit/Register dokumentieren.
4. An `Avi/Auv` eine bedingte Regel samt Gegenbeispielen durchspielen.
5. Erst dann jeweils ein konsistentes, widerspruchsfähiges Profil für G4–G6 ausarbeiten.

**Evidenzgrenze:** Moderne historische Linguistik liefert allgemeine Prüfmethoden und Vergleichsmechanismen; sie bestätigt nicht die fiktionale Geschichte von Mishkenaz oder die spezifischen Formen.
