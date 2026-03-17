---
phase: implementation
status: active
session: 1
updated: 2026-03-17
---

# Doran Landing Page — Progress

> Side project — separate from main Doran SaaS development.

## Current Status

- **Phase**: implementation complete (design iteration in progress)
- **Next**: brand asset replacement (illustrations, color, typography finalization) → Mailchimp setup → deploy
- **Blockers**: None
- **Branch**: `feat/landing-page` (12 commits)

## Known Issues

- Placeholder illustrations (CSS-only people scene, paper boat SVG) — needs real brand illustrations
- Color palette / typography not finalized from brand design session
- Mailchimp form action URL placeholder
- OG image not created (manual step)
- Analytics (Plausible) not set up

## Next Actions

1. Brand design session → illustrations, color palette, typography
2. Mailchimp account setup + form action URL
3. OG image creation (1200x630)
4. Plausible analytics setup (self-host on Coolify or cloud)
5. Domain setup (doran.kr / getdoran.com)
6. Deploy to Coolify (static site on Hetzner)
7. Merge `feat/landing-page` → `main`

## S1 — 2026-03-17

**Goal**: Landing page brainstorming → design spec → implementation plan → build → visual redesign

**Done**:
- [x] Brainstorming: purpose, traffic, tone, structure, differentiation
- [x] 5-section emotional journey design (그리움→현실→해방→비전→온기)
- [x] 도란방 vision concept as core differentiator from Clova Note
- [x] Design spec written + 2-pass review (3 CRITICAL fixed)
- [x] Implementation plan: 9 tasks, 3 chunks
- [x] Full implementation via subagent-driven development
- [x] Visual redesign v1 (Korean Literary Warmth)
- [x] Visual redesign v2 (5 issues fixed: layout, contrast, visuals, cards, service clarity)
- [x] Mobile responsive fix (section heading centering)
- [x] 16 decisions recorded

**Changed**: `landing/` directory (9 files), `docs/superpowers/specs/`, `docs/superpowers/plans/`
