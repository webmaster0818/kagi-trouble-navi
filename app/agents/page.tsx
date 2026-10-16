import Link from "next/link";
import AgentShot from "@/components/AgentShot";
import type { Metadata } from "next";
import { agents } from "./agentsData";

const SITE = "https://kagi-trouble-navi.com";

export const metadata: Metadata = {
  title: {
    absolute: "鍵業者の口コミ・評判まとめ｜料金・対応スピードを比較｜鍵トラブルナビ",
  },
  description:
    "鍵業者の口コミ・評判・料金を業者別に調査しました。カギ110番・鍵の生活救急車・鍵のレスキュー・鍵猿・カギの救急車・鍵の24時間救急車・カギのトラブル救急車など各社のメリット・注意点、対応スピード、料金を比較し、鍵業者選びに必要な情報を掲載しています。",
  alternates: { canonical: `${SITE}/agents/` },
};

const taglines: Record<string, string> = {
  kagi110ban: "全国47都道府県・24時間365日・最短5分手配",
  jbr: "会員制の駆けつけサービス・一般向けの鍵開け受付なし（2024年上場廃止）",
  "seikatsu-kyukyusha": "株式会社生活救急車（2022年11月にJBRから承継）・鍵開け8,800円〜（税込）",
  "kagi-rescue": "鍵の110番救急車（kagi110qq.co.jp）・営業中・鍵開け6,600円〜＋出張料",
  kagizaru: "鍵屋の鍵猿（SLS株式会社）・全国47都道府県・最短15分・1年保証",
  "kagi-kyukyusha": "加盟店ネットワーク型・「鍵の救急車」等の表記は別業者と公式が告知",
  "kagi-24h-kyukyusha": "株式会社24時間救急車・鍵開け6,600円〜＋出張料・カギの救急車とは別会社",
  "kagi-trouble-kyukyusha": "株式会社アスティ24（川越）・首都圏中心・夜間割増を公式に明示",
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
          主要な鍵業者の料金・対応スピード・サービス内容・利用者の口コミを、編集部が中立的な立場で調査し、掲載しています。依頼前の比較にお役立てください。
        </p>
        <Link href="/agents/nitamei-kagiya/" className="kt-card kt-card-link block mb-8 p-5" style={{ borderLeft: "4px solid var(--primary)" }}>
          <p className="font-bold text-slate-800 mb-1">「救急車」「110番」「レスキュー」など名前が似た鍵屋の見分け方</p>
          <p className="text-xs text-slate-600 leading-relaxed">屋号がよく似た鍵屋10件の運営会社を公式サイトで確認した一覧です。口コミや料金を調べる前にご確認ください。</p>
        </Link>
        <ul className="grid sm:grid-cols-2 gap-5">
          {agents.map((a) => (
            <li key={a.slug} className="kt-card flex flex-col p-4">
              <AgentShot slug={a.slug} name={a.name} sizes="(min-width: 640px) 420px, 100vw" />
              <Link href={`/agents/${a.slug}/`} className="group mt-3 flex flex-1 flex-col px-1">
                <span className="font-bold text-foreground group-hover:text-primary mb-1">{a.name}</span>
                <span className="text-xs text-text-muted leading-relaxed">{taglines[a.slug] ?? "口コミ・評判・料金を見る"}</span>
                <span className="mt-3 text-xs font-bold text-primary">口コミ・評判・料金を見る →</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
