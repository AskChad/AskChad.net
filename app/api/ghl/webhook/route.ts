import { NextRequest, NextResponse } from 'next/server'
import { getServiceSupabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json()

    // Log the webhook event
    const supabase = getServiceSupabase()
    const { error } = await supabase
      .from('ghl_webhooks')
      .insert([{
        event_type: payload.type || 'unknown',
        payload: payload,
        processed: false,
      }])

    if (error) {
      console.error('Failed to log webhook:', error)
    }

    // TODO: Process webhook based on event type
    // - contact.created
    // - contact.updated
    // - contact.deleted
    // - opportunity.created
    // - opportunity.status_changed

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
