# The Wild Oasis — Architecture, Routes & Design System Documentation

## 1. Overview
This document outlines the architectural changes, routing structure, authentication & onboarding lifecycle, and the centralized luxury design system implemented for **The Wild Oasis** Next.js 16 (App Router) application.

---

## 2. Complete Routing Architecture

All routes have been organized into intuitive route groups, each with its dedicated layouts and semantic placeholder views:

### A. Public & Landing Pages (`src/app/(landing-pages)`)
* `/` (`(landing-pages)/page.tsx`): Hero landing page with alpine photography, heritage story, and calls to action.
* `/about` (`(landing-pages)/about/page.tsx`): Overview of the sanctuary, history since 1962, and philosophy.
* `/cabins-overview` (`(landing-pages)/cabins-overview/page.tsx`): Public showcase of the cabins with invitation to sign up / log in to reserve.

### B. Guest / Customer Area (`src/app/(user)`)
* `/cabins` (`(user)/cabins/page.tsx`): Luxury cabin catalog with live availability and filtering.
* `/bookings` (`(user)/bookings/page.tsx`): Guest reservations history, active stays, and cancellation management.
* `/checkout` (`(user)/checkout/page.tsx`): Booking confirmation and payment workflow.
* `/dashboard` (`(user)/dashboard/page.tsx`): Guest dashboard with upcoming reservations summary.
* `/me` (`(user)/me/page.tsx`): Guest profile management, contact details, and nationality settings.

### C. Authentication & Onboarding (`src/app/(auth)`)
* `/login` (`(auth)/login/page.tsx`): Sign-in portal for returning guests, employees, and administrators.
* `/signup` (`(auth)/signup/page.tsx`): Public registration portal for new customers/guests.
* `/onboarding` (`(auth)/onboarding/page.tsx`): Post-registration step where all users (guests and invited staff) complete their profile (Full Name, Nationality & Flag picker, National ID).

### D. Staff & Administration Portal (`src/app/admin`)
* `/admin` (`admin/page.tsx`): Staff portal landing and entry point.
* `/admin/dashboard` (`admin/dashboard/page.tsx`): Executive KPIs, occupancy rate, sales analytics, and daily activity.
* `/admin/bookings` (`admin/bookings/page.tsx`): Operations table for managing, confirming, checking-in, and checking-out bookings.
* `/admin/cabins` (`admin/cabins/page.tsx`): Cabin inventory management (pricing, capacity, media, discounts).
* `/admin/employees` (`admin/employees/page.tsx`): Staff management and role delegation (`ADMIN` vs `STAFF`).
* `/admin/guests` (`admin/guests/page.tsx`): Guest directory and stay histories.
* `/admin/me` (`admin/me/page.tsx`): Staff/Admin account settings.

---

## 3. User Invitation & Onboarding Lifecycle

### Flow 1: Normal Customers (Guests)
1. **Sign Up**: The guest visits `/signup` and registers with email/password or OAuth (Google).
2. **Onboarding**: Redirected to `/onboarding` to enter profile details (Full Name, Nationality, National ID).
3. **Database Sync**: The account is saved to the Prisma `User` table with `role: "GUEST"`.
4. **Destination**: Redirected to `/cabins` or `/dashboard`.

### Flow 2: Employees & Admins
1. **Admin Invite**: An existing administrator accesses `/admin/employees` and creates an invite for the employee's email with an assigned role (`STAFF` or `ADMIN`).
2. **Acceptance Link**: The employee receives an invite link via email.
3. **Account Activation**: The employee opens the link where their email is locked, and they choose and set their password for the first time.
4. **Onboarding**: Redirected to `/onboarding` to enter their staff profile details.
5. **Destination**: Because their role is `STAFF` or `ADMIN`, the system routes them directly to `/admin/dashboard`.

---

## 4. Centralized Luxury Design System

To ensure long-term maintainability, colors are defined in **one central place**: `src/app/globals.css`. 

Arbitrary color utility classes (e.g., `bg-[#abcabc]`) are strictly avoided in favor of semantic design tokens and the primary/accent palettes from `references/theme-guest-old.js`.

### Palette Reference (`globals.css`)

#### Primary Palette (Alpine Pine / Slate Blue)
* `primary-50`: `#E1E8EF`
* `primary-100`: `#D4DEE7`
* `primary-200`: `#B7C7D7`
* `primary-300`: `#99B0C7`
* `primary-400`: `#7C99B6`
* `primary-500`: `#5E82A6`
* `primary-600`: `#4C6B8A`
* `primary-700`: `#3C546C`
* `primary-800`: `#2C3D4F`
* `primary-900`: `#1B2631`
* `primary-950`: `#141C24` *(Signature dark background)*

#### Accent Palette (Warm Timber / Amber Gold)
* `accent-50`: `#FAF5F0` *(Cozy warm linen canvas)*
* `accent-100`: `#F4ECE1` *(Soft oatmeal fill)*
* `accent-200`: `#E8D6BF` *(Warm hairline border)*
* `accent-300`: `#DDC2A2`
* `accent-400`: `#D2AF84`
* `accent-500`: `#C69963` *(Signature luxury gold)*
* `accent-600`: `#B78343` *(Rich bronze hover)*
* `accent-700`: `#926835`
* `accent-800`: `#6C4D28`
* `accent-900`: `#4B351B`
* `accent-950`: `#382814`

### Semantic Tokens (Automatic Light / Dark Mode Adaptation)
Use these semantic tokens throughout application components:

| Utility Class | Description | Dark Mode Value | Light Mode Value |
| :--- | :--- | :--- | :--- |
| `bg-bg-primary` | Main page canvas | `#141C24` | `#FAF5F0` |
| `bg-bg-secondary` | Elevated surfaces (cards, sidebars) | `#1B2631` | `#FFFFFF` |
| `bg-bg-tertiary` | Inputs, table rows, muted fills | `#2C3D4F` | `#F4ECE1` |
| `bg-bg-hover` | Interactive hover states | `#3C546C` | `#E8D6BF` |
| `text-text-primary` | Primary headings & body | `#FAF5F0` | `#141C24` |
| `text-text-secondary` | Subtitles & descriptions | `#B7C7D7` | `#3C546C` |
| `text-text-muted` | Hints, timestamps, footers | `#7C99B6` | `#5E82A6` |
| `border-border-subtle` | Dividers & card outlines | `#2C3D4F` | `#E8D6BF` |
| `border-border-focus` | Input focus outline | `#C69963` | `#C69963` |
| `bg-brand-accent` | Primary action buttons | `#C69963` | `#C69963` |
| `hover:bg-brand-accent-hover` | Button hover state | `#B78343` | `#B78343` |

---

## 5. Theme Toggle Implementation

* **Provider**: `src/components/providers/theme-provider.tsx` wraps the application in `src/app/layout.tsx` using `next-themes`.
* **Component**: `src/components/ui/theme-toggle.tsx` provides a brushed-border toggle button with Sun/Moon icons, rotation micro-animations, and hydration safety (`mounted` state check).
* **Placement**: Located in the main public `Navbar` and the `AuthLayout`.
* **Switching Behavior**: Updates the `.dark` class on `document.documentElement`, triggering smooth CSS variable transitions across the whole page.

---

## 6. Route Protection & Middleware

Configured in `src/middleware.ts` via Clerk:
* **Protected Routes**:
  * `/admin(.*)`
  * `/dashboard(.*)`
  * `/bookings(.*)`
  * `/checkout(.*)`
  * `/me(.*)`
  * `/onboarding(.*)`
* **Public Routes**:
  * `/` (Home)
  * `/about`
  * `/cabins-overview`
  * `/cabins(.*)` (Public catalog)
  * `/login(.*)`
  * `/signup(.*)`

---

## 7. How to Modify Colors in the Future
To alter any color in the design system:
1. Open `src/app/globals.css`.
2. Update the CSS variable under `:root` (for light mode) or `.dark` (for dark mode).
3. The change instantly takes effect everywhere without editing individual components.
