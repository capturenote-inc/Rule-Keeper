# CLAUDE.md — Rule Keeper
> Generated 2026-03-24. Updated 2026-03-24. Read this completely before every session.

---

## 01. PRODUCT OVERVIEW

**Name:** Rule Keeper
**Pitch:** Get them rules straight
**Metaphor:** A digital rulebook with a built-in referee
**Value created:** Save time, ditch the manual, enjoy the game!
**Revenue model:** Freemium (free tier + paid subscription)
**Business type:** B2C mobile app

---

## 02. THE PROBLEM

**Core problem:**
Board game manuals are getting bigger and more complex. When you're new to a game, or returning after a break, re-reading the rulebook can take 30–60 minutes. During gameplay, players constantly need to stop and look up rules — this kills momentum and breaks the fun.

**Current workarounds:**
Players re-read the manual, guess, or look things up on YouTube or forums. All of these break game flow.

**Why current solutions fail:**
Too slow, too scattered, and too likely to spoil the game. There's a real chance you've been playing wrong the whole time.

**Frequency:** Weekly
**Pain level:** 3/5

---

## 03. THE USER

**Primary user persona:**
A board game enthusiast who plays lots of different adult board games — complex, strategic, extensive ones. They play often but across many titles, so they never fully master one. They always end up back in the rulebook. They want to enjoy the game, not study for it.

**Technical level:** Non-technical

**Top frustrations:**
  1. Wasting time reading rules instead of playing
  2. Not being sure if they're playing correctly
  3. Constantly going back and forth to the manual mid-game

---

## 04. THE SOLUTION

**What it does:**
Rule Keeper is a mobile and tablet app where players can instantly access the rules for any game in their library. Rules are broken into clear, scannable chunks. If players have a specific question, they can ask the built-in AI assistant, which has the rulebook embedded and answers in plain, simple language.

**Core magic:**
AI answers rule questions instantly, in dummy-proof language, scoped strictly to that game's rulebook.

**What it does NOT do:**
- The AI does not answer anything outside the rulebook for that game
- The AI does not give strategies, tips, or winning advice
- It only explains how the game works — nothing more

---

## 05. MVP DEFINITION

**Simplest version with real value:**
A game library with a working AI rule assistant.

**MVP features (must ship):**
  1. Dashboard — recent games + search bar
  2. Game library — browse and add games to My Library
  3. Chunked rulebook per game — scannable, expandable sections
  4. AI rule assistant — ask questions, get answers scoped to that game

**V2 backlog:**
  1. House system — create a house, invite players, share the same library
  2. House rules — set custom rules per game that the AI also understands
  3. Language toggle
  4. Score tracker for games that support it

**Out of scope for MVP:**
  - Social features
  - User-generated content
  - Strategy or tips mode
  - Web version

---

## 06. SUCCESS & VISION

**12-month success:**
A freemium app live on the App Store and Google Play. Download targets to be confirmed — this is a new market for the founder.

**The aha moment:**
The first time a user asks a rule question mid-game and gets the right answer in 5 seconds instead of flipping through a 40-page booklet.

**Key metrics:**
  Not yet defined — to be confirmed post-launch

**Launch target:** MVP in two weeks via vibe-coding sprint

**First users:**
Partner, neighbors, colleagues, friends

**Biggest risk:**
Zero engagement after launch. Market size is still unvalidated.

---

## 07. TECH STACK

| Layer | Choice |
|---|---|
| Frontend | Expo (React Native) — one codebase for iOS and Android |
| Navigation | Expo Router (file-based, like Next.js) |
| Styling | NativeWind (Tailwind CSS for React Native) |
| Backend | Supabase |
| Database | Supabase (Postgres) |
| Auth | Supabase Auth |
| AI | Claude API (Anthropic) — claude-sonnet-4-20250514 |
| Payments | Stripe |
| Hosting | Vercel (web surfaces, marketing page, webhooks only) |
| Starting point | Blank Expo project |

**Important note on hosting:**
The Expo app ships directly to the App Store and Play Store — Vercel does not host the mobile app itself. Vercel is only used for any web-facing surfaces (marketing page, Stripe webhooks, edge functions if needed).

**Folder structure:**
```
/app          → screens (Expo Router file-based navigation)
/components   → reusable UI components
/lib          → Supabase client, API helpers, utilities
/assets       → fonts, images, icons
```

**Conventions:**
- Non-technical product owner working with Claude Code
- Always explain choices clearly — assume no coding background
- Prefer explicit, readable code over clever abstractions
- Use TypeScript throughout
- Comment any logic that isn't immediately obvious

---

## 08. UX & DESIGN

**Platform(s):** iOS, Android, Tablet
**Constraints:** Must work flawlessly on all target platforms
**Default theme:** Follow the device system setting (auto dark / light)

---

### Design system — locked ✓

The visual direction was decided after an extensive design sprint (13 directions explored). The final system is called **Arcade** and has two modes that share the same layout, typography, component structure, and gradient hero — only the colour palette changes between dark and light.

---

### Dark Mode — colour tokens

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#0A0614` | Screen background |
| `--surface` | `#120E22` | Cards, inputs |
| `--surface2` | `#1A1530` | Nested surfaces, search bar |
| `--border` | `#2C2450` | All borders |
| `--text` | `#F0ECFF` | Primary text |
| `--muted` | `#9888C8` | Secondary text |
| `--faint` | `#48408A` | Placeholder, inactive icons |
| `--grad` | `linear-gradient(135deg, #9333EA, #EC4899)` | Hero, buttons, active states |
| `--accent` | `#C084FC` | Active nav, highlights |
| `--accent2` | `#F472B6` | Secondary accent (pink) |
| `--grad-soft` | `linear-gradient(135deg, rgba(147,51,234,.18), rgba(236,72,153,.12))` | AI bubble background |

**Ambient glows:**
- Top-right: `radial-gradient(circle, rgba(147,51,234,.10), transparent 70%)`
- Bottom-left: `radial-gradient(circle, rgba(236,72,153,.08), transparent 70%)`

---

### Light Mode — Forest & Gold — colour tokens

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#F6FAF4` | Screen background |
| `--surface` | `#FFFFFF` | Cards, inputs |
| `--surface2` | `#EAF4E4` | Nested surfaces, search bar |
| `--border` | `#C8DCC0` | All borders |
| `--text` | `#081A08` | Primary text |
| `--muted` | `#285028` | Secondary text |
| `--faint` | `#90B888` | Placeholder, inactive icons |
| `--grad` | `linear-gradient(135deg, #1E6020, #A07810)` | Hero, buttons, active states |
| `--accent` | `#206820` | Active nav, highlights |
| `--accent2` | `#B88010` | Gold accent |
| `--grad-soft` | `linear-gradient(135deg, rgba(30,96,32,.07), rgba(160,120,16,.05))` | AI bubble background |

---

### Typography

| Use | Font | Weight | Notes |
|---|---|---|---|
| Display / headings | Nunito | 900 (Black) | Letter-spacing `-.02em` |
| Hero italic accent | Fraunces | 500–700 italic | Used sparingly — e.g. "play?" in hero |
| Body / UI labels | Nunito | 600–800 | Buttons, card names, metadata labels |
| Monospace / tags | DM Mono | 400–500 | Eyebrows, timestamps, number tags, placeholders |

---

### Component patterns

**Dashboard hero card**
- Full-width rounded card, `border-radius: 26px`, gradient fill
- Eyebrow in DM Mono uppercase, large Nunito 900 title, Fraunces italic for one word
- Decorative emoji bottom-right at low opacity
- Shadow: `0 8px 32px rgba(primary-colour, .25)`

**Game cards**
- 2-column grid, `border-radius: 20px`
- Square cover area (1:1 ratio), large emoji centred
- Bottom accent line: 2px height, gradient fill
- Saved pip: gradient circle top-right, white checkmark inside
- Name: Nunito 800. Meta: DM Mono 10px faint

**AI answer bubble**
- Background: `--grad-soft`
- Border: 1px solid accent at low opacity, `border-radius: 20px`, bottom-left corner `6px`
- Label: DM Mono uppercase, accent colour
- Body: Nunito 600 muted, `<strong>` tags render in full `--text` colour

**Rule chunks (expandable)**
- `border-radius: 18px`, surface background
- Number tag: DM Mono, accent colour, soft accent background, `border-radius: 8px`
- Title: Nunito 800 text colour
- Chevron rotates 180° on open (CSS transition)
- Body: Nunito 600 muted, 1.7 line-height

**AI ask bar**
- Pinned above bottom nav, `border-top: 1px solid --border`
- Input row: `--surface2` background, gradient border at low opacity, `border-radius: 18px`
- Star icon (✦) accent colour left
- Send button: gradient fill, `border-radius: 12px`, white arrow icon

**Bottom navigation**
- 88px height, frosted glass: `backdrop-filter: blur(24px)`
- `border-top: 1px solid --border`
- 3 tabs: Home · Library · Profile (SVG line icons, no emojis)
- Active: accent colour icon + label
- Inactive: faint colour

**Category pills**
- `border-radius: 100px`
- Inactive: surface bg, border, muted text
- Active: gradient background, white text, no border

**Search bar**
- `--surface2` background, `--border` border, `border-radius: 18px`
- Magnifier SVG icon left, italic placeholder text in Nunito

---

### Key screens

1. **Dashboard** — gradient hero card · search bar · stat chips (library count, rules answered) · recently played horizontal scroll · popular games grid
2. **Library** — page header · category pills · search bar · full 2-column game grid
3. **Game page** — gradient hero with game icon + metadata · chapter tabs · AI answer bubble · expandable rule chunks · pinned AI ask bar
4. **Profile** — TBD (out of scope for MVP)

---

## 09. INTEGRATIONS

**Tools needed:** Stripe (payments), Claude API (AI assistant)
**Webhooks / real-time:** Stripe webhooks for subscription management
**External data:** Game rules need to be sourced and ingested — BoardGameGeek is the primary candidate for scraping/API. Strategy to be confirmed before building the AI assistant.

---

## 10. COMPETITIVE LANDSCAPE

**Closest competitors:**
Unaware of direct competitors — to be researched

**Unfair advantage:**
Customer support leader for a SaaS company across five locations and multiple countries. Strong understanding of product management, development workflows, and QA processes. Can operate as a technical co-pilot alongside Claude Code to reach the best solution fast.

---

## 11. CODING GUIDELINES

When working on this project, always:
- Read this CLAUDE.md completely at the start of every session
- Suggest a written plan before writing any code — never start coding without explicit approval
- Keep component files small and single-purpose
- Prefer readable, explicit code over clever abstractions
- Use TypeScript throughout — no plain JavaScript files
- Comment complex logic and non-obvious decisions
- Never delete or overwrite existing work without confirming first
- When unsure about scope, refer back to the MVP in section 05
- When building UI, always reference section 08 for colours, typography, and component patterns — do not invent new styles

**Context window management:**
- This project uses CC Status Line to monitor context usage
- At 50% context, stop and summarise: what was completed, what files were created or changed, and what still needs doing
- Never push past 50% — output quality degrades and hallucinations increase
- The product owner will start a fresh agent and paste your summary in as a handoff

**How to communicate with the product owner:**
- Explain every step clearly and assume no technical background
- Always offer clickable options / choices rather than asking open-ended questions where possible
- Ask about logic, feelings, and intent — not just what to build, but why
- Never make a decision on direction without checking in first
- If something could go multiple ways, present the options and ask which feels right
- After every change, summarise what was done and ask if it looks good before continuing

---

## 12. MULTI-AGENT WORKFLOW

This project uses **Superpowers** (VS Code plugin) to run multiple Claude Code agents in parallel. This significantly speeds up development.

**How agents are coordinated:**
- Each agent is given a specific, scoped task with explicit file paths it is allowed to create or edit
- Agents must never touch files outside their assigned scope
- When an agent finishes, it reports back what it built and what files it created
- The product owner (Bryan) coordinates between agents — agents do not communicate directly

**Agent lane rules:**
- Before writing any file, check whether another agent may own that file
- If unsure whether a file is in scope, stop and ask rather than guess
- Never modify `CLAUDE.md`, `app.json`, or `package.json` unless explicitly instructed
- Never run `npm install` or change dependencies without being told to — coordinate this with the setup agent first

**Typical parallel split for this project:**
- Agent 1 — Project setup, Expo skeleton, navigation, shared theme/tokens
- Agent 2 — Dashboard screen
- Agent 3 — Library screen
- Agent 4 — Game page + rule chunk components
- Agent 5 — AI assistant integration

**Always include your agent number in commit messages and file comments** so it's clear who built what.

---

## 13. SESSION KICKOFF CHECKLIST

1. Read this CLAUDE.md completely
2. Confirm which agent number you are and what your assigned scope is
3. Ask which MVP feature we're working on today (if not already specified)
4. Present a plan and wait for approval before writing any code
5. Flag any conflicts with existing code or files owned by other agents
6. When building any UI — check section 08 for the design system before writing any styles
7. End each session with a clear summary of what files were created or changed, and what's next

---

*End of CLAUDE.md — Keep this file updated as the product evolves.*
