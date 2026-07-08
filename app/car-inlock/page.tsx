import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "車のインロック（鍵の閉じ込み）解決法【2026年版】JAF・保険・鍵屋の料金比較 | 鍵トラブルナビ",
  description:
    "車に鍵を閉じ込めた（インロック）時の対処法を手順で解説。JAF会員は無料、非会員は有料（夜間・一般道のドア開放25,630円/JAF公式）。自動車保険のロードサービス付帯なら無料の場合も。鍵屋の相場は8,000〜15,000円。子ども・ペットの閉じ込みは迷わず119番を。",
  alternates: { canonical: "https://kagi-trouble-navi.com/car-inlock/" },
};

const steps = [
  { title: "スペアキーを取りに行けないか確認", desc: "自宅や家族の元にスペアキーがあり、30分〜1時間程度で取りに行ける・持ってきてもらえるなら、それが最も安全で無料の解決策です。" },
  { title: "JAF会員ならJAFに救援依頼（会員は無料）", desc: "JAF会員はキー閉じ込みの解錠を24時間無料で受けられます（JAF公式）。会員証がなくてもアプリや氏名照会で会員確認が可能です。非会員は有料で、救援が混雑している時間帯は会員優先になります。" },
  { title: "自動車保険のロードサービスを確認", desc: "多くの自動車保険（任意保険）にはロードサービスが自動付帯しており、キー閉じ込みの解錠が無料範囲に含まれていることが多いです。保険証券やアプリの緊急連絡先に電話して確認しましょう。利用しても等級には影響しないのが一般的ですが、念のため確認を。" },
  { title: "鍵の専門業者（鍵屋）に依頼", desc: "JAF非会員で保険も使えない場合は鍵屋へ。車種・年式・鍵のタイプ（スマートキーか否か）を伝えると見積もりがスムーズです。到着まで15〜60分が目安です。" },
  { title: "解決後はインロックの原因を取り除く", desc: "スマートキーの電池残量低下は閉じ込みの典型的な原因です。電池を交換し、降車時は鍵を必ず手に持つ習慣（ポケットや車内に置いたまま降りない）をつけましょう。" },
];

const faqs = [
  { q: "JAFを呼ぶといくらかかりますか？", a: "JAF会員は無料です（キー閉じ込みの解錠は会員サービスに含まれます）。非会員は有料で、例えば夜間・一般道でのドア開放作業は25,630円です（JAF公式の掲載料金・2026年7月4日確認）。年会費を考えると、非会員料金1回分で数年分の会費に相当します。" },
  { q: "自動車保険のロードサービスは使えますか？", a: "多くの任意保険にロードサービスが自動付帯しており、キー閉じ込みの解錠は無料範囲に含まれることが多いです。保険会社の緊急デスクに連絡して確認しましょう。一般的にロードサービスの利用だけでは等級（保険料）に影響しませんが、契約により異なるため利用時に確認すると安心です。" },
  { q: "スマートキーなのになぜインロックが起きるのですか？", a: "スマートキーの電池残量低下で車が鍵の存在を検知できなくなるケースや、鍵を車内に置いたままドアハンドルのロック操作をしてしまうケースなどが典型です。電池は1〜2年を目安に交換し、降車時は鍵を身につける習慣が確実な予防策です。" },
  { q: "子どもやペットが車内に閉じ込められました。どうすれば？", a: "夏場の車内は短時間で命に関わる温度になります。ためらわず119番（緊急時は窓を割る判断を含めて消防が対応）に通報してください。JAFも子どもの閉じ込みは優先対応としています。業者の到着を待つより命を優先してください。" },
  { q: "鍵屋に頼むといくらかかりますか？", a: "国産車の一般的な鍵開けで8,000〜15,000円が相場の目安です。輸入車や特殊な防盗機構つきの車は15,000〜30,000円以上かかる場合があります。出張費・深夜割増の有無を含めた総額を作業前に必ず確認しましょう。" },
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
    { "@type": "ListItem", position: 2, name: "車のインロック解決法" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "車のインロック（鍵の閉じ込み）解決法【2026年版】",
  description: "車に鍵を閉じ込めた時の対処手順。JAF・自動車保険・鍵屋の使い分けと料金比較、NG行動を解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
};

export default function CarInlockPage() {
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
            <span className="text-text-secondary">車のインロック解決法</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            車のインロック（鍵の閉じ込み）解決法【2026年版】
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年7月4日</p>

          {/* 緊急警告 */}
          <div className="bg-red-50 border border-red-300 rounded-2xl p-5 mb-6">
            <p className="font-bold text-red-700 mb-1">⚠️ 子ども・ペットが車内にいる場合</p>
            <p className="text-sm text-red-700 leading-relaxed">
              夏場の車内は短時間で命に関わる温度になります。業者の到着を待たず、<strong>ためらわず119番に通報してください</strong>。窓を割る判断を含めて消防が対応します。
            </p>
          </div>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：インロックしたらこの順で動く</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              車に鍵を閉じ込めたら、<strong>①スペアキーの確保を検討 → ②JAF会員ならJAF（無料） → ③自動車保険のロードサービスを確認（無料付帯が多い） → ④鍵屋に依頼</strong>の順が最安・確実です。JAF非会員は有料（例：夜間・一般道のドア開放<strong>25,630円</strong>・JAF公式）、鍵屋の相場は国産車で<strong>8,000〜15,000円</strong>。針金でこじ開けるのは車両側の故障につながるためNGです。
            </p>
          </div>

          {/* 手順 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">インロック時の対処手順（5ステップ）</h2>
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

          {/* 依頼先比較 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">依頼先ごとの料金・特徴の比較</h2>
          <div className="overflow-x-auto mb-4 rounded-xl border border-black/10">
            <table className="w-full text-sm min-w-[520px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-bold">依頼先</th>
                  <th className="px-4 py-3 text-left font-bold">料金の目安</th>
                  <th className="px-4 py-3 text-left font-bold">ポイント</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["JAF（会員）", "無料", "24時間対応。キー閉じ込みは会員サービスに含まれる"],
                  ["JAF（非会員）", "有料（例：夜間・一般道のドア開放 25,630円）", "混雑時は会員優先。その場で入会しても当日は非会員料金の場合あり"],
                  ["自動車保険のロードサービス", "無料のことが多い", "任意保険に自動付帯が主流。等級への影響は一般的になし（要確認）"],
                  ["鍵の専門業者", "8,000〜15,000円（国産車）", "輸入車・特殊キーは15,000〜30,000円以上。総額見積もりを事前確認"],
                ].map((r, i) => (
                  <tr key={i} className={i % 2 ? "bg-surface-alt" : "bg-white"}>
                    <td className="px-4 py-3 font-medium text-text-primary whitespace-nowrap">{r[0]}</td>
                    <td className="px-4 py-3 text-primary font-bold">{r[1]}</td>
                    <td className="px-4 py-3 text-text-secondary">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-10">
            ※JAF料金はJAF公式サイト掲載の料金（2026年7月4日確認）。鍵業者の料金は一般的な相場の目安で、車種・時間帯により変動します。
          </p>

          {/* NG行動 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">やってはいけないNG行動</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { title: "針金・定規でこじ開ける", desc: "最近の車は盗難防止機構や内部配線が複雑で、素人のこじ開けはドア内部の故障・傷につながります。修理費のほうが高くつきます。" },
              { title: "窓ガラスを割る（緊急時以外）", desc: "ガラス交換は数万円規模。人命に関わる緊急時（子ども・ペットの閉じ込み）以外は割らず、JAF・保険・業者を呼びましょう。" },
              { title: "「◯◯円〜」の格安広告で即決", desc: "現地で高額請求になる例があります。会社名・総額見積もり・キャンセル可否を電話で確認してから依頼しましょう。" },
              { title: "エンジンをかけたまま放置して施錠", desc: "半ドアやアイドリング中の施錠はインロックの定番原因です。降車時は必ず鍵を手に持ってからドアを閉める習慣を。" },
            ].map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">NG: {n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 業者選び・内部リンク */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">車の鍵開けに対応できる業者を比較する</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              JAF非会員・保険が使えない場合は、車の鍵開け対応を明記した24時間対応の鍵業者へ。車種と鍵のタイプを伝えて総額見積もりで比較しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を詳しく見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">車のインロックに関するよくある質問</h2>
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
