# Mishkenaz — Prüfvollzug: Vergleich ohne Wahrheitskurzschluss

**Stand:** 2026-10-07  
**Status:** Arbeitsmodell

## Ziel

Prüfen, ob vorhandene Vektoren bereits einen prüfenden Vergleich tragen können, ohne `Syn` mit „wahr“ oder `Ta` mit „falsch“ gleichzusetzen.

## 1. Drei Stufen

Die sauberste Architektur ist:

```
1. ERHEBEN / REKONSTRUIEREN
2. VERGLEICHEN
3. WAHRHEITSWERT EINER BEHAUPTUNG BESTIMMEN
```

Diese Stufen sind nicht identisch.

### Erheben / Rekonstruieren
Vorhandene Mittel:
- `Saha` — Wahrnehmung
- `Res` — Residuum / Spur
- `Ref` — Rückschau
- `Log` — strukturierende Modellbildung

### Vergleichen
Vorhandene Kandidaten:
- `Syn` — Synchronie / Übereinstimmung
- `Ta` — Differenz / Gegenüber

### Wahrheitswert
Noch keine kanonische R1-Lexik.

## 2. Warum Syn nicht „wahr“ ist

`Syn` beschreibt Übereinstimmung oder Gleichlauf zwischen zwei Strukturen oder Vorgängen.

Eine Behauptung kann:
- teilweise mit einer Spur übereinstimmen;
- in einem Messwert übereinstimmen, aber in ihrer Erklärung falsch sein;
- mit einem Modell übereinstimmen, das selbst falsch ist.

Daher:

```
Syn(A,B) != WAHR(A)
```

## 3. Warum Ta nicht „falsch“ ist

`Ta` markiert Differenz, Grenze oder Gegenüber.

Eine Differenz kann:
- Messfehler anzeigen;
- Modellgrenzen anzeigen;
- verschiedene Referenzrahmen anzeigen;
- tatsächliche Falschheit anzeigen;
- oder schlicht zwei verschiedene, beide zutreffende Beschreibungen unterscheiden.

Daher:

```
Ta(A,B) != FALSCH(A)
```

## 4. Kandidat für einen Prüfpfad

Analytisch:

```
Res-Saha / Res-Ref-Log
          ↓
       Vergleich
       ↙      ↘
     Syn       Ta
       \      /
     Bewertung der Behauptung
```

Das Vektorsystem besitzt damit wahrscheinlich bereits die **Vergleichssemantik**, aber noch nicht den logischen Wahrheitsprädikator.

## 5. Konsequenz für Kontrakosmologie

Gerade `Ta` ist für kontrakosmologische Fälle wichtig:

```
Ta(A,B)
```

kann bedeuten, dass zwei Beschreibungen oder Systeme verschieden bleiben.

Es folgt ausdrücklich nicht:

```
A falsch oder B falsch
```

Damit kann Mishkenaz prinzipiell modellieren:

> Zwei Beschreibungen unterscheiden sich und können dennoch jeweils relativ zu ihrem Referenzrahmen zutreffen.

Das verstärkt den Bedarf nach expliziter Referenzmarkierung, nicht nach einem schnell eingeführten Wahrheitsmorphem.

## 6. Ergebnis

Für **Prüfung** fehlt möglicherweise weniger als zunächst gedacht:

- Datengrundlage: vorhanden
- Rekonstruktion: kompositional plausibel
- Vergleich: Syn/Ta vorhanden
- Wahrheitsprädikation: offen

Der nächste echte lexikalisch-grammatische Bedarf ist daher nicht „prüfen“, sondern **Zutreffen/Nichtzutreffen einer Behauptung relativ zu ihrem Referenzrahmen**.
