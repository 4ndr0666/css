# Theme Documentation: Ethereal-glass

## 1. Core Philosophy

The "Ethereal-glass" theme is built on a dark, cyberpunk-inspired aesthetic, simulating a futuristic Heads-Up Display. It combines a pure black background with glowing cyan accents, grid lines, and subtle animations (flicker, scanlines) to create an immersive and tactical interface. The key goals are clarity, depth, and operator focus.

## 2. Color Palette

The palette is high-contrast and limited, designed for readability in a dark environment.

| Role                       | CSS Variable             | Hex/RGBA Code                  | Description                                                                         |
| -------------------------- | ------------------------ | ------------------------------ | ----------------------------------------------------------------------------------- |
| **Deep Background**        | `--hud-bg-color`         | `#000`                         | A pure black canvas, providing maximum contrast.                                    |
| **Primary Panel**          | `--hud-bg-transparent`   | `rgba(0, 40, 40, 0.25)`        | A very dark, semi-transparent cyan for primary containers, with a frosted glass effect. |
| **Primary Accent (Cyan)**  | `--hud-color`            | `#00fefe`                      | The main, high-energy accent for text, icons, borders, and active elements.         |
| **Mid Cyan**               | `--hud-color-darker`     | `#0aa`                         | A less intense cyan for secondary borders, inactive text, and hover states.         |
| **Dark Cyan**              | `--hud-color-darkest`    | `#044`                         | Used for scrollbar thumbs and subtle borders.                                       |
| **Glow Effect**            | `--glow-color`           | `rgba(0, 254, 254, 0.5)`       | A semi-transparent cyan used for text-shadows and box-shadows to create a glow.     |
| **Error/Danger**           | `--red-color`            | `#ff003c`                      | A vibrant red for error states, warnings, and danger actions.                       |
| **Error Glow**             | `--red-glow-color`       | `rgba(255, 0, 60, 0.5)`        | The glow effect for error states.                                                   |
| **Primary Text (Bright)**  | `--primary-text`         | `#e0ffff`                      | A very light, almost white cyan for maximum readability.                            |
| **Secondary Text (Softer)**| `--secondary-text`       | `#a0f0f0`                      | A softer cyan for less critical text elements.                                      |

## 3. Key Thematic Elements

### a. The "HUD Container"

This is the foundational component for all panels and modals.

-   **Background**: A semi-transparent dark cyan (`--hud-bg-transparent`) combined with a `backdrop-filter: blur()` to create a frosted glass effect over the grid background.
-   **Border**: A thin, glowing border (`--hud-color-darker`), which brightens to `--hud-color` when the panel is active.
-   **Inner Shadow**: A subtle `box-shadow: inset` adds depth to the container.
-   **Decorative Corners**: Each container features four absolute-positioned `div` elements (`.hud-corner`) that draw right-angled corners, enhancing the HUD aesthetic.

### b. Glow Effects & Animations

Atmosphere and feedback are created through dynamic effects.

-   **Text Glow**: Headings and important text use `text-shadow` with `--glow-color` to create a neon glow. A `flicker` animation is applied to key elements for a dynamic feel.
-   **Interactive Glow**: Buttons and active elements use `box-shadow` with `--glow-color` (or `--shadow-cyan-heavy`) that intensifies on hover.
-   **Loading Pulse**: When data is streaming, the main output panel uses a `border-pulse` animation that smoothly cycles the border color and shadow intensity.
-   **Scanline**: A persistent, animating scanline overlay moves down the screen, reinforcing the "display" theme.

### c. Interactivity and Transitions

User feedback is immediate and thematic.

-   **Transitions**: Smooth `transition-all duration-150` or `duration-300` is applied to all interactive elements.
-   **Hover**: Typically involves brightening the border, text, or shadow color.
-   **Focus**: Uses a visible outline ring (`focus:ring-2`) with the bright cyan color (`focus:ring-[var(--bright-cyan)]`) and an offset to ensure visibility.

## 4. Component-Specific Recipes

-   **Primary Buttons**:
    -   **Base**: Transparent background, cyan border (`--hud-color`), cyan shadow.
    -   **Hover**: Adds a semi-transparent cyan background fill and intensifies the shadow.
-   **Secondary Buttons**:
    -   **Base**: Dark cyan background (`--hud-color-darkest`), darker cyan border (`--hud-color-darker`).
    -   **Hover**: Brightens the text, border, and background color.
-   **Input Fields / Selects**:
    -   **Base**: Black background, subtle cyan border (`--hud-color-darker`). Placeholders use a darker cyan.
    -   **Focus**: Bright cyan focus ring.
-   **Custom Scrollbar**:
    -   **Track**: Pure black (`--hud-bg-color`).
    -   **Thumb**: Dark cyan (`--hud-color-darkest`) with a subtle border.
    -   **Hover**: Brighter cyan thumb (`--hud-color-darker`).
-   **Radial Menu**:
    -   **Overlay**: A full-screen, semi-transparent black overlay with a heavy `backdrop-filter: blur()`.
    -   **Items**: Icons and labels are arranged in a circle, animating outwards from the center. Items use `--secondary-text` and brighten to `--primary-text` on hover with an intense glow.
