import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/gunma/";
const UPDATED = "2026年11月20日";
const UPDATED_ISO = "2026-11-20";
const CHECKED = "2026年11月20日確認";

const H1 = "【2026年最新】群馬県の鍵開け・鍵交換業者おすすめ3選｜各社の県内の対応市町村と、県警の統計で見る侵入盗・警察署別の刑法犯も解説する鍵屋比較";
const DESC =
  "群馬県への対応を公式サイトで2026年11月20日に確認できた鍵業者3社を、県内のどの市町村に対応しているかとあわせて比較。群馬県警察「群馬県の治安情勢（令和8年版）」から、侵入盗を含む重要窃盗犯が令和7年2,885件と増え続けていることと、警察署別の刑法犯認知件数もまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/gumma/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
  police: "https://www.pref.gunma.jp/uploaded/attachment/707904.pdf",
  prefTeguchi: "https://www.pref.gunma.jp/05/c0110018.html",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "県内12市と7郡を対応エリアに掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>群馬県の鍵屋一覧</Hl>では、群馬県内の対応エリアとして<Hl>前橋市・高崎市・桐生市・伊勢崎市・太田市・沼田市・館林市・渋川市・藤岡市・富岡市・安中市・みどり市の12市と、北群馬郡・多野郡・甘楽郡・吾妻郡・利根郡・佐波郡・邑楽郡</Hl>を掲載しています。公式料金表では、自宅の<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間365日受付（群馬県ページの表示）" },
    ],
    area: "公式の「群馬県の鍵屋一覧」に、県内12市と7郡を対応エリアとして掲載",
    sources: [
      { label: "カギ110番「群馬県の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間365日", area: "県内12市＋7郡" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>群馬県の対応エリアとして前橋市・高崎市・桐生市・伊勢崎市・太田市・館林市・渋川市・藤岡市・富岡市・安中市・みどり市の11市と、榛東村・吉岡町・甘楽町・玉村町・板倉町・明和町・千代田町・大泉町・邑楽町の9町村</Hl>が掲載されています（沼田市と、吾妻郡・利根郡などの町村は掲載なし）。公式の料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>がかかり、最終価格は作業前に提示する見積書の価格としています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（群馬県）に11市と9町村を掲載。沼田市・吾妻郡・利根郡などは掲載なし",
    sources: [
      { label: "生活救急車「対応エリア」", href: SRC.seikatsuArea },
      { label: "生活救急車「料金案内」", href: SRC.seikatsuPrice },
    ],
    checked: CHECKED,
    compare: { price: "8,800円〜（標準価格）", reception: "20:00〜7:59は時間外料金", area: "11市＋9町村（県北部は掲載なし）" },
  },
  {
    id: "kagi-rescue",
    slug: "kagi-rescue",
    name: "鍵のレスキュー",
    catch: "簡易料金表と出張料を公式に掲載",
    intro: (
      <>
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表で<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記で<Hl>出張料4,400〜8,800円（税込）</Hl>を掲載しており、出張料は出張先の地域により異なるとしています。群馬県を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（群馬県を名指しした案内はなし）",
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
    q: "群馬県で玄関の鍵開けを頼むと、いくらかかりますか？",
    a: "各社の公式掲載（2026年11月20日確認）では、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格・20:00〜7:59は時間外料金8,800円）、鍵のレスキューが6,600円〜（税込、別に出張料4,400〜8,800円）です。いずれも最低額で、鍵の種類・時間帯・出張距離で総額が変わるため、作業前に総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "沼田市やみなかみ町など県北部でも来てもらえますか？",
    a: "公式の掲載では、カギ110番は沼田市・利根郡・吾妻郡を対応エリアに含めています。鍵の生活救急車の対応エリア一覧には沼田市・利根郡・吾妻郡の町村が掲載されていません。鍵のレスキューは全国出張としていますが、到着までの時間や出張料は地域で変わるため、電話の際に確認してください。",
  },
  {
    q: "群馬県では空き巣などの侵入盗は増えていますか？",
    a: "群馬県警察「群馬県の治安情勢（令和8年版）」によると、侵入盗・自動車盗・ひったくり・すりを合わせた重要窃盗犯の認知件数は、令和3年の1,131件から令和7年は2,885件まで、4年続けて増えています。刑法犯全体も令和7年は15,283件で、人口10万人当たり801件は全国で2番目の多さでした。",
  },
  {
    q: "賃貸住宅で鍵をなくした場合は、すぐに業者を呼んでよいですか？",
    a: "賃貸住宅の鍵交換は、管理会社・大家の承諾が必要な場合が多いため、先に連絡してください。鍵開けだけを依頼する場合も、本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string][] = [
  ["令和3年", "1,131件", "9,079件", "464件"],
  ["令和4年", "1,555件", "10,159件", "523件"],
  ["令和5年", "2,082件", "13,326件", "690件"],
  ["令和6年", "2,758件", "14,593件", "760件"],
  ["令和7年", "2,885件", "15,283件", "801件"],
];

const stationRows: [string, string][] = [
  ["太田", "2,458件"],
  ["伊勢崎", "2,341件"],
  ["高崎", "2,137件"],
  ["前橋", "1,343件"],
  ["桐生", "1,166件"],
  ["前橋東", "1,115件"],
  ["館林", "997件"],
  ["大泉", "756件"],
];

export default function AreaGunmaPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="群馬県"
      pref=""
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["群馬県", "前橋市", "高崎市", "太田市", "鍵開け", "鍵交換", "空き巣", "業者比較"]}
      lead={[
        <>群馬県で鍵のトラブルが起きたときに頼める業者は、県内のどの市町村まで対応しているかが業者ごとに異なります。前橋市・高崎市・太田市など平野部の市は複数の業者が対応エリアに掲載している一方、沼田市や利根郡・吾妻郡などの県北部は、掲載している業者が限られます。</>,
        <>本記事では、2026年11月20日に公式サイトで群馬県（または全国）への対応を確認できた鍵業者3社を、公式に掲載された料金・受付時間と、各社が掲載している県内の対応市町村とあわせて比較しました。あわせて、群馬県警察「群馬県の治安情勢（令和8年版）」から、侵入盗を含む重要窃盗犯の推移と、警察署別の刑法犯認知件数を整理しています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="群馬県警の統計で見る重要窃盗犯の推移と警察署別の刑法犯（令和7年）"
      theme={
        <>
          <p className="leading-loose mb-4">
            群馬県警察は「群馬県の治安情勢」で、侵入盗・自動車盗・ひったくり・すりをまとめた<Hl>重要窃盗犯</Hl>の認知件数を毎年公表しています。令和3年から令和7年までの推移を、刑法犯全体の認知件数・人口10万人当たりの件数と並べると次のとおりです。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">年</th>
                  <th className="border border-border px-3 py-2 text-left">重要窃盗犯（侵入盗など）</th>
                  <th className="border border-border px-3 py-2 text-left">刑法犯 認知件数</th>
                  <th className="border border-border px-3 py-2 text-left">刑法犯 人口10万人当たり</th>
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
            出典：<Ext href={SRC.police}>群馬県警察「群馬県の治安情勢（令和８年版）」</Ext>の「1 刑法犯」「3 重要窃盗犯」（{CHECKED}）。重要窃盗犯は侵入盗のほか自動車盗・ひったくり・すりを含みます。人口10万人当たりの件数は、同資料が各年1月1日現在の住民基本台帳人口で算出した値です。
          </p>
          <p className="leading-loose mb-4">
            重要窃盗犯は<Hl>令和3年の1,131件から令和7年は2,885件</Hl>と、4年で2.5倍に増えました。令和7年の検挙率は41.8%です。刑法犯全体も同じ期間に増え続け、令和7年の人口10万人当たり801件は<Hl>全国で2番目</Hl>（全国平均は623件）でした。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            同じ資料の「警察署別治安状況（令和７年中）」から、刑法犯認知件数の多い8署を並べると次のとおりです（県全体15,283件）。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">警察署</th>
                  <th className="border border-border px-3 py-2 text-left">刑法犯 認知件数（令和7年）</th>
                </tr>
              </thead>
              <tbody>
                {stationRows.map(([k, a], i) => (
                  <tr key={k} className={i % 2 === 1 ? "bg-[#F5F8FC]" : "bg-white"}>
                    <th className="border border-border px-3 py-2 whitespace-nowrap bg-[#EAF1F8] text-left font-bold">{k}</th>
                    <td className="border border-border px-3 py-2">{a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-6 leading-relaxed">
            出典：<Ext href={SRC.police}>群馬県警察「群馬県の治安情勢（令和８年版）」</Ext>の「14 警察署別治安状況(令和７年中)」（{CHECKED}）。警察署の管轄は市町村の境界と一致しない場合があります。並べ替えは当サイトによるものです。
          </p>
          <p className="leading-loose mb-4">
            群馬県（消費生活課）は、県内の住宅を対象とした侵入盗は一戸建住宅に多く、ガラスを割って侵入するもの、次いで無締まりの箇所から侵入するものが多いと説明し、侵入に時間のかかる「防犯性能の高い建物部品」の活用を呼びかけています（<Ext href={SRC.prefTeguchi}>群馬県「手口と現状」</Ext>、{CHECKED}）。玄関に補助錠を加える方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、防犯性能の高い錠の目印は<Link href="/cp-nintei-jou/" className="text-primary underline">CP認定錠</Link>にまとめています。前橋市・高崎市の業者は<Link href="/area/maebashi/" className="text-primary underline">前橋のページ</Link>・<Link href="/area/takasaki/" className="text-primary underline">高崎市のページ</Link>でも比較しています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>群馬県への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・県内12市と7郡を掲載）、鍵の生活救急車（鍵開け8,800円〜・11市と9町村を掲載、沼田市・県北部の町村は掲載なし）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円・全国出張）の3社でした。</>,
        <>群馬県警察によると、侵入盗を含む重要窃盗犯は令和7年に2,885件と4年続けて増えています。外出時・就寝時の施錠を基本に、必要に応じて鍵交換や補助錠の設置をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/maebashi/", label: "前橋の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/takasaki/", label: "高崎市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/kumagaya/", label: "熊谷市の鍵開け・鍵交換業者おすすめ4選" },
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
