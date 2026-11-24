import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/toyooka/";
const UPDATED = "2026年11月25日";
const UPDATED_ISO = "2026-11-25";
const CHECKED = "2026年11月25日確認";

const H1 = "【2026年最新】豊岡市の鍵開け・鍵交換業者おすすめ2選｜兵庫県警の統計で見る豊岡市の空き巣・車上ねらいの件数も解説する鍵屋比較";
const DESC =
  "兵庫県豊岡市への対応を公式サイトで2026年11月25日に確認できた鍵業者2社の料金・受付時間を比較。兵庫県警察の市区町別統計（令和8年9月末・暫定値）から、豊岡市の空き巣が前年同期の7件から0件になった一方、車上ねらいが5件から8件に増えたことを、養父市・香美町と並べています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/hyogo/toyooka/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
  police: "https://www.police.pref.hyogo.lg.jp/seikatu/gaitou/statis/index.htm",
  policePdf: "https://www.police.pref.hyogo.lg.jp/seikatu/gaitou/statis/data/tajima.pdf",
  policeAll: "https://www.police.pref.hyogo.lg.jp/seikatu/gaitou/statis/data/all.pdf",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "豊岡市の一覧ページに19件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>兵庫県豊岡市の鍵屋一覧</Hl>には19件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間受付（豊岡市ページの表示）" },
    ],
    area: "公式の「兵庫県豊岡市」の鍵屋一覧に、19件の店舗を掲載",
    sources: [
      { label: "カギ110番「豊岡市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間受付", area: "豊岡市の一覧ページあり" },
  },
  {
    id: "kagi-rescue",
    slug: "kagi-rescue",
    name: "鍵のレスキュー",
    catch: "簡易料金表と出張料を公式に掲載",
    intro: (
      <>
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。豊岡市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（豊岡市を名指しした案内はなし）",
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
    q: "豊岡市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月25日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "鍵の生活救急車は豊岡市に来てくれますか？",
    a: "鍵の生活救急車の公式の対応エリア一覧（2026年11月25日確認）では、兵庫県は神戸市の各区と、姫路市・尼崎市・明石市・西宮市・加古川市・三田市・加東市など一部の市町が掲載されており、豊岡市は掲載されていませんでした。そのため本記事では掲載していません。依頼を考える場合は、対応できるかを電話で確認してください。",
  },
  {
    q: "豊岡市では空き巣が増えていますか？",
    a: "兵庫県警察の市区町別の主な刑法犯認知状況（令和8年9月末・暫定値）では、豊岡市の空き巣は0件で、前年同期の7件から減っています。忍込みは2年とも1件でした。一方、車上ねらいは5件から8件、自転車盗は13件から19件に増えています。",
  },
  {
    q: "養父市・香美町と比べるとどうですか？",
    a: "同じ資料の令和8年9月末で、養父市の刑法犯総数は55件（空き巣・忍込みは0件）、香美町は21件（空き巣1件）でした。人口や住宅の数が異なるため、件数だけで地域の安全性を比べることはできません。",
  },
  {
    q: "賃貸住宅で鍵をなくしたときは、先に何をすればよいですか？",
    a: "賃貸住宅の鍵交換は管理会社・大家の承諾が必要なことが多いため、まず連絡してください。鍵開けだけを頼む場合も、作業前に本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["空き巣", "0件", "7件", "0件", "1件", "230件"],
  ["忍込み", "1件", "1件", "0件", "0件", "59件"],
  ["事務所荒し", "0件", "0件", "0件", "0件", "70件"],
  ["出店荒し", "0件", "0件", "0件", "0件", "101件"],
  ["車上ねらい", "8件", "5件", "0件", "0件", "716件"],
  ["自転車盗", "19件", "13件", "2件", "0件", "5,835件"],
  ["刑法犯総数", "251件", "246件", "55件", "21件", "29,784件"],
];

export default function AreaToyookaPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="豊岡市"
      pref="兵庫県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["豊岡市", "兵庫県", "鍵開け", "鍵交換", "車上ねらい", "業者比較"]}
      lead={[
        <>豊岡市で家の鍵をなくした、車や倉庫の鍵が開かないといったときに、公式サイトで豊岡市（または全国）への対応を確認できた鍵業者は2社でした。神戸・阪神・播磨の市町を対応エリアに挙げる業者でも、但馬地域の豊岡市は一覧に載っていないことがあるため、依頼の前に対応できるかを確かめておくと安心です。</>,
        <>2社の料金・受付時間は2026年11月25日に公式ページで確認しました。後半では、兵庫県警察の「地域の犯罪情勢」に載っている市区町別の数値（令和8年9月末・暫定値）から、豊岡市の空き巣・忍込みや車上ねらいの件数を、隣接する養父市・香美町、兵庫県全体と比べています。</>,
      ]}
      agents={agents}
      excludedNote={
        <>※鍵の生活救急車は、2026年11月25日に<Ext href={SRC.seikatsuArea}>公式の対応エリア一覧</Ext>を確認した時点で、兵庫県の掲載市町に豊岡市が含まれていなかったため掲載していません。</>
      }
      themeId="toukei"
      themeTitle="兵庫県警の統計で見る豊岡市の空き巣と車上ねらい（令和8年9月末・暫定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            兵庫県警察は「地域の犯罪情勢」として、市区町ごとに主な刑法犯の認知件数を前年同期と並べた資料を公表しています。但馬地域の資料から、豊岡市の空き巣・忍込み・事務所荒し・出店荒しと車上ねらい・自転車盗を抜き出し、隣接する養父市・香美町と、兵庫県全体の令和8年9月末の値を加えました。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">豊岡市 令和8年9月末</th>
                  <th className="border border-border px-3 py-2 text-left">豊岡市 令和7年9月末</th>
                  <th className="border border-border px-3 py-2 text-left">養父市 令和8年9月末</th>
                  <th className="border border-border px-3 py-2 text-left">香美町 令和8年9月末</th>
                  <th className="border border-border px-3 py-2 text-left">兵庫県 令和8年9月末</th>
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
            出典：<Ext href={SRC.police}>兵庫県警察「地域の犯罪情勢（市区町別刑法犯認知状況）」</Ext>の<Ext href={SRC.policePdf}>但馬地域（市・町別）</Ext>、兵庫県の値は<Ext href={SRC.policeAll}>兵庫県下</Ext>（令和8年9月末・暫定値、{CHECKED}）。件数は1月からの累計です。この資料には居空きの欄がないため、表にも載せていません。
          </p>
          <p className="leading-loose mb-4">
            豊岡市の刑法犯の総数は、令和8年9月末で251件と<Hl>前年同期（246件）とほぼ同じ</Hl>でした。住宅をねらう空き巣は<Hl>7件から0件</Hl>に減り、忍込みは2年とも1件です。その一方で、車上ねらいは5件から8件、自転車盗は13件から19件に増えています。暫定値のため、年末の累計や確定値では数字が変わる可能性があります。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            車上ねらいは、短時間の駐車でもドアの施錠を忘れたときや、車内に荷物が見えているときに起こりやすい被害です。車を離れるときは必ず施錠し、貴重品を車内に置かないようにしてください。車の鍵をなくしたときに必要な書類は<Link href="/kuruma-spare-key/" className="text-primary underline">車のスペアキーの注文と必要な書類</Link>に、住宅の補助錠は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>豊岡市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・豊岡市の一覧に19件を掲載）と鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円・24時間365日体制）の2社でした。</>,
        <>兵庫県警察の令和8年9月末の暫定値では、豊岡市の空き巣は前年同期の7件から0件に減りましたが、車上ねらいは5件から8件に増えました。住宅と車の施錠を見直し、鍵の紛失や不調があれば早めにご相談ください。</>,
      ]}
      nearby={[
        { href: "/area/himeji/", label: "姫路市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/sanda/", label: "三田市の鍵開け・鍵交換業者おすすめ4選" },
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
