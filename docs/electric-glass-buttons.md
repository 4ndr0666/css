# HUD-Style Button Documentation

This guide explains how to create the glowing, angular, futuristic button style used in the Userscript-LLM. The design relies on CSS custom properties for easy theming, specific fonts for the aesthetic, and pseudo-classes for interactive states.

## 1. Core Assets & Setup

First, ensure your project includes the necessary fonts and defines the color palette in your root CSS.

### **Fonts**:

This style uses two fonts from Google Fonts. Include them in your HTML's <head> tag:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&family=Orbitron:wght@700&display=swap" rel="stylesheet">
Use code with caution.
```

### **CSS Custom Properties (Variables)**:

Define these in your main stylesheet (e.g., inside a :root block) to control the theme.
```css
:root {
  --bg-dark: #0A131A;
  --accent-cyan: #00E5FF;
  --text-cyan-active: #67E8F9; /* A slightly lighter/paler cyan for active text */
  --accent-cyan-border-hover: rgba(0, 229, 255, 0.5);
  --accent-cyan-bg-active: rgba(0, 229, 255, 0.2);
  --accent-cyan-glow-active: rgba(0, 229, 255, 0.4);
  --text-primary: #EAEAEA;
  --text-secondary: #9E9E9E; /* Used for inactive button text */
  --font-body: 'Roboto Mono', monospace;
}
```

## 2. HTML Structure

The button requires a simple structure. It's designed to hold an icon (like an SVG) and text.

```html
<button class="hud-button">
  <!-- Optional: SVG Icon -->
  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="..."/>
  </svg>
  
  <!-- Button Text -->
  <span>Button Label</span>
</button>

<!-- Example of an active button -->
<button class="hud-button active">
  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="..."/>
  </svg>
  <span>Active Button</span>
</button>
```

## 3. CSS Styling

Here is the complete CSS required. It is broken down by state for clarity.

```css
/* --- Base Button Style --- */
.hud-button {
  /* Layout & Box Model */
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem; /* 8px 16px */
  border: 1px solid transparent;
  
  /* Typography */
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 0.875rem; /* 14px */
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-secondary); /* Default text color for inactive state */

  /* Appearance & Interaction */
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  
  /* Smooth visual feedback */
  transition: all 300ms ease-in-out;
}

/* --- Icon Styling --- */
.hud-button .icon {
  width: 1.25rem; /* 20px */
  height: 1.25rem; /* 20px */
  margin-right: 0.5rem; /* 8px */
}

/* --- Hover State --- */
.hud-button:hover {
  color: var(--accent-cyan);
  border-color: var(--accent-cyan-border-hover);
}

/* --- Active/Selected State --- */
.hud-button.active {
  color: var(--text-cyan-active);
  background-color: var(--accent-cyan-bg-active);
  border-color: var(--accent-cyan);
  
  /* The signature glow effect */
  box-shadow: 0 0 15px var(--accent-cyan-glow-active);
}

/* Optional: Focus state for accessibility */
.hud-button:focus-visible {
  outline: 2px solid var(--accent-cyan);
  outline-offset: 2px;
}
```

## 4. Summary

To recreate the button, you need to:
- Import the Roboto Mono font.
- Define the color palette using CSS custom properties.
- Use the provided HTML structure for the button element.
- Apply the .hud-button CSS for base styling and the .active class to signify a selected state.
