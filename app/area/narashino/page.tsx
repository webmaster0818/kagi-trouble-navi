import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/narashino/";
const UPDATED = "2026年11月25日";
const UPDATED_ISO = "2026-11-25";
const CHECKED = "2026年11月25日確認";

const H1 = "【2026年最新】習志野市の鍵開け・鍵交換業者おすすめ3選｜千葉県警の統計で見る習志野市の空き巣・侵入盗の件数も解説する鍵屋比較";
const DESC =
  "千葉県習志野市への対応を公式サイトで2026年11月25日に確認できた鍵業者3社の料金・受付時間を比較。千葉県警察の市町村別統計（令和8年8月末・暫定値）から、習志野市の侵入盗が前年同期の38件から21件に減ったことを、船橋市・八千代市と並べています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/chiba/narashino/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
  policeList: "https://www.police.pref.chiba.jp/keisoka/safe-life_crime_statisticsA-06.html",
  policeXlsx: "https://www.police.pref.chiba.jp/content/common/000069822.xlsx",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "習志野市の一覧ページに76件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>千葉県習志野市の鍵屋一覧</Hl>には76件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間受付（習志野市ページの表示）" },
    ],
    area: "公式の「千葉県習志野市」の鍵屋一覧に、76件の店舗を掲載",
    sources: [
      { label: "カギ110番「習志野市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間受付", area: "習志野市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>千葉県の対応エリアに習志野市</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示する見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（千葉県）に習志野市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。習志野市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（習志野市を名指しした案内はなし）",
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
    q: "習志野市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月25日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "習志野市では空き巣が増えていますか？",
    a: "千葉県警察の市町村別統計（令和8年8月末・暫定値）では、習志野市の空き巣は8件で、前年同期の13件より5件少なくなっています。忍込みも6件から1件に減り、侵入盗の合計は38件から21件です。",
  },
  {
    q: "船橋市・八千代市と比べるとどうですか？",
    a: "同じ表の令和8年8月末で、船橋市の侵入盗は97件（うち空き巣26件）、八千代市は59件（同11件）でした。人口や住宅の数が異なるため、件数だけで地域の安全性を比べることはできません。",
    link: { href: "/area/funabashi/", label: "船橋市の鍵開け・鍵交換業者おすすめ4選" },
  },
  {
    q: "賃貸住宅で鍵をなくしたときは、先に何をすればよいですか？",
    a: "賃貸住宅の鍵交換は管理会社・大家の承諾が必要なことが多いため、まず連絡してください。鍵開けだけを頼む場合も、作業前に本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["空き巣", "8件", "13件", "26件", "11件", "548件"],
  ["忍込み", "1件", "6件", "13件", "9件", "158件"],
  ["事務所荒し・出店荒し", "3件", "5件", "10件", "2件", "198件"],
  ["その他侵入盗", "9件", "14件", "48件", "37件", "1,200件"],
  ["侵入盗（合計）", "21件", "38件", "97件", "59件", "2,104件"],
  ["自転車盗", "309件", "372件", "809件", "253件", "6,692件"],
  ["刑法犯（総数）", "844件", "930件", "2,726件", "791件", "26,648件"],
];

export default function AreaNarashinoPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="習志野市"
      pref="千葉県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["習志野市", "千葉県", "鍵開け", "鍵交換", "空き巣", "業者比較"]}
      lead={[
        <>習志野市で家の鍵をなくした、マンションの玄関の鍵を替えたいといったときに、公式サイトで習志野市（または全国）への対応を確認できた鍵業者は3社でした。料金表の最低額と、夜間の時間外料金・出張料を比べています。</>,
        <>3社の料金・受付時間は2026年11月25日に公式ページで確認しました。後半では、千葉県警察が公表する市町村別の刑法犯認知件数（令和8年8月末・暫定値と前年同期）から、習志野市の空き巣・忍込みなどの侵入盗を、近隣の船橋市・八千代市、千葉県全体と比べています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="千葉県警の統計で見る習志野市の空き巣と侵入盗（令和8年8月末・暫定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            千葉県警察は、刑法犯の認知件数を市町村別・手口別にまとめた表（暫定値）を、前年同期の表とあわせて公表しています。令和8年8月末の表から習志野市の侵入盗の手口を取り出し、前年同期の値と、隣接する船橋市・八千代市、千葉県全体を並べました。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">習志野市 令和8年8月末</th>
                  <th className="border border-border px-3 py-2 text-left">習志野市 前年同期</th>
                  <th className="border border-border px-3 py-2 text-left">船橋市 令和8年8月末</th>
                  <th className="border border-border px-3 py-2 text-left">八千代市 令和8年8月末</th>
                  <th className="border border-border px-3 py-2 text-left">千葉県 令和8年8月末</th>
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
            出典：<Ext href={SRC.policeList}>千葉県警察「県下全体（警察署別・市町村別を一覧表で見る）」</Ext>の<Ext href={SRC.policeXlsx}>市町村別（暫定値・前年同期比）令和８年８月</Ext>（{CHECKED}）。前年同期は同じファイルの「犯罪発生状況（前年）」（令和7年8月・暫定値）の値です。侵入盗（合計）は表の空き巣・忍込み・事務所荒し・出店荒し・その他侵入盗を当サイトで合計した値です。月末の数値は変更される場合があると注記されています。
          </p>
          <p className="leading-loose mb-4">
            習志野市の侵入盗は、令和8年8月末で<Hl>前年同期の38件から21件</Hl>に減りました。住宅をねらう手口では、<Hl>空き巣が13件から8件、忍込みが6件から1件</Hl>です。刑法犯の総数も930件から844件に減り、最も多い自転車盗も372件から309件に減っています。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            侵入盗が減った年でも、令和8年8月末までに空き巣が8件起きています。マンションでは玄関の鍵に加えてベランダ側の窓の施錠、戸建てでは勝手口や窓の補助錠を確かめておくと安心です。鍵を交換せずに前の鍵を使えなくする仕組みは<Link href="/change-key-system/" className="text-primary underline">チェンジキーシステムとは</Link>に、侵入の手口は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>習志野市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・習志野市の一覧に76件を掲載）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>千葉県警察の令和8年8月末の暫定値では、習志野市の侵入盗は21件と前年同期の38件から減りましたが、空き巣は8件起きています。窓や勝手口の施錠を見直し、鍵の紛失や不調があれば早めに交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/funabashi/", label: "船橋市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/yachiyo/", label: "八千代市の鍵開け・鍵交換業者おすすめ3選" },
        { href: "/area/chiba/", label: "千葉の鍵開け・鍵交換業者おすすめ4選" },
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
