# Agent Rules

Rules and conventions for AI agents making changes to this project.

---

## Theming

This project has two switchable themes controlled by the `body.theme-bw` class:

- **Main theme** (default): construction charcoal & amber, defined in `:root` in `src/index.css`
- **B&W theme**: activated when `body.theme-bw` is present, vars and overrides scoped under that selector

### Rule: B&W overrides for interactive elements

Any component that introduces hover or active states must also include a `body.theme-bw` override block that:

- Replaces background changes with `border: 1px solid var(--prime-color)`
- Sets `transition: none`

Example pattern:

```css
.my-element {
    transition: .3s;
    border: 1px solid transparent;
    &:hover { background: var(--hover-bg); }
    &:active { background: var(--light-purple); }
}

body.theme-bw .my-element {
    transition: none;
    &:hover { background: var(--prime-bg); border-color: var(--prime-color); }
    &:active { background: var(--prime-bg); border-color: var(--prime-color); }
}
```

Place the `body.theme-bw` override in the same CSS file as the original rule.

---

### Rule: Transparent border on all interactive elements

Every new interactive element must have `border: 1px solid transparent` in its default state. This reserves the border space so that switching to `border: 1px solid var(--prime-color)` on hover does not shift the layout.

Never add a border only on hover without a matching transparent border in the default state.
