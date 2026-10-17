import Link from "next/link";
import { AffText, hasAff } from "@/components/AffLink";

// 業者スペック比較表。各値は各業者ページで一次確認済みの公式表示のみを転記（確認日は各業者ページ参照）。
// 閲覧中の業者の行をハイライトする。
const ROWS = [
  {
    slug: "kagi110ban",
    name: "カギ110番",
    price: "鍵開け 11,000円〜（税込・公式料金表）",
    uketsuke: "24時間365日",
    mitsumori: "見積もり無料",
    operator: "シェアリングテクノロジー株式会社（東証グロース3989）",
  },
  {
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    price: "鍵開け（刻みキー）8,800円〜（税込・公式料金ページ）",
    uketsuke: "24時間365日",
    mitsumori: "出張・見積もり・キャンセル無料",
    operator: "株式会社生活救急車（2022年11月にJBRから事業承継）",
  },
  {
    slug: "jbr",
    name: "JBR",
    price: "一般向けの鍵開け受付なし（会員制の駆けつけサービスのみ）",
    uketsuke: "会員向けに24時間365日",
    mitsumori: "費用負担は会員規約による",
    operator: "ジャパンベストレスキューシステム株式会社（2024年3月上場廃止）",
  },
  {
    slug: "kagi-rescue",
    name: "鍵のレスキュー（鍵の110番救急車）",
    price: "鍵開け 6,600円〜＋出張料4,400〜8,800円（税込）",
    uketsuke: "24時間・全国出張",
    mitsumori: "作業前に料金表で説明し、署名後に作業。作業開始30分超のキャンセルは全額",
    operator: "株式会社レスキュー（公式会社案内の表示）",
  },
  {
    slug: "kagizaru",
    name: "鍵猿",
    price: "鍵開け 8,800円〜／鍵交換 11,000円〜＋部品代（税込）",
    uketsuke: "受付時間は公式サイト参照",
    mitsumori: "自社施工（下請けなし）・1年保証",
    operator: "SLS株式会社（大阪本社）",
  },
  {
    slug: "kagi-kyukyusha",
    name: "カギの救急車",
    price: "鍵開け 11,000〜44,000円（公式目安・実額は加盟店ごと）",
    uketsuke: "多くの加盟店が24時間（店舗により異なる）",
    mitsumori: "加盟店により異なる",
    operator: "株式会社ジェイクライプ／一般社団法人（加盟店ネットワーク）",
  },
  {
    slug: "kagi-24h-kyukyusha",
    name: "鍵の24時間救急車",
    price: "鍵開け 6,600円〜＋出張料4,400〜8,800円（税込）",
    uketsuke: "24時間365日",
    mitsumori: "作業員の出発後のキャンセルは出張料全額",
    operator: "株式会社24時間救急車（大阪市西区）",
  },
  {
    slug: "kagi-trouble-kyukyusha",
    name: "カギのトラブル救急車",
    price: "玄関の鍵開け 2,980円〜＋基本出張費（別途）",
    uketsuke: "夜8時以降・深夜12時以降は割増あり",
    mitsumori: "作業前に料金説明・施工後3ヶ月の無償メンテナンス",
    operator: "株式会社アスティ24（埼玉県川越市）",
  },
];

export default function AgentCompareTable({ current }: { current?: string }) {
  return (
    <section className="my-10">
      <h2 className="text-xl md:text-2xl font-bold mb-3 text-slate-900">主要{ROWS.length}社の比較（公式表示の一次確認値）</h2>
      <p className="text-sm text-slate-500 mb-4">
        各社公式サイトで確認した表示のみを掲載しています（詳細・確認日は各業者ページをご参照ください）。実際の費用は鍵の種類・時間帯・出張距離によって変わるため、必ず作業前の見積もりで総額をご確認ください。
      </p>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table className="w-full text-sm bg-white">
          <thead>
            <tr className="bg-slate-100 text-slate-700 text-left">
              <th className="px-3 py-2.5 whitespace-nowrap">業者</th>
              <th className="px-3 py-2.5">基本料金（公式表示）</th>
              <th className="px-3 py-2.5 whitespace-nowrap">受付</th>
              <th className="px-3 py-2.5">見積もり・特徴</th>
              <th className="px-3 py-2.5">運営会社（一次確認）</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr
                key={r.slug}
                className={
                  r.slug === current
                    ? "bg-amber-50 border-t border-slate-100 font-medium"
                    : "border-t border-slate-100"
                }
              >
                <td className="px-3 py-2.5 whitespace-nowrap">
                  {r.slug === current ? (
                    <span>{r.name}（本記事）</span>
                  ) : (
                    <Link href={`/agents/${r.slug}/`} className="text-blue-700 underline hover:no-underline">
                      {r.name}
                    </Link>
                  )}
                  {hasAff(r.slug) && (
                    <span className="block mt-1">
                      <AffText slug={r.slug} variant="small" label="公式サイト" />
                    </span>
                  )}
                </td>
                <td className="px-3 py-2.5">{r.price}</td>
                <td className="px-3 py-2.5">{r.uketsuke}</td>
                <td className="px-3 py-2.5">{r.mitsumori}</td>
                <td className="px-3 py-2.5 text-slate-600">{r.operator}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-slate-500 mt-3">
        料金の目安: JAF非会員の鍵開け料金は25,630円です（一般的な解錠・昼間・一次確認済み）。これを大幅に上回る見積もりが提示された場合は、内訳（基本料金＋作業費＋出張料＋部品代）の説明を求めることをおすすめします。
        名前の似た業者の整理: <Link href="/agents/nitamei-kagiya/" className="text-blue-700 underline">名前が似た鍵屋の見分け方</Link>／
        関連: <Link href="/ryokin/" className="text-blue-700 underline">鍵開け・鍵交換の料金相場</Link>／<Link href="/ryokin-index/" className="text-blue-700 underline">主要業者の料金一次確認まとめ</Link>
      </p>
    </section>
  );
}
