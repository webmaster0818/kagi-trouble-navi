import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/kazo/";
const UPDATED = "2026年11月21日";
const UPDATED_ISO = "2026-11-21";
const CHECKED = "2026年11月21日確認";

const H1 = "【2026年最新】加須市の鍵開け・鍵交換業者おすすめ3選｜埼玉県警の統計で見る加須市の空き巣・忍込みの減少も解説する鍵屋比較";
const DESC =
  "埼玉県加須市への対応を公式サイトで2026年11月21日に確認できた鍵業者3社（カギ110番・鍵の生活救急車・鍵のレスキュー）の料金・受付時間を比較。埼玉県警察の市町村別統計（令和7年・確定値）から、加須市の空き巣・忍込み・居空きの合計が47件から33件に減ったことを、久喜市・羽生市・埼玉県全体と並べてまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/saitama/kazo/",
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
    catch: "加須市のページに68件の鍵屋を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>加須市の鍵屋のページ</Hl>には68件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料が別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間受付（加須市ページの表示）" },
    ],
    area: "公式の加須市の鍵屋のページに、68件の店舗を掲載",
    sources: [
      { label: "カギ110番「加須市の近くの鍵屋さん」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間受付", area: "加須市のページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>埼玉県の対応エリアに加須市</Hl>が掲載されています。標準価格の料金表では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示される見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（埼玉県）に加須市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されています。加須市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（加須市を名指しした案内はなし）",
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
    q: "加須市で鍵開けを頼むと、料金はいくらからですか？",
    a: "2026年11月21日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。表示はいずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "加須市の空き巣は増えていますか、減っていますか？",
    a: "埼玉県警察の市町村別の刑法犯認知件数（令和7年・確定値）では、加須市の空き巣は34件から24件、忍込みは13件から8件に減りました。居空きは0件から1件です。3つの合計は47件から33件に減っています。",
  },
  {
    q: "隣の久喜市・羽生市と比べるとどうですか？",
    a: "同じ表の令和7年の3区分の合計は、久喜市が68件（前年44件）、羽生市が26件（前年31件）でした。加須市と羽生市は減り、久喜市は増えています。人口規模が異なるため、件数だけで地域の危険度を比べることはできません。",
    link: { href: "/area/kuki/", label: "久喜市の鍵業者比較" },
  },
  {
    q: "古い家の鍵を交換するとき、何を準備すればよいですか？",
    a: "扉に付いている錠のメーカー名・型番（錠ケースや鍵に刻印があることが多い）を控えておくと、見積もりが比べやすくなります。勝手口や窓の補助錠もまとめて見直す場合は、一戸建ての鍵交換の記事を参考にしてください。",
    link: { href: "/ikkodate-kagi-koukan/", label: "一戸建ての鍵交換" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["空き巣", "24件", "34件", "40件", "19件", "1,063件"],
  ["忍込み", "8件", "13件", "25件", "7件", "652件"],
  ["居空き", "1件", "0件", "3件", "0件", "35件"],
  ["3つの合計", "33件", "47件", "68件", "26件", "1,750件"],
  ["刑法犯（総数）", "717件", "707件", "1,086件", "508件", "53,471件"],
];

export default function AreaKazoPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="加須市"
      pref="埼玉県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["加須市", "埼玉県", "鍵開け", "鍵交換", "空き巣", "業者比較"]}
      lead={[
        <>加須市で家の鍵をなくした、鍵が回らなくなったという場合に、公式サイトで加須市（または全国）への対応を確認できた鍵業者は3社でした。料金表の最低額のほか、夜間の時間外料金や出張料がかかるかどうかで総額が変わります。</>,
        <>本記事では、3社の公式料金・受付時間を2026年11月21日に確認して比較しました。後半では、埼玉県警察の市町村別統計（令和7年・確定値）から加須市の空き巣・忍込み・居空きの件数を前年と比べ、隣の久喜市・羽生市、埼玉県全体と並べています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="埼玉県警の統計で見る加須市の空き巣・忍込み（令和7年・確定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            埼玉県警察は、刑法犯の認知件数を市町村ごとに令和7年・令和6年の2年分並べた表を公表しています。この表から住宅を対象とする侵入窃盗の3区分（空き巣・忍込み・居空き）を抜き出し、加須市の2年分と、久喜市・羽生市・埼玉県全体の令和7年の値を並べました。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">加須市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">加須市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">久喜市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">羽生市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">埼玉県 令和7年</th>
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
            出典：<Ext href={SRC.police}>埼玉県警察「刑法犯認知件数（令和7年・確定値）市町村別」</Ext>（{CHECKED}）。表の空欄は0件として扱い、「3つの合計」は当サイトが3項目を足して算出しました。埼玉県の数値は同じ表の「合計」行です。
          </p>
          <p className="leading-loose mb-4">
            加須市の3区分の合計は<Hl>令和6年の47件から令和7年は33件</Hl>に減りました。減少の中心は空き巣（34件→24件）です。一方、埼玉県全体では同じ3区分が1,427件から1,750件に増えており、とくに<Hl>忍込みは360件から652件</Hl>と大きく増えています。加須市の減少は県全体の動きとは逆の結果です。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            件数が減ったとはいえ、加須市でも令和7年に33件の住宅への侵入窃盗が起きています。同じ表では、刑法犯の総数は707件から717件とほぼ横ばいで、自販機ねらいが8件から18件に増えました。空き巣の手口と対策は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>に、玄関の錠を2つにする方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>加須市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・加須市のページに68件）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>埼玉県警察の確定値では、加須市の空き巣・忍込み・居空きの合計は令和7年に33件で、前年の47件から減りました。県全体では増えているため、引き続き外出時・就寝時の施錠を心がけ、鍵の不調や紛失があれば交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/kuki/", label: "久喜市の鍵開け・鍵交換業者おすすめ3選" },
        { href: "/area/kumagaya/", label: "熊谷市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/koga/", label: "古河市の鍵開け・鍵交換業者おすすめ4選" },
      ]}
      related={[
        { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口と対策" },
        { href: "/hojo-jou/", label: "補助錠の選び方" },
        { href: "/ikkodate-kagi-koukan/", label: "一戸建ての鍵交換" },
        { href: "/kagiya-erabikata/", label: "鍵屋・鍵業者の選び方チェックリスト" },
      ]}
    />
  );
}
