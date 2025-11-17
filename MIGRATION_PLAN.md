# AskChad.net - Next.js Migration Plan

**Created**: 2025-01-16
**Current**: Vite + HTML Template
**Target**: Next.js 15 + React + Supabase + GHL Integration

---

## 🎯 Project Goals

1. **Migrate to Next.js** - Convert Vite/HTML site to Next.js/React
2. **Add Backend** - Implement API routes for authentication and integrations
3. **Supabase Integration** - Set up database and authentication
4. **GHL Integration** - Implement webhooks and field mapping
5. **Maintain Design** - Keep exact same look and feel

---

## 📋 Phase 1: Setup & Preparation

### 1.1 Create Template Reference Folder
- [x] Create `template/` directory (git ignored)
- [ ] Copy template components from Website_Templates
- [ ] Document available components

### 1.2 Update .gitignore
```
template/
.env.local
.env
node_modules/
.next/
dist/
```

### 1.3 Backup Current Vite Site
- [ ] Create `vite-backup/` folder
- [ ] Copy all current files
- [ ] Tag commit as `pre-migration`

---

## 📋 Phase 2: Next.js Foundation

### 2.1 Initialize Next.js Project
```bash
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir
```

**Configuration**:
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- App Router: Yes
- Import alias: @/*

### 2.2 Install Dependencies
```bash
npm install @supabase/supabase-js
npm install axios
npm install bcryptjs
npm install jsonwebtoken
npm install zod
npm install react-hook-form
npm install date-fns
```

### 2.3 Project Structure
```
/app
  /page.tsx                 # Landing page
  /askchadmin
    /page.tsx               # Login page
  /dashboard
    /page.tsx               # Admin dashboard
  /privacy
    /page.tsx               # Privacy policy
  /tos
    /page.tsx               # Terms of service
  /api
    /auth
      /login/route.ts       # Login endpoint
      /logout/route.ts      # Logout endpoint
    /contact
      /route.ts             # Contact form submission
    /ghl
      /webhook/route.ts     # GHL webhook receiver
      /oauth/route.ts       # GHL OAuth callback
      /contacts/route.ts    # GHL contacts sync

/components
  /ui                       # Base UI components
    /Button.tsx
    /Input.tsx
    /Modal.tsx
  /layout
    /Header.tsx
    /Footer.tsx
    /Navigation.tsx
  /forms
    /ContactForm.tsx
  /dashboard
    /ContactsList.tsx
    /Analytics.tsx

/lib
  /supabase.ts              # Supabase client
  /auth.ts                  # Auth utilities
  /ghl.ts                   # GHL API client
  /utils.ts                 # Helper functions

/public
  /images                   # Static assets
```

---

## 📋 Phase 3: Supabase Setup

### 3.1 Create Supabase Project
- [ ] Go to supabase.com
- [ ] Create new project: "askchad-net"
- [ ] Note project URL and anon key
- [ ] Note service role key (for server-side)

### 3.2 Database Schema

**users table**:
```sql
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**contacts table**:
```sql
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  sms_marketing_consent BOOLEAN DEFAULT false,
  sms_transactional_consent BOOLEAN DEFAULT false,
  ghl_contact_id TEXT UNIQUE,
  source TEXT DEFAULT 'website',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**ghl_webhooks table**:
```sql
CREATE TABLE ghl_webhooks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type TEXT NOT NULL,
  payload JSONB NOT NULL,
  processed BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**ghl_field_mappings table**:
```sql
CREATE TABLE ghl_field_mappings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  askchad_field TEXT NOT NULL,
  ghl_field TEXT NOT NULL,
  field_type TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 3.3 Row Level Security (RLS)
```sql
-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE ghl_webhooks ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can read own data" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Admins can read all contacts" ON contacts
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
```

### 3.4 Environment Variables
Create `.env.local`:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# JWT
JWT_SECRET=your-jwt-secret-key

# GHL
GHL_CLIENT_ID=your-ghl-client-id
GHL_CLIENT_SECRET=your-ghl-client-secret
GHL_WEBHOOK_SECRET=your-webhook-secret

# App
NEXT_PUBLIC_APP_URL=https://www.askchad.net
```

---

## 📋 Phase 4: Component Migration

### 4.1 Convert Header Component
**From**: `src/components/pages/askchad/header.htm`
**To**: `components/layout/Header.tsx`

**Key Changes**:
- Convert HTML to JSX
- Replace `<Component>` with imports
- Convert inline scripts to React hooks
- Use `useState` for menu open/close
- Use `useEffect` for theme management

### 4.2 Convert Footer Component
**From**: `src/components/pages/askchad/footer.htm`
**To**: `components/layout/Footer.tsx`

### 4.3 Convert Contact Modal
**From**: `src/components/pages/askchad/contact-modal.htm`
**To**: `components/forms/ContactModal.tsx`

**Features to preserve**:
- Two-column layout (first/last name, phone/email)
- Dual SMS consent checkboxes
- Form validation
- Submit to API route instead of console.log

### 4.4 Convert Mobile Menu
**From**: `src/components/pages/askchad/mobile-menu.htm`
**To**: `components/layout/MobileMenu.tsx`

### 4.5 Convert Main Page
**From**: `index.html`
**To**: `app/page.tsx`

**Sections to convert**:
- Hero section
- Features section
- Benefits section
- How It Works section
- Testimonials section
- Contact section

---

## 📋 Phase 5: Authentication Implementation

### 5.1 Create Auth API Routes

**POST `/api/auth/login`**:
```typescript
// Validate credentials
// Generate JWT token
// Set HTTP-only cookie
// Return user data
```

**POST `/api/auth/logout`**:
```typescript
// Clear HTTP-only cookie
// Return success
```

**GET `/api/auth/me`**:
```typescript
// Verify JWT token
// Return current user data
```

### 5.2 Create Admin Login Page
**From**: `askchadmin.html`
**To**: `app/askchadmin/page.tsx`

**Features**:
- Login form
- Error handling
- Redirect to dashboard on success
- Store JWT in HTTP-only cookie

### 5.3 Create Middleware for Protected Routes
**File**: `middleware.ts`

```typescript
// Check JWT token
// Redirect to login if not authenticated
// Allow public routes
```

---

## 📋 Phase 6: GHL Integration

### 6.1 GHL Webhook Endpoint
**File**: `app/api/ghl/webhook/route.ts`

**Functionality**:
- Verify webhook signature
- Parse webhook payload
- Store in database
- Process based on event type
- Return 200 OK

**Event Types to Handle**:
- `contact.created`
- `contact.updated`
- `contact.deleted`
- `opportunity.created`
- `opportunity.status_changed`

### 6.2 GHL OAuth Implementation
**File**: `app/api/ghl/oauth/route.ts`

**Flow**:
1. User clicks "Connect GHL"
2. Redirect to GHL OAuth page
3. GHL redirects back with code
4. Exchange code for access token
5. Store encrypted token in database

### 6.3 Field Mapping Configuration

**Default Mappings**:
```json
{
  "first_name": "firstName",
  "last_name": "lastName",
  "email": "email",
  "phone": "phone",
  "sms_marketing_consent": "tags:sms_marketing",
  "sms_transactional_consent": "tags:sms_transactional"
}
```

**Admin UI**:
- View current mappings
- Edit mappings
- Test sync
- View sync history

### 6.4 Contact Sync Service
**File**: `lib/services/ghl-sync.ts`

**Functions**:
- `syncContactToGHL(contact)` - Push to GHL
- `syncContactFromGHL(ghlContact)` - Pull from GHL
- `updateContactInGHL(contact)` - Update existing
- `deleteContactInGHL(contactId)` - Remove from GHL

---

## 📋 Phase 7: Contact Form Integration

### 7.1 Contact Form API Route
**File**: `app/api/contact/route.ts`

**Flow**:
1. Receive form data
2. Validate with Zod
3. Save to Supabase `contacts` table
4. If GHL connected, sync to GHL
5. Send notification email (optional)
6. Return success

### 7.2 Update Contact Modal Component
**File**: `components/forms/ContactModal.tsx`

**Changes**:
- Submit to `/api/contact`
- Handle loading state
- Show success/error messages
- Reset form on success

---

## 📋 Phase 8: Dashboard Implementation

### 8.1 Dashboard Page
**File**: `app/dashboard/page.tsx`

**Features**:
- Contacts list
- Recent submissions
- GHL sync status
- Analytics overview

### 8.2 Contacts Management
**File**: `components/dashboard/ContactsList.tsx`

**Features**:
- View all contacts
- Filter and search
- Edit contact details
- Manual GHL sync
- Export to CSV

---

## 📋 Phase 9: Testing & Deployment

### 9.1 Local Testing
- [ ] Test login/logout
- [ ] Test contact form submission
- [ ] Test GHL webhook receipt
- [ ] Test OAuth flow
- [ ] Test field mapping
- [ ] Test dashboard access
- [ ] Test mobile responsiveness

### 9.2 Vercel Deployment
```bash
vercel --prod
```

**Environment Variables to Set**:
- All Supabase credentials
- GHL credentials
- JWT secret
- App URL

### 9.3 Supabase Configuration
- [ ] Update CORS settings
- [ ] Add production URL to allowed domains
- [ ] Verify RLS policies

### 9.4 GHL Configuration
- [ ] Add webhook URL: `https://askchad.net/api/ghl/webhook`
- [ ] Add OAuth redirect: `https://askchad.net/api/ghl/oauth`
- [ ] Enable required scopes

---

## 📋 Phase 10: Post-Migration

### 10.1 Update DNS
- [ ] Point askchad.net to Vercel

### 10.2 Monitor
- [ ] Check error logs
- [ ] Monitor webhook deliveries
- [ ] Test contact form submissions
- [ ] Verify GHL sync

### 10.3 Documentation
- [ ] Update README.md
- [ ] Create SETUP.md
- [ ] Document GHL setup process
- [ ] Create field mapping guide

---

## 🔧 Rollback Plan

If migration fails:
1. Revert DNS to old deployment
2. Restore from `pre-migration` git tag
3. Redeploy Vite version

---

## ✅ Success Criteria

- [ ] Site looks identical to current version
- [ ] All pages load correctly
- [ ] Contact form submits successfully
- [ ] Contacts saved to Supabase
- [ ] GHL webhook receives events
- [ ] OAuth flow completes
- [ ] Contacts sync to GHL
- [ ] Admin can login
- [ ] Dashboard displays contacts
- [ ] Mobile responsive
- [ ] Dark mode works
- [ ] Performance is good (Lighthouse > 90)

---

## 📚 Reference Documents

- Attack Kit: `/mnt/c/development/resources/ATTACK_KIT.md`
- Supabase Guide: `/mnt/c/development/resources/SUPABASE_CONFIGURATION_GUIDE.md`
- GHL Documentation: `https://highlevel.stoplight.io/`
- Next.js Docs: `https://nextjs.org/docs`

---

## 🚀 Timeline Estimate

- **Phase 1-2**: 2 hours - Setup and Next.js init
- **Phase 3**: 1 hour - Supabase setup
- **Phase 4**: 4 hours - Component migration
- **Phase 5**: 2 hours - Authentication
- **Phase 6**: 3 hours - GHL integration
- **Phase 7**: 1 hour - Contact form
- **Phase 8**: 2 hours - Dashboard
- **Phase 9**: 2 hours - Testing
- **Total**: ~17 hours

---

## 📝 Notes

- Keep Vite version in separate branch until migration complete
- Test thoroughly before DNS switchover
- Have rollback plan ready
- Monitor closely for first week after migration
