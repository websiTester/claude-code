# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application using the App Router architecture with React 19, TypeScript, and Tailwind CSS 4.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture

**App Router Structure:**
- Uses Next.js App Router (`app/` directory)
- `app/layout.tsx` - Root layout that applies Geist fonts globally
- `app/page.tsx` - Home page component
- `app/globals.css` - Global styles with Tailwind CSS directives

**TypeScript Configuration:**
- Path alias `@/*` maps to the root directory
- Strict mode enabled
- Target: ES2017

**Styling:**
- Tailwind CSS 4 with PostCSS
- Dark mode support using `dark:` class variants
- Geist Sans and Geist Mono fonts loaded via `next/font`

**Key Patterns:**
- Pages are React Server Components by default
- Use `next/image` for optimized images
- Metadata exported from layout/page files for SEO

## Project Guidelines

**Navigation:**
- When creating a new page, always add a link to that page in the header

**Documentation:**
- Use Context7 to check up-to-date docs when needed for implementing new libraries or frameworks, or adding features using them
