import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "金庫が開かない！鍵開けの料金相場と対処法【2026年版】番号忘れ・電池切れ・鍵紛失 | 鍵トラブルナビ",
  description:
    "金庫が開かない時の対処法を原因別に解説。ダイヤル番号忘れ・テンキーの電池切れ・鍵の紛失それぞれの対応と、業者による金庫解錠の料金相場（15,000〜50,000円）、破壊解錠の判断基準、依頼時に必要な所有者確認まで紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/kinko-kaijo/" },
};

const causes = [
  { title: "テンキー式の電池切れ", desc: "家庭用テンキー金庫で最も多い原因です。多くの機種は電池を交換すれば設定番号はそのまま使えます（電池ボックスは扉の外側にある機種が大半）。交換しても反応しない場合は基板故障の可能性があり、業者対応になります。" },
  { title: "ダイヤル番号を忘れた・合わせても開かない", desc: "ダイヤルは「右に4回→左に3回…」のように回す回数と方向が決まっています。手順が正しいのに開かない場合は番号違いか内部故障です。番号不明の場合、業者はダイヤル探索や解錠技術で対応します（時間がかかるため料金は高め）。メーカーに購入証明を提示して番号照会できる場合もあります。" },
  { title: "鍵（シリンダー）の紛失・折れ", desc: "シリンダー式は鍵の紛失・鍵折れが典型トラブルです。ピッキング等の非破壊解錠で対応できる場合が多く、折れた鍵の抜き取り＋合鍵作成で復旧できることもあります。" },
  { title: "長年開けていない・遺品の金庫", desc: "実家の遺品整理などで番号も鍵もわからないケースです。所有者確認（相続関係の説明など）のうえで業者が解錠します。古い金庫は部品が入手できず、開けた後は買い替えになることが多い点も念頭に置きましょう。" },
];

const faqs = [
  { q: "金庫の鍵開けの料金相場はいくらですか？", a: "金庫の解錠は15,000〜50,000円が目安です。家庭用の小型テンキー・シリンダー式は安く、業務用の大型・防盗金庫やダイヤル番号不明のケースは高くなります。出張費・時間帯割増が加わる場合もあるため、金庫の種類・メーカー・型番を伝えて事前見積もりを取りましょう。" },
  { q: "テンキー式金庫が反応しません。電池切れですか？", a: "まず電池切れを疑ってください。多くの家庭用機種は扉の外側に電池ボックスがあり、交換すれば設定番号のまま使えます。新品電池でも反応しない場合は基板や配線の故障が考えられ、業者による解錠・修理が必要です。" },
  { q: "ダイヤル番号を忘れた金庫は開けられますか？", a: "開けられます。業者はダイヤル探索などの技術で解錠しますが、時間がかかるため通常の鍵開けより高額（数万円〜）になります。メーカーによっては購入証明を提示すると番号を照会できる場合があるため、先にメーカーへ確認するのも一つの方法です。" },
  { q: "金庫の解錠を頼むと、所有者確認はありますか？", a: "あります。盗難金庫の解錠を防ぐため、正規の業者は身分証の提示や所有経緯（遺品の場合は相続関係の説明など）の確認を行います。確認を一切しない業者はかえって注意が必要です。" },
  { q: "破壊して開けた金庫はまた使えますか？", a: "破壊解錠の方法によります。シリンダーのみの破壊なら部品交換で再使用できる場合がありますが、扉やロック機構ごと破壊した場合は再使用できません。買い替え前提になるか、非破壊で開けられるかを見積もり時に確認しましょう。" },
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
    { "@type": "ListItem", position: 2, name: "金庫が開かない時の対処法" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "金庫が開かない！鍵開けの料金相場と対処法【2026年版】",
  description: "金庫が開かない原因別の対処法と、業者による解錠の料金相場、破壊解錠の判断基準を解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-07-02",
  dateModified: "2026-07-02",
};

export default function KinkoKaijoPage() {
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
            <span className="text-text-secondary">金庫が開かない時の対処法</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            金庫が開かない！原因別の対処法と鍵開け料金相場【2026年版】
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年7月2日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：金庫が開かない時の対処法</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              金庫が開かない原因の多くは<strong>テンキーの電池切れ・ダイヤル番号の間違い/忘れ・鍵の紛失</strong>のいずれかです。テンキーはまず電池交換、ダイヤルはメーカーへの番号照会という自力ルートを確認し、解決しなければ業者へ。業者による金庫解錠の相場は<strong>15,000〜50,000円</strong>（種類・難易度で変動）です。依頼時は所有者確認（身分証など）があります。
            </p>
          </div>

          {/* 原因別 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">開かない原因別の対処法</h2>
          <div className="space-y-4 mb-10">
            {causes.map((c, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{i + 1}. {c.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* 料金 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">金庫解錠の料金相場</h2>
          <div className="overflow-x-auto mb-4 rounded-xl border border-black/10">
            <table className="w-full text-sm min-w-[520px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-bold">金庫の種類・状況</th>
                  <th className="px-4 py-3 text-left font-bold">料金相場（税込目安）</th>
                  <th className="px-4 py-3 text-left font-bold">作業時間の目安</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["家庭用（シリンダー式・鍵紛失）", "15,000〜30,000円", "30〜60分"],
                  ["家庭用（テンキー式・故障）", "15,000〜35,000円", "30〜90分"],
                  ["家庭用（ダイヤル番号不明）", "20,000〜50,000円", "60〜120分"],
                  ["業務用・防盗金庫", "30,000円〜（要見積もり）", "60分〜"],
                ].map((r, i) => (
                  <tr key={i} className={i % 2 ? "bg-surface-alt" : "bg-white"}>
                    <td className="px-4 py-3 font-medium text-text-primary">{r[0]}</td>
                    <td className="px-4 py-3 text-primary font-bold whitespace-nowrap">{r[1]}</td>
                    <td className="px-4 py-3 text-text-muted whitespace-nowrap">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-10">
            ※一般的な相場の目安です。金庫のメーカー・型番・設置状況・時間帯により変動します。他の鍵作業の相場は<a href="/ryokin/" className="text-primary underline">料金相場ページ</a>をご覧ください。
          </p>

          {/* 依頼前チェック */}
          <h2 className="text-xl font-bold text-text-primary mb-4">業者に依頼する前のチェックリスト</h2>
          <ol className="space-y-3 mb-10">
            {[
              "金庫のメーカー・型番（扉や側面のプレート）を控える。伝えると見積もり精度が大きく上がります。",
              "テンキー式はまず新品電池で交換を試す（最も多い原因のため）。",
              "ダイヤル式はメーカーの番号照会サービス（購入証明が必要な場合あり）を確認する。",
              "所有者確認の書類（身分証、遺品の場合は状況を説明できるもの）を用意する。",
              "「非破壊で開けられるか」「開けた後に再使用できるか」を含めて総額見積もりを確認する。",
            ].map((t, i) => (
              <li key={i} className="flex gap-3 bg-surface-alt rounded-xl p-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">{i + 1}</span>
                <span className="text-sm text-text-secondary leading-relaxed">{t}</span>
              </li>
            ))}
          </ol>

          {/* 業者選び・内部リンク */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">金庫の解錠に対応できる鍵業者を比較する</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              金庫解錠は技術差が出やすい作業です。金庫対応を明記し、見積もり無料・非破壊解錠の実績がある業者を中心に比較しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を詳しく見る</a>
              <a href="/kagi-funshitsu/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">鍵をなくした時の対処法</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">金庫の鍵開けに関するよくある質問</h2>
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
