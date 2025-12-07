# Void UI

A dark-first, composable React component library built on [Base UI](https://base-ui.com) and [Tailwind CSS v4](https://tailwindcss.com).

> **Note:** This is an experimental personal project for learning and exploration. APIs may change without notice.

## Project Structure

```
voidui/
├── packages/
│   └── voidui/          # Component library (npm package)
│       ├── src/         # Component source files
│       └── dist/        # Built output
├── src/
│   └── docs/            # Documentation site
│       ├── content/     # MDX documentation
│       ├── components/  # Doc site components
│       └── pages/       # Doc site pages
└── README.md
```

## Development

```bash
# Install dependencies
pnpm install

# Start dev server (docs site)
pnpm dev

# Build the component library
pnpm build:lib

# Build everything
pnpm build
```

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **Base UI** - Unstyled accessible components
- **Phosphor Icons** - Icon library
- **Class Variance Authority** - Variant management

## Package

The component library is published as `@radenadri/void-ui`. See [packages/voidui/README.md](./packages/voidui/README.md) for usage instructions.

## Features

- Dark-first design
- Composable component architecture
- Full keyboard navigation
- Accessible by default (WAI-ARIA)
- Tailwind CSS v4 compatible
- TypeScript support

## License

MIT
