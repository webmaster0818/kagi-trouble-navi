import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/nagahama/";
const UPDATED = "2026年11月25日";
const UPDATED_ISO = "2026-11-25";
const CHECKED = "2026年11月25日確認";

const H1 = "【2026年最新】長浜市の鍵開け・鍵交換業者おすすめ2選｜滋賀県の統計で見る長浜市の侵入盗の件数も解説する鍵屋比較";
const DESC =
  "滋賀県長浜市への対応を公式サイトで2026年11月25日に確認できた鍵業者2社の料金・受付時間を比較。滋賀県の市町別統計（令和8年10月末）から、長浜市の侵入盗が前年同期の37件から73件にほぼ倍増したことを、彦根市・米原市と比べています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/shiga/nagahama/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
  shigaList: "https://www.pref.shiga.lg.jp/cd00/23893.html",
  shigaR8: "https://www.pref.shiga.lg.jp/documents/23893/20261118181350.pdf",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "長浜市の一覧ページに19件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>滋賀県長浜市の鍵屋一覧</Hl>には19件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間受付（長浜市ページの表示）" },
    ],
    area: "公式の「滋賀県長浜市」の鍵屋一覧に、19件の店舗を掲載",
    sources: [
      { label: "カギ110番「長浜市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間受付", area: "長浜市の一覧ページあり" },
  },
  {
    id: "kagi-rescue",
    slug: "kagi-rescue",
    name: "鍵のレスキュー",
    catch: "簡易料金表と出張料を公式に掲載",
    intro: (
      <>
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。長浜市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（長浜市を名指しした案内はなし）",
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
    q: "長浜市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月25日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "鍵の生活救急車は長浜市に来てくれますか？",
    a: "鍵の生活救急車の公式の対応エリア一覧（2026年11月25日確認）では、滋賀県は大津市・草津市・守山市・栗東市・野洲市・竜王町が掲載されており、長浜市は掲載されていませんでした。そのため本記事では掲載していません。依頼を考える場合は、対応できるかを電話で確認してください。",
  },
  {
    q: "長浜市では侵入盗が増えていますか？",
    a: "滋賀県の「市町別の刑法犯認知件数（令和8年10月末）」では、長浜市の侵入盗（空き巣・忍込み等）は73件で、前年同期の37件から36件増えました。刑法犯の総数も553件から729件に増えています。この表では、侵入盗の手口別（空き巣・忍込みなど）の内訳は公表されていません。",
  },
  {
    q: "彦根市・米原市と比べるとどうですか？",
    a: "同じ表の令和8年10月末で、彦根市の侵入盗は31件（前年同期37件）、米原市は13件（同3件）でした。人口や住宅の数が異なるため、件数だけで地域の安全性を比べることはできません。",
  },
  {
    q: "賃貸住宅で鍵をなくしたときは、先に何をすればよいですか？",
    a: "賃貸住宅の鍵交換は管理会社・大家の承諾が必要なことが多いため、まず連絡してください。鍵開けだけを頼む場合も、作業前に本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["侵入盗（空き巣・忍込み等）", "73件", "37件", "31件", "13件", "381件"],
  ["非侵入盗", "387件", "264件", "402件", "73件", "3,872件"],
  ["窃盗犯（総数）", "460件", "301件", "433件", "86件", "4,253件"],
  ["刑法犯（総数）", "729件", "553件", "733件", "159件", "7,782件"],
];

export default function AreaNagahamaPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="長浜市"
      pref="滋賀県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["長浜市", "滋賀県", "鍵開け", "鍵交換", "侵入盗", "業者比較"]}
      lead={[
        <>長浜市で家の鍵をなくした、玄関や勝手口の鍵を替えたいといったときに、公式サイトで長浜市（または全国）への対応を確認できた鍵業者は2社でした。滋賀県の南部の市だけを対応エリアに挙げる業者もあるため、県北部の長浜市では依頼の前に対応できるかを確かめておくと安心です。</>,
        <>2社の料金・受付時間は2026年11月25日に公式ページで確認しました。後半では、滋賀県が公表している「市町別の刑法犯認知件数（令和8年10月末）」から、長浜市の侵入盗の件数を前年同期と比較し、隣接する彦根市・米原市、滋賀県全体と比べています。</>,
      ]}
      agents={agents}
      excludedNote={
        <>※鍵の生活救急車は、2026年11月25日に<Ext href={SRC.seikatsuArea}>公式の対応エリア一覧</Ext>を確認した時点で、滋賀県の対応エリアが大津市・草津市・守山市・栗東市・野洲市・竜王町で、長浜市が含まれていなかったため掲載していません。</>
      }
      themeId="toukei"
      themeTitle="滋賀県の統計で見る長浜市の侵入盗（令和8年10月末）"
      theme={
        <>
          <p className="leading-loose mb-4">
            滋賀県の「滋賀の犯罪統計データ」では、市町別の刑法犯認知件数を毎月PDFで公表しています。令和8年10月末（1〜10月の累計）の表には、令和8年と前年同期（令和7年10月末）の件数が上下に並んでおり、窃盗犯は「侵入盗（空き巣・忍込み等）」と「非侵入盗」に分かれています。長浜市の行と、隣接する彦根市・米原市、県全体の値を抜き出しました。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">長浜市 令和8年10月末</th>
                  <th className="border border-border px-3 py-2 text-left">長浜市 前年同期</th>
                  <th className="border border-border px-3 py-2 text-left">彦根市 令和8年10月末</th>
                  <th className="border border-border px-3 py-2 text-left">米原市 令和8年10月末</th>
                  <th className="border border-border px-3 py-2 text-left">滋賀県 令和8年10月末</th>
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
            出典：<Ext href={SRC.shigaList}>滋賀県「滋賀の犯罪統計データ」</Ext>の<Ext href={SRC.shigaR8}>「市町別の刑法犯認知件数（R8.10月末）」</Ext>（{CHECKED}）。表の上段が令和8年、中段が令和7年（前年同期）、下段が増減です。滋賀県の数値は同じ表の「総数」の行です。この表では侵入盗の手口別（空き巣・忍込み・居空き）の内訳は公表されていません。
          </p>
          <p className="leading-loose mb-4">
            長浜市の侵入盗は、令和8年1月〜10月で73件と、<Hl>前年同期の37件からほぼ倍</Hl>になりました。滋賀県全体の侵入盗は324件から381件への増加で、県内の侵入盗のおよそ5件に1件（約19%、当サイト算出）が長浜市で起きている計算です。隣の彦根市は37件から31件に減っており、刑法犯の総数がほぼ同じ規模（彦根市733件・長浜市729件）でも、侵入盗の件数には2倍以上の差があります。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            刑法犯の総数も553件から729件へと176件増えています。この表では侵入盗の手口別の内訳が分からないため、住宅と事務所・店舗のどちらで増えたのかまでは読み取れません。住宅では、短い外出の間も玄関・勝手口・窓の施錠を確かめ、古い錠は交換を検討してください。玄関の錠を2つにする方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>長浜市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・長浜市の一覧に19件を掲載）と鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円・24時間365日体制）の2社でした。</>,
        <>滋賀県の令和8年10月末の統計では、長浜市の侵入盗は前年同期の37件から73件にほぼ倍増しています。玄関や勝手口の施錠を見直し、鍵の紛失や不調があれば早めに交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/higashiomi/", label: "東近江市の鍵開け・鍵交換業者おすすめ2選" },
        { href: "/area/otsu/", label: "大津の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/shiga/", label: "滋賀県の鍵開け・鍵交換業者おすすめ3選" },
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
