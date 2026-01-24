const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, '../public/logo.avif');
const publicDir = path.join(__dirname, '../public');
const appDir = path.join(__dirname, '../src/app');

const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 192, name: 'icon-192.png' },
  { size: 512, name: 'icon-512.png' },
  { size: 180, name: 'apple-touch-icon.png' },
];

async function generateIcons() {
  console.log('Generating icons from logo.avif...');

  for (const { size, name } of sizes) {
    const outputPath = path.join(publicDir, name);
    await sharp(inputFile)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(outputPath);
    console.log(`✓ Generated ${name} (${size}x${size})`);
  }

  // Generate icon.png for Next.js app directory (192x192 is recommended)
  await sharp(inputFile)
    .resize(192, 192, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toFile(path.join(appDir, 'icon.png'));
  console.log('✓ Generated src/app/icon.png (192x192)');

  // Generate apple-icon.png for Next.js app directory
  await sharp(inputFile)
    .resize(180, 180, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toFile(path.join(appDir, 'apple-icon.png'));
  console.log('✓ Generated src/app/apple-icon.png (180x180)');

  console.log('\n✅ All icons generated successfully!');
}

generateIcons().catch(console.error);
