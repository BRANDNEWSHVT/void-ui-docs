import {
  Button,
  Input,
  FieldRoot,
  FieldLabel,
  Heading,
  Text,
  Checkbox,
  Stack,
} from '@radenadri/void-ui';

export function LoginBlock02() {
  return (
    <div className="flex min-h-[500px] items-center justify-center bg-(--void-bg) p-8">
      <div className="w-full max-w-md">
        <Stack spacing="lg">
          {/* Header */}
          <Stack spacing="xs">
            <Heading size="lg">Welcome back</Heading>
            <Text variant="muted">
              Enter your credentials to access your account
            </Text>
          </Stack>

          {/* Form */}
          <form className="space-y-4">
            <FieldRoot>
              <FieldLabel>Email</FieldLabel>
              <Input type="email" placeholder="name@example.com" />
            </FieldRoot>

            <FieldRoot>
              <FieldLabel>Password</FieldLabel>
              <Input type="password" placeholder="Enter your password" />
            </FieldRoot>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-(--void-muted)">
                <Checkbox />
                Remember me
              </label>
              <a
                href="#"
                className="text-sm text-(--void-primary) hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <Button className="w-full">Sign in</Button>
          </form>

          {/* Footer */}
          <Text variant="muted" className="text-center text-sm">
            Don't have an account?{' '}
            <a href="#" className="text-(--void-primary) hover:underline">
              Sign up
            </a>
          </Text>
        </Stack>
      </div>
    </div>
  );
}

export const loginBlock02Code = `import {
  Button,
  Input,
  FieldRoot,
  FieldLabel,
  Heading,
  Text,
  Checkbox,
  Stack,
} from '@radenadri/void-ui'

export function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-(--void-bg) p-8">
      <div className="w-full max-w-md">
        <Stack spacing="lg">
          {/* Header */}
          <Stack spacing="xs">
            <Heading size="lg">Welcome back</Heading>
            <Text variant="muted">
              Enter your credentials to access your account
            </Text>
          </Stack>

          {/* Form */}
          <form className="space-y-4">
            <FieldRoot>
              <FieldLabel>Email</FieldLabel>
              <Input type="email" placeholder="name@example.com" />
            </FieldRoot>

            <FieldRoot>
              <FieldLabel>Password</FieldLabel>
              <Input type="password" placeholder="Enter your password" />
            </FieldRoot>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-(--void-muted)">
                <Checkbox />
                Remember me
              </label>
              <a href="#" className="text-sm text-(--void-primary) hover:underline">
                Forgot password?
              </a>
            </div>

            <Button className="w-full">Sign in</Button>
          </form>

          {/* Footer */}
          <Text variant="muted" className="text-center text-sm">
            Don't have an account?{' '}
            <a href="#" className="text-(--void-primary) hover:underline">
              Sign up
            </a>
          </Text>
        </Stack>
      </div>
    </div>
  )
}`;
