import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/osaka-chuo/";
const UPDATED = "2026年8月19日";
const UPDATED_ISO = "2026-08-19";

export const metadata: Metadata = {
  title: {
    absolute:
      "【2026年最新】大阪市中央区の鍵開け・鍵交換業者おすすめ6選！テナント区画とシャッターの鍵管理も分かる鍵屋比較｜鍵トラブルナビ",
  },
  description:
    "大阪市中央区で鍵開け・鍵交換を頼める鍵業者6社を一次確認値で比較。大阪本社・自社施工の鍵猿（鍵開け8,800円〜税込）を含め、カギ110番（鍵開け6,600円〜）・鍵の生活救急車・JBR・鍵のレスキュー・カギの救急車の料金と受付時間、商業ビルのテナント区画とシャッターの鍵で管理会社と鍵業者のどちらへ先に連絡すべきかまで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】大阪市中央区の鍵開け・鍵交換業者おすすめ6選！テナント区画とシャッターの鍵管理も分かる鍵屋比較",
    description:
      "大阪市中央区で鍵開け・鍵交換を頼める鍵業者6社を、料金・受付時間の一次確認値で比較。テナント区画の鍵とシャッター錠のトラブルで、ビル管理会社と鍵業者のどちらに先に連絡すべきかも解説します。",
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
        で、24時間365日受付・電話一本で最短5分の手配をうたっています。全国47都道府県の加盟店ネットワークが対象のため、中央区内の依頼でも近隣の加盟店が手配される仕組みです。見積もりは無料で、出張費・作業費・部材費を含めた金額を事前に提示する明朗会計を掲げています。
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
      { k: "対応エリア", v: "全国47都道府県（大阪府対応）", note: "大阪府対応の一次確認値。中央区での詳細な対応可否・条件は依頼時に各社へ確認" },
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
    catch: "大阪本社・自社施工",
    name: "鍵猿",
    intro: (
      <>
        鍵猿（かぎざる）は、<Hl>大阪に本社を置くSLS株式会社が運営する鍵トラブル解決サービス</Hl>
        で、関西エリア（大阪・京都・兵庫・奈良・滋賀・和歌山）を中心に豊富な実績を持ちます。
        <Hl>下請けを使わない自社施工</Hl>
        （自社コールセンター＋自社スタッフによる施工体制）で、鍵開けは
        <Hl>8,800円〜（税込・玄関の鍵開けの目安）</Hl>
        。基本料・見積料・出張料はすべて0円で、作業前に合計金額を提示し追加請求しない明朗会計を掲げ、
        <Hl>1年間の無料工事保証・無償商品保証</Hl>
        があります。最短15分到着をうたい、防犯設備士も在籍しています。
      </>
    ),
    recommend: [
      "大阪・関西エリアで実績の多い業者に依頼したい人",
      "下請けではなく自社スタッフの施工にこだわる人",
      "作業後の保証（1年保証）を重視する人",
      "鍵交換と合わせて防犯面も相談したい人",
    ],
    table: [
      { k: "鍵開け料金", v: "8,800円〜（税込）", note: "玄関の鍵開けの目安。鍵交換は11,000円〜（税込）＋部品代" },
      { k: "受付時間", v: "電話受付8:00〜23:00", note: "施工は深夜・早朝も対応・365日年中無休" },
      { k: "会計方式", v: "基本料・見積料・出張料0円", note: "作業前に合計金額を提示・追加請求なし" },
      { k: "保証", v: "1年間の無料工事保証・無償商品保証" },
      { k: "対応エリア", v: "関西エリア中心（大阪府対応）", note: "大阪府対応の一次確認値。中央区での詳細な対応可否・条件は依頼時に各社へ確認" },
      { k: "運営会社", v: "SLS株式会社（大阪本社）" },
    ],
    memo:
      "公式サイトで鍵開け8,800円〜（税込）、基本料・見積料・出張料0円、1年間の無料工事保証・無償商品保証、自社スタッフ施工を確認（2026年7月7日時点）。大阪本社で関西エリア中心に実績が多い一方、電話受付は8:00〜23:00のため、深夜に新規で電話する場合は受付時間に注意が必要です。夜間などは料金が上がる場合があるため、作業前に提示される合計金額を必ず確認しましょう。",
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
              : "大阪本社・自社施工・1年保証",
}));

const steps = [
  {
    t: "① 状況と鍵の種類を整理する",
    b: "「シャッターが下りない」「区画の扉が開かない」など、対象がどの扉なのかをはっきりさせてから連絡しましょう。テナントとして入居している場合、区画の錠なのかビル側の設備なのかで窓口が変わるため、賃貸借契約書と館内のルールを手元に用意しておくと判断が早くなります。機械警備の契約がある区画では、作業前に警備会社への連絡が必要になることもあります。",
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
    b: "大阪は全国型の業者に加えて関西中心の業者（鍵猿）も選択肢に入るエリアです。営業に支障がない時間に作業できるなら、2〜3社から見積もりを取って総額・条件を比較するのがおすすめです（対応エリアは「大阪府」としての一次確認値のため、中央区での詳細条件は各社へ確認を）。複数の扉をまとめて交換する場合は、箇所数を伝えて合計額を出してもらうと比較しやすくなります。",
  },
];

const faqs: AreaFaq[] = [
  {
    q: "中央区の鍵開け料金の相場はいくらですか？",
    a: "当サイトが一次確認した各社の公式表示では、鍵開けの基本料金はカギ110番6,600円〜、鍵のレスキュー8,000円〜、鍵の生活救急車・JBR・鍵猿8,800円〜（いずれも税込）、カギの救急車は公式目安11,000〜44,000円です。ただしこれは最低価格や目安で、鍵の種類（ディンプルキー等）・時間帯・出張距離で総額は変わります。作業前に総額の見積もりを取りましょう。詳しくは鍵開け・鍵交換の料金相場ページで解説しています。",
    link: { href: "/ryokin/", label: "料金相場の詳細はこちら" },
  },
  {
    q: "店舗のシャッターの鍵が回りません。鍵屋とビル管理会社のどちらに連絡すべきですか？",
    a: "まずビル管理会社・オーナーへ連絡してください。店舗前のシャッターは多くの場合ビルの付帯設備として扱われ、指定の業者があることや、費用負担が契約上ビル側になる可能性があります。また、途中で止まる・回らないといった症状は錠そのものではなくレールの歪みやスラットの噛み込みが原因のこともあり、鍵屋の作業範囲を超える場合があります。自分で業者を呼ぶと後から費用が精算されないことがあるため、連絡の順番を守りましょう。",
    link: { href: "/kagi-mawaranai/", label: "鍵が回らないときの対処はこちら" },
  },
  {
    q: "テナント区画の鍵を紛失しました。どこまで交換が必要ですか？",
    a: "その鍵で開く扉の範囲によって決まります。区画内の扉だけが開くのか、ビルの時間外通用口など共用部の鍵も兼ねているのかを確認してください。共用部に関わる鍵であれば、テナントの判断だけで交換できず、ビル管理会社との調整が必要です。あわせて、警備会社と契約している区画では、錠を交換すると警備の設定や登録している解除キーの情報を更新しなければならない場合があるため、交換の予定が決まった段階で一報を入れておくと確実です。",
    link: { href: "/tenpo-office-kagi-kanri/", label: "店舗・オフィスの鍵管理はこちら" },
  },
  {
    q: "鍵猿は大阪市中央区で依頼できますか？",
    a: "鍵猿は大阪に本社を置くSLS株式会社が運営し、関西エリア（大阪・京都・兵庫・奈良・滋賀・和歌山）を中心に実績を持つサービスです。下請けを使わない自社施工で、鍵開けは8,800円〜（税込）、基本料・見積料・出張料は0円、1年間の無料工事保証があります。電話受付は8:00〜23:00のため、深夜に新規で連絡する場合は受付時間に注意してください。なお対応エリアは「大阪府」としての一次確認値のため、中央区での詳細な対応可否・条件は依頼時に各社へご確認ください。",
    link: { href: "/agents/kagizaru/", label: "鍵猿の詳細レビューはこちら" },
  },
  {
    q: "深夜や早朝でも中央区に来てくれますか？",
    a: "カギ110番・JBR・鍵のレスキューは24時間365日受付を掲げており、カギの救急車も多くの加盟店が24時間受付です。鍵猿は電話受付が8:00〜23:00ですが、施工は深夜・早朝も対応とされています。深夜帯は割増料金や到着時間の変動があり得るため、電話の際に深夜料金の有無と到着目安を確認してから依頼するのがおすすめです。",
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

export default function AreaOsakaChuoPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】大阪市中央区の鍵開け・鍵交換業者おすすめ6選！テナント区画とシャッターの鍵管理も分かる鍵屋比較",
    description:
      "大阪市中央区で鍵開け・鍵交換を頼める鍵業者6社を、料金・受付時間の一次確認値で比較。テナント区画の鍵とシャッター錠のトラブルで、ビル管理会社と鍵業者のどちらに先に連絡すべきかも解説します。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-08-19T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "大阪の鍵開け・鍵交換業者おすすめ6選", item: `${SITE}/area/osaka/` },
      { "@type": "ListItem", position: 3, name: "大阪市中央区の鍵開け・鍵交換業者おすすめ6選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#top5",
      label: "1｜大阪市中央区で人気のおすすめ・優良の鍵業者6選",
      sub: [
        { href: "#hikaku", label: "大阪市中央区の鍵業者を一覧表で徹底比較" },
        ...agents.map((a) => ({ href: `#${a.id}`, label: `${a.num}｜【${a.catch}】${a.name}` })),
      ],
    },
    { href: "#isogi", label: "2｜とにかく急いで開けてほしいなら" },
    { href: "#shinya", label: "3｜深夜・早朝のトラブルなら" },
    { href: "#meikaku", label: "4｜料金を事前に明確にしたいなら" },
    { href: "#jisha", label: "5｜自社スタッフ対応にこだわるなら" },
    { href: "#tips", label: "6｜中央区で鍵業者を呼ぶ前に確認したいこと（テナント区画とシャッターの鍵）" },
    { href: "#erabikata", label: "7｜失敗しない鍵業者の選び方" },
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
                <Link href="/area/osaka/" className="hover:underline">大阪</Link>
              </li>
              <li>/</li>
              <li className="text-foreground">大阪市中央区の鍵開け・鍵交換業者おすすめ6選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-foreground">
              【2026年最新】大阪市中央区の鍵開け・鍵交換業者おすすめ6選！テナント区画とシャッターの鍵管理も分かる鍵屋比較
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
              {["大阪市中央区", "心斎橋・難波", "店舗の鍵", "シャッター", "業者比較"].map((t) => (
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
                alt="大阪市中央区の鍵開け・鍵交換業者の比較"
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
              「閉店作業でシャッターの鍵が回らない」「時間外通用口のカードが反応しない」——心斎橋から難波にかけて商業施設と飲食店が集まる大阪市中央区では、住まいの鍵とは性格の違うトラブルが日々起きています。商業ビルに入るテナントの鍵は、区画そのものの錠と、ビルの共用設備に属する錠が混ざっており、どちらの話なのかで連絡先も費用の負担者も変わります。
            </p>
            <p>
              本記事では、中央区内から依頼できる主要な鍵業者6社を、当サイト編集部が各社公式サイト等で一次確認した料金・受付時間・運営会社の情報だけで比較しました。大阪府内の他エリアと同じく、全国型5社に加えて大阪に本社を置く鍵猿を含めた6社構成です。あわせて、テナント区画とシャッターまわりの鍵で、ビル管理会社と鍵業者のどちらに先に連絡すべきかを整理しています。ぜひ鍵業者選びの参考にしてください。
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
          <H2 id="top5" num="1">大阪市中央区で人気のおすすめ・優良の鍵業者6選</H2>
          <p className="leading-loose mb-2">
            大阪市中央区内から依頼できる主要な鍵業者6社を紹介します。掲載している料金・受付時間・運営会社は、いずれも編集部が各社公式サイト等で一次確認した値です（確認日は各社の欄に記載）。各社の対応エリアは「大阪府」としての一次確認値のため、中央区での詳細な対応可否・条件は依頼時に各社へご確認ください。実際の総額は鍵の種類・時間帯・出張距離で変わるため、必ず作業前に見積もりで確認してください。
          </p>
          <p className="text-sm text-text-muted mb-8">
            ※<Link href="/area/osaka/" className="text-primary underline">大阪全体の情報はこちら</Link>（大阪版では同じ一次確認値で6社を比較しています）。
          </p>

          <h3 id="hikaku" className="scroll-mt-20 relative pb-3 mb-5 border-b-4 border-[#EAF1F8] text-base md:text-[22px] font-bold text-foreground">
            大阪市中央区の鍵業者を一覧表で徹底比較
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
          <H2 id="isogi" num="2">中央区の鍵業者をとにかく急いで開けてほしいなら</H2>
          <p className="leading-loose mb-4">
            開店時刻が迫っている、あるいは閉店作業が終わらないという場面では、待ち時間が売上や人件費に直結します。駆けつけスピードの目安を公表している業者としては、<Hl>鍵の生活救急車が最短15分の駆けつけと全国約2,270店の拠点網</Hl>をうたっており、<Hl>大阪本社の鍵猿も最短15分到着</Hl>を掲げています。また、<Hl>カギ110番は電話一本で最短5分の手配</Hl>（全国47都道府県の加盟店ネットワークから近隣の業者を手配）をうたっています。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※いずれも「最短」の目安であり、拠点からの距離・交通状況・繁忙状況で到着時間は変わります。急ぎのときこそ、電話の際に到着目安を確認してから依頼しましょう。
          </p>

          {/* 3｜深夜 */}
          <H2 id="shinya" num="3">深夜・早朝の鍵トラブルなら</H2>
          <p className="leading-loose mb-4">
            飲食店や物販の閉店作業は深夜に及ぶことがあり、鍵の不具合もその時間帯に見つかります。一次確認値では、<Hl>カギ110番・JBR・鍵のレスキューが24時間365日受付</Hl>を掲げており、カギの救急車も多くの加盟店が24時間受付です。一方、<Hl>鍵猿の電話受付は8:00〜23:00</Hl>（施工は深夜・早朝も対応・365日）のため、深夜に新規で電話する場合は24時間受付の業者のほうが確実です。
          </p>
          <p className="leading-loose mb-4 text-sm text-text-muted">
            ※受付が24時間でも、深夜帯は割増料金や到着時間の変動があり得ます。電話時に深夜料金の有無と総額を確認してから依頼するのが安心です。
          </p>

          {/* 4｜料金明確 */}
          <H2 id="meikaku" num="4">料金を事前に明確にしたいなら</H2>
          <p className="leading-loose mb-4">
            店舗の鍵の作業は、経費として計上する以上、内訳が説明できる状態であることが求められます。料金の透明性を重視するなら、<Hl>鍵のレスキューは料金をホームページで明示し、現場での追加費用がない</Hl>と掲げています（鍵開け8,000円〜＋出張料0円〜8,800円）。<Hl>鍵猿も基本料・見積料・出張料0円で、作業前に合計金額を提示し追加請求しない方式</Hl>です。また、<Hl>鍵の生活救急車は出張・見積もり・キャンセルが無料</Hl>のため、提示された金額を見てから依頼するかどうかを判断できます。
          </p>
          <p className="leading-loose mb-4">
            どの業者に頼む場合でも、作業前に出張費・部材費・深夜割増まで含めた総額の見積もりを確認することが大前提です。相場感は<Link href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場ページ</Link>で解説しています。
          </p>

          {/* 5｜自社スタッフ */}
          <H2 id="jisha" num="5">自社スタッフ対応にこだわるなら</H2>
          <p className="leading-loose mb-4">
            鍵業者には、依頼を受けて加盟店を手配する「紹介型」と、自社のスタッフが直接対応する「自社対応型」があります。紹介型は対応範囲が広い一方、店舗によって技術・対応に差が出ることがあります。中央区で自社施工にこだわるなら、<Hl>大阪に本社を置く鍵猿が有力な選択肢</Hl>です。下請けを使わない自社施工（自社コールセンター＋自社スタッフ）で、1年間の無料工事保証・無償商品保証があり、防犯設備士も在籍しています。全国型では、<Hl>鍵のレスキューが全国約20拠点を自社社員で対応する自社対応型</Hl>で、女性スタッフの指名にも対応しています。
          </p>

          {/* 6｜区特有 */}
          <H2 id="tips" num="6">中央区で鍵業者を呼ぶ前に確認したいこと（テナントの鍵は「区画かビル設備か」の切り分けが先）</H2>
          <p className="leading-loose mb-4">
            商業ビルのテナントで鍵の不具合が起きたら、まず<Hl>「その錠は自分の区画のものか、ビルの設備か」を切り分けます</Hl>。区画内の扉やバックヤードの錠であればテナント側で手配できる範囲ですが、建物のエントランス、時間外通用口、機械警備の解除に使うカードや鍵は、ビル側が管理する共用設備です。共用設備に属する錠を勝手に触ると、契約違反や原状回復の問題になり得ます。判断に迷ったら、賃貸借契約書の「修繕の負担区分」の項目を確認するのが早道です。
          </p>
          <p className="leading-loose mb-4">
            <Hl>店舗前のシャッターは、多くの場合ビルの付帯設備として扱われます</Hl>。「シャッターが途中で止まる」「シャッター錠が回らない」といった症状は、錠そのものではなくレールの歪みやスラットの噛み込みが原因のこともあり、鍵屋の作業範囲を超える場合があります。そのため、まずビル管理会社・オーナーへ連絡して指定の業者があるかを確認するのが順当です。費用負担も、契約上ビル側になる可能性があります。自分で鍵業者を呼んでしまうと、後から費用が精算されないことがあるため、連絡の順番は守りましょう。錠が回らないときに現場で確認できることは<Link href="/kagi-mawaranai/" className="text-primary underline">鍵が回らないときの対処</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4">
            見落とされがちなのが<Hl>機械警備との関係</Hl>です。警備会社と契約している区画では、警備を解除しないまま扉を開けると警報が作動し、警備員の出動費が発生することがあります。鍵業者に作業を頼む場合も、作業の時間帯と内容を先に警備会社へ伝えておく必要があります。錠を交換したときは、警備の設定や登録している解除キーの情報を更新しなければならないこともあるため、交換の予定が決まった段階で警備会社に一報を入れておくと確実です。
          </p>
          <p className="leading-loose mb-4">
            店舗運営で最も現実的なリスクは、故障よりも<Hl>スタッフの入れ替わりにともなう鍵の所在不明</Hl>です。アルバイトを含めて誰に何本渡したかを台帳で管理し、退職時に必ず回収する運用を決めておきましょう。回収できない鍵が出たときは、その鍵で開く扉をすべて交換対象として検討することになります。閉店時の施錠箇所をチェックリスト化して、担当者が変わっても同じ手順で確認できるようにしておくと、締め忘れも減ります。管理の具体策は<Link href="/tenpo-office-kagi-kanri/" className="text-primary underline">店舗・オフィスの鍵管理</Link>と<Link href="/key-box-kanri/" className="text-primary underline">鍵の保管・キーボックス管理</Link>で解説しています。
          </p>

          {/* 7｜選び方 */}
          <H2 id="erabikata" num="7">中央区の鍵業者の失敗しない選び方</H2>
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
            大阪市中央区で鍵開け・鍵交換を頼める主要6社を、一次確認した料金・受付時間・運営会社の情報で比較しました。スピード重視なら鍵の生活救急車・鍵猿・カギ110番、深夜・早朝の新規受付ならカギ110番・JBR・鍵のレスキュー、自社施工と保証重視なら大阪本社の鍵猿、料金の明確さ重視なら鍵のレスキューや鍵猿、というように、目的によって向いている業者は変わります。
          </p>
          <p className="leading-loose mb-8">
            商業エリアが広がる中央区では、鍵のトラブルが「自分の区画の話」なのか「ビル設備の話」なのかで、連絡先も費用の負担者も変わります。シャッターや時間外通用口はビル側の管理であることが多く、勝手に業者を手配すると費用が精算されないおそれがあります。切り分けができたうえで自分の手配が必要になったら、本記事の一次確認値を出発点に、状況に合った業者を選んでください。
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
              {["大阪市中央区", "商業エリア", "テナント区画", "シャッター錠", "鍵管理", "エリア別"].map((t) => (
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
                { href: "/area/osaka-kita/", label: "大阪市北区の鍵開け・鍵交換業者おすすめ6選" },
                { href: "/area/osaka-yodogawa/", label: "大阪市淀川区の鍵開け・鍵交換業者おすすめ6選" },
                { href: "/area/osaka-hirano/", label: "大阪市平野区の鍵開け・鍵交換業者おすすめ6選" },
                { href: "/area/sakai/", label: "堺の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/kyoto/", label: "京都の鍵開け・鍵交換業者おすすめ6選" },
                { href: "/area/kobe/", label: "神戸の鍵開け・鍵交換業者おすすめ6選" },
                { href: "/area/nara/", label: "奈良の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/tokyo/", label: "東京の鍵開け・鍵交換業者おすすめ5選" },
                { href: "/area/yokohama/", label: "横浜の鍵開け・鍵交換業者おすすめ5選" },
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
                { href: "/tenpo-office-kagi-kanri/", label: "店舗・オフィスの鍵管理" },
                { href: "/key-box-kanri/", label: "鍵の保管・キーボックス管理" },
                { href: "/kagi-mawaranai/", label: "鍵が回らないときの対処" },
                { href: "/joumae-type-zukan/", label: "錠前の種類図鑑" },
                { href: "/agents/kagizaru/", label: "鍵猿の口コミ・評判レビュー" },
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
