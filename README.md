# Mishkenaz

Website zu einem Sprachforschungsprojekt: eine konstruierte Sprache, deren
Wandel auf physiologischen und umgebungsbedingten Faktoren basiert. Im
Buchuniversum ist sie die Sprache der Überlebenden Dvarakas, die sich nach dem
Untergang der Stadt weltweit verteilt und angepasst hat.

## Rolle im Ökosystem

Mishkenaz ist Teil des KUEPER-Ökosystems (Ökosystem-Code `MISH`) und Source of
Truth für die linguistische Ausarbeitung dieser Sprache: Phonologie, Grammatik,
Wandelregeln, Lexikon, Dialektvarianten. Details und Abgrenzung zu `noxia-universe` und `thomas-kueper.de`: [`decisions/ECO-ARC-0009-2026-DE.md`](https://github.com/thomaspeterkueper/kueper-ecosystem/blob/main/decisions/ECO-ARC-0009-2026-DE.md) im Repository `kueper-ecosystem`.

## Verbindliche Ökosystem-Regeln

Die vollständigen, aktuell gültigen Regeln für alle KUEPER-Projekte (Registrierung,
Cross-Repo-Anforderungen, Zuständigkeiten, Datenschutz-Vorgaben) stehen zentral hier:

**[`kueper-ecosystem/docs/onboarding-template.md`](https://github.com/thomaspeterkueper/kueper-ecosystem/blob/main/docs/onboarding-template.md)**

Bitte auf diesen Link verweisen statt den Inhalt zu kopieren — er wird zentral
aktuell gehalten.

## Cross-Repository-Anforderungen

Änderungswünsche an andere Projekte werden nicht direkt committet, sondern als
External Task in `external-tasks/open/` des jeweiligen Ziel-Repositories abgelegt.
Anforderungen an Mishkenaz liegen entsprechend hier unter `external-tasks/open/`.
Format: [`ECO-ARC-0006`](https://github.com/thomaspeterkueper/kueper-ecosystem/blob/main/decisions/ECO-ARC-0006-2026-DE.md).

## Tech-Stack

Statische Website mit [Astro](https://astro.build), analog zum Aufbau von
`thomas-kueper.de`.

### Setup

```bash
npm install
npm run dev       # lokaler Dev-Server
npm run build     # Produktions-Build nach ./dist
```

### Struktur

```
src/
  layouts/
    Layout.astro            Gemeinsames Seiten-Layout (Header/Nav/Footer)
    BaseLayout.astro        Basis-Layout für die migrierten Vollseiten
  components/mishkenaz/     Seiten-Komponenten (z. B. VisualFigure)
  data/mishkenaz/           Kanon-Datenquellen (core, lexicon, phonology, visuals)
  pages/
    index.astro             Start
    grammatik.astro         Grammatik
    proto-mishkenaz.astro   Proto-Mishkenaz
    rueckuebersetzung.astro Rückübersetzung
    vektoren.astro          Vektoren
    woerterbuch.astro       Wörterbuch
    mishkenaz/              Kanonische Vollseiten (migrierter Content)
      index.astro             Übersicht: System, Aspekte, Galut-Schichten
      grammatik.astro         Grammatik
      proto-mishkenaz.astro   Proto-Mishkenaz (Urgesten)
      rueckuebersetzung.astro Rückübersetzungen
      vektoren.astro          Vektoren (aus core.ts)
      welt.astro              Welt
      woerterbuch.astro       Wörterbuch mit Live-Suche
external-tasks/
  open/                     Offene Anforderungen an dieses Repo
  done/                     Erledigte Anforderungen
  parked/                   Zurückgestellte Anforderungen
  rejected/                 Abgelehnte Anforderungen
docs/
  coherence/                Kohärenz-Dokumente (Audits, Kanon-Abgrenzungen)
scripts/
  check-mishkenaz-canon.mjs Kanon-Check (CI: npm run check:canon)
```

## Status

**Stand 2026-08-31: Content-Migration aus `thomas-kueper.de` abgeschlossen; die
Website entspricht dem v0.9-Sprachkanon.**

Die vollständige Mishkenaz-Ausarbeitung liegt unter `src/pages/mishkenaz/` als
kanonische Fassung vor (EXT-ECO-MISH-20260714-001, abgeschlossen 2026-08-29);
die Top-Level-Einstiege delegieren auf diese Seiten und erzeugen keine zweite
Inhaltsversion. Die Übereinstimmung mit dem v0.9-Kanon sichert der Kanon-Check
im CI (`npm run check:canon`); der inhaltliche Abgleich ist dokumentiert in
[`docs/coherence/mishkenaz-v0.9-site-audit-2026-08-30.md`](docs/coherence/mishkenaz-v0.9-site-audit-2026-08-30.md).
