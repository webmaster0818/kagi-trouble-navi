import AgentIntro from "@/components/AgentIntro";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/uji/";
const UPDATED = "2026年10月15日";
const UPDATED_ISO = "2026-10-15";

export const metadata: Metadata = {
  title: {
    absolute:
      "【2026年最新】宇治市の鍵開け・鍵交換業者おすすめ4選｜扉が閉まりきらない原因が錠かドアクローザーかの見分け方も解説する鍵屋比較｜鍵トラブルナビ",
  },
  description:
    "宇治市で鍵開け・鍵交換を依頼できる鍵業者4社を一次確認値で比較。カギ110番（鍵開け11,000円〜）・鍵の生活救急車（最短15分）・鍵のレスキュー・カギの救急車の料金と受付時間、扉が閉まりきらない・勢いよく閉まる症状の原因の切り分け、依頼先の選び方まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】宇治市の鍵開け・鍵交換業者おすすめ4選｜扉が閉まりきらない原因が錠かドアクローザーかの見分け方も解説する鍵屋比較",
    description:
      "宇治市で鍵開け・鍵交換を依頼できる鍵業者4社を、料金・受付時間の一次確認値で比較。扉が閉まりきらない症状が錠なのかドアクローザーなのかの見分け方、集合住宅での相談先、依頼前に伝えることも解説します。",
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
        で、24時間365日受付・電話一本で最短5分の手配を掲げています。全国47都道府県の加盟店ネットワークが対象のため、宇治市内の依頼でも近隣の加盟店が手配される仕組みです。見積もりは無料で、出張料・作業費・部材費を含めた金額を事前に提示する明朗会計を掲げています。
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
      { k: "対応エリア", v: "全国47都道府県（京都府対応）", note: "京都府対応の一次確認値。宇治市での詳細な対応可否・条件は依頼時に各社へ確認" },
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
    t: "① 鍵を差さずに、扉そのものが閉まるかを確かめる",
    b: "手を添えて最後まで押したときに扉が枠に収まるか、収まった後に鍵が普通に回るかを確認します。閉まる速さや止まる位置だけが問題であれば扉の上部の器具、扉が枠に当たって入らない場合は扉や枠、鍵が回らない場合は錠が原因と考えられます。原因を切り分けてから電話すると、依頼先を誤らずに済みます。",
  },
  {
    t: "② 出張料・部材費を含めた総額の見積もりを取る",
    b: "広告の「◯◯円〜」は最低価格であり、実際の金額は作業の対象・内容・出張距離・時間帯によって変わります。扉の上部の器具は、錠とは別の部材です。調整で済むのか交換になるのかで金額が変わるため、現物を確認してもらったうえで、内訳を分けて提示してもらってください。",
  },
  {
    t: "③ 運営会社を確認する",
    b: "鍵業界には「カギ110番」「鍵の110番救急車」「カギの救急車」「カギの生活救急車」など名前のよく似たサービスが複数あり、運営会社はそれぞれ別です。依頼前にサービス名だけでなく運営会社名も確認することで、取り違えを防ぐことができます。",
  },
  {
    t: "④ 急ぎでない場合は複数社を比較する",
    b: "施錠できている状態であれば、日程に余裕を持てます。2〜3社から見積もりを取り、総額と対応範囲を比較することをおすすめします。今回の4社はいずれも全国対応型で、宇治市からも依頼できます（対応エリアは「京都府」としての一次確認値のため、詳細条件は各社へご確認ください）。症状と扉の形を同じ条件で伝えると、取り扱いの可否と金額の差が分かりやすくなります。関西エリアでは鍵猿も候補になります。",
  },
];

const faqs: AreaFaq[] = [
  {
    q: "宇治市の鍵開け料金の相場はいくらですか？",
    a: "当サイトが一次確認した各社の公式表示では、鍵開けの基本料金はカギ110番11,000円〜、鍵のレスキュー6,600円〜（別途出張料4,400〜8,800円）、鍵の生活救急車8,800円〜（いずれも税込）、カギの救急車は公式目安11,000〜44,000円です。ただし、これらは最低価格または目安であり、鍵の種類（ディンプルキー等）・時間帯・出張距離で総額は変わります。扉の上部の器具は錠とは別の部材になるため、症状を伝えたうえで対応の可否と総額の見積もりを取ってください。",
    link: { href: "/ryokin/", label: "料金相場の詳細はこちら" },
  },
  {
    q: "扉が最後まで閉まりません。鍵の故障ですか？",
    a: "鍵を差さない状態で扉を最後まで押し、枠に収まって鍵も普通に回る場合は、錠の故障ではない可能性が高いと考えられます。閉まる速さや止まる位置が問題であれば、扉の上部に付く器具（ドアクローザー）の不調が考えられ、鍵やシリンダーを交換しても症状は改善しません。",
    link: { href: "/door-closer/", label: "ドアクローザーの不具合はこちら" },
  },
  {
    q: "扉が勢いよくバタンと閉まります。放っておいて大丈夫ですか？",
    a: "閉まる速さを調整する器具が弱っているサインです。指をはさむ危険があるほか、強く閉まり続けることで扉や枠、錠の側にも負担がかかります。調整で改善するのか交換が必要なのかは、現地で確認しないと判断できません。",
  },
  {
    q: "扉が枠に当たっている気がします。器具を替えれば直りますか？",
    a: "枠のゆがみが原因の場合は、器具を交換しても症状は残ります。閉めた際の擦れる音や当たった跡が手がかりになります。原因の箇所によって依頼先も費用も変わるため、まず原因を特定することをおすすめします。",
    link: { href: "/door-koukan-vs-kagi-koukan/", label: "ドア交換と鍵交換の切り分け" },
  },
  {
    q: "マンションですが自分で手配してよいですか？",
    a: "玄関の扉そのものが共用部の扱いになっている建物では、ご自身の判断で手配することはできません。分譲か賃貸かでも窓口が変わるため、まず管理会社または管理組合に連絡し、ご自身で手配できる範囲をご確認ください。",
    link: { href: "/chintai-kagi-koukan-hiyou/", label: "賃貸の鍵交換費用はこちら" },
  },
  {
    q: "宇治市は「鍵猿」にも依頼できますか？",
    a: "鍵猿は大阪に本社を置くSLS株式会社が運営し、関西エリアを中心に実績を持つサービスです。下請けを使わない自社施工で、鍵開けは8,800円〜（税込）、基本料・見積料・出張料は0円、1年間の無料工事保証・無償商品保証があります。電話受付は8:00〜23:00のため、深夜に新規で連絡する場合は受付時間に注意してください。対応可否・料金・到着目安は依頼時に必ず確認してください。",
    link: { href: "/agents/kagizaru/", label: "鍵猿の詳細ページはこちら" },
  },
  {
    q: "深夜や早朝でも宇治市に来てくれますか？",
    a: "カギ110番・鍵のレスキューは24時間365日受付を掲げており、カギの救急車も多くの加盟店が24時間受付です。深夜帯は割増料金や到着時間の変動が生じる場合があるため、電話の際に深夜料金の有無と到着目安を確認してから依頼することをおすすめします。なお各社の対応エリアは「京都府」としての一次確認値のため、宇治市での詳細は依頼時に各社へご確認ください。",
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

export default function AreaPageUji() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】宇治市の鍵開け・鍵交換業者おすすめ4選｜扉が閉まりきらない原因が錠かドアクローザーかの見分け方も解説する鍵屋比較",
    description:
      "宇治市で鍵開け・鍵交換を依頼できる鍵業者4社を、料金・受付時間の一次確認値で比較。扉が閉まりきらない症状が錠なのかドアクローザーなのかの見分け方、集合住宅での相談先、依頼前に伝えることも解説します。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-09-28T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "宇治市の鍵開け・鍵交換業者おすすめ4選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#top5",
      label: "1｜宇治市で依頼できるおすすめの鍵業者4選",
      sub: [
        { href: "#hikaku", label: "宇治市の鍵業者の一覧比較表" },
        ...agents.map((a) => ({ href: `#${a.id}`, label: `${a.num}｜【${a.catch}】${a.name}` })),
      ],
    },
    { href: "#isogi", label: "2｜急いで鍵開けを依頼したい場合" },
    { href: "#shinya", label: "3｜深夜・早朝のトラブルの場合" },
    { href: "#meikaku", label: "4｜料金を事前に確認したい場合" },
    { href: "#jisha", label: "5｜自社スタッフによる対応を希望する場合" },
    { href: "#uji-tips", label: "6｜宇治市で鍵業者に依頼する前の確認事項（扉が閉まりきらない・勢いよく閉まる場合のドアクローザーの確認）" },
    { href: "#erabikata", label: "7｜鍵業者の選び方" },
    { href: "#faq", label: "8｜宇治市の鍵業者でよくある質問" },
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
              <li className="text-foreground">宇治市の鍵開け・鍵交換業者おすすめ4選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-foreground">
              【2026年最新】宇治市の鍵開け・鍵交換業者おすすめ4選｜扉が閉まりきらない原因が錠かドアクローザーかの見分け方も解説する鍵屋比較
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
              {["宇治市", "ドアクローザー", "扉の不調", "原因の切り分け", "業者比較"].map((t) => (
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
                alt="宇治市の鍵開け・鍵交換業者の比較"
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
              宇治市は京都府の南部にあり、宇治川沿いに市街地が広がるまちです。築年数を経た集合住宅と新しい住宅が混在しています。玄関の扉が最後まで閉まりきらない、あるいは勢いよく閉まるといった症状が出た際に鍵業者へ連絡する方は多いものの、原因が錠ではない場合もあります。
            </p>
            <p>
              本記事では、宇治市内から依頼できる主要な鍵業者4社を、当サイト編集部が各社公式サイト等で一次確認した料金・受付時間・運営会社の情報だけで比較しました。あわせて、扉の閉まり方の不調が錠によるものか、扉の上部に付く器具によるものかの見分け方、集合住宅での相談先の考え方を整理しています。
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
          <H2 id="top5" num="1">宇治市で依頼できるおすすめの鍵業者4選</H2>
          <p className="leading-loose mb-2">
            宇治市内から依頼できる主要な鍵業者4社を紹介します。掲載している料金・受付時間・運営会社は、いずれも編集部が各社公式サイト等で一次確認した値です（確認日は各社の欄に記載）。各社の対応エリアは「京都府」としての一次確認値のため、宇治市での詳細な対応可否・条件は依頼時に各社へご確認ください。実際の総額は鍵の種類・時間帯・出張距離で変わるため、必ず作業前に見積もりで確認してください。
          </p>
          <p className="text-sm text-text-muted mb-8">
            ※宇治市を含む関西エリアでは、関西中心に対応する<Link href="/agents/kagizaru/" className="text-primary underline">鍵猿</Link>も選択肢になります（<Link href="/area/kyoto/" className="text-primary underline">京都版の比較記事</Link>に掲載しています）。近隣エリアの比較は<Link href="/area/kyoto-fushimi/" className="text-primary underline">京都市伏見区版</Link>・<Link href="/area/otsu/" className="text-primary underline">大津版</Link>もご覧ください。
          </p>

          <h3 id="hikaku" className="scroll-mt-20 relative pb-3 mb-5 border-b-4 border-[#EAF1F8] text-base md:text-[22px] font-bold text-foreground">
            宇治市の鍵業者の一覧比較表
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
          <H2 id="isogi" num="2">宇治市で急いで鍵開けを依頼したい場合</H2>
          <p className="leading-loose mb-4">
            扉が閉まりきらない住宅では、施錠できないため外出できません。留守にする予定がある日は、その日のうちに対処する必要があります。駆けつけ時間の目安を公表している業者としては、<Hl>鍵の生活救急車が最短15分の駆けつけと全国約2,270店の拠点網</Hl>を掲げています。拠点数が多いことは、到着までの時間を短くする要素の一つです。また、<Hl>カギ110番は電話一本で最短5分の手配</Hl>（全国47都道府県の加盟店ネットワークから近隣の業者を手配する仕組み）を掲げています。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※いずれも「最短」の目安であり、拠点からの距離・交通状況・繁忙状況で到着時間は変わります。急ぎの場合も、電話の際に到着目安を確認してから依頼することをおすすめします。
          </p>

          {/* 3｜深夜 */}
          <H2 id="shinya" num="3">深夜・早朝の鍵トラブルの場合</H2>
          <p className="leading-loose mb-4">
            夜遅くに扉が閉まらなくなると、施錠できないまま朝を待つことになるため、早い時間に対応を判断することをおすすめします。一次確認値では<Hl>カギ110番・鍵のレスキューが24時間365日受付</Hl>を掲げており、カギの救急車も多くの加盟店が24時間受付です。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※24時間受付の業者でも、深夜帯は割増料金が加わる場合や、到着時間が変動する場合があります。電話の際に深夜料金の有無と総額を確認してから依頼することをおすすめします。
          </p>

          {/* 4｜料金明確 */}
          <H2 id="meikaku" num="4">料金を事前に確認したい場合</H2>
          <p className="leading-loose mb-4">
            原因が錠なのか別の器具なのかで、作業の内容も部材費も変わります。そのため、現物を確認したうえで総額を示す方針かどうかが重要です。<Hl>鍵のレスキューは鍵開け6,600円〜（税込）と出張料4,400〜8,800円（税込・地域により異なる）を公式サイトで分けて公開</Hl>しています。また、<Hl>鍵の生活救急車は出張・見積もり・キャンセルが無料</Hl>のため、提示された金額を見てから依頼するかどうかを判断できます。
          </p>
          <p className="leading-loose mb-4">
            どの業者に依頼する場合も、作業前に出張料・部材費・深夜割増まで含めた総額の見積もりをご確認ください。料金の目安は<Link href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場ページ</Link>で解説しています。
          </p>

          {/* 5｜自社スタッフ */}
          <H2 id="jisha" num="5">自社スタッフによる対応を希望する場合</H2>
          <p className="leading-loose mb-4">
            鍵業者には、依頼を受けて加盟店を手配する「紹介型」と、自社のスタッフが直接対応する「自社対応型」があります。紹介型は対応範囲が広い一方、店舗によって技術・対応に差が出ることがあります。扉の上部に付く器具の調整や交換は、錠の作業とは別の扱いになることがあります。対応できるかどうかを電話の段階で確認しておくと、到着後に対応を断られる事態を避けられます。
          </p>

          {/* 6｜エリア特有 */}
          <H2 id="uji-tips" num="6">宇治市で鍵業者に依頼する前の確認事項（扉が閉まりきらない・勢いよく閉まる場合のドアクローザーの確認）</H2>
          <p className="leading-loose mb-4">
            玄関の扉には、閉まる速さを調整する器具が付いていることがあります。<Hl>扉の上部と枠との間に渡された、腕のような金具がこれにあたります</Hl>。手を離しても扉がゆっくり閉まるのは、この器具が機能しているためです。この器具が劣化すると、最後まで閉まりきらずに手前で止まる、勢いよくバタンと閉まる、途中で止まって動かない、といった症状が出ます。<Hl>いずれも錠の不調とは別の問題で、鍵やシリンダーを替えても直りません</Hl>。詳しい症状と原因は<Link href="/door-closer/" className="text-primary underline">ドアクローザーの不具合</Link>で扱っています。
          </p>
          <p className="leading-loose mb-4">
            見分け方は単純です。<Hl>鍵を差さない状態で、扉そのものが正しく閉まるかどうかを確認してください</Hl>。手を添えて最後まで押して枠に正しく収まり、その後鍵も普通に回る場合は、錠に問題はありません。閉まる速さや止まる位置が問題であれば、扉の上部の器具が原因です。反対に、扉は正しく閉まるのに鍵が回らない場合や、施錠したのに扉が動いてしまう場合は、錠やラッチの問題です。切り分けの手順は<Link href="/kagi-mawaranai/" className="text-primary underline">鍵が回らないときの対処</Link>、ノブまわりの不調は<Link href="/doorknob-koukan/" className="text-primary underline">ドアノブ・ラッチの故障と交換</Link>が参考になります。
          </p>
          <p className="leading-loose mb-4">
            もう1つ確認すべき点は、扉が枠に当たっていないかどうかです。<Hl>建物の経年で枠がわずかにゆがむと、扉が最後まで入らなくなります</Hl>。この場合、器具を交換しても症状は残ります。閉めたときにどこかが擦れる音がする、当たっている跡が付いている、といった手がかりを探してください。扉・枠・器具・錠のどこに原因があるかで、依頼先も費用も変わります。原因が扉そのものにある場合は、錠だけを交換しても解決しません。扉ごと替える選択肢との比較は<Link href="/door-koukan-vs-kagi-koukan/" className="text-primary underline">ドア交換と鍵交換の切り分け</Link>、錠の寿命の目安は<Link href="/kagi-jumyou/" className="text-primary underline">鍵の寿命と交換の目安</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4">
            集合住宅では、もう1つ必要な手順があります。<Hl>玄関の扉そのものが共用部の扱いになっている建物では、勝手に器具を交換できません</Hl>。管理規約で、扉の外側や枠まわりは共用部、室内側は専有部、と分かれていることがあります。分譲か賃貸かでも窓口が変わります。まずは管理会社か管理組合に連絡し、どこまでがご自身の判断で対応できるのかをご確認ください。ご自身で手配してよいことを確認してから業者に電話すると、手戻りを防げます。賃貸まわりの費用の考え方は<Link href="/chintai-kagi-koukan-hiyou/" className="text-primary underline">賃貸の鍵交換費用</Link>で整理しています。
          </p>

          {/* 7｜選び方 */}
          <H2 id="erabikata" num="7">宇治市の鍵業者の選び方</H2>
          <p className="leading-loose mb-6">
            鍵業者を選ぶ際は、次の4つの手順で確認することをおすすめします。扉の不調は、原因の切り分けが済んでいるかどうかで進め方が変わります。
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
          <H2 id="faq" num="8">宇治市の鍵業者でよくある質問</H2>
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
            宇治市で鍵開け・鍵交換を依頼できる主要4社を、一次確認した料金・受付時間・運営会社の情報で比較しました。到着の早さを重視する場合は鍵の生活救急車やカギ110番、深夜・早朝の受付にはカギ110番・鍵のレスキュー、料金の明確さを重視する場合は鍵のレスキューというように、目的によって適した業者は異なります。
          </p>
          <p className="leading-loose mb-8">
            扉の閉まり方の不調は、鍵を交換しても直らない場合があります。まず鍵を差さずに扉だけを閉めてみて、速さや止まる位置の問題であれば扉の上部の器具、枠に当たる場合は扉や枠、鍵が回らない場合は錠が原因と切り分けてください。そのうえで、集合住宅の場合は管理側に確認します。この順番で進めることで、依頼先を誤らずに済みます。本記事の一次確認値を参考に、目的と予算に合った業者をお選びください。
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
              {["宇治市", "ドアクローザー", "扉が閉まらない", "原因の切り分け", "共用部の扱い", "エリア別"].map((t) => (
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
                { href: "/area/kyoto/", label: "京都の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/kyoto-fushimi/", label: "京都市伏見区の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/kyoto-nakagyo/", label: "京都市中京区の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/otsu/", label: "大津の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/osaka/", label: "大阪の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/nara/", label: "奈良の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/takatsuki/", label: "高槻市の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/hirakata/", label: "枚方市の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/ibaraki/", label: "茨木市の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/kobe/", label: "神戸の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/kusatsu/", label: "草津市の鍵開け・鍵交換業者おすすめ4選" },
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
                { href: "/door-closer/", label: "ドアクローザーの不具合" },
                { href: "/kagi-mawaranai/", label: "鍵が回らないときの対処" },
                { href: "/doorknob-koukan/", label: "ドアノブ・ラッチの故障と交換" },
                { href: "/door-koukan-vs-kagi-koukan/", label: "ドア交換と鍵交換の切り分け" },
                { href: "/kagi-jumyou/", label: "鍵の寿命と交換の目安" },
                { href: "/chintai-kagi-koukan-hiyou/", label: "賃貸の鍵交換費用" },
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
