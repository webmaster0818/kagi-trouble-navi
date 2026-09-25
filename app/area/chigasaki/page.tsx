import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/chigasaki/";
const UPDATED = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";

export const metadata: Metadata = {
  title: {
    absolute:
      "【2026年最新】茅ヶ崎市の鍵開け・鍵交換業者おすすめ5選！置き配を受け取る家の玄関まわりの施錠と鍵の置き場所も分かる鍵屋比較｜鍵トラブルナビ",
  },
  description:
    "茅ヶ崎市で鍵開け・鍵交換を頼める鍵業者5社を一次確認値で比較。カギ110番（鍵開け6,600円〜）・鍵の生活救急車（最短15分）・JBR・鍵のレスキュー・カギの救急車の料金と受付時間、置き配や宅配ボックスを使う家で起きやすい締め出しと無施錠、鍵を屋外に隠すことの危うさまで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】茅ヶ崎市の鍵開け・鍵交換業者おすすめ5選！置き配を受け取る家の玄関まわりの施錠と鍵の置き場所も分かる鍵屋比較",
    description:
      "茅ヶ崎市で鍵開け・鍵交換を頼める鍵業者5社を、料金・受付時間の一次確認値で比較。置き配を受け取る家の玄関まわりの施錠、荷物の取り込み中の締め出し予防、宅配ボックスの鍵の扱いも解説します。",
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
        で、24時間365日受付・電話一本で最短5分の手配をうたっています。全国47都道府県の加盟店ネットワークが対象のため、茅ヶ崎市内の依頼でも近隣の加盟店が手配される仕組みです。見積もりは無料で、出張費・作業費・部材費を含めた金額を事前に提示する明朗会計を掲げています。
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
      { k: "対応エリア", v: "全国47都道府県（神奈川県対応）", note: "神奈川県対応の一次確認値。茅ヶ崎市での詳細な対応可否・条件は依頼時に各社へ確認" },
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
    t: "① 締め出された状況を正確に伝える",
    b: "鍵は家の中にあるのか、なくしたのか。扉は自動で閉まるタイプか、自分で施錠したのか。中に家族やペットがいるか。火を使ったまま出ていないか。この4点は、到着の優先度と作業の進め方に直結します。とくに中に人がいる、火を使っているという状況は、最初に伝えてください。玄関以外に開けられる場所がないかも、電話の前に一通り確かめておきましょう。",
  },
  {
    t: "② 出張費・夜間料金を含めた総額の見積もりを取る",
    b: "広告の「◯◯円〜」は最低価格で、実際は錠の種類・出張距離・時間帯で変わります。財布も部屋の中という状況なら、支払い方法も先に確認してください。現金のみなのか、カードが使えるのか、家族に立ち会ってもらう形が取れるのか。作業を始めてから支払えないと分かるのが一番困る展開です。",
  },
  {
    t: "③ 運営会社を確認する",
    b: "鍵業界には「カギ110番」「鍵の110番救急車」「カギの救急車」「カギの生活救急車」など名前のよく似たサービスが複数あり、運営会社はそれぞれ別です。依頼前にサービス名だけでなく運営会社名まで確認すると取り違えを防げます。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "締め出しは急ぎの依頼ですが、宅配ボックスの錠や補助錠の相談のように日程に余裕がある依頼なら、2〜3社から見積もりを取って比較する価値があります。今回の5社はいずれも全国対応型で、茅ヶ崎市からも依頼できます（対応エリアは「神奈川県」としての一次確認値のため、詳細条件は各社へ確認を）。同じ写真と情報を渡せば、対応できる範囲と金額の差が見えやすくなります。",
  },
];

const faqs: AreaFaq[] = [
  {
    q: "茅ヶ崎市の鍵開け料金の相場はいくらですか？",
    a: "当サイトが一次確認した各社の公式表示では、鍵開けの基本料金はカギ110番6,600円〜、鍵のレスキュー8,000円〜、鍵の生活救急車・JBR8,800円〜（いずれも税込）、カギの救急車は公式目安11,000〜44,000円です。ただしこれは最低価格や目安で、鍵の種類（ディンプルキー等）・時間帯・出張距離で総額は変わります。締め出しで財布が部屋の中にある場合は、支払い方法も先に確認しておきましょう。",
    link: { href: "/ryokin/", label: "料金相場の詳細はこちら" },
  },
  {
    q: "荷物を取り込むあいだに締め出されました。どうすればいいですか？",
    a: "まず玄関以外の出入口を一通り確かめてください。勝手口、掃き出し窓、家族が在宅している可能性。集合住宅で自動的に施錠される扉なら、管理会社や管理人に連絡できるかを確認します。それでも入れないなら業者を呼ぶことになりますが、その際は鍵が室内にあるのか、なくしたのかを明確に伝えてください。室内にあると分かっていれば、解錠だけで済み、交換の話にはなりません。",
    link: { href: "/shimedashi/", label: "締め出されたときの対処はこちら" },
  },
  {
    q: "玄関の外に鍵を隠しておくのは危ないですか？",
    a: "おすすめできません。植木鉢の下、メーターボックスの中、郵便受けの裏といった場所は限られていて、探す側は数か所を確認すれば足ります。家族の出入りのために鍵を用意したいなら、暗証番号式のキーボックスを見えにくい位置に設置して番号を定期的に変える、補助錠を足して鍵一本では開かないようにする、といった方向のほうが現実的です。",
    link: { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口はこちら" },
  },
  {
    q: "戸建ての宅配ボックスの鍵をなくしました。鍵業者に頼めますか？",
    a: "対応できる場合がありますが、製品によって錠の仕組みが違うため、業者側で扱える範囲が分かれます。電話では「戸建てに後付けした宅配ボックスの鍵」と伝えたうえで、南京錠式かダイヤル式かを添え、可能なら錠の周りの写真を送ってください。解錠できても同じ鍵を作れないことがあり、その場合は錠ごとの交換が提案されます。メーカー名と品番が分かると返事が早く返ってきます。",
    link: { href: "/key-box-kanri/", label: "キーボックスの管理はこちら" },
  },
  {
    q: "オートロックのマンションで置き配を受け取るときの注意はありますか？",
    a: "共用エントランスの内側に置かれる形か、宅配ボックスに入る形かで扱いが変わります。いずれの場合も、荷物を取りに出るときに部屋の鍵を持つことが基本です。共用部の扉が自動で閉まる建物では、部屋の前を離れた時点で戻れなくなることがあります。共用の宅配ボックスが開かなくなったときは、自分で業者を呼ぶ前に管理会社・管理組合へ連絡してください。",
    link: { href: "/autolock-shimedashi-yobou/", label: "オートロックの締め出し予防はこちら" },
  },
  {
    q: "深夜や早朝でも茅ヶ崎市に来てくれますか？",
    a: "カギ110番・JBR・鍵のレスキューは24時間365日受付を掲げており、カギの救急車も多くの加盟店が24時間受付です。深夜帯は割増料金や到着時間の変動があり得るため、電話の際に深夜料金の有無と到着目安を確認してから依頼するのがおすすめです。なお各社の対応エリアは「神奈川県」としての一次確認値のため、茅ヶ崎市での詳細は依頼時に各社へご確認ください。",
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

export default function AreaPageChigasaki() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】茅ヶ崎市の鍵開け・鍵交換業者おすすめ5選！置き配を受け取る家の玄関まわりの施錠と鍵の置き場所も分かる鍵屋比較",
    description:
      "茅ヶ崎市で鍵開け・鍵交換を頼める鍵業者5社を、料金・受付時間の一次確認値で比較。置き配を受け取る家の玄関まわりの施錠、荷物の取り込み中の締め出し予防、宅配ボックスの鍵の扱いも解説します。",
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
      { "@type": "ListItem", position: 2, name: "茅ヶ崎市の鍵開け・鍵交換業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#top5",
      label: "1｜茅ヶ崎市で人気のおすすめ・優良の鍵業者5選",
      sub: [
        { href: "#hikaku", label: "茅ヶ崎市の鍵業者を一覧表で徹底比較" },
        ...agents.map((a) => ({ href: `#${a.id}`, label: `${a.num}｜【${a.catch}】${a.name}` })),
      ],
    },
    { href: "#isogi", label: "2｜とにかく急いで開けてほしいなら" },
    { href: "#shinya", label: "3｜深夜・早朝のトラブルなら" },
    { href: "#meikaku", label: "4｜料金を事前に明確にしたいなら" },
    { href: "#jisha", label: "5｜自社スタッフ対応にこだわるなら" },
    { href: "#chigasaki-tips", label: "6｜茅ヶ崎市で鍵業者を呼ぶ前に確認したいこと（置き配を受け取る家の玄関まわりの施錠と鍵の置き場所）" },
    { href: "#erabikata", label: "7｜失敗しない鍵業者の選び方" },
    { href: "#faq", label: "8｜茅ヶ崎市の鍵業者でよくある質問" },
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
              <li className="text-foreground">茅ヶ崎市の鍵開け・鍵交換業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-foreground">
              【2026年最新】茅ヶ崎市の鍵開け・鍵交換業者おすすめ5選！置き配を受け取る家の玄関まわりの施錠と鍵の置き場所も分かる鍵屋比較
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
              {["茅ヶ崎市", "置き配", "宅配ボックス", "締め出し予防", "業者比較"].map((t) => (
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
                alt="茅ヶ崎市の鍵開け・鍵交換業者の比較"
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
              茅ヶ崎市は神奈川県の中南部、相模湾に面したまちです。東海道線と相模線が通り、駅から少し離れると戸建てと低層の集合住宅が並ぶ住宅地が広がります。この数年で変わったのが、玄関の外に荷物が置かれている時間が増えたことです。置き配と宅配ボックスが日常になり、留守のあいだも、在宅していても、玄関先には何かが置かれている。便利になった一方で、鍵のかけ方と持ち方の習慣は、その変化に追いついていないことが少なくありません。
            </p>
            <p>
              本記事では、茅ヶ崎市内から依頼できる主要な鍵業者5社を、当サイト編集部が各社公式サイト等で一次確認した料金・受付時間・運営会社の情報だけで比較しました。あわせて、置き配を受け取る暮らしで起きやすい締め出しと無施錠について、荷物を取り込む数十秒のあいだに何が起きるのか、鍵をどこに置くべきでないのかを整理しています。
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
          <H2 id="top5" num="1">茅ヶ崎市で人気のおすすめ・優良の鍵業者5選</H2>
          <p className="leading-loose mb-2">
            茅ヶ崎市内から依頼できる主要な鍵業者5社を紹介します。掲載している料金・受付時間・運営会社は、いずれも編集部が各社公式サイト等で一次確認した値です（確認日は各社の欄に記載）。各社の対応エリアは「神奈川県」としての一次確認値のため、茅ヶ崎市での詳細な対応可否・条件は依頼時に各社へご確認ください。実際の総額は鍵の種類・時間帯・出張距離で変わるため、必ず作業前に見積もりで確認してください。
          </p>
          <p className="text-sm text-text-muted mb-8">
            ※近隣エリアの比較は<Link href="/area/fujisawa/" className="text-primary underline">藤沢市版</Link>・<Link href="/area/hiratsuka/" className="text-primary underline">平塚市版</Link>・<Link href="/area/yokohama-totsuka/" className="text-primary underline">横浜市戸塚区版</Link>もご覧ください。
          </p>

          <h3 id="hikaku" className="scroll-mt-20 relative pb-3 mb-5 border-b-4 border-[#EAF1F8] text-base md:text-[22px] font-bold text-foreground">
            茅ヶ崎市の鍵業者を一覧表で徹底比較
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
          <H2 id="isogi" num="2">茅ヶ崎市の鍵業者をとにかく急いで開けてほしいなら</H2>
          <p className="leading-loose mb-4">
            締め出しは、外出の途中ではなく、家のすぐ前で起きることが多いトラブルです。サンダルのまま、財布も鍵も持たずに出た数十秒が、そのまま数時間の足止ちになります。駆けつけスピードの目安を公表している業者としては、<Hl>鍵の生活救急車が最短15分の駆けつけと全国約2,270店の拠点網</Hl>をうたっており、拠点数の多さは到着スピードの裏付けになります。また、<Hl>カギ110番は電話一本で最短5分の手配</Hl>（全国47都道府県の加盟店ネットワークから近隣の業者を手配）を掲げています。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※いずれも「最短」の目安であり、拠点からの距離・交通状況・繁忙状況で到着時間は変わります。急ぎのときこそ、電話の際に到着目安を確認してから依頼しましょう。
          </p>

          {/* 3｜深夜 */}
          <H2 id="shinya" num="3">深夜・早朝の鍵トラブルなら</H2>
          <p className="leading-loose mb-4">
            家に入れないまま夜を越すかどうかは、早い時間に決めたい判断です。夜の再配達を受け取ろうとして出た先で締め出されると、上着も財布も部屋の中という状態になりがちです。一次確認値では<Hl>カギ110番・JBR・鍵のレスキューが24時間365日受付</Hl>を掲げており、カギの救急車も多くの加盟店が24時間受付です。特にJBRは賠償責任保険に加入した大手グループで、遅い時間の依頼でも相談しやすい体制です。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※受付が24時間でも、深夜帯は割増料金や到着時間の変動があり得ます。電話時に深夜料金の有無と総額を確認してから依頼するのが安心です。
          </p>

          {/* 4｜料金明確 */}
          <H2 id="meikaku" num="4">料金を事前に明確にしたいなら</H2>
          <p className="leading-loose mb-4">
            財布を部屋に置いたまま締め出された場合、支払いの段取りが先に必要になります。総額と支払い方法を先に示してもらえるかどうかが効いてきます。<Hl>鍵のレスキューは料金をホームページで明示し、現場での追加費用がない</Hl>と掲げています（鍵開け8,000円〜＋出張料0円〜8,800円）。また、<Hl>鍵の生活救急車は出張・見積もり・キャンセルが無料</Hl>のため、提示された金額を見てから依頼するかどうかを判断できます。
          </p>
          <p className="leading-loose mb-4">
            どの業者に頼む場合でも、作業前に出張費・部材費・深夜割増まで含めた総額の見積もりを確認することが大前提です。相場感は<Link href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場ページ</Link>で解説しています。
          </p>

          {/* 5｜自社スタッフ */}
          <H2 id="jisha" num="5">自社スタッフ対応にこだわるなら</H2>
          <p className="leading-loose mb-4">
            鍵業者には、依頼を受けて加盟店を手配する「紹介型」と、自社のスタッフが直接対応する「自社対応型」があります。紹介型は対応範囲が広い一方、店舗によって技術・対応に差が出ることがあります。今回の紹介では、<Hl>鍵のレスキューが全国約20拠点を自社社員で対応する自社対応型</Hl>で、女性スタッフの指名にも対応しています。玄関の解錠と同じ機会に、宅配ボックスの錠や補助錠の相談をしたい場合は、そうした住宅設備まで見てもらえるかを電話の段階で確認しておくと、出張の回数を減らせます。
          </p>

          {/* 6｜エリア特有 */}
          <H2 id="chigasaki-tips" num="6">茅ヶ崎市で鍵業者を呼ぶ前に確認したいこと（置き配を受け取る家の玄関まわりの施錠と鍵の置き場所）</H2>
          <p className="leading-loose mb-4">
            置き配が普通になって、<Hl>玄関の外に物がある時間と、そこへ出入りする回数が増えました</Hl>。荷物を取り込むのはほんの数十秒ですが、その短さが油断を生みます。鍵をかけずに出る、鍵を荷物の上に置いたまま両手で持ち上げる、サンダルで出て扉を押さえずに閉める。オートロックや自動で閉まる扉なら、この最後の一手で締め出しが成立します。戸建てでも、荷物を運び入れているあいだ玄関を開けっぱなしにしていれば、そこは無施錠の入口です。締め出しの対処は<Link href="/shimedashi/" className="text-primary underline">締め出されたときの対処</Link>、自動で閉まる扉の予防は<Link href="/autolock-shimedashi-yobou/" className="text-primary underline">オートロックの締め出し予防</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4">
            手当ては大がかりなものではありません。<Hl>玄関の外に出るときは、たとえ数歩でも鍵を持つ</Hl>。これが一つ。荷物を持つと手がふさがるので、鍵はポケットか首から下げるものに移して、荷物の上には置かない。もう一つは、玄関の内側に「取り込んだ荷物の定位置」を作ることです。置き場所が決まっていると、扉を開けたまま奥まで運ぶ必要がなくなり、扉の前を離れる時間が減ります。自動で閉まる扉の家では、ストッパーを使うか、扉が閉まる前提で動くかを決めておく。閉め忘れのほうが気になる人は<Link href="/kagi-shimewasure-taisaku/" className="text-primary underline">鍵の閉め忘れ対策</Link>も参考になります。
          </p>
          <p className="leading-loose mb-4">
            戸建てに後付けした宅配ボックスの鍵も、扱いを決めておきたいところです。南京錠式、ダイヤル式、印鑑を押して閉める式など、製品によって仕組みが違います。<Hl>暗証番号をボックスの近くに貼るのは、鍵を扉の横に吊るしているのと変わりません</Hl>。配達員に伝えるための番号なら、配達指示の欄で伝える方法を使い、現物には書かない。集合住宅の共用の宅配ボックスは管理会社や管理組合の所管なので、開かなくなったときは自分で業者を呼ぶ前に管理側へ連絡してください。屋外の錠は雨風で動きが渋くなりやすく、動きが悪いまま使い続けると鍵が折れることがあります。鍵の管理の考え方は<Link href="/key-box-kanri/" className="text-primary underline">キーボックスの管理と注意点</Link>で扱っています。
          </p>
          <p className="leading-loose mb-4">
            最後に、これだけはやめておきたいという話です。<Hl>植木鉢の下、メーターボックスの中、郵便受けの裏に鍵を隠す</Hl>。置き配の受け取りや家族の出入りを楽にするつもりでも、置き場所は限られていて、探す側は数か所を見れば足ります。表から見える場所に鍵があると分かった時点で、その家は入りやすい家になります。家族の出入りのために鍵を用意したいなら、暗証番号式のキーボックスを見えにくい位置に付けて番号を定期的に変える、補助錠を足して一本では開かないようにする、といった方向のほうが現実的です。侵入の手口は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>、補助錠の選び方は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>で解説しています。
          </p>

          {/* 7｜選び方 */}
          <H2 id="erabikata" num="7">茅ヶ崎市の鍵業者の失敗しない選び方</H2>
          <p className="leading-loose mb-6">
            鍵業者選びで後悔しないためには、次の4つのステップを踏むことが大切です。締め出しで呼ぶ場合は、伝える情報が少ないぶん、最初の電話の内容が結果を左右します。
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
          <H2 id="faq" num="8">茅ヶ崎市の鍵業者でよくある質問</H2>
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
            茅ヶ崎市で鍵開け・鍵交換を頼める主要5社を、一次確認した料金・受付時間・運営会社の情報で比較しました。スピード重視なら鍵の生活救急車やカギ110番、深夜・早朝の受付ならカギ110番・JBR・鍵のレスキュー、料金の明確さ重視なら鍵のレスキュー、というように、目的によって向いている業者は変わります。
          </p>
          <p className="leading-loose mb-8">
            置き配を受け取る暮らしでは、玄関の外に出る回数が増えます。数歩でも鍵を持つ、荷物の上に鍵を置かない、玄関の内側に取り込みの定位置を作る、宅配ボックスの暗証番号を現物に書かない、そして鍵を屋外に隠さない。どれも道具を買わずに今日から変えられる習慣です。締め出しで呼ぶときは、鍵が室内にあるのかなくしたのか、中に人がいるかを最初に伝えてください。本記事の一次確認値を出発点に、目的と予算に合った業者を選びましょう。
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
              {["茅ヶ崎市", "置き配", "荷物の取り込み", "無施錠の入口", "鍵の隠し場所", "エリア別"].map((t) => (
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
                { href: "/area/fujisawa/", label: "藤沢市の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/hiratsuka/", label: "平塚市の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/yokohama-totsuka/", label: "横浜市戸塚区の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/yokohama/", label: "横浜の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/sagamihara/", label: "相模原市の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/atsugi/", label: "厚木市の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/yokosuka/", label: "横須賀市の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/machida/", label: "町田市の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/kawasaki/", label: "川崎の鍵開け・鍵交換業者おすすめ5選" },
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
                { href: "/autolock-shimedashi-yobou/", label: "オートロックの締め出し予防" },
                { href: "/kagi-shimewasure-taisaku/", label: "鍵の閉め忘れ対策" },
                { href: "/key-box-kanri/", label: "キーボックスの管理と注意点" },
                { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口" },
                { href: "/hojo-jou/", label: "補助錠の選び方" },
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
