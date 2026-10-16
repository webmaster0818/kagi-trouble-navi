import AgentIntro from "@/components/AgentIntro";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/matsumoto/";
const UPDATED = "2026年10月15日";
const UPDATED_ISO = "2026-10-15";

export const metadata: Metadata = {
  title: {
    absolute:
      "【2026年最新】松本市の鍵開け・鍵交換業者おすすめ4選｜ドアチェーン・ドアガードが原因で開かないときの見分け方も解説する鍵屋比較｜鍵トラブルナビ",
  },
  description:
    "松本市で鍵開け・鍵交換を依頼できる鍵業者4社を一次確認値で比較。カギ110番（鍵開け11,000円〜）・鍵の生活救急車（最短15分）・鍵のレスキュー・カギの救急車の料金と受付時間、鍵は回るのに扉が数センチで止まるときにドアチェーン・ドアガードを疑う見分け方と依頼方法まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】松本市の鍵開け・鍵交換業者おすすめ4選｜ドアチェーン・ドアガードが原因で開かないときの見分け方も解説する鍵屋比較",
    description:
      "松本市で鍵開け・鍵交換を依頼できる鍵業者4社を、料金・受付時間の一次確認値で比較。ドアチェーン・ドアガードが原因で扉が開かないときの見分け方、避けるべき対処、再発の防ぎ方も解説します。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

// ---- 掲載データ（各レビューページ・agentsData.ts の一次確認値のみ） ----

interface AreaAgent {
  id: string;
  slug: string;
  num: string;
  catch: string;
  name: string;
  intro: React.ReactNode;
  recommend: string[];
  table: { k: string; v: string; note?: string }[];
  memo: string;
  memoDate: string;
}

interface AreaFaq {
  q: string;
  a: string;
  link?: { href: string; label: string };
}

const agents: AreaAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    num: "1-1",
    catch: "最短5分手配・全国対応",
    name: "カギ110番",
    intro: (
      <>
        カギ110番は、東証グロース上場の
        <Hl>シェアリングテクノロジー株式会社が運営する加盟店紹介型の鍵トラブル解決サービス</Hl>
        です。<Hl>鍵開け11,000円〜（税込・公式料金表）</Hl>
        で、24時間365日受付・電話一本で最短5分の手配を掲げています。全国47都道府県の加盟店ネットワークが対象のため、松本市内の依頼でも近隣の加盟店が手配される仕組みです。見積もりは無料で、出張料・作業費・部材費を含めた金額を事前に提示する明朗会計を掲げています。
      </>
    ),
    recommend: [
      "深夜・早朝など緊急で鍵トラブルを解決したい方",
      "上場企業運営のサービスに依頼したい方",
      "無料見積もりで総額を確認してから決めたい方",
      "金庫や車の鍵もまとめて相談したい方",
    ],
    table: [
      { k: "鍵開け料金", v: "11,000円〜（税込）", note: "公式料金表・2026年10月14日確認。加盟店・エリアにより異なる場合あり" },
      { k: "受付時間", v: "24時間365日" },
      { k: "対応エリア", v: "全国47都道府県（長野県対応）", note: "長野県対応の一次確認値。松本市での詳細な対応可否・条件は依頼時に各社へ確認" },
      { k: "見積もり", v: "無料", note: "交通費・キャンセル料は別途発生する場合ありと公式記載" },
      { k: "運営会社", v: "シェアリングテクノロジー株式会社" },
    ],
    memo:
      "公式料金表で鍵開け11,000円〜（税込）を確認（トップの「6,600円〜」は鍵修理を含む自宅の鍵トラブル全体の最低額）。公式にも「対応エリア・加盟店により記載価格や条件では対応できない場合がある」と明記されており、実際の金額は現地の無料見積もりで確定します。加盟店紹介型のため、対応品質は店舗により差が出ることがあります。",
    memoDate: "2026年7月4日確認",
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    num: "1-2",
    catch: "最短15分・全国約2,270店",
    name: "鍵の生活救急車",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブル解決サービスです。
        <Hl>最短15分の駆けつけ</Hl>と<Hl>全国約2,270店の拠点網</Hl>
        が特徴で、鍵開けは8,800円〜（税込）が目安です。
        <Hl>出張・見積もり・キャンセルが無料</Hl>
        のため、金額を確認したうえで依頼するかどうかを判断できます。作業前に料金を説明し、同意のうえで作業する方式です。
      </>
    ),
    recommend: [
      "できるだけ早い駆けつけを希望する方",
      "見積もりを見てから依頼を決めたい方",
      "拠点数の多いサービスに依頼したい方",
      "作業前の料金説明と同意を重視する方",
    ],
    table: [
      { k: "鍵開け料金", v: "8,800円〜（税込）", note: "鍵の種類・作業内容で変動" },
      { k: "駆けつけ", v: "最短15分", note: "拠点からの距離・繁忙状況で変動" },
      { k: "拠点数", v: "全国約2,270店" },
      { k: "見積もり", v: "出張・見積もり・キャンセル無料" },
      { k: "運営会社", v: "株式会社生活救急車" },
    ],
    memo:
      "公式の料金ページで鍵開け8,800円〜（税込）、出張・見積もり・キャンセル無料の記載を確認。運営の株式会社生活救急車は2022年11月にJBR（ジャパンベストレスキューシステム）から事業を承継し、現在はJBRと資本関係がないと公式に表明しています。",
    memoDate: "2026年10月14日確認",
  },
  {
    id: "kagi-rescue",
    slug: "kagi-rescue",
    num: "1-3",
    catch: "料金表を公式公開・出張料は別",
    name: "鍵のレスキュー",
    intro: (
      <>
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。
        <Hl>鍵開け6,600円〜（税込）</Hl>に、
        <Hl>出張料4,400〜8,800円（税込・地域により異なる）</Hl>
        が加わる料金体系を公式サイトで公開しています。電話は24時間受付で、公式のよくある質問では全国どこでも出張可能と案内しています。正式な金額は現地での見積もりで決まり、作業開始から30分を超えたキャンセルには全額の料金がかかる点にご注意ください。
      </>
    ),
    recommend: [
      "料金表を見てから依頼したい方",
      "深夜・早朝に電話で相談したい方",
      "車・バイク・金庫の鍵もまとめて相談したい方",
    ],
    table: [
      { k: "鍵開け料金", v: "6,600円〜（税込）", note: "公式簡易料金表・2026年10月15日確認。正式な金額は現地見積もり" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "地域により異なる。悪天候・渋滞などで最大8,000円の増減あり（公式）" },
      { k: "キャンセル", v: "作業開始30分超は全額", note: "30分未満は経過時間に応じた按分（公式・特定商取引法上の表記）" },
      { k: "受付", v: "24時間・全国出張（公式FAQ）" },
      { k: "運営会社", v: "株式会社レスキュー" },
    ],
    memo:
      "公式の簡易料金表で鍵開け6,600円〜（税込）、特定商取引法上の表記で出張料4,400〜8,800円（税込・地域により異なる）とキャンセル規定、会社案内で運営会社（株式会社レスキュー）を確認。名称の似た「カギ110番（シェアリングテクノロジー株式会社）」とは別会社です。",
    memoDate: "2026年10月15日確認",
  },
  {
    id: "kagi-kyukyusha",
    slug: "kagi-kyukyusha",
    num: "1-4",
    catch: "全国の加盟店ネットワーク",
    name: "カギの救急車",
    intro: (
      <>
        カギの救急車は、株式会社ジェイクライプ（一般社団法人 カギの110番・カギの救急車）による
        <Hl>全国の街の鍵屋の加盟店ネットワーク</Hl>
        です。公式の料金目安では鍵開け（住宅一般）が11,000〜44,000円（税込）とされ、
        <Hl>実際の料金・営業時間は加盟店ごとに異なります</Hl>
        。公式は「作業前に総額を見積り、承諾のない追加料金は発生しない」と明記しています。多くの加盟店が24時間受付です。
      </>
    ),
    recommend: [
      "近隣の加盟店（街の鍵屋）への依頼を希望する方",
      "作業前に総額見積もりを取って納得してから依頼したい方",
      "複数社を自分で比較したうえで選びたい方",
    ],
    table: [
      { k: "鍵開け料金", v: "11,000〜44,000円（税込・公式目安）", note: "住宅一般の目安。実額は加盟店ごとに異なる" },
      { k: "受付時間", v: "多くの加盟店が24時間受付", note: "営業時間は店舗により異なる" },
      { k: "見積もり", v: "作業前に総額を見積もり・承諾のない追加料金なし（公式明記）" },
      { k: "運営", v: "株式会社ジェイクライプ（加盟店ネットワーク）" },
    ],
    memo:
      "公式グループの料金目安ページで鍵開け（住宅一般）11,000〜44,000円（税込）を確認（2026年7月時点）。料金・営業時間・支払い方法は加盟店ごとに異なるため、依頼時に担当加盟店へ総額と条件の確認が必要です。名前のよく似た別業者が複数あるため、運営会社名での確認をおすすめします。",
    memoDate: "2026年7月時点の調査",
  },
];

const compareRows = agents.map((a) => ({
  slug: a.slug,
  name: a.name,
  price:
    a.id === "kagi110ban"
      ? "11,000円〜（税込）"
      : a.id === "kagi-rescue"
        ? "6,600円〜（税込）＋出張料"
        : a.id === "kagi-kyukyusha"
          ? "11,000〜44,000円（税込・目安）"
          : "8,800円〜（税込）",
  time:
    a.id === "seikatsu-kyukyusha"
      ? "最短15分駆けつけ"
      : a.id === "kagi-kyukyusha"
        ? "多くの加盟店が24時間受付"
        : "24時間365日",
  point:
    a.id === "kagi110ban"
      ? "最短5分手配・全国47都道府県"
      : a.id === "seikatsu-kyukyusha"
        ? "全国約2,270店・見積キャンセル無料"
          : a.id === "kagi-rescue"
            ? "料金表を公式公開・出張料4,400〜8,800円"
            : "作業前に総額見積もり（公式明記）",
}));

const steps = [
  {
    t: "① 扉を止めているものを確認してから電話する",
    b: "鍵は回るか、扉はまったく動かないか数センチ開いて止まるか、隙間から金具が見えるか（見える場合は上部か中ほどか）、中に人やペットがいるか、の4点を確認してから電話すると、業者も必要な道具を持参できます。「鍵が開かない」とだけ伝えると錠の不具合を前提に準備されるため、現場で見立てをやり直すことになります。",
  },
  {
    t: "② 出張料・夜間料金を含めた総額の見積もりを取る",
    b: "広告の「◯◯円〜」は最低価格であり、実際の金額は作業の内容・出張距離・時間帯によって変わります。チェーンやガードの場合は、取り外しだけで済むのか、金具の交換や扉の調整まで含むのかで金額が変わります。取り外し後の復旧費が別途かかるかどうかも含め、内訳の分かる形で総額を提示してもらってください。",
  },
  {
    t: "③ 運営会社を確認する",
    b: "鍵業界には「カギ110番」「鍵の110番救急車」「カギの救急車」「カギの生活救急車」など名前のよく似たサービスが複数あり、運営会社はそれぞれ別です。依頼前にサービス名だけでなく運営会社名も確認することで、取り違えを防ぐことができます。",
  },
  {
    t: "④ 急ぎでない場合は複数社を比較する",
    b: "中に人がいる場合は急ぎの依頼になりますが、そうでない場合は2〜3社に状況を伝え、対応可否と金額を比較することをおすすめします。今回の4社はいずれも全国対応型で、松本市からも依頼できます（対応エリアは「長野県」としての一次確認値のため、詳細条件は各社へご確認ください）。チェーンやガードは建具側の部品のため、錠のみを扱う業者と扉まわりの金物まで扱う業者とで対応範囲が分かれます。同じ状況を伝え、対応の違いをご確認ください。",
  },
];

const faqs: AreaFaq[] = [
  {
    q: "松本市の鍵開け料金の相場はいくらですか？",
    a: "当サイトが一次確認した各社の公式表示では、鍵開けの基本料金はカギ110番11,000円〜、鍵のレスキュー6,600円〜（別途出張料4,400〜8,800円）、鍵の生活救急車8,800円〜（いずれも税込）、カギの救急車は公式目安11,000〜44,000円です。ただし、これらは最低価格または目安であり、鍵の種類（ディンプルキー等）・時間帯・出張距離で総額は変わります。チェーンやドアガードの取り外しは広告の料金区分に当てはまらない場合があるため、状況を伝えたうえで総額の見積もりを取ってください。",
    link: { href: "/ryokin/", label: "料金相場の詳細はこちら" },
  },
  {
    q: "鍵は回るのに扉が少ししか開きません。原因は何ですか？",
    a: "内側のドアチェーンやU字型のドアガードが掛かっている可能性が高い状況です。中にいる人が掛けた場合のほか、扉を閉めた際の振動で緩んだ金具が落ちた、ガードの軸が摩耗して自然に下りてきた、といった原因が考えられます。錠の不調とは対処が異なるため、電話の段階でその旨をお伝えください。",
    link: { href: "/kagi-mawaranai/", label: "鍵が回らないときの対処はこちら" },
  },
  {
    q: "ドアチェーンが外れなくなりました。自分で外せますか？",
    a: "おすすめしません。隙間から針金や定規を差し込む方法や力ずくで押し開ける方法は、扉や金具、枠を傷めて作業と費用が増える原因になります。専用の工具を使えば短時間で外せる作業のため、業者に状況を伝えて依頼するほうが、結果として費用を抑えられます。",
  },
  {
    q: "中に家族がいる状態でチェーンが掛かってしまいました。どうすればよいですか？",
    a: "電話の最初に「中に人がいる」とお伝えください。子どもや高齢のご家族、体調に不安のある方が中にいる場合は、作業の優先度も進め方も変わります。中の方がご自身で外せる状態かどうか（外し方が分かるか、手が届くか）も伝えると、到着前に電話で対応方法を案内してもらえる場合があります。あわせて、火を使ったままになっていないかもご確認ください。",
    link: { href: "/shimedashi/", label: "締め出されたときの対処はこちら" },
  },
  {
    q: "ドアガードごと交換してもらえますか？",
    a: "対応できる場合が多い作業です。掛かりが甘くなった金具や軸がぐらつくガードは、締め直しまたは交換で直ります。ただし、丁番の緩みやドアクローザーの閉まる勢いなど、扉の側に原因がある場合は、金具を交換しても再発するため、扉の建て付けの調整が必要です。",
    link: { href: "/door-closer/", label: "ドアクローザーの不具合はこちら" },
  },
  {
    q: "深夜や早朝でも松本市に来てくれますか？",
    a: "カギ110番・鍵のレスキューは24時間365日受付を掲げており、カギの救急車も多くの加盟店が24時間受付です。深夜帯は割増料金や到着時間の変動が生じる場合があるため、電話の際に深夜料金の有無と到着目安を確認してから依頼することをおすすめします。なお各社の対応エリアは「長野県」としての一次確認値のため、松本市での詳細は依頼時に各社へご確認ください。",
  },
];

// 強調ハイライト（BEST-FIT型の下線マーカーを現サイト配色で）
function Hl({ children }: { children: React.ReactNode }) {
  return (
    <strong className="font-bold bg-[linear-gradient(transparent_65%,rgba(255,152,0,0.30)_65%)]">
      {children}
    </strong>
  );
}

// h2（BEST-FIT型：グレー地＋左グラデーションボーダー）
function H2({ id, num, children }: { id: string; num: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-20 mt-14 mb-6 bg-[#EAF1F8] border-l-[6px] border-transparent pl-5 pr-4 py-3 text-lg md:text-2xl font-black leading-snug tracking-wide text-foreground"
      style={{ borderImage: "linear-gradient(to bottom, #1B4F8A, #3E86C9) 1" }}
    >
      {num}｜{children}
    </h2>
  );
}

// h4（左に縦グラデーションバー）
function H4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="relative pl-4 mt-8 mb-3 text-sm md:text-lg font-bold text-foreground">
      <span
        className="absolute left-0 top-0 bottom-0 w-[4px] rounded-l-[2px]"
        style={{ background: "linear-gradient(180deg, #1B4F8A 0%, #3E86C9 100%)" }}
      />
      {children}
    </h4>
  );
}

export default function AreaPageMatsumoto() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】松本市の鍵開け・鍵交換業者おすすめ4選｜ドアチェーン・ドアガードが原因で開かないときの見分け方も解説する鍵屋比較",
    description:
      "松本市で鍵開け・鍵交換を依頼できる鍵業者4社を、料金・受付時間の一次確認値で比較。ドアチェーン・ドアガードが原因で扉が開かないときの見分け方、避けるべき対処、再発の防ぎ方も解説します。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-09-25T00:00:00+09:00",
    dateModified: `${UPDATED_ISO}T00:00:00+09:00`,
    author: { "@type": "Organization", name: "鍵トラブルナビ編集部", url: SITE },
    publisher: { "@type": "Organization", name: "鍵トラブルナビ", url: SITE },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}${PATH}` },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "鍵トラブルナビ", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "松本市の鍵開け・鍵交換業者おすすめ4選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#top5",
      label: "1｜松本市で依頼できるおすすめの鍵業者4選",
      sub: [
        { href: "#hikaku", label: "松本市の鍵業者の一覧比較表" },
        ...agents.map((a) => ({ href: `#${a.id}`, label: `${a.num}｜【${a.catch}】${a.name}` })),
      ],
    },
    { href: "#isogi", label: "2｜急いで鍵開けを依頼したい場合" },
    { href: "#shinya", label: "3｜深夜・早朝のトラブルの場合" },
    { href: "#meikaku", label: "4｜料金を事前に確認したい場合" },
    { href: "#jisha", label: "5｜自社スタッフによる対応を希望する場合" },
    { href: "#matsumoto-tips", label: "6｜松本市で鍵業者に依頼する前の確認事項（ドアチェーン・ドアガードが原因で開かないときの見分け方）" },
    { href: "#erabikata", label: "7｜鍵業者の選び方" },
    { href: "#faq", label: "8｜松本市の鍵業者でよくある質問" },
    { href: "#matome", label: "9｜まとめ" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="bg-white text-foreground">
        <div className="mx-auto max-w-4xl px-4 pt-4 pb-12 md:pb-16">
          {/* パンくず */}
          <nav aria-label="パンくず" className="text-xs text-text-muted mb-4">
            <ol className="flex flex-wrap gap-1">
              <li>
                <Link href="/" className="hover:underline">鍵トラブルナビ</Link>
              </li>
              <li>/</li>
              <li className="text-foreground">松本市の鍵開け・鍵交換業者おすすめ4選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-foreground">
              【2026年最新】松本市の鍵開け・鍵交換業者おすすめ4選｜ドアチェーン・ドアガードが原因で開かないときの見分け方も解説する鍵屋比較
            </h1>
            <div>
              <span className="inline-block rounded-[2px] bg-primary px-2 py-1 text-xs font-bold tracking-wide text-white">
                エリア別 鍵業者まとめ
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold tracking-wide text-text-muted">
              <span>
                更新日：<time dateTime={UPDATED_ISO}>{UPDATED}</time>
              </span>
              <span>PR掲載も含みます</span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {["松本市", "ドアチェーン", "ドアガード", "扉が開かない", "業者比較"].map((t) => (
                <li
                  key={t}
                  className="rounded-[2px] border border-border bg-white px-3 py-1.5 text-xs md:text-sm font-bold tracking-wide text-foreground shadow-[0px_2px_2px_0px_rgba(0,0,0,0.12)]"
                >
                  {t}
                </li>
              ))}
            </ul>
            <figure className="overflow-hidden rounded-[2px]">
              <Image
                src="/images/kv-top.jpg"
                alt="松本市の鍵開け・鍵交換業者の比較"
                width={1024}
                height={1024}
                className="w-full h-52 md:h-72 object-cover"
                priority
              />
            </figure>
          </header>

          {/* 導入文 */}
          <div className="mt-6 leading-loose text-foreground">
            <p className="mb-4">
              松本市は長野県の中部、松本盆地に開けたまちで、北アルプスへの玄関口としても知られます。市街地には歴史のある建物と新しい住宅が混在しており、玄関まわりの造りもさまざまです。鍵のトラブルというと錠そのものの不具合を想定しがちですが、実際には「鍵は回っているのに扉が数センチで止まる」というご相談も一定数あります。この場合、扉を止めているのは錠ではなく、内側に付いたドアチェーンやドアガードであることが少なくありません。
            </p>
            <p>
              本記事では、松本市内から依頼できる主要な鍵業者4社を、当サイト編集部が各社公式サイト等で一次確認した料金・受付時間・運営会社の情報だけで比較しました。あわせて、扉が少ししか開かないときにドアチェーン・ドアガードが原因かどうかを見分ける方法と、ご自身で行うべきでないこと、業者に伝えるべき内容を整理しています。
            </p>
          </div>

          {/* Contents 目次ボックス */}
          <nav
            aria-label="目次"
            className="mt-10 grid gap-4 rounded-[2px] border border-border px-5 py-8 md:gap-6 md:px-16 md:py-10"
          >
            <div className="text-2xl md:text-[32px] font-bold">
              <span className="bg-gradient-to-r from-primary to-[#3E86C9] bg-clip-text text-transparent">
                Contents
              </span>
            </div>
            <ol className="grid gap-2">
              {toc.map((item) => (
                <li key={item.href} className="grid gap-2">
                  <a
                    href={item.href}
                    className="w-fit text-sm md:text-base font-bold tracking-wide leading-relaxed hover:underline"
                  >
                    {item.label}
                  </a>
                  {item.sub && (
                    <ol className="grid gap-2 pl-4 md:pl-8">
                      {item.sub.map((s) => (
                        <li key={s.href}>
                          <a
                            href={s.href}
                            className="w-fit text-xs md:text-sm tracking-wide leading-relaxed hover:underline"
                          >
                            {s.label}
                          </a>
                        </li>
                      ))}
                    </ol>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* 1｜業者一覧 */}
          <H2 id="top5" num="1">松本市で依頼できるおすすめの鍵業者4選</H2>
          <p className="leading-loose mb-2">
            松本市内から依頼できる主要な鍵業者4社を紹介します。掲載している料金・受付時間・運営会社は、いずれも編集部が各社公式サイト等で一次確認した値です（確認日は各社の欄に記載）。各社の対応エリアは「長野県」としての一次確認値のため、松本市での詳細な対応可否・条件は依頼時に各社へご確認ください。実際の総額は鍵の種類・時間帯・出張距離で変わるため、必ず作業前に見積もりで確認してください。
          </p>
          <p className="text-sm text-text-muted mb-8">
            ※近隣エリアの比較は<Link href="/area/nagano/" className="text-primary underline">長野版</Link>・<Link href="/area/kofu/" className="text-primary underline">甲府版</Link>・<Link href="/area/joetsu/" className="text-primary underline">上越市版</Link>もご覧ください。
          </p>

          <h3 id="hikaku" className="scroll-mt-20 relative pb-3 mb-5 border-b-4 border-[#EAF1F8] text-base md:text-[22px] font-bold text-foreground">
            松本市の鍵業者の一覧比較表
            <span className="absolute bottom-[-4px] left-0 h-[4px] w-24 bg-gradient-to-r from-primary to-[#3E86C9]" />
          </h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 whitespace-nowrap text-left">業者名</th>
                  <th className="border border-border px-3 py-2 whitespace-nowrap text-left">鍵開け料金（一次確認値）</th>
                  <th className="border border-border px-3 py-2 whitespace-nowrap text-left">受付・スピード</th>
                  <th className="border border-border px-3 py-2 whitespace-nowrap text-left">特徴</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r, i) => (
                  <tr key={r.slug} className={i % 2 === 1 ? "bg-[#F5F8FC]" : "bg-white"}>
                    <td className="border border-border px-3 py-2 font-bold whitespace-nowrap">
                      <Link href={`/agents/${r.slug}/`} className="text-primary underline">
                        {r.name}
                      </Link>
                    </td>
                    <td className="border border-border px-3 py-2">{r.price}</td>
                    <td className="border border-border px-3 py-2">{r.time}</td>
                    <td className="border border-border px-3 py-2">{r.point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-10">
            ※料金は各社公式サイト等の一次確認値（最低価格・目安）です。鍵の種類・時間帯・出張距離により総額は変動します。
          </p>

          {/* 各社カード */}
          {agents.map((a) => (
            <section key={a.id} id={a.id} className="scroll-mt-20 mb-16">
              <h3 className="relative pb-3 mb-5 border-b-4 border-[#EAF1F8] text-base md:text-[22px] font-bold leading-snug text-foreground">
                {a.num}｜【{a.catch}】{a.name}
                <span className="absolute bottom-[-4px] left-0 h-[4px] w-24 bg-gradient-to-r from-primary to-[#3E86C9]" />
              </h3>

              <AgentIntro slug={a.slug} name={a.name}>{a.intro}</AgentIntro>

              <H4>このような方におすすめです</H4>
              <div className="rounded-[2px] bg-[#EFF3F8] px-5 py-4 md:px-6">
                <ul className="text-xs md:text-sm leading-[1.9] tracking-wide">
                  {a.recommend.map((r) => (
                    <li key={r}>・{r}</li>
                  ))}
                </ul>
              </div>

              <H4>料金／内容</H4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    {a.table.map((row, i) => (
                      <tr key={row.k} className={i % 2 === 1 ? "bg-[#F5F8FC]" : "bg-white"}>
                        <th className="border border-border px-3 py-2 whitespace-nowrap bg-[#EAF1F8] text-left font-bold w-32 md:w-40">
                          {row.k}
                        </th>
                        <td className="border border-border px-3 py-2">
                          <span className="font-bold">{row.v}</span>
                          {row.note && (
                            <span className="block text-xs text-text-muted mt-1">{row.note}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <H4>編集部の一次確認メモ（{a.memoDate}）</H4>
              <div className="rounded-[2px] border border-border bg-white px-5 py-4 md:px-6">
                <p className="text-xs md:text-sm leading-relaxed text-foreground">{a.memo}</p>
              </div>

              <div className="mt-6">
                <Link
                  href={`/agents/${a.slug}/`}
                  className="block w-full md:w-80 mx-auto rounded-[2px] bg-primary hover:bg-primary-dark transition-colors px-4 py-4 text-center text-[15px] font-bold text-white"
                >
                  {a.name}の詳細ページを見る
                </Link>
              </div>
            </section>
          ))}

          {/* 2｜急ぎ */}
          <H2 id="isogi" num="2">松本市で急いで鍵開けを依頼したい場合</H2>
          <p className="leading-loose mb-4">
            扉の前で押したり引いたりを繰り返しても、時間が過ぎるだけです。原因が錠でない場合は、その場で試せることも限られます。駆けつけ時間の目安を公表している業者としては、<Hl>鍵の生活救急車が最短15分の駆けつけと全国約2,270店の拠点網</Hl>を掲げています。拠点数が多いことは、到着までの時間を短くする要素の一つです。また、<Hl>カギ110番は電話一本で最短5分の手配</Hl>（全国47都道府県の加盟店ネットワークから近隣の業者を手配する仕組み）を掲げています。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※いずれも「最短」の目安であり、拠点からの距離・交通状況・繁忙状況で到着時間は変わります。急ぎの場合も、電話の際に到着目安を確認してから依頼することをおすすめします。
          </p>

          {/* 3｜深夜 */}
          <H2 id="shinya" num="3">深夜・早朝の鍵トラブルの場合</H2>
          <p className="leading-loose mb-4">
            家に入れないまま夜を越すかどうかは、早い時間に判断することをおすすめします。中に人がいる状態でチェーンが掛かってしまった場合は、時間帯にかかわらず急いで対応する必要があります。一次確認値では<Hl>カギ110番・鍵のレスキューが24時間365日受付</Hl>を掲げており、カギの救急車も多くの加盟店が24時間受付です。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※24時間受付の業者でも、深夜帯は割増料金が加わる場合や、到着時間が変動する場合があります。電話の際に深夜料金の有無と総額を確認してから依頼することをおすすめします。
          </p>

          {/* 4｜料金明確 */}
          <H2 id="meikaku" num="4">料金を事前に確認したい場合</H2>
          <p className="leading-loose mb-4">
            チェーンやガードの取り外しは、錠を開ける作業とは内容が異なります。取り外しだけで済むのか、金具の交換まで含むのかで金額が変わるため、事前に内訳を確認することが重要です。<Hl>鍵のレスキューは鍵開け6,600円〜（税込）と出張料4,400〜8,800円（税込・地域により異なる）を公式サイトで分けて公開</Hl>しています。また、<Hl>鍵の生活救急車は出張・見積もり・キャンセルが無料</Hl>のため、提示された金額を見てから依頼するかどうかを判断できます。
          </p>
          <p className="leading-loose mb-4">
            どの業者に依頼する場合も、作業前に出張料・部材費・深夜割増まで含めた総額の見積もりをご確認ください。料金の目安は<Link href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場ページ</Link>で解説しています。
          </p>

          {/* 5｜自社スタッフ */}
          <H2 id="jisha" num="5">自社スタッフによる対応を希望する場合</H2>
          <p className="leading-loose mb-4">
            鍵業者には、依頼を受けて加盟店を手配する「紹介型」と、自社のスタッフが直接対応する「自社対応型」があります。紹介型は対応範囲が広い一方、店舗によって技術・対応に差が出ることがあります。チェーンやガードの金具は建具側の部品のため、錠のみを扱う業者と、扉まわりの金物まで扱う業者とでは対応範囲が異なります。電話の段階で「錠ではなくチェーンが掛かっている」と伝え、対応可能かどうかをご確認ください。
          </p>

          {/* 6｜エリア特有 */}
          <H2 id="matsumoto-tips" num="6">松本市で鍵業者に依頼する前の確認事項（ドアチェーン・ドアガードが原因で開かないときの見分け方）</H2>
          <p className="leading-loose mb-4">
            鍵が回り、施錠は解けているにもかかわらず扉が数センチで止まる場合は、内側に付いた<Hl>ドアチェーン、あるいはU字型のドアガード</Hl>が掛かっている可能性があります。掛かる原因としては、中にいる人が掛けた場合、外出時に扉を勢いよく閉めた拍子に緩んだ金具が振動で落ちた場合、ガードの軸が摩耗して扉の開閉のたびに自然と下りてくるようになっていた場合などがあります。原因が錠ではないのに「鍵が開かない」と伝えると、業者も錠の不具合を前提に準備するため、現場で見立てをやり直すことになります。錠の不調との切り分けは<Link href="/kagi-mawaranai/" className="text-primary underline">鍵が回らないときの対処</Link>が参考になります。
          </p>
          <p className="leading-loose mb-4">
            見分け方は難しくありません。開いた数センチの隙間から中をのぞくと、金具が斜めに渡っているのが見えます。<Hl>引っかかる位置が扉の上部であればドアガード、中ほどの高さで金属の鎖が見えればドアチェーン</Hl>である場合が多く、扉を押したときに金属が当たる音がするかどうかも手がかりになります。あわせて、最初に中に人がいるかどうかを確認してください。子どもや高齢のご家族、ペットが中にいる場合は、その旨を電話の最初にお伝えください。作業の優先度も進め方も変わります。締め出し全般の対応は<Link href="/shimedashi/" className="text-primary underline">締め出されたときの対処</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4">
            ご自身で行うべきでないことが2つあります。1つは、隙間から針金や定規を差し込んで外そうとすることです。<Hl>うまくいかないまま扉や金具を傷めると、その後の作業が増えて費用も上がります</Hl>。もう1つは、力ずくで押し開けることです。金具は外れる可能性がありますが、枠がゆがむと錠の掛かり方まで悪くなり、結果として扉全体の調整が必要になります。業者に依頼した場合は、隙間から工具を入れて金具を外す方法や、状況によっては金具ごと取り外す方法が取られます。取り外し後の復旧や部品の交換には別途費用がかかるため、作業前に範囲と金額をご確認ください。金額の目安は<Link href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</Link>で確認できます。
          </p>
          <p className="leading-loose mb-4">
            解錠後は、再発を防ぐ対策を行ってください。掛かりが甘くなった金具や軸がぐらつくガードは<Hl>消耗した部品のため、締め直しまたは交換で直します</Hl>。外出時にチェーンを掛けない習慣にするだけでも、外から掛かってしまう事故は防げます。自然に落ちてくる場合は、扉の側に原因があることもあります。丁番が緩んで扉が下がっている場合や、ドアクローザーの閉まる勢いが強すぎる場合は、金具を交換しても再発するため、扉の建て付けを調整します。扉の閉まり方の調整は<Link href="/door-closer/" className="text-primary underline">ドアクローザーの不具合</Link>、防犯のために補助錠を追加する場合は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>で解説しています。
          </p>

          {/* 7｜選び方 */}
          <H2 id="erabikata" num="7">松本市の鍵業者の選び方</H2>
          <p className="leading-loose mb-6">
            鍵業者を選ぶ際は、次の4つの手順で確認することをおすすめします。原因が錠ではない依頼では、最初に伝える内容によって到着後の作業が大きく変わります。
          </p>
          {steps.map((s) => (
            <section key={s.t} className="mb-8">
              <h3 className="relative pb-3 mb-4 border-b-4 border-[#EAF1F8] text-base md:text-[22px] font-bold text-foreground">
                {s.t}
                <span className="absolute bottom-[-4px] left-0 h-[4px] w-24 bg-gradient-to-r from-primary to-[#3E86C9]" />
              </h3>
              <p className="leading-loose text-sm md:text-base">{s.b}</p>
            </section>
          ))}

          {/* 8｜FAQ */}
          <H2 id="faq" num="8">松本市の鍵業者でよくある質問</H2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-[2px] border border-border">
                <p className="flex gap-3 px-5 py-4 font-bold text-foreground bg-[#EFF3F8]">
                  <span className="text-primary shrink-0">Q.</span>
                  {f.q}
                </p>
                <p className="flex gap-3 px-5 py-4 text-sm leading-relaxed">
                  <span className="text-accent font-bold shrink-0">A.</span>
                  <span>
                    {f.a}
                    {f.link && (
                      <>
                        {" "}
                        <Link href={f.link.href} className="text-primary underline">{f.link.label}</Link>
                      </>
                    )}
                  </span>
                </p>
              </div>
            ))}
          </div>

          {/* 9｜まとめ */}
          <H2 id="matome" num="9">まとめ</H2>
          <p className="leading-loose mb-4">
            松本市で鍵開け・鍵交換を依頼できる主要4社を、一次確認した料金・受付時間・運営会社の情報で比較しました。到着の早さを重視する場合は鍵の生活救急車やカギ110番、深夜・早朝の受付にはカギ110番・鍵のレスキュー、料金の明確さを重視する場合は鍵のレスキューというように、目的によって適した業者は異なります。
          </p>
          <p className="leading-loose mb-8">
            鍵は回るのに扉が数センチで止まる場合は、錠ではなくドアチェーンやドアガードが原因の可能性があります。隙間から金具を確認し、中に人がいるかどうかを最初に伝えてください。針金で外そうとしたり、力ずくで押し開けたりすることは避けてください。解錠後は金具の締め直しまたは交換で再発を防ぎ、自然に落ちてくる場合は扉の建て付けを確認することをおすすめします。これらを踏まえたうえで、本記事の一次確認値を参考に、目的と予算に合った業者をお選びください。
          </p>
          <div className="rounded-[2px] bg-primary text-white p-6 text-center">
            <p className="font-bold text-lg mb-2">鍵のトラブルでお困りの方へ</p>
            <p className="text-white/80 text-sm mb-4">各社の詳細ページと料金の一次確認値を比較し、条件に合う業者をお選びください。</p>
            <Link
              href="/agents/"
              className="inline-block rounded-[2px] bg-secondary hover:bg-secondary-dark transition-colors px-8 py-3 font-bold text-white"
            >
              鍵業者の一覧・比較を見る
            </Link>
          </div>

          {/* タグ */}
          <div className="mt-12">
            <p className="text-sm font-bold text-text-muted mb-3">タグ</p>
            <ul className="flex flex-wrap gap-2">
              {["松本市", "ドアチェーン", "U字ロック", "扉が数センチで止まる", "建て付け", "エリア別"].map((t) => (
                <li
                  key={t}
                  className="rounded-[2px] border border-border bg-white px-3 py-1.5 text-xs md:text-sm font-bold tracking-wide text-foreground shadow-[0px_2px_2px_0px_rgba(0,0,0,0.12)]"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* 他エリア */}
          <div className="mt-10">
            <p className="text-sm font-bold text-text-muted mb-3">他エリアの鍵業者まとめ</p>
            <ul className="grid gap-3 md:grid-cols-3">
              {[
                { href: "/area/nagano/", label: "長野の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/kofu/", label: "甲府の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/joetsu/", label: "上越市の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/niigata/", label: "新潟の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/toyama/", label: "富山の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/kanazawa/", label: "金沢の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/gifu/", label: "岐阜の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/shizuoka/", label: "静岡の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/hamamatsu/", label: "浜松の鍵開け・鍵交換業者おすすめ4選" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block rounded-[2px] border border-border bg-white px-4 py-3 text-sm font-bold text-primary hover:bg-[#F5F8FC] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 関連記事 */}
          <div className="mt-10">
            <p className="text-sm font-bold text-text-muted mb-3">関連記事</p>
            <ul className="grid gap-3 md:grid-cols-2">
              {[
                { href: "/kagi-mawaranai/", label: "鍵が回らないときの対処" },
                { href: "/door-closer/", label: "ドアクローザーの不具合" },
                { href: "/hojo-jou/", label: "補助錠の選び方" },
                { href: "/shimedashi/", label: "締め出されたときの対処" },
                { href: "/doorknob-koukan/", label: "ドアノブ交換" },
                { href: "/ryokin/", label: "鍵開け・鍵交換の料金相場" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block rounded-[2px] border border-border bg-white px-4 py-3 text-sm font-bold text-primary hover:bg-[#F5F8FC] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </>
  );
}
