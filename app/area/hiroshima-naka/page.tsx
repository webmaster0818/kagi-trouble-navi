import AgentIntro from "@/components/AgentIntro";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { AffBanner, AffText, hasAff } from "@/components/AffLink";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/hiroshima-naka/";
const UPDATED = "2026年10月30日";
const UPDATED_ISO = "2026-10-30";

export const metadata: Metadata = {
  title: {
    absolute:
      "【2026年最新】広島市中区の鍵開け・鍵交換業者おすすめ4選｜終電後の帰宅で起きる締め出しと到着を待つ場所の選び方も解説する鍵屋比較｜鍵トラブルナビ",
  },
  description:
    "広島市中区で鍵開け・鍵交換を依頼できる鍵業者4社を一次確認値で比較しています。カギ110番（鍵開け11,000円〜）・鍵の生活救急車（最短15分）・鍵のレスキュー・カギの救急車の料金と受付時間、深夜営業の店からの帰宅途中に起きる締め出しと紛失の見分け方、業者の到着を待つ場所の選び方を解説します。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】広島市中区の鍵開け・鍵交換業者おすすめ4選｜終電後の帰宅で起きる締め出しと到着を待つ場所の選び方も解説する鍵屋比較",
    description:
      "広島市中区で鍵開け・鍵交換を依頼できる鍵業者4社を、料金・受付時間の一次確認値で比較しています。終電後の帰宅途中に起きる締め出しと紛失の見分け方、業者の到着を待つ場所の選び方も解説します。",
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
        で、24時間365日受付・電話一本で最短5分の手配を掲げています。全国47都道府県の加盟店ネットワークが対象のため、中区内の依頼でも近隣の加盟店が手配される仕組みです。見積もりは無料で、出張料・作業費・部材費を含めた金額を事前に提示する明朗会計を掲げています。
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
      { k: "対応エリア", v: "全国47都道府県（広島県対応）", note: "広島県対応の一次確認値。中区での詳細な対応可否・条件は依頼時に各社へ確認" },
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
        が特徴で、鍵開けは8,800円〜（税込・刻みキーの場合）が目安です。
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
      { k: "鍵開け料金", v: "8,800円〜（税込）", note: "刻みキーの場合。ディンプルキーは33,000円〜（公式料金ページ）" },
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
          : a.id === "seikatsu-kyukyusha"
            ? "8,800円〜（税込・刻みキー）"
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
    b: "鍵を「なくした」のか「部屋の中に置いたまま出てしまった」のかを、電話の前に確認してください。締め出しであれば解錠のみで済み、紛失であれば交換まで検討することになるため、必要な作業も費用も変わります。賃貸物件の場合は、まず管理会社・大家への連絡と、契約に付帯した緊急サポートの有無を確認してください。玄関の錠の種類とオートロックの有無を伝えることで、電話での見積もりの精度が上がります。",
  },
  {
    t: "② 出張料・夜間料金を含めた総額の見積もりを取る",
    b: "広告に記載の「◯◯円〜」は最低価格であり、実際の金額は鍵の種類・出張距離・時間帯によって変わります。深夜に依頼する場合は、深夜割増の有無によって総額が大きく変わります。作業前に、出張料・部材費・深夜割増まで含めた総額を必ずご確認ください。見積もり無料・キャンセル無料の業者であれば、金額を確認したうえで依頼を見送ることもできます。",
  },
  {
    t: "③ 運営会社を確認する",
    b: "鍵業界には「カギ110番」「鍵の110番救急車」「カギの救急車」「カギの生活救急車」など名前のよく似たサービスが複数あり、運営会社はそれぞれ別です。依頼前にサービス名だけでなく運営会社名も確認することで、取り違えを防ぐことができます。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "締め出しなどの緊急時以外は、2〜3社から見積もりを取り、総額・条件を比較することをおすすめします。今回の4社はいずれも全国対応型で、中区からも依頼できます（対応エリアは「広島県」としての一次確認値のため、詳細な条件は各社へご確認ください）。深夜はすぐに対応できる業者が限られるため即決しがちですが、金額に納得できない場合はその場で断ることもできます。",
  },
];

const faqs: AreaFaq[] = [
  {
    q: "中区の鍵開け料金の相場はいくらですか？",
    a: "当サイトが一次確認した各社の公式表示では、鍵開けの基本料金はカギ110番11,000円〜、鍵のレスキュー6,600円〜（別途出張料4,400〜8,800円）、鍵の生活救急車8,800円〜（いずれも税込）、カギの救急車は公式目安11,000〜44,000円です。ただし、これらは最低価格または目安であり、鍵の種類（ディンプルキー等）・時間帯・出張距離で総額は変わります。終電後の時間帯は割増料金が加わることもあるため、電話の段階で深夜料金の有無を確認し、作業前に総額の見積もりを取ることをおすすめします。",
    link: { href: "/ryokin/", label: "料金相場の詳細はこちら" },
  },
  {
    q: "締め出されただけの場合、鍵の交換まで必要ですか？",
    a: "鍵が室内にあって出られなくなっただけであれば、必要な作業は解錠です。錠そのものは損なわれていないため、原則として交換は不要です。交換を検討するのは、鍵が手元から失われていて第三者の手に渡った可能性がある場合です。まずはポケットやかばんの中をすべて確認し、締め出しなのか紛失なのかを確認してください。この点を判断できていれば、電話の段階で必要な作業を正しく伝えられ、見積もりの精度も上がります。",
    link: { href: "/shimedashi/", label: "締め出しの対処はこちら" },
  },
  {
    q: "深夜に業者の到着を待つ間、どこにいれば安全ですか？",
    a: "自室の前や建物の外で一人で長時間待つことは避けてください。建物のエントランス内に入れる場合はそこで待ち、入れない場合は、明るく人の目がある場所や終夜営業の店舗など、座って待てる場所を選んでください。待機場所を業者へ伝え、到着時に電話をもらうよう依頼しておくと、行き違いを防げます。気温が厳しい時期は体調面のリスクもあるため、屋外で長時間待たずに済む場所を優先してください。",
  },
  {
    q: "お酒を飲んだ状態で契約しても大丈夫でしょうか？",
    a: "判断力が低下していることを前提に、手順を決めておくと安全です。作業前に、出張料・部材費・深夜割増まで含めた総額を口頭だけでなく書面や画面で示してもらい、支払い方法も先に確認してください。金額に納得できなければ、その場で契約せずに断る選択肢があります。また、その夜のうちに必要なのは解錠だけで、錠の交換は翌日以降に落ち着いて相談するという分け方もできます。急ぎでない作業まで一度に決めないことが、トラブルを防ぐうえで重要です。",
  },
  {
    q: "深夜や早朝でも中区に来てくれますか？",
    a: "カギ110番・鍵のレスキューは24時間365日受付を掲げており、カギの救急車も多くの加盟店が24時間受付です。深夜帯は割増料金や到着時間の変動が生じる場合があるため、電話の際に深夜料金の有無と到着目安を確認してから依頼することをおすすめします。なお各社の対応エリアは「広島県」としての一次確認値のため、中区での詳細は依頼時に各社へご確認ください。",
  },
  {
    q: "急いでいるときでも確認しておくべきことはありますか？",
    a: "広告の最低価格だけで決めず、作業前に出張料・部材費・深夜割増まで含めた総額を提示してもらってください。あわせて、承諾のない追加請求がない方針かどうかと、運営会社の2点も確認しておくと安心です。鍵業界には名前のよく似た別会社のサービスが複数あり、サービス名だけでは取り違えが起こることがあります。深夜は対応できる業者が限られるため即決しがちですが、金額に納得できない場合は断ることができ、その夜は解錠のみにとどめることもできます。",
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

export default function AreaPageHiroshimaNaka() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】広島市中区の鍵開け・鍵交換業者おすすめ4選｜終電後の帰宅で起きる締め出しと到着を待つ場所の選び方も解説する鍵屋比較",
    description:
      "広島市中区で鍵開け・鍵交換を依頼できる鍵業者4社を、料金・受付時間の一次確認値で比較しています。終電後の帰宅途中に起きる締め出しと紛失の見分け方、業者の到着を待つ場所の選び方も解説します。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-08-24T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "広島の鍵開け・鍵交換業者おすすめ4選", item: `${SITE}/area/hiroshima/` },
      { "@type": "ListItem", position: 3, name: "広島市中区の鍵開け・鍵交換業者おすすめ4選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#top5",
      label: "1｜広島市中区で依頼できるおすすめの鍵業者4選",
      sub: [
        { href: "#hikaku", label: "広島市中区の鍵業者の一覧比較表" },
        ...agents.map((a) => ({ href: `#${a.id}`, label: `${a.num}｜【${a.catch}】${a.name}` })),
      ],
    },
    { href: "#isogi", label: "2｜急いで鍵開けを依頼したい場合" },
    { href: "#shinya", label: "3｜深夜・早朝のトラブルの場合" },
    { href: "#meikaku", label: "4｜料金を事前に確認したい場合" },
    { href: "#jisha", label: "5｜自社スタッフによる対応を希望する場合" },
    { href: "#tips", label: "6｜中区で鍵業者に依頼する前の確認事項（深夜の締め出しでは待機場所を先に決める）" },
    { href: "#erabikata", label: "7｜鍵業者の選び方" },
    { href: "#faq", label: "8｜中区の鍵業者でよくある質問" },
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
              <li>
                <Link href="/area/hiroshima/" className="hover:underline">広島</Link>
              </li>
              <li>/</li>
              <li className="text-foreground">広島市中区の鍵開け・鍵交換業者おすすめ4選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-foreground">
              【2026年最新】広島市中区の鍵開け・鍵交換業者おすすめ4選｜終電後の帰宅で起きる締め出しと到着を待つ場所の選び方も解説する鍵屋比較
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
              {["広島市中区", "単身向け賃貸", "深夜の締め出し", "帰宅動線", "業者比較"].map((t) => (
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
                alt="広島市中区の鍵開け・鍵交換業者の比較"
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
              広島市中区は、単身向けの賃貸物件が集まる居住エリアと、遅い時間まで営業する店舗が並ぶ地域が隣接しています。終電後に徒歩やタクシーで帰宅する方も多く、部屋の前に着いてから鍵が開けられないと気づくこともあります。その際にまず確認すべきなのは、鍵を落としたのか、部屋の中に置いたまま出てしまったのかという点です。
            </p>
            <p>
              本記事では、広島市中区内から依頼できる主要な鍵業者4社を、当サイト編集部が各社公式サイト等で一次確認した料金・受付時間・運営会社の情報のみで比較しています。あわせて、締め出しと紛失の見分け方、深夜に業者の到着を待つ場所の選び方、飲酒後に契約する際の注意点を、帰宅の流れに沿って整理しています。
            </p>
          </div>

          {/* 結論（2026年10月30日確認） */}
          <section id="shinya-ketsuron" aria-labelledby="shinya-ketsuron-t" className="mt-8 rounded-[2px] border-2 border-primary bg-[#F5F8FC] px-5 py-6 md:px-8">
            <h2 id="shinya-ketsuron-t" className="text-lg md:text-xl font-bold text-foreground mb-4">広島市中区で深夜・緊急に鍵開けを頼めるか（結論）</h2>
            <ul className="leading-loose list-disc pl-5 space-y-2 mb-4 text-sm md:text-base">
              <li><Hl>カギ110番</Hl>：公式サイトで「24時間365日・全国受付対応」を掲げています。</li>
              <li><Hl>鍵のレスキュー</Hl>：公式サイトで「24時間365日対応・日本全国どこでも出張」を掲げ、対応地域の一覧に広島を載せています（出張料4,400〜8,800円は別）。</li>
              <li><Hl>鍵の生活救急車</Hl>：公式サイトは「年中無休」の受付と最短15分の駆けつけを掲げています。深夜の時間帯に受け付けているかは、電話で確認してください。</li>
              <li><Hl>カギの救急車</Hl>：公式の店舗案内には広島県内の店舗が見当たらないため、中区に来てもらえるかと受付時間は電話で確認してください。</li>
            </ul>
            <p className="leading-loose mb-3 text-sm md:text-base">24時間受付の業者でも、深夜は到着までの時間や総額が昼間と変わることがあります。電話の時点で<Hl>到着の目安と、深夜の割増を含めた総額</Hl>を確認してから依頼してください。</p>
            <p className="leading-loose mb-3 text-sm md:text-base">広島市消費生活センターは、「鍵開け5,800円〜」の広告を見て連絡したところ、内容や料金の説明がないまま鍵を取り換えられ、15万円を請求された相談例を紹介しています。作業前に内容と料金を確認し、想定と違えば作業を断ること、納得できない請求はその場で支払わずに相談することを呼びかけています（相談専用 082-225-3300）。</p>
            <p className="text-xs text-text-muted">出典：<a href="https://www.kagi110ban.jp/" target="_blank" rel="noopener noreferrer" className="text-primary underline">カギ110番</a>・<a href="https://www.kagi110qq.co.jp/" target="_blank" rel="noopener noreferrer" className="text-primary underline">鍵のレスキュー</a>・<a href="https://www.kagi110qq.co.jp/about/transaction.html" target="_blank" rel="noopener noreferrer" className="text-primary underline">同 特定商取引法上の表記</a>・<a href="https://kagi-seikatsukyukyusya.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">鍵の生活救急車</a>・<a href="https://www.kagi1109948.com/shop/" target="_blank" rel="noopener noreferrer" className="text-primary underline">カギの救急車 店舗案内</a>・<a href="https://www.city.hiroshima.lg.jp/living/shouhi/1025695/1025701/1006754.html" target="_blank" rel="noopener noreferrer" className="text-primary underline">広島市「鍵開けなど緊急対応での料金トラブルに注意！」</a>（いずれも2026年10月30日確認）</p>
          </section>

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
          <H2 id="top5" num="1">広島市中区で依頼できるおすすめの鍵業者4選</H2>
          <p className="leading-loose mb-2">
            広島市中区内から依頼できる主要な鍵業者4社を紹介します。掲載している料金・受付時間・運営会社は、いずれも編集部が各社公式サイト等で一次確認した値です（確認日は各社の欄に記載）。各社の対応エリアは「広島県」としての一次確認値のため、中区での詳細な対応可否・条件は依頼時に各社へご確認ください。実際の総額は鍵の種類・時間帯・出張距離で変わるため、必ず作業前に見積もりで確認してください。
          </p>
          <p className="text-sm text-text-muted mb-8">
            ※<Link href="/area/hiroshima/" className="text-primary underline">広島全体の情報はこちら</Link>（広島版では同じ一次確認値で4社を比較しています）。
          </p>

          <h3 id="hikaku" className="scroll-mt-20 relative pb-3 mb-5 border-b-4 border-[#EAF1F8] text-base md:text-[22px] font-bold text-foreground">
            広島市中区の鍵業者の一覧比較表
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
                      {hasAff(r.slug) && (
                        <span className="block mt-1">
                          <AffText slug={r.slug} variant="small" label="公式サイト" />
                        </span>
                      )}
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

              {hasAff(a.slug) && (
                <div className="mt-6 flex flex-col items-center gap-3">
                  <AffBanner slug={a.slug} />
                  <AffText slug={a.slug} variant="button" label={`${a.name}の公式サイトで無料相談`} />
                </div>
              )}
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
          <H2 id="isogi" num="2">中区で急いで鍵開けを依頼したい場合</H2>
          <p className="leading-loose mb-4">
            深夜に部屋の前で立ち往生している状況では、業者の到着までの時間がそのまま屋外で過ごす時間になります。駆けつけスピードの目安を公表している業者としては、<Hl>鍵の生活救急車が最短15分の駆けつけと全国約2,270店の拠点網</Hl>を掲げています。拠点数が多いことは、到着までの時間を短くする要素の一つです。また、<Hl>カギ110番は電話一本で最短5分の手配</Hl>（全国47都道府県の加盟店ネットワークから近隣の業者を手配する仕組み）を掲げています。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※いずれも「最短」の目安であり、拠点からの距離・交通状況・繁忙状況で到着時間は変わります。急ぎの場合も、電話の際に到着目安を確認してから依頼することをおすすめします。
          </p>

          {/* 3｜深夜 */}
          <H2 id="shinya" num="3">深夜・早朝の鍵トラブルの場合</H2>
          <p className="leading-loose mb-4">
            終電後の時間帯に依頼できるのは、24時間受付の業者です。一次確認値では<Hl>カギ110番・鍵のレスキューが24時間365日受付</Hl>を掲げており、カギの救急車も多くの加盟店が24時間受付です。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※24時間受付の業者でも、深夜帯は割増料金が加わる場合や、到着時間が変動する場合があります。電話の際に深夜料金の有無と総額を確認してから依頼することをおすすめします。
          </p>

          {/* 4｜料金明確 */}
          <H2 id="meikaku" num="4">料金を事前に確認したい場合</H2>
          <p className="leading-loose mb-4">
            深夜は割増料金が加わるかどうかで総額が変わるうえ、その場で判断を迫られやすい時間帯でもあります。<Hl>鍵のレスキューは鍵開け6,600円〜（税込）と出張料4,400〜8,800円（税込・地域により異なる）を公式サイトで分けて公開</Hl>しています。また、<Hl>鍵の生活救急車は出張・見積もり・キャンセルが無料</Hl>のため、提示された金額を見てから依頼するかどうかを判断できます。
          </p>
          <p className="leading-loose mb-4">
            どの業者に依頼する場合も、作業前に出張料・部材費・深夜割増まで含めた総額の見積もりをご確認ください。料金の目安は<Link href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場ページ</Link>で解説しています。
          </p>

          {/* 5｜自社スタッフ */}
          <H2 id="jisha" num="5">自社スタッフによる対応を希望する場合</H2>
          <p className="leading-loose mb-4">
            鍵業者には、依頼を受けて加盟店を手配する「紹介型」と、自社のスタッフが直接対応する「自社対応型」があります。紹介型は対応範囲が広い一方、店舗によって技術・対応に差が出ることがあります。人通りが少ない時間帯に一人で到着を待つ場合は、どの会社の担当者が来るのかを把握しておくと、落ち着いて待つことができます。依頼時に「自社スタッフか協力店か」をご確認ください。
          </p>

          {/* 6｜区特有 */}
          <H2 id="tips" num="6">中区で鍵業者に依頼する前の確認事項（深夜の締め出しでは待機場所を先に決める）</H2>
          <p className="leading-loose mb-4">
            部屋に入れないと分かったら、まず<Hl>締め出しなのか紛失なのかを確認します</Hl>。鍵が室内にあって入れなくなっただけであれば締め出しで、この場合に必要な作業は解錠のみです。錠そのものは損なわれていないため、原則として交換は不要です。一方、鍵が手元から失われている場合は、第三者の手に渡った可能性を考える必要があり、解錠のあとに交換を検討することになります。この時点で費用の見通しが大きく変わるため、電話をかける前にポケットとかばんの中を一度すべて確認してください。締め出しの詳しい対処は<Link href="/shimedashi/" className="text-primary underline">締め出しの対処</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4">
            次に、<Hl>賃貸契約に付帯した窓口がないか</Hl>をご確認ください。物件によっては、管理会社が夜間も受け付ける緊急サポートを用意していたり、契約時に加入した保険・サービスに鍵の解錠が含まれていたりします。自分で業者を探す前に契約書類やスマートフォンに保存した書類を確認すると、費用を抑えられることがあります。オートロックの共用エントランスで締め出された場合も、まず建物側の窓口にご連絡ください。予防の考え方は<Link href="/autolock-shimedashi-yobou/" className="text-primary underline">オートロックの締め出し予防</Link>で解説しています。
          </p>
          <p className="leading-loose mb-4">
            業者への依頼を決めたら、<Hl>到着までどこで待つか</Hl>を決めてください。深夜に自室の前や建物の外で一人で長時間待つことは避けるべきです。建物のエントランス内に入れる場合はそこで、入れない場合は、明るく人の目がある場所や終夜営業の店舗など、安全に座って待てる場所を選んでください。その際は業者へ待機場所を伝え、到着時に電話をもらうよう依頼しておきます。屋外の気温が厳しい時期は、体調面のリスクも考えて場所を選ぶ必要があります。
          </p>
          <p className="leading-loose mb-4">
            飲酒後に依頼する場合は、<Hl>判断力が低下していることを前提に手順を決めておく</Hl>ことが大切です。作業前に、出張料・部材費・深夜割増まで含めた総額を口頭ではなく書面や画面で示してもらい、支払い方法も先に確認してください。金額に納得できなければ、その場で契約せず断る選択肢があります。また、その夜のうちに必要なのは解錠だけで、錠の交換は翌日以降に落ち着いて相談するという分け方も可能です。急ぎでない作業まで一度に決めないことが、深夜の依頼でトラブルを防ぐための基本です。判断の目安は<Link href="/kagi-koukan-timing/" className="text-primary underline">鍵交換のタイミング</Link>を参考にしてください。
          </p>

          {/* 7｜選び方 */}
          <H2 id="erabikata" num="7">中区の鍵業者の選び方</H2>
          <p className="leading-loose mb-6">
            鍵業者を選ぶ際は、次の4つの手順で確認することをおすすめします。深夜は早く解決したいという気持ちが先に立ちますが、数分間の確認でトラブルの多くは防げます。
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
          <p className="leading-loose mb-8 text-sm md:text-base">
            電話で確認する質問（総額・断った場合の費用・運営会社・到着時刻）と、作業前・支払い時の確認事項は、地域を問わない<Link href="/kagiya-erabikata/" className="text-primary underline">鍵屋・鍵業者の選び方チェックリスト</Link>にまとめています（国民生活センターの出張解錠の相談事例にもとづく）。
          </p>

          {/* 8｜FAQ */}
          <H2 id="faq" num="8">中区の鍵業者でよくある質問</H2>
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
            本記事では、広島市中区で鍵開け・鍵交換を依頼できる主要4社を、一次確認した料金・受付時間・運営会社の情報で比較しました。駆けつけの速さを重視する場合は鍵の生活救急車やカギ110番、深夜・早朝の受付を重視する場合はカギ110番・鍵のレスキュー、料金の明確さを重視する場合は鍵のレスキューというように、目的によって適した業者は異なります。
          </p>
          <p className="leading-loose mb-8">
            終電後の帰宅途中にトラブルが起きやすい中区では、まず締め出しか紛失かを見分けることが重要です。そのうえで、契約に付帯した窓口の有無を確認し、安全に待てる場所を決め、総額を確認してから契約するという順番を守ることで、深夜でも適切に判断しやすくなります。本記事の一次確認値を参考に、時間帯と予算に合った業者をお選びください。
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
              {["広島市中区", "単身向け賃貸", "締め出し", "深夜対応", "鍵開け", "エリア別"].map((t) => (
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
                { href: "/area/kure/", label: "吳市の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/hiroshima/", label: "広島の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/okayama/", label: "岡山の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/yamaguchi/", label: "山口の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/matsue/", label: "松江の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/tottori/", label: "鳥取の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/takamatsu/", label: "高松の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/matsuyama/", label: "松山の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/fukuoka/", label: "福岡の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/osaka/", label: "大阪の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/higashihiroshima/", label: "東広島市の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/onomichi/", label: "尾道市の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/hatsukaichi/", label: "廿日市市の鍵開け・鍵交換業者おすすめ4選" },
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
                { href: "/shimedashi/", label: "締め出しの対処" },
                { href: "/autolock-shimedashi-yobou/", label: "オートロックの締め出し予防" },
                { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
                { href: "/kagi-koukan-timing/", label: "鍵交換のタイミング" },
                { href: "/chintai-bouhan/", label: "賃貸の防犯対策" },
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
