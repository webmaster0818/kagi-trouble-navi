import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/kunitachi/";
const UPDATED = "2026年11月21日";
const UPDATED_ISO = "2026-11-21";
const CHECKED = "2026年11月21日確認";

const H1 = "【2026年最新】国立市の鍵開け・鍵交換業者おすすめ3選｜警視庁の町丁別統計で見る国立市の侵入窃盗の件数も解説する鍵屋比較";
const DESC =
  "東京都国立市への対応を公式サイトで2026年11月21日に確認できた鍵業者3社（カギ110番・鍵の生活救急車・鍵のレスキュー）の料金・受付時間を比較。警視庁の区市町村の町丁別統計から、国立市の侵入窃盗が令和6年の13件から令和7年は19件に増えたことを、国分寺市・立川市・多摩地区と並べてまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/tokyo/kunitachi/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  mpdList: "https://www.keishicho.metro.tokyo.lg.jp/about_mpd/jokyo_tokei/jokyo/ninchikensu.html",
  mpdR7: "https://www.keishicho.metro.tokyo.lg.jp/about_mpd/jokyo_tokei/jokyo/ninchikensu.files/R7.csv",
  mpdR6: "https://www.keishicho.metro.tokyo.lg.jp/about_mpd/jokyo_tokei/jokyo/ninchikensu.files/R6.csv",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "国立市の一覧ページに58件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>国立市（矢川・谷保など）の鍵屋一覧</Hl>には58件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料が別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間受付（国立市ページの表示）" },
    ],
    area: "公式の「国立市の鍵屋一覧」に、58件の店舗を掲載",
    sources: [
      { label: "カギ110番「国立市（矢川・谷保など）の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間受付", area: "国立市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>東京都の対応エリアに国立市</Hl>が掲載されています。標準価格の料金表では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示される見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（東京都）に国立市を掲載",
    sources: [
      { label: "生活救急車「対応エリア」", href: SRC.seikatsuArea },
      { label: "生活救急車「料金案内」", href: SRC.seikatsuPrice },
    ],
    checked: CHECKED,
    compare: { price: "8,800円〜（標準価格）", reception: "20:00〜7:59は時間外料金", area: "対応エリア一覧に掲載" },
  },
  {
    id: "kagi-rescue",
    slug: "kagi-rescue",
    name: "鍵のレスキュー",
    catch: "全国統一の簡易料金表と出張料を公式に掲載",
    intro: (
      <>
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されています。国立市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（国立市を名指しした案内はなし）",
    sources: [
      { label: "鍵のレスキュー よくある質問「出張できないエリアはありますか？」", href: SRC.rescueFaq },
      { label: "簡易料金表", href: SRC.rescuePrice },
      { label: "特定商取引法上の表記", href: SRC.rescueTokusho },
    ],
    checked: CHECKED,
    compare: { price: "6,600円〜（税込）＋出張料", reception: "24時間365日", area: "全国出張（公式FAQ）" },
  },
];

const faqs: CityFaq[] = [
  {
    q: "国立市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月21日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "国立市では空き巣などの侵入窃盗が増えていますか？",
    a: "警視庁の区市町村の町丁別認知件数では、国立市の侵入窃盗は令和6年の13件から令和7年は19件に増えました。内訳は空き巣3件（前年2件）、忍込み1件（前年1件）、居空き2件（前年0件）などです。件数は多くないため、1年ごとの増減は大きく出やすい点にご注意ください。",
  },
  {
    q: "市内で侵入窃盗が多い町丁はありますか？",
    a: "令和7年の町丁別の表では、国立市内で侵入窃盗が最も多かったのは中1丁目の3件で、谷保・西2丁目・泉2丁目・東4丁目が各2件でした。特定の地区に集中しているわけではなく、市内の各地で起きています。",
    link: { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口と対策" },
  },
  {
    q: "賃貸マンションで鍵を交換したい場合はどうすればよいですか？",
    a: "賃貸住宅の鍵は貸主の所有物のため、交換の前に管理会社・大家の承諾を取ってください。費用の負担や鍵の引き渡し方法も、あわせて確認しておくと安心です。",
    link: { href: "/chintai-bouhan/", label: "賃貸住宅の防犯対策" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["空き巣", "3件", "2件", "9件", "9件", "268件"],
  ["忍込み", "1件", "1件", "4件", "1件", "59件"],
  ["居空き", "2件", "0件", "3件", "0件", "15件"],
  ["侵入窃盗の全体", "19件", "13件", "25件", "33件", "850件"],
  ["刑法犯（総数）", "431件", "361件", "649件", "1,690件", "24,729件"],
];

export default function AreaKunitachiPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="国立市"
      pref="東京都"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["国立市", "東京都", "鍵開け", "鍵交換", "侵入窃盗", "業者比較"]}
      lead={[
        <>国立市で鍵をなくしたときや、玄関の鍵が開かなくなったときに、公式サイトで国立市（または全国）への対応を確認できた鍵業者は3社でした。夜間の時間外料金や出張料が別にかかるかどうかで、同じ作業でも総額が変わります。</>,
        <>この記事では、3社の公式料金と受付時間を2026年11月21日に確認して比較しました。後半では、警視庁が公表している区市町村の町丁別の認知件数（令和7年・令和6年）から、国立市の侵入窃盗の内訳と、件数の多い町丁を整理しています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="警視庁の町丁別統計で見る国立市の侵入窃盗（令和7年）"
      theme={
        <>
          <p className="leading-loose mb-4">
            警視庁は、刑法犯の認知件数を区市町村・町丁ごとに罪種・手口別にまとめたCSVを公表しています。令和7年・令和6年の表から国立市の合計行を取り出し、隣の国分寺市・立川市と、多摩地区・島部の合計（令和7年）を並べました。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">国立市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">国立市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">国分寺市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">立川市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">多摩地区・島部 令和7年</th>
                </tr>
              </thead>
              <tbody>
                {statRows.map(([k, a, b, c, d, e], i) => (
                  <tr key={k} className={i % 2 === 1 ? "bg-[#F5F8FC]" : "bg-white"}>
                    <th className="border border-border px-3 py-2 whitespace-nowrap bg-[#EAF1F8] text-left font-bold">{k}</th>
                    <td className="border border-border px-3 py-2">{a}</td>
                    <td className="border border-border px-3 py-2">{b}</td>
                    <td className="border border-border px-3 py-2">{c}</td>
                    <td className="border border-border px-3 py-2">{d}</td>
                    <td className="border border-border px-3 py-2">{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-6 leading-relaxed">
            出典：<Ext href={SRC.mpdList}>警視庁「区市町村の町丁別、罪種別及び手口別認知件数」</Ext>の<Ext href={SRC.mpdR7}>令和7年</Ext>・<Ext href={SRC.mpdR6}>令和6年</Ext>のCSV（いずれも{CHECKED}）。各市は「〇〇市計」、多摩地区・島部は「多摩地区・島部計」の行です。「侵入窃盗の全体」には、事務所荒し・出店荒しなど住宅以外を対象とする手口も含まれます。
          </p>
          <p className="leading-loose mb-4">
            国立市の侵入窃盗は<Hl>令和6年の13件から令和7年は19件</Hl>に増えました。住宅をねらう空き巣・忍込み・居空きは合わせて6件（前年3件）です。件数が少ないため増減の幅は大きく見えますが、多摩地区・島部の合計でも侵入窃盗は661件から850件に増えており、地域全体で増えた年でした。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            町丁別に見ると、令和7年に国立市内で侵入窃盗が最も多かったのは<Hl>中1丁目の3件</Hl>で、谷保・西2丁目・泉2丁目・東4丁目が各2件と続き、市内の広い範囲で起きています。刑法犯の総数も361件から431件に増え、このうち自転車盗が136件から174件に増えました。空き巣の手口と対策は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>に、賃貸住宅でできる対策は<Link href="/chintai-bouhan/" className="text-primary underline">賃貸の防犯対策</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>国立市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・国立市の一覧に58件）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>警視庁の統計では、国立市の侵入窃盗は令和7年に19件と前年の13件から増え、多摩地区全体でも増えています。外出時・就寝時の施錠を確かめ、鍵の紛失や不調があれば交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/tachikawa/", label: "立川市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/fuchu/", label: "府中市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/hino/", label: "日野市の鍵開け・鍵交換業者おすすめ5選" },
      ]}
      related={[
        { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口と対策" },
        { href: "/hojo-jou/", label: "補助錠の選び方" },
        { href: "/chintai-bouhan/", label: "賃貸の防犯対策" },
        { href: "/kagiya-erabikata/", label: "鍵屋・鍵業者の選び方チェックリスト" },
      ]}
    />
  );
}
