import Link from "next/link";
import type { Metadata } from "next";
import { agents } from "./agentsData";

const SITE = "https://kagi-trouble-navi.com";

export const metadata: Metadata = {
  title: {
    absolute: "鍵業者の口コミ・評判まとめ｜料金・対応スピードを徹底比較｜鍵トラブルナビ",
  },
  description:
    "鍵業者の口コミ・評判・料金を業者別に徹底調査。カギ110番・JBR・鍵の生活救急車・鍵のレスキュー・鍵猿など各社のメリット・注意点、対応スピード、料金を比較して、あなたに合う鍵業者を見つけられます。",
  alternates: { canonical: `${SITE}/agents/` },
};

const taglines: Record<string, string> = {
  kagi110ban: "全国47都道府県・24時間365日・最短5分手配",
  jbr: "全国対応の大手レスキューグループ・賠償責任保険加入",
  "seikatsu-kyukyusha": "最短15分到着・年間10万件以上の実績",
  "kagi-rescue": "料金をHPで明示・追加費用なし・女性スタッフ指名可",
  kagizaru: "関西中心・自社施工で低価格・防犯設備士在籍",
};

export default function AgentsIndexPage() {
  return (
    <article className="bg-white text-slate-800">
      <nav aria-label="パンくず" className="max-w-4xl mx-auto px-4 pt-4 text-xs text-slate-500">
        <ol className="flex flex-wrap gap-1">
          <li><Link href="/" className="hover:underline">鍵トラブルナビ</Link></li>
          <li>/</li>
          <li className="text-slate-700">鍵業者の口コミ・評判</li>
        </ol>
      </nav>
      <div className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-3">鍵業者の口コミ・評判まとめ</h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          主要な鍵業者の料金・対応スピード・サービス内容・利用者の口コミを、編集部が中立的に調査してまとめました。気になる業者を選んで、依頼前の比較にお役立てください。
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {agents.map((a) => (
            <Link key={a.slug} href={`/agents/${a.slug}/`} className="block rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-amber-300 transition">
              <p className="font-bold text-slate-800 mb-1">{a.name}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{taglines[a.slug] ?? "口コミ・評判・料金を見る"}</p>
              <p className="text-xs text-amber-700 font-medium mt-2">口コミ・評判・料金を見る →</p>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
