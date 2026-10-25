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
  layouts/Layout.astro     Gemeinsames Seiten-Layout (Header/Nav/Footer)
  pages/
    index.astro             Start
    grammatik.astro         Grammatik
    proto-mishkenaz.astro   Proto-Mishkenaz
    rueckuebersetzung.astro Rückübersetzung
    vektoren.astro          Vektoren
    woerterbuch.astro       Wörterbuch
external-tasks/
  open/                     Offene Anforderungen an dieses Repo
  done/                     Erledigte Anforderungen
  rejected/                 Abgelehnte Anforderungen
```

## Forschungsnotizen

- [Sprachwelt: Ebenen und Konkordanz](docs/sprachwelt-ebenen-und-konkordanz.md) – Kanonsprache, historische Schichten, Figurenrede (25.10.2026)
- [Abgleich Mishkenaz – relationale Prozessontologie – Trilogie der Antwortfähigkeit](docs/abgleich/2026-10-25-mishkenaz-prozessontologie-trilogie.md) (25.10.2026)

## Status

**Stand 2026-10-25:** Alle sechs Inhaltsseiten sind gefüllt. Grammatik, Vektoren und Urgesten wurden im September 2026 kanonisch neu gefasst; Start, Wörterbuch und Rückübersetzungen sind am 25.10.2026 aus `thomas-kueper.de` übernommen und an die Kanonsprache angepasst (Ebenenmodell, Konkordanz, Beschlüsse in `docs/`). Ein Abgleich mit den OTA-Dokumenten (OTA-FND, OTA-LIT) steht noch aus.
