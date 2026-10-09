# Mishkenaz — Klärung dreier Modellfragen

**Stand:** 2026-10-09  
**Status:** konsolidierte Arbeitsentscheidung

## 1. `-reso`: zwei legitime Signaturen

`-reso` wird nicht auf genau eine Arität reduziert.

Es gibt zwei semantisch verwandte, aber formal verschiedene Verwendungen:

```
REL --reso--> REL
```

> Eine bereits bestehende Relation wird als aktive Kopplung/Wechselwirkung fortgeführt oder profiliert.

und:

```
(SYS,SYS) --reso--> REL
```

> Zwei Systeme werden in eine Wechselwirkungsrelation gesetzt.

Beide Verwendungen teilen denselben semantischen Kern: Kopplung/Wechselwirkung.

Entscheidend bleibt:

```
-reso != -kora
```

Eine Wechselwirkungsrelation ist keine Integration.

**Entscheidung:** `-reso` erhält zwei typisierte Overloads statt einer künstlich vereinheitlichten Arität.

## 2. `Ona`: Ganzheit ist nicht identisch mit Mehrzahl

`Ona` wird als Ganzheits-/Formationsoperator geführt.

Eine einzelne Formation kann als Ganzheit profiliert werden:

```
SYS --Ona--> CONFIG
```

Mehrere Formationen können ebenfalls als gemeinsame Ganzheit aufgefasst werden:

```
SYS+ --Ona--> CONFIG
```

Das ist mit der grammatischen Verwendung von `-ona` vereinbar, ohne beide Ebenen gleichzusetzen.

Wichtig:

```
Ona != Plural
Ona != alle
Ona != Verschmelzung
```

Die kollektive Lesart betrifft die Weise, wie Referenten als Einheit gefasst werden, nicht ihre bloße Anzahl.

**Entscheidung:** V04 `Ona` erlaubt eine oder mehrere Formationen; bei mehreren wird eine kollektive Formation gebildet.

## 3. `Ref`: epistemische Transformation mit relationalem Inhalt

`Ref` bedeutet Rückbezug/Rückschau.

Seine Semantik ist relational, seine operative Rolle im Typmodell aber primär epistemisch:

```
TRACE/OBS/MODEL/HIST --Ref--> INFO/MODEL
```

`Ref` setzt also nicht einfach zwei autonome Systeme in Beziehung wie `Ma`, `Ta` oder `Syn`, sondern transformiert epistemisches Material durch Rückbezug.

Daher ist die sauberste Primärklassifikation:

> **epistemische Transformation / Konversion mit relationalem Inhalt**

Das erklärt auch die stabile Kette:

```
TRACE --Ref--> INFO --Log--> MODEL
```

und schützt vor einer Verwechslung mit Wahrheit oder Evidenz.

```
Ref != Beweis
Ref != Wahrheit
Ref != bloße Referenzmarkierung
```

**Entscheidung:** Im TypeScript-Modell wird `Ref` als `conversion` klassifiziert; semantisch bleibt Rückbezug eine relationale Operation.

## 4. Konsequenz

Die drei Entscheidungen reduzieren keine semantische Mehrdeutigkeit künstlich, sondern trennen Ebenen:

```
-reso : überladene Wechselwirkungsoperation
Ona  : Ganzheitsbildung unabhängig von bloßer Zahl
Ref  : epistemische Transformation durch Rückbezug
```

Damit werden Typmodell, Validator und Sprachbeschreibung präziser, ohne neue Morpheme oder metaphysische Annahmen einzuführen.