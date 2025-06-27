---

# 🧨 Product Hero Section Demo

🔥 A polished, responsive, and reusable Shopify Liquid section for product promotion, mirrored in a React component for a seamless custom editor experience.

This project demonstrates the ability to build high-quality, modular UI components that bridge the gap between Shopify's Liquid templating engine and a modern React-based frontend, such as a custom page builder.

**[▶️ View the Live React Demo (CodeSandbox)](https://codesandbox.io/p/github/YOUR_USERNAME/YOUR_REPO_NAME)** *(Replace with your link)*

---

## 🎯 Project Goal

The primary goal of this project is to create a versatile "Product Hero" section. This involves two key deliverables:
1.  A **Shopify Liquid section** that merchants can easily add and customize in any theme.
2.  A **React component** that perfectly replicates the Liquid section's appearance and behavior, designed to be used within a modern web app or a custom theme editor.

This dual-platform approach showcases a deep understanding of both Shopify theme architecture and modern frontend development practices.

---

## ✅ Competencies Demonstrated

This project proves proficiency in several key areas crucial for Shopify development:

| Competency | Description |
| :--- | :--- |
| **Reusable Liquid Architecture** | Wrote a self-contained, theme-agnostic Liquid section that relies only on `section.settings` and standard Shopify classes. |
| **Robust Setting Handling** | Mastered the quirks of Shopify's `richtext`, `image_picker`, and `color_scheme` settings to ensure reliability. |
| **React Component Mirroring** | Accurately reproduced the Liquid section in React, using props derived from a JSON object to manage state. |
| **Modern & Responsive UI/UX** | Designed a visually appealing, clean, and modern layout that works seamlessly on both desktop and mobile devices. |
| **Systems-Level Thinking** | Architected a solution that considers how Liquid and React ecosystems can work together in a real-world scenario (like a page builder app). |

---

## 🔧 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Shopify Liquid** | For the native Shopify theme section, providing dynamic content via the Theme Customizer. |
| **React** | To build the mirrored component for use in a modern, JavaScript-driven editor environment. |
| **Tailwind CSS** | For rapid, utility-first styling in the React component, ensuring a clean and maintainable UI. |
| **HTML/CSS** | For foundational structure and styling within the Liquid section, adhering to Shopify best practices. |

---

## 📂 Project Structure

```
.
├── 📁 sections/
│   └── 📄 product-hero.liquid   # The complete Shopify Liquid section
├── 📁 src/
│   ├── 📁 components/
│   │   └── 📄 ProductHero.jsx   # The React component replica
│   ├── 📁 mock/
│   │   └── 📄 productHeroSettings.json # Mock settings for the React component
│   └── 📄 App.jsx              # Renders the React component with mock data
└── 📄 README.md                # You are here!
```

---

## ✨ Core Features

| Feature | Implementation Details |
| :--- | :--- |
| 🖼️ **Product Image** | Main image selected via `image_picker` in Liquid, passed as a `src` URL prop in React. |
| 📝 **Dynamic Content** | Product title (`text`) and description (`richtext`) are fully customizable. |
| 🎨 **Color Scheme Support** | Uses Shopify's `color_scheme` setting, with fallback logic, and maps to Tailwind CSS classes in React for consistency. |
| 🧱 **Flexible Layouts** | A `select` setting allows merchants to switch the image position between left and right. |
| 📱 **Fully Responsive** | The layout adapts gracefully from a side-by-side desktop view to a stacked mobile view using Flexbox/Grid. |
| ⚛️ **React Replica** | The React component accepts a `settings` prop (mirroring the Shopify schema) and renders an identical UI. |

---

## 🛠️ How It Works

### 1. The Shopify Liquid Section (`product-hero.liquid`)

This file is the ground truth. It's a standard Shopify section with a complete schema that allows a merchant to configure:
- Text content (title, description)
- Images (main and an optional secondary one)
- A call-to-action (CTA) button with a label and link
- Layout direction (image left/right)
- Color scheme

It uses Shopify's standard CSS classes (`section`, `page-width`, `color-{{ section.settings.color_scheme }}`) to ensure it inherits styles from the active theme.

<details>
<summary>📋 View Shopify Section Schema</summary>

```json
{
  "name": "Product Hero",
  "settings": [
    { "type": "text", "id": "title", "label": "Product Title" },
    { "type": "richtext", "id": "description", "label": "Product Description" },
    { "type": "image_picker", "id": "main_image", "label": "Main Image" },
    { "type": "image_picker", "id": "secondary_image", "label": "Secondary Image (optional)" },
    { "type": "text", "id": "button_label", "label": "Button Label", "default": "Shop Now" },
    { "type": "url", "id": "button_link", "label": "Button Link" },
    {
      "type": "color_scheme",
      "id": "color_style",
      "label": "Color Scheme",
      "default": "background-1"
    },
    {
      "type": "select",
      "id": "layout",
      "label": "Layout Direction",
      "options": [
        { "value": "image-left", "label": "Image on Left" },
        { "value": "image-right", "label": "Image on Right" }
      ],
      "default": "image-left"
    }
  ],
  "presets": [{ "name": "Default Product Hero Section" }]
}
```

</details>

### 2. The React Component (`ProductHero.jsx`)

This is a functional React component that accepts a `settings` object as a prop. This `settings` object has the exact same structure as the values generated by the Liquid section's schema.

-   **Props-Driven UI:** All content and configuration (layout, colors) are determined by the incoming props.
-   **Safe HTML Rendering:** It uses `dangerouslySetInnerHTML` to correctly render the HTML generated by Shopify's `richtext` editor, demonstrating knowledge of how to handle this specific data type.
-   **Tailwind for Styling:** Utility classes are used to precisely control the layout, spacing, and responsive behavior, making the component easy to read and modify.

### 3. The Bridge (`productHeroSettings.json`)

This JSON file acts as a mock data source. It simulates the `section.settings` object that a Shopify theme would provide. This allows the React component to be developed and tested in complete isolation from a live Shopify store, proving its modularity.

---

## 🚀 Getting Started (React Demo)

To run the React component demo locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    cd YOUR_REPO_NAME
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    # or npm start
    ```
This will open a new browser tab showcasing the `ProductHero` component rendered with the mock data.

---

## 🎤 Interview Talking Points

This project was designed to address common technical challenges and discussion points in Shopify development interviews:

-   **Handling `shopify://` URLs:** In a real app, the `image_picker` provides a `shopify://shop_images/foo.jpg` URI. The React app would need a simple utility function to transform this into a full CDN URL (e.g., using a prefix like `https://cdn.shopify.com/s/files/1/..../files/`). This project simulates this with standard image URLs for simplicity.

-   **`richtext` Nuances:** Shopify's `richtext` setting doesn't just output plain text; it outputs an HTML string (e.g., `<p><strong>Bold text</strong></p>`). The only reliable way to render this in React is with `dangerouslySetInnerHTML`, which is safe here because the source is trusted (the merchant's own input).

-   **Theme-Safe `color_scheme`:** If a `color_scheme` value (e.g., `background-3`) isn't defined in a theme's `settings_data.json`, Shopify gracefully ignores it. A robust section should provide its own fallback CSS. The React equivalent is a mapping object that defaults to a known color if a class is not found.

-   **Modularity and Reusability:** This section is highly reusable. It has no hardcoded values and depends only on its own settings and standard theme variables, making it portable to any modern Shopify theme.
