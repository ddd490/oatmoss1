import "./globals.css";
import { Press_Start_2P } from "next/font/google";
import type { ReactNode } from "react";
import Script from "next/script";


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
     <body className={pixelFont.className}>

  {/* Google Analytics */}
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-VDFLFGL8DN"
    strategy="afterInteractive"
  />
  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-VDFLFGL8DN');
    `}
  </Script>

  {children}

</body>

    </html>
  );
}
