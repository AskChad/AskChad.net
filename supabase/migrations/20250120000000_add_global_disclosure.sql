-- Add Global Disclosure and Clarification column to a2p_settings
-- This text appears below the SMS consent checkboxes on contact forms

ALTER TABLE public.a2p_settings
ADD COLUMN IF NOT EXISTS global_disclosure_text TEXT NOT NULL DEFAULT 'By submitting this form, you agree to receive conversational SMS messages from {brand_name}. Message frequency may vary, with an average of 1–2 messages per month. Message and data rates may apply. Reply HELP for assistance or STOP to opt out at any time. {brand_name} sends only conversational messages based on user inquiries.';

-- Update the default settings row with the new column
UPDATE public.a2p_settings
SET global_disclosure_text = 'By submitting this form, you agree to receive conversational SMS messages from {brand_name}. Message frequency may vary, with an average of 1–2 messages per month. Message and data rates may apply. Reply HELP for assistance or STOP to opt out at any time. {brand_name} sends only conversational messages based on user inquiries.'
WHERE id = '00000000-0000-0000-0000-000000000001'
AND global_disclosure_text IS NULL;
