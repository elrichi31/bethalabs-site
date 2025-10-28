# BethaLabs Site - AI Coding Agent Instructions

## ⚠️ CRITICAL RULES - READ FIRST

### Output & Communication Guidelines

**NEVER create documentation files (.md) for changes or summaries**

When making changes:
- ✅ **DO**: Provide a brief summary in the chat (2-5 sentences max)
- ✅ **DO**: List ONLY the files modified (no detailed explanations unless asked)
- ✅ **DO**: Mention next steps ONLY if critical
- ❌ **DON'T**: Create .md files for change logs, summaries, or documentation unless specifically requested
- ❌ **DON'T**: Create README files for every feature
- ❌ **DON'T**: Generate long reports or documentation after every change
- ❌ **DON'T**: Create instruction files or guides unless explicitly asked

**Summary Format (in chat only):**
```
✅ Done: [Brief description]
Files: file1.tsx, file2.ts
```

Keep responses SHORT and actionable. No walls of text or unnecessary documentation files.

---

## Project Overview
BethaLabs is a personal portfolio/landing page showcasing cybersecurity and web development projects. Built with Next.js 15.2, React 19, TypeScript, and Tailwind CSS 4, featuring Framer Motion animations throughout.

## Architecture & Structure

### Single-Page Application Pattern
- **Main page**: `src/app/page.tsx` orchestrates all sections as imported components
- **Sections flow**: Navbar → Hero → About → Projects → Blog → Contact → Footer
- All components are client-side (`"use client"`) due to Framer Motion animations
- No routing beyond `#` anchor links for smooth scrolling between sections

### Component Organization
All UI components live in `src/components/` as standalone, self-contained modules:
- Each component manages its own state, animations, and data
- No shared state management or context providers
- Data structures (projects, blog posts, nav links) are defined inline within components

## Development Workflow

### Running the Application
- **Dev server**: `npm run dev` (uses Turbopack for faster builds via `--turbopack` flag)
- **Build**: `npm run build`
- **Production**: `npm start`
- **Linting**: `npm run lint`

### Key Dependencies
- **Framer Motion** (v12.4.7): Core animation library - all sections use motion components
- **Lucide React**: Icon library (Menu, X, Shield, Code, ArrowRight, Github, etc.)
- **Next.js 15.2** with React 19: Latest stable versions, App Router only

## Styling Conventions

### Color System (Strict Adherence Required)
- **Background dark**: `#121212` (main sections)
- **Background medium**: `#1A1A1A` (alternating sections like About, Blog)
- **Cards**: `#1E1E1E`
- **Primary accent (GREEN)**: `#34A853` - BethaLabs brand color, used for:
  - CTAs, buttons, links
  - Hover states
  - Icon accents
  - Tag backgrounds (`#34A853/20` with opacity)
- **Text colors**: 
  - White (`text-white`) for headings
  - `#B3B3B3` for body text/descriptions

### Typography
Custom fonts defined in `globals.css` via `@font-face`:
- **Acorn** (`--titleFont`): For titles/headings
- **GT Walsheim** (`--bodyFont`): For body text (applied globally to html/body)
- Fallback to Geist Sans/Mono from Next.js font optimization

### Tailwind Configuration
- **Tailwind CSS v4** with PostCSS plugin (`@tailwindcss/postcss`)
- Custom CSS variables in `globals.css` under `:root`
- Use utility classes directly; no custom theme extensions needed

## Animation Patterns (Framer Motion)

### Standard Component Entry Animation
```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
```

### Staggered Animations (Projects, Blog)
Add `delay: index * 0.1` to transition for sequential reveals

### Interactive Elements
- Buttons/CTAs: `whileHover={{ scale: 1.05 }}` + `whileTap={{ scale: 0.95 }}`
- Cards: `whileHover={{ y: -5 }}` for lift effect

### Advanced Patterns
- **Hero parallax icons**: `useScroll` + `useTransform` for mouse-tracking movement
- **About section**: `scrollYProgress` with parallax transform on image
- **Navbar**: Dynamic background opacity based on scroll position

## Component-Specific Patterns

### Navbar (`navbar.tsx`)
- Fixed position with backdrop blur
- Mobile menu toggle with `useState`
- Scroll-based styling changes (background opacity on scroll)
- Rounded pill design (`rounded-full`) with dynamic alpha channel

### Hero (`hero.tsx`)
- Mouse position tracking for parallax floating icons (Shield, Code)
- SVG pattern background for decorative "+" grid
- Two CTAs: "Ver proyectos" (primary green) and "Contactar" (outlined)

### Projects (`projects.tsx`)
- Array of project objects with image, title, description, tags
- Images from `/public/projects/` and external URLs
- External image domains configured in `next.config.ts` (`remotePatterns`)
- Tags displayed as small pills with green accent background

### Contact (`contact.tsx`)
- Form with controlled inputs (`useState` for form data)
- Simulated async submission (1.5s timeout, not connected to backend)
- Success state handling with auto-reset timer
- Social media links section (Github, LinkedIn, Twitter)

## Image Handling

### Next.js Image Component
- All images use `next/image` for optimization
- External image domains must be whitelisted in `next.config.ts`:
  ```typescript
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'aodatacloud.es' },
      { protocol: 'https', hostname: 'hydeparkwinterwonderland.com' },
      { protocol: 'https', hostname: 'wembleypark.com' }
    ]
  }
  ```
- Static images in `/public/` can be referenced with `/filename.ext`

## TypeScript Configuration
- Path alias: `@/*` maps to `./src/*` - always use for imports
- Strict mode enabled
- Target ES2017 for compatibility

## Content & Localization
- **Language**: All UI text in Spanish (for portfolio owner "BethaLabs")
- **Metadata**: Defined in `page.tsx` - update for SEO (title, description, keywords)
- **Theme**: Cybersecurity + Web Development focus

## Common Modifications

### Adding a New Section
1. Create component in `src/components/new-section.tsx` with `"use client"`
2. Import and add to `src/app/page.tsx` in desired order
3. Add anchor link in `navLinks` array in `navbar.tsx`
4. Follow color scheme: alternate between `#121212` and `#1A1A1A` backgrounds

### Adding a New Project
Edit `projects` array in `src/components/projects.tsx`:
```typescript
{
  id: number,
  title: string,
  description: string,
  image: string, // /projects/name.png or external URL
  tags: string[]
}
```

### Styling New Components
- Start with motion.div wrapper for animations
- Use `bg-[#121212]` or `bg-[#1A1A1A]` for section backgrounds
- Cards: `bg-[#1E1E1E] rounded-lg shadow-xl`
- Buttons: `bg-[#34A853] text-white rounded-full` with hover effects
- Text: `text-white` for titles, `text-[#B3B3B3]` for descriptions

## What NOT to Do
- Don't add global state management (not needed for this single-page site)
- Don't create API routes (contact form is simulated, no backend)
- Don't mix English and Spanish in UI text
- Don't use colors outside the defined palette
- Don't use `<a>` tags for internal navigation - use Next.js `Link` only for hash anchors
- **DON'T create markdown files for change summaries** - Give brief summaries in chat only

### Pricing Policy
- ❌ **NEVER include specific prices** in public-facing content (blog, components, pages)
- ✅ Keep pricing discussions private (email/contact only)
- ✅ Use generic phrases like "Consulta por precios" or "Cotización personalizada"
- ❌ Don't write prices in comments, documentation, or example data

## Blog System (Markdown-based)

### Overview
- Blog uses **Markdown files** in `/content/blog/` directory
- Each `.md` file = one blog post
- Frontmatter (YAML) for metadata + Markdown content
- Automatic conversion to HTML with syntax highlighting

### File Structure
```
/content/blog/
  - ejemplo-articulo.md
  - 5-errores-seguridad-pymes.md
  - integracion-whatsapp-crm.md
  - your-new-post.md  👈 Create new posts here
/public/blog/
  - image1.jpg  👈 Blog post images go here
```

### Creating New Blog Posts

#### Option 1: CLI Command (Recommended)
```bash
npm run new-post "Title of Your Article"
```
This auto-generates:
- Correct filename with slug
- Pre-filled frontmatter with current date
- Basic content template

#### Option 2: Manual Creation
1. Create file: `/content/blog/article-slug.md`
2. Add frontmatter + content

### Frontmatter Template
```yaml
---
title: "Full Article Title"
excerpt: "Short description (max 160 chars for SEO)"
date: "2024-10-05"  # YYYY-MM-DD format
author: "BethaLabs Team"
category: "Automatización"  # Options: Automatización, Ciberseguridad, Tutoriales
tags: ["tag1", "tag2", "tag3"]  # 3-5 tags
image: "/blog/image-name.jpg"  # Image path
readTime: "8 min"  # Estimated reading time
---
```

### Frontmatter Fields (All Required)
- **title**: Article title (50-60 chars for SEO)
- **excerpt**: Brief summary (120-160 chars)
- **date**: Publication date (YYYY-MM-DD)
- **author**: Author name
- **category**: One of: `Automatización`, `Ciberseguridad`, `Tutoriales`
- **tags**: Array of 3-5 relevant tags
- **image**: Path to featured image (place in `/public/blog/`)
- **readTime**: Estimated reading time (e.g., "8 min")

### Markdown Content Structure
After frontmatter, write content using standard Markdown:

```markdown
# Introduction

Your intro here...

## Main Section

Content...

### Subsection

More content...

## Lists

- Bullet point 1
- Bullet point 2

1. Numbered item 1
2. Numbered item 2

## Code Blocks

Specify language for syntax highlighting:

\```javascript
const example = "JavaScript code";
console.log(example);
\```

\```python
# Python code
print("Hello")
\```

## Images

![Alt text](/blog/image-name.jpg)

## Blockquotes

> Important quote or tip

## Links

[Link text](https://url.com)

## Tables (with remark-gfm)

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |

**Important**: Each table row must be on its own line!

## Emphasis

**Bold text**
*Italic text*
```

### Images
- **Location**: Place all images in `/public/blog/`
- **Naming**: Use descriptive names with hyphens (e.g., `automation-guide.jpg`)
- **Format**: JPG, PNG, or WebP (recommended)
- **Size**: Optimize images (max 500KB recommended)
- **Reference**: 
  - In frontmatter: `image: "/blog/image-name.jpg"`
  - In content: `![Description](/blog/image-name.jpg)`

### Categories
- **Automatización**: Articles about n8n, Make, Zapier, workflows
- **Ciberseguridad**: Security, backups, malware, protection
- **Tutoriales**: Step-by-step guides

### SEO Best Practices for Blog Posts
1. **Title**: 50-60 characters, include main keyword
2. **Excerpt**: 120-160 characters, summarize value
3. **Tags**: 3-5 relevant tags (used for search/filtering)
4. **Images**: Optimized size, descriptive filenames
5. **Content**: Minimum 800 words for good SEO
6. **Structure**: Proper H1 > H2 > H3 hierarchy
7. **Internal links**: Link to other articles when relevant

### Writing Tips
- Use emojis in headings for visual appeal (✅ 📊 🚀 💡)
- **Bold** important concepts
- Use blockquotes (>) for tips or important notes
- Always end with a Call-to-Action (CTA):
  ```markdown
  ---
  
  📧 **Agenda una consultoría gratuita**: bethalabs.dev@gmail.com
  ```

### Technical Implementation
- **Processor**: `unified` with `remark-parse`, `remark-gfm`, `remark-rehype`, `rehype-highlight`, `rehype-stringify`
- **Syntax Highlighting**: Atom One Dark theme via `highlight.js`
- **GFM Support**: Tables, strikethrough, task lists via `remark-gfm`
- **Dynamic Routes**: `/blog/[slug]` with `generateStaticParams`
- **Sitemap**: Auto-generated including all blog posts

### Blog Utilities (`/src/lib/blog.ts`)
Available functions:
- `getAllPosts()` - Get all blog posts
- `getPostBySlug(slug)` - Get single post
- `getFeaturedPosts(count)` - Get N featured posts
- `searchPosts(query)` - Search posts by title/content
- `getPostsByCategory(category)` - Filter by category
- `getPostsByTag(tag)` - Filter by tag
- `getAllCategories()` - Get all categories
- `getAllTags()` - Get all unique tags

### Styling
Blog posts have custom CSS in `src/components/blog/blog-post.tsx`:
- Headers with green accents (#34A853)
- Custom bullet points with arrows
- Syntax-highlighted code blocks (Atom One Dark)
- Beautiful blockquotes with quotation marks
- Styled tables with hover effects
- Reading progress bar at top
- Responsive design

### Publishing Workflow
1. Create/edit `.md` file in `/content/blog/`
2. Add images to `/public/blog/`
3. Run `npm run dev` to preview
4. Visit `http://localhost:3001/blog` to verify
5. Build and deploy: `npm run build && npm start`

### Updating Posts
- Edit the `.md` file directly
- Changes appear immediately in dev mode
- Re-build for production

### Common Markdown Pitfalls
- ❌ Tables on single line - Won't render
- ✅ Each table row on new line - Renders correctly
- ❌ Missing empty line before/after code blocks - Formatting issues
- ✅ Always add empty lines around code blocks
- ❌ Incorrect frontmatter YAML - Post won't load
- ✅ Use exact format from template

### Example Full Article Structure
```markdown
---
title: "Complete Guide to Business Automation"
excerpt: "Learn how to automate your business processes step by step"
date: "2024-10-05"
author: "BethaLabs Team"
category: "Automatización"
tags: ["n8n", "automation", "beginner"]
image: "/blog/automation-guide.jpg"
readTime: "12 min"
---

# Introduction

Hook reader with the problem you're solving...

## Section 1: The Problem

Describe the pain point...

## Section 2: The Solution

Step-by-step guide:

1. First step
2. Second step
3. Third step

### Code Example

\```javascript
// Example code with proper syntax highlighting
const workflow = createAutomation();
\```

## Section 3: Results

Show benefits with data:

| Metric | Before | After |
|--------|--------|-------|
| Time   | 10h    | 1h    |

## Conclusion

Summarize key takeaways...

---

📧 **Need help?** Contact: bethalabs.dev@gmail.com
```

### Content Guidelines for Ecuador Market
- Write in **Spanish** (es-EC)
- Use local examples and case studies
- Mention Ecuador, Quito, Guayaquil when relevant
- Focus on PyMEs (small/medium businesses)
- Practical, actionable content
- Include ROI and cost estimates in USD
- Address common concerns of Ecuadorian businesses

### Content Strategy: Ecuador + Latinoamérica
**Primary Market**: Ecuador (presencial + remoto)
- Enfatizar servicios presenciales en Quito/Guayaquil
- Casos de éxito locales
- Referencias a regulaciones ecuatorianas

**Secondary Market**: Latinoamérica (100% remoto)
- Contenido aplicable a toda Latinoamérica
- Ejemplos de Colombia, Perú, México, Argentina, Chile
- Énfasis en servicios remotos eficientes
- Horarios flexibles para diferentes zonas
- Comunicación en español

**SEO Keywords Balance**:
- 40% Ecuador-specific (Ecuador, Quito, Guayaquil)
- 60% Latinoamérica-general (PyMEs, automatización, n8n español, remoto)

**Content Types**:
- **Locales**: "Top 5 errores de seguridad en PyMEs ecuatorianas"
- **Regionales**: "Cómo automatizar tu PyME en Latinoamérica con n8n"
- **Universales**: "Guía completa de integración WhatsApp con CRM"
