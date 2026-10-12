import Link from "next/link";

/**
 * サイトロゴ（ヘッダー・フッター共通）。
 * ロゴマーク＝案6「家×鍵」（2026-10-12 クライアント選定）。暗い背景では白版を使う。
 */
export const LOGO_MARK_SRC: string | null = "/images/logo-mark.png";
const LOGO_MARK_WHITE_SRC = "/images/logo-mark-white.png";

export default function SiteLogo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "light" ? "text-white" : "text-primary-dark";
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${color}`} aria-label="鍵トラブルナビ トップページ">
      {LOGO_MARK_SRC && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={tone === "light" ? LOGO_MARK_WHITE_SRC : LOGO_MARK_SRC} alt="" width={40} height={40} className="h-9 w-9 md:h-10 md:w-10" />
      )}
      <span className="flex flex-col leading-none">
        <span className="text-[19px] md:text-[21px] font-bold tracking-[0.06em]">鍵トラブルナビ</span>
        <span className={`mt-1 text-[10px] font-medium tracking-[0.18em] ${tone === "light" ? "text-white/60" : "text-text-muted"}`}>
          KAGI TROUBLE NAVI
        </span>
      </span>
    </Link>
  );
}
