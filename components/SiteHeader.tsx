import Link from "next/link";
import SiteLogo from "./SiteLogo";

const NAV = [
  { href: "/#trouble", label: "トラブル別" },
  { href: "/#area", label: "エリアから探す" },
  { href: "/ryokin/", label: "料金相場" },
  { href: "/agents/", label: "業者比較" },
];

// 全ページ共通ヘッダー。スマホのメニューは JS 不要の details で開閉する。
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:h-[72px]">
        <SiteLogo />
        <nav aria-label="グローバルナビゲーション" className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm font-bold tracking-wide text-foreground transition-colors hover:text-primary">
              {n.label}
            </Link>
          ))}
          <Link href="/agents/" className="kt-btn !min-h-[42px] !px-5 !py-2 text-sm">
            業者を比較する
          </Link>
        </nav>
        <details className="kt-acc relative md:hidden">
          <summary
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-border text-primary"
            aria-label="メニューを開く"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </summary>
          <nav
            aria-label="スマホメニュー"
            className="absolute right-0 top-[52px] w-[min(86vw,320px)] overflow-hidden rounded-xl border border-border bg-white shadow-[0_18px_40px_-18px_rgba(11,37,69,0.45)]"
          >
            <ul className="divide-y divide-border">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="flex min-h-[52px] items-center justify-between px-5 text-[15px] font-bold text-foreground">
                    {n.label}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="text-primary">
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="p-4">
              <Link href="/agents/" className="kt-btn w-full">業者を比較する</Link>
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
