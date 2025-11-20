-- Drop the old content_pages table
DROP TABLE IF EXISTS public.content_pages CASCADE;

-- Create content_sections table for section-based content management
CREATE TABLE IF NOT EXISTS public.content_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Page and section identifiers
  page_type TEXT NOT NULL CHECK (page_type IN ('privacy_policy', 'terms_of_service')),
  section_key TEXT NOT NULL,

  -- Section content
  title TEXT NOT NULL,
  content TEXT NOT NULL,

  -- Display settings
  display_order INTEGER NOT NULL,
  enabled BOOLEAN NOT NULL DEFAULT true,

  -- Metadata
  effective_date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_by UUID REFERENCES auth.users(id),

  -- Ensure unique section keys per page type
  UNIQUE(page_type, section_key)
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_content_sections_page_type ON public.content_sections(page_type);
CREATE INDEX IF NOT EXISTS idx_content_sections_order ON public.content_sections(page_type, display_order);

-- Enable RLS
ALTER TABLE public.content_sections ENABLE ROW LEVEL SECURITY;

-- Public can read enabled content sections
CREATE POLICY "Anyone can read enabled content sections"
  ON public.content_sections
  FOR SELECT
  TO public
  USING (enabled = true);

-- Only admins can update content sections
CREATE POLICY "Admins can update content sections"
  ON public.content_sections
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

-- Only admins can insert content sections
CREATE POLICY "Admins can insert content sections"
  ON public.content_sections
  FOR INSERT
  TO authenticated
  WITH CHECK (
    (auth.jwt()->>'role' = 'admin' OR
     (auth.jwt()->>'app_metadata')::jsonb->>'is_admin' = 'true')
  );

-- Only admins can delete content sections
CREATE POLICY "Admins can delete content sections"
  ON public.content_sections
  FOR DELETE
  TO authenticated
  USING (
    (auth.jwt()->>'role' = 'admin' OR
     (auth.jwt()->>'app_metadata')::jsonb->>'is_admin' = 'true')
  );

-- Insert Privacy Policy sections
INSERT INTO public.content_sections (page_type, section_key, title, content, display_order) VALUES
('privacy_policy', 'introduction', '1. Introduction',
'AskChad ("we," "our," "us") values your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website, enroll in our SMS program AskChad SMS Messaging Program, or interact with our services.

By using our website or opting in to receive text messages, you agree to this Privacy Policy.', 1),

('privacy_policy', 'information_collect', '2. Information We Collect',
'We may collect:

- Personal information (name, phone number, email, address) you provide when opting in or contacting support.
- Technical data (IP address, device type, browser type) collected automatically.
- Communication data related to your participation in AskChad SMS Messaging Program (e.g., opt-in status, delivery confirmations).', 2),

('privacy_policy', 'information_use', '3. How We Use Your Information',
'We use your information to:

- Send marketing, transactional, and customer support text updates messages through our SMS program.
- Respond to customer inquiries.
- Improve our products and services.
- Comply with legal obligations.', 3),

('privacy_policy', 'mobile_information', '4. Mobile Information and Text Messaging',
'> **IMPORTANT: No Marketing or Sale of Mobile Information**
>
> **No mobile information will be shared with third parties/affiliates for marketing or promotional purposes.**
>
> Information sharing to subcontractors in support services, such as customer service, is permitted.
>
> **All other use-case categories exclude text-messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the text-message services.**
>
> Text-messaging originator opt-in data and consent will not be shared with any third parties except for aggregators and providers of the text-message services who enable delivery on our behalf.', 4),

('privacy_policy', 'information_sharing', '5. How We Share Information',
'We may share information only as follows:

- With service providers who perform operational tasks (hosting, analytics, messaging delivery).
- To comply with law, regulation, or legal process.
- In connection with a merger, sale, or asset transfer.

> **All the above categories exclude text-messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the text-message services.**', 5),

('privacy_policy', 'data_security', '6. Data Security and Unauthorized Sharing Prevention',
'We implement reasonable security measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction.

### Strict Policy Against Unauthorized Data Sharing

**We are committed to protecting your data and will NOT transfer your consumer data to external organizations under any circumstances, except as explicitly stated in this Privacy Policy.**

We have implemented strict measures to prevent unauthorized sharing of user data, including:

- **Role-based access controls** limiting data access to authorized personnel only
- **Data encryption** both in transit and at rest
- **Regular security audits** and compliance reviews
- **Employee training** on data protection and privacy practices
- **Monitoring and logging** of all data access and transfers
- **Vendor agreements** requiring strict confidentiality and data protection

Any breach of these security measures will be promptly investigated, and affected users will be notified in accordance with applicable law.', 6),

('privacy_policy', 'user_rights', '7. Your Rights and Choices',
'### Complete Opt-Out Instructions

**To stop receiving SMS messages, you can use any of the following methods:**

- **Text STOP, STOPALL, CANCEL, UNSUBSCRIBE, END, or QUIT** to the number from which you received messages
- **Reply to any text message** with a clear opt-out request (e.g., "Leave me alone", "Unsubscribe me")
- **Email us** at [compliance@askchad.net](mailto:compliance@askchad.net) with your opt-out request
- **Call us** at [(408) 753-8176](tel:+14087538176) to request removal

**We will process your opt-out request within 5 minutes** and you may receive one final confirmation message confirming your opt-out status.

You may also:

- Request access to your personal data
- Request correction or deletion of your data
- Request a copy of your data
- Object to processing of your data

For any of these requests, please contact us using the information in the "Contact Us" section below.', 7),

('privacy_policy', 'contact_us', '8. How to Contact Us / Customer Support',
'**For questions about this Privacy Policy, our SMS messaging program, data practices, or to exercise your privacy rights, you can contact us using any of the following methods:**

### AskChad - Customer Support

**📧 Email:**
[compliance@askchad.net](mailto:compliance@askchad.net)
Response time: Within 24-48 hours

**📞 Phone:**
[(408) 753-8176](tel:+14087538176)
Business Hours: Monday-Friday, 9 AM - 5 PM PST

**🌐 Website:**
[www.askchad.net/contact](https://askchad.net/contact)
Submit a support request through our contact form

**📱 SMS Help:**
Text **HELP** to the number from which you received messages
For immediate assistance with SMS-related questions

**Important:** For SMS opt-out requests, please see Section 7 "Your Rights and Choices" above for complete instructions on how to stop receiving messages.', 8),

('privacy_policy', 'policy_updates', '9. Updates to This Policy',
'We may update this Privacy Policy periodically. Updates take effect on the Effective Date shown above.', 9);

-- Insert Terms of Service sections
INSERT INTO public.content_sections (page_type, section_key, title, content, display_order) VALUES
('terms_of_service', 'acceptance', '1. Acceptance of Terms',
'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.', 1),

('terms_of_service', 'use_license', '2. Use License',
'Permission is granted to temporarily download one copy of the materials on AskChad''s website for personal, non-commercial transitory viewing only.', 2),

('terms_of_service', 'disclaimer', '3. Disclaimer',
'The materials on AskChad''s website are provided on an ''as is'' basis. AskChad makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.', 3),

('terms_of_service', 'limitations', '4. Limitations',
'In no event shall AskChad or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AskChad''s website.', 4),

('terms_of_service', 'accuracy', '5. Accuracy of Materials',
'The materials appearing on AskChad''s website could include technical, typographical, or photographic errors. AskChad does not warrant that any of the materials on its website are accurate, complete or current.', 5),

('terms_of_service', 'links', '6. Links',
'AskChad has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site.', 6),

('terms_of_service', 'modifications', '7. Modifications',
'AskChad may revise these terms of service for its website at any time without notice.', 7),

('terms_of_service', 'governing_law', '8. Governing Law',
'These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that location.', 8);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_content_sections_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger
CREATE TRIGGER set_content_sections_updated_at
  BEFORE UPDATE ON public.content_sections
  FOR EACH ROW
  EXECUTE FUNCTION update_content_sections_updated_at();
