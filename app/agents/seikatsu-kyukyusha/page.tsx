import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/agents/seikatsu-kyukyusha/";
const UPDATED = "2026年7月7日";

export const metadata: Metadata = {
  title: { absolute: "鍵の生活救急車の口コミ・評判は？料金・対応スピード・実績を徹底調査【2026年7月】｜鍵トラブルナビ" },
  description: "鍵の生活救急車（運営：株式会社生活救急車）の口コミ・評判を徹底調査。鍵開け8,800円〜の料金、最短15分の駆けつけ、全国2,270拠点・施工240万件以上の実績、利用者の良い評判・気になる評判まで編集部が中立的にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "鍵の生活救急車の口コミ・評判は？料金・対応スピード・実績を徹底調査【2026年7月】",
    description: "鍵の生活救急車の料金・対応スピード・実績・利用者の口コミを中立的に調査。利用前のメリットと注意点を解説します。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const toc = [
    ["about", "鍵の生活救急車とはどんなサービスか"],
    ["service", "対応している鍵トラブルの種類"],
    ["price", "鍵の生活救急車の料金体系と相場"],
    ["reviews", "利用者のリアルな口コミ・評判"],
    ["merit", "メリットと注意点"],
    ["recommend", "鍵の生活救急車がおすすめな人"],
    ["compare", "他社と比較するときのチェックポイント"],
    ["faq", "よくある質問"],
    ["sources", "この記事の出典・参照元"],
    ["summary", "まとめ"]
  ];

const goodReviews = [
    {"title": "駆けつけが速く助かった", "body": "急ぎのトラブルで「すぐ来てくれて助かった」という、対応スピードへの好評が複数見られます。", "meta": "対応スピードへの評価傾向"},
    {"title": "見積もり通りで追加料金がなかった", "body": "事前見積もりどおりで追加料金がなく、明朗会計だったという評価傾向があります。", "meta": "料金の明朗さへの評価傾向"},
    {"title": "スタッフの対応・説明が丁寧だった", "body": "作業の説明が分かりやすく、対応が丁寧で作業も早かったという声が見られます。", "meta": "対応品質への評価傾向"}
  ];

const badReviews = [
    {"title": "料金が割高に感じることがある", "body": "「思っていたより高額だった」「部材費がやや高く感じた」など、料金が割高に感じるという声が一定数あります。作業前に総額を確認しましょう。", "meta": "料金に関する注意傾向"},
    {"title": "支払い方法に制限がある場合がある", "body": "クレジットカード払いがパートナー店・エリアによっては利用できない場合があるなど、支払い方法に制限があるという指摘があります。", "meta": "支払いに関する注意傾向"}
  ];

const faqs = [
    {"q": "鍵の生活救急車の料金はいくらからですか", "a": "鍵開けは8,800円（税込）からが目安です。鍵の種類や作業内容で変動し、鍵交換は11,000円＋部品代〜などとなります。出張・見積もり・キャンセルは無料で、作業前に料金を説明し同意のうえで作業します。"},
    {"q": "どのくらいの時間で来てくれますか", "a": "最短15分での駆けつけをうたっています。ただし拠点からの距離や繁忙状況により到着時間は変動するため、依頼時に到着目安を確認するのがおすすめです。"},
    {"q": "対応エリアは全国ですか", "a": "全国対応で、拠点数は2,270店とされています。地域を問わず鍵トラブルに対応できる体制です。"},
    {"q": "支払いにクレジットカードは使えますか", "a": "現金のほかクレジットカード（VISA/Master/JCB等）に対応するとされていますが、対応店舗・エリアによって利用可否が異なる場合があるため、事前に確認しましょう。"}
  ];

const sources = [["鍵の生活救急車 公式（料金）", "https://kagi-seikatsukyukyusya.com/price/"], ["国税庁法人番号公表サイト（株式会社生活救急車）", "https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=8180001153391"], ["EPARKくらしのレスキュー（料金・実績）", "https://rescue.epark.jp/detail/950"], ["みん評（利用者の口コミ）", "https://minhyo.jp/jbr-kagi"]];

export default function SeikatsuKyukyushaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "鍵の生活救急車の口コミ・評判は？料金・対応スピード・実績を徹底調査【2026年7月】",
    description: "鍵の生活救急車の料金・対応スピード・実績・利用者の口コミを中立的に調査。利用前のメリットと注意点を解説します。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-06-20T00:00:00+09:00",
    dateModified: "2026-07-07T00:00:00+09:00",
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
      { "@type": "ListItem", position: 3, name: "鍵の生活救急車の口コミ・評判", item: `${SITE}${PATH}` },
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
            <li className="text-slate-700">鍵の生活救急車の口コミ・評判</li>
          </ol>
        </nav>

        <header className="relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 text-white mt-4">
          <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
            <p className="text-sm tracking-widest text-amber-300 mb-3">鍵トラブル業者レビュー</p>
            <h1 className="font-bold text-2xl md:text-4xl leading-relaxed mb-4">鍵の生活救急車の口コミ・評判は？<br className="hidden md:block" />料金・対応スピードを徹底調査</h1>
            <p className="text-slate-200 leading-relaxed max-w-2xl">全国2,270拠点の実績をうたう「鍵の生活救急車」（運営：株式会社生活救急車）。最短15分の駆けつけをうたう鍵トラブルサービスの料金・対応・評価を編集部が中立的に調査しました。</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="badge badge-lg bg-white/15 border-0 text-white">鍵開け 8,800円〜</span>
              <span className="badge badge-lg bg-white/15 border-0 text-white">最短15分駆けつけ</span>
              <span className="badge badge-lg bg-white/15 border-0 text-white">全国2,270拠点</span>
              <span className="badge badge-lg bg-white/15 border-0 text-white">施工240万件以上</span>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
              <Image src="/images/kv-top.jpg" alt="鍵の生活救急車の鍵トラブル解決サービス" width={1024} height={1024} className="w-full h-56 md:h-72 object-cover" priority />
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
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">鍵の生活救急車とはどんなサービスか</h2>
            <p className="leading-loose mb-4 text-slate-700">鍵の生活救急車は、株式会社生活救急車（本社：名古屋市、法人番号8180001153391）が運営する鍵トラブル解決サービスです。もともとはジャパンベストレスキューシステム（JBR）のブランドでしたが、2022年12月に事業がJBRから現運営会社へ承継されています（国税庁法人番号公表サイトの変更履歴で確認・2026年7月4日時点）。鍵開け・鍵交換・鍵作成・鍵修理に加え、金庫や車・バイクの鍵まで全国の拠点で対応しています。</p>
            <p className="leading-loose mb-4 text-slate-700">出張費・見積もり・キャンセルはすべて無料で、全国統一の料金表をもとに作業前に料金を説明し、同意を得てから作業する明朗会計を掲げています。施工対応数240万件以上、全国2,270拠点という規模が、緊急時の駆けつけ体制を支えています。</p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <Image src="/images/seikatsu-kyukyusha-features.png" alt="鍵の生活救急車の特徴" width={1200} height={500} className="w-full h-auto" />
            </div>
          </section>

          <section id="service" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">対応している鍵トラブルの種類</h2>
            <p className="leading-loose mb-5 text-slate-700">玄関まわりの鍵だけでなく、金庫や乗り物の鍵まで幅広く対応しています。どこに相談すべきか分からない鍵トラブルも、まとめて相談しやすいのが利点です。</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["鍵開け", "鍵交換", "鍵作成", "鍵修理", "金庫の鍵", "車・バイクの鍵"].map((s) => (
                <div key={s} className="rounded-xl border border-slate-200 p-4 text-center font-medium text-slate-700">{s}</div>
              ))}
            </div>
          </section>

          <section id="price" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">鍵の生活救急車の料金体系と相場</h2>
            <p className="leading-loose mb-5 text-slate-700">料金は出張費・作業費・部材費を含めた総額を事前に提示する形です。作業内容や鍵の種類によって変わるため、最終的な金額は無料見積もりで確認しましょう。</p>
            <div className="overflow-x-auto">
              <table className="table w-full border border-slate-200">
                <thead><tr className="bg-slate-100 text-slate-700"><th>項目</th><th>料金の目安</th><th>備考</th></tr></thead>
                <tbody>
                  <tr className="border-b border-slate-200"><td className="font-medium">鍵開け</td><td className="font-bold text-amber-700">8,800円〜（税込）</td><td className="text-sm text-slate-600">住宅・刻みキーの目安</td></tr>
                  <tr className="border-b border-slate-200"><td className="font-medium">鍵交換／ディンプルキー解錠</td><td className="font-bold text-amber-700">11,000円＋部品代〜／33,000円〜</td><td className="text-sm text-slate-600">鍵の種類・作業内容で変動</td></tr>
                  <tr className="border-b border-slate-200"><td className="font-medium">会計方式</td><td className="font-bold text-amber-700">出張・見積もり・キャンセル無料</td><td className="text-sm text-slate-600">作業前に説明・同意のうえ作業</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-500 mt-3">※ 料金は変動する場合があります。正確な金額は無料の見積もりでご確認ください。</p>
          </section>

          <section id="reviews" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">利用者のリアルな口コミ・評判</h2>
            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6 mb-6">
              <p className="text-slate-700 text-sm leading-relaxed">Googleのクチコミや口コミ・比較サイト（みん評等）の公開口コミを編集部が調査しました（2026年7月時点）。みん評の「JBRカギの生活救急車」ページには約40件の口コミが掲載されています。<strong>好意的な傾向</strong>は「緊急時の迅速・安心な対応」「出張見積り・キャンセルが無料」「作業が丁寧」、<strong>否定的な傾向</strong>は「HP表記（例：部品代＋作業代1万円）と実請求（例：約6万円）の乖離」「同等の鍵が通販より割高との指摘」「電話見積り時の説明と実対応のギャップ」です。</p>
              <p className="text-slate-500 text-xs leading-relaxed mt-3">※ 出典：みん評ほか公開口コミ、調査時点2026年7月。<strong>重要な注意：</strong>「生活救急車」事業は2022年11月にジャパンベストレスキュー（JBR）から<strong>別法人「株式会社生活救急車」へ事業承継され、現在はJBRと資本関係のない別会社</strong>です。みん評の該当ページには承継前（JBR運営時代）の口コミが含まれる可能性があるため、現運営会社の評価とJBR時代の評価は分けて捉える必要があります。</p>
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
                  <li>最短15分の駆けつけをうたうスピード対応</li>
                  <li>全国2,270拠点・施工240万件以上の実績</li>
                  <li>全国2,270拠点の対応ネットワーク</li>
                  <li>出張・見積もり・キャンセル無料の明朗会計</li>
                  <li>鍵から金庫・車の鍵まで幅広く対応</li>
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-rose-200 bg-rose-50 p-6">
                <h3 className="font-bold text-rose-800 mb-3">注意点</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>料金が割高に感じるという声が一定数ある</li>
                  <li>支払い方法が店舗・エリアで制限される場合がある</li>
                  <li>作業前に部材費を含む総額の確認が必要</li>
                  <li>受付時間の表記に媒体差があり要確認</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="recommend" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">鍵の生活救急車がおすすめな人</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span>緊急でとにかく早く駆けつけてほしい人</li>
              <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span>大手の実績と安心感を重視する人</li>
              <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span>作業前に料金を説明してから依頼したい人</li>
              <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span>鍵以外の生活トラブルも相談したい人</li>
            </ul>
          </section>

          <section id="compare" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">他社と比較するときのチェックポイント</h2>
            <p className="leading-loose mb-4 text-slate-700">鍵業者は料金の安さだけでなく、対応スピードや見積もりの明確さを含めて比較することが大切です。鍵の生活救急車を他社と比べる際は、次の点を確認すると判断しやすくなります。</p>
            <ol className="space-y-3 text-slate-700">
              <li className="flex gap-3"><span className="font-bold text-amber-600">1.</span>見積もりに出張費・部材費まで含まれているか（総額で比較）</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">2.</span>到着までの目安時間と対応エリア</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">3.</span>対応してほしい鍵の種類に対応しているか</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">4.</span>作業後の保証やアフター対応の有無</li>
            </ol>
            <p className="leading-loose mt-4 text-slate-700">料金や対応は地域・状況で変わるため、鍵の生活救急車を含めて<Link href="/" className="text-amber-700 underline">複数の鍵業者を比較</Link>し、見積もりを取ったうえで選ぶのがおすすめです。</p>
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
              <li><a href="https://kagi-seikatsukyukyusya.com/price/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline break-all">鍵の生活救急車 公式（料金）</a></li>
              <li><a href="https://kagi-seikatsukyukyusya.com/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline break-all">カギの生活救急車 公式サイト</a></li>
              <li><a href="https://rescue.epark.jp/detail/950" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline break-all">EPARKくらしのレスキュー（料金・実績）</a></li>
              <li><a href="https://minhyo.jp/jbr-kagi" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline break-all">みん評（利用者の口コミ）</a></li>
            </ul>
          </section>

          <section id="summary" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">まとめ</h2>
            <p className="leading-loose mb-4 text-slate-700">鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブル解決サービスです（2022年12月にJBRから事業承継）。最短15分の駆けつけ、全国2,270拠点の実績、出張・見積もり・キャンセル無料の明朗会計が評価されています。</p>
            <p className="leading-loose mb-4 text-slate-700">一方で、料金が割高に感じるという声や、支払い方法の制限には注意が必要です。作業前に部材費を含む総額を確認し、複数社の見積もりを比較すると安心です。まずは無料見積もりから検討してみてください。</p>
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
