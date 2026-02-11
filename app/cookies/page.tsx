"use client";

import { useState } from "react";

const cookies = [
  {
    name: "🍪 Chocolate Chip Cookie",
    image: "/cookies/chocolatechipcookie.png",
    price: "6 Pieces – $6.99\n12 Pieces – $12.99\n24 Pieces – $23.99",
    description:
      "Classic soft and chewy cookies loaded with rich chocolate chips. Freshly baked with a golden crisp edge and gooey center.",
    ingredients:
      "Flour, sugar, brown sugar, butter, eggs, vanilla, baking soda, chocolate chips.",
    allergen:
      "Contains wheat (gluten), dairy, and eggs. May contain traces of nuts.",
  },
  {
    name: "❤️ Red Velvet Cookie",
    image: "/cookies/redvelvetcookie.png",
    price: "6 Pieces – $7.49\n12 Pieces – $13.99\n24 Pieces – $25.99",
    description:
      "Soft red velvet cookies with a rich cocoa flavor and creamy white chocolate chips. Slightly crisp outside, soft inside.",
    ingredients:
      "Flour, sugar, cocoa powder, butter, eggs, red food coloring, vanilla, white chocolate chips.",
    allergen:
      "Contains wheat (gluten), dairy, and eggs. May contain traces of nuts.",
  },
  {
    name: "🍬 Sugar Cookie",
    image: "/cookies/sugarcookie.png",
    price: "6 Pieces – $6.49\n12 Pieces – $11.99\n24 Pieces – $21.99",
    description:
      "Soft, buttery sugar cookies with a light crisp edge and sweet vanilla flavor. Perfect for any occasion.",
    ingredients: "Flour, sugar, butter, eggs, vanilla, baking powder.",
    allergen:
      "Contains wheat (gluten), dairy, and eggs. May contain traces of nuts.",
  },
  {
    name: "🍵 Matcha White Chip Cookie",
    image: "/cookies/matchawhitechipcookie.png",
    price: "6 Pieces – $7.99\n12 Pieces – $14.99\n24 Pieces – $27.99",
    description:
      "Soft and chewy matcha cookies blended with premium green tea powder and sweet white chocolate chips for a rich, earthy flavor.",
    ingredients:
      "Flour, sugar, butter, eggs, matcha powder, vanilla, baking soda, white chocolate chips.",
    allergen:
      "Contains wheat (gluten), dairy, and eggs. May contain traces of nuts.",
  },
];

export default function CookiesPage() {
  const [selected, setSelected] = useState(cookies[0]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#120c07] via-[#0a0705] to-black text-[#ffecd2] p-8">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#d4a574]/20 blur-3xl" />

      <h1 className="pixel-font text-5xl text-center mb-10 tracking-wider drop-shadow-lg">
        🍪 Cookie Collection
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {/* Cookie Selector */}
        <div className="space-y-4">
          {cookies.map((cookie) => {
            const active = selected.name === cookie.name;

            return (
              <button
                key={cookie.name}
                onClick={() => setSelected(cookie)}
                className={`flex items-center gap-4 w-full p-4 rounded-xl border-2 transition-all duration-300 ${
                  active
                    ? "bg-[#2a1b10] border-[#d4a574] shadow-lg scale-105"
                    : "bg-[#1a1208] border-[#3d2e1f] hover:border-[#d4a574] hover:scale-105"
                }`}
              >
                <span className="text-xl">→</span>
                <span className="pixel-font">{cookie.name}</span>
              </button>
            );
          })}
        </div>

        {/* Details Card */}
        <div className="md:col-span-2 relative rounded-2xl border-2 border-[#d4a574] bg-gradient-to-br from-[#1a1208] to-[#120c07] p-6 shadow-2xl">
          <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_60px_rgba(212,165,116,0.25)]" />

          <img
            src={selected.image}
            alt={selected.name}
            className="relative w-full max-h-72 object-contain mb-6 transition-transform duration-500 hover:scale-105 drop-shadow-xl"
          />

          <h2 className="pixel-font text-3xl mb-4">{selected.name}</h2>

          {/* Description */}
          <p className="text-[#d4a574] mb-6 leading-relaxed">
            {selected.description}
          </p>

          {/* Ingredients + Allergen + Storage */}
          <div className="space-y-4 text-sm leading-relaxed mb-6">
            <div>
              <h3 className="pixel-font text-lg mb-1 text-[#d4a574]">
                Ingredients:
              </h3>
              <p>{selected.ingredients}</p>
            </div>

            <div>
              <h3 className="pixel-font text-lg mb-1 text-red-400">
                Allergen Warning ⚠️
              </h3>
              <p>{selected.allergen}</p>
            </div>

            <div>
              <h3 className="pixel-font text-lg mb-1 text-[#d4a574]">
                Storage:
              </h3>
              <p>Store in an airtight container. Best enjoyed within 5 days.</p>
            </div>
          </div>

          {/* Prices + Button */}
          <div className="flex justify-between items-end">
            <div className="pixel-font text-2xl space-y-2">
              {selected.price.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>

            <button className="pixel-font px-8 py-3 rounded-xl border-2 border-[#d4a574] bg-[#8b5a2b] transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
