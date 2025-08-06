# Replicating the "Userscript Studio" HUD Theme

This document provides a comprehensive guide to recreating the futuristic, Heads-Up Display (HUD) theme used in the Userscript Studio application. The theme is built on a foundation of CSS custom properties, making it easy to customize and adapt.

## Table of Contents
1. [Core Concepts](#1-core-concepts)
    - [Color Palette](#color-palette)
    - [Typography](#typography)
    - [CSS Custom Properties (Variables)](#css-custom-properties-variables)
2. [Setup](#2-setup)
    - [HTML Boilerplate](#html-boilerplate)
    - [Importing Fonts](#importing-fonts)
3. [Key CSS Components & Effects](#3-key-css-components--effects)
    - [Global & Body Styles](#global--body-styles)
    - [HUD Panels (`.hud-panel`)](#hud-panels-hud-panel)
    - [Panel Headers & Title Plates](#panel-headers--title-plates)
    - [Corner Brackets (`.hud-corner-brackets`)](#corner-brackets-hud-corner-brackets)
    - [Buttons (`.hud-button`)](#buttons-hud-button)
    - [Code Blocks](#code-blocks)
    - [Decorative Elements](#decorative-elements)
    - [Custom Scrollbars](#custom-scrollbars)
4. [Animations](#4-animations)
5. [Usage Examples](#5-usage-examples)
    - [Basic Panel](#basic-panel)
    - [Button](#button)
    - [Panel with Header](#panel-with-header)
    - [Code Block](#code-block)

---

## 1. Core Concepts

### Color Palette
The theme relies on a dark background with a vibrant cyan accent color for a high-contrast, glowing effect.

- **Background**: `#010409` (A very dark, almost black blue)
- **Primary Accent**: `#00E5FF` (Bright Cyan)
- **Glow Effects**: Various opacities of the accent color (e.g., `rgba(0, 229, 255, 0.6)`)
- **Primary Text**: `#EAEAEA` (Off-white)
- **Secondary Text**: `#9E9E9E` (Light Gray)

### Typography
Two primary fonts are used to create a clear distinction between headings and body/code text.

- **Headings**: 'Orbitron', sans-serif
- **Body & Code**: 'Roboto Mono', monospace

### CSS Custom Properties (Variables)
All core theme values are stored in CSS variables under the `:root` selector for easy modification and consistency.

```css
:root {
  --bg-dark: #010409;
  --accent-cyan: #00E5FF;
  --accent-cyan-glow: rgba(0, 229, 255, 0.6);
  --accent-cyan-border-glow: rgba(0, 229, 255, 0.4);
  --accent-cyan-border: rgba(34, 211, 238, 0.4);
  --text-primary: #EAEAEA;
  --text-secondary: #9E9E9E;
  --font-heading: 'Orbitron', sans-serif;
  --font-body: 'Roboto Mono', monospace;
}
```
To change the entire theme's accent color, you would only need to update the `--accent-cyan` variable and its derivatives.

---

## 2. Setup

### HTML Boilerplate
Start with a standard HTML5 document. Make sure to link the Google Fonts and your stylesheet.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My HUD App</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Roboto+Mono&display=swap" rel="stylesheet">
    
    <!-- Your Stylesheet -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Your content here -->
</body>
</html>
```

---

## 3. Key CSS Components & Effects

### Global & Body Styles
The body sets the foundation with the dark background and an animated grid overlay.

- **Animated Grid**: A subtle, scrolling grid is created using two `linear-gradient` backgrounds. The animation is handled by `@keyframes scroll-grid`.
- **Default Font**: The base font is set to `var(--font-body)`.

```css
body {
  background-color: var(--bg-dark);
  color: var(--text-primary);
  font-family: var(--font-body);
  background-image:
    linear-gradient(rgba(0, 229, 255, 0.07) 1px, transparent 1px),
    linear-gradient(to right, rgba(0, 229, 255, 0.07) 1px, transparent 1px);
  background-size: 1.2rem 1.2rem;
  background-attachment: fixed;
  animation: scroll-grid 8s linear infinite;
}

@keyframes scroll-grid {
  from { background-position: 0 0; }
  to { background-position: -2.4rem -2.4rem; }
}
```

### HUD Panels (`.hud-panel`)
This is the core container component. Its effect is a combination of multiple backgrounds, borders, shadows, and a `clip-path`.

- **`clip-path`**: Creates the distinctive sharp, cut-off corners.
- **`background`**: Layered to create a rich texture:
    1. A `radial-gradient` for a glint in the top-left corner.
    2. A `repeating-linear-gradient` for subtle scanlines.
    3. A final `radial-gradient` for a soft central glow.
- **`border` & `box-shadow`**: Create the glowing border effect.
- **`backdrop-filter: blur(12px)`**: Gives the panel a semi-transparent, glassy feel.

```css
.hud-panel {
  background:
    radial-gradient(circle at 25px 25px, rgba(0, 229, 255, 0.15) 0%, transparent 25%),
    repeating-linear-gradient(
      rgba(0, 229, 255, 0) 0px,
      rgba(0, 229, 255, 0) 1px,
      rgba(0, 229, 255, 0.03) 2px
    ),
    radial-gradient(ellipse at center, rgba(34, 211, 238, 0.13) 0%, rgba(34, 211, 238, 0.07) 70%);
  border: 1px solid var(--accent-cyan-border-glow);
  backdrop-filter: blur(12px);
  box-shadow:
    0 0 25px rgba(0, 229, 255, 0.2),
    inset 0 0 3px rgba(0, 229, 255, 0.2);
  clip-path: polygon(0 20px, 20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px));
}
```

### Panel Headers & Title Plates
Panel titles are designed to look like plates attached to the UI.

- **`.hud-panel-header`**: This is a wrapper that is absolutely positioned to sit on top of the parent panel's top edge. `transform: translateX(-50%) translateY(-50%)` is used for centering.
- **`.hud-title-plate`**: The visible plate element. It uses a solid accent background color, the heading font, and a `clip-path` to achieve its shape.

```css
.hud-panel-header {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background: var(--bg-dark); /* Match the body background */
  padding: 0 15px;
  z-index: 10;
}

.hud-title-plate {
  background-color: var(--accent-cyan);
  color: var(--bg-dark);
  padding: 4px 24px;
  font-family: var(--font-heading);
  font-weight: 700;
  text-transform: uppercase;
  clip-path: polygon(15px 0, calc(100% - 15px) 0, 100% 100%, 0 100%);
}
```

### Corner Brackets (`.hud-corner-brackets`)
These decorative elements frame the entire viewport to enhance the HUD feeling.

- **Structure**: A single container div holds four child divs, one for each corner.
- **Styling**: Each corner div is styled using `border` properties, leaving two sides transparent (e.g., `border-right: none; border-bottom: none;`).
- **Animation**: The `pulse-glow` animation is applied to make the brackets subtly glow.

```css
.hud-corner-brackets {
  position: absolute;
  top: 10px; left: 10px; right: 10px; bottom: 10px;
  pointer-events: none; /* Allows clicks to pass through */
}
.hud-corner-brackets > div {
  position: absolute;
  width: 30px; height: 30px;
  border: 2px solid var(--accent-cyan);
  animation: pulse-glow 3s infinite ease-in-out;
}
.hud-corner-brackets .top-left { top: -1px; left: -1px; border-right: none; border-bottom: none; }
/* ... similar styles for other corners ... */
```

### Buttons (`.hud-button`)
Buttons also use `clip-path` for their shape, consistent with the rest of the theme.

```css
.hud-button {
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
  background-color: var(--accent-cyan-border);
  border: 1px solid var(--accent-cyan);
  transition: all 0.2s ease-in-out;
}

.hud-button:hover:not(:disabled) {
  transform: scale(1.03);
  filter: brightness(1.2);
}
```

### Code Blocks
Code blocks are styled as inset panels with their own header tab.

```css
.code-block-container {
  background-color: rgba(0,0,0,0.5);
  border: 1px solid var(--accent-cyan-border-glow);
  position: relative;
  padding-top: 1rem;
  clip-path: polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px);
}

.code-block-header {
  position: absolute;
  top: -1px; left: 15px;
  padding: 4px 12px;
  background-color: var(--accent-cyan);
  color: var(--bg-dark);
  font-family: var(--font-body);
  font-weight: 700;
  clip-path: polygon(0 0, 100% 0, calc(100% - 8px) 100%, 0% 100%);
}
```

### Decorative Elements
- **`.hud-line-decorator`**: Uses `::before` and `::after` pseudo-elements to add glowing horizontal lines above and below an element.
- **`.hud-glow`**: A simple utility class to add a glow effect to text using `text-shadow`.

### Custom Scrollbars
Scrollbars are styled to match the theme's aesthetic.

```css
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
  background-color: var(--accent-cyan-border);
  border-radius: 10px;
  border: 2px solid transparent;
  background-clip: content-box;
}
::-webkit-scrollbar-thumb:hover { background-color: var(--accent-cyan); }
```

---

## 4. Animations

Two main `@keyframes` are used:

- **`pulse-glow`**: Creates a pulsing `box-shadow` effect. Ideal for borders and interactive elements.
- **`scroll-grid`**: Animates the `background-position` of the body to create the moving grid effect.

```css
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 12px var(--accent-cyan-border-glow);
    border-color: var(--accent-cyan);
  }
  50% {
    box-shadow: 0 0 18px var(--accent-cyan-glow);
    border-color: var(--accent-cyan);
  }
}

@keyframes scroll-grid {
  from { background-position: 0 0; }
  to { background-position: -2.4rem -2.4rem; }
}
```

---

## 5. Usage Examples

### Basic Panel
```html
<div class="hud-panel" style="padding: 2rem;">
  <p>This is a standard HUD panel.</p>
  <p>It has cut corners and a glowing, glassy background.</p>
</div>
```

### Button
```html
<button class="hud-button" style="padding: 0.5rem 1.5rem;">
  Execute
</button>
```

### Panel with Header
```html
<div class="hud-panel" style="position: relative; padding: 2rem; margin-top: 1rem;">
  <div class="hud-panel-header">
    <span class="hud-title-plate">Module Status</span>
  </div>
  <p>Content of the panel goes here.</p>
</div>
```

### Code Block
```html
<div class="code-block-container">
    <div class="code-block-header">javascript</div>
    <pre><code>
// Your code here
const greeting = "Hello, World!";
console.log(greeting);
    </code></pre>
</div>
