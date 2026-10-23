import patients from '../data/tallaBajaPatients';
import React, { useState } from 'react';
import { Baby, Users, ClipboardList, CalendarDays, Info } from 'lucide-react';
import summary from '../data/tallaBajaSummary.json';
import { CentroExcelencia } from '../types/clinical';
import { TallaBajaOverview } from './TallaBajaOverview';
import { TallaBajaPatients } from './TallaBajaPatients';
import { DonutChart } from './DonutChart';

export const TALLA_BAJA_CENTRO: CentroExcelencia = {
  id: 38, codigo: 'TB-01', nombre: 'Centro de Excelencia de Talla Baja', categoria: 'pediatrico',
  descripcion: 'TALLI · Seguimiento del programa, educación y ruta de atención. Base 2026: 148 pacientes registrados.',
  pacientesActivos: 148, pacientesTotales: 148, alertasActivas: 0, colorIcono: 'cyan', iconoNombre: 'Baby',
};
const colors = ['#7c3aed', '#0891b2', '#f59e0b', '#10b981', '#f43f5e', '#64748b', '#2563eb', '#a855f7'];
const colorFor = (label: string, index: number) => ({'Pendiente':'#f59e0b','Sin información':'#94a3b8','Por verificar':'#f59e0b','Masculino':'#0891b2','Femenino':'#7c3aed','No aplica':'#cbd5e1','Sí':'#10b981','No':'#f43f5e'}[label] || colors[index % colors.length]);

export function TallaBajaDashboard() {
  const [year, setYear] = useState<'2025' | '2026'>('2026');
  const data = summary[year];
  const [epsFilter, setEpsFilter] = useState<string|null>(null);
  const ageGroups = data.demographics.find(chart => chart.title === 'Edad')!.values;
  const maxAgeCount = Math.max(1, ...ageGroups.map(group => group.value));
  const pending = data.charts.find(c => c.title === 'Seguimiento')?.values.find(v => v.label === 'Pendiente')?.value || 0;
  const education = data.charts.find(c => c.title === 'Educación recibida')?.values.find(v => v.label === 'Sí')?.value || 0;
  return <section className="talla-dashboard page-enter space-y-6 min-w-0">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-center gap-3"><div className="p-3 rounded-2xl bg-cyan-100 text-cyan-700"><Baby className="w-7 h-7" /></div><div><p className="text-xs font-bold uppercase tracking-wider text-cyan-700">TALLI · Centro de Excelencia</p><h1 className="text-2xl font-bold text-slate-900">Talla Baja</h1><p className="text-sm text-slate-500">Seguimiento integral y ruta de atención del programa</p></div></div>
      <label className="text-sm font-medium text-slate-700">Hoja de la base <select aria-label="Año de la base de Talla Baja" value={year} onChange={e => {setYear(e.target.value as '2025' | '2026');setEpsFilter(null);}} className="ml-2 border border-slate-200 bg-white rounded-xl px-4 py-3"><option>2026</option><option>2025</option></select></label>
    </div>
    <TallaBajaOverview year={year} eps={epsFilter} onEps={setEpsFilter} />
    {patients[year].length > 0 ? <TallaBajaPatients key={year} year={year} eps={epsFilter} setEps={setEpsFilter} /> : <section id="alertas-agregadas" className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4"><div><h2 className="font-semibold text-slate-900">Resumen agregado de alertas</h2><p className="text-xs text-slate-500 mt-1">Corte de evaluación: {data.publicMetrics.alertEvaluationDate}. Un paciente puede aparecer en varias categorías.</p></div><div className="talla-alert-grid">{Object.entries(data.publicMetrics.alertsByType).map(([key,value])=><div key={key} className="rounded-xl border border-amber-200 bg-amber-50 p-4"><p className="text-xs text-slate-600">{({seguimiento:'Seguimiento pendiente',edad:'Edad por validar o faltante',sexo:'Sexo por verificar',mediciones:'Mediciones por verificar',cita:'Citas pendientes o por confirmar',llamada:'Cita o control referido en llamada',control:'Seguimiento con fecha registrada',contacto:'Contacto estimado por revisar',inasistencia:'Inasistencia o barrera de agenda'} as Record<string,string>)[key]||key}</p><strong className="text-2xl text-amber-700">{value}</strong><span className="ml-2 text-xs text-slate-500">pacientes</span></div>)}</div><p className="text-sm text-slate-600">Vista pública de estadísticas. No se incluyen nombres, documentos, listado individual ni observaciones de llamadas. Las alertas son conteos de gestión del corte y no confirman urgencias clínicas ni inasistencia.</p></section>}
    <details className="rounded-2xl border border-slate-200 bg-white p-5"><summary className="cursor-pointer font-semibold text-slate-700">Ver gráficos de seguimiento y ruta de atención</summary>
    <h2 className="text-xl font-bold text-slate-900">Seguimiento y ruta de atención</h2>
    <div className="talla-chart-grid">{data.charts.map(chart => <article key={chart.title} className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 min-w-0"><div><h2 className="font-semibold text-slate-900">{chart.title}</h2><p className="text-xs text-slate-500 mt-1">Distribución de registros · {year} · n = {data.total}</p></div><DonutChart data={chart.values.map((v,i) => ({...v,color:colorFor(v.label,i)}))} centerLabel={String(data.total)} centerSublabel="registros" size={150} /><details className="text-xs text-slate-600"><summary className="cursor-pointer py-2">Ver cifras y porcentajes</summary><table className="w-full mt-2"><caption className="text-left text-slate-500 pb-2">Columna: {chart.source}</caption><thead><tr><th className="text-left py-2">Estado</th><th className="text-right">Pacientes</th><th className="text-right">%</th></tr></thead><tbody>{chart.values.map(v => <tr key={v.label} className="border-t border-slate-100"><td className="py-2">{v.label}</td><td className="text-right">{v.value}</td><td className="text-right">{(v.value/data.total*100).toFixed(1)} %</td></tr>)}</tbody></table></details></article>)}</div>
    </details>
    <div className="bg-white border border-slate-200 rounded-2xl p-5 text-sm text-slate-600 space-y-2"><h2 className="font-semibold text-slate-900">Alcance y calidad de los datos</h2><p>Fuente: Base de datos Pacientes Talla Baja Tablero.xlsx. Se incluyeron filas con documento: 39 en 2025 y 148 en 2026, sin documentos repetidos dentro de cada hoja. “Pacientes registrados” no equivale a pacientes activos confirmados.</p><p>Se unifican mayúsculas, tildes y espacios. Las respuestas que comienzan por “Pendiente” se agrupan como pendientes. La educación registrada como “SI SOBRE TALLA BAJA…” se cuenta como recibida; los textos descriptivos del carpograma se muestran como “Reporte registrado”, sin interpretar resultados clínicos.</p><p>No se calculan controles vencidos ni próximos controles cuando faltan fechas verificables o solo hay plazos relativos. El sexo proviene de la columna Sexo de la base actualizada; los registros “Por verificar” se muestran por separado. El gráfico de zona de residencia se deja en blanco hasta disponer de los datos. El régimen se obtiene solo cuando figura explícitamente como contributivo o subsidiado; no se deduce de la EPS. La vía de acceso se considera ambulatoria por indicación de la responsable del programa. Este corte no tiene sincronización automática. Las cifras apoyan la revisión del equipo del programa.</p></div>
  </section>;
}
