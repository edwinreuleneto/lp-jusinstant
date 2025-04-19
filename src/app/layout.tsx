// Dependencies
import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';

// Styles
import '@/style/globals.css';

// Fonts
import { Poppins, Montserrat } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "600", "700"],
});

// SEO focado em direito trabalhista
export const metadata: Metadata = {
  title: "JusInstant | Direito Trabalhista com Inteligência Artificial",
  description:
    "Tenha respostas jurídicas imediatas sobre FGTS, rescisão, justa causa, verbas trabalhistas e direitos do trabalhador com a IA do JusInstant.",
  keywords: [
    "direito trabalhista",
    "FGTS",
    "rescisão de contrato",
    "justa causa",
    "verbas rescisórias",
    "calcular rescisão",
    "aviso prévio",
    "indenização trabalhista",
    "consultar advogado trabalhista",
    "consultas jurídicas online",
    "JusInstant",
  ],
  authors: [{ name: "JusInstant", url: "https://jusinstant.com.br" }],
  openGraph: {
    title: "JusInstant | Consultas em Direito Trabalhista com IA",
    description:
      "Soluções rápidas para dúvidas trabalhistas. FGTS, demissão, férias, verbas e muito mais com auxílio da inteligência artificial.",
    url: "https://jusinstant.com.br",
    siteName: "JusInstant",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JusInstant - Direito Trabalhista com IA",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JusInstant | Consultas em Direito Trabalhista com IA",
    description:
      "Soluções rápidas para dúvidas sobre FGTS, demissão, verbas e outros direitos do trabalhador.",
    site: "@jusinstant",
    creator: "@jusinstant",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased bg-white text-zinc-900`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
