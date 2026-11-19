import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/shiga/";
const UPDATED = "2026年11月20日";
const UPDATED_ISO = "2026-11-20";
const CHECKED = "2026年11月20日確認";

const H1 = "【2026年最新】滋賀県の鍵開け・鍵交換業者おすすめ3選｜各社の滋賀県内の対応市町と、県警の統計で見る市町別の侵入盗・無施錠率も解説する鍵屋比較";
const DESC =
  "滋賀県への対応を公式サイトで2026年11月20日に確認できた鍵業者3社を、県内のどの市町に対応しているかとあわせて比較。滋賀県警察の令和7年の統計から、住宅侵入窃盗155件のうち61.3%が無施錠だったことと、市町別の侵入盗の件数もまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/shiga/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
  police: "https://www.pref.shiga.lg.jp/cd00/23893.html",
  policeR7: "https://www.pref.shiga.lg.jp/documents/23893/5592613_1.pdf",
  nippo: "https://www.pref.shiga.lg.jp/police/pa11/15733.html",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "県内13市と3郡を対応エリアに掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>滋賀県の鍵屋一覧</Hl>では、滋賀県内の対応エリアとして<Hl>大津市・彦根市・長浜市・近江八幡市・草津市・守山市・栗東市・甲賀市・野洲市・湖南市・高島市・東近江市・米原市の13市と、愛知郡・蒲生郡・犬上郡</Hl>を掲載しています。公式料金表では、自宅の<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間365日受付（滋賀県ページの表示）" },
    ],
    area: "公式の「滋賀県の鍵屋一覧」に、県内13市と愛知郡・蒲生郡・犬上郡を対応エリアとして掲載",
    sources: [
      { label: "カギ110番「滋賀県の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間365日", area: "県内13市＋3郡" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>滋賀県の対応エリアとして大津市・草津市・守山市・栗東市・野洲市・蒲生郡竜王町の6市町</Hl>が掲載されています。公式の料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>がかかり、最終価格は作業前に提示する見積書の価格としています。彦根市・長浜市・甲賀市など、一覧にない市町からの依頼は、対応できるかを電話で確認してください。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（滋賀県）に大津市・草津市・守山市・栗東市・野洲市・竜王町の6市町を掲載",
    sources: [
      { label: "生活救急車「対応エリア」", href: SRC.seikatsuArea },
      { label: "生活救急車「料金案内」", href: SRC.seikatsuPrice },
    ],
    checked: CHECKED,
    compare: { price: "8,800円〜（標準価格）", reception: "20:00〜7:59は時間外料金", area: "県南部の6市町" },
  },
  {
    id: "kagi-rescue",
    slug: "kagi-rescue",
    name: "鍵のレスキュー",
    catch: "簡易料金表と出張料を公式に掲載",
    intro: (
      <>
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表で<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記で<Hl>出張料4,400〜8,800円（税込）</Hl>を掲載しており、出張料は出張先の地域により異なるとしています。滋賀県を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（滋賀県を名指しした案内はなし）",
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
    q: "滋賀県で鍵開けを頼むと、いくらかかりますか？",
    a: "各社の公式掲載（2026年11月20日確認）では、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格・20:00〜7:59は時間外料金8,800円）、鍵のレスキューが6,600円〜（税込、別に出張料4,400〜8,800円）です。いずれも最低額で、鍵の種類・時間帯・出張距離で総額が変わるため、作業前に総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "彦根市・長浜市・高島市など県北部・西部でも頼めますか？",
    a: "2026年11月20日に各社の公式掲載を確認したところ、カギ110番は彦根市・長浜市・高島市・米原市を含む13市と3郡を滋賀県内の対応エリアに掲載しています。鍵の生活救急車の対応エリア一覧に載っている滋賀県の市町は大津市・草津市・守山市・栗東市・野洲市・竜王町の6市町です。鍵のレスキューは全国出張可能としていますが、出張料は地域により4,400〜8,800円（税込）で異なります。",
  },
  {
    q: "滋賀県の空き巣などは、鍵をかけていない家が多いのですか？",
    a: "滋賀県警察の犯罪発生日報によると、令和7年中の住宅侵入窃盗（空き巣・忍込み・居空き）は155件で、その無施錠率は61.3%でした。被害に遭った住宅の6割以上で、侵入された場所が施錠されていなかったことになります。",
  },
  {
    q: "滋賀県で侵入盗が多い市町はどこですか？",
    a: "滋賀県警察の市町別の刑法犯認知件数（令和7年・確定値）では、侵入盗（事務所荒しなどを含む）が多かったのは大津市77件、彦根市48件、東近江市46件、長浜市41件、甲賀市38件の順でした。県全体は396件で、前年の471件から75件減っています。",
  },
];

const statRows: [string, string, string, string][] = [
  ["大津市", "77件", "66件", "+11件"],
  ["彦根市", "48件", "75件", "−27件"],
  ["東近江市", "46件", "56件", "−10件"],
  ["長浜市", "41件", "36件", "+5件"],
  ["甲賀市", "38件", "35件", "+3件"],
  ["草津市", "19件", "35件", "−16件"],
  ["守山市", "16件", "32件", "−16件"],
  ["近江八幡市", "16件", "23件", "−7件"],
  ["栗東市", "15件", "10件", "+5件"],
  ["高島市", "15件", "20件", "−5件"],
  ["滋賀県 総数", "396件", "471件", "−75件"],
];

export default function AreaShigaPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="滋賀県"
      pref=""
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["滋賀県", "大津市", "彦根市", "鍵開け", "鍵交換", "空き巣", "業者比較"]}
      lead={[
        <>滋賀県で鍵のトラブルが起きたときに頼める業者は、県内のどの市町まで対応しているかが業者ごとに異なります。大津市や草津市など県南部は複数の業者が対応エリアに掲載している一方、彦根市・長浜市・高島市など北部・西部は、掲載している業者が限られます。</>,
        <>本記事では、2026年11月20日に公式サイトで滋賀県（または全国）への対応を確認できた鍵業者3社を、公式に掲載された料金・受付時間と、各社が掲載している県内の対応市町とあわせて比較しました。あわせて、滋賀県警察の統計から、市町別の侵入盗の件数と、住宅侵入窃盗の無施錠率を整理しています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="滋賀県警の統計で見る市町別の侵入盗と無施錠率（令和7年）"
      theme={
        <>
          <p className="leading-loose mb-4">
            滋賀県警察の犯罪発生日報によると、令和7年中の滋賀県の<Hl>住宅侵入窃盗（空き巣・忍込み・居空き）は155件で、その無施錠率は61.3%</Hl>でした（<Ext href={SRC.nippo}>滋賀県警察「犯罪発生日報」</Ext>、{CHECKED}）。一方、県が公表している市町別の刑法犯認知件数では、侵入盗（住宅のほか事務所荒し・出店荒しなどを含む）を市町ごとに見ることができます。令和7年の件数が多い10市町と県全体は次のとおりです。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">市町</th>
                  <th className="border border-border px-3 py-2 text-left">侵入盗 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">侵入盗 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">増減</th>
                </tr>
              </thead>
              <tbody>
                {statRows.map(([k, a, b, c], i) => (
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
            出典：<Ext href={SRC.police}>滋賀県「滋賀の犯罪統計データ」</Ext>の<Ext href={SRC.policeR7}>市町別の刑法犯認知件数（令和7年12月末・確定値）</Ext>（{CHECKED}）。侵入盗は表の「侵入盗」列で、住宅以外（事務所荒し・出店荒しなど）を含みます。並べ替えと増減の計算は当サイトによるものです。
          </p>
          <p className="leading-loose mb-4">
            侵入盗が最も多いのは<Hl>大津市の77件</Hl>で、前年の66件から増えました。彦根市は75件から48件、草津市・守山市はいずれも半分程度に減っています。県全体の侵入盗は471件から396件へ減った一方、刑法犯全体は8,147件から8,667件へ増えており、侵入盗以外の犯罪が増えた形です。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            無施錠率61.3%という数字は、住宅侵入窃盗の多くが鍵のかかっていない窓や玄関から起きていることを示しています。外出時・就寝時の施錠を習慣にしたうえで、玄関に補助錠を加える方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口と対策は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。大津市・草津市の業者は<Link href="/area/otsu/" className="text-primary underline">大津のページ</Link>・<Link href="/area/kusatsu/" className="text-primary underline">草津市のページ</Link>でも比較しています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>滋賀県への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・県内13市と3郡を掲載）、鍵の生活救急車（鍵開け8,800円〜・大津市など県南部の6市町を掲載）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円・全国出張）の3社でした。県北部・西部では、依頼前に対応できるかを確認してください。</>,
        <>滋賀県警察によると、令和7年の住宅侵入窃盗155件の無施錠率は61.3%でした。外出時・就寝時の施錠を基本に、必要に応じて鍵交換や補助錠の設置をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/otsu/", label: "大津の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/kusatsu/", label: "草津市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/kyoto/", label: "京都の鍵開け・鍵交換業者おすすめ5選" },
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
