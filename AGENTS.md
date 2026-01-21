# AGENTS.md - Porto-vit Portfolio

This is a Next.js 14+ portfolio website using the App Router, TypeScript, Tailwind CSS, and shadcn/ui components.

## Project Overview

- **Framework**: Next.js (App Router with React Server Components)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui (New York style variant)
- **Package Manager**: Bun (preferred) or npm
- **Node Version**: 18+ recommended

## Build, Lint, and Dev Commands

```bash
# Development server (uses Turbopack)
bun dev
# or: npm run dev

# Production build
bun run build
# or: npm run build

# Start production server
bun start
# or: npm run start

# Linting
bun lint
# or: npm run lint
```

### No Test Framework Configured

This project does not currently have a test framework. If adding tests, consider:
- Vitest for unit tests
- Playwright or Cypress for E2E tests

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css         # Global styles, CSS variables, Tailwind
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   └── projects/
│       └── page.tsx        # Projects page
├── components/             # React components
│   ├── ui/                 # shadcn/ui base components
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dock.tsx
│   │   └── tooltip.tsx
│   ├── icons.tsx           # Custom SVG icon components
│   ├── mode-toggle.tsx     # Dark/light theme toggle
│   ├── navbar.tsx          # Navigation dock component
│   ├── project-card.tsx    # Project display card
│   └── theme-provider.tsx  # Theme context wrapper
├── data/
│   └── index.tsx           # Centralized site content/data
└── lib/
    └── utils.ts            # Utility functions (cn, formatDate)
```

## Code Style Guidelines

### TypeScript

- Use strict TypeScript (`strict: true` in tsconfig.json)
- Prefer explicit type annotations for function parameters and return types
- Use `interface` for component props, named `Props` when local to component
- Use `as const` for constant data objects (see `src/data/index.tsx`)
- Use `Readonly<>` for immutable prop types

```typescript
// Component props pattern
interface Props {
  title: string;
  href?: string;
  className?: string;
}

export function MyComponent({ title, href, className }: Props) { ... }
```

### Imports

- Use path alias `@/*` for src imports (maps to `./src/*`)
- Order imports: external packages first, then internal modules
- Group shadcn/ui imports from `@/components/ui/*`
- Group related imports in a single statement when possible

```typescript
// External
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

// Internal - components
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Internal - utilities and data
import { cn } from "@/lib/utils";
import { DATA } from "@/data";
```

### React Components

- Use function declarations for page components: `export default function Page()`
- Use function expressions for reusable components: `export function MyComponent()`
- Mark client components with `"use client"` directive at top of file
- Prefer React Server Components (RSC) - only use client when needed for interactivity
- Use `forwardRef` pattern for components that need ref forwarding
- Set `displayName` for forwardRef components

```typescript
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return <button ref={ref} className={cn("...", className)} {...props} />;
  }
);
Button.displayName = "Button";
```

### Styling with Tailwind CSS

- Use the `cn()` utility from `@/lib/utils` for conditional classes
- Use CSS variables for colors (defined in globals.css): `bg-background`, `text-foreground`
- Use shadcn/ui semantic colors: `primary`, `secondary`, `muted`, `accent`, `destructive`
- Prefer Tailwind utilities over custom CSS
- Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Use dark mode variant: `dark:bg-background`

```typescript
import { cn } from "@/lib/utils";

<div className={cn(
  "flex items-center gap-2 rounded-lg p-4",
  "bg-background text-foreground",
  "hover:bg-accent transition-colors",
  isActive && "border-primary",
  className
)} />
```

### shadcn/ui Components

- Components are in `src/components/ui/`
- Use `class-variance-authority` (cva) for variant-based styling
- Export both component and variants (e.g., `Button` and `buttonVariants`)
- Follow the New York style variant conventions

### Naming Conventions

- **Files**: kebab-case (`project-card.tsx`, `mode-toggle.tsx`)
- **Components**: PascalCase (`ProjectCard`, `ModeToggle`)
- **Functions/variables**: camelCase (`formatDate`, `buttonVariants`)
- **Constants**: UPPER_SNAKE_CASE for true constants, camelCase for config objects
- **CSS variables**: kebab-case with `--` prefix (`--background`, `--primary`)

### Data Management

- Centralize site content in `src/data/index.tsx`
- Use `as const` for type inference on constant data
- Keep data separate from components for easy updates

### Next.js Patterns

- Use Next.js `Image` component for optimized images
- Use Next.js `Link` for client-side navigation
- Export `metadata` object for page SEO (not `generateMetadata` unless dynamic)
- Use `next/font/google` for font loading

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description",
};
```

### Error Handling

- Use optional chaining (`?.`) for nullable access
- Use nullish coalescing (`??`) for default values
- Provide fallback values for optional props: `href={href || "#"}`

### Accessibility

- Include proper alt text for images
- Use semantic HTML elements (`section`, `nav`, `main`)
- Add `target="_blank"` with `rel="noopener noreferrer"` for external links

## Key Dependencies

| Package | Purpose |
|---------|---------|
| `next-themes` | Dark/light mode theming |
| `framer-motion` | Animations |
| `lucide-react` | Icons |
| `@radix-ui/*` | Headless UI primitives |
| `class-variance-authority` | Variant styling |
| `clsx` + `tailwind-merge` | Class name utilities |

## Adding shadcn/ui Components

```bash
bunx shadcn-ui@latest add <component-name>
# or: npx shadcn-ui@latest add <component-name>
```

Configuration is in `components.json` - uses New York style with CSS variables.
