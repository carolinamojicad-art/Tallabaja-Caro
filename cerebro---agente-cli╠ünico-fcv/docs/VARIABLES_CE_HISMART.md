# Variables del tablero según las fichas CE HiSmart

Fuentes funcionales: Ficha de Empalme Talla baja Agente CE y Ficha Técnica Agente CE Talla Baja Pediátrica HiSmart, recibidas el 26 de octubre de 2026. La base de pacientes es la muestra ficticia autorizada; no se han añadido pacientes ni nombres.

## Datos usados y límites

- Tratamiento por Endocrino: Sí/No original del Excel. No confirma atención, consulta ni uso de somatropina.
- Adherencia: normalización a Sí, No, Tratamiento pausado, Suspendido, Finalizado, No está en tratamiento, No menciona o Sin dato. Pendiente histórico se conserva en el original y se consolida como Sin dato sin confirmación de la respuesta.
- Asistencia: Asiste, No asiste, Asiste parcialmente, No ha podido agendar o Sin dato. Un único control registrado no prueba adherencia a todo el programa.
- Carpograma: Pendiente explícito genera verificación, sin inventar fecha de solicitud ni atraso de 30 días.
- Genética: Pendiente explícito de valoración, o valoración Sí con reporte Pendiente, genera revisión. No no equivale a remisión indicada.
- Inconsistencia: edad ausente, meses fuera de 0–11, edad de 18 años o más o edad igual al valor de talla. No se corrige automáticamente el registro.
- Pausa/suspensión sin motivo confirmado: verificar motivo. La indicación médica documentada evita clasificar esa pausa como no adherencia.
- Egreso validado: suprime gestiones del motor CE; la base actual no contiene un egreso validado. No se infiere de una edad ni de palabras aisladas.

## Datos nuevos sin fuente en el Excel

Atención por Endocrinología, origen de atención, última consulta, próxima cita de Endocrinología, somatropina, fin de fórmula, entrega/disponibilidad, motivo de no adherencia, estatus del programa, nacimiento e IGF-1 se muestran como Sin dato. No se derivan de campos distintos.

Sin estas fuentes no se ejecutan las reglas de ausencia de atención, brecha por fin de fórmula, periodicidad por somatropina, tres contactos fallidos, transición por cumpleaños, IGF-1 o elegibilidad SAHI. Las propuestas de contacto a los 15 días y cada 3/6 meses requieren validación clínica y datos suficientes.

La disponibilidad de medicamento No con somatropina Activo permite sugerir revisión prioritaria; la atención Externa confirmada permite sugerir solicitud de documentos. La base actual no proporciona esos datos.

## Trazabilidad y publicación

Los cortes permanecen separados: 39 registros en 2025, 148 en 2026, 21 documentos compartidos y 166 documentos únicos en conjunto. No se fusionan historiales sin validación. No existe integración SAHI, envío de mensajes, asignación externa de tareas ni modificación de tratamientos. Los hallazgos son gestiones sugeridas para revisión humana. Los plazos de 2 días hábiles no se convierten a fechas de vencimiento sin fecha del evento ni calendario institucional.

Las tablas de pacientes conservan el diseño limpio solicitado, sin columna de alertas y auditoría. El nuevo panel CE permite consultar y filtrar gestiones por categoría.

## Validación

scripts/verify-ce-rules.ts comprueba normalización, totales, cruces, meses inválidos, excepción médica, egreso, falta de datos y criterios de Genética. TypeScript y compilación pública son comprobaciones separadas.
