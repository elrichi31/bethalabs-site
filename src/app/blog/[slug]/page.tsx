import BlogPost from "@/components/blog/blog-post"
import BlogPostStructuredData from "@/components/blog/blog-post-structured-data"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { getPostBySlug, getAllPostSlugs, getAllPosts } from "@/lib/blog"
import { notFound } from "next/navigation"

// Esto generará las páginas estáticas para cada slug
export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  const allPosts = await getAllPosts()

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <BlogPostStructuredData post={post} />
      <Navbar />
      <BlogPost post={post} allPosts={allPosts} />
      <Footer />
    </main>
  )
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: "Artículo no encontrado | BethaLabs Ecuador",
    }
  }

  return {
    title: `${post.title} | BethaLabs Ecuador`,
    description: post.excerpt,
    keywords: [...post.tags, 'Ecuador', 'PyMEs Ecuador', 'BethaLabs', 'desarrollo web', 'automatización'],
    authors: [{ name: post.author, url: 'https://www.bethalabs.com' }],
    creator: post.author,
    publisher: 'BethaLabs',
    category: post.category,
    alternates: {
      canonical: `https://www.bethalabs.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      locale: 'es_EC',
      url: `https://www.bethalabs.com/blog/${slug}`,
      siteName: 'BethaLabs Ecuador',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      creator: '@bethalabs',
      site: '@bethalabs',
    },
    other: {
      // Metadata adicional para redes sociales
      'article:published_time': post.date,
      'article:author': post.author,
      'article:section': post.category,
      'article:tag': post.tags.join(', '),
      'og:image:alt': post.title,
      'og:image:type': 'image/avif',
    },
  }
}
