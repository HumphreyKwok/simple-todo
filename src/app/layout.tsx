import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple TODO app",
  description: "This is for demonstrationg purpose only",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overscroll-none bg-neutral-900 text-white">
        <div className="flex h-screen flex-col">
          {children}
          <footer className="p-10">
            Humphrey Kwok | {new Date().getFullYear()}
          </footer>
        </div>
      </body>
    </html>
  );
}
