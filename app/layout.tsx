import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "@/app/styles/globals.css";
import Particles from "./components/Particles";

const getOrbitron = Orbitron({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oscar Duque - Portfolio",
  description: "Full Stack Developer Portfolio",
  icons: {
    icon: "/Avatar.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${getOrbitron.variable} antialiased`}>
        <Particles />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
