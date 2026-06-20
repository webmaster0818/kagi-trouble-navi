import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/agents/kagizaru/";
const UPDATED = "2026年6月20日";

export const metadata: Metadata = {
  title: { absolute: "鍵猿（かぎざる）の口コミ・評判は？料金・対応スピード・保証を徹底調査【2026年最新】｜鍵トラブルナビ" },
  description: "鍵猿（SLS株式会社）の口コミ・評判を徹底調査。鍵開け8,800円〜の料金、最短15分到着、全国対応・1年保証、自社スタッフ施工、利用者の良い評判・気になる評判まで編集部が中立的にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "鍵猿（かぎざる）の口コミ・評判は？料金・対応スピード・保証を徹底調査【2026年最新】",
    description: "鍵猿の料金・対応スピード・保証・利用者の口コミを中立的に調査。利用前のメリットと注意点を解説します。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const toc = [
    ["about", "鍵猿とはどんなサービスか"],
    ["service", "対応している鍵トラブルの種類"],
    ["price", "鍵猿の料金体系と相場"],
    ["reviews", "利用者のリアルな口コミ・評判"],
    ["merit", "メリットと注意点"],
    ["recommend", "鍵猿がおすすめな人"],
    ["compare", "他社と比較するときのチェックポイント"],
    ["faq", "よくある質問"],
    ["sources", "この記事の出典・参照元"],
    ["summary", "まとめ"]
  ];

const goodReviews = [
    {"title": "電話一本ですぐ駆けつけてくれた", "body": "最短15分・電話一本ですぐ駆けつけたなど、対応スピードへの高評価が多く見られます。", "meta": "対応スピードへの評価傾向"},
    {"title": "作業が丁寧で安心できた", "body": "作業が丁寧で鍵穴に傷が残らない、身なりがきちんとしていて信頼できたという声が見られます。", "meta": "対応品質への評価傾向"},
    {"title": "全国対応で旅行先でも頼れた", "body": "全国対応のため旅行先などでも頼れたという、対応エリアの広さを評価する声があります。", "meta": "対応エリアへの評価傾向"}
  ];

const badReviews = [
    {"title": "費用が想定より高いと感じる声", "body": "費用は決して安くない、想定より高いと感じたという料金面の指摘があります。作業前に提示される合計金額を必ず確認しましょう。", "meta": "料金に関する注意傾向"},
    {"title": "スタッフ対応にばらつきがある", "body": "スタッフの対応や口調にばらつきがある、鍵交換後にしばらく回しにくかった等の個別の不満も見られます。", "meta": "対応品質に関する注意傾向"}
  ];

const faqs = [
    {"q": "鍵猿の料金はいくらからですか", "a": "玄関の鍵開けは8,800円（税込）から、鍵交換は11,000円（税込）＋部品代からが目安です。基本料・見積料・出張料はすべて0円で、作業前に明確な合計金額を提示し追加請求しないとうたっています。"},
    {"q": "どのくらいの時間で来てくれますか", "a": "最短60秒で出動、最短15分で現場到着とうたっています。拠点からの距離や状況により到着時間は変動します。"},
    {"q": "保証はありますか", "a": "1年間の無料工事保証・無償商品保証があるとされています。作業後のトラブルに備えられるのは安心材料です。"},
    {"q": "受付時間と対応エリアは", "a": "電話受付は8:00〜23:00で、施工は深夜・早朝も対応、365日年中無休とされています。対応エリアは北海道から沖縄まで全国です。"}
  ];

const sources = [["鍵猿 公式（SLS株式会社）", "https://sls.co.jp/kagizaru/"], ["鍵猿 口コミ・評判（みん評）", "https://minhyo.jp/kagizaru"], ["鍵猿 口コミ・料金（セーフリー）", "https://safely.co.jp/ky/vendor/slskagizaru/"], ["鍵猿 利用者の口コミ（専門家の相談室）", "https://www.sodanshitsu.co.jp/kagizaru/"]];

export default function KagizaruPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "鍵猿（かぎざる）の口コミ・評判は？料金・対応スピード・保証を徹底調査【2026年最新】",
    description: "鍵猿の料金・対応スピード・保証・利用者の口コミを中立的に調査。利用前のメリットと注意点を解説します。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-06-20T00:00:00+09:00",
    dateModified: "2026-06-20T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "鍵屋レビュー", item: `${SITE}/agents/` },
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
            <li><Link href="/agents/" className="hover:underline">鍵屋レビュー</Link></li>
            <li>/</li>
            <li className="text-slate-700">鍵猿の口コミ・評判</li>
          </ol>
        </nav>

        <header className="relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 text-white mt-4">
          <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
            <p className="text-sm tracking-widest text-amber-300 mb-3">鍵トラブル業者レビュー</p>
            <h1 className="font-bold text-2xl md:text-4xl leading-relaxed mb-4">鍵猿の口コミ・評判は？<br className="hidden md:block" />料金・対応スピードを徹底調査</h1>
            <p className="text-slate-200 leading-relaxed max-w-2xl">SLS株式会社が運営する「鍵猿」。最短15分到着・1年保証・自社スタッフ施工をうたう鍵トラブルサービスの料金や対応、利用者の評価を編集部が中立的に調査しました。</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="badge badge-lg bg-white/15 border-0 text-white">鍵開け 8,800円〜</span>
              <span className="badge badge-lg bg-white/15 border-0 text-white">最短15分到着</span>
              <span className="badge badge-lg bg-white/15 border-0 text-white">全国対応</span>
              <span className="badge badge-lg bg-white/15 border-0 text-white">1年保証</span>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
              <Image src="/images/kv-top.jpg" alt="鍵猿の鍵トラブル解決サービス" width={1024} height={1024} className="w-full h-56 md:h-72 object-cover" priority />
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
          <p className="text-sm text-slate-500 mb-8">最終更新日：{UPDATED}　／　鍵トラブルナビ編集部</p>

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
            <p className="leading-loose mb-4 text-slate-700">基本料・見積料・出張料はすべて0円で、作業前に明確な合計金額を提示し追加請求しない明朗会計を掲げています。1年間の無料工事保証・無償商品保証があり、年間10万件以上の問い合わせ実績をうたっています。</p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <Image src="/images/kagizaru-features.png" alt="鍵猿の特徴" width={1200} height={500} className="w-full h-auto" />
            </div>
          </section>

          <section id="service" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">対応している鍵トラブルの種類</h2>
            <p className="leading-loose mb-5 text-slate-700">玄関まわりの鍵だけでなく、金庫や乗り物の鍵まで幅広く対応しています。どこに相談すべきか分からない鍵トラブルも、まとめて相談しやすいのが利点です。</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["鍵開け", "鍵交換", "鍵修理", "鍵作成", "金庫の鍵", "車・バイクの鍵"].map((s) => (
                <div key={s} className="rounded-xl border border-slate-200 p-4 text-center font-medium text-slate-700">{s}</div>
              ))}
            </div>
          </section>

          <section id="price" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">鍵猿の料金体系と相場</h2>
            <p className="leading-loose mb-5 text-slate-700">料金は出張費・作業費・部材費を含めた総額を事前に提示する形です。作業内容や鍵の種類によって変わるため、最終的な金額は無料見積もりで確認しましょう。</p>
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
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">利用者のリアルな口コミ・評判</h2>
            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6 mb-6">
              <p className="text-slate-700 text-sm leading-relaxed">Googleのクチコミや口コミ・比較サイト（みん評、セーフリー、専門家の相談室等）を編集部が調査したところ、最短15分の対応スピードと作業の丁寧さを評価する声が目立ちました。一方で、費用が想定より高いと感じたという声や、スタッフ対応にばらつきがあるという指摘も見られました。</p>
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
                  <li>最短15分到着をうたうスピード対応</li>
                  <li>基本料・見積料・出張料すべて0円の明朗会計</li>
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
                  <li>電話受付は8:00〜23:00（施工は深夜early朝も対応）</li>
                  <li>作業前に提示される合計金額の確認が必要</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="recommend" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">鍵猿がおすすめな人</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span>最短スピードで駆けつけてほしい人</li>
              <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span>作業保証のある業者に依頼したい人</li>
              <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span>自社スタッフ施工の安心感を重視する人</li>
              <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span>クレジットカードで支払いたい人</li>
            </ul>
          </section>

          <section id="compare" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">他社と比較するときのチェックポイント</h2>
            <p className="leading-loose mb-4 text-slate-700">鍵業者は料金の安さだけでなく、対応スピードや見積もりの明確さを含めて比較することが大切です。鍵猿を他社と比べる際は、次の点を確認すると判断しやすくなります。</p>
            <ol className="space-y-3 text-slate-700">
              <li className="flex gap-3"><span className="font-bold text-amber-600">1.</span>見積もりに出張費・部材費まで含まれているか（総額で比較）</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">2.</span>到着までの目安時間と対応エリア</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">3.</span>対応してほしい鍵の種類に対応しているか</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">4.</span>作業後の保証やアフター対応の有無</li>
            </ol>
            <p className="leading-loose mt-4 text-slate-700">料金や対応は地域・状況で変わるため、鍵猿を含めて<Link href="/" className="text-amber-700 underline">複数の鍵業者を比較</Link>し、見積もりを取ったうえで選ぶのがおすすめです。</p>
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
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">この記事の出典・参照元</h2>
            <p className="leading-loose mb-4 text-slate-700">本記事の事実情報・口コミの傾向は、以下の公式サイトおよび口コミ・比較サイトを参照し、編集部が確認・要約しています（確認日：{UPDATED}）。</p>
            <ul className="space-y-2 text-sm">
              <li><a href="https://sls.co.jp/kagizaru/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline break-all">鍵猿 公式（SLS株式会社）</a></li>
              <li><a href="https://minhyo.jp/kagizaru" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline break-all">鍵猿 口コミ・評判（みん評）</a></li>
              <li><a href="https://safely.co.jp/ky/vendor/slskagizaru/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline break-all">鍵猿 口コミ・料金（セーフリー）</a></li>
              <li><a href="https://www.sodanshitsu.co.jp/kagizaru/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline break-all">鍵猿 利用者の口コミ（専門家の相談室）</a></li>
            </ul>
          </section>

          <section id="summary" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">まとめ</h2>
            <p className="leading-loose mb-4 text-slate-700">鍵猿は、SLS株式会社が運営する鍵トラブル解決サービスです。最短15分到着のスピード、基本料・見積料・出張料0円の明朗会計、1年間の保証、自社スタッフ施工が評価されています。</p>
            <p className="leading-loose mb-4 text-slate-700">一方で、費用が想定より高いと感じる声や、スタッフ対応のばらつきには注意が必要です。作業前に提示される合計金額を確認し、複数社の見積もりを比較すると安心です。まずは無料見積もりから検討してみてください。</p>
            <div className="rounded-2xl bg-slate-800 text-white p-6 text-center mt-6">
              <p className="font-bold text-lg mb-2">鍵のトラブルでお困りの方へ</p>
              <p className="text-slate-300 text-sm mb-4">地域・状況に合った鍵業者を比較して、無料見積もりを取りましょう。</p>
              <Link href="/" className="btn bg-amber-500 hover:bg-amber-600 border-0 text-white">鍵業者を比較して探す</Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
