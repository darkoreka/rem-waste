This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Deploy on Vercel
 Link to deployed version: https://rem-waste-git-main-rekas-projects-e094a4ee.vercel.app/

## 🧱 Architecture
File Structure is based on feature folders (e.g. app/skips/components) that co-locate UI, logic, and API functionality.

API Routes live under app/api/ and provide mock or real data for skips dynamically via fetch("/api/skips").

Components are split by responsibility:

SkipCard handles UI and selection

ProgressSteps manages visual progress state

StickyFooter provides contextual actions

Uses forwardRef and useRef to manage interactions like “click outside to deselect,” allowing for global UX behavior that remains precise and maintainable.

## 🎨 Styling and Responsiveness
Tailwind CSS is used for atomic, utility-first styling and rapid layout composition.

All components are fully responsive using Tailwind’s responsive utilities like md:grid-cols-2, lg:grid-cols-3, gap-x-4, justify-center, etc.

The layout adapts seamlessly to mobile using flex-col, text-center, gap-y, and breakpoint-specific overrides.

StickyFooter adjusts layout across breakpoints, centering content and stacking buttons on smaller screens while aligning them horizontally on larger screens.

## 🧩 Shadcn UI
Leverages Shadcn UI components like Button, Badge, and custom-styled extensions for consistent design and accessibility.

Utility classes like disabled:opacity-50, cursor-not-allowed, and focus-visible:ring ensure proper accessibility out of the box.

Shadcn UI theming and variants (e.g. variant="secondary") help maintain design consistency.

## ♿ Accessibility
Buttons are keyboard accessible and use focus-visible outlines for accessibility.

Click handlers are scoped carefully (using stopPropagation and ref tracking) to ensure intuitive interactions without breaking assistive technology support.

All icons are decorative or labeled when necessary.

Responsive layout avoids overlapping or clipped text, maintaining legibility across screen sizes.

## ⚡ Performance
Uses client-side data fetching for simplicity, but can easily switch to SSR (getServerSideProps) or RSC for performance-critical pages.

Minimal re-renders by keeping selection state localized and avoiding unnecessary global state.

Image components use next/image with optimized sizes and lazy loading.

ref-based event handling avoids global event clutter and ensures only necessary updates occur.
