import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";


export const metadata: Metadata = {
  title: "Evently — Discover & Book Events",
  description:
    "Discover amazing events and book your tickets with Evently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}