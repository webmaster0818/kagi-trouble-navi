import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/sano/";
const UPDATED = "2026年11月21日";
const UPDATED_ISO = "2026-11-21";
const CHECKED = "2026年11月21日確認";

const H1 = "【2026年最新】佐野市の鍵開け・鍵交換業者おすすめ3選｜栃木県警の統計で見る佐野市の住宅対象窃盗と金属盗も解説する鍵屋比較";
const DESC =
  "栃木県佐野市への対応を公式サイトで2026年11月21日に確認できた鍵業者3社（カギ110番・鍵の生活救急車・鍵のレスキュー）の料金・受付時間を比較。栃木県警察「あんしんまちづくりニュース」の令和8年9月累計から、佐野市の住宅対象窃盗が前年同期より16件少ない36件で、金属盗は16件増えたことをまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/tochigi/sano/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
  police: "https://www.pref.tochigi.lg.jp/keisatu/n11/documents/20261022110001.pdf",
  policeList: "https://www.pref.tochigi.lg.jp/keisatu/n11/anmati.html",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "佐野市の一覧ページに33件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>栃木県佐野市の鍵屋一覧</Hl>には33件の店舗が掲載されています。自宅の鍵について、公式料金表では<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料が別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間365日受付（佐野市ページの表示）" },
    ],
    area: "公式の「栃木県佐野市」の鍵屋一覧に、33件の店舗を掲載",
    sources: [
      { label: "カギ110番「佐野市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間365日", area: "佐野市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>栃木県の対応エリアに佐野市</Hl>が含まれています。標準価格の料金表では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示される見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（栃木県）に佐野市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。佐野市を個別に扱った案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（佐野市を名指しした案内はなし）",
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
    q: "佐野市で鍵開けを頼んだ場合の料金はいくらですか？",
    a: "2026年11月21日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。鍵の種類や作業する時間帯で総額は変わるため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "佐野市では空き巣が増えているのですか？",
    a: "栃木県警察の「あんしんまちづくりニュース」令和8年10月号では、佐野市の住宅対象窃盗（空き巣・忍込み・居空きの合計）は令和8年9月累計で36件で、前年同期より16件減りました。ただし刑法犯の総数は65件増えて581件です。",
  },
  {
    q: "足利市・栃木市と比べるとどうですか？",
    a: "同じ表の令和8年9月累計の住宅対象窃盗は、足利市が71件、栃木市が80件で、佐野市の36件より多い値でした。人口規模が異なるため、件数だけで地域の危険度を比べることはできません。",
    link: { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口と対策" },
  },
  {
    q: "物置や倉庫の鍵も鍵業者に交換を頼めますか？",
    a: "物置・倉庫の鍵の交換に対応するかどうか、料金がいくらかは業者ごとに異なります。メーカー名と型番を控えたうえで、依頼前に電話でご確認ください。",
    link: { href: "/monooki-kagi-koukan/", label: "物置の鍵交換" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["住宅対象窃盗", "36件", "52件", "71件", "80件", "500件"],
  ["金属盗", "47件", "31件", "37件", "79件", "758件"],
  ["自転車盗", "42件", "81件", "105件", "98件", "1,368件"],
  ["自動車盗", "7件", "8件", "6件", "11件", "159件"],
  ["刑法犯（総数）", "581件", "516件", "707件", "744件", "9,148件"],
];

export default function AreaSanoPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="佐野市"
      pref="栃木県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["佐野市", "栃木県", "鍵開け", "鍵交換", "住宅対象窃盗", "業者比較"]}
      lead={[
        <>佐野市で鍵をなくしたり、鍵が壊れて開かなくなったりしたときに、公式サイトで佐野市（または全国）への出張を確認できた鍵業者は3社でした。料金表の最低額に加えて、夜間の時間外料金や出張料の扱いを見ておくと総額の見当がつけやすくなります。</>,
        <>本記事では、3社の公式料金と受付時間を2026年11月21日に確認して比較しています。後半では、栃木県警察が毎月公表している「あんしんまちづくりニュース」の市町別の数値（令和8年9月累計）から、佐野市の住宅対象窃盗・金属盗などの件数を、隣の足利市・栃木市、栃木県全体と比べました。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="栃木県警の統計で見る佐野市の住宅対象窃盗と金属盗（令和8年9月累計）"
      theme={
        <>
          <p className="leading-loose mb-4">
            栃木県警察本部生活安全企画課の「あんしんまちづくりニュース」令和8年10月号には、令和8年9月までの累計の刑法犯総数と重点抑止犯罪の件数が、前年同期との増減とともに市町別に掲載されています。佐野市の値と、増減から求めた前年同期の値を、足利市・栃木市・栃木県全体と並べると次のとおりです。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">佐野市 令和8年9月累計</th>
                  <th className="border border-border px-3 py-2 text-left">佐野市 前年同期</th>
                  <th className="border border-border px-3 py-2 text-left">足利市 令和8年9月累計</th>
                  <th className="border border-border px-3 py-2 text-left">栃木市 令和8年9月累計</th>
                  <th className="border border-border px-3 py-2 text-left">栃木県 令和8年9月累計</th>
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
            出典：<Ext href={SRC.police}>栃木県警察本部 生活安全企画課「あんしんまちづくりニュース 令和8年10月号」</Ext>（<Ext href={SRC.policeList}>栃木県警察「あんしんまちづくりニュース」</Ext>に掲載、{CHECKED}）。前年同期の値は、表に示された前年同期比の増減から当サイトが算出しました。「住宅対象窃盗」は空き巣・忍込み・居空きの合計、「金属盗」は銅線や側溝の蓋、蛇口などの金属類が被害品となる窃盗の合計と注記されています。栃木県の値は表の「栃木県」行（発生地不明を含まない）です。数値は今後発表される他の統計と異なる場合があると注記されています。
          </p>
          <p className="leading-loose mb-4">
            佐野市の住宅対象窃盗（空き巣・忍込み・居空き）は、令和8年9月累計で<Hl>36件と、前年同期より16件少なく</Hl>なりました。自転車盗も前年同期の81件から42件に減っています。その一方で、刑法犯の総数は前年同期より65件多い581件、<Hl>金属盗は16件多い47件</Hl>でした。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            金属盗は、銅線や側溝の蓋、蛇口など金属類が被害品となる窃盗です。屋外の物置や倉庫、資材置き場の施錠を見直すことも、被害を防ぐ手段の1つです。物置の鍵の交換は<Link href="/monooki-kagi-koukan/" className="text-primary underline">物置の鍵交換</Link>で、住宅の侵入対策は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口と対策</Link>で説明しています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>佐野市への対応を公式で確認できた鍵業者は、カギ110番（鍵開け11,000円〜・佐野市の一覧に33件）、鍵の生活救急車（鍵開け8,800円〜・夜間は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社です。</>,
        <>栃木県警察の令和8年9月累計では、佐野市の住宅対象窃盗は前年同期より16件少ない36件でしたが、金属盗は16件多い47件でした。住宅の施錠に加えて、物置・倉庫の鍵も見直しておくことをおすすめします。</>,
      ]}
      nearby={[
        { href: "/area/oyama/", label: "小山市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/utsunomiya/", label: "宇都宮の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/gunma/", label: "群馬県の鍵開け・鍵交換業者おすすめ3選" },
      ]}
      related={[
        { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口と対策" },
        { href: "/monooki-kagi-koukan/", label: "物置の鍵交換" },
        { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
        { href: "/kagiya-erabikata/", label: "鍵屋・鍵業者の選び方チェックリスト" },
      ]}
    />
  );
}
