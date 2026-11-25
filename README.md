# The Wild Oasis — Mountain Sanctuary & Reservation Platform

A full-stack luxury alpine cabin reservation and property management platform set in the Italian Dolomites, built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Prisma**, **Neon (Serverless PostgreSQL)**, and **Clerk**.

The application supports three distinct portals:

- **Public Marketing & Discovery** (`/`, `/cabins-overview`, `/about`) — Editorial showcase with responsive cabin filtering.
- **Guest Portal** (`/dashboard`, `/cabins`, `/bookings`, `/checkout`, `/me`) — Collapsible drawer navigation for browsing retreats and managing reservations.
- **Staff & Admin Portal** (`/admin/dashboard`, `/admin/bookings`, `/admin/cabins`, `/admin/employees`, `/admin/guests`, `/admin/me`) — Operations hub for check-ins/check-outs, cabin inventory, and guest/staff management.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack, Cache Components) & React 19
- **Language**: TypeScript
- **Styling & UI**: Tailwind CSS v4 (Dark Walnut & Heritage Gold semantic design system), shadcn-style UI primitives (`@radix-ui/react-slot`, `class-variance-authority`, `lucide-react`)
- **Database & ORM**: Neon Serverless PostgreSQL + Prisma ORM (`@prisma/client`)
- **Authentication**: Clerk (`@clerk/nextjs` v7) with route protection middleware (`src/proxy.ts`)
- **Utilities & Tooling**: TanStack Table (`@tanstack/react-table`), Day.js, ESLint, Prettier (`prettier-plugin-tailwindcss`)

---

## Project Structure

```text
├── prisma/
│   ├── schema.prisma              # Database schema (Country, Cabin, User, Booking, Role enum)
│   └── seed.ts                    # Prisma 7 seed script (countries + initial role users)
├── prisma.config.ts               # Prisma 7 datasource & seed configuration
├── public/                        # Static WebP brand, cabin, avatar, and OAuth icon assets
├── src/
│   ├── app/
│   │   ├── (landing-pages)/       # Public pages (Home, Cabins Overview, About)
│   │   ├── (auth)/                # Split-screen auth pages (Login, Signup, Onboarding)
│   │   ├── (user)/                # Authenticated Guest Portal layout & routes
│   │   ├── admin/                 # Staff & Admin Portal layout & routes
│   │   └── globals.css            # Centralized semantic color tokens & scrollbar/gradient utilities
│   ├── components/
│   │   ├── layout/                # Navbar, Footer, SideNav drawer, User/Admin SideNavs, DashboardHeader
│   │   ├── table/                 # Reusable TanStack DataTable
│   │   └── ui/                    # Themed shadcn primitives (Button, LinkButton, Input, Label)
│   ├── data/                      # Seed datasets (countries, initial role users, cabins, bookings)
│   ├── features/                  # Domain-scoped feature modules (landing-page, auth, cabins, etc.)
│   ├── lib/                       # Shared utilities & Prisma singleton client
│   └── proxy.ts                   # Clerk route protection middleware
├── AGENTS.md                      # Architecture, formatting, and token conventions
└── THEME_DOCUMENTATION.md         # Semantic theme system reference
```

---

## Local Setup Guide

### 1. Prerequisites

- **Node.js** 20+ and **npm**
- A **[Neon](https://neon.tech/)** PostgreSQL database
- A **[Clerk](https://clerk.com/)** application

### 2. Clone & Install Dependencies

```bash
git clone https://github.com/annasfaruqui/wild-oasis.git
cd wild-oasis
npm install
```

### 3. Configure Environment Variables

Copy the template file to `.env`:

```bash
cp .env.example .env
```

_(Never commit `.env`—it is ignored by `.gitignore`.)_

---

### 4. Neon PostgreSQL & Prisma Setup

1. Create a new project in the **[Neon Console](https://console.neon.tech/)** (or connect Neon via the Vercel Storage integration).
2. Copy **two** connection strings into `.env`:
   - **`DATABASE_URL`**: Your **pooled** (`-pooler`) connection string with `?channel_binding=require&sslmode=require`. Used by `PrismaPg` (`@prisma/adapter-pg`) in `src/lib/prisma.ts` for serverless runtime queries.
   - **`DATABASE_URL_UNPOOLED`**: Your **direct** (non-pooled) connection string. Configured in `prisma.config.ts` so Prisma 7 CLI schema pushes and migrations can acquire database locks without PgBouncer interference.

```env
DATABASE_URL="postgresql://user:password@ep-example-pooler.region.aws.neon.tech/neondb?channel_binding=require&sslmode=require"
DATABASE_URL_UNPOOLED="postgresql://user:password@ep-example.region.aws.neon.tech/neondb?sslmode=require"
```

3. Generate the Prisma Client and push the schema to Neon:

```bash
npx prisma generate
npx prisma db push
```

4. _(Optional)_ Open Prisma Studio to visually inspect tables and rows:

```bash
npx prisma studio
```

---

### 5. Clerk Authentication Setup

1. Create a new application in the **[Clerk Dashboard](https://dashboard.clerk.com/)**.
2. Choose your sign-in options (e.g., **Email** / **Password**, and optional OAuth providers such as **Google**).
3. Copy your Development API keys into `.env`:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
```

> **Note on "Development Keys" warning:** Clerk displays a console notice whenever `pk_test_...` keys are active. This is expected and safe for local development; switch to `pk_live_...` / `sk_live_...` keys only when deploying to a custom production domain.

4. Configure Clerk's custom auth & fallback redirect routes in `.env` (using the `@clerk/nextjs` v7 variable names):

```env
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/login"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/signup"
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL="/dashboard"
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL="/onboarding"
```

### 6. Seeding Initial Data (Countries & Users)

> **Important — Create Users in Clerk _Before_ Seeding NeonDB:**
> The `User` table links every database record to Clerk via its unique `clerkId`. Therefore, **you must create the initial test users in Clerk first, manually add their real Clerk user IDs to `src/data/data-initial-users.ts`, and only then upload/seed the data into NeonDB.**
> Seeding NeonDB with placeholder `clerkId` values first will create orphaned database rows that cannot sign in through Clerk until their `clerkId` matches.

Follow these steps in exact order:

1. In the **Clerk Dashboard**, go to **Users** &rarr; **Create user** and create one account for each role (`ADMIN`, `STAFF`, and `GUEST`) without going through the public `/signup` flow.
2. For each created user, click **Copy user ID** (`user_...`) from the user menu and paste it manually into the matching `clerkId` field in `src/data/data-initial-users.ts` (replacing placeholder values).
3. Run the seed script to upload all countries and initial users into NeonDB:

```bash
npm run db:seed
# or via Prisma CLI:
npx prisma db seed
```

`prisma/seed.ts` automatically:

- Inserts all 195 countries from `src/data/data-countries.ts` (skipping duplicates on re-runs).
- Queries the newly created **Italy** record to resolve its `Country.id`.
- Upserts your `ADMIN`, `STAFF`, and `GUEST` users from `src/data/data-initial-users.ts` linked to Italy's `countryId`.

---

### 7. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command                | Description                                          |
| :--------------------- | :--------------------------------------------------- |
| `npm run dev`          | Start the Next.js development server (Turbopack)     |
| `npm run build`        | Build the optimized production bundle                |
| `npm run start`        | Start the production server                          |
| `npm run db:seed`      | Seed countries & initial users into Neon (`seed.ts`) |
| `npm run lint`         | Run ESLint checks                                    |
| `npm run format`       | Format all files with Prettier                       |
| `npm run format:check` | Verify Prettier formatting                           |

---

## Additional Documentation

- **[Theme & Design System](THEME_DOCUMENTATION.md)** — Semantic CSS tokens, gradients, and future multi-theme setup.
- **[Database Schema](prisma/schema.prisma)** — Full relational schema (`Country`, `Cabin`, `User`, `Booking`).
