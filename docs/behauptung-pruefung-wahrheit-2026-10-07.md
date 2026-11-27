# Mishkenaz — Behauptung, Prüfung und Wahrheit

**Stand:** 2026-10-07  
**Status:** Arbeitsarchitektur; keine neuen kanonischen Morpheme

## 1. Grundsatz

Mishkenaz trennt künftig mindestens vier Ebenen:

```
Aussage / Behauptung
Wahrheitswert
relationale Passung
Begründungs-/Provenienzstatus
```

Diese Ebenen dürfen nicht ineinanderfallen.

Insbesondere:

```
-om  != wahr
-ath != falsch
-il  != unbekannt
Tra  != bestätigt
Res  != Beweis
Log  != Wahrheit
```

## 2. Behauptung

Im aktuellen R1-Bestand gibt es keinen belastbaren eigenständigen Vektor „behaupten“.

Daher gilt vorläufig:

- Eine Inhaltsklausel, die mitgeteilt wird, kann als **behaupteter/berichteter Inhalt** fungieren.
- Die Mitteilungsquelle wird durch `bi'` an der Mitteilungsklausel markiert.
- Der Wahrheitswert des Inhalts wird dadurch nicht gesetzt.

Schema:

```
Tra bi'QUELLE la'ADRESSAT ‖ INHALT
```

## 3. Wahrheit

Arbeitsdefinition:

> Wahrheit ist keine Resonanzeigenschaft, sondern betrifft die Zutreffendheit einer Behauptung gegenüber dem, was tatsächlich der Fall ist.

Das vermeidet die frühere Zirkularität „wahr = passend zur tragenden Struktur“.

Für Mishkenaz heißt das: Wahrheit wird nicht als ontische Farbe eines Vorgangs grammatikalisiert, sondern entsteht erst bei einem **Wahrheitsträger**, also einer Behauptung, Darstellung oder modellhaften Aussage.

## 4. Prüfung

Prüfung ist der relationale Vollzug, in dem mindestens folgende Größen zueinander in Beziehung gesetzt werden können:

- Behauptung;
- direkte Beobachtung;
- Spur/Residuum;
- Rekonstruktion/Modell;
- Referenzrahmen;
- weitere unabhängige Quellen.

Schema:

```
Behauptung
   ↕
Prüfung
   ↕
Wirklichkeit / Spur / Beobachtung / Referenz
```

Eine Prüfung kann unvollständig oder fehlerhaft sein. „geprüft“ bedeutet daher nicht automatisch „wahr“.

## 5. Mögliche vorhandene Vektorbausteine für Prüfung

Noch keine Kombination wird kanonisiert.

### Saha
Wahrnehmung. Liefert Beobachtungszugang, aber keine Wahrheit.

### Res
Residuum/Spur. Liefert Folge eines Geschehens, aber keine eindeutige Interpretation.

### Ref
Rückschau/Rückbezug. Ermöglicht Vergleich mit Vorausgehendem.

### Log
Strukturierung/Modellbildung. Ermöglicht explizite Ordnung oder Ableitung.

### Syn
Synchronie/Übereinstimmung. Könnte einen Teil von Vergleich/Konsistenz ausdrücken, darf aber nicht zu „wahr“ umgedeutet werden.

### Ta
Differenz/Grenze. Könnte Abweichung zwischen Behauptung und Befund ausdrücken.

## 6. Arbeitshypothese Prüfvollzug

Ein möglicher komplexer Prüfpfad wäre:

```
Saha / Res -> Ref -> Log -> Vergleich
```

Der letzte Schritt „Vergleich“ ist derzeit die eigentliche Lücke.

`Syn` und `Ta` bilden möglicherweise ein nützliches Gegensatzpaar:

- `Syn`: Übereinstimmung / Gleichlauf
- `Ta`: Differenz / Nichtidentität

Aber daraus folgt noch nicht:

```
Syn = wahr
Ta = falsch
```

Eine Behauptung kann in einem Merkmal übereinstimmen und trotzdem insgesamt falsch sein.

## 7. Minimaler Wahrheitskontrast

Gesucht:

> „Diese Rekonstruktion ist für mich stimmig, aber falsch.“

Vorläufige Struktur:

```
[Rekonstruktion]-om
‖
[Prüfung der Behauptung gegen Befund] -> NICHT ZUTREFFEND
```

Der erste Teil ist Mishkenaz-semantisch bereits abbildbar.

Der zweite Teil benötigt noch:
- einen Ausdruck für prüfendes Vergleichen;
- einen Ausdruck für Zutreffen/Nichtzutreffen einer Behauptung.

Diese beiden Funktionen sollen getrennt entwickelt werden.

## 8. Entwicklungsregel

Bevor ein Morphem für „wahr“ oder „falsch“ eingeführt wird, muss geprüft werden, ob R1 Wahrheit besser als **Prädikat über Behauptungen** ausdrückt statt als Suffix.

Das ist derzeit die bevorzugte Hypothese:

```
WAHR(Behauptung)
FALSCH(Behauptung)
```

statt:

```
Behauptung-WAHR
Behauptung-FALSCH
```

Damit bleibt der Wahrheitswert logisch und grammatisch von Resonanz, Evidenz und Quelle getrennt.
