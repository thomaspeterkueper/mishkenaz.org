# Mishkenaz — Typisierte Vektoralgebra v0.1

**Stand:** 2026-10-07  
**Status:** formales Arbeitsmodell; noch kein vollständiger Kanon

## 1. Warum Typen nötig sind

Die funktionale Vektoralgebra zeigt, dass Mishkenaz-Kompositionen nicht beliebig sind.

Ein Vektor kann nur dann sinnvoll auf einen Ausdruck folgen, wenn sein Input-Typ mit dem vorherigen Output kompatibel ist.

Arbeitsnotation:

```
Vektor : INPUT -> OUTPUT
```

Mehrstellige Operationen:

```
Vektor : (INPUT1, INPUT2) -> OUTPUT
```

Die Typen sind semantische Klassen, keine Wortarten.

## 2. Basistypen

### POT
Potenzialbereich vor ausgeformter Richtung.

### SYS
relativ stabilisierte Formation / System / Einheit.

### REL
Relation zwischen unterscheidbaren Größen.

### PROC
Vorgang / Prozess / Veränderungsverlauf.

### PATH
gerichteter Verlauf bzw. realisierte Folge von Übergängen.

### SPACE
zugänglicher Raum / Möglichkeitsraum / Öffnungsbereich.

### BOUND
Grenze, Schwelle oder Differenzstruktur.

### TRACE
Residuum / Spur / verbleibender Effekt.

### OBS
Wahrnehmungs- oder Beobachtungszustand.

### INFO
übertragbarer oder aufgenommener Informationsinhalt.

### MODEL
strukturierte Rekonstruktion / Modell / explizite Ordnung.

### MSG
Mitteilungsereignis / Übertragung.

### HIST
historisch angereicherter Zustand bzw. Zustand mit Pfadbezug.

### CONFIG
strukturelle Konfiguration wie Symmetrie, Maß, Ganzheit.

Diese Typen können sich überlappen; sie dienen zunächst als Verträglichkeitsprüfung.

## 3. Vektortypen V01–V42

| ID | Form | Signatur (Arbeitsstand) | Kommentar |
|---|---|---|---|
| V01 | Sol | POT/SYS -> PROC | setzt einen Impuls / Beginn |
| V02 | Mira | PROC -> PROC | führt Bewegung/Fluss fort |
| V03 | Sa | SYS/REL -> BOUND + SYS/SYS | trennt bzw. erzeugt Bruch |
| V04 | Ona | SYS* -> CONFIG | fasst zu Ganzheit |
| V05 | Vya | SYS -> PROC | richtet einen Akteur/Prozess intentional |
| V06 | Saha | SYS/TRACE -> OBS | Wahrnehmung eines Gegenstands/Zustands |
| V07 | Nga | SYS -> MSG/PROC | Ruf/Kontaktimpuls |
| V08 | Pa | MSG/PROC -> TRACE/MSG | Echo/Antwort |
| V09 | La | SYS/BOUND -> SPACE | öffnet zugänglichen Raum |
| V10 | Ra | PROC/PATH -> PROC/PATH | Fortlauf/Strom |
| V11 | Sa-h | SYS/CONFIG -> PROC | Auflösung/Entropisierung |
| V12 | Bi | SYS/INFO -> REL | markiert Quelle/Herkunft |
| V13 | Wi | SYS -> CONFIG | kalter/entwärmter Zustand; kein Negationsoperator |
| V14 | Ku | SYS/REL -> REL | Mangel/Sog erzeugt gerichtete Relation |
| V15 | Thu | SPACE/SYS -> SPACE/SYS | Ausdehnung |
| V16 | Ma | (SYS,SYS) -> REL | Bindung |
| V17 | Ta | (SYS,SYS) -> BOUND/REL | Differenz/Gegenüber |
| V18 | Tor | REL/PROC -> REL/PROC | Torsion/Spannung |
| V19 | Flu | SYS/PROC -> PROC/SYS | Verwandlung |
| V20 | Kin | SYS -> PATH | Weg/Verlauf |
| V21 | Syn | (SYS/PROC/MODEL, SYS/PROC/MODEL) -> REL | Übereinstimmung/Gleichlauf |
| V22 | Abs | INFO/TRACE -> INFO/SYS | Aufnahme/Absorption |
| V23 | Ref | TRACE/OBS/MODEL/HIST -> INFO/MODEL | Rückbezug/Rückschau |
| V24 | Lim | SPACE/PROC -> BOUND | Schwelle/Grenze als Ort |
| V25 | Tra | INFO/MODEL/MSG -> MSG | Weitergabe |
| V26 | Ska | (SYS/PROC/MODEL, SYS/PROC/MODEL) -> REL/MODEL | Skalierung/Vergleich |
| V27 | Vol | SYS/PROC -> CONFIG | Instabilitätszustand |
| V28 | Res | PROC/SYS -> TRACE | Residuum/Rest |
| V29 | Avi-Sol | POT -> PROC/SYS | Auftreten/Aktualisierung |
| V30 | Mö | CONFIG/REL -> CONFIG/REL | Innen-Außen-Umkehrung |
| V31 | Rek | PROC/REL/SYS -> PROC/REL/SYS | Rückkopplung/rekursive Anwendung |
| V32 | Log | INFO/TRACE/OBS -> MODEL | Strukturierung/Modellbildung |
| V33 | Sym | (SYS,SYS) -> CONFIG/REL | Symmetrie |
| V34 | Phi | CONFIG/REL -> CONFIG | Maß/Harmonie |
| V35 | Ona-nO | CONFIG/HIST -> BOUND | Schwelle möglicher Integration/Wiederannäherung |
| V36 | Ori/-ori | HIST/SYS/PROC -> HIST/SYS/PROC | Wiederbegegnung unter veränderter Geschichte |
| V37 | -h/' | SYS/REL/CONFIG -> PROC/CONFIG | Auflösung/Loslassen |
| V38 | -val | PROC/REL/CONFIG -> SYS/CONFIG | Emergenz/neues Erscheinen |
| V39 | -reso | (SYS,SYS) / REL -> REL | Kopplung/Wechselwirkung |
| V40 | -ira | REL/SPACE -> REL/SPACE | Attraktion / gerichtete Verdichtung |
| V41 | -vya | REL/SPACE -> REL/SPACE | Distanzierung / gerichtete Streuung |
| V42 | -kora | SYS*/REL* -> CONFIG/SYS | Integration/Zusammenführung |

`SYS*` bedeutet: eine oder mehrere unterscheidbare Formationen.

Alle Signaturen bleiben prüfpflichtig.

## 4. Sichere Kompositionsklassen

### 4.1 Spur -> Rekonstruktion

```
PROC --Res--> TRACE
TRACE --Ref--> INFO/MODEL
INFO --Log--> MODEL
MODEL --Tra--> MSG
```

Diese Kette ist typkompatibel:

```
Res-Ref-Log-Tra
```

Sie erklärt, warum die epistemische Kette so stabil wirkt.

### 4.2 Relation ohne Synthese

```
(SYS,SYS) --Ta--> REL/BOUND
(SYS,SYS) --Ma--> REL
REL --reso--> REL
```

Damit ist die Struktur

```
Ma'Ta'U-reso
```

typologisch plausibel: gebundene Systeme bleiben unterscheidbar und gekoppelt.

`-kora` wäre ein zusätzlicher Schritt:

```
REL/SYS* --kora--> CONFIG/SYS
```

und ist deshalb nicht implizit in `-reso` enthalten.

### 4.3 Öffnung und Schwelle

```
SYS --La--> SPACE
SPACE --Lim--> BOUND
```

Das bedeutet:

> Ein Raum kann geöffnet und eine Schwelle darin bestimmt werden.

Aber:

```
La-Lim != Einschränkung des gesamten Möglichkeitsraums
```

weil `Lim` zunächst nur eine Schwelle liefert.

### 4.4 Historische Rekursion

```
SYS/PROC --Rek--> SYS/PROC
SYS/PROC + Geschichte --Ori--> HIST/SYS/PROC
```

`Rek` kann formal rekursiv sein, ohne Geschichte explizit zu verändern.  
`Ori` verlangt dagegen historischen Kontext:

```
Ori(A,H) = A'
```

mit `H` als wirksamer Verlauf.

## 5. Typverletzungen

Folgende Kombinationen sind ohne zusätzliche Konversion semantisch verdächtig:

### Res-Sol

`Res` liefert TRACE, `Sol` erwartet eher POT/SYS.

```
TRACE --Sol--> ?
```

müsste zuerst erklären, wie eine Spur selbst zum Handlungsträger/Impulsgeber wird.

### Tra-Res

`Tra` liefert MSG; `Res` erwartet eher PROC/SYS.

```
MSG --Res--> ?
```

ist nur sinnvoll, wenn „Nachwirkung einer Mitteilung“ ausdrücklich gemeint ist.

### Saha-kora

`Saha` liefert OBS; `-kora` integriert SYS/REL.

Eine Beobachtung kann nicht ohne Typkonversion einfach „integriert“ werden. Denkbar wäre erst:

```
OBS --Log--> MODEL --kora?--> CONFIG
```

### Syn = Wahrheit

`Syn` liefert REL (Übereinstimmungsrelation), keinen Wahrheitswert.

Daher typologisch:

```
Syn : (MODEL,TRACE) -> REL
```

nicht:

```
Syn : MODEL -> TRUTH
```

## 6. Nicht-Kommutativität

Mindestens folgende Paare sind klar nicht-kommutativ:

```
Res-Ref != Ref-Res
Ref-Log != Log-Ref
La-Lim != Lim-La
Ma-Ta != Ta-Ma
Res-Tra != Tra-Res
Rek-Ori != Ori-Rek
```

Die genaue Bedeutung der Rückrichtung ist nicht immer definiert. Nicht-Kommutativität kann daher heißen:

1. beide Richtungen sind sinnvoll, aber verschieden;
2. nur eine Richtung ist typkompatibel.

## 7. Partielle statt totale Algebra

Die wichtigste formale Konsequenz:

> Die Mishkenaz-Komposition ist **partiell**.

Nicht für jedes Paar `A,B` existiert eine gültige Komposition `A∘B`.

Damit ähnelt das System eher einer:

- typisierten partiellen Algebra,
- kleinen Kategorie mit morphismusartigen Operationen,
- oder einem semantischen Termsystem

als einem linearen Vektorraum.

Diese Analogien bleiben methodisch; noch wird keine mathematische Identität behauptet.

## 8. Neutral-, Invers- und Absorptionselemente

### Avi
Noch **kein** nachgewiesenes neutrales Element.

### Ta
Kein Invers von Ma. Differenz hebt Bindung nicht einfach auf.

### Sa / -h
Keine universellen Inversen von `Ma` oder `-kora`; Trennung/Auflösung kann irreversibel oder strukturell anders sein.

### -kora
Kein absorbierendes Element. Integration löscht nicht notwendig interne Differenz.

### Ori
Kein Invers der Geschichte. Wiederkehr stellt Vergangenheit nicht wieder her.

Bisher besitzt das System daher **keine bestätigten Gruppenaxiome**.

## 9. Pfadabhängigkeit

Die stärkste formale Stelle ist `Ori`.

Wenn zwei Systeme im sichtbaren Zustand gleich erscheinen:

```
A_t = B_t
```

aber unterschiedliche Historien besitzen:

```
H_A != H_B
```

dann darf gelten:

```
Ori(A_t,H_A) != Ori(B_t,H_B)
```

Das heißt:

> Gegenwärtige Gleichheit schirmt die Geschichte nicht notwendig ab.

Diese Lesart passt zur aktuellen Omnizedenz-Arbeit, wird aber im Mishkenaz-Modell als **ausdrückbare Möglichkeit**, nicht als notwendiges Naturgesetz geführt.

## 10. Ergebnis

Der Begriff „Algebra“ ist inzwischen mehr als Metapher, sofern er präzisiert wird als:

```
TYPISIERTE PARTIELLE SEMANTISCHE ALGEBRA
```

Noch nicht gerechtfertigt sind:

- Linearität;
- Kommutativität;
- Assoziativität im Allgemeinen;
- neutrales Element;
- Inversen;
- Abschluss aller Operationen.

Die nächste formale Prüfung muss daher **Assoziativität und Bindungsstruktur** untersuchen:

```
(A-B)-C ?= A-(B-C)
```

Gerade bei `Res-Ref-Log`, `Ma-Ta-reso` und `Rek-Ori` dürfte die Klammerung Bedeutung tragen.
