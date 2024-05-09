"use client"
import 'tailwindcss/tailwind.css';
import { usePathname } from "next/navigation";
import React from 'react';



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
