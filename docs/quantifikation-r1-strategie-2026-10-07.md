# Mishkenaz — Minimale Quantifikationsstrategie für R1

**Stand:** 2026-10-07  
**Status:** Arbeitsmodell; keine neuen Quantormorpheme kanonisiert

## 1. Ausgangslage

Für ältere R1-Quellen wurden keine belastbaren kanonischen Zahlwörter oder Quantoren wie „viele“, „wenige“, „nur“, „genau“ oder „weniger“ gefunden.

Daher werden keine neuen Formen erfunden.

Stattdessen wird geprüft, wie weit drei bereits vorhandene Ressourcen tragen:

- Singular vs. distributive/kollektive Gruppierung;
- `Ska` als Skalierungs-/Vergleichsvektor;
- `wi-` als Negation.

## 2. Produktivität von -mira / -ona

Bisher sind `-mira` und `-ona` sicher an Pronomen dokumentiert:

```
sa-mira   wir — distributiv
sa-ona    wir — als Einheit
```

Arbeitshypothese:

> Der vorhandene KOLLEKTIV-Slot kann prinzipiell auch auf andere referenzielle Ausdrücke ausgedehnt werden.

Dann bedeutet:

```
X-mira
```

„X als verteilte Mehrzahl“

und

```
X-ona
```

„X als zusammengefasste Einheit“.

Wichtig:

```
X-mira != viele X
X-ona  != alle X
```

Die Formen kodieren Gruppierungsart, nicht Kardinalität oder Universalität.

## 3. Test 1 — mehrere Wege sind offen

Wenn ein Lexem für „Weg/Fortsetzung“ eingesetzt wird:

```
[WEG]-mira ...
```

kann R1 eine Mehrzahl getrennter Wege ausdrücken.

Das reicht für:

> „mehrere / verschiedene Wege“

aber nicht für:

> „viele Wege“.

**Status: B**

Damit ist zumindest die Unterscheidung **eins vs. mehrere** ohne neuen Quantor möglich.

## 4. Test 2 — weniger Wege sind offen

`Ska` trägt Skalierung/Muster, aber keine festgelegte Vergleichsrichtung.

Ein sinnvoller R1-Weg wäre daher zunächst ein **Vergleich zweier Zustände**:

```
Ska [WEGE-JETZT] la'[WEGE-VORHER]
```

als analytische Struktur „setze den jetzigen Umfang in Skalenrelation zum früheren“.

Aber ohne lexikalisches „kleiner/geringer“ ist nicht entschieden, welche Richtung der Vergleich hat.

**Status: C**

`Ska` kann Vergleich tragen, ersetzt aber nicht „weniger“.

## 5. Test 3 — genau ein Weg ist offen

R1 kann einen singulären Weg referieren. Das allein bedeutet jedoch nicht, dass keine Alternative existiert.

Eine kompositionale Umschreibung wäre:

```
[ein singulärer Weg ist offen]
‖
wi-[offen] [andere Wege]-mira
```

also:

> „Dieser eine Weg ist offen; andere Wege sind nicht offen.“

Das kann **Exklusivität durch zwei Aussagen** ausdrücken, sofern eine Form für „andere“ bzw. kontrastive Alternativen verfügbar ist.

`Ta` bietet die semantische Basis für „Gegenüber/anderes“, aber eine produktive Quantorform „alle anderen“ ist noch nicht dokumentiert.

**Status: B/C**

Der logische Inhalt lässt sich kompositional annähern; eine kompakte Exklusivform fehlt.

## 6. Test 4 — kein Weg ist offen

`wi-` negiert ein Prädikat.

Für „kein Weg ist offen“ muss die Negation über die gesamte Wegklasse reichen, nicht nur über einen einzelnen referierten Weg.

Möglicher analytischer Skopus:

```
wi-[ OFFEN([WEG]-mira) ]
```

Das ist nur dann zulässig, wenn `-mira` die relevante Klasse distributiv bindet.

**Status: B/C**

Kein neues Negationsmorphem nötig; die offene Frage ist Quantorskopus.

## 7. Test 5 — viele Wege sind offen

Hier bleibt eine echte lexikalische Lücke.

Mehrzahl und „viele“ sind nicht identisch.  
`Ska` liefert keine absolute oder kontextuelle Schwelle für „viel“.

Daher wird **kein** vorhandener Vektor umgedeutet.

**Status: C — lexikalischer Quantor fehlt**

## 8. Ergebnis

R1 kann wahrscheinlich mit vorhandenen Mitteln bereits unterscheiden:

```
eins
vs.
mehrere distributive
vs.
mehrere als Einheit
```

Noch offen bleiben:

```
viele
wenige
mehr
weniger
genau
nur
alle
kein   [als echter Quantor, nicht bloß Negation]
```

## 9. Konsequenz für die Architektur

Quantifikation wird zweistufig modelliert:

### Strukturelle Quantifikation
Bereits teilweise vorhanden:
- Singular;
- distributive Mehrzahl `-mira`;
- kollektive Mehrzahl `-ona`.

### Kardinale / skalare Quantifikation
Noch lexikalisch offen:
- viele/wenige;
- mehr/weniger;
- genau n;
- alle/kein.

Diese Trennung verhindert, dass `-mira`, `-ona` oder `Ska` semantisch überladen werden.

## 10. Empfehlung

Für R1 sollten kardinale Quantoren zunächst als **freie Lexeme** rekonstruiert werden, nicht als neue Flexionsmorpheme.

Begründung:

1. Zahl und Menge sind lexikalisch leicht historisierbar;
2. Galut-Schichten dürfen Quantoren unterschiedlich grammatikalisieren;
3. der Kern bleibt klein;
4. Modalität und Quantifikation bleiben getrennt;
5. vorhandene KOLLEKTIV-Morphologie behält ihre klare Funktion.

Erst bei realem Corpusbedarf sollten konkrete R1-Formen für „viel“, „wenig“, „alle“ und „nur“ rekonstruiert werden.
