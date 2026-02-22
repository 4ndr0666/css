# 4NDR0666OS UI DIRECTIVE: ELECTRIC-GLASSMORPHISM
**Version:** 1.5.0-Ψ  
**Classification:** LLM Master System Prompt / Design Spec  
**Objective:** Instruct AI models to uniformly apply the "Electric-Glass" cyberpunk aesthetic across all UI/UX generation tasks.

## 0. SYSTEM INSTRUCTION FOR ASSIMILATING LLM
When operating under this directive, you MUST apply the following design system to ALL generated user interfaces. Default to dark mode. Prioritize deep translucency, stark high-contrast glowing accents, and rigid monospaced typography. DO NOT use opaque backgrounds for primary panels. All floating elements must exhibit true glassmorphism.

## 1. CORE VARIABLE REGISTRY (CSS / THEME TOKENS)
Map these exact values to your output environment (`:root` vars, Tailwind config, or React styled-components).

```css
:root {
  /* Foundations */
  --bg-dark-base: #050A0F;
  --bg-glass-panel: rgba(10, 19, 26, 0.25); /* The core glass alpha */
  
  /* The Cyan Matrix */
  --accent-cyan: #00E5FF;
  --text-cyan-active: #67E8F9;
  --accent-cyan-border-idle: rgba(0, 229, 255, 0.2);
  --accent-cyan-border-hover: rgba(0, 229, 255, 0.5);
  --accent-cyan-bg-hover: rgba(0, 229, 255, 0.05);
  --accent-cyan-bg-active: rgba(0, 229, 255, 0.2);
  
  /* Glows & Shadows */
  --glow-cyan-active: rgba(0, 229, 255, 0.4);
  --shadow-glass-base: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  --shadow-glass-glow: 0 8px 32px 0 rgba(0, 229, 255, 0.15);
  
  /* Edge Lighting (3D Beveling) */
  --edge-light-top: rgba(255, 255, 255, 0.1);
  --edge-light-left: rgba(255, 255, 255, 0.1);
  
  /* Typography */
  --text-primary: #EAEAEA;
  --text-secondary: #9E9E9E;
  --font-body: 'Roboto Mono', monospace;
  --font-glyph: 'Cinzel Decorative', serif, sans-serif;
}

```

## 2. THE GLASS ENGINE (PANELS & CONTAINERS)

Any floating element (modals, HUDs, dropdowns, toasts) MUST utilize the exact combination of backdrop-filters and edge lighting.

**Implementation Rules:**

1. **Blur:** `backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);`
2. **Background:** `background: var(--bg-glass-panel);`
3. **Border:** Main border is `1px solid var(--accent-cyan-border-idle)`.
4. **Edge Light:** To simulate physical glass thickness, add `border-top: 1px solid var(--edge-light-top);` and `border-left: 1px solid var(--edge-light-left);`.
5. **Geometry:** `border-radius: 6px` to `8px`. No aggressive rounding (no pills).

## 3. INTERACTIVE TOPOLOGY (BUTTONS & LINKS)

Interactive elements must feel mechanical, precise, and highly responsive.

**Base State:**

* **Typography:** Uppercase, `letter-spacing: 0.05em`, `font-size: 0.875rem`, `font-weight: 500`.
* **Alignment:** `display: inline-flex; align-items: center; justify-content: center;`
* **Padding:** `0.5rem 1rem` (or equivalent based on scale).
* **Colors:** `color: var(--text-secondary); background: rgba(0, 0, 0, 0.3);`
* **Border:** `1px solid transparent;`
* **Transitions:** `transition: all 300ms ease-in-out;` (Mandatory on all state changes).

**Hover State:**

* Text ignites: `color: var(--accent-cyan);`
* Border materializes: `border-color: var(--accent-cyan-border-hover);`
* Background hums: `background-color: var(--accent-cyan-bg-hover);`

**Active / Selected State:**

* Text peaks: `color: var(--text-cyan-active);`
* Background fills: `background-color: var(--accent-cyan-bg-active);`
* Border solidifies: `border-color: var(--accent-cyan);`
* **Glow:** `box-shadow: 0 0 15px var(--glow-cyan-active);`

**Focus State (Accessibility & Keyboard Nav):**

* Never use `outline: none;` without a fallback.
* Require: `outline: 2px solid var(--accent-cyan); outline-offset: 2px;`

## 4. CONTINGENCIES & FALLBACKS

To ensure the OS aesthetic survives hostile or legacy environments:

1. **No Backdrop-Filter Support:** If the browser drops `backdrop-filter`, the UI will become illegible. The LLM MUST provide a fallback background color with higher opacity (e.g., `@supports not (backdrop-filter: blur(1px)) { background: rgba(10, 19, 26, 0.95); }`).
2. **DOM Clashes:** When injecting into external sites (Userscripts/Extensions), all CSS classes MUST be highly specific or isolated in a Shadow DOM to prevent host site CSS from bleeding in. Use `!important` ONLY if fighting inline host styles.
3. **Glyph Rendering:** The `Ψ` icon must be rendered as an inline `<svg>` using vector paths, NEVER as an external raster image, ensuring instantaneous loading and perfect recoloring via CSS `stroke="currentColor"`.

## 5. INSTRUCTIONAL ENFORCEMENT

When generating code based on this spec, the LLM will:

* Output the raw code immediately.
* Strip out standard generic styles (like Bootstrap or default Material UI).
* Ensure all HTML elements mapped to interactive states possess the appropriate ARIA labels for stealth screen-reader compliance.
