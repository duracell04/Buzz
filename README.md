# Buzz

**Buzz, no fuzz.** A Next.js + Tailwind CSS marketing and product-explainer site for a discreet, in-the-moment dating app that only buzzes when someone nearby is a strong mutual match.

## What this repo is
- Next.js 14 (pages router) + React 18, TypeScript, pnpm
- Tailwind CSS with shadcn/ui primitives and Radix under the hood
- React Query + Sonner toasts wired and ready for async work (e.g., waitlist form)
- Opinionated design tokens in `src/index.css` (HSL color system, gradients, radii)

## Quick start
```sh
pnpm install
pnpm dev
```
Then open http://localhost:3000.

## Scripts
- `pnpm dev` - start the dev server
- `pnpm build` - production build
- `pnpm start` - run the production build
- `pnpm lint` - lint with the current ESLint config

## Project structure
- `src/pages` - Next.js pages (marketing, static content)
- `src/components` - UI building blocks (hero sections, layout, shadcn/ui wrappers)
- `src/assets` - legacy raster assets (superseded by inline SVG logo)
- `public` - static assets (`logo-tile.svg`, `favicon.svg`, `favicon.ico`, `robots.txt`)

## Branding
- Primary logo: `public/logo-tile.svg` (night plum tile with honey heart and soft pulse)
- Favicon: `public/favicon.svg` (tab icon wired in `_app.tsx`)
- React logo component: `src/components/Logo.tsx` (optional heartbeat/pulse animation)
- Core palette (HSL): Night Plum `280 60% 7%`, Warm Honey `43 100% 67%`, Soft Lilac `258 100% 86%`, Off White `30 20% 97%`, Ink Grey `220 20% 15%`, Safe Green `142 71% 45%`, Soft Coral `14 100% 70%`

## Product story
### 1. What's actually going wrong in modern dating
- **Choice overload and paralysis.** Endless swiping feels like progress but behaves like doomscrolling; more choice often means less decision and satisfaction.
- **Ambiguous intentions and attachment anxiety.** "Seeing where it goes" vs. "marriage" stays undefined, fueling worry and late-stage misalignment.
- **Safety asymmetry-especially for women.** Proximity feeds feel exciting on paper but often translate to being locatable and hyper-vigilant.
- Result: people end up emotionally drained, unclear on intentions, and feeling less safe instead of more.

### 2. The core insight behind Buzz
Most apps optimize for engagement; Buzz optimizes for good, mutual, in-person moments. It:
- Moves decisions closer to reality (deciding about someone actually nearby, right now).
- Makes intentions explicit and machine-enforced ("long-term/marriage", "serious", "casual", "still figuring it out").
- Protects dignity and safety through anonymity-no map, no "people nearby" feed; a buzz is anonymous until a mutual near-simultaneous yes.

### 3. The story of a Buzz moment (zoomed in)
You set Roam to evenings in the city, never near home or work, with clear intentions (serious/long-term) and non-negotiables (e.g., non-smoker, wants kids someday, okay with your religion).

Across the room, someone with compatible settings overlaps your circle. Buzz checks: mutual must-haves, intention alignment, and whether both are open right now. If it all aligns, you both get a discreet vibration and a neutral prompt:

> "Someone who fits what you're looking for is nearby. Tap if you'd like to see if you both say yes."

A one-sided yes expires silently. A mutual yes reveals a respectful match card: intention, aligned non-negotiables, lifestyle overlaps, and a couple of shared interests.

### 4. Why this is healthier than the default
- **Less rejection trauma.** One-sided yeses vanish; the other person never knows.
- **Less anxious overthinking.** Decide about a concrete moment, not a three-day chat.
- **Clearer expectation alignment.** Intentions are foundational, not discovered in week three.
- **Increased safety and control.** Define when/where Roam works; no public map; blocking makes you disappear.
- **Encourages real-world social skills.** Buzz nudges you into saying hello instead of endless screen time.

### 5. Brand story angles
- Away from spectator dating (scrolling strangers) toward participant dating (gentle nudges when context and mutual interest align).
- Social content practically writes itself: "Why we removed the map." "Why you never see who almost said yes." "Why your non-negotiables are enforced by the app, not negotiated in DMs."
- Future testimonials: "We met because both our phones buzzed at the same time."

### 6. One sentence, distilled
"Buzz is an attempt to fix the psychological bugs in modern dating: it removes the performative feed, makes intentions explicit, protects your safety, and only nudges you when there's a real, mutual chance of connection in the same physical space."
