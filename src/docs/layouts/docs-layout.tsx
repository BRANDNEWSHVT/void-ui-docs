import { NavLink, Outlet } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';

const navigation = [
  {
    title: 'Overview',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Quick Start', href: '/docs/quick-start' },
    ],
  },
  {
    title: 'Components',
    items: [
      { title: 'Accordion', href: '/docs/components/accordion' },
      { title: 'Alert', href: '/docs/components/alert' },
      { title: 'Alert Dialog', href: '/docs/components/alert-dialog' },
      { title: 'Avatar', href: '/docs/components/avatar' },
      { title: 'Badge', href: '/docs/components/badge' },
      { title: 'Button', href: '/docs/components/button' },
      { title: 'Card', href: '/docs/components/card' },
      { title: 'Checkbox', href: '/docs/components/checkbox' },
      { title: 'Chip', href: '/docs/components/chip' },
      { title: 'Collapsible', href: '/docs/components/collapsible' },
      { title: 'Dialog', href: '/docs/components/dialog' },
      { title: 'Divider', href: '/docs/components/divider' },
      { title: 'Dropdown', href: '/docs/components/dropdown' },
      { title: 'Field', href: '/docs/components/field' },
      { title: 'Fieldset', href: '/docs/components/fieldset' },
      { title: 'Heading', href: '/docs/components/heading' },
      { title: 'Icon Box', href: '/docs/components/icon-box' },
      { title: 'Input', href: '/docs/components/input' },
      { title: 'Kbd', href: '/docs/components/kbd' },
      { title: 'Label', href: '/docs/components/label' },
      { title: 'Menu', href: '/docs/components/menu' },
      { title: 'Pagination', href: '/docs/components/pagination' },
      { title: 'Popover', href: '/docs/components/popover' },
      { title: 'Progress', href: '/docs/components/progress' },
      { title: 'Radio', href: '/docs/components/radio' },
      { title: 'Select', href: '/docs/components/select' },
      { title: 'Separator', href: '/docs/components/separator' },
      { title: 'Slider', href: '/docs/components/slider' },
      { title: 'Spinner', href: '/docs/components/spinner' },
      { title: 'Stack', href: '/docs/components/stack' },
      { title: 'Switch', href: '/docs/components/switch' },
      { title: 'Table', href: '/docs/components/table' },
      { title: 'Tabs', href: '/docs/components/tabs' },
      { title: 'Text', href: '/docs/components/text' },
      { title: 'Textarea', href: '/docs/components/textarea' },
      { title: 'Toast', href: '/docs/components/toast' },
      { title: 'Tooltip', href: '/docs/components/tooltip' },
    ],
  },
];

export function DocsLayout() {
  return (
    <div className="min-h-screen bg-(--void-bg)">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-(--void-border) bg-(--void-bg)/80 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <NavLink
            to="/"
            className="flex items-center gap-2 font-semibold text-(--void-text)"
          >
            Void UI
          </NavLink>
          <nav className="flex items-center gap-4">
            <NavLink
              to="/docs"
              className="text-sm hover:text-(--void-text) transition-colors"
            >
              Docs
            </NavLink>
            <a
              href="https://github.com/BRANDNEWSHVT/void-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-(--void-text) transition-colors"
            >
              GitHub
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl">
        <div className="flex">
          {/* Sidebar */}
          <aside className="sticky top-14 h-[calc(100vh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r border-(--void-border) py-6 pr-4">
            <nav className="space-y-6">
              {navigation.map((section) => (
                <div key={section.title}>
                  <h4 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider">
                    {section.title}
                  </h4>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <NavLink
                          to={item.href}
                          end={item.href === '/docs'}
                          className={({ isActive }) =>
                            cn(
                              'block rounded-lg px-3 py-2 text-sm transition-colors',
                              isActive
                                ? 'bg-(--void-accent)/10 text-(--void-accent) font-medium'
                                : 'hover:bg-(--void-bg-subtle) hover:text-(--void-text)'
                            )
                          }
                        >
                          {item.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 px-8 py-8">
            <div className="mx-auto max-w-3xl">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
