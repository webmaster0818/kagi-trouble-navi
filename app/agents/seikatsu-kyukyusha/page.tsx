import Link from "next/link";
import AgentShot from "@/components/AgentShot";
import AgentCompareTable from "@/components/AgentCompareTable";
import VerificationNote from "@/components/VerificationNote";
import type { Metadata } from "next";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/agents/seikatsu-kyukyusha/";
const UPDATED = "2026年11月24日";

export const metadata: Metadata = {
  title: { absolute: "鍵の生活救急車（カギの生活救急車）の口コミ・評判は？料金表・時間外料金・運営会社【2026年11月】｜鍵トラブルナビ" },
  description: "カギの生活救急車の口コミ・評判を、出典を明記して整理。運営は2022年11月にJBRから事業を承継した株式会社生活救急車（現在はJBRと資本関係なし）。現在の公式サイト（kagi-help.com）の料金表（鍵開け8,800円〜）、24時間受付、時間外料金（20:00〜7:59は8,800円）、対応エリアを解説します。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "鍵の生活救急車（カギの生活救急車）の口コミ・評判は？料金表・時間外料金・運営会社【2026年11月】",
    description: "鍵の生活救急車の料金・対応スピード・実績・利用者の口コミを中立的な立場で調査し、利用前に確認すべきメリットと注意点を解説します。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const toc = [
    ["about", "鍵の生活救急車とはどんなサービスか"],
    ["service", "対応している鍵トラブルの種類"],
    ["price", "鍵の生活救急車の料金表（公式）"],
    ["flow", "受付時間・依頼の流れ・対応エリア"],
    ["reviews", "鍵の生活救急車の口コミ・評判（出典明記）"],
    ["merit", "メリットと注意点"],
    ["recommend", "鍵の生活救急車をおすすめする方"],
    ["compare", "他社と比較するときのチェックポイント"],
    ["faq", "よくある質問"],
    ["sources", "本記事の出典・参照元"],
    ["summary", "まとめ"]
  ];

const goodReviews = [
    {"title": "駆けつけが速く助かった", "body": "急ぎのトラブルで「すぐ来てくれて助かった」という、対応スピードへの好評が複数見られます。", "meta": "みん評「JBRカギの生活救急車」の傾向（2026年7月閲覧）"},
    {"title": "見積もり通りで追加料金がなかった", "body": "事前見積もりどおりで追加料金がなく、明朗会計だったという評価傾向があります。", "meta": "みん評「JBRカギの生活救急車」の傾向（2026年7月閲覧）"},
    {"title": "スタッフの対応・説明が丁寧だった", "body": "作業の説明が分かりやすく、対応が丁寧で作業も早かったという声が見られます。", "meta": "みん評「JBRカギの生活救急車」の傾向（2026年7月閲覧）"}
  ];

const badReviews = [
    {"title": "料金が割高に感じることがある", "body": "「思っていたより高額だった」「部材費がやや高く感じた」など、料金が割高に感じるという声が一定数あります。作業前に総額をご確認ください。", "meta": "みん評「JBRカギの生活救急車」の傾向（2026年7月閲覧）"},
    {"title": "支払い方法に制限がある場合がある", "body": "クレジットカード払いがパートナー店・エリアによっては利用できない場合があるなど、支払い方法に制限があるという指摘があります。", "meta": "旧公式トップの注記（2026年10月確認・一部エリアでカード不可）と口コミの傾向"}
  ];

const faqs = [
    {"q": "鍵の生活救急車はJBR（ジャパンベストレスキュー）が運営していますか", "a": "現在は株式会社生活救急車が運営しています。2022年11月にJBRから事業を承継し、同社は公式サイトで「ジャパンベストレスキューシステム株式会社とは資本関係を含め一切関係ございません」と表明しています（2026年10月14日確認）。"},
    {"q": "鍵の生活救急車の料金はいくらからですか", "a": "現在の公式の料金ページ（kagi-help.com）では、鍵開け8,800円〜、ハイセキュリティの鍵開け29,700円〜、鍵交換（シリンダーのみ）11,000円＋部品代です。20:00〜7:59は時間外料金8,800円、有料道路を通らないと行けない場所は別途3,300円（税込）がかかります。最終価格は作業前に渡される見積書の金額です（2026年11月24日確認）。"},
    {"q": "どのくらいの時間で来てくれますか", "a": "旧公式トップでは最短15分の駆けつけを掲げていましたが（2026年10月22日確認）、現在の公式サイト（kagi-help.com）では到着時間の目安を確認できません（2026年11月24日確認）。受付は24時間・年中無休のため、依頼時に到着の目安を確認してください。"},
    {"q": "対応エリアは全国ですか", "a": "公式トップの画像には「日本全国対応」とありますが、公式の対応エリア一覧に載っているのは39都道府県で、岩手・秋田・山形・鳥取・島根・宮崎・鹿児島・沖縄は載っていません。一覧はリアルタイムに更新されず、対応できる業者がいない場合は断ることがあると注記されています（2026年11月24日確認）。自宅の地域への対応可否は電話でご確認ください。"},
    {"q": "支払いにクレジットカードは使えますか", "a": "現在の公式トップの画像には「クレジット支払OK!」とあります。旧公式トップ（2026年10月確認）には一部エリアでカードが使えない場合があるとの注記があったため、依頼時に支払い方法を確認してください。"},
    {"q": "受付時間と夜間の料金を教えてください", "a": "受付は24時間・年中無休（土・日・祝日も営業）です。20:00〜7:59の作業には時間外料金8,800円がかかります（公式の問い合わせページ・料金ページ 2026年11月24日確認）。"},
    {"q": "合鍵だけ作ってもらえますか", "a": "公式のサービスページでは、合鍵のみの依頼には対応していないとされています。部品のみの販売も行っていません（2026年11月24日確認）。"}
  ];


export default function SeikatsuKyukyushaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "鍵の生活救急車（カギの生活救急車）の口コミ・評判は？料金表・時間外料金・運営会社",
    description: "鍵の生活救急車の料金・対応スピード・実績・利用者の口コミを中立的な立場で調査し、利用前に確認すべきメリットと注意点を解説します。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-06-20T00:00:00+09:00",
    dateModified: "2026-11-24T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "鍵業者の比較一覧", item: `${SITE}/agents/` },
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
            <li><Link href="/agents/" className="hover:underline">鍵業者の比較一覧</Link></li>
            <li>/</li>
            <li className="text-slate-700">鍵の生活救急車の口コミ・評判</li>
          </ol>
        </nav>

        <header className="relative overflow-hidden border-y border-border bg-white text-foreground mt-4">
          <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
            <p className="text-sm font-bold tracking-widest text-primary mb-3">鍵業者の口コミ・評判</p>
            <h1 className="font-bold text-2xl md:text-4xl leading-relaxed mb-4 text-primary-dark">鍵の生活救急車の口コミ・評判は？<br className="hidden md:block" />料金・対応スピードを調査</h1>
            <p className="text-text-secondary leading-relaxed max-w-2xl">鍵の生活救急車は、旧JBRの「生活救急車」を2022年に引き継いだ株式会社生活救急車の鍵サービスです。公式の料金ページ、運営会社の公表内容、口コミサイトの評価を編集部が比較・確認しました。</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded border border-border bg-white px-3 py-1.5 text-sm font-bold text-foreground">鍵開け 8,800円〜</span>
              <span className="inline-flex items-center rounded border border-border bg-white px-3 py-1.5 text-sm font-bold text-foreground">24時間受付・年中無休</span>
              <span className="inline-flex items-center rounded border border-border bg-white px-3 py-1.5 text-sm font-bold text-foreground">運営：株式会社生活救急車</span>
              <span className="inline-flex items-center rounded border border-border bg-white px-3 py-1.5 text-sm font-bold text-foreground">2026年11月24日 公式確認</span>
            </div>
            <AgentShot slug="seikatsu-kyukyusha" name="鍵の生活救急車" priority className="mt-8 md:max-w-[640px]" sizes="(min-width: 768px) 640px, 100vw" />
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
          <p className="text-sm text-slate-500 mb-8">最終更新日：{UPDATED}　／　鍵トラブルナビ編集部</p>

          <div className="mb-10 rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:p-6">
            <p className="font-bold text-primary mb-2">鍵の生活救急車（カギの生活救急車）の口コミ・評判は、対応の速さを評価する声と、料金が見積もりより高く感じたという声に分かれています。</p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">みん評などの公開口コミ（2026年7月時点）では、好意的な傾向は「緊急時の駆けつけが速い」「出張・見積もり・キャンセルが無料」「作業が丁寧」、否定的な傾向は「ホームページの表記と実際の請求額の差」「部品代が割高に感じる」「電話での説明と現地の対応の差」です。現在の公式サイト（kagi-help.com）の料金表は鍵開け8,800円〜、ハイセキュリティの鍵開け29,700円〜、鍵交換（シリンダーのみ）11,000円＋部品代で、受付は24時間、20:00〜7:59の作業は時間外料金8,800円がかかります（2026年11月24日確認）。依頼する場合は、作業前に部品代と時間外料金を含む総額を確認してください。</p>
            <p className="text-xs text-slate-500 mt-3">このページは鍵の生活救急車1社の口コミ・料金・運営会社をまとめています。カギ110番と並べて料金・無料範囲を比べたい方は<Link href="/agents/kagi110ban-vs-seikatsu9/" className="text-amber-700 underline">カギ110番と生活救急車の比較</Link>をご覧ください。</p>
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
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">鍵の生活救急車とはどんなサービスか</h2>
            <p className="leading-loose mb-4 text-slate-700">鍵の生活救急車は、<strong>株式会社生活救急車</strong>（本社：名古屋市中区栄1-14-15 RSビル502・代表取締役 中村信幸・法人番号8180001153391）が運営する鍵トラブル解決サービスです。鍵開け・鍵交換・鍵作成・鍵修理のほか、金庫や車・バイクの鍵にも対応しています。</p>
            <p className="leading-loose mb-4 text-slate-700">もとはジャパンベストレスキューシステム（JBR）のブランドで、2022年11月に事業がJBRから承継されました。承継の時点では、水まわり修理の株式会社アクアラインがJBRの子会社（駆けつけ事業準備株式会社）の株式51％を取得し、同社が2022年12月2日に「株式会社生活救急車」へ商号変更しています。現在、同社は公式サイトで「<strong>ジャパンベストレスキューシステム株式会社とは資本関係を含め一切関係ございません</strong>」と表明しています。経緯の詳細は<Link href="/agents/jbr/" className="text-amber-700 underline">JBRの口コミ・評判ページ</Link>で解説しています。</p>
            <p className="leading-loose mb-4 text-slate-700">代表者は、運営企業サイトの会社概要（2026年11月5日更新）と生活救急車×レスキューなびの会社概要では中村信幸氏です。一方、鍵の公式サイト（kagi-help.com）の会社概要（2025年7月3日更新）は楯広長氏の表記のままで、公式サイトの間で表記が分かれています（いずれも2026年11月24日確認）。本社は名古屋市中区栄1-14-15 RSビル502、東京には赤坂オフィス（港区赤坂2-8 溜池山王葵ビル402）があります。</p>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-bold text-slate-800 mb-2">公式サイトのドメインが変わっています</p>
              <p className="text-sm leading-relaxed text-slate-700">鍵の公式サイトは、旧ドメインの kagi-seikatsukyukyusya.com から <strong>kagi-help.com</strong> へ転送されるようになりました（2026年11月24日確認）。旧トップにあった「拠点数2,270店・施工件数240万件以上」「拠点数1,900店（2017年1月現在の累計）」の実績表記は、現在の公式トップでは確認できません。比較の際は数字の大きさよりも、自宅の地域への対応可否と到着の目安を電話で確認することが確実です。</p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 mt-4">
              <p className="font-bold text-slate-800 mb-2">名前が似た別の業者に注意</p>
              <p className="text-sm leading-relaxed text-slate-700">「<Link href="/agents/kagi-kyukyusha/" className="text-amber-700 underline">カギの救急車</Link>」（一般社団法人 カギの110番・カギの救急車）や「<Link href="/agents/kagi-trouble-kyukyusha/" className="text-amber-700 underline">カギのトラブル救急車</Link>」は、鍵の生活救急車とは別の運営者です。口コミサイトや予約サイトで調べる際は、運営会社名（株式会社生活救急車）で確認してください。ほかの例は<Link href="/agents/nitamei-kagiya/" className="text-amber-700 underline">名前が似た鍵屋の見分け方</Link>にまとめています。</p>
            </div>
            <p className="text-xs text-slate-500 mt-2">出典：<a href="https://www.seikatu-rescue.jp/company/" target="_blank" rel="noopener nofollow" className="underline">株式会社生活救急車 運営企業</a>・<a href="https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=8180001153391" target="_blank" rel="noopener nofollow" className="underline">国税庁法人番号公表サイト</a>・<a href="https://www.nihon-ma.co.jp/news/20221003_6173-2/" target="_blank" rel="noopener nofollow" className="underline">日本M&amp;Aセンター（2022年10月3日）</a>・<a href="https://kagi-help.com/company" target="_blank" rel="noopener nofollow" className="underline">カギの生活救急車 公式（会社概要）</a>・<a href="https://rescue-navi.jp/company" target="_blank" rel="noopener nofollow" className="underline">生活救急車×レスキューなび 会社概要</a></p>
          </section>

          <section id="service" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">対応している鍵トラブルの種類</h2>
            <p className="leading-loose mb-5 text-slate-700">玄関まわりの鍵だけでなく、金庫や乗り物の鍵まで幅広く対応しています。相談先の判断が難しい鍵トラブルも、まとめて相談できる点が利点です。</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["鍵開け", "鍵交換", "鍵作成", "鍵修理", "金庫の鍵", "車・バイクの鍵"].map((s) => (
                <div key={s} className="rounded-xl border border-slate-200 p-4 text-center font-medium text-slate-700">{s}</div>
              ))}
            </div>
            <ul className="text-sm text-slate-600 mt-4 space-y-1 list-disc pl-5">
              <li>キャビネット・机・ロッカーの鍵、ドアノブ・ドアクローザーにも対応しています</li>
              <li>合鍵のみの依頼、部品のみの販売には対応していません</li>
              <li>高級車・外国車・イモビライザーキーは、対応できない地域があります。金庫の鍵交換・鍵作成は対応できる機種に限られます</li>
            </ul>
            <p className="text-xs text-slate-500 mt-2">出典：<a href="https://kagi-help.com/service" target="_blank" rel="noopener nofollow" className="underline">カギの生活救急車 サービス</a>・<a href="https://kagi-help.com/contact" target="_blank" rel="noopener nofollow" className="underline">お問い合わせ</a>（2026年11月24日確認）</p>
          </section>

          <section id="price" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">鍵の生活救急車の料金体系と相場</h2>
            <p className="leading-loose mb-5 text-slate-700">現在の公式の料金ページ（kagi-help.com）では、<strong>鍵開けは8,800円〜</strong>、ハイセキュリティの鍵開けは29,700円〜です。表の金額は標準価格で、最終価格は作業前に渡される見積書の金額とされています（2026年11月24日確認）。</p>
            <div className="overflow-x-auto">
              <table className="table w-full border border-slate-200">
                <thead><tr className="bg-slate-100 text-slate-700"><th>対象</th><th>作業</th><th>一般</th><th>ハイセキュリティ</th></tr></thead>
                <tbody>
                  {[
                    ["玄関", "鍵開け", "8,800円〜", "29,700円〜"],
                    ["玄関", "鍵穴からの鍵作成", "14,300円〜", "33,000円〜"],
                    ["玄関", "鍵交換（シリンダーのみ）", "11,000円＋部品代", "—"],
                    ["玄関", "引き戸錠の交換", "16,500円＋部品代", "—"],
                    ["玄関", "錠前交換", "25,300円＋部品代", "—"],
                    ["玄関", "新規取り付け", "11,000円＋部品代", "27,500円＋部品代"],
                    ["玄関", "修理・調整", "8,800円〜", "—"],
                    ["金庫", "鍵開け／鍵作成", "8,800円〜／14,300円〜", "29,700円〜／33,000円〜"],
                    ["金庫", "ダイヤル番号変更／錠前・ダイヤル交換", "8,800円〜／25,300円＋部品代", "—"],
                    ["車（国産）", "鍵開け／鍵作成", "8,800円〜／14,300円〜", "16,500円〜／22,000円〜"],
                    ["車（外国車）", "鍵開け／鍵作成", "16,500円〜／30,800円〜", "33,000円〜／55,000円〜"],
                    ["車", "鍵折れ・鍵抜き", "8,800円〜", "—"],
                    ["バイク（国産）", "鍵開け／鍵作成", "8,800円〜／11,000円〜", "16,500円〜／22,000円〜"],
                    ["バイク（外国産）", "鍵開け／鍵作成", "33,000円〜／55,000円〜", "—"],
                    ["ドアノブ", "交換", "11,000円＋部品代〜", "—"],
                    ["ドアクローザー", "交換／新規取り付け", "16,500円＋部品代／33,000円＋部品代〜", "—"],
                    ["加算", "時間外料金（20:00〜7:59）", "8,800円", "—"],
                    ["加算", "有料道路を通らないと行けない場所（高速のSA・離島など）", "3,300円（税込）", "—"],
                  ].map(([a, b, c, d], i) => (
                    <tr key={i} className="border-b border-slate-200"><td className="text-sm text-slate-600">{a}</td><td className="font-medium">{b}</td><td className="font-bold text-amber-700">{c}</td><td className="text-sm">{d}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="text-sm text-slate-600 mt-3 space-y-1 list-disc pl-5">
              <li>公式トップの画像には「出張見積り無料・キャンセル料無料」とあります</li>
              <li>旧公式の料金ページ（kagi-seikatsukyukyusya.com・2026年10月27日確認）には「価格表記は全て税込」とありましたが、現在の料金ページで税込と明記されているのは有料道路の加算（3,300円）だけです。税込かどうかは見積もりの際にご確認ください</li>
              <li>旧公式にあった「エリア・パートナー店・現場状況により調査・見積もりに費用をいただく場合がある」「一部エリアでカードが使えない場合がある」との注記は、現在の公式サイトでは確認できません（2026年11月24日確認）</li>
            </ul>
            <p className="text-xs text-slate-500 mt-2">出典：<a href="https://kagi-help.com/price" target="_blank" rel="noopener nofollow" className="underline">カギの生活救急車 料金ページ</a>・<a href="https://kagi-help.com/" target="_blank" rel="noopener nofollow" className="underline">公式トップ</a>（2026年11月24日確認）</p>
          </section>

          <section id="flow" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">受付時間・依頼の流れ・対応エリア</h2>
            <ul className="space-y-3 text-slate-700 mb-6">
              <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span><span><strong>受付時間</strong>：24時間受付・年中無休（土・日・祝日も営業）。20:00〜7:59の作業には時間外料金8,800円がかかります</span></li>
              <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span><span><strong>見積もり</strong>：作業前に必ず見積もりが渡され、納得できなければその場で断れます。出張見積もり・キャンセル料は無料とされています</span></li>
              <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span><span><strong>対応エリア</strong>：公式の一覧は39都道府県で、岩手・秋田・山形・鳥取・島根・宮崎・鹿児島・沖縄は載っていません。一覧はリアルタイムに更新されず、対応できる業者がいない場合は断ることがあるとされています</span></li>
            </ul>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-bold text-slate-800 mb-2">公式に掲載されている施工事例の請求額（税込の総額）</p>
              <ul className="text-sm leading-relaxed text-slate-700 list-disc pl-5 space-y-1">
                <li>徳島県阿南市・玄関の解錠（重度の不具合）：44,000円（2026年10月25日施工）</li>
                <li>東京都日野市・ドアノブの空回りの修理と鍵交換：83,600円（2026年10月24日施工）</li>
              </ul>
              <p className="text-xs text-slate-500 mt-2">料金表の「〜」の金額より高くなる例として掲載しています。金額は鍵の状態や作業内容で変わります。</p>
            </div>
            <p className="text-xs text-slate-500 mt-2">出典：<a href="https://kagi-help.com/contact" target="_blank" rel="noopener nofollow" className="underline">お問い合わせ（受付時間）</a>・<a href="https://kagi-help.com/area" target="_blank" rel="noopener nofollow" className="underline">対応エリア</a>・<a href="https://rescue-navi.jp/key" target="_blank" rel="noopener nofollow" className="underline">生活救急車×レスキューなび 鍵</a>・<a href="https://rescue-navi.jp/key/21" target="_blank" rel="noopener nofollow" className="underline">施工事例</a>（2026年11月24日確認）</p>
          </section>

          <section id="reviews" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">鍵の生活救急車の口コミ・評判（出典明記）</h2>
            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6 mb-6">
              <p className="text-slate-700 text-sm leading-relaxed">Googleのクチコミや口コミ・比較サイト（みん評等）の公開口コミを編集部が調査しました（2026年7月時点）。みん評の「JBRカギの生活救急車」ページには約40件の口コミが掲載されています。<strong>好意的な傾向</strong>は「緊急時の迅速・安心な対応」「出張見積もり・キャンセルが無料」「作業が丁寧」、<strong>否定的な傾向</strong>は「HP表記（例：部品代＋作業代1万円）と実請求（例：約6万円）の乖離」「同等の鍵が通販より割高との指摘」「電話見積もり時の説明と実際の対応との差」です。</p>
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
                  <li>24時間受付・年中無休</li>
                  <li>料金ページで玄関・金庫・車・バイクの作業別の標準価格を公開している</li>
                  <li>出張・見積もり・キャンセルが無料</li>
                  <li>鍵から金庫・車の鍵まで幅広く対応している</li>
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-rose-200 bg-rose-50 p-6">
                <h3 className="font-bold text-rose-800 mb-3">注意点</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>料金が割高に感じるという声が一定数ある</li>
                                    <li>作業前に部材費を含む総額の確認が必要</li>
                  <li>20:00〜7:59の作業は時間外料金8,800円がかかる</li>
                  <li>公式の対応エリア一覧に載っていない県がある（岩手・秋田・山形・鳥取・島根・宮崎・鹿児島・沖縄）</li>
                  <li>公式サイトの間で代表者の表記が分かれている</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="recommend" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">鍵の生活救急車をおすすめする方</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span>深夜・早朝でも電話で依頼したい方</li>
              <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span>料金表の標準価格を比較してから依頼したい方</li>
              <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span>作業前に料金の説明を受けてから依頼したい方</li>
              <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span>鍵以外の生活トラブルも相談したい方</li>
            </ul>
          </section>

          <section id="compare" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">他社と比較するときのチェックポイント</h2>
            <p className="leading-loose mb-4 text-slate-700">鍵業者は、料金の安さだけでなく、対応スピードや見積もりの明確さを含めて比較することが重要です。鍵の生活救急車を他社と比較する際は、次の点をご確認ください。</p>
            <ol className="space-y-3 text-slate-700">
              <li className="flex gap-3"><span className="font-bold text-amber-600">1.</span>見積もりに出張料・部材費まで含まれているか（総額で比較）</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">2.</span>到着までの目安時間と対応エリア</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">3.</span>依頼したい鍵の種類に対応しているか</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">4.</span>作業後の保証やアフター対応の有無</li>
            </ol>
            <p className="leading-loose mt-4 text-slate-700">料金や対応は地域・状況で変わるため、鍵の生活救急車を含めて<Link href="/" className="text-amber-700 underline">複数の鍵業者を比較</Link>し、見積もりを取ったうえで選ぶことをおすすめします。</p>
            <p className="leading-loose mt-4 text-slate-700">カギ110番との違い（キャンセル料の記載・料金表示の構造・運営会社）は<Link href="/agents/kagi110ban-vs-seikatsu9/" className="text-amber-700 underline">カギ110番と生活救急車はどっちがいい？</Link>で比較しています。</p>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 mt-6">
              <p className="font-bold text-slate-800 mb-2">関連ページ</p>
              <ul className="space-y-1 text-sm list-disc pl-5">
                <li><Link href="/ryokin-index/" className="text-amber-700 underline">鍵業者の公式料金一覧（確認日つき）</Link></li>
                <li><Link href="/agents/kagizaru/" className="text-amber-700 underline">鍵猿の口コミ・評判</Link>／<Link href="/agents/kagi110ban/" className="text-amber-700 underline">カギ110番の口コミ・評判</Link></li>
                <li><Link href="/shimedashi/" className="text-amber-700 underline">鍵を閉め出されたときの対処</Link>／<Link href="/car-inlock/" className="text-amber-700 underline">車のインロック</Link>／<Link href="/kinko-kaijo/" className="text-amber-700 underline">金庫が開かないとき</Link></li>
                <li><Link href="/kagiya-kougaku-seikyuu/" className="text-amber-700 underline">鍵屋の高額請求を避けるには</Link></li>
              </ul>
            </div>
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
            <p className="leading-loose mb-4 text-slate-700">本記事の事実情報・口コミの傾向は、以下の公式サイトおよび口コミ・比較サイトを参照し、編集部が確認・要約しています（料金・受付時間・対応エリア・会社概要は2026年11月24日に確認。口コミの傾向は2026年7月時点）。</p>
            <ul className="space-y-2 text-sm">
              <li><a href="https://kagi-help.com/price" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline break-all">鍵の生活救急車 公式（料金）</a></li>
              <li><a href="https://kagi-help.com/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline break-all">カギの生活救急車 公式サイト</a></li>
              <li><a href="https://kagi-help.com/area" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline break-all">カギの生活救急車 対応エリア</a></li>
              <li><a href="https://rescue-navi.jp/key" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline break-all">生活救急車×レスキューなび（鍵・施工事例）</a></li>
              <li><a href="https://www.seikatu-rescue.jp/company/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline break-all">株式会社生活救急車 運営企業</a></li>
              <li><a href="https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=8180001153391" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline break-all">国税庁法人番号公表サイト（株式会社生活救急車の変更履歴）</a></li>
              <li><a href="https://www.nihon-ma.co.jp/news/20221003_6173-2/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline break-all">日本M&amp;Aセンター M&amp;Aニュース（2022年10月3日）</a></li>
              <li><a href="https://minhyo.jp/jbr-kagi" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline break-all">みん評（利用者の口コミ）</a></li>
            </ul>
          </section>

          <AgentCompareTable current="seikatsu-kyukyusha" />
          <VerificationNote officialUrl="https://kagi-help.com/price" officialLabel="カギの生活救急車 料金ページ" checkedNote="2026年11月24日確認・国税庁法人番号公表サイト照合済み" />

          <section id="summary" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">まとめ</h2>
            <p className="leading-loose mb-4 text-slate-700">鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブル解決サービスです（2022年11月にJBRから事業承継）。料金ページの標準価格（鍵開け8,800円〜）、24時間受付、出張見積もり・キャンセル料無料が特徴で、現在はJBRと資本関係のない別会社です。</p>
            <p className="leading-loose mb-4 text-slate-700">一方で、料金が割高に感じるという声や、支払い方法の制限には注意が必要です。作業前に部材費を含む総額を確認し、複数社の見積もりを比較することをおすすめします。</p>
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
