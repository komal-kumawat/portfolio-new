import type { Metadata } from "next";
import { Geist, Geist_Mono, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Komal Kumawat | Software Developer Portfolio",
  description:
    "Portfolio of Komal Kumawat - A passionate Software Developer specializing in building scalable web applications with React, Node.js, and MongoDB. Explore my projects, skills, and experience.",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Komal Kumawat | Software Developer Portfolio",
    description:
      "Portfolio of Komal Kumawat - A passionate Software Developer specializing in building scalable web applications with React, Node.js, and MongoDB.",
    images: ["/logo.svg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${hankenGrotesk.variable} font-hanken-grotesk antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          value={{ light: "light", dark: "dark" }}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
