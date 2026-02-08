"use client";

import { useEffect, useState } from "react";

export default function OurStoryPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden text-[#ffecd2]">
      {/* ===== Animated Background ===== */}
      <div className="absolute inset-0">
        {/* warm bakery gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a07] via-[#1a1208] to-[#211a12]" />

        {/* glow orbs */}
        <div className="absolute top-[10%] left-[15%] w-64 h-64 bg-[#d4a574]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-[#8b5a2b]/10 rounded-full blur-3xl animate-pulse" />

        {/* floating spark particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#ffd699]/50 rounded-full float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* ===== Content ===== */}
      <div
        className={`relative z-10 flex justify-center px-6 py-16 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="max-w-3xl bg-[#1a1208]/90 backdrop-blur-md border border-[#3d2e1f] rounded-2xl p-10 shadow-[0_0_40px_rgba(212,165,116,0.15)] hover:shadow-[0_0_60px_rgba(212,165,116,0.25)] transition">
          {/* title */}
          <h1 className="pixel-font text-4xl text-center mb-10 glow-title">
            📖 Our Story
          </h1>

          {/* story text */}
          <p className="text-[#d4a574] leading-relaxed mb-6 text-lg">
            Our story began with a love for baking and a passion for creating
            cookies that bring people together. This concept was developed to
            explore how thoughtful design, creativity, and storytelling can turn
            simple ideas into a memorable brand experience.
          </p>

          <p className="text-[#d4a574] leading-relaxed mb-10 text-lg">
            From imagining flavors to designing the website, every detail
            reflects warmth, creativity, and attention to quality — just like
            fresh cookies baked with care.
          </p>

          {/* divider glow */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#3d2e1f] to-transparent mb-8" />

          {/* disclaimer */}
          <h2 className="pixel-font text-xl mb-3">Disclaimer</h2>

          <p className="text-sm text-[#8b7355] leading-relaxed">
            This website was created as part of a university project for
            academic purposes only. The brand and content presented are not
            affiliated with a commercial business and the website will be
            removed after the completion of the project period.
          </p>
        </div>
      </div>

      {/* subtle scanlines */}
      <div className="scanlines absolute inset-0 pointer-events-none opacity-10" />
    </main>
  );
}
