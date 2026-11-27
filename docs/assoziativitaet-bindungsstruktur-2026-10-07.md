# Mishkenaz — Assoziativität, Klammerung und Bindungsstruktur

**Stand:** 2026-10-07  
**Status:** formales Arbeitsmodell / Ergänzung zur typisierten partiellen Vektoralgebra

## 1. Ausgangsfrage

Zu prüfen ist:

```
(A-B)-C ?= A-(B-C)
```

Für Mishkenaz gilt nach den ersten Typ- und Kompositionstests:

> **Allgemeine Assoziativität ist nicht gegeben.**

Das bedeutet nicht bloß, dass zwei Schreibweisen verschieden aussehen. Die Klammerung kann bestimmen:

- welcher Zwischentyp entsteht;
- worauf ein späterer Vektor operiert;
- welche Relation erhalten bleibt;
- welche Perspektive oder Provenienz fortgeführt wird;
- ob eine Komposition überhaupt typologisch zulässig ist.

## 2. Erkenntniskette: Res–Ref–Log

### Variante A

```
(Res-Ref)-Log
```

Arbeitslesart:

1. `Res` liefert eine Spur / ein Residuum.
2. `Ref` setzt diese Spur rückbezüglich in Beziehung.
3. `Log` strukturiert das rückbezogene Material zu einem Modell.

Typisch:

```
PROC --Res--> TRACE
TRACE --Ref--> INFO
INFO --Log--> MODEL
```

Diese Klammerung ist **stark typkompatibel**.

### Variante B

```
Res-(Ref-Log)
```

Hier müsste `Ref-Log` zunächst eine zusammengesetzte Operation bilden, die anschließend auf das Ergebnis von `Res` angewandt wird.

Das kann als höherstufiger Operator denkbar sein:

```
(Ref-Log) : TRACE -> MODEL
```

Dann wäre:

```
Res-(Ref-Log)
```

eine kompakte Funktionskomposition.

### Befund

Beide Lesarten können unter einer **Funktionskompositionskonvention** koextensional werden, aber nicht automatisch sprachlich identisch sein.

```
(Res-Ref)-Log
```

betont den stufenweisen Erkenntnisweg.

```
Res-(Ref-Log)
```

betont eine bereits etablierte Rekonstruktionsoperation.

Daher:

```
(Res-Ref)-Log ≈ Res-(Ref-Log)
```

nur unter expliziter Operatorhebung von `Ref-Log`.

**Status:** bedingt assoziierbar, nicht frei assoziativ.

## 3. Relation: Ma–Ta–reso

Hier ist Klammerung semantisch deutlich stärker.

### Variante A

```
(Ma-Ta)-reso
```

Lesart:

1. `Ma` erzeugt Bindung.
2. `Ta` prägt/erhält Differenz innerhalb dieser Bindung.
3. `-reso` koppelt die bereits differenziert gebundenen Systeme.

Das entspricht:

> Wechselwirkung in Bindung unter erhaltener Differenz.

### Variante B

```
Ma-(Ta-reso)
```

Lesart:

1. `Ta-reso` bildet zunächst eine wechselwirkende Differenzrelation.
2. `Ma` bindet diese bereits gekoppelte Differenzstruktur.

Das verschiebt die semantische Priorität:

> Erst Wechselwirkung zweier Verschiedener, dann Bindung dieser Relation.

### Befund

Beide können sinnvoll sein, aber sie sind **nicht synonym**.

```
(Ma-Ta)-reso != Ma-(Ta-reso)
```

Die Klammerung kodiert, ob Differenz **innerhalb einer Bindung erhalten** oder eine **bereits wechselwirkende Differenz anschließend gebunden** wird.

Das ist für Kontrakosmologie besonders relevant.

## 4. Rekursion und Geschichte: Rek–Ori

### Variante A

```
(Rek A)-Ori
```

oder operatorisch:

```
Ori(Rek(A),H)
```

Ein bereits rückgekoppelter Zustand wird unter historisch veränderten Bedingungen wiederbegegnet.

### Variante B

```
Rek(Ori(A,H))
```

Zuerst entsteht die historisch veränderte Wiederbegegnung `A'`; danach wird diese neue Gestalt rekursiv rückgekoppelt.

### Befund

```
Ori(Rek(A),H) != Rek(Ori(A,H))
```

im Allgemeinen.

Die erste Form fragt:

> Was geschieht, wenn ein rekursiver Prozess später erneut unter veränderter Geschichte wirksam wird?

Die zweite:

> Was geschieht, wenn das historisch veränderte Ergebnis selbst wieder in Rückkopplung tritt?

Das ist ein klarer Fall **nicht-kommutativer und nicht-assoziativer Prozessordnung**.

## 5. Öffnung und Schwelle: La–Lim–Ta

Ein weiterer nützlicher Test:

### `(La-Lim)-Ta`

1. Raum wird geöffnet.
2. darin wird eine Schwelle markiert.
3. diese Schwelle wird als Differenz/Gegenüber strukturiert.

### `La-(Lim-Ta)`

Hier müsste zunächst eine kombinierte Schwellen-Differenz-Operation existieren, die anschließend einen Raum öffnet.

Beide sind nicht automatisch äquivalent.

Das bestätigt:

> Frühere Operationen erzeugen den semantischen Raum, in dem spätere Operationen überhaupt erst sinnvoll sind.

## 6. Bindungsprinzip

Aus den Tests folgt eine zentrale Regel:

```
KLAMMERUNG = FESTLEGUNG DES ZWISCHENZUSTANDS
```

Oder sprachlich:

> Die Klammer bestimmt, welche Beziehung oder welcher Zustand als Einheit an den nächsten Vektor übergeben wird.

Das ist stärker als bloße mathematische Präzedenz.

## 7. Zwei Kompositionsmodi

Es zeichnen sich zwei verschiedene Modi ab.

### A. Prozesskomposition

```
A -> B -> C
```

Jeder Schritt operiert auf dem Ergebnis des vorherigen.

Beispiel:

```
Res -> Ref -> Log
```

### B. Operatorbildung

```
(B-C)
```

wird selbst als zusammengesetzte Operation behandelt, die auf einen Input angewandt werden kann.

Beispiel:

```
(Ref-Log) : TRACE -> MODEL
```

Diese beiden Modi dürfen orthographisch oder prosodisch nicht automatisch gleich behandelt werden.

## 8. Konsequenz für die Sprachsyntax

Mishkenaz benötigt wahrscheinlich eine Unterscheidung zwischen:

1. **sequenzieller Komposition** — ein Prozess folgt dem anderen;
2. **enger Operatorbindung** — mehrere Vektoren bilden gemeinsam einen komplexen Prädikatskern;
3. **historischer Prägung / Lexikalisierung** — eine frühere Komposition ist zu einer festen Form geworden.

Der bestehende Gebrauch von Bindestrich und Apostroph darf hierfür **nicht automatisch umgedeutet** werden. Eine gezielte Reposuche liefert derzeit keinen belastbaren kanonischen Beleg dafür, dass diese Zeichen allgemein „Sequenz“ versus „Operatorhebung“ markieren.

Für die formale Analyse gilt deshalb vorläufig:

```
A-B        = vorhandene Oberflächenkomposition; genaue Bindungsart aus Kontext/Grammatik
(A-B)      = analytische Notation für einen als Einheit behandelten Teilpfad
A-(B-C)    = analytische Operatorhebung; Klammern sind kein R1-Morphem
```

Der Apostroph bleibt bei seinen bereits belegten sprachlichen Funktionen (etwa Rollenformen und historisch etablierten Formen wie `Ma'Ta'U`). Er wird **nicht** als allgemeines Operatorhebungszeichen kanonisiert.

Falls ein gehobener Operator später lexikalisiert wird, muss seine tatsächliche R1-Oberfläche phonologisch und historisch rekonstruiert werden; sie folgt nicht automatisch aus der Metanotation.

## 9. Assoziativitätsklassen

### Klasse I — funktionskompositorisch annähernd assoziierbar

Beispiele:

```
Res-Ref-Log
Saha-Ref-Log
```

wenn die mittleren Schritte als wohldefinierte zusammengesetzte Funktion typisiert werden können.

### Klasse II — semantisch klammerungssensitiv

Beispiele:

```
Ma-Ta-reso
La-Lim-Ta
Rek-Ori-Res
```

Hier verändert Klammerung die Rolle der Zwischenstruktur.

### Klasse III — typologisch nicht umklammerbar

Falls eine alternative Klammerung einen nicht zulässigen Input erzeugt, ist nur eine Struktur definiert.

Beispieltyp:

```
A : X -> Y
B : Y -> Z
C : Z -> Q
```

aber `B-C` besitzt keinen eigenständigen Operatorstatus.

Dann ist nur die sequenzielle Lesart zulässig.

## 10. Keine allgemeine Assoziativität

Daher gilt für Mishkenaz vorläufig:

```
(A-B)-C = A-(B-C)
```

ist **keine allgemeine Regel**.

Stattdessen:

```
Gleichheit nur,
wenn Typen kompatibel sind
UND
Operatorhebung zulässig ist
UND
keine relevante Zwischenstruktur verloren geht.
```

## 11. Konsequenz für Bedeutung

Das ist sprachlich stark:

> Mishkenaz kodiert nicht nur, **welche** Operationen stattfinden, sondern potenziell auch, **welche Zwischenzustände als semantisch real behandelt werden**.

Damit passt die Kompositionssyntax unmittelbar zur prozess-relationalen Architektur der Sprache.

## 12. Nächster formaler Schritt

Nun sollte eine kleine Bindungsmatrix für besonders produktive Vektoren aufgebaut werden:

- `Ma`
- `Ta`
- `Res`
- `Ref`
- `Log`
- `Tra`
- `La`
- `Lim`
- `Rek`
- `Ori`
- `-reso`
- `-kora`

Für jedes Paar:

```
A-B
```

wird markiert:

- **D** = direkt typkompatibel
- **O** = nur als Operatorhebung
- **K** = klammerungssensitiv
- **X** = derzeit nicht definiert

Damit entsteht erstmals eine maschinenprüfbare Kompositionsgrammatik.
