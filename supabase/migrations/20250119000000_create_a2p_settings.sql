-- Create A2P Settings table
CREATE TABLE IF NOT EXISTS public.a2p_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Company/Brand Information
  company_name TEXT NOT NULL DEFAULT 'AskChad',

  -- Contact Information
  support_email TEXT NOT NULL DEFAULT 'info@askchad.net',
  support_phone TEXT NOT NULL DEFAULT '(408) 753-8176',
  business_hours TEXT NOT NULL DEFAULT 'Mon-Fri, 9 AM - 5 PM',
  time_zone TEXT NOT NULL DEFAULT 'PST',

  -- A2P SMS Consent Text
  marketing_consent_text TEXT NOT NULL DEFAULT 'I agree to receive automated marketing text messages from {brand_name} at the phone number provided. Message frequency varies. Message & data rates may apply. Reply HELP for assistance or STOP to opt out at any time.',
  transactional_consent_text TEXT NOT NULL DEFAULT 'I agree to receive automated transactional and service-related text messages from {brand_name} at the phone number provided. Message frequency varies. Message & data rates may apply. Reply HELP for assistance or STOP to opt out at any time.',

  -- Legal Links
  privacy_policy_url TEXT NOT NULL DEFAULT 'https://askchad.net/privacy',
  terms_of_service_url TEXT NOT NULL DEFAULT 'https://askchad.net/tos',

  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_a2p_settings_updated_at ON public.a2p_settings(updated_at DESC);

-- Enable RLS
ALTER TABLE public.a2p_settings ENABLE ROW LEVEL SECURITY;

-- Allow public read access (for contact forms)
CREATE POLICY "Anyone can read A2P settings"
  ON public.a2p_settings
  FOR SELECT
  TO public
  USING (true);

-- Only authenticated users can update settings
CREATE POLICY "Authenticated users can update A2P settings"
  ON public.a2p_settings
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Only authenticated users can insert settings
CREATE POLICY "Authenticated users can insert A2P settings"
  ON public.a2p_settings
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Insert default settings row
INSERT INTO public.a2p_settings (id) VALUES ('00000000-0000-0000-0000-000000000001')
ON CONFLICT (id) DO NOTHING;

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_a2p_settings_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger
CREATE TRIGGER set_a2p_settings_updated_at
  BEFORE UPDATE ON public.a2p_settings
  FOR EACH ROW
  EXECUTE FUNCTION update_a2p_settings_updated_at();
