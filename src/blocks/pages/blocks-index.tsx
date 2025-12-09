import { Link } from 'react-router-dom';
import { Heading, Text, Stack, Badge } from '@radenadri/void-ui';
import { BlockCard } from '../components/block-card';
import { ThemeToggle } from '@/components/theme-toggle';
import { GithubLogoIcon } from '@phosphor-icons/react';
import { Footer } from '@/components/footer';

// Mini preview components for cards
function LoginPreview() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-lg bg-(--void-bg) p-4">
      <div className="h-3 w-24 rounded bg-(--void-border)" />
      <div className="h-8 w-full max-w-32 rounded-md border border-(--void-border)" />
      <div className="h-8 w-full max-w-32 rounded-md bg-(--void-text)" />
      <div className="mt-2 h-2 w-20 rounded bg-(--void-border)" />
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="flex h-full w-full gap-2 rounded-lg bg-(--void-bg) p-3">
      {/* Sidebar */}
      <div className="flex w-12 flex-col gap-2 rounded-md bg-(--void-bg-subtle) p-2">
        <div className="h-4 w-4 rounded bg-(--void-text)" />
        <div className="h-2 w-full rounded bg-(--void-border)" />
        <div className="h-2 w-full rounded bg-(--void-border)" />
        <div className="h-2 w-full rounded bg-(--void-border)" />
      </div>
      {/* Content */}
      <div className="flex flex-1 flex-col gap-2">
        <div className="h-6 rounded-md bg-(--void-bg-subtle)" />
        <div className="grid flex-1 grid-cols-2 gap-2">
          <div className="rounded-md bg-(--void-bg-subtle)" />
          <div className="rounded-md bg-(--void-bg-subtle)" />
          <div className="rounded-md bg-(--void-bg-subtle)" />
          <div className="rounded-md bg-(--void-bg-subtle)" />
        </div>
      </div>
    </div>
  );
}

const blockCategories = [
  {
    title: 'Login & Signup',
    description: 'Authentication pages and forms',
    count: 2,
    href: '/blocks/authentication',
    preview: <LoginPreview />,
  },
  {
    title: 'Dashboard',
    description: 'Admin panels and analytics',
    count: 1,
    href: '/blocks/dashboard',
    preview: <DashboardPreview />,
  },
];

export function BlocksIndexPage() {
  return (
    <div className="min-h-screen bg-(--void-bg)">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-(--void-border) bg-(--void-bg)/80 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold text-(--void-text)"
          >
            <img
              src="/voidui-logo.svg"
              alt="Void UI logo"
              className="h-7 w-7 rounded-lg"
            />
            <span>Void UI</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              to="/docs"
              className="text-sm text-(--void-muted) hover:text-(--void-text) transition-colors"
            >
              Docs
            </Link>
            <Link
              to="/docs/components/button"
              className="text-sm text-(--void-muted) hover:text-(--void-text) transition-colors"
            >
              Components
            </Link>
            <Link
              to="/blocks"
              className="text-sm font-medium text-(--void-text)"
            >
              Blocks
            </Link>
            <a
              href="https://github.com/BRANDNEWSHVT/void-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-(--void-muted) hover:bg-(--void-bg-subtle) hover:text-(--void-text) transition-colors"
              aria-label="GitHub"
            >
              <GithubLogoIcon size={20} />
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-(--void-border)">
        <div className="absolute inset-0 bg-linear-to-br from-(--void-primary)/5 via-transparent to-(--void-accent-alt)/5" />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <Stack spacing="lg" align="center" className="text-center">
            <Stack spacing="sm" align="center">
              <Badge variant="secondary" pill>
                Copy & Paste
              </Badge>
              <Heading size="xl">Building Blocks</Heading>
            </Stack>
            <Text variant="muted" className="max-w-xl">
              Beautiful, ready-to-use components built with Void UI. Copy the
              code and paste into your project.
            </Text>
            <div className="flex gap-2">
              <Badge variant="success-subtle">React</Badge>
              <Badge variant="primary-subtle">Tailwind CSS</Badge>
              <Badge variant="secondary">Open Source</Badge>
            </div>
          </Stack>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <Stack spacing="lg">
          <Heading size="md">Categories</Heading>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blockCategories.map((category) => (
              <BlockCard key={category.title} {...category} />
            ))}
          </div>
        </Stack>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
