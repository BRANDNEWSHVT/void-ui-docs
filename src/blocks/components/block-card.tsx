import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface BlockCardProps {
  title: string;
  description: string;
  count: number;
  href: string;
  preview?: React.ReactNode;
  className?: string;
}

export function BlockCard({
  title,
  description,
  count,
  href,
  preview,
  className,
}: BlockCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border border-(--void-border) bg-(--void-surface)',
        'transition-all duration-300 hover:border-(--void-border-hover) hover:shadow-(--void-shadow-lg)',
        className
      )}
    >
      {/* Preview Area */}
      <div className="relative aspect-4/3 overflow-hidden bg-(--void-bg-subtle)">
        <div className="absolute inset-0 flex items-center justify-center p-6">
          {preview || (
            <div className="flex h-full w-full items-center justify-center rounded-lg border border-dashed border-(--void-border)">
              <span className="text-sm text-(--void-muted)">Preview</span>
            </div>
          )}
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-(--void-primary)/0 transition-colors group-hover:bg-(--void-primary)/5" />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1 p-4">
        <h3 className="font-semibold text-(--void-text) group-hover:text-(--void-primary) transition-colors">
          {title}
        </h3>
        <p className="text-sm text-(--void-muted)">{description}</p>
        <span className="mt-1 text-xs text-(--void-muted)">
          {count} {count === 1 ? 'block' : 'blocks'}
        </span>
      </div>
    </Link>
  );
}
