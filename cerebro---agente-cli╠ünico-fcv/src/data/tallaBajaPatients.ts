// User-authorized fictional sample. No patient names or free-text observations are included.
export interface TallaBajaPatient {
  id: string;
  citaControlReferido?: string;
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
import localPatients from './tallaBajaSample.json';
const patients = localPatients as Record<'2025'|'2026', TallaBajaPatient[]>;
export default patients;
