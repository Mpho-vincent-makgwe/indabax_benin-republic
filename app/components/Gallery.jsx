// src/components/Gallery.jsx
import React from 'react';

// Import all .jpg/.png/.jpeg/.webp images from a folder using Vite's import.meta.glob
const images = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp}', { eager: true });

const Gallery = () => {
  const imagePaths = Object.values(images).map((img) => img.default);
  return (
    <section className="my-16">
      <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">📷 Photo Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-2">
        {imagePaths.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
