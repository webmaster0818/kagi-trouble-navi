import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/higashiyamato/";
const UPDATED = "2026年11月24日";
const UPDATED_ISO = "2026-11-24";
const CHECKED = "2026年11月24日確認";

const H1 = "【2026年最新】東大和市の鍵開け・鍵交換業者おすすめ3選｜警視庁の統計で見る東大和市の侵入窃盗と自転車盗の件数も解説する鍵屋比較";
const DESC =
  "東京都東大和市への対応を公式サイトで2026年11月24日に確認できた鍵業者3社の料金・受付時間を比較。警視庁の区市町村別統計（令和7年）から、東大和市の侵入窃盗18件の手口の内訳と、刑法犯560件のうち237件を占める自転車盗を、東村山市・武蔵村山市と並べています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/tokyo/higashiyamato/",
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
    catch: "東大和市の一覧ページに56件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>東京都東大和市の鍵屋一覧</Hl>には56件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間受付（東大和市ページの表示）" },
    ],
    area: "公式の「東京都東大和市」の鍵屋一覧に、56件の店舗を掲載",
    sources: [
      { label: "カギ110番「東大和市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間受付", area: "東大和市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>東京都の対応エリアに東大和市</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示する見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（東京都）に東大和市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。東大和市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（東大和市を名指しした案内はなし）",
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
    q: "東大和市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月24日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "東大和市の侵入窃盗はどのくらい起きていますか？",
    a: "警視庁の統計では、東大和市の侵入窃盗は令和7年に18件（令和6年は14件）でした。内訳は空き巣6件、忍込み1件、事務所荒し1件、出店荒し2件などです。刑法犯の総数は560件で、前年の559件とほぼ同じでした。",
  },
  {
    q: "東村山市・武蔵村山市と比べるとどうですか？",
    a: "同じ統計の令和7年で、東村山市の侵入窃盗は27件（うち空き巣12件）、武蔵村山市は26件（空き巣0件・忍込み4件）でした。人口や住宅の数が異なるため、件数だけで地域の安全性を比べることはできません。",
    link: { href: "/area/higashimurayama/", label: "東村山市の鍵開け・鍵交換業者おすすめ3選" },
  },
  {
    q: "賃貸住宅で鍵をなくしたときは、先に何をすればよいですか？",
    a: "賃貸住宅の鍵交換は管理会社・大家の承諾が必要なことが多いため、まず連絡してください。鍵開けだけを頼む場合も、作業前に本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["空き巣", "6件", "4件", "12件", "0件", "268件"],
  ["忍込み", "1件", "3件", "2件", "4件", "59件"],
  ["居空き", "0件", "0件", "1件", "0件", "15件"],
  ["侵入窃盗の全体", "18件", "14件", "27件", "26件", "850件"],
  ["自転車盗", "237件", "271件", "237件", "182件", "7,817件"],
  ["刑法犯（総数）", "560件", "559件", "751件", "503件", "24,729件"],
];

export default function AreaHigashiyamatoPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="東大和市"
      pref="東京都"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["東大和市", "東京都", "鍵開け", "鍵交換", "自転車盗", "業者比較"]}
      lead={[
        <>東大和市で家の鍵を落とした、玄関の鍵を新しくしたいといったときに、公式サイトで東大和市（または全国）への対応を確認できた鍵業者は3社でした。料金表の最低額と、夜間の時間外料金・出張料を比べています。</>,
        <>3社の料金・受付時間は2026年11月24日に公式ページで確認しました。後半では、警視庁の区市町村別の認知件数から、東大和市の侵入窃盗を手口別に取り出し、刑法犯の4割を占める自転車盗とあわせて東村山市・武蔵村山市と比べています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="警視庁の統計で見る東大和市の侵入窃盗と自転車盗（令和7年）"
      theme={
        <>
          <p className="leading-loose mb-4">
            警視庁が公表している区市町村の町丁別・手口別の認知件数（CSV）から、「東大和市計」の行を令和6年・令和7年で比べました。住宅をねらう3つの手口と侵入窃盗の全体に加え、件数の多い自転車盗も載せています。比較先は、隣接する東村山市・武蔵村山市と多摩地区・島部です。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">東大和市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">東大和市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">東村山市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">武蔵村山市 令和7年</th>
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
            出典：<Ext href={SRC.mpdList}>警視庁「区市町村の町丁別、罪種別及び手口別認知件数」</Ext>の<Ext href={SRC.mpdR7}>令和7年</Ext>・<Ext href={SRC.mpdR6}>令和6年</Ext>のCSV（いずれも{CHECKED}）。各市は「〇〇市計」、多摩地区・島部は「多摩地区・島部計」の行です。「侵入窃盗の全体」には、事務所荒し・出店荒しなど住宅以外を対象とする手口も含まれます（東大和市の令和7年は事務所荒し1件・出店荒し2件）。
          </p>
          <p className="leading-loose mb-4">
            東大和市の刑法犯は令和6年559件、令和7年560件とほぼ同じでした。侵入窃盗は<Hl>14件から18件</Hl>に増え、そのうち空き巣は4件から6件、忍込みは3件から1件です。隣の東村山市は侵入窃盗27件のうち空き巣12件、武蔵村山市は26件のうち空き巣0件・忍込み4件で、同じ程度の件数でも手口の内訳は市によって異なります。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            件数で最も多いのは<Hl>自転車盗の237件</Hl>で、刑法犯560件の4割を超えます（前年は271件）。住宅の鍵については、玄関の錠を2つにする方法を<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、鍵をなくしたときの順番を<Link href="/kagi-funshitsu/" className="text-primary underline">鍵をなくしたときの対処</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>東大和市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・東大和市の一覧に56件を掲載）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>警視庁の統計では、東大和市の侵入窃盗は令和7年に18件（前年14件）で、刑法犯560件のうち237件が自転車盗でした。住宅・自転車とも施錠を確かめ、鍵をなくしたときは早めに対処をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/higashimurayama/", label: "東村山市の鍵開け・鍵交換業者おすすめ3選" },
        { href: "/area/tachikawa/", label: "立川市の鍵開け・鍵交換業者おすすめ4選" },
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
