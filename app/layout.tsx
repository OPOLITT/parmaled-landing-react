import "./globals.css";

import { Unbounded } from "next/font/google";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={unbounded.variable}>
        {children}
      </body>
    </html>
  );
}
