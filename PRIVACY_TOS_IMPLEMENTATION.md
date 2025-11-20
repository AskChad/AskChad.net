# Privacy/TOS Management System Implementation

## ✅ Completed
1. Created database migration: `supabase/migrations/20250120000000_create_content_pages.sql`
   - Table: `content_pages` with privacy_policy and terms_of_service
   - Content stored as markdown
   - RLS policies (public read, admin write)
   - Default content pre-populated (privacy policy converted from HTML to markdown)

2. Applied migration to Supabase database (aczudptexubjqgasgzlh)

## 🔧 Files to Create/Update

### 1. API Endpoint: `/app/api/content/[page]/route.ts`
```typescript
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

async function verifyAdmin(accessToken: string | undefined) {
  if (!accessToken) return false
  const supabase = createClient(supabaseUrl, supabaseServiceKey)
  const { data: { user }, error } = await supabase.auth.getUser(accessToken)
  if (error || !user) return false
  return user.app_metadata?.is_admin === true || user.app_metadata?.role === 'admin'
}

// GET /api/content/[page] - Get content for a page (public)
export async function GET(
  request: Request,
  { params }: { params: { page: string } }
) {
  const supabase = createClient(supabaseUrl, supabaseServiceKey)
  const { data, error } = await supabase
    .from('content_pages')
    .select('*')
    .eq('page_type', params.page)
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 404 })
  }

  return NextResponse.json({ page: data })
}

// PUT /api/content/[page] - Update content (admin only)
export async function PUT(
  request: Request,
  { params }: { params: { page: string } }
) {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('sb-access-token')?.value

  if (!await verifyAdmin(accessToken)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { content, effective_date } = await request.json()

  const supabase = createClient(supabaseUrl, supabaseServiceKey)
  const { data, error } = await supabase
    .from('content_pages')
    .update({
      content,
      effective_date: effective_date || new Date().toISOString().split('T')[0],
      updated_at: new Date().toISOString()
    })
    .eq('page_type', params.page)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ page: data })
}
```

### 2. Dashboard Card: Update `/app/dashboard/page.tsx`
Add this card after the A2P Settings card:

```typescript
<Link href="/dashboard/content-editor" className="group">
  <div className="bg-white dark:bg-background-8 rounded-lg shadow p-6 hover:shadow-lg transition-all">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-primary/10 dark:bg-accent/10 rounded-lg">
        <svg className="w-6 h-6 text-primary dark:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-1">Privacy / TOS</h3>
        <p className="text-sm text-secondary/70 dark:text-accent/70">Edit Privacy Policy and Terms of Service</p>
      </div>
    </div>
  </div>
</Link>
```

### 3. Content Editor Page: `/app/dashboard/content-editor/page.tsx`
Create a page with:
- Tabs for Privacy Policy and Terms of Service
- Markdown editor (use react-markdown or similar)
- Preview panel showing rendered HTML
- Save button (admin only)
- Effective date picker

### 4. Update Privacy Page: `/app/privacy/page.tsx`
Fetch content from API and render markdown as HTML

### 5. Create TOS Page: `/app/tos/page.tsx`
Similar to privacy page

## 📦 Required Dependencies
```bash
npm install react-markdown remark-gfm
```

## 🎯 Next Steps
1. Create API endpoint file
2. Install markdown dependencies
3. Update dashboard
4. Create content editor page
5. Update privacy/tos pages to use markdown from database
6. Test and deploy
