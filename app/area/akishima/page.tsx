import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/akishima/";
const UPDATED = "2026年11月24日";
const UPDATED_ISO = "2026-11-24";
const CHECKED = "2026年11月24日確認";

const H1 = "【2026年最新】昭島市の鍵開け・鍵交換業者おすすめ3選｜警視庁の統計で見る昭島市の空き巣・侵入窃盗の増加も解説する鍵屋比較";
const DESC =
  "東京都昭島市への対応を公式サイトで2026年11月24日に確認できた鍵業者3社の料金・受付時間を比較。警視庁の区市町村別統計から、昭島市の空き巣が令和6年の1件から令和7年は14件に、侵入窃盗の全体が7件から29件に増えたことを、立川市・福生市と並べています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/tokyo/akishima/",
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
    catch: "昭島市の一覧ページに52件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>東京都昭島市の鍵屋一覧</Hl>には52件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間受付（昭島市ページの表示）" },
    ],
    area: "公式の「東京都昭島市」の鍵屋一覧に、52件の店舗を掲載",
    sources: [
      { label: "カギ110番「昭島市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間受付", area: "昭島市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>東京都の対応エリアに昭島市</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示する見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（東京都）に昭島市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。昭島市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（昭島市を名指しした案内はなし）",
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
    q: "昭島市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月24日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "昭島市では空き巣が増えていますか？",
    a: "警視庁の統計では、昭島市の空き巣は令和6年の1件から令和7年は14件に増えました。侵入窃盗の全体も7件から29件に増えています。一方で、刑法犯の総数は948件から818件に減っています。",
  },
  {
    q: "立川市・福生市と比べるとどうですか？",
    a: "同じ統計の令和7年で、立川市の侵入窃盗は33件（うち空き巣9件）、福生市は25件（同9件）でした。昭島市は侵入窃盗の全体では立川市より少ないものの、空き巣は3市で最も多い14件です。人口や住宅の数が異なるため、件数だけで地域の安全性を比べることはできません。",
    link: { href: "/area/tachikawa/", label: "立川市の鍵開け・鍵交換業者おすすめ4選" },
  },
  {
    q: "賃貸住宅で鍵をなくしたときは、先に何をすればよいですか？",
    a: "賃貸住宅の鍵交換は管理会社・大家の承諾が必要なことが多いため、まず連絡してください。鍵開けだけを頼む場合も、作業前に本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["空き巣", "14件", "1件", "9件", "9件", "268件"],
  ["忍込み", "3件", "2件", "1件", "2件", "59件"],
  ["居空き", "1件", "3件", "0件", "0件", "15件"],
  ["出店荒し", "5件", "1件", "8件", "8件", "103件"],
  ["侵入窃盗の全体", "29件", "7件", "33件", "25件", "850件"],
  ["刑法犯（総数）", "818件", "948件", "1,690件", "449件", "24,729件"],
];

export default function AreaAkishimaPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="昭島市"
      pref="東京都"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["昭島市", "東京都", "鍵開け", "鍵交換", "空き巣", "業者比較"]}
      lead={[
        <>昭島市で玄関の鍵をなくした、鍵が回りにくくなったといったときに、公式サイトで昭島市（または全国）への対応を確認できた鍵業者は3社でした。料金表の最低額と、夜間の時間外料金・出張料の有無を並べています。</>,
        <>3社の料金・受付時間は2026年11月24日に公式ページで確認しました。後半では、警視庁が公表している区市町村別の認知件数から、昭島市の空き巣・侵入窃盗を令和6年と令和7年で比べ、隣接する立川市・福生市と多摩地区・島部の数値も加えています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="警視庁の統計で見る昭島市の空き巣・侵入窃盗（令和7年）"
      theme={
        <>
          <p className="leading-loose mb-4">
            警視庁は、区市町村の町丁別に罪種・手口ごとの認知件数をCSVで公表しています。「昭島市計」の行から、住宅をねらう空き巣・忍込み・居空きと、店舗をねらう出店荒し、侵入窃盗の全体を抜き出しました。比較のため、隣接する立川市・福生市と多摩地区・島部の令和7年を並べています。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">昭島市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">昭島市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">立川市 令和7年</th>
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
            出典：<Ext href={SRC.mpdList}>警視庁「区市町村の町丁別、罪種別及び手口別認知件数」</Ext>の<Ext href={SRC.mpdR7}>令和7年</Ext>・<Ext href={SRC.mpdR6}>令和6年</Ext>のCSV（いずれも{CHECKED}）。各市は「〇〇市計」、多摩地区・島部は「多摩地区・島部計」の行です。「侵入窃盗の全体」には、表に載せていない手口（事務所荒し・学校荒しなど）も含まれます。
          </p>
          <p className="leading-loose mb-4">
            昭島市では、刑法犯の総数が948件から818件に減った一方で、<Hl>侵入窃盗は7件から29件</Hl>に増えました。手口別では<Hl>空き巣が1件から14件</Hl>と大きく増え、住宅をねらう3つの手口（空き巣・忍込み・居空き）の合計は6件から18件です。令和7年の空き巣14件は、立川市（9件）や隣の福生市（9件）を上回っています。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            空き巣は家の人が留守の間に入る手口のため、ごみ出しや買い物などの短い外出でも玄関・窓の施錠を確かめることが基本です。鍵が古く、何本合鍵があるか分からない場合は、シリンダーの交換も選択肢になります。玄関の錠を2つにする方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>昭島市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・昭島市の一覧に52件を掲載）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>警視庁の統計では、昭島市の侵入窃盗は令和7年に29件と前年の7件から増え、空き巣も1件から14件になりました。短い外出でも施錠を確かめ、鍵の紛失や不調があれば早めに交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/tachikawa/", label: "立川市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/hachioji/", label: "八王子市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/hino/", label: "日野市の鍵開け・鍵交換業者おすすめ5選" },
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
