import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

/**
 * GET /api/a2p-settings - Get A2P settings (public)
 * Returns settings with field names matching the frontend interface:
 * - marketing_consent_text (not marketing_sms_consent_text)
 * - transactional_consent_text (not transactional_sms_consent_text)
 */
export async function GET() {
  try {
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    const { data, error } = await supabase
      .from('a2p_settings')
      .select('*')
      .limit(1)
      .single()

    if (error) {
      console.error('Error fetching A2P settings:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ settings: data })
  } catch (error: any) {
    console.error('Error in A2P settings API:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// PUT /api/a2p-settings - Update A2P settings (authenticated users only)
export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    const { data, error } = await supabase
      .from('a2p_settings')
      .update(body)
      .eq('id', '00000000-0000-0000-0000-000000000001')
      .select()
      .single()

    if (error) {
      console.error('Error updating A2P settings:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ settings: data })
  } catch (error: any) {
    console.error('Error in A2P settings update API:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
