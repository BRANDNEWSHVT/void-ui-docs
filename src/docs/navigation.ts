interface DocsNavItem {
  title: string;
  href: string;
}

interface DocsNavSection {
  title: string;
  items: DocsNavItem[];
}

export const docsNavigation: DocsNavSection[] = [
  {
    title: 'Overview',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Quick Start', href: '/docs/quick-start' },
    ],
  },
  {
    title: 'Components',
    items: [
      { title: 'Accordion', href: '/docs/components/accordion' },
      { title: 'Alert', href: '/docs/components/alert' },
      { title: 'Alert Dialog', href: '/docs/components/alert-dialog' },
      { title: 'Avatar', href: '/docs/components/avatar' },
      { title: 'Badge', href: '/docs/components/badge' },
      { title: 'Button', href: '/docs/components/button' },
      { title: 'Card', href: '/docs/components/card' },
      { title: 'Checkbox', href: '/docs/components/checkbox' },
      { title: 'Chip', href: '/docs/components/chip' },
      { title: 'Collapsible', href: '/docs/components/collapsible' },
      { title: 'Dialog', href: '/docs/components/dialog' },
      { title: 'Divider', href: '/docs/components/divider' },
      { title: 'Dropdown', href: '/docs/components/dropdown' },
      { title: 'Field', href: '/docs/components/field' },
      { title: 'Fieldset', href: '/docs/components/fieldset' },
      { title: 'Heading', href: '/docs/components/heading' },
      { title: 'Icon Box', href: '/docs/components/icon-box' },
      { title: 'Input', href: '/docs/components/input' },
      { title: 'Kbd', href: '/docs/components/kbd' },
      { title: 'Label', href: '/docs/components/label' },
      { title: 'Menu', href: '/docs/components/menu' },
      { title: 'Pagination', href: '/docs/components/pagination' },
      { title: 'Popover', href: '/docs/components/popover' },
      { title: 'Progress', href: '/docs/components/progress' },
      { title: 'Radio', href: '/docs/components/radio' },
      { title: 'Select', href: '/docs/components/select' },
      { title: 'Separator', href: '/docs/components/separator' },
      { title: 'Slider', href: '/docs/components/slider' },
      { title: 'Spinner', href: '/docs/components/spinner' },
      { title: 'Stack', href: '/docs/components/stack' },
      { title: 'Switch', href: '/docs/components/switch' },
      { title: 'Table', href: '/docs/components/table' },
      { title: 'Tabs', href: '/docs/components/tabs' },
      { title: 'Text', href: '/docs/components/text' },
      { title: 'Textarea', href: '/docs/components/textarea' },
      { title: 'Toast', href: '/docs/components/toast' },
      { title: 'Tooltip', href: '/docs/components/tooltip' },
    ],
  },
];

export const docsRouteTitleMap = docsNavigation
  .flatMap((section) => section.items)
  .reduce<Record<string, string>>((acc, item) => {
    acc[item.href] = `${item.title} – Void UI Docs`;
    return acc;
  }, {});
