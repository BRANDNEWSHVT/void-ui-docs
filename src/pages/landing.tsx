import { Link } from 'react-router-dom';
import { Button, Badge, Heading, Text, Stack } from '@radenadri/void-ui';

export function LandingPage() {
  return (
    <div className="h-dvh bg-(--void-bg)">
      {/* Hero Section */}
      <header className="relative h-full overflow-hidden border-b border-(--void-border)">
        <div className="absolute inset-0 bg-linear-to-br from-(--void-accent)/5 via-transparent to-(--void-accent-alt)/5" />
        <div className="relative h-full grid place-items-center mx-auto max-w-6xl px-6 py-24">
          <Stack spacing="lg" align="center" className="text-center">
            <Stack spacing="sm" align="center">
              <img
                src="/voidui-logo.svg"
                alt="Void UI logo"
                className="h-16 w-16"
              />
              <Badge variant="primary-subtle" pill>
                v0.2.2
              </Badge>
            </Stack>
            <Heading size="xl" className="max-w-3xl">
              Void UI
            </Heading>
            <Text className="max-w-2xl ">
              Just another React component library built on Base UI and Tailwind
              CSS. Designed for developers, creatives, and forward-thinking
              interfaces. Supports both light and dark modes.
            </Text>
            <Stack
              direction="row"
              spacing="md"
              className="mt-4 flex-wrap justify-center"
            >
              <Link to="/docs">
                <Button variant="primary">Get Started</Button>
              </Link>
              <a
                href="https://github.com/BRANDNEWSHVT/void-ui"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-secondary">GitHub</Button>
              </a>
            </Stack>
          </Stack>
        </div>
      </header>
    </div>
  );
}
