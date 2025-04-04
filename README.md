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

This project follows a modular, component-driven approach using the App Router introduced in Next.js 13+. All components are designed to be reusable, accessible, and responsive across screen sizes.

## 🧱 Architecture
The app uses a feature-based folder structure (e.g. app/skips/components) to group logic, UI, and API behavior by domain.

Skip data is loaded from a dynamic API endpoint (/api/skips), which can be connected to mock or live data sources.

Component structure is based on clear separation of concerns:

SkipCard renders a single skip option and handles selection

ProgressSteps shows the current progress and is fixed to the top

Footer displays context-based actions and is fixed to the bottom

The code follows SOLID principles, keeping components small, composable, and easy to extend.

Click-outside behavior is implemented using useRef and forwardRef to keep global interaction logic clean and isolated.

## 🎨 Styling & Responsiveness
The UI is styled with Tailwind CSS. All layouts use utility-first classes and responsive breakpoints (md, lg, etc.).

Cards are displayed in a responsive grid (md:grid-cols-2, lg:grid-cols-3)

Mobile layout uses vertical stacking with centered content

Footer and progress components are sticky on mobile and desktop

Gaps and padding adapt based on screen size (gap-4, px-6, pb-40)

## 🧩 Shadcn UI
The design system uses Shadcn UI components for styling consistency and accessibility.

Common components used:

Button, with support for variants like secondary or outline

Tooltip for hover messages

Badge, when needed for labels

Accessibility helpers like cursor-not-allowed, focus-visible:ring, and disabled:opacity-50 are applied through Tailwind and Shadcn utilities.

## ♿ Accessibility
Buttons are keyboard accessible and include visible focus states

Interactive areas use stopPropagation and ref guards for clean behavior

Icons are either decorative or wrapped in accessible components

Layout avoids overflow or truncation on smaller screens

## ⚡ Performance
Data is fetched client-side with fetch() from a real endpoint

State is kept local to avoid unnecessary global updates

Images use next/image with lazy loading and optimized sizes

Only essential event listeners are active (e.g. for click-outside behavior)

This setup ensures a responsive and user-friendly experience across both mobile and desktop, while keeping the codebase maintainable and scalable.
