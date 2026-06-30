import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "鍵開け・鍵交換の料金相場【2026年最新】｜出張費・深夜割増・安く抑えるコツ | 鍵トラブルナビ",
  description:
    "鍵開け・鍵交換の料金相場を作業別にまとめて解説。一般錠の鍵開けは8,000〜15,000円、ディンプルキーは15,000〜30,000円が目安。出張費・深夜割増などの追加料金、ぼったくりを避けるコツ、業者の選び方まで2026年最新情報で紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/ryokin/" },
};

const priceRows = [
  { service: "鍵開け（一般的な鍵）", price: "8,000〜15,000円", time: "5〜30分" },
  { service: "鍵開け（ディンプルキー）", price: "15,000〜30,000円", time: "15〜60分" },
  { service: "鍵交換（シリンダー交換）", price: "10,000〜25,000円", time: "15〜40分" },
  { service: "鍵交換（ディンプルキー）", price: "20,000〜40,000円", time: "15〜40分" },
  { service: "鍵修理", price: "5,000〜15,000円", time: "10〜30分" },
  { service: "金庫の鍵開け", price: "15,000〜50,000円", time: "30〜120分" },
  { service: "車のインロック解錠", price: "12,000〜30,000円", time: "10〜40分" },
  { service: "バイクの鍵開け", price: "8,000〜20,000円", time: "10〜30分" },
];

const factors = [
  { title: "鍵の種類", desc: "一般的なディスクシリンダーは安価ですが、ディンプルキーや電子錠・特殊錠は防犯性が高く解錠に技術と時間がかかるため料金が上がります。" },
  { title: "作業時間帯（深夜・早朝割増）", desc: "多くの業者で深夜・早朝・休日は割増料金（数千円〜）がかかります。急ぎでなければ日中の依頼が割安です。" },
  { title: "出張費・見積もり", desc: "基本料金とは別に出張費（3,000円前後）がかかる場合があります。出張・見積もり無料を明記している業者を選ぶと安心です。" },
  { title: "作業の難易度・破壊の有無", desc: "鍵を壊さず開けられるか、シリンダー交換が必要かで費用が変わります。破壊解錠後に交換となると部品代が追加されます。" },
];

const faqs = [
  { q: "鍵開けの料金相場はいくらですか？", a: "一般的な鍵（ディスクシリンダー等）の鍵開けは8,000〜15,000円、防犯性の高いディンプルキーは15,000〜30,000円が目安です。これに出張費や深夜割増が加わる場合があります。正確な金額は鍵の種類・状況により変わるため、必ず作業前に見積もりを確認しましょう。" },
  { q: "深夜や早朝に頼むと高くなりますか？", a: "はい。多くの業者で深夜・早朝・休日は割増料金（数千円程度）が設定されています。緊急でなければ日中に依頼するほうが割安です。割増の有無と金額は依頼前に必ず確認してください。" },
  { q: "鍵開けでぼったくりを避けるには？", a: "①作業前に必ず総額の見積もりを書面・口頭で確認する、②「出張・見積もり無料」「追加料金なし」を明記する業者を選ぶ、③相場より極端に安い広告（『290円〜』等）は現地で高額請求される例があるため注意する、の3点が有効です。" },
  { q: "賃貸住宅の鍵開け・鍵交換は自分で頼んでいい？", a: "鍵開け（締め出し）は入居者の判断で依頼できますが、鍵交換は原状回復や費用負担の関係で、事前に管理会社・大家へ連絡するのが原則です。交換費用の負担者は契約内容によって異なります。" },
  { q: "料金以外で業者を選ぶポイントは？", a: "対応エリアと到着スピード、24時間対応か、見積もりの明確さ、実績・口コミ、追加料金の有無を比較しましょう。当サイトの業者比較も参考にしてください。" },
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
    { "@type": "ListItem", position: 2, name: "鍵開け・鍵交換の料金相場" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "鍵開け・鍵交換の料金相場【2026年最新】",
  description: "鍵開け・鍵交換の作業別料金相場と追加料金、安く抑えるコツを解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-06-30",
  dateModified: "2026-06-30",
};

export default function RyokinPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">🔑</span>
            <span className="text-xl font-bold tracking-tight">鍵トラブルナビ</span>
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="/#trouble" className="hover:text-secondary transition-colors">トラブル別</a>
            <a href="/#service" className="hover:text-secondary transition-colors">サービス別</a>
            <a href="/ryokin/" className="hover:text-secondary transition-colors">料金相場</a>
            <a href="/agents/" className="hover:text-secondary transition-colors">業者比較</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-surface-alt border-b border-black/5">
          <div className="max-w-4xl mx-auto px-4 py-3 text-xs text-text-muted">
            <a href="/" className="hover:text-primary">ホーム</a>
            <span className="mx-1.5">/</span>
            <span className="text-text-secondary">鍵開け・鍵交換の料金相場</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            鍵開け・鍵交換の料金相場【2026年最新】
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年6月30日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：鍵開け・鍵交換の料金相場</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              鍵開けの料金相場は、一般的な鍵で<strong>8,000〜15,000円</strong>、防犯性の高いディンプルキーで<strong>15,000〜30,000円</strong>が目安です。鍵交換はシリンダー交換で<strong>10,000〜25,000円</strong>（ディンプルキーは20,000〜40,000円）。これに出張費（3,000円前後）や深夜・早朝の割増が加わる場合があります。鍵の種類や状況で金額が変わるため、<strong>作業前に必ず総額の見積もりを確認</strong>するのが、ぼったくりを避ける最大のコツです。
            </p>
          </div>

          {/* 料金相場テーブル */}
          <h2 className="text-xl font-bold text-text-primary mb-4">作業別の料金相場一覧</h2>
          <div className="overflow-x-auto mb-4 rounded-xl border border-black/10">
            <table className="w-full text-sm min-w-[520px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-bold">作業内容</th>
                  <th className="px-4 py-3 text-left font-bold">料金相場（税込目安）</th>
                  <th className="px-4 py-3 text-left font-bold">作業時間の目安</th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map((r, i) => (
                  <tr key={i} className={i % 2 ? "bg-surface-alt" : "bg-white"}>
                    <td className="px-4 py-3 font-medium text-text-primary">{r.service}</td>
                    <td className="px-4 py-3 text-primary font-bold whitespace-nowrap">{r.price}</td>
                    <td className="px-4 py-3 text-text-muted whitespace-nowrap">{r.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-10">
            ※上記は一般的な相場の目安です。鍵の種類・防犯性能・建物の状況・時間帯により変動します。実際の費用は各業者の見積もりでご確認ください。
          </p>

          {/* 料金を左右する要因 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">料金を左右する4つの要因</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {factors.map((f, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{f.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* ぼったくり回避 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">高額請求・ぼったくりを避ける3つのコツ</h2>
          <ol className="space-y-3 mb-10">
            {[
              "作業前に必ず「総額」の見積もりを確認する。「基本料金のみ」の提示で作業を始めず、出張費・部品代・割増を含めた合計を聞く。",
              "「出張・見積もり無料」「追加料金なし」を明記している業者を選ぶ。見積もり後の追加請求トラブルを避けられる。",
              "広告の極端な安値（『◯◯円〜』の過度に安い表示）に注意する。現地で高額になる例があるため、相場とかけ離れた価格は理由を確認する。",
            ].map((t, i) => (
              <li key={i} className="flex gap-3 bg-surface-alt rounded-xl p-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">{i + 1}</span>
                <span className="text-sm text-text-secondary leading-relaxed">{t}</span>
              </li>
            ))}
          </ol>

          {/* 業者選び・内部リンク */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">料金と対応スピードで業者を比較する</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              料金は業者によって異なります。対応エリア・到着スピード・24時間対応・見積もりの明確さもあわせて比較しましょう。主要な鍵トラブル業者の特徴・料金は以下で確認できます。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/agents/kagi110ban/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">カギ110番の評判・料金</a>
              <a href="/agents/seikatsu-kyukyusha/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">鍵の生活救急車の評判・料金</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵開け・鍵交換の料金に関するよくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-xl border border-black/10 overflow-hidden">
                <summary className="px-5 py-4 cursor-pointer font-medium text-text-primary text-sm">Q. {f.q}</summary>
                <div className="px-5 pb-4 text-sm text-text-secondary leading-relaxed">A. {f.a}</div>
              </details>
            ))}
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white/70 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex flex-col sm:flex-row justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3 text-white">
                <span className="text-2xl">🔑</span>
                <span className="text-lg font-bold">鍵トラブルナビ</span>
              </div>
              <p className="text-sm max-w-sm">
                鍵のトラブルでお困りの方に、信頼できる鍵業者を比較・紹介するサービスです。
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">運営情報</h4>
              <ul className="space-y-2 text-sm">
                <li>運営: 株式会社MediaX</li>
                <li>所在地: 東京都渋谷区</li>
                <li><a href="/terms/" className="hover:text-white transition-colors">利用規約</a></li>
                <li><a href="/privacy/" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
                <li><a href="/content-policy/" className="hover:text-white transition-colors">記事の制作ポリシー</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-xs text-white/40">
            <p>当サイトはアフィリエイトプログラムに参加しており、紹介先サービスへの申し込みにより報酬を受け取る場合があります。料金は2026年6月時点の一般的な相場で、実際の費用は各業者の見積もりによります。</p>
            <p className="mt-2">&copy; 2026 株式会社MediaX All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
