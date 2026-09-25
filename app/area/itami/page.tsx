import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/itami/";
const UPDATED = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";

export const metadata: Metadata = {
  title: {
    absolute:
      "【2026年最新】伊丹市の鍵開け・鍵交換業者おすすめ5選！賃貸に後付け錠を付けるときの原状回復と管理会社への確認も分かる鍵屋比較｜鍵トラブルナビ",
  },
  description:
    "伊丹市で鍵開け・鍵交換を頼める鍵業者5社を一次確認値で比較。カギ110番（鍵開け6,600円〜）・鍵の生活救急車（最短15分）・JBR・鍵のレスキュー・カギの救急車の料金と受付時間、賃貸に後付けスマートロックや補助錠を付けるときの原状回復、管理会社への確認事項まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】伊丹市の鍵開け・鍵交換業者おすすめ5選！賃貸に後付け錠を付けるときの原状回復と管理会社への確認も分かる鍵屋比較",
    description:
      "伊丹市で鍵開け・鍵交換を頼める鍵業者5社を、料金・受付時間の一次確認値で比較。賃貸に後付け錠を付けるときの原状回復、無加工型でも起きること、退去時の備えも解説します。",
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
        で、24時間365日受付・電話一本で最短5分の手配をうたっています。全国47都道府県の加盟店ネットワークが対象のため、伊丹市内の依頼でも近隣の加盟店が手配される仕組みです。見積もりは無料で、出張費・作業費・部材費を含めた金額を事前に提示する明朗会計を掲げています。
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
      { k: "対応エリア", v: "全国47都道府県（兵庫県対応）", note: "兵庫県対応の一次確認値。伊丹市での詳細な対応可否・条件は依頼時に各社へ確認" },
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
    t: "① 管理会社の許可と、扉の寸法・材質を先にそろえる",
    b: "扉の加工の可否、退去時に原状へ戻す必要があるか、共用廊下から見える位置への設置の可否、避難の妨げにならないか。この4点を管理会社に確認し、返事をメールなど文字の残る形でもらいます。あわせて、サムターンの形と寸法、扉の材質と厚み、貼る面の広さを測っておくと、業者に相談したときに合う製品を絞れます。",
  },
  {
    t: "② 出張費・夜間料金を含めた総額の見積もりを取る",
    b: "広告の「◯◯円〜」は最低価格で、実際は作業の内容・出張距離・時間帯で変わります。後付けの錠では、本体の代金と取り付けの工賃が分かれることが多いため、どこまでが見積もりに含まれるのかを確認してください。自分で買った製品の取り付けだけを頼めるかどうかも、業者によって扱いが違います。",
  },
  {
    t: "③ 運営会社を確認する",
    b: "鍵業界には「カギ110番」「鍵の110番救急車」「カギの救急車」「カギの生活救急車」など名前のよく似たサービスが複数あり、運営会社はそれぞれ別です。依頼前にサービス名だけでなく運営会社名まで確認すると取り違えを防げます。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "後付けの錠は急ぎの依頼ではないので、2〜3社に同じ条件を伝えて比べる余地が十分にあります。今回の5社はいずれも全国対応型で、伊丹市からも依頼できます（対応エリアは「兵庫県」としての一次確認値のため、詳細条件は各社へ確認を）。扉の写真と寸法、管理会社の許可の範囲を同じ形で伝えれば、提案される製品と金額の差がそのまま比べられます。",
  },
];

const faqs: AreaFaq[] = [
  {
    q: "伊丹市の鍵開け料金の相場はいくらですか？",
    a: "当サイトが一次確認した各社の公式表示では、鍵開けの基本料金はカギ110番6,600円〜、鍵のレスキュー8,000円〜、鍵の生活救急車・JBR8,800円〜（いずれも税込）、カギの救急車は公式目安11,000〜44,000円です。ただしこれは最低価格や目安で、鍵の種類（ディンプルキー等）・時間帯・出張距離で総額は変わります。後付けの錠の取り付けは広告の料金区分に当てはまらないことがあるため、内容を伝えたうえで総額の見積もりを取りましょう。",
    link: { href: "/ryokin/", label: "料金相場の詳細はこちら" },
  },
  {
    q: "賃貸にスマートロックを付けてもいいですか？",
    a: "管理会社や大家の許可を先に取ってください。扉は貸主の所有物なので、加工や外観を変える取り付けは原状回復の対象になり得ます。加工なしなら認めるという物件は多い一方で、建物の外観をそろえる決まりがある物件では無加工でも断られることがあります。許可はメールなど文字の残る形でもらっておくと、担当者が替わっても説明できます。",
    link: { href: "/smart-lock/", label: "スマートロックの注意点はこちら" },
  },
  {
    q: "穴を開けないタイプなら勝手に付けて大丈夫ですか？",
    a: "無断で付けるのは避けたほうが無難です。加工しないタイプでも、粘着テープの跡が残る、剥がすときに塗装が持っていかれるといったことは起こります。また、共用廊下から見える位置に物を付けることや、避難の妨げになる設置を禁じている物件もあります。手間はかかりますが、一報を入れて許可をもらってから付けるほうが、退去のときに揉めません。",
    link: { href: "/genkan-kagi-atozuke/", label: "玄関の鍵の後付けはこちら" },
  },
  {
    q: "退去のときに外した跡が残ったらどうなりますか？",
    a: "程度によって負担者が変わります。だからこそ、付ける前の状態と付けた後の状態を写真に撮り、管理会社の許可のやりとりと一緒に保管しておいてください。もともとあった傷と自分が付けた跡を区別できる材料があるかどうかで、立ち会いのときの説明のしやすさが違います。事前の許可があれば、想定内の設置として扱われることも多くなります。",
    link: { href: "/taikyo-kagi-trouble/", label: "退去時の鍵トラブルはこちら" },
  },
  {
    q: "スマートロックの電池が切れたら締め出されますか？",
    a: "製品によります。電池が切れても物理キーで開けられる構成なら、鍵さえ持っていれば入れます。逆に、物理キーを家に置いて出る運用にしていると、電池切れがそのまま締め出しになります。電池の残量が減ったときに通知が来る製品もありますが、通知を受け取る端末の充電が切れていれば気づけません。物理キーは持ち歩く、交換時期を決めておく、という二段構えが現実的です。",
    link: { href: "/denshijou-denchigire/", label: "電子錠の電池切れはこちら" },
  },
  {
    q: "深夜や早朝でも伊丹市に来てくれますか？",
    a: "カギ110番・JBR・鍵のレスキューは24時間365日受付を掲げており、カギの救急車も多くの加盟店が24時間受付です。深夜帯は割増料金や到着時間の変動があり得るため、電話の際に深夜料金の有無と到着目安を確認してから依頼するのがおすすめです。なお各社の対応エリアは「兵庫県」としての一次確認値のため、伊丹市での詳細は依頼時に各社へご確認ください。",
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

export default function AreaPageItami() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】伊丹市の鍵開け・鍵交換業者おすすめ5選！賃貸に後付け錠を付けるときの原状回復と管理会社への確認も分かる鍵屋比較",
    description:
      "伊丹市で鍵開け・鍵交換を頼める鍵業者5社を、料金・受付時間の一次確認値で比較。賃貸に後付け錠を付けるときの原状回復、無加工型でも起きること、退去時の備えも解説します。",
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
      { "@type": "ListItem", position: 2, name: "伊丹市の鍵開け・鍵交換業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#top5",
      label: "1｜伊丹市で人気のおすすめ・優良の鍵業者5選",
      sub: [
        { href: "#hikaku", label: "伊丹市の鍵業者を一覧表で徹底比較" },
        ...agents.map((a) => ({ href: `#${a.id}`, label: `${a.num}｜【${a.catch}】${a.name}` })),
      ],
    },
    { href: "#isogi", label: "2｜とにかく急いで開けてほしいなら" },
    { href: "#shinya", label: "3｜深夜・早朝のトラブルなら" },
    { href: "#meikaku", label: "4｜料金を事前に明確にしたいなら" },
    { href: "#jisha", label: "5｜自社スタッフ対応にこだわるなら" },
    { href: "#itami-tips", label: "6｜伊丹市で鍵業者を呼ぶ前に確認したいこと（賃貸に後付け錠を付けるときの原状回復と管理会社への確認）" },
    { href: "#erabikata", label: "7｜失敗しない鍵業者の選び方" },
    { href: "#faq", label: "8｜伊丹市の鍵業者でよくある質問" },
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
              <li className="text-foreground">伊丹市の鍵開け・鍵交換業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-foreground">
              【2026年最新】伊丹市の鍵開け・鍵交換業者おすすめ5選！賃貸に後付け錠を付けるときの原状回復と管理会社への確認も分かる鍵屋比較
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
              {["伊丹市", "スマートロック", "後付け補助錠", "原状回復", "業者比較"].map((t) => (
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
                alt="伊丹市の鍵開け・鍵交換業者の比較"
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
              伊丹市は兵庫県の南東部、大阪府に接するまちです。阪急とJRの両方が通り、大阪市内へも神戸方面へも出やすい立地から、賃貸の集合住宅に住む人が多い地域でもあります。借りている部屋でも、鍵まわりを自分の使いやすい形にしたいと考える場面はあります。スマートフォンで開けたい、鍵を持ち歩かずに済ませたい、防犯のためにもう一つ錠を足したい。ただし、扉は自分のものではありません。
            </p>
            <p>
              本記事では、伊丹市内から依頼できる主要な鍵業者5社を、当サイト編集部が各社公式サイト等で一次確認した料金・受付時間・運営会社の情報だけで比較しました。あわせて、賃貸に後付けの錠を取り付けるときに、管理会社へ何を確認し、原状回復でどこまでが自分の負担になるのかを整理しています。
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
          <H2 id="top5" num="1">伊丹市で人気のおすすめ・優良の鍵業者5選</H2>
          <p className="leading-loose mb-2">
            伊丹市内から依頼できる主要な鍵業者5社を紹介します。掲載している料金・受付時間・運営会社は、いずれも編集部が各社公式サイト等で一次確認した値です（確認日は各社の欄に記載）。各社の対応エリアは「兵庫県」としての一次確認値のため、伊丹市での詳細な対応可否・条件は依頼時に各社へご確認ください。実際の総額は鍵の種類・時間帯・出張距離で変わるため、必ず作業前に見積もりで確認してください。
          </p>
          <p className="text-sm text-text-muted mb-8">
            ※近隣エリアの比較は<Link href="/area/amagasaki/" className="text-primary underline">尼崎市版</Link>・<Link href="/area/nishinomiya/" className="text-primary underline">西宮市版</Link>・<Link href="/area/takarazuka/" className="text-primary underline">宝塚市版</Link>もご覧ください。
          </p>

          <h3 id="hikaku" className="scroll-mt-20 relative pb-3 mb-5 border-b-4 border-[#EAF1F8] text-base md:text-[22px] font-bold text-foreground">
            伊丹市の鍵業者を一覧表で徹底比較
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
          <H2 id="isogi" num="2">伊丹市の鍵業者をとにかく急いで開けてほしいなら</H2>
          <p className="leading-loose mb-4">
            後付けの錠は、付けたあとに困ることがあります。電池が切れた、外れた、思ったように動かない。そのときに家に入れなくなるのは、元からある錠の不調と同じです。駆けつけスピードの目安を公表している業者としては、<Hl>鍵の生活救急車が最短15分の駆けつけと全国約2,270店の拠点網</Hl>をうたっており、拠点数の多さは到着スピードの裏付けになります。また、<Hl>カギ110番は電話一本で最短5分の手配</Hl>（全国47都道府県の加盟店ネットワークから近隣の業者を手配）を掲げています。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※いずれも「最短」の目安であり、拠点からの距離・交通状況・繁忙状況で到着時間は変わります。急ぎのときこそ、電話の際に到着目安を確認してから依頼しましょう。
          </p>

          {/* 3｜深夜 */}
          <H2 id="shinya" num="3">深夜・早朝の鍵トラブルなら</H2>
          <p className="leading-loose mb-4">
            家に入れないまま夜を越すかどうかは、早い時間に決めたい判断です。電池切れは夜に気づくことが多く、管理会社の窓口が閉まっている時間帯と重なりがちです。一次確認値では<Hl>カギ110番・JBR・鍵のレスキューが24時間365日受付</Hl>を掲げており、カギの救急車も多くの加盟店が24時間受付です。特にJBRは賠償責任保険に加入した大手グループで、遅い時間の依頼でも相談しやすい体制です。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※受付が24時間でも、深夜帯は割増料金や到着時間の変動があり得ます。電話時に深夜料金の有無と総額を確認してから依頼するのが安心です。
          </p>

          {/* 4｜料金明確 */}
          <H2 id="meikaku" num="4">料金を事前に明確にしたいなら</H2>
          <p className="leading-loose mb-4">
            後付けの錠を業者に取り付けてもらう場合、本体の代金と取り付けの工賃が分かれます。どこまでが見積もりに含まれるのかを先に確認したいところです。<Hl>鍵のレスキューは料金をホームページで明示し、現場での追加費用がない</Hl>と掲げています（鍵開け8,000円〜＋出張料0円〜8,800円）。また、<Hl>鍵の生活救急車は出張・見積もり・キャンセルが無料</Hl>のため、提示された金額を見てから依頼するかどうかを判断できます。
          </p>
          <p className="leading-loose mb-4">
            どの業者に頼む場合でも、作業前に出張費・部材費・深夜割増まで含めた総額の見積もりを確認することが大前提です。相場感は<Link href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場ページ</Link>で解説しています。
          </p>

          {/* 5｜自社スタッフ */}
          <H2 id="jisha" num="5">自社スタッフ対応にこだわるなら</H2>
          <p className="leading-loose mb-4">
            鍵業者には、依頼を受けて加盟店を手配する「紹介型」と、自社のスタッフが直接対応する「自社対応型」があります。紹介型は対応範囲が広い一方、店舗によって技術・対応に差が出ることがあります。今回の紹介では、<Hl>鍵のレスキューが全国約20拠点を自社社員で対応する自社対応型</Hl>で、女性スタッフの指名にも対応しています。後付けの錠は、扉の材質や厚み、サムターンの形に合うかどうかを見てからでないと決められません。取り付けだけでなく、事前の下見や採寸に来てもらえるかを確認しておくと、買ってから合わないという事態を避けられます。
          </p>

          {/* 6｜エリア特有 */}
          <H2 id="itami-tips" num="6">伊丹市で鍵業者を呼ぶ前に確認したいこと（賃貸に後付け錠を付けるときの原状回復と管理会社への確認）</H2>
          <p className="leading-loose mb-4">
            後付けの錠には、大きく分けて2つの形があります。サムターン（内側のつまみ）に被せて回すタイプのように扉を加工しないものと、扉に穴を開けて取り付けるものです。借りている部屋で考えるとき、前提になるのは<Hl>扉も錠も貸主の所有物だということ</Hl>です。穴を開ける、強い粘着で塗装を傷める、共用廊下側の見た目を変える。どれも原状回復の話につながります。付けたい気持ちが固まったら、製品を買う前に管理会社へ一報を入れてください。後付けの選択肢そのものは<Link href="/genkan-kagi-atozuke/" className="text-primary underline">玄関の鍵の後付け</Link>、スマートロックの仕組みは<Link href="/smart-lock/" className="text-primary underline">スマートロックの選び方と注意点</Link>で扱っています。
          </p>
          <p className="leading-loose mb-4">
            管理会社に確認したいのは4つです。<Hl>扉の加工の可否、退去時に外して原状に戻す必要があるか、共用廊下から見える位置に物を付けてよいか、避難の妨げにならないか</Hl>。加工なしなら認めるという物件は多い一方で、建物の外観をそろえる決まりがある物件では、無加工でも断られることがあります。避難経路の扱いは、火災時に内側から素早く開けられるかという話で、集合住宅では重く見られます。返事はメールなど文字の残る形でもらってください。口頭の許可は、担当者が替わると残りません。賃貸の鍵まわりの費用分担は<Link href="/chintai-kagi-koukan-hiyou/" className="text-primary underline">賃貸の鍵交換費用</Link>で整理しています。
          </p>
          <p className="leading-loose mb-4">
            無加工のタイプを選んでも、起きることはあります。<Hl>粘着テープの跡が残る、剥がすときに塗装が持っていかれる、扉の表面に凹凸があって付かない、サムターンの形が合わない</Hl>。扉が金属で表面に模様が入っていると、想定どおりに貼れないことがあります。買う前に、サムターンの形と寸法、扉の材質、貼る面の広さを測ってください。もうひとつ、電池で動く錠は電池が切れます。切れたときに開かなくなる製品もあるため、物理キーは必ず持ち歩き、電池の交換時期を決めておく。電池切れの備えは<Link href="/denshijou-denchigire/" className="text-primary underline">電子錠の電池切れ</Link>で詳しく扱っています。
          </p>
          <p className="leading-loose mb-4">
            退去のときに問題になるのは、外したあとに残るものです。<Hl>付ける前の状態を写真に撮っておく</Hl>。これだけで、もともとあった傷と自分が付けた跡を区別できます。取り付け後の状態も撮り、管理会社の許可のやりとりと一緒に保管しておけば、退去の立ち会いで説明できます。跡が残った場合の補修費は、程度によって負担者が変わる話なので、事前の許可と記録があるかどうかで扱いが違ってきます。なお持ち家でも、扉に穴を開ける工事は元に戻せません。防犯のために錠を足したいだけなら、加工の要らない補助錠から検討するほうが引き返しやすくなります。退去時の注意は<Link href="/taikyo-kagi-trouble/" className="text-primary underline">退去時の鍵トラブル</Link>、補助錠の種類は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>で解説しています。
          </p>

          {/* 7｜選び方 */}
          <H2 id="erabikata" num="7">伊丹市の鍵業者の失敗しない選び方</H2>
          <p className="leading-loose mb-6">
            鍵業者選びで後悔しないためには、次の4つのステップを踏むことが大切です。賃貸での後付けは、頼む前に管理会社の許可がそろっているかどうかで話の進み方が変わります。
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
          <H2 id="faq" num="8">伊丹市の鍵業者でよくある質問</H2>
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
            伊丹市で鍵開け・鍵交換を頼める主要5社を、一次確認した料金・受付時間・運営会社の情報で比較しました。スピード重視なら鍵の生活救急車やカギ110番、深夜・早朝の受付ならカギ110番・JBR・鍵のレスキュー、料金の明確さ重視なら鍵のレスキュー、というように、目的によって向いている業者は変わります。
          </p>
          <p className="leading-loose mb-8">
            借りている部屋の扉は貸主のものです。後付けの錠を考えたら、製品を買う前に管理会社へ。加工の可否、退去時に戻す必要があるか、外から見える位置の可否、避難の妨げにならないか。この4点の返事を文字で残す。無加工型でも跡は残るので、付ける前と後の写真を撮っておく。電池で動く錠は物理キーを併用する。ここまで整えてから、本記事の一次確認値を出発点に、目的と予算に合った業者を選んでください。
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
              {["伊丹市", "後付け錠", "原状回復", "管理会社への確認", "電池切れ", "エリア別"].map((t) => (
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
                { href: "/area/amagasaki/", label: "尼崎市の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/nishinomiya/", label: "西宮市の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/takarazuka/", label: "宝塚市の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/kobe/", label: "神戸の鍵開け・鍵交換業者おすすめ6選" },
                { href: "/area/kobe-nada/", label: "神戸市灘区の鍵開け・鍵交換業者おすすめ6選" },
                { href: "/area/osaka-yodogawa/", label: "大阪市淀川区の鍵開け・鍵交換業者おすすめ6選" },
                { href: "/area/osaka-kita/", label: "大阪市北区の鍵開け・鍵交換業者おすすめ6選" },
                { href: "/area/toyonaka/", label: "豊中市の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/suita/", label: "吹田市の鍵開け・鍵交換業者おすすめ5選" },
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
                { href: "/smart-lock/", label: "スマートロックの選び方と注意点" },
                { href: "/genkan-kagi-atozuke/", label: "玄関の鍵の後付け" },
                { href: "/denshijou-denchigire/", label: "電子錠の電池切れ" },
                { href: "/hojo-jou/", label: "補助錠の選び方" },
                { href: "/chintai-kagi-koukan-hiyou/", label: "賃貸の鍵交換費用" },
                { href: "/taikyo-kagi-trouble/", label: "退去時の鍵トラブル" },
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
