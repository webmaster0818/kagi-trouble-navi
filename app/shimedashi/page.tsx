import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "家を締め出された時の対処法【2026年版】鍵開け料金相場・賃貸/オートロックの注意点 | 鍵トラブルナビ",
  description:
    "家の締め出し（鍵の閉め出し）で今すぐ入りたい時の対処法を手順で解説。賃貸は管理会社へ、オートロックは管理人経由、鍵屋に頼む場合の料金相場は一般的な鍵で8,000〜15,000円。深夜割増・本人確認・やってはいけないNG行動まで紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/shimedashi/" },
};

const steps = [
  { title: "他の入口・家族・合鍵を確認する", desc: "まずは深呼吸。勝手口や開いている窓（安全に手が届く範囲）、同居家族・実家の合鍵、大家や管理会社預けの鍵がないかを確認します。数十分で家族が帰宅するなら待つのが一番安上がりです。" },
  { title: "賃貸なら管理会社・大家に連絡する", desc: "賃貸住宅では管理会社や大家がマスターキー・スペアキーを保管していることがあります。夜間でも緊急連絡先（契約書や物件掲示板に記載）につながる場合があるので、鍵屋を呼ぶ前に必ず連絡しましょう。無断で鍵開け・交換をすると費用負担でトラブルになることがあります。" },
  { title: "オートロックは管理人・他住人経由で共用部へ", desc: "マンションのオートロックはエントランスと自室の2段階です。エントランスは管理人への連絡が基本（他の住人の後に続いて入る「共連れ」はトラブルの元なので避けましょう）。自室の鍵開けは通常の鍵開けと同じ扱いになります。" },
  { title: "鍵屋に鍵開けを依頼する", desc: "上記で解決しない場合は鍵の専門業者へ。依頼時は「鍵の種類（刻みキー/ディンプルキー等）」「建物の種類」「時間帯」を伝えると正確な見積もりが出やすくなります。到着まで15〜60分が目安です。" },
  { title: "作業前に総額見積もりと本人確認", desc: "正規の業者は悪用防止のため、その家に住んでいることの確認（身分証など）を行います。作業前に出張費・割増込みの総額を必ず確認してから依頼しましょう。" },
];

const faqs = [
  { q: "家を締め出された時、鍵屋に頼むといくらかかりますか？", a: "一般的な鍵（ディスクシリンダー等）の鍵開けで8,000〜15,000円、防犯性の高いディンプルキーで15,000〜30,000円が相場の目安です。これに出張費（3,000円前後）や深夜・早朝の割増が加わる場合があります。作業前に必ず総額の見積もりを確認しましょう。" },
  { q: "深夜の締め出しでも鍵屋は来てくれますか？", a: "24時間対応の業者なら深夜でも駆けつけてくれます。ただし多くの業者で深夜・早朝は割増料金（数千円程度）がかかります。始発を待てる状況なら日中の依頼のほうが割安です。" },
  { q: "身分証も家の中。本人確認はどうなりますか？", a: "財布ごと閉め出された場合でも、解錠後に室内の身分証を提示する方法で対応してもらえるのが一般的です。正規の業者ほど本人確認を徹底しています（悪用防止のため）。逆に確認を一切しない業者は注意が必要です。" },
  { q: "賃貸で締め出された場合、鍵開け費用は誰が負担しますか？", a: "入居者の不注意による締め出しは、原則として入居者負担です。ただし管理会社がスペアキーで無料対応してくれる場合や、加入している火災保険・入居者サポートに鍵開け特典が含まれる場合があるため、依頼前に確認すると節約できます。" },
  { q: "警察は鍵を開けてくれますか？", a: "原則として警察は住宅の鍵開け作業は行いません（緊急の人命に関わる場合を除く）。締め出しは鍵業者か管理会社への連絡が基本です。鍵を紛失した場合は、悪用防止のため警察への遺失届の提出をおすすめします。" },
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
    { "@type": "ListItem", position: 2, name: "家を締め出された時の対処法" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "家を締め出された時の対処法【2026年版】",
  description: "家の締め出しで今すぐ入りたい時の手順、鍵開けの料金相場、賃貸・オートロックの注意点を解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-07-02",
  dateModified: "2026-07-02",
};

export default function ShimedashiPage() {
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
            <span className="text-text-secondary">家を締め出された時の対処法</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            家を締め出された！今すぐ入るための対処法【2026年版】
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年7月2日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：締め出されたらこの順で動く</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              家を締め出されたら、<strong>①合鍵・家族・他の入口の確認 → ②賃貸なら管理会社・大家へ連絡 → ③解決しなければ鍵屋に依頼</strong>の順で動くのが最短・最安です。鍵屋の鍵開け相場は一般的な鍵で<strong>8,000〜15,000円</strong>、ディンプルキーで<strong>15,000〜30,000円</strong>（＋出張費・深夜割増の場合あり）。窓を割る・こじ開けるのは修理費のほうが高くつくためNGです。
            </p>
          </div>

          {/* 手順 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">締め出し時の対処手順（5ステップ）</h2>
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
              { title: "窓を割って入る", desc: "ガラス交換費用（数万円〜）が鍵開けより高くつくうえ、ケガや通報のリスクも。防犯ガラスならまず割れません。" },
              { title: "針金などでこじ開ける", desc: "シリンダー内部を傷めると鍵開けでは済まず交換（10,000〜40,000円）が必要になり、かえって高額になります。" },
              { title: "ベランダ・窓からの侵入", desc: "転落事故の危険があるほか、不審者として通報される例もあります。特に2階以上は絶対にやめましょう。" },
              { title: "相場より極端に安い広告で即決", desc: "「◯◯円〜」の過度に安い表示は現地で高額請求になる例があります。作業前に総額見積もりを確認しましょう。" },
            ].map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">NG: {n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 料金 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵屋に頼んだ場合の料金目安</h2>
          <div className="overflow-x-auto mb-4 rounded-xl border border-black/10">
            <table className="w-full text-sm min-w-[480px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-bold">状況</th>
                  <th className="px-4 py-3 text-left font-bold">料金相場（税込目安）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["鍵開け（一般的な刻みキー）", "8,000〜15,000円"],
                  ["鍵開け（ディンプルキー）", "15,000〜30,000円"],
                  ["出張費（かかる場合）", "3,000円前後"],
                  ["深夜・早朝の割増", "数千円程度"],
                  ["開かず交換になった場合", "＋10,000〜40,000円"],
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
            ※一般的な相場の目安です。鍵の種類・建物の状況・時間帯により変動します。詳しくは<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>をご覧ください。
          </p>

          {/* 業者選び・内部リンク */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">今すぐ来てくれる鍵業者を比較する</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              締め出しは到着スピードと総額の明確さが重要です。24時間対応・出張見積もり無料の業者を中心に比較しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を詳しく見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">締め出しに関するよくある質問</h2>
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
