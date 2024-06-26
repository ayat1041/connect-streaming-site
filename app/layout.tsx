import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

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
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className={`${inter.className} h-max py-8 min-h-screen`}>
          <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          storageKey="connect-theme"
          >
          <nav className="flex font-bold text-slate-50 gap-12 items-center justify-start lg:px-8 pb-8 pt-2">
            <Link href="/">Home</Link>
            <Link href="sign-in/">Login</Link>
            <Link href="sign-up/">Sign Up</Link>
          </nav>
          {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
