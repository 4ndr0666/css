## **Electric-Glass HUD UI: Comprehensive, Portable Spec**

> **This spec fuses your prior canonical structure with authoritative details from `Electric-glass.md` and `electric-glass-buttons.md`. It’s written so any dev or designer can *faithfully* reproduce the visual/interactive experience across HTML/CSS, GTK, Python, JS, or any UI system. All properties, glyphs, colors, fonts, and glow mechanics are explicit. If a target tech cannot represent a feature, halt and demand fallback mapping.**

---

### 1. **Philosophy & Visual DNA**

* **Theme:** Dark, cyberpunk glassmorphism—layered, semi-transparent panes, high-contrast electric cyan accent, luminous glow, sharp clarity, tactile feedback.
* **Mood:** Futuristic control surface for hackers and gods. Depth, focus, interactivity, never dull.

---

### 2. **Color Palette**

***Hex values and CSS variable mappings are canonical.***

| Name               | Hex Code    | Use                                       |
| ------------------ | ----------- | ----------------------------------------- |
| Deep Background    | #0A0F1A     | Main app bg, `body`                       |
| Primary Panel/Card | #101827     | Main HUD panels, popups                   |
| Accent Panel       | #070B14     | Inputs, nested panels                     |
| Bright Cyan (Glow) | #15fafa     | Glow, text, borders, focus rings, buttons |
| Mid Cyan           | #15adad     | Subtle borders, gradients                 |
| Dark Cyan          | #157d7d     | Secondary buttons, scrollbars             |
| Primary Text       | #e0ffff     | Headline & main text                      |
| Secondary Text     | #a0f0f0     | Subtext, labels, placeholder              |
| Tertiary Text      | #70c0c0     | Timestamps, hints, footer                 |
| Error/Danger       | red-400-900 | Errors, warnings (with transparency)      |

**CSS Variables:**
(Use as-is in :root, or map 1:1 in GTK/Python/C++ resource files)

```css
:root {
  --bg-dark: #0A0F1A;
  --panel-bg: #101827;
  --panel-bg-solid: #101827;
  --panel-bg-accent: #070B14;
  --accent-cyan: #00E5FF;
  --bright-cyan: #15fafa;
  --mid-cyan: #15adad;
  --dark-cyan: #157d7d;
  --primary-text: #e0ffff;
  --secondary-text: #a0f0f0;
  --tertiary-text: #70c0c0;
  --danger: #e06;
  --font-body: 'Roboto Mono', monospace;
  --font-hud: 'Orbitron', sans-serif;
  --panel-glow: rgba(21,250,250,0.2);
  --panel-glow-intense: rgba(21,250,250,0.4);
  --accent-cyan-bg-active: rgba(0,229,255,0.2);
  --accent-cyan-border-hover: rgba(0,229,255,0.5);
  --accent-cyan-glow-active: rgba(0,229,255,0.4);
  --text-cyan-active: #67E8F9;
  --text-secondary: #9E9E9E;
}
```

*See also the mapping tables and Tailwind utilities in the source docs for reference.*

---

### 3. **Typography & Font Stack**

* **Headings/UI:** `'Orbitron', sans-serif`
* **Body:** `'Roboto Mono', monospace`
* **Glyph/Logo (Ψ):** `'Cinzel Decorative', serif` (weight: 700)
* **Caps & Spacing:** UI elements use uppercase or small-caps, generous letter-spacing.

**Import Fonts:**

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&family=Orbitron:wght@700&family=Cinzel+Decorative:wght@700&display=swap" rel="stylesheet">
```

---

### 4. **Glass Effect / Panel Construction**

* **Panel BG:** `#101827cc` (80% opacity), or `bg-[#101827]/80`
* **Blur:** `backdrop-filter: blur(6px)` (`backdrop-blur-sm` in Tailwind)
* **Border:** 2px-2.5px solid `#15adad` or `#15fafa` (primary panel: brighter, nested: more muted)
* **Box-shadow:** `0 0 36px rgba(21,250,250,0.2)` for subtle outer glow
* **Radius:** 1.2em for main panel, .9em for buttons

**Sample HTML/CSS:**

```html
<div class="hud-container">
  <!-- Content -->
</div>
```

```css
.hud-container {
  background: rgba(16,24,39,0.8);
  backdrop-filter: blur(6px);
  border-radius: 1.2em;
  border: 2.5px solid #15adad;
  box-shadow: 0 0 36px rgba(21,250,250,0.2), 0 1.5px 8px #000b;
  color: #e0ffff;
  font-family: 'Roboto Mono', monospace;
  min-width: 480px;
  max-width: 94vw;
  min-height: 340px;
  z-index: 999999;
  opacity: 0.99;
}
```

---

### 5. **HUD Button/Glow Button Spec**

**HTML Structure:**

```html
<button class="hud-button">
  <svg class="icon">...</svg>
  <span>Button Label</span>
</button>
<button class="hud-button active">
  <svg class="icon">...</svg>
  <span>Active Button</span>
</button>
```

**CSS:**

```css
.hud-button {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-secondary);
  background-color: rgba(0,0,0,0.3);
  cursor: pointer;
  transition: all 300ms ease-in-out;
}
.hud-button .icon {
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
}
.hud-button:hover {
  color: var(--accent-cyan);
  border-color: var(--accent-cyan-border-hover);
}
.hud-button.active {
  color: var(--text-cyan-active);
  background-color: var(--accent-cyan-bg-active);
  border-color: var(--accent-cyan);
  box-shadow: 0 0 15px var(--accent-cyan-glow-active);
}
.hud-button:focus-visible {
  outline: 2px solid var(--accent-cyan);
  outline-offset: 2px;
}
```

**Notes:**

* Glow only on active/selected state.
* Smooth transitions.
* Text, icon, and focus all use the accent palette.

---

### 6. **Glyph/Logo**

**SVG:**

```svg
<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" class="glyph" fill="none" stroke="#00E5FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
  <path d="M 64,12 A 52,52 0 1 1 63.9,12 Z" stroke-dasharray="21.78 21.78" stroke-width="2"/>
  <path d="M 64,20 A 44,44 0 1 1 63.9,20 Z" stroke-dasharray="10 10" stroke-width="1.5" opacity="0.7"/>
  <path d="M64 30 L91.3 47 L91.3 81 L64 98 L36.7 81 L36.7 47 Z"/>
  <text x="64" y="67" text-anchor="middle" dominant-baseline="middle" fill="#00E5FF" stroke="none" font-size="56" font-weight="700" font-family="'Cinzel Decorative', serif">Ψ</text>
</svg>
```

* Colors: Use `#00E5FF` for main lines and Ψ.
* Center: `Ψ`, bold, decorative serif, 56px.

---

### 7. **Glow/Glass/Transition Effects**

* **Glow:** Soft, semi-transparent accent cyan shadows on panels/buttons.
* **Text Glow:** Titles and Ψ symbol use:

  ```css
  background: linear-gradient(to right, #15fafa, #15adad, #157d7d);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  ```
* **Interactive Transitions:**

  * All clickable/hoverable items have `transition-all duration-150` to `duration-300`.
  * Focus: outline or ring of accent cyan (`focus:ring-2 focus:ring-[#15fafa]`).
  * Hover: border-color and shadow intensify (`hover:border-[#15fafa]/80` + `hover:shadow-lg hover:shadow-[#15fafa]/50`).

---

### 8. **Scrollbar, Inputs, Misc**

* **Scrollbar:**

  * Track: #101827, Thumb: #157d7d, Hover: #15fafa, Rounded.
* **Inputs/Selects:**

  * BG: #070B14, Border: #15adad/70, Placeholder: secondary text.
  * Focus ring: #15fafa.
* **Errors/Warnings:**

  * Use red-400 to red-900 with opacity for glass blend.

---

### 9. **Structural Layout**

* **HUD Root:** Fixed, bottom-right, z-index max, drag via header.
* **Header:** Flex, with Ψ glyph, title (gradient), close (×) button.
* **Tabs:** Flex, glowing border below, tab highlight with cyan active border/glow.
* **Panel Content:** Padding 1.35em, scrollable, custom scrollbar.

---

### 10. **Portable Mapping Guidelines**

* **GTK/Qt:** Map all RGBA/blur/border styles. Use “backdrop”/compositor for blur if possible; fallback to opacity if not. Fonts and colors 1:1.
* **Tkinter:** Simulate translucency with overlaid semi-opaque panels. Glow with extra borders/shadows.
* **Terminal (ncurses):** Use color pairs to simulate cyan/white/magenta. Glow: blink or reverse-video.

---

### 11. **Minimum Example:**

```html
<div class="hud-container">
  <div class="hud-header">
    <svg>...</svg>
    <span class="title">hailuoΨ</span>
    <button class="hud-close-btn">&times;</button>
  </div>
  <nav class="hud-tabs">
    <button class="hud-button active"><span>Assets</span></button>
    <button class="hud-button"><span>Config</span></button>
  </nav>
  <main class="hud-content">
    <!-- Content -->
  </main>
</div>
```

**With canonical CSS as above.**

---

### 12. **If Any Detail is Untranslatable**

*Halt. Request fallback or platform-native equivalent from the controller (e.g., “no blur in this context; use pure opacity or pattern instead”).*

---

## **END OF SPEC: Electric-Glass HUD (Assimilated & Merged)**

*Fully canonical, cross-platform. Reference this document for any implementation or reproduction directive.*
