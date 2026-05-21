---
name: wyp-design
description: Use this skill to generate well-branded interfaces and assets for WYP (Watch Your Passion) — a contemporary Genevan watchmaking brand built around minimal monochrome design, the BDO Grotesk typeface, and a manga-led collaboration model. Suitable for production code, marketing mocks, throwaway prototypes, slide decks, and product UI.
user-invocable: true
---

Read the `README.md` file within this skill first, then explore the other available files:

- `colors_and_type.css` — every token: palette, type scale, spacing, motion, radii, shadows. Always link this stylesheet (or copy its vars) into any artifact.
- `fonts/` — the seven BDO Grotesk weights as `.woff2`. Always serve these locally; do not substitute Inter/Helvetica unless explicitly forced.
- `assets/logos/` — official WYP marks: icon, logotype, three lock-ups, three colorways each. Use `_NOIR` on light surfaces, `_BLANC` on dark, `_ARGENT` for print only.
- `assets/icons/` — the brand's "lune" (moon) icon, for the jour/nuit theme toggle.
- `assets/imagery/` — brand photography and sample collaboration artwork (My Hero Academia / Midoriya). Use as the only acceptable non-flat backgrounds.
- `reference/` — the original Hyperbien PDFs (brandbook + brandguide + palette) — source of truth for any ambiguous decision.
- `preview/` — small HTML cards showing each token cluster in isolation. Useful as visual reference.
- `ui_kits/marketing-site/` — high-fidelity React component recreations: Nav, Hero, CollabBlock, ProductGrid + ProductCard, Manifeste, Architecture, Footer, plus shared primitives.

If creating **visual artifacts** (slides, mocks, throwaway prototypes, etc.), copy assets out of this skill into your project and create static HTML files for the user to view. Always include `colors_and_type.css` at the top of the document and font-face the BDO Grotesk family.

If working on **production code**, copy assets and read the rules here to become an expert in designing with this brand. The non-negotiables are:

1. **Three colors only.** Noir `#0B0B0C`, argent `#A3A3A3`, blanc `#F5F5F5`. Colour beyond this belongs to the collaboration, not to WYP itself.
2. **One typeface.** BDO Grotesk, Medium (500) and DemiBold (600) for almost everything.
3. **Default `border-radius: 0`.** Pill capsules only on collaboration / numbered-edition chips.
4. **No emoji. No gradients. No bouncy springs. No filler content.**
5. **Voice is maîtrisé · clair · assumé · posé.** Never adolescent, never cold, never urgent-commercial. State, don't sell.
6. **Empty space is content.** Generous margins. One image + one block of text beats a multi-column dashboard every time.
7. **The Horizon line** (bar + half-circle) is the brand's structural repeating motif. Use it as a rule, not as decoration.

If the user invokes this skill without any other guidance, ask what they want to build or design, ask focused questions about audience and surface (product, marketing, deck, social), then act as an expert designer who outputs HTML artifacts **or** production code, depending on the need. Default register: French (Geneva is the home market); switch to English when the user prompts in English.
