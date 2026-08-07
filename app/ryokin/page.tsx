import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "鍵開け・鍵交換の料金相場【2026年7月】｜出張費・深夜割増・安く抑えるコツ | 鍵トラブルナビ",
  description:
    "鍵開け・鍵交換の料金相場を作業別にまとめて解説。一般錠の鍵開けは8,000〜15,000円、ディンプルキーは15,000〜30,000円が目安。出張費・深夜割増などの追加料金、ぼったくりを避けるコツ、業者の選び方まで2026年7月時点の情報で紹介します。",
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

const breakdownRows = [
  { item: "基本料金", desc: "「鍵開け◯◯円〜」など広告に表示されることが多い部分。作業の受付・出動に対する最低料金で、これだけで済むケースはむしろ少数です。" },
  { item: "作業費", desc: "鍵の種類・難易度に応じた実作業の費用。ディンプルキーや特殊錠は技術料が上がり、総額を左右する最大の変動要素です。" },
  { item: "出張費", desc: "現場までの出動にかかる費用。無料の業者もあれば別途かかる業者もあり、依頼前に有無を確認すべき項目です。" },
  { item: "部品代（交換時）", desc: "鍵交換や破壊解錠後の交換で発生するシリンダー等の実費。防犯性の高い製品ほど高くなります。" },
  { item: "時間帯割増（深夜・早朝）", desc: "深夜・早朝・休日の対応に加算される割増料金。業者ごとに設定が異なります。" },
];

const estimateChecks = [
  "提示された金額は「総額」か、それとも基本料金など一部だけか",
  "見積もり後に断った場合、キャンセル料や出張費がかかるか",
  "深夜・早朝・休日の時間帯割増が含まれているか",
  "部品代が発生する場合、部品の型番と定価を確認できるか",
  "作業後に追加請求が発生しないことを事前に明言してもらえるか",
];

const freeChecks = [
  { title: "賃貸住宅 → まず管理会社・大家に連絡", desc: "物件によっては管理会社が鍵業者を手配してくれたり、マスターキーで対応できる場合があります。入居時の書類や契約書に緊急連絡先が記載されていることが多いので、自分で業者を呼ぶ前に必ず確認しましょう。" },
  { title: "火災保険・共済の付帯サービスを確認", desc: "加入中の火災保険や共済に、鍵開けなどの「住まいの緊急駆けつけサービス」が付帯していることがあります。保険証券や契約者向けページでサービスの有無を確認すると、無料または低額で対応できる場合があります。" },
  { title: "車 → JAF会員・自動車保険のロードサービス", desc: "車のインロックは、JAF会員なら会員優待の対象になるほか、自動車保険に付帯するロードサービスで対応できる場合があります。鍵業者に依頼する前に、会員証や保険証券で対象かどうかを確認しましょう。" },
  { title: "家族・実家などのスペアキー", desc: "家族や実家、同居人がスペアキーを持っていないかを思い出してみましょう。取りに行ける距離なら、業者を呼ぶより早く安く解決できることがあります。" },
];

const troubleLinks = [
  { href: "/shimedashi/", label: "締め出されたときの対処法" },
  { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処法" },
  { href: "/kagi-ore/", label: "鍵が折れたときの対処法" },
  { href: "/kagi-mawaranai/", label: "鍵が回らないときの対処法" },
  { href: "/car-inlock/", label: "車のインロック解錠" },
  { href: "/kinko-kaijo/", label: "金庫の鍵開け" },
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
  headline: "鍵開け・鍵交換の料金相場【2026年7月】",
  description: "鍵開け・鍵交換の作業別料金相場と追加料金、安く抑えるコツを解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-06-30",
  dateModified: "2026-07-07",
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
            鍵開け・鍵交換の料金相場【2026年7月】
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年7月7日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：鍵開け・鍵交換の料金相場</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              鍵開けの料金相場は、一般的な鍵で<strong>8,000〜15,000円</strong>、防犯性の高いディンプルキーで<strong>15,000〜30,000円</strong>が目安です。鍵交換はシリンダー交換で<strong>10,000〜25,000円</strong>（ディンプルキーは20,000〜40,000円）。これに出張費（3,000円前後）や深夜・早朝の割増が加わる場合があります。鍵の種類や状況で金額が変わるため、<strong>作業前に必ず総額の見積もりを確認</strong>するのが、ぼったくりを避ける最大のコツです。
            </p>
          </div>

          {/* 一次確認版への導線 */}
          <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-5 mb-8">
            <p className="text-sm text-text-secondary leading-relaxed">
              下記は一般的な<strong>相場の目安</strong>です。<strong>掲載業者の公式サイトに実際に表示されている料金</strong>を当サイトが確認・集計した業者別の一覧は、
              <a href="/ryokin-index/" className="text-primary font-bold underline">鍵トラブル料金インデックス（業者×サービス別・確認日つき）</a>
              にまとめています。
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

          {/* 料金の内訳構造 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">料金の内訳構造｜「電話口の最低料金」と「現場の総額」はなぜ違うのか</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            鍵業者の請求は、多くの場合ひとつの金額ではなく、次のような複数の項目を積み上げた構造になっています。
          </p>
          <div className="bg-surface-alt rounded-xl p-5 mb-4">
            <p className="text-sm font-bold text-text-primary text-center">
              総額 ＝ 基本料金 ＋ 作業費 ＋ 出張費 ＋ 部品代（交換時） ＋ 時間帯割増（深夜・早朝）
            </p>
          </div>
          <div className="space-y-3 mb-4">
            {breakdownRows.map((r, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-4">
                <h3 className="font-bold text-text-primary text-sm mb-1">{r.item}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            電話口で案内される「◯◯円〜」という金額は、この内訳のうち<strong>基本料金（＝最低料金）だけ</strong>を指していることが少なくありません。現場で鍵の種類や状況を確認した結果、作業費や部品代が加わって総額が大きく変わる——これが「電話で聞いた金額」と「実際の請求額」が乖離する典型的な理由です。だからこそ、電話の段階で総額を断定してもらうのは難しくても、<strong>現場での作業開始前に「この内訳を全部含めた総額」を確認する</strong>ことが重要になります。
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

          {/* 見積もりチェックリスト */}
          <h2 className="text-xl font-bold text-text-primary mb-4">見積もりで必ず確認する5項目（チェックリスト）</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            作業を始めてもらう前に、次の5つを口頭または書面で確認しておくと、料金トラブルの多くを未然に防げます。
          </p>
          <ul className="space-y-3 mb-10">
            {estimateChecks.map((t, i) => (
              <li key={i} className="flex gap-3 bg-surface-alt rounded-xl p-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">✓</span>
                <span className="text-sm text-text-secondary leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>

          {/* 無料・低額の可能性 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">業者を呼ぶ前に｜無料・低額で済む可能性を先に潰す</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            鍵業者への依頼は「他の手段で解決できない」ことを確認してからでも遅くありません。次の順で確認すると、そもそも費用がかからずに済むケースがあります。
          </p>
          <div className="space-y-3 mb-10">
            {freeChecks.map((f, i) => (
              <div key={i} className="flex gap-3 bg-white rounded-xl border border-black/10 p-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-text-primary text-sm mb-1">{f.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
                </div>
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

          {/* 悪質業者対策の補足・相談窓口 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">悪質業者を避けるための補足と、困ったときの相談窓口</h2>
          <div className="bg-white rounded-xl border border-black/10 p-5 mb-4">
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              上記3つのコツに加えて、次の点も覚えておくと安心です。広告の「◯◯円〜」という表示は最低料金にすぎないため、<strong>その金額だけで業者を選ばない</strong>こと。そして作業前には、口頭だけでなく<strong>書面やスマートフォンの画面など、後から確認できる形で総額を提示してもらう</strong>ことを求めましょう。誠実な業者であれば、内訳を含めた金額提示を嫌がることはありません。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              また、<strong>その場での現金一括払いを強く急かす</strong>、考える時間を与えずに作業を始めようとする、といった対応をする業者には注意が必要です。金額や進め方に納得できない場合は、作業前であれば断る選択肢があります。
            </p>
          </div>
          <div className="bg-surface-alt rounded-xl p-5 mb-10">
            <h3 className="font-bold text-text-primary text-sm mb-2">高額請求などのトラブルに遭ってしまったら</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              請求内容に納得できない、支払ってしまったが不当だと感じる——そんなときは、国民生活センター・お住まいの地域の消費生活センターに相談できます。<strong>消費者ホットライン「188（いやや）」</strong>に電話すると、最寄りの消費生活相談窓口を案内してもらえます。一人で抱え込まず、公的な窓口を頼りましょう。
            </p>
          </div>

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

          {/* トラブル別ページへの導線 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">トラブル別の対処法・料金を詳しく見る</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            状況ごとの具体的な対処手順と費用の考え方は、以下のトラブル別ページで詳しく解説しています。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {troubleLinks.map((l, i) => (
              <a key={i} href={l.href} className="flex items-center justify-between bg-white rounded-xl border border-black/10 px-4 py-3 text-sm font-medium text-text-primary hover:border-primary/40 hover:text-primary transition-colors">
                <span>{l.label}</span>
                <span className="text-primary">→</span>
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mb-10">
            <a href="/agents/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">鍵トラブル業者を比較する</a>
            <a href="/ryokin-index/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">業者別の確認済み料金一覧を見る</a>
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

    </div>
  );
}
