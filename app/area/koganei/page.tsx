import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/koganei/";
const UPDATED = "2026年11月22日";
const UPDATED_ISO = "2026-11-22";
const CHECKED = "2026年11月22日確認";

const H1 = "【2026年最新】小金井市の鍵開け・鍵交換業者おすすめ3選｜警視庁の町丁別統計で見る小金井市の侵入窃盗と自転車盗の件数も解説する鍵屋比較";
const DESC =
  "東京都小金井市への対応を公式サイトで2026年11月22日に確認できた鍵業者3社の料金・受付時間を比較。警視庁の町丁別統計から、小金井市の侵入窃盗は令和7年に11件と少なく、刑法犯の4割を自転車盗が占めることを、武蔵野市・府中市と並べてまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/tokyo/koganei/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
  mpdList: "https://www.keishicho.metro.tokyo.lg.jp/about_mpd/jokyo_tokei/jokyo/ninchikensu.html",
  mpdR7: "https://www.keishicho.metro.tokyo.lg.jp/about_mpd/jokyo_tokei/jokyo/ninchikensu.files/R7.csv",
  mpdR6: "https://www.keishicho.metro.tokyo.lg.jp/about_mpd/jokyo_tokei/jokyo/ninchikensu.files/R6.csv",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "小金井市の一覧ページに62件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>小金井市（武蔵小金井・新小金井・東小金井など）の鍵屋一覧</Hl>には62件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料が別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間365日受付（公式サイトの表示）" },
    ],
    area: "公式の「小金井市の鍵屋一覧」に、62件の店舗を掲載",
    sources: [
      { label: "カギ110番「小金井市（武蔵小金井・新小金井・東小金井など）の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間365日受付", area: "小金井市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>東京都の対応エリアに小金井市</Hl>が掲載されています。標準価格の料金表では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示される見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧に小金井市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されています。小金井市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（小金井市を名指しした案内はなし）",
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
    q: "小金井市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月22日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "小金井市は空き巣が多い地域ですか？",
    a: "警視庁の町丁別認知件数では、小金井市の空き巣は令和7年に2件、令和6年に3件でした。侵入窃盗の全体も11件で、隣の武蔵野市（26件）・府中市（32件）より少なくなっています。",
  },
  {
    q: "小金井市で多い犯罪は何ですか？",
    a: "令和7年の刑法犯600件のうち、自転車盗が250件と約4割を占めています。前年の350件からは減りましたが、市内で最も多い犯罪です。自転車には鍵をかけ、2つ目の鍵を付けることも対策になります。",
  },
  {
    q: "鍵をなくしたら、鍵交換までしたほうがよいですか？",
    a: "住所が分かるものと一緒に落とした場合や、自宅の近くで落とした場合は、拾った人に使われるおそれがあるため、シリンダーの交換を検討してください。賃貸住宅では、交換の前に管理会社・大家へ連絡します。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["空き巣", "2件", "3件", "17件", "8件", "268件"],
  ["忍込み", "2件", "0件", "0件", "0件", "59件"],
  ["居空き", "0件", "0件", "0件", "1件", "15件"],
  ["侵入窃盗の全体", "11件", "8件", "26件", "32件", "850件"],
  ["自転車盗", "250件", "350件", "486件", "400件", "7,817件"],
  ["刑法犯（総数）", "600件", "709件", "1,353件", "1,222件", "24,729件"],
];

export default function AreaKoganeiPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="小金井市"
      pref="東京都"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["小金井市", "東京都", "鍵開け", "鍵交換", "自転車盗", "業者比較"]}
      lead={[
        <>小金井市で玄関の鍵や自転車の鍵をなくしたときに、公式サイトで小金井市（または全国）への対応を確かめられた鍵業者は3社でした。どの業者も料金は「〜円から」の表示のため、出張料や時間外料金を含めた総額で比べる必要があります。</>,
        <>この記事では、3社の公式料金と受付時間を2026年11月22日に確認して比較しました。後半では、警視庁の区市町村の町丁別認知件数から、小金井市の侵入窃盗と、市内の刑法犯で最も多い自転車盗の件数を、隣の武蔵野市・府中市と並べています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="警視庁の町丁別統計で見る小金井市の侵入窃盗と自転車盗（令和7年）"
      theme={
        <>
          <p className="leading-loose mb-4">
            警視庁の「区市町村の町丁別、罪種別及び手口別認知件数」から、小金井市の令和7年・令和6年の合計行と、武蔵野市・府中市・多摩地区・島部の令和7年を取り出しました。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">小金井市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">小金井市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">武蔵野市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">府中市 令和7年</th>
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
            小金井市の侵入窃盗は<Hl>令和7年が11件</Hl>（令和6年8件）で、隣の武蔵野市（26件）・府中市（32件）より少ない水準です。住宅をねらう手口は空き巣2件・忍込み2件の計4件でした。刑法犯の総数は709件から600件に減り、そのうち<Hl>自転車盗が250件と全体の約4割</Hl>を占めます（前年は350件）。小金井市では、住宅の侵入よりも自転車の盗難のほうが件数の多い犯罪です。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            町丁別では、侵入窃盗が最も多かったのは緑町3丁目と本町6丁目の各2件で、45の町丁のうち36町丁は0件でした。件数が少ない年でも、外出時に玄関や窓の施錠を確かめることが基本です。賃貸住宅でできる対策は<Link href="/chintai-bouhan/" className="text-primary underline">賃貸の防犯対策</Link>に、侵入の手口は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>小金井市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・小金井市の一覧に62件）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>警視庁の統計では、小金井市の侵入窃盗は令和7年に11件と近隣市より少なく、刑法犯の約4割は自転車盗でした。外出時の施錠に加え、鍵の紛失や不調があれば交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/musashino/", label: "武蔵野市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/fuchu/", label: "府中市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/mitaka/", label: "三鷹市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/kodaira/", label: "小平市の鍵開け・鍵交換業者おすすめ3選" },
      ]}
      related={[
        { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口と対策" },
        { href: "/hojo-jou/", label: "補助錠の選び方" },
        { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
        { href: "/kagiya-erabikata/", label: "鍵屋・鍵業者の選び方チェックリスト" },
      ]}
    />
  );
}
