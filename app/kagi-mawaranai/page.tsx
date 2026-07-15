import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "鍵が回らない・回りにくい時の原因と対処法【2026年7月】やってはいけないNGと料金相場 | 鍵トラブルナビ",
  description:
    "鍵が回らない・固い・回りにくい時の原因（ホコリ詰まり・潤滑不足・鍵の摩耗・凍結）と正しい対処法を解説。油（CRE556）を注すのはNG。直らない場合のシリンダー交換の料金相場は8,000〜25,000円が目安。無理に回して鍵を折らないための手順を紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/kagi-mawaranai/" },
};

const steps = [
  { title: "まず無理に回さない・力を入れすぎない", desc: "回らないからと力任せに回すと、鍵穴の中で鍵が折れてしまい、鍵開け＋シリンダー交換でかえって高額になります。まずは一度手を止め、原因を切り分けましょう。合鍵を使っている場合は、摩耗の少ない純正キー（元鍵）で試すと回ることがあります。" },
  { title: "鍵穴と鍵の汚れ・異物を取り除く", desc: "鍵穴にホコリ・砂・糸くずが詰まると回らなくなります。掃除機やエアダスターで鍵穴の異物を吸い出し、鍵本体も乾いた布で拭きます。濡らしたり洗剤を使うのは避けてください（内部のサビの原因になります）。" },
  { title: "鍵穴専用の潤滑剤を使う（油はNG）", desc: "潤滑不足が原因なら、鍵穴専用の潤滑剤（パウダー系・フッ素系）を少量スプレーします。応急処置として鉛筆の芯（黒鉛）を鍵の溝にこすりつける方法も有効です。※CRE556などの一般的な潤滑油（オイル系）は絶対に使わないでください。ホコリを吸着して数日〜数週間後にさらに悪化します。" },
  { title: "扉のゆがみ・建て付けを確認する", desc: "鍵は回るのに開かない・閉まりにくい場合は、扉のゆがみや金具（デッドボルトと受け座のズレ）が原因のことがあります。扉を軽く押し引きしながら鍵を回すと動くことがあります。頻発するなら建て付けの調整が必要です。" },
  { title: "直らなければ鍵の専門業者へ", desc: "上記でも回らない・鍵やシリンダーが摩耗している場合は、無理をせず鍵の専門業者へ。放置して完全に回らなくなると開錠＋交換が必要になり高額化します。依頼時は鍵の種類（刻みキー/ディンプルキー）と症状を伝えると見積もりが正確になります。作業前に総額を必ず確認しましょう。" },
];

const faqs = [
  { q: "鍵が回らない時、油（CRE556）を注してもいいですか？", a: "おすすめしません。CRE556などのオイル系潤滑剤は一時的に滑りが良くなりますが、粘度でホコリを吸着し、数日〜数週間後にかえって固まって悪化させることが多いためです。鍵穴には「鍵穴専用潤滑剤（パウダー系・フッ素系）」を使うか、応急処置なら鉛筆の芯（黒鉛）を鍵にこすりつけてください。" },
  { q: "鍵が回りにくい主な原因は何ですか？", a: "①鍵穴のホコリ・ゴミ詰まり ②潤滑不足 ③鍵やシリンダーの経年摩耗・変形 ④扉のゆがみ・金具のズレ ⑤冬場の凍結 が主な原因です。合鍵は純正キーより精度が落ち摩耗しやすいため、合鍵で回りにくい場合は元鍵で試すと改善することがあります。" },
  { q: "鍵が鍵穴の中で折れてしまいました。どうすればいいですか？", a: "自分で取り出そうとすると奥に押し込んで悪化させることがあります。折れた鍵の一部が出ていればラジオペンチで慎重に引き抜ける場合もありますが、無理なら鍵の専門業者に依頼してください。折れ込んだ鍵の除去とシリンダー交換で対応するのが一般的です。" },
  { q: "直らない場合、鍵交換の料金はいくらですか？", a: "シリンダー交換の相場は一般的な鍵で8,000〜15,000円、防犯性の高いディンプルキーで15,000〜25,000円程度が目安です（部品代＋作業費）。これに出張費や深夜・早朝の割増が加わる場合があります。作業前に総額の見積もりを確認しましょう。" },
  { q: "冬に鍵が回らないのは凍結ですか？", a: "気温が氷点下になると鍵穴内部の水分が凍って回らなくなることがあります。お湯をかけると再凍結や部品の傷みの原因になるため避け、市販の解氷スプレーやカイロで鍵穴周辺を温める、温めた鍵をゆっくり挿すなどで対応します。凍結を繰り返す場合は鍵穴用の防水・潤滑ケアが有効です。" },
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
    { "@type": "ListItem", position: 2, name: "鍵が回らない・回りにくい時の対処法" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "鍵が回らない・回りにくい時の原因と対処法【2026年7月】",
  description: "鍵が回らない・固い時の原因と正しい対処法、やってはいけないNG、直らない場合の料金相場を解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-07-15",
  dateModified: "2026-07-15",
};

export default function KagiMawaranaiPage() {
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
            <a href="/ryokin-index/" className="hover:text-secondary transition-colors">料金インデックス</a>
            <a href="/kagi-koukan-timing/" className="hover:text-secondary transition-colors">交換の時期</a>
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
            <span className="text-text-secondary">鍵が回らない・回りにくい時の対処法</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            鍵が回らない・回りにくい！原因と正しい対処法【2026年7月】
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年7月15日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：鍵が回らない時はこの順で</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              鍵が回らない時は、<strong>①無理に回さない（鍵折れ防止）→ ②鍵穴のホコリ・異物を除去 → ③鍵穴専用潤滑剤（または鉛筆の芯）を使う</strong>のが正しい順番です。<strong>CRE556などの油はNG</strong>（ホコリを吸着して悪化）。それでも直らない・摩耗している場合はシリンダー交換で、相場は一般的な鍵で<strong>8,000〜15,000円</strong>、ディンプルキーで<strong>15,000〜25,000円</strong>が目安です。
            </p>
          </div>

          {/* 手順 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵が回らない時の対処手順（5ステップ）</h2>
          <ol className="space-y-3 mb-10">
            {steps.map((s, i) => (
              <li key={i} className="flex gap-3 bg-white rounded-xl border border-black/10 p-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">{i + 1}</span>
                <div>
                  <p className="font-bold text-text-primary text-sm mb-1">{s.title}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* NG行動 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">やってはいけないNG行動</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { title: "油（CRE556）を注す", desc: "一時的に滑りますが、粘度でホコリを吸着し数日〜数週間後にさらに固まります。鍵穴には専用のパウダー系・フッ素系潤滑剤を使いましょう。" },
              { title: "力任せに回す", desc: "回らないまま無理に回すと鍵穴の中で鍵が折れ、開錠＋シリンダー交換で高額に。少しでも抵抗が強い時は止めましょう。" },
              { title: "針金などでこじる", desc: "シリンダー内部のピンを傷めると、清掃や潤滑では直らず交換（10,000〜25,000円）が必要になります。" },
              { title: "凍結にお湯をかける", desc: "急な温度差で部品を傷めたり、水分が再凍結して悪化します。解氷スプレーやカイロで温めるのが正解です。" },
            ].map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">NG: {n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 料金 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">直らない場合の料金目安（鍵開け・交換）</h2>
          <div className="overflow-x-auto mb-4 rounded-xl border border-black/10">
            <table className="w-full text-sm min-w-[480px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-bold">作業</th>
                  <th className="px-4 py-3 text-left font-bold">料金相場（税込目安）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["鍵開け（回らなくなった場合）", "8,000〜15,000円"],
                  ["シリンダー交換（一般的な鍵）", "8,000〜15,000円"],
                  ["シリンダー交換（ディンプルキー）", "15,000〜25,000円"],
                  ["折れ込んだ鍵の取り出し", "8,000〜15,000円"],
                  ["出張費・深夜割増（かかる場合）", "3,000円前後〜"],
                ].map((r, i) => (
                  <tr key={i} className={i % 2 ? "bg-surface-alt" : "bg-white"}>
                    <td className="px-4 py-3 font-medium text-text-primary">{r[0]}</td>
                    <td className="px-4 py-3 text-primary font-bold whitespace-nowrap">{r[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-10">
            ※一般的な相場の目安です。鍵の種類・状況・時間帯により変動します。各社の公式料金は<a href="/ryokin-index/" className="text-primary underline">鍵トラブル料金インデックス</a>、相場の詳細は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>をご覧ください。
          </p>

          {/* 業者選び・内部リンク */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">直らない鍵は無理せず業者に相談</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              自分で直そうとして鍵を折ると、かえって高額になります。潤滑・清掃で直らない場合は、料金の明確な業者に総額見積もりを取って相談しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin-index/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">各社の公式料金を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵が回らないトラブルのよくある質問</h2>
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
            <p>当サイトはアフィリエイトプログラムに参加しており、紹介先サービスへの申し込みにより報酬を受け取る場合があります。料金は2026年7月時点の一般的な相場で、実際の費用は各業者の見積もりによります。</p>
            <p className="mt-2">&copy; 2026 株式会社MediaX All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
