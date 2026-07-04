// Site mode — controls which sections/pages render, WITHOUT forking the code.
//
// "mvp"  = the simplified launch site (production / main branch)
// "full" = everything, including work-in-progress sections (dev branch, local)
//
// Vercel exposes the branch it's building via VERCEL_GIT_COMMIT_REF, so:
//   - builds of `main`  -> mvp
//   - builds of `dev` (or any preview branch) -> full
//   - local `npm run dev`/`build` -> full
//
// Copy therefore stays identical across branches; only structure differs.
// To take a gated section live later, remove its `fullOnly` check (or flip
// the logic here) — no re-writing, no divergent copy.

export const SITE_MODE: "mvp" | "full" =
  process.env.VERCEL_GIT_COMMIT_REF === "main" ? "mvp" : "full";

export const IS_FULL = SITE_MODE === "full";
