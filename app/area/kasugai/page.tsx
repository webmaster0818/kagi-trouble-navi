import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/kasugai/";
const UPDATED = "2026年9月9日";
const UPDATED_ISO = "2026-09-09";

export const metadata: Metadata = {
  title: {
    absolute:
      "【2026年最新】春日井市の鍵開け・鍵交換業者おすすめ5選！同居の高齢の親が中から鍵をかけて家族が入れないときの動き方と室内錠の備えも分かる鍵屋比較｜鍵トラブルナビ",
  },
  description:
    "春日井市で鍵開け・鍵交換を頼める鍵業者5社を一次確認値で比較。カギ110番（鍵開け6,600円〜）・鍵の生活救急車（最短15分）・JBR・鍵のレスキュー・カギの救急車の料金と受付時間、同居している高齢の親が室内で鍵をかけてしまい家族が入れないときの動き方と、トイレ・浴室など室内錠の備え方まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】春日井市の鍵開け・鍵交換業者おすすめ5選！同居の高齢の親が中から鍵をかけて家族が入れないときの動き方と室内錠の備えも分かる鍵屋比較",
    description:
      "春日井市で鍵開け・鍵交換を頼める鍵業者5社を、料金・受付時間の一次確認値で比較。同居の高齢の親が中から鍵をかけてしまったときの動き方と、室内錠の備え方も解説します。",
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
        です。<Hl>鍵開け6,600円〜（税込・公式表示）</Hl>
        で、24時間365日受付・電話一本で最短5分の手配をうたっています。全国47都道府県の加盟店ネットワークが対象のため、春日井市内の依頼でも近隣の加盟店が手配される仕組みです。見積もりは無料で、出張費・作業費・部材費を含めた金額を事前に提示する明朗会計を掲げています。
      </>
    ),
    recommend: [
      "深夜・早朝など緊急で鍵トラブルを解決したい人",
      "上場企業運営のサービスに依頼したい人",
      "無料見積もりで総額を確認してから決めたい人",
      "金庫や車の鍵もまとめて相談したい人",
    ],
    table: [
      { k: "鍵開け料金", v: "6,600円〜（税込）", note: "公式表示・2026年7月4日確認。加盟店・エリアにより異なる場合あり" },
      { k: "受付時間", v: "24時間365日" },
      { k: "対応エリア", v: "全国47都道府県（愛知県対応）", note: "愛知県対応の一次確認値。春日井市での詳細な対応可否・条件は依頼時に各社へ確認" },
      { k: "見積もり", v: "無料", note: "交通費・キャンセル料は別途発生する場合ありと公式記載" },
      { k: "運営会社", v: "シェアリングテクノロジー株式会社" },
    ],
    memo:
      "公式サイトで鍵開け6,600円〜（税込）の表示を確認。公式にも「対応エリア・加盟店により記載価格や条件では対応できない場合がある」と明記されており、実際の金額は現地の無料見積もりで確定します。加盟店紹介型のため、対応品質は店舗により差が出ることがあります。",
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
        のため、金額を見てから依頼するかどうかを判断できます。作業前に料金を説明し、同意のうえで作業する方式です。
      </>
    ),
    recommend: [
      "とにかく早く駆けつけてほしい人",
      "見積もりを見てから依頼を決めたい人",
      "拠点数の多いサービスに依頼したい人",
      "作業前の料金説明と同意を重視する人",
    ],
    table: [
      { k: "鍵開け料金", v: "8,800円〜（税込）", note: "鍵の種類・作業内容で変動" },
      { k: "駆けつけ", v: "最短15分", note: "拠点からの距離・繁忙状況で変動" },
      { k: "拠点数", v: "全国約2,270店" },
      { k: "見積もり", v: "出張・見積もり・キャンセル無料" },
      { k: "運営会社", v: "株式会社生活救急車" },
    ],
    memo:
      "公式サイトで鍵開け8,800円〜、出張・見積もり・キャンセル無料の記載を確認。運営は株式会社生活救急車で、名称の似た「カギの生活救急車（JBR）」とは別のサービスです。混同にご注意ください。",
    memoDate: "2026年7月4日確認",
  },
  {
    id: "jbr",
    slug: "jbr",
    num: "1-3",
    catch: "賠償責任保険加入の大手",
    name: "JBR（ジャパンベストレスキュー）",
    intro: (
      <>
        JBRは、鍵・水回り・ガラスなど暮らしのトラブル解決を全国展開する
        <Hl>大手レスキューグループ</Hl>です。鍵開けは8,800円〜（税込）が目安で、
        <Hl>24時間365日受付・出張見積もり無料</Hl>。
        <Hl>賠償責任保険に加入</Hl>
        しており、万が一の際の備えがある点は大手ならではの安心材料です。鍵開け・鍵交換から金庫・車の鍵まで幅広く対応しています。
      </>
    ),
    recommend: [
      "大手グループの安心感を重視したい人",
      "保険加入の業者に依頼したい人",
      "深夜・早朝の緊急トラブルで困っている人",
      "金庫・車の鍵など幅広く相談したい人",
    ],
    table: [
      { k: "鍵開け料金", v: "8,800円〜（税込）", note: "ディンプルキーの解錠は33,000円〜が目安" },
      { k: "受付時間", v: "24時間365日" },
      { k: "見積もり", v: "出張見積もり無料" },
      { k: "保険", v: "賠償責任保険に加入" },
      { k: "運営", v: "全国対応の大手レスキューグループ（JBR）" },
    ],
    memo:
      "公式情報で鍵開け8,800円〜（税込）、24時間365日受付、出張見積もり無料、賠償責任保険加入を確認。防犯性の高い鍵は料金が上がりやすいため、作業前に総額を確認するのがおすすめです。",
    memoDate: "2026年7月4日確認",
  },
  {
    id: "kagi-rescue",
    slug: "kagi-rescue",
    num: "1-4",
    catch: "料金HP明示・自社社員対応",
    name: "鍵のレスキュー",
    intro: (
      <>
        鍵のレスキューは、株式会社鍵が運営する鍵トラブル解決サービスです。
        <Hl>料金をホームページで明示し、現場での追加費用がない明朗会計</Hl>
        を掲げているのが大きな特徴で、鍵開けは8,000円〜、出張料は距離に応じて0円〜8,800円です。
        <Hl>全国約20拠点を自社社員で対応</Hl>
        しており、24時間365日受付。女性スタッフの指名も可能です。
      </>
    ),
    recommend: [
      "料金を事前に明確にしてから依頼したい人",
      "現場での追加請求を避けたい人",
      "下請けではなく自社スタッフに対応してほしい人",
      "女性スタッフに対応してほしい人",
    ],
    table: [
      { k: "鍵開け料金", v: "8,000円〜", note: "鍵の種類で変動" },
      { k: "出張料", v: "0円〜8,800円", note: "出張距離に応じて変動" },
      { k: "追加費用", v: "現場での追加費用なし", note: "事前見積もりから追加請求なし" },
      { k: "受付・体制", v: "24時間365日・全国約20拠点を自社社員で対応" },
      { k: "運営会社", v: "株式会社鍵" },
    ],
    memo:
      "料金のホームページ明示・現場での追加費用なし・自社社員対応を確認（2026年7月時点の調査）。運営は株式会社鍵で、名称の似た「カギ110番（シェアリングテクノロジー株式会社）」とは別会社です。",
    memoDate: "2026年7月時点の調査",
  },
  {
    id: "kagi-kyukyusha",
    slug: "kagi-kyukyusha",
    num: "1-5",
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
      "近くの加盟店（街の鍵屋）に来てほしい人",
      "作業前に総額見積もりを取って納得してから依頼したい人",
      "複数社を自分で比較したうえで選びたい人",
    ],
    table: [
      { k: "鍵開け料金", v: "11,000〜44,000円（税込・公式目安）", note: "住宅一般の目安。実額は加盟店ごとに異なる" },
      { k: "受付時間", v: "多くの加盟店が24時間受付", note: "営業時間は店舗により異なる" },
      { k: "見積もり", v: "作業前に総額を見積り・承諾のない追加料金なし（公式明記）" },
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
      ? "6,600円〜（税込）"
      : a.id === "kagi-rescue"
        ? "8,000円〜"
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
        : a.id === "jbr"
          ? "賠償責任保険加入・出張見積無料"
          : a.id === "kagi-rescue"
            ? "料金HP明示・現場追加費用なし"
            : "作業前に総額見積り（公式明記）",
}));

const steps = [
  {
    t: "① 状況と鍵の種類を整理する",
    b: "「開かない」「なくした」「交換したい」といった状況に加えて、室内に人がいるかどうかを最初に伝えましょう。親が中にいて内側から施錠されている場合は、玄関の錠なのか、トイレや浴室、居室のドアの室内錠なのか、チェーンや補助錠がかかっているのかで作業の内容が変わります。あわせて、親と会話ができているか、体調に不安がないかを業者に伝えると、優先度や対応の判断材料になります。",
  },
  {
    t: "② 出張費・夜間料金を含めた総額の見積もりを取る",
    b: "広告の「◯◯円〜」は最低価格で、実際は鍵の種類・出張距離・時間帯で変わります。深夜に呼ぶ場合は、深夜割増の有無が総額を大きく左右します。作業前に、出張費・部材費・深夜割増まで含めた総額を必ず確認しましょう。見積もり無料・キャンセル無料の業者なら、金額を見てから断ることもできます。",
  },
  {
    t: "③ 運営会社を確認する",
    b: "鍵業界には「カギ110番」「鍵の110番救急車」「カギの救急車」「カギの生活救急車」など名前のよく似たサービスが複数あり、運営会社はそれぞれ別です。依頼前にサービス名だけでなく運営会社名まで確認すると取り違えを防げます。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "室内に人がいる締め出しなどの緊急時以外は、2〜3社から見積もりを取って総額・条件を比較するのがおすすめです。室内錠を外から開けられるものへ替える、玄関の鍵を家族が扱いやすいものへ替えるといった日程に余裕がある依頼なら、じっくり比較する価値があります。今回の5社はいずれも全国対応型で、春日井市からも依頼できます（対応エリアは「愛知県」としての一次確認値のため、詳細条件は各社へ確認を）。",
  },
];

const faqs: AreaFaq[] = [
  {
    q: "春日井市の鍵開け料金の相場はいくらですか？",
    a: "当サイトが一次確認した各社の公式表示では、鍵開けの基本料金はカギ110番6,600円〜、鍵のレスキュー8,000円〜、鍵の生活救急車・JBR8,800円〜（いずれも税込）、カギの救急車は公式目安11,000〜44,000円です。ただしこれは住宅の鍵開けを含む最低価格や目安で、鍵の種類・時間帯・出張距離で総額は変わります。玄関の錠か室内錠かで作業内容も異なるため、どの扉のどの錠かを伝えたうえで総額の見積もりを取りましょう。",
    link: { href: "/ryokin/", label: "料金相場の詳細はこちら" },
  },
  {
    q: "同居の親が中から玄関の鍵をかけてしまい、家族が入れません。鍵業者に頼めますか？",
    a: "依頼できます。ただし、内側からサムターンを回して施錠しただけなら家族の鍵で開けられるはずなので、開かない原因はチェーンや内側専用の補助錠、あるいは鍵そのものの不調にあることが多いです。電話では「室内に高齢の家族がいる」「会話ができているか」「どの錠がかかっているか」を最初に伝えてください。返事がない、様子がおかしいといった場合は、鍵業者より先に119番へ連絡してください。",
    link: { href: "/shimedashi/", label: "締め出されたときの対処はこちら" },
  },
  {
    q: "親がトイレや浴室に閉じこもって出てこられません。どうすればいいですか？",
    a: "室内錠の多くは、外側にコインやマイナスドライバーで回せる非常解錠の溝が付いています。まずドアの外側のつまみや小さな穴を確認し、取扱説明書や錠の型番からその開け方を確かめてください。それでも開かない、本人の体調が心配といった場合は、ためらわず119番へ連絡し、並行して鍵業者にも状況を伝えて相談しましょう。",
    link: { href: "/shitsunai-toilet-kagi/", label: "室内・トイレの鍵の解説はこちら" },
  },
  {
    q: "夜中に親が出て行かないように、内側に鍵を増やしてもいいですか？",
    a: "内側に鍵を増やすと、火事や急病のときに本人も家族も出入りできなくなる危険があります。まずは施錠の状態を家族が把握できる仕組みや、ドアの開閉を知らせる道具など、閉じ込めない方法を検討してください。どうしても施錠が必要な場合は、家族全員が外からも中からも開けられる方法を確保したうえで、かかりつけの医療機関や介護の相談窓口にも相談することをおすすめします。",
    link: { href: "/kagi-shimewasure-taisaku/", label: "鍵の閉め忘れ対策はこちら" },
  },
  {
    q: "深夜や早朝でも春日井市に来てくれますか？",
    a: "カギ110番・JBR・鍵のレスキューは24時間365日受付を掲げており、カギの救急車も多くの加盟店が24時間受付です。深夜帯は割増料金や到着時間の変動があり得るため、電話の際に深夜料金の有無と到着目安を確認してから依頼するのがおすすめです。なお各社の対応エリアは「愛知県」としての一次確認値のため、春日井市での詳細は依頼時に各社へご確認ください。",
  },
  {
    q: "同じことを繰り返さないために、家の鍵をどう見直せばいいですか？",
    a: "玄関はチェーンや内側専用の補助錠に頼りすぎず、家族が外から開けられる状態を保つことが基本です。室内錠は外側から非常解錠できるものへ替え、その開け方を家族全員が知っておきましょう。合鍵は同居の家族だけでなく、近くに住む親族にも一本預けておくと、家族が留守のときに助けを呼べます。鍵の場所や開け方を紙に書いて共有しておくと、慌てたときにも迷いません。",
    link: { href: "/aikagi/", label: "合鍵の作り方はこちら" },
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

export default function AreaPageKasugai() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】春日井市の鍵開け・鍵交換業者おすすめ5選！同居の高齢の親が中から鍵をかけて家族が入れないときの動き方と室内錠の備えも分かる鍵屋比較",
    description:
      "春日井市で鍵開け・鍵交換を頼める鍵業者5社を、料金・受付時間の一次確認値で比較。同居の高齢の親が中から鍵をかけてしまったときの動き方と、室内錠の備え方も解説します。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-09-09T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "春日井市の鍵開け・鍵交換業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#top5",
      label: "1｜春日井市で人気のおすすめ・優良の鍵業者5選",
      sub: [
        { href: "#hikaku", label: "春日井市の鍵業者を一覧表で徹底比較" },
        ...agents.map((a) => ({ href: `#${a.id}`, label: `${a.num}｜【${a.catch}】${a.name}` })),
      ],
    },
    { href: "#isogi", label: "2｜とにかく急いで開けてほしいなら" },
    { href: "#shinya", label: "3｜深夜・早朝のトラブルなら" },
    { href: "#meikaku", label: "4｜料金を事前に明確にしたいなら" },
    { href: "#jisha", label: "5｜自社スタッフ対応にこだわるなら" },
    { href: "#tips", label: "6｜春日井市で鍵業者を呼ぶ前に確認したいこと（親が中にいる締め出しは「様子の確認」と「錠の切り分け」から）" },
    { href: "#erabikata", label: "7｜失敗しない鍵業者の選び方" },
    { href: "#faq", label: "8｜春日井市の鍵業者でよくある質問" },
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
              <li className="text-foreground">春日井市の鍵開け・鍵交換業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-foreground">
              【2026年最新】春日井市の鍵開け・鍵交換業者おすすめ5選！同居の高齢の親が中から鍵をかけて家族が入れないときの動き方と室内錠の備えも分かる鍵屋比較
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
              {["春日井市", "同居の親", "室内錠", "締め出し", "業者比較"].map((t) => (
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
                alt="春日井市の鍵開け・鍵交換業者の比較"
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
              春日井市は名古屋市の北東に隣接し、古くからの住宅地と新しい戸建ての街区が混じり合うエリアです。親世帯と子世帯が同じ家で暮らす住まいも多く、家族の生活時間がずれるなかで「親が中から鍵をかけてしまい、帰宅した家族が入れない」「親がトイレや浴室に閉じこもって出てこられない」といった、家の外からではなく内側で起きる鍵のトラブルが相談されます。自分の鍵をなくした場合と違い、中に人がいるぶん、焦りも判断の難しさも大きくなります。
            </p>
            <p>
              本記事では、春日井市内から依頼できる主要な鍵業者5社を、当サイト編集部が各社公式サイト等で一次確認した料金・受付時間・運営会社の情報だけで比較しました。あわせて、同居の高齢の親が中から鍵をかけてしまったときに何を確かめ、どの順で動けばよいか、トイレ・浴室などの室内錠をどう備えておけばよいかを整理しています。
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
          <H2 id="top5" num="1">春日井市で人気のおすすめ・優良の鍵業者5選</H2>
          <p className="leading-loose mb-2">
            春日井市内から依頼できる主要な鍵業者5社を紹介します。掲載している料金・受付時間・運営会社は、いずれも編集部が各社公式サイト等で一次確認した値です（確認日は各社の欄に記載）。各社の対応エリアは「愛知県」としての一次確認値のため、春日井市での詳細な対応可否・条件は依頼時に各社へご確認ください。実際の総額は鍵の種類・時間帯・出張距離で変わるため、必ず作業前に見積もりで確認してください。
          </p>
          <p className="text-sm text-text-muted mb-8">
            ※近隣エリアの比較は<Link href="/area/nagoya/" className="text-primary underline">名古屋版</Link>・<Link href="/area/nagoya-meito/" className="text-primary underline">名古屋市名東区版</Link>・<Link href="/area/gifu/" className="text-primary underline">岐阜版</Link>もご覧ください。
          </p>

          <h3 id="hikaku" className="scroll-mt-20 relative pb-3 mb-5 border-b-4 border-[#EAF1F8] text-base md:text-[22px] font-bold text-foreground">
            春日井市の鍵業者を一覧表で徹底比較
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

              <p className="leading-loose">{a.intro}</p>

              <H4>こんな人におすすめ</H4>
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
                  {a.name}の詳細レビューを見る
                </Link>
              </div>
            </section>
          ))}

          {/* 2｜急ぎ */}
          <H2 id="isogi" num="2">春日井市の鍵業者をとにかく急いで開けてほしいなら</H2>
          <p className="leading-loose mb-4">
            室内に親が残ったまま入れない状況では、到着までの時間がそのまま不安の時間になります。急ぎで開けてほしい場面に備えて、駆けつけの目安は押さえておきましょう。駆けつけスピードの目安を公表している業者としては、<Hl>鍵の生活救急車が最短15分の駆けつけと全国約2,270店の拠点網</Hl>をうたっており、拠点数の多さは到着スピードの裏付けになります。また、<Hl>カギ110番は電話一本で最短5分の手配</Hl>（全国47都道府県の加盟店ネットワークから近隣の業者を手配）を掲げています。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※いずれも「最短」の目安であり、拠点からの距離・交通状況・繁忙状況で到着時間は変わります。急ぎのときこそ、電話の際に到着目安を確認してから依頼しましょう。室内の家族の様子が心配なときは、鍵業者より先に119番へ連絡してください。
          </p>

          {/* 3｜深夜 */}
          <H2 id="shinya" num="3">深夜・早朝の鍵トラブルなら</H2>
          <p className="leading-loose mb-4">
            親が夜中に内側から鍵をかけてしまい、遅く帰宅した家族が入れないといった場面では、時間帯を選ぶ余裕がありません。一次確認値では<Hl>カギ110番・JBR・鍵のレスキューが24時間365日受付</Hl>を掲げており、カギの救急車も多くの加盟店が24時間受付です。特にJBRは賠償責任保険に加入した大手グループで、遅い時間の依頼でも相談しやすい体制です。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※受付が24時間でも、深夜帯は割増料金や到着時間の変動があり得ます。電話時に深夜料金の有無と総額を確認してから依頼するのが安心です。
          </p>

          {/* 4｜料金明確 */}
          <H2 id="meikaku" num="4">料金を事前に明確にしたいなら</H2>
          <p className="leading-loose mb-4">
            室内錠を外から開けられるものへ替える、玄関の錠を家族が扱いやすいものへ替えるといった依頼は、扉の数がそのまま金額に効いてきます。だからこそ内訳を示す方針かどうかが重要です。<Hl>鍵のレスキューは料金をホームページで明示し、現場での追加費用がない</Hl>と掲げています（鍵開け8,000円〜＋出張料0円〜8,800円）。また、<Hl>鍵の生活救急車は出張・見積もり・キャンセルが無料</Hl>のため、提示された金額を見てから依頼するかどうかを判断できます。替えたい扉の数と錠の種類を先に伝えて見積もりを取れば、比較の土台がそろいます。
          </p>
          <p className="leading-loose mb-4">
            どの業者に頼む場合でも、作業前に出張費・部材費・深夜割増まで含めた総額の見積もりを確認することが大前提です。相場感は<Link href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場ページ</Link>で解説しています。
          </p>

          {/* 5｜自社スタッフ */}
          <H2 id="jisha" num="5">自社スタッフ対応にこだわるなら</H2>
          <p className="leading-loose mb-4">
            鍵業者には、依頼を受けて加盟店を手配する「紹介型」と、自社のスタッフが直接対応する「自社対応型」があります。紹介型は対応範囲が広い一方、店舗によって技術・対応に差が出ることがあります。今回の紹介では、<Hl>鍵のレスキューが全国約20拠点を自社社員で対応する自社対応型</Hl>で、女性スタッフの指名にも対応しています。高齢の親が室内にいる状況では、作業中の声のかけ方も気になるところです。依頼時に「自社スタッフか協力店か」を確認してみましょう。
          </p>

          {/* 6｜エリア特有 */}
          <H2 id="tips" num="6">春日井市で鍵業者を呼ぶ前に確認したいこと（親が中にいる締め出しは「様子の確認」と「錠の切り分け」から）</H2>
          <p className="leading-loose mb-4">
            帰宅して玄関が開かず、中にいるはずの親が応答しないとき、最初に確かめるのは<Hl>親の様子が分かるかどうか</Hl>です。インターホンや電話、窓越しの声かけで返事があれば、次の段取りに移れます。返事がない、倒れている気配がある、体調に不安があるという場合は、鍵業者の手配より119番への連絡を優先してください。消防・警察は状況に応じて対応してくれます。差し迫った危険がないと分かった段階で、鍵業者に電話し、<Hl>第一声で「室内に高齢の家族がいる」と伝える</Hl>と、業者側の優先度や対応の判断が変わります。締め出されたときの全体像は<Link href="/shimedashi/" className="text-primary underline">締め出されたときの対処</Link>で整理しています。
          </p>
          <p className="leading-loose mb-4">
            次に切り分けたいのが、<Hl>何が開かない原因になっているか</Hl>です。親が内側からサムターンを回して施錠しただけなら、家族の持つ鍵で開けられるはずです。それでも開かないなら、チェーンやドアガードがかかっている、内側専用の補助錠が付いている、あるいは錠そのものが傷んでいるといった原因が考えられます。ドア越しに親と会話ができるなら、「チェーンを外してほしい」「つまみを回してほしい」と具体的に伝えてみてください。それが難しい場合、チェーンや補助錠の解錠は玄関の錠とは作業が異なるため、電話で「何がかかっているか」を伝えると見積もりと段取りが正確になります。内側のつまみに関する考え方は<Link href="/thumb-turn-taisaku/" className="text-primary underline">サムターンの対策</Link>で扱っています。
          </p>
          <p className="leading-loose mb-4">
            家の中で起きる閉じ込めには、<Hl>トイレや浴室、居室の室内錠</Hl>によるものもあります。親が中で鍵をかけたまま開け方が分からなくなった、あるいは体調を崩して動けなくなった、という場面です。室内錠の多くは、外側にコインやマイナスドライバーで回せる非常解錠の溝や、細い棒を差し込む穴が付いています。慌てて扉を壊す前に、外側のつまみや小さな穴を確認し、取扱説明書や錠の型番からその開け方を確かめてください。平時に一度、家族全員で開け方を試しておくと、いざというときに迷いません。室内錠の仕組みと開け方は<Link href="/shitsunai-toilet-kagi/" className="text-primary underline">室内・トイレの鍵の解説</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4">
            繰り返さないための備えは、<Hl>「閉じ込めない」方向で考える</Hl>のが基本です。夜中に親が外へ出て行くことを心配して内側に鍵を増やすと、火事や急病のときに本人も家族も出入りできなくなる危険があります。まずは施錠の状態を家族が把握できる仕組みや、ドアの開閉を知らせる道具など、閉じ込めずに気づける方法を検討し、必要ならかかりつけの医療機関や介護の相談窓口にも相談してください。あわせて、合鍵は同居の家族だけでなく近くに住む親族にも一本預け、鍵の場所や室内錠の開け方を紙に書いて共有しておきましょう。閉め忘れや施錠状態の見守りの考え方は<Link href="/kagi-shimewasure-taisaku/" className="text-primary underline">鍵の閉め忘れ対策</Link>、合鍵の作り方は<Link href="/aikagi/" className="text-primary underline">合鍵の基礎知識</Link>で扱っています。
          </p>

          {/* 7｜選び方 */}
          <H2 id="erabikata" num="7">春日井市の鍵業者の失敗しない選び方</H2>
          <p className="leading-loose mb-6">
            鍵業者選びで後悔しないためには、次の4つのステップを踏むことが大切です。室内に家族がいる状況では、業者に伝える情報の順番がそのまま対応の速さにつながります。
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
          <H2 id="faq" num="8">春日井市の鍵業者でよくある質問</H2>
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
            春日井市で鍵開け・鍵交換を頼める主要5社を、一次確認した料金・受付時間・運営会社の情報で比較しました。スピード重視なら鍵の生活救急車やカギ110番、深夜・早朝の受付ならカギ110番・JBR・鍵のレスキュー、料金の明確さ重視なら鍵のレスキュー、というように、目的によって向いている業者は変わります。
          </p>
          <p className="leading-loose mb-8">
            親世帯と同居する春日井市の住まいでは、鍵のトラブルが家の内側で起きることがあります。親の様子を先に確かめ、心配なら119番を優先する。何がかかっているのかを切り分けて業者に伝える。室内錠の非常解錠の方法を家族で共有し、内側に鍵を増やす前に閉じ込めない方法を考える。この3つを平時のうちに整えておけば、中に人がいる締め出しでも落ち着いて動けます。そのうえで、本記事の一次確認値を出発点に、状況に合った業者を選んでください。
          </p>
          <div className="rounded-[2px] bg-primary text-white p-6 text-center">
            <p className="font-bold text-lg mb-2">鍵のトラブルでお困りの方へ</p>
            <p className="text-white/80 text-sm mb-4">各社の詳細レビューと料金の一次確認値を比較して、納得できる業者を選びましょう。</p>
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
              {["春日井市", "同居の親", "室内錠", "サムターン", "締め出し", "エリア別"].map((t) => (
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
                { href: "/area/nagoya/", label: "名古屋の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/nagoya-meito/", label: "名古屋市名東区の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/nagoya-chikusa/", label: "名古屋市千種区の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/nagoya-naka/", label: "名古屋市中区の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/toyota/", label: "豊田市の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/okazaki/", label: "岡崎市の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/gifu/", label: "岐阜の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/tsu/", label: "津の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/hamamatsu/", label: "浜松の鍵開け・鍵交換業者おすすめ5選" },
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
                { href: "/shimedashi/", label: "締め出されたときの対処" },
                { href: "/shitsunai-toilet-kagi/", label: "室内・トイレの鍵の解説" },
                { href: "/thumb-turn-taisaku/", label: "サムターンの対策" },
                { href: "/kagi-shimewasure-taisaku/", label: "鍵の閉め忘れ対策" },
                { href: "/aikagi/", label: "合鍵の作り方" },
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
