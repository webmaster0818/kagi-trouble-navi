import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/hanno/";
const UPDATED = "2026年11月25日";
const UPDATED_ISO = "2026-11-25";
const CHECKED = "2026年11月25日確認";

const H1 = "【2026年最新】飯能市の鍵開け・鍵交換業者おすすめ3選｜埼玉県警の統計で見る飯能市の空き巣・車上ねらいの件数も解説する鍵屋比較";
const DESC =
  "埼玉県飯能市への対応を公式サイトで2026年11月25日に確認できた鍵業者3社の料金・受付時間を比較。埼玉県警察の市町村別統計（令和7年確定値）から、飯能市の車上ねらいが11件から37件に増え、空き巣が5件から9件になったことを、入間市・日高市と並べています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/saitama/hanno/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
  police: "https://www.police.pref.saitama.lg.jp/documents/27624/r7keihoukansityouson.pdf",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "飯能市の一覧ページに60件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>埼玉県飯能市の鍵屋一覧</Hl>には60件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間受付（飯能市ページの表示）" },
    ],
    area: "公式の「埼玉県飯能市」の鍵屋一覧に、60件の店舗を掲載",
    sources: [
      { label: "カギ110番「飯能市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間受付", area: "飯能市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>埼玉県の対応エリアに飯能市</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示する見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（埼玉県）に飯能市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。飯能市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（飯能市を名指しした案内はなし）",
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
    q: "飯能市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月25日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "飯能市では空き巣が増えていますか？",
    a: "埼玉県警察の市町村別統計（令和7年・確定値）では、飯能市の空き巣は令和6年の5件から9件に増えました。忍込みは6件から2件に減り、居空きは0件から1件で、住宅を対象とした3つの手口の合計は11件から12件です。",
  },
  {
    q: "入間市・日高市と比べるとどうですか？",
    a: "同じ表の令和7年で、入間市の空き巣・忍込み・居空きの合計は23件、日高市は24件でした。人口や住宅の数が異なるため、件数だけで地域の安全性を比べることはできません。",
    link: { href: "/area/iruma/", label: "入間市の鍵開け・鍵交換業者おすすめ4選" },
  },
  {
    q: "賃貸住宅で鍵をなくしたときは、先に何をすればよいですか？",
    a: "賃貸住宅の鍵交換は管理会社・大家の承諾が必要なことが多いため、まず連絡してください。鍵開けだけを頼む場合も、作業前に本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["空き巣", "9件", "5件", "8件", "17件", "1,063件"],
  ["忍込み", "2件", "6件", "14件", "4件", "652件"],
  ["居空き", "1件", "0件", "1件", "3件", "35件"],
  ["3つの合計", "12件", "11件", "23件", "24件", "1,750件"],
  ["車上ねらい", "37件", "11件", "52件", "12件", "1,976件"],
  ["自転車盗", "132件", "224件", "233件", "86件", "13,586件"],
  ["刑法犯（総数）", "514件", "511件", "944件", "373件", "53,471件"],
];

export default function AreaHannoPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="飯能市"
      pref="埼玉県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["飯能市", "埼玉県", "鍵開け", "鍵交換", "車上ねらい", "業者比較"]}
      lead={[
        <>飯能市で家の鍵をなくした、玄関や勝手口の鍵を替えたいといったときに、公式サイトで飯能市（または全国）への対応を確認できた鍵業者は3社でした。料金表の最低額と、夜間の時間外料金・出張料を比べています。</>,
        <>3社の料金・受付時間は2026年11月25日に公式ページで確認しました。後半では、埼玉県警察の市町村別の刑法犯認知件数（令和7年・確定値）から、飯能市の空き巣・忍込み・居空きと車上ねらいの件数を、隣接する入間市・日高市、埼玉県全体と比べています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="埼玉県警の統計で見る飯能市の空き巣・車上ねらい（令和7年・確定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            埼玉県警察は、刑法犯の認知件数を市町村別・手口別にまとめ、令和7年と令和6年の値を並べた表を公開しています。この表から、住宅を対象とした侵入窃盗（空き巣・忍込み・居空き）と車上ねらい・自転車盗、刑法犯の総数を、飯能市と隣接する入間市・日高市、埼玉県全体について抜き出しました。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">飯能市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">飯能市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">入間市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">日高市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">埼玉県 令和7年</th>
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
            出典：<Ext href={SRC.police}>埼玉県警察「刑法犯認知件数（令和7年・確定値）市町村別」</Ext>（{CHECKED}）。表の空欄は0件として扱い、「3つの合計」は当サイトが空き巣・忍込み・居空きを足して算出しました。埼玉県の数値は同じ表の「合計」行です。
          </p>
          <p className="leading-loose mb-4">
            飯能市の刑法犯の総数は、令和6年の511件から令和7年は514件とほぼ同じでした。その中で大きく動いたのが車上ねらいで、<Hl>11件から37件と3倍を超えて</Hl>います。反対に自転車盗は224件から132件に減りました。住宅を対象とした3つの手口は11件から12件とほぼ横ばいですが、内訳では<Hl>空き巣が5件から9件に増え</Hl>、忍込みは6件から2件に減っています。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            車上ねらいは、自宅の駐車場や駐車中の車から物を盗まれる被害です。車内に貴重品や家の鍵を置いたままにしないことが基本で、家の鍵を車に置いていて盗まれた場合は、玄関のシリンダー交換も検討してください。鍵をなくしたときの対処は<Link href="/kagi-funshitsu/" className="text-primary underline">鍵をなくしたときの対処</Link>に、玄関の錠を2つにする方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>飯能市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・飯能市の一覧に60件を掲載）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>埼玉県警察の令和7年確定値では、飯能市の車上ねらいは11件から37件に増え、空き巣も5件から9件になりました。車内に家の鍵を置かないなど保管を見直し、鍵の紛失や不調があれば早めに交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/iruma/", label: "入間市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/sayama/", label: "狭山市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/tokorozawa/", label: "所沢市の鍵開け・鍵交換業者おすすめ4選" },
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
