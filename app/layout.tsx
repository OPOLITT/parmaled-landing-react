import "./globals.css";
import type { Metadata } from "next";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
});

export const metadata: Metadata = {
  title: "Парма ЛЕД | Светодиодное освещение",
  description: "Инновации, исследования, разработки. Индивидуализация & фокус на светодиодном ландшафтном освещении. Компания П-КОМ создает решения, соответствующие высочайшим стандартам отрасли.",
  keywords: "светодиодное освещение, LED светильники, ландшафтное освещение, Парма-ЛЕД, П-КОМ",
  authors: [{ name: "П-КОМ" }],
  openGraph: {
    title: "Парма-ЛЕД | Светодиодное освещение",
    description: "Инновации, исследования, разработки. Индивидуализация & фокус на светодиодном ландшафтном освещении.",
    type: "website",
    locale: "ru_RU",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={unbounded.variable}>
        {children}
      </body>
    </html>
  );
}
