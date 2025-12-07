import { useState, useEffect } from 'react';
import { codeToHtml } from 'shiki';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  className?: string;
}

function getTheme() {
  if (typeof document !== 'undefined') {
    return document.documentElement.getAttribute('data-theme') === 'light'
      ? 'github-light'
      : 'github-dark';
  }
  return 'github-dark';
}

export function CodeBlock({
  code,
  language = 'tsx',
  filename,
  showLineNumbers = false,
  className,
}: CodeBlockProps) {
  const [html, setHtml] = useState('');
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState(getTheme);

  // Listen for theme changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(getTheme());
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    codeToHtml(code.trim(), {
      lang: language,
      theme,
    }).then(setHtml);
  }, [code, language, theme]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        'rounded-xl overflow-hidden border border-(--void-border)',
        className
      )}
    >
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 bg-(--void-surface) border-b border-(--void-border)">
          <span className="text-sm text-(--void-muted) font-mono">
            {filename}
          </span>
        </div>
      )}
      <div className="relative">
        <div className="absolute top-3 right-3 z-10">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-(--void-bg-muted) hover:bg-(--void-bg-emphasis) text-sm text-(--void-muted) hover:text-(--void-text) transition-colors"
          >
            {copied ? (
              <>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Copied
              </>
            ) : (
              <>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                Copy
              </>
            )}
          </button>
        </div>
        <div
          className={cn(
            '[&_pre]:p-4 [&_pre]:overflow-x-auto [&_pre]:bg-(--void-surface)! [&_code]:text-sm [&_code]:font-mono',
            showLineNumbers &&
              '[&_.line]:before:content-[counter(line)] [&_.line]:before:counter-increment-[line] [&_.line]:before:mr-4 [&_.line]:before:text-(--void-muted) [&_pre]:counter-reset-[line]'
          )}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
