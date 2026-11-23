import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/shiki/";
const UPDATED = "2026年11月24日";
const UPDATED_ISO = "2026-11-24";
const CHECKED = "2026年11月24日確認";

const H1 = "【2026年最新】志木市の鍵開け・鍵交換業者おすすめ3選｜埼玉県警の統計で見る志木市の空き巣・自転車盗の件数も解説する鍵屋比較";
const DESC =
  "埼玉県志木市への対応を公式サイトで2026年11月24日に確認できた鍵業者3社の料金・受付時間を比較。埼玉県警察の市町村別統計（令和7年確定値）から、志木市の住宅を対象とした侵入窃盗が6件から8件、自転車盗が116件から133件に増えたことを朝霞市・新座市と並べています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/saitama/shiki/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  police: "https://www.police.pref.saitama.lg.jp/documents/27624/r7keihoukansityouson.pdf",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "志木市の一覧ページに73件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>埼玉県志木市の鍵屋一覧</Hl>には73件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間受付（志木市ページの表示）" },
    ],
    area: "公式の「埼玉県志木市」の鍵屋一覧に、73件の店舗を掲載",
    sources: [
      { label: "カギ110番「志木市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間受付", area: "志木市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>埼玉県の対応エリアに志木市</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示する見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（埼玉県）に志木市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。志木市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（志木市を名指しした案内はなし）",
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
    q: "志木市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月24日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "志木市では空き巣が増えていますか？",
    a: "埼玉県警察の確定値では、志木市の空き巣は令和6年・令和7年とも5件でした。忍込みが1件から3件に増えたため、居空きを含む住宅対象の侵入窃盗は6件から8件になっています。件数は周辺の市より少ないものの、刑法犯の総数は392件から434件に増えました。",
  },
  {
    q: "志木市で多い犯罪は何ですか？",
    a: "同じ表で令和7年に最も多かった手口は自転車盗で、133件（前年116件）でした。刑法犯の総数434件のおよそ3割にあたります。自転車は駅前や自宅の敷地内でも施錠してください。",
    link: { href: "/jitensha-kagi/", label: "自転車の鍵をなくした・開かないときの対処法" },
  },
  {
    q: "朝霞市・新座市と比べるとどうですか？",
    a: "令和7年の同じ表で、朝霞市は空き巣8件・忍込み2件・居空き1件（刑法犯の総数969件）、新座市は空き巣16件・忍込み2件（同1,000件）でした。人口や世帯数が異なるため、件数だけで地域の安全性を比べることはできません。",
    link: { href: "/area/niiza/", label: "新座市の鍵開け・鍵交換業者おすすめ3選" },
  },
  {
    q: "賃貸住宅で鍵をなくしたときは、先に何をすればよいですか？",
    a: "賃貸住宅の鍵交換は管理会社・大家の承諾が必要なことが多いため、まず連絡してください。鍵開けだけを頼む場合も、作業前に本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["空き巣", "5件", "5件", "8件", "16件", "1,063件"],
  ["忍込み", "3件", "1件", "2件", "2件", "652件"],
  ["居空き", "0件", "0件", "1件", "0件", "35件"],
  ["3つの合計", "8件", "6件", "11件", "18件", "1,750件"],
  ["自転車盗", "133件", "116件", "316件", "299件", "13,586件"],
  ["刑法犯（総数）", "434件", "392件", "969件", "1,000件", "53,471件"],
];

export default function AreaShikiPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="志木市"
      pref="埼玉県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["志木市", "埼玉県", "鍵開け", "鍵交換", "自転車盗", "業者比較"]}
      lead={[
        <>志木市で家の鍵をなくした、玄関や勝手口の鍵を替えたいといったときに、公式サイトで志木市（または全国）への対応を確認できた鍵業者は3社でした。料金表の最低額と、夜間の時間外料金・出張料を並べています。</>,
        <>3社の料金・受付時間は2026年11月24日に公式ページで確認しました。後半では、埼玉県警察の市町村別統計（令和7年・確定値）から志木市の空き巣・忍込み・居空きと自転車盗を取り出し、隣接する朝霞市・新座市、埼玉県全体と比べています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="埼玉県警の統計で見る志木市の空き巣・自転車盗（令和7年・確定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            埼玉県警察は、刑法犯の認知件数を市町村別・手口別にまとめ、令和7年と令和6年の値を並べた表を公開しています。この表から、住宅を対象とした侵入窃盗（空き巣・忍込み・居空き）と自転車盗、刑法犯の総数を、志木市と隣接する朝霞市・新座市、埼玉県全体について抜き出しました。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">志木市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">志木市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">朝霞市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">新座市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">埼玉県 令和7年</th>
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
            出典：<Ext href={SRC.police}>埼玉県警察「刑法犯認知件数（令和7年・確定値）市町村別」</Ext>（{CHECKED}）。表の空欄は0件として扱い、「3つの合計」は当サイトが空き巣・忍込み・居空きを足して算出しました。埼玉県の数値は同じ表の「合計」行です。
          </p>
          <p className="leading-loose mb-4">
            志木市の住宅対象の侵入窃盗は<Hl>6件から8件</Hl>で、空き巣は2年とも5件、増えたのは忍込み（1件→3件）でした。件数は朝霞市・新座市より少ない一方、<Hl>自転車盗は116件から133件</Hl>に増え、刑法犯の総数434件のおよそ3割を占めています。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            住宅では、夜間の在宅中にも玄関・窓の施錠を確かめることが基本です。自転車は駅前や自宅の敷地内でも鍵をかけ、錠が傷んだら交換してください。自転車の錠については<Link href="/jitensha-kagi/" className="text-primary underline">自転車の鍵をなくした・開かないときの対処法</Link>に、玄関の錠を2つにする方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>志木市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・志木市の一覧に73件を掲載）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>埼玉県警察の確定値では、志木市の住宅対象の侵入窃盗は令和7年に8件、自転車盗は133件でした。住宅・自転車とも施錠を確かめ、鍵の紛失や不調があれば早めに交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/niiza/", label: "新座市の鍵開け・鍵交換業者おすすめ3選" },
        { href: "/area/asaka/", label: "朝霞市の鍵開け・鍵交換業者おすすめ3選" },
        { href: "/area/saitama/", label: "さいたま・埼玉の鍵開け・鍵交換業者おすすめ4選" },
      ]}
      related={[
        { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口と対策" },
        { href: "/jitensha-kagi/", label: "自転車の鍵をなくした・開かないときの対処法" },
        { href: "/hojo-jou/", label: "補助錠の選び方" },
        { href: "/kagiya-erabikata/", label: "鍵屋・鍵業者の選び方チェックリスト" },
      ]}
    />
  );
}
