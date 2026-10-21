import AgentIntro from "@/components/AgentIntro";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { AffBanner, AffText, hasAff } from "@/components/AffLink";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/kyoto-nakagyo/";
const UPDATED = "2026年10月19日";
const UPDATED_ISO = "2026-10-19";

export const metadata: Metadata = {
  title: {
    absolute:
      "【2026年最新】京都市中京区の鍵開け・鍵交換業者おすすめ5選｜賃貸の町家で鍵を替える前の確認事項と引き戸の錠も解説する鍵屋比較｜鍵トラブルナビ",
  },
  description:
    "京都市中京区で鍵開け・鍵交換を依頼できる鍵業者5社を一次確認値で比較。全国対応・自社施工の鍵猿（鍵開け8,800円〜税込）を含め、カギ110番（鍵開け11,000円〜）・鍵の生活救急車・鍵のレスキュー・カギの救急車の料金と受付時間、賃貸の町家で貸主に確認すべき加工の可否と、引き戸の錠の考え方まで解説します。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】京都市中京区の鍵開け・鍵交換業者おすすめ5選｜賃貸の町家で鍵を替える前の確認事項と引き戸の錠も解説する鍵屋比較",
    description:
      "京都市中京区で鍵開け・鍵交換を依頼できる鍵業者5社を、料金・受付時間の一次確認値で比較。賃貸の町家で鍵を替える前に確認すべき加工の可否と、引き戸の錠の考え方も解説します。",
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
        で、24時間365日受付・電話一本で最短5分の手配を掲げています。全国47都道府県の加盟店ネットワークが対象のため、中京区内の依頼でも近隣の加盟店が手配される仕組みです。見積もりは無料で、出張料・作業費・部材費を含めた金額を事前に提示する明朗会計を掲げています。
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
      { k: "対応エリア", v: "全国47都道府県（京都府対応）", note: "京都府対応の一次確認値。中京区での詳細な対応可否・条件は依頼時に各社へ確認" },
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
  {
    id: "kagizaru",
    slug: "kagizaru",
    num: "1-5",
    catch: "大阪本社・自社施工",
    name: "鍵猿",
    intro: (
      <>
        鍵猿（かぎざる）は、<Hl>大阪に本社を置くSLS株式会社が運営する鍵トラブル解決サービス</Hl>
        で、北海道から沖縄まで全国（秋田・福井・鳥取・島根・徳島・宮崎を除く）に対応し、京都府も対応エリアに含まれます。
        <Hl>下請けを使わない自社施工</Hl>
        （自社コールセンター＋自社スタッフによる施工体制）で、鍵開けは
        <Hl>8,800円〜（税込・玄関の鍵開けの目安）</Hl>
        。基本料・見積料・出張料はすべて0円で、作業前に合計金額を提示し追加請求しない明朗会計を掲げ、
        <Hl>1年間の無料工事保証・無償商品保証</Hl>
        があります。最短15分到着をうたい、防犯設備士も在籍しています。
      </>
    ),
    recommend: [
      "関西エリアで実績の多い業者に依頼したい方",
      "下請けではなく自社スタッフの施工にこだわる方",
      "作業後の保証（1年保証）を重視する方",
      "鍵交換と合わせて防犯面も相談したい方",
    ],
    table: [
      { k: "鍵開け料金", v: "8,800円〜（税込）", note: "玄関の鍵開けの目安。鍵交換は11,000円〜（税込）＋部品代" },
      { k: "受付時間", v: "電話受付8:00〜23:00", note: "施工は深夜・早朝も対応・365日年中無休" },
      { k: "会計方式", v: "基本料・見積料・出張料0円", note: "作業前に合計金額を提示・追加請求なし" },
      { k: "保証", v: "1年間の無料工事保証・無償商品保証" },
      { k: "対応エリア", v: "全国対応（秋田・福井・鳥取・島根・徳島・宮崎を除く。京都府対応）", note: "京都府対応の一次確認値。中京区での詳細な対応可否・条件は依頼時に各社へ確認" },
      { k: "運営会社", v: "SLS株式会社（大阪本社）" },
    ],
    memo:
      "公式サイトで鍵開け8,800円〜（税込）、基本料・見積料・出張料0円、1年間の無料工事保証・無償商品保証、自社スタッフ施工を確認（2026年7月7日時点）。全国（秋田・福井・鳥取・島根・徳島・宮崎を除く）に対応する一方、電話受付は8:00〜23:00のため、深夜に新規で電話する場合は受付時間に注意が必要です。夜間などは料金が上がる場合があるため、作業前に提示される合計金額を必ずご確認ください。",
    memoDate: "2026年7月7日確認",
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
        : a.id === "kagizaru"
          ? "電話受付8:00〜23:00（施工は深夜・早朝も対応）"
          : "24時間365日",
  point:
    a.id === "kagi110ban"
      ? "最短5分手配・全国47都道府県"
      : a.id === "seikatsu-kyukyusha"
        ? "全国約2,270店・見積キャンセル無料"
          : a.id === "kagi-rescue"
            ? "料金表を公式公開・出張料4,400〜8,800円"
            : a.id === "kagi-kyukyusha"
              ? "作業前に総額見積もり（公式明記）"
              : "大阪本社・自社施工・1年保証",
}));

const steps = [
  {
    t: "① 状況と鍵の種類を整理する",
    b: "「なくした」のか「開かない」のか、あるいは「替えたい」のかを分けて考え、対象が持ち家か賃貸かを整理してから電話してください。賃貸物件で建具の加工を伴う工事をする場合は、貸主・管理者の許可が必要です。玄関が開き戸か引き戸か、錠のメーカーや形式が分かれば、電話での見積もりの精度が上がります。古い建具では現物を見ないと判断できない部分も多いため、現地見積もりが無料かどうかもご確認ください。",
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
    b: "緊急時以外は、2〜3社から見積もりを取り、総額・条件を比較することをおすすめします。京都は全国型の業者に加えて自社施工の業者（鍵猿）も選択肢に入るエリアです（対応エリアは「京都府」としての一次確認値のため、中京区での詳細条件は各社へご確認ください）。古い建具の工事は、対応できる範囲や提案内容が業者によって分かれやすいため、特に比較することをおすすめします。",
  },
];

const faqs: AreaFaq[] = [
  {
    q: "中京区の鍵開け料金の相場はいくらですか？",
    a: "当サイトが一次確認した各社の公式表示では、鍵開けの基本料金はカギ110番11,000円〜、鍵のレスキュー6,600円〜（別途出張料4,400〜8,800円）、鍵の生活救急車・鍵猿8,800円〜（いずれも税込）、カギの救急車は公式目安11,000〜44,000円です。ただし、これらは最低価格または目安であり、鍵の種類（ディンプルキー等）・時間帯・出張距離で総額は変わります。古い建具では部材の追加や加工が必要になることもあるため、現地で総額の見積もりを取ることをおすすめします。",
    link: { href: "/ryokin/", label: "料金相場の詳細はこちら" },
  },
  {
    q: "賃貸の町家で防犯性の高い鍵に替えたいのですが、自分で決めてよいですか？",
    a: "借主の判断だけで進めることは避けてください。古い建具への取り付けには加工が必要になることが多いため、まず貸主・管理者に加工の可否、費用負担、退去時の原状回復の要否をご確認ください。許可が得られない場合も、補助錠などの選択肢があります。",
    link: { href: "/chintai-kagi-koukan-hiyou/", label: "賃貸の鍵交換費用はこちら" },
  },
  {
    q: "古い引き戸の錠は交換できますか？部品はまだありますか？",
    a: "製品によっては部品の製造が終了しており、同型での交換ができない場合があります。その場合は、形状の合う別の製品への交換か、補助錠の追加を検討します。写真を用意したうえで現地見積もりを依頼すると、相談がスムーズに進みます。",
    link: { href: "/hikido-kagi/", label: "引き戸の鍵の解説はこちら" },
  },
  {
    q: "建具を加工せずに防犯性を上げる方法はありますか？",
    a: "既存の錠を残したまま追加する補助錠が代表的な方法です。ただし、両面テープ等で固定するタイプは強度に限界があります。賃貸物件の場合は、加工を伴わない補助錠であっても、設置前に貸主へ連絡しておくことをおすすめします。",
    link: { href: "/hojo-jou/", label: "補助錠の選び方はこちら" },
  },
  {
    q: "鍵猿は京都市中京区で依頼できますか？",
    a: "鍵猿は大阪に本社を置くSLS株式会社が運営し、北海道から沖縄まで全国（秋田・福井・鳥取・島根・徳島・宮崎を除く）に対応するサービスで、京都府も対応エリアに含まれます。下請けを使わない自社施工で、鍵開けは8,800円〜（税込）、基本料・見積料・出張料は0円、1年間の無料工事保証・無償商品保証があります。電話受付は8:00〜23:00のため、深夜に新規で連絡する場合は受付時間に注意してください。なお対応エリアは「京都府」としての一次確認値のため、中京区での詳細な対応可否・条件は依頼時に各社へご確認ください。",
    link: { href: "/agents/kagizaru/", label: "鍵猿の詳細ページはこちら" },
  },
  {
    q: "深夜や早朝でも中京区に来てくれますか？",
    a: "カギ110番・鍵のレスキューは24時間365日受付を掲げており、カギの救急車も多くの加盟店が24時間受付です。鍵猿は電話受付が8:00〜23:00ですが、施工は深夜・早朝も対応とされています。深夜帯は割増料金や到着時間の変動が生じる場合があるため、電話の際に深夜料金の有無と到着目安を確認してから依頼することをおすすめします。なお各社の対応エリアは「京都府」としての一次確認値のため、中京区での詳細は依頼時に各社へご確認ください。",
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

export default function AreaPageKyotoNakagyo() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】京都市中京区の鍵開け・鍵交換業者おすすめ5選｜賃貸の町家で鍵を替える前の確認事項と引き戸の錠も解説する鍵屋比較",
    description:
      "京都市中京区で鍵開け・鍵交換を依頼できる鍵業者5社を、料金・受付時間の一次確認値で比較。賃貸の町家で鍵を替える前に確認すべき加工の可否と、引き戸の錠の考え方も解説します。",
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
      { "@type": "ListItem", position: 2, name: "京都の鍵開け・鍵交換業者おすすめ5選", item: `${SITE}/area/kyoto/` },
      { "@type": "ListItem", position: 3, name: "京都市中京区の鍵開け・鍵交換業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#top5",
      label: "1｜京都市中京区で依頼できるおすすめの鍵業者5選",
      sub: [
        { href: "#hikaku", label: "京都市中京区の鍵業者の一覧比較表" },
        ...agents.map((a) => ({ href: `#${a.id}`, label: `${a.num}｜【${a.catch}】${a.name}` })),
      ],
    },
    { href: "#isogi", label: "2｜急いで鍵開けを依頼したい場合" },
    { href: "#shinya", label: "3｜深夜・早朝のトラブルの場合" },
    { href: "#meikaku", label: "4｜料金を事前に確認したい場合" },
    { href: "#jisha", label: "5｜自社スタッフによる対応を希望する場合" },
    { href: "#tips", label: "6｜中京区で鍵業者に依頼する前の確認事項（賃貸の町家での加工の可否の事前確認）" },
    { href: "#erabikata", label: "7｜鍵業者の選び方" },
    { href: "#faq", label: "8｜中京区の鍵業者でよくある質問" },
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
                <Link href="/area/kyoto/" className="hover:underline">京都</Link>
              </li>
              <li>/</li>
              <li className="text-foreground">京都市中京区の鍵開け・鍵交換業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-foreground">
              【2026年最新】京都市中京区の鍵開け・鍵交換業者おすすめ5選｜賃貸の町家で鍵を替える前の確認事項と引き戸の錠も解説する鍵屋比較
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
              {["京都市中京区", "町家の鍵", "引き戸", "賃貸の加工制限", "業者比較"].map((t) => (
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
                alt="京都市中京区の鍵開け・鍵交換業者の比較"
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
              京都市中京区は、通りに面して間口の狭い建物が連なる町並みが残り、木造の町家がいまも住まいや店舗として使われているエリアです。玄関が引き戸だったり、建具そのものが古かったりすると、防犯性の高い鍵に替えたいと思っても、現代の建物と同じようには進みません。特に賃貸の町家では、工事の前に確認しておくべきことがあります。
            </p>
            <p>
              本記事では、中京区内から依頼できる主要な鍵業者5社を、当サイト編集部が各社公式サイト等で一次確認した料金・受付時間・運営会社の情報だけで比較しました。あわせて、賃貸の町家で鍵を替える前に貸主へ確認すべき加工の可否と原状回復の考え方、古い引き戸の錠の扱い方を整理しています。
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
          <H2 id="top5" num="1">京都市中京区で依頼できるおすすめの鍵業者5選</H2>
          <p className="leading-loose mb-2">
            京都市中京区内から依頼できる主要な鍵業者5社を紹介します。掲載している料金・受付時間・運営会社は、いずれも編集部が各社公式サイト等で一次確認した値です（確認日は各社の欄に記載）。各社の対応エリアは「京都府」としての一次確認値のため、中京区での詳細な対応可否・条件は依頼時に各社へご確認ください。実際の総額は鍵の種類・時間帯・出張距離で変わるため、必ず作業前に見積もりで確認してください。
          </p>
          <p className="text-sm text-text-muted mb-8">
            ※<Link href="/area/kyoto/" className="text-primary underline">京都全体の情報はこちら</Link>（京都版では同じ一次確認値で5社を比較しています）。
          </p>

          <h3 id="hikaku" className="scroll-mt-20 relative pb-3 mb-5 border-b-4 border-[#EAF1F8] text-base md:text-[22px] font-bold text-foreground">
            京都市中京区の鍵業者の一覧比較表
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
          <H2 id="isogi" num="2">中京区で急いで鍵開けを依頼したい場合</H2>
          <p className="leading-loose mb-4">
            古い建具では、無理に開けようとして傷めるより、道具を持った人に任せたほうが結果的に早く済みます。駆けつけスピードの目安を公表している業者としては、<Hl>鍵の生活救急車が最短15分の駆けつけと全国約2,270店の拠点網</Hl>を掲げています。拠点数が多いことは、到着までの時間を短くする要素の一つです。また、<Hl>カギ110番は電話一本で最短5分の手配</Hl>（全国47都道府県の加盟店ネットワークから近隣の業者を手配する仕組み）を掲げています。大阪に本社を置き全国に展開する鍵猿も最短15分到着を掲げています。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※いずれも「最短」の目安であり、拠点からの距離・交通状況・繁忙状況で到着時間は変わります。急ぎの場合も、電話の際に到着目安を確認してから依頼することをおすすめします。
          </p>

          {/* 3｜深夜 */}
          <H2 id="shinya" num="3">深夜・早朝の鍵トラブルの場合</H2>
          <p className="leading-loose mb-4">
            観光地が近い区域では、夜遅くに帰宅してから鍵の不具合に気づくこともあります。一次確認値では<Hl>カギ110番・鍵のレスキューが24時間365日受付</Hl>を掲げており、カギの救急車も多くの加盟店が24時間受付です。<Hl>鍵猿は電話受付が8:00〜23:00</Hl>で、施工は深夜・早朝も対応とされています。深夜に新規で電話する場合は、受付時間の違いにご注意ください。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※24時間受付の業者でも、深夜帯は割増料金が加わる場合や、到着時間が変動する場合があります。電話の際に深夜料金の有無と総額を確認してから依頼することをおすすめします。
          </p>

          {/* 4｜料金明確 */}
          <H2 id="meikaku" num="4">料金を事前に確認したい場合</H2>
          <p className="leading-loose mb-4">
            古い建具に手を入れる作業は、部材の追加や加工の手間が読みにくく、見積もりの取り方が重要になります。<Hl>鍵のレスキューは鍵開け6,600円〜（税込）と出張料4,400〜8,800円（税込・地域により異なる）を公式サイトで分けて公開</Hl>しています。また、<Hl>鍵の生活救急車は出張・見積もり・キャンセルが無料</Hl>のため、提示された金額を見てから依頼するかどうかを判断できます。<Hl>鍵猿は基本料・見積料・出張料が0円</Hl>で、作業前に合計金額を提示し追加請求しない方式を掲げています。
          </p>
          <p className="leading-loose mb-4">
            どの業者に依頼する場合も、作業前に出張料・部材費・深夜割増まで含めた総額の見積もりをご確認ください。料金の目安は<Link href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場ページ</Link>で解説しています。
          </p>

          {/* 5｜自社スタッフ */}
          <H2 id="jisha" num="5">自社スタッフによる対応を希望する場合</H2>
          <p className="leading-loose mb-4">
            鍵業者には、依頼を受けて加盟店を手配する「紹介型」と、自社のスタッフが直接対応する「自社対応型」があります。紹介型は対応範囲が広い一方、店舗によって技術・対応に差が出ることがあります。既存の建具を残したまま作業する場面では、事前の説明と当日の作業者が同じ会社でつながっているほうが行き違いが起きにくくなります。全国対応の<Hl>鍵猿も下請けを使わない自社施工</Hl>で、1年間の無料工事保証を掲げています。依頼時に「自社スタッフか協力店か」をご確認ください。
          </p>

          {/* 6｜区特有 */}
          <H2 id="tips" num="6">中京区で鍵業者に依頼する前の確認事項（賃貸の町家での加工の可否の事前確認）</H2>
          <p className="leading-loose mb-4">
            賃貸の町家で鍵を替えたい場合、最初に確認すべきなのは製品選びではなく<Hl>貸主が加工を認めるかどうか</Hl>です。現代の錠を古い建具に取り付ける場合、彫り込みや穴あけといった加工が必要になることが多く、これは建物に手を入れる行為にあたります。賃貸物件では原状回復の考え方があり、借主の判断だけで進めると退去時の精算で問題になるおそれがあります。まず管理者や貸主へ、加工してよいか、費用は誰が負担するか、退去時に元へ戻す必要があるかの3点を確認してください。費用の分担の考え方は<Link href="/chintai-kagi-koukan-hiyou/" className="text-primary underline">賃貸の鍵交換費用</Link>で整理しています。
          </p>
          <p className="leading-loose mb-4">
            建物の外観に関わる部分では、<Hl>地区や建物の種類によって別の手続きや制限が設けられている場合がある</Hl>点にも注意が必要です。町並みの保全を目的とした取り決めがある区域では、通りから見える部分の変更にあたって届け出が求められることがあります。該当するかどうかは建物ごとに異なるため、自分で判断せず、貸主や管理者を通して確認することが確実です。玄関まわりに手を入れる工事は、こうした確認の対象になりやすいため、事前の確認によって工事のやり直しを避けられます。
          </p>
          <p className="leading-loose mb-4">
            古い引き戸の錠そのものにも、現代の開き戸とは違う事情があります。<Hl>引き戸は召し合わせ部分に錠を設ける構造</Hl>で、開き戸のシリンダー交換のように部品だけを差し替えれば済むとは限りません。長く使われてきた製品では同じ部品がすでに作られておらず、同型での交換ができないこともあります。その場合は、形状の合う別の製品への交換か、既存の錠を残したまま別の錠を足す方法を検討することになります。引き戸の錠の種類と選び方は<Link href="/hikido-kagi/" className="text-primary underline">引き戸の鍵の解説</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4">
            加工の許可が下りない、あるいは建具を傷めたくないという場合の現実的な選択肢が<Hl>補助錠</Hl>です。既存の錠はそのままに、別の錠を追加して解錠の手間を増やす方法で、取り付け方によっては大きな加工を伴いません。ただし、固定の方法によって強度は変わり、両面テープ等で留めるタイプは強く引かれる力に対しては限界があります。どの程度の効果を見込めるかは製品と取り付け方によるため、選ぶ前に<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>を確認し、賃貸物件の場合は、補助錠の設置についても貸主へ連絡しておくことをおすすめします。
          </p>

          {/* 7｜選び方 */}
          <H2 id="erabikata" num="7">中京区の鍵業者の選び方</H2>
          <p className="leading-loose mb-6">
            鍵業者を選ぶ際は、次の4つの手順で確認することをおすすめします。古い建具が関係する工事は、確認漏れが追加費用につながります。
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
          <H2 id="faq" num="8">中京区の鍵業者でよくある質問</H2>
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
            京都市中京区で鍵開け・鍵交換を依頼できる主要5社を、一次確認した料金・受付時間・運営会社の情報で比較しました。到着の早さを重視する場合は鍵の生活救急車やカギ110番、深夜・早朝の受付を重視する場合はカギ110番・鍵のレスキュー、料金の明確さを重視する場合は鍵のレスキューや鍵猿というように、目的によって適した業者は異なります。
          </p>
          <p className="leading-loose mb-8">
            町家や古い建具が残る中京区では、鍵を替えるという判断の前に、加工の可否の確認が必要です。貸主・管理者への確認、外観に関わる部分の取り決め、引き戸特有の構造の3点を押さえてから業者へ相談することで、見積もりの精度が上がり、やり直しも避けられます。そのうえで、本記事の一次確認値を参考に、目的と予算に合った業者をお選びください。
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
              {["京都市中京区", "町家", "引き戸の錠", "賃貸の原状回復", "鍵交換", "エリア別"].map((t) => (
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
                { href: "/area/osaka/", label: "大阪の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/osaka-chuo/", label: "大阪市中央区の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/kobe/", label: "神戸の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/kobe-chuo/", label: "神戸市中央区の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/otsu/", label: "大津の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/nara/", label: "奈良の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/sakai/", label: "堺の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/uji/", label: "宇治市の鍵開け・鍵交換業者おすすめ4選" },
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
                { href: "/hikido-kagi/", label: "引き戸の鍵の解説" },
                { href: "/hojo-jou/", label: "補助錠の選び方" },
                { href: "/chintai-kagi-koukan-hiyou/", label: "賃貸の鍵交換費用" },
                { href: "/kagi-shurui-zukan/", label: "鍵の種類図鑑" },
                { href: "/kagi-koukan-timing/", label: "鍵交換のタイミング" },
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
