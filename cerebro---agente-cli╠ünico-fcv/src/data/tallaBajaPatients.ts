// Patient records stay on the local computer and are never committed.
export interface TallaBajaPatient {
  id: string;
  documento: string;
  paciente: string;
  edad: string;
  sexo: string;
  peso: string;
  talla: string;
  imc: string;
  imcEdad: string;
  tallaEdad: string;
  eps: string;
  epsOriginal: string;
  regimen: string;
  seguimiento: string;
  proximoControl: string;
  viaAcceso: string;
  ultimaLlamada: string;
  ultimaLlamadaOriginal: string;
  observacionesLlamada: string;
  asistencia: string;
  citasPendientes: string;
  proximoContactoOriginal: string;
  planControl: string;
  proximoContacto: string;
}
const sources = import.meta.glob<{default: Record<'2025'|'2026', TallaBajaPatient[]>}>('./tallaBajaPatients.local.json', {eager: true});
const patients: Record<'2025'|'2026', TallaBajaPatient[]> = sources['./tallaBajaPatients.local.json']?.default ?? {'2025': [], '2026': []};
export default patients;
