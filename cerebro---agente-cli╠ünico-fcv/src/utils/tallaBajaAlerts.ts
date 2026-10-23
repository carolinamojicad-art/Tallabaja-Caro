import { parsePatientAge } from './patientAge';
export type PatientAlert = { key: string; label: string; detail: string };
export function getTallaBajaAlerts(row: {seguimiento:string; edad:string; sexo:string; peso:string; talla:string; imc:string; observacionesLlamada?:string; citasPendientes?:string; asistencia?:string; ultimaLlamada?:string; proximoControl?:string; proximoContacto?:string; proximoContactoOriginal?:string; citaControlReferido?:string}): PatientAlert[] {
  const alerts: PatientAlert[] = [];
  const clean = (s:string) => s.trim().toLowerCase();
  if (clean(row.seguimiento).startsWith('pendiente')) alerts.push({key:'seguimiento',label:'Seguimiento pendiente',detail:'La base registra seguimiento pendiente; requiere revisión de gestión.'});
  const age = parsePatientAge(row.edad);
  if (!age) alerts.push({key:'edad',label:'Edad sin información',detail:'Edad ausente o formato no reconocido en la base.'});
  else if (!age.valid) alerts.push({key:'edad',label:'Meses de edad por validar',detail:'El formato es años.meses. Valor registrado: ' + row.edad + '. Los meses deben estar entre 0 y 11; confirmar el valor original.'});
  else if (age.years >= 18) alerts.push({key:'edad',label:'Edad por validar',detail:'Edad registrada: ' + age.years + ' años y ' + age.months + ' meses; fuera del intervalo pediátrico del tablero.'});
  if (!['masculino','femenino'].includes(clean(row.sexo))) alerts.push({key:'sexo',label:'Sexo por verificar',detail:'Sexo pendiente de verificación o sin información en la base.'});
  if ([row.peso,row.talla,row.imc].some(value => !value.trim() || !Number.isFinite(Number(value.replace(',','.'))) || Number(value.replace(',','.')) <= 0)) alerts.push({key:'mediciones',label:'Mediciones por verificar',detail:'Peso, talla o IMC ausente, no numérico o no positivo. No se asigna un diagnóstico.'});
  const normalize = (value:string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const pending = row.citasPendientes?.trim() || '';
  if (pending && !['ninguna','ninguno','no','no aplica','pendiente','-'].includes(normalize(pending))) alerts.push({key:'cita',label:'Cita pendiente · ' + pending,detail:'Fuente: Próximas citas pendientes. Valor registrado: ' + pending});
  else if (normalize(pending).startsWith('pendiente')) alerts.push({key:'cita',label:'Cita por confirmar',detail:'Fuente: Próximas citas pendientes. La base indica pendiente sin especialidad o fecha confirmada.'});
  const attendance = normalize(row.asistencia || '');
  if (/no asiste|no ha podido|no asistio/.test(attendance)) alerts.push({key:'inasistencia',label:'Inasistencia o barrera de agenda',detail:'Fuente: Asistencia a citas del programa. ' + row.asistencia});
  if (row.citaControlReferido === 'Sí') alerts.push({key:'llamada',label:'Llamada · revisar cita o control',detail:'Referencia a cita o control detectada en las observaciones de la base ficticia. El texto libre no se incluye en la muestra publicada.'});
  const notes = row.observacionesLlamada || '';
  const sentences = notes.split(/(?<=[.!?;])\s+|\n/).filter(sentence => /cita|control|endocrin|pediatr/.test(normalize(sentence)));
  const reference = sentences.find(sentence => /pendien|programad|agend|proxim|espera|no ha podido|sin cita|no cuenta|no tiene|demora|meses|mes y|seman/.test(normalize(sentence)) && !/sin pendientes|no tiene pendientes|no hay pendientes/.test(normalize(sentence)));
  if (reference) alerts.push({key:'llamada',label:'Llamada · revisar cita o control',detail:'Mención detectada automáticamente; confirmar con la fuente. Última llamada: ' + (row.ultimaLlamada || 'sin fecha confirmada') + '. Texto: “' + reference.trim() + '”'});
  const today = new Intl.DateTimeFormat('en-CA',{timeZone:'America/Bogota',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
  const next = row.proximoControl || '';
  if (/^\d{4}-\d{2}-\d{2}$/.test(next)) alerts.push({key:'control',label:next < today ? 'Fecha de seguimiento superada · ' + next : 'Próximo seguimiento · ' + next,detail:'Fuente: Próximo Seguimiento. Fecha registrada: ' + next + '. Una fecha superada no confirma inasistencia; verificar si el seguimiento ya se realizó.'});
  if (row.proximoContacto) alerts.push({key:'contacto',label:row.proximoContacto < today ? 'Contacto estimado por revisar · ' + row.proximoContacto : 'Próximo contacto estimado · ' + row.proximoContacto,detail:'Estimación de contacto telefónico: última llamada (' + row.ultimaLlamada + ') + plazo registrado (' + row.proximoContactoOriginal + '). No es una fecha de cita ni confirma que el contacto no se realizó.'});
  return alerts;
}
