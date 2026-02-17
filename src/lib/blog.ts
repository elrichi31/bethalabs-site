import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeHighlight from "rehype-highlight"
import rehypeStringify from "rehype-stringify"

const postsDirectory = path.join(process.cwd(), "content/blog")

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

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""))
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeHighlight)
      .use(rehypeStringify)
      .process(content)

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      author: data.author,
      category: data.category,
      tags: data.tags || [],
      image: data.image || "/placeholder.svg",
      readTime: data.readTime,
      content: processedContent.toString(),
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = getAllPostSlugs()
  const posts = await Promise.all(slugs.map(async (slug) => getPostBySlug(slug)))

  return posts
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getFeaturedPosts(count: number = 3): Promise<BlogPost[]> {
  const allPosts = await getAllPosts()
  return allPosts.slice(0, count)
}
