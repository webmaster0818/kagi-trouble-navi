import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/hokkaido/";
const UPDATED = "2026年11月21日";
const UPDATED_ISO = "2026-11-21";
const CHECKED = "2026年11月21日確認";

const H1 = "【2026年最新】北海道の鍵開け・鍵交換業者おすすめ3選｜各社の道内の対応エリアと、道警の統計で見る侵入盗を含む重要窃盗犯の推移も解説する鍵屋比較";
const DESC =
  "北海道への対応を公式サイトで2026年11月21日に確認できた鍵業者3社を、道内のどの市区に対応しているかとあわせて比較。北海道警察の市町村別統計から、侵入盗を含む重要窃盗犯の令和3年〜令和7年の推移と主要5市の件数、令和8年1〜10月（暫定値）が前年同期の934件から608件に減ったことをまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/hokkaido/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  policeStatis: "https://www.police.pref.hokkaido.lg.jp/statis/statis.html",
  policeCity: "https://www.police.pref.hokkaido.lg.jp/statis/hanzai/shityouson-betu/r03-r07.pdf",
  policeR8: "https://www.police.pref.hokkaido.lg.jp/statis/hanzai/data_2026/00.pdf",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "札幌市10区と道内9市を対応エリアに掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの北海道のページでは、道内の対応エリアとして<Hl>札幌市（10区）と、函館市・北広島市・千歳市・小樽市・岩見沢市・恵庭市・江別市・石狩市・苫小牧市</Hl>を掲載しています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料が別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間受付（北海道ページの表示）" },
    ],
    area: "公式の北海道のページに、札幌市10区と函館市・苫小牧市など9市を対応エリアとして掲載",
    sources: [
      { label: "カギ110番「北海道の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間受付", area: "札幌市10区＋9市" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>北海道の対応エリアは札幌市の10区（中央区・北区・東区・白石区・豊平区・南区・西区・厚別区・手稲区・清田区）</Hl>で、札幌市以外の市町村は掲載されていません。標準価格の料金表では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示される見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（北海道）は札幌市の10区のみ",
    sources: [
      { label: "生活救急車「対応エリア」", href: SRC.seikatsuArea },
      { label: "生活救急車「料金案内」", href: SRC.seikatsuPrice },
    ],
    checked: CHECKED,
    compare: { price: "8,800円〜（標準価格）", reception: "20:00〜7:59は時間外料金", area: "札幌市10区のみ" },
  },
  {
    id: "kagi-rescue",
    slug: "kagi-rescue",
    name: "鍵のレスキュー",
    catch: "全国統一の簡易料金表と出張料を公式に掲載",
    intro: (
      <>
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されています。北海道を個別に扱った案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（北海道を個別に扱った案内はなし）",
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
    q: "北海道で玄関の鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月21日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額で、出張距離や時間帯で総額が変わるため、作業前に総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "旭川市や釧路市など、札幌市以外でも来てもらえますか？",
    a: "公式の掲載では、鍵の生活救急車の北海道の対応エリアは札幌市の10区のみです。カギ110番の北海道のページは、札幌市のほか函館市・苫小牧市・千歳市など9市を対応エリアとして掲載しており、旭川市・釧路市は含まれていません。鍵のレスキューは全国出張としていますが、到着までの時間や出張料は地域で変わるため、電話の際にご確認ください。",
    link: { href: "/area/asahikawa/", label: "旭川市の鍵業者比較" },
  },
  {
    q: "北海道では侵入盗が増えていますか？",
    a: "北海道警察の市町村別犯罪発生概況（確定値）では、侵入盗・自動車盗・ひったくり・すりを合わせた重要窃盗犯は、令和3年1,240件、令和5年1,131件、令和7年1,122件と、1,000件前後で増減しています。令和8年1〜10月の暫定値は608件で、前年同期の934件から326件減りました。",
  },
  {
    q: "冬に鍵穴が凍って鍵が回らないときは、業者を呼ぶべきですか？",
    a: "鍵穴の凍結は気温が上がると解消することがあります。無理に回すと鍵が折れるおそれがあるため、力をかけて回さないでください。鍵が回らない原因と、業者に頼む目安は別の記事で説明しています。",
    link: { href: "/kagi-mawaranai/", label: "鍵が回らないときの対処" },
  },
];

const trendRows: [string, string, string][] = [
  ["令和3年", "1,240件", "18,429件"],
  ["令和4年", "974件", "19,604件"],
  ["令和5年", "1,131件", "22,232件"],
  ["令和6年", "1,014件", "22,714件"],
  ["令和7年", "1,122件", "24,150件"],
];

const cityRows: [string, string, string, string][] = [
  ["札幌市", "328件", "327件", "12,209件"],
  ["旭川市", "91件", "78件", "1,270件"],
  ["函館市", "60件", "56件", "1,229件"],
  ["苫小牧市", "37件", "27件", "973件"],
  ["釧路市", "31件", "24件", "619件"],
];

export default function AreaHokkaidoPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="北海道"
      pref=""
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["北海道", "札幌市", "函館市", "苫小牧市", "鍵開け", "鍵交換", "業者比較"]}
      lead={[
        <>北海道で鍵のトラブルが起きたときに頼める業者は、道内のどの市区まで対応しているかが業者ごとに大きく異なります。札幌市は複数の業者が対応エリアに掲載している一方、旭川市・釧路市などは掲載している業者が限られます。</>,
        <>本記事では、2026年11月21日に公式サイトで北海道（または全国）への対応を確認できた鍵業者3社を、公式に掲載された料金・受付時間と、各社が掲載している道内の対応エリアとあわせて比較しました。あわせて、北海道警察の市町村別犯罪発生概況から、侵入盗を含む重要窃盗犯の5年間の推移と、主要5市の件数を整理しています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="北海道警の統計で見る重要窃盗犯の推移と主要5市の件数"
      theme={
        <>
          <p className="leading-loose mb-4">
            北海道警察は「市町村別犯罪発生概況」で、刑法犯と、侵入盗・自動車盗・ひったくり・すりをまとめた<Hl>重要窃盗犯</Hl>の認知件数を、市町村ごとに5年分まとめて公表しています。道内の合計の推移は次のとおりです。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">年</th>
                  <th className="border border-border px-3 py-2 text-left">重要窃盗犯（侵入盗など）</th>
                  <th className="border border-border px-3 py-2 text-left">刑法犯 認知件数</th>
                </tr>
              </thead>
              <tbody>
                {trendRows.map(([k, a, b], i) => (
                  <tr key={k} className={i % 2 === 1 ? "bg-[#F5F8FC]" : "bg-white"}>
                    <th className="border border-border px-3 py-2 whitespace-nowrap bg-[#EAF1F8] text-left font-bold">{k}</th>
                    <td className="border border-border px-3 py-2">{a}</td>
                    <td className="border border-border px-3 py-2">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-6 leading-relaxed">
            出典：<Ext href={SRC.policeCity}>北海道警察「市町村別犯罪発生概況（令和３年～令和７年）認知・検挙件数（確定値）」</Ext>の「合計」欄（{CHECKED}、<Ext href={SRC.policeStatis}>統計のページ</Ext>から掲載）。重要窃盗犯は侵入盗のほか自動車盗・ひったくり・すりを含みます。
          </p>
          <p className="leading-loose mb-4">
            刑法犯は<Hl>令和3年の18,429件から令和7年は24,150件</Hl>と4年続けて増えました。重要窃盗犯は令和3年の1,240件から令和4年に974件へ減ったあと、1,000件から1,100件台で増減しています。令和8年については、北海道警察「北海道の犯罪状況」の1〜10月の暫定値で<Hl>重要窃盗が608件と、前年同期の934件から326件減少</Hl>しました（<Ext href={SRC.policeR8}>北海道の犯罪状況（令和8年1月〜10月・暫定値）</Ext>、{CHECKED}）。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）です（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            同じ資料から、当サイトに個別ページのある主要5市の令和7年・令和6年の重要窃盗犯と、令和7年の刑法犯を並べると次のとおりです。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">市</th>
                  <th className="border border-border px-3 py-2 text-left">重要窃盗犯 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">重要窃盗犯 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">刑法犯 令和7年</th>
                </tr>
              </thead>
              <tbody>
                {cityRows.map(([k, a, b, c], i) => (
                  <tr key={k} className={i % 2 === 1 ? "bg-[#F5F8FC]" : "bg-white"}>
                    <th className="border border-border px-3 py-2 whitespace-nowrap bg-[#EAF1F8] text-left font-bold">{k}</th>
                    <td className="border border-border px-3 py-2">{a}</td>
                    <td className="border border-border px-3 py-2">{b}</td>
                    <td className="border border-border px-3 py-2">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-6 leading-relaxed">
            出典：<Ext href={SRC.policeCity}>北海道警察「市町村別犯罪発生概況（令和３年～令和７年）」</Ext>（{CHECKED}）。並べ替えは当サイトによるものです。人口規模が異なるため、件数だけで地域の危険度を比べることはできません。
          </p>
          <p className="leading-loose mb-4">
            令和7年は5市とも重要窃盗犯が前年より増えており、札幌市が道内の合計（1,122件）の約3割を占めています。空き巣の手口と対策は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>に、玄関の錠を2つにする方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>にまとめています。札幌市・旭川市などの業者は<Link href="/area/sapporo/" className="text-primary underline">札幌のページ</Link>・<Link href="/area/asahikawa/" className="text-primary underline">旭川市のページ</Link>でも比較しています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>北海道への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・札幌市10区と函館市・苫小牧市など9市を掲載）、鍵の生活救急車（鍵開け8,800円〜・対応エリアは札幌市10区のみ）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円・全国出張）の3社でした。</>,
        <>北海道警察によると、侵入盗を含む重要窃盗犯は令和7年に1,122件で、令和8年1〜10月は前年同期より減っています。札幌市以外では対応する業者が限られるため、依頼前に対応エリアと到着までの時間をご確認ください。</>,
      ]}
      nearby={[
        { href: "/area/sapporo/", label: "札幌の鍵交換・鍵開け業者おすすめ4選" },
        { href: "/area/asahikawa/", label: "旭川市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/hakodate/", label: "函館市の鍵開け・鍵交換業者おすすめ4選" },
      ]}
      related={[
        { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口と対策" },
        { href: "/hojo-jou/", label: "補助錠の選び方" },
        { href: "/kagi-mawaranai/", label: "鍵が回らないときの対処" },
        { href: "/kagiya-erabikata/", label: "鍵屋・鍵業者の選び方チェックリスト" },
      ]}
    />
  );
}
