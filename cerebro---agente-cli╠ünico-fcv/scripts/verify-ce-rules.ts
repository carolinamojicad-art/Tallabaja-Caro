import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {adherenceStatus,attendanceStatus,evaluateCERules} from '../src/utils/ceRules';
import type {TallaBajaPatient} from '../src/data/tallaBajaPatients';
const data=JSON.parse(readFileSync(new URL('../src/data/tallaBajaSample.json',import.meta.url),'utf8')) as Record<'2025'|'2026',TallaBajaPatient[]>;
assert.equal(data['2025'].length,39);assert.equal(data['2026'].length,148);
assert.equal(new Set([...data['2025'],...data['2026']].map(r=>r.documento)).size,166);
assert.equal(adherenceStatus('SI'),'Sí');assert.equal(adherenceStatus('Pendiente'),'Sin dato');assert.equal(adherenceStatus('Finalizado'),'Finalizado');
assert.equal(attendanceStatus('No asiste a todas las citas'),'Asiste parcialmente');assert.equal(attendanceStatus('Pendiente (famisanar)'),'Sin dato');
const base={...data['2026'][0],edad:'10.2',talla:'130',tratamientoEndocrino:'SI',adherenciaOriginal:'Sí',asistencia:'Si asiste',carpograma:'NO APLICA',genetica:'NO',reporteGenetica:'NO'} as TallaBajaPatient;
assert.equal(evaluateCERules(base).length,0,'Missing SAHI variables must not create fictional clinical findings');
assert.ok(evaluateCERules({...base,edad:'10.22'}).some(r=>r.key==='calidad'));
assert.ok(evaluateCERules({...base,edad:'130'}).some(r=>r.key==='calidad'));
assert.ok(evaluateCERules({...base,adherenciaOriginal:'Tratamiento pausado'}).some(r=>r.key==='adherencia'));
assert.ok(!evaluateCERules({...base,adherenciaOriginal:'Tratamiento pausado',motivoNoAdherencia:'Pausa por indicación médica'}).some(r=>r.key==='adherencia'));
assert.ok(!evaluateCERules({...base,adherenciaOriginal:'Finalizado'}).some(r=>r.key==='adherencia'));
assert.ok(evaluateCERules({...base,somatropina:'Activo',medicamentoHastaCita:'No'}).some(r=>r.key==='continuidad'));
assert.equal(evaluateCERules({...base,estatusPrograma:'Egresó',adherenciaOriginal:'No'}).length,0);
assert.ok(!evaluateCERules({...base,genetica:'No',reporteGenetica:'Pendiente'}).some(r=>r.key==='genetica'));
assert.ok(evaluateCERules({...base,genetica:'SI',reporteGenetica:'Pendiente'}).some(r=>r.key==='genetica'));
for(const year of ['2025','2026'] as const) {
 assert.equal(data[year].filter(r=>r.atencionEndocrino!=='Sin dato').length,0);
 console.log(year,JSON.stringify(data[year].reduce((a,r)=>{const k=adherenceStatus(r.adherenciaOriginal);a[k]=(a[k]||0)+1;return a;},{} as Record<string,number>)));
}
console.log('CE: controles de normalización, reglas, excepciones médicas, egreso y cruce por documento OK.');
