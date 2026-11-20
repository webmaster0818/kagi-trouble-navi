import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/kyotanabe/";
const UPDATED = "2026年11月21日";
const UPDATED_ISO = "2026-11-21";
const CHECKED = "2026年11月21日確認";

const H1 = "【2026年最新】京田辺市の鍵開け・鍵交換業者おすすめ3選｜京都府警の統計で見る京田辺市の侵入窃盗と乗り物盗も解説する鍵屋比較";
const DESC =
  "京都府京田辺市への対応を公式サイトで2026年11月21日に確認できた鍵業者3社（カギ110番・鍵の生活救急車・鍵のレスキュー）の料金・受付時間を比較。京都府警察の市区町村別認知件数（令和7年中）から、京田辺市の侵入窃盗が22件から23件とほぼ横ばいで、窃盗犯の約半数を乗り物盗が占めることをまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/kyoto/kyotanabe/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
  police: "https://www.pref.kyoto.jp/fukei/anzen/toke/documents/28-r7-10.pdf",
  policeR6: "https://www.pref.kyoto.jp/fukei/anzen/toke/documents/10shichouson_1.pdf",
  policeList: "https://www.pref.kyoto.jp/fukei/anzen/toke/tokei.html",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "京田辺市の一覧ページに42件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>京都府京田辺市の鍵屋一覧</Hl>には42件の店舗が掲載されています。自宅の鍵について、公式料金表では<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料が別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間365日受付（京田辺市ページの表示）" },
    ],
    area: "公式の「京都府京田辺市」の鍵屋一覧に、42件の店舗を掲載",
    sources: [
      { label: "カギ110番「京田辺市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間365日", area: "京田辺市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>京都府の対応エリアに京田辺市</Hl>が含まれています。標準価格の料金表では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示される見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（京都府）に京田辺市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。京田辺市を個別に扱った案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（京田辺市を名指しした案内はなし）",
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
    q: "京田辺市で鍵開けを頼んだ場合の料金はいくらですか？",
    a: "2026年11月21日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。鍵の種類や作業する時間帯で総額は変わるため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "京田辺市では空き巣などの侵入窃盗が増えているのですか？",
    a: "京都府警察の市区町村別認知件数では、京田辺市の侵入窃盗は令和6年中が22件、令和7年中が23件で、1件の増加にとどまりました。同じ期間に京都府全体の侵入窃盗は384件から421件に増えています。",
  },
  {
    q: "八幡市・木津川市と比べるとどうですか？",
    a: "同じ表の令和7年中の侵入窃盗は、八幡市が18件、木津川市が11件で、京田辺市の23件はこの2市より多い値でした。人口規模が異なるため、件数だけで地域の危険度を比べることはできません。",
    link: { href: "/area/yawata/", label: "八幡市の鍵業者と統計" },
  },
  {
    q: "自転車の鍵をなくしたときも鍵業者に頼めますか？",
    a: "カギ110番・鍵の生活救急車・鍵のレスキューの公式料金表には、住宅のほかに車やバイクの鍵の項目もあります。自転車の鍵の対応可否と料金は業者により異なるため、依頼前に電話でご確認ください。",
    link: { href: "/jitensha-kagi-koukan/", label: "自転車の鍵の交換" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["侵入窃盗", "23件", "22件", "18件", "11件", "421件"],
  ["乗り物盗", "119件", "135件", "61件", "64件", "3,304件"],
  ["非侵入盗", "117件", "113件", "112件", "80件", "4,630件"],
  ["窃盗犯（計）", "259件", "270件", "191件", "155件", "8,355件"],
  ["刑法犯（総数）", "336件", "354件", "266件", "227件", "12,398件"],
];

export default function AreaKyotanabePage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="京田辺市"
      pref="京都府"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["京田辺市", "京都府", "鍵開け", "鍵交換", "侵入窃盗", "業者比較"]}
      lead={[
        <>京田辺市で鍵をなくした、鍵が回らないといったときに、公式サイトで京田辺市（または全国）への出張を確認できた鍵業者は3社でした。最低料金の差に加えて、夜間の時間外料金と出張料の扱いが業者によって異なります。</>,
        <>本記事では、3社の公式料金と受付時間を2026年11月21日に確認し、比較表にまとめました。後半では、京都府警察が公表している市区町村別の認知件数（令和7年中・令和6年中）から、京田辺市の侵入窃盗と乗り物盗の件数を、隣接する八幡市・木津川市、京都府全体と並べています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="京都府警の統計で見る京田辺市の侵入窃盗と乗り物盗（令和7年中）"
      theme={
        <>
          <p className="leading-loose mb-4">
            京都府警察は、刑法犯の認知件数を包括罪種別に市区町村ごとにまとめた表を毎年公表しています。窃盗犯の内訳（侵入窃盗・乗り物盗・非侵入盗）について、京田辺市の令和7年中と令和6年中の件数を、八幡市・木津川市・京都府全体の令和7年中の件数と並べると次のとおりです。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">京田辺市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">京田辺市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">八幡市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">木津川市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">京都府 令和7年</th>
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
            出典：<Ext href={SRC.police}>京都府警察「令和7年中の市区町村別認知件数（刑法犯包括罪種別）」</Ext>、<Ext href={SRC.policeR6}>同「令和6年中の市区町村別認知件数（刑法犯包括罪種別）」</Ext>（いずれも<Ext href={SRC.policeList}>京都府警察「統計資料（犯罪）」</Ext>に掲載、{CHECKED}）。京都府の数値は同じ表の「総数」行です。
          </p>
          <p className="leading-loose mb-4">
            京田辺市の侵入窃盗は<Hl>令和6年の22件に対して令和7年は23件</Hl>で、ほぼ横ばいでした。刑法犯の総数は354件から336件に減っています。京都府全体では侵入窃盗が384件から421件に増えており、府全体の増加に比べると京田辺市の件数は大きく動いていません。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            京田辺市の統計で目立つのは乗り物盗で、令和7年は119件と<Hl>窃盗犯259件の約46%</Hl>を占めました（令和6年は135件）。京都府全体では窃盗犯に占める乗り物盗の割合は約40%で、京田辺市はこれより高い値です。乗り物盗には自転車盗・オートバイ盗・自動車盗が含まれます。自転車の鍵の選び方は<Link href="/jitensha-kagi/" className="text-primary underline">自転車の鍵の選び方</Link>で、住宅の侵入対策は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口と対策</Link>で説明しています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>京田辺市への対応を公式で確認できた鍵業者は、カギ110番（鍵開け11,000円〜・京田辺市の一覧に42件）、鍵の生活救急車（鍵開け8,800円〜・夜間は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社です。</>,
        <>京都府警察の統計では、京田辺市の侵入窃盗は令和6年中22件・令和7年中23件とほぼ横ばいで、窃盗犯の約半数を乗り物盗が占めていました。住宅の施錠に加えて、自転車などの施錠も見直しておくことをおすすめします。</>,
      ]}
      nearby={[
        { href: "/area/uji/", label: "宇治市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/hirakata/", label: "枚方市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/nara/", label: "奈良の鍵開け・鍵交換業者おすすめ4選" },
      ]}
      related={[
        { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口と対策" },
        { href: "/jitensha-kagi/", label: "自転車の鍵の選び方" },
        { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
        { href: "/kagiya-erabikata/", label: "鍵屋・鍵業者の選び方チェックリスト" },
      ]}
    />
  );
}
