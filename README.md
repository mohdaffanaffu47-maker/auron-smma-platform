# Auron Media - Modern Social Media Marketing Agency (SMMA) Platform

A high-converting, aesthetic full-stack web application designed for Social Media Marketing Agencies (SMMA), featuring organic viral video production showcases, high-ROAS paid ad calculators, automated DM funnels, instant AI social media auditing, and an authenticated Client Portal workspace.

## Tech Stack Overview

- **Frontend**: Next.js 14+ (App Router, React 18, TypeScript, Tailwind CSS, Lucide Icons, Framer Motion)
- **Backend API**: FastAPI (Python 3.10+, Uvicorn, Pydantic v2, CORS, AI content engine)
- **Data Access Layer**: Drizzle ORM + Postgres driver
- **Database Provider**: Supabase (PostgreSQL 15 cluster `db.rmgmfkixtbulmzxhsrgr.supabase.co`)
- **Authentication**: NextAuth.js (Auth.js v5) with Google OAuth Provider
- **Deployment**: Vercel ready (`vercel.json`) & GitHub synchronized

---

## Folder Structure

```
smma-agency-app/
├── frontend/                     # Next.js Application
│   ├── src/
│   │   ├── app/                  # App Router Pages & API routes
│   │   │   ├── api/
│   │   │   │   ├── audit/        # Instant Social Media Audit handler
│   │   │   │   ├── leads/        # Consultation booking handler
│   │   │   │   ├── auth/         # NextAuth route handler
│   │   │   │   └── generate-content/ # FastAPI proxy API
│   │   │   ├── dashboard/        # Authenticated Client Portal
│   │   │   ├── layout.tsx        # Global Layout & Providers
│   │   │   ├── page.tsx          # High-converting Agency Landing Page
│   │   │   └── globals.css       # Glassmorphism design system & glow effects
│   │   ├── components/           # UI Component library
│   │   │   ├── navbar.tsx        # Responsive Header with Google Sign-in
│   │   │   ├── hero.tsx          # Hero banner with dynamic preview & CTAs
│   │   │   ├── audit-modal.tsx   # Free AI Audit Modal (Supabase integrated)
│   │   │   ├── lead-modal.tsx    # Strategy Call booking modal
│   │   │   ├── roi-calculator.tsx# Interactive 90-Day Revenue Projection widget
│   │   │   ├── case-studies.tsx  # Filterable client results grid
│   │   │   ├── services.tsx      # Services & Pricing Packages
│   │   │   ├── testimonials.tsx  # Client reviews & conversion banner
│   │   │   ├── providers.tsx     # SessionProvider wrapper
│   │   │   └── footer.tsx        # Agency Footer with live system status
│   │   ├── db/                   # Drizzle ORM setup
│   │   │   ├── index.ts          # Supabase Postgres connection
│   │   │   └── schema.ts         # Users, Accounts, Leads, Audits, Campaigns
│   │   └── lib/                  # Auth options & helper functions
│   ├── drizzle.config.ts         # Drizzle Kit configuration
│   ├── package.json
│   ├── tailwind.config.ts
│   └── .env.local                # Frontend environment variables
│
├── backend/                      # FastAPI Python Backend
│   ├── main.py                   # FastAPI application entrypoint
│   ├── requirements.txt          # Python dependencies
│   └── .env                      # FastAPI configuration
│
├── vercel.json                   # Vercel deployment configuration
└── README.md
```

---

## Quick Start & Setup

### 1. Environment Setup
The `.env.local` file in `frontend/` and `.env` in `backend/` are pre-configured with:
- **Supabase PostgreSQL Connection**: `postgresql://postgres:Founder,bi,Aur168@db.rmgmfkixtbulmzxhsrgr.supabase.co:5432/postgres`
- **Google OAuth**: Client ID & Secret
- **NextAuth Secret**: Configured for local & production sessions

### 2. Running Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Running Backend (FastAPI)
```bash
cd backend
pip install -r requirements.txt
python main.py
# or uvicorn main:app --reload --port 8000
```
API Documentation available at `http://localhost:8000/docs`.

---

## Database Migrations (Drizzle ORM)
To push database schema changes directly to Supabase:
```bash
cd frontend
npx drizzle-kit push
```

---

## Features & High-Conversion Call-To-Actions (CTAs)

1. **Instant AI Audit Modal**: Visitors enter their brand name, platform, and social handle to get an instant automated growth score and strategy suggestions, persisted to Supabase `audit_requests` table.
2. **Interactive ROI Projection Calculator**: Live sliders allow potential clients to test their ad spend and customer LTV against Auron Media's 8x reach multiplier model.
3. **Strategy Call Scheduler**: High-conversion lead capture modal saving leads into Supabase `leads` table.
4. **Google Authenticated Client Workspace**: Dashboard for clients to review content calendars, approve short-form video assets, and generate viral post ideas via FastAPI.
