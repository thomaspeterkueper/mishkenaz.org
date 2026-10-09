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

## Noch offene Modellfragen

Keine dieser Fragen ist ein aktueller Widerspruch, sie bleiben aber bewusst offen:

- Ob `-reso` formal besser als binäre Operation auf `(SYS,SYS)` und zusätzlich als unärer Operator auf `REL` modelliert werden sollte.
- Ob `Ona` semantisch eine Mindestanzahl von zwei Mitgliedern verlangt oder auch eine einzelne Formation als Ganzheit profilieren kann.
- Ob `Ref` als Relationsoperation oder als epistemische Konversion primär klassifiziert werden soll; die Signatur ist konsistent, die Funktionsklasse bleibt interpretativ.
- Ob `HIST` langfristig eigener Typ oder Typanreicherung/Annotation sein soll.
- Wie Operatorhebung orthographisch/prosodisch im eigentlichen Mishkenaz markiert wird.

## Entwicklungsregel

Künftige Änderungen an Vektorsignaturen sollen gleichzeitig gegen vier Ebenen geprüft werden:

```
KANONISCHE BEDEUTUNG
-> TYP-SIGNATUR
-> KOMPOSITIONS-/ARGUMENTREGEL
-> WEBSITE-DARSTELLUNG
```

Eine Änderung gilt erst dann als konsolidiert, wenn alle vier Ebenen übereinstimmen.