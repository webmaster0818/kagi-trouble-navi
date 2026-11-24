import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/warabi/";
const UPDATED = "2026年11月25日";
const UPDATED_ISO = "2026-11-25";
const CHECKED = "2026年11月25日確認";

const H1 = "【2026年最新】蕨市の鍵開け・鍵交換業者おすすめ3選｜埼玉県警の統計で見る蕨市の空き巣・自転車盗の件数も解説する鍵屋比較";
const DESC =
  "埼玉県蕨市への対応を公式サイトで2026年11月25日に確認できた鍵業者3社の料金・受付時間を比較。埼玉県警察の市町村別統計（令和7年確定値）から、蕨市の刑法犯が614件から686件に増え、自転車盗がその約35%を占めることを、戸田市・川口市と並べています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/saitama/warabi/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
  police: "https://www.police.pref.saitama.lg.jp/documents/27624/r7keihoukansityouson.pdf",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "蕨市の一覧ページに82件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>埼玉県蕨市の鍵屋一覧</Hl>には82件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間受付（蕨市ページの表示）" },
    ],
    area: "公式の「埼玉県蕨市」の鍵屋一覧に、82件の店舗を掲載",
    sources: [
      { label: "カギ110番「蕨市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間受付", area: "蕨市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>埼玉県の対応エリアに蕨市</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示する見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（埼玉県）に蕨市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。蕨市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（蕨市を名指しした案内はなし）",
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
    q: "蕨市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月25日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "蕨市では空き巣が増えていますか？",
    a: "埼玉県警察の市町村別統計（令和7年・確定値）では、蕨市の空き巣は13件で、令和6年と同じ件数でした。忍込みは1件から2件、居空きは2年とも0件で、住宅を対象とした3つの手口の合計は14件から15件です。",
  },
  {
    q: "戸田市・川口市と比べるとどうですか？",
    a: "同じ表の令和7年で、戸田市の空き巣・忍込み・居空きの合計は11件、川口市は82件でした。人口や住宅の数が異なるため、件数だけで地域の安全性を比べることはできません。",
    link: { href: "/area/toda/", label: "戸田市の鍵開け・鍵交換業者おすすめ3選" },
  },
  {
    q: "賃貸住宅で鍵をなくしたときは、先に何をすればよいですか？",
    a: "賃貸住宅の鍵交換は管理会社・大家の承諾が必要なことが多いため、まず連絡してください。鍵開けだけを頼む場合も、作業前に本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["空き巣", "13件", "13件", "7件", "46件", "1,063件"],
  ["忍込み", "2件", "1件", "3件", "36件", "652件"],
  ["居空き", "0件", "0件", "1件", "0件", "35件"],
  ["3つの合計", "15件", "14件", "11件", "82件", "1,750件"],
  ["自転車盗", "242件", "226件", "343件", "1,348件", "13,586件"],
  ["刑法犯（総数）", "686件", "614件", "1,143件", "4,417件", "53,471件"],
];

export default function AreaWarabiPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="蕨市"
      pref="埼玉県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["蕨市", "埼玉県", "鍵開け", "鍵交換", "自転車盗", "業者比較"]}
      lead={[
        <>蕨市で家の鍵をなくした、マンションや戸建ての玄関の鍵を替えたいといったときに、公式サイトで蕨市（または全国）への対応を確認できた鍵業者は3社でした。料金表の最低額と、夜間の時間外料金・出張料を比べています。</>,
        <>3社の料金・受付時間は2026年11月25日に公式ページで確認しました。後半では、埼玉県警察が公表している市町村別の刑法犯認知件数（令和7年・確定値）から、蕨市の空き巣・忍込みと自転車盗の件数を、隣接する戸田市・川口市、埼玉県全体と比べています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="埼玉県警の統計で見る蕨市の空き巣・自転車盗（令和7年・確定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            埼玉県警察は、刑法犯の認知件数を市町村別・手口別にまとめ、令和7年と令和6年の値を並べた表を公開しています。この表から、住宅を対象とした侵入窃盗（空き巣・忍込み・居空き）と自転車盗、刑法犯の総数を、蕨市と隣接する戸田市・川口市、埼玉県全体について抜き出しました。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">蕨市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">蕨市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">戸田市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">川口市 令和7年</th>
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
            蕨市の刑法犯の総数は、令和6年の614件から令和7年は<Hl>686件と72件増えました</Hl>。このうち自転車盗は226件から242件で、<Hl>総数の約35%（当サイト算出）</Hl>を占めます。埼玉県全体の自転車盗の割合（約25%）より高い水準です。住宅を対象とした3つの手口は14件から15件とほぼ横ばいで、空き巣は2年とも13件でした。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            住宅では、短い外出の間も玄関・窓の施錠を確かめることが基本です。自転車は駅前の駐輪場や自宅の敷地内でも鍵をかけ、錠が傷んだら交換してください。自転車の錠については<Link href="/jitensha-kagi/" className="text-primary underline">自転車の鍵をなくした・開かないときの対処法</Link>に、玄関の錠を2つにする方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>蕨市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・蕨市の一覧に82件を掲載）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>埼玉県警察の令和7年確定値では、蕨市の刑法犯は614件から686件に増え、自転車盗が約35%を占めました。空き巣は2年とも13件です。玄関や窓、自転車の施錠を見直し、鍵の紛失や不調があれば早めに交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/toda/", label: "戸田市の鍵開け・鍵交換業者おすすめ3選" },
        { href: "/area/kawaguchi/", label: "川口市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/saitama/", label: "さいたま・埼玉の鍵開け・鍵交換業者おすすめ4選" },
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
