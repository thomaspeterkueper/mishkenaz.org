# Mishkenaz — Konfluenz und Pfadsemantik v0.1

**Stand:** 2026-10-09  
**Status:** formales Arbeitsmodell / Ergänzung zur typisierten partiellen Vektoralgebra

## 1. Fragestellung

Zwei unterschiedliche Pfade können denselben Endtyp erreichen:

```
X --P1--> Y
X --P2--> Y
```

Die zentrale Frage lautet dann nicht nur:

> Haben beide Pfade denselben Typ?

sondern:

> Tragen beide Pfade dieselbe Bedeutung?

Für Mishkenaz gilt vorläufig:

```
gleicher Endtyp != gleiche Bedeutung
```

Konfluenz muss daher semantisch, nicht nur typologisch geprüft werden.

## 2. Konfluenzklassen

Wir unterscheiden vier Fälle.

### K0 — typgleich, semantisch verschieden

Beide Pfade enden in demselben Typ, aber mit unterschiedlicher Bedeutung oder Provenienz.

### K1 — komplementär

Beide Pfade beleuchten verschiedene Aspekte desselben Gegenstands und können gemeinsam informativer sein als jeder einzeln.

### K2 — kompatibel / annähernd konvergent

Beide Pfade liefern unter bestimmten Bedingungen semantisch hinreichend ähnliche Ergebnisse.

### K3 — widersprüchlich / nicht konvergent

Die Pfade liefern Ergebnisse, die nicht gleichzeitig als dieselbe Rekonstruktion gelten können.

Keine dieser Klassen behauptet Wahrheit.

## 3. Test A — TRACE -> MODEL

### Pfad A1

```
TRACE --Log--> MODEL
```

Lesart:

> Die Spur wird direkt strukturiert.

Stärke:
- kompakt;
- unmittelbare Musterbildung.

Risiko:
- historische oder rückbezügliche Einordnung bleibt implizit.

### Pfad A2

```
TRACE --Ref--> INFO --Log--> MODEL
```

Lesart:

> Die Spur wird zunächst rückbezogen/eingeordnet und anschließend strukturiert.

Stärke:
- Provenienz und historischer Bezug werden explizit erhalten.

### Befund

Beide enden in `MODEL`, aber:

```
MODEL_A1 != MODEL_A2
```

im Allgemeinen.

A1 kann ein rein strukturelles Modell sein.  
A2 ist ein rückbezogenes/historisch eingebettetes Modell.

**Klasse:** K0 oder K2, abhängig vom Kontext.

Wenn `Ref` keine zusätzliche relevante Information beiträgt, können beide praktisch konvergieren. Wenn der Rückbezug relevant ist, bleiben sie verschieden.

## 4. Test B — OBS -> MODEL

### Pfad B1

```
OBS --Log--> MODEL
```

Direkte Modellbildung aus Beobachtung.

### Pfad B2

```
OBS --Ref--> INFO --Log--> MODEL
```

Beobachtung wird zuerst in Bezug auf Vorwissen, Vergangenheit oder Referenz eingeordnet.

### Befund

Auch hier:

```
MODEL_B1 != MODEL_B2
```

im Allgemeinen.

Der Unterschied ist epistemisch wichtig:

- B1 kann unmittelbare Modellbildung sein;
- B2 ist kontextualisierte Modellbildung.

**Klasse:** K0/K1.

Beide können komplementär sein: direkte Beobachtungsstruktur und historisch eingeordnete Struktur müssen nicht konkurrieren.

## 5. Test C — REL -> SYS

### Pfad C1

```
REL --kora--> SYS
```

Eine Relation wird integriert und bildet eine Formation.

### Pfad C2

```
REL --Rek--> REL' --kora--> SYS'
```

Die Relation durchläuft zuerst Rückkopplung; erst danach entsteht eine Formation.

### Befund

```
SYS != SYS'
```

im Allgemeinen.

Denn Rekursion kann:
- Gewichte verändern;
- Spannungen stabilisieren oder verstärken;
- Teilrelationen verstetigen;
- historische Struktur erzeugen.

**Klasse:** K0.

Der zweite Pfad produziert nicht bloß dieselbe Formation später, sondern potenziell eine anders strukturierte Formation.

## 6. Test D — REL -> SYS mit Differenzerhalt

### Pfad D1

```
Ma-Ta-reso --kora--> SYS
```

Kopplung unter erhaltener Differenz wird anschließend integriert.

### Pfad D2

```
Ma-Ta --kora--> SYS --reso--> REL/SYS
```

Zuerst Integration, danach Wechselwirkung.

### Befund

Diese Pfade sind nicht automatisch konvergent.

D1:
> Integration einer bereits wechselwirkenden differenzierten Relation.

D2:
> Eine integrierte Formation tritt anschließend in Wechselwirkung.

Die Position von `-kora` verändert also die ontologische Granularität des Zwischenzustands.

**Klasse:** K0/K3, je nach Interpretation.

## 7. Test E — TRACE -> MSG

### Pfad E1

```
TRACE --Ref--> INFO --Log--> MODEL --Tra--> MSG
```

Berichtete Rekonstruktion.

### Pfad E2

```
TRACE --Tra--> MSG
```

Direkte Weitergabe der Spur bzw. ihres Inhalts.

### Befund

Beide enden in `MSG`, sind aber klar verschieden:

- E1 übermittelt ein Modell;
- E2 übermittelt die Spur/Beobachtung selbst oder deren Darstellung.

**Klasse:** K0.

Damit ist Provenienzpfad Teil der Nachrichtensemantik.

## 8. Konfluenz ist kein Wahrheitskriterium

Wichtig:

```
P1(X) = P2(X)
```

bedeutet nicht:

```
Ergebnis ist wahr
```

Mehrere Pfade können denselben Fehler reproduzieren.

Ebenso kann Nicht-Konfluenz auftreten, obwohl einer der Pfade wahrheitsnäher ist.

Daher:

```
KONFLUENZ != WAHRHEIT
```

## 9. Pfadidentität

Zwei Ausdrücke gelten nur dann als semantisch pfadidentisch, wenn mindestens folgende Bedingungen erfüllt sind:

1. gleicher Inputtyp;
2. gleicher Outputtyp;
3. gleiche relevante Zwischenzustände oder nachweislich irrelevante Unterschiede;
4. gleiche Provenienzfunktion;
5. keine zusätzliche historische oder relationale Information;
6. gleiche Skopus- und Bindungsstruktur.

Das ist eine starke Bedingung.

## 10. Provenienz als Pfadattribut

Jeder Pfad sollte zukünftig mindestens folgende Metadaten tragen können:

```
source
operations
history
reference
intermediate_types
uncertainty
```

Das passt direkt zur AVI-inspirierten Trennung von Weltzustand, Beobachtung, Modell und Evidenz, ohne AVI als Sprachontologie zu kodieren.

## 11. Ergebnis

Mishkenaz ist **nicht global konfluent**.

Stattdessen gilt:

> Mehrere semantische Pfade können denselben Typ erreichen, ohne dass ihre Ergebnisse identisch sind.

Die Bedeutung liegt daher nicht nur im Endknoten, sondern im gesamten Pfad.

Arbeitsform:

```
BEDEUTUNG = ENDZUSTAND + PFAD + BINDUNG + PROVENIENZ
```

## 12. Konsequenz für eine maschinenprüfbare Grammatik

Ein Parser oder Validator darf nicht nur Typen prüfen.

Er muss zusätzlich speichern:

- Sequenz der Vektoren;
- Klammerung;
- Typkonversionen;
- Provenienzpfad;
- Operatorhebung;
- Historienbezug.

Damit wird die Vektoralgebra zu einem gerichteten, pfadsensitiven semantischen Graphen.

## 13. Nächster Schritt

Als nächstes sollte eine kleine **Pfad-Normalform** definiert werden:

```
INPUT
-> [Konversionen]
-> [Kernoperationen]
-> [Relation/Modellbildung]
-> [Meta-Operatoren]
-> [Resonanzaspekt]
```

Ziel ist nicht, alle Ausdrücke auf dieselbe Form zu reduzieren, sondern äquivalente und nicht-äquivalente Pfade formal vergleichbar zu machen.
