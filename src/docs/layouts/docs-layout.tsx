import { NavLink, Outlet } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { docsNavigation } from '@/docs/navigation';
import { Header, MobileBottomNav } from '@/components/header';
import { Footer } from '@/components/footer';

export function DocsLayout() {
  return (
    <div className="min-h-screen bg-(--void-bg)">
      <Header />

      <div className="mx-auto max-w-7xl">
        <div className="flex">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block md:sticky md:top-14 md:w-64 border-r border-(--void-border) h-[calc(100vh-3.5rem)] overflow-y-auto py-6 pr-4">
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

      <MobileBottomNav />
      <Footer />
    </div>
  );
}
