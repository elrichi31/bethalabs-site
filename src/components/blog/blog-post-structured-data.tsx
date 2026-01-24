import type { BlogPost } from "@/lib/blog"

interface BlogPostStructuredDataProps {
  post: BlogPost
}

export default function BlogPostStructuredData({ post }: BlogPostStructuredDataProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": {
      "@type": "ImageObject",
      "url": `https://www.bethalabs.com${post.image}`,
      "width": 1200,
      "height": 630,
      "caption": post.title
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://www.bethalabs.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BethaLabs",
      "url": "https://www.bethalabs.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.bethalabs.com/icon-512.png",
        "width": 512,
        "height": 512
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.bethalabs.com/blog/${post.slug}`
    },
    "articleSection": post.category,
    "keywords": post.tags.join(", "),
    "inLanguage": "es-EC",
    "timeRequired": post.readTime,
    "articleBody": post.excerpt,
    "url": `https://www.bethalabs.com/blog/${post.slug}`
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://www.bethalabs.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.bethalabs.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://www.bethalabs.com/blog/${post.slug}`
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
