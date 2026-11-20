import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/mie/";
const UPDATED = "2026年11月21日";
const UPDATED_ISO = "2026-11-21";
const CHECKED = "2026年11月21日確認";

const H1 = "【2026年最新】三重県の鍵開け・鍵交換業者おすすめ3選｜各社の県内の対応市町と、県警の資料で見る侵入窃盗を含む重要窃盗犯の推移も解説する鍵屋比較";
const DESC =
  "三重県への対応を公式サイトで2026年11月21日に確認できた鍵業者3社を、県内のどの市町に対応しているかとあわせて比較。三重県警察本部の資料から、侵入窃盗を含む重要窃盗犯が令和3年の750件から令和6年は1,291件に増え、刑法犯も3年連続で増えたことをまとめています。";


export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/mie/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  policeDayori: "https://www.pref.mie.lg.jp/common/content/001198867.pdf",
  policeIinkai: "https://www.pref.mie.lg.jp/common/content/001198866.pdf",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "県内14市と7郡を対応エリアに掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>三重県の鍵屋一覧</Hl>では、県内の対応エリアとして<Hl>津市・四日市市・伊勢市・松阪市・桑名市・鈴鹿市・名張市・尾鷲市・亀山市・鳥羽市・熊野市・いなべ市・志摩市・伊賀市の14市と、桑名郡・員弁郡・三重郡・多気郡・度会郡・北牟婁郡・南牟婁郡</Hl>を掲載しています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間365日受付（三重県ページの表示）" },
    ],
    area: "公式の「三重県の鍵屋一覧」に、県内14市と7郡を対応エリアとして掲載",
    sources: [
      { label: "カギ110番「三重県の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間365日", area: "県内14市＋7郡" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>三重県の対応エリアとして津市・四日市市・伊勢市・松阪市・桑名市・鈴鹿市・名張市・亀山市・鳥羽市・いなべ市・志摩市・伊賀市の12市と、木曽岬町・東員町・菰野町・朝日町・川越町・多気町・明和町・玉城町の8町</Hl>が掲載されています（尾鷲市・熊野市と、大台町・度会町・大紀町・南伊勢町・紀北町・御浜町・紀宝町は掲載なし）。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示する見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（三重県）に12市と8町を掲載。尾鷲市・熊野市などは掲載なし",
    sources: [
      { label: "生活救急車「対応エリア」", href: SRC.seikatsuArea },
      { label: "生活救急車「料金案内」", href: SRC.seikatsuPrice },
    ],
    checked: CHECKED,
    compare: { price: "8,800円〜（標準価格）", reception: "20:00〜7:59は時間外料金", area: "12市＋8町（東紀州は掲載なし）" },
  },
  {
    id: "kagi-rescue",
    slug: "kagi-rescue",
    name: "鍵のレスキュー",
    catch: "簡易料金表と出張料を公式に掲載",
    intro: (
      <>
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。三重県を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（三重県を名指しした案内はなし）",
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
    q: "三重県で玄関の鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月21日に確認した各社の公式掲載では、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円）、鍵のレスキューが6,600円〜（税込。出張料4,400〜8,800円が別途）です。最低額の表示のため、鍵の種類・時間帯・出張距離に応じた総額を作業前に確認してください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "尾鷲市・熊野市など東紀州でも来てもらえますか？",
    a: "公式の掲載では、カギ110番は尾鷲市・熊野市と北牟婁郡・南牟婁郡を対応エリアに含めています。鍵の生活救急車の対応エリア一覧には、尾鷲市・熊野市と東紀州の町は掲載されていません。鍵のレスキューは全国出張としていますが、到着までの時間や出張料は地域で変わるため、電話の際に確認してください。",
  },
  {
    q: "三重県では空き巣などの侵入窃盗は増えていますか？",
    a: "三重県警察本部の資料によると、侵入窃盗・自動車盗・ひったくり・すりを合わせた重要窃盗犯の認知件数は、令和3年の750件から令和5年は1,329件まで増え、令和6年は1,291件（前年比38件減）でした。侵入窃盗だけの件数は資料に記載がないため、本記事では重要窃盗犯の値を掲載しています。",
  },
  {
    q: "賃貸住宅で鍵をなくしたときは、先に何をすればよいですか？",
    a: "賃貸住宅の鍵交換は管理会社・大家の承諾が必要なことが多いため、まず連絡してください。鍵開けだけを依頼する場合も、作業前に本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string][] = [
  ["令和2年", "1,015件", "60.0%", "8,560件"],
  ["令和3年", "750件", "92.0%", "7,410件"],
  ["令和4年", "840件", "38.6%", "7,647件"],
  ["令和5年", "1,329件", "57.4%", "9,955件"],
  ["令和6年", "1,291件", "38.7%", "10,933件"],
];

export default function AreaMiePage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="三重県"
      pref=""
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["三重県", "津市", "四日市市", "鈴鹿市", "鍵開け", "鍵交換", "空き巣", "業者比較"]}
      lead={[
        <>三重県は南北に長く、鍵業者が対応エリアに挙げている市町は業者ごとに異なります。津市・四日市市・鈴鹿市など北中部の市は複数の業者が掲載している一方、尾鷲市・熊野市などの東紀州は、掲載している業者が限られます。</>,
        <>本記事では、2026年11月21日に公式サイトで三重県（または全国）への対応を確認できた鍵業者3社を、公式の料金・受付時間と県内の対応市町とあわせて比較しました。後半では、三重県警察本部の資料から、侵入窃盗を含む重要窃盗犯と刑法犯の認知件数の推移を整理しています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="三重県警の資料で見る重要窃盗犯（侵入窃盗など）の推移（令和2年〜令和6年）"
      theme={
        <>
          <p className="leading-loose mb-4">
            三重県警察本部は、侵入窃盗・自動車盗・ひったくり・すりをまとめた<Hl>重要窃盗犯</Hl>の認知件数と検挙率を、刑法犯全体の件数とあわせて公表しています。令和2年から令和6年までを並べると次のとおりです。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">年</th>
                  <th className="border border-border px-3 py-2 text-left">重要窃盗犯 認知件数</th>
                  <th className="border border-border px-3 py-2 text-left">重要窃盗犯 検挙率</th>
                  <th className="border border-border px-3 py-2 text-left">刑法犯 認知件数</th>
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
            出典：三重県警察本部<Ext href={SRC.policeIinkai}>「所管事項概要説明」（令和7年三重県議会定例会 教育警察常任委員会）資料4 犯罪情勢</Ext>、<Ext href={SRC.policeDayori}>「県警だより 令和7年版」</Ext>の「犯罪情勢等」（いずれも{CHECKED}）。重要窃盗犯は侵入窃盗のほか自動車盗・ひったくり・すりを含み、侵入窃盗だけの件数は掲載されていません。令和7年の値は、確認した時点でこの2つの資料には掲載されていませんでした。
          </p>
          <p className="leading-loose mb-4">
            重要窃盗犯は<Hl>令和3年の750件から令和5年には1,329件</Hl>まで増え、令和6年も1,291件と高い水準のままでした。令和6年の検挙率は38.7%で、前年から18.7ポイント下がっています。刑法犯全体も令和6年は10,933件（前年比978件増）で、県警だよりでは「令和4年から3年連続で増加」とし、窃盗では自転車盗や金属類をねらう非侵入窃盗が特に増えたと説明しています。全国では、警察庁によると住宅を対象とした侵入窃盗が令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            県単位の統計からは、住んでいる市町の傾向までは分かりません。市ごとの業者は<Link href="/area/tsu/" className="text-primary underline">津市</Link>・<Link href="/area/yokkaichi/" className="text-primary underline">四日市市</Link>・<Link href="/area/suzuka/" className="text-primary underline">鈴鹿市</Link>のページで紹介しています。玄関の錠を1つ増やす方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口と対策は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>三重県への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・県内14市＋7郡）、鍵の生活救急車（鍵開け8,800円〜・12市＋8町、尾鷲市・熊野市は掲載なし）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円・全国出張）の3社でした。</>,
        <>三重県警察本部の資料では、侵入窃盗を含む重要窃盗犯は令和3年の750件から令和6年は1,291件に増え、刑法犯も3年連続で増加しました。外出時・就寝前の施錠を確認し、鍵の不調や紛失があれば交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/tsu/", label: "津の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/yokkaichi/", label: "四日市市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/suzuka/", label: "鈴鹿市の鍵開け・鍵交換業者おすすめ4選" },
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
