import ContactSection from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "../components/Providers";
import KindeProviderWrapper from "@/components/KindeProviderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light overscroll-y-none">
      <body
        className={cn(`${geistSans.variable} ${geistMono.variable} antialiased`, "min-h-screen font-sans antialiased grainy overscroll-y-none")}
      >
        <KindeProviderWrapper>
        <Navbar />
        <main className="flex-1">
                  <Providers>{children}</Providers>
        </main>
        </KindeProviderWrapper>

        <ContactSection></ContactSection>
      </body>
    </html>
  );
}
