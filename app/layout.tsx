import type { Metadata } from "next";
import { Domine, Are_You_Serious, Luckiest_Guy } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import FluidCursor from "@/components/FluidCursor/FluidCursor";


const domine = Domine({
  subsets: ["latin"],
  variable: "--font-domine",
  weight: ["400", "500", "600", "700"], // optional, pick what you need
});

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  variable: "--font-luckiestguy",
  weight: ["400"], // if multiple weights available you can add
});


export const metadata: Metadata = {
  title: "Hiral Vala - Full Stack Developer",
  description: "Portfolio of Hiral Vala - Full Stack Developer specializing in React, Next.js, Node.js and modern web technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${luckiestGuy.variable} ${domine.variable} antialiased bg-black`}
      >
        <SmoothScroll />
        <FluidCursor />
        <div className="max-w-[1600px] mx-auto 2xl:my-16 w-full bg-background min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
