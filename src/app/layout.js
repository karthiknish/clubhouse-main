import { Geist, Geist_Mono, Zilla_Slab } from "next/font/google";
import "./globals.css";
import "@/styles/safari-optimize.css";
import Navbar from "@/components/Navbar";
import { OptimizedMotion } from "@/lib/framerConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const zillaSlab = Zilla_Slab({
  variable: "--font-zilla-slab",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "The Clubhouse | London&apos;s Premier Business Club & Workspace",
  description:
    "The Clubhouse is London&apos;s leading business club, workspace and meeting venue where professionals meet, work and grow their businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${zillaSlab.variable} antialiased`}
      >
        <OptimizedMotion>
          <Navbar />
          {children}
        </OptimizedMotion>
      </body>
    </html>
  );
}
