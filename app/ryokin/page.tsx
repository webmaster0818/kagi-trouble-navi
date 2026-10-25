import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "鍵開け・鍵交換の料金相場｜出張料・深夜割増・費用を抑える方法 | 鍵トラブルナビ",
  description:
    "鍵開け・鍵交換の料金の内訳（基本料金・作業費・出張料・部品代・深夜割増）と料金を左右する要因、高額請求を避けるための確認事項、業者の選び方を解説します。各社の公式料金は確認日つきの一覧に掲載しています。",
  alternates: { canonical: "https://kagi-trouble-navi.com/ryokin/" },
};


const factors = [
  { title: "鍵の種類", desc: "一般的なディスクシリンダーは安価ですが、ディンプルキーや電子錠・特殊錠は防犯性が高く解錠に技術と時間がかかるため料金が上がります。" },
  { title: "作業時間帯（深夜・早朝割増）", desc: "多くの業者で深夜・早朝・休日は割増料金がかかります。急ぎでない場合は、日中に依頼するほうが費用を抑えられます。" },
  { title: "出張料・見積もり", desc: "基本料金とは別に出張料がかかる場合があります。出張・見積もり無料を明記している業者を選ぶことをおすすめします。" },
  { title: "作業の難易度・破壊の有無", desc: "鍵を壊さず開けられるか、シリンダー交換が必要かで費用が変わります。破壊解錠後に交換となると部品代が追加されます。" },
];

const faqs = [
  { q: "鍵開けの料金相場はいくらですか？", a: "金額は鍵の種類・作業内容・時間帯・地域によって変わり、出張料や深夜割増が加わる場合もあるため、業者の見積もりで確認してください。各社が公式サイトに表示している料金は、鍵トラブル料金インデックス（確認日を記載）にまとめています。" },
  { q: "深夜や早朝に頼むと高くなりますか？", a: "多くの業者で深夜・早朝・休日は割増料金が設定されています。緊急でない場合は、日中に依頼するほうが費用を抑えられます。割増の有無と金額は依頼前に必ず確認してください。" },
  { q: "鍵開けで高額請求を避けるにはどうすればよいですか？", a: "①作業前に必ず総額の見積もりを書面・口頭で確認する、②「出張・見積もり無料」「追加料金なし」を明記する業者を選ぶ、③相場より極端に安い広告（『290円〜』等）は現地で高額請求される例があるため注意する、の3点が有効です。" },
  { q: "賃貸住宅の鍵開け・鍵交換は自分で依頼してもよいですか？", a: "鍵開け（締め出し）は入居者の判断で依頼できますが、鍵交換は原状回復や費用負担の関係で、事前に管理会社・大家へ連絡するのが原則です。交換費用の負担者は契約内容によって異なります。" },
  { q: "料金以外で業者を選ぶ際のポイントはありますか？", a: "対応エリアと到着スピード、24時間対応か、見積もりの明確さ、実績・口コミ、追加料金の有無を比較することをおすすめします。当サイトの業者比較もご参照ください。" },
];

const breakdownRows = [
  { item: "基本料金", desc: "「鍵開け◯◯円〜」など広告に表示されることが多い部分。作業の受付・出動に対する最低料金であり、この金額のみで済むケースは多くありません。" },
  { item: "作業費", desc: "鍵の種類・難易度に応じた実作業の費用。ディンプルキーや特殊錠は技術料が上がり、総額を左右する最大の変動要素です。" },
  { item: "出張料", desc: "現場までの出動にかかる費用。無料の業者もあれば別途かかる業者もあり、依頼前に有無を確認すべき項目です。" },
  { item: "部品代（交換時）", desc: "鍵交換や破壊解錠後の交換で発生するシリンダー等の実費。防犯性の高い製品ほど高くなります。" },
  { item: "時間帯割増（深夜・早朝）", desc: "深夜・早朝・休日の対応に加算される割増料金。業者ごとに設定が異なります。" },
];

const estimateChecks = [
  "提示された金額は「総額」か、それとも基本料金など一部だけか",
  "見積もり後に断った場合、キャンセル料や出張料がかかるか",
  "深夜・早朝・休日の時間帯割増が含まれているか",
  "部品代が発生する場合、部品の型番と定価を確認できるか",
  "作業後に追加請求が発生しないことを事前に明言してもらえるか",
];

const freeChecks = [
  { title: "賃貸住宅 → まず管理会社・大家に連絡", desc: "物件によっては管理会社が鍵業者を手配してくれたり、マスターキーで対応できる場合があります。入居時の書類や契約書に緊急連絡先が記載されていることが多いので、自分で業者に依頼する前に必ずご確認ください。" },
  { title: "火災保険・共済の付帯サービスを確認", desc: "加入中の火災保険や共済に、鍵開けなどの「住まいの緊急駆けつけサービス」が付帯していることがあります。保険証券や契約者向けページでサービスの有無を確認すると、無料または低額で対応できる場合があります。" },
  { title: "車 → JAF会員・自動車保険のロードサービス", desc: "車のインロックは、JAF会員なら会員優待の対象になるほか、自動車保険に付帯するロードサービスで対応できる場合があります。鍵業者に依頼する前に、会員証や保険証券で対象かどうかをご確認ください。" },
  { title: "家族・実家などのスペアキー", desc: "家族や実家、同居人がスペアキーを持っていないかをご確認ください。取りに行ける距離であれば、業者に依頼するよりも早く、費用をかけずに解決できる場合があります。" },
];

const troubleLinks = [
  { href: "/shimedashi/", label: "締め出されたときの対処法" },
  { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処法" },
  { href: "/kagi-ore/", label: "鍵が折れたときの対処法" },
  { href: "/kagi-mawaranai/", label: "鍵が回らないときの対処法" },
  { href: "/car-inlock/", label: "車のインロック解錠" },
  { href: "/kinko-kaijo/", label: "金庫の鍵開け" },
  { href: "/kagiya-erabikata/", label: "鍵屋の選び方｜電話で確認する質問" },
  { href: "/kagiya-kougaku-seikyuu/", label: "鍵屋に高額請求されたときの対処" },
  { href: "/shinya-kagiake/", label: "深夜・早朝に鍵屋を呼ぶときの注意点" },
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
  headline: "鍵開け・鍵交換の料金相場",
  description: "鍵開け・鍵交換の料金の内訳と追加料金、費用を抑える方法を解説した記事です。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-06-30",
  dateModified: "2026-10-25",
};

export default function RyokinPage() {
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
            <span className="text-text-secondary">鍵開け・鍵交換の料金相場</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            鍵開け・鍵交換の料金相場
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年10月25日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">鍵開け・鍵交換の料金相場の要点</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              鍵開け・鍵交換の料金は、鍵の種類・作業内容・時間帯・地域によって変わり、出張料や深夜・早朝の割増が加わる場合もあります。金額は業者の見積もりで確認してください。鍵の種類や状況で金額が変わるため、<strong>作業前に必ず総額の見積もりを確認</strong>することが、高額請求を避けるうえで最も重要です。
            </p>
          </div>

          {/* 一次確認版への導線 */}
          <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-5 mb-8">
            <p className="text-sm text-text-secondary leading-relaxed">
              <strong>掲載業者の公式サイトに実際に表示されている料金</strong>を当サイトが確認・集計した業者別の一覧は、
              <a href="/ryokin-index/" className="text-primary font-bold underline">鍵トラブル料金インデックス（業者・サービス別、確認日を記載）</a>
              で掲載しています。
            </p>
          </div>


          {/* 料金の内訳構造 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">料金の内訳構造｜「電話口の最低料金」と「現場の総額」はなぜ違うのか</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            鍵業者の請求は、多くの場合ひとつの金額ではなく、次のような複数の項目を積み上げた構造になっています。
          </p>
          <div className="bg-surface-alt rounded-xl p-5 mb-4">
            <p className="text-sm font-bold text-text-primary text-center">
              総額 ＝ 基本料金 ＋ 作業費 ＋ 出張料 ＋ 部品代（交換時） ＋ 時間帯割増（深夜・早朝）
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
            電話口で案内される「◯◯円〜」という金額は、この内訳のうち<strong>基本料金（＝最低料金）だけ</strong>を指していることが少なくありません。現場で鍵の種類や状況を確認した結果、作業費や部品代が加わって総額が大きく変わることが、「電話で聞いた金額」と「実際の請求額」が異なる主な理由です。電話の段階で総額を確定することは難しいため、<strong>現場での作業開始前に、これらの内訳をすべて含めた総額を確認する</strong>ことが重要です。
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
          <h2 className="text-xl font-bold text-text-primary mb-4">見積もりで必ず確認する5つの項目</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            作業開始前に次の5つを口頭または書面で確認することで、料金トラブルの多くを未然に防ぐことができます。
          </p>
          <ul className="space-y-3 mb-10">
            {estimateChecks.map((t, i) => (
              <li key={i} className="flex gap-3 bg-surface-alt rounded-xl p-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="5 12 10 17 19 7" /></svg></span>
                <span className="text-sm text-text-secondary leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>

          {/* 無料・低額の可能性 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">業者に依頼する前に｜無料・低額で解決できる方法の確認</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            鍵業者への依頼は、ほかの手段で解決できないことを確認してからでも遅くありません。次の順で確認することで、費用がかからずに済む場合があります。
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
          <h2 className="text-xl font-bold text-text-primary mb-4">高額請求を避けるための3つの確認事項</h2>
          <ol className="space-y-3 mb-10">
            {[
              "作業前に必ず「総額」の見積もりを確認する。「基本料金のみ」の提示で作業を始めず、出張料・部品代・割増を含めた合計を確認する。",
              "「出張・見積もり無料」「追加料金なし」を明記している業者を選ぶ。見積もり後の追加請求トラブルを避けることができる。",
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
              上記3つの確認事項に加えて、次の点にもご注意ください。広告の「◯◯円〜」という表示は最低料金にすぎないため、<strong>その金額のみで業者を選ばない</strong>ことが重要です。また、作業前には口頭だけでなく、<strong>書面やスマートフォンの画面など、後から確認できる形で総額を提示してもらう</strong>ことをおすすめします。誠実な業者であれば、内訳を含めた金額の提示に応じるのが通常です。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              また、<strong>その場での現金一括払いを強く急かす</strong>、考える時間を与えずに作業を始めようとする、といった対応をする業者には注意が必要です。金額や進め方に納得できない場合は、作業前であれば依頼を断ることができます。
            </p>
          </div>
          <div className="bg-surface-alt rounded-xl p-5 mb-10">
            <h3 className="font-bold text-text-primary text-sm mb-2">高額請求などのトラブルに遭った場合</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              請求内容に納得できない場合や、支払った金額が不当だと感じる場合は、国民生活センター・お住まいの地域の消費生活センターに相談できます。<strong>消費者ホットライン「188（いやや）」</strong>に電話すると、最寄りの消費生活相談窓口を案内してもらえます。公的な窓口へのご相談をおすすめします。
            </p>
          </div>

          {/* 業者選び・内部リンク */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">料金と対応スピードで業者を比較する</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              料金は業者によって異なります。対応エリア・到着スピード・24時間対応・見積もりの明確さもあわせて比較することをおすすめします。主要な鍵トラブル業者の特徴・料金は以下で確認できます。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵業者を比較する →</a>
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
            <a href="/agents/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">鍵業者を比較する</a>
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
