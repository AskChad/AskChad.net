import { NextRequest, NextResponse } from 'next/server'
import { getServiceSupabase } from '@/lib/supabase'
import { z } from 'zod'

const contactSchema = z.object({
  first_name: z.string().min(1, 'First name is required'),
  last_name: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  sms_marketing_consent: z.boolean().optional(),
  sms_transactional_consent: z.boolean().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = contactSchema.parse(body)

    // Save to Supabase
    const supabase = getServiceSupabase()
    const { data, error } = await supabase
      .from('contacts')
      .insert([{
        ...validatedData,
        source: 'website',
      }])
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to save contact' },
        { status: 500 }
      )
    }

    // TODO: Sync to GHL if configured
    // await syncToGHL(data)

    return NextResponse.json({ success: true, data }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
