"use client";

import { useEffect, useState } from "react";

export default function FindUsPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const links = [
    { label: "📌 Pinterest", href: "#" },
    { label: "📸 Instagram", href: "#" },
    { label: "▶️ YouTube", href: "#" },
    { label: "✉️ Email Us", href: "mailto:example@email.com" },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden text-[#ffecd2]">
      {/* ===== Animated Bakery Background ===== */}
      <div className="absolute inset-0">
        {/* warm gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a07] via-[#1a1208] to-[#211a12]" />

        {/* glow lights */}
        <div className="absolute top-[15%] left-[10%] w-72 h-72 bg-[#d4a574]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[15%] right-[10%] w-72 h-72 bg-[#8b5a2b]/10 rounded-full blur-3xl animate-pulse" />

        {/* floating sparks */}
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#ffd699]/50 rounded-full float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.25}s`,
              animationDuration: `${4 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* ===== Content ===== */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center px-6 py-16 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="w-full max-w-md bg-[#1a1208]/90 backdrop-blur-md border border-[#3d2e1f] rounded-2xl p-8 shadow-[0_0_40px_rgba(212,165,116,0.15)]">
          {/* title */}
          <h1 className="pixel-font text-3xl text-center mb-6 glow-title">
            📍 Find Us
          </h1>

          <p className="text-[#c9b28a] text-center mb-8">
            This is a university demo bakery project. Follow our cozy cookie
            world below.
          </p>

          {/* link buttons */}
          <div className="flex flex-col gap-4">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="group border border-[#3d2e1f] py-3 rounded-lg text-center text-[#d4a574] transition-all duration-300 hover:border-[#d4a574] hover:bg-[#2a1f15] hover:shadow-[0_0_15px_rgba(212,165,116,0.4)] hover:-translate-y-1"
              >
                <span className="pixel-font group-hover:text-[#ffecd2] transition">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* retro overlay */}
      <div className="scanlines absolute inset-0 pointer-events-none opacity-10" />
    </main>
  );
}
