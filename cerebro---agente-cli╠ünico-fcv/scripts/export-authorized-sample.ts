import {readFileSync,writeFileSync} from 'node:fs';
import {getTallaBajaAlerts} from '../src/utils/tallaBajaAlerts';
const source=JSON.parse(readFileSync(new URL('../src/data/tallaBajaPatients.local.json',import.meta.url),'utf8'));
const keys=['tratamientoEndocrino','adherenciaOriginal','criterioEndocrino','carpograma','genetica','reporteGenetica','educacion','llamadaRealizada','numeroLlamadas','fechaIngreso','atencionEndocrino','somatropina','origenEndocrino','ultimaConsultaEndocrino','proximaCitaEndocrino','finFormula','entregaMedicamento','medicamentoHastaCita','motivoNoAdherencia','estatusPrograma','fechaNacimiento','igf1','fechaSolicitudCarpograma','documento','edad','sexo','peso','talla','imc','imcEdad','tallaEdad','eps','epsOriginal','regimen','seguimiento','proximoControl','viaAcceso','ultimaLlamada','ultimaLlamadaOriginal','asistencia','citasPendientes','proximoContactoOriginal','proximoContacto'];
const result:Record<string,unknown[]>={};
for(const year of ['2025','2026']) {
 result[year]=source[year].map((row:any,index:number)=>{
  const id=`TB-${year}-${String(index+1).padStart(3,'0')}`;
  const output:Record<string,string>={id,paciente:id,observacionesLlamada:'',planControl:'',citaControlReferido:getTallaBajaAlerts(row).some(a=>a.key==='llamada')?'Sí':''};
  for(const key of keys) output[key]=row[key]||'';
  return output;
 });
}
writeFileSync(new URL('../src/data/tallaBajaSample.json',import.meta.url),JSON.stringify(result,null,2)+'\n');
console.log('Muestra autorizada generada: IDs y documentos ficticios, sin nombres ni observaciones libres.');
