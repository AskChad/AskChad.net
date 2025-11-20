-- Create A2P Settings table
CREATE TABLE IF NOT EXISTS public.a2p_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- A2P Compliance Settings
  marketing_sms_consent_text TEXT NOT NULL DEFAULT 'I agree to receive automated marketing text messages from {brand_name} at the phone number provided. Message frequency varies. Message & data rates may apply. Reply HELP for help, STOP to end.',
  transactional_sms_consent_text TEXT NOT NULL DEFAULT 'I agree to receive automated transactional and service-based text messages from {brand_name} at the phone number provided. Message frequency varies. Message & data rates may apply. Reply HELP for help, STOP to end.',

  -- Brand Information for A2P (Legal)
  a2p_brand_name TEXT NOT NULL DEFAULT 'AskChad',

  -- Legal Links
  privacy_policy_url TEXT NOT NULL DEFAULT 'https://askchad.net/privacy',
  terms_of_service_url TEXT NOT NULL DEFAULT 'https://askchad.net/tos',

  -- A2P Contact Information (Compliance)
  a2p_phone TEXT NOT NULL DEFAULT '(408) 753-8176',
  a2p_email TEXT NOT NULL DEFAULT 'compliance@askchad.net',
  a2p_address TEXT,

  -- General Website Contact Information
  general_email TEXT NOT NULL DEFAULT 'info@askchad.net',
  general_phone TEXT NOT NULL DEFAULT '(408) 753-8176',
  general_brand_name TEXT NOT NULL DEFAULT 'AskChad',

  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_by UUID REFERENCES auth.users(id)
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_a2p_settings_updated_at ON public.a2p_settings(updated_at DESC);

-- Enable RLS
ALTER TABLE public.a2p_settings ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Only admins can read settings
CREATE POLICY "Admins can read A2P settings"
  ON public.a2p_settings
  FOR SELECT
  TO authenticated
  USING (
    (auth.jwt()->>'role' = 'admin' OR
     (auth.jwt()->>'app_metadata')::jsonb->>'is_admin' = 'true')
  );

-- Only admins can update settings
CREATE POLICY "Admins can update A2P settings"
  ON public.a2p_settings
  FOR UPDATE
  TO authenticated
  USING (
    (auth.jwt()->>'role' = 'admin' OR
     (auth.jwt()->>'app_metadata')::jsonb->>'is_admin' = 'true')
  )
  WITH CHECK (
    (auth.jwt()->>'role' = 'admin' OR
     (auth.jwt()->>'app_metadata')::jsonb->>'is_admin' = 'true')
  );

-- Only admins can insert settings
CREATE POLICY "Admins can insert A2P settings"
  ON public.a2p_settings
  FOR INSERT
  TO authenticated
  WITH CHECK (
    (auth.jwt()->>'role' = 'admin' OR
     (auth.jwt()->>'app_metadata')::jsonb->>'is_admin' = 'true')
  );

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
