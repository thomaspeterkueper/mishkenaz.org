# Mishkenaz — Visualisierungen

**Stand:** 2026-08-30  
**Scope:** Website und buchnahe Visualisierungen  
**Source of Truth:** `src/data/mishkenaz/visuals.ts`

## Ziel

Bilder auf der Mishkenaz-Website sind keine undifferenzierte Dekoration. Jede Visualisierung erhält einen expliziten Typ und Status, damit Atmosphäre, Erklärung und Kanon nicht miteinander verwechselt werden.

## Typen

### `atmospheric`

Atmosphärische Illustrationen machen Räume, Körperlichkeit, Kultur und Stimmung vorstellbar. Sie erklären nicht automatisch das Sprachsystem.

### `diagram`

Sachliche Grafiken erklären Vektoren, Grammatik, Galut, Phonologie oder andere strukturierte Inhalte. Sie sollen lesbar, vergrößerbar und referenzierbar sein.

### `hybrid`

Hybridvisualisierungen verbinden eine anschauliche Welt- oder Raumszene mit einer erklärenden Funktion. Sie müssen besonders klar ausweisen, welche Bildbestandteile gesetzt und welche nur visualisiert sind.

## Status

### `canonical`

Die Darstellung selbst ist als verbindliche Werksetzung freigegeben. Änderungen daran sind Kanonänderungen.

### `work-near`

Die Darstellung ist mit dem Werk vereinbar und darf die Vorstellung prägen, definiert aber noch keine verbindliche Rekonstruktion. Dies ist der Standardstatus für neue atmosphärische Raumstudien.

### `experimental`

Explorative Bildidee. Sie darf auf einer Studien-/Entwurfsseite gezeigt werden, soll aber nicht ohne Kontext als repräsentatives Mishkenaz-Bild eingesetzt werden.

## Erster Eintrag: Meditationskammer

`VIS-MISH-0001` ist eine **atmosphärische, werknahe Visualisierung**.

Die Raumstudie verbindet:

- kreisförmige Ordnung;
- ein zentrales Oberlicht als Öffnung, nicht als religiöses Symbol;
- Abstand zwischen den Menschen statt Verschmelzung;
- hängende Klangkörper als mögliche räumliche Resonanzträger;
- einen zentralen, nicht personalisierten Fokuspunkt;
- warme materielle Oberflächen und natürliche Topografie.

Das Bild ist damit für die Website geeignet, ohne zu behaupten, dass jede Mishkenaz-Meditationskammer exakt so gebaut sein müsse.

## Platzierung

Die Meditationskammer erhält drei Funktionen:

1. **Startseite:** großer Teaser für den Übergang von Sprache zu gelebter/gebauter Welt;
2. **`/mishkenaz/welt`:** vollständige kuratierte Darstellung mit Status, Caption und verwandten Themen;
3. **später optional Detailseite:** wenn genügend belastbarer Welt-/Raumkanon für einen eigenen Artikel vorliegt.

## Asset-Regel

Das Datenmodell trennt Metadaten und Binärasset. Solange `asset.ready = false` ist, rendert die Website einen kontrollierten Platzhalter statt eines gebrochenen Bildes. Sobald das optimierte WebP unter dem hinterlegten Pfad liegt, wird `ready` auf `true` gesetzt.

Für die Meditationskammer ist vorgesehen:

`/public/images/mishkenaz/meditationskammer-01.webp`

## Grundregel

Ein Bild wird erst dann zum Kanon, wenn **sein Status** ausdrücklich auf `canonical` geändert wurde. Die bloße Veröffentlichung auf der Website reicht dafür nicht aus.
