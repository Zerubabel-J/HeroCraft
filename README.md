# Quick Setup Guide

![Real Working Architecture](https://github.com/user-attachments/assets/08ab10c2-11b1-44b8-b096-a8eee20fe977)


## Prerequisites

- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)
- **Git** (for version control)

## Installation Steps

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd HeroCraft
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will open automatically at `http://localhost:3000`

## 🛠️ Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |

## 📁 Project Structure Overview

```
HeroCraft/
├── sections/                    # Shopify Liquid files
│   └── product-hero.liquid     # Main section file
├── src/                        # React application
│   ├── components/
│   │   └── ProductHero.jsx     # React component
│   ├── mock/
│   │   └── productHeroSettings.json
│   ├── App.jsx                 # Main React app
│   └── main.jsx                # Entry point
├── package.json                # Dependencies
└── README.md                   # Project overview
```

## 🎯 What You'll See

1. **Header Section**: Project title and description
2. **React Component Demo**: Product Hero with sample data
3. **Alternative Layout**: Same component with different settings
4. **Features Section**: Overview of project capabilities

## 🔧 Customization

### Modifying the React Component

Edit `src/components/ProductHero.jsx` to change:

- Layout behavior
- Styling (Tailwind classes)
- Component logic

### Changing Sample Data

Edit `src/mock/productHeroSettings.json` to modify:

- Product title and description
- Image URLs
- Button text and links
- Color schemes

### Updating the Shopify Section

Edit `sections/product-hero.liquid` to modify:

- Liquid template logic
- CSS styling
- Schema settings

## 🐛 Troubleshooting

### Common Issues

**Port 3000 already in use:**

```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9
# Or use a different port
npm run dev -- --port 3001
```

**Dependencies not installed:**

```bash
rm -rf node_modules package-lock.json
npm install
```

**PostCSS configuration error:**

```bash
# Ensure postcss.config.js uses CommonJS syntax
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### Development Tips

1. **Hot Reload**: Changes to React components will automatically refresh the browser
2. **Tailwind Classes**: Use the browser dev tools to experiment with Tailwind classes
3. **Responsive Testing**: Test on different screen sizes using browser dev tools
4. **Console Logs**: Check browser console for any errors or warnings

## 📱 Testing Responsive Design

1. Open browser dev tools (F12)
2. Click the device toggle button
3. Test different device sizes:
   - Mobile (375px)
   - Tablet (768px)
   - Desktop (1024px+)

## 🚀 Next Steps

### For Shopify Development

1. Copy `sections/product-hero.liquid` to your Shopify theme
2. Add the section via theme customizer
3. Configure settings as needed

### For React Development

1. Integrate `ProductHero.jsx` into your React application
2. Replace mock data with real API calls
3. Customize styling to match your design system

### For Learning

1. Study the code structure and patterns
2. Experiment with different settings
3. Try adding new features or layouts

## 📚 Additional Resources

- [Shopify Liquid Documentation](https://shopify.dev/docs/themes/liquid)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Happy coding! 🎉**
