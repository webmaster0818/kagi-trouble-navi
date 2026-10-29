import AgentIntro from "@/components/AgentIntro";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { AffBanner, AffText, hasAff } from "@/components/AffLink";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/shinagawa-ku/";
const UPDATED = "2026年10月29日";
const UPDATED_ISO = "2026-10-29";

export const metadata: Metadata = {
  title: {
    absolute:
      "【2026年最新】品川区の鍵交換・鍵開け業者おすすめ4選｜鍵交換料金の比較と転勤・入退去の鍵の段取り｜鍵トラブルナビ",
  },
  description:
    "品川区で鍵交換を頼める業者の料金（カギ110番 部材費込14,300円〜・鍵の生活救急車 11,000円＋部品代・鍵のレスキュー 6,600円〜＋部材費・出張料）を公式表示で比較。警視庁が案内する防犯性能の高い錠（CP部品）の選び方、見積もりの取り方、鍵開けの料金と受付時間、転勤・入退去の鍵の段取りもまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】品川区の鍵交換・鍵開け業者おすすめ4選｜鍵交換料金の比較と転勤・入退去の鍵の段取り",
    description:
      "品川区で鍵開け・鍵交換を依頼できる鍵業者4社を、料金・受付時間の一次確認値で比較。入居時の鍵交換の確認、入居中の合鍵管理、退去時の全本数返却まで、転勤族の鍵の段取りを時系列で解説します。",
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
        で、24時間365日受付・電話一本で最短5分の手配を掲げています。全国47都道府県の加盟店ネットワークが対象のため、品川区内の依頼でも近隣の加盟店が手配される仕組みです。見積もりは無料で、出張料・作業費・部材費を含めた金額を事前に提示する明朗会計を掲げています。
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
      { k: "対応エリア", v: "全国47都道府県（東京都対応）", note: "東京都対応の一次確認値。品川区での詳細な対応可否・条件は依頼時に各社へ確認" },
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
      : a.id === "seikatsu-kyukyusha"
        ? "8,800円〜（税込・刻みキー）"
          : a.id === "kagi-rescue"
            ? "6,600円〜（税込）＋出張料"
            : "11,000〜44,000円（税込・目安）",
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
    b: "「入居する部屋の鍵を交換したい」「退去までに合鍵を揃えたい」などの目的と期日、賃貸物件の場合は管理会社の連絡先をメモしておくと、手続きがスムーズです。賃貸の鍵まわりの交換・変更は、業者より先に管理会社・大家への確認が基本です。",
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
    t: "④ 急ぎでない場合は複数社を比較する",
    b: "締め出しなどの緊急時以外は、2〜3社から見積もりを取り、総額・条件を比較することをおすすめします。今回の4社はいずれも全国対応型で、品川区からも依頼できます（対応エリアは「東京都」としての一次確認値のため、詳細条件は各社へご確認ください）。金額に納得できない場合は、その場で契約せずにお断りいただくこともできます。",
  },
];

const faqs: AreaFaq[] = [
  {
    q: "品川区の鍵開け料金の相場はいくらですか？",
    a: "当サイトが一次確認した各社の公式表示では、鍵開けの基本料金はカギ110番11,000円〜、鍵のレスキュー6,600円〜（別途出張料4,400〜8,800円）、鍵の生活救急車8,800円〜（いずれも税込）、カギの救急車は公式目安11,000〜44,000円です。ただし、これらは最低価格または目安であり、鍵の種類（ディンプルキー等）・時間帯・出張距離で総額は変わります。作業前に総額の見積もりを取ることをおすすめします。詳しくは鍵開け・鍵交換の料金相場ページで解説しています。",
    link: { href: "/ryokin/", label: "料金相場の詳細はこちら" },
  },
  {
    q: "品川区で鍵交換を業者に頼むといくらかかりますか？",
    a: "各社の公式表示（税込の最低額、2026年10月29日確認）では、鍵交換はカギ110番が部材費込14,300円〜、鍵の生活救急車が開きドアのシリンダーで11,000円＋部品代、鍵のレスキューが6,600円〜（部材費と出張料4,400〜8,800円は別）です。カギの救急車は公式サイトに一律の鍵交換料金の掲載がなく、加盟店の見積もりで決まります。部品代を含むかどうかが業者によって違うため、シリンダー代・作業料・出張料を含めた総額の見積もりで比べることをおすすめします。",
    link: { href: "/kagiya-erabikata/", label: "鍵屋・鍵業者の選び方はこちら" },
  },
  {
    q: "深夜や早朝でも品川区に来てくれますか？",
    a: "カギ110番・鍵のレスキューは24時間365日受付を掲げており、カギの救急車も多くの加盟店が24時間受付です。ただし、深夜帯は割増料金や到着時間の変動が生じる場合があるため、電話の際に深夜料金の有無と到着目安を確認してから依頼することをおすすめします。なお各社の対応エリアは「東京都」としての一次確認値のため、品川区での詳細は依頼時に各社へご確認ください。",
  },
  {
    q: "入居時の鍵交換は必ず必要ですか？費用は誰の負担ですか？",
    a: "法律で義務付けられているものではなく、実施の有無も費用負担も契約・物件によって異なります。前の入居者や出所の分からない合鍵のリスクを断つ意味で、交換されているかどうかを入居前に確認することをおすすめします。交換費用を入居者負担とする契約も多いため、金額と内訳は契約書・重要事項説明でご確認ください。",
    link: { href: "/chintai-kagi-koukan-hiyou/", label: "賃貸の鍵交換費用はこちら" },
  },
  {
    q: "転勤で退去しますが、合鍵を1本なくしたままです。どうすればよいですか？",
    a: "管理会社・大家へ申告することをおすすめします。鍵が全数返却されない場合、防犯上の理由からシリンダー交換費用を請求されるのが一般的で、金額や負担割合は契約によります。退去立ち会いの当日に発覚すると精算でトラブルになりやすいため、退去日が決まった時点で本数を確認し、早めにご相談ください。",
    link: { href: "/taikyo-kagi-trouble/", label: "退去時の鍵トラブルはこちら" },
  },
  {
    q: "単身赴任先の合鍵を家族に渡しておきたいのですが、問題ありませんか？",
    a: "賃貸では合鍵の作製に貸主・管理会社の承諾を求める契約が一般的なため、まず契約内容をご確認ください。承諾を得て作る場合も、鍵番号が写った写真をSNSなどに掲載しない、渡した本数を把握しておく、退去時に全数回収するという3点を守ることをおすすめします。",
    link: { href: "/aikagi/", label: "合鍵の基礎知識はこちら" },
  },
  {
    q: "悪質な鍵業者を見分けるにはどうすればよいですか？",
    a: "広告の最低価格だけで選ばず、作業前に出張料・部材費まで含めた総額の見積もりを提示してもらうこと、承諾のない追加請求がない方針かを確認すること、運営会社名を確認すること（似た名前の別業者が複数あります）が重要です。提示額に納得できない場合は、その場で即決せずに断り、複数社を比較することをおすすめします。",
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

export default function AreaShinagawaKuPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】品川区の鍵交換・鍵開け業者おすすめ4選｜鍵交換料金の比較と転勤・入退去の鍵の段取り",
    description:
      "品川区で鍵開け・鍵交換を依頼できる鍵業者4社を、料金・受付時間の一次確認値で比較した記事です。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-08-16T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "品川区の鍵交換・鍵開け業者おすすめ4選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#koukan",
      label: "1｜品川区で鍵交換を頼む場合の料金・鍵の選び方・流れ",
      sub: [
        { href: "#koukan-ryokin", label: "鍵交換の料金（各社の公式表示）" },
        { href: "#cp", label: "交換する鍵の選び方（警視庁の案内）" },
        { href: "#nagare", label: "品川区で鍵交換を依頼する流れ" },
      ],
    },
    {
      href: "#top5",
      label: "2｜品川区で依頼できるおすすめの鍵業者4選",
      sub: [
        { href: "#hikaku", label: "品川区の鍵業者の一覧比較表" },
        ...agents.map((a) => ({ href: `#${a.id}`, label: `${a.num}｜【${a.catch}】${a.name}` })),
      ],
    },
    { href: "#isogi", label: "3｜急いで鍵開けを依頼したい場合" },
    { href: "#shinya", label: "4｜深夜・早朝のトラブルの場合" },
    { href: "#meikaku", label: "5｜料金を事前に確認したい場合" },
    { href: "#jisha", label: "6｜自社スタッフによる対応を希望する場合" },
    { href: "#tips", label: "7｜品川区で鍵業者に依頼する前の確認事項（単身赴任・転勤族の入退去と鍵の段取り）" },
    { href: "#erabikata", label: "8｜鍵業者の選び方" },
    { href: "#faq", label: "9｜品川区の鍵業者でよくある質問" },
    { href: "#matome", label: "10｜まとめ" },
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
              <li className="text-foreground">品川区の鍵交換・鍵開け業者おすすめ4選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-foreground">
              【2026年最新】品川区の鍵交換・鍵開け業者おすすめ4選｜鍵交換料金の比較と転勤・入退去の鍵の段取り
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
              {["品川区", "鍵開け", "鍵交換", "24時間対応", "業者比較"].map((t) => (
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
                alt="品川区の鍵開け・鍵交換業者の比較"
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
              交通の便がよく、単身赴任や転勤に伴う住み替えの多い品川区では、「辞令が出て、来月から単身赴任する」「数年ごとの転勤で入居と退去を繰り返している」といった方にとって、入退去のたびに発生する鍵の手続きが課題となります。入居時の鍵交換、入居中の合鍵の管理、退去時の返却まで、節目ごとに行うべきことを把握しておくことで、余計な出費とトラブルを防げます。
            </p>
            <p>
              本記事では、品川区内から依頼できる主要な鍵業者4社を、当サイト編集部が各社公式サイト等で一次確認した料金・受付時間・運営会社の情報だけで比較しました。あわせて、単身赴任・転勤の入居から退去までの鍵の段取りを時系列で整理しています。鍵業者選びの参考としてご活用ください。
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

          {/* 1｜鍵交換 */}
          <H2 id="koukan" num="1">品川区で鍵交換を頼む場合の料金・鍵の選び方・流れ</H2>
          <p className="leading-loose mb-6">
            品川区で玄関の鍵交換を業者に頼む場合、費用は業者の料金体系（部品代を含むか・出張料が別か）と、交換するシリンダーの種類で決まります。
            ここでは、各社の公式表示の料金、警視庁が案内する防犯性能の高い錠の選び方、依頼の流れを順にまとめます。
          </p>

          <h3 id="koukan-ryokin" className="scroll-mt-20 relative pb-3 mb-5 border-b-4 border-[#EAF1F8] text-base md:text-[22px] font-bold text-foreground">
            鍵交換の料金（各社の公式表示）
            <span className="absolute bottom-[-4px] left-0 h-[4px] w-24 bg-gradient-to-r from-primary to-[#3E86C9]" />
          </h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 whitespace-nowrap text-left">業者名</th>
                  <th className="border border-border px-3 py-2 whitespace-nowrap text-left">鍵交換の料金（税込・最低額）</th>
                  <th className="border border-border px-3 py-2 whitespace-nowrap text-left">部品代・出張料</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { slug: "kagi110ban", name: "カギ110番", price: "14,300円〜（ご自宅の鍵交換）", note: "部材費込。交通費は別途かかる場合あり" },
                  { slug: "seikatsu-kyukyusha", name: "鍵の生活救急車", price: "11,000円＋部品代（開きドアのシリンダー）", note: "部品代は別。引き戸錠のシリンダーは16,500円＋部品代" },
                  { slug: "kagi-rescue", name: "鍵のレスキュー", price: "6,600円〜", note: "部材費は別。出張料4,400〜8,800円（地域により異なる）" },
                  { slug: "kagi-kyukyusha", name: "カギの救急車", price: "加盟店の見積もり", note: "公式サイトに一律の鍵交換料金の掲載なし" },
                ].map((r, i) => (
                  <tr key={r.slug} className={i % 2 === 1 ? "bg-[#F5F8FC]" : "bg-white"}>
                    <td className="border border-border px-3 py-2 font-bold whitespace-nowrap">
                      <Link href={`/agents/${r.slug}/`} className="text-primary underline">{r.name}</Link>
                    </td>
                    <td className="border border-border px-3 py-2">{r.price}</td>
                    <td className="border border-border px-3 py-2">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-4">
            出典：
            <a href="https://www.kagi110ban.jp/price/" target="_blank" rel="noopener noreferrer" className="text-primary underline">カギ110番 料金</a>
            ・
            <a href="https://kagi-seikatsukyukyusya.com/price/" target="_blank" rel="noopener noreferrer" className="text-primary underline">鍵の生活救急車 料金表</a>
            ・
            <a href="https://www.kagi110qq.co.jp/price/price.html" target="_blank" rel="noopener noreferrer" className="text-primary underline">鍵のレスキュー 料金</a>
            ・
            <a href="https://www.kagi110qq.co.jp/about/transaction.html" target="_blank" rel="noopener noreferrer" className="text-primary underline">同 特定商取引法上の表記</a>
            ・
            <a href="https://www.kagi1109948.com/service/koukan/" target="_blank" rel="noopener noreferrer" className="text-primary underline">カギの救急車 カギの交換/取付</a>
            （いずれも2026年10月29日確認）
          </p>
          <p className="leading-loose mb-10 text-sm">
            部品代を含むかどうかが社によって違うため、広告の金額だけで比べず<Hl>「シリンダー代・作業料・出張料を含めた総額」で見積もりを比べる</Hl>ことをおすすめします。急ぎでない鍵交換は、2〜3社に同じ条件（扉の数・シリンダーの種類）で見積もりを取って比べてください。賃貸の場合の費用負担は<Link href="/chintai-kagi-koukan-hiyou/" className="text-primary underline">賃貸の鍵交換費用</Link>、業者の選び方の一般的な確認点は<Link href="/kagiya-erabikata/" className="text-primary underline">鍵屋・鍵業者の選び方</Link>で解説しています。
          </p>

          <h3 id="cp" className="scroll-mt-20 relative pb-3 mb-5 border-b-4 border-[#EAF1F8] text-base md:text-[22px] font-bold text-foreground">
            交換する鍵の選び方（警視庁の案内）
            <span className="absolute bottom-[-4px] left-0 h-[4px] w-24 bg-gradient-to-r from-primary to-[#3E86C9]" />
          </h3>
          <p className="leading-loose mb-4">
            警視庁は侵入窃盗の防犯対策として、ピッキングやサムターン回しなどの<Hl>不正解錠に強い建物部品（CP部品）への交換を検討する</Hl>よう案内しています。CP部品は、平成14年11月に警察庁等の関係省庁と民間団体が結成した「官民合同会議」で工具等を使った試験を行い、一定の防犯性能があると認定された建物部品です。また、1つのドアに錠が2つ以上あると侵入に時間がかかるため、補助錠の取り付けも案内しています。
          </p>
          <p className="leading-loose mb-4">
            見積もりを取る際は、<Hl>交換後のシリンダーがCP部品かどうか</Hl>と、補助錠を付ける場合の費用もあわせて業者に確認してください。CP部品の詳細は<Link href="/cp-nintei-jou/" className="text-primary underline">CP認定錠の解説</Link>をご覧ください。
          </p>
          <p className="text-xs text-text-muted mb-10">
            出典：<a href="https://www.keishicho.metro.tokyo.lg.jp/kurashi/higai/akisu/akisu.html" target="_blank" rel="noopener noreferrer" className="text-primary underline">警視庁「侵入窃盗の防犯対策」</a>（2026年10月29日確認）
          </p>

          <h3 id="nagare" className="scroll-mt-20 relative pb-3 mb-5 border-b-4 border-[#EAF1F8] text-base md:text-[22px] font-bold text-foreground">
            品川区で鍵交換を依頼する流れ
            <span className="absolute bottom-[-4px] left-0 h-[4px] w-24 bg-gradient-to-r from-primary to-[#3E86C9]" />
          </h3>
          <ol className="leading-loose mb-10 list-decimal pl-6 space-y-2">
            <li>賃貸の場合は、業者に連絡する前に管理会社・大家の許可を得る</li>
            <li>扉の数・現在のシリンダーの種類（刻みキー・ディンプルキー等）を確認する</li>
            <li>2〜3社に同じ条件で、部品代・作業料・出張料を含めた総額の見積もりを取る</li>
            <li>作業後は、領収書と新しい鍵の本数を確認して保管する</li>
          </ol>

          {/* 2｜4選 */}
          <H2 id="top5" num="2">品川区で依頼できるおすすめの鍵業者4選</H2>
          <p className="leading-loose mb-2">
            品川区内から依頼できる主要な鍵業者4社を紹介します。掲載している料金・受付時間・運営会社は、いずれも編集部が各社公式サイト等で一次確認した値です（確認日は各社の欄に記載）。各社の対応エリアは「東京都」としての一次確認値のため、品川区での詳細な対応可否・条件は依頼時に各社へご確認ください。実際の総額は鍵の種類・時間帯・出張距離で変わるため、必ず作業前に見積もりで確認してください。
          </p>
          <p className="text-sm text-text-muted mb-8">
            ※<Link href="/area/tokyo/" className="text-primary underline">東京都全体の情報はこちら</Link>（東京都版では都内の主要4社を同じ一次確認値で比較しています）。
          </p>

          <h3 id="hikaku" className="scroll-mt-20 relative pb-3 mb-5 border-b-4 border-[#EAF1F8] text-base md:text-[22px] font-bold text-foreground">
            品川区の鍵業者の一覧比較表
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
          <H2 id="isogi" num="3">品川区で急いで鍵開けを依頼したい場合</H2>
          <p className="leading-loose mb-4">
            締め出しなどで急ぎの鍵開けが必要な場合は、駆けつけ時間の目安を公表している業者が候補となります。<Hl>鍵の生活救急車は最短15分の駆けつけと全国約2,270店の拠点網</Hl>を掲げています。拠点数が多いことは、到着までの時間を短くする要素の一つです。また、<Hl>カギ110番は電話一本で最短5分の手配</Hl>（全国47都道府県の加盟店ネットワークから近隣の業者を手配する仕組み）を掲げています。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※いずれも「最短」の目安であり、拠点からの距離・交通状況・繁忙状況で到着時間は変わります。急ぎの場合も、電話の際に到着目安を確認してから依頼することをおすすめします。
          </p>

          {/* 3｜深夜 */}
          <H2 id="shinya" num="4">深夜・早朝の鍵トラブルの場合</H2>
          <p className="leading-loose mb-4">
            品川区でも、深夜の締め出しや帰宅後に紛失へ気づくトラブルは起こり得ます。この時間帯の依頼先となるのは24時間受付の業者です。一次確認値では<Hl>カギ110番・鍵のレスキューが24時間365日受付</Hl>を掲げており、カギの救急車も多くの加盟店が24時間受付です。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※24時間受付の業者でも、深夜帯は割増料金が加わる場合や、到着時間が変動する場合があります。電話の際に深夜料金の有無と総額を確認してから依頼することをおすすめします。
          </p>

          {/* 4｜料金明確 */}
          <H2 id="meikaku" num="5">料金を事前に確認したい場合</H2>
          <p className="leading-loose mb-4">
            鍵業者とのトラブルで多いのは、作業後に想定外の金額を請求されるケースです。料金の透明性を重視する場合、<Hl>鍵のレスキューは鍵開け6,600円〜（税込）と出張料4,400〜8,800円（税込・地域により異なる）を公式サイトで分けて公開</Hl>しています。また、<Hl>鍵の生活救急車は出張・見積もり・キャンセルが無料</Hl>のため、提示された金額を見てから依頼するかどうかを判断できます。
          </p>
          <p className="leading-loose mb-4">
            どの業者に依頼する場合も、作業前に出張料・部材費・深夜割増まで含めた総額の見積もりをご確認ください。料金の目安は<Link href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場ページ</Link>で解説しています。
          </p>

          {/* 5｜自社スタッフ */}
          <H2 id="jisha" num="6">自社スタッフによる対応を希望する場合</H2>
          <p className="leading-loose mb-4">
            鍵業者には、依頼を受けて加盟店を手配する「紹介型」と、自社のスタッフが直接対応する「自社対応型」があります。紹介型は対応範囲が広い一方、店舗によって技術・対応に差が出ることがあります。担当者の所属を確認したい場合は、依頼時に「自社スタッフか協力店か」をご確認ください。
          </p>

          {/* 6｜区特有 */}
          <H2 id="tips" num="7">品川区で鍵業者に依頼する前の確認事項（単身赴任・転勤族の入退去と鍵の段取り）</H2>
          <p className="leading-loose mb-4">
            入居時の出発点は、<Hl>鍵交換の実施の有無と費用負担を契約書で確認する</Hl>ことです。入居時の鍵交換は、前の入居者や出所の分からない合鍵のリスクを断つためのもので、実施の有無・負担者は物件によって異なります。交換されていない部屋を自費で交換したい場合も、必ず貸主・管理会社の承諾を得てから進めてください。費用の目安は<Link href="/chintai-kagi-koukan-hiyou/" className="text-primary underline">賃貸の鍵交換費用</Link>、入居前後に行うべきことは<Link href="/hikkoshi-kagi-checklist/" className="text-primary underline">引っ越しの鍵チェックリスト</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4">
            入居中は、<Hl>合鍵を勝手に増やさない</Hl>ことが大切です。賃貸の鍵は貸主からの貸与物で、複製に承諾を求める契約が一般的です。単身赴任で留守がちな住まいでは特に、鍵をなくした場合は放置せずに管理会社へ報告し、必要に応じて交換をご相談ください。外出先で紛失した場合の対処は<Link href="/kagi-funshitsu/" className="text-primary underline">鍵をなくしたときの対処</Link>、合鍵の考え方は<Link href="/aikagi/" className="text-primary underline">合鍵の基礎知識</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4">
            退去時は、<Hl>入居時に受け取った鍵と、承諾を得て作った合鍵を含む全本数の返却</Hl>が基本です。1本でも欠けていると、防犯上の理由からシリンダー交換費用を請求される場合があります。転勤の慌ただしさの中では、紛失に気づくのが退去直前になりがちです。退去日が決まったら、まず手元の鍵の本数を確認してください。退去時に起きやすいトラブルと対処は<Link href="/taikyo-kagi-trouble/" className="text-primary underline">退去時の鍵トラブル</Link>で詳しく解説しています。
          </p>

          {/* 7｜選び方 */}
          <H2 id="erabikata" num="8">品川区の鍵業者の選び方</H2>
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
          <p className="leading-loose mb-8 text-sm md:text-base">
            電話で確認する質問（総額・断った場合の費用・運営会社・到着時刻）と、作業前・支払い時の確認事項は、地域を問わない<Link href="/kagiya-erabikata/" className="text-primary underline">鍵屋・鍵業者の選び方チェックリスト</Link>にまとめています（国民生活センターの出張解錠の相談事例にもとづく）。
          </p>

          {/* 8｜FAQ */}
          <H2 id="faq" num="9">品川区の鍵業者でよくある質問</H2>
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
          <H2 id="matome" num="10">まとめ</H2>
          <p className="leading-loose mb-4">
            品川区で鍵開け・鍵交換を依頼できる主要4社を、一次確認した料金・受付時間・運営会社の情報で比較しました。到着の早さを重視する場合は鍵の生活救急車やカギ110番、深夜・早朝のトラブルにはカギ110番・鍵のレスキュー、料金の明確さを重視する場合は鍵のレスキューというように、目的によって適した業者は異なります。
          </p>
          <p className="leading-loose mb-8">
            単身赴任・転勤の住み替えは、入居時の「交換の有無と負担の確認」、入居中の「合鍵管理と紛失時の報告」、退去時の「全本数の返却」という3つの節目を押さえるだけで、鍵にまつわる出費とトラブルの多くを防げます。業者へ依頼する場合も、賃貸物件では管理会社・大家への確認を優先してください。本記事の一次確認値を参考に、状況に合った業者をお選びください。
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
              {["品川区", "東京23区", "鍵開け", "鍵交換", "24時間対応", "エリア別"].map((t) => (
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
                { href: "/area/tokyo/", label: "東京の鍵開け・鍵交換業者おすすめ4選（東京都全体）" },
                { href: "/area/shinjuku-ku/", label: "新宿区の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/setagaya-ku/", label: "世田谷区の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/ota-ku/", label: "大田区の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/nerima-ku/", label: "練馬区の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/edogawa-ku/", label: "江戸川区の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/adachi-ku/", label: "足立区の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/suginami-ku/", label: "杉並区の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/itabashi-ku/", label: "板橋区の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/koto-ku/", label: "江東区の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/katsushika-ku/", label: "葛飾区の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/kita-ku/", label: "北区の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/nakano-ku/", label: "中野区の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/toshima-ku/", label: "豊島区の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/meguro-ku/", label: "目黒区の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/bunkyo-ku/", label: "文京区の鍵開け・鍵交換業者おすすめ4選" },
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
                { href: "/hikkoshi-kagi-checklist/", label: "引っ越しの鍵チェックリスト" },
                { href: "/chintai-kagi-koukan-hiyou/", label: "賃貸の鍵交換費用" },
                { href: "/taikyo-kagi-trouble/", label: "退去時の鍵トラブル" },
                { href: "/aikagi/", label: "合鍵の基礎知識" },
                { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
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
