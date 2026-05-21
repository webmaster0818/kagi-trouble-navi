import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kagi-trouble-navi.com"),
  alternates: { canonical: "/" },
  twitter: {
    card: "summary_large_image",
  },
  title: "鍵トラブルナビ｜鍵開け・鍵交換の業者比較【2026年最新】24時間対応",
  description:
    "鍵のトラブルを今すぐ解決。鍵開け・鍵交換・鍵修理の料金相場や優良業者を比較。24時間365日対応、最短15分で到着。ぼったくり対策情報も掲載。",
  keywords: [
    "鍵開け",
    "鍵交換",
    "鍵修理",
    "鍵トラブル",
    "鍵屋",
    "24時間対応",
    "料金相場",
    "業者比較",
  ],
  openGraph: {
    title: "鍵トラブルナビ｜鍵開け・鍵交換の業者比較【2026年最新】",
    description:
      "鍵のトラブルを今すぐ解決。24時間365日対応の優良業者を比較。料金相場・ぼったくり対策も。",
    type: "website",
    locale: "ja_JP",
    siteName: "鍵トラブルナビ",
  },
  other: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.className}>
      <head>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
