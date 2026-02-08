"use client";

import { useState } from "react";

const cookies = [
  {
    name: "Chocolate Chip",
    image: "/cookies/chocolatechipcookie.png",
    price: "$3.50",
    description:
      "Buttery dough with rich chocolate chunks. Crispy edges and a soft center.",
  },
  {
    name: "Red Velvet",
    image: "/cookies/redvelvetcookie.png",
    price: "$4.00",
    description: "Mild cocoa flavor with creamy sweetness.",
  },
  {
    name: "Sugar Cookie",
    image: "/cookies/sugarcookie.png",
    price: "$3.00",
    description: "Light vanilla flavor and soft texture.",
  },
  {
    name: "Matcha White Chip",
    image: "/cookies/matchawhitechipcookie.png",
    price: "$4.50",
    description: "Earthy matcha balanced with white chocolate.",
  },
];

export default function CookiesPage() {
  const [selected, setSelected] = useState(cookies[0]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#120c07] via-[#0a0705] to-black text-[#ffecd2] p-8">
      {/* ambient glow background */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#d4a574]/20 blur-3xl" />

      <h1 className="pixel-font text-5xl text-center mb-10 tracking-wider drop-shadow-lg">
        🍪 Cookie Collection
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {/* cookie selector */}
        <div className="space-y-4">
          {cookies.map((cookie) => {
            const active = selected.name === cookie.name;

            return (
              <button
                key={cookie.name}
                onClick={() => setSelected(cookie)}
                className={`
                  flex items-center gap-4 w-full p-4 rounded-xl border-2
                  transition-all duration-300
                  ${
                    active
                      ? "bg-[#2a1b10] border-[#d4a574] shadow-lg scale-105"
                      : "bg-[#1a1208] border-[#3d2e1f] hover:border-[#d4a574] hover:scale-105"
                  }
                `}
              >
                <span
                  className={`text-xl transition-transform duration-300 ${
                    active ? "translate-x-1" : "group-hover:translate-x-1"
                  }`}
                >
                  →
                </span>

                <span className="pixel-font">{cookie.name}</span>
              </button>
            );
          })}
        </div>

        {/* details card */}
        <div className="md:col-span-2 relative rounded-2xl border-2 border-[#d4a574] bg-gradient-to-br from-[#1a1208] to-[#120c07] p-6 shadow-2xl">
          {/* glow */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_60px_rgba(212,165,116,0.25)]" />

          <img
            src={selected.image}
            alt={selected.name}
            className="relative w-full max-h-72 object-contain mb-6 transition-transform duration-500 hover:scale-105 drop-shadow-xl"
          />

          <h2 className="pixel-font text-3xl mb-3">{selected.name}</h2>

          <p className="text-[#d4a574] mb-6 leading-relaxed">
            {selected.description}
          </p>

          <div className="flex justify-between items-center">
            <span className="pixel-font text-2xl">{selected.price}</span>

            <button className="pixel-font px-8 py-3 rounded-xl border-2 border-[#d4a574] bg-[#8b5a2b] transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
