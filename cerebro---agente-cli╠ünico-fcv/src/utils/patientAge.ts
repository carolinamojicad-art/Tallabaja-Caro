/** The source uses years.months, not decimal years. Never carry invalid months. */
export function parsePatientAge(raw: string) {
  const match = raw.trim().replace(',', '.').match(/^(\d+)(?:\.(\d+))?$/);
  if (!match) return null;
  const years = Number(match[1]);
  const months = Number(match[2] || '0');
  return { years, months, valid: months <= 11, totalMonths: years * 12 + months };
}
export function formatPatientAge(raw: string) {
  const age = parsePatientAge(raw);
  if (!age) return raw.trim() ? `${raw} · por verificar` : 'Sin información';
  if (!age.valid) return `${raw} · meses por validar`;
  return `${age.years} ${age.years === 1 ? 'año' : 'años'}${age.months ? ` y ${age.months} ${age.months === 1 ? 'mes' : 'meses'}` : ''}`;
}
export function patientAgeGroup(raw: string) {
  const age = parsePatientAge(raw);
  if (!age) return 'Sin información';
  if (!age.valid || age.years >= 18) return 'Edad por validar';
  return age.years < 6 ? '0–5 años' : age.years < 12 ? '6–11 años' : '12–17 años';
}
