import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/higashiomi/";
const UPDATED = "2026年11月24日";
const UPDATED_ISO = "2026-11-24";
const CHECKED = "2026年11月24日確認";

const H1 = "【2026年最新】東近江市の鍵開け・鍵交換業者おすすめ2選｜滋賀県の統計で見る東近江市の侵入盗の件数も解説する鍵屋比較";
const DESC =
  "滋賀県東近江市への対応を公式サイトで2026年11月24日に確認できた鍵業者2社（カギ110番・鍵のレスキュー）の料金・受付時間を比較。滋賀県の市町別の刑法犯認知件数（令和7年確定値）から、東近江市の侵入盗が56件から46件に減る一方、刑法犯は562件から671件に増えたことを彦根市・近江八幡市と並べています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/shiga/higashiomi/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  shigaList: "https://www.pref.shiga.lg.jp/cd00/23893.html",
  shigaR7: "https://www.pref.shiga.lg.jp/documents/23893/5592613_1.pdf",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "東近江市の一覧ページに18件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>滋賀県東近江市の鍵屋一覧</Hl>には18件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間受付（東近江市ページの表示）" },
    ],
    area: "公式の「滋賀県東近江市」の鍵屋一覧に、18件の店舗を掲載",
    sources: [
      { label: "カギ110番「東近江市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間受付", area: "東近江市の一覧ページあり" },
  },
  {
    id: "kagi-rescue",
    slug: "kagi-rescue",
    name: "鍵のレスキュー",
    catch: "簡易料金表と出張料を公式に掲載",
    intro: (
      <>
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。東近江市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（東近江市を名指しした案内はなし）",
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
    q: "東近江市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月24日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "鍵の生活救急車は東近江市に来てくれますか？",
    a: "鍵の生活救急車の公式の対応エリア一覧（2026年11月24日確認）では、滋賀県は大津市・草津市・守山市・栗東市・野洲市・竜王町が掲載されており、東近江市は掲載されていませんでした。そのため本記事では掲載していません。依頼を考える場合は、対応できるかを電話で確認してください。",
  },
  {
    q: "東近江市の侵入盗は増えていますか？",
    a: "滋賀県の市町別の刑法犯認知件数（令和7年・確定値）では、東近江市の侵入盗は令和6年の56件から令和7年は46件に減りました。一方で刑法犯の総数は562件から671件に増えています。同じ表の令和7年で、彦根市の侵入盗は48件、近江八幡市は16件でした。",
  },
  {
    q: "賃貸住宅で鍵をなくしたときは、先に何をすればよいですか？",
    a: "賃貸住宅の鍵交換は管理会社・大家の承諾が必要なことが多いため、まず連絡してください。鍵開けだけを頼む場合も、作業前に本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["侵入盗（空き巣・忍込み等）", "46件", "56件", "48件", "16件", "396件"],
  ["非侵入盗", "328件", "286件", "465件", "311件", "4,671件"],
  ["窃盗犯（計）", "374件", "342件", "513件", "327件", "5,067件"],
  ["刑法犯（総数）", "671件", "562件", "839件", "470件", "8,667件"],
];

export default function AreaHigashiomiPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="東近江市"
      pref="滋賀県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["東近江市", "滋賀県", "鍵開け", "鍵交換", "侵入盗", "業者比較"]}
      lead={[
        <>東近江市で鍵をなくした、玄関の鍵を交換したいといったときに、公式サイトで東近江市（または全国）への対応を確認できた鍵業者は2社でした。出張料は出張先の地域により異なるため、依頼の前に総額と対応の可否を確かめてください。</>,
        <>2社の料金・受付時間は2026年11月24日に公式ページで確認しました。後半では、滋賀県が公表している市町別の刑法犯認知件数（令和7年・確定値）から、東近江市の侵入盗を前年と比べ、彦根市・近江八幡市と県全体の数値も加えています。</>,
      ]}
      agents={agents}
      excludedNote={
        <>※鍵の生活救急車は、2026年11月24日に<Ext href={SRC.seikatsuArea}>公式の対応エリア一覧</Ext>を確認した時点で、滋賀県の掲載市町（大津市・草津市・守山市・栗東市・野洲市・竜王町）に東近江市が含まれていなかったため掲載していません。</>
      }
      themeId="toukei"
      themeTitle="滋賀県の統計で見る東近江市の侵入盗（令和7年・確定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            滋賀県の「滋賀の犯罪統計データ」では、市町別の刑法犯認知件数を年ごとにPDFで公表しています。令和7年の表には、令和7年と令和6年の件数が上下に並んでおり、窃盗犯は「侵入盗（空き巣・忍込み等）」と「非侵入盗」に分かれています。東近江市の行と、近隣の彦根市・近江八幡市、県全体の令和7年を抜き出しました。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">東近江市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">東近江市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">彦根市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">近江八幡市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">滋賀県 令和7年</th>
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
            出典：<Ext href={SRC.shigaList}>滋賀県「滋賀の犯罪統計データ」</Ext>の<Ext href={SRC.shigaR7}>「市町別の刑法犯認知件数（令和7年）」</Ext>（{CHECKED}）。表の上段が令和7年、中段が令和6年です。滋賀県の数値は同じ表の「総数」の行で、同ページ本文では令和7年の刑法犯を8,669件（確定値）としています。この表では侵入盗の手口別（空き巣・忍込み・居空き）の内訳は公表されていません。
          </p>
          <p className="leading-loose mb-4">
            東近江市の刑法犯は<Hl>562件から671件</Hl>に増えましたが、<Hl>侵入盗は56件から46件</Hl>に減りました。増えたのは非侵入盗（286件→328件）などです。令和7年の侵入盗46件は、刑法犯の総数が多い彦根市（48件）とほぼ同じで、近江八幡市（16件）の約3倍でした。県全体の侵入盗396件のうち、1割余りが東近江市で起きています。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            侵入盗には住宅のほか、事務所や店舗、倉庫をねらうものも含まれます。住宅では短い外出でも玄関・窓の施錠を確かめ、事業所では終業後の出入口や倉庫の施錠と、鍵を持つ人の管理（退職者の鍵の回収、合鍵の本数の把握）を見直してください。シリンダーを替えずに前の鍵を使えなくする仕組みは<Link href="/change-key-system/" className="text-primary underline">チェンジキーシステムとは</Link>に、補助錠の選び方は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>東近江市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・東近江市の一覧に18件を掲載）と鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円・24時間365日体制）の2社でした。</>,
        <>滋賀県の確定値では、東近江市の侵入盗は令和7年に46件と前年の56件から減りましたが、県全体の1割余りを占めています。住宅・事業所とも施錠と鍵の管理を確かめ、鍵の紛失や不調があれば早めに交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/shiga/", label: "滋賀県の鍵開け・鍵交換業者おすすめ3選" },
        { href: "/area/otsu/", label: "大津市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/kusatsu/", label: "草津市の鍵開け・鍵交換業者おすすめ4選" },
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
