// src/components/ui/MarkdownRenderer.tsx (Comprehensive Version)
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return (
    <div
      className="
        prose 
        prose-invert 
        max-w-none

        /* --- General Typography & Elements --- */
        text-base text-foreground/90
        prose-p:leading-relaxed prose-p:my-4
        prose-strong:text-foreground prose-strong:font-semibold
        prose-em:text-foreground/90 prose-em:italic
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium
        prose-hr:my-10 prose-hr:border-white/10

        /* --- Headings --- */
        prose-headings:tracking-tight prose-headings:font-bold
        prose-h1:text-3xl prose-h1:text-primary prose-h1:mb-6 prose-h1:mt-8
        prose-h2:text-2xl prose-h2:text-primary prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-3 prose-h2:border-b prose-h2:border-white/10
        prose-h3:text-xl prose-h3:text-secondary prose-h3:mt-8 prose-h3:mb-3
        prose-h4:text-lg prose-h4:text-foreground/90 prose-h4:mt-6 prose-h4:mb-2 font-semibold

        /* --- Lists (Bulleted & Numbered) --- */
        prose-ul:list-disc prose-ul:pl-5
        prose-ol:list-decimal prose-ol:pl-5
        prose-li:my-2 prose-li:pl-2
        prose-ul>li::marker:text-primary
        prose-ol>li::marker:text-primary
        /* Nested list styling */
        prose-ul ul, prose-ul ol, prose-ol ul, prose-ol ol {
          @apply my-2;
        }
        prose-ul ul>li::marker, prose-ul ol>li::marker, prose-ol ul>li::marker, prose-ol ol>li::marker {
          @apply text-secondary;
        }

        /* --- Blockquotes --- */
        prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:pl-4 prose-blockquote:pr-2 prose-blockquote:py-1 prose-blockquote:italic prose-blockquote:text-foreground/80 prose-blockquote:bg-accent/50 prose-blockquote:rounded-r-lg prose-blockquote:my-6
        prose-blockquote p {
          @apply my-2;
        }

        /* --- Code (Inline & Blocks) --- */
        prose-code:bg-accent prose-code:text-accent-foreground prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:font-mono prose-code:text-sm prose-code:font-semibold
        prose-pre:bg-accent prose-pre:p-4 prose-pre:my-6 prose-pre:rounded-lg prose-pre:border prose-pre:border-white/10

        /* --- Tables --- */
        prose-table:w-full prose-table:my-6 prose-table:border-collapse prose-table:text-left
        prose-thead:border-b prose-thead:border-white/20
        prose-th:font-semibold prose-th:p-3 prose-th:text-primary
        prose-tbody tr:nth-child(even) {
          @apply bg-accent/50;
        }
        prose-td:p-3 prose-td:align-baseline prose-td:border-b prose-td:border-white/10
        prose-tr:border-b prose-tr:border-white/10

        /* --- Images within Markdown --- */
        prose-img:rounded-lg prose-img:shadow-md prose-img:my-6
      "
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;