-- Rename columns to match frontend interface
-- This migration renames existing columns from the initial migration

-- Check if old columns exist and rename them
DO $$
BEGIN
  -- Rename SMS consent columns
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='a2p_settings' AND column_name='marketing_sms_consent_text') THEN
    ALTER TABLE public.a2p_settings RENAME COLUMN marketing_sms_consent_text TO marketing_consent_text;
  END IF;

  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='a2p_settings' AND column_name='transactional_sms_consent_text') THEN
    ALTER TABLE public.a2p_settings RENAME COLUMN transactional_sms_consent_text TO transactional_consent_text;
  END IF;

  -- Rename brand/contact columns
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='a2p_settings' AND column_name='a2p_brand_name') THEN
    ALTER TABLE public.a2p_settings RENAME COLUMN a2p_brand_name TO company_name_old;
  END IF;

  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='a2p_settings' AND column_name='general_brand_name') THEN
    ALTER TABLE public.a2p_settings RENAME COLUMN general_brand_name TO company_name;
  END IF;

  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='a2p_settings' AND column_name='general_email') THEN
    ALTER TABLE public.a2p_settings RENAME COLUMN general_email TO support_email;
  END IF;

  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='a2p_settings' AND column_name='general_phone') THEN
    ALTER TABLE public.a2p_settings RENAME COLUMN general_phone TO support_phone;
  END IF;
END $$;

-- Add missing columns if they don't exist
ALTER TABLE public.a2p_settings
  ADD COLUMN IF NOT EXISTS business_hours TEXT DEFAULT 'Mon-Fri, 9 AM - 5 PM';

ALTER TABLE public.a2p_settings
  ADD COLUMN IF NOT EXISTS time_zone TEXT DEFAULT 'PST';
