import AgentIntro from "@/components/AgentIntro";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/toyokawa/";
const UPDATED = "2026年10月15日";
const UPDATED_ISO = "2026-10-15";

export const metadata: Metadata = {
  title: {
    absolute:
      "【2026年最新】豊川市の鍵開け・鍵交換業者おすすめ4選｜鍵を交換したあとに残る古い鍵とシリンダーの数え方・残し方・捨て方も解説する鍵屋比較｜鍵トラブルナビ",
  },
  description:
    "豊川市で鍵開け・鍵交換を依頼できる鍵業者4社を一次確認値で比較しています。カギ110番（鍵開け11,000円〜）・鍵の生活救急車（最短15分）・鍵のレスキュー・カギの救急車の料金と受付時間、鍵を交換したあとに残る古い鍵と取り外したシリンダーの数え方・残し方・捨て方について、編集部が中立的な立場でまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】豊川市の鍵開け・鍵交換業者おすすめ4選｜鍵を交換したあとに残る古い鍵とシリンダーの数え方・残し方・捨て方も解説する鍵屋比較",
    description:
      "豊川市で鍵開け・鍵交換を依頼できる鍵業者4社を、料金・受付時間の一次確認値で比較しています。鍵を交換したあとに残る古い鍵と取り外したシリンダーを、どう数え、どれを残し、どう捨てるかも解説します。",
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
        で、24時間365日受付・電話一本で最短5分の手配を掲げています。全国47都道府県の加盟店ネットワークが対象のため、豊川市内の依頼でも近隣の加盟店が手配される仕組みです。見積もりは無料で、出張料・作業費・部材費を含めた金額を事前に提示する明朗会計を掲げています。
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
      { k: "対応エリア", v: "全国47都道府県（愛知県対応）", note: "愛知県対応の一次確認値。豊川市での詳細な対応可否・条件は依頼時に各社へ確認" },
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
    t: "① 状況と鍵の種類を整理する",
    b: "交換の相談では、替えたい扉がいくつあるのか、同じ鍵で開く扉が含まれるのかを事前に整理しておくと、手続きが円滑に進みます。玄関の錠のメーカー名・型番は扉側面の金属プレートで確認でき、鍵がディンプルキーかどうかもお伝えください。現在手元にある鍵の本数と、新しい鍵の必要本数もあわせてお伝えください。取り外した部品を引き取ってもらうか、手元に残すかも、この段階で決めておけます。",
  },
  {
    t: "② 出張料・夜間料金を含めた総額の見積もりを取る",
    b: "広告の「◯◯円〜」は最低価格で、交換では部材費の占める割合が大きくなります。シリンダーだけの交換か、錠前一式の交換かで金額は変わり、防犯性の高い製品を選べばさらに上がります。作業前に、出張料・部材費・追加の鍵の本数まで含めた総額をご確認ください。急ぎの依頼でなければ、深夜割増のかかる時間帯を避けて日中に日程を組むのが基本です。見積もり無料・キャンセル無料の業者であれば、金額を確認したうえで依頼を見送ることもできます。",
  },
  {
    t: "③ 運営会社を確認する",
    b: "鍵業界には「カギ110番」「鍵の110番救急車」「カギの救急車」「カギの生活救急車」など名前のよく似たサービスが複数あり、運営会社はそれぞれ別です。依頼前にサービス名だけでなく運営会社名も確認することで、取り違えを防ぐことができます。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "交換は日程に余裕を持てる依頼のため、2〜3社から見積もりを取り、総額・提案内容を比較することをおすすめします。錠のメーカー名・型番と、必要な鍵の本数を同じ条件で伝えることで、提案される製品の違いと金額の差を比較しやすくなります。今回の4社はいずれも全国対応型で、豊川市からも依頼できます（対応エリアは「愛知県」としての一次確認値のため、詳細な条件は各社へご確認ください）。",
  },
];

const faqs: AreaFaq[] = [
  {
    q: "豊川市の鍵開け料金の相場はいくらですか？",
    a: "当サイトが一次確認した各社の公式表示では、鍵開けの基本料金はカギ110番11,000円〜、鍵のレスキュー6,600円〜（別途出張料4,400〜8,800円）、鍵の生活救急車8,800円〜（いずれも税込）、カギの救急車は公式目安11,000〜44,000円です。ただし、これらは最低価格または目安であり、鍵の種類（ディンプルキー等）・時間帯・出張距離で総額は変わります。交換まで進める場合は錠前やシリンダーの部材費が別途かかるため、作業前に総額の見積もりを取ることをおすすめします。",
    link: { href: "/ryokin/", label: "料金相場の詳細はこちら" },
  },
  {
    q: "交換したあとの古い鍵は、そのまま捨ててもよいですか？",
    a: "そのまま捨てることは避けてください。鍵は刻みの形状自体が情報であり、宅配の伝票、名前入りのタグ、鍵番号の控えなど、住所や部屋が分かるものと一緒に捨てると、どの家の鍵かが特定される恐れがあります。刻みが読み取れる状態で人目につく場所に出さない、写真を残さない、金属の分別は自治体の区分に従う、というのが基本的な処分方法です。",
    link: { href: "/kagi-shobun/", label: "鍵の処分方法はこちら" },
  },
  {
    q: "取り外したシリンダーはどうすればよいですか？",
    a: "賃貸なら貸主の所有物であることが多いため、引き取ってもらうか返却するかを管理会社・貸主に確認してください。持ち家であれば、同じ型の予備として保管する選択肢もありますが、鍵と一緒に玄関まわりに置くことは避けてください。処分する場合は、鍵と同様に自治体の分別区分に従います。作業時に業者へ引き取りを依頼できるかどうかも、見積もりの段階で確認できます。",
  },
  {
    q: "賃貸で鍵を交換しました。古い鍵は返すべきですか？",
    a: "契約や物件の取り決めによって異なります。賃貸物件では錠も鍵も貸主の所有物であることが多く、交換の可否や費用負担、退去時に返却する本数まで契約書に記載されていることがあります。自己判断で処分すると、退去時に本数の不足を指摘される原因になりかねません。交換の前に管理会社・貸主へ連絡し、古い鍵と部品の扱いまで決めておくと安心です。",
    link: { href: "/taikyo-kagi-trouble/", label: "退去時の鍵トラブルはこちら" },
  },
  {
    q: "古い鍵の本数が合いません。どうすればよいですか？",
    a: "交換した扉は、行方の分からない古い鍵ではもう開けられません。確認すべきなのは、同じ鍵で開く別の扉が残っていないかです。勝手口、物置、門扉、車庫の錠に同じ鍵が使われている場合は、その扉に対しては現在も有効な鍵ということになります。敷地内の扉を一覧にし、どの鍵で開くかを1本ずつ確認したうえで、必要に応じて順次交換してください。",
    link: { href: "/aikagi/", label: "合鍵の作り方と考え方はこちら" },
  },
  {
    q: "深夜や早朝でも豊川市に来てくれますか？",
    a: "カギ110番・鍵のレスキューは24時間365日受付を掲げており、カギの救急車も多くの加盟店が24時間受付です。深夜帯は割増料金や到着時間の変動が生じる場合があるため、電話の際に深夜料金の有無と到着目安を確認してから依頼することをおすすめします。なお各社の対応エリアは「愛知県」としての一次確認値のため、豊川市での詳細は依頼時に各社へご確認ください。",
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

export default function AreaPageToyokawa() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】豊川市の鍵開け・鍵交換業者おすすめ4選｜鍵を交換したあとに残る古い鍵とシリンダーの数え方・残し方・捨て方も解説する鍵屋比較",
    description:
      "豊川市で鍵開け・鍵交換を依頼できる鍵業者4社を、料金・受付時間の一次確認値で比較しています。鍵を交換したあとに残る古い鍵と取り外したシリンダーを、どう数え、どれを残し、どう捨てるかも解説します。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-09-20T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "豊川市の鍵開け・鍵交換業者おすすめ4選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#top5",
      label: "1｜豊川市で依頼できるおすすめの鍵業者4選",
      sub: [
        { href: "#hikaku", label: "豊川市の鍵業者の一覧比較表" },
        ...agents.map((a) => ({ href: `#${a.id}`, label: `${a.num}｜【${a.catch}】${a.name}` })),
      ],
    },
    { href: "#isogi", label: "2｜急いで鍵開けを依頼したい場合" },
    { href: "#shinya", label: "3｜深夜・早朝のトラブルの場合" },
    { href: "#meikaku", label: "4｜料金を事前に確認したい場合" },
    { href: "#jisha", label: "5｜自社スタッフによる対応を希望する場合" },
    { href: "#toyokawa-tips", label: "6｜豊川市で鍵業者に依頼する前の確認事項（交換後に残る鍵は本数を確認してから処分する）" },
    { href: "#erabikata", label: "7｜鍵業者の選び方" },
    { href: "#faq", label: "8｜豊川市の鍵業者でよくある質問" },
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
              <li className="text-foreground">豊川市の鍵開け・鍵交換業者おすすめ4選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-foreground">
              【2026年最新】豊川市の鍵開け・鍵交換業者おすすめ4選｜鍵を交換したあとに残る古い鍵とシリンダーの数え方・残し方・捨て方も解説する鍵屋比較
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
              {["豊川市", "交換後の古い鍵", "シリンダーの扱い", "鍵の本数管理", "業者比較"].map((t) => (
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
                alt="豊川市の鍵開け・鍵交換業者の比較"
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
              豊川市は愛知県の東部に位置し、豊川稲荷の門前町として知られ、その周辺に住宅地と工場が広がっています。鍵の相談というと「開かない」「なくした」といったトラブルを思い浮かべがちですが、交換を終えたあとにも対応すべきことが残ります。それは、使わなくなった古い鍵と、取り外したシリンダーの扱いです。作業が終わって業者が帰ったあと、手元に残ったものの扱いは、多くの場合自分で判断することになります。
            </p>
            <p>
              本記事では、豊川市内から依頼できる主要な鍵業者4社を、当サイト編集部が各社公式サイト等で一次確認した料金・受付時間・運営会社の情報のみで比較しています。あわせて、交換後に残った鍵の数え方、残すべきもの、処分の方法を整理しています。
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
          <H2 id="top5" num="1">豊川市で依頼できるおすすめの鍵業者4選</H2>
          <p className="leading-loose mb-2">
            豊川市内から依頼できる主要な鍵業者4社を紹介します。掲載している料金・受付時間・運営会社は、いずれも編集部が各社公式サイト等で一次確認した値です（確認日は各社の欄に記載）。各社の対応エリアは「愛知県」としての一次確認値のため、豊川市での詳細な対応可否・条件は依頼時に各社へご確認ください。実際の総額は鍵の種類・時間帯・出張距離で変わるため、必ず作業前に見積もりで確認してください。
          </p>
          <p className="text-sm text-text-muted mb-8">
            ※近隣エリアの比較は<Link href="/area/toyohashi/" className="text-primary underline">豊橋市版</Link>・<Link href="/area/okazaki/" className="text-primary underline">岡崎市版</Link>・<Link href="/area/nagoya/" className="text-primary underline">名古屋版</Link>もご覧ください。
          </p>

          <h3 id="hikaku" className="scroll-mt-20 relative pb-3 mb-5 border-b-4 border-[#EAF1F8] text-base md:text-[22px] font-bold text-foreground">
            豊川市の鍵業者の一覧比較表
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
          <H2 id="isogi" num="2">豊川市で急いで鍵開けを依頼したい場合</H2>
          <p className="leading-loose mb-4">
            交換は日程を選べる依頼ですが、鍵が回らなくなり急いで交換が必要になる場合もあります。駆けつけスピードの目安を公表している業者としては、<Hl>鍵の生活救急車が最短15分の駆けつけと全国約2,270店の拠点網</Hl>を掲げています。拠点数が多いことは、到着までの時間を短くする要素の一つです。また、<Hl>カギ110番は電話一本で最短5分の手配</Hl>（全国47都道府県の加盟店ネットワークから近隣の業者を手配する仕組み）を掲げています。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※いずれも「最短」の目安であり、拠点からの距離・交通状況・繁忙状況で到着時間は変わります。急ぎの場合も、電話の際に到着目安を確認してから依頼することをおすすめします。
          </p>

          {/* 3｜深夜 */}
          <H2 id="shinya" num="3">深夜・早朝の鍵トラブルの場合</H2>
          <p className="leading-loose mb-4">
            夜間は解錠のみを依頼し、交換は後日行うという方法もあります。その場合は、解錠した時点でどの鍵が有効なのかを把握しておくことが、翌日以降の手配につながります。一次確認値では<Hl>カギ110番・鍵のレスキューが24時間365日受付</Hl>を掲げており、カギの救急車も多くの加盟店が24時間受付です。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※24時間受付の業者でも、深夜帯は割増料金が加わる場合や、到着時間が変動する場合があります。電話の際に深夜料金の有無と総額を確認してから依頼することをおすすめします。
          </p>

          {/* 4｜料金明確 */}
          <H2 id="meikaku" num="4">料金を事前に確認したい場合</H2>
          <p className="leading-loose mb-4">
            交換は部材費の占める割合が大きく、選ぶ製品によって総額が変わります。そのため、見積もりにどこまでの作業が含まれるかを事前に示す業者かどうかが重要になります。<Hl>鍵のレスキューは鍵開け6,600円〜（税込）と出張料4,400〜8,800円（税込・地域により異なる）を公式サイトで分けて公開</Hl>しています。また、<Hl>鍵の生活救急車は出張・見積もり・キャンセルが無料</Hl>のため、提示された金額を見てから依頼するかどうかを判断できます。
          </p>
          <p className="leading-loose mb-4">
            どの業者に依頼する場合も、作業前に出張料・部材費・深夜割増まで含めた総額の見積もりをご確認ください。料金の目安は<Link href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場ページ</Link>で解説しています。
          </p>

          {/* 5｜自社スタッフ */}
          <H2 id="jisha" num="5">自社スタッフによる対応を希望する場合</H2>
          <p className="leading-loose mb-4">
            鍵業者には、依頼を受けて加盟店を手配する「紹介型」と、自社のスタッフが直接対応する「自社対応型」があります。紹介型は対応範囲が広い一方、店舗によって技術・対応に差が出ることがあります。交換の作業では、取り外した部品をその場で渡してもらえるかどうかも確認しておくべきため、依頼時に「自社スタッフか協力店か」とあわせてご確認ください。
          </p>

          {/* 6｜エリア特有 */}
          <H2 id="toyokawa-tips" num="6">豊川市で鍵業者に依頼する前の確認事項（交換後に残る鍵は本数を確認してから処分する）</H2>
          <p className="leading-loose mb-4">
            鍵を交換すると、手元には<Hl>古い鍵、取り外したシリンダーや錠前、そして新しい鍵に添えられた登録カード</Hl>が残ります。最初に行うべきなのは処分ではなく、<Hl>本数の確認</Hl>です。もともと何本配っていたか、手元に戻ったのは何本かを確認します。家族それぞれが持っていた分、勤務先や実家に置いていた分、車のキーケースに入れたままの分まで思い出して書き出してください。交換の判断そのものの考え方は<Link href="/kagi-koukan-timing/" className="text-primary underline">鍵交換のタイミング</Link>、本数の考え方は<Link href="/aikagi/" className="text-primary underline">合鍵の作り方と考え方</Link>で扱っています。
          </p>
          <p className="leading-loose mb-4">
            本数が合わないときに確認すべきなのは、<Hl>同じ鍵で開く別の扉が残っていないか</Hl>という点です。交換した扉にはもう古い鍵は使えませんが、勝手口、物置、門扉、車庫の錠に同じ鍵が使われていることがあります。その場合、行方の分からない古い鍵は、交換していない扉に対しては現在も有効な鍵ということになります。敷地内の扉を一覧にして、どの鍵で開くかを1本ずつ確認しておくと、次に交換すべき扉が明確になります。錠前の型の見分け方は<Link href="/joumae-type-zukan/" className="text-primary underline">錠前タイプ図鑑</Link>、引き戸の錠は<Link href="/hikido-kagi/" className="text-primary underline">引き戸の鍵</Link>で解説しています。
          </p>
          <p className="leading-loose mb-4">
            処分の方法にも注意点があります。<Hl>鍵は刻みの形状自体が情報</Hl>であるため、刻みが読み取れる状態のまま人目につく場所に出さないこと、写真を残したり共有したりしないことが基本です。宅配の伝票、名前入りのタグ、鍵番号の控えなど、住所や部屋が分かるものと一緒に捨てることも避けてください。金属の分別は自治体の区分に従います。鍵番号は合鍵作成の手がかりになり得るため、控えは鍵とは別の場所に保管してください。詳しい手順は<Link href="/kagi-shobun/" className="text-primary underline">鍵の処分方法</Link>、番号の扱いは<Link href="/key-number-aikagi/" className="text-primary underline">鍵番号からの合鍵作成</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4">
            すべてを処分することが適切とは限りません。<Hl>賃貸では、古い鍵も取り外したシリンダーも貸主の所有物であることが多く</Hl>、返却の要否を先に確認するのが安全です。退去時に本数が不足していると、精算時のトラブルの原因になります。持ち家でも、同じ型のシリンダーを予備として保管する選択肢はありますが、保管場所が玄関まわりでは防犯上の意味がありません。金庫の鍵や、中身が残ったままの金庫は扱いが別になります。賃貸の考え方は<Link href="/chintai-kagi-koukan-hiyou/" className="text-primary underline">賃貸の鍵交換費用</Link>と<Link href="/taikyo-kagi-trouble/" className="text-primary underline">退去時の鍵トラブル</Link>、金庫は<Link href="/kinko-shobun/" className="text-primary underline">金庫の処分</Link>で扱っています。
          </p>

          {/* 7｜選び方 */}
          <H2 id="erabikata" num="7">豊川市の鍵業者の選び方</H2>
          <p className="leading-loose mb-6">
            鍵業者を選ぶ際は、次の4つの手順で確認することをおすすめします。交換は日程に余裕を持てる依頼が多いため、時間をかけて比較することをおすすめします。
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
          <H2 id="faq" num="8">豊川市の鍵業者でよくある質問</H2>
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
            本記事では、豊川市で鍵開け・鍵交換を依頼できる主要4社を、一次確認した料金・受付時間・運営会社の情報で比較しました。駆けつけの速さを重視する場合は鍵の生活救急車やカギ110番、深夜・早朝の受付を重視する場合はカギ110番・鍵のレスキュー、料金の明確さを重視する場合は鍵のレスキューというように、目的によって適した業者は異なります。
          </p>
          <p className="leading-loose mb-8">
            鍵の交換は、新しい鍵を受け取った時点で完了するように見えますが、残ったものの処理までを含めて完了です。まず本数を確認する、同じ鍵で開く扉が残っていないかを確認する、住所と結び付く情報と切り離して処分する、賃貸物件の場合は返却の要否を確認する、という順番で進めれば、交換後も不安が残る状態を避けられます。そのうえで、本記事の一次確認値を参考に、目的と予算に合った業者をお選びください。
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
              {["豊川市", "古い鍵の処分", "シリンダー", "鍵番号", "鍵の棚卸し", "エリア別"].map((t) => (
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
                { href: "/area/toyohashi/", label: "豊橋市の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/okazaki/", label: "岡崎市の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/toyota/", label: "豊田市の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/hamamatsu/", label: "浜松の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/nagoya/", label: "名古屋の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/nagoya-naka/", label: "名古屋市中区の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/nagoya-chikusa/", label: "名古屋市千種区の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/nagoya-meito/", label: "名古屋市名東区の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/kasugai/", label: "春日井市の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/anjo/", label: "安城市の鍵開け・鍵交換業者おすすめ4選" },
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
                { href: "/kagi-shobun/", label: "鍵の処分方法" },
                { href: "/kagi-koukan-timing/", label: "鍵交換のタイミング" },
                { href: "/aikagi/", label: "合鍵の作り方と考え方" },
                { href: "/key-number-aikagi/", label: "鍵番号からの合鍵作成" },
                { href: "/chintai-kagi-koukan-hiyou/", label: "賃貸の鍵交換費用" },
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
