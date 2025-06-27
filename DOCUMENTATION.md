# Product Hero Section - Technical Documentation

## 🏗️ Project Architecture

This project demonstrates a **dual-platform approach** to building reusable UI components:

1. **Shopify Liquid Section** (`sections/product-hero.liquid`)
2. **React Component** (`src/components/ProductHero.jsx`)

Both implementations share identical functionality and visual appearance, proving the concept of cross-platform component development.

---

## 📁 File Structure

```
HeroCraft/
├── 📁 sections/                    # Shopify Liquid files
│   ├── product-hero.liquid        # Main section file
│   └── product-hero-demo.liquid   # Usage example
├── 📁 src/                        # React application
│   ├── 📁 components/
│   │   └── ProductHero.jsx        # React component
│   ├── 📁 mock/
│   │   └── productHeroSettings.json # Mock data
│   ├── App.jsx                    # Main React app
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Tailwind styles
├── package.json                   # Dependencies
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind configuration
├── postcss.config.js              # PostCSS configuration
└── README.md                      # Project overview
```

---

## 🛍️ Shopify Liquid Section

### Features

- **Complete Schema**: All settings are configurable via Shopify's theme customizer
- **Responsive Design**: Mobile-first approach with CSS Grid/Flexbox
- **Theme Integration**: Uses standard Shopify CSS classes and color schemes
- **Image Handling**: Supports main and secondary images with lazy loading
- **Rich Text**: Properly handles Shopify's `richtext` setting output

### Key Technical Decisions

#### 1. Schema Design

```liquid
{% schema %}
{
  "name": "Product Hero",
  "settings": [
    { "type": "text", "id": "title", "label": "Product Title" },
    { "type": "richtext", "id": "description", "label": "Product Description" },
    { "type": "image_picker", "id": "main_image", "label": "Main Product Image" },
    { "type": "image_picker", "id": "secondary_image", "label": "Secondary Image (Optional)" },
    { "type": "text", "id": "button_label", "label": "Button Label" },
    { "type": "url", "id": "button_link", "label": "Button Link" },
    { "type": "color_scheme", "id": "color_style", "label": "Color Scheme" },
    { "type": "select", "id": "layout", "label": "Layout Direction" }
  ]
}
{% endschema %}
```

#### 2. Responsive CSS

```css
.product-hero {
  display: flex;
  align-items: center;
  gap: 3rem;
}

@media (max-width: 768px) {
  .product-hero {
    flex-direction: column !important;
    text-align: center;
  }
}
```

#### 3. Image Optimization

```liquid
{{ section.settings.main_image | image_url: width: 600 | image_tag:
   loading: 'lazy',
   alt: section.settings.main_image.alt | default: section.settings.title,
   class: 'product-hero__image'
}}
```

---

## ⚛️ React Component

### Features

- **Props-Driven**: Accepts a `settings` object mirroring Shopify's schema
- **Tailwind CSS**: Utility-first styling for rapid development
- **Responsive Design**: Mobile-first with responsive breakpoints
- **Type Safety**: Proper prop destructuring with defaults
- **HTML Rendering**: Safely handles rich text content

### Key Technical Decisions

#### 1. Props Structure

```jsx
const ProductHero = ({ settings = {} }) => {
  const {
    title = 'Amazing Product',
    description = '<p>Default description</p>',
    main_image = null,
    secondary_image = null,
    button_label = 'Shop Now',
    button_link = '#',
    color_style = 'background-1',
    layout = 'image-left'
  } = settings;
```

#### 2. Color Scheme Mapping

```jsx
const colorSchemeClasses = {
  "background-1": "bg-gray-50 text-gray-900",
  "background-2": "bg-white text-gray-900",
  "background-3": "bg-gray-100 text-gray-900",
  "accent-1": "bg-blue-50 text-blue-900",
  "accent-2": "bg-green-50 text-green-900",
};
```

#### 3. Responsive Layout

```jsx
<div className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
  layout === 'image-right' ? 'lg:flex-row-reverse' : ''
}`}>
```

#### 4. Safe HTML Rendering

```jsx
<div
  className="text-lg leading-relaxed mb-8 text-gray-700"
  dangerouslySetInnerHTML={{ __html: description }}
/>
```

---

## 🔄 Data Bridge

### Mock Settings (`src/mock/productHeroSettings.json`)

This file simulates the `section.settings` object that Shopify would provide:

```json
{
  "title": "Premium Wireless Headphones",
  "description": "<p>Experience crystal-clear sound...</p>",
  "main_image": "https://images.unsplash.com/...",
  "secondary_image": "https://images.unsplash.com/...",
  "button_label": "Shop Now",
  "button_link": "/products/premium-wireless-headphones",
  "color_style": "background-1",
  "layout": "image-left"
}
```

### Real-World Integration

In a production environment, this would be replaced with:

- API calls to Shopify's Admin API
- Real-time data from a page builder
- Dynamic content from a CMS

---

## 🎨 Styling Strategy

### Shopify Liquid

- **CSS Custom Properties**: Uses Shopify's CSS variables for theming
- **BEM Methodology**: Block-Element-Modifier for maintainable CSS
- **Mobile-First**: Progressive enhancement approach

### React Component

- **Tailwind CSS**: Utility-first framework for rapid development
- **Responsive Classes**: Built-in responsive design utilities
- **Custom Components**: Reusable component classes

---

## 🚀 Development Workflow

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

---

## 🔧 Configuration Files

### Vite (`vite.config.js`)

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});
```

### Tailwind (`tailwind.config.js`)

```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        shopify: {
          500: "#008060",
          600: "#006b52",
        },
      },
    },
  },
};
```

---

## 📱 Responsive Design

### Breakpoints

- **Mobile**: `< 768px` - Stacked layout, centered text
- **Tablet**: `768px - 1024px` - Side-by-side layout
- **Desktop**: `> 1024px` - Full layout with larger spacing

### Key Responsive Features

1. **Flexible Images**: Scale appropriately on all devices
2. **Typography**: Font sizes adjust for readability
3. **Spacing**: Padding and margins scale with screen size
4. **Layout**: Flexbox direction changes on mobile

---

## 🧪 Testing Strategy

### Manual Testing

1. **Cross-Browser**: Chrome, Firefox, Safari, Edge
2. **Device Testing**: Mobile, tablet, desktop
3. **Content Testing**: Various text lengths and image sizes
4. **Interaction Testing**: Button clicks, hover states

### Automated Testing (Future)

- Unit tests for React component
- Visual regression testing
- Accessibility testing
- Performance testing

---

## 🔒 Security Considerations

### Shopify Liquid

- **Liquid Escaping**: All user input is properly escaped
- **Image Validation**: Images are processed through Shopify's CDN
- **URL Validation**: Links are validated by Shopify

### React Component

- **HTML Sanitization**: Rich text content is trusted (merchant input)
- **Props Validation**: Default values prevent undefined errors
- **Image Loading**: Lazy loading for performance

---

## 🚀 Deployment

### Shopify Theme

1. Upload `sections/product-hero.liquid` to theme
2. Add section via theme customizer
3. Configure settings as needed

### React Application

1. Build with `npm run build`
2. Deploy to hosting service (Vercel, Netlify, etc.)
3. Configure environment variables if needed

---

## 📈 Performance Optimization

### Shopify Liquid

- **Lazy Loading**: Images load only when needed
- **CSS Optimization**: Minimal, focused styles
- **Liquid Efficiency**: Efficient variable assignments

### React Component

- **Code Splitting**: Component can be lazy-loaded
- **Image Optimization**: Responsive images with proper sizing
- **Bundle Optimization**: Tree-shaking removes unused code

---

## 🔮 Future Enhancements

### Potential Features

1. **Animation Support**: CSS animations and transitions
2. **Video Background**: Support for video content
3. **Advanced Layouts**: More layout options (grid, masonry)
4. **A/B Testing**: Built-in testing capabilities
5. **Analytics Integration**: Click tracking and performance metrics

### Technical Improvements

1. **TypeScript**: Add type safety to React component
2. **Storybook**: Component documentation and testing
3. **Automated Testing**: Jest and React Testing Library
4. **CI/CD Pipeline**: Automated deployment workflow

---

## 📚 Resources

### Documentation

- [Shopify Liquid Documentation](https://shopify.dev/docs/themes/liquid)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)

### Best Practices

- [Shopify Theme Development](https://shopify.dev/docs/themes/best-practices)
- [React Best Practices](https://react.dev/learn)
- [CSS Architecture](https://css-tricks.com/css-architecture/)

---

This documentation provides a comprehensive overview of the project's technical implementation, architecture decisions, and development workflow. It serves as a reference for developers working with both the Shopify Liquid section and the React component.
