# Surveying Experts official website

Next.js 15, React 19, TypeScript. The official corporate website is separate from the online store.

## Run locally

```sh
npm ci
npm run dev -- --port 3100
```

For production, run `npm run build` then `npm run start`. A Node.js server is required for email enquiries. Configure Resend as described in [EMAIL_SETUP.md](EMAIL_SETUP.md); keep secrets in environment variables, never in source control.

## Structure

* `app`: routes, metadata, redirects and enquiry endpoint.
* `components/site`: active website components.
* `lib`: bilingual content and shared business data.
* `public`: images and fonts used by the website. Retain font licences.
* `scripts/check-site.cjs`: checks pages, links and images against a running server.

The root URL redirects to `/ar`. The English home is `/en`; existing English inner-page URLs remain unchanged. About and Story are combined at `/ar/about` and `/about`. Old Story URLs redirect to the history section of About.

## Validation

```sh
npm run build
node scripts/check-site.cjs
```

`node_modules`, `.next` and local environment files are required locally but are not source deliverables. Install dependencies and build afresh on the deployment host.

## Cleanup record, 7 September 2026

Unused legacy components, restoration scripts, review artefacts and unused image/font variants were moved outside this project to the sibling folder `surveying-experts-website-archive-2026-09-07`. Original source photographs were left intact. Four inactive page implementations were removed from `Pages.tsx`; the previous file is retained in the archive. The archive is not needed for deployment.
