import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/takasago/";
const UPDATED = "2026年11月25日";
const UPDATED_ISO = "2026-11-25";
const CHECKED = "2026年11月25日確認";

const H1 = "【2026年最新】高砂市の鍵開け・鍵交換業者おすすめ3選｜兵庫県警の統計で見る高砂市の刑法犯・空き巣の件数も解説する鍵屋比較";
const DESC =
  "兵庫県高砂市への対応を公式サイトで2026年11月25日に確認できた鍵業者3社の料金・受付時間を比較。兵庫県警察の令和8年9月末の暫定値から、高砂市の刑法犯が前年同期の386件から460件に増えたことや、空き巣・忍込みの件数を加古川市・明石市と比べています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/hyogo/takasago/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
  police: "https://www.police.pref.hyogo.lg.jp/seikatu/gaitou/statis/index.htm",
  policePdf: "https://www.police.pref.hyogo.lg.jp/seikatu/gaitou/statis/data/touban.pdf",
  policeAll: "https://www.police.pref.hyogo.lg.jp/seikatu/gaitou/statis/data/all.pdf",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "高砂市の一覧ページに20件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>兵庫県高砂市の鍵屋一覧</Hl>には20件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間受付（高砂市ページの表示）" },
    ],
    area: "公式の「兵庫県高砂市」の鍵屋一覧に、20件の店舗を掲載",
    sources: [
      { label: "カギ110番「高砂市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間受付", area: "高砂市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>兵庫県の対応エリアに高砂市</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示する見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（兵庫県）に高砂市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。高砂市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（高砂市を名指しした案内はなし）",
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
    q: "高砂市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月25日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "高砂市では空き巣が増えていますか？",
    a: "兵庫県警察の令和8年9月末の暫定値では、高砂市の空き巣は4件で、前年同期の5件から1件減りました。忍込みは1件から3件に増えています。事務所荒しは2件から0件でした。",
  },
  {
    q: "加古川市・明石市と比べるとどうですか？",
    a: "同じ資料の令和8年9月末で、加古川市の空き巣は6件・忍込みは1件、明石市は空き巣12件・忍込み6件でした。人口や住宅の数が異なるため、件数だけで地域の安全性を比べることはできません。",
    link: { href: "/area/kakogawa/", label: "加古川市の鍵開け・鍵交換業者おすすめ4選" },
  },
  {
    q: "賃貸住宅で鍵をなくしたときは、先に何をすればよいですか？",
    a: "賃貸住宅の鍵交換は管理会社・大家の承諾が必要なことが多いため、まず連絡してください。鍵開けだけを頼む場合も、作業前に本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["空き巣", "4件", "5件", "6件", "12件", "230件"],
  ["忍込み", "3件", "1件", "1件", "6件", "59件"],
  ["事務所荒し", "0件", "2件", "2件", "3件", "70件"],
  ["出店荒し", "0件", "0件", "2件", "3件", "101件"],
  ["自転車盗", "131件", "113件", "384件", "352件", "5,835件"],
  ["刑法犯（総数）", "460件", "386件", "1,292件", "1,615件", "29,784件"],
];

export default function AreaTakasagoPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="高砂市"
      pref="兵庫県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["高砂市", "兵庫県", "鍵開け", "鍵交換", "空き巣", "業者比較"]}
      lead={[
        <>高砂市で家の鍵をなくした、玄関や勝手口の鍵を替えたいといったときに、公式サイトで高砂市（または全国）への対応を確認できた鍵業者は3社でした。料金表の最低額と、夜間の時間外料金・出張料を比べています。</>,
        <>3社の料金・受付時間は2026年11月25日に公式ページで確認しました。後半では、兵庫県警察の「地域の犯罪情勢（市区町別刑法犯認知状況）」（令和8年9月末・暫定値）から、高砂市の刑法犯と空き巣・忍込みなどの件数を前年同期と比較し、隣接する加古川市、近くの明石市、兵庫県全体と比べています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="兵庫県警の統計で見る高砂市の刑法犯と空き巣（令和8年9月末・暫定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            兵庫県警察は、主な刑法犯の認知件数を市区町別にまとめ、前年同期と並べたPDFを地域ごとに公開しています。東播地域の資料から高砂市と加古川市・明石市の行を、県全体は「兵庫県下」の資料から抜き出しました。件数は令和8年1月から9月末までの累計です。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">高砂市 令和8年9月末</th>
                  <th className="border border-border px-3 py-2 text-left">高砂市 前年同期</th>
                  <th className="border border-border px-3 py-2 text-left">加古川市 令和8年9月末</th>
                  <th className="border border-border px-3 py-2 text-left">明石市 令和8年9月末</th>
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
            出典：<Ext href={SRC.police}>兵庫県警察「地域の犯罪情勢（市区町別刑法犯認知状況）」</Ext>の<Ext href={SRC.policePdf}>東播地域（市・町別）</Ext>、兵庫県の値は<Ext href={SRC.policeAll}>兵庫県下</Ext>（令和8年9月末・暫定値、{CHECKED}）。件数は1月からの累計です。この資料には居空きの欄がないため、表にも含めていません。
          </p>
          <p className="leading-loose mb-4">
            高砂市の刑法犯の総数は、令和8年9月末で460件と、<Hl>前年同期（386件）より74件、約19%（当サイト算出）増えました</Hl>。兵庫県全体は29,682件から29,784件とほぼ横ばいで、隣の加古川市は1,320件から1,292件に減っているため、増え方の大きさが目立ちます。資料の項目では、自転車盗が113件から131件に増えています。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            住宅をねらう手口では、空き巣が5件から4件に減った一方、住人が寝ている間などに入る<Hl>忍込みが1件から3件</Hl>に増えました。件数としては少ないものの、暫定値のため年末までの累計や確定値では数字が変わる可能性があります。就寝前も玄関と窓の施錠を確かめることが基本で、玄関の錠を2つにする方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>高砂市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・高砂市の一覧に20件を掲載）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>兵庫県警察の令和8年9月末の暫定値では、高砂市の刑法犯は前年同期の386件から460件に増え、忍込みは1件から3件になりました。就寝前の施錠を見直し、鍵の紛失や不調があれば早めに交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/kakogawa/", label: "加古川市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/himeji/", label: "姫路市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/akashi/", label: "明石市の鍵開け・鍵交換業者おすすめ4選" },
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
