import Link from "next/link";
import { regions, tokyo, type AreaLink } from "@/data/areaRegions";

const Chevron = ({ className = "" }: { className?: string }) => (
  <svg className={`kt-chev h-4 w-4 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const Arrow = () => (
  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

function Tiles({ items, cols }: { items: AreaLink[]; cols: string }) {
  return (
    <ul className={`grid gap-2 ${cols}`}>
      {items.map((x) => (
        <li key={x.slug}>
          <Link
            href={`/area/${x.slug}/`}
            className="flex min-h-[48px] items-center justify-center rounded-md border border-border bg-white px-2 text-center text-[13px] font-bold leading-tight text-foreground transition-colors hover:border-primary hover:bg-primary-wash hover:text-primary"
          >
            {x.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

const summaryCls =
  "flex min-h-[60px] cursor-pointer items-center justify-between gap-3 bg-primary-wash px-4 md:px-5 border-b border-transparent";

/** TOP「エリアから探す」。東京都は別枠、地方ブロックはすべて折りたたみ（JS 不要の details）。 */
export default function AreaFinder() {
  const tokyoCount = 1 + tokyo.wards.length + tokyo.tama.length;
  const total = tokyoCount + regions.reduce((n, r) => n + r.prefectures.reduce((m, p) => m + p.areas.length, 0), 0);
  return (
    <div>
      <p className="mb-6 text-center text-sm text-text-muted">
        47都道府県・{total}エリアの鍵業者まとめから、お住まいの地域を選べます
      </p>

      {/* 東京都（別枠） */}
      <details className="kt-acc group mb-5 overflow-hidden rounded-[10px] border border-border-strong bg-white">
        <summary className={`${summaryCls} group-open:border-border`}>
          <span className="flex items-center gap-3">
            <span className="text-[17px] font-bold tracking-wide text-primary">東京都</span>
            <span className="hidden text-xs text-text-muted sm:inline">23区・多摩地域</span>
          </span>
          <span className="flex items-center gap-2 text-xs font-bold text-text-muted">
            {tokyoCount}エリア
            <Chevron className="text-primary" />
          </span>
        </summary>
        <div className="grid gap-6 p-4 md:p-6">
          <Link
            href={`/area/${tokyo.top.slug}/`}
            className="inline-flex min-h-[44px] w-fit items-center gap-1.5 font-bold text-primary underline-offset-4 hover:underline"
          >
            東京都全体の鍵業者まとめを見る
            <Arrow />
          </Link>
          <div>
            <p className="mb-3 text-[11px] font-bold tracking-[0.2em] text-text-muted">23区から探す</p>
            <Tiles items={tokyo.wards} cols="grid-cols-3 sm:grid-cols-4 lg:grid-cols-6" />
          </div>
          <div>
            <p className="mb-3 text-[11px] font-bold tracking-[0.2em] text-text-muted">多摩地域から探す</p>
            <Tiles items={tokyo.tama} cols="grid-cols-3 sm:grid-cols-4 lg:grid-cols-6" />
          </div>
        </div>
      </details>

      {/* 地方ブロック */}
      <div className="grid gap-3">
        {regions.map((r) => {
          const n = r.prefectures.reduce((m, p) => m + p.areas.length, 0);
          return (
            <details key={r.name} className="kt-acc group overflow-hidden rounded-[10px] border border-border-strong bg-white">
              <summary className={`${summaryCls} group-open:border-border`}>
                <span className="text-[16px] font-bold tracking-wide text-primary">{r.name}</span>
                <span className="flex items-center gap-2 text-xs font-bold text-text-muted">
                  {n}エリア
                  <Chevron className="text-primary" />
                </span>
              </summary>
              <div className="divide-y divide-border">
                {r.prefectures.map((p) => (
                  <div key={p.name} className="px-4 py-4 md:grid md:grid-cols-[112px_minmax(0,1fr)] md:items-start md:gap-4 md:px-6">
                    <p className="mb-2.5 text-[14px] font-bold text-foreground md:mb-0 md:flex md:min-h-[48px] md:items-center">{p.name}</p>
                    <Tiles items={p.areas} cols="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" />
                  </div>
                ))}
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
