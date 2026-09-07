# Website enquiry email

Set RESEND_API_KEY and ENQUIRY_FROM_EMAIL in server environment settings (or .env.local locally). Verify the sending domain in Resend before enabling the sender. Never use NEXT_PUBLIC variables for these values.

Messages go to the existing Sales address in lib/site.ts; the visitor address is Reply-To. Restart the server after setting environment variables. Without configuration, submission returns an unavailable response and preserves the enquiry for retry or WhatsApp. No successful-delivery claim is shown before Resend accepts the message.

Before public launch, configure host-level rate limiting / bot protection for POST /api/enquiry and verify one authorized end-to-end email. The endpoint validates origin, payload, email and honeypot, uses a fixed recipient, and passes an idempotency key to Resend. API acceptance does not guarantee inbox delivery. No live message was sent during local verification.
