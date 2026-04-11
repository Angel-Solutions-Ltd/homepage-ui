# Agent Rules

Conventions and rules to follow when working on this codebase. These apply to all agents and all sessions.

---

## 1. Component File Structure

Every component must follow this layout:

```
ComponentName/
  ComponentName.tsx   ← component implementation
  ComponentName.css   ← styles
  index.ts            ← barrel re-export (entry point)
```

**Do not** use `index.tsx` or `index.css` as the component file name.

The `index.ts` barrel must export both the named and the default export:

```ts
export { ComponentName, default } from './ComponentName';
```

This allows both `import ComponentName from '../ComponentName'` and `import { ComponentName } from '../ComponentName'` to work.

---

## 2. Named Component Exports

Components must be declared as named exports — not anonymous default exports.

**Correct:**
```tsx
export const MyComponent = ({}: P) => { ... };
export default MyComponent;
```

**Incorrect:**
```tsx
export default ({}: P) => { ... };
```

The named export is what goes in `index.ts`. The `default` re-export exists for backwards-compatible imports.

---

## 3. Centralised Copy

All user-facing strings belong in `src/copy/index.ts`. No hardcoded UI text inside component files.

This includes: page titles, body text, button labels, section headings, placeholder text, and any other string a user reads or interacts with.

**Correct:**
```tsx
import { COPY } from '../../copy';
<h1>{COPY.services.title}</h1>
```

**Incorrect:**
```tsx
<h1>What I Do</h1>
```

The copy file is structured by page/feature, uses `as const` for type safety, and is the single place to update when translating or editing content.

**Do not** put configuration values (URLs, API keys, company info) in the copy file. Those belong in `src/config/`.

---

## 4. Configuration vs Copy

| What | Where |
|------|-------|
| UI strings (labels, body text, headings) | `src/copy/index.ts` |
| Company info (name, contact, address) | `src/config/site.ts` |
| External URLs and links | `src/copy/index.ts` (if user-facing) or `src/config/` (if infrastructure) |
| Data arrays (useful links, etc.) | `src/config/` |

---

## 5. CSS Imports

Inside a component file, always import the co-located CSS file by its full name:

```tsx
import './ComponentName.css';
```

Never `import './index.css'` from within a component file.

---

## 6. No Inline Copy in JSX

Never write user-visible strings directly in JSX. Always reference `COPY`. This applies to:
- Button text
- Headings and titles
- Body paragraphs
- Placeholder and aria labels
- Error messages

---

## 7. Adding a New Component

1. Create the folder: `src/components/NewComponent/`
2. Create `NewComponent.tsx` with a named export: `export const NewComponent = ...`
3. Create `NewComponent.css`
4. Create `index.ts` with: `export { NewComponent, default } from './NewComponent';`
5. Add any user-facing strings to `src/copy/index.ts` under an appropriate key
6. Import the component elsewhere via its folder path: `import { NewComponent } from '../NewComponent'`
