import { Link } from 'react-router-dom';
import { Text, Stack } from '@radenadri/void-ui';

export function Footer() {
  return (
    <footer className="border-t border-(--void-border) bg-(--void-surface)">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/voidui-logo.svg"
                alt="Void UI logo"
                className="h-8 w-8 rounded-lg"
              />
              <span className="font-semibold text-(--void-text)">Void UI</span>
            </Link>
            <Text variant="muted" className="mt-3 max-w-xs text-sm">
              A React component library built on Base UI and Tailwind CSS. Open
              source and free to use.
            </Text>
          </div>

          {/* Links */}
          <div>
            <Text className="mb-3 font-semibold text-sm">Resources</Text>
            <Stack spacing="xs">
              <Link
                to="/docs"
                className="text-sm text-(--void-muted) hover:text-(--void-text) transition-colors"
              >
                Documentation
              </Link>
              <Link
                to="/docs/components/button"
                className="text-sm text-(--void-muted) hover:text-(--void-text) transition-colors"
              >
                Components
              </Link>
              <Link
                to="/blocks"
                className="text-sm text-(--void-muted) hover:text-(--void-text) transition-colors"
              >
                Blocks
              </Link>
            </Stack>
          </div>

          <div>
            <Text className="mb-3 font-semibold text-sm">Community</Text>
            <Stack spacing="xs">
              <a
                href="https://github.com/BRANDNEWSHVT/void-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-(--void-muted) hover:text-(--void-text) transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://github.com/BRANDNEWSHVT/void-ui/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-(--void-muted) hover:text-(--void-text) transition-colors"
              >
                Issues
              </a>
            </Stack>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-(--void-border) pt-8 md:flex-row">
          <Text variant="muted" className="text-sm">
            &copy; {new Date().getFullYear()} Void UI. All rights reserved.
          </Text>
          <Text variant="muted" className="text-sm">
            Built with Base UI + Tailwind CSS
          </Text>
        </div>
      </div>
    </footer>
  );
}
