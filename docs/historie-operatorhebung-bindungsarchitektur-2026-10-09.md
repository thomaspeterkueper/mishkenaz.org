# Mishkenaz — Historie, Operatorhebung und Bindungsarchitektur

**Stand:** 2026-10-09  
**Status:** vertiefte Architekturentscheidung

## 1. Ausgangspunkt

Zwei offene Fragen waren miteinander gekoppelt:

1. Ist `HIST` ein eigener semantischer Typ?
2. Wie wird aus einer Vektorfolge ein gehobener Operator?

Die Vertiefung zeigt: Beide Fragen betreffen nicht neue Weltobjekte, sondern **Struktur über Struktur**.

## 2. Warum `HIST` kein Basistyp sein sollte

Ein Basistyp beantwortet:

> Was für eine semantische Größe liegt vor?

Beispiele:

```
SYS
PROC
REL
TRACE
MODEL
```

Geschichte beantwortet dagegen:

> Durch welchen wirksamen Pfad ist diese Größe zu ihrem gegenwärtigen Zustand gekommen?

Ein historisch geprägtes System bleibt ein `SYS`; ein historisch geprägter Prozess bleibt ein `PROC`.

Deshalb:

```
TYPE(A) = SYS
HISTORY(A) = H
```

statt:

```
TYPE(A) = HIST
```

Die frühere Form `HIST/SYS` vermischte zwei orthogonale Dimensionen.

## 3. History als semantische Annotation

Arbeitsmodell:

```
VALUE = <base_type, history, provenance, binding, aspect, ...>
```

`history` ist dabei keine bloße Dokumentationsnotiz. Sie kann die Zulässigkeit oder Bedeutung späterer Operationen beeinflussen.

Beispiel:

```
A : SYS, history = H1
B : SYS, history = H2
```

obwohl:

```
visible_state(A) = visible_state(B)
```

kann gelten:

```
Ori(A,H1) != Ori(B,H2)
```

Geschichte ist damit **semantisch wirksam, aber typologisch orthogonal**.

## 4. `Ori` als history-sensitive operation

Die sauberste Signatur lautet:

```
Ori : SYS + HISTORY -> SYS
Ori : PROC + HISTORY -> PROC
```

Nicht:

```
HIST -> HIST
```

`Ori` verändert nicht notwendig die ontologische Kategorie des Trägers. Es aktualisiert seine Bedeutung unter wirksamem Pfadbezug.

Formal:

```
TYPE(Ori(A,H)) = TYPE(A)
```

aber:

```
SEM(Ori(A,H)) != SEM(A)
```

im Allgemeinen.

## 5. Operatorhebung ist ebenfalls Meta-Struktur

Bei:

```
Res-(Ref-Log)
```

ist `(Ref-Log)` kein neuer Weltzustand. Eine Folge von Operationen wird als **eine anwendbare semantische Einheit** behandelt.

Operatorhebung ist daher eine Operation auf dem Ausdruckssystem:

```
LIFT(Ref -> Log) : TRACE -> MODEL
```

Sie ist nicht selbst automatisch ein Mishkenaz-Morphem.

## 6. Drei Ebenen der Bindung

Wir unterscheiden jetzt:

### A. Sequenzielle Komposition

```
A-B-C
```

Jeder Schritt verarbeitet das Ergebnis des vorherigen.

### B. Analytische Operatorhebung

```
A-(B-C)
```

`(B-C)` wird im formalen Modell als zusammengesetzter Operator behandelt.

Die Klammern gehören zur Analyse und zum Validator, nicht zum R1-Inventar.

### C. Lexikalisierte/historische Bindung

Eine häufige oder kulturell stabilisierte Komposition kann später zu einer festen sprachlichen Form werden.

Diese Oberfläche muss phonologisch und historisch rekonstruiert werden. Sie darf nicht aus der Metanotation abgeleitet werden.

## 7. Warum der Apostroph nicht Operatorhebung bedeutet

Der Apostroph besitzt im vorhandenen R1 bereits sprachliche Funktionen, etwa in Rollenformen wie:

```
bi'QUELLE
la'ZIEL
```

und in historisch etablierten Formen wie:

```
Ma'Ta'U
```

Es gibt derzeit keinen belastbaren kanonischen Beleg für die allgemeine Gleichung:

```
A'B = LIFT(A-B)
```

Daher wird diese Regel ausdrücklich **nicht** eingeführt.

## 8. Bindestrich ebenfalls nicht überladen

Der Bindestrich ist in der gegenwärtigen Notation bereits breit im Einsatz: Morphemgrenzen, Vektorkompositionen und Arbeitsformen.

Daher bedeutet auch:

```
A-B
```

nicht automatisch:

> rein sequenziell, niemals lexikalisiert.

Die genaue Bindungsart muss aus Struktur, Lexikon und Kontext hervorgehen.

## 9. Konsequenz für Parser und Validator

Ein zukünftiger Parser braucht mindestens zwei Ebenen:

```
SURFACE PARSE
-> SEMANTIC BINDING GRAPH
```

Die Oberfläche liefert Formen und Grenzen. Der semantische Graph entscheidet:

- welche Schritte sequenziell sind;
- welche Teilfolge gehoben wird;
- welche historischen Annotationen gelten;
- welche Provenienz erhalten bleibt;
- welche Operatoren zusätzliche Kontexte verlangen.

## 10. Allgemeiner Architekturgewinn

Mit dieser Trennung wird Mishkenaz weniger ad hoc:

```
BASISTYPEN       = was für eine Größe?
ANNOTATIONEN     = unter welchem Pfad / welcher Quelle / welchem Kontext?
OPERATIONEN      = was geschieht mit der Größe?
BINDUNG          = welche Operationen bilden eine Einheit?
ASPEKT           = wie wird der Vollzug relational bewertet?
```

Diese Dimensionen sind orthogonal, können aber aufeinander einwirken.

## 11. Konsequenz für Omnizedenz

Die Trennung ist philosophisch produktiv, ohne Philosophie in die Grammatik einzubauen:

> Identität kann typologisch stabil bleiben, während Geschichte semantisch wirksam bleibt.

Ein System muss also nicht zu einem neuen ontologischen Typ werden, nur weil sein Werden relevant ist.

Das unterstützt die Idee geschichtstragender Kontinuität, bleibt aber eine ausdrückbare Spracharchitektur und kein Naturgesetz.

## 12. Offener Rest

Nicht entschieden ist weiterhin, **wie gesprochene R1-Sprache enge Operatorbindung signalisiert**.

Mögliche spätere Untersuchungsfelder:

- Prosodie;
- Betonung;
- phonologische Reduktion;
- feste morphologische Fusion;
- lexikalische Konvention;
- Registerunterschiede.

Bis historische Evidenz oder bewusste Sprachplanung einen dieser Wege trägt, bleibt Operatorhebung eine semantische Analyseoperation und keine neue R1-Schreibregel.