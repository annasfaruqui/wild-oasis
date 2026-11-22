# Custom Project Rules & Agent Guidelines

## 1. Code Formatting (Prettier Consistency)

- After creating or editing any file in the codebase, always format the file according to standard Prettier rules (matching the user's Prettier editor extension).
- Ensure consistent indentation (2 spaces), single/double quotes, trailing commas, and semicolons so that when the user edits and saves files locally, unexpected formatting diffs are avoided.

## 2. Design System & Semantic Color Tokens

- Strictly adhere to the application's centralized design system defined in `src/app/globals.css`.
- **DO NOT** use default Tailwind palette colors (such as `text-stone-*`, `bg-stone-*`, `neutral-*`, `gray-*`, etc.) or arbitrary hardcoded color hex values.
- **ONLY** use the semantic design tokens defined for the project so that theme changes (light/dark mode) apply immediately and styling consistency is maintained across all components:
  - **Surfaces / Backgrounds**: `bg-bg-primary`, `bg-bg-surface`, `bg-bg-elevated`, `hover:bg-bg-hover`
  - **Typography**: `text-text-primary`, `text-text-secondary`
  - **Brand Accents**: `text-accent-primary`, `bg-accent-primary`, `text-accent-secondary`, `text-accent-tertiary`
  - **Actions & Links**: `bg-action-primary`, `hover:bg-action-primary-hover`, `text-action-text`, `text-link`
  - **Borders & Focus Rings**: `border-border-subtle`, `focus-visible:ring-border-focus`
  - **Status Feedback**: `color-status-success`, `color-status-error`, `color-status-warning`, `color-status-info`

## 3. Feature-Based Architecture & Component Placement

- Feature-specific components (e.g. cabins, bookings, guests, dashboard, landing-page sub-areas, etc.) **MUST** reside within their respective feature folders inside `src/features/<feature>/components/`.
- The root `src/components/` directory is **STRICTLY** reserved for general-purpose, shared UI and layout primitives (e.g., `navbar.tsx`, `footer.tsx`, shared UI atoms) that do not belong to any specific domain feature.

## 4. No `index.ts` Barrel Files & Direct Concrete Imports

- **DO NOT** use `index.ts` or `index.tsx` barrel files anywhere in the codebase.
- Avoid intermediate re-exporting layers that obscure the source location.
- **ALWAYS** import directly from the concrete component/module file (e.g. `import { CabinFilterGrid } from "@/features/cabins/components/cabin-filter-grid"`).
- This ensures developers can use IDE navigation (Ctrl+Click / Cmd+Click) to jump directly into the source component without jumping through intermediate barrel layers.

---

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
