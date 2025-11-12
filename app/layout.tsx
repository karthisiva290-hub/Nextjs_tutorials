import type { Metadata } from "next";
// app/layout.tsx
import './globals.css';
import { Noto_Sans_Tamil } from 'next/font/google'; // 1. Import your desired font(s)

// 2. Define the font loader configuration
// Use subsets for languages like Tamil to minimize file size
const tamilFont = Noto_Sans_Tamil({
  weight: ['400', '700'],
  subsets: ['tamil'], // Specify the necessary subset
  variable: '--font-tamil', // Optional: Use a CSS variable for Tailwind CSS
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // 3. Apply the font class to the <body> tag
    // The class name is derived from the font constant (e.g., tamilFont.className)
    <html lang="en">
      <body className={`${tamilFont.className}`}>
        {children}
      </body>
    </html>
  );
}
