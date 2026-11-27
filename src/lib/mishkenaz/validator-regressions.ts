import { validateVectorExpression } from './expression-validator';
import { compareBracketings, validateBracketedExpression } from './bracket-validator';
import { analyzeExpression } from './unified-analyzer';
import { createReferent, typeReferentForRole } from './reference-semantics';

export interface RegressionCase {
  id: string;
  description: string;
  passed: boolean;
  expected: string;
  actual: string;
}

export interface RegressionReport {
  total: number;
  passed: number;
  failed: number;
  cases: RegressionCase[];
}

export function runValidatorRegressions(): RegressionReport {
  const cases: RegressionCase[] = [];

  const linear = [
    ['linear-res-ref-log', 'Res-Ref-Log bleibt typkompatibel.', 'Res-Ref-Log', true],
    ['linear-la-lim', 'La-Lim bildet Öffnung gefolgt von Schwelle.', 'La-Lim', true],
    ['linear-res-sol', 'Res-Sol bleibt als direkter Typbruch erkennbar.', 'Res-Sol', false],
    ['linear-ref-log-tra', 'Ref-Log-Tra kann in einer Modell-Mitteilungs-Kette stehen.', 'Ref-Log-Tra', true],
  ] as const;

  for (const [id, description, expression, expectedValid] of linear) {
    const result = validateVectorExpression(expression);
    cases.push({
      id, description,
      passed: result.valid === expectedValid,
      expected: expectedValid ? 'valid' : 'invalid',
      actual: result.valid ? 'valid' : 'invalid',
    });
  }

  const bracketed = [
    ['bracket-ma-ta-reso', 'Ma-Ta kann als gehobene Bindung-unter-Differenz vor -reso dienen.', '(Ma-Ta)-reso', true],
    ['bracket-res-ref-log', 'Expliziter Rückbezug vor Modellbildung bleibt gültig.', '(Res-Ref)-Log', true],
    ['bracket-ref-log-lift', 'Ref-Log kann als gehobener Rekonstruktionsoperator auf Res folgen.', 'Res-(Ref-Log)', true],
    ['bracket-la-lim-ta', 'La-Lim plus Ta ist ohne weitere Operatorhebung noch nicht direkt typisiert.', '(La-Lim)-Ta', false],
    ['bracket-no-implicit-lift', 'Operatorhebung verlangt explizite Klammerung; Ma-Ta-reso bleibt als lineare Folge typbrüchig.', 'Ma-Ta-reso', false],
    ['bracket-single-vector-group', 'Die Klammerung eines einzelnen Vektors hebt keine Folge.', '(Ma)-Ta', false],
    ['bracket-ma-ta-reso-kora', 'Explizit gehobene Ma-Ta-Einheit trägt -reso und -kora.', '(Ma-Ta)-reso-kora', true],
  ] as const;

  for (const [id, description, expression, expectedValid] of bracketed) {
    const result = validateBracketedExpression(expression);
    cases.push({
      id, description,
      passed: result.valid === expectedValid,
      expected: expectedValid ? 'valid' : 'invalid',
      actual: result.valid ? 'valid' : 'invalid',
    });
  }

  const comparisons = [
    ['compare-res-ref-log', 'Res/Ref/Log erreicht denselben Endtyp über verschiedene Pfade.', '(Res-Ref)-Log', 'Res-(Ref-Log)', 'same-output-only'],
    ['compare-ma-ta-reso', 'Ma/Ta/reso bleibt klammerungssensitiv.', '(Ma-Ta)-reso', 'Ma-(Ta-reso)', 'one-invalid'],
    ['compare-rek-ori', 'Rek-Ori und Ori-Rek bleiben getrennte Strukturen.', '(Rek-Ori)', '(Ori-Rek)', 'same-output-only'],
    ['compare-implicit-vs-explicit', 'Ungeklammerte Folge und explizit gehobene Einheit sind nicht strukturgleich.', 'Ma-Ta-reso', '(Ma-Ta)-reso', 'one-invalid'],
  ] as const;

  for (const [id, description, left, right, expectedRelation] of comparisons) {
    const result = compareBracketings(
      left,
      right,
      id === 'compare-rek-ori',
    );
    cases.push({
      id, description,
      passed: result.relation === expectedRelation,
      expected: expectedRelation,
      actual: result.relation,
    });
  }

  const referents = [
    ['referent-id-from-surface', 'Ein Referent erhält eine normalisierte ID aus seiner Oberfläche.', createReferent('Daria', 'proper-name').id, 'daria'],
    ['referent-id-fallback', 'Ohne verwertbare Oberfläche fällt die Referent-ID auf „referent“ zurück.', createReferent('—', 'abstract').id, 'referent'],
    ['referent-name-not-space', 'Ein Eigenname wird nicht automatisch als Raum typisiert.', typeReferentForRole(createReferent('Daria', 'proper-name'), { role: 'left', allowedTypes: ['SPACE'] }).semanticTypes.join(', ') || 'keine', 'keine'],
    ['referent-place-context', 'Ein Ortsname kann im Rollenkontext als Raum typisiert werden.', typeReferentForRole(createReferent('Dvārakā', 'place-name'), { role: 'left', allowedTypes: ['SPACE'] }).semanticTypes.join(', '), 'SPACE'],
  ] as const;

  for (const [id, description, actual, expected] of referents) {
    cases.push({
      id, description,
      passed: actual === expected,
      expected,
      actual,
    });
  }

  const unified = [
    ['unified-cross-operator-args', 'Mitgelieferte Argumente gelten je Operator nur für dessen Rollen.', '(Ma-Ta)-reso-kora', 'left:SYS,right:SYS,members:SYS,members:SYS'],
  ] as const;

  for (const [id, description, expression, argumentSpec] of unified) {
    const result = analyzeExpression(expression, argumentSpec);
    cases.push({
      id, description,
      passed: result.valid && result.argumentComplete && result.issues.length === 0,
      expected: 'valid, vollständig, ohne Hinweise',
      actual:
        (result.valid ? 'valid' : 'invalid') + ', ' +
        (result.argumentComplete ? 'vollständig' : 'unvollständig') + ', ' +
        result.issues.length + ' Hinweis(e)',
    });
  }

  const passed = cases.filter(test => test.passed).length;
  return { total: cases.length, passed, failed: cases.length - passed, cases };
}

export function formatRegressionReport(report: RegressionReport): string {
  const lines = ['Regressionen: ' + report.passed + '/' + report.total + ' bestanden'];
  for (const test of report.cases) {
    lines.push(
      (test.passed ? 'PASS ' : 'FAIL ') + test.id + ': ' + test.description +
      ' [erwartet=' + test.expected + '; tatsächlich=' + test.actual + ']'
    );
  }
  return lines.join('\n');
}