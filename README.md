# react-rsc-saas-starter

> 🚀 Modern SaaS starter built with Next.js (App Router, RSC), Auth.js, Stripe, Prisma, S3, and Resend — a full-stack foundation for fast, scalable web apps.

---

## 🧠 Overview

The **React RSC SaaS Starter** is a production-ready boilerplate that demonstrates how to build, structure, and scale a full-stack SaaS application using the latest web technologies. It leverages **Next.js 14 (App Router)**, **React Server Components**, **TypeScript**, and a fully integrated backend including **authentication**, **billing**, **file uploads**, and **email delivery**.

This starter is designed to help developers move from prototype to production quickly while maintaining best practices for code quality, security, and performance.

---

## ⚙️ Features

* 🔐 **Auth.js + Prisma** — Authentication using Credentials provider and Prisma adapter (SQLite dev-ready)
* 💳 **Stripe Billing** — Subscription checkout and webhook integration
* ☁️ **AWS S3 Uploads** — Secure signed URLs for client-side file uploads
* ✉️ **Resend Email API** — Transactional and onboarding emails
* 🧱 **Next.js 14 (App Router)** — Server Components, Route Handlers, Server Actions
* 🧩 **TanStack Query + Zustand** — Data fetching and global state management
* 🧪 **Vitest + Playwright** — Unit and E2E testing setup with CI
* 🧰 **TypeScript + Zod** — Strong typing and input validation
* 🧱 **Prisma ORM** — Database models, migrations, and schema validation
* ⚙️ **GitHub Actions CI** — Automated build, lint, test, and E2E pipeline

---

## 🧩 Stack

| Layer        | Technology                          |
| ------------ | ----------------------------------- |
| Frontend     | Next.js 14 (RSC, App Router)        |
| Backend      | Next.js API Routes / Route Handlers |
| Auth         | Auth.js (NextAuth) + Prisma Adapter |
| Database     | Prisma ORM (SQLite dev)             |
| Payments     | Stripe (Subscription mode)          |
| File Uploads | AWS S3 (signed URL)                 |
| Email        | Resend API                          |
| State        | TanStack Query + Zustand            |
| Validation   | Zod                                 |
| Tests        | Vitest (unit) + Playwright (E2E)    |
| CI/CD        | GitHub Actions                      |

---

## 🏗️ Project Structure

```
react-rsc-saas-starter/
├── app/                     # Next.js App Router pages and APIs
│   ├── api/                 # API routes (auth, stripe, uploads, email)
│   ├── dashboard/           # Protected dashboard route
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Landing page
├── components/              # Reusable client components
├── lib/                     # Utility modules (db, auth, email, store)
├── prisma/                  # Prisma schema and migrations
├── public/                  # Static assets
├── tests/                   # Unit tests (Vitest)
├── e2e/                     # E2E tests (Playwright)
├── .github/workflows/ci.yml # Continuous Integration pipeline
├── .env.example             # Example environment variables
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── README.md
```

---

## ⚡ Quick Start

### 1️⃣ Install dependencies

```bash
pnpm install
```

### 2️⃣ Copy and configure environment variables

```bash
cp .env.example .env
```

Edit `.env` with your API keys and secrets.

### 3️⃣ Setup database

```bash
pnpm prisma migrate dev --name init
```

### 4️⃣ Run the development server

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 🔧 Environment Variables

| Variable                | Description                                  |
| ----------------------- | -------------------------------------------- |
| `NEXTAUTH_URL`          | Base URL of your application                 |
| `NEXTAUTH_SECRET`       | Secret for Auth.js sessions                  |
| `DATABASE_URL`          | Prisma connection string (SQLite by default) |
| `STRIPE_SECRET_KEY`     | Stripe API key                               |
| `STRIPE_PRICE_ID`       | Stripe price ID for subscriptions            |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret                |
| `AWS_S3_BUCKET`         | S3 bucket name for uploads                   |
| `AWS_REGION`            | S3 region                                    |
| `AWS_ACCESS_KEY_ID`     | AWS access key                               |
| `AWS_SECRET_ACCESS_KEY` | AWS secret key                               |
| `RESEND_API_KEY`        | Resend API key for emails                    |
| `FROM_EMAIL`            | Default sender email address                 |

---

## 💳 Stripe Integration

This starter includes a ready-to-use subscription flow:

* `POST /api/stripe/checkout` — creates a Stripe Checkout session
* `POST /api/stripe/webhook` — handles subscription events (stubbed)

You can listen for webhooks locally:

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

---

## ☁️ AWS S3 File Uploads

`POST /api/upload` returns a signed URL for client uploads.

```bash
curl -X POST http://localhost:3000/api/upload
```

Use the returned `url` to `PUT` a file directly to S3.

---

## ✉️ Resend Emails

Send transactional emails via the `/api/email` route.

```bash
curl -X POST http://localhost:3000/api/email -d '{"to":"user@example.com"}' -H 'Content-Type: application/json'
```

---

## 🧪 Testing

### Unit Tests (Vitest)

```bash
pnpm test
```

### E2E Tests (Playwright)

```bash
pnpm e2e
```

GitHub Actions will run both test suites automatically on push.

---

## 🧰 Tooling & Dev Experience

* TypeScript strict mode
* ESLint & Prettier configured
* Husky pre-commit ready
* SQLite local dev DB with Prisma
* Modern UI ready for Tailwind or Shadcn integration

---

## 🧭 Roadmap

* [ ] Add OAuth providers (GitHub, Google)
* [ ] Add email verification & password reset
* [ ] Add usage-based billing (Stripe metered)
* [ ] Add file previews for uploads
* [ ] Add user/team multi-tenancy support

---

## 🌟 Support

If you find this project useful, please ⭐ it on [GitHub](https://github.com/joseph-caughey-labs/react-rsc-saas-starter) and share it with other developers building SaaS products!


## MIT License

Copyright (c) 2025 Joseph Caughey (https://www.josephcaughey.com
)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
