import type { Metadata } from "next";
import { Anton, Archivo } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

// Anton: um peso só, pesadíssima e condensada. Tipografia de cartaz.
const cartaz = Anton({
  variable: "--fonte-cartaz",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Archivo: grotesca de leitura, largura normal.
const corpo = Archivo({
  variable: "--fonte-corpo",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.titulo, template: `%s — ${site.marca}` },
  description: site.descricao,
  authors: [{ name: site.autor, url: site.github }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.marca,
    title: site.titulo,
    description: site.descricao,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${cartaz.variable} ${corpo.variable}`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
