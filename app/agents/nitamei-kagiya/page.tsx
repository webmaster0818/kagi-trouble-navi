import Link from "next/link";
import type { Metadata } from "next";

const SITE = "https://kagi-trouble-navi.com";
const URL = `${SITE}/agents/nitamei-kagiya/`;
const CHECKED = "2026年10月12日";
const TITLE = "「救急車」「110番」「レスキュー」名前が似た鍵屋の見分け方｜運営会社10件を公式サイトで確認【2026年10月】";
const DESC =
  "カギの救急車・鍵の24時間救急車・カギのトラブル救急車・鍵の生活救急車、カギ110番・カギの救急110番、鍵のレスキューなど、名前がよく似た鍵屋の運営会社を公式サイトで一つずつ確認して一覧にしました。電話の前に屋号ではなく運営会社で見分ける方法も解説します。";

export const metadata: Metadata = {
  title: { absolute: `${TITLE}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESC, url: URL, type: "article", images: ["/images/kv-top.jpg"] },
};

type Row = { name: string; operator: string; site: string; siteUrl: string; note: string; review?: string };

const kyukyusha: Row[] = [
  {
    name: "カギの救急車（カギの110番）",
    operator: "一般社団法人 カギの110番・カギの救急車（東京都港区西新橋）／事業運営は関連会社の株式会社ジェイクライプ",
    site: "kagi1109948.com",
    siteUrl: "https://www.kagi1109948.com/corporate/outline/",
    note: "全国の街の鍵屋の加盟店ネットワーク。料金・営業時間は加盟店ごと。目印は「カギQトリオ」。公式は表記ゆれの業者は別業者と告知",
    review: "/agents/kagi-kyukyusha/",
  },
  {
    name: "鍵の24時間救急車",
    operator: "株式会社24時間救急車（大阪府大阪市西区南堀江）",
    site: "鍵の24時間救急車.com（日本語ドメイン）",
    siteUrl: "https://xn--24-zb4a773seofkpbj81n71hr1e.com/company/",
    note: "24時間365日・全国受付。鍵開け6,600円〜＋出張料4,400〜8,800円（税込）",
    review: "/agents/kagi-24h-kyukyusha/",
  },
  {
    name: "カギのトラブル救急車",
    operator: "株式会社アスティ24（埼玉県川越市・2003年設立）",
    site: "key.asti24.co.jp（旧サイト kagi-trouble24.jp）",
    siteUrl: "https://key.asti24.co.jp/company/",
    note: "首都圏中心の出張鍵屋。夜8時以降3,000円・深夜12時以降5,000円の割増を公式FAQで明示",
    review: "/agents/kagi-trouble-kyukyusha/",
  },
  {
    name: "鍵の生活救急車（カギの生活救急車）",
    operator: "株式会社生活救急車（名古屋市）。2022年11月にJBRから事業を承継",
    site: "kagi-seikatsukyukyusya.com",
    siteUrl: "https://kagi-seikatsukyukyusya.com/",
    note: "パートナー店方式。JBR（ジャパンベストレスキューシステム）の運営ではなくなっている",
    review: "/agents/seikatsu-kyukyusha/",
  },
];

const ban110: Row[] = [
  {
    name: "カギ110番",
    operator: "シェアリングテクノロジー株式会社（名古屋市・東証グロース3989）",
    site: "kagi110ban.jp",
    siteUrl: "https://kagi110ban.jp/",
    note: "加盟店とのマッチング型。鍵開け11,000円〜（税込・公式料金表）。カギの救急車の「カギの110番」とは別会社",
    review: "/agents/kagi110ban/",
  },
  {
    name: "鍵のレスキュー 鍵の110番救急車",
    operator: "公式会社案内の表示は株式会社レスキュー（合鍵ショップのサイトでは株式会社 鍵・東京都品川区）",
    site: "kagi110qq.co.jp",
    siteUrl: "https://www.kagi110qq.co.jp/about/",
    note: "24時間・全国出張。鍵開け6,600円〜＋出張料4,400〜8,800円（税込）。現在も営業中",
    review: "/agents/kagi-rescue/",
  },
  {
    name: "カギの救急110番",
    operator: "株式会社救急110番（東京都港区南青山）",
    site: "カギの救急110番.com（日本語ドメイン）",
    siteUrl: "https://www.xn--110-kc4b3lsa2716fvwi2p0b.com/about.html",
    note: "公式サイトの会社概要で確認。当サイトでは料金・評判は未調査",
  },
  {
    name: "カギの110番（姫路・神戸）",
    operator: "株式会社セキュリティハウス神姫 カギの110番事業部（2026年10月1日にカギの110番株式会社が合併）",
    site: "kagino110ban.co.jp",
    siteUrl: "https://www.kagino110ban.co.jp/",
    note: "姫路本社・神戸支店の2拠点。受付9:00〜18:00・年中無休と公式に表示。1982年に始まった鍵の事業を継承",
  },
];

const rescue: Row[] = [
  {
    name: "kagi-rescue.com（2016年時点の屋号：キーレスキューサービス）",
    operator: "閉鎖告知では「弊社の別事業である鍵屋の鍵猿」と案内",
    site: "kagi-rescue.com",
    siteUrl: "http://kagi-rescue.com/",
    note: "2023年12月末でサイト閉鎖。鍵の駆けつけは鍵屋の鍵猿で対応と告知。上の「鍵のレスキュー 鍵の110番救急車」とは別",
  },
  {
    name: "鍵屋の鍵猿",
    operator: "SLS株式会社（大阪本社）",
    site: "sls.co.jp/kagizaru/",
    siteUrl: "https://sls.co.jp/kagizaru/",
    note: "全国47都道府県・鍵開け8,800円〜（税込）・1年保証",
    review: "/agents/kagizaru/",
  },
];

const faqs = [
  { q: "「鍵の救急車」と「カギの救急車」は同じですか？", a: "公式には別です。カギの救急車（一般社団法人 カギの110番・カギの救急車）の公式サイトは、2026年2月26日付のお知らせで、「鍵の救急車」「鍵の110番」のようにカギを漢字にした表記や、「鍵の110番救急車」「鍵の24時間救急車」のような組み合わせた表記は同グループを装った別業者だと告知しています（2026年10月12日確認）。" },
  { q: "「鍵のレスキュー」は終了したのですか？", a: "いいえ。「鍵のレスキュー 鍵の110番救急車」（kagi110qq.co.jp）は2026年10月12日時点で営業しています。2023年12月末に閉鎖したのは kagi-rescue.com という別のサイトです。当サイトは一時期この2つを混同していました。訂正してお詫びします。" },
  { q: "「カギ110番」と「カギの110番」は同じ会社ですか？", a: "違います。カギ110番（kagi110ban.jp）はシェアリングテクノロジー株式会社の運営です。「カギの110番」は一般社団法人 カギの110番・カギの救急車の名称に含まれるほか、兵庫県姫路市・神戸市のカギの110番（2026年10月1日からセキュリティハウス神姫のカギの110番事業部）もあります。" },
  { q: "電話する前に、どこの会社か確かめる方法は？", a: "公式サイトの「会社概要」「特定商取引法上の表記」で会社名と所在地を見るのが確実です。電話では「御社の会社名と、実際に来る方の会社名を教えてください」と聞いてください。作業前に渡される見積書・説明書面にも事業者名が書かれているはずです。" },
  { q: "似た名前の業者は悪質なのですか？", a: "名前が似ていることだけで悪質とは言えません。ただし運営会社が違えば料金・キャンセル規定・評判もまったく別です。口コミや料金を調べるときは、屋号ではなく運営会社名で確かめてください。" },
];

function Table({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200">
      <table className="w-full text-sm bg-white">
        <thead>
          <tr className="bg-slate-100 text-slate-700 text-left">
            <th className="px-3 py-2.5 whitespace-nowrap">屋号</th>
            <th className="px-3 py-2.5">運営会社（公式表示）</th>
            <th className="px-3 py-2.5">ポイント</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-t border-slate-100 align-top">
              <td className="px-3 py-2.5 font-medium min-w-[9rem]">
                {r.review ? (
                  <Link href={r.review} className="text-blue-700 underline hover:no-underline">{r.name}</Link>
                ) : (
                  r.name
                )}
              </td>
              <td className="px-3 py-2.5 text-slate-700 min-w-[12rem]">
                {r.operator}
                <br />
                <a href={r.siteUrl} target="_blank" rel="noopener nofollow" className="text-xs text-slate-500 underline break-all">{r.site}</a>
              </td>
              <td className="px-3 py-2.5 text-slate-600 min-w-[12rem]">{r.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function NitameiKagiyaPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESC,
    datePublished: "2026-10-12T00:00:00+09:00",
    dateModified: "2026-10-12T00:00:00+09:00",
    author: { "@type": "Organization", name: "鍵トラブルナビ編集部", url: SITE },
    publisher: { "@type": "Organization", name: "鍵トラブルナビ", url: SITE },
    mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "鍵トラブルナビ", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "鍵屋レビュー", item: `${SITE}/agents/` },
      { "@type": "ListItem", position: 3, name: "名前が似た鍵屋の見分け方", item: URL },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <article className="bg-white text-slate-800">
        <nav aria-label="パンくず" className="max-w-4xl mx-auto px-4 pt-4 text-xs text-slate-500">
          <ol className="flex flex-wrap gap-1">
            <li><Link href="/" className="hover:underline">鍵トラブルナビ</Link></li>
            <li>/</li>
            <li><Link href="/agents/" className="hover:underline">鍵屋レビュー</Link></li>
            <li>/</li>
            <li className="text-slate-700">名前が似た鍵屋の見分け方</li>
          </ol>
        </nav>

        <header className="bg-gradient-to-br from-slate-800 to-slate-900 text-white mt-4">
          <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
            <p className="text-sm tracking-widest text-amber-300 mb-3">鍵業者の見分け方</p>
            <h1 className="font-bold text-2xl md:text-3xl leading-relaxed mb-4">「救急車」「110番」「レスキュー」<br className="hidden md:block" />名前が似た鍵屋は運営会社で見分ける</h1>
            <p className="text-slate-200 leading-relaxed max-w-2xl">鍵屋には、屋号が一文字違い・漢字とカタカナ違いの業者がたくさんあります。名前が似ていても運営会社が違えば、料金もキャンセル規定も口コミもまったく別です。各社の公式サイトで会社名を一つずつ確認しました。</p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
          <p className="text-sm text-slate-500 mb-8">確認日：{CHECKED}　／　鍵トラブルナビ編集部</p>

          <section className="mb-12 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5">
            <h2 className="font-bold text-lg mb-2">先に結論：電話の前にこの3つを確かめる</h2>
            <ol className="list-decimal pl-5 space-y-1.5 text-sm leading-relaxed text-slate-700">
              <li>公式サイトの「会社概要」か「特定商取引法上の表記」で、<strong>会社名と所在地</strong>を見る</li>
              <li>電話で「御社の会社名」と「実際に来る方の会社名」を聞く（加盟店方式の業者は別の会社が来る）</li>
              <li>作業前に渡される見積書の<strong>事業者名・総額・キャンセル条件</strong>を読んでからサインする</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold border-l-4 border-amber-500 pl-4 mb-4">「救急車」がつく鍵屋</h2>
            <p className="leading-loose text-slate-700 mb-4">検索で最も取り違えが多いのがこのグループです。「カギの救急車」の公式サイトは、2026年2月26日付のお知らせで、「鍵の救急車」（漢字表記）、「カギ救急車」（「の」なし）、「かぎの救急車」（ひらがな）、「鍵の110番救急車」「鍵の24時間救急車」（組み合わせ）、「カギの救急隊」「カギの緊急隊」（一文字違い）などの表記は同グループとは関係のない別業者だと告知しています。</p>
            <Table rows={kyukyusha} />
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold border-l-4 border-amber-500 pl-4 mb-4">「110番」がつく鍵屋</h2>
            <p className="leading-loose text-slate-700 mb-4">「カギ110番」と「カギの110番」は一字違いですが別の事業者です。さらに「鍵の110番救急車」「カギの救急110番」のように、110番と救急車を組み合わせた屋号もあります。</p>
            <Table rows={ban110} />
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold border-l-4 border-amber-500 pl-4 mb-4">「レスキュー」がつく鍵屋</h2>
            <p className="leading-loose text-slate-700 mb-4">「鍵のレスキュー」で検索すると、現在営業している「鍵のレスキュー 鍵の110番救急車」（kagi110qq.co.jp）と、2023年12月末に閉鎖した kagi-rescue.com の情報が混ざることがあります。当サイトも一時期この2つを混同し、「鍵のレスキューは終了」と案内していました。訂正してお詫びします。</p>
            <Table rows={rescue} />
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold border-l-4 border-amber-500 pl-4 mb-4">なぜ運営会社で見分ける必要があるのか</h2>
            <p className="leading-loose text-slate-700 mb-3">屋号が似ていても、料金の出し方やキャンセルの規定は会社ごとに違います。たとえば当サイトが公式サイトで確認した範囲でも、出張料を別にとる業者（4,400〜8,800円など）、夜間に割増がかかる業者（夜8時以降3,000円など）、作業開始から30分を超えると総額の全額がかかる規定の業者があります。</p>
            <p className="leading-loose text-slate-700 mb-3">口コミも同じです。「鍵の24時間救急車 評判」と検索して出てきた「カギの救急車」の口コミを読んでも、別の会社の評判を見ていることになります。口コミサイトやGoogleマップでは、屋号に加えて運営会社名でも確かめてください。</p>
            <p className="leading-loose text-slate-700">料金の物差しとして、JAFの非会員がキー閉じ込みの開錠を頼んだ場合の料金（夜間・一般道のドア開放で25,630円）と比べる方法もあります。詳しくは<Link href="/ryokin/" className="text-blue-700 underline">鍵開け・鍵交換の料金相場</Link>と<Link href="/ryokin-index/" className="text-blue-700 underline">主要業者の料金一次確認まとめ</Link>をご覧ください。</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold border-l-4 border-amber-500 pl-4 mb-4">よくある質問</h2>
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

          <section className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-5 text-sm text-slate-700">
            <h2 className="text-lg font-bold text-slate-900 mb-2">この記事の情報について</h2>
            <p className="leading-relaxed">各社の会社名・所在地は、表に記載した各社公式サイトの会社概要・特定商取引法の表記・お知らせを{CHECKED}に編集部が確認したものです。表示の変更や事業の移管があり得るため、依頼時は必ず最新の公式表示と見積書の事業者名を確認してください。当サイトは特定の業者を悪質と判断するものではありません。方針は<Link href="/content-policy/" className="text-blue-700 underline">記事の制作ポリシー</Link>をご覧ください。</p>
          </section>
        </div>
      </article>
    </>
  );
}
