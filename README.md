This is a [Next.js](https://nextjs.org) portfolio for Jay Shrivastava.

## Getting Started

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_FORMSPREE_ID` | For the contact form | Formspree form ID (from [formspree.io](https://formspree.io)). Without it, the contact section falls back to mailto. |
| `NEXT_PUBLIC_FREELANCE_AVAILABLE` | No | Set to `true` to show freelance availability messaging on `/freelance`. |

Example `.env.local`:

```bash
NEXT_PUBLIC_FORMSPREE_ID=your_form_id
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## Deploy on Vercel

The easiest way to deploy this app is with the [Vercel Platform](https://vercel.com/new).
