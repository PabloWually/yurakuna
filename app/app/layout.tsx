import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ResponsiveAppBar } from "../src/components/AppBar/ResponsiveAppBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yurakuna App",
  description: "Gestor de bodega de hortalizas y productos para restaurantes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <title>Yurakuna</title>
      </head>
      <body className={inter.className}>
        <main>
          <ResponsiveAppBar />
          {children}
        </main>
      </body>
    </html>
  );
}
