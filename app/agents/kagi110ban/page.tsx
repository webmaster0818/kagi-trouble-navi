import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/agents/kagi110ban/";
const UPDATED = "2026年6月10日";

export const metadata: Metadata = {
  title: {
    absolute:
      "カギ110番の口コミ・評判は？料金・対応スピード・メリットを徹底調査【2026年最新】｜鍵トラブルナビ",
  },
  description:
    "カギ110番の口コミ・評判を徹底調査。8,800円からの明朗会計、全国47都道府県24時間365日対応、最短5分手配の対応スピード、加盟店ネットワークの強みと注意点、利用者のリアルな良い口コミ・悪い口コミまで編集部が中立的にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "カギ110番の口コミ・評判は？料金・対応スピード・メリットを徹底調査【2026年最新】",
    description:
      "カギ110番の料金・対応スピード・加盟店ネットワーク・利用者の口コミを中立的に調査。利用前に知っておきたいメリットと注意点を解説します。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const toc = [
  ["about", "カギ110番とはどんなサービスか"],
  ["service", "対応している鍵トラブルの種類"],
  ["price", "カギ110番の料金体系と相場"],
  ["reviews", "利用者のリアルな口コミ・評判"],
  ["merit", "メリットと注意点"],
  ["recommend", "カギ110番がおすすめな人"],
  ["compare", "他社と比較するときのチェックポイント"],
  ["faq", "よくある質問"],
  ["summary", "まとめ"],
];

const goodReviews = [
  { title: "深夜の締め出しに迅速対応してくれた", body: "夜中に玄関の鍵を締め出してしまい困っていましたが、電話してから短時間で業者が到着し、その場で解錠してもらえました。24時間対応は本当に助かります。", meta: "戸建て・玄関の鍵開け" },
  { title: "事前見積もりが明確で安心だった", body: "出張費や作業費を含めた金額を作業前に提示してくれたので、追加料金の不安なく依頼できました。料金が明朗な点は評価できます。", meta: "賃貸・鍵交換" },
  { title: "近くの加盟店がすぐ来てくれた", body: "全国に加盟店があるとのことで、自宅の近くから短時間で駆けつけてくれました。急いでいるときに頼れると感じました。", meta: "マンション・鍵修理" },
];

const badReviews = [
  { title: "加盟店によって対応に差を感じた", body: "サービス自体は問題なかったものの、対応する業者によって説明の丁寧さや技術に差が出ることがあるようです。事前に作業内容をよく確認した方が安心です。", meta: "戸建て・鍵交換" },
  { title: "繁忙期は到着まで時間がかかった", body: "依頼が混み合う時間帯だったためか、到着まで思ったより時間がかかりました。緊急時は到着目安を確認してから依頼するのがよいと感じました。", meta: "賃貸・鍵開け" },
];

const faqs = [
  { q: "カギ110番の料金はいくらからですか", a: "料金は8,800円(税込)からが目安です。出張費・作業費・部材費を含めた事前見積もりを提示してくれるため、見積もり後の追加料金が発生しにくい明朗会計が特徴です。作業内容や鍵の種類によって金額は変動します。" },
  { q: "見積もりや出張は無料ですか", a: "カギ110番は見積もりが無料です。金額に納得したうえで依頼できるため、まずは無料見積もりで費用を確認するのがおすすめです。" },
  { q: "どのくらいの時間で来てくれますか", a: "電話一本で最短5分での手配が可能とされています。全国47都道府県の加盟店ネットワークにより、近隣の業者が駆けつける仕組みです。ただし繁忙期や地域によっては到着まで時間がかかる場合があります。" },
  { q: "どんな鍵トラブルに対応していますか", a: "玄関などの鍵開け・鍵交換・鍵修理に加え、金庫、車の鍵、バイクの鍵まで幅広く対応しています。対応可否が不明な場合は問い合わせ時に確認しましょう。" },
];

export default function Kagi110banPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "カギ110番の口コミ・評判は？料金・対応スピード・メリットを徹底調査",
    description: "カギ110番の料金・対応スピード・加盟店ネットワーク・利用者の口コミを中立的に調査した記事です。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-06-10T00:00:00+09:00",
    dateModified: "2026-06-10T00:00:00+09:00",
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
      { "@type": "ListItem", position: 3, name: "カギ110番の口コミ・評判", item: `${SITE}${PATH}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="bg-white text-slate-800">
        {/* パンくず */}
        <nav aria-label="パンくず" className="max-w-4xl mx-auto px-4 pt-4 text-xs text-slate-500">
          <ol className="flex flex-wrap gap-1">
            <li><Link href="/" className="hover:underline">鍵トラブルナビ</Link></li>
            <li>/</li>
            <li className="text-slate-700">カギ110番の口コミ・評判</li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 text-white mt-4">
          <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
            <p className="text-sm tracking-widest text-amber-300 mb-3">鍵トラブル業者レビュー</p>
            <h1 className="font-bold text-2xl md:text-4xl leading-relaxed mb-4">
              カギ110番の口コミ・評判は？
              <br className="hidden md:block" />
              料金・対応スピード・メリットを徹底調査
            </h1>
            <p className="text-slate-200 leading-relaxed max-w-2xl">
              全国47都道府県の加盟店ネットワークで、24時間365日・最短5分手配をうたうカギ110番。実際の料金や対応スピード、利用者の評価を編集部が中立的に調査しました。
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="badge badge-lg bg-white/15 border-0 text-white">料金 8,800円〜</span>
              <span className="badge badge-lg bg-white/15 border-0 text-white">24時間365日</span>
              <span className="badge badge-lg bg-white/15 border-0 text-white">最短5分手配</span>
              <span className="badge badge-lg bg-white/15 border-0 text-white">全国47都道府県</span>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
              <Image src="/images/kv-top.jpg" alt="カギ110番の鍵トラブル解決サービス" width={1024} height={1024} className="w-full h-56 md:h-72 object-cover" priority />
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
          <p className="text-sm text-slate-500 mb-8">最終更新日：{UPDATED}　／　鍵トラブルナビ編集部</p>

          {/* 目次 */}
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

          {/* about */}
          <section id="about" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">カギ110番とはどんなサービスか</h2>
            <p className="leading-loose mb-4 text-slate-700">
              カギ110番は、生活110番が運営する全国対応の鍵トラブル解決サービスです。自社で職人を抱えるのではなく、全国47都道府県の加盟店ネットワークを通じて、依頼者の近隣にいる鍵業者を手配する仕組みになっています。これにより、地域を問わず鍵開け・鍵交換などの依頼に対応できるのが特徴です。
            </p>
            <p className="leading-loose text-slate-700">
              24時間365日受付で、電話一本から最短5分での手配が可能とされており、深夜や早朝、年末年始などの緊急時にも相談しやすい体制です。見積もりは無料で、出張費・作業費・部材費を含めた金額を事前に提示する明朗会計を掲げています。
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <Image src="/images/kagi110ban-features.png" alt="カギ110番の3つの特徴（全国対応・24時間365日・最短5分手配）" width={1200} height={500} className="w-full h-auto" />
            </div>
          </section>

          {/* service */}
          <section id="service" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">対応している鍵トラブルの種類</h2>
            <p className="leading-loose mb-5 text-slate-700">玄関まわりの鍵だけでなく、金庫や乗り物の鍵まで幅広く対応しています。どこに相談すべきか分からない鍵トラブルも、まとめて相談しやすいのが利点です。</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["鍵開け", "鍵交換", "鍵修理", "金庫の鍵", "車の鍵", "バイクの鍵"].map((s) => (
                <div key={s} className="rounded-xl border border-slate-200 p-4 text-center font-medium text-slate-700">{s}</div>
              ))}
            </div>
          </section>

          {/* price */}
          <section id="price" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">カギ110番の料金体系と相場</h2>
            <p className="leading-loose mb-5 text-slate-700">料金は出張費・作業費・部材費を含めた総額を事前に提示する形です。作業内容や鍵の種類によって変わるため、最終的な金額は無料見積もりで確認しましょう。</p>
            <div className="overflow-x-auto">
              <table className="table w-full border border-slate-200">
                <thead><tr className="bg-slate-100 text-slate-700"><th>項目</th><th>料金の目安</th><th>備考</th></tr></thead>
                <tbody>
                  <tr className="border-b border-slate-200"><td className="font-medium">基本料金</td><td className="font-bold text-amber-700">8,800円〜（税込）</td><td className="text-sm text-slate-600">最小構成の目安</td></tr>
                  <tr className="border-b border-slate-200"><td className="font-medium">鍵開け・鍵交換など</td><td className="font-bold text-amber-700">作業内容により変動</td><td className="text-sm text-slate-600">出張費・作業費・部材費込みで提示</td></tr>
                  <tr><td className="font-medium">会計方式</td><td className="font-bold text-amber-700">事前見積もり・明朗会計</td><td className="text-sm text-slate-600">見積もり後の追加料金が発生しにくい</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-500 mt-3">※ 料金は変動する場合があります。正確な金額は無料の見積もりでご確認ください。</p>
          </section>

          {/* reviews */}
          <section id="reviews" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">利用者のリアルな口コミ・評判</h2>
            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6 mb-6">
              <p className="text-slate-700 text-sm leading-relaxed">各種口コミサイトやGoogleのクチコミを編集部が調査したところ、対応の速さと料金の明確さを評価する声が目立ちました。一方で、加盟店によって対応に差が出る点や、繁忙期の到着時間については慎重な声も見られました。</p>
            </div>
            <h3 className="font-bold text-lg mb-3">良い口コミ</h3>
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
            <p className="text-xs text-slate-500 mt-4">※ 口コミは各種口コミサイト・Googleのクチコミ等で見られる利用者の声をもとに、編集部が傾向を要約したものです。感じ方には個人差があります。</p>
          </section>

          {/* merit */}
          <section id="merit" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">メリットと注意点</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-6">
                <h3 className="font-bold text-emerald-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>全国47都道府県の加盟店ネットワークで対応可能</li>
                  <li>24時間365日受付で緊急時も相談しやすい</li>
                  <li>電話一本で最短5分の手配</li>
                  <li>出張費・作業費込みの事前見積もりで明朗会計</li>
                  <li>鍵開けから金庫・車の鍵まで幅広く対応</li>
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-rose-200 bg-rose-50 p-6">
                <h3 className="font-bold text-rose-800 mb-3">注意点</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>加盟店によって技術・対応に差が出ることがある</li>
                  <li>繁忙期は到着まで時間がかかる場合がある</li>
                  <li>加盟店が少ない地域は出張費が高くなることがある</li>
                  <li>作業前に内容と金額をよく確認しておくと安心</li>
                </ul>
              </div>
            </div>
          </section>

          {/* recommend */}
          <section id="recommend" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">カギ110番がおすすめな人</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span>深夜や早朝など、緊急で鍵トラブルを解決したい人</li>
              <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span>地方を含め全国どこでも対応してほしい人</li>
              <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span>作業前に料金を明確にしてから依頼したい人</li>
              <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span>鍵開けだけでなく金庫や車の鍵もまとめて相談したい人</li>
            </ul>
          </section>

          {/* compare */}
          <section id="compare" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">他社と比較するときのチェックポイント</h2>
            <p className="leading-loose mb-4 text-slate-700">鍵業者は料金の安さだけでなく、対応スピードや見積もりの明確さを含めて比較することが大切です。カギ110番を他社と比べる際は、次の点を確認すると判断しやすくなります。</p>
            <ol className="space-y-3 text-slate-700">
              <li className="flex gap-3"><span className="font-bold text-amber-600">1.</span>見積もりに出張費・部材費まで含まれているか（総額で比較）</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">2.</span>到着までの目安時間と対応エリア</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">3.</span>対応してほしい鍵の種類に対応しているか</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">4.</span>作業後の保証やアフター対応の有無</li>
            </ol>
            <p className="leading-loose mt-4 text-slate-700">料金や対応は地域・状況で変わるため、カギ110番を含めて<Link href="/" className="text-amber-700 underline">複数の鍵業者を比較</Link>し、見積もりを取ったうえで選ぶのがおすすめです。</p>
          </section>

          {/* faq */}
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

          {/* summary */}
          <section id="summary" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">まとめ</h2>
            <p className="leading-loose mb-4 text-slate-700">カギ110番は、全国47都道府県の加盟店ネットワークと24時間365日の受付体制により、緊急の鍵トラブルにも相談しやすいサービスです。最短5分手配のスピードと、出張費・作業費込みの明朗会計が評価されています。</p>
            <p className="leading-loose mb-6 text-slate-700">一方で、加盟店によって対応に差が出ることや、繁忙期・地域による到着時間の差には注意が必要です。依頼前には作業内容と総額を確認し、複数社の見積もりを比較すると安心です。まずは無料見積もりから検討してみてください。</p>
            <div className="rounded-2xl bg-slate-800 text-white p-6 text-center">
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
