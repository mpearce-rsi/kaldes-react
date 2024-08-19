import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/src/components/Footer/Footer";
import NavBar from "@/src/components/NavBar/NavBar";
import TitleBar from "@/src/components/TitleBar/TitleBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <TitleBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
