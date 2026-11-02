# Electrica

Electrica is a bilingual website for electrical, networking and computer services. It is built with Next.js App Router, TypeScript, Tailwind CSS and `next-intl`, with English and French routes.

## Requirements

- Node.js 20 or later
- npm

## Development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site supports English and French; locale routes are handled by the `next-intl` middleware.

## Contact email configuration

The contact form sends a notification and a confirmation email through Resend. Set these server-side environment variables before deploying:

```text
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=Electrica <contact@your-verified-domain.example>
RESEND_TO_EMAIL=the-inbox-that-receives-enquiries@example.com
```

`RESEND_API_KEY` is required. The sender and destination default to the current Resend onboarding sender and Electrica inbox if their optional variables are not set. For production, verify your sending domain with Resend and configure a sender address on that domain.

Protect the public contact endpoint with deployment-level rate limiting or a CAPTCHA before launch; process-local limits are unreliable across serverless instances.

## Quality checks and production

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

Keep secrets in your hosting provider’s environment settings or an ignored local `.env.local` file; do not commit them.
