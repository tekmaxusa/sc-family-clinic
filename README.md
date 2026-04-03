# SC Family Clinic

Plano, Texas family medicine website (React, Vite, TypeScript).

**Repository:** [github.com/tekmaxusa/sc-family-clinic](https://github.com/tekmaxusa/sc-family-clinic)

## Run locally

**Prerequisites:** Node.js

1. `npm install`
2. Optional: copy `.env.example` to `.env.local` and set `GEMINI_API_KEY` if using Gemini features.
3. `npm run dev` — open [http://localhost:3000](http://localhost:3000)

## Docker

```bash
docker compose up --build -d
```

App: [http://localhost:3000](http://localhost:3000)

Optional build-time Gemini key: `GEMINI_API_KEY=... docker compose up --build -d`
