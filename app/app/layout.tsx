"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { ResponsiveAppBar } from "../src/components/AppBar/ResponsiveAppBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient()

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
          <QueryClientProvider client={queryClient} >
            <ResponsiveAppBar />
            {children}
          </QueryClientProvider>
        </main>
      </body>
    </html>
  );
}
