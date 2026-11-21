import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/kodaira/";
const UPDATED = "2026年11月22日";
const UPDATED_ISO = "2026-11-22";
const CHECKED = "2026年11月22日確認";

const H1 = "【2026年最新】小平市の鍵開け・鍵交換業者おすすめ3選｜警視庁の町丁別統計で見る小平市の侵入窃盗の件数も解説する鍵屋比較";
const DESC =
  "東京都小平市への対応を公式サイトで2026年11月22日に確認できた鍵業者3社の料金・受付時間を比較。警視庁の町丁別統計から、小平市の侵入窃盗が令和6年の21件から令和7年は28件に増え、住宅をねらう3手口は8件で前年と同数だったことを、東村山市・国分寺市と並べてまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/tokyo/kodaira/",
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
    catch: "小平市の一覧ページに59件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>小平市（鷹の台・一橋学園・小川など）の鍵屋一覧</Hl>には59件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料が別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間365日受付（公式サイトの表示）" },
    ],
    area: "公式の「小平市の鍵屋一覧」に、59件の店舗を掲載",
    sources: [
      { label: "カギ110番「小平市（鷹の台・一橋学園・小川など）の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間365日受付", area: "小平市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>東京都の対応エリアに小平市</Hl>が掲載されています。標準価格の料金表では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示される見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧に小平市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されています。小平市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（小平市を名指しした案内はなし）",
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
    q: "小平市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月22日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "小平市で住宅の空き巣は増えていますか？",
    a: "警視庁の町丁別認知件数では、小平市の空き巣は令和6年の3件から令和7年は6件に増えました。一方で忍込みは4件から2件に減り、住宅をねらう3手口の合計は両年とも8件です。",
  },
  {
    q: "小平市で侵入窃盗が集中している地区はありますか？",
    a: "令和7年の町丁別の表では、最も多い町丁でも2件（鈴木町1丁目・美園町3丁目・小川町2丁目・仲町・上水新町3丁目・上水南町2丁目）で、特定の地区への集中は見られませんでした。",
    link: { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口と対策" },
  },
  {
    q: "賃貸住宅で鍵を交換したい場合はどうすればよいですか？",
    a: "賃貸住宅の鍵は貸主の所有物のため、交換の前に管理会社・大家の承諾を取ってください。費用をどちらが負担するかも、作業の前に確認しておくと安心です。",
    link: { href: "/chintai-bouhan/", label: "賃貸住宅の防犯対策" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["空き巣", "6件", "3件", "12件", "9件", "268件"],
  ["忍込み", "2件", "4件", "2件", "4件", "59件"],
  ["居空き", "0件", "1件", "1件", "3件", "15件"],
  ["侵入窃盗の全体", "28件", "21件", "27件", "25件", "850件"],
  ["刑法犯（総数）", "1,040件", "1,045件", "751件", "649件", "24,729件"],
];

export default function AreaKodairaPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="小平市"
      pref="東京都"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["小平市", "東京都", "鍵開け", "鍵交換", "侵入窃盗", "業者比較"]}
      lead={[
        <>小平市で鍵のトラブルが起きたときに、公式サイトで小平市（または全国）への対応を確認できた鍵業者は3社です。料金の表示は、出張料を含むかどうかや、夜間の時間外料金の扱いが業者ごとに異なります。</>,
        <>ここでは、3社の公式料金と受付時間を2026年11月22日に確認して比較しました。後半では、警視庁の区市町村の町丁別認知件数（令和7年・令和6年）から、小平市の侵入窃盗を住宅をねらう手口とそれ以外に分けて見ています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="警視庁の町丁別統計で見る小平市の侵入窃盗（令和7年）"
      theme={
        <>
          <p className="leading-loose mb-4">
            警視庁が公表している区市町村の町丁別・手口別の認知件数（CSV）から、小平市の合計行を令和7年と令和6年について取り出し、隣の東村山市・国分寺市と多摩地区・島部の合計（令和7年）を並べました。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">小平市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">小平市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">東村山市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">国分寺市 令和7年</th>
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
            小平市の侵入窃盗は<Hl>令和6年の21件から令和7年は28件</Hl>に増えました。ただし、住宅をねらう空き巣・忍込み・居空きの合計は<Hl>令和6年・令和7年とも8件</Hl>で、内訳が空き巣3件・忍込み4件・居空き1件から、空き巣6件・忍込み2件に変わった形です。増えた7件は、出店荒し（3件→5件）など住宅以外をねらう手口でした。東村山市（27件）・国分寺市（25件）と比べても、侵入窃盗の件数は同じ程度です。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            町丁別に見ると、令和7年に侵入窃盗が2件あったのは鈴木町1丁目・美園町3丁目・小川町2丁目・仲町・上水新町3丁目・上水南町2丁目で、3件以上の町丁はありませんでした。72の町丁のうち50町丁は0件です。刑法犯の総数は1,045件から1,040件とほぼ同じで、最も多いのは自転車盗（413件）でした。玄関の錠を2つにする方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>小平市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・小平市の一覧に59件）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>警視庁の統計では、小平市の侵入窃盗は令和7年に28件と前年から増えましたが、住宅をねらう手口は8件で前年と同数でした。外出時と就寝前の施錠を確かめ、鍵の紛失や不調があれば交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/nishitokyo/", label: "西東京市の鍵開け・鍵交換業者おすすめ5選" },
        { href: "/area/tachikawa/", label: "立川市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/koganei/", label: "小金井市の鍵開け・鍵交換業者おすすめ3選" },
        { href: "/area/kunitachi/", label: "国立市の鍵開け・鍵交換業者おすすめ3選" },
      ]}
      related={[
        { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口と対策" },
        { href: "/hojo-jou/", label: "補助錠の選び方" },
        { href: "/chintai-bouhan/", label: "賃貸の防犯対策" },
        { href: "/kagiya-erabikata/", label: "鍵屋・鍵業者の選び方チェックリスト" },
      ]}
    />
  );
}
