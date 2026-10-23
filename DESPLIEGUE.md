# Publicar Talla Baja en Render

Para un sitio estático existente, configurar:

- Root Directory: `cerebro---agente-cli╠ünico-fcv`
- Build Command: `npm ci && npm run build`
- Publish Directory: `dist`
- Variable de entorno: `NODE_VERSION=24`

Guardar y ejecutar Manual Deploy → Deploy latest commit.

El archivo render.yaml permite crear el servicio mediante un Blueprint. Agregarlo al repositorio no modifica automáticamente un servicio creado manualmente.

El sitio publicado no incluye registros identificables de pacientes. El archivo local de pacientes está excluido de Git; por ello, el listado público estará vacío. No cargar ni desplegar ese archivo en un sitio público. El corte agregado no equivale a sincronización clínica.
