import type { TallaBajaPatient } from '../data/tallaBajaPatients';
import { parsePatientAge } from './patientAge';
export const ceNormalize=(value:string)=>value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
export function adherenceStatus(value:string):string {
 const v=ceNormalize(value);
 if(v==='si')return 'Sí'; if(v==='no')return 'No';
 if(v==='tratamiento pausado')return 'Tratamiento pausado';
 if(v==='suspendido')return 'Suspendido'; if(v==='finalizado')return 'Finalizado';
 if(v==='no esta en tratamiento')return 'No está en tratamiento';
 if(v==='no menciona')return 'No menciona';
 return 'Sin dato';
}
export function attendanceStatus(value:string):string {
 const v=ceNormalize(value);
 if(v==='si asiste'||v==='asiste')return 'Asiste';
 if(v==='no asiste')return 'No asiste';
 if(v==='no asiste a todas las citas'||v==='asiste parcialmente')return 'Asiste parcialmente';
 if(v.includes('no ha podido')&&(v.includes('cita')||v.includes('agendar')))return 'No ha podido agendar';
 return 'Sin dato';
}
export type CECase={key:string;label:string;task:string;source:string;window:string};
export function evaluateCERules(row:TallaBajaPatient):CECase[] {
 const findings:CECase[]=[];
 if (ceNormalize(row.estatusPrograma)==='egreso') return findings;
 const age=parsePatientAge(row.edad);
 if(!age || !age.valid || age.years>=18 || Number(row.edad.replace(',','.'))===Number(row.talla.replace(',','.'))) findings.push({key:'calidad',label:'Edad inconsistente o faltante',task:'Enfermera CE: confirmar edad en la fuente; no corregir ni excluir automáticamente.',source:'Edad / Talla',window:'Revisión del registro'});
 if(ceNormalize(row.tratamientoEndocrino)==='no')findings.push({key:'tratamiento',label:'Tratamiento por Endocrino: No',task:'Enfermera CE: verificar motivo y necesidad de gestión. Este campo no confirma ausencia de atención ni uso de somatropina.',source:'Tratamiento por Endocrino',window:'Validar motivo antes de escalar'});
 const adherence=adherenceStatus(row.adherenciaOriginal);
 const medicalPause=/indicacion medica|indicacion del especialista/.test(ceNormalize(row.motivoNoAdherencia));
 if(['No','Tratamiento pausado','Suspendido'].includes(adherence) && !(adherence!=='No' && medicalPause))findings.push({key:'adherencia',label:adherence==='No'?'No adherencia reportada':'Verificar motivo de pausa o suspensión',task:adherence==='No'?'Enfermera CE: registrar motivo y revisar con el equipo tratante.':'Enfermera CE: confirmar si existe indicación médica antes de clasificar como no adherencia o notificar.',source:'Adherencia al tratamiento',window:'2 días hábiles según ficha; sin vencimiento calculable al faltar fecha del evento'});
 const attendance=attendanceStatus(row.asistencia);
 if(['No asiste','Asiste parcialmente','No ha podido agendar'].includes(attendance))findings.push({key:'asistencia',label:attendance,task:'Gestor clínico: contactar, registrar motivo y gestionar agenda; la fecha de llamada no confirma fecha de consulta.',source:'Asistencia a citas del programa',window:'2 días hábiles según ficha; evento sin fecha confirmada'});
 if(ceNormalize(row.carpograma)==='pendiente')findings.push({key:'carpograma',label:'Carpograma pendiente registrado',task:'Enfermera CE: verificar solicitud y resultado. No se calcula atraso de 30 días sin fecha de solicitud.',source:'Reporte del Carpograma',window:'30 días desde solicitud; no evaluable sin esa fecha'});
 const genetics=ceNormalize(row.genetica), report=ceNormalize(row.reporteGenetica);
 if(genetics==='pendiente'||(genetics==='si'&&report==='pendiente'))findings.push({key:'genetica',label:'Valoración o reporte de Genética pendiente',task:'Enfermera CE: verificar cita o resultado. No se toma “No” como indicación de remisión.',source:'Valoración por Genética / Reporte de Genética',window:'En cada contacto de seguimiento'});
 if(ceNormalize(row.somatropina)==='activo' && ceNormalize(row.medicamentoHastaCita)==='no')findings.push({key:'continuidad',label:'Brecha de medicamento reportada',task:'Gestor clínico: gestionar con EPS entrega o adelanto de cita y comunicar al endocrinólogo. No modificar tratamiento.',source:'Somatropina / Disponibilidad hasta próxima cita',window:'Prioritaria; gestión en 2 días hábiles según ficha'});
 if(ceNormalize(row.origenEndocrino)==='externa')findings.push({key:'externa',label:'Atención externa: validar documentación',task:'Gestor clínico: solicitar consulta, conducta, fórmula y próxima cita al cuidador; registrar tras confirmación.',source:'Origen de atención por Endocrinología',window:'Prioritaria según ficha; validación manual'});
 return findings;
}
export const CE_GAPS=[
 ['Atención por Endocrinología','No hay Sí/No específico, fecha de consulta ni sede. “Tratamiento por Endocrino” no sustituye estos datos.'],
 ['Somatropina y continuidad','Faltan estado de somatropina, fin de fórmula, próxima cita y disponibilidad hasta la cita. Brecha no evaluable.'],
 ['Contacto T+15 y periodicidad','Ingreso disponible; faltan estado Activo confirmado y somatropina. No se inventan contactos vencidos. Cadencia propuesta: 15 días, luego 3 o 6 meses; validación clínica pendiente.'],
 ['Tres intentos sin contacto','El total de llamadas no demuestra fallos ni intentos en tres días distintos. No se marca no contactable.'],
 ['Próxima cita vencida','“Próximo Seguimiento” no confirma cita de Endocrinología. Falta fecha de agenda y asistencia del evento.'],
 ['Transición y egreso','No hay fecha de nacimiento ni egreso validado por enfermería. Una edad ≥18 genera revisión, no egreso automático.'],
 ['SAHI y elegibilidad','Sin conexión SAHI ni CIE-10/cohorte en el Excel. E34.3 aparece en §4.1 pero no en la lista inicial; alcance por confirmar.'],
 ['Monitoreo F2','No hay IGF-1 estructurado ni fecha. Regla de 6 meses no evaluable.'],
];
