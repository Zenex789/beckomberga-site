# Beckomberga Entreprenad — Ny hemsida

Next.js + Tailwind CSS webbplats för Beckomberga Entreprenad AB.

## Kom igång

```bash
npm install
cp .env.local.example .env.local
# Fyll i .env.local (se nedan)
npm run dev
```

Öppna http://localhost:3000

## Miljövariabler (.env.local)

### Google Places API (Google-recensioner)
1. Gå till [Google Cloud Console](https://console.cloud.google.com)
2. Skapa ett projekt och aktivera **Places API**
3. Skapa en API-nyckel → `GOOGLE_PLACES_API_KEY`
4. Hitta ditt Place ID på developers.google.com/maps/documentation/places → `GOOGLE_PLACE_ID`

*Om variablerna saknas visas ett statiskt omdömesskort med Reco 4.9 istället.*

### Supabase (offert-formulär)
1. Skapa ett projekt på [supabase.com](https://supabase.com)
2. Kopiera URL och nycklar till `.env.local`
3. Skapa tabellen i Supabase SQL-editorn:

```sql
create table leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  email text not null,
  phone text,
  service text,
  message text not null
);
alter table leads enable row level security;
```

*Om Supabase inte är konfigurerat loggas formuläret till serverns konsol istället.*

## Foton att ersätta

Alla bildplatshållare är märkta med `TODO:` i koden. Lägg foton i `public/` och uppdatera:
- `src/content/services.ts` — tjänstbilder (coverPlaceholder, gallery)
- `src/app/projekt/page.tsx` — projektgalleri och före/efter-sliders

## Driftsättning på Vercel

1. Pusha till GitHub
2. Importera i [Vercel](https://vercel.com)
3. Lägg till miljövariabler under Settings → Environment Variables
4. Deploya
