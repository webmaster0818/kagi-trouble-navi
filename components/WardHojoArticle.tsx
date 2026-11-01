import type { ReactNode } from "react";
import { HOJO_CHECKED, HOJO_CHECKED_ISO, TOKYO_HOJO_SOURCE, type WardHojo } from "@/data/tokyoBouhanHojo";

export type Faq = { q: string; a: string };
export type Section = { h2: string; body: ReactNode };

type Props = {
  w: WardHojo;
  pagePath: string; // 例: /area/setagaya-ku/bouhan-hojo/
  h1: string;
  description: string;
  answerLead: string;
  answerBody: ReactNode;
  sections: Section[];
  faqs: Faq[];
};

const SITE = "https://kagi-trouble-navi.com";

export function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="nofollow noopener" className="text-primary underline">
      {children}
    </a>
  );
}

export default function WardHojoArticle({ w, pagePath, h1, description, answerLead, answerBody, sections, faqs }: Props) {
  const areaPath = `/area/${w.slug}/`;
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "東京都の防犯機器補助と鍵交換", item: `${SITE}/bouhan-hojo-tokyo/` },
      { "@type": "ListItem", position: 3, name: `${w.ward}の防犯補助と鍵交換`, item: `${SITE}${pagePath}` },
    ],
  };
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: h1,
    description,
    author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
    publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
    datePublished: HOJO_CHECKED_ISO,
    dateModified: HOJO_CHECKED_ISO,
  };

  const rows: [string, string][] = [
    ["制度名", w.program],
    ["鍵（錠）の扱い", w.lockItems],
    ["補助率", w.rate],
    ["上限額", w.cap],
    ["申請期間", w.period],
  ];
  if (w.note) rows.push(["区の注記", w.note]);

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />

      <main className="flex-1">
        <div className="bg-surface-alt border-b border-black/5">
          <div className="max-w-4xl mx-auto px-4 py-3 text-xs text-text-muted">
            <a href="/" className="hover:text-primary">ホーム</a>
            <span className="mx-1.5">/</span>
            <a href="/bouhan-hojo-tokyo/" className="hover:text-primary">東京都の防犯機器補助と鍵交換</a>
            <span className="mx-1.5">/</span>
            <span className="text-text-secondary">{w.ward}</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">{h1}</h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：{HOJO_CHECKED}（{w.ward}公式ページを同日に確認）</p>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-8">
            <p className="font-bold text-primary mb-2">{answerLead}</p>
            <div className="text-text-secondary leading-relaxed text-sm sm:text-base space-y-3">{answerBody}</div>
          </div>

          <h2 className="text-xl font-bold text-text-primary mb-4">{w.ward}の制度の要点（{HOJO_CHECKED}確認）</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {rows.map(([k, v]) => (
                  <tr key={k}>
                    <th className="border border-border bg-surface-alt px-3 py-2 text-left whitespace-nowrap align-top">{k}</th>
                    <td className="border border-border px-3 py-2">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted leading-relaxed mb-10">
            出典：<Ext href={w.url}>{w.ward}公式「{w.program}」</Ext>
            {w.pageUpdated ? `（区ページの更新日 ${w.pageUpdated}）` : ""}、{HOJO_CHECKED}確認。予算に達すると期間内でも受付が終わることがあるため、申請前に区のページで最新の状況を確かめてください。
          </p>

          {sections.map((s, i) => (
            <section key={i} className="mb-10">
              <h2 className="text-xl font-bold text-text-primary mb-4">{s.h2}</h2>
              <div className="text-sm text-text-secondary leading-relaxed space-y-3">{s.body}</div>
            </section>
          ))}

          <section className="mb-10">
            <h2 className="text-xl font-bold text-text-primary mb-4">東京都の事業との関係</h2>
            <div className="text-sm text-text-secondary leading-relaxed space-y-3">
              <p>
                東京都は「令和8年度東京都防犯機器等購入緊急補助事業」として、区市町村が行う防犯機器の補助を支援しています。都の補助は区市町村を通じた間接補助で、都に直接申し込むものではありません。対象品目や補助額は区市町村ごとに異なり、申請先はお住まいの区市町村です。都は令和7年度に都の補助金の交付を受けた人は、令和8年度に再び都の補助を受けられないとしています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={TOKYO_HOJO_SOURCE.url}>{TOKYO_HOJO_SOURCE.label}</Ext>（{HOJO_CHECKED}確認）。ほかの区の対象品目は<a href="/bouhan-hojo-tokyo/" className="text-primary underline">東京23区の一覧</a>にまとめています。
              </p>
            </div>
          </section>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">鍵の交換を業者に頼む前に</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              補助を使う場合は、見積もりの段階で「交換後の錠の製品名・型番」「本体代と工事費の内訳」「宛名を申請者本人にした領収書」を出せるかを業者に確認しておくと、申請の書類がそろいます。{w.ward}で依頼できる鍵業者は{w.ward}のページで比較しています。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href={areaPath} className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">{w.ward}の鍵業者を見る →</a>
              <a href="/bouhan-hojo-tokyo/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">23区の補助を比べる</a>
            </div>
          </div>

          <h2 className="text-xl font-bold text-text-primary mb-4">{w.ward}の防犯補助のよくある質問</h2>
          <div className="space-y-3 mb-10">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-xl border border-black/10 overflow-hidden">
                <summary className="px-5 py-4 cursor-pointer font-medium text-text-primary text-sm">Q. {f.q}</summary>
                <div className="px-5 pb-4 text-sm text-text-secondary leading-relaxed">A. {f.a}</div>
              </details>
            ))}
          </div>

          <h2 className="text-xl font-bold text-text-primary mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/bouhan-hojo-tokyo/", label: "東京23区の防犯機器補助と鍵交換", desc: "区ごとの対象品目・補助率・期限の一覧" },
              { href: areaPath, label: `${w.ward}の鍵交換・鍵開け業者`, desc: "公式表示の料金と受付時間で比較" },
              { href: "/cp-nintei-jou/", label: "CP認定錠の解説", desc: "防犯性能の高い建物部品の見分け方" },
              { href: "/hojo-jou/", label: "補助錠の基礎知識", desc: "1ドア2ロックの考え方と取り付け" },
            ].map((r) => (
              <a key={r.href} href={r.href} className="bg-white rounded-xl border border-black/10 p-4 hover:border-primary/40 transition-colors">
                <p className="font-bold text-primary text-sm mb-1">{r.label}</p>
                <p className="text-xs text-text-muted leading-relaxed">{r.desc}</p>
              </a>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
