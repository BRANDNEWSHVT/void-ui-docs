import { cn } from '@/lib/utils';

interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

interface PropsTableProps {
  props: PropDefinition[];
  className?: string;
}

export function PropsTable({ props, className }: PropsTableProps) {
  return (
    <div
      className={cn(
        'overflow-x-auto rounded-xl border border-(--void-border)',
        className
      )}
    >
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-(--void-border) bg-(--void-surface)">
            <th className="px-4 py-3 text-left font-medium text-(--void-text)">
              Prop
            </th>
            <th className="px-4 py-3 text-left font-medium text-(--void-text)">
              Type
            </th>
            <th className="px-4 py-3 text-left font-medium text-(--void-text)">
              Default
            </th>
            <th className="px-4 py-3 text-left font-medium text-(--void-text)">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr
              key={prop.name}
              className="border-b border-(--void-border) last:border-0"
            >
              <td className="px-4 py-3">
                <code className="px-1.5 py-0.5 rounded bg-(--void-accent)/10 text-(--void-accent) font-mono text-xs">
                  {prop.name}
                  {prop.required && (
                    <span className="text-(--void-accent) ml-0.5">*</span>
                  )}
                </code>
              </td>
              <td className="px-4 py-3">
                <code className="px-1.5 py-0.5 rounded bg-white/5 text-(--void-muted) font-mono text-xs">
                  {prop.type}
                </code>
              </td>
              <td className="px-4 py-3 text-(--void-muted)">
                {prop.default ? (
                  <code className="px-1.5 py-0.5 rounded bg-white/5 font-mono text-xs">
                    {prop.default}
                  </code>
                ) : (
                  '-'
                )}
              </td>
              <td className="px-4 py-3 text-(--void-muted)">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
