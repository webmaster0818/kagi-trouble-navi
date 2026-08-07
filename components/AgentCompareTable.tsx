import Link from "next/link";

// 6社統一スペック比較表。各値は各業者ページで一次確認済みの公式表示のみを転記（確認日は各業者ページ参照）。
// 閲覧中の業者の行をハイライトする。
const ROWS = [
  {
    slug: "kagi110ban",
    name: "カギ110番",
    price: "鍵開け 6,600円〜（税込・公式表示）",
    uketsuke: "24時間365日",
    mitsumori: "見積無料",
    operator: "シェアリングテクノロジー株式会社（東証グロース3989）",
  },
  {
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    price: "鍵開け 8,800円〜（税込）",
    uketsuke: "24時間365日",
    mitsumori: "出張・見積・キャンセル無料",
    operator: "株式会社生活救急車（2022年12月にJBRから事業承継）",
  },
  {
    slug: "jbr",
    name: "JBR",
    price: "鍵開け 8,800円〜（税込）",
    uketsuke: "24時間365日",
    mitsumori: "出張見積無料・賠償責任保険加入",
    operator: "ジャパンベストレスキューシステム株式会社",
  },
  {
    slug: "kagi-rescue",
    name: "鍵のレスキュー",
    price: "鍵開け 8,000円〜（出張料0〜8,800円）",
    uketsuke: "24時間365日",
    mitsumori: "現場での追加費用なし（事前見積確定）",
    operator: "株式会社鍵（自社社員対応・全国約20拠点）",
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
];

export default function AgentCompareTable({ current }: { current?: string }) {
  return (
    <section className="my-10">
      <h2 className="text-xl md:text-2xl font-bold mb-3 text-slate-900">主要6社スペック比較（公式表示の一次確認値）</h2>
      <p className="text-sm text-slate-500 mb-4">
        各社公式サイトで確認した表示のみを掲載しています（詳細・確認日は各業者ページ参照）。実際の費用は鍵の種類・時間帯・出張距離で変わるため、必ず作業前の見積もりで総額を確認してください。
      </p>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table className="w-full text-sm bg-white">
          <thead>
            <tr className="bg-slate-100 text-slate-700 text-left">
              <th className="px-3 py-2.5 whitespace-nowrap">業者</th>
              <th className="px-3 py-2.5">基本料金（公式表示）</th>
              <th className="px-3 py-2.5 whitespace-nowrap">受付</th>
              <th className="px-3 py-2.5">見積・特徴</th>
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
        料金の物差し: JAF非会員の鍵開け料金は25,630円（一般的な開錠・昼間・一次確認済み）。これより大幅に高い見積もりが出た場合は、内訳（基本料金＋作業費＋出張費＋部品代）の説明を求めましょう。
        関連: <Link href="/ryokin/" className="text-blue-700 underline">鍵開け・鍵交換の料金相場</Link>／<Link href="/ryokin-index/" className="text-blue-700 underline">主要業者の料金一次確認まとめ</Link>
      </p>
    </section>
  );
}
