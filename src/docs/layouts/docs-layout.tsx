import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';
import { docsNavigation } from '@/docs/navigation';
import { List, X } from '@phosphor-icons/react';

export function DocsLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Close sidebar on route change (mobile)
  const pathname = location.pathname;
  useEffect(() => {
    // Using a ref pattern to avoid the lint warning
    const timeoutId = setTimeout(() => setSidebarOpen(false), 0);
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSidebarOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen bg-(--void-bg)">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-(--void-border) bg-(--void-bg)/80 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-6">
          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mr-2 rounded-lg p-2 text-(--void-muted) hover:bg-(--void-bg-subtle) hover:text-(--void-text) md:hidden"
            aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
          >
            {sidebarOpen ? <X size={20} /> : <List size={20} />}
          </button>

          <NavLink
            to="/"
            className="flex items-center gap-2 font-semibold text-(--void-text) md:gap-3"
          >
            <img
              src="/voidui-logo.svg"
              alt="Void UI logo"
              className="h-7 w-7 rounded-lg md:h-8 md:w-8 md:rounded-xl"
            />
            <span className="hidden sm:inline">Void UI</span>
          </NavLink>

          <nav className="flex items-center gap-2 md:gap-4">
            <NavLink
              to="/docs"
              className="hidden text-sm hover:text-(--void-text) transition-colors sm:block"
            >
              Docs
            </NavLink>
            <NavLink
              to="/docs/components/accordion"
              className="hidden text-sm hover:text-(--void-text) transition-colors sm:block"
            >
              Components
            </NavLink>
            <NavLink
              to="/blocks"
              className="hidden text-sm hover:text-(--void-text) transition-colors sm:block"
            >
              Blocks
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
          {/* Mobile sidebar overlay */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setSidebarOpen(false)}
              aria-hidden="true"
            />
          )}

          {/* Sidebar */}
          <aside
            className={cn(
              // Mobile: fixed slide-out drawer
              'fixed inset-y-0 left-0 z-50 w-72 transform bg-(--void-bg) transition-transform duration-300 ease-in-out',
              // Desktop: sticky sidebar
              'md:sticky md:top-14 md:z-auto md:w-64 md:translate-x-0 md:bg-transparent',
              'border-r border-(--void-border)',
              'h-[calc(100vh-3.5rem)] overflow-y-auto py-6 pr-4 pl-4 md:pl-0',
              'top-14',
              sidebarOpen
                ? 'translate-x-0'
                : '-translate-x-full md:translate-x-0'
            )}
          >
            {/* Mobile close button inside sidebar */}
            <div className="mb-4 flex items-center justify-between md:hidden">
              <span className="text-sm font-semibold text-(--void-text)">
                Navigation
              </span>
              <button
                type="button"
                onClick={() => setSidebarOpen(false)}
                className="rounded-lg p-1.5 text-(--void-muted) hover:bg-(--void-bg-subtle) hover:text-(--void-text)"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="space-y-6">
              {docsNavigation.map((section) => (
                <div key={section.title}>
                  <h4 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-(--void-muted)">
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
                                : 'text-(--void-muted) hover:bg-(--void-bg-subtle) hover:text-(--void-text)'
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
          <main className="min-w-0 flex-1 px-4 py-6 md:px-8 md:py-8">
            <div className="mx-auto max-w-3xl">
              <Outlet />
            </div>
          </main>
        </div>
      </div>

      {/* Mobile bottom navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-(--void-border) bg-(--void-bg)/95 backdrop-blur-sm md:hidden">
        <div className="flex h-14 items-center justify-around">
          <NavLink
            to="/docs"
            end
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center gap-0.5 px-4 py-2 text-xs transition-colors',
                isActive
                  ? 'text-(--void-accent)'
                  : 'text-(--void-muted) hover:text-(--void-text)'
              )
            }
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            <span>Docs</span>
          </NavLink>
          <NavLink
            to="/docs/components/button"
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center gap-0.5 px-4 py-2 text-xs transition-colors',
                isActive
                  ? 'text-(--void-accent)'
                  : 'text-(--void-muted) hover:text-(--void-text)'
              )
            }
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
            </svg>
            <span>Components</span>
          </NavLink>
        </div>
      </nav>

      {/* Spacer for mobile bottom nav */}
      <div className="h-14 md:hidden" />
    </div>
  );
}
