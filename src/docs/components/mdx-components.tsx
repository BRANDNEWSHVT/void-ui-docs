import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';
import { CodeBlock } from './code-block';
import { ComponentPreview } from './component-preview';
import { PropsTable } from './props-table';

export const mdxComponents = {
  CodeBlock,
  ComponentPreview,
  PropsTable,
  h1: ({ className, ...props }: ComponentPropsWithoutRef<'h1'>) => (
    <h1
      className={cn(
        'text-3xl font-bold tracking-tight text-(--void-text) mb-4',
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: ComponentPropsWithoutRef<'h2'>) => (
    <h2
      className={cn(
        'text-2xl font-semibold tracking-tight text-(--void-text) mt-10 mb-4 scroll-mt-20',
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: ComponentPropsWithoutRef<'h3'>) => (
    <h3
      className={cn(
        'text-xl font-semibold tracking-tight text-(--void-text) mt-8 mb-3 scroll-mt-20',
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: ComponentPropsWithoutRef<'h4'>) => (
    <h4
      className={cn(
        'text-lg font-semibold tracking-tight text-(--void-text) mt-6 mb-2',
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: ComponentPropsWithoutRef<'p'>) => (
    <p className={cn('leading-7', className)} {...props} />
  ),
  a: ({ className, ...props }: ComponentPropsWithoutRef<'a'>) => (
    <a
      className={cn(
        'text-(--void-primary) font-medium',
        'underline underline-offset-4 decoration-(--void-primary)/30',
        'hover:decoration-(--void-primary) transition-colors',
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: ComponentPropsWithoutRef<'ul'>) => (
    <ul
      className={cn(
        'list-disc list-inside mb-4 text-(--void-muted) space-y-2',
        className
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: ComponentPropsWithoutRef<'ol'>) => (
    <ol
      className={cn(
        'list-decimal list-inside mb-4 text-(--void-muted) space-y-2',
        className
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }: ComponentPropsWithoutRef<'li'>) => (
    <li className={cn('leading-7', className)} {...props} />
  ),
  blockquote: ({
    className,
    ...props
  }: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote
      className={cn(
        'border-l-4 border-(--void-primary) pl-4 italic text-(--void-muted) my-6',
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: ComponentPropsWithoutRef<'code'>) => (
    <code
      className={cn(
        'relative rounded-md px-[0.4em] py-[0.2em]',
        'bg-(--void-bg-muted) text-(--void-primary)',
        'font-mono text-[0.9em] font-medium',
        'before:content-none after:content-none',
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: ComponentPropsWithoutRef<'pre'>) => (
    <pre
      className={cn(
        'p-4 rounded-xl bg-(--void-surface) border border-(--void-border) overflow-x-auto mb-4',
        className
      )}
      {...props}
    />
  ),
  hr: ({ className, ...props }: ComponentPropsWithoutRef<'hr'>) => (
    <hr className={cn('border-(--void-border) my-8', className)} {...props} />
  ),
  table: ({ className, ...props }: ComponentPropsWithoutRef<'table'>) => (
    <div className="overflow-x-auto mb-4">
      <table className={cn('w-full text-sm', className)} {...props} />
    </div>
  ),
  th: ({ className, ...props }: ComponentPropsWithoutRef<'th'>) => (
    <th
      className={cn(
        'px-4 py-3 text-left font-medium text-(--void-text) border-b border-(--void-border)',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: ComponentPropsWithoutRef<'td'>) => (
    <td
      className={cn(
        'px-4 py-3 text-(--void-muted) border-b border-(--void-border)',
        className
      )}
      {...props}
    />
  ),
};
