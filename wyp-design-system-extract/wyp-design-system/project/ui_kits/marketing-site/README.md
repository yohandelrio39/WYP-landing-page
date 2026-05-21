# WYP — Marketing Site UI Kit

A pixel-aimed React recreation of the **WYP marketing / storefront** surface as described in section 7.1 of the Brandguide and inferred from the brand's positioning. This is the only product surface specified in source material (WYP is pre-launch — no app, no codebase yet exists).

## What's in here

`index.html` is an interactive single-page mockup of the brand's marketing site, including:

- **Top nav** with logotype centred, navigation left, locale & cart right
- **Hero** — full-bleed brand imagery + display headline + signature
- **Collaboration block** — `WYP × MHA` collab moment with product callout
- **Product grid** — Core / Editions / Master Series mixed
- **Manifeste section** — flat noir block with the brand statement
- **Architecture rail** — the three-tier system
- **Footer** with newsletter signup and brand metadata

## Components

| File | Role |
| --- | --- |
| `Nav.jsx` | Sticky tri-column navigation with jour/nuit theme toggle |
| `Hero.jsx` | Full-bleed editorial hero with overline + display + actions |
| `CollabBlock.jsx` | Featured collaboration callout (image + meta + CTA) |
| `ProductGrid.jsx` + `ProductCard.jsx` | Square-media product cards in a 3-column grid |
| `Manifeste.jsx` | Noir-block manifesto with system marks |
| `Architecture.jsx` | Three-tier strip (Core / Editions / Master) |
| `Footer.jsx` | Newsletter + brand metadata + lockup |
| `Primitives.jsx` | `<Button>`, `<Tag>`, `<Overline>`, `<Rule>` building blocks |

## Visual contracts (do not break)

1. **Square corners everywhere.** Default `border-radius: 0`. Pill capsules are reserved for collaboration tags.
2. **Monochrome chrome.** WYP itself never introduces colour — only collaboration imagery does.
3. **Two type weights.** Medium (500) for body & display; DemiBold (600) for emphasis & UI labels.
4. **One typeface.** BDO Grotesk for everything.
5. **Empty space is content.** Generous margins. No filler sections, no "stats" rows.
6. **Hover = opacity drop**, not a color change. (links → 0.55, buttons → full inversion noir↔blanc).

## What this kit is NOT

- It is **not the real production code** of WYP — no live site or codebase was provided.
- It **does not implement** a real cart, checkout, account, search, or CMS.
- Product imagery placeholders use the mood photography from the brandbook; real product imagery will replace these.

## Caveat

WYP is **pre-launch** as of the brandbook date (2026-02-11). All interaction patterns shown here are extrapolated from the brand-guide's visual principles, not lifted from a live surface. Treat this kit as a *high-fidelity directional* mock, not a UI spec.
