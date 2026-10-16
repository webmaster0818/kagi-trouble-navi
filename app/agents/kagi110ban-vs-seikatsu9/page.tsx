import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "カギ110番と生活救急車はどっちがいい？料金・無料範囲・運営会社を公式情報で比較【2026年7月】 | 鍵トラブルナビ",
  description:
    "カギ110番（鍵開け6,600円〜・シェアリングテクノロジー運営）と生活救急車（刻みキー8,800円〜・出張・見積もり・キャンセル無料と明記）を、公式サイトの一次情報で比較しました。無料範囲の記載方法・料金表示の構造・運営会社の違いと、両社共通の注意点（金額は現地見積もりで確定）を中立的な立場で解説します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/agents/kagi110ban-vs-seikatsu9/" },
};

const compareRows = [
  ["鍵開けの表示料金", "6,600円〜（税込・一本値表示）", "刻みキー8,800円〜／ディンプルキー33,000円〜（鍵種別の料金表を公開）"],
  ["見積もり", "無料", "無料"],
  ["出張料", "「交通費は別途発生する場合があります」と公式記載", "無料（SA・離島等の高速道路利用は加算の記載あり）"],
  ["キャンセル料", "「お客様都合では別途発生する場合があります」と公式記載", "無料と公式に明記"],
  ["受付時間", "24時間365日", "24時間365日"],
  ["対応エリア", "全国47都道府県", "全国（公式表記：拠点2,270店）"],
  ["仕組み", "加盟店方式（マッチング型）", "パートナー店（加盟店）方式"],
  ["運営会社", "シェアリングテクノロジー株式会社（東証グロース3989・名古屋市）", "株式会社生活救急車（非上場・名古屋市。2022年11月にJBRから事業承継）"],
  ["支払い方法", "現金・各種クレジットカード（一部加盟店・エリア除く）", "現金・クレジットカード VISA/MASTER/JCB（一部パートナー店除く）"],
];

const faqs = [
  { q: "カギ110番と生活救急車、結局どちらが安いですか？", a: "表示上の最低料金はカギ110番（6,600円〜）が低いものの、どちらも実際の金額は現地見積もりで確定します。公開口コミでは、両社とも「表示料金より現地見積もりが高かった」という指摘が最も多い傾向にあるため、料金は表示価格ではなく、作業前に提示された総額で比較することをおすすめします。" },
  { q: "キャンセル料の扱いはどう違いますか？", a: "生活救急車は「出張・見積もり・キャンセルすべて無料」と公式に明記しています。カギ110番は見積もりは無料ですが、「交通費」「お客様都合のキャンセル料」は別途発生する場合があると公式に記載されています（2026年7月4日確認）。見積もりを確認してから断る可能性がある場合は、この違いを事前にご確認ください。" },
  { q: "どちらも同じ業者が来ることはありますか？", a: "両社とも自社スタッフではなく加盟店（パートナー店）方式のため、地域によっては同じ鍵業者が両方のネットワークに加盟している可能性はあります。どちらを利用する場合も、来訪する業者名・作業前の総額見積もり・キャンセル可否をその場で確認することが重要です。" },
  { q: "生活救急車はJBR（上場企業）の運営ではないのですか？", a: "以前はジャパンベストレスキューシステム（JBR）のブランドでしたが、2022年11月に事業が株式会社生活救急車へ承継されました（同社公式の運営企業ページで確認。商号変更は2022年12月2日・国税庁法人番号公表サイト）。JBR自体も2024年3月にMBOで上場廃止となっています。現在「上場企業の直接運営」といえるのはカギ110番（シェアリングテクノロジー・東証グロース3989）のみです。" },
  { q: "深夜の割増料金はありますか？", a: "両社とも、深夜・早朝割増の有無は公式サイト上で明記が確認できませんでした（2026年7月4日時点）。深夜に依頼する場合は、電話の時点で「深夜料金・割増を含めた総額」を必ず確認してください。" },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};
const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kagi-trouble-navi.com/" },
    { "@type": "ListItem", position: 2, name: "業者比較", item: "https://kagi-trouble-navi.com/agents/" },
    { "@type": "ListItem", position: 3, name: "カギ110番 vs 生活救急車" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "カギ110番と生活救急車はどっちがいい？料金・無料範囲・運営会社を公式情報で比較【2026年7月】",
  description: "カギ110番と生活救急車の料金表示・無料範囲・運営会社の違いを、公式の一次情報で比較した記事です。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
};

export default function VsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />


      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-surface-alt border-b border-black/5">
          <div className="max-w-4xl mx-auto px-4 py-3 text-xs text-text-muted">
            <a href="/" className="hover:text-primary">ホーム</a>
            <span className="mx-1.5">/</span>
            <a href="/agents/" className="hover:text-primary">業者比較</a>
            <span className="mx-1.5">/</span>
            <span className="text-text-secondary">カギ110番 vs 生活救急車</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            カギ110番と生活救急車はどっちがいい？料金・無料範囲・運営会社を公式情報で比較【2026年7月】
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年7月4日（両社の公式サイト・国税庁法人番号公表サイト・JPX公表情報を同日に一次確認）</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">比較の要点：両社の違いは「無料範囲の明記」と「料金表示の構造」です</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              両社とも24時間受付・全国対応・加盟店方式という点は共通していますが、公式の記載には明確な差があります。<strong>キャンセルまで無料と明記しているのは生活救急車</strong>（カギ110番は交通費・キャンセル料が「別途発生する場合あり」と記載）。一方、<strong>表示上の最低料金はカギ110番の鍵開け6,600円〜が低く、上場企業（東証グロース）の直接運営もカギ110番のみ</strong>です。ただし、公開口コミでは<strong>両社とも「表示より現地見積もりが高かった」という指摘が最も多い傾向</strong>にあるため、どちらを選ぶ場合も、作業前に総額を確認し、納得できなければ依頼を断ることが重要です。
            </p>
          </div>

          {/* 比較表 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">公式情報の比較表（2026年7月4日確認）</h2>
          <div className="overflow-x-auto mb-4 rounded-xl border border-black/10">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-bold w-36">項目</th>
                  <th className="px-4 py-3 text-left font-bold">カギ110番</th>
                  <th className="px-4 py-3 text-left font-bold">生活救急車</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r, i) => (
                  <tr key={i} className={i % 2 ? "bg-surface-alt" : "bg-white"}>
                    <td className="px-4 py-3 font-medium text-text-primary">{r[0]}</td>
                    <td className="px-4 py-3 text-text-secondary">{r[1]}</td>
                    <td className="px-4 py-3 text-text-secondary">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-10">
            ※両社公式サイトの表記にもとづいています（2026年7月4日確認）。料金・条件は加盟店・エリア・作業内容により変わります。実際の金額は現地の見積もりで確定します。
          </p>

          {/* 各論 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">選び方の3つの視点</h2>
          <div className="space-y-4 mb-10">
            <div className="bg-white rounded-xl border border-black/10 p-5">
              <h3 className="font-bold text-text-primary mb-2 text-sm">① 見積もりのみを依頼し、断る可能性があるか</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                比較のために見積もりのみを取りたい場合は、<strong>「出張・見積もり・キャンセル無料」を公式に明記している生活救急車</strong>のほうが条件が明確です。カギ110番は相談・見積もり自体は無料ですが、交通費とお客様都合のキャンセル料について「別途発生する場合があります」と公式に記載されているため、依頼時に電話で確認してください。
              </p>
            </div>
            <div className="bg-white rounded-xl border border-black/10 p-5">
              <h3 className="font-bold text-text-primary mb-2 text-sm">② 鍵の種類を把握しているか（ディンプルキーの場合は特に注意）</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                生活救急車は鍵種別の料金表を公開しており、<strong>防犯性の高いディンプルキーの解錠が33,000円〜と高額になる場合があることを公式に開示</strong>しています。カギ110番の「6,600円〜」は一本値表示のため、ディンプルキー等では大きく変わる可能性があります。自宅の鍵の種類（ギザギザの刻みキーか、表面にくぼみのあるディンプルキーか）を電話で伝え、種類別の目安を確認する方法が確実です。
              </p>
            </div>
            <div className="bg-white rounded-xl border border-black/10 p-5">
              <h3 className="font-bold text-text-primary mb-2 text-sm">③ 運営会社の情報開示を重視するか</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                カギ110番は東証グロース上場のシェアリングテクノロジー株式会社（証券コード3989）の直接運営で、企業情報の開示が充実している点が特徴です。生活救急車は2022年11月にJBRから事業承継した株式会社生活救急車（非上場・名古屋市）の運営です。<strong>「上場企業のJBRが運営」という古い情報がインターネット上に残っているため、ご注意ください</strong>（JBRは2024年3月に上場廃止）。
              </p>
            </div>
          </div>

          {/* 共通の注意点 */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-10">
            <h2 className="font-bold text-red-700 mb-3">両社共通の注意点</h2>
            <ul className="text-sm text-red-700 space-y-2">
              <li>・どちらも加盟店方式のため、<strong>来訪する業者・見積もり額は地域と店舗によって変わります</strong>。公開口コミでは、両社とも「表示料金より現地見積もりが高かった」という指摘が最も多い傾向にあります（みん評の傾向・件数には旧運営時代の投稿を含む）。</li>
              <li>・深夜・早朝割増の有無は、両社とも公式サイト上で明記を確認できませんでした。<strong>電話の時点で割増を含めた総額</strong>をご確認ください。</li>
              <li>・作業前に「総額」「内訳」「キャンセル可否」を確認し、納得できない場合はその場でお断りいただけます。</li>
            </ul>
          </div>

          {/* 内部リンク */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">各社の詳細・料金相場</h2>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/kagi110ban/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">カギ110番の口コミ・評判 →</a>
              <a href="/agents/seikatsu-kyukyusha/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">生活救急車の口コミ・評判 →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">鍵開け・鍵交換の料金相場</a>
              <a href="/agents/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">全業者の比較一覧</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">よくある質問</h2>
          <div className="space-y-3 mb-10">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-xl border border-black/10 overflow-hidden">
                <summary className="px-5 py-4 cursor-pointer font-medium text-text-primary text-sm">Q. {f.q}</summary>
                <div className="px-5 pb-4 text-sm text-text-secondary leading-relaxed">A. {f.a}</div>
              </details>
            ))}
          </div>

          {/* 出典 */}
          <section className="text-xs text-text-muted leading-relaxed">
            <h2 className="font-bold text-text-secondary text-sm mb-2">出典（2026年7月4日確認）</h2>
            <ul className="space-y-1">
              <li>・カギ110番 公式サイト（kagi110ban.jp 料金・運営企業ページ）</li>
              <li>・カギの生活救急車 公式サイト（kagi-seikatsukyukyusya.com 料金・FAQ）</li>
              <li>・国税庁法人番号公表サイト（シェアリングテクノロジー株式会社 2180001061708／株式会社生活救急車 8180001153391 の登記情報・変更履歴）</li>
              <li>・JPX 上場会社情報（シェアリングテクノロジー 3989）／JPX公表「上場廃止等の決定」（ジャパンベストレスキューシステム・2024年3月25日上場廃止）</li>
              <li>・口コミの傾向はみん評掲載の公開口コミを要約（件数・評点には旧運営時代の投稿を含む）</li>
            </ul>
          </section>
        </article>
      </main>

    </div>
  );
}
