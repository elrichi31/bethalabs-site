import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  tags: string[]
  image: string
  readTime: string
  content?: string
}

// Obtener todos los slugs de posts
export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''))
}

// Obtener datos de un post por slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Parsear el frontmatter
    const { data, content } = matter(fileContents)

    // Convertir markdown a HTML con syntax highlighting y tablas
    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkGfm) // Habilita tablas, strikethrough, task lists, etc.
      .use(remarkRehype)
      .use(rehypeHighlight)
      .use(rehypeStringify)
      .process(content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      author: data.author,
      category: data.category,
      tags: data.tags || [],
      image: data.image || '/placeholder.svg',
      readTime: data.readTime,
      content: contentHtml,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

// Obtener todos los posts ordenados por fecha
export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = getAllPostSlugs()
  const posts = await Promise.all(
    slugs.map(async (slug) => await getPostBySlug(slug))
  )

  // Filtrar posts nulos y ordenar por fecha (más reciente primero)
  return posts
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
}

// Obtener posts por categoría
export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter(post => post.category === category)
}

// Obtener posts por tag
export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter(post => post.tags.includes(tag))
}

// Obtener todas las categorías únicas
export async function getAllCategories(): Promise<string[]> {
  const allPosts = await getAllPosts()
  const categories = new Set(allPosts.map(post => post.category))
  return Array.from(categories)
}

// Obtener todos los tags únicos
export async function getAllTags(): Promise<string[]> {
  const allPosts = await getAllPosts()
  const tags = new Set(allPosts.flatMap(post => post.tags))
  return Array.from(tags)
}

// Obtener posts destacados (últimos N posts)
export async function getFeaturedPosts(count: number = 3): Promise<BlogPost[]> {
  const allPosts = await getAllPosts()
  return allPosts.slice(0, count)
}

// Buscar posts
export async function searchPosts(query: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts()
  const lowercaseQuery = query.toLowerCase()

  return allPosts.filter(post => {
    return (
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
      post.category.toLowerCase().includes(lowercaseQuery)
    )
  })
}
