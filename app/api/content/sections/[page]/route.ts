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

// GET /api/content/sections/[page] - Get all sections for a page (public)
export async function GET(
  request: Request,
  { params }: { params: { page: string } }
) {
  const supabase = createClient(supabaseUrl, supabaseServiceKey)
  const { data, error } = await supabase
    .from('content_sections')
    .select('*')
    .eq('page_type', params.page)
    .eq('enabled', true)
    .order('display_order', { ascending: true })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ sections: data })
}

// PUT /api/content/sections/[page] - Update a specific section (admin only)
export async function PUT(
  request: Request,
  { params }: { params: { page: string } }
) {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('sb-access-token')?.value

  if (!await verifyAdmin(accessToken)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { section_key, content, title, enabled, effective_date } = await request.json()

  if (!section_key) {
    return NextResponse.json({ error: 'section_key is required' }, { status: 400 })
  }

  const updateData: any = {
    updated_at: new Date().toISOString()
  }

  if (content !== undefined) updateData.content = content
  if (title !== undefined) updateData.title = title
  if (enabled !== undefined) updateData.enabled = enabled
  if (effective_date !== undefined) updateData.effective_date = effective_date

  const supabase = createClient(supabaseUrl, supabaseServiceKey)
  const { data, error } = await supabase
    .from('content_sections')
    .update(updateData)
    .eq('page_type', params.page)
    .eq('section_key', section_key)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ section: data })
}
