import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/matsubara/";
const UPDATED = "2026年11月24日";
const UPDATED_ISO = "2026-11-24";
const CHECKED = "2026年11月24日確認";

const H1 = "【2026年最新】松原市の鍵開け・鍵交換業者おすすめ3選｜大阪府警の統計で見る松原市の侵入窃盗・空き巣の件数も解説する鍵屋比較";
const DESC =
  "大阪府松原市への対応を公式サイトで2026年11月24日に確認できた鍵業者3社の料金・受付時間を比較。大阪府警察の確定値から、松原市の刑法犯が1,084件から1,211件に増える一方、侵入窃盗は32件から19件、空き巣は13件から5件に減ったことを羽曳野市・藤井寺市と並べています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/osaka/matsubara/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  policeR7: "https://www.police.pref.osaka.lg.jp/seikatsu/hanzai/23306.html",
  policeR7Xlsx: "https://www.police.pref.osaka.lg.jp/material/files/group/2/hanzaitokei09_r07.xlsx",
  policeR6: "https://www.police.pref.osaka.lg.jp/seikatsu/hanzai/17666.html",
  policeR6Pdf: "https://www.police.pref.osaka.lg.jp/material/files/group/2/r06_hanzaitokei09.pdf",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "松原市の一覧ページに42件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>大阪府松原市の鍵屋一覧</Hl>には42件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間受付（松原市ページの表示）" },
    ],
    area: "公式の「大阪府松原市」の鍵屋一覧に、42件の店舗を掲載",
    sources: [
      { label: "カギ110番「松原市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間受付", area: "松原市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>大阪府の対応エリアに松原市</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示する見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（大阪府）に松原市を掲載",
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
    catch: "簡易料金表と出張料を公式に掲載",
    intro: (
      <>
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。松原市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（松原市を名指しした案内はなし）",
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
    q: "松原市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月24日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "松原市では空き巣が増えていますか？",
    a: "大阪府警察の確定値では、松原市の空き巣は令和6年の13件から令和7年は5件に減りました。侵入窃盗の全体も32件から19件に減っています。一方で、刑法犯の総数は1,084件から1,211件に増えており、そのうち自転車盗が325件です。",
  },
  {
    q: "羽曳野市・藤井寺市と比べるとどうですか？",
    a: "令和7年の同じ表で、羽曳野市は侵入窃盗18件（うち空き巣4件）、藤井寺市は15件（同2件）でした。人口や住宅の数が異なるため、件数だけで地域の安全性を比べることはできません。",
    link: { href: "/area/sakai/", label: "堺の鍵開け・鍵交換業者おすすめ4選" },
  },
  {
    q: "賃貸住宅で鍵をなくしたときは、先に何をすればよいですか？",
    a: "賃貸住宅の鍵交換は管理会社・大家の承諾が必要なことが多いため、まず連絡してください。鍵開けだけを頼む場合も、作業前に本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["空き巣", "5件", "13件", "4件", "2件", "452件"],
  ["忍込み", "1件", "2件", "2件", "0件", "142件"],
  ["居空き", "0件", "2件", "0件", "0件", "30件"],
  ["事務所荒し", "2件", "8件", "1件", "0件", "153件"],
  ["出店荒し", "2件", "2件", "2件", "3件", "285件"],
  ["侵入窃盗の全体", "19件", "32件", "18件", "15件", "1,725件"],
  ["刑法犯（総数）", "1,211件", "1,084件", "587件", "448件", "83,896件"],
];

export default function AreaMatsubaraPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="松原市"
      pref="大阪府"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["松原市", "大阪府", "鍵開け", "鍵交換", "侵入窃盗", "業者比較"]}
      lead={[
        <>松原市で玄関の鍵をなくした、引っ越し先の鍵を替えたいといったときに、公式サイトで松原市（または全国）への対応を確認できた鍵業者は3社でした。料金表の最低額と、夜間の時間外料金・出張料を並べています。</>,
        <>3社の料金・受付時間は2026年11月24日に公式ページで確認しました。後半では、大阪府警察の犯罪統計（令和7年・令和6年の確定値）から松原市の侵入窃盗を手口別に取り出し、近隣の羽曳野市・藤井寺市、大阪府全体と比べています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="大阪府警の統計で見る松原市の侵入窃盗（令和7年・確定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            大阪府警察は、年ごとの犯罪統計（確定値）に、刑法犯の認知件数を市区町村別・手口別にまとめた表を載せています。令和7年と令和6年の表から松原市の侵入窃盗を手口別に抜き出し、近隣の羽曳野市・藤井寺市と大阪府内計（いずれも令和7年）を加えました。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">松原市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">松原市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">羽曳野市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">藤井寺市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">大阪府 令和7年</th>
                </tr>
              </thead>
              <tbody>
                {statRows.map(([k, v1, v2, v3, v4, v5], i) => (
                  <tr key={k} className={i % 2 === 1 ? "bg-[#F5F8FC]" : "bg-white"}>
                    <th className="border border-border px-3 py-2 whitespace-nowrap bg-[#EAF1F8] text-left font-bold">{k}</th>
                    <td className="border border-border px-3 py-2">{v1}</td>
                    <td className="border border-border px-3 py-2">{v2}</td>
                    <td className="border border-border px-3 py-2">{v3}</td>
                    <td className="border border-border px-3 py-2">{v4}</td>
                    <td className="border border-border px-3 py-2">{v5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-6 leading-relaxed">
            出典：<Ext href={SRC.policeR7}>大阪府警察「令和7年中の犯罪統計（確定値）」</Ext>の<Ext href={SRC.policeR7Xlsx}>「9 刑法犯罪種及び手口別発生市区町村別認知件数」</Ext>、<Ext href={SRC.policeR6}>同「令和6年中の犯罪統計（確定値）」</Ext>の<Ext href={SRC.policeR6Pdf}>同じ表</Ext>（いずれも{CHECKED}）。表の「-」は0件として扱いました。大阪府の数値は同じ表の「大阪府内計」の行です。「侵入窃盗の全体」には、表に載せていない手口（倉庫荒しなど）も含まれます。
          </p>
          <p className="leading-loose mb-4">
            松原市では、刑法犯の総数が<Hl>1,084件から1,211件</Hl>に増えた一方で、<Hl>侵入窃盗は32件から19件</Hl>に減りました。手口別では、空き巣が13件から5件、事務所荒しが8件から2件と大きく減っています。刑法犯で多いのは自転車盗で、令和7年は325件と総数の約27%を占めました。令和7年の侵入窃盗19件は、羽曳野市（18件）とほぼ同じ水準です。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            件数が減っていても、住宅をねらう空き巣・忍込みは毎年起きています。ごみ出しなどの短い外出でも玄関・窓を施錠し、何本合鍵があるか分からない古い鍵は、シリンダーの交換も選択肢になります。玄関の錠を2つにする方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>松原市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・松原市の一覧に42件を掲載）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>大阪府警察の確定値では、松原市の侵入窃盗は令和7年に19件と前年の32件から減りましたが、刑法犯の総数は1,211件に増えています。短い外出でも施錠を確かめ、鍵の紛失や不調があれば早めに交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/sakai/", label: "堺の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/yao/", label: "八尾市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/osaka/", label: "大阪の鍵開け・鍵交換業者おすすめ5選" },
        { href: "/area/habikino/", label: "羽曳野市の鍵開け・鍵交換業者おすすめ3選" },
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
