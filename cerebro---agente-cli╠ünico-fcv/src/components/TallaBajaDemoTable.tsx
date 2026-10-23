import React, { useMemo, useState } from 'react';
import { PatientsTable } from './PatientsTable';
import { PatientDetailModal } from './PatientDetailModal';
import { generateSyntheticPatients } from '../data/mockClinicalData';
import { Paciente } from '../types/clinical';

export function TallaBajaDemoTable({year}:{year:string}) {
 const initial = useMemo(() => generateSyntheticPatients(2,35).map((row,index):Paciente => ({
  ...row,
  centroId:38,
  documento:`DEMO-${String(index+1).padStart(3,'0')}`,
  idCliente:`PRUEBA-${String(index+1).padStart(3,'0')}`,
  paciente:`Paciente de prueba ${index%2===0?'F':'M'}-${String(index+1).padStart(2,'0')}`,
  telMovil:'No disponible · demostración',telCasa:'No disponible',email:'demo@example.invalid',direccion:'Dirección ficticia',
  viaAcceso:'Ambulatoria',
  estadoNutricional:'Sin medición',
  observacionesClinicas:'Registro completamente ficticio para mostrar el diseño. No corresponde a pacientes de la base institucional.',
  alertas:row.alertas.map(alert=>({...alert,texto:'DEMO · '+alert.texto})),
 })),[year]);
 const [records,setRecords] = useState(initial);
 const [selected,setSelected] = useState<Paciente|null>(null);
 const [notice,setNotice]=useState('');
 function resolve(patientId:string,alertId:string) {
  setRecords(prev=>prev.map(row=>row.idCliente===patientId?{...row,alertas:row.alertas.filter(a=>a.id!==alertId)}:row));
  setSelected(prev=>prev?{...prev,alertas:prev.alertas.filter(a=>a.id!==alertId)}:null);
  setNotice('Alerta de demostración retirada de esta sesión.');
 }
 return <section id="pacientes-talla-baja" className="space-y-4 scroll-mt-24">
  <div className="bg-violet-50 border border-violet-200 rounded-xl px-4 py-3"><h2 className="text-sm font-semibold text-violet-900">Tabla de demostración · Talla Baja</h2><p className="text-xs text-violet-700 mt-1">35 pacientes completamente ficticios para mostrar todas las columnas y funciones. Las mediciones, alertas y antecedentes de esta tabla son ejemplos y no corresponden a tus pacientes. Las estadísticas reales del corte {year} se muestran en los gráficos superiores.</p></div>
  <PatientsTable pacientes={records} onSelectPatient={setSelected} epsFilter={null} onClearEpsFilter={()=>{}} nutritionFilter={null} onClearNutritionFilter={()=>{}} renalStageFilter={null} onClearRenalStageFilter={()=>{}} />
  <PatientDetailModal paciente={selected} onClose={()=>setSelected(null)} onOpenWhatsAppForPatient={()=>setNotice('Demostración: no se envían mensajes ni se utilizan teléfonos reales.')} onResolveAlert={resolve} />
  {notice&&<div role="status" className="text-xs rounded-xl border border-violet-200 bg-white p-3 text-violet-700">{notice}<button className="ml-3 underline" onClick={()=>setNotice('')}>Cerrar</button></div>}
  <p className="text-xs text-slate-500">La clasificación nutricional requiere validación pediátrica: se muestra “Sin medición” para evitar clasificar estos ejemplos con umbrales de adultos. Las acciones de la tabla solo afectan la sesión de demostración.</p>
 </section>;
}
