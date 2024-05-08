"use client"
import 'tailwindcss/tailwind.css';
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>         
        {children}
      </body>
    </html>
  );
}
