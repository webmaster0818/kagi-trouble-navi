import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/kuki/";
const UPDATED = "2026年11月21日";
const UPDATED_ISO = "2026-11-21";
const CHECKED = "2026年11月21日確認";

const H1 = "【2026年最新】久喜市の鍵開け・鍵交換業者おすすめ3選｜埼玉県警の統計で見る久喜市の空き巣・忍込みの増加も解説する鍵屋比較";
const DESC =
  "埼玉県久喜市への対応を公式サイトで2026年11月21日に確認できた鍵業者3社（カギ110番・鍵の生活救急車・鍵のレスキュー）の料金・受付時間を比較。埼玉県警察の市町村別統計（令和7年・確定値）から、久喜市の空き巣・忍込み・居空きの合計が44件から68件に増えたことを、隣の加須市・幸手市と並べてまとめています。";


export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/saitama/kuki/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  police: "https://www.police.pref.saitama.lg.jp/documents/27624/r7keihoukansityouson.pdf",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "久喜市の一覧ページに75件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>埼玉県久喜市の鍵屋一覧</Hl>には75件の店舗が掲載されています。自宅のトラブルについて、公式料金表では<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>とされています。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間365日受付（久喜市ページの表示）" },
    ],
    area: "公式の「埼玉県久喜市」の鍵屋一覧に、75件の店舗を掲載",
    sources: [
      { label: "カギ110番「久喜市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間365日", area: "久喜市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>埼玉県の対応エリアに久喜市</Hl>が含まれています。標準価格の料金表を見ると、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示する見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（埼玉県）に久喜市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。久喜市を個別に扱った案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（久喜市を名指しした案内はなし）",
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
    q: "久喜市で鍵開けを頼んだ場合の料金はいくらですか？",
    a: "2026年11月21日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。鍵の種類や作業時間帯で総額は変わるため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "久喜市では空き巣が増えているのですか？",
    a: "埼玉県警察の市町村別の刑法犯認知件数（令和7年・確定値）では、久喜市の空き巣は40件で、令和6年の26件から14件増えました。忍込みも17件から25件、居空きも1件から3件に増え、3つの合計は44件から68件になっています。刑法犯の総数は1,052件から1,086件で、増加幅は住宅をねらう侵入窃盗のほうが大きくなっています。",
  },
  {
    q: "近隣の加須市・幸手市と比べるとどうですか？",
    a: "同じ表の令和7年の値は、加須市が空き巣24件・忍込み8件・居空き1件（合計33件）、幸手市が空き巣20件・忍込み8件（合計28件）でした。久喜市の合計68件は2市より多く、なかでも忍込み（25件）が目立ちます。人口規模が異なるため、件数だけで地域の危険度を比べることはできません。",
    link: { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口と対策" },
  },
  {
    q: "一戸建てで鍵を交換するときに気をつけることはありますか？",
    a: "玄関の錠を交換する場合は、扉に付いている錠のメーカー・型番を確認してから見積もりを取ると比較しやすくなります。勝手口や窓の補助錠も含めて見直す方法は、一戸建ての鍵交換の記事にまとめています。",
    link: { href: "/ikkodate-kagi-koukan/", label: "一戸建ての鍵交換" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["空き巣", "40件", "26件", "24件", "20件", "1,063件"],
  ["忍込み", "25件", "17件", "8件", "8件", "652件"],
  ["居空き", "3件", "1件", "1件", "0件", "35件"],
  ["3つの合計", "68件", "44件", "33件", "28件", "1,750件"],
  ["刑法犯（総数）", "1,086件", "1,052件", "717件", "441件", "53,471件"],
];

export default function AreaKukiPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="久喜市"
      pref="埼玉県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["久喜市", "埼玉県", "鍵開け", "鍵交換", "忍込み", "業者比較"]}
      lead={[
        <>久喜市で鍵の紛失や故障があったとき、公式サイトで久喜市（または全国）への出張対応を確認できた業者は3社でした。最低料金だけでなく、夜間の時間外料金や出張料の有無まで見ておくと、総額の見当がつけやすくなります。</>,
        <>この記事では、3社の公式料金と受付時間を2026年11月21日に確認して比較表にまとめました。後半では、埼玉県警察の市町村別統計（令和7年・確定値）をもとに、久喜市で空き巣・忍込み・居空きがどれだけ増えたかを、加須市・幸手市・埼玉県全体と比べています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="埼玉県警の統計で見る久喜市の空き巣・忍込みの増加（令和7年・確定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            埼玉県警察が公表している市町村別の刑法犯認知件数の表から、住宅をねらう侵入窃盗の3区分（空き巣・忍込み・居空き）を抜き出しました。久喜市は令和7年と令和6年、比較先の加須市・幸手市・埼玉県全体は令和7年の値です。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">久喜市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">久喜市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">加須市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">幸手市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">埼玉県 令和7年</th>
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
            出典：<Ext href={SRC.police}>埼玉県警察「刑法犯認知件数（令和7年・確定値）市町村別」</Ext>（{CHECKED}）。表の空欄は0件として扱い、「3つの合計」は当サイトが3項目を足して算出しました。埼玉県の数値は同じ表の「合計」行です。
          </p>
          <p className="leading-loose mb-4">
            久喜市の3区分の合計は<Hl>44件から68件へ、約1.5倍</Hl>に増えました。刑法犯全体の伸び（1,052件→1,086件）と比べると、住宅への侵入窃盗の増え方が大きいことが分かります。区分別では空き巣が26件から40件、<Hl>住人の在宅中・就寝中に入る忍込みが17件から25件</Hl>です。埼玉県全体でも忍込みは360件から652件に増えており、県全体と同じ傾向といえます。全国では、警察庁によると住宅を対象とした侵入窃盗が令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            忍込みへの備えとしては、就寝前に玄関だけでなく窓・勝手口の施錠も確かめることが基本です。1つの扉に錠を2つ付ける方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>で、勝手口や窓の対策は<Link href="/katteguchi-mado-bouhan/" className="text-primary underline">勝手口・窓の防犯</Link>で説明しています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>久喜市への対応を公式で確認できた鍵業者は、カギ110番（鍵開け11,000円〜・久喜市の一覧に75件）、鍵の生活救急車（鍵開け8,800円〜・夜間は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社です。</>,
        <>埼玉県警察の確定値では、久喜市の空き巣・忍込み・居空きの合計が令和6年の44件から令和7年は68件に増えました。夜間の施錠の確認に加えて、古くなった鍵や紛失した鍵は早めの交換をおすすめします。</>,
      ]}
      nearby={[
        { href: "/area/kasukabe/", label: "春日部市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/ageo/", label: "上尾市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/kitamoto/", label: "北本市の鍵開け・鍵交換業者おすすめ3選" },
        { href: "/area/kazo/", label: "加須市の鍵開け・鍵交換業者おすすめ3選" },
        { href: "/area/satte/", label: "幸手市の鍵開け・鍵交換業者おすすめ3選" },
      ]}
      related={[
        { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口と対策" },
        { href: "/hojo-jou/", label: "補助錠の選び方" },
        { href: "/ikkodate-kagi-koukan/", label: "一戸建ての鍵交換" },
        { href: "/kagiya-erabikata/", label: "鍵屋・鍵業者の選び方チェックリスト" },
      ]}
    />
  );
}
