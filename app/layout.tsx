import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  Pacifico,
  Handjet,
  Merienda,
  WindSong,
  Open_Sans,
  Londrina_Shadow,
  Londrina_Outline,
  Splash,
} from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });
const handjet = Handjet({ weight: ["400", "700"], subsets: ["latin"] });
const merienda = Merienda({ weight: ["400", "700"], subsets: ["latin"] });
const windsong = WindSong({ weight: ["400", "500"], subsets: ["latin"] });
const openSans = Open_Sans({ weight: ["400", "700"], subsets: ["latin"] });
const londrinaShadow = Londrina_Shadow({ weight: "400", subsets: ["latin"] });
const londrinaOutline = Londrina_Outline({ weight: "400", subsets: ["latin"] });
const splash = Splash({ weight: "400", subsets: ["latin"] });

import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import Head from "next/head";
import { ReactLenis } from "@/components/LenisScroll";
const ScrollToTop = dynamic(() => import("@/components/ui/ScrollToTop"), {
  ssr: false,
});

const ThemeToggle = dynamic(() => import("@/components/ui/ThemeToggle"), {
  ssr: false,
});

const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), {
  ssr: false,
});

// Import our new client component
const ScrollLockHandler = dynamic(
  () => import("@/components/ScrollLockHandler"),
  {
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: "Portfolio | Full Stack Developer",
  description:
    "Personal portfolio showcasing projects, skills, and work experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <ReactLenis root>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ScrollLockHandler />
            <CustomCursor />
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <ScrollToTop />
            <ThemeToggle />
          </ThemeProvider>
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
              setTimeout(() => {
                document.body.classList.remove('overflow-hidden');
              }, 2000);
            `,
            }}
          /> */}
        </body>
      </ReactLenis>
    </html>
  );
}
