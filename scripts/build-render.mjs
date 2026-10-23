import { readdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dirs = readdirSync(root, {withFileTypes: true}).filter(entry => entry.isDirectory() && existsSync(resolve(root,entry.name,'src/components/TallaBajaDashboard.tsx')));
if (dirs.length !== 1) throw new Error('No se encontro una unica carpeta de la aplicacion Talla Baja.');
const app = resolve(root, dirs[0].name);
function run(command, args) {
 const result = spawnSync(command,args,{cwd:app,stdio:'inherit',env:process.env});
 if (result.error) throw result.error;
 if (result.status !== 0) process.exit(result.status || 1);
}
console.log('Aplicacion detectada. Compilando muestra ficticia autorizada, sin nombres.');
if (!process.argv.includes('--skip-install')) {
 const npm = process.env.npm_execpath;
 if (!npm) throw new Error('Ejecutar con npm run build.');
 run(process.execPath,[npm,'install','--include=dev','--no-audit','--no-fund']);
}
run(process.execPath,[resolve(app,'node_modules/vite/bin/vite.js'),'build','--outDir',resolve(root,'dist')]);
if (!existsSync(resolve(root,'dist/index.html'))) throw new Error('No se genero dist/index.html.');
console.log('Sitio listo en dist/index.html.');
