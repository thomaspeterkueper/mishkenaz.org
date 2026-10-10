# Mishkenaz — Typkonversionen v0.1

**Stand:** 2026-10-07  
**Status:** formales Arbeitsmodell / Ergänzung zur typisierten partiellen Vektoralgebra

## 1. Grundregel

Eine Typkonversion ist kein stiller Cast.

Arbeitsnotation:

```
X --Vektor/Prozess--> Y
```

Nur wenn der vermittelnde Schritt semantisch begründet ist, darf ein Ausdruck von Typ `X` als Typ `Y` weiterverarbeitet werden.

Daher gilt:

```
CONVERT(X->Y)
```

ist **keine primitive Operation** des Systems.

Stattdessen muss gelten:

```
X --K--> Y
```

mit einem expliziten Konversionspfad `K`.

## 2. Beobachtung -> Modell

Die sauberste Konversion ist:

```
OBS --Log--> MODEL
```

oder, wenn Rückschau wesentlich ist:

```
OBS --Ref--> INFO
INFO --Log--> MODEL
```

Damit bleibt sichtbar:

- Wahrnehmung ist nicht Modell;
- Modell ist nicht Wahrheit;
- die Strukturierung selbst ist ein zusätzlicher Vollzug.

## 3. Spur -> Information -> Modell

```
TRACE --Ref--> INFO
INFO --Log--> MODEL
```

Alternativ kann `Log` in geeigneten Kontexten direkt auf `TRACE` arbeiten:

```
TRACE --Log--> MODEL
```

Die längere Form bewahrt jedoch explizit den rückbezüglichen Schritt.

## 4. Mitteilung -> Spur

Eine Mitteilung `MSG` wird nicht automatisch zur Spur.

Sie kann erst dann als `TRACE` fungieren, wenn sie einen fortbestehenden Effekt erzeugt, z. B.:

- Speicherung;
- Erinnerung;
- materieller Abdruck;
- institutionelle Aufzeichnung;
- verändertes Verhalten.

Arbeitsform:

```
MSG --Res--> TRACE
```

ist nur dann zulässig, wenn `Res` auf den **fortbestehenden Effekt des Mitteilungsprozesses** bezogen wird.

Damit ist:

```
Tra-Res
```

nicht grundsätzlich verboten, aber interpretationspflichtig.

## 5. Relation -> Formation/System

Eine Relation `REL` kann durch Integration zu einer Formation werden:

```
REL/SYS* --kora--> CONFIG/SYS
```

Wichtig:

```
REL --kora--> SYS
```

bedeutet nicht, dass interne Differenz verschwindet.

Die resultierende Formation kann `Ta` intern weiterhin erhalten.

## 6. Relation -> Prozess

Ein relationaler Spannungszustand kann Prozess werden, etwa durch:

```
REL --Tor--> PROC/REL
REL --Rek--> PROC/REL
REL --reso--> REL
```

Nicht jede Relation ist daher statisch.

## 7. Prozess -> Spur

```
PROC --Res--> TRACE
```

ist eine der wichtigsten Konversionen des gesamten Systems.

Sie trennt:

```
Geschehen != Spur des Geschehens
```

und verhindert, dass Rekonstruktion direkten Zugriff auf das vergangene Geschehen behauptet.

## 8. Modell -> Mitteilung

```
MODEL --Tra--> MSG
```

Das übertragene Modell kann später wiederum neue Spuren, Beobachtungen oder Modelle erzeugen.

Daher entstehen geschlossene epistemische Kreisläufe:

```
PROC -> TRACE -> OBS/INFO -> MODEL -> MSG -> TRACE ...
```

Diese Schleife ist aber **kein Wahrheitsautomat**.

## 9. System -> Pfad / Prozess

```
SYS --Kin--> PATH
SYS --Sol--> PROC
SYS --Vya--> PROC
```

Diese Konversionen unterscheiden unterschiedliche Arten von Aktivierung:

- `Kin`: Verlauf/Weg;
- `Sol`: Impuls/Anstoß;
- `Vya`: gerichtete/intentionale Ausrichtung.

## 10. Möglichkeitsraum -> Grenze

```
SPACE --Lim--> BOUND
```

Das erzeugt eine Schwelle innerhalb oder am Rand eines Raums.

Es folgt nicht automatisch:

```
SPACE --Lim--> eingeschränkter SPACE
```

Dafür wäre ein zusätzlicher Schritt nötig.

## 11. Geschichte als Annotation statt Basistyp

Geschichte wird nicht mehr als eigener Basistyp `HIST` geführt. Sie ist eine **Pfadannotation** auf einem bestehenden semantischen Träger:

```
SYS + HISTORY
PROC + HISTORY
MODEL + HISTORY
```

Der Basistyp bleibt erhalten; zusätzlich wird festgehalten, welcher wirksame Pfad für spätere Operationen relevant ist.

`Ori` verlangt diese Annotation:

```
Ori(A, H) -> A'
```

mit `TYPE(A') = TYPE(A)` im Basismodell, aber nicht notwendig gleicher Bedeutung oder gleicher Fortsetzung.

Damit gilt:

```
GESCHICHTE != TYP
GESCHICHTE = PFADRELEVANTE ANNOTATION
```

Diese Trennung vermeidet die frühere Doppelmodellierung von Geschichte als `HIST` und zugleich als `history`-Feld der Pfadsemantik.

## 12. Explizite vs. implizite Konversion

Zwei Klassen sind zu unterscheiden.

### Explizit
Der Vektor benennt die Konversion klar:

```
TRACE --Log--> MODEL
MODEL --Tra--> MSG
REL --kora--> SYS
PROC --Res--> TRACE
```

### Kontextuell
Die Konversion ist nur durch Interpretation verständlich:

```
MSG --Res--> TRACE
REL --Rek--> PROC/REL
```

Kontextuelle Konversionen müssen im Corpus markiert bzw. durch Kontext eindeutig sein.

## 13. Verbot stiller epistemischer Aufstufung

Folgende Übergänge sind ohne explizite Operation unzulässig:

```
OBS -> TRUTH
TRACE -> TRUTH
MODEL -> TRUTH
MSG -> TRUTH
REL(Syn) -> TRUTH
```

Wahrheit bleibt eine separate Bewertungsrelation.

Ebenso unzulässig:

```
UNKNOWN -> Avi
```

Avi ist ontisch-semantisches Potenzial, kein epistemisches Nichtwissen.

## 14. Konversionspfade als Bedeutungsträger

Zwei Ausdrücke können denselben Endtyp erreichen und dennoch Verschiedenes bedeuten:

```
TRACE --Log--> MODEL
```

gegenüber:

```
TRACE --Ref--> INFO --Log--> MODEL
```

Beide enden in `MODEL`, aber der zweite Pfad bewahrt explizit den historischen Rückbezug.

Daher gilt:

```
gleicher OUTPUT-TYP != gleiche Bedeutung
```

Der **Pfad selbst** gehört zur Semantik.

## 15. Konsequenz für die Algebra

Mit Typkonversionen wird klar, dass Mishkenaz eher als gerichtetes Netz typisierter Übergänge modelliert werden sollte:

```
KNOTEN = semantische Typen
KANTEN = Vektoren / Operatoren / Konversionspfade
PFADE = zusammengesetzte Bedeutungen
```

Das ist strukturell näher an einem gerichteten Graphen bzw. einer kleinen Kategorie als an einem linearen Vektorraum.

Die mathematische Analogie bleibt methodisch und wird nicht ontologisch behauptet.

## 16. Nächster Prüfschritt

Nun sollte geprüft werden, ob Konversionspfade **konfluent** sind:

```
X -> ... -> Y
```

Wenn zwei verschiedene Pfade denselben Endtyp `Y` erreichen:

```
X --P1--> Y
X --P2--> Y
```

muss gefragt werden:

- sind die Ergebnisse semantisch gleich?
- nur typgleich?
- widersprüchlich?
- komplementär?
- historisch verschieden?

Besonders geeignet:

```
TRACE -> Log -> MODEL
TRACE -> Ref -> Log -> MODEL

REL -> kora -> SYS
REL -> Rek -> ... -> kora -> SYS

OBS -> Log -> MODEL
OBS -> Ref -> Log -> MODEL
```

Damit wird als nächstes **Konfluenz und Pfadsemantik** prüfbar.
