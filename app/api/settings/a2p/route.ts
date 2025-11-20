import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Verify admin access from session
async function verifyAdmin(accessToken: string | undefined) {
  if (!accessToken) return false

  const supabase = createClient(supabaseUrl, supabaseServiceKey)
  const { data: { user }, error } = await supabase.auth.getUser(accessToken)

  if (error || !user) return false

  const isAdmin = user.app_metadata?.is_admin === true ||
                 user.app_metadata?.role === 'admin'

  return isAdmin
}

export async function GET(request: Request) {
  try {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('sb-access-token')?.value

    if (!await verifyAdmin(accessToken)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Get settings (should only be one row)
    const { data, error } = await supabase
      .from('a2p_settings')
      .select('*')
      .single()

    if (error) {
      console.error('Error fetching A2P settings:', error)
      return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 })
    }

    return NextResponse.json({ settings: data })
  } catch (error) {
    console.error('Error in GET /api/settings/a2p:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('sb-access-token')?.value

    if (!await verifyAdmin(accessToken)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const {
      marketing_sms_consent_text,
      transactional_sms_consent_text,
      a2p_brand_name,
      privacy_policy_url,
      terms_of_service_url,
      a2p_phone,
      a2p_email,
      a2p_address,
      general_email,
      general_phone,
      general_brand_name,
    } = body

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Get user ID for updated_by
    const { data: { user } } = await supabase.auth.getUser(accessToken!)

    // Update settings
    const { data, error } = await supabase
      .from('a2p_settings')
      .update({
        marketing_sms_consent_text,
        transactional_sms_consent_text,
        a2p_brand_name,
        privacy_policy_url,
        terms_of_service_url,
        a2p_phone,
        a2p_email,
        a2p_address,
        general_email,
        general_phone,
        general_brand_name,
        updated_by: user?.id,
      })
      .eq('id', '00000000-0000-0000-0000-000000000001')
      .select()
      .single()

    if (error) {
      console.error('Error updating A2P settings:', error)
      return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 })
    }

    return NextResponse.json({ success: true, settings: data })
  } catch (error) {
    console.error('Error in PUT /api/settings/a2p:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
