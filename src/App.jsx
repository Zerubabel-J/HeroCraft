import React from "react";
import ProductHero from "./components/ProductHero";
import productHeroSettings from "./mock/productHeroSettings.json";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            🧨 Product Hero Section Demo
          </h1>
          <p className="mt-2 text-gray-600">
            A polished, responsive, and reusable Shopify Liquid section mirrored
            in React
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Demo Section */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                React Component Demo
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                This React component perfectly replicates the Shopify Liquid
                section below. It accepts the same settings structure and
                renders an identical UI.
              </p>
            </div>
          </div>
        </section>

        {/* Product Hero Component */}
        <ProductHero settings={productHeroSettings} />

        {/* Alternative Layout Demo */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Alternative Layout (Image Right)
              </h2>
              <p className="text-gray-600">
                Same component with different layout and color scheme settings
              </p>
            </div>
          </div>
        </section>

        <ProductHero
          settings={{
            ...productHeroSettings,
            layout: "image-right",
            color_style: "accent-1",
            title: "Smart Fitness Watch",
            description:
              "<p>Track your fitness goals with our <strong>advanced smartwatch</strong>. Monitor heart rate, steps, sleep quality, and more with precision accuracy.</p><p>Stay connected and motivated with real-time notifications and personalized insights.</p>",
            main_image:
              "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop&crop=center",
            secondary_image:
              "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=300&h=200&fit=crop&crop=center",
            button_label: "Learn More",
            button_link: "/products/smart-fitness-watch",
          }}
        />

        {/* Info Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Project Features
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-2xl mb-4">🛍️</div>
                  <h3 className="text-xl font-semibold mb-2">Shopify Liquid</h3>
                  <p className="text-gray-600">
                    Complete section with schema, responsive design, and theme
                    integration
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-2xl mb-4">⚛️</div>
                  <h3 className="text-xl font-semibold mb-2">
                    React Component
                  </h3>
                  <p className="text-gray-600">
                    Perfect replica using Tailwind CSS and props-driven
                    architecture
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-2xl mb-4">📱</div>
                  <h3 className="text-xl font-semibold mb-2">
                    Responsive Design
                  </h3>
                  <p className="text-gray-600">
                    Mobile-first approach with seamless desktop and mobile
                    experiences
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            Built with ❤️ for Shopify development excellence
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
