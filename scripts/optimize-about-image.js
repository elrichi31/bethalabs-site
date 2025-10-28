const sharp = require('sharp');
const path = require('path');

async function optimizeAboutImage() {
  const inputPath = path.join(__dirname, '..', 'public', 'about.webp');
  const outputPath = path.join(__dirname, '..', 'public', 'about-optimized.webp');
  const originalSize = require('fs').statSync(inputPath).size;
  
  try {
    // Versión optimizada para desktop/tablet
    await sharp(inputPath)
      .resize(600, 600, { // Suficiente para Retina display en max-w-2xl
        fit: 'cover',
        withoutEnlargement: true
      })
      .webp({
        quality: 70, // Reducir calidad para mejor compresión
        effort: 6
      })
      .toFile(outputPath);
    
    const stats = await sharp(outputPath).metadata();
    const size = require('fs').statSync(outputPath).size;
    
    console.log('✅ Imagen optimizada (600x600):');
    console.log(`   Tamaño: ${(size / 1024).toFixed(2)} KB`);
    console.log(`   Ahorro: ${((1 - size / originalSize) * 100).toFixed(1)}%`);
    
    // Reemplazar original
    require('fs').copyFileSync(outputPath, inputPath);
    require('fs').unlinkSync(outputPath);
    console.log('✅ about.webp reemplazado exitosamente');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

optimizeAboutImage();
