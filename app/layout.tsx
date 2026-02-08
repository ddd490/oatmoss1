import "./globals.css";
import { Press_Start_2P } from "next/font/google";
import type { ReactNode } from "react";

const pixelFont = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Oatmoss",
  description: "Artisan Cookie Bakery",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={pixelFont.className}>{children}</body>
    </html>
  );
}
