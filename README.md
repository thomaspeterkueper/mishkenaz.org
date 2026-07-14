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

## Status

**Stand 2026-07-14: Grundgerüst angelegt, alle sechs Seiten sind Platzhalter.**
Content-Migration/-Aufbau aus den kanonischen OTA-Dokumenten (OTA-FND, OTA-LIT)
steht noch aus und erfolgt nach der etablierten read-before-write-Methodik.

> Hinweis zu ECO-ARC-0009: Die dort unter „Folgeaufgaben" als *erledigt*
> markierte Content-Migration aus `thomas-kueper.de` hat zum Zeitpunkt dieses
> Commits **nicht** stattgefunden. Dieser Punkt sollte im Entscheidungsdokument
> korrigiert werden.
