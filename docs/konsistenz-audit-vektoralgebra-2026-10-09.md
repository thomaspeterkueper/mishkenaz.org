# Mishkenaz — Konsistenz-Audit Vektoralgebra

**Stand:** 2026-10-09  
**Scope:** Dokumentation · TypeScript-Signaturen · Website · Validator

## Ergebnis

Der aktuelle Stand ist in seiner Grundarchitektur konsistent. Drei konkrete Abweichungen wurden gefunden und behoben:

1. **Saha-Signatur:** Im Typdokument stand versehentlich `SYS/TRACE/SYS -> OBS`. Korrigiert zu `SYS/TRACE -> OBS`, passend zur TypeScript-Spezifikation.
2. **Funktionale Klassifikation auf der Website:** `Sa-h`, `Wi`, `Ku`, `Ska`, `Rek` und `Ori` waren in der sichtbaren Querschnittsklassifikation nicht aufgeführt. Eine fünfte Funktionsgruppe `Bedingung & historische Form` wurde ergänzt.
3. **Arität von `-kora`:** Die Semantik verlangt mehrere Beteiligte. Der Validator prüft jetzt tatsächlich mindestens zwei `members` statt nur das Vorhandensein eines einzelnen Mitglieds.

## Bestätigte Übereinstimmungen

- V00 Avi bleibt außerhalb V01–V42 und ist kein Null- oder Identitätselement der Algebra.
- V01–V42 sind vollständig und positionsstabil.
- `-reso` und `-kora` bleiben getrennte Operationen.
- `Res`, `Saha`, `Ref`, `Log`, `Tra` bilden weiterhin einen epistemisch sinnvollen Pfad, ohne Wahrheit zu kodieren.
- `Syn` bleibt Übereinstimmungsrelation und kein Wahrheitsoperator.
- `Ori` bleibt historienabhängig und kein Identitätsoperator.
- Resonanzaspekte `-om/-ath/-il` liegen außerhalb der Vektoralgebra.
- Operatorhebung bleibt explizit und auf dokumentierte Fälle begrenzt.

## Geklärte Modellfragen (2026-10-09)

- `-reso` besitzt zwei typisierte Verwendungen: `REL -> REL` sowie `(SYS,SYS) -> REL`.
- `Ona` kann eine einzelne Formation als Ganzheit profilieren oder mehrere Formationen kollektiv zusammenfassen.
- `Ref` wird operativ als epistemische Konversion/Transformation mit relationalem Inhalt geführt.

## Weitere geklärte Modellfragen (Vertiefung 2026-10-09)

- Geschichte wird **nicht** als eigener Basistyp `HIST` geführt. Sie ist eine pfadrelevante Annotation; `Ori` verlangt sie explizit.
- Klammern bleiben reine Analyse-/Validatornotation für Bindungsstruktur und Operatorhebung.
- Der Apostroph wird nicht als allgemeines Operatorhebungszeichen kanonisiert; dafür fehlt ein belastbarer historischer Beleg und er trägt bereits andere sprachliche Funktionen.

## Noch offene Modellfrage

- Wie Operatorhebung in gesprochener R1-Sprache prosodisch oder durch spätere Lexikalisierung tatsächlich realisiert wird.

## Entwicklungsregel

Künftige Änderungen an Vektorsignaturen sollen gleichzeitig gegen vier Ebenen geprüft werden:

```
KANONISCHE BEDEUTUNG
-> TYP-SIGNATUR
-> KOMPOSITIONS-/ARGUMENTREGEL
-> WEBSITE-DARSTELLUNG
```

Eine Änderung gilt erst dann als konsolidiert, wenn alle vier Ebenen übereinstimmen.