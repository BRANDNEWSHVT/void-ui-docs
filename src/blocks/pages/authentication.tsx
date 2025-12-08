import { Heading, Text, Stack } from '@radenadri/void-ui';
import { BlockPreview } from '../components/block-preview';
import { LoginBlock01, loginBlock01Code } from '../templates/login-01';
import { LoginBlock02, loginBlock02Code } from '../templates/login-02';

export function AuthenticationBlocksPage() {
  return (
    <div className="min-h-screen bg-(--void-bg)">
      {/* Header */}
      <section className="border-b border-(--void-border)">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <Stack spacing="sm">
            <Text variant="muted" className="text-sm">
              Blocks / Authentication
            </Text>
            <Heading size="lg">Login & Signup</Heading>
            <Text variant="muted">
              Authentication pages and forms for your application.
            </Text>
          </Stack>
        </div>
      </section>

      {/* Blocks */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <Stack spacing="xl">
          <BlockPreview
            title="Login with Email and Google"
            code={loginBlock01Code}
          >
            <LoginBlock01 />
          </BlockPreview>

          <BlockPreview
            title="Login with Email and Password"
            code={loginBlock02Code}
          >
            <LoginBlock02 />
          </BlockPreview>
        </Stack>
      </section>
    </div>
  );
}
