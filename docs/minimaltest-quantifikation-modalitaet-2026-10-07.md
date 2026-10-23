# Mishkenaz — Minimaltest: Anzahl offener Fortsetzungen

**Stand:** 2026-10-07  
**Status:** Arbeitsaudit / keine neue Morphologie kanonisiert

## Testfrage

Kann R1 folgende fünf Aussagen sauber unterscheiden?

1. Viele Wege sind offen.
2. Weniger Wege sind offen.
3. Nur noch ein Weg ist offen.
4. Kein Weg ist offen.
5. Ich weiß nicht, wie viele Wege offen sind.

## Vorbefund

Der Test zeigt, dass **Modalität** und **Quantifikation** getrennt werden müssen.

„Offen“ beschreibt den Status einer Fortsetzung bzw. eines Möglichkeitsraums.  
„Viele / weniger / genau eine / keine“ beschreibt dessen Umfang oder Kardinalität.

Daraus folgt:

```
OFFENHEIT != ANZAHL OFFENER FORTSETZUNGEN
```

und insbesondere:

```
INTENS != QUANTIFIKATION
```

Der offene `INTENS`-Slot sollte daher nicht vorschnell als Operator „mehr/weniger Möglichkeiten“ besetzt werden.

## 1. Viele Wege sind offen

Vorhandene Mittel:
- `La`: Öffnung / Raum
- distributive bzw. kollektive Numerusbildung ist teilweise vorhanden
- `-il`: relationale Offenheit des Vollzugs, aber kein objektiver Modaloperator

Was fehlt:
- ein belastbarer Quantor „viele“.

**Status: C**

Mehrzahl ist nicht dasselbe wie „viele“.

## 2. Weniger Wege sind offen

Hier braucht R1 zusätzlich einen **Vergleich zwischen zwei Umfängen**:

```
|M_2| < |M_1|
```

Vorhandene Vektoren wie `Ska` (Skalierung) können Vergleich konzeptuell stützen, kodieren aber noch kein grammatisches „weniger“.

**Status: C — klare Quantifikations-/Komparativlücke**

## 3. Nur noch ein Weg ist offen

Eine bloße Singularform genügt nicht. „Ein Weg“ kann schlicht einen einzelnen Weg referieren; „nur ein Weg“ behauptet zusätzlich, dass alle Alternativen ausgeschlossen sind.

Semantisch:

```
|M| = 1
```

Dafür fehlt ein Exklusiv-/Genauigkeitsoperator.

**Status: C**

## 4. Kein Weg ist offen

Hier ist R1 am stärksten.

Die reguläre Negation `wi-` kann das Nichtvorliegen eines offenen Weges ausdrücken, sofern „offener Weg“ selbst als Prädikation sauber gebildet wird.

Aber auch hier ist eine Skopusfrage zu beachten:

```
kein [offener Weg]
```

ist nicht dasselbe wie:

```
[nicht offen] ein Weg
```

**Status: B/C**

Negation existiert, Quantor-Skopus muss geklärt werden.

## 5. Ich weiß nicht, wie viele Wege offen sind

Dieser Satz ist absichtlich schwieriger:

- Er sagt nichts darüber, wie viele Fortsetzungen wirklich existieren.
- Er sagt etwas über den Erkenntniszustand des Sprechers.
- Er enthält eine eingebettete Quantifikationsfrage.

Das bestätigt:

```
ONTOLOGISCHE OFFENHEIT != EPISTEMISCHES NICHTWISSEN
```

R1 besitzt derzeit kein eigenes kanonisches Verb „wissen“ und keine ausgearbeitete eingebettete Quantifikationsfrage.

**Status: C — produktive epistemische Lücke**

## Gesamtergebnis

| Aussage | Status | Fehlende Funktion |
|---|---|---|
| viele Wege offen | C | Quantor „viele“ |
| weniger Wege offen | C | Komparative Quantifikation |
| genau ein Weg offen | C | Exklusivität / exakte Kardinalität |
| kein Weg offen | B/C | Quantorskopus über Negation |
| Anzahl unbekannt | C | Wissen + eingebettete Quantifikationsfrage |

## Konsequenz

Die modale Architektur selbst ist nicht das Hauptproblem. Es fehlt vielmehr eine **Quantifikationsschicht**.

Vorläufige Achsen:

```
MODALITÄT: möglich / offen / eingeschränkt / bestimmt
QUANTIFIKATION: wie viele Fortsetzungen?
EPISTEMIK: was weiß der Sprecher darüber?
```

Damit wird auch „Bestimmung“ präziser:

```
Bestimmung ≠ geringe Anzahl
Bestimmung ≠ Singularität als Grammatikform
Bestimmung ≈ keine relevante alternative Fortsetzung mehr realisierbar
```

## Neue Entwicklungsregel

Der `INTENS`-Slot bleibt ein Grad-/Intensitätskandidat und wird nicht mit Quantifikation belastet.

Für Quantifikation ist zunächst zu prüfen:

1. ob `-mira/-ona` über Personen hinaus produktiv auf beliebige referenzielle Gruppen anwendbar ist;
2. ob `Ska` historisch eine Vergleichs-/Gradkonstruktion motivieren kann;
3. ob R1 kardinale Zahlwörter oder Quantoren bereits in älteren Quellen besitzt;
4. wie Negationsskopus und Exklusivität syntaktisch ausgedrückt werden;
5. ob spätere Galut-Schichten Quantoren grammatikalisieren, während R1 lexikalisch bleibt.
