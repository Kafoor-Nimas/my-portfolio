import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";
import ParticleBackground from "@/components/Particlebackground";
import CursorGlow from "@/components/Cursorglow";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Nimas Kafoor | MERN Full-Stack Developer",
  description:
    "Portfolio of Nimas Kafoor, BICT undergraduate at the University of Kelaniya, building full-stack apps with React, Next.js, Node.js and MongoDB.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <ParticleBackground />
        <CursorGlow />
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
