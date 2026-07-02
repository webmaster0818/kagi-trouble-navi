import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "鍵をなくした時どうする？【2026年版】紛失時の手順・警察への届出・交換費用 | 鍵トラブルナビ",
  description:
    "鍵を紛失した時にやるべきことを順番に解説。行動履歴の確認→警察へ遺失届→賃貸は管理会社へ連絡→開かない場合は鍵屋へ。鍵開けは8,000円〜、防犯上シリンダー交換（10,000〜40,000円）を検討すべきケースも。スマートキー・車の鍵の対応も紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/kagi-funshitsu/" },
};

const steps = [
  { title: "直前の行動をたどって探す", desc: "ポケット・カバンの底・レシートの出た店・利用した交通機関など、最後に鍵を使った時点からの行動履歴をたどります。店舗や駅には遺失物窓口があるため電話確認が有効です。" },
  { title: "警察に遺失届を出す", desc: "見つからない場合は最寄りの交番・警察署で遺失届を提出します（オンライン申請に対応する都道府県もあります）。届け出ておくと、鍵が拾得物として届いた際に連絡が来ます。悪用時の証明にもなるため必ず出しておきましょう。" },
  { title: "賃貸なら管理会社・大家に連絡する", desc: "賃貸住宅の鍵紛失は管理会社・大家への報告が原則です。無断で鍵交換をすると契約違反や費用トラブルになることがあります。スペアキー貸し出しや指定業者の案内を受けられる場合もあります。" },
  { title: "家に入れない場合は鍵屋に解錠を依頼する", desc: "スペアキーもなく家に入れない場合は鍵の専門業者へ。一般的な鍵の解錠は8,000〜15,000円、ディンプルキーは15,000〜30,000円が目安です。作業前に総額見積もりと本人確認があります。" },
  { title: "防犯リスクに応じてシリンダー交換を検討する", desc: "住所がわかるもの（免許証・郵便物など）と一緒に紛失した場合は、拾った第三者が侵入できるリスクがあるため、シリンダー交換（10,000〜40,000円）を強くおすすめします。鍵単体の紛失でも、不安が残るなら交換が安心です。" },
];

const faqs = [
  { q: "鍵をなくしたら、まず何をすべきですか？", a: "①行動履歴をたどって探す（立ち寄った店・交通機関へ確認）②見つからなければ警察へ遺失届③賃貸は管理会社・大家へ連絡、の順です。家に入れない場合は鍵業者へ解錠を依頼します。遺失届は拾得時の連絡と悪用時の証明のため必ず出しておきましょう。" },
  { q: "鍵の紛失で交換までした方がいいのはどんな場合ですか？", a: "住所が特定できるもの（免許証・保険証・郵便物など）と一緒になくした場合は、第三者による侵入リスクがあるためシリンダー交換を強くおすすめします。鍵単体でも、自宅周辺で紛失した可能性が高い場合など不安が残るなら交換が安心です。費用は10,000〜40,000円が目安です。" },
  { q: "賃貸の鍵をなくした場合、交換費用は誰が負担しますか？", a: "入居者の過失による紛失は、原則として入居者負担になるのが一般的です。ただし契約内容により異なるため、必ず管理会社・大家に連絡して指示を受けてください。無断交換は契約違反になる場合があります。" },
  { q: "車の鍵・スマートキーをなくした場合は？", a: "車はディーラーまたは鍵業者でスペアキー作成・イモビライザー登録が必要になり、家の鍵より高額（スマートキーは数万円〜）になる傾向があります。ロードサービス（JAF・自動車保険付帯）で対応できる場合もあるため、加入中のサービスを先に確認しましょう。" },
  { q: "火災保険や共済で鍵開け費用は補償されますか？", a: "火災保険や入居者サポートに「鍵開け無料サービス」や「鍵トラブル特約」が付帯している場合があります。依頼前に契約内容を確認すると自己負担を抑えられることがあります。" },
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
    { "@type": "ListItem", position: 2, name: "鍵をなくした時の対処法" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "鍵をなくした時どうする？紛失時の対処手順【2026年版】",
  description: "鍵の紛失時にやるべきことを手順で解説。警察への遺失届、賃貸の連絡、解錠・交換の費用目安まで。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-07-02",
  dateModified: "2026-07-02",
};

export default function KagiFunshitsuPage() {
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
            <span className="text-text-secondary">鍵をなくした時の対処法</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            鍵をなくした時どうする？紛失時の対処手順【2026年版】
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年7月2日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：鍵をなくしたらこの順で動く</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              鍵を紛失したら、<strong>①行動履歴をたどって探す → ②警察へ遺失届 → ③賃貸は管理会社へ連絡 → ④入れなければ鍵屋に解錠依頼</strong>の順で対応します。解錠の相場は<strong>8,000〜15,000円</strong>（ディンプルキーは15,000〜30,000円）。住所がわかるものと一緒になくした場合は、防犯のため<strong>シリンダー交換（10,000〜40,000円）</strong>まで行うのが安全です。
            </p>
          </div>

          {/* 手順 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵紛失時の対処手順（5ステップ）</h2>
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

          {/* 交換判断 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">交換すべき？判断の目安</h2>
          <div className="overflow-x-auto mb-10 rounded-xl border border-black/10">
            <table className="w-full text-sm min-w-[520px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-bold">状況</th>
                  <th className="px-4 py-3 text-left font-bold">推奨対応</th>
                  <th className="px-4 py-3 text-left font-bold">費用目安</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["身分証・住所がわかるものと一緒に紛失", "シリンダー交換を強く推奨", "10,000〜40,000円"],
                  ["自宅周辺で落とした可能性が高い", "交換を推奨", "10,000〜40,000円"],
                  ["外出先で紛失・住所特定の心配なし", "様子見も可（不安なら交換）", "0円〜"],
                  ["スペアなし・家に入れない", "解錠＋必要に応じ交換", "8,000円〜"],
                ].map((r, i) => (
                  <tr key={i} className={i % 2 ? "bg-surface-alt" : "bg-white"}>
                    <td className="px-4 py-3 font-medium text-text-primary">{r[0]}</td>
                    <td className="px-4 py-3 text-text-secondary">{r[1]}</td>
                    <td className="px-4 py-3 text-primary font-bold whitespace-nowrap">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 業者選び・内部リンク */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">解錠・交換に対応できる鍵業者を比較する</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              紛失時は「解錠＋交換」をまとめて頼めると二度手間になりません。24時間対応・見積もり無料の業者を中心に比較しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を詳しく見る</a>
              <a href="/shimedashi/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">締め出された時の対処法</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵の紛失に関するよくある質問</h2>
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
