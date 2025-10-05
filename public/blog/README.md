# Imágenes del Blog

Esta carpeta contiene las imágenes destacadas de los artículos del blog.

## Cómo agregar una imagen a un artículo

1. **Guarda tu imagen aquí** con un nombre descriptivo (ej: `errores-seguridad.jpg`)

2. **En el archivo Markdown** del artículo (`/content/blog/tu-articulo.md`), actualiza el frontmatter:
   ```yaml
   image: "/blog/errores-seguridad.jpg"
   ```

3. **Formatos recomendados:**
   - JPG para fotografías
   - PNG para gráficos con transparencia
   - WebP para mejor optimización (recomendado)

4. **Tamaño recomendado:** 1200x630px (formato de redes sociales)

## Ejemplo

Si tu archivo se llama `5-errores-seguridad-pymes.md`, podrías usar:
- Nombre de imagen: `errores-seguridad.jpg`
- Ruta en frontmatter: `image: "/blog/errores-seguridad.jpg"`

## Notas
- Las rutas deben empezar con `/blog/` (no incluir `/public/`)
- Si no agregas imagen, se usará un placeholder por defecto
