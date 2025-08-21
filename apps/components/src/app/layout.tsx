import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CounterProvider } from "@/components/provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Remote Components App",
  description: "Components app serving remote components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CounterProvider>{children}</CounterProvider>
      </body>
    </html>
  );
}
