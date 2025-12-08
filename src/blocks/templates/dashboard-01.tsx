import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Heading,
  Text,
  Badge,
  Stack,
  Avatar,
  Progress,
} from '@radenadri/void-ui';
import {
  House,
  ChartLine,
  Users,
  Gear,
  Bell,
  MagnifyingGlass,
  TrendUp,
  TrendDown,
  CurrencyDollar,
  ShoppingCart,
  Eye,
} from '@phosphor-icons/react';

function StatCard({
  title,
  value,
  change,
  trend,
  icon: Icon,
}: {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ElementType;
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <Text variant="muted" className="text-sm">
              {title}
            </Text>
            <Heading size="lg">{value}</Heading>
            <div className="flex items-center gap-1">
              {trend === 'up' ? (
                <TrendUp size={16} className="text-(--void-success)" />
              ) : (
                <TrendDown size={16} className="text-(--void-danger)" />
              )}
              <Text
                variant={trend === 'up' ? 'success' : 'danger'}
                className="text-sm"
              >
                {change}
              </Text>
              <Text variant="muted" className="text-sm">
                vs last month
              </Text>
            </div>
          </div>
          <div className="rounded-xl bg-(--void-bg-subtle) p-3">
            <Icon size={24} className="text-(--void-muted)" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function DashboardBlock01() {
  return (
    <div className="flex min-h-[600px] bg-(--void-bg)">
      {/* Sidebar */}
      <aside className="hidden w-64 border-r border-(--void-border) bg-(--void-surface) p-4 lg:block">
        <Stack spacing="lg">
          {/* Logo */}
          <div className="flex items-center gap-2 px-2">
            <div className="h-8 w-8 rounded-lg bg-(--void-primary)" />
            <Text className="font-semibold">Acme Inc</Text>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            {[
              { icon: House, label: 'Dashboard', active: true },
              { icon: ChartLine, label: 'Analytics', active: false },
              { icon: Users, label: 'Customers', active: false },
              { icon: ShoppingCart, label: 'Orders', active: false },
              { icon: Gear, label: 'Settings', active: false },
            ].map((item) => (
              <button
                key={item.label}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                  item.active
                    ? 'bg-(--void-primary) text-(--void-primary-foreground)'
                    : 'text-(--void-muted) hover:bg-(--void-bg-subtle) hover:text-(--void-text)'
                }`}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </nav>
        </Stack>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-(--void-border) px-6 py-4">
          <div className="flex items-center gap-4">
            <Heading size="md">Dashboard</Heading>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <MagnifyingGlass
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-(--void-muted)"
              />
              <input
                type="text"
                placeholder="Search..."
                className="h-9 w-64 rounded-lg border border-(--void-border) bg-(--void-bg) pl-9 pr-4 text-sm outline-none focus:border-(--void-primary)"
              />
            </div>
            <button className="relative rounded-lg p-2 text-(--void-muted) hover:bg-(--void-bg-subtle)">
              <Bell size={20} />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-(--void-danger)" />
            </button>
            <Avatar
              src="https://i.pravatar.cc/150?img=12"
              fallback="JD"
              size="sm"
            />
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          <Stack spacing="lg">
            {/* Stats Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard
                title="Total Revenue"
                value="$45,231"
                change="+20.1%"
                trend="up"
                icon={CurrencyDollar}
              />
              <StatCard
                title="Orders"
                value="2,350"
                change="+15.2%"
                trend="up"
                icon={ShoppingCart}
              />
              <StatCard
                title="Customers"
                value="12,234"
                change="+8.1%"
                trend="up"
                icon={Users}
              />
              <StatCard
                title="Page Views"
                value="573,281"
                change="-2.4%"
                trend="down"
                icon={Eye}
              />
            </div>

            {/* Recent Activity */}
            <div className="grid gap-4 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>
                    You have 12 orders this month
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: 'John Doe',
                        email: 'john@example.com',
                        amount: '$250.00',
                        status: 'Completed',
                      },
                      {
                        name: 'Jane Smith',
                        email: 'jane@example.com',
                        amount: '$150.00',
                        status: 'Pending',
                      },
                      {
                        name: 'Bob Wilson',
                        email: 'bob@example.com',
                        amount: '$350.00',
                        status: 'Completed',
                      },
                    ].map((order, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <Avatar fallback={order.name[0]} size="sm" />
                          <div>
                            <Text className="text-sm font-medium">
                              {order.name}
                            </Text>
                            <Text variant="muted" className="text-xs">
                              {order.email}
                            </Text>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Text className="text-sm font-medium">
                            {order.amount}
                          </Text>
                          <Badge
                            variant={
                              order.status === 'Completed'
                                ? 'success'
                                : 'warning'
                            }
                          >
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Goals</CardTitle>
                  <CardDescription>Track your monthly targets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      { label: 'Revenue', current: 45231, target: 50000 },
                      { label: 'New Customers', current: 234, target: 300 },
                      { label: 'Orders', current: 2350, target: 3000 },
                    ].map((goal, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <Text>{goal.label}</Text>
                          <Text variant="muted">
                            {Math.round((goal.current / goal.target) * 100)}%
                          </Text>
                        </div>
                        <Progress
                          value={(goal.current / goal.target) * 100}
                          size="sm"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </Stack>
        </main>
      </div>
    </div>
  );
}

export const dashboardBlock01Code = `import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Heading,
  Text,
  Badge,
  Stack,
  Avatar,
  Progress,
} from '@radenadri/void-ui'
import {
  House,
  ChartLine,
  Users,
  Gear,
  Bell,
  MagnifyingGlass,
  TrendUp,
  TrendDown,
  CurrencyDollar,
  ShoppingCart,
  Eye,
} from '@phosphor-icons/react'

// See full implementation in the source code
export function Dashboard() {
  return (
    <div className="flex min-h-screen bg-(--void-bg)">
      {/* Sidebar */}
      <aside className="hidden w-64 border-r border-(--void-border) bg-(--void-surface) p-4 lg:block">
        {/* Navigation items */}
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header with search and notifications */}
        <header className="flex items-center justify-between border-b border-(--void-border) px-6 py-4">
          {/* ... */}
        </header>

        {/* Stats Grid + Recent Activity */}
        <main className="p-6">
          {/* ... */}
        </main>
      </div>
    </div>
  )
}`;
