# Theme Documentation: Futuristic HUD

## 1. Core Philosophy

The "Futuristic HUD" theme is an immersive, high-tech interface inspired by cyberpunk and sci-fi aesthetics. It aims to create the feeling of interacting with a sophisticated, data-driven system. The design is built on a pure black canvas, using glowing cyan elements, sharp angular lines, and monospace typography to achieve a look that is both minimal and complex. The core goals are clarity, immersion, and a sense of powerful, raw information display.

## 2. Color Palette

The color scheme is strictly limited to create extreme contrast and focus attention on interactive elements and data. All colors are defined as CSS custom properties in `index.html`.

| Role                  | CSS Variable                | Value                       | Description                                                                 |
| --------------------- | --------------------------- | --------------------------- | --------------------------------------------------------------------------- |
| **Pure Black BG**     | `--hud-bg-color`            | `#000`                      | The absolute black background, providing maximum contrast.                  |
| **Primary Cyan**      | `--hud-color`               | `#00fefe`                   | The main vibrant, glowing cyan for primary text, icons, and active borders. |
| **Mid Cyan**          | `--hud-color-darker`        | `#0aa`                      | A less intense cyan for secondary text, inactive borders, and hover states. |
| **Dark Cyan**         | `--hud-color-darkest`       | `#044`                      | The darkest cyan, used for subtle backgrounds and scrollbar thumbs.         |
| **Panel Background**  | `--hud-bg-transparent`      | `rgba(0, 30, 30, 0.15)`     | A very dark, semi-transparent teal for primary containers.                  |
| **Glow Effect**       | `--glow-color`              | `rgba(0, 254, 254, 0.5)`    | Semi-transparent cyan for `box-shadow` and `text-shadow` glow effects.      |
| **Danger Red**        | `--red-color`               | `#ff003c`                   | A vibrant red for error states, warnings, and delete actions.               |
| **Red Glow**          | `--red-glow-color`          | `rgba(255, 0, 60, 0.5)`     | The glow color associated with danger states.                               |
| **Primary Text**      | `--hud-color`               | `#00fefe`                   | Main text color, same as the primary cyan.                                  |
| **Secondary Text**    | `--hud-color-darker`        | `#0aa`                      | For labels, placeholders, and less critical UI text.                        |

## 3. Key Thematic Elements

### a. The Angular "HUD Container"

The core panel style eschews rounded corners in favor of a sharp, framed look. This is achieved with a combination of `border` and absolutely positioned corner elements.

-   **Base Panel (`.hud-container`)**:
    -   `background`: `var(--hud-bg-transparent)` provides a subtle color fill.
    -   `border`: A thin `1px solid var(--hud-color-darker)` defines the main boundary.
    -   `box-shadow`: An `inset` shadow (`inset 0 0 15px rgba(0, 30, 30, 0.5)`) adds depth.
-   **Corners (`.hud-corner`)**:
    -   These are empty `<div>` elements placed at each corner of the container.
    -   `position: absolute;` anchors them to the container's corners.
    -   `border-width` is used selectively (e.g., `border-width: 2px 0 0 2px;` for the top-left) to draw only two sides of the box, creating an L-shape.
    -   The border color is the primary `var(--hud-color)`, making them stand out.

-   **Example (JSX)**:
    ```jsx
    <div className="hud-container">
      <div className="hud-corner corner-top-left"></div>
      <div className="hud-corner corner-top-right"></div>
      <div className="hud-corner corner-bottom-left"></div>
      <div className="hud-corner corner-bottom-right"></div>
      {/* Content */}
    </div>
    ```

### b. Glow, Flicker, and Scanlines

Animations create a dynamic, "live system" feel.
-   **Glow**: Achieved via `text-shadow`. Headings and important text have a subtle glow to simulate light emission.
    -   `text-shadow: 0 0 5px var(--glow-color);`
-   **Flicker (`.animate-flicker`)**: An animation that varies `text-shadow` and `opacity` to create an unstable, electric effect on key text like the main logo.
-   **Scanline (`.scanline`)**: A fixed-position element that animates vertically across the screen. It's a thin `div` with a radial gradient background, simulating a CRT monitor refresh effect and adding ambient motion.

### c. Typography

Fonts are critical to the sci-fi aesthetic.
-   **Headings (`h1-h6`, `.font-heading`)**: `Orbitron`, a futuristic display font. Styled with `uppercase` and `letter-spacing` for a technical, blocky look.
-   **Body & Code**: `Share Tech Mono` and `Fira Code` are used for all other text, providing excellent readability with a clean, monospaced feel appropriate for a terminal or IDE.

## 4. Component-Specific Recipes

**Buttons**:
-   **Style**: Angular (no `border-radius`), transparent background, and a `1px` border in the variant color (`primary`, `secondary`, `danger`).
-   **Hover/Focus**: The background fills with the border color, and the text becomes black for high contrast, creating an "activated" feel.
-   **Disabled**: `opacity-50` with muted colors to clearly indicate an inactive state.

**Select Dropdowns**:
-   **Style**: Fully custom component to match the HUD theme. The button is angular with a dark background and a cyan border. The dropdown arrow is a custom SVG.
-   **Menu**: The dropdown list appears as a semi-transparent black panel (`bg-black/90 backdrop-blur-sm`) with a bright cyan border, looking like a projected overlay.
-   **Options**: Highlighted options get a semi-transparent cyan background (`bg-[var(--hud-color)]/20`).

**Input Fields & Textareas**:
-   **Base**: Dark background (`bg-black/70`), mid-cyan border (`border-[var(--hud-color-darker)]`).
-   **Focus**: The border brightens to the primary cyan (`focus:border-[var(--hud-color)]`) and a `1px` ring is added for a sharp focus state.
-   **Placeholder**: Uses the `blinking-placeholder` class with a custom `blink-caret` animation to simulate a terminal prompt.

**Code Blocks (`react-syntax-highlighter`)**:
-   A completely custom theme object (`hudTheme`) was created to style the code.
-   **Background**: Transparent, to blend with its parent container.
-   **Keywords (`function`, `const`)**: Primary cyan (`#00fefe`).
-   **Strings & Built-ins**: Bright green (`#A8FF60`).
-   **Numbers**: Magenta/Pink (`#ff73fd`).
-   **Comments**: Muted grey (`#7C7C7C`).
-   This ensures that code snippets feel native to the HUD environment.

**Custom Scrollbar**:
-   **Track**: Pure black to disappear into the background.
-   **Thumb**: Dark cyan (`--hud-color-darkest`) with a mid-cyan border.
-   **Hover**: Thumb brightens to the mid-cyan color for clear feedback.
