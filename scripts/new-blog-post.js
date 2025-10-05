#!/usr/bin/env node

/**
 * Script para crear plantillas de artículos de blog
 * Uso: node scripts/new-blog-post.js "Título del artículo"
 */

const fs = require('fs');
const path = require('path');

// Obtener el título del argumento
const titulo = process.argv[2];

if (!titulo) {
  console.error('❌ Error: Debes proporcionar un título');
  console.log('Uso: node scripts/new-blog-post.js "Título del artículo"');
  process.exit(1);
}

// Convertir título a slug (URL amigable)
const slug = titulo
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '') // Quitar acentos
  .replace(/[^a-z0-9]+/g, '-')      // Reemplazar espacios y caracteres especiales
  .replace(/^-+|-+$/g, '');          // Quitar guiones al inicio/final

// Fecha actual
const fecha = new Date().toISOString().split('T')[0];

// Plantilla del artículo
const plantilla = `---
title: "${titulo}"
excerpt: "Descripción breve de tu artículo (max 160 caracteres)"
date: "${fecha}"
author: "BethaLabs Team"
category: "Automatización"
tags: ["tag1", "tag2", "tag3"]
image: "/blog/${slug}.jpg"
readTime: "8 min"
---

# Introducción

Tu introducción aquí...

## Sección principal

Contenido de la sección...

### Subsección

Más contenido...

## Conclusión

Resumen y conclusiones...

---

**¿Te gustó este artículo?** 

📧 Agenda una consultoría gratuita: contacto@bethalabs.dev
`;

// Ruta del nuevo archivo
const blogDir = path.join(process.cwd(), 'content', 'blog');
const filePath = path.join(blogDir, `${slug}.md`);

// Verificar si el archivo ya existe
if (fs.existsSync(filePath)) {
  console.error(`❌ Error: Ya existe un artículo con ese nombre: ${slug}.md`);
  process.exit(1);
}

// Crear el directorio si no existe
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir, { recursive: true });
}

// Crear el archivo
fs.writeFileSync(filePath, plantilla, 'utf8');

console.log('✅ ¡Artículo creado con éxito!');
console.log('');
console.log(`📁 Ubicación: content/blog/${slug}.md`);
console.log(`🔗 URL: /blog/${slug}`);
console.log('');
console.log('Próximos pasos:');
console.log('1. Edita el archivo y completa el contenido');
console.log(`2. Agrega una imagen en /public/blog/${slug}.jpg`);
console.log('3. Actualiza category, tags y readTime según corresponda');
console.log('4. ¡Publica!');
