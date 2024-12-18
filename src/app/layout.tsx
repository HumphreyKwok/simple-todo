import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple TODO app",
  description:
    "Simple full-stack todo app built with NextJS, TailwindCSS and Prisma",
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
