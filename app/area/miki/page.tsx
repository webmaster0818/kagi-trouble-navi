import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/miki/";
const UPDATED = "2026年11月23日";
const UPDATED_ISO = "2026-11-23";
const CHECKED = "2026年11月23日確認";

const H1 = "【2026年最新】三木市の鍵開け・鍵交換業者おすすめ3選｜兵庫県警の統計で見る三木市の空き巣・事務所荒しの件数も解説する鍵屋比較";
const DESC =
  "兵庫県三木市への対応を公式サイトで2026年11月23日に確認できた鍵業者3社の料金・受付時間を比較。兵庫県警察の市区町別統計（令和8年9月末・暫定値）から、三木市の空き巣・忍込みと事務所荒し・出店荒しの件数を小野市・加古川市と並べています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/hyogo/miki/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  police: "https://www.police.pref.hyogo.lg.jp/seikatu/gaitou/statis/index.htm",
  policePdf: "https://www.police.pref.hyogo.lg.jp/seikatu/gaitou/statis/data/touban.pdf",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "三木市の一覧ページに21件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>兵庫県三木市の鍵屋一覧</Hl>には21件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間受付（三木市ページの表示）" },
    ],
    area: "公式の「兵庫県三木市」の鍵屋一覧に、21件の店舗を掲載",
    sources: [
      { label: "カギ110番「三木市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間受付", area: "三木市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>兵庫県の対応エリアに三木市</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示する見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（兵庫県）に三木市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。三木市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（三木市を名指しした案内はなし）",
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
    q: "三木市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月23日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "三木市では空き巣が増えていますか？",
    a: "兵庫県警察の暫定値では、三木市の空き巣は令和8年9月末で2件（前年同期1件）、忍込みは2件（同0件）でした。件数が少ないため増減だけで傾向は判断できません。一方、事務所荒しは6件（同1件）、出店荒しは4件（同0件）と、住宅以外をねらう侵入窃盗が増えています。",
  },
  {
    q: "小野市・加古川市と比べるとどうですか？",
    a: "同じ資料の令和8年9月末の値で、小野市は空き巣2件・忍込み1件・事務所荒し1件・出店荒し1件、加古川市は空き巣6件・忍込み1件・事務所荒し2件・出店荒し2件でした。人口や事業所の数が異なるため、件数だけで地域の安全性を比べることはできません。",
    link: { href: "/area/kakogawa/", label: "加古川市の鍵開け・鍵交換業者おすすめ4選" },
  },
  {
    q: "賃貸住宅で鍵をなくしたときは、先に何をすればよいですか？",
    a: "賃貸住宅の鍵交換は管理会社・大家の承諾が必要なことが多いため、まず連絡してください。鍵開けだけを頼む場合も、作業前に本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string][] = [
  ["空き巣", "2件", "1件", "2件", "6件"],
  ["忍込み", "2件", "0件", "1件", "1件"],
  ["事務所荒し", "6件", "1件", "1件", "2件"],
  ["出店荒し", "4件", "0件", "1件", "2件"],
  ["自転車盗", "26件", "29件", "19件", "384件"],
  ["刑法犯総数", "309件", "297件", "189件", "1,292件"],
];

export default function AreaMikiPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="三木市"
      pref="兵庫県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["三木市", "兵庫県", "鍵開け", "鍵交換", "空き巣", "業者比較"]}
      lead={[
        <>兵庫県三木市で家の鍵をなくした、店舗や事務所の鍵を替えたいといったときに、公式サイトで三木市（または全国）への対応を確認できた鍵業者は3社でした。料金表の最低額に加えて、夜間の時間外料金や出張料がかかるかどうかも並べています。</>,
        <>各社の料金・受付時間は2026年11月23日に公式ページで確認しました。後半では、兵庫県警察が公表している市区町別の刑法犯認知状況（令和8年9月末・暫定値）から三木市の数字を取り出し、前年同期や小野市・加古川市と比べています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="兵庫県警の統計で見る三木市の侵入窃盗（令和8年9月末・暫定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            兵庫県警察は「地域の犯罪情勢」として、市区町ごとに主な刑法犯の認知件数を前年同期と並べた資料を公表しています。東播地域の資料から、三木市の空き巣・忍込み・事務所荒し・出店荒しなどを抜き出し、隣接する小野市と、同じ東播地域で件数の多い加古川市の令和8年9月末の値を加えました。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">三木市 令和8年9月末</th>
                  <th className="border border-border px-3 py-2 text-left">三木市 令和7年9月末</th>
                  <th className="border border-border px-3 py-2 text-left">小野市 令和8年9月末</th>
                  <th className="border border-border px-3 py-2 text-left">加古川市 令和8年9月末</th>
                </tr>
              </thead>
              <tbody>
                {statRows.map(([k, v1, v2, v3, v4], i) => (
                  <tr key={k} className={i % 2 === 1 ? "bg-[#F5F8FC]" : "bg-white"}>
                    <th className="border border-border px-3 py-2 whitespace-nowrap bg-[#EAF1F8] text-left font-bold">{k}</th>
                    <td className="border border-border px-3 py-2">{v1}</td>
                    <td className="border border-border px-3 py-2">{v2}</td>
                    <td className="border border-border px-3 py-2">{v3}</td>
                    <td className="border border-border px-3 py-2">{v4}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-6 leading-relaxed">
            出典：<Ext href={SRC.police}>兵庫県警察「地域の犯罪情勢（市区町別刑法犯認知状況）」</Ext>の<Ext href={SRC.policePdf}>東播地域（市・町別）</Ext>（令和8年9月末・生活安全企画課調べ・暫定値、{CHECKED}）。件数は1月からの累計です。この資料には居空きの欄がないため、表にも載せていません。
          </p>
          <p className="leading-loose mb-4">
            三木市では、住宅をねらう空き巣が<Hl>令和8年9月末で2件</Hl>（前年同期1件）、就寝中などに入る忍込みが2件（同0件）で、どちらも件数自体は少数でした。目立つのは住宅以外で、<Hl>事務所荒しが1件から6件、出店荒しが0件から4件</Hl>に増えています。小野市（事務所荒し1件・出店荒し1件）や、刑法犯総数が三木市の4倍を超える加古川市（同2件・2件）と比べても多い数字です。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            刑法犯の総数は297件から309件とほぼ横ばいで、自転車盗は29件から26件に減りました。暫定値のため、年末までの累計や確定値では数字が変わる可能性があります。店舗・事務所では、出入口の錠を防犯性の高いものに替える、補助錠を足すといった方法があり、住宅の玄関の錠を2つにする方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>三木市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・三木市の一覧に21件を掲載）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>兵庫県警察の暫定値では、三木市の空き巣・忍込みは令和8年9月末で各2件と少ない一方、事務所荒し（6件）と出店荒し（4件）は前年同期から増えていました。住宅だけでなく店舗・事務所の施錠も確認し、鍵の不調や紛失があれば早めに交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/kasai/", label: "加西市の鍵開け・鍵交換業者おすすめ3選" },
        { href: "/area/kakogawa/", label: "加古川市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/akashi/", label: "明石市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/kobe/", label: "神戸の鍵開け・鍵交換業者おすすめ5選" },
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
