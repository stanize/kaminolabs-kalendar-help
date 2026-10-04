# Kalendar Help Center — Claude Context

This is the clinic-side help portal for Kalendar, documenting the main app
(`stanize/kaminolabs-kalendar`, the "panel" at `/panel/*`). It covers the
clinic/business-owner experience only — the patient portal and the admin
portal are explicitly out of scope here unless Arun says otherwise.

## This content drifts — verify before editing, don't assume

This portal has gone stale against real app behavior before (most recently
discovered 2026-10, after the September 2026 guest-booking confirmation
change shipped in the main app without the help content being updated to
match). Before editing or adding an article:

1. **Read the real in-app copy**, not just the feature's logic. The main
   repo's `lib/i18n/dictionaries/*.ts` is the ground truth for exact
   button/label/tab wording — use the Spanish (`es`) values verbatim where
   an article names a specific UI element, so what the user reads here
   matches exactly what they'll see in the panel.
2. **Check `workflows/*.md` in the main repo** for the feature's actual
   current behavior and status. A step marked `done` is tested and live; a
   step marked `in_progress` or `not_started` may not match what ships —
   don't document a feature as finished if its workflow step says
   otherwise.
3. **Cross-check against recent changes**, not just the feature's own doc —
   a workflow step for a *different* feature can change how an
   already-documented one behaves (the guest-booking example above: a
   public-booking change removed the 24h pending-review window, which
   silently made the old Calendar and Clients articles wrong even though
   nobody touched those workflow files).
4. If the main repo isn't attached in your session, ask for it — don't
   guess at current behavior from memory of a previous read.

## Conventions

- Slugs are English, code-style, shared identically between `content/es/`
  and `content/en/` — only the MDX content and frontmatter differ per
  language.
- All UI copy quoted in an article should be Spanish-panel-accurate (the
  app's default/primary language); the English article is a translation
  of the guide, not a description of an English UI (the panel itself is
  Spanish-only — see the main repo's CLAUDE.md "Key Conventions").
- Adding an article: update `ARTICLE_SLUGS` in `src/lib/articles.ts`, set
  `order` in both locale files' frontmatter, and update the closing
  "Siguiente paso"/"Next up" chain in the articles immediately before and
  after it so the walkthrough stays linear.
- Subscription/billing is intentionally not documented yet (no article) —
  check with Arun before adding one; it was explicitly deferred as of the
  2026-10 update pass.
