import AgentIntro from "@/components/AgentIntro";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/kobe-chuo/";
const UPDATED = "2026年10月15日";
const UPDATED_ISO = "2026-10-15";

export const metadata: Metadata = {
  title: {
    absolute:
      "【2026年最新】神戸市中央区の鍵開け・鍵交換業者おすすめ5選｜滞在先で鍵をなくしたときの確認手順と解錠時の本人確認も解説する鍵屋比較｜鍵トラブルナビ",
  },
  description:
    "神戸市中央区で鍵開け・鍵交換を依頼できる鍵業者5社を一次確認値で比較。全国対応・自社施工の鍵猿（鍵開け8,800円〜税込）を含め、カギ110番（鍵開け11,000円〜）・鍵の生活救急車・鍵のレスキュー・カギの救急車の料金と受付時間、三宮周辺の宿泊先で鍵をなくした場合の連絡先と、解錠時の本人確認まで解説します。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】神戸市中央区の鍵開け・鍵交換業者おすすめ5選｜滞在先で鍵をなくしたときの確認手順と解錠時の本人確認も解説する鍵屋比較",
    description:
      "神戸市中央区で鍵開け・鍵交換を依頼できる鍵業者5社を、料金・受付時間の一次確認値で比較。宿泊先や短期滞在先で鍵をなくした場合の連絡先と、解錠を依頼する際の本人確認についても解説します。",
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
        で、24時間365日受付・電話一本で最短5分の手配を掲げています。全国47都道府県の加盟店ネットワークが対象のため、中央区内の依頼でも近隣の加盟店が手配される仕組みです。見積もりは無料で、出張料・作業費・部材費を含めた金額を事前に提示する明朗会計を掲げています。
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
      { k: "対応エリア", v: "全国47都道府県（兵庫県対応）", note: "兵庫県対応の一次確認値。中央区での詳細な対応可否・条件は依頼時に各社へ確認" },
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
  {
    id: "kagizaru",
    slug: "kagizaru",
    num: "1-5",
    catch: "大阪本社・自社施工",
    name: "鍵猿",
    intro: (
      <>
        鍵猿（かぎざる）は、<Hl>大阪に本社を置くSLS株式会社が運営する鍵トラブル解決サービス</Hl>
        で、関西エリア（大阪・京都・兵庫・奈良・滋賀・和歌山）を中心に豊富な実績を持ち、兵庫県も対応エリアに含まれます。
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
      { k: "対応エリア", v: "全国対応（秋田・福井・鳥取・島根・徳島・宮崎を除く。兵庫県対応）", note: "兵庫県対応の一次確認値。中央区での詳細な対応可否・条件は依頼時に各社へ確認" },
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
    b: "「なくした」のか「開かない」のかに加えて、その部屋が自分の住まいなのか、宿泊先や短期滞在先なのかを整理してから電話してください。宿泊施設の客室は施設側が管理しており、宿泊者が鍵業者を手配するものではありません。借りている住まいの場合は、賃貸物件であれば管理会社・大家、民泊やマンスリー型であれば運営者への連絡を優先してください。玄関の錠の種類が分かれば、電話での見積もりの精度が上がります。",
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
    b: "締め出しなどの緊急時以外は、2〜3社から見積もりを取り、総額・条件を比較することをおすすめします。神戸は全国型の業者に加えて自社施工の業者（鍵猿）も選択肢に入るエリアです（対応エリアは「兵庫県」としての一次確認値のため、中央区での詳細条件は各社へご確認ください）。予定が詰まっていると即決しがちですが、金額に納得できない場合は、その場でお断りいただくこともできます。",
  },
];

const faqs: AreaFaq[] = [
  {
    q: "中央区の鍵開け料金の相場はいくらですか？",
    a: "当サイトが一次確認した各社の公式表示では、鍵開けの基本料金はカギ110番11,000円〜、鍵のレスキュー6,600円〜（別途出張料4,400〜8,800円）、鍵の生活救急車・鍵猿8,800円〜（いずれも税込）、カギの救急車は公式目安11,000〜44,000円です。ただし、これらは最低価格または目安であり、鍵の種類（ディンプルキー等）・時間帯・出張距離で総額は変わります。作業前に総額の見積もりを取ることをおすすめします。",
    link: { href: "/ryokin/", label: "料金相場の詳細はこちら" },
  },
  {
    q: "旅行中に宿泊先の部屋の鍵をなくしました。鍵業者に依頼すれば開けてもらえますか？",
    a: "ホテルや旅館の客室は施設側が管理しているため、まずフロントへお申し出ください。民泊やマンスリー型の住まいの場合は、予約時に案内された運営者・管理者の緊急連絡先へご連絡ください。紛失した鍵に部屋番号が分かる情報が付いていた場合は、その点もあわせてお伝えください。",
  },
  {
    q: "鍵業者に解錠を依頼するとき、本人確認では何を確認されますか？",
    a: "身分証のほか、賃貸借契約書や公共料金の通知など、住所を示す書類の提示を求められることがあります。書類が手元にない場合は、貸主や運営者に事情を説明してもらえるよう連絡をつけておくと、手続きを進めやすくなります。",
  },
  {
    q: "身分証と鍵を一緒になくしました。どう動けばよいですか？",
    a: "まず警察へ遺失届を提出してください。住所が記載された書類と鍵を一緒になくした場合は、滞在先であれば施設や貸主にその点を伝え、自宅の鍵であれば錠の交換も検討することをおすすめします。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処はこちら" },
  },
  {
    q: "鍵猿は神戸市中央区で依頼できますか？",
    a: "鍵猿は大阪に本社を置くSLS株式会社が運営し、関西エリア（大阪・京都・兵庫・奈良・滋賀・和歌山）を中心に実績を持つサービスで、兵庫県も対応エリアに含まれます。下請けを使わない自社施工で、鍵開けは8,800円〜（税込）、基本料・見積料・出張料は0円、1年間の無料工事保証・無償商品保証があります。電話受付は8:00〜23:00のため、深夜に新規で連絡する場合は受付時間に注意してください。なお対応エリアは「兵庫県」としての一次確認値のため、中央区での詳細な対応可否・条件は依頼時に各社へご確認ください。",
    link: { href: "/agents/kagizaru/", label: "鍵猿の詳細ページはこちら" },
  },
  {
    q: "深夜や早朝でも中央区に来てくれますか？",
    a: "カギ110番・鍵のレスキューは24時間365日受付を掲げており、カギの救急車も多くの加盟店が24時間受付です。鍵猿は電話受付が8:00〜23:00ですが、施工は深夜・早朝も対応とされています。深夜帯は割増料金や到着時間の変動が生じる場合があるため、電話の際に深夜料金の有無と到着目安を確認してから依頼することをおすすめします。なお各社の対応エリアは「兵庫県」としての一次確認値のため、中央区での詳細は依頼時に各社へご確認ください。",
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

export default function AreaPageKobeChuo() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】神戸市中央区の鍵開け・鍵交換業者おすすめ5選｜滞在先で鍵をなくしたときの確認手順と解錠時の本人確認も解説する鍵屋比較",
    description:
      "神戸市中央区で鍵開け・鍵交換を依頼できる鍵業者5社を、料金・受付時間の一次確認値で比較。宿泊先や短期滞在先で鍵をなくした場合の連絡先と、解錠を依頼する際の本人確認についても解説します。",
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
      { "@type": "ListItem", position: 2, name: "神戸の鍵開け・鍵交換業者おすすめ5選", item: `${SITE}/area/kobe/` },
      { "@type": "ListItem", position: 3, name: "神戸市中央区の鍵開け・鍵交換業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#top5",
      label: "1｜神戸市中央区で依頼できるおすすめの鍵業者5選",
      sub: [
        { href: "#hikaku", label: "神戸市中央区の鍵業者の一覧比較表" },
        ...agents.map((a) => ({ href: `#${a.id}`, label: `${a.num}｜【${a.catch}】${a.name}` })),
      ],
    },
    { href: "#isogi", label: "2｜急いで鍵開けを依頼したい場合" },
    { href: "#shinya", label: "3｜深夜・早朝のトラブルの場合" },
    { href: "#meikaku", label: "4｜料金を事前に確認したい場合" },
    { href: "#jisha", label: "5｜自社スタッフによる対応を希望する場合" },
    { href: "#tips", label: "6｜中央区で鍵業者に依頼する前の確認事項（滞在先の鍵の管理者の確認）" },
    { href: "#erabikata", label: "7｜鍵業者の選び方" },
    { href: "#faq", label: "8｜中央区の鍵業者でよくある質問" },
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
                <Link href="/area/kobe/" className="hover:underline">神戸</Link>
              </li>
              <li>/</li>
              <li className="text-foreground">神戸市中央区の鍵開け・鍵交換業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-foreground">
              【2026年最新】神戸市中央区の鍵開け・鍵交換業者おすすめ5選｜滞在先で鍵をなくしたときの確認手順と解錠時の本人確認も解説する鍵屋比較
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
              {["神戸市中央区", "三宮周辺", "宿泊先の鍵", "本人確認", "業者比較"].map((t) => (
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
                alt="神戸市中央区の鍵開け・鍵交換業者の比較"
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
              神戸市中央区は、三宮を中心とした商業地に、ホテルや短期滞在向けの住まいが密に重なっているエリアです。区内で鍵トラブルに遭う方には、居住者だけでなく、数日だけ滞在している方も含まれます。滞在先の部屋が開かない場合は、自宅の玄関が開かない場合と比べて、連絡すべき相手も必要な書類も異なります。
            </p>
            <p>
              本記事では、神戸市中央区内から依頼できる主要な鍵業者5社を、当サイト編集部が各社公式サイト等で一次確認した料金・受付時間・運営会社の情報だけで比較しました。あわせて、宿泊先や短期滞在先で鍵が使えなくなった場合の連絡先と、鍵業者に解錠を依頼する際に行われる確認を、滞在者の立場から整理しています。
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
          <H2 id="top5" num="1">神戸市中央区で依頼できるおすすめの鍵業者5選</H2>
          <p className="leading-loose mb-2">
            神戸市中央区内から依頼できる主要な鍵業者5社を紹介します。掲載している料金・受付時間・運営会社は、いずれも編集部が各社公式サイト等で一次確認した値です（確認日は各社の欄に記載）。各社の対応エリアは「兵庫県」としての一次確認値のため、中央区での詳細な対応可否・条件は依頼時に各社へご確認ください。実際の総額は鍵の種類・時間帯・出張距離で変わるため、必ず作業前に見積もりで確認してください。
          </p>
          <p className="text-sm text-text-muted mb-8">
            ※<Link href="/area/kobe/" className="text-primary underline">神戸全体の情報はこちら</Link>（神戸版では同じ一次確認値で5社を比較しています）。
          </p>

          <h3 id="hikaku" className="scroll-mt-20 relative pb-3 mb-5 border-b-4 border-[#EAF1F8] text-base md:text-[22px] font-bold text-foreground">
            神戸市中央区の鍵業者の一覧比較表
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
          <H2 id="isogi" num="2">中央区で急いで鍵開けを依頼したい場合</H2>
          <p className="leading-loose mb-4">
            土地勘のない場所で足止めされると、待ち時間の見通しが立たないこと自体が不安につながります。駆けつけスピードの目安を公表している業者としては、<Hl>鍵の生活救急車が最短15分の駆けつけと全国約2,270店の拠点網</Hl>を掲げています。拠点数が多いことは、到着までの時間を短くする要素の一つです。また、<Hl>カギ110番は電話一本で最短5分の手配</Hl>（全国47都道府県の加盟店ネットワークから近隣の業者を手配する仕組み）を掲げています。関西を中心に展開する鍵猿も最短15分到着を掲げています。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※いずれも「最短」の目安であり、拠点からの距離・交通状況・繁忙状況で到着時間は変わります。急ぎの場合も、電話の際に到着目安を確認してから依頼することをおすすめします。
          </p>

          {/* 3｜深夜 */}
          <H2 id="shinya" num="3">深夜・早朝の鍵トラブルの場合</H2>
          <p className="leading-loose mb-4">
            夜行便や遅い時間の到着で、チェックイン後に鍵の不具合へ気づくこともあります。一次確認値では<Hl>カギ110番・鍵のレスキューが24時間365日受付</Hl>を掲げており、カギの救急車も多くの加盟店が24時間受付です。<Hl>鍵猿は電話受付が8:00〜23:00</Hl>で、施工は深夜・早朝も対応とされています。深夜に新規で電話する場合は、この受付時間の違いを踏まえて連絡先を選んでください。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※24時間受付の業者でも、深夜帯は割増料金が加わる場合や、到着時間が変動する場合があります。電話の際に深夜料金の有無と総額を確認してから依頼することをおすすめします。
          </p>

          {/* 4｜料金明確 */}
          <H2 id="meikaku" num="4">料金を事前に確認したい場合</H2>
          <p className="leading-loose mb-4">
            滞在中の出費は予定外のものであるため、金額の見通しが立つかどうかが判断に影響します。<Hl>鍵のレスキューは鍵開け6,600円〜（税込）と出張料4,400〜8,800円（税込・地域により異なる）を公式サイトで分けて公開</Hl>しています。また、<Hl>鍵の生活救急車は出張・見積もり・キャンセルが無料</Hl>のため、提示された金額を見てから依頼するかどうかを判断できます。<Hl>鍵猿は基本料・見積料・出張料が0円</Hl>で、作業前に合計金額を提示し追加請求しない方式を掲げています。
          </p>
          <p className="leading-loose mb-4">
            どの業者に依頼する場合も、作業前に出張料・部材費・深夜割増まで含めた総額の見積もりをご確認ください。料金の目安は<Link href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場ページ</Link>で解説しています。
          </p>

          {/* 5｜自社スタッフ */}
          <H2 id="jisha" num="5">自社スタッフによる対応を希望する場合</H2>
          <p className="leading-loose mb-4">
            鍵業者には、依頼を受けて加盟店を手配する「紹介型」と、自社のスタッフが直接対応する「自社対応型」があります。紹介型は対応範囲が広い一方、店舗によって技術・対応に差が出ることがあります。慣れない土地で業者の到着を待つ場合は、担当者の所属が分かっているほうが落ち着いて待てます。全国対応の<Hl>鍵猿も下請けを使わない自社施工</Hl>で、1年間の無料工事保証を掲げています。依頼時に「自社スタッフか協力店か」をご確認ください。
          </p>

          {/* 6｜区特有 */}
          <H2 id="tips" num="6">中央区で鍵業者に依頼する前の確認事項（滞在先の鍵の管理者の確認）</H2>
          <p className="leading-loose mb-4">
            滞在先での鍵トラブルで最初に確認すべきなのは、<Hl>その部屋の鍵を管理しているのが誰か</Hl>です。ホテルや旅館であれば、部屋の設備を管理しているのは施設側で、宿泊者が独自に鍵業者を手配するものではありません。まずフロントへ申し出れば、予備のカードキーの発行や別室への移動といった対応が取られます。民泊やマンスリー型の住まいでは、フロントの代わりに運営者・管理者が窓口になります。予約に使ったサービスの連絡先や、チェックイン時に案内された緊急連絡先を先に確認してください。
          </p>
          <p className="leading-loose mb-4">
            自分で鍵業者に依頼するのは、<Hl>その部屋を借りている当事者である場合</Hl>です。その際に必要となるのが本人確認です。鍵業者は解錠にあたって、依頼者がその部屋を使う正当な立場にあるかを確認することが基本で、身分証や、賃貸借契約書、公共料金の通知など住所を示す書類の提示を求められることがあります。短期の滞在では手元にそうした書類がそろわないことも多いため、<Hl>貸主や運営者に連絡がつく状態にしておく</Hl>ことが、最も確実な備えになります。契約者本人以外が依頼する場合は、契約者からの連絡が必要になることもあります。
          </p>
          <p className="leading-loose mb-4">
            身分証と鍵を一緒に失った場合は、対応の順番が変わります。<Hl>先に警察へ遺失届を出しておく</Hl>と、届け出の控えが手元に残り、その後のやり取りで状況を説明しやすくなります。あわせて確認すべきなのが、なくしたものの組み合わせです。住所が記載された書類と部屋の鍵が同じ入れ物に入っていた場合、どの部屋の鍵かが第三者に分かる状態で渡った可能性を想定する必要があります。滞在先であれば施設や貸主へその点を伝え、自宅であれば錠の交換まで検討することになります。判断の目安は<Link href="/kagi-koukan-timing/" className="text-primary underline">鍵交換のタイミング</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4">
            滞在中は動線が普段と異なるため、探す順番にも注意が必要です。<Hl>立ち寄った店舗や施設、利用した交通機関、宿泊先の客室内</Hl>と、時系列で心当たりをたどり、それぞれの遺失物窓口へ連絡します。持ち歩いていた荷物の中を一度すべて出して確認することも有効です。なお、鍵に刻印された番号から合鍵を作れてしまう仕組みがあるため、<Hl>鍵の写真や番号を不用意に共有しない</Hl>ようにしてください。仕組みは<Link href="/key-number-aikagi/" className="text-primary underline">鍵番号と合鍵の解説</Link>、初動の流れは<Link href="/kagi-funshitsu/" className="text-primary underline">鍵をなくしたときの対処</Link>で扱っています。
          </p>

          {/* 7｜選び方 */}
          <H2 id="erabikata" num="7">中央区の鍵業者の選び方</H2>
          <p className="leading-loose mb-6">
            鍵業者を選ぶ際は、次の4つの手順で確認することをおすすめします。滞在中は情報を集める時間が限られますが、電話の数分で確認できることも多くあります。
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
          <H2 id="faq" num="8">中央区の鍵業者でよくある質問</H2>
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
            神戸市中央区で鍵開け・鍵交換を依頼できる主要5社を、一次確認した料金・受付時間・運営会社の情報で比較しました。到着の早さを重視する場合は鍵の生活救急車やカギ110番、深夜・早朝の受付を重視する場合はカギ110番・鍵のレスキュー、料金の明確さを重視する場合は鍵のレスキューや鍵猿というように、目的によって適した業者は異なります。
          </p>
          <p className="leading-loose mb-8">
            滞在者と居住者が混在する中央区では、まず「その部屋の鍵を管理しているのは誰か」を確認することから始めてください。宿泊施設の場合は施設へ、民泊やマンスリー型の場合は運営者へ、賃貸物件の場合は管理会社・大家へ連絡します。自分で業者に依頼する立場かどうかが決まれば、その後の手順は明確です。そのうえで、本記事の一次確認値を参考に、時間帯と予算に合った業者をお選びください。
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
              {["神戸市中央区", "三宮周辺", "短期滞在", "本人確認", "鍵開け", "エリア別"].map((t) => (
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
                { href: "/area/kobe/", label: "神戸の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/kobe-nada/", label: "神戸市灘区の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/osaka/", label: "大阪の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/osaka-kita/", label: "大阪市北区の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/kyoto/", label: "京都の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/kyoto-nakagyo/", label: "京都市中京区の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/sakai/", label: "堺の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/nara/", label: "奈良の鍵開け・鍵交換業者おすすめ4選" },
                { href: "/area/otsu/", label: "大津の鍵開け・鍵交換業者おすすめ4選" },
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
                { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
                { href: "/kagi-koukan-timing/", label: "鍵交換のタイミング" },
                { href: "/key-number-aikagi/", label: "鍵番号と合鍵の解説" },
                { href: "/shimedashi/", label: "締め出しの対処" },
                { href: "/smart-lock/", label: "スマートロックの基礎知識" },
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
