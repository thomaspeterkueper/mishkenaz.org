# R1-Phonologie: körperbasierter Prüfstand v0.1

> **Quellenkorrektur (16.11.2026, nach Wiederauffinden des Buchmanuskripts):** Die ältere Formulierung unten („noch kein vollständiges R1-Phoneminventar“) berücksichtigt die bereits vorhandene Buchfassung v0.9 nicht. In `thomaspeterkueper/buecherwelten/works/mishkenaz/manuscript/v0.9/07b_anhang_a_c.md` und `07c_anhang_a_c.md` gibt es eine ausdrücklich **freigegebene R1-Ableitungstabelle** mit ungefähr 17 Konsonanten und acht vokalischen Positionen (zusammen etwa 25). Dieser bestehende Konstruktionskanon ist Ausgangspunkt. Offen bleiben unabhängige Phonemkontrastprüfung, Silbenstrukturen, Betonung und die genauere Realisierung mancher Transkriptionszeichen. Die Kandidatentabelle in diesem Papier ist ein ergänzender phonetischer Prüfstand, **kein Ersatz für die Buchliste**. Insbesondere legt das Buch B primär bei Pa (nicht Ma) ab und behandelt Bi als positionalen Ansatz. Siehe außerdem Buchanhang D (G1–G5-Aussprachevarianten).


**Datum:** 16. November 2026  
**Status:** Arbeitshypothesen, kein Beschluss eines vollständigen R1-Phoneminventars.  
**Öffentliche Darstellung:** `src/pages/proto-mishkenaz.astro`.  
**Voraussetzungen:** kanonische zwölf Urgesten, V00 Avi (Schwa-Kern), getrennte Ebenen von Geste, phonetischer Realisierung, Phonem, Morphem, Vektor und historischer Schicht.

## 1. Trennung der Beschreibungsebenen

1. **Artikulatorische Geste:** eine körperliche Bewegung oder Stellung, z. B. bilabialer Verschluss.
2. **Phonetische Realisierung [ ]:** ein hörbarer Lautkandidat, z. B. [m].
3. **Phonem / /**: eine sprachsystematisch kontrastierende Einheit. Hierfür fehlen vielfach Minimalpaare.
4. **Orthographie:** eine historisch oder redaktionell festgelegte Schreibform; die Buchstabenfolge `Avi` ist **kein** phonetisches Transkript.
5. **Morphem/Lexem:** eine bedeutungstragende Form, deren Gestalt historisch variieren kann.
6. **Semantik:** die vom konstruierten System vergebene Richtung, **nicht** eine physiologische Notwendigkeit.

## 2. Kandidaten und offene Parameter

| Geste | Lautkandidat | Artikulation | Offen |
|---|---|---|---|
| Ma | [m] | bilabial, nasal, stimmhaft | Gegenüberstellung zu [p] |
| Pa | [p] | bilabial, oral, stimmlos | Aspiration, Allophone |
| Ta | [t] | koronal, oral, stimmlos | dental vs. alveolar |
| Sa | [s] | vorderer Frikativ | dental/alveolar, Friktion |
| Ku | [k] | dorsal, velarer Verschluss | Palatalisierung / Wortkontext |
| Ah | [a] | offener Vokal | zentrale/vordere Lage |
| Oh | [o] oder [ɔ] | gerundet, mittlere Öffnung | phonemischer Kontrast? |
| Om | [om] als Illustration | Vokal plus bilabialer Nasal | Sequenz statt Einzelphonem |
| Avi | [ə] als Rekonstruktionskern | zentraler Vokal | Orthographie und allophonische Variation |
| Il | [i] und/oder [l] | hoher Vorderzungenvokal bzw. Laterale | keine feststehende Ableitungsregel |
| Bi | [bi] | stimmhafter Bilabialverschluss + Vokal | komplexe Silbe, kein Einzelphonem |
| Auv | [au̯] als Erprobung | vokalische Gleitbewegung mit Rundung | G3-Lautwert, Melodie, Diphthong/Sequenz |

**Nicht festgelegt:** Diese Kandidaten stellen noch kein vollständiges Konsonanten- und Vokal-Inventar dar. Insbesondere dürfen nicht aus einer Handvoll Geste-Laut-Paarungen alle Formen des 42-Vektor-Lexikons abgeleitet werden.

## 3. Minimalpaar- und Merkmalsprüfungen

**Experiment R1-PHON-001 – Ma vs. Pa**  
Konstanter Artikulationsort bilabial, Veränderung von nasaler stimmhafter zu oraler stimmloser Artikulation. Ein möglicher lexikalischer Kontrast ist noch durch gleichartige Silbenkontexte zu prüfen. Differenz umfasst **mehr als ein Merkmal**; daher kein isolierter Test allein der Nasalität.

**Experiment R1-PHON-002 – Pa vs. Ta vs. Ku**  
Bei stimmlosen oralen Plosivkandidaten variiert der Artikulationsort. Akustische Beispiele in vergleichbaren Silbenkontexten anlegen; Orthographie nicht als minimalpaarigen Beleg behandeln.

**Experiment R1-PHON-003 – Avi vs. Auv**  
Avi mit Schwa-Kern ist dokumentiert, Auv als G3-Entwicklung benannt. Ein artikulatorisch möglicher Weg von [ə] zu einer gleitenden gerundeten Realisierung ist **keine** nachgewiesene historische R1→G3-Lautkette. Erst Zielaussprache, Wortposition, Kontaktbedingungen und weitere Wörter ermitteln.

**Experiment R1-PHON-004 – Ta-Stille**  
Für `Ma'Ta'U`, `Om'Ta` und `Pa'Ta` Pausenlänge, Sprechtempo, Silben-/Morphemgrenze und G1/G2/G3-Varianten untersuchen. Der Apostroph ist vorerst ein graphematischer Marker; eine identische akustische Pause über alle Sprecher oder Schichten wird nicht unterstellt.

## 4. Reihenfolge der systematischen Konstruktion

1. Aus vorhandenem R1-Textkorpus Orthographie, Rolle und erwartete Lautfolge erfassen.
2. Artikulationsmöglichkeiten vorläufig als [IPA]-Hypothesen zuweisen.
3. Zulässige Silben- und Wortgrenzen aus Korpusbelegen untersuchen und als Hypothesen formulieren.
4. Minimalpaare und Verteilung von Lautvarianten prüfen; erst dann Phonemkontraste mit /IPA/ festlegen.
5. Betonung, Vokaldauer, Nasalität und Stimmhaftigkeit mit konsistenten Regeln beschreiben.
6. Morphophonologische Alternationen an `-om/-ath/-il/-ira/-kora` testen.
7. Mit dokumentierten Abweichungen in G1–G6 abgleichen; bei fehlender Evidenz keine regionalen Formen erfinden.

## 5. Revisionsregeln

Jede neue Lautregel bekommt eine ID, Version, zugrunde liegende Wortpaare, Anwendungskontext, Gegenbeispiel und Quellenverweis. Der Status wird getrennt geführt (`phonologisch bestätigt innerhalb des Konstruktionskanons`, `Modellhypothese`, `literarischer Beleg`, `ungeprüft`). Änderungen an der Kanon-Orthographie oder Symbolsemantik werden nicht aus Phonetik-Analogien abgeleitet.

**Keine empirische Ableitung von Moral:** Die Körperlichkeit von /m/ begründet nicht von selbst, dass `Ma` Bindung bedeutet. Dieses Bedeutungsfeld ist eine bewusste sprachkünstlerische Setzung.
