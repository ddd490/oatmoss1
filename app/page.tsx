"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Slower blink for "Press to Start"
  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prev) => !prev);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const handleStart = () => {
    setStarted(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <div className="pixel-font text-2xl text-[#d4a574] animate-pulse">
            Baking...
          </div>
          <div className="mt-4 w-48 h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#8b5a2b] to-[#d4a574] animate-pulse"
              style={{ width: "60%" }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <main
      className="min-h-screen relative overflow-hidden cursor-pointer"
      onClick={!started ? handleStart : undefined}
    >
      {/* Custom Dark Cookie Shop Background */}
      <div className="absolute inset-0">
        {/* Dark sky gradient with warm undertone */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a07] via-[#1a1510] to-[#211a12]" />

        {/* Stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-0.5 h-0.5 bg-[#ffd699]/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 40}%`,
              opacity: 0.3 + Math.random() * 0.5,
            }}
          />
        ))}

        {/* Warm moon/light glow */}
        <div className="absolute top-[10%] right-[15%] w-24 h-24 bg-[#ffd699]/15 rounded-full blur-xl" />
        <div className="absolute top-[12%] right-[17%] w-14 h-14 bg-[#ffd699]/30 rounded-full blur-md" />

        {/* Ground - dark with warm undertone */}
        <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-[#0a0705] via-[#15100a] to-[#1a1510]" />

        {/* Cookie Bakery Building */}
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[400px] h-[300px]">
          {/* Main building - warm wood tones */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[220px] h-[180px] bg-[#2a1f15] border-4 border-[#3d2e1f]" />
          {/* Roof - darker */}
          <div className="absolute bottom-[180px] left-1/2 -translate-x-1/2">
            <div className="w-0 h-0 border-l-[130px] border-r-[130px] border-b-[85px] border-l-transparent border-r-transparent border-b-[#1a1208]" />
          </div>
          {/* Cookie sign on roof */}
          <div className="absolute bottom-[265px] left-1/2 -translate-x-1/2 text-4xl">
            🍪
          </div>
          {/* Chimney with smoke */}
          <div className="absolute bottom-[240px] right-[calc(50%-80px)] w-[30px] h-[50px] bg-[#2a1f15] border-2 border-[#3d2e1f]" />
          <div className="absolute bottom-[290px] right-[calc(50%-72px)] w-3 h-3 bg-[#8b7355]/40 rounded-full blur-sm float" />
          <div
            className="absolute bottom-[310px] right-[calc(50%-68px)] w-2 h-2 bg-[#8b7355]/30 rounded-full blur-sm float"
            style={{ animationDelay: "0.5s" }}
          />
          {/* Shop sign */}
          <div className="absolute bottom-[140px] left-1/2 -translate-x-1/2 w-[120px] h-[25px] bg-[#3d2e1f] border-2 border-[#5a4632] rounded flex items-center justify-center">
            <span className="pixel-font text-xs text-[#d4a574]">BAKERY</span>
          </div>
          {/* Door - arched wooden door */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50px] h-[80px] bg-[#1a1208] border-4 border-[#3d2e1f] rounded-t-full" />
          <div className="absolute bottom-[35px] left-1/2 translate-x-[5px] w-2 h-2 bg-[#d4a574] rounded-full" />{" "}
          {/* Door handle */}
          {/* Windows with warm glow - displaying cookies */}
          <div className="absolute bottom-[60px] left-[calc(50%-85px)] w-[50px] h-[50px] bg-[#ffd699]/20 border-4 border-[#3d2e1f] shadow-[0_0_20px_rgba(255,214,153,0.3)]">
            <div className="absolute inset-1 flex items-center justify-center text-xl">
              🍪
            </div>
          </div>
          <div className="absolute bottom-[60px] right-[calc(50%-85px)] w-[50px] h-[50px] bg-[#ffd699]/20 border-4 border-[#3d2e1f] shadow-[0_0_20px_rgba(255,214,153,0.3)]">
            <div className="absolute inset-1 flex items-center justify-center text-xl">
              🥮
            </div>
          </div>
          {/* Awning - striped bakery style */}
          <div className="absolute bottom-[115px] left-1/2 -translate-x-1/2 w-[180px] h-[20px] bg-gradient-to-r from-[#8b5a2b] via-[#d4a574] to-[#8b5a2b] rounded-b-lg" />
          {/* Side market stalls */}
          <div className="absolute bottom-[40px] left-[calc(50%-170px)] w-[80px] h-[70px] bg-[#2a1f15] border-2 border-[#3d2e1f]">
            <div className="absolute -top-3 left-0 right-0 h-4 bg-[#3d2e1f] rounded-t" />
            <div className="flex items-center justify-center h-full gap-1 text-lg">
              🍪🍪
            </div>
          </div>
          <div className="absolute bottom-[40px] right-[calc(50%-170px)] w-[80px] h-[70px] bg-[#2a1f15] border-2 border-[#3d2e1f]">
            <div className="absolute -top-3 left-0 right-0 h-4 bg-[#3d2e1f] rounded-t" />
            <div className="flex items-center justify-center h-full gap-1 text-lg">
              🥧🧁
            </div>
          </div>
        </div>

        {/* Floating cookie crumbs/particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`crumb-${i}`}
            className="absolute w-1 h-1 bg-[#d4a574]/40 rounded-full float"
            style={{
              left: `${10 + i * 6}%`,
              top: `${30 + (i % 5) * 12}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0705]/60 via-transparent to-transparent" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {!started ? (
          <>
            {/* Logo/Brand Name */}
            <div className="float mb-4">
              <h1
                className="text-7xl md:text-8xl lg:text-[10rem] font-bold text-[#ffecd2] tracking-wider select-none"
                style={{
                  fontFamily: "'Alagard', serif",
                  textShadow: `
                    0 0 30px rgba(212, 165, 116, 0.5),
                    0 0 60px rgba(139, 90, 43, 0.3),
                    4px 4px 0 rgba(0, 0, 0, 0.8),
                    -2px -2px 0 rgba(255, 236, 210, 0.1)
                  `,
                  letterSpacing: "0.02em",
                }}
              >
                Oatmoss
              </h1>
              <p className="text-center pixel-font text-[#d4a574] text-sm tracking-widest mt-2">
                ARTISAN COOKIE BAKERY
              </p>
            </div>

            {/* Press to Start */}
            <div className="mt-12">
              <p
                className="pixel-font text-xl md:text-2xl text-[#d4a574] tracking-[0.3em] uppercase"
                style={{
                  opacity: showText ? 1 : 0,
                  transition: "opacity 0.2s ease-in-out",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                }}
              >
                Press to Start
              </p>
            </div>

            {/* Copyright */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <p className="text-xs text-[#8b7355] tracking-wide">
                © 2025 OATMOSS™ All Rights Reserved.
              </p>
            </div>
          </>
        ) : (
          /* Main Menu after starting - Cookie Shop themed */
          <div className="bg-[#0d0a07]/90 backdrop-blur-md border-2 border-[#3d2e1f] rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl shadow-[#d4a574]/10">
            <div className="text-center mb-6">
              <h2 className="pixel-font text-3xl text-[#ffecd2] mb-2">
                Welcome to Oatmoss!
              </h2>
              <p className="text-[#d4a574] text-sm">Fresh cookies await...</p>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#3d2e1f] to-transparent mt-3" />
            </div>

            <nav className="flex flex-col">
              <a href="/cookies">
                <button className="w-full py-4 px-5 bg-[#1a1208] border-2 border-[#3d2e1f] rounded-lg">
                  <span className="pixel-font flex items-center gap-3 text-[#d4a574]">
                    🍪 Cookie Collection
                  </span>
                </button>
              </a>

              <Link
                href="/story"
                className="w-full py-4 px-5 bg-[#1a1208] hover:bg-[#2a1f15] border-2 border-[#3d2e1f] hover:border-[#d4a574] rounded-lg transition-all block"
              >
                <span className="pixel-font flex items-center gap-3 text-[#d4a574]">
                  📖 Our Story
                </span>
              </Link>

              <Link href="/find-us">
                <button className="w-full py-4 px-5 bg-[#1a1208] hover:bg-[#2a1f15] border-2 border-[#3d2e1f] hover:border-[#d4a574] rounded-lg transition-all">
                  <span className="pixel-font flex items-center gap-3 text-[#d4a574]">
                    📍 Find Us
                  </span>
                </button>
              </Link>


            </nav>

            <div className="mt-6 pt-4 border-t border-[#3d2e1f] text-center">
              <p className="text-xs text-[#8b7355]">
                2025 OATMOSS. Baked with love.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Scanlines overlay for retro effect */}
      <div className="scanlines absolute inset-0 pointer-events-none opacity-10" />
    </main>
  );
}
