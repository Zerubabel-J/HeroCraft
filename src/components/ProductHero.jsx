import React from "react";

const ProductHero = ({ settings = {} }) => {
  const {
    title = "Amazing Product",
    description = "<p>Discover our incredible product that will transform your experience. Built with premium materials and innovative design.</p>",
    main_image = null,
    secondary_image = null,
    button_label = "Shop Now",
    button_link = "#",
    color_style = "background-1",
    layout = "image-left",
  } = settings;

  // Color scheme mapping for Tailwind classes
  const colorSchemeClasses = {
    "background-1": "bg-gray-50 text-gray-900",
    "background-2": "bg-white text-gray-900",
    "background-3": "bg-gray-100 text-gray-900",
    "accent-1": "bg-blue-50 text-blue-900",
    "accent-2": "bg-green-50 text-green-900",
  };

  const colorClass =
    colorSchemeClasses[color_style] || colorSchemeClasses["background-1"];

  return (
    <section className={`py-8 md:py-16 ${colorClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
            layout === "image-right" ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Product Image Container */}
          <div className="w-full lg:flex-1 relative">
            {main_image && (
              <div className="relative z-10">
                <img
                  src={main_image}
                  alt={title}
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            )}

            {secondary_image && (
              <div className="absolute bottom-[-0.5rem] md:bottom-[-1rem] right-[-0.5rem] md:right-[-1rem] z-0 max-w-[30%] md:max-w-[40%]">
                <img
                  src={secondary_image}
                  alt="Secondary product view"
                  className="w-full h-auto rounded-lg shadow-md"
                  loading="lazy"
                />
              </div>
            )}
          </div>

          {/* Product Content Container */}
          <div className="w-full lg:flex-1 max-w-lg text-center lg:text-left">
            {title && (
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                {title}
              </h2>
            )}

            {description && (
              <div
                className="text-base md:text-lg leading-relaxed mb-6 md:mb-8 text-gray-700"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}

            {button_label && button_link && (
              <div className="mt-4 md:mt-6">
                <a
                  href={button_link}
                  className="inline-block px-6 md:px-8 py-2.5 md:py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 shadow-md text-sm md:text-base"
                >
                  {button_label}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
