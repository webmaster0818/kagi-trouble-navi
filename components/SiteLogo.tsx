import Link from "next/link";

/**
 * サイトロゴ（ヘッダー・フッター共通）。
 * ロゴマークは現在クライアント選定中のため未設定。決定後は
 * public/images/logo-mark.png を配置し、LOGO_MARK_SRC にパスを設定するだけで全ページに反映される。
 */
export const LOGO_MARK_SRC: string | null = null; // 例: "/images/logo-mark.png"

export default function SiteLogo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "light" ? "text-white" : "text-primary-dark";
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${color}`} aria-label="鍵トラブルナビ トップページ">
      {LOGO_MARK_SRC && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={LOGO_MARK_SRC} alt="" width={36} height={36} className="h-9 w-9" />
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
