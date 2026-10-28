# SKYWARD MEGA SCHOOL (SMS)

School management MVP with a responsive navy blue, teal, and white interface.

## Run locally

Requires Node.js 24.13+ and npm.

```sh
npm ci
npm run dev
```

Open `/portal/login`. Set `ENABLE_DEMO=true` in `.env.local` to explore fictional school records through the expandable demo section. Staff, student, finance, attendance, assessments, notices, receipts, and school administration share one portal with role-based navigation.

## Check

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

## Hosting

Netlify builds the Next.js application using `netlify.toml`. The `@netlify/database` package provisions PostgreSQL and applies committed migrations from `netlify/database/migrations/`. Private backups use Netlify Blobs. Local development uses SQLite in the ignored `.data/` directory. `.env.local`, `.netlify/`, and local school records are excluded from Git.

This MVP includes fictional demonstration records inherited from the earlier school portal. Existing account identifiers are retained for compatibility. Live payment transfer, email, and SMS delivery are not connected. Configure individual school accounts before introducing real school records.

The SMS monogram is a temporary identity mark. School contact details, address, and motto have not been supplied.

See [the workflow guide](docs/MVP-WALKTHROUGH.md) for the existing modules. Some historical implementation notes retain earlier project names.
