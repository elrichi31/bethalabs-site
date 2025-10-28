/**
 * Estilos críticos del blog extraídos a componente separado
 * Esto permite mejor tree-shaking y code splitting
 */

export const BlogPostStyles = () => (
  <style jsx global>{`
    .blog-content {
      color: #B3B3B3;
      font-size: 1rem;
      line-height: 1.7;
    }

    /* Títulos optimizados */
    .blog-content h1 {
      color: #ffffff;
      font-size: 2rem;
      font-weight: 700;
      margin-top: 2rem;
      margin-bottom: 1.25rem;
      line-height: 1.2;
      letter-spacing: -0.02em;
    }

    .blog-content h2 {
      color: #ffffff;
      font-size: 1.75rem;
      font-weight: 700;
      margin-top: 2.5rem;
      margin-bottom: 1rem;
      padding-bottom: 0.75rem;
      border-bottom: 2px solid #34A853;
      line-height: 1.3;
    }

    .blog-content h3 {
      color: #ffffff;
      font-size: 1.35rem;
      font-weight: 600;
      margin-top: 1.75rem;
      margin-bottom: 0.875rem;
      line-height: 1.4;
    }

    .blog-content h4 {
      color: #34A853;
      font-size: 1.15rem;
      font-weight: 600;
      margin-top: 1.25rem;
      margin-bottom: 0.625rem;
    }

    /* Párrafos */
    .blog-content p {
      color: #B3B3B3;
      margin-bottom: 1.25rem;
      line-height: 1.7;
    }

    .blog-content p strong {
      color: #ffffff;
      font-weight: 600;
    }

    .blog-content p em {
      color: #34A853;
      font-style: italic;
    }

    /* Enlaces */
    .blog-content a {
      color: #34A853;
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: all 0.3s ease;
    }

    .blog-content a:hover {
      border-bottom-color: #34A853;
      color: #2a8644;
    }

    /* Listas optimizadas */
    .blog-content ul,
    .blog-content ol {
      margin-bottom: 1.5rem;
      padding-left: 1.5rem;
      color: #B3B3B3;
    }

    .blog-content ul {
      list-style-type: none;
    }

    .blog-content ul li {
      position: relative;
      margin-bottom: 0.75rem;
      padding-left: 1.5rem;
      line-height: 1.7;
    }

    .blog-content ul li::before {
      content: "→";
      color: #34A853;
      font-weight: bold;
      position: absolute;
      left: 0;
    }

    .blog-content ol {
      list-style-type: decimal;
      list-style-position: outside;
    }

    .blog-content ol li {
      margin-bottom: 0.75rem;
      padding-left: 0.5rem;
      line-height: 1.7;
    }

    .blog-content ol li::marker {
      color: #34A853;
      font-weight: 600;
    }

    /* Código inline */
    .blog-content code {
      background-color: #1E1E1E;
      color: #34A853;
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
      font-size: 0.9em;
      font-family: 'Courier New', monospace;
      border: 1px solid #333333;
    }

    /* Bloques de código */
    .blog-content pre {
      background: #282c34;
      border: 1px solid #3e4451;
      border-radius: 0.75rem;
      padding: 1.5rem;
      margin: 2rem 0;
      overflow-x: auto;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
      position: relative;
    }

    .blog-content pre code {
      background-color: transparent;
      color: #abb2bf;
      padding: 0;
      border: none;
      font-size: 0.9rem;
      line-height: 1.6;
      display: block;
      font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
    }

    /* Citas optimizadas */
    .blog-content blockquote {
      border-left: 4px solid #34A853;
      background: linear-gradient(135deg, #1E1E1E 0%, #252525 100%);
      padding: 1.75rem 2rem 1.75rem 3rem;
      margin: 2rem 0;
      border-radius: 0 0.75rem 0.75rem 0;
      font-style: italic;
      color: #e0e0e0;
      font-size: 1.05rem;
      line-height: 1.8;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      position: relative;
    }

    .blog-content blockquote::before {
      content: '"';
      position: absolute;
      top: 10px;
      left: 15px;
      font-size: 3.5rem;
      color: #34A853;
      opacity: 0.4;
      font-family: Georgia, serif;
      line-height: 1;
      font-style: normal;
    }

    .blog-content blockquote p {
      margin-bottom: 0.5rem;
      position: relative;
      z-index: 1;
      color: #e0e0e0;
    }

    .blog-content blockquote p:last-child {
      margin-bottom: 0;
    }

    /* Imágenes */
    .blog-content img {
      max-width: 100%;
      height: auto;
      border-radius: 0.75rem;
      margin: 2rem 0;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      border: 1px solid #2a2a2a;
    }

    /* Línea horizontal */
    .blog-content hr {
      border: none;
      border-top: 2px solid #2a2a2a;
      margin: 3rem 0;
    }

    /* Tablas optimizadas */
    .blog-content table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
      margin: 2rem 0;
      background-color: #1E1E1E;
      border-radius: 0.75rem;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      display: table;
    }

    .blog-content table thead {
      background: linear-gradient(135deg, #34A853 0%, #2a8644 100%);
    }

    .blog-content table th {
      color: #ffffff;
      padding: 1rem 1.25rem;
      text-align: left;
      font-weight: 600;
      font-size: 0.95rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      white-space: nowrap;
    }

    .blog-content table td {
      padding: 1rem 1.25rem;
      border-bottom: 1px solid #2a2a2a;
      color: #e0e0e0;
      font-size: 0.95rem;
    }

    .blog-content table tbody tr {
      transition: background-color 0.2s ease;
    }

    .blog-content table tbody tr:hover {
      background-color: #252525;
    }

    .blog-content table tr:last-child td {
      border-bottom: none;
    }

    .blog-content table tbody tr:nth-child(even) {
      background-color: rgba(255, 255, 255, 0.02);
    }

    /* Responsive para móviles */
    @media (max-width: 768px) {
      .blog-content table {
        font-size: 0.85rem;
      }
      
      .blog-content table th,
      .blog-content table td {
        padding: 0.75rem 0.5rem;
      }
    }

    /* Espaciado mejorado */
    .blog-content > *:first-child {
      margin-top: 0;
    }

    .blog-content > *:last-child {
      margin-bottom: 0;
    }
  `}</style>
)
