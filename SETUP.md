# AskChad.net - Setup Guide

## Overview

Next.js 16 application with Supabase backend and GoHighLevel integration for AI-powered sales automation.

## Prerequisites

- Node.js 20+
- Supabase account
- GoHighLevel account (for integration)
- Vercel account (for deployment)

## Local Development Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create `.env.local` file:

```bash
cp .env.local.example .env.local
```

Fill in the following variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# JWT
JWT_SECRET=generate-a-secure-random-string

# GHL
GHL_CLIENT_ID=your-ghl-client-id
GHL_CLIENT_SECRET=your-ghl-client-secret
GHL_WEBHOOK_SECRET=your-webhook-secret

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Database Setup

1. Create a new Supabase project at https://supabase.com
2. Run the SQL from `lib/db-schema.sql` in your Supabase SQL editor
3. This creates:
   - `users` table
   - `contacts` table
   - `ghl_webhooks` table
   - `ghl_field_mappings` table
   - Row Level Security policies

### 4. Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

## Production Deployment

### 1. Vercel Deployment

```bash
npm run build
vercel --prod
```

### 2. Environment Variables

Add all environment variables from `.env.local` to Vercel:

```bash
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
vercel env add JWT_SECRET
vercel env add GHL_CLIENT_ID
vercel env add GHL_CLIENT_SECRET
vercel env add GHL_WEBHOOK_SECRET
vercel env add NEXT_PUBLIC_APP_URL
```

### 3. Configure GHL Webhooks

In your GoHighLevel settings:

- Webhook URL: `https://askchad.net/api/ghl/webhook`
- OAuth Redirect: `https://askchad.net/api/ghl/oauth`
- Enable events:
  - contact.created
  - contact.updated
  - contact.deleted
  - opportunity.created
  - opportunity.status_changed

## API Endpoints

- `POST /api/contact` - Submit contact form
- `POST /api/ghl/webhook` - Receive GHL webhooks
- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Admin logout

## Admin Access

- Login page: `/askchadmin`
- Dashboard: `/dashboard`

## Project Structure

```
/app
  /api              # API routes
  /askchadmin       # Admin login
  /dashboard        # Admin dashboard
  /page.tsx         # Homepage
  /layout.tsx       # Root layout

/components
  /layout           # Header, Footer
  /sections         # Page sections
  /ui               # Reusable UI components

/lib
  /supabase.ts      # Supabase client
  /db-schema.sql    # Database schema

/public
  /images           # Static images
```

## Features

✅ Next.js 16 with App Router
✅ React 19
✅ TypeScript
✅ Tailwind CSS 4
✅ Supabase integration
✅ GHL webhook handling
✅ Contact form API
✅ Admin dashboard
✅ Production-ready build

## Support

For issues or questions, contact: info@askchad.net
