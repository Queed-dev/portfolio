import { transform } from '@svgr/core';
import fs from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

function toPascalCase(name: string) {
    return name
        .replace(/\.[^/.]+$/, '')
        .replace(/(^\w|[-_]\w)/g, s => s.replace(/[-_]/, '').toUpperCase());
}

async function transformSvgToComponent(svgPath: string, destinationPath: string) {
    const svgCode = await fs.readFile(svgPath, 'utf-8');
    const name = svgPath.split(path.sep);
    if(existsSync(destinationPath)) {
        fs.unlink(destinationPath).catch((err) => {
            console.error(`Error deleting file ${destinationPath}:`, err);
        });
    }
    const componentName = name[name.length - 1].trim().split('.')[0].trim();
    const componentCode = await transform(
        svgCode,
        {
            typescript: true,
            // icon: true,
            prettier: true,
            jsxRuntime: 'automatic',
            runtimeConfig: true,
            exportType: "default",
            plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
            replaceAttrValues: { '#000': 'currentColor' },
        },
        {
            filePath: svgPath,
            componentName: toPascalCase(componentName)
        }
    );

    const outputPath = destinationPath.replace('.svg', '.tsx');
    await fs.writeFile(outputPath, componentCode);
    // console.log(`✅ Transformé : ${outputPath} \n ${componentName} \n\n ${componentCode}`);
}
const dir = 'svg';
fs.readdir('svg').then(async (files) => {
    for(let file of files) {
        if(/\.svg$/.test(file) && (await fs.stat(path.join(dir, file))).isFile()) {
            await transformSvgToComponent(path.join(dir, file), path.join(dir, 'react', file));
        }
    }
}).catch((err) => {
    console.error('Error',err);
});

// Exemple : transformer un seul fichier
// transformSvgToComponent('svg/logo.svg');
