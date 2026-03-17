# Doran Landing Page — Decision Records

> All decisions made during landing page design and implementation.

| # | Decision | Why | S |
|---|----------|-----|---|
| 1 | Pre-launch waitlist page (not launch/pitch) | Product not built yet. Collect interest + validate messaging | 1 |
| 2 | Traffic: direct sharing + SEO | No paid ads for pre-launch. KakaoTalk links + organic search keywords | 1 |
| 3 | Brand tone consistent with IS-008/IS-013 | Landing page = first brand touchpoint. Must match product tone | 1 |
| 4 | "일" not "행정" in user-facing copy | "행정" is internal language. Target users say "일" (work/chores), "정리" (organize) | 1 |
| 5 | 5-section emotional journey structure | 그리움→현실→해방→비전→온기. Story arc, not feature list. Differentiates from Clova Note | 1 |
| 6 | All three emotions mixed: 그리움 + 해방감 + 온기 | Not one dominant emotion — the journey IS the experience | 1 |
| 7 | 도란방 as vision differentiator (post-MVP) | Core difference from Clova Note: shared community space, not file output. "우리가 만들어 갈" framing prevents overpromising | 1 |
| 8 | `landing/` folder in main repo (not separate repo) | Independent from Next.js app but same repo. Post-launch: redirect or absorb into main app | 1 |
| 9 | Static HTML/CSS, no JS framework | Pre-launch page needs fast load, no build step. Plain HTML sufficient | 1 |
| 10 | Mailchimp embedded form (no custom backend) | Free tier, PIPA-compatible, embeddable form = zero backend | 1 |
| 11 | Plausible analytics (cookie-free) | Avoid cookie consent banner. Self-hostable on existing Coolify | 1 |
| 12 | Inline privacy consent (not checkbox) | Korean PIPA allows implied consent for minimal data (email only) with clear disclosure | 1 |
| 13 | Noto Serif KR for display typography | Literary warmth. Korean serif. Stronger visual weight than Gowun Batang for headings | 1 |
| 14 | 2-column hero layout (text left, visual right) | Industry standard SaaS hero. Left-aligned text for reading flow, visual for emotional impact | 1 |
| 15 | Centered 3-column pain cards with SVG icons | Balanced layout. Icons make each pain point immediately scannable | 1 |
| 16 | Recording→Doran→Deliverables flow diagram | Makes the service tangible. Visitors understand the mechanism without reading paragraphs | 1 |

**S column**: Session number where decision was made.

---

## Decision Detail

### D5: 5-Section Emotional Journey

The landing page is NOT a feature list. It's a story arc:

```
그리움 (nostalgia) → 현실 (pain) → 해방 (liberation) → 비전 (vision!) → 온기 (warmth)
```

Section 4 (비전) is where visitors realize "this is NOT a meeting notes app." The 도란방 concept creates a category distinction from Clova Note.

### D7: 도란방 as Vision (Post-MVP)

The 도란방 is not in MVP scope. It's presented on the landing page as the direction Doran is heading. Key framing: "우리가 만들어 갈 도란방" — builds anticipation without overpromising. Development starts immediately after MVP completion.

### D4: Word Choice

| Internal docs | Landing page |
|--------------|-------------|
| 행정 (administration) | 일 (work/chores) |
| 산출물 (deliverables) | 회의록, 할 일, 안건 (concrete terms) |
| AI agent pipeline | (never mentioned) |

AI is invisible on the landing page. Never say "AI가 해줍니다."
