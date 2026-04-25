import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import { LanguageProvider } from "./LanguageContext";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Taiwan America Initiative | Bridging Communities",
  description:
    "A collaborative space for Taiwanese, Taiwanese Americans, and Americans to foster innovation, cultural exchange, and shared democratic values.",
  icons: {
    icon: "/favitai.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${montserrat.variable}`}>
      <head>
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        <Script id="tailwind-config" strategy="beforeInteractive">
          {`tailwind.config = {
            theme: {
              extend: {
                fontFamily: {
                  sans: ['Montserrat', 'sans-serif'],
                },
                colors: {
                  taiwan: {
                    red: '#EF3340',
                    blue: '#00205B',
                  },
                  slate: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                  },
                },
                backgroundImage: {
                  'subtle-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
                  'hero-sheen':
                    "linear-gradient(135deg, rgba(0, 32, 91, 0.95) 0%, rgba(0, 32, 91, 0.9) 42%, rgba(239, 51, 64, 0.9) 100%)",
                },
              },
            },
          }`}
        </Script>
        <Script
          src="https://unpkg.com/@phosphor-icons/web"
          strategy="beforeInteractive"
        />
      </head>
      <body className="font-sans text-slate-700 bg-slate-50 antialiased selection:bg-blue-100 selection:text-blue-900">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
