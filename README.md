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

Key Features
SkipCard Component:

Renders a single skip option and handles selection.
Supports a skeleton loading state for better user experience during data fetching.
Dynamically updates styles based on selection state (e.g., border and shadow changes).
ProgressSteps Component:

Displays the current progress and is fixed to the top of the page for better navigation.
StickyFooter Component:

Displays context-based actions (e.g., selected skip size and price) and is fixed to the bottom of the page.
TitleWithDescription Component:

Separates the title and description into a reusable component for better readability and maintainability.
Used to display the page title ("Choose Your Skip Size") and a brief description.
Custom Hook
useClickOutside:
A custom hook that detects clicks outside of specified elements.
Used to deselect a skip card when the user clicks outside the card or footer.
Keeps global interaction logic clean and isolated by leveraging useRef.
TypeScript Types
Skip Type:

Defines the structure of a skip object fetched from the API.
Ensures type safety and consistency across the app.

The code follows SOLID principles, keeping components small, composable, and easy to extend.

API Integration
Fetching Skip Data:

Skip data is fetched from a dynamic API endpoint (/api/skips) using a dedicated function in the api folder.
The fetchSkipsByLocation function handles the API call and filters out invalid data (e.g., skips with null prices).

## 🎨 Styling & Responsiveness
The UI is styled with Tailwind CSS. All layouts use utility-first classes and responsive breakpoints (md, lg, etc.).

Key Styling Features
Responsive Grid:

Skip cards are displayed in a responsive grid (md:grid-cols-2, lg:grid-cols-3).
Adjusts dynamically based on screen size.
Sticky Components:

The progress bar and footer are sticky, ensuring they remain visible during scrolling.
Dynamic Badge Styling:

The "Yard" badge changes color when a skip card is selected, providing visual feedback to the user.

## 🧩 Shadcn UI
The design system uses Shadcn UI components for styling consistency and accessibility.

Common components used:

Button, with support for variants like secondary or outline

Tooltip for hover messages

Badge, when needed for labels

Accessibility helpers like cursor-not-allowed, focus-visible:ring, and disabled:opacity-50 are applied through Tailwind and Shadcn utilities.

## ♿ Accessibility
Keyboard Navigation:

Skip cards are fully keyboard accessible, with tabIndex and onKeyDown handlers for Enter and Space keys.
Buttons include visible focus states for better usability.
Interactive Areas:

Click-outside behavior is implemented using useRef and the useClickOutside hook to handle interactions cleanly.
Icons and Images:

Icons are either decorative or wrapped in accessible components.
Images use next/image for lazy loading and optimized sizes.
Responsive Layout:

The layout avoids overflow or truncation on smaller screens, ensuring a smooth experience across devices.

## ⚡ Performance
Client-Side Data Fetching:

Data is fetched client-side using the fetchSkipsByLocation function.
Skeleton loaders are displayed while data is being fetched to improve perceived performance.
Optimized Images:

Images use next/image with lazy loading and optimized sizes for better performance.
Minimal Event Listeners:

Only essential event listeners are active (e.g., for click-outside behavior).
Local State Management:

State is kept local to avoid unnecessary global updates, improving performance and maintainability.

This setup ensures a responsive and user-friendly experience across both mobile and desktop, while keeping the codebase maintainable and scalable.

## Changes made compared to the original page:
- Added a sticky progress bar and improved responsive design, along with minor design adjustments

- Moved the "Continue" bar to the footer

- Made a small change to the selection data

- Enabled card selection and deselection when clicking outside a card

- Added a tooltip for the heavy machine alert in desktop view; displayed as a badge in mobile view

- Changed the Yard badge color when a card is selected

- Introduced skeleton loading for skip cards to improve user experience during data fetching.
