import AgentIntro from "@/components/AgentIntro";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/hakodate/";
const UPDATED = "2026年10月15日";
const UPDATED_ISO = "2026-10-15";

export const metadata: Metadata = {
  title: {
    absolute:
      "【2026年最新】函館市の鍵開け・鍵交換業者おすすめ4選｜旅行中にレンタカーや宿の鍵で困ったとき最初に連絡する先の順番も解説する鍵屋比較｜鍵トラブルナビ",
  },
  description:
    "函館市で鍵開け・鍵交換を依頼できる鍵業者4社を一次確認値で比較。カギ110番（鍵開け11,000円〜）・鍵の生活救急車（最短15分）・鍵のレスキュー・カギの救急車の料金と受付時間、旅行中にレンタカーや宿泊先の鍵で困った場合に、自分で業者へ依頼する前に連絡すべき先の順番まで、編集部が中立的な立場でまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】函館市の鍵開け・鍵交換業者おすすめ4選｜旅行中にレンタカーや宿の鍵で困ったとき最初に連絡する先の順番も解説する鍵屋比較",
    description:
      "函館市で鍵開け・鍵交換を依頼できる鍵業者4社を、料金・受付時間の一次確認値で比較。旅行中にレンタカーや宿泊先の鍵で困った場合に、自分で業者へ依頼する前に連絡する先の順番も解説します。",
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
        で、24時間365日受付・電話一本で最短5分の手配を掲げています。全国47都道府県の加盟店ネットワークが対象のため、函館市内の依頼でも近隣の加盟店が手配される仕組みです。見積もりは無料で、出張料・作業費・部材費を含めた金額を事前に提示する明朗会計を掲げています。
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
      { k: "対応エリア", v: "全国47都道府県（北海道対応）", note: "北海道対応の一次確認値。函館市での詳細な対応可否・条件は依頼時に各社へ確認" },
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
    t: "① その鍵は誰の持ち物かを確かめる",
    b: "旅行中の鍵トラブルでは、困っている鍵が自分の持ち物とは限りません。レンタカーの鍵は借りている車のもの、宿泊先の部屋の鍵は宿のものです。借りている鍵については、貸主に先に連絡することが原則です。自分で鍵業者を手配すると、費用や車両・設備の扱いをめぐってトラブルになることがあります。自分で業者を手配するのは、自宅の鍵をなくした場合に限られます。賃貸物件にお住まいの場合は、その場合も業者より先に管理会社・大家へ連絡することが基本です。",
  },
  {
    t: "② 出張料・夜間料金を含めた総額の見積もりを取る",
    b: "広告に記載の「◯◯円〜」は最低価格であり、実際の金額は鍵の種類・出張距離・時間帯によって変わります。旅先から戻った夜に自宅で依頼する場合は、深夜割増の有無によって総額が大きく変わります。作業前に、出張料・部材費・深夜割増まで含めた総額を必ずご確認ください。見積もり無料・キャンセル無料の業者であれば、金額を確認したうえで依頼を見送ることもできます。",
  },
  {
    t: "③ 運営会社を確認する",
    b: "鍵業界には「カギ110番」「鍵の110番救急車」「カギの救急車」「カギの生活救急車」など名前のよく似たサービスが複数あり、運営会社はそれぞれ別です。依頼前にサービス名だけでなく運営会社名も確認することで、取り違えを防ぐことができます。",
  },
  {
    t: "④ 急ぎでない場合は複数社を比較する",
    b: "締め出しなどの緊急時以外は、2〜3社から見積もりを取り、総額・条件を比較することをおすすめします。旅先でなくした自宅の鍵の交換や、予備の鍵の作製は日程に余裕を持って依頼できるため、時間をかけて比較することをおすすめします。今回の4社はいずれも全国対応型で、函館市からも依頼できます（対応エリアは「北海道」としての一次確認値のため、詳細条件は各社へご確認ください）。",
  },
];

const faqs: AreaFaq[] = [
  {
    q: "函館市の鍵開け料金の相場はいくらですか？",
    a: "当サイトが一次確認した各社の公式表示では、鍵開けの基本料金はカギ110番11,000円〜、鍵のレスキュー6,600円〜（別途出張料4,400〜8,800円）、鍵の生活救急車8,800円〜（いずれも税込）、カギの救急車は公式目安11,000〜44,000円です。ただし、これらは最低価格または目安であり、鍵の種類（ディンプルキー等）・時間帯・出張距離で総額は変わります。なお、レンタカーや宿泊先の鍵は借りている側で勝手に手配できないことが多いため、料金を調べる前に、まず貸主へご連絡ください。",
    link: { href: "/ryokin/", label: "料金相場の詳細はこちら" },
  },
  {
    q: "レンタカーの鍵を車内に閉じ込めました。鍵業者に依頼してもよいですか？",
    a: "まずレンタカー会社の窓口へ連絡してください。借りている車は自分の所有物ではないため、会社に断りなく解錠を手配すると、費用の負担や車両の扱いをめぐってトラブルになることがあります。多くのレンタカー会社は貸出時の書面や車内にトラブル時の連絡先を記載しており、会社側でロードサービスや代車を手配してもらえる場合があります。連絡の際は、借りた店舗名・車のナンバー・現在地を伝えられるよう準備してください。",
    link: { href: "/car-inlock/", label: "車のインロックの対処はこちら" },
  },
  {
    q: "レンタカーのスマートキーが反応しなくなりました。どうすればよいですか？",
    a: "電池切れの可能性があります。多くのスマートキーには金属のメカニカルキーが内蔵されており、ドアを手動で開けられる場合がありますが、開け方も始動の方法も車種によって異なります。借りている車のため、自分で分解したり電池を交換したりする前に、レンタカー会社へ連絡して指示を仰いでください。車内の取扱説明書に手順が記載されている場合もあります。",
    link: { href: "/smart-key-denchi/", label: "スマートキー電池切れの対処はこちら" },
  },
  {
    q: "宿泊先の部屋の鍵をなくしました。誰に伝えればよいですか？",
    a: "宿のフロントや管理者へすぐに伝えてください。部屋の鍵は宿の設備であり、交換や再発行の判断も宿側が行います。無人チェックインでキーボックスを使う宿の場合も、掲示や予約時の案内にある連絡先へご連絡ください。自分で鍵業者を手配することは適切ではありません。チェックアウト後に紛失に気づいた場合も、まず宿へご連絡ください。",
    link: { href: "/key-box-kanri/", label: "キーボックスでの鍵管理の注意点はこちら" },
  },
  {
    q: "旅行中に自宅の鍵をなくしました。帰る日までに何をすればよいですか？",
    a: "自宅の鍵は自分の持ち物のため、ご自身で対応するケースです。立ち寄った施設や利用した交通機関へ忘れ物の問い合わせをし、最寄りの交番・警察署で遺失届を提出してください。そのうえで帰宅時刻から逆算し、家に入れない可能性が高い場合は移動中に業者へ電話して、到着目安と時間帯による割増を確認しておくと、玄関の前で待つ時間を短くできます。賃貸物件の場合は、管理会社・大家への連絡を優先してください。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処法はこちら" },
  },
  {
    q: "深夜や早朝でも函館市に来てくれますか？",
    a: "カギ110番・鍵のレスキューは24時間365日受付を掲げており、カギの救急車も多くの加盟店が24時間受付です。深夜帯は割増料金や到着時間の変動が生じる場合があるため、電話の際に深夜料金の有無と到着目安を確認してから依頼することをおすすめします。なお各社の対応エリアは「北海道」としての一次確認値のため、函館市での詳細は依頼時に各社へご確認ください。",
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

export default function AreaPageHakodate() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】函館市の鍵開け・鍵交換業者おすすめ4選｜旅行中にレンタカーや宿の鍵で困ったとき最初に連絡する先の順番も解説する鍵屋比較",
    description:
      "函館市で鍵開け・鍵交換を依頼できる鍵業者4社を、料金・受付時間の一次確認値で比較。旅行中にレンタカーや宿泊先の鍵で困った場合に、自分で業者へ依頼する前に連絡する先の順番も解説します。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-09-17T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "函館市の鍵開け・鍵交換業者おすすめ4選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#top5",
      label: "1｜函館市で依頼できるおすすめの鍵業者4選",
      sub: [
        { href: "#hikaku", label: "函館市の鍵業者の一覧比較表" },
        ...agents.map((a) => ({ href: `#${a.id}`, label: `${a.num}｜【${a.catch}】${a.name}` })),
      ],
    },
    { href: "#isogi", label: "2｜急いで鍵開けを依頼したい場合" },
    { href: "#shinya", label: "3｜深夜・早朝のトラブルの場合" },
    { href: "#meikaku", label: "4｜料金を事前に確認したい場合" },
    { href: "#jisha", label: "5｜自社スタッフによる対応を希望する場合" },
    { href: "#tips", label: "6｜函館市で鍵業者に依頼する前の確認事項（借りている鍵は貸主への連絡を優先）" },
    { href: "#erabikata", label: "7｜鍵業者の選び方" },
    { href: "#faq", label: "8｜函館市の鍵業者でよくある質問" },
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
              <li className="text-foreground">函館市の鍵開け・鍵交換業者おすすめ4選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-foreground">
              【2026年最新】函館市の鍵開け・鍵交換業者おすすめ4選｜旅行中にレンタカーや宿の鍵で困ったとき最初に連絡する先の順番も解説する鍵屋比較
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
              {["函館市", "鍵開け", "鍵交換", "旅先の鍵トラブル", "業者比較"].map((t) => (
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
                alt="函館市の鍵開け・鍵交換業者の比較"
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
              函館市は北海道の南部にある港まちで、市外から訪れて数日を過ごす方が多いエリアです。宿に泊まり、レンタカーを借りて市内や近郊を回る旅行中に起きる鍵のトラブルは、自宅で起きるトラブルとは性質が異なります。困っている鍵が自分の持ち物とは限らないためです。レンタカーの鍵は借りている車のもの、部屋の鍵は宿のものです。持ち主が別にいる鍵を自分の判断で開けさせると、あとから費用や設備の扱いをめぐってトラブルになることがあります。
            </p>
            <p>
              本記事では、函館市内から依頼できる主要な鍵業者4社を、当サイト編集部が各社公式サイト等で一次確認した料金・受付時間・運営会社の情報だけで比較しました。あわせて、旅行中にレンタカーや宿泊先の鍵で困った場合に、自分で業者へ依頼する前にどこへ連絡すべきか、その順番を整理しています。
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
          <H2 id="top5" num="1">函館市で依頼できるおすすめの鍵業者4選</H2>
          <p className="leading-loose mb-2">
            函館市内から依頼できる主要な鍵業者4社を紹介します。掲載している料金・受付時間・運営会社は、いずれも編集部が各社公式サイト等で一次確認した値です（確認日は各社の欄に記載）。各社の対応エリアは「北海道」としての一次確認値のため、函館市での詳細な対応可否・条件は依頼時に各社へご確認ください。実際の総額は鍵の種類・時間帯・出張距離で変わるため、必ず作業前に見積もりで確認してください。
          </p>
          <p className="text-sm text-text-muted mb-8">
            ※近隣エリアの比較は<Link href="/area/sapporo/" className="text-primary underline">札幌版</Link>・<Link href="/area/asahikawa/" className="text-primary underline">旭川市版</Link>・<Link href="/area/aomori/" className="text-primary underline">青森版</Link>もご覧ください。
          </p>

          <h3 id="hikaku" className="scroll-mt-20 relative pb-3 mb-5 border-b-4 border-[#EAF1F8] text-base md:text-[22px] font-bold text-foreground">
            函館市の鍵業者の一覧比較表
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
          <H2 id="isogi" num="2">函館市で急いで鍵開けを依頼したい場合</H2>
          <p className="leading-loose mb-4">
            旅先から戻ったものの自宅の玄関が開かないなど、自宅の鍵で急ぎの対応が必要な場合は、駆けつけ時間の目安を公表している業者が候補となります。<Hl>鍵の生活救急車は最短15分の駆けつけと全国約2,270店の拠点網</Hl>を掲げています。拠点数が多いことは、到着までの時間を短くする要素の一つです。また、<Hl>カギ110番は電話一本で最短5分の手配</Hl>（全国47都道府県の加盟店ネットワークから近隣の業者を手配する仕組み）を掲げています。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※いずれも「最短」の目安であり、拠点からの距離・交通状況・繁忙状況で到着時間は変わります。急ぎの場合も、電話の際に到着目安を確認してから依頼することをおすすめします。
          </p>

          {/* 3｜深夜 */}
          <H2 id="shinya" num="3">深夜・早朝の鍵トラブルの場合</H2>
          <p className="leading-loose mb-4">
            旅程を終えて遅い時間に帰宅し、その時点で鍵がないことに気づくのは、旅行の前後に起こりがちなトラブルです。深夜・早朝の依頼では、まず24時間受付かどうかが重要です。一次確認値では、<Hl>カギ110番・鍵のレスキューが24時間365日受付</Hl>を掲げており、カギの救急車も多くの加盟店が24時間受付です。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※24時間受付の業者でも、深夜帯は割増料金が加わる場合や、到着時間が変動する場合があります。電話の際に深夜料金の有無と総額を確認してから依頼することをおすすめします。
          </p>

          {/* 4｜料金明確 */}
          <H2 id="meikaku" num="4">料金を事前に確認したい場合</H2>
          <p className="leading-loose mb-4">
            旅先でなくした自宅の鍵は、開けてもらうだけで済むのか、防犯のためにシリンダーまで交換するのかによって、金額の幅が大きく変わります。そのため、内訳を示す方針の業者かどうかが重要になります。<Hl>鍵のレスキューは鍵開け6,600円〜（税込）と出張料4,400〜8,800円（税込・地域により異なる）を公式サイトで分けて公開</Hl>しています。また、<Hl>鍵の生活救急車は出張・見積もり・キャンセルが無料</Hl>のため、提示された金額を見てから依頼するかどうかを判断できます。
          </p>
          <p className="leading-loose mb-4">
            どの業者に依頼する場合も、作業前に出張料・部材費・深夜割増まで含めた総額の見積もりをご確認ください。料金の目安は<Link href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場ページ</Link>で解説しています。
          </p>

          {/* 5｜自社スタッフ */}
          <H2 id="jisha" num="5">自社スタッフによる対応を希望する場合</H2>
          <p className="leading-loose mb-4">
            鍵業者には、依頼を受けて加盟店を手配する「紹介型」と、自社のスタッフが直接対応する「自社対応型」があります。紹介型は対応範囲が広い一方、店舗によって技術・対応に差が出ることがあります。依頼時に「自社スタッフか協力店か」をご確認ください。
          </p>

          {/* 6｜エリア特有 */}
          <H2 id="tips" num="6">函館市で鍵業者に依頼する前の確認事項（借りている鍵は貸主への連絡を優先）</H2>
          <p className="leading-loose mb-4">
            旅先で鍵のトラブルが起きた場合、最初に確認すべきことは業者ではなく<Hl>その鍵が誰の持ち物か</Hl>です。特に判断を誤りやすいのがレンタカーの鍵です。車内に閉じ込めた場合やキーが反応しない場合に、自分で鍵業者を手配したくなることがあります。しかし、借りている車は自分の所有物ではありません。会社に断りなく解錠を手配すると、費用の負担や車両への作業の可否が問題となり、かえって時間がかかります。<Hl>まずレンタカー会社の窓口へ連絡する</Hl>ことを優先してください。貸出時の書面や車内にトラブル時の連絡先が記載されていることが多く、会社側でロードサービスや代車を手配してもらえる場合もあります。連絡の際は、借りた店舗名・車のナンバー・現在地を伝えられるよう準備してください。車の鍵まわりの考え方は<Link href="/car-inlock/" className="text-primary underline">車のインロックの対処</Link>と<Link href="/smart-key-denchi/" className="text-primary underline">スマートキー電池切れの対処</Link>で扱っています。
          </p>
          <p className="leading-loose mb-4">
            宿泊先の鍵も同じ考え方です。部屋の鍵は宿の設備のため、なくした場合や折れた場合、カードが反応しない場合は、<Hl>フロントや管理者へすぐ伝える</Hl>ことを優先してください。交換や再発行の判断も宿側が行います。無人でチェックインする宿でキーボックスを使っている場合も、掲示や予約時の案内にある連絡先へ連絡してください。自分で鍵業者を手配することは適切ではなく、設備を破損した場合は弁償を求められることもあります。チェックアウト後に紛失に気づいた場合も、まず宿へご連絡ください。キーボックス運用のリスクは<Link href="/key-box-kanri/" className="text-primary underline">キーボックスでの鍵管理の注意点</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4">
            一方、<Hl>自宅の鍵を旅先でなくした場合は、ご自身で対応するケース</Hl>です。立ち寄った施設や利用した交通機関へ忘れ物の問い合わせをし、最寄りの交番・警察署で遺失届を提出してください。そのうえで、帰宅時刻から逆算して対応を検討します。家に入れない可能性が高い場合は、玄関の前に着いてから業者を探すよりも、移動中に業者へ電話して到着目安と時間帯による割増を確認しておくほうが、待ち時間を短くできます。賃貸物件にお住まいの場合は、業者より先に管理会社・大家の緊急連絡先へご連絡ください。手順は<Link href="/kagi-funshitsu/" className="text-primary underline">鍵をなくしたときの対処法</Link>と<Link href="/shimedashi/" className="text-primary underline">鍵の閉じ込め・締め出しの対処法</Link>で確認できます。
          </p>
          <p className="leading-loose mb-4">
            出発前にできる備えもあります。<Hl>連絡先をスマートフォンの中だけに置かない</Hl>ことです。レンタカー会社の緊急連絡先、宿の電話番号、賃貸の管理会社の番号は、スマートフォンが手元にない場合や電池が切れている場合にこそ必要になります。紙に控えて財布に入れておく、同行者にも共有しておくといった準備をしておくことで、トラブル時に速やかに対応できます。あわせて、自宅の鍵と車の鍵をひとつの束にまとめていると、なくした場合に両方を同時に失うことになります。旅行前に、鍵を分けて持つことも検討してください。予備の鍵の考え方は<Link href="/aikagi/" className="text-primary underline">合鍵の作り方と考え方</Link>で扱っています。
          </p>

          {/* 7｜選び方 */}
          <H2 id="erabikata" num="7">函館市の鍵業者の選び方</H2>
          <p className="leading-loose mb-6">
            鍵業者を選ぶ際は、次の4つの手順で確認することをおすすめします。緊急時は即決しがちですが、依頼前に数分の確認を行うことで、多くのトラブルを防ぐことができます。
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
          <H2 id="faq" num="8">函館市の鍵業者でよくある質問</H2>
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
            函館市で鍵開け・鍵交換を依頼できる主要4社を、一次確認した料金・受付時間・運営会社の情報で比較しました。到着の早さを重視する場合は鍵の生活救急車やカギ110番、深夜・早朝の受付を重視する場合はカギ110番・鍵のレスキュー、料金の明確さを重視する場合は鍵のレスキューというように、目的によって適した業者は異なります。
          </p>
          <p className="leading-loose mb-8">
            ただし、旅行中のトラブルでは、業者を選ぶ前に、その鍵が誰の持ち物かを確認する必要があります。レンタカーの鍵はレンタカー会社へ、宿の部屋の鍵は宿へ連絡してください。借りている鍵は、貸主に先に連絡することが原則です。ご自身で対応するのは自宅の鍵をなくした場合で、その際は立ち寄り先への問い合わせと遺失届の提出を済ませ、帰宅時刻から逆算して業者に到着目安を確認しておくことをおすすめします。賃貸物件の場合は、まず管理会社へご連絡ください。この順番を把握しておくことで、限られた滞在時間を鍵のトラブルに費やさずに済みます。本記事の一次確認値を参考に、状況に合った業者をお選びください。
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
              {["函館市", "旅先の鍵トラブル", "レンタカーの鍵", "宿泊先の鍵", "業者比較", "エリア別"].map((t) => (
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
                { href: "/area/sapporo/", label: "札幌の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/sapporo-chuo/", label: "札幌市中央区の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/sapporo-kita/", label: "札幌市北区の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/asahikawa/", label: "旭川市の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/aomori/", label: "青森の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/morioka/", label: "盛岡の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/akita/", label: "秋田の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/sendai/", label: "仙台の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/yamagata/", label: "山形の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/tomakomai/", label: "苫小牧市の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/kushiro/", label: "釧路市の鍵開け・鍵交換業者おすすめ4選" },
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
                { href: "/car-inlock/", label: "車のインロックの対処" },
                { href: "/smart-key-denchi/", label: "スマートキー電池切れの対処" },
                { href: "/key-box-kanri/", label: "キーボックスでの鍵管理の注意点" },
                { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処法" },
                { href: "/shimedashi/", label: "鍵の閉じ込め・締め出しの対処法" },
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
