import { Link } from 'react-router-dom';
import { Button, Stack, Heading, Text } from '@radenadri/void-ui';

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <Stack spacing="md" align="center">
        <div className="text-8xl font-bold text-(--void-accent)">404</div>
        <Heading size="lg">Page Not Found</Heading>
        <Text className="text-(--void-muted) max-w-md">
          The documentation page you're looking for doesn't exist or has been
          moved.
        </Text>
        <Stack direction="row" spacing="sm" className="mt-4">
          <Link to="/docs">
            <Button variant="primary">Back to Docs</Button>
          </Link>
          <Link to="/">
            <Button variant="secondary">Go Home</Button>
          </Link>
        </Stack>
      </Stack>
    </div>
  );
}
