import { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Desktop,
  DeviceTabletCamera,
  DeviceMobile,
  ArrowsOut,
  Code,
  Eye,
  X,
} from '@phosphor-icons/react';

type ViewMode = 'desktop' | 'tablet' | 'mobile';
type TabMode = 'preview' | 'code';

interface BlockPreviewProps {
  title: string;
  code: string;
  children: React.ReactNode;
  className?: string;
}

export function BlockPreview({
  title,
  code,
  children,
  className,
}: BlockPreviewProps) {
  const [tab, setTab] = useState<TabMode>('preview');
  const [viewMode, setViewMode] = useState<ViewMode>('desktop');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const viewWidths: Record<ViewMode, string> = {
    desktop: '100%',
    tablet: '768px',
    mobile: '375px',
  };

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(code);
  };

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-(--void-bg)">
        {/* Fullscreen Header */}
        <div className="flex h-14 items-center justify-between border-b border-(--void-border) px-4">
          <span className="font-medium text-(--void-text)">{title}</span>
          <button
            onClick={() => setIsFullscreen(false)}
            className="rounded-lg p-2 text-(--void-muted) hover:bg-(--void-bg-subtle) hover:text-(--void-text) transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        {/* Fullscreen Content */}
        <div className="h-[calc(100vh-3.5rem)] overflow-auto bg-(--void-bg-subtle)">
          <div className="min-h-full">{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-(--void-border) bg-(--void-surface)',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-(--void-border) px-4 py-3">
        <h3 className="font-medium text-(--void-text)">{title}</h3>

        <div className="flex items-center gap-2">
          {/* Preview/Code Toggle */}
          <div className="flex rounded-lg border border-(--void-border) p-0.5">
            <button
              onClick={() => setTab('preview')}
              className={cn(
                'flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors',
                tab === 'preview'
                  ? 'bg-(--void-bg-muted) text-(--void-text)'
                  : 'text-(--void-muted) hover:text-(--void-text)'
              )}
            >
              <Eye size={16} />
              Preview
            </button>
            <button
              onClick={() => setTab('code')}
              className={cn(
                'flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors',
                tab === 'code'
                  ? 'bg-(--void-bg-muted) text-(--void-text)'
                  : 'text-(--void-muted) hover:text-(--void-text)'
              )}
            >
              <Code size={16} />
              Code
            </button>
          </div>

          {/* Divider */}
          <div className="h-6 w-px bg-(--void-border)" />

          {/* View Mode Controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setViewMode('desktop')}
              className={cn(
                'rounded-lg p-2 transition-colors',
                viewMode === 'desktop'
                  ? 'bg-(--void-bg-muted) text-(--void-text)'
                  : 'text-(--void-muted) hover:bg-(--void-bg-subtle) hover:text-(--void-text)'
              )}
              title="Desktop view"
            >
              <Desktop size={18} />
            </button>
            <button
              onClick={() => setViewMode('tablet')}
              className={cn(
                'rounded-lg p-2 transition-colors',
                viewMode === 'tablet'
                  ? 'bg-(--void-bg-muted) text-(--void-text)'
                  : 'text-(--void-muted) hover:bg-(--void-bg-subtle) hover:text-(--void-text)'
              )}
              title="Tablet view"
            >
              <DeviceTabletCamera size={18} />
            </button>
            <button
              onClick={() => setViewMode('mobile')}
              className={cn(
                'rounded-lg p-2 transition-colors',
                viewMode === 'mobile'
                  ? 'bg-(--void-bg-muted) text-(--void-text)'
                  : 'text-(--void-muted) hover:bg-(--void-bg-subtle) hover:text-(--void-text)'
              )}
              title="Mobile view"
            >
              <DeviceMobile size={18} />
            </button>
            <button
              onClick={() => setIsFullscreen(true)}
              className="rounded-lg p-2 text-(--void-muted) hover:bg-(--void-bg-subtle) hover:text-(--void-text) transition-colors"
              title="Fullscreen"
            >
              <ArrowsOut size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        {tab === 'preview' ? (
          <div className="flex justify-center bg-(--void-bg-subtle) p-4">
            <div
              className="w-full overflow-hidden rounded-lg border border-(--void-border) bg-(--void-bg) transition-all duration-300"
              style={{ maxWidth: viewWidths[viewMode] }}
            >
              <div className="min-h-[400px]">{children}</div>
            </div>
          </div>
        ) : (
          <div className="relative">
            <button
              onClick={handleCopyCode}
              className="absolute right-4 top-4 rounded-lg bg-(--void-bg-muted) px-3 py-1.5 text-sm text-(--void-muted) hover:bg-(--void-border) hover:text-(--void-text) transition-colors"
            >
              Copy
            </button>
            <pre className="max-h-[500px] overflow-auto bg-(--void-bg) p-4 text-sm">
              <code className="text-(--void-text)">{code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
