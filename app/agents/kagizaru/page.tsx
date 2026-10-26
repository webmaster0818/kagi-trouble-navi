import Link from "next/link";
import AgentShot from "@/components/AgentShot";
import AgentCompareTable from "@/components/AgentCompareTable";
import VerificationNote from "@/components/VerificationNote";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/agents/kagizaru/";
const UPDATED = "2026年10月26日";

export const metadata: Metadata = {
  title: { absolute: "鍵屋の鍵猿（鍵ザル）の口コミ・評判は？運営会社・料金・受付時間・保証を調査｜鍵トラブルナビ" },
  description: "鍵屋の鍵猿（鍵ザル）はSLS株式会社（大阪本社）が運営する出張専門の鍵屋です。電話受付は365日8:00〜23:00、玄関の鍵開けは8,800円〜（税込）、出張料・見積もりは無料、施工後1年の工事保証と商品保証があります。秋田・福井・鳥取・島根・徳島・宮崎は対応エリア外です。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "鍵屋の鍵猿（鍵ザル）の口コミ・評判は？運営会社・料金・受付時間・保証を調査",
    description: "鍵屋の鍵猿の料金・到着時間・保証・利用者の口コミを中立的な立場で調査し、利用前に確認すべきメリットと注意点を解説します。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const toc = [
    ["about", "鍵猿とはどんなサービスか"],
    ["service", "対応している鍵トラブルの種類"],
    ["price", "鍵猿の料金体系と相場"],
    ["reviews", "利用者の口コミ・評判"],
    ["merit", "メリットと注意点"],
    ["recommend", "鍵猿をおすすめする方"],
    ["compare", "他社と比較するときのチェックポイント"],
    ["faq", "よくある質問"],
    ["sources", "本記事の出典・参照元"],
    ["summary", "まとめ"]
  ];

const goodReviews = [
    {"title": "電話一本ですぐに駆けつけてくれた", "body": "最短15分・電話一本ですぐに駆けつけたなど、対応スピードへの高い評価が多く見られます。", "meta": "対応スピードへの評価傾向"},
    {"title": "作業が丁寧で安心できた", "body": "作業が丁寧で鍵穴に傷が残らない、身なりが整っていて信頼できたという声が見られます。", "meta": "対応品質への評価傾向"},
    {"title": "全国対応で旅行先でも依頼できた", "body": "全国対応のため旅行先などでも依頼できたという、対応エリアの広さを評価する声があります。", "meta": "対応エリアへの評価傾向"}
  ];

const badReviews = [
    {"title": "費用が想定より高いと感じる声", "body": "費用は決して安くない、想定より高いと感じたという料金面の指摘があります。作業前に提示される合計金額を必ずご確認ください。", "meta": "料金に関する注意傾向"},
    {"title": "スタッフ対応にばらつきがある", "body": "スタッフの対応や口調にばらつきがある、鍵交換後にしばらく回しにくかった等の個別の不満も見られます。", "meta": "対応品質に関する注意傾向"}
  ];

const faqs = [
    {"q": "鍵猿（鍵ザル）の運営会社はどこですか", "a": "SLS株式会社です。大阪本社・横浜営業所を中心に拠点を置いています。鍵猿は出張専門の鍵屋で、店舗での受付や鍵の持ち込みには対応していません（SLS株式会社・鍵屋の鍵猿 公式サイト 2026年10月26日確認）。"},
    {"q": "鍵猿の料金はいくらからですか", "a": "玄関の鍵開けは8,800円（税込）から、鍵交換は11,000円（税込）＋部品代からが目安です。基本料・見積料・出張料はすべて0円で、作業前に合計金額を提示し、追加請求を行わないことを掲げています。"},
    {"q": "どのくらいの時間で来てくれますか", "a": "最短60秒で出動、最短15分で現場到着を掲げています。拠点からの距離や状況により到着時間は変動します。"},
    {"q": "保証はありますか", "a": "1年間の無料工事保証・無償商品保証があるとされています。作業後のトラブルに備えられる点は、判断材料の一つです。"},
    {"q": "受付時間と対応エリアを教えてください", "a": "電話受付は8:00〜23:00で、施工は深夜・早朝も対応、365日年中無休とされています。対応エリアは北海道から沖縄まで全国ですが、秋田・福井・鳥取・島根・徳島・宮崎は対応エリア外です（公式の対応エリアページ 2026年10月17日確認）。"}
  ];

const sources = [["鍵猿 公式（SLS株式会社）", "https://sls.co.jp/kagizaru/"], ["鍵猿 口コミ・評判（みん評）", "https://minhyo.jp/kagizaru"], ["鍵猿 口コミ・料金（セーフリー）", "https://safely.co.jp/ky/vendor/slskagizaru/"], ["鍵猿 利用者の口コミ（専門家の相談室）", "https://www.sodanshitsu.co.jp/kagizaru/"]];

export default function KagizaruPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "鍵屋の鍵猿（鍵ザル）の口コミ・評判は？運営会社・料金・受付時間・保証を調査",
    description: "鍵屋の鍵猿の料金・到着時間・保証・利用者の口コミを中立的な立場で調査し、利用前に確認すべきメリットと注意点を解説します。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-06-20T00:00:00+09:00",
    dateModified: "2026-10-26T00:00:00+09:00",
    author: { "@type": "Organization", name: "鍵トラブルナビ編集部", url: SITE },
    publisher: { "@type": "Organization", name: "鍵トラブルナビ", url: SITE },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}${PATH}` },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "鍵トラブルナビ", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "鍵業者の口コミ・評判", item: `${SITE}/agents/` },
      { "@type": "ListItem", position: 3, name: "鍵猿の口コミ・評判", item: `${SITE}${PATH}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="bg-white text-slate-800">
        <nav aria-label="パンくず" className="max-w-4xl mx-auto px-4 pt-4 text-xs text-slate-500">
          <ol className="flex flex-wrap gap-1">
            <li><Link href="/" className="hover:underline">鍵トラブルナビ</Link></li>
            <li>/</li>
            <li><Link href="/agents/" className="hover:underline">鍵業者の口コミ・評判</Link></li>
            <li>/</li>
            <li className="text-slate-700">鍵猿の口コミ・評判</li>
          </ol>
        </nav>

        <header className="relative overflow-hidden border-y border-border bg-white text-foreground mt-4">
          <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
            <p className="text-sm font-bold tracking-widest text-primary mb-3">鍵業者の口コミ・評判</p>
            <h1 className="font-bold text-2xl md:text-4xl leading-relaxed mb-4 text-primary-dark">鍵屋の鍵猿（鍵ザル）の口コミ・評判は？<br className="hidden md:block" />運営会社・料金・受付時間・保証を調査</h1>
            <p className="text-text-secondary leading-relaxed max-w-2xl">「鍵屋の鍵猿」は、SLS株式会社が運営する鍵トラブル解決サービスです。検索では「鍵猿」「鍵ザル」「かぎざる」とも表記されますが、いずれも同じサービスです。最短15分到着・1年保証・自社スタッフ施工を掲げる同サービスの料金や対応、利用者の評価を、編集部が中立的な立場で調査しました。</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded border border-border bg-white px-3 py-1.5 text-sm font-bold text-foreground">鍵開け 8,800円〜</span>
              <span className="inline-flex items-center rounded border border-border bg-white px-3 py-1.5 text-sm font-bold text-foreground">最短15分到着</span>
              <span className="inline-flex items-center rounded border border-border bg-white px-3 py-1.5 text-sm font-bold text-foreground">全国対応</span>
              <span className="inline-flex items-center rounded border border-border bg-white px-3 py-1.5 text-sm font-bold text-foreground">1年保証</span>
            </div>
            <AgentShot slug="kagizaru" name="鍵猿" priority className="mt-8 md:max-w-[640px]" sizes="(min-width: 768px) 640px, 100vw" />
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
          <p className="text-sm text-slate-500 mb-8">最終更新日：{UPDATED}　／　鍵トラブルナビ編集部</p>

          <div className="mb-10 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="font-bold text-slate-800 mb-2">鍵猿（鍵ザル）の運営会社と利用前に確認できること</p>
            <p className="leading-loose text-slate-700 mb-3">鍵屋の鍵猿（鍵ザル）は、SLS株式会社が運営する出張専門の鍵屋です。SLS株式会社は大阪本社・横浜営業所を中心に拠点を置いています（<a href="https://sls.co.jp/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline">SLS株式会社 公式サイト</a>）。店舗での受付や鍵の持ち込みには対応しておらず、電話受付は365日・8:00〜23:00です。秋田・福井・鳥取・島根・徳島・宮崎の6県は対応エリア外とされています（<a href="https://sls.co.jp/kagizaru/area/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline">公式の対応エリアページ</a>）。</p>
            <p className="leading-loose text-slate-700 mb-3">公式サイトでは、出張料・見積もりは無料で、作業前にすべての費用を含む見積もり金額を提示し、同意を得てから施工するとしています。見積もりに納得できない場合のキャンセルは無料ですが、<strong>鍵開けなど急を要する出動では、スタッフ手配後のキャンセルにキャンセル料がかかる場合がある</strong>と記載されています。施工後は1年間の無料工事保証と無償商品保証が付きます（<a href="https://sls.co.jp/kagizaru/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline">鍵屋の鍵猿 公式サイト</a>）。いずれも2026年10月26日に確認しました。</p>
            <p className="leading-loose text-slate-700 text-sm">口コミ・評判の傾向は、下の「<a href="#reviews" className="text-amber-700 underline">利用者の口コミ・評判</a>」にまとめています（口コミサイトの調査時点は2026年7月です）。</p>
          </div>

          <nav aria-label="目次" className="mb-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="font-bold text-slate-800 mb-4">この記事の目次</p>
            <ol className="space-y-2 text-sm md:text-base">
              {toc.map(([id, label], i) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-slate-700 hover:text-amber-700 hover:underline">
                    <span className="text-amber-600 font-bold mr-2">{String(i + 1).padStart(2, "0")}</span>{label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <section id="about" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">鍵猿とはどんなサービスか</h2>
            <p className="leading-loose mb-4 text-slate-700">鍵猿（かぎざる）は、SLS株式会社（大阪本社）が運営する鍵トラブル解決サービスです。プライバシーマークを取得し、自社コールセンターと自社スタッフによる施工体制で、鍵開け・鍵交換・鍵修理・鍵作成に全国対応しています。</p>
            <p className="leading-loose mb-4 text-slate-700">基本料・見積料・出張料はすべて0円で、作業前に合計金額を提示し、追加請求を行わない料金体系を掲げています。1年間の無料工事保証・無償商品保証があります。公式サイトのトップページでは、問い合わせの件数として「年間10万件以上のお問合せ」と掲げています（作業・施工の件数ではなく、問い合わせの件数です。出典：<a href="https://sls.co.jp/kagizaru/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline">鍵屋の鍵猿 公式サイト</a>・2026年10月23日確認）。</p>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 mt-6">
              <p className="font-bold text-slate-800 mb-2">名前の表記について</p>
              <p className="leading-loose text-slate-700 text-sm">公式サイトでの正式な表記は「<strong>鍵屋の鍵猿</strong>」です。検索では「鍵猿」「鍵ザル」「かぎざる」「猿鍵」などと表記されることがありますが、いずれも同じサービスを指します。旧ドメインの kagizaru.com は公式サイト（sls.co.jp/kagizaru/）へ転送されます（2026年9月30日確認）。運営会社を調べる場合は、「SLS株式会社」でご確認ください。</p>
              <p className="leading-loose text-slate-700 text-sm mt-3">なお、kagi-rescue.com というサイト（2016年時点の屋号は「キーレスキューサービス」）は2023年12月末で閉鎖され、鍵のトラブル駆けつけは鍵屋の鍵猿で引き続き対応すると告知されています。これは現在も営業している「<Link href="/agents/kagi-rescue/" className="text-amber-700 underline">鍵のレスキュー（鍵の110番救急車／kagi110qq.co.jp）</Link>」とは別のサービスです（2026年10月12日確認）。名前の似た鍵業者については<Link href="/agents/nitamei-kagiya/" className="text-amber-700 underline">名前が似た鍵屋の見分け方</Link>にまとめています。</p>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <Image src="/images/kagizaru-features.png" alt="鍵猿の特徴" width={1200} height={500} className="w-full h-auto" />
            </div>
          </section>

          <section id="service" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">対応している鍵トラブルの種類</h2>
            <p className="leading-loose mb-5 text-slate-700">玄関まわりの鍵だけでなく、金庫や乗り物の鍵まで幅広く対応しています。相談先の判断が難しい鍵トラブルも、まとめて相談できる点が利点です。</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["鍵開け", "鍵交換", "鍵修理", "鍵作成", "金庫の鍵", "車・バイクの鍵"].map((s) => (
                <div key={s} className="rounded-xl border border-slate-200 p-4 text-center font-medium text-slate-700">{s}</div>
              ))}
            </div>
          </section>

          <section id="price" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">鍵猿の料金体系と相場</h2>
            <p className="leading-loose mb-5 text-slate-700">料金は、出張料・作業費・部材費を含めた総額を事前に提示する方式です。作業内容や鍵の種類によって変わるため、最終的な金額は無料見積もりでご確認ください。</p>
            <div className="overflow-x-auto">
              <table className="table w-full border border-slate-200">
                <thead><tr className="bg-slate-100 text-slate-700"><th>項目</th><th>料金の目安</th><th>備考</th></tr></thead>
                <tbody>
                  <tr className="border-b border-slate-200"><td className="font-medium">鍵開け</td><td className="font-bold text-amber-700">8,800円〜（税込）</td><td className="text-sm text-slate-600">玄関の鍵開けの目安</td></tr>
                  <tr className="border-b border-slate-200"><td className="font-medium">鍵交換</td><td className="font-bold text-amber-700">11,000円〜（税込）＋部品代</td><td className="text-sm text-slate-600">鍵の種類・作業内容で変動</td></tr>
                  <tr className="border-b border-slate-200"><td className="font-medium">会計方式</td><td className="font-bold text-amber-700">基本料・見積料・出張料 0円</td><td className="text-sm text-slate-600">作業前に合計金額を提示・追加請求なし</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-500 mt-3">※ 料金は変動する場合があります。正確な金額は無料の見積もりでご確認ください。</p>
          </section>

          <section id="reviews" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">利用者の口コミ・評判</h2>
            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6 mb-6">
              <p className="text-slate-700 text-sm leading-relaxed">口コミ・比較サイト（みん評、専門家の相談室等）の公開口コミを編集部が調査しました（2026年7月時点）。みん評には約52件の口コミが掲載されています。<strong>好意的な傾向</strong>は「到着・対応が早い（最短15分・深夜対応）で緊急時に安心」「スタッフの対応が丁寧」「鍵を壊さず開けてくれる技術力」、<strong>否定的な傾向</strong>は「料金が高い（多くは事前に見積もりを取っていないケース）」「サイト表示料金と実額の差（夜間出張料等の加算）」「拠点・担当者による対応差」です。</p>
              <p className="text-slate-500 text-xs leading-relaxed mt-3">※ 出典：みん評・専門家の相談室ほか公開口コミ、調査時点2026年7月。みん評に表示される「2.9」は当該カテゴリの平均値であり鍵猿単体の平均★ではありません。否定的な声の多くは、事前に見積もりを取らずに依頼し、現場で夜間出張料等が加算されて想定を超えたケースです。作業前に総額の見積もりを確認することで、このような食い違いを避けることができます。</p>
            </div>
            <h3 className="font-bold text-lg mb-3">良い口コミの傾向</h3>
            <div className="space-y-4 mb-8">
              {goodReviews.map((r, i) => (
                <div key={i} className="rounded-xl border border-slate-200 p-5">
                  <p className="font-bold mb-1">{r.title}</p>
                  <p className="text-sm leading-relaxed mb-2 text-slate-700">{r.body}</p>
                  <p className="text-xs text-slate-400">{r.meta}</p>
                </div>
              ))}
            </div>
            <h3 className="font-bold text-lg mb-3">気になる口コミ・注意点</h3>
            <div className="space-y-4">
              {badReviews.map((r, i) => (
                <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold mb-1">{r.title}</p>
                  <p className="text-sm leading-relaxed mb-2 text-slate-700">{r.body}</p>
                  <p className="text-xs text-slate-400">{r.meta}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4">※ 口コミは各種口コミサイト・Googleのクチコミ等で見られる利用者の声をもとに、編集部が傾向を要約したものです（出典は記事末尾の参照元を参照）。感じ方には個人差があります。</p>
          </section>

          <section id="merit" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">メリットと注意点</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-6">
                <h3 className="font-bold text-emerald-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>最短15分到着を掲げている</li>
                  <li>基本料・見積料・出張料がすべて0円</li>
                  <li>1年間の無料工事保証・無償商品保証</li>
                  <li>自社コールセンター・自社スタッフによる施工</li>
                  <li>クレジットカード対応（VISA/Master/AMEX/Diners）</li>
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-rose-200 bg-rose-50 p-6">
                <h3 className="font-bold text-rose-800 mb-3">注意点</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>費用が想定より高いと感じる声がある</li>
                  <li>スタッフ対応にばらつきがあるという指摘がある</li>
                  <li>電話受付は8:00〜23:00（施工は深夜・早朝も対応）</li>
                  <li>作業前に提示される合計金額の確認が必要</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="recommend" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">鍵猿をおすすめする方</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span>できるだけ早い駆けつけを希望する方</li>
              <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span>作業保証のある業者に依頼したい方</li>
              <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span>自社スタッフによる施工を重視する方</li>
              <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span>クレジットカードで支払いたい方</li>
            </ul>
          </section>

          <section id="compare" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">他社と比較するときのチェックポイント</h2>
            <p className="leading-loose mb-4 text-slate-700">鍵業者は、料金の安さだけでなく、対応スピードや見積もりの明確さを含めて比較することが重要です。鍵猿を他社と比較する際は、次の点をご確認ください。</p>
            <ol className="space-y-3 text-slate-700">
              <li className="flex gap-3"><span className="font-bold text-amber-600">1.</span>見積もりに出張料・部材費まで含まれているか（総額で比較）</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">2.</span>到着までの目安時間と対応エリア</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">3.</span>依頼したい鍵の種類に対応しているか</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">4.</span>作業後の保証やアフター対応の有無</li>
            </ol>
            <p className="leading-loose mt-4 text-slate-700">料金や対応は地域・状況で変わるため、鍵猿を含めて<Link href="/" className="text-amber-700 underline">複数の鍵業者を比較</Link>し、見積もりを取ったうえで選ぶことをおすすめします。</p>
          </section>

          <section id="faq" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">よくある質問</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div key={i} className="collapse collapse-arrow border border-slate-200 rounded-xl bg-white">
                  <input type="checkbox" defaultChecked={i === 0} />
                  <div className="collapse-title font-bold">{f.q}</div>
                  <div className="collapse-content"><p className="text-sm leading-relaxed text-slate-700">{f.a}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section id="sources" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">本記事の出典・参照元</h2>
            <p className="leading-loose mb-4 text-slate-700">本記事の事実情報・口コミの傾向は、以下の公式サイトおよび口コミ・比較サイトを参照し、編集部が確認・要約しています（確認日：{UPDATED}）。</p>
            <ul className="space-y-2 text-sm">
              <li><a href="https://sls.co.jp/kagizaru/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline break-all">鍵猿 公式（SLS株式会社）</a></li>
              <li><a href="https://minhyo.jp/kagizaru" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline break-all">鍵猿 口コミ・評判（みん評）</a></li>
              <li><a href="https://safely.co.jp/ky/vendor/slskagizaru/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline break-all">鍵猿 口コミ・料金（セーフリー）</a></li>
              <li><a href="https://www.sodanshitsu.co.jp/kagizaru/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline break-all">鍵猿 利用者の口コミ（専門家の相談室）</a></li>
            </ul>
          </section>

          <AgentCompareTable current="kagizaru" />
          <VerificationNote officialUrl="https://sls.co.jp/kagizaru/" officialLabel="鍵屋の鍵猿 公式サイト（SLS株式会社）" />

          <section id="summary" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">まとめ</h2>
            <p className="leading-loose mb-4 text-slate-700">鍵猿は、SLS株式会社が運営する鍵トラブル解決サービスです。最短15分到着、基本料・見積料・出張料0円の料金体系、1年間の保証、自社スタッフによる施工が評価されています。</p>
            <p className="leading-loose mb-4 text-slate-700">一方で、費用が想定より高いと感じる声や、スタッフ対応のばらつきには注意が必要です。作業前に提示される合計金額を確認し、複数社の見積もりを比較することをおすすめします。</p>
            <div className="rounded-2xl bg-slate-800 text-white p-6 text-center mt-6">
              <p className="font-bold text-lg mb-2">鍵のトラブルでお困りの方へ</p>
              <p className="text-slate-300 text-sm mb-4">地域・状況に合った鍵業者を比較し、無料見積もりをご活用ください。</p>
              <Link href="/" className="btn bg-amber-500 hover:bg-amber-600 border-0 text-white">鍵業者を比較して探す</Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
