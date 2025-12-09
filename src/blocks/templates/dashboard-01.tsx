import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Text,
  Badge,
  Avatar,
  Progress,
} from '@radenadri/void-ui';
import {
  HouseIcon,
  ChartLineIcon,
  UsersIcon,
  GearIcon,
  BellIcon,
  MagnifyingGlassIcon,
  TrendUpIcon,
  TrendDownIcon,
  CurrencyDollarIcon,
  ShoppingCartIcon,
  PackageIcon,
  CreditCardIcon,
  ListIcon,
  XIcon,
} from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

function StatCard({
  title,
  value,
  change,
  trend,
  icon: Icon,
  color,
}: {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ElementType;
  color: string;
}) {
  return (
    <Card>
      <CardContent className="p-3 @sm:p-5">
        <div className="flex items-center justify-between">
          <div className={`rounded-lg @sm:rounded-xl p-2 @sm:p-2.5 ${color}`}>
            <Icon size={16} weight="duotone" className="@sm:hidden" />
            <Icon size={20} weight="duotone" className="hidden @sm:block" />
          </div>
          <span
            className={`flex items-center gap-0.5 @sm:gap-1 text-[10px] @sm:text-xs font-medium ${
              trend === 'up' ? 'text-(--void-success)' : 'text-(--void-danger)'
            }`}
          >
            {trend === 'up' ? (
              <TrendUpIcon size={12} className="@sm:hidden" />
            ) : (
              <TrendDownIcon size={12} className="@sm:hidden" />
            )}
            {trend === 'up' ? (
              <TrendUpIcon size={14} className="hidden @sm:block" />
            ) : (
              <TrendDownIcon size={14} className="hidden @sm:block" />
            )}
            {change}
          </span>
        </div>
        <div className="mt-3 @sm:mt-4">
          <div className="text-lg @sm:text-2xl font-bold text-(--void-text) tabular-nums">
            {value}
          </div>
          <Text variant="muted" className="text-xs @sm:text-sm mt-0.5 @sm:mt-1">
            {title}
          </Text>
        </div>
      </CardContent>
    </Card>
  );
}

const navItems = [
  { icon: HouseIcon, label: 'Dashboard', active: true },
  { icon: ChartLineIcon, label: 'Analytics', active: false },
  { icon: UsersIcon, label: 'Customers', active: false },
  { icon: ShoppingCartIcon, label: 'Orders', active: false },
  { icon: PackageIcon, label: 'Products', active: false },
];

const orders = [
  {
    id: '#3210',
    customer: 'Olivia Martin',
    amount: '$316.00',
    status: 'Completed',
    img: 'https://i.pravatar.cc/40?img=1',
  },
  {
    id: '#3209',
    customer: 'Jackson Lee',
    amount: '$242.00',
    status: 'Processing',
    img: 'https://i.pravatar.cc/40?img=3',
  },
  {
    id: '#3208',
    customer: 'Isabella Nguyen',
    amount: '$837.00',
    status: 'Completed',
    img: 'https://i.pravatar.cc/40?img=5',
  },
  {
    id: '#3207',
    customer: 'William Kim',
    amount: '$529.00',
    status: 'Pending',
    img: 'https://i.pravatar.cc/40?img=8',
  },
];

export function DashboardBlock01() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative flex min-h-[650px] bg-(--void-bg) @container">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="absolute inset-0 z-40 bg-black/50 @4xl:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'absolute inset-y-0 left-0 z-50 w-60 flex-col border-r border-(--void-border) bg-(--void-surface) transition-transform duration-300 @4xl:static @4xl:translate-x-0',
          sidebarOpen ? 'translate-x-0 flex' : '-translate-x-full @4xl:flex'
        )}
      >
        <div className="flex h-14 items-center justify-between gap-3 border-b border-(--void-border) px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-(--void-primary) text-white font-bold text-sm">
              A
            </div>
            <span className="font-semibold text-(--void-text)">Acme Inc</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-1.5 text-(--void-muted) hover:bg-(--void-bg-subtle) @4xl:hidden"
          >
            <XIcon size={18} />
          </button>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                item.active
                  ? 'bg-(--void-primary) text-white'
                  : 'text-(--void-muted) hover:bg-(--void-bg-subtle) hover:text-(--void-text)'
              }`}
            >
              <item.icon size={18} weight={item.active ? 'fill' : 'regular'} />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="border-t border-(--void-border) p-3">
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-(--void-muted) hover:bg-(--void-bg-subtle)">
            <GearIcon size={18} />
            Settings
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="flex h-14 items-center justify-between border-b border-(--void-border) px-4 @4xl:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 text-(--void-muted) hover:bg-(--void-bg-subtle) @4xl:hidden"
            >
              <ListIcon size={20} />
            </button>
            <h1 className="text-lg font-semibold text-(--void-text)">
              Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-2 @sm:gap-3">
            <div className="relative hidden @sm:block">
              <MagnifyingGlassIcon
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-(--void-muted)"
              />
              <input
                type="text"
                placeholder="Search..."
                className="h-9 w-40 @4xl:w-56 rounded-lg border border-(--void-border) bg-(--void-bg) pl-9 pr-3 text-sm outline-none focus:border-(--void-primary)"
              />
            </div>
            <button className="relative rounded-lg p-2 text-(--void-muted) hover:bg-(--void-bg-subtle)">
              <BellIcon size={20} />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-(--void-danger)" />
            </button>
            <Avatar
              src="https://i.pravatar.cc/40?img=12"
              fallback="JD"
              size="sm"
            />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 @4xl:p-6 overflow-auto">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 @4xl:grid-cols-4 @4xl:gap-4 mb-4 @4xl:mb-6">
            <StatCard
              title="Total Revenue"
              value="$45,231"
              change="+20.1%"
              trend="up"
              icon={CurrencyDollarIcon}
              color="bg-(--void-success)/10 text-(--void-success)"
            />
            <StatCard
              title="Orders"
              value="2,350"
              change="+15.2%"
              trend="up"
              icon={ShoppingCartIcon}
              color="bg-(--void-primary)/10 text-(--void-primary)"
            />
            <StatCard
              title="Customers"
              value="12,234"
              change="+8.1%"
              trend="up"
              icon={UsersIcon}
              color="bg-(--void-warning)/10 text-(--void-warning)"
            />
            <StatCard
              title="Conversion"
              value="3.2%"
              change="-0.4%"
              trend="down"
              icon={CreditCardIcon}
              color="bg-(--void-accent)/10 text-(--void-accent)"
            />
          </div>

          {/* Cards */}
          <div className="grid gap-4 @4xl:grid-cols-2">
            {/* Orders */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between py-2"
                    >
                      <div className="flex items-center gap-2 @sm:gap-3 min-w-0">
                        <Avatar
                          src={order.img}
                          fallback={order.customer[0]}
                          size="sm"
                          className="shrink-0"
                        />
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-(--void-text) truncate">
                            {order.customer}
                          </div>
                          <div className="text-xs text-(--void-muted)">
                            {order.id}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 @sm:gap-3 shrink-0">
                        <span className="text-sm font-medium tabular-nums hidden @sm:inline">
                          {order.amount}
                        </span>
                        <Badge
                          variant={
                            order.status === 'Completed'
                              ? 'success'
                              : order.status === 'Processing'
                              ? 'primary'
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

            {/* Goals */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Monthly Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  {[
                    {
                      label: 'Revenue',
                      current: 45231,
                      target: 50000,
                    },
                    {
                      label: 'New Customers',
                      current: 234,
                      target: 300,
                    },
                    {
                      label: 'Orders',
                      current: 2350,
                      target: 3000,
                    },
                  ].map((goal) => (
                    <div key={goal.label} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-(--void-text)">{goal.label}</span>
                        <span className="text-(--void-muted) tabular-nums">
                          {Math.round((goal.current / goal.target) * 100)}%
                        </span>
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
        </main>
      </div>
    </div>
  );
}

export const dashboardBlock01Code = `import {
  Card, CardContent, CardHeader, CardTitle,
  Text, Badge, Avatar, Progress,
} from '@radenadri/void-ui'
import {
  HouseIcon, ChartLineIcon, UsersIcon, GearIcon,
  BellIcon, MagnifyingGlassIcon, TrendUpIcon, TrendDownIcon,
  CurrencyDollarIcon, ShoppingCartIcon, PackageIcon, CreditCardIcon,
} from '@phosphor-icons/react'

export function Dashboard() {
  return (
    <div className="flex min-h-screen bg-(--void-bg)">
      {/* Sidebar with navigation */}
      <aside className="hidden w-60 border-r border-(--void-border) bg-(--void-surface) lg:flex flex-col">
        {/* Logo, nav items, settings */}
      </aside>

      <div className="flex-1 flex flex-col">
        {/* Header with search and notifications */}
        <header className="h-14 border-b border-(--void-border) px-6">
          {/* ... */}
        </header>

        {/* Main content with stats grid and cards */}
        <main className="flex-1 p-6">
          {/* Stats: Revenue, Orders, Customers, Conversion */}
          {/* Recent Orders table */}
          {/* Monthly Goals with progress bars */}
        </main>
      </div>
    </div>
  )
}`;
