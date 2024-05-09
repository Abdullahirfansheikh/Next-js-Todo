"use client"
import 'tailwindcss/tailwind.css';
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    
      <html lang="en">
        <body>         
          {children}
        </body>
      </html>
    
  );
}
