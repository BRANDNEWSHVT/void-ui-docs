import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';
import { docsNavigation } from '@/docs/navigation';
import {
  ListIcon,
  XIcon,
  GithubLogoIcon,
  SquaresFourIcon,
  LightningIcon,
  BookIcon,
} from '@phosphor-icons/react';

interface HeaderProps {
  showMobileMenu?: boolean;
  maxWidth?: 'default' | 'wide';
}

export function Header({
  showMobileMenu = true,
  maxWidth = 'default',
}: HeaderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  // Close sidebar on route change
  useEffect(() => {
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

  // Prevent body scroll when sidebar is open
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
    <>
      <header className="sticky top-0 z-50 border-b border-(--void-border) bg-(--void-bg)/80 backdrop-blur-sm">
        <div
          className={cn(
            'mx-auto flex h-14 items-center justify-between px-4 md:px-6',
            maxWidth === 'default' ? 'max-w-7xl' : 'max-w-6xl'
          )}
        >
          {/* Mobile menu button */}
          {showMobileMenu && (
            <button
              type="button"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="mr-2 rounded-lg p-2 text-(--void-muted) hover:bg-(--void-bg-subtle) hover:text-(--void-text) md:hidden"
              aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
            >
              {sidebarOpen ? <XIcon size={20} /> : <ListIcon size={20} />}
            </button>
          )}

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
              className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors border border-(--void-border) bg-(--void-bg-subtle) hover:bg-(--void-bg-muted) hover:border-(--void-border-hover)"
              aria-label="GitHub"
            >
              <GithubLogoIcon size={20} />
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Mobile sidebar overlay */}
      {showMobileMenu && sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile sidebar */}
      {showMobileMenu && (
        <aside
          className={cn(
            'fixed inset-y-0 left-0 z-50 w-72 transform bg-(--void-bg) transition-transform duration-300 ease-in-out md:hidden',
            'border-r border-(--void-border)',
            'h-screen overflow-y-auto py-6 px-4',
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          {/* Mobile close button */}
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-semibold text-(--void-text)">
              Navigation
            </span>
            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="rounded-lg p-1.5 text-(--void-muted) hover:bg-(--void-bg-subtle) hover:text-(--void-text)"
              aria-label="Close menu"
            >
              <XIcon size={18} />
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
      )}
    </>
  );
}

export function MobileBottomNav() {
  return (
    <>
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
            <BookIcon size={20} />
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
            <LightningIcon size={20} />
            <span>Components</span>
          </NavLink>
          <NavLink
            to="/blocks"
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center gap-0.5 px-4 py-2 text-xs transition-colors',
                isActive
                  ? 'text-(--void-accent)'
                  : 'text-(--void-muted) hover:text-(--void-text)'
              )
            }
          >
            <SquaresFourIcon size={20} />
            <span>Blocks</span>
          </NavLink>
        </div>
      </nav>
      {/* Spacer for mobile bottom nav */}
      <div className="h-14 md:hidden" />
    </>
  );
}
