import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/hamura/";
const UPDATED = "2026年11月25日";
const UPDATED_ISO = "2026-11-25";
const CHECKED = "2026年11月25日確認";

const H1 = "【2026年最新】羽村市の鍵開け・鍵交換業者おすすめ3選｜警視庁の町丁別統計で見る羽村市の侵入窃盗の件数も解説する鍵屋比較";
const DESC =
  "東京都羽村市への対応を公式サイトで2026年11月25日に確認できた鍵業者3社の料金・受付時間を比較。警視庁の町丁別認知件数から、羽村市の侵入窃盗が令和6年の3件から令和7年は12件に、空き巣が0件から4件になったことを青梅市・福生市と並べています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/tokyo/hamura/",
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
    catch: "羽村市の一覧ページに50件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>東京都羽村市の鍵屋一覧</Hl>には50件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間受付（羽村市ページの表示）" },
    ],
    area: "公式の「東京都羽村市」の鍵屋一覧に、50件の店舗を掲載",
    sources: [
      { label: "カギ110番「羽村市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間受付", area: "羽村市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>東京都の対応エリアに羽村市</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示する見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（東京都）に羽村市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。羽村市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（羽村市を名指しした案内はなし）",
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
    q: "羽村市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月25日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "羽村市では侵入窃盗が増えていますか？",
    a: "警視庁の町丁別認知件数では、羽村市の侵入窃盗は令和6年の3件から令和7年は12件に増えました。空き巣は0件から4件、忍込みは0件から1件、出店荒しは0件から2件です。刑法犯の総数は392件から421件でした。",
  },
  {
    q: "侵入窃盗があったのはどの町丁ですか？",
    a: "令和7年の表では、羽・羽中2丁目・緑ヶ丘1丁目が各2件で、ほかの6町丁が各1件でした。空き巣は栄町2丁目・神明台4丁目・羽・羽中2丁目で各1件です。",
    link: { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口と対策" },
  },
  {
    q: "青梅市・福生市と比べるとどうですか？",
    a: "令和7年の同じ表で、青梅市の侵入窃盗は29件（うち空き巣7件）、福生市は25件（同9件）でした。人口や住宅の数が異なるため、件数だけで地域の安全性を比べることはできません。",
    link: { href: "/area/ome/", label: "青梅市の鍵開け・鍵交換業者おすすめ3選" },
  },
  {
    q: "賃貸住宅で鍵をなくしたときは、先に何をすればよいですか？",
    a: "賃貸住宅の鍵交換は管理会社・大家の承諾が必要なことが多いため、まず連絡してください。鍵開けだけを頼む場合も、作業前に本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["空き巣", "4件", "0件", "7件", "9件", "268件"],
  ["忍込み", "1件", "0件", "2件", "2件", "59件"],
  ["出店荒し", "2件", "0件", "3件", "8件", "103件"],
  ["その他の侵入窃盗", "5件", "3件", "13件", "5件", "332件"],
  ["侵入窃盗の全体", "12件", "3件", "29件", "25件", "850件"],
  ["自転車盗", "192件", "212件", "158件", "138件", "7,817件"],
  ["刑法犯（総数）", "421件", "392件", "658件", "449件", "24,729件"],
];

export default function AreaHamuraPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="羽村市"
      pref="東京都"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["羽村市", "東京都", "鍵開け", "鍵交換", "侵入窃盗", "業者比較"]}
      lead={[
        <>羽村市で鍵をなくして家に入れない、店舗や事務所の鍵を替えたいといったときに、公式サイトで羽村市（または全国）への対応を確認できた鍵業者は3社でした。各社の料金表の最低額と、夜間の時間外料金・出張料を並べています。</>,
        <>3社の公式料金と受付時間は2026年11月25日に確認しました。後半では、警視庁の区市町村の町丁別認知件数（令和7年・令和6年）から、羽村市の侵入窃盗を手口別に分け、隣接する青梅市・福生市と比べています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="警視庁の町丁別統計で見る羽村市の侵入窃盗（令和7年）"
      theme={
        <>
          <p className="leading-loose mb-4">
            警視庁は、刑法犯の認知件数を区市町村・町丁ごとに罪種・手口別にまとめたCSVを公表しています。令和7年・令和6年の表から羽村市の合計行を取り出し、隣接する青梅市・福生市と、多摩地区・島部の合計（令和7年）を並べました。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">羽村市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">羽村市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">青梅市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">福生市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">多摩地区・島部 令和7年</th>
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
            出典：<Ext href={SRC.mpdList}>警視庁「区市町村の町丁別、罪種別及び手口別認知件数」</Ext>の<Ext href={SRC.mpdR7}>令和7年</Ext>・<Ext href={SRC.mpdR6}>令和6年</Ext>のCSV（いずれも{CHECKED}）。各市は「〇〇市計」、多摩地区・島部は「多摩地区・島部計」の行です。「侵入窃盗の全体」には、表に載せていない手口（居空き・事務所荒し・金庫破りなど）も含まれます。
          </p>
          <p className="leading-loose mb-4">
            羽村市の侵入窃盗は<Hl>令和6年の3件から令和7年は12件</Hl>に増えました。令和6年は空き巣が0件でしたが、令和7年は<Hl>空き巣4件・忍込み1件</Hl>と、住宅をねらう被害が出ています。それでも件数は青梅市（29件）・福生市（25件）より少なく、刑法犯で最も多いのは自転車盗の192件でした。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            町丁別では、侵入窃盗が最も多かったのは<Hl>羽・羽中2丁目・緑ヶ丘1丁目の各2件</Hl>でした。被害のあった町丁は9か所に分かれており、特定の地区に集中しているわけではありません。住宅では窓や勝手口にも補助錠を付け、店舗では閉店後の出入口の施錠を確かめてください。補助錠は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、空き巣の手口は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>羽村市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・羽村市の一覧に50件を掲載）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>警視庁の統計では、羽村市の侵入窃盗は令和7年に12件と前年の3件から増え、空き巣も4件ありました。外出時は短時間でも施錠し、鍵の紛失や不調があれば交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/ome/", label: "青梅市の鍵開け・鍵交換業者おすすめ3選" },
        { href: "/area/akiruno/", label: "あきる野市の鍵開け・鍵交換業者おすすめ3選" },
        { href: "/area/tachikawa/", label: "立川市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/hachioji/", label: "八王子市の鍵開け・鍵交換業者おすすめ4選" },
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
