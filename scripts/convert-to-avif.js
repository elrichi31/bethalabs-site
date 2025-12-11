#!/usr/bin/env node

/**
 * Script para convertir todas las imágenes PNG, JPG, JPEG y WebP a AVIF
 * AVIF ofrece ~50% menos peso que WebP con la misma calidad
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp'];
const directories = [
  'public',
  'public/projects',
  'public/blog'
];

async function convertToAvif(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .avif({
        quality: 80,
        effort: 6, // 0-9, mayor = mejor compresión pero más lento
      })
      .toFile(outputPath);
    
    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const savings = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    console.log(`   ${(inputStats.size / 1024).toFixed(1)}KB → ${(outputStats.size / 1024).toFixed(1)}KB (${savings}% reducción)\n`);
    
    return true;
  } catch (error) {
    console.error(`❌ Error convirtiendo ${inputPath}:`, error.message);
    return false;
  }
}

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const ext = path.extname(file).toLowerCase();
    
    // Solo procesar imágenes
    if (!imageExtensions.includes(ext)) continue;
    
    // Skip si ya existe versión AVIF
    const avifPath = filePath.replace(ext, '.avif');
    if (fs.existsSync(avifPath)) {
      console.log(`⏭️  Ya existe: ${path.basename(avifPath)}`);
      continue;
    }
    
    await convertToAvif(filePath, avifPath);
  }
}

async function main() {
  console.log('🚀 Iniciando conversión a AVIF...\n');
  
  // Verificar que sharp está instalado
  try {
    require('sharp');
  } catch (error) {
    console.error('❌ sharp no está instalado. Ejecuta: npm install sharp --save-dev');
    process.exit(1);
  }
  
  for (const dir of directories) {
    const fullPath = path.join(process.cwd(), dir);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  Directorio no existe: ${dir}`);
      continue;
    }
    
    console.log(`📁 Procesando ${dir}/...\n`);
    await processDirectory(fullPath);
    console.log('');
  }
  
  console.log('✨ Conversión completada!');
  console.log('\n💡 Próximo paso: Actualizar referencias en componentes (.webp → .avif)');
}

main();
