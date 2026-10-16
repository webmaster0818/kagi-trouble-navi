import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kagi-trouble-navi.com"),
  twitter: {
    card: "summary_large_image",
  },
  title: "鍵開け・鍵交換の料金相場と業者比較｜鍵トラブルナビ【2026年最新】",
  description:
    "鍵開け・鍵交換の料金相場、費用がかからない場合（保険・JAF・管理会社）、悪質業者の見分け方、締め出し・紛失・インロックなどトラブル別の対処法を、中立的な立場で解説する鍵業者の比較サイトです。",
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
    title: "鍵開け・鍵交換の料金相場と業者比較｜鍵トラブルナビ",
    description:
      "24時間365日対応の鍵業者を、公式サイトの情報にもとづいて比較しています。料金相場や高額請求を防ぐための確認事項も解説します。",
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
      <body className="min-h-screen flex flex-col bg-background text-foreground"><div style={{background:'#f4f4f4',borderBottom:'1px solid #e2e2e2',fontSize:'11px',lineHeight:1.6,color:'#555',textAlign:'center',padding:'3px 8px'}}>本サイトはプロモーション(PR)を含みます。</div>
        <SiteHeader />
        {children}
        <SiteFooter />
        <ScrollReveal />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"鍵トラブルナビ\",\"url\":\"https://kagi-trouble-navi.com/\",\"logo\":\"https://kagi-trouble-navi.com/images/logo-512.png\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"株式会社MediaX\",\"url\":\"https://mediax.biz\"},\"sameAs\":[\"https://kagi-trouble-navi.com/about/\"]}" }}
        />
        
      </body>
    </html>
  );
}
