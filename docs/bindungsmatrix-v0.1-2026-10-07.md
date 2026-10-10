# Mishkenaz — Bindungsmatrix v0.1

**Stand:** 2026-10-07  
**Status:** Arbeitsmatrix / maschinennahe Kompositionsprüfung

## Legende

- **D** — direkt typkompatibel
- **O** — nur sinnvoll als Operatorhebung / komplexer Prädikatskern
- **K** — grundsätzlich kompatibel, aber klammerungs-/kontextsensitiv
- **X** — derzeit nicht definiert oder semantisch nicht belastbar

Die Matrix ist **gerichtet**: Zeile = erster Vektor, Spalte = folgender Vektor.

| A → B | Ma | Ta | Res | Ref | Log | Tra | La | Lim | Rek | Ori | -reso | -kora |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Ma | K | K | X | X | X | X | X | X | K | K | D | K |
| Ta | K | K | X | X | X | X | K | K | K | K | D | K |
| Res | X | X | X | D | D | K | X | X | X | K | X | X |
| Ref | X | X | K | K | D | D | X | X | K | K | X | X |
| Log | X | X | K | K | K | D | X | X | K | K | X | K |
| Tra | X | X | K | K | K | K | X | X | K | K | K | X |
| La | K | K | X | X | X | X | K | D | K | K | K | K |
| Lim | K | K | X | X | X | X | K | K | K | K | K | K |
| Rek | K | K | K | K | K | K | K | K | D | K | K | K |
| Ori | K | K | K | K | K | K | K | K | K | D | K | K |
| -reso | K | K | X | X | X | K | K | K | K | K | D | K |
| -kora | K | K | K | K | K | K | K | K | K | K | K | D |

## 1. Sicherste direkte Ketten

Die bisher klarsten direkten Übergänge sind:

```
Res -> Ref
Ref -> Log
Log -> Tra
La -> Lim
Ma -> -reso
Ta -> -reso
Rek -> Rek
Ori -> Ori
```

Diese Übergänge entsprechen den bereits geprüften Typen.

## 2. Operatorhebung

Einige Kombinationen sind nicht einfach sequenziell, können aber als komplexe Operation gefasst werden.

Beispiel:

```
(Ref-Log) : TRACE -> MODEL
```

Dann ist:

```
Res-(Ref-Log)
```

zulässig, obwohl die Oberfläche zwei verschiedene Bindungsanalysen erlaubt.

## 3. Klammerungssensible Familien

### Relation
```
Ma-Ta-reso
```

### Geschichte
```
Rek-Ori
Ori-Rek
```

### Schwelle
```
La-Lim-Ta
```

### Erkenntnis + Historie
```
Res-Ref-Log-Ori
```

Hier muss jeweils geklärt werden, welcher Zwischenzustand an den nächsten Operator übergeben wird.

## 4. X bedeutet nicht „für immer unmöglich“

`X` heißt nur:

> Mit dem aktuellen Typmodell ist keine direkte belastbare Lesart vorhanden.

Eine spätere lexikalisierte oder metaphorische Verwendung kann möglich sein, muss aber als Typkonversion dokumentiert werden.

## 5. Typkonversion

Für zukünftige Erweiterungen wird deshalb ein explizites Konzept benötigt:

```
CONVERT(A : X -> Y)
```

Beispiele:
- Beobachtung `OBS` kann durch `Log` zu `MODEL` werden.
- Mitteilung `MSG` kann durch Speicherung oder Wirkung später zu `TRACE` werden.
- Relation `REL` kann durch `-kora` zu `CONFIG/SYS` werden.

Typkonversion ist ein eigener semantischer Schritt und darf nicht stillschweigend vorausgesetzt werden.

## 6. Ergebnis

Die Matrix bestätigt drei Eigenschaften:

1. Mishkenaz-Komposition ist **gerichtet**.
2. Mishkenaz-Komposition ist **partiell**.
3. Mishkenaz-Komposition ist häufig **klammerungssensitiv**.

Damit ist die funktionale Algebra erstmals als prüfbare Kompositionsgrammatik formulierbar.
