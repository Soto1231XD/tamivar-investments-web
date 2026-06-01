import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TAMIVAR Investments",
  description: "Sistema interno de gestión de inversiones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}