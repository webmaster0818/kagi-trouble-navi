import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/yawata/";
const UPDATED = "2026年11月21日";
const UPDATED_ISO = "2026-11-21";
const CHECKED = "2026年11月21日確認";

const H1 = "【2026年最新】八幡市の鍵開け・鍵交換業者おすすめ3選｜京都府警の統計で見る八幡市の侵入窃盗の減少も解説する鍵屋比較";
const DESC =
  "京都府八幡市への対応を公式サイトで2026年11月21日に確認できた鍵業者3社（カギ110番・鍵の生活救急車・鍵のレスキュー）の料金・受付時間を比較。京都府警察の市区町村別認知件数から、八幡市の侵入窃盗が令和6年中の28件から令和7年中は18件に減った一方、京都府全体では増えたことをまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/kyoto/yawata/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
  police: "https://www.pref.kyoto.jp/fukei/anzen/toke/documents/28-r7-10.pdf",
  policeR6: "https://www.pref.kyoto.jp/fukei/anzen/toke/documents/10shichouson_1.pdf",
  policeList: "https://www.pref.kyoto.jp/fukei/anzen/toke/tokei.html",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "八幡市の一覧ページに52件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>京都府八幡市の鍵屋一覧</Hl>には52件の店舗が掲載されています。自宅の鍵について、公式料金表では<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料が別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間365日受付（八幡市ページの表示）" },
    ],
    area: "公式の「京都府八幡市」の鍵屋一覧に、52件の店舗を掲載",
    sources: [
      { label: "カギ110番「八幡市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間365日", area: "八幡市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>京都府の対応エリアに八幡市</Hl>が含まれています。標準価格の料金表では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示される見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（京都府）に八幡市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。八幡市を個別に扱った案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（八幡市を名指しした案内はなし）",
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
    q: "八幡市で鍵開けを頼んだ場合の料金はいくらですか？",
    a: "2026年11月21日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。時間帯や鍵の種類で総額が変わるため、作業前に見積もりの総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "八幡市の侵入窃盗は減っているのですか？",
    a: "京都府警察の市区町村別認知件数では、八幡市の侵入窃盗は令和6年中が28件、令和7年中が18件で、10件減りました。刑法犯の総数も299件から266件に減っています。",
  },
  {
    q: "京田辺市・京都市伏見区と比べるとどうですか？",
    a: "同じ表の令和7年中の侵入窃盗は、京田辺市が23件、京都市伏見区が38件でした。人口規模が異なるため、件数だけで地域の危険度を比べることはできません。",
    link: { href: "/area/kyotanabe/", label: "京田辺市の鍵業者と統計" },
  },
  {
    q: "賃貸住宅で鍵をなくした場合は、すぐに業者を呼んでよいですか？",
    a: "賃貸住宅の鍵交換は、管理会社・大家の承諾が必要な場合が多いため、先に連絡してください。鍵開けだけを依頼する場合も、作業前に本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["侵入窃盗", "18件", "28件", "23件", "38件", "421件"],
  ["乗り物盗", "61件", "73件", "119件", "455件", "3,304件"],
  ["非侵入盗", "112件", "111件", "117件", "565件", "4,630件"],
  ["窃盗犯（計）", "191件", "212件", "259件", "1,058件", "8,355件"],
  ["刑法犯（総数）", "266件", "299件", "336件", "1,552件", "12,398件"],
];

export default function AreaYawataPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="八幡市"
      pref="京都府"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["八幡市", "京都府", "鍵開け", "鍵交換", "侵入窃盗", "業者比較"]}
      lead={[
        <>京都府八幡市で鍵のトラブルが起きたとき、公式サイトで八幡市（または全国）への出張を確認できた業者は3社でした。料金表の最低額はいずれも1万円前後ですが、夜間の割増や出張料のかかり方には違いがあります。</>,
        <>本記事では、3社の公式料金・受付時間を2026年11月21日に確認して比較しています。あわせて、京都府警察の市区町村別の認知件数（令和7年中・令和6年中）から、八幡市の侵入窃盗がどう変わったかを、京田辺市・京都市伏見区・京都府全体と比べて整理しました。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="京都府警の統計で見る八幡市の侵入窃盗（令和7年中）"
      theme={
        <>
          <p className="leading-loose mb-4">
            京都府警察が公表している市区町村別の認知件数（刑法犯包括罪種別）の表から、窃盗犯の内訳を抜き出しました。八幡市は令和7年中と令和6年中、比較先の京田辺市・京都市伏見区・京都府全体は令和7年中の値です。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">八幡市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">八幡市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">京田辺市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">京都市伏見区 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">京都府 令和7年</th>
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
            出典：<Ext href={SRC.police}>京都府警察「令和7年中の市区町村別認知件数（刑法犯包括罪種別）」</Ext>、<Ext href={SRC.policeR6}>同「令和6年中の市区町村別認知件数（刑法犯包括罪種別）」</Ext>（いずれも<Ext href={SRC.policeList}>京都府警察「統計資料（犯罪）」</Ext>に掲載、{CHECKED}）。京都府の数値は同じ表の「総数」行です。
          </p>
          <p className="leading-loose mb-4">
            八幡市の侵入窃盗は<Hl>令和6年中の28件から令和7年中は18件</Hl>に減りました。刑法犯の総数も299件から266件に減っています。一方、京都府全体の侵入窃盗は384件から421件に増えており、府全体とは逆の動きでした。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            件数が減っても、侵入窃盗がなくなったわけではありません。1年で18件という件数は、市内で月に1件以上の侵入被害が起きている計算です。玄関の錠が古い場合や、引っ越し後に前の住人から鍵を引き継いだ場合は、交換の時期を検討してください。交換の目安は<Link href="/kagi-koukan-timing/" className="text-primary underline">鍵交換のタイミング</Link>に、補助錠で1枚のドアに錠を2つにする方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>八幡市への対応を公式で確認できた鍵業者は、カギ110番（鍵開け11,000円〜・八幡市の一覧に52件）、鍵の生活救急車（鍵開け8,800円〜・夜間は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社です。</>,
        <>京都府警察の統計では、八幡市の侵入窃盗は令和6年中28件から令和7年中18件に減りましたが、京都府全体では増えています。古い鍵や引き継いだ鍵は、交換も含めて見直すことをおすすめします。</>,
      ]}
      nearby={[
        { href: "/area/hirakata/", label: "枚方市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/kyoto-fushimi/", label: "京都市伏見区の鍵開け・鍵交換業者おすすめ5選" },
        { href: "/area/uji/", label: "宇治市の鍵開け・鍵交換業者おすすめ4選" },
      ]}
      related={[
        { href: "/kagi-koukan-timing/", label: "鍵交換のタイミング" },
        { href: "/hojo-jou/", label: "補助錠の選び方" },
        { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口と対策" },
        { href: "/kagiya-erabikata/", label: "鍵屋・鍵業者の選び方チェックリスト" },
      ]}
    />
  );
}
