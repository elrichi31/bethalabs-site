const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const blogDir = path.join(publicDir, 'blog');

// Función para convertir imagen a WebP
async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 85 }) // Calidad 85 = buen balance tamaño/calidad
      .toFile(outputPath);
    
    const inputSize = fs.statSync(inputPath).size;
    const outputSize = fs.statSync(outputPath).size;
    const savings = ((1 - outputSize / inputSize) * 100).toFixed(2);
    
    console.log(`✅ Convertido: ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    console.log(`   Tamaño original: ${(inputSize / 1024).toFixed(2)} KB`);
    console.log(`   Tamaño WebP: ${(outputSize / 1024).toFixed(2)} KB`);
    console.log(`   Ahorro: ${savings}%\n`);
  } catch (error) {
    console.error(`❌ Error convirtiendo ${inputPath}:`, error.message);
  }
}

// Función principal
async function main() {
  console.log('🚀 Iniciando conversión de imágenes a WebP...\n');

  // Convertir about.webp (ya está en WebP, saltear)
  console.log('ℹ️  about.webp ya está en WebP, saltando...\n');

  // Lista de imágenes a convertir
  const imagesToConvert = [
    {
      input: path.join(blogDir, 'errores-seguridad.jpg'),
      output: path.join(blogDir, 'errores-seguridad.webp')
    },
    {
      input: path.join(blogDir, 'whatsapp-crm.jpg'),
      output: path.join(blogDir, 'whatsapp-crm.webp')
    },
    {
      input: path.join(blogDir, 'caso-phishing-stealer.jpeg'),
      output: path.join(blogDir, 'caso-phishing-stealer.webp')
    }
  ];

  // Convertir todas las imágenes
  for (const { input, output } of imagesToConvert) {
    if (fs.existsSync(input)) {
      await convertToWebP(input, output);
    } else {
      console.log(`⚠️  No se encontró: ${path.basename(input)}`);
    }
  }

  console.log('✅ Conversión completada!');
  console.log('\n📝 Próximos pasos:');
  console.log('1. Actualizar referencias en archivos .md (image: "/blog/archivo.webp")');
  console.log('2. Actualizar projects.tsx con nuevas extensiones');
  console.log('3. Opcional: Eliminar archivos .jpg/.jpeg antiguos');
}

main();
