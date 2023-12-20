import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DarkModeProvider from "@/contexts/DarkModeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portal da Magia",
  description: "Feito por Pedro Lugon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DarkModeProvider>
      <html lang="pt-BR">
        <body className={inter.className + " customCursor"}>{children}</body>
      </html>
    </DarkModeProvider>
  );
}
