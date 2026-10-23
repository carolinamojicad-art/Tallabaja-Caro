import {readFileSync,writeFileSync} from 'node:fs';
import {getTallaBajaAlerts} from '../src/utils/tallaBajaAlerts';
const summaryPath = new URL('../src/data/tallaBajaSummary.json',import.meta.url);
const summary=JSON.parse(readFileSync(summaryPath,'utf8'));
const patients=JSON.parse(readFileSync(new URL('../src/data/tallaBajaPatients.local.json',import.meta.url),'utf8'));
for (const year of ['2025','2026']) {
 const rows=patients[year];
 const distribution=(key:string)=>Object.entries(rows.reduce((counts:Record<string,number>,row:any)=>{const label=row[key]||'Sin información'; counts[label]=(counts[label]||0)+1;return counts;},{})).map(([label,value])=>({label,value}));
 const counts:Record<string,number>={};
 const withAlerts=rows.filter((row:any)=>{const alerts=getTallaBajaAlerts(row);for(const key of new Set(alerts.map(a=>a.key))) counts[key]=(counts[key]||0)+1;return alerts.length>0;}).length;
 if(rows.length!==summary[year].total) throw new Error('El total agregado no coincide con la base');
 summary[year].publicMetrics={eps:distribution('eps'),imcEdad:distribution('imcEdad'),patientsWithAlerts:withAlerts,alertsByType:counts,alertEvaluationDate:new Intl.DateTimeFormat('en-CA',{timeZone:'America/Bogota',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date())};
}
writeFileSync(summaryPath,JSON.stringify(summary,null,2)+'\n');
console.log('Resumen público actualizado: únicamente conteos, categorías y fecha de corte.');
