import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/ome/";
const UPDATED = "2026年11月22日";
const UPDATED_ISO = "2026-11-22";
const CHECKED = "2026年11月22日確認";

const H1 = "【2026年最新】青梅市の鍵開け・鍵交換業者おすすめ3選｜警視庁の統計で見る青梅市の侵入窃盗の件数も解説する鍵屋比較";
const DESC =
  "東京都青梅市への対応を公式サイトで2026年11月22日に確認できた鍵業者3社（カギ110番・鍵の生活救急車・鍵のレスキュー）の料金・受付時間を比較。警視庁の町丁別認知件数から、青梅市の侵入窃盗が68件から29件に減ったことと、件数のあった町丁を羽村市・あきる野市と比べてまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/tokyo/ome/",
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
    catch: "青梅市の一覧ページに53件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>東京都青梅市の鍵屋一覧</Hl>には53件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間365日受付（青梅市ページの表示）" },
    ],
    area: "公式の「東京都青梅市」の鍵屋一覧に、53件の店舗を掲載",
    sources: [
      { label: "カギ110番「青梅市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間365日", area: "青梅市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>東京都の対応エリアに青梅市</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示する見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（東京都）に青梅市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。青梅市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（青梅市を名指しした案内はなし）",
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
    q: "青梅市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月22日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "青梅市の空き巣は増えていますか？",
    a: "警視庁の町丁別認知件数では、青梅市の空き巣は令和6年の9件から令和7年は7件に減りました。忍込みは0件から2件に増え、居空きは2年とも0件です。侵入窃盗の全体は68件から29件に減っています。",
  },
  {
    q: "青梅市で侵入窃盗が多い地区はありますか？",
    a: "令和7年の町丁別の表では、根ヶ布2丁目が8件と最も多く、河辺町10丁目・新町8丁目が各3件でした。104の町丁のうち88町丁は0件です。",
  },
  {
    q: "山間部の地区でも、鍵業者に来てもらえますか？",
    a: "カギ110番は青梅市の一覧ページに53件の店舗を掲載し、鍵の生活救急車は東京都の対応エリアに青梅市を載せています。鍵のレスキューは公式のよくある質問で全国に出張可能と回答していますが、地区によって到着時間や出張料が変わることがあるため、依頼時に確認してください。",
    link: { href: "/kagiya-erabikata/", label: "鍵屋・鍵業者の選び方チェックリスト" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["空き巣", "7件", "9件", "4件", "0件", "268件"],
  ["忍込み", "2件", "0件", "1件", "1件", "59件"],
  ["居空き", "0件", "0件", "0件", "1件", "15件"],
  ["侵入窃盗の全体", "29件", "68件", "12件", "15件", "850件"],
  ["刑法犯（総数）", "658件", "771件", "421件", "448件", "24,729件"],
];

export default function AreaOmePage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="青梅市"
      pref="東京都"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["青梅市", "東京都", "鍵開け", "鍵交換", "侵入窃盗", "業者比較"]}
      lead={[
        <>東京都青梅市は市域が広く、山あいの地区もあります。鍵のトラブルで出張を頼む前に、公式サイトで青梅市（または全国）への対応を確認できた鍵業者3社の料金と受付時間を比べておくと、夜間や休日でも判断しやすくなります。</>,
        <>各社の情報は2026年11月22日に公式ページで確認しました。後半では、警視庁が公表している町丁別・手口別の認知件数（令和7年・令和6年）から青梅市の侵入窃盗を取り出し、隣接する羽村市・あきる野市、多摩地区・島部の合計と並べています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="警視庁の統計で見る青梅市の侵入窃盗（令和7年）"
      theme={
        <>
          <p className="leading-loose mb-4">
            警視庁は、区市町村の町丁ごとに罪種・手口別の認知件数をCSVで公表しています。令和7年と令和6年のファイルから青梅市の行を取り出し、住宅をねらう空き巣・忍込み・居空きと侵入窃盗の全体を、羽村市・あきる野市・多摩地区・島部（令和7年）と並べました。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">青梅市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">青梅市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">羽村市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">あきる野市 令和7年</th>
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
            出典：<Ext href={SRC.mpdList}>警視庁「区市町村の町丁別、罪種別及び手口別認知件数」</Ext>の<Ext href={SRC.mpdR7}>令和7年</Ext>・<Ext href={SRC.mpdR6}>令和6年</Ext>のCSV（いずれも{CHECKED}）。各市は「〇〇市計」、多摩地区・島部は「多摩地区・島部計」の行です。「侵入窃盗の全体」には、事務所荒し・出店荒し・金庫破りなど住宅以外を対象とする手口も含まれます。
          </p>
          <p className="leading-loose mb-4">
            青梅市の侵入窃盗は<Hl>令和6年の68件から令和7年は29件</Hl>と、半分以下になりました。減った分のほとんどは表で「その他」に分類される侵入窃盗（55件→13件）で、住宅をねらう空き巣・忍込み・居空きの合計は9件から9件と変わっていません（空き巣9件→7件、忍込み0件→2件）。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            町丁別に見ると、令和7年は104の町丁のうち88町丁で侵入窃盗が0件でした。最も多かったのは<Hl>根ヶ布2丁目の8件</Hl>（うち空き巣2件・忍込み1件）で、次いで河辺町10丁目・新町8丁目が各3件です。刑法犯の総数は771件から658件に減り、自転車盗も258件から158件になりました。件数の少ない地区でも、勝手口や窓の施錠が抜けやすい戸建ては注意が必要です。窓・勝手口の対策は<Link href="/katteguchi-mado-bouhan/" className="text-primary underline">勝手口と窓の防犯</Link>に、玄関の錠を2つにする方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>青梅市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・青梅市の一覧に53件を掲載）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>警視庁の統計では、青梅市の侵入窃盗は令和7年に29件と前年の68件から大きく減りましたが、空き巣・忍込みの合計は9件で前年と同じでした。外出時は窓・勝手口も含めて施錠し、鍵の不調や紛失があれば早めに交換をご検討ください。</>,
      ]}
      nearby={[
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
