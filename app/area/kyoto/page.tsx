import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/kyoto/";
const UPDATED = "2026年8月10日";
const UPDATED_ISO = "2026-08-10";

export const metadata: Metadata = {
  title: {
    absolute:
      "【2026年最新】京都の鍵開け・鍵交換業者おすすめ6選！24時間対応の鍵屋を徹底比較｜鍵トラブルナビ",
  },
  description:
    "京都で鍵開け・鍵交換を頼める鍵業者6社を一次確認値で比較。関西を中心に対応する鍵猿（鍵開け8,800円〜税込）を含め、カギ110番（鍵開け6,600円〜）・鍵の生活救急車・JBR・鍵のレスキュー・カギの救急車の料金と受付時間、古い住宅の鍵で伝えるべきことまで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】京都の鍵開け・鍵交換業者おすすめ6選！24時間対応の鍵屋を徹底比較",
    description:
      "京都で鍵開け・鍵交換を頼める鍵業者6社を、料金・受付時間の一次確認値で比較。関西中心の鍵猿を含む6社の選び方や、古い住宅の鍵を依頼するときのコツも解説します。",
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
        で、24時間365日受付・電話一本で最短5分の手配をうたっています。全国47都道府県の加盟店ネットワークが対象のため、京都府内の依頼でも近隣の加盟店が手配される仕組みです。見積もりは無料で、出張費・作業費・部材費を含めた金額を事前に提示する明朗会計を掲げています。
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
      { k: "対応エリア", v: "全国47都道府県（京都府対応）" },
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
  {
    id: "kagizaru",
    slug: "kagizaru",
    num: "1-6",
    catch: "関西中心・自社施工",
    name: "鍵猿",
    intro: (
      <>
        鍵猿（かぎざる）は、<Hl>大阪に本社を置くSLS株式会社が運営する鍵トラブル解決サービス</Hl>
        で、関西エリア（大阪・京都・兵庫・奈良・滋賀・和歌山）を中心に豊富な実績を持ち、京都府も対応エリアに含まれます。
        <Hl>下請けを使わない自社施工</Hl>
        （自社コールセンター＋自社スタッフによる施工体制）で、鍵開けは
        <Hl>8,800円〜（税込・玄関の鍵開けの目安）</Hl>
        。基本料・見積料・出張料はすべて0円で、作業前に合計金額を提示し追加請求しない明朗会計を掲げ、
        <Hl>1年間の無料工事保証・無償商品保証</Hl>
        があります。最短15分到着をうたい、防犯設備士も在籍しています。
      </>
    ),
    recommend: [
      "京都・関西エリアで実績の多い業者に依頼したい人",
      "下請けではなく自社スタッフの施工にこだわる人",
      "作業後の保証（1年保証）を重視する人",
      "鍵交換と合わせて防犯面も相談したい人",
    ],
    table: [
      { k: "鍵開け料金", v: "8,800円〜（税込）", note: "玄関の鍵開けの目安。鍵交換は11,000円〜（税込）＋部品代" },
      { k: "受付時間", v: "電話受付8:00〜23:00", note: "施工は深夜・早朝も対応・365日年中無休" },
      { k: "会計方式", v: "基本料・見積料・出張料0円", note: "作業前に合計金額を提示・追加請求なし" },
      { k: "保証", v: "1年間の無料工事保証・無償商品保証" },
      { k: "施工体制", v: "自社施工（下請けなし）・防犯設備士在籍" },
      { k: "運営会社", v: "SLS株式会社（大阪本社）" },
    ],
    memo:
      "公式サイトで鍵開け8,800円〜（税込）、基本料・見積料・出張料0円、1年間の無料工事保証・無償商品保証、自社スタッフ施工を確認（2026年7月7日時点）。関西エリア（大阪・京都・兵庫・奈良・滋賀・和歌山）を中心に実績が多い一方、電話受付は8:00〜23:00のため、深夜に新規で電話する場合は受付時間に注意が必要です。夜間などは料金が上がる場合があるため、作業前に提示される合計金額を必ず確認しましょう。",
    memoDate: "2026年7月7日確認",
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
        : a.id === "kagizaru"
          ? "電話受付8:00〜23:00（施工は深夜・早朝も対応）"
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
            : a.id === "kagi-kyukyusha"
              ? "作業前に総額見積り（公式明記）"
              : "関西中心・自社施工・1年保証",
}));

const steps = [
  {
    t: "① 状況と鍵の種類を整理する（古い鍵は特に重要）",
    b: "「開かない」「なくした」「折れた」など状況と、玄関・車・金庫といった対象、鍵の種類をメモしておくと、電話での見積もり精度が上がります。京都には歴史のある住宅も多く、引き戸の鍵や年季の入った錠前が使われていることがあります。旧型の鍵は部品の手配や作業内容が変わる場合があるため、鍵やドアの写真を撮っておき、電話で「引き戸の鍵」「古い錠前」であることを伝えると話が早く進みます。賃貸の場合は、業者より先に管理会社・大家への連絡が基本です。",
  },
  {
    t: "② 出張費・夜間料金を含めた総額の見積もりを取る",
    b: "広告の「◯◯円〜」は最低価格で、実際は鍵の種類・出張距離・時間帯で変わります。作業前に、出張費・部材費・深夜割増まで含めた総額を必ず確認しましょう。見積もり無料・キャンセル無料の業者なら、金額を見てから断ることもできます。",
  },
  {
    t: "③ 運営会社を確認する",
    b: "鍵業界には「カギ110番」「鍵の110番救急車」「カギの救急車」「カギの生活救急車」など名前のよく似たサービスが複数あり、運営会社はそれぞれ別です。依頼前にサービス名だけでなく運営会社名まで確認すると取り違えを防げます。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "京都は全国型の業者に加えて関西中心の業者（鍵猿）も選択肢に入るエリアです。締め出しなどの緊急時以外は、2〜3社から見積もりを取って総額・条件を比較するのがおすすめです。金額に納得できない場合は、その場で契約せず一度断る選択肢もあります。",
  },
];

const faqs = [
  {
    q: "京都の鍵開け料金の相場はいくらですか？",
    a: "当サイトが一次確認した各社の公式表示では、鍵開けの基本料金はカギ110番6,600円〜、鍵のレスキュー8,000円〜、鍵の生活救急車・JBR・鍵猿8,800円〜（いずれも税込）、カギの救急車は公式目安11,000〜44,000円です。ただしこれは最低価格や目安で、鍵の種類（ディンプルキー等）・時間帯・出張距離で総額は変わります。作業前に総額の見積もりを取りましょう。詳しくは鍵開け・鍵交換の料金相場ページで解説しています。",
  },
  {
    q: "鍵猿は京都で依頼できますか？",
    a: "はい。鍵猿は大阪に本社を置くSLS株式会社が運営し、関西エリア（大阪・京都・兵庫・奈良・滋賀・和歌山）を中心に豊富な実績を持つサービスで、京都府も対応エリアに含まれます。下請けを使わない自社施工で、鍵開けは8,800円〜（税込）、基本料・見積料・出張料は0円、1年間の無料工事保証があります。電話受付は8:00〜23:00のため、深夜に新規で連絡する場合は受付時間に注意してください。",
  },
  {
    q: "古い町家や引き戸の鍵でも対応してもらえますか？",
    a: "引き戸の鍵や古い錠前も、多くの鍵業者が相談を受け付けています。ただし旧型の錠前は部品の在庫や作業内容が現行の鍵と異なる場合があるため、電話の時点で「引き戸の鍵」「古い錠前」であることを伝え、対応可否と概算を確認してから来てもらうのがスムーズです。鍵やドアの写真を撮っておくと説明しやすくなります。当日対応できない部品でも、後日の交換手配で解決できる場合があります。",
  },
  {
    q: "賃貸マンションで勝手に鍵交換してもいいですか？",
    a: "賃貸の鍵は大家・管理会社の管理物にあたるため、無断で交換すると契約違反となる恐れがあります。締め出しや紛失のときも、まず管理会社・大家に連絡しましょう。合鍵やマスターキーで開けてもらえる場合があり、費用がかからずに済むこともあります。交換が必要な場合も、必ず事前に許可を取ってから行いましょう。",
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

export default function AreaKyotoPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】京都の鍵開け・鍵交換業者おすすめ6選！24時間対応の鍵屋を徹底比較",
    description:
      "京都で鍵開け・鍵交換を頼める鍵業者6社を、料金・受付時間の一次確認値で比較した記事です。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-08-10T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "京都の鍵開け・鍵交換業者おすすめ6選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#kyoto6",
      label: "1｜京都で人気のおすすめ・優良の鍵業者6選",
      sub: [
        { href: "#hikaku", label: "京都の鍵業者を一覧表で徹底比較" },
        ...agents.map((a) => ({ href: `#${a.id}`, label: `${a.num}｜【${a.catch}】${a.name}` })),
      ],
    },
    { href: "#isogi", label: "2｜とにかく急いで開けてほしいなら" },
    { href: "#shinya", label: "3｜深夜・早朝のトラブルなら" },
    { href: "#meikaku", label: "4｜料金を事前に明確にしたいなら" },
    { href: "#jisha", label: "5｜自社施工・自社スタッフで選ぶなら" },
    { href: "#kyoto-tips", label: "6｜京都で鍵業者を呼ぶ前に確認したいこと" },
    { href: "#erabikata", label: "7｜失敗しない鍵業者の選び方" },
    { href: "#faq", label: "8｜京都の鍵業者でよくある質問" },
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
              <li className="text-foreground">京都の鍵開け・鍵交換業者おすすめ6選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-foreground">
              【2026年最新】京都の鍵開け・鍵交換業者おすすめ6選！24時間対応の鍵屋を徹底比較
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
              {["京都", "鍵開け", "鍵交換", "24時間対応", "業者比較"].map((t) => (
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
                alt="京都の鍵開け・鍵交換業者の比較"
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
              「帰宅したら鍵が見当たらない」「実家の古い引き戸の鍵を交換したい」——京都で鍵トラブルにあったとき、どの業者に頼めばよいか迷う方は多いはずです。京都は全国展開の鍵業者に加えて、関西を中心に活動する業者（鍵猿）も選択肢に入るエリアです。また、歴史のある住宅では引き戸の鍵や年季の入った錠前が現役で使われていることもあり、依頼時に鍵の種類を正しく伝えられるかどうかで話の早さが変わります。
            </p>
            <p>
              本記事では、京都府内から依頼できる主要な鍵業者6社を、当サイト編集部が各社公式サイト等で一次確認した料金・受付時間・運営会社の情報だけで比較しました。全国型5社に、関西中心の鍵猿を加えた6社構成です。急ぎ・深夜・料金重視・自社施工重視といった目的別の選び方や、古い鍵を依頼するときのコツもまとめています。ぜひ鍵業者選びの参考にしてください。
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

          {/* 1｜6選 */}
          <H2 id="kyoto6" num="1">京都で人気のおすすめ・優良の鍵業者6選</H2>
          <p className="leading-loose mb-2">
            京都府内から依頼できる主要な鍵業者6社を紹介します。掲載している料金・受付時間・運営会社は、いずれも編集部が各社公式サイト等で一次確認した値です（確認日は各社の欄に記載）。実際の総額は鍵の種類・時間帯・出張距離で変わるため、必ず作業前に見積もりで確認してください。
          </p>
          <p className="text-sm text-text-muted mb-8">
            ※同じ関西の<Link href="/area/osaka/" className="text-primary underline">大阪版</Link>・<Link href="/area/kobe/" className="text-primary underline">神戸版</Link>や、<Link href="/area/tokyo/" className="text-primary underline">東京版</Link>もご覧ください。
          </p>

          <h3 id="hikaku" className="scroll-mt-20 relative pb-3 mb-5 border-b-4 border-[#EAF1F8] text-base md:text-[22px] font-bold text-foreground">
            京都の鍵業者を一覧表で徹底比較
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
          <H2 id="isogi" num="2">京都の鍵業者をとにかく急いで開けてほしいなら</H2>
          <p className="leading-loose mb-4">
            締め出しなどで一刻も早く開けてほしい場合は、駆けつけスピードの目安を公表している業者が候補になります。<Hl>鍵の生活救急車は最短15分の駆けつけと全国約2,270店の拠点網</Hl>をうたっており、<Hl>関西中心の鍵猿も最短15分到着</Hl>を掲げています。また、<Hl>カギ110番は電話一本で最短5分の手配</Hl>（全国47都道府県の加盟店ネットワークから近隣の業者を手配）をうたっています。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※いずれも「最短」の目安であり、拠点からの距離・交通状況・繁忙状況で到着時間は変わります。急ぎのときこそ、電話の際に到着目安を確認してから依頼しましょう。
          </p>

          {/* 3｜深夜 */}
          <H2 id="shinya" num="3">深夜・早朝の鍵トラブルなら</H2>
          <p className="leading-loose mb-4">
            深夜・早朝のトラブルでは、24時間受付かどうかがまず重要です。一次確認値では、<Hl>カギ110番・JBR・鍵のレスキューが24時間365日受付</Hl>を掲げており、カギの救急車も多くの加盟店が24時間受付です。一方、<Hl>鍵猿の電話受付は8:00〜23:00</Hl>（施工は深夜・早朝も対応・365日）のため、深夜に新規で電話する場合は24時間受付の業者のほうが確実です。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※受付が24時間でも、深夜帯は割増料金や到着時間の変動があり得ます。電話時に深夜料金の有無と総額を確認してから依頼するのが安心です。
          </p>

          {/* 4｜料金明確 */}
          <H2 id="meikaku" num="4">料金を事前に明確にしたいなら</H2>
          <p className="leading-loose mb-4">
            鍵業者とのトラブルで多いのが「作業後に想定外の金額を請求された」というケースです。料金の透明性を重視するなら、<Hl>鍵のレスキューは料金をホームページで明示し、現場での追加費用がない</Hl>と掲げています（鍵開け8,000円〜＋出張料0円〜8,800円）。<Hl>鍵猿も基本料・見積料・出張料0円で、作業前に合計金額を提示し追加請求しない方式</Hl>です。また、<Hl>鍵の生活救急車は出張・見積もり・キャンセルが無料</Hl>のため、提示された金額を見てから依頼するかどうかを判断できます。
          </p>
          <p className="leading-loose mb-4">
            どの業者に頼む場合でも、作業前に出張費・部材費・深夜割増まで含めた総額の見積もりを確認することが大前提です。相場感は<Link href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場ページ</Link>で解説しています。
          </p>

          {/* 5｜自社施工 */}
          <H2 id="jisha" num="5">自社施工・自社スタッフで選ぶなら</H2>
          <p className="leading-loose mb-4">
            鍵業者には、依頼を受けて加盟店を手配する「紹介型」と、自社のスタッフが直接対応する「自社対応型」があります。紹介型は対応範囲が広い一方、店舗によって技術・対応に差が出ることがあります。京都で自社施工にこだわるなら、<Hl>関西エリア中心に対応する鍵猿が選択肢</Hl>になります。下請けを使わない自社施工（自社コールセンター＋自社スタッフ）で、1年間の無料工事保証・無償商品保証があり、防犯設備士も在籍しています。全国型では、<Hl>鍵のレスキューが全国約20拠点を自社社員で対応する自社対応型</Hl>で、女性スタッフの指名にも対応しています。
          </p>
          <p className="leading-loose mb-4">
            担当者の所属まで気になる方は、依頼時に「自社スタッフか協力店か」を確認してみましょう。
          </p>

          {/* 6｜京都特有 */}
          <H2 id="kyoto-tips" num="6">京都で鍵業者を呼ぶ前に確認したいこと</H2>
          <p className="leading-loose mb-4">
            京都には歴史のある住宅や町家も多く、<Hl>引き戸の鍵や年季の入った錠前が現役で使われていることがあります</Hl>。旧型の錠前は部品の手配や作業内容が現行の鍵と異なる場合があるため、業者に電話する前に鍵やドアの写真を撮っておき、「引き戸の鍵」「古い錠前」であることを最初に伝えると、対応可否と概算の確認がスムーズです。鍵の種類の見分け方は<Link href="/kagi-shurui-zukan/" className="text-primary underline">鍵の種類図鑑</Link>が参考になります。
          </p>
          <p className="leading-loose mb-4">
            マンション・アパートなど賃貸にお住まいの場合、鍵は大家・管理会社の管理物にあたるため、<Hl>締め出しや紛失のときは、鍵業者より先に管理会社・大家へ連絡するのが基本</Hl>です。合鍵やマスターキーで開けてもらえれば費用がかからずに済む場合があり、無断で鍵を開けたり交換したりすると契約上のトラブルになる恐れもあります。詳しい手順は<Link href="/shimedashi/" className="text-primary underline">鍵の閉じ込め・締め出しの対処法</Link>で解説しています。鍵をなくした場合は、<Link href="/kagi-funshitsu/" className="text-primary underline">警察への遺失届の提出</Link>も忘れずに行いましょう。
          </p>
          <p className="leading-loose mb-4">
            また、京都は全国型の業者と関西中心の業者の両方から選べるエリアです。急ぎでなければ、タイプの異なる業者（紹介型・自社施工型）から見積もりを取り、<Link href="/ryokin/" className="text-primary underline">料金相場</Link>と照らして比較すると、金額の妥当性を判断しやすくなります。
          </p>

          {/* 7｜選び方 */}
          <H2 id="erabikata" num="7">京都の鍵業者の失敗しない選び方</H2>
          <p className="leading-loose mb-6">
            鍵業者選びで後悔しないためには、次の4つのステップを踏むことが大切です。緊急時ほど「早く解決したいから」と即決しがちですが、数分の確認でトラブルの多くは防げます。
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
          <H2 id="faq" num="8">京都の鍵業者でよくある質問</H2>
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
                    {f.q.includes("相場") && (
                      <>
                        {" "}
                        <Link href="/ryokin/" className="text-primary underline">料金相場の詳細はこちら</Link>
                      </>
                    )}
                    {f.q.includes("鍵猿") && (
                      <>
                        {" "}
                        <Link href="/agents/kagizaru/" className="text-primary underline">鍵猿の詳細レビューはこちら</Link>
                      </>
                    )}
                    {f.q.includes("引き戸") && (
                      <>
                        {" "}
                        <Link href="/kagi-shurui-zukan/" className="text-primary underline">鍵の種類図鑑はこちら</Link>
                      </>
                    )}
                    {f.q.includes("賃貸") && (
                      <>
                        {" "}
                        <Link href="/shimedashi/" className="text-primary underline">締め出し時の対処法はこちら</Link>
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
            京都で鍵開け・鍵交換を頼める主要6社を、一次確認した料金・受付時間・運営会社の情報で比較しました。スピード重視なら鍵の生活救急車・鍵猿・カギ110番、深夜・早朝の新規受付ならカギ110番・JBR・鍵のレスキュー、自社施工と保証重視なら関西中心の鍵猿、料金の明確さ重視なら鍵のレスキューや鍵猿、というように、目的によって向いている業者は変わります。
          </p>
          <p className="leading-loose mb-8">
            古い引き戸の鍵や年季の入った錠前は、電話の時点で鍵の種類を伝えて対応可否と概算を確認するのがスムーズです。どの業者を選ぶ場合も、賃貸ならまず管理会社・大家への連絡、紛失なら警察への遺失届を済ませたうえで、作業前に総額の見積もりを確認することが失敗しないための共通ルールです。
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
              {["京都", "鍵開け", "鍵交換", "24時間対応", "業者比較", "エリア別"].map((t) => (
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
                { href: "/area/osaka/", label: "大阪の鍵開け・鍵交換業者おすすめ6選" },
                { href: "/area/kobe/", label: "神戸の鍵開け・鍵交換業者おすすめ6選" },
                { href: "/area/tokyo/", label: "東京の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/nagoya/", label: "名古屋の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/yokohama/", label: "横浜の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/fukuoka/", label: "福岡の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/sapporo/", label: "札幌の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/saitama/", label: "さいたま・埼玉の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/chiba/", label: "千葉の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/sendai/", label: "仙台の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/hiroshima/", label: "広島の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/sakai/", label: "堺の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/kawasaki/", label: "川崎の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/kitakyushu/", label: "北九州の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/hamamatsu/", label: "浜松の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/shizuoka/", label: "静岡の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/okayama/", label: "岡山の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/kumamoto/", label: "熊本の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/niigata/", label: "新潟の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/kagoshima/", label: "鹿児島の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/kanazawa/", label: "金沢の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/utsunomiya/", label: "宇都宮の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/matsuyama/", label: "松山の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/naha/", label: "那覇の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/takamatsu/", label: "高松の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/nagano/", label: "長野の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/gifu/", label: "岐阜の鍵開け・鍵交換業者おすすめ5選" },
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
                { href: "/ryokin/", label: "鍵開け・鍵交換の料金相場" },
                { href: "/ryokin-index/", label: "主要業者の料金一次確認まとめ" },
                { href: "/shimedashi/", label: "鍵の閉じ込め・締め出しの対処法" },
                { href: "/kagi-shurui-zukan/", label: "鍵の種類図鑑" },
                { href: "/agents/", label: "鍵業者一覧・比較" },
                { href: "/agents/kagizaru/", label: "鍵猿の口コミ・評判レビュー" },
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
