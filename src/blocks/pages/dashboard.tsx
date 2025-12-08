import { Heading, Text, Stack } from '@radenadri/void-ui';
import { BlockPreview } from '../components/block-preview';
import {
  DashboardBlock01,
  dashboardBlock01Code,
} from '../templates/dashboard-01';

export function DashboardBlocksPage() {
  return (
    <div className="min-h-screen bg-(--void-bg)">
      {/* Header */}
      <section className="border-b border-(--void-border)">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <Stack spacing="sm">
            <Text variant="muted" className="text-sm">
              Blocks / Dashboard
            </Text>
            <Heading size="lg">Dashboard</Heading>
            <Text variant="muted">
              Admin panels and analytics dashboards for your application.
            </Text>
          </Stack>
        </div>
      </section>

      {/* Blocks */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <Stack spacing="xl">
          <BlockPreview title="Analytics Dashboard" code={dashboardBlock01Code}>
            <DashboardBlock01 />
          </BlockPreview>
        </Stack>
      </section>
    </div>
  );
}
