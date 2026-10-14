import Link from "next/link";
import AgentShot from "@/components/AgentShot";
import AgentCompareTable from "@/components/AgentCompareTable";
import VerificationNote from "@/components/VerificationNote";
import type { Metadata } from "next";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/agents/kagi110ban/";
const UPDATED = "2026年10月14日";

export const metadata: Metadata = {
  title: {
    absolute:
      "カギ110番（鍵110番）の口コミ・評判は？鍵開け11,000円〜・公式集計2,239件と悪い評判の理由【2026年10月】｜鍵トラブルナビ",
  },
  description:
    "カギ110番の口コミ・評判を出典つきで整理。公式料金表の鍵開け11,000円〜（税込・6,600円〜は鍵修理）、公式集計（総合4.6・費用3.9・2,239件）とみん評・セーフリーの評価、加盟店415社の仕組み、消費者庁が注意喚起した「カギの110番」との違いまでまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "カギ110番（鍵110番）の口コミ・評判は？鍵開け11,000円〜・公式集計2,239件と悪い評判の理由【2026年10月】",
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
  ["gyosei", "「鍵の110番は悪質？」消費者庁の注意喚起との関係"],
  ["merit", "メリットと注意点"],
  ["recommend", "カギ110番がおすすめな人"],
  ["compare", "他社と比較するときのチェックポイント"],
  ["faq", "よくある質問"],
  ["summary", "まとめ"],
];

const ratings = [
  { site: "カギ110番 公式（自社アンケート）", value: "総合4.6／費用3.9・対応品質4.7・スピード4.6・コールセンター4.6", count: "2,239件（2025年1月1日〜9月20日）", url: "https://www.kagi110ban.jp/kagi110-reviews/", note: "運営会社の自社調査。第三者の検証ではない" },
  { site: "みん評", value: "リンク先で確認", count: "51件表示（検索結果）", url: "https://minhyo.jp/kagi110-sharing", note: "2026年10月14日はページ本文を取得できず、平均点は未確認" },
  { site: "セーフリー", value: "3.3", count: "6件", url: "https://safely.co.jp/ky/vendor/sharing-tech/", note: "2026年7月確認" },
];

const officialDemerits = ["想像以上に金額が高くなることがある", "現地スタッフによって施工品質がまちまち", "事前の説明が不十分なときがある"];

const faqs = [
  { q: "カギ110番の料金はいくらからですか", a: "公式料金表では鍵開け11,000円(税込)〜です(2026年10月14日確認)。公式トップの「6,600円〜」は鍵修理を含む「ご自宅に関する鍵のトラブル」全体の最低額で、鍵修理6,600円〜・鍵交換(部材費込)14,300円〜です。ただし公式にも「対応エリア・加盟店により記載価格や条件では対応できない場合がある」と明記されており、実際の金額は現地見積もりで確定します。相談・見積もりは無料ですが、交通費やお客様都合のキャンセル料は別途発生する場合がある旨も公式に記載されているため、依頼時に確認しましょう。" },
  { q: "見積もりや出張は無料ですか", a: "相談・見積もりは無料です。ただし公式料金表には「交通費、お客様都合でのキャンセル料は別途発生する場合があります」「対応エリア・加盟店・現場状況により、事前に確認したうえで調査・見積りに費用をいただく場合がございます」と注記があります。依頼時に、交通費とキャンセル料の有無を確認してください。" },
  { q: "どのくらいの時間で来てくれますか", a: "24時間365日の受付で、全国415社の加盟店（2026年10月確認）から近くの業者を手配する仕組みです。到着時間は加盟店と地域で変わるため、電話の際に到着の目安を確認しましょう。" },
  { q: "カギ110番は悪質ですか？消費者庁の注意喚起の対象ですか", a: "2022年2月に消費者庁が注意喚起した「カギの110番」は、株式会社110番の名義で開設されたサイトで、シェアリングテクノロジー株式会社が運営する「カギ110番」とは別の事業者です。シェアリングテクノロジーに対する行政処分は、当編集部が消費者庁サイト等で確認した範囲（2026年10月14日）では見当たりませんでした。" },
  { q: "どんな鍵トラブルに対応していますか", a: "玄関などの鍵開け・鍵交換・鍵修理に加え、金庫、車の鍵、バイクの鍵まで幅広く対応しています。対応可否が不明な場合は問い合わせ時に確認しましょう。" },
];

export default function Kagi110banPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "カギ110番の口コミ・評判は？料金・対応スピード・メリットを徹底調査",
    description: "カギ110番の公式料金表・公式集計と第三者サイトの評価・加盟店の仕組み・消費者庁の注意喚起との関係を出典つきで整理した記事です。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-06-10T00:00:00+09:00",
    dateModified: "2026-10-14T00:00:00+09:00",
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
        <header className="relative overflow-hidden border-y border-border bg-white text-foreground mt-4">
          <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
            <p className="text-sm font-bold tracking-widest text-primary mb-3">鍵トラブル業者レビュー</p>
            <h1 className="font-bold text-2xl md:text-4xl leading-relaxed mb-4 text-primary-dark">
              カギ110番の口コミ・評判は？
              <br className="hidden md:block" />
              料金・対応スピード・メリットを徹底調査
            </h1>
            <p className="text-text-secondary leading-relaxed max-w-2xl">
              全国415社の加盟店から近くの業者を手配する、24時間365日受付のカギ110番。公式の料金表・自社アンケートと、第三者サイトの口コミを並べて編集部が確認しました。
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded border border-border bg-white px-3 py-1.5 text-sm font-bold text-foreground">鍵開け 11,000円〜（税込・公式料金表）</span>
              <span className="inline-flex items-center rounded border border-border bg-white px-3 py-1.5 text-sm font-bold text-foreground">24時間365日</span>
              <span className="inline-flex items-center rounded border border-border bg-white px-3 py-1.5 text-sm font-bold text-foreground">加盟店415社</span>
              <span className="inline-flex items-center rounded border border-border bg-white px-3 py-1.5 text-sm font-bold text-foreground">公式集計 総合4.6（2,239件）</span>
            </div>
            <AgentShot slug="kagi110ban" name="カギ110番" priority className="mt-8 md:max-w-[640px]" sizes="(min-width: 768px) 640px, 100vw" />
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
              カギ110番は、東証グロース上場のシェアリングテクノロジー株式会社（証券コード3989・本社：名古屋市、法人番号2180001061708。「生活110番」と同じ運営会社）が運営する全国対応の鍵トラブル解決サービスです。自社で職人を抱えるのではなく、全国に415社ある加盟店（提携業者。主な加盟店として鍵ラボ・株式会社SUN・株式会社AKWow・ようこそようこそ株式会社を公式が掲載）を通じて、依頼者の近くにいる鍵業者を手配する仕組みです。公式の運営企業ページによると、鍵の相談は年間17万件以上、作業は年間12万件以上（2025年）です。
            </p>
            <p className="leading-loose text-slate-700">
              受付は24時間365日です。見積もりは無料ですが、公式料金表には「対応エリア・加盟店により記載価格や条件では対応できない場合がございます」「交通費、お客様都合でのキャンセル料は別途発生する場合があります」と注記があります。実際に作業するのは加盟店なので、到着時間・品質・総額は加盟店によって変わる、という前提で使うのがポイントです。
            </p>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 mt-6">
              <p className="font-bold text-slate-800 mb-2">「鍵110番」「鍵の110番」で探している方へ</p>
              <p className="leading-loose text-slate-700 text-sm">公式の表記は「<strong>カギ110番</strong>」（サイトは kagi110ban.jp、運営はシェアリングテクノロジー株式会社）です。検索では「鍵110番」「鍵の110番」と書かれることもありますが、<strong>名称のよく似た別会社が複数あります</strong>。とくに「鍵の110番救急車（kagi110qq.co.jp／株式会社鍵）」や「一般社団法人 カギの110番・カギの救急車」は運営会社が異なる別のサービスです。口コミを読むときは、どの会社の話かを運営会社名とサイトのドメインで確かめてください。</p>
            </div>
            <div className="mt-6 overflow-x-auto">
              <table className="table w-full border border-slate-200 text-sm">
                <tbody>
                  <tr className="border-b border-slate-200"><th className="bg-slate-50 w-40">運営会社</th><td>シェアリングテクノロジー株式会社（名古屋市中村区名駅・資本金7億1,641万円〈2026年9月末〉・代表取締役CEO 片山善隆）</td></tr>
                  <tr className="border-b border-slate-200"><th className="bg-slate-50">仕組み</th><td>コールセンターで受付 → 加盟店が現地で見積もり → 作業（作業するのは加盟店）</td></tr>
                  <tr className="border-b border-slate-200"><th className="bg-slate-50">加盟店</th><td>全国415社（2026年10月14日確認）</td></tr>
                  <tr><th className="bg-slate-50">実績（公式）</th><td>鍵の相談 年間17万件以上・作業 年間12万件以上（2025年）</td></tr>
                </tbody>
              </table>
              <p className="text-xs text-slate-500 mt-2">出典：<a href="https://www.sharing-tech.co.jp/kagi/company/" target="_blank" rel="noopener nofollow" className="underline">カギ110番 運営企業ページ</a></p>
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
            <p className="leading-loose mb-5 text-slate-700">公式トップに出ている「6,600円〜」は、鍵修理を含む「ご自宅に関する鍵のトラブル」全体の最低額です。<strong>鍵開けは11,000円〜（税込）</strong>なので、締め出しで呼ぶ場合はこちらが目安の下限になります。公式料金表（2026年10月14日確認・すべて税込）は次のとおりです。</p>
            <div className="overflow-x-auto">
              <table className="table w-full border border-slate-200">
                <thead><tr className="bg-slate-100 text-slate-700"><th>対象</th><th>作業</th><th>料金（税込）</th></tr></thead>
                <tbody>
                  {[
                    ["自宅", "鍵開け", "11,000円〜"], ["自宅", "鍵修理", "6,600円〜"], ["自宅", "鍵交換（部材費込）", "14,300円〜"], ["自宅", "鍵作成・取り付け", "別途見積もり"],
                    ["車", "鍵開け", "13,200円〜"], ["車", "鍵作成", "18,000円〜"], ["バイク・原付", "鍵開け", "13,200円〜"], ["バイク・原付", "鍵作成", "16,500円〜"],
                    ["金庫", "鍵開け", "14,300円〜"], ["金庫", "鍵修理", "11,000円〜"], ["スーツケース", "鍵開け／鍵作成", "8,800円〜"],
                    ["ドアノブ", "鍵開け", "10,780円〜"], ["ドアノブ", "鍵交換", "11,000円〜"],
                  ].map(([a, b, c], i) => (
                    <tr key={i} className="border-b border-slate-200"><td>{a}</td><td className="font-medium">{b}</td><td className="font-bold text-amber-700">{c}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="text-sm text-slate-600 mt-3 space-y-1 list-disc pl-5">
              <li>公式の注記：「対応エリア・加盟店により記載価格や条件では対応できない場合がございます」</li>
              <li>公式の注記：「お見積りご提示後、追加のご要望等があった場合は、事前にお客様にご確認いただいたうえで追加料金をいただく場合がございます」</li>
              <li>公式の注記：「交通費、お客様都合でのキャンセル料は別途発生する場合があります」「一部加盟店・エリアによりカードが使えない場合がございます」</li>
            </ul>
            <p className="text-xs text-slate-500 mt-2">出典：<a href="https://www.kagi110ban.jp/price/" target="_blank" rel="noopener nofollow" className="underline">カギ110番 料金のご案内</a></p>
          </section>

          {/* reviews */}
          <section id="reviews" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">カギ110番の口コミ・評判（出典つき）</h2>
            <p className="leading-loose mb-5 text-slate-700">カギ110番の評判は、<strong>公式の自社アンケートでは高く、第三者の口コミサイトでは低め</strong>に出ています。公式集計でも「費用」だけが3.9と低く、ほかの項目（4.6〜4.7）との差が目立ちます。評判が割れる理由は、主に<strong>料金</strong>と<strong>加盟店ごとの差</strong>です。</p>
            <div className="overflow-x-auto mb-6">
              <table className="table w-full border border-slate-200 text-sm">
                <thead><tr className="bg-slate-100 text-slate-700"><th>出典</th><th>評価</th><th>件数</th><th>注意</th></tr></thead>
                <tbody>
                  {ratings.map((r) => (
                    <tr key={r.site} className="border-b border-slate-200">
                      <td><a href={r.url} target="_blank" rel="noopener nofollow" className="text-blue-700 underline">{r.site}</a></td>
                      <td className="font-bold">{r.value}</td><td>{r.count}</td><td className="text-xs text-slate-600">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3 className="font-bold text-lg mb-3">公式自身が挙げているデメリット</h3>
            <ul className="space-y-2 mb-6 text-slate-700">
              {officialDemerits.map((d) => (<li key={d} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">「{d}」</li>))}
            </ul>
            <p className="text-xs text-slate-500 mb-6">出典：<a href="https://www.kagi110ban.jp/kagi110-reviews/" target="_blank" rel="noopener nofollow" className="underline">カギ110番 公式「口コミ・評判」ページ</a>（2026年10月14日確認）</p>
            <h3 className="font-bold text-lg mb-3">第三者の口コミに多い声（傾向の要約）</h3>
            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6">
              <p className="text-slate-700 text-sm leading-relaxed"><strong>好意的な傾向</strong>は「到着・作業が早い」「コールセンター・現場の対応が丁寧」、<strong>否定的な傾向</strong>は「電話で聞いた目安より請求が高くなった」「加盟店によって対応・品質に差がある」です。カギ110番は加盟店紹介型のため、低評価の多くは実際に作業した個別の加盟店に関するものです。</p>
              <p className="text-slate-500 text-xs leading-relaxed mt-3">※ みん評・セーフリーの公開口コミを編集部が要約したもので、個別の口コミの引用ではありません。<strong>名前が似た別会社「鍵の110番救急車（kagi110qq.co.jp）」や「カギの110番」の口コミと混同しないよう</strong>、運営会社名で確認してください。</p>
            </div>
          </section>

          {/* gyosei */}
          <section id="gyosei" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">「鍵の110番は悪質？」消費者庁の注意喚起との関係</h2>
            <p className="leading-loose mb-4 text-slate-700">「カギ110番 評判」で調べると「悪質」という言葉が一緒に出てきます。これは名前のよく似た別の事業者に関する公的な注意喚起があるためです。</p>
            <div className="rounded-2xl border border-slate-200 p-5 mb-4">
              <p className="font-bold text-slate-800 mb-2">消費者庁（2022年2月）</p>
              <p className="text-sm leading-relaxed text-slate-700">消費者庁は2022年2月24日、特定商取引法に基づき Rセキュリティ株式会社・株式会社鍵 に業務停止命令等を行い、翌25日に「鍵のレンジャー」「鍵のレスキュー」「鍵の出張24時間センター」「鍵の110番24時間」「鍵のラッキーセブン」「カギの24時間救急車」「<strong>カギの110番</strong>」「鍵の110番救急車」と称するサイトでの取引について注意喚起しました。このうち「カギの110番」は<strong>株式会社110番の名義</strong>で開設されたサイトで、シェアリングテクノロジー株式会社の「カギ110番」とは別の事業者です。シェアリングテクノロジーに対する行政処分は、当編集部が確認した範囲（消費者庁サイト・2026年10月14日）では見当たりませんでした。</p>
              <p className="text-xs text-slate-500 mt-2">出典：<a href="https://www.caa.go.jp/notice/entry/027673/" target="_blank" rel="noopener nofollow" className="underline">消費者庁 注意喚起（2022年2月25日）</a></p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="font-bold text-slate-800 mb-2">国民生活センター（2024年11月）「広告より高額！？出張解錠サービスの料金トラブルに注意」</p>
              <p className="text-sm leading-relaxed text-slate-700">「解錠で2,000円〜」という広告を見て依頼したところ、作業後に約10万円を請求された、などの相談事例が公表されています。アドバイスは「『○○円〜』などのインターネット上の広告をうのみにしない」「納得できなければその場で支払わない」「困ったら消費者ホットライン188に相談する」などです。カギ110番に限らず、<strong>電話の段階で総額の目安と追加料金の条件を聞き、作業前に見積もりを書面で受け取る</strong>のが基本です。</p>
              <p className="text-xs text-slate-500 mt-2">出典：<a href="https://www.kokusen.go.jp/news/data/n-20241119_1.html" target="_blank" rel="noopener nofollow" className="underline">国民生活センター（2024年11月19日）</a></p>
            </div>
          </section>

          {/* merit */}
          <section id="merit" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">メリットと注意点</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-6">
                <h3 className="font-bold text-emerald-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>全国415社の加盟店から近くの業者を手配できる</li>
                  <li>24時間365日受付で緊急時も相談しやすい</li>
                  <li>公式料金表で鍵の種類ごとの下限額を公開している</li>
                  <li>相談・見積もりは無料</li>
                  <li>鍵開けから金庫・車の鍵まで幅広く対応</li>
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-rose-200 bg-rose-50 p-6">
                <h3 className="font-bold text-rose-800 mb-3">注意点</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>加盟店によって技術・対応に差が出ることがある</li>
                  <li>繁忙期は到着まで時間がかかる場合がある</li>
                  <li>交通費・お客様都合のキャンセル料が別途かかる場合がある（公式注記）</li>
                  <li>公式集計でも費用の満足度は3.9と低め</li>
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

                    <AgentCompareTable current="kagi110ban" />
          <VerificationNote officialUrl="https://kagi110ban.jp/" officialLabel="カギ110番 公式サイト" checkedNote="2026年10月14日確認" />

          {/* summary */}
          <section id="summary" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">まとめ</h2>
            <p className="leading-loose mb-4 text-slate-700">カギ110番は、シェアリングテクノロジー株式会社が運営し、全国415社の加盟店から近くの業者を手配する24時間365日受付のサービスです。公式料金表では鍵開け11,000円〜（税込）で、公式集計の総合評価は4.6（2,239件）です。</p>
            <p className="leading-loose mb-6 text-slate-700">一方で、第三者の口コミサイトでは評価が低めで、主な理由は料金と加盟店ごとの差です。依頼前には作業内容と総額を確認し、複数社の見積もりを比較すると安心です。まずは無料見積もりから検討してみてください。</p>
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
