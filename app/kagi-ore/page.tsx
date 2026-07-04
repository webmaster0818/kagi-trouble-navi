import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "鍵が折れた！鍵穴に詰まった折れ鍵の抜き方と料金相場【2026年版】 | 鍵トラブルナビ",
  description:
    "鍵が鍵穴の中で折れた時の対処法を手順で解説。瞬間接着剤で継ぐのは絶対NG（鍵穴内で固着しシリンダー交換コース）。折れ鍵の抜き取りの料金相場は8,000〜15,000円、抜けずに交換となる場合は＋10,000〜40,000円。折れる原因と予防法も紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/kagi-ore/" },
};

const steps = [
  { title: "それ以上回さない・押し込まない", desc: "折れた瞬間に無理に回したり押し込んだりすると、折れた破片が鍵穴の奥に入り込み、抜き取りの難易度と費用が上がります。まず手を止めましょう。" },
  { title: "破片が飛び出ていればピンセット等で優しく抜く", desc: "鍵穴から破片の頭が数ミリ以上出ている場合は、ピンセットや先の細いラジオペンチでまっすぐ優しく引き抜ける場合があります。左右にこじる・強く挟むのは破片を奥に押し込む原因になるため禁物です。" },
  { title: "抜けなければ鍵屋に「折れ鍵の抜き取り」を依頼", desc: "破片が奥にある・掴めない場合は専用工具（エキストラクター）を持つ鍵の専門業者に依頼するのが確実です。依頼時は「鍵が中で折れた」「鍵の種類」「建物の種類」を伝えると見積もりがスムーズです。" },
  { title: "抜けたらスペアキーで動作確認", desc: "破片を抜いた後は、スペアキーがスムーズに回るか確認します。引っかかりがある場合はシリンダー内部が傷んでいる可能性があるため、業者に点検してもらいましょう。" },
  { title: "同じ鍵を使い続けるかを判断する", desc: "一度折れた鍵の折れ残り側をそのまま使うのは危険です。刻みが残っていれば合鍵店で新しい鍵を作成できる場合があります。鍵自体が古く摩耗している場合は、シリンダーごと交換したほうが安全です。" },
];

const faqs = [
  { q: "折れた鍵の抜き取りはいくらかかりますか？", a: "折れ鍵の抜き取りの相場は8,000〜15,000円が目安です。破片が奥に入り込んでいて分解が必要な場合や、シリンダーが傷んで交換になる場合は＋10,000〜40,000円程度かかります。作業前に総額の見積もりを必ず確認しましょう。" },
  { q: "瞬間接着剤で折れた鍵をくっつけて抜くのはアリですか？", a: "絶対にやめてください。接着剤が鍵穴内部に流れ込むとピンが固着し、抜き取りでは済まずシリンダーごと交換（10,000〜40,000円）になる典型的な失敗例です。鍵屋の現場でも「接着剤で悪化した」ケースは定番のトラブルです。" },
  { q: "なぜ鍵は折れるのですか？", a: "主な原因は①長年の使用による金属疲労・摩耗、②鍵の曲がりを放置して使い続けた、③鍵穴の潤滑不足で重くなったところに無理な力をかけた、の3つです。回りが渋い・曲がっているといった前兆がある鍵は折れる前に合鍵を作っておきましょう。" },
  { q: "折れた鍵から合鍵は作れますか？", a: "刻み（ギザギザ）やディンプルの窪みが破片に残っていれば、2つの破片から合鍵を作成できる場合があります。純正キーの番号（キーナンバー）が分かる場合はメーカー取り寄せも可能です。まずは合鍵店か鍵業者に破片を持って相談してみてください。" },
  { q: "鍵穴に油を差してもいいですか？", a: "食用油やCRC等の一般的な潤滑油はNGです。内部でホコリを固めて動作不良の原因になります。潤滑には鍵穴専用のパウダースプレーを使うか、鉛筆の芯（黒鉛）を鍵に塗る方法が安全です。" },
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
    { "@type": "ListItem", position: 2, name: "鍵が折れた時の対処法" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "鍵が折れた！鍵穴に詰まった折れ鍵の抜き方と料金相場【2026年版】",
  description: "鍵が鍵穴の中で折れた時の対処手順、折れ鍵抜き取りの料金相場、NG行動と予防法を解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
};

export default function KagiOrePage() {
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
            <span className="text-text-secondary">鍵が折れた時の対処法</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            鍵が折れた！鍵穴に詰まった折れ鍵の抜き方と料金相場【2026年版】
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年7月4日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：折れたらこの順で動く</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              鍵が鍵穴の中で折れたら、<strong>①それ以上回さない → ②破片が飛び出ていればピンセットで優しく抜く → ③抜けなければ鍵屋に「折れ鍵の抜き取り」を依頼</strong>の順で対処します。抜き取りの相場は<strong>8,000〜15,000円</strong>、シリンダー交換になると<strong>＋10,000〜40,000円</strong>。<strong>瞬間接着剤で継いで抜く方法は固着して交換コースになるため絶対NG</strong>です。
            </p>
          </div>

          {/* 手順 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵が折れた時の対処手順（5ステップ）</h2>
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
              { title: "瞬間接着剤で破片を継ぐ", desc: "接着剤が鍵穴内で固まるとピンが固着し、シリンダーごと交換（10,000〜40,000円）になります。折れ鍵トラブルで最も多い悪化パターンです。" },
              { title: "針金・つまようじでほじる", desc: "破片を奥に押し込んだり、先端が中で折れて異物が増えたりします。内部部品を傷めると抜き取りでは済まなくなります。" },
              { title: "スペアキーを無理に差し込む", desc: "破片が残ったままスペアキーを差すと、スペアまで曲がる・破片がさらに奥へ入るなど二重のトラブルになります。" },
              { title: "折れかけの鍵を使い続ける", desc: "曲がり・ヒビのある鍵は次に回した時に折れます。前兆がある時点で合鍵作成・鍵交換を検討するのが結局一番安上がりです。" },
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
                  ["折れ鍵の抜き取り", "8,000〜15,000円"],
                  ["抜き取り＋シリンダー分解洗浄", "＋5,000〜10,000円程度"],
                  ["シリンダー交換になった場合", "＋10,000〜40,000円"],
                  ["出張費（かかる場合）", "3,000円前後"],
                  ["深夜・早朝の割増", "数千円程度"],
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
            ※一般的な相場の目安です。鍵の種類・破片の位置・時間帯により変動します。詳しくは<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>をご覧ください。
          </p>

          {/* 業者選び・内部リンク */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">折れ鍵に対応できる鍵業者を比較する</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              折れ鍵の抜き取りは専用工具と経験が必要な作業です。「折れ鍵抜き対応」を明記している24時間対応の業者を中心に、作業前の総額見積もりで比較しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を詳しく見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵折れに関するよくある質問</h2>
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
