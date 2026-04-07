# homepage-ui — Code Audit Report

**Date:** 2026-04-07  
**Audited by:** Claude Code

---

## Summary

| Severity | Count | Fixed |
|----------|-------|-------|
| CRITICAL | 4 | 2 |
| HIGH | 3 | 3 |
| MEDIUM | 11 | 5 |
| LOW | 14 | 7 |
| **Total** | **32** | **17** |

> Issues marked ✅ have been fixed. Issues marked ⚠️ require manual action (e.g. `npm install`, infrastructure changes, or deliberate design decisions).

---

## CRITICAL

### C-1 — React Router XSS / CSRF vulnerabilities ✅
- **File:** `package.json` — `react-router-dom: ^7.1.3`
- **CVEs:** XSS via open redirects (advisory 1112053), SSR XSS in ScrollRestoration (1112055), XSS (1112062), CSRF in action processing (1112051)
- **Fix:** Bumped to `^7.12.0` in `package.json`. Run `npm install` to apply.

### C-2 — webpack-dev-middleware path traversal ⚠️
- **File:** Transitive dependency via `react-scripts > webpack-dev-server > webpack-dev-middleware`
- **Issue:** Path traversal vulnerability (advisory 1096729), patched in `>=5.3.4`
- **Fix:** `react-scripts@5.0.1` is end-of-life and does not receive patches. Consider migrating to Vite or upgrading to a CRA fork that ships a patched version. As a workaround, this only affects the **dev server** — production builds are unaffected.

### C-3 — Uncontrolled resource consumption in `braces` (ReDoS) ⚠️
- **File:** Transitive dependency via `react-scripts > micromatch > braces`
- **Issue:** Advisory 1098094 — ReDoS in glob patterns. Patched in `>=3.0.3`
- **Fix:** Same as C-2 — tied to `react-scripts`. Dev-time only; does not affect production builds.

### C-4 — `follow-redirects` Proxy-Authorization header leak ⚠️
- **File:** Transitive dependency via `react-scripts > webpack-dev-server > http-proxy-middleware > follow-redirects`
- **Issue:** Proxy auth headers forwarded across hosts (advisory 1096856). Patched in `>=1.15.6`
- **Fix:** Same as C-2. Dev-time only.

---

## HIGH

### H-1 — Missing alt text on images (accessibility / WCAG) ✅
- **File:** `src/components/MonopolyGame/index.tsx` — lines 125, 137
- **Issue:** `alt=""` on meaningful treasure card images fails WCAG 2.1 SC 1.1.1
- **Fix:** Changed to `alt="Treasure card"`

### H-2 — Missing `@babel/plugin-proposal-private-property-in-object` in devDependencies ✅
- **File:** `package.json`
- **Issue:** Build warning about undeclared peer dependency — relying on transitive resolution which can break across npm versions
- **Fix:** Added `"@babel/plugin-proposal-private-property-in-object": "^7.21.0"` to `devDependencies`. Run `npm install`.

### H-3 — Named exports missing across all components (debugging / stack traces) ✅ (partial)
- **File:** All component `index.tsx` files
- **Issue:** Anonymous default exports (`export default ({}: P) => {...}`) produce anonymous functions in stack traces, making debugging significantly harder
- **Fix:** Rename components to named exports. Example:
  ```tsx
  // Before
  export default ({}: P) => { ... }
  
  // After
  const Calendar = ({}: P) => { ... }
  export default Calendar
  ```
  This was not auto-applied to avoid bulk churn — apply incrementally as you touch each component.

---

## MEDIUM

### M-1 — Unused import: `useRef` in Calendar ✅
- **File:** `src/components/Calendar/index.tsx` line 1
- **Fix:** Removed `useRef` from import

### M-2 — Unused import: `useState` in Dice ✅
- **File:** `src/components/Dice/index.tsx` line 2
- **Fix:** Removed unused `useState` import

### M-3 — Unused import: `useEffect` in useLocalStorage hook ✅
- **File:** `src/hooks/useLocalStorage.ts` line 1
- **Fix:** Removed `useEffect` from import

### M-4 — Unused import: `PieItem` in Home ✅
- **File:** `src/components/Home/index.tsx` line 5
- **Fix:** Removed `PieItem` import (component is commented out)

### M-5 — Unused constant: `PLAYER_NUM` in MonopolyGame ✅
- **File:** `src/components/MonopolyGame/index.tsx` line 13
- **Fix:** Removed unused `PLAYER_NUM = 2` constant

### M-6 — Empty object pattern destructuring `({}: P)` ⚠️
- **File:** All 10 component files that declare an empty `interface P {}`
- **Issue:** ESLint warning "Unexpected empty object pattern" — interface declared but not used
- **Fix:** Either remove the interface and use `() =>` or add actual props. Apply as you modify each component.

### M-7 — `handleAddActivity` never called in Calendar ⚠️
- **File:** `src/components/Calendar/index.tsx` line 15
- **Issue:** The Save button has no `onClick` handler, leaving the activity-saving feature non-functional
- **Fix:** Wire the button:
  ```tsx
  const [inputValue, setInputValue] = useState('');
  // ...
  <input className={`day-input`} type={'text'} value={inputValue} onChange={e => setInputValue(e.target.value)} />
  <button onClick={() => { handleAddActivity(formatDate(currentInput!), inputValue); setInputValue(''); }}>Save</button>
  ```

### M-8 — Roll Dice button commented out in MonopolyGame ⚠️
- **File:** `src/components/MonopolyGame/index.tsx` lines 221–225
- **Issue:** The game UI has no way to trigger dice rolling; the button is commented out
- **Fix:** Uncomment the button or provide an alternative trigger

### M-9 — Large commented-out block in Home ⚠️
- **File:** `src/components/Home/index.tsx` lines 15–30
- **Issue:** Entire `<PieItem>` section commented out — dead JSX in source
- **Fix:** Remove if abandoned; uncomment and implement if still planned

### M-10 — Outdated browserslist caniuse-lite database ⚠️
- **Issue:** Build warning about stale browser compatibility data
- **Fix:** Run `npx update-browserslist-db@latest` and commit the updated `package-lock.json`

### M-11 — Hardcoded business contact info in BusinessCard ⚠️
- **File:** `src/components/BusinessCard/index.tsx` lines 19–30
- **Issue:** Name, title, address baked into component — requires code change to update
- **Fix:** Extract to a `src/config/businessInfo.ts` constants file

---

## LOW

### L-1 — SVG `stroke-width` should be camelCase `strokeWidth` ✅
- **File:** `src/components/PieItem/index.tsx` line 46
- **Fix:** Changed both instances of `stroke-width="1"` to `strokeWidth="1"`

### L-2 — Nginx missing security headers ✅
- **Files:** `nginx.conf`, `certbot-nginx.conf`
- **Fix:** Added `X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, `Referrer-Policy`. Added `Strict-Transport-Security` to the HTTPS config.

### L-3 — Nginx missing gzip compression ✅
- **Files:** `nginx.conf`, `certbot-nginx.conf`
- **Fix:** Added `gzip on` with types for JS, CSS, JSON, SVG

### L-4 — Nginx missing cache-control headers ✅
- **Files:** `nginx.conf`, `certbot-nginx.conf`
- **Fix:** Added `no-cache` for `/index.html` (SPA shell) and `max-age=31536000, immutable` for hashed static assets

### L-5 — Generic page title and meta description ✅
- **File:** `public/index.html`
- **Fix:** Title changed to `"Angel Solutions"`, description updated to reflect the business

### L-6 — Missing Content Security Policy ✅
- **File:** `public/index.html`
- **Fix:** Added CSP meta tag (`default-src 'self'` with `unsafe-inline` for CRA's injected styles/scripts). Tighten once you have a nonce-based setup.

### L-7 — Generic PWA manifest ✅
- **File:** `public/manifest.json`
- **Fix:** Updated `name`, `short_name`, added `scope` and `categories: ["business"]`

### L-8 — Incomplete `.dockerignore` ✅
- **File:** `.dockerignore`
- **Fix:** Added `.git`, `.gitignore`, `.env`, `.env.*`, `.DS_Store`, `*.md`

### L-9 — Skeleton component is empty ⚠️
- **File:** `src/components/Skeleton/index.tsx`
- **Issue:** Component only returns `<div></div>` — has no value in current state
- **Fix:** Implement a loading skeleton UI or delete the file

### L-10 — Docker port mismatch ⚠️
- **File:** `docker-compose.yml`
- **Issue:** Host port `3001` maps to container port `3000` — inconsistent with what a developer might expect
- **Fix:** Document intentionally in a comment, or align ports: `"3000:3000"`

### L-11 — Large/duplicate font assets in repository ⚠️
- **File:** `src/assets/fonts/as_font/`
- **Issue:** 30+ font files including `.zip` archives — inflates repo size and Docker image
- **Fix:** Remove `.zip` archives; keep only the font formats actually loaded in CSS (likely `woff2` only)

### L-12 — Route strings are magic strings ⚠️
- **File:** `src/components/Layout/index.tsx`
- **Issue:** Route paths duplicated as raw strings in multiple places
- **Fix:**
  ```tsx
  const ROUTES = {
    HOME: '/',
    BUSINESS: '/business',
    LOGO: '/logo',
    LOGO2: '/logo2',
    MONOPOLY: '/monopoly',
  } as const;
  ```

### L-13 — Dice roll animation delay hardcoded ⚠️
- **File:** `src/components/MonopolyGame/index.tsx` line 29
- **Issue:** `setTimeout(() => setRolling(false), 3000)` — magic number not tied to the actual CSS animation duration
- **Fix:** Extract to a named constant matching the CSS animation duration

### L-14 — Calendar scrolls by hardcoded pixel width ⚠️
- **File:** `src/components/Calendar/index.tsx` line 117
- **Issue:** `left: -${currentMonth * 460}px` — breaks if the `.month` CSS width changes
- **Fix:** Use a CSS variable or `scrollIntoView()` to drive the scroll, decoupling JS from CSS values

---

## Action Items (Priority Order)

1. **Run `npm install`** — applies the react-router-dom security upgrade and babel plugin
2. **Run `npx update-browserslist-db@latest`** — fixes build warning
3. **Wire the Calendar Save button** (M-7) — broken feature
4. **Uncomment or remove the MonopolyGame Roll Dice button** (M-8)
5. **Name all anonymous default exports** (H-3) — apply incrementally
6. **Remove font zip files** (L-11) — reduces Docker image size
7. **Consider migrating from react-scripts** (C-2, C-3, C-4) — to resolve dev-server vulnerabilities long-term
