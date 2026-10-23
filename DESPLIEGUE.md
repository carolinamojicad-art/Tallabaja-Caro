# Publicar Talla Baja en Render

Configuración para el sitio estático existente:

- Root Directory: vacío (raíz del repositorio).
- Build Command: npm run build
- Publish Directory: dist
- Variable de entorno: NODE_VERSION=24

Guardar cada cambio y ejecutar Manual Deploy → Deploy latest commit.

El script de compilación detecta la subcarpeta de la aplicación, instala sus dependencias y genera dist/index.html en la raíz. No se necesita escribir el nombre de la subcarpeta.

El archivo render.yaml se aplica mediante Blueprint; no actualiza automáticamente servicios creados manualmente.

Los registros identificables se excluyen del repositorio. La compilación pública se cancela si encuentra el archivo privado de pacientes. La tabla pública permanece vacía hasta disponer de una fuente autorizada con controles de acceso.
