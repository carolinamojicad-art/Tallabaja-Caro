import {
  CentroExcelencia,
  Paciente,
  MensajeWhatsApp,
  ColumnDefinition,
} from '../types/clinical';

/**
 * 37 Centros de Excelencia de la Fundación Cardiovascular de Colombia (FCV)
 */
export const CENTROS_EXCELENCIA: CentroExcelencia[] = [
  {
    id: 1,
    codigo: 'ACV-01',
    nombre: 'Accidente Cerebrovascular (ACV)',
    categoria: 'neurologico',
    descripcion: 'Unidad de ictus agudo, trombolisis endovenosa y neurorehabilitación integral.',
    pacientesActivos: 184,
    pacientesTotales: 210,
    alertasActivas: 38,
    colorIcono: 'violet',
    iconoNombre: 'Activity',
  },
  {
    id: 2,
    codigo: 'ASMA-PED-02',
    nombre: 'Asma en Pediatría',
    categoria: 'pediatrico',
    descripcion: 'Control clínico neumológico, función pulmonar e inmunoterapia pediátrica.',
    pacientesActivos: 142,
    pacientesTotales: 156,
    alertasActivas: 42,
    colorIcono: 'cyan',
    iconoNombre: 'Wind',
  },
  {
    id: 3,
    codigo: 'CADERA-03',
    nombre: 'Reemplazo de Cadera',
    categoria: 'quirurgico',
    descripcion: 'Artroplastia primaria y de revisión con navegación de precisión y rehabilitación rápida.',
    pacientesActivos: 156,
    pacientesTotales: 178,
    alertasActivas: 31,
    colorIcono: 'amber',
    iconoNombre: 'Bone',
  },
  {
    id: 4,
    codigo: 'RODILLA-04',
    nombre: 'Reemplazo de Rodilla',
    categoria: 'quirurgico',
    descripcion: 'Protocolo de recuperación acelerada en artroplastia total y unicompartimental.',
    pacientesActivos: 168,
    pacientesTotales: 195,
    alertasActivas: 29,
    colorIcono: 'amber',
    iconoNombre: 'Activity',
  },
  {
    id: 5,
    codigo: 'CA-MAMA-05',
    nombre: 'Cáncer de Mama',
    categoria: 'oncologico',
    descripcion: 'Comité multidisciplinario, oncoplástica, radioterapia estereotáctica y soporte psico-oncológico.',
    pacientesActivos: 215,
    pacientesTotales: 240,
    alertasActivas: 27,
    colorIcono: 'rose',
    iconoNombre: 'HeartPulse',
  },
  {
    id: 6,
    codigo: 'CA-PROSTATA-06',
    nombre: 'Cáncer de Próstata',
    categoria: 'oncologico',
    descripcion: 'Cirugía robótica, braquiterapia y vigilancia activa en tumores urológicos.',
    pacientesActivos: 134,
    pacientesTotales: 149,
    alertasActivas: 18,
    colorIcono: 'rose',
    iconoNombre: 'ShieldAlert',
  },
  {
    id: 7,
    codigo: 'COLUMNA-07',
    nombre: 'Cirugía de Columna',
    categoria: 'quirurgico',
    descripcion: 'Técnicas mínimamente invasivas para deformidades, hernia discal y estenosis lumbar.',
    pacientesActivos: 121,
    pacientesTotales: 138,
    alertasActivas: 24,
    colorIcono: 'amber',
    iconoNombre: 'GitCommit',
  },
  {
    id: 8,
    codigo: 'QUEMADOS-08',
    nombre: 'Unidad de Quemados',
    categoria: 'quirurgico',
    descripcion: 'Manejo agudo de quemaduras de alta complejidad, sustitutos dérmicos y terapia física.',
    pacientesActivos: 67,
    pacientesTotales: 82,
    alertasActivas: 15,
    colorIcono: 'orange',
    iconoNombre: 'Flame',
  },
  {
    id: 9,
    codigo: 'DEPRESION-09',
    nombre: 'Depresión y Salud Mental',
    categoria: 'neurologico',
    descripcion: 'Clínica de ánimo, psicofarmacología avanzada y neuroestimulación magnética.',
    pacientesActivos: 98,
    pacientesTotales: 112,
    alertasActivas: 21,
    colorIcono: 'violet',
    iconoNombre: 'Brain',
  },
  {
    id: 10,
    codigo: 'CARDIOP-CONG-10',
    nombre: 'Cardiopatías Congénitas',
    categoria: 'cardiovascular',
    descripcion: 'Corrección quirúrgica y cateterismo intervencionista en neonatos y adultos con CC.',
    pacientesActivos: 190,
    pacientesTotales: 224,
    alertasActivas: 34,
    colorIcono: 'rose',
    iconoNombre: 'Heart',
  },
  {
    id: 11,
    codigo: 'FALLA-CARD-11',
    nombre: 'Falla Cardíaca e Insuficiencia',
    categoria: 'cardiovascular',
    descripcion: 'Optimización de terapia médica guiada por biomarcadores, resincronización y clínica ambulatoria.',
    pacientesActivos: 280,
    pacientesTotales: 315,
    alertasActivas: 52,
    colorIcono: 'rose',
    iconoNombre: 'HeartPulse',
  },
  {
    id: 12,
    codigo: 'SICA-12',
    nombre: 'Síndrome Coronario Agudo (SICA)',
    categoria: 'cardiovascular',
    descripcion: 'Código infarto FCV 24/7, angioplastia primaria y prevención secundaria estricta.',
    pacientesActivos: 245,
    pacientesTotales: 270,
    alertasActivas: 41,
    colorIcono: 'rose',
    iconoNombre: 'Zap',
  },
  {
    id: 13,
    codigo: 'TX-CARD-13',
    nombre: 'Trasplante Cardíaco',
    categoria: 'cardiovascular',
    descripcion: 'Evaluación pre-trasplante, soporte circulatorio mecánico (ECMO/VAD) y seguimiento post.',
    pacientesActivos: 84,
    pacientesTotales: 92,
    alertasActivas: 11,
    colorIcono: 'rose',
    iconoNombre: 'HeartHandshake',
  },
  {
    id: 14,
    codigo: 'HTP-14',
    nombre: 'Hipertensión Pulmonar',
    categoria: 'respiratorio',
    descripcion: 'Diagnóstico hemodinámico, vasodilatadores prostanoideos y tromboendarterectomía.',
    pacientesActivos: 76,
    pacientesTotales: 88,
    alertasActivas: 19,
    colorIcono: 'cyan',
    iconoNombre: 'Gauge',
  },
  {
    id: 15,
    codigo: 'ERC-15',
    nombre: 'Enfermedad Renal Crónica',
    categoria: 'cronico',
    descripcion: 'Manejo conservador, nefroprotección y seguimiento multidisciplinario de enfermedad renal crónica.',
    pacientesActivos: 15,
    pacientesTotales: 45,
    alertasActivas: 0,
    colorIcono: 'teal',
    iconoNombre: 'ShieldCheck',
  },
  {
    id: 16,
    codigo: 'BARIATRICA-16',
    nombre: 'Cirugía Bariátrica y Metabólica',
    categoria: 'quirurgico',
    descripcion: 'Bypass gástrico y manga por laparoscopia con seguimiento nutricional y psicológico.',
    pacientesActivos: 145,
    pacientesTotales: 162,
    alertasActivas: 23,
    colorIcono: 'emerald',
    iconoNombre: 'Scale',
  },
  {
    id: 17,
    codigo: 'CA-GASTRO-17',
    nombre: 'Cáncer Gastrointestinal',
    categoria: 'oncologico',
    descripcion: 'Resección endoscópica submucosa, cirugía oncológica digestiva y quimioterapia adyuvante.',
    pacientesActivos: 118,
    pacientesTotales: 130,
    alertasActivas: 25,
    colorIcono: 'rose',
    iconoNombre: 'Crosshair',
  },
  {
    id: 18,
    codigo: 'TRAUMA-18',
    nombre: 'Trauma Mayor y Politrauma',
    categoria: 'quirurgico',
    descripcion: 'Reanimación con control de daños, fijación externa y soporte de cuidados intensivos.',
    pacientesActivos: 92,
    pacientesTotales: 104,
    alertasActivas: 28,
    colorIcono: 'orange',
    iconoNombre: 'Shield',
  },
  {
    id: 19,
    codigo: 'ARRITMIAS-19',
    nombre: 'Arritmias y Electrofisiología',
    categoria: 'cardiovascular',
    descripcion: 'Ablación tridimensional por mapeo electroanatómico e implante de marcapasos y DAI.',
    pacientesActivos: 175,
    pacientesTotales: 198,
    alertasActivas: 33,
    colorIcono: 'violet',
    iconoNombre: 'Activity',
  },
  {
    id: 20,
    codigo: 'NEUROPED-20',
    nombre: 'Neuropediatría y Epilepsia Refractaria',
    categoria: 'pediatrico',
    descripcion: 'Video-telemetría continua, dieta cetogénica y estimulación del nervio vago en niños.',
    pacientesActivos: 108,
    pacientesTotales: 120,
    alertasActivas: 26,
    colorIcono: 'violet',
    iconoNombre: 'Sparkles',
  },
  {
    id: 21,
    codigo: 'NEONATAL-21',
    nombre: 'Cuidado Crítico Neonatal',
    categoria: 'pediatrico',
    descripcion: 'UCIN nivel IV, hipotermia terapéutica, ventilación de alta frecuencia y banco de leche.',
    pacientesActivos: 58,
    pacientesTotales: 64,
    alertasActivas: 14,
    colorIcono: 'cyan',
    iconoNombre: 'Baby',
  },
  {
    id: 22,
    codigo: 'DIABETES-22',
    nombre: 'Diabetes y Endocrinología',
    categoria: 'cronico',
    descripcion: 'Monitorización continua de glucosa, bombas de infusión de insulina y prevención vascular.',
    pacientesActivos: 260,
    pacientesTotales: 295,
    alertasActivas: 49,
    colorIcono: 'teal',
    iconoNombre: 'Droplets',
  },
  {
    id: 23,
    codigo: 'EPOC-23',
    nombre: 'EPOC y Rehabilitación Pulmonar',
    categoria: 'respiratorio',
    descripcion: 'Entrenamiento muscular respiratorio, oxigenoterapia de alto flujo y deshabituación tabáquica.',
    pacientesActivos: 165,
    pacientesTotales: 182,
    alertasActivas: 35,
    colorIcono: 'cyan',
    iconoNombre: 'Wind',
  },
  {
    id: 24,
    codigo: 'PALIATIVOS-24',
    nombre: 'Cuidados Paliativos y Dolor',
    categoria: 'cronico',
    descripcion: 'Alivio integral de síntomas, acompañamiento familiar y sedación paliativa de calidad.',
    pacientesActivos: 89,
    pacientesTotales: 96,
    alertasActivas: 12,
    colorIcono: 'violet',
    iconoNombre: 'Smile',
  },
  {
    id: 25,
    codigo: 'LEUCEMIAS-25',
    nombre: 'Leucemias y Cáncer Hematológico',
    categoria: 'oncologico',
    descripcion: 'Inmunoterapia dirigida, aféresis terapéutica y trasplante de progenitores hematopoyéticos.',
    pacientesActivos: 114,
    pacientesTotales: 128,
    alertasActivas: 22,
    colorIcono: 'rose',
    iconoNombre: 'Droplet',
  },
  {
    id: 26,
    codigo: 'CIR-CARD-PED-26',
    nombre: 'Cirugía Cardíaca Pediátrica',
    categoria: 'cardiovascular',
    descripcion: 'Reparaciones complejas univentriculares y biventriculares de altísima especialidad.',
    pacientesActivos: 132,
    pacientesTotales: 145,
    alertasActivas: 30,
    colorIcono: 'rose',
    iconoNombre: 'HeartHandshake',
  },
  {
    id: 27,
    codigo: 'ECMO-27',
    nombre: 'Reanimación Avanzada y ECMO',
    categoria: 'cardiovascular',
    descripcion: 'Centro de referencia ECMO V-A y V-V con rescates aéreos y terrestres en Colombia.',
    pacientesActivos: 42,
    pacientesTotales: 46,
    alertasActivas: 9,
    colorIcono: 'rose',
    iconoNombre: 'Cpu',
  },
  {
    id: 28,
    codigo: 'DOLOR-CRON-28',
    nombre: 'Dolor Crónico Intervencionista',
    categoria: 'quirurgico',
    descripcion: 'Bloqueos nerviosos ecoguiados, radiofrecuencia y neuroestimulación espinal.',
    pacientesActivos: 153,
    pacientesTotales: 170,
    alertasActivas: 32,
    colorIcono: 'amber',
    iconoNombre: 'Shield',
  },
  {
    id: 29,
    codigo: 'CA-CERVIX-29',
    nombre: 'Cáncer Ginecológico y Cervicouterino',
    categoria: 'oncologico',
    descripcion: 'Braquiterapia 3D, cirugía citorreductora y quimioterapia intraperitoneal hipertérmica.',
    pacientesActivos: 127,
    pacientesTotales: 140,
    alertasActivas: 20,
    colorIcono: 'rose',
    iconoNombre: 'Heart',
  },
  {
    id: 30,
    codigo: 'MAXILOFACIAL-30',
    nombre: 'Cirugía Maxilofacial y Craneofacial',
    categoria: 'quirurgico',
    descripcion: 'Reconstrucción microquirúrgica, osteotomías ortognáticas y labio-paladar hendido.',
    pacientesActivos: 74,
    pacientesTotales: 85,
    alertasActivas: 16,
    colorIcono: 'blue',
    iconoNombre: 'Smile',
  },
  {
    id: 31,
    codigo: 'REUMATOLOGIA-31',
    nombre: 'Reumatología y Autoinmunidad',
    categoria: 'cronico',
    descripcion: 'Manejo biológico de artritis reumatoide, lupus eritematoso y espondiloartritis.',
    pacientesActivos: 188,
    pacientesTotales: 205,
    alertasActivas: 37,
    colorIcono: 'violet',
    iconoNombre: 'Layers',
  },
  {
    id: 32,
    codigo: 'SUENO-32',
    nombre: 'Apnea del Sueño y Somnología',
    categoria: 'respiratorio',
    descripcion: 'Polisomnografía nocturna, titulación de CPAP y terapia miofuncional orofaríngea.',
    pacientesActivos: 110,
    pacientesTotales: 124,
    alertasActivas: 25,
    colorIcono: 'cyan',
    iconoNombre: 'Moon',
  },
  {
    id: 33,
    codigo: 'PIE-DIAB-33',
    nombre: 'Pie Diabético y Salvamento de Extremidades',
    categoria: 'cronico',
    descripcion: 'Revascularización endovascular distal, desbridamiento quirúrgico y terapia de presión negativa.',
    pacientesActivos: 139,
    pacientesTotales: 154,
    alertasActivas: 43,
    colorIcono: 'orange',
    iconoNombre: 'AlertTriangle',
  },
  {
    id: 34,
    codigo: 'RIESGO-CARDIO-34',
    nombre: 'Prevención y Riesgo Cardiovascular',
    categoria: 'cardiovascular',
    descripcion: 'Cálculo de riesgo coronario Framingham/SCORE, clínica de lípidos y rehabilitación fase I y II.',
    pacientesActivos: 310,
    pacientesTotales: 345,
    alertasActivas: 58,
    colorIcono: 'rose',
    iconoNombre: 'ShieldCheck',
  },
  {
    id: 35,
    codigo: 'PARKINSON-35',
    nombre: 'Trastornos del Movimiento y Parkinson',
    categoria: 'neurologico',
    descripcion: 'Estimulación cerebral profunda (DBS), toxina botulínica e intervención fonoaudiológica.',
    pacientesActivos: 94,
    pacientesTotales: 108,
    alertasActivas: 17,
    colorIcono: 'violet',
    iconoNombre: 'Activity',
  },
  {
    id: 36,
    codigo: 'DERMATOLOGIA-36',
    nombre: 'Dermatología Oncológica y Psoriasis',
    categoria: 'cronico',
    descripcion: 'Cirugía micrográfica de Mohs, fototerapia ultravioleta e inhibidores de interleucinas.',
    pacientesActivos: 102,
    pacientesTotales: 115,
    alertasActivas: 19,
    colorIcono: 'emerald',
    iconoNombre: 'Sun',
  },
  {
    id: 37,
    codigo: 'BASE-CRANEO-37',
    nombre: 'Neurocirugía de Base de Cráneo',
    categoria: 'neurologico',
    descripcion: 'Abordajes endoscópicos endonasales transesfenoidales y neuromonitorización intraoperatoria.',
    pacientesActivos: 78,
    pacientesTotales: 87,
    alertasActivas: 14,
    colorIcono: 'violet',
    iconoNombre: 'Brain',
  },
];

/**
 * 34 Columnas detectadas para la tabla de pacientes
 */
export const AVAILABLE_COLUMNS: ColumnDefinition[] = [
  // Sticky / Pinned
  { key: 'documento', label: 'DOCUMENTO', isSticky: true, minWidth: 140 },
  { key: 'idCliente', label: 'ID CLIENTE', isSticky: true, minWidth: 100 },
  { key: 'paciente', label: 'PACIENTE', isSticky: true, minWidth: 200 },
  { key: 'alertas', label: 'ALERTAS', isSticky: true, minWidth: 260 },
  { key: 'ciclo', label: 'CICLO', isSticky: true, minWidth: 80, align: 'center' },

  // Dinámicas sociodemográficas y clínicas
  { key: 'edad', label: 'EDAD', minWidth: 70, align: 'right' },
  { key: 'sexo', label: 'SEXO', minWidth: 100 },
  { key: 'pesoKg', label: 'PESO', minWidth: 80, align: 'right' },
  { key: 'tallaCm', label: 'TALLA', minWidth: 80, align: 'right' },
  { key: 'imc', label: 'IMC', minWidth: 80, align: 'right' },
  { key: 'estadoNutricional', label: 'ESTADO NUTRICIONAL', minWidth: 160 },
  { key: 'antecedentes', label: 'ANTECEDENTES', minWidth: 220 },
  { key: 'eps', label: 'EPS', minWidth: 160 },
  { key: 'plan', label: 'PLAN', minWidth: 120 },
  { key: 'viaAcceso', label: 'VÍA DE ACCESO', minWidth: 140 },
  { key: 'regimen', label: 'RÉGIMEN', minWidth: 130 },
  { key: 'telMovil', label: 'TEL. MÓVIL', minWidth: 130 },
  { key: 'estado', label: 'ESTADO', minWidth: 120 },
  { key: 'fNac', label: 'F. NAC.', minWidth: 110 },
  { key: 'rh', label: 'RH', minWidth: 70, align: 'center' },
  { key: 'estadoCivil', label: 'ESTADO CIVIL', minWidth: 120 },
  { key: 'zona', label: 'ZONA', minWidth: 90 },
  { key: 'escolaridad', label: 'ESCOLARIDAD', minWidth: 140 },
  { key: 'etnia', label: 'ETNIA', minWidth: 110 },
  { key: 'ocupacion', label: 'OCUPACIÓN', minWidth: 150 },
  { key: 'religion', label: 'RELIGIÓN', minWidth: 110 },
  { key: 'afiliacion', label: 'AFILIACIÓN', minWidth: 110 },
  { key: 'conviven', label: 'CONVIVEN', minWidth: 110 },
  { key: 'telCasa', label: 'TEL. CASA', minWidth: 120 },
  { key: 'email', label: 'EMAIL', minWidth: 180 },
  { key: 'direccion', label: 'DIRECCIÓN', minWidth: 220 },
  { key: 'fechaIngreso', label: 'F. INGRESO', minWidth: 110 },
  { key: 'ultimoControl', label: 'ÚLT. CONTROL', minWidth: 120 },
  { key: 'proximoControl', label: 'PRÓX. CONTROL', minWidth: 120 },
];

/**
 * Generador y colección de pacientes sintéticos realistas
 * (100% datos sintéticos para cumplimiento estricto de Ley 1581 y normativa de salud)
 */
const NOMBRES_COLOMBIANOS_F = ['Paciente de prueba F-01','Paciente de prueba F-02','Paciente de prueba F-03','Paciente de prueba F-04','Paciente de prueba F-05','Paciente de prueba F-06','Paciente de prueba F-07','Paciente de prueba F-08','Paciente de prueba F-09','Paciente de prueba F-10','Paciente de prueba F-11','Paciente de prueba F-12','Paciente de prueba F-13','Paciente de prueba F-14','Paciente de prueba F-15','Paciente de prueba F-16','Paciente de prueba F-17','Paciente de prueba F-18','Paciente de prueba F-19','Paciente de prueba F-20'];

const NOMBRES_COLOMBIANOS_M = ['Paciente de prueba M-01','Paciente de prueba M-02','Paciente de prueba M-03','Paciente de prueba M-04','Paciente de prueba M-05','Paciente de prueba M-06','Paciente de prueba M-07','Paciente de prueba M-08','Paciente de prueba M-09','Paciente de prueba M-10','Paciente de prueba M-11','Paciente de prueba M-12','Paciente de prueba M-13','Paciente de prueba M-14','Paciente de prueba M-15','Paciente de prueba M-16','Paciente de prueba M-17','Paciente de prueba M-18','Paciente de prueba M-19','Paciente de prueba M-20'];

const EPS_COLOMBIA = [
  { nombre: 'EPS Sanitas', weight: 0.28 },
  { nombre: 'Sura EPS', weight: 0.24 },
  { nombre: 'Nueva EPS', weight: 0.18 },
  { nombre: 'Compensar EPS', weight: 0.12 },
  { nombre: 'Salud Total EPS', weight: 0.08 },
  { nombre: 'Coosalud EPS', weight: 0.05 },
  { nombre: 'Famisanar EPS', weight: 0.03 },
  { nombre: 'Asmet Salud EPS', weight: 0.02 },
];

const ANTECEDENTES_LIST = [
  'HTA controlada · Dislipidemia primaria',
  'Diabetes Mellitus tipo 2 · Tabaquismo previo (IPA 12)',
  'Fibrilación auricular no valvular · Anticoagulado',
  'Sin antecedentes quirúrgicos mayores reportados',
  'Obesidad grado I · Sedentarismo',
  'Asma bronquial intermitente · Rinitis alérgica',
  'Hipotiroidismo en manejo con Levotiroxina 75mcg',
  'Osteoartritis de rodilla bilateral · Gastritis crónica',
  'Cardiopatía isquémica revascularizada con stent 2024',
  'Enfermedad coronaria multivaso · ERC estadio 2',
];

const CIUDADES_DIRECCIONES = [
  { dir: 'Dirección ficticia de demostración', mun: 'Bucaramanga' },
  { dir: 'Dirección ficticia de demostración', mun: 'Floridablanca' },
  { dir: 'Dirección ficticia de demostración', mun: 'Piedecuesta' },
  { dir: 'Dirección ficticia de demostración', mun: 'Girón' },
  { dir: 'Dirección ficticia de demostración', mun: 'Bucaramanga' },
  { dir: 'Dirección ficticia de demostración', mun: 'Floridablanca' },
  { dir: 'Dirección ficticia de demostración', mun: 'Piedecuesta' },
  { dir: 'Dirección ficticia de demostración', mun: 'Bucaramanga' },
  { dir: 'Dirección ficticia de demostración', mun: 'Bucaramanga' },
  { dir: 'Dirección ficticia de demostración', mun: 'Floridablanca' },
];

/**
 * Registros de prueba de manejo conservador para el Centro de Enfermedad Renal
 * Crónica (ERC-15). Fuente: Base_Datos_Pacientes_Manejo_Conservador.xlsx.
 * El libro declara que todos los datos son ficticios y no aptos para atención.
 */
const RENAL_TEST_ROWS = `
1|DEMO-ERC-001|Paciente de prueba ERC-001|Femenino|1952-01-19|0000000000|Sura|78.7|170|N18.4|2025-05-16|En seguimiento|2026-12-25|Pendiente|Firmado|3.71|18
2|DEMO-ERC-002|Paciente de prueba ERC-002|Masculino|1977-04-21|0000000000|Famisanar|56.1|160|N18.3|2025-07-06|En seguimiento|2026-11-02|No realizada|Firmado|1.49|42
3|DEMO-ERC-003|Paciente de prueba ERC-003|Femenino|1962-09-09|0000000000|Compensar|81.6|167|N18.4|2024-09-16|En seguimiento|2026-10-28|Realizada|No firmado|2.19|26
4|DEMO-ERC-004|Paciente de prueba ERC-004|Masculino|1945-03-27|0000000000|Salud Total|48.7|169|N18.4|2025-02-02|Inactivo|2027-01-25|No realizada|Pendiente|3.04|21
5|DEMO-ERC-005|Paciente de prueba ERC-005|Femenino|1952-06-24|0000000000|Nueva EPS|89.1|158|N18.4|2025-08-12|En seguimiento|2027-01-25|Realizada|Pendiente|3.64|23
6|DEMO-ERC-006|Paciente de prueba ERC-006|Masculino|1956-04-27|0000000000|Sura|57.5|148|N18.2|2025-08-13|Activo|2027-01-11|Pendiente|No firmado|1.3|86
7|DEMO-ERC-007|Paciente de prueba ERC-007|Femenino|1969-01-26|0000000000|Compensar|59.8|156|N18.4|2025-07-19|En seguimiento|2026-11-24|Realizada|No firmado|2.46|17
8|DEMO-ERC-008|Paciente de prueba ERC-008|Masculino|1947-07-24|0000000000|Compensar|98.9|156|N18.4|2025-10-10|Activo|2026-12-29|No realizada|Pendiente|3.74|25
9|DEMO-ERC-009|Paciente de prueba ERC-009|Femenino|1958-01-15|0000000000|Salud Total|98.1|162|N18.4|2024-08-13|Inactivo|2026-12-14|No realizada|Firmado|4.09|17
10|DEMO-ERC-010|Paciente de prueba ERC-010|Masculino|1967-10-06|0000000000|Sanitas|48.3|169|N18.3|2024-09-16|En seguimiento|2027-02-02|No realizada|Pendiente|2|39
11|DEMO-ERC-011|Paciente de prueba ERC-011|Femenino|1980-05-24|0000000000|Compensar|51.5|156|N18.3|2024-09-09|En seguimiento|2026-11-05|Pendiente|Firmado|1.54|53
12|DEMO-ERC-012|Paciente de prueba ERC-012|Masculino|1985-03-18|0000000000|Sanitas|66.9|181|N18.4|2024-07-06|Activo|2026-11-16|Realizada|Pendiente|4.46|26
13|DEMO-ERC-013|Paciente de prueba ERC-013|Masculino|1946-02-18|0000000000|Sura|86.4|163|N18.4|2025-12-17|Activo|2026-11-15|Realizada|No firmado|3.67|20
14|DEMO-ERC-014|Paciente de prueba ERC-014|Femenino|1975-02-01|0000000000|Salud Total|90.3|155|N18.4|2026-01-11|Activo|2027-01-20|No realizada|No firmado|2.43|23
15|DEMO-ERC-015|Paciente de prueba ERC-015|Masculino|1949-05-17|0000000000|Coosalud|97|168|N18.4|2025-10-11|Inactivo|2026-11-02|Realizada|Firmado|3.9|28
16|DEMO-ERC-016|Paciente de prueba ERC-016|Femenino|1959-09-19|0000000000|Sanitas|52|149|N18.4|2024-07-04|Inactivo|2026-11-09|Pendiente|No firmado|4.47|20
17|DEMO-ERC-017|Paciente de prueba ERC-017|Masculino|1979-09-20|0000000000|Coosalud|70.7|166|N18.4|2026-04-23|Activo|2027-01-05|Pendiente|Firmado|2.73|29
18|DEMO-ERC-018|Paciente de prueba ERC-018|Femenino|1953-01-10|0000000000|Sanitas|87|163|N18.4|2025-09-15|Activo|2026-11-10|No realizada|Pendiente|2.53|21
19|DEMO-ERC-019|Paciente de prueba ERC-019|Masculino|1959-09-06|0000000000|Nueva EPS|74.6|186|N18.3|2024-11-01|Inactivo|2026-12-31|Pendiente|Pendiente|1.97|58
20|DEMO-ERC-020|Paciente de prueba ERC-020|Femenino|1986-08-21|0000000000|Sura|87.5|148|N18.3|2026-05-21|En seguimiento|2026-11-06|No realizada|Firmado|1.95|40
21|DEMO-ERC-021|Paciente de prueba ERC-021|Masculino|1963-10-04|0000000000|Salud Total|88.3|180|N18.4|2024-06-20|En seguimiento|2026-11-15|Realizada|Pendiente|2.31|26
22|DEMO-ERC-022|Paciente de prueba ERC-022|Femenino|1949-07-12|0000000000|Nueva EPS|102.1|161|N18.3|2026-01-24|Activo|2026-12-03|No realizada|No firmado|1.31|43
23|DEMO-ERC-023|Paciente de prueba ERC-023|Masculino|1955-04-02|0000000000|Nueva EPS|49|157|N18.2|2025-02-22|Inactivo|2027-01-29|Realizada|Firmado|1.1|67
24|DEMO-ERC-024|Paciente de prueba ERC-024|Femenino|1971-08-24|0000000000|Nueva EPS|92.9|150|N18.4|2025-07-08|Inactivo|2027-01-28|Pendiente|Pendiente|2.59|17
25|DEMO-ERC-025|Paciente de prueba ERC-025|Masculino|1969-06-03|0000000000|Sura|89.7|180|N18.3|2025-04-27|Activo|2026-12-08|Pendiente|Pendiente|1.37|37
26|DEMO-ERC-026|Paciente de prueba ERC-026|Femenino|1970-09-07|0000000000|Sanitas|54.2|179|N18.3|2024-08-29|Inactivo|2026-12-22|Pendiente|Firmado|1.51|58
27|DEMO-ERC-027|Paciente de prueba ERC-027|Masculino|1969-06-25|0000000000|Salud Total|102.1|153|N18.4|2026-08-02|En seguimiento|2026-12-02|Realizada|Firmado|4.32|24
28|DEMO-ERC-028|Paciente de prueba ERC-028|Femenino|1968-09-15|0000000000|Nueva EPS|62.6|166|N18.4|2026-08-15|En seguimiento|2027-02-03|Pendiente|Firmado|4.43|29
29|DEMO-ERC-029|Paciente de prueba ERC-029|Masculino|1969-03-10|0000000000|Famisanar|52.3|148|N18.3|2026-03-21|Activo|2026-12-08|Realizada|No firmado|2.26|42
30|DEMO-ERC-030|Paciente de prueba ERC-030|Masculino|1973-06-23|0000000000|Coosalud|90.5|177|N18.4|2024-06-29|Inactivo|2026-12-11|Realizada|No firmado|4.02|24
31|DEMO-ERC-031|Paciente de prueba ERC-031|Femenino|1982-02-07|0000000000|Compensar|56.5|177|N18.4|2025-10-13|En seguimiento|2027-01-27|Realizada|Pendiente|3.93|17
32|DEMO-ERC-032|Paciente de prueba ERC-032|Masculino|1982-08-17|0000000000|Sanitas|101.9|174|N18.3|2026-03-30|En seguimiento|2026-11-06|Realizada|Firmado|1.98|58
33|DEMO-ERC-033|Paciente de prueba ERC-033|Femenino|1988-07-20|0000000000|Salud Total|54.3|167|N18.3|2026-08-31|Activo|2026-11-25|Pendiente|No firmado|1.3|38
34|DEMO-ERC-034|Paciente de prueba ERC-034|Masculino|1950-08-13|0000000000|Coosalud|77.8|166|N18.3|2025-07-24|En seguimiento|2026-11-21|No realizada|Firmado|1.56|43
35|DEMO-ERC-035|Paciente de prueba ERC-035|Femenino|1981-07-02|0000000000|Sanitas|84.1|163|N18.4|2025-04-23|Inactivo|2026-12-14|No realizada|Firmado|2.2|28
36|DEMO-ERC-036|Paciente de prueba ERC-036|Masculino|1962-08-22|0000000000|Coosalud|94.2|166|N18.4|2026-04-10|Activo|2026-12-21|No realizada|Firmado|3.4|21
37|DEMO-ERC-037|Paciente de prueba ERC-037|Femenino|1952-05-19|0000000000|Compensar|68.3|153|N18.4|2024-06-26|Inactivo|2026-11-13|Realizada|Pendiente|3.65|15
38|DEMO-ERC-038|Paciente de prueba ERC-038|Masculino|1985-07-27|0000000000|Famisanar|91.9|179|N18.2|2026-06-19|Activo|2026-11-08|Realizada|No firmado|0.9|85
39|DEMO-ERC-039|Paciente de prueba ERC-039|Femenino|1987-06-01|0000000000|Coosalud|81.8|178|N18.4|2024-09-06|Inactivo|2027-01-26|Realizada|No firmado|2.21|24
40|DEMO-ERC-040|Paciente de prueba ERC-040|Masculino|1964-01-25|0000000000|Coosalud|94.4|148|N18.3|2024-11-17|Inactivo|2026-12-27|Realizada|Pendiente|2.28|57
41|DEMO-ERC-041|Paciente de prueba ERC-041|Femenino|1954-08-08|0000000000|Salud Total|97.8|177|N18.4|2025-07-14|Activo|2026-11-27|Realizada|Firmado|2.28|18
42|DEMO-ERC-042|Paciente de prueba ERC-042|Femenino|1947-07-03|0000000000|Compensar|90.6|163|N18.3|2025-09-23|Inactivo|2026-12-15|No realizada|Pendiente|2.38|43
43|DEMO-ERC-043|Paciente de prueba ERC-043|Masculino|1964-09-14|0000000000|Sanitas|97|148|N18.3|2025-01-18|Inactivo|2027-01-21|Realizada|Firmado|1.96|31
44|DEMO-ERC-044|Paciente de prueba ERC-044|Femenino|1944-07-16|0000000000|Sura|63|152|N18.4|2025-03-08|Activo|2026-12-26|Realizada|Firmado|2.31|23
45|DEMO-ERC-045|Paciente de prueba ERC-045|Masculino|1958-06-15|0000000000|Coosalud|53|162|N18.3|2025-06-23|En seguimiento|2026-12-04|Pendiente|Firmado|2.14|40
`;

export const RENAL_CONSERVATIVE_TEST_PATIENTS: Paciente[] = RENAL_TEST_ROWS.trim()
  .split('\n')
  .map((row) => {
    const [consecutivo, documento, paciente, sexo, fNac, telMovil, eps, peso, talla, cie10, fechaIngreso, estado, proximoControl, educacion, consentimiento, creatinina, tfg] = row.split('|');
    const pesoKg = Number(peso);
    const tallaCm = Number(talla);
    const imc = Math.round((pesoKg / ((tallaCm / 100) ** 2)) * 10) / 10;
    const edad = 2026 - Number(fNac.slice(0, 4));
    const estadoNutricional: Paciente['estadoNutricional'] = imc < 18.5 ? 'Delgadez' : imc < 25 ? 'Normal' : imc < 30 ? 'Sobrepeso' : 'Obesidad';

    return {
      documento,
      idCliente: `ERC-${consecutivo.padStart(3, '0')}`,
      paciente,
      alertas: [],
      ciclo: cie10.replace('N18.', ''),
      edad,
      sexo: sexo as Paciente['sexo'],
      pesoKg,
      tallaCm,
      imc,
      estadoNutricional,
      antecedentes: `ERC manejo conservador · ${cie10} · TFG inicial ${tfg} mL/min/1,73 m²`,
      eps,
      plan: 'Manejo conservador ERC',
      viaAcceso: 'Ambulatoria',
      regimen: 'Contributivo',
      telMovil,
      estado: estado as Paciente['estado'],
      fNac,
      rh: 'No registrado (prueba)',
      estadoCivil: 'No registrado (prueba)',
      zona: 'Urbana',
      escolaridad: 'No registrado (prueba)',
      etnia: 'No registrado (prueba)',
      ocupacion: 'No registrado (prueba)',
      religion: 'No registrado (prueba)',
      afiliacion: 'No registrado (prueba)',
      conviven: 'No registrado (prueba)',
      telCasa: 'No registrado (prueba)',
      email: `erc.prueba.${consecutivo}@correo-fcv.org`,
      direccion: 'Dato no incluido en fuente de prueba',
      centroId: 15,
      fechaIngreso,
      ultimoControl: 'No incluido en fuente de prueba',
      proximoControl,
      observacionesClinicas: `Datos sintéticos de prueba. Educación: ${educacion}. Consentimiento: ${consentimiento}. Creatinina registrada: ${creatinina} mg/dL.`,
    };
  });

export function generateSyntheticPatients(centroId: number, count: number = 35): Paciente[] {
  const isPediatric = centroId === 2 || centroId === 20 || centroId === 21 || centroId === 26;
  const isGeriatric = centroId === 3 || centroId === 4 || centroId === 11 || centroId === 35;

  const result: Paciente[] = [];

  for (let i = 0; i < count; i++) {
    const isFemale = i % 2 === 0;
    const namePool = isFemale ? NOMBRES_COLOMBIANOS_F : NOMBRES_COLOMBIANOS_M;
    const nombre = namePool[i % namePool.length] + (i >= namePool.length ? ` ${i}` : '');

    let edad: number;
    let docType = 'CC';

    if (isPediatric) {
      edad = 2 + (i % 14); // 2 to 15 years
      docType = edad < 7 ? 'RC' : 'TI';
    } else if (isGeriatric) {
      edad = 56 + (i % 32); // 56 to 87 years
    } else {
      edad = 24 + (i % 55); // 24 to 78 years
    }

    const docNum = 1000000000 + (centroId * 100000) + (i * 1234) + 57;
    const documento = `${docType} ${docNum.toString().slice(0, 10)}`;
    const idCliente = `${100000 + centroId * 1000 + i}`;

    const pesoBase = isPediatric ? (12 + edad * 2.8) : (isFemale ? 58 + (i % 26) : 68 + (i % 32));
    const tallaBase = isPediatric ? (85 + edad * 4.5) : (isFemale ? 154 + (i % 14) : 168 + (i % 16));
    const pesoKg = Math.round(pesoBase * 10) / 10;
    const tallaCm = Math.round(tallaBase);
    const imc = Math.round((pesoKg / ((tallaCm / 100) * (tallaCm / 100))) * 10) / 10;

    let estadoNutricional: Paciente['estadoNutricional'] = 'Normal';
    if (imc < 18.5) estadoNutricional = 'Delgadez';
    else if (imc >= 18.5 && imc < 25) estadoNutricional = 'Normal';
    else if (imc >= 25 && imc < 30) estadoNutricional = 'Sobrepeso';
    else estadoNutricional = 'Obesidad';

    // Generar alertas clínicas
    const hasAlert = (i % 3 === 0) || (i % 7 === 0);
    const alertas: Paciente['alertas'] = [];
    if (hasAlert) {
      const atrasoMeses = (i % 8) + 1;
      const controlTipo = i % 2 === 0 ? 'control 1 mes' : (i % 3 === 0 ? 'control 3 meses' : 'control 6 meses');
      alertas.push({
        id: `alt-${centroId}-${i}`,
        tipo: 'control_vencido',
        texto: `Control vencido · ${controlTipo} · Atrasado ${atrasoMeses} ${atrasoMeses === 1 ? 'mes' : 'meses'}`,
        gravedad: atrasoMeses >= 3 ? 'alta' : 'media',
        fechaGeneracion: '2026-09-15',
      });
    }

    const epsObj = EPS_COLOMBIA[i % EPS_COLOMBIA.length];
    const direccionObj = CIUDADES_DIRECCIONES[i % CIUDADES_DIRECCIONES.length];
    const isRural = i % 5 === 0;

    const viasAcceso: Paciente['viaAcceso'][] = ['Ambulatoria', 'Urgencias', 'Remisión', 'Hospitalización previa'];
    const viaAcceso = viasAcceso[i % viasAcceso.length];

    const regimenes: Paciente['regimen'][] = ['Contributivo', 'Subsidiado', 'Plan adicional', 'Especial'];
    const regimen = regimenes[i % (isRural ? 2 : 4)];

    const ciclos = ['1°', '2°', '3°', '4°', '5°'];
    const ciclo = ciclos[i % ciclos.length];

    const estados: Paciente['estado'][] = ['Activo', 'Activo', 'Activo', 'En seguimiento', 'Inactivo'];
    const estado = estados[i % estados.length];

    const rhList = ['O+', 'O+', 'O+', 'A+', 'A+', 'B+', 'AB+', 'O-'];
    const rh = rhList[i % rhList.length];

    const estadosCiviles = isPediatric
      ? ['Soltero/a (Menor)']
      : ['Casado/a', 'Unión libre', 'Soltero/a', 'Viudo/a'];
    const estadoCivil = estadosCiviles[i % estadosCiviles.length];

    const escolaridades = isPediatric
      ? ['Básica primaria', 'Preescolar', 'Secundaria']
      : ['Universitaria', 'Técnica', 'Secundaria completa', 'Primaria'];
    const escolaridad = escolaridades[i % escolaridades.length];

    const ocupaciones = isPediatric
      ? ['Estudiante']
      : ['Empleado/a', 'Independiente', 'Pensionado/a', 'Labores del hogar', 'Docente'];
    const ocupacion = ocupaciones[i % ocupaciones.length];

    result.push({
      documento,
      idCliente,
      paciente: nombre,
      alertas,
      ciclo,
      edad,
      sexo: isFemale ? 'Femenino' : 'Masculino',
      pesoKg,
      tallaCm,
      imc,
      estadoNutricional,
      antecedentes: ANTECEDENTES_LIST[i % ANTECEDENTES_LIST.length],
      eps: epsObj.nombre,
      plan: regimen === 'Plan adicional' ? 'Plan Complementario Élite' : 'PBS Estándar',
      viaAcceso,
      regimen,
      telMovil: `31${(i % 9) + 1} ${4000000 + i * 832}`,
      estado,
      fNac: `${2026 - edad}-0${(i % 9) + 1}-${10 + (i % 18)}`,
      rh,
      estadoCivil,
      zona: isRural ? 'Rural' : 'Urbana',
      escolaridad,
      etnia: i % 15 === 0 ? 'Afrocolombiana' : (i % 20 === 0 ? 'Indígena' : 'Mestiza / No étnico'),
      ocupacion,
      religion: i % 4 === 0 ? 'Cristiana Evangélica' : 'Católica',
      afiliacion: i % 3 === 0 ? 'Cotizante' : 'Beneficiario',
      conviven: isPediatric ? 'Padres y hermanos' : (i % 2 === 0 ? 'Cónyuge e hijos' : 'Vive solo/a'),
      telCasa: `607 638${1000 + i * 27}`,
      email: `paciente.${idCliente}@example.invalid`,
      direccion: `${direccionObj.dir}, ${direccionObj.mun}`,
      centroId,
      fechaIngreso: `2025-0${(i % 9) + 1}-14`,
      ultimoControl: `2026-0${(i % 8) + 1}-20`,
      proximoControl: hasAlert ? 'Vencido (requiere agendamiento)' : `2026-11-${10 + (i % 15)}`,
      observacionesClinicas: `Paciente en seguimiento activo por Centro de Excelencia. Adherencia al tratamiento adecuada, requiere monitoreo paraclínico periódico en FCV Floridablanca.`,
    });
  }

  return result;
}

/**
 * Mensajes de WhatsApp generados para la bitácora
 */
export const INITIAL_MESSAGES: MensajeWhatsApp[] = [
  {
    id: 'MSG-001',
    pacienteId: '104820',
    nombrePaciente: 'Paciente de prueba',
    documento: 'DEMO-SIN-DOCUMENTO',
    telefonoDestino: '+57 300 000 0000 [Pruebas]',
    mensaje:
      'Hola Valentina, te recordamos desde la Fundación Cardiovascular de Colombia (FCV) tu control clínico programado para la próxima semana en el Centro de Excelencia. Por favor confirma tu asistencia respondiendo a este mensaje.',
    tipoPlantilla: 'recordatorio_control',
    canal: 'WhatsApp Business API',
    estado: 'Leído',
    fechaHora: '2026-10-16 09:24:12',
  },
  {
    id: 'MSG-002',
    pacienteId: '104821',
    nombrePaciente: 'Paciente de prueba',
    documento: 'DEMO-SIN-DOCUMENTO',
    telefonoDestino: '+57 300 000 0000 [Pruebas]',
    mensaje:
      'Estimado Carlos Eduardo, identificamos que tienes pendiente tu control de 1 mes en el Centro de Reemplazo Articular FCV. Para cuidar tu evolución y movilidad, agenda tu cita sin costo llamando al PBX 607 638 4000.',
    tipoPlantilla: 'alerta_vencimiento',
    canal: 'WhatsApp Business API',
    estado: 'Entregado',
    fechaHora: '2026-10-15 16:45:00',
  },
  {
    id: 'MSG-003',
    pacienteId: '104822',
    nombrePaciente: 'Paciente de prueba',
    documento: 'DEMO-SIN-DOCUMENTO',
    telefonoDestino: '+57 300 000 0000 [Pruebas]',
    mensaje:
      'Centro de Neumología Pediátrica FCV: recordamos asistir con el inhalador y la aerocámara para la prueba de función pulmonar en el Instituto Cardiovascular.',
    tipoPlantilla: 'educacion_paciente',
    canal: 'WhatsApp Business API',
    estado: 'Leído',
    fechaHora: '2026-10-15 11:10:30',
  },
  {
    id: 'MSG-004',
    pacienteId: '104823',
    nombrePaciente: 'Paciente de prueba',
    documento: 'DEMO-SIN-DOCUMENTO',
    telefonoDestino: '+57 300 000 0000 [Pruebas]',
    mensaje:
      'Tu control post-quirúrgico ha sido confirmado para el 22 de octubre a las 08:30 AM en el Hospital Internacional de Colombia (HIC - FCV).',
    tipoPlantilla: 'confirmacion_asistencia',
    canal: 'WhatsApp Business API',
    estado: 'Entregado',
    fechaHora: '2026-10-14 14:02:18',
  },
];
