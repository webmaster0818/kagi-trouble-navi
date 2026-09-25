import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/yokkaichi/";
const UPDATED = "2026年9月9日";
const UPDATED_ISO = "2026-09-09";

export const metadata: Metadata = {
  title: {
    absolute:
      "【2026年最新】四日市市の鍵開け・鍵交換業者おすすめ5選！夜勤明けの早朝に締め出されたときの割増料金の境目の聞き方と交代勤務の家庭の鍵の受け渡しも分かる鍵屋比較｜鍵トラブルナビ",
  },
  description:
    "四日市市で鍵開け・鍵交換を頼める鍵業者5社を一次確認値で比較。カギ110番（鍵開け6,600円〜）・鍵の生活救急車（最短15分）・JBR・鍵のレスキュー・カギの救急車の料金と受付時間、夜勤明けの早朝に締め出されたとき「深夜割増は何時に終わるか」をどう聞くか、寝ている家族を起こすかどうかの判断、交代勤務の家庭での鍵の受け渡しの決め方まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】四日市市の鍵開け・鍵交換業者おすすめ5選！夜勤明けの早朝に締め出されたときの割増料金の境目の聞き方と交代勤務の家庭の鍵の受け渡しも分かる鍵屋比較",
    description:
      "四日市市で鍵開け・鍵交換を頼める鍵業者5社を、料金・受付時間の一次確認値で比較。夜勤明けの早朝に呼ぶときの割増料金の境目の聞き方と、交代勤務の家庭での鍵の受け渡しの決め方も解説します。",
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
        で、24時間365日受付・電話一本で最短5分の手配をうたっています。全国47都道府県の加盟店ネットワークが対象のため、四日市市内の依頼でも近隣の加盟店が手配される仕組みです。見積もりは無料で、出張費・作業費・部材費を含めた金額を事前に提示する明朗会計を掲げています。
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
      { k: "対応エリア", v: "全国47都道府県（三重県対応）" },
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
      : a.id === "seikatsu-kyukyusha"
        ? "8,800円〜（税込）"
        : a.id === "jbr"
          ? "8,800円〜（税込）"
          : a.id === "kagi-rescue"
            ? "8,000円〜"
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
        : a.id === "jbr"
          ? "賠償責任保険加入・出張見積無料"
          : a.id === "kagi-rescue"
            ? "料金HP明示・現場追加費用なし"
            : "作業前に総額見積り（公式明記）",
}));

const steps = [
  {
    t: "① 状況と鍵の種類を整理する",
    b: "「開かない」「なくした」「鍵が抜けない・かからない」のどれに当たるかを整理し、玄関の錠の種類（ギザギザの刻みキーか、くぼみが並んだディンプルキーか）をメモしておくと、電話での見積もり精度が上がります。夜勤明けの早朝なら、今の時刻と、次の勤務までに何時間あるかも先に確認しておきましょう。待てる時間があるかどうかで、深夜割増の時間帯に呼ぶか、通常の時間帯まで待つかの判断が変わります。",
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
    b: "締め出しなどの緊急時以外は、2〜3社から見積もりを取って総額・条件を比較するのがおすすめです。合鍵の追加や玄関の鍵交換のように日程が読める依頼なら、じっくり比較する価値があります。今回の5社はいずれも全国対応型で四日市市から依頼できます。金額に納得できない場合は、その場で契約せず一度断る選択肢もあります。",
  },
];

const faqs: AreaFaq[] = [
  {
    q: "四日市市の鍵開け料金の相場はいくらですか？",
    a: "当サイトが一次確認した各社の公式表示では、鍵開けの基本料金はカギ110番6,600円〜、鍵のレスキュー8,000円〜、鍵の生活救急車・JBR8,800円〜（いずれも税込）、カギの救急車は公式目安11,000〜44,000円です。ただしこれは最低価格や目安で、鍵の種類（ディンプルキー等）・時間帯・出張距離で総額は変わります。作業前に総額の見積もりを取りましょう。詳しくは鍵開け・鍵交換の料金相場ページで解説しています。",
    link: { href: "/ryokin/", label: "料金相場の詳細はこちら" },
  },
  {
    q: "深夜や早朝でも四日市市に来てくれますか？",
    a: "カギ110番・JBR・鍵のレスキューは24時間365日受付を掲げており、カギの救急車も多くの加盟店が24時間受付です。ただし深夜帯は割増料金や到着時間の変動があり得るため、電話の際に深夜料金の有無と到着目安を確認してから依頼するのがおすすめです。",
  },
  {
    q: "夜勤明けの早朝に締め出されました。深夜割増は何時まで続きますか？",
    a: "割増の有無や時間帯は業者や加盟店ごとに異なり、当サイトでは一次確認していません。電話で「今の時間帯に割増はあるか」「割増は何時に終わるか」「料金は電話を受けた時刻と到着時刻のどちらで決まるか」の3点を聞いてください。割増が終わる時刻が近く、待てる場所と時間があるなら、通常の時間帯に入ってから依頼する選択肢もあります。次の勤務や予定との兼ね合いで決めましょう。",
    link: { href: "/shimedashi/", label: "締め出されたときの対処はこちら" },
  },
  {
    q: "家族が寝ています。業者を呼ぶ前に起こしてもいいのでしょうか？",
    a: "起こしてよいかどうかを、締め出されたその場で悩まないよう、交代勤務の家庭では平時に決めておくのが基本です。「締め出されたら何時でも起こす」「電話は何回まで鳴らす」といったルールを家族で共有しておけば、遠慮して屋外で長く待つ事態を避けられます。起こせない・起きない場合に備えて、家族の合鍵の置き場所や、暗証番号式のキーボックスの運用も一緒に決めておきましょう。",
    link: { href: "/key-box-kanri/", label: "キーボックスでの鍵管理はこちら" },
  },
  {
    q: "出勤前に玄関の鍵がかからなくなりました。出勤に間に合わせるにはどうすればいいですか？",
    a: "鍵が回らない・抜けないといった不調は、無理に力を入れると鍵が折れて作業の手数が増えます。まず家族が在宅なら、家族に施錠を任せて出勤し、日中に業者へ依頼する方法があります。誰もいない場合は、電話で「出勤時刻までに来られるか」を先に確認し、間に合わないなら勝手口や別の出入口から出て施錠できるかを確かめてください。応急的に補助錠で施錠する方法もあります。",
    link: { href: "/kagi-mawaranai/", label: "鍵が回らないときの対処はこちら" },
  },
  {
    q: "悪質な鍵業者を見分けるにはどうすればいいですか？",
    a: "広告の最低価格だけで選ばず、作業前に出張費・部材費まで含めた総額の見積もりを提示してもらうこと、承諾のない追加請求がない方針かを確認すること、運営会社名を確認すること（似た名前の別業者が複数あります）がポイントです。提示額に納得できない場合は、その場で即決せずに断り、複数社を比較しましょう。",
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

export default function AreaPageYokkaichi() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】四日市市の鍵開け・鍵交換業者おすすめ5選！夜勤明けの早朝に締め出されたときの割増料金の境目の聞き方と交代勤務の家庭の鍵の受け渡しも分かる鍵屋比較",
    description:
      "四日市市で鍵開け・鍵交換を頼める鍵業者5社を、料金・受付時間の一次確認値で比較。夜勤明けの早朝に呼ぶときの割増料金の境目の聞き方と、交代勤務の家庭での鍵の受け渡しの決め方も解説します。",
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
      { "@type": "ListItem", position: 2, name: "四日市市の鍵開け・鍵交換業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#top5",
      label: "1｜四日市市で人気のおすすめ・優良の鍵業者5選",
      sub: [
        { href: "#hikaku", label: "四日市市の鍵業者を一覧表で徹底比較" },
        ...agents.map((a) => ({ href: `#${a.id}`, label: `${a.num}｜【${a.catch}】${a.name}` })),
      ],
    },
    { href: "#isogi", label: "2｜とにかく急いで開けてほしいなら" },
    { href: "#shinya", label: "3｜深夜・早朝のトラブルなら" },
    { href: "#meikaku", label: "4｜料金を事前に明確にしたいなら" },
    { href: "#jisha", label: "5｜自社スタッフ対応にこだわるなら" },
    { href: "#tips", label: "6｜四日市市で鍵業者を呼ぶ前に確認したいこと（夜勤明けの早朝は「割増の境目」と「家族を起こすルール」を先に決める）" },
    { href: "#erabikata", label: "7｜失敗しない鍵業者の選び方" },
    { href: "#faq", label: "8｜四日市市の鍵業者でよくある質問" },
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
              <li className="text-foreground">四日市市の鍵開け・鍵交換業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-foreground">
              【2026年最新】四日市市の鍵開け・鍵交換業者おすすめ5選！夜勤明けの早朝に締め出されたときの割増料金の境目の聞き方と交代勤務の家庭の鍵の受け渡しも分かる鍵屋比較
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
              {["四日市市", "夜勤明け", "早朝の締め出し", "交代勤務", "業者比較"].map((t) => (
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
                alt="四日市市の鍵開け・鍵交換業者の比較"
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
              四日市市は三重県の北部に位置し、臨海部の工場群と内陸の住宅地が隣り合うまちです。昼夜を問わず動く職場が多いぶん、交代勤務で暮らす家庭も多く、夜勤明けの早朝に帰宅して玄関が開かない、出勤前の暗いうちに鍵がかからなくなる、といった「時間帯が中途半端な」鍵トラブルが起こります。深夜でも日中でもない早朝は、割増料金の境目にあたり、家族はまだ眠っている。眠気の残る頭でこの二つを判断するのは簡単ではありません。
            </p>
            <p>
              本記事では、四日市市内から依頼できる主要な鍵業者5社を、当サイト編集部が各社公式サイト等で一次確認した料金・受付時間・運営会社の情報だけで比較しました。あわせて、夜勤明けの早朝に呼ぶときに「割増は何時に終わるか」をどう聞くか、寝ている家族を起こすかどうかを平時にどう決めておくか、出勤前の鍵トラブルで出勤に間に合わせる段取りを整理しています。
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
          <H2 id="top5" num="1">四日市市で人気のおすすめ・優良の鍵業者5選</H2>
          <p className="leading-loose mb-2">
            四日市市内から依頼できる主要な鍵業者5社を紹介します。掲載している料金・受付時間・運営会社は、いずれも編集部が各社公式サイト等で一次確認した値です（確認日は各社の欄に記載）。実際の総額は鍵の種類・時間帯・出張距離で変わるため、必ず作業前に見積もりで確認してください。
          </p>
          <p className="text-sm text-text-muted mb-8">
            ※他の都市の比較は、<Link href="/area/tsu/" className="text-primary underline">津版</Link>・<Link href="/area/nagoya/" className="text-primary underline">名古屋版</Link>・<Link href="/area/gifu/" className="text-primary underline">岐阜版</Link>もご覧ください。
          </p>

          <h3 id="hikaku" className="scroll-mt-20 relative pb-3 mb-5 border-b-4 border-[#EAF1F8] text-base md:text-[22px] font-bold text-foreground">
            四日市市の鍵業者を一覧表で徹底比較
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
          <H2 id="isogi" num="2">四日市市の鍵業者をとにかく急いで開けてほしいなら</H2>
          <p className="leading-loose mb-4">
            夜勤明けで数時間後に次の勤務が控えている、出勤時刻が迫っているといった場面では、到着までの時間がそのまま休める時間を削ります。急ぎで開けてほしいなら、駆けつけスピードの目安を公表している業者が候補になります。<Hl>鍵の生活救急車は最短15分の駆けつけと全国約2,270店の拠点網</Hl>をうたっており、拠点数の多さは到着スピードの裏付けになります。また、<Hl>カギ110番は電話一本で最短5分の手配</Hl>（全国47都道府県の加盟店ネットワークから近隣の業者を手配）を掲げています。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※いずれも「最短」の目安であり、拠点からの距離・交通状況・繁忙状況で到着時間は変わります。急ぎのときこそ、電話の際に到着目安を確認してから依頼しましょう。
          </p>

          {/* 3｜深夜 */}
          <H2 id="shinya" num="3">深夜・早朝の鍵トラブルなら</H2>
          <p className="leading-loose mb-4">
            交代勤務の帰宅は、深夜と早朝の境目にかかることが少なくありません。この時間帯に頼れるのは24時間受付の業者で、一次確認値では<Hl>カギ110番・JBR・鍵のレスキューが24時間365日受付</Hl>を掲げており、カギの救急車も多くの加盟店が24時間受付です。特にJBRは賠償責任保険に加入した大手グループで、夜間・早朝の緊急依頼でも相談しやすい体制です。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※受付が24時間でも、深夜帯は割増料金や到着時間の変動があり得ます。電話時に深夜料金の有無と総額を確認してから依頼するのが安心です。
          </p>

          {/* 4｜料金明確 */}
          <H2 id="meikaku" num="4">料金を事前に明確にしたいなら</H2>
          <p className="leading-loose mb-4">
            早朝の依頼では、割増が付くのか付かないのかで総額が変わり、眠気の残る頭では内訳の確認が抜けがちです。料金の透明性を重視するなら、<Hl>鍵のレスキューは料金をホームページで明示し、現場での追加費用がない</Hl>と掲げています（鍵開け8,000円〜＋出張料0円〜8,800円）。また、<Hl>鍵の生活救急車は出張・見積もり・キャンセルが無料</Hl>のため、提示された金額を見てから依頼するかどうかを判断できます。
          </p>
          <p className="leading-loose mb-4">
            どの業者に頼む場合でも、作業前に出張費・部材費・深夜割増まで含めた総額の見積もりを確認することが大前提です。相場感は<Link href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場ページ</Link>で解説しています。
          </p>

          {/* 5｜自社スタッフ */}
          <H2 id="jisha" num="5">自社スタッフ対応にこだわるなら</H2>
          <p className="leading-loose mb-4">
            鍵業者には、依頼を受けて加盟店を手配する「紹介型」と、自社のスタッフが直接対応する「自社対応型」があります。紹介型は対応範囲が広い一方、店舗によって技術・対応に差が出ることがあります。今回の5社では、<Hl>鍵のレスキューが全国約20拠点を自社社員で対応する自社対応型</Hl>で、女性スタッフの指名にも対応しています。担当者の所属まで気になる方は、依頼時に「自社スタッフか協力店か」を確認してみましょう。
          </p>

          {/* 6｜エリア特有 */}
          <H2 id="tips" num="6">四日市市で鍵業者を呼ぶ前に確認したいこと（夜勤明けの早朝は「割増の境目」と「家族を起こすルール」を先に決める）</H2>
          <p className="leading-loose mb-4">
            夜勤明けの早朝に締め出されたとき、電話で最初に聞きたいのは<Hl>「割増は何時に終わるか」と「料金はどの時刻で決まるか」</Hl>です。深夜割増の有無・金額・適用時間帯は業者や加盟店ごとに異なり、当サイトでは一次確認していません。また、割増の判定が電話を受けた時刻なのか、現地に到着した時刻なのか、作業を始めた時刻なのかも業者によって違います。割増が終わる時刻がすぐそこなら、待てる場所と時間があるかぎり、通常の時間帯に入ってから依頼する選択肢が生まれます。逆に、割増が終わっても到着まで時間がかかるなら、待つ意味は薄くなります。「今の時間帯に割増はあるか」「何時に終わるか」「電話・到着・作業のどの時刻で決まるか」の3点を、出張費・部材費を含めた総額とあわせて確かめてください。締め出しの初動は<Link href="/shimedashi/" className="text-primary underline">締め出されたときの対処</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4">
            交代勤務の家庭で起きる早朝の締め出しには、<Hl>「家に家族はいるが、寝ている」</Hl>という独特の状況があります。起こせば業者を呼ばずに済むのに、起こすのを遠慮して屋外で待つ人は少なくありません。この判断を締め出されたその場でしないよう、平時に家族でルールを決めておくのが基本です。「締め出されたら何時でも起こしてよい」「電話は何回まで鳴らす」「インターホンは押してよいか」まで決めておけば、迷う時間がなくなります。起こせない、あるいは起きない場合の備えとして、家族の合鍵の置き場所を共有する、暗証番号式のキーボックスを運用するといった方法があります。キーボックスは屋外に置く以上、番号の定期変更や設置場所の工夫が前提です。運用の考え方は<Link href="/key-box-kanri/" className="text-primary underline">キーボックスでの鍵管理</Link>、合鍵の作り方は<Link href="/aikagi/" className="text-primary underline">合鍵の基礎知識</Link>で扱っています。
          </p>
          <p className="leading-loose mb-4">
            もう一つ、交代勤務の家庭に特有なのが<Hl>出勤前の暗いうちに起きる鍵トラブル</Hl>です。玄関の鍵が回らない、抜けない、かからないという状態では、家を無施錠のまま出るわけにもいかず、出勤時刻だけが迫ります。ここで無理に力を入れると鍵が折れて鍵穴に残り、作業の手数が増えます。家族が在宅なら、施錠を家族に任せて出勤し、日中に業者へ依頼するのが一番落ち着いた段取りです。誰もいないなら、電話で「出勤時刻までに来られるか」を先に確認し、間に合わないなら勝手口など別の出入口から出て施錠できるかを確かめてください。症状ごとの対処は<Link href="/kagi-mawaranai/" className="text-primary underline">鍵が回らないときの対処</Link>と<Link href="/kagi-nukenai/" className="text-primary underline">鍵が抜けないときの対処</Link>、応急の施錠に使える補助錠の考え方は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>で解説しています。
          </p>
          <p className="leading-loose mb-4">
            眠気の残る頭で判断を迫られるのが、この時間帯のトラブルの厄介なところです。だからこそ、<Hl>「割増の3点を聞く」「家族を起こすルールに従う」「出勤前なら家族か別の出入口」</Hl>という順番を平時に決めておく価値があります。なくした鍵に住所の分かるものが付いていた場合は、解錠だけで済ませるか交換まで進めるかの判断も加わります。届け出までの流れは<Link href="/kagi-funshitsu/" className="text-primary underline">鍵をなくしたときの対処</Link>、交換の判断材料は<Link href="/kagi-koukan-timing/" className="text-primary underline">鍵交換のタイミング</Link>で確認できます。
          </p>

          {/* 7｜選び方 */}
          <H2 id="erabikata" num="7">四日市市の鍵業者の失敗しない選び方</H2>
          <p className="leading-loose mb-6">
            鍵業者選びで後悔しないためには、次の4つのステップを踏むことが大切です。勤務明けほど「早く休みたいから」と即決しがちですが、数分の確認でトラブルの多くは防げます。
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
          <H2 id="faq" num="8">四日市市の鍵業者でよくある質問</H2>
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
            四日市市で鍵開け・鍵交換を頼める主要5社を、一次確認した料金・受付時間・運営会社の情報で比較しました。スピード重視なら鍵の生活救急車やカギ110番、深夜・早朝のトラブルならカギ110番・JBR・鍵のレスキュー、料金の明確さ重視なら鍵のレスキュー、というように、目的によって向いている業者は変わります。
          </p>
          <p className="leading-loose mb-8">
            交代勤務の家庭で起きる早朝の鍵トラブルは、割増の境目と料金が決まる時刻を電話で聞く・家族を起こすルールを平時に決めておく・出勤前の不調は家族か別の出入口で施錠して日中に依頼する、という3点に集約できます。眠気で判断が鈍る時間帯だからこそ、順番を先に決めておくことが効きます。急がない依頼は複数社から総額の見積もりを取って比較することが失敗しないためのポイントです。本記事の一次確認値を出発点に、状況に合った業者を選んでください。
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
              {["四日市市", "夜勤明け", "早朝の締め出し", "交代勤務", "割増料金", "エリア別"].map((t) => (
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
                { href: "/area/tsu/", label: "津の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/nagoya/", label: "名古屋の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/nagoya-naka/", label: "名古屋市中区の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/gifu/", label: "岐阜の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/otsu/", label: "大津の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/kyoto/", label: "京都の鍵開け・鍵交換業者おすすめ6選" },
                { href: "/area/nara/", label: "奈良の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/wakayama/", label: "和歌山の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/hamamatsu/", label: "浜松の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/suzuka/", label: "鈴鹿市の鍵開け・鍵交換業者おすすめ5選" },
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
                { href: "/key-box-kanri/", label: "キーボックスでの鍵管理" },
                { href: "/kagi-mawaranai/", label: "鍵が回らないときの対処" },
                { href: "/kagi-nukenai/", label: "鍵が抜けないときの対処" },
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
