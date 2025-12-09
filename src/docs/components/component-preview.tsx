import { useState, type ReactNode } from 'react';
import { CodeBlock } from './code-block';
import { cn } from '@/lib/utils';

function dedent(str: string): string {
  const lines = str.split('\n');

  // Remove empty first line if exists
  if (lines[0].trim() === '') {
    lines.shift();
  }

  // Find minimum indentation (ignoring empty lines)
  const minIndent = lines
    .filter((line) => line.trim().length > 0)
    .reduce((min, line) => {
      const match = line.match(/^(\s*)/);
      const indent = match ? match[1].length : 0;
      return Math.min(min, indent);
    }, Infinity);

  // Remove the common indentation
  if (minIndent > 0 && minIndent !== Infinity) {
    return lines
      .map((line) => line.slice(minIndent))
      .join('\n')
      .trim();
  }

  return str.trim();
}

interface ComponentPreviewProps {
  children: ReactNode;
  code: string;
  className?: string;
}

export function ComponentPreview({
  children,
  code,
  className,
}: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(true);
  const formattedCode = dedent(code);

  return (
    <div
      className={cn(
        'rounded-xl overflow-hidden border border-(--void-border)',
        className
      )}
    >
      {/* Preview Area */}
      <div className="flex items-center justify-center min-h-[200px] p-8 bg-gradient-to-br from-(--void-surface) to-(--void-bg)">
        {children}
      </div>

      {/* Code Panel */}
      <div className="border-t border-(--void-border)">
        <button
          onClick={() => setShowCode(!showCode)}
          className="flex items-center gap-2 w-full px-4 py-3 text-sm text-(--void-muted) hover:text-(--void-text) bg-(--void-surface) transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={cn('transition-transform', showCode && 'rotate-90')}
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
          Source
        </button>

        {showCode && (
          <CodeBlock
            code={formattedCode}
            language="tsx"
            className="border-0 rounded-none"
          />
        )}
      </div>
    </div>
  );
}
