# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the landing page for "Lüftungsprotokoll Digital" - a web application for legally compliant documentation of ventilation behavior in German residential spaces according to DIN 1946-6 standards. The app serves as evidence for mold issues, insurance claims, and rental disputes.

**Primary Language**: German (all UI, documentation, and user-facing content)

**Target Audiences**:
- Tenants (proof of proper ventilation)
- Landlords/property management (monitoring and documentation)
- Expert witnesses (analysis in damage cases)
- Insurance companies (evidence preservation)

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run Astro CLI commands
npm run astro [command]
```

## Architecture

### Technology Stack

- **Framework**: Astro 5.x (Static Site Generator)
- **TypeScript**: Strict mode enabled (extends `astro/tsconfigs/strict`)
- **Styling**: Scoped component styles (see src/layouts/Layout.astro)
- **Language**: German

### Project Structure

```
src/
├── pages/           # File-based routing (index.astro is the homepage)
├── layouts/         # Layout wrapper components (Layout.astro)
├── components/      # Reusable Astro components (Welcome.astro)
└── assets/          # Static assets (SVGs, images)

public/              # Static files served at root
```

### Key Architecture Patterns

**Astro Components**: Use `.astro` file extension with frontmatter (`---`) for component logic and HTML-like template syntax below.

**File-based Routing**: Pages in `src/pages/` automatically become routes (e.g., `index.astro` → `/`).

**Layout Pattern**: Pages import and wrap content with `Layout.astro` for consistent structure.

## Application Context (from README.md)

### Core Functionality (Planned)

The full application (not just this landing page) will include:

1. **Ventilation Protocol Entry**
   - Required fields per German standards: date, time, room, ventilation type, duration, temperature, humidity
   - Photo uploads (hygrometer, window position, room condition)
   - Automatic weather data integration
   - Quick entry mode for recurring entries

2. **Property Management**
   - Multiple properties/units
   - Room management per property
   - Property size for automatic ventilation recommendations

3. **Intelligent Assistance**
   - Ventilation recommendations based on property size, room type, humidity levels, season
   - Push notification reminders for recommended ventilation times

4. **Analysis & Reporting**
   - Tabular overview with filtering and sorting
   - Time period filters (today, last 7 days, last month, custom)
   - Room-specific filtering

5. **Legal Compliance Export**
   - PDF export with timestamps, digital signatures, consecutive numbering
   - Immutable entries (deletion only, with logging)
   - GDPR-compliant data handling
   - Hash values for integrity verification

### Legal Requirements

The application must ensure:
- **Immutability**: Entries cannot be edited after saving (deletion only, with logging)
- **Traceability**: Every entry contains timestamp and user ID
- **Audit-proof**: Deleted entries logged in deletion protocol
- **Evidential value**: PDF exports with hash values for integrity checks
- **GDPR compliance**: EU server location, data minimization, right to be forgotten

### Technical Architecture (Future Web App)

Planned as **Progressive Web App (PWA)**:
- Offline functionality
- Mobile-first responsive design
- IndexedDB for local data storage
- Optional cloud synchronization (encrypted, GDPR-compliant)
- Client-side PDF generation (jsPDF or PDFMake)
- Recommended stack: React, TailwindCSS, Day.js, Zod/Yup, React Hook Form

## Important Notes

- All user-facing text must be in German
- Legal requirements are critical: immutability, timestamps, GDPR compliance
- This landing page is the entry point; the main web app is a separate PWA
- Design must follow accessibility standards (WCAG 2.1 AA)
- Color coding convention: Green (good), Yellow (borderline), Red (critical)
- Touch targets must be minimum 44x44px for mobile
