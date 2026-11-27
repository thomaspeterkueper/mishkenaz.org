# Mishkenaz — Pfad-Normalform v0.1

**Stand:** 2026-10-09  
**Status:** formales Arbeitsmodell

## 1. Ziel

Die Pfad-Normalform soll zwei Dinge ermöglichen:

1. semantische Pfade vergleichbar machen;
2. Unterschiede sichtbar halten, die durch bloßen Endtyp verloren gingen.

Sie ist **keine Reduktionsregel auf eine einzige kanonische Bedeutung**.

## 2. Grundschema

```
INPUT
-> KONVERSION
-> KERNOPERATION
-> RELATION / MODELLBILDUNG
-> META-OPERATOR
-> RESONANZASPEKT
```

Nicht jeder Ausdruck benötigt jede Stufe.

## 3. Normalform-Felder

Jeder komplexe Ausdruck kann als Tupel beschrieben werden:

```
N = <
  input,
  conversions,
  core_ops,
  relational_ops,
  model_ops,
  meta_ops,
  aspect,
  provenance,
  history,
  output
>
```

## 4. Beispiel: Res-Ref-Log-il

```
input        = PROC/SYS
conversions  = [Res: -> TRACE]
core_ops     = []
relational   = [Ref]
model_ops    = [Log]
meta_ops     = []
aspect       = -il
provenance   = Spur-basiert
history      = expliziter Rückbezug
output       = MODEL
```

## 5. Beispiel: Res-Log-il

```
input        = PROC/SYS
conversions  = [Res: -> TRACE]
core_ops     = []
relational   = []
model_ops    = [Log]
meta_ops     = []
aspect       = -il
provenance   = Spur-basiert
history      = nicht explizit
output       = MODEL
```

Beide enden in `MODEL`, sind aber nicht pfadidentisch.

## 6. Beispiel: Ma-Ta-reso

```
input        = SYS x SYS
conversions  = []
core_ops     = [Ma]
relational   = [Ta]
model_ops    = []
meta_ops     = [-reso]
aspect       = none
provenance   = none
history      = none
output       = REL
```

Interpretation:

> gekoppelte Bindung unter erhaltener Differenz.

## 7. Beispiel: Ma-Ta-reso-kora

```
input        = SYS x SYS
conversions  = []
core_ops     = [Ma]
relational   = [Ta]
model_ops    = []
meta_ops     = [-reso, -kora]
aspect       = none
provenance   = none
history      = none
output       = CONFIG/SYS
```

Die zusätzliche Integration verändert den Endtyp und die Granularität.

## 8. Vergleichsrelationen

Zwei Normalformen können in vier Beziehungen stehen.

### N-identisch
Alle relevanten Felder stimmen überein.

### N-äquivalent
Unterschiede sind nachweislich semantisch irrelevant.

### N-komplementär
Unterschiedliche Pfade tragen zusätzliche, miteinander verträgliche Information.

### N-distinkt
Mindestens ein Unterschied verändert relevante Bedeutung.

## 9. Keine automatische Löschung leerer Schritte

Ein expliziter Schritt darf nicht entfernt werden, nur weil Input- und Outputtyp gleich bleiben.

Beispiel:

```
REL --Rek--> REL
```

kann semantisch wesentlich sein, obwohl der Typ gleich bleibt.

Daher:

```
TYPE(X)=TYPE(Rek(X))
```

impliziert nicht:

```
X = Rek(X)
```

## 10. Historie und Provenienz sind First-Class-Felder

Pfadsemantik verlangt, dass `history` und `provenance` nicht bloß Kommentare sind.

Sie beeinflussen Vergleich und mögliche Folgeoperationen.

Beispiel:

```
MODEL(history=none)
```

ist nicht automatisch äquivalent zu:

```
MODEL(history=Ref)
```

## 11. Resonanzaspekt bleibt äußerste Bewertungsschicht

`-om/-ath/-il` wird in der Normalform bewusst spät geführt.

Es verändert die relationale Bewertung des Gesamtvollzugs, nicht dessen epistemischen oder ontologischen Pfad.

Daher:

```
PATH + ASPECT
```

statt:

```
ASPECT als interne Typkonversion
```

## 12. Nutzen

Die Normalform erlaubt:

- Kompositionsprüfung;
- Vergleich zweier Ausdrücke;
- Erkennung stiller Typkonversionen;
- Erkennung verlorener Provenienz;
- saubere Parser-/Validatorlogik;
- spätere Corpusanalyse.

## 13. Nächster technischer Schritt

Als nächstes kann aus diesem Schema eine maschinenlesbare Spezifikation entstehen, z. B. als JSON/TypeScript:

```
VectorSignature
SemanticPath
PathStep
Binding
Conversion
Aspect
```

Damit könnte das Repo Ausdrücke künftig automatisiert auf Typverträglichkeit und Pfadverlust prüfen.
