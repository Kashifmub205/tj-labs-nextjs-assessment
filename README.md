# TJ Labs Next.js Assessment

## Overview

This repository contains a Next.js and TypeScript implementation of the supplied Figma task. It includes two responsive screens:

- **Sign In** at `/`
- **Number Generator** at `/generator`

Authentication, backend services, and API calls are intentionally outside the scope of this assessment. The Sign In button is therefore presentational, while the Number Generator implements the required client-side behavior.

## Setup

### Prerequisites

- Node.js (tested with v24.20.0)
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Run the available checks:

```bash
npm test
npm run typecheck
npm run build
```

Build the project first, then run the production server:

```bash
npm run build
npm run start
```

## Project structure

```text
src/
  app/
    page.tsx                 Sign In route
    generator/page.tsx       Number Generator route
    globals.css              Font registration and global styles
  components/
    app-header.tsx           Shared responsive header
    auth-page-shell.tsx      Shared page background, header, and card shell
    sign-in-form.tsx         Sign In form content
    number-generator.tsx     Generator UI and client-side state
  lib/
    generate-unique-digits.ts       Standalone digit generator
    generate-unique-digits.test.ts  Unit tests for the generator
public/
  assets/                    Local image and SVG assets
  fonts/                     Local Barlow and Public Sans font files
```

Component styles live beside their components as CSS modules. This keeps page-specific styling scoped while allowing the shared page shell and header to be reused by both routes.

## Design implementation

The screens use one responsive component structure rather than separate desktop and mobile implementations. CSS starts with the mobile layout and uses media queries for desktop-specific dimensions, spacing, and header actions.

`AuthPageShell` provides the shared background treatment, header placement, and responsive card container. `AppHeader` handles the language flag and optional settings action, while each screen owns only its specific content.

Figma values such as page gutters, card widths and padding, input and button heights, radii, shadows, and typography were translated into the component CSS. Fonts are bundled locally and registered with `@font-face`, so the build does not depend on fetching fonts at runtime. Image and icon files are stored in `public/assets`; exported Figma assets are reused where available.

The rendered desktop and mobile routes were visually compared with the supplied Figma references and adjusted for visible differences.

## Number generator

`generateUniqueDigits` in `src/lib/generate-unique-digits.ts` is separate from the React component. It creates an array containing digits 0 through 9, shuffles it with the Fisher-Yates algorithm, and returns the first six values.

Because a shuffled array contains each source digit only once, the returned six values are always unique integers between 0 and 9. Fisher-Yates produces an unbiased shuffle when it is supplied with a uniform random source; selecting the first six values then produces an unbiased ordered selection without replacement. This implementation uses `Math.random()` because the task is not security-sensitive. `Math.random()` is not cryptographically secure.

The function works on a fixed ten-item array, so its work and memory use are effectively constant in this project. Generalized Fisher-Yates runs in `O(n)` time. Keeping the logic outside the UI makes the rule easy to test and keeps the component focused on displaying state and handling the button click.

The unit tests use Node's built-in test runner and verify:

- exactly six returned values
- integer values in the range 0–9
- uniqueness of all returned values
- the same constraints across repeated calls

## AI usage

AI assistance through Codex was used for implementation support, Figma inspection, code generation and refinement, and running development checks. I reviewed the generated implementation against the supplied desktop and mobile Figma designs, tested the application locally, and refined visible differences before finalizing the screens.

## Technical decisions

- No UI framework was added because semantic HTML, React, and scoped CSS cover the small set of required screens without extra dependencies.
- Node's built-in test runner was used for the standalone generator tests, avoiding a heavier test framework and additional configuration.
- Authentication and backend work were not implemented because the assessment only requires the screen and generator behavior.
- Shared responsive components and styles reduce duplication while keeping each route easy to follow.

## Further improvements

With more time, useful follow-up work would include automated visual regression checks against the Figma references, broader browser-level navigation testing, and additional automated accessibility checks.
