import { mkdir, copyFile } from 'node:fs/promises';

await mkdir('www', { recursive: true });
await copyFile('index.html', 'www/index.html');
await copyFile('jogo.html', 'www/jogo.html');
console.log('Páginas do Voltex Math copiadas para www/.');