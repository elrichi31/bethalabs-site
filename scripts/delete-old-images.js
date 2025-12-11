#!/usr/bin/env node

/**
 * Script para eliminar archivos PNG y WebP después de la migración a AVIF
 * Solo elimina imágenes que tienen su equivalente en AVIF
 */

const fs = require('fs');
const path = require('path');

const directories = [
  'public',
  'public/projects',
  'public/blog'
];

const extensionsToDelete = ['.png', '.webp'];

function deleteOldImages(dir) {
  const files = fs.readdirSync(dir);
  let deletedCount = 0;
  let skippedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const ext = path.extname(file).toLowerCase();
    
    // Solo procesar archivos con extensiones a eliminar
    if (!extensionsToDelete.includes(ext)) continue;
    
    // Verificar que existe la versión AVIF
    const avifPath = filePath.replace(ext, '.avif');
    
    if (fs.existsSync(avifPath)) {
      try {
        fs.unlinkSync(filePath);
        console.log(`🗑️  Eliminado: ${path.basename(filePath)}`);
        deletedCount++;
      } catch (error) {
        console.error(`❌ Error eliminando ${filePath}:`, error.message);
      }
    } else {
      console.log(`⚠️  Omitido ${path.basename(filePath)} (no existe ${path.basename(avifPath)})`);
      skippedCount++;
    }
  }
  
  return { deleted: deletedCount, skipped: skippedCount };
}

function main() {
  console.log('🚀 Iniciando limpieza de imágenes PNG y WebP...\n');
  
  let totalDeleted = 0;
  let totalSkipped = 0;
  
  for (const dir of directories) {
    const fullPath = path.join(process.cwd(), dir);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  Directorio no existe: ${dir}`);
      continue;
    }
    
    console.log(`📁 Procesando ${dir}/...\n`);
    const { deleted, skipped } = deleteOldImages(fullPath);
    totalDeleted += deleted;
    totalSkipped += skipped;
    console.log('');
  }
  
  console.log('✨ Limpieza completada!');
  console.log(`📊 Resumen:`);
  console.log(`   ✅ Archivos eliminados: ${totalDeleted}`);
  console.log(`   ⏭️  Archivos omitidos: ${totalSkipped}`);
  
  if (totalSkipped > 0) {
    console.log('\n⚠️  Algunos archivos fueron omitidos porque no tienen versión AVIF.');
    console.log('   Verifica manualmente si necesitas conservarlos.');
  }
}

// Confirmación antes de ejecutar
console.log('⚠️  ADVERTENCIA: Este script eliminará archivos PNG y WebP de forma permanente.');
console.log('   Solo se eliminarán imágenes que tengan su equivalente en AVIF.\n');
console.log('Presiona Ctrl+C para cancelar en los próximos 3 segundos...\n');

setTimeout(() => {
  main();
}, 3000);
