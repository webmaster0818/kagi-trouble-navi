import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/osaka-nishi/";
const UPDATED = "2026年11月23日";
const UPDATED_ISO = "2026-11-23";
const CHECKED = "2026年11月23日確認";

const H1 = "【2026年最新】大阪市西区の鍵開け・鍵交換業者おすすめ3選｜大阪府警の統計で見る西区の空き巣・出店荒しの件数も解説する鍵屋比較";
const DESC =
  "大阪市西区への対応を公式サイトで2026年11月23日に確認できた鍵業者3社の料金・受付時間を比較。大阪府警察の確定値から、西区の空き巣が9件から4件に減る一方、店舗をねらう出店荒しが4件から10件に増えたことを中央区・港区と並べています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/osaka/osaka/nishi/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  policeR7: "https://www.police.pref.osaka.lg.jp/seikatsu/hanzai/23306.html",
  policeR7Xlsx: "https://www.police.pref.osaka.lg.jp/material/files/group/2/hanzaitokei09_r07.xlsx",
  policeR6: "https://www.police.pref.osaka.lg.jp/seikatsu/hanzai/17666.html",
  policeR6Pdf: "https://www.police.pref.osaka.lg.jp/material/files/group/2/r06_hanzaitokei09.pdf",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "大阪市西区の一覧ページに57件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>大阪府大阪市西区の鍵屋一覧</Hl>には57件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間受付（大阪市西区ページの表示）" },
    ],
    area: "公式の「大阪府大阪市西区」の鍵屋一覧に、57件の店舗を掲載",
    sources: [
      { label: "カギ110番「大阪市西区の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間受付", area: "大阪市西区の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>大阪府の対応エリアに大阪市西区</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示する見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（大阪府）に大阪市西区を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。大阪市西区を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（大阪市西区を名指しした案内はなし）",
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
    q: "大阪市西区で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月23日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "大阪市西区では空き巣が増えていますか？",
    a: "大阪府警察の確定値では、西区の空き巣は令和6年の9件から令和7年は4件に減りました。一方、店舗をねらう出店荒しは4件から10件に増え、住宅以外も含む侵入窃盗の全体は16件から19件になっています。",
  },
  {
    q: "店舗の鍵を替えたいときも、同じ業者に頼めますか？",
    a: "カギ110番の公式料金表に載っている金額は「ご自宅に関する鍵のトラブル」の料金です。店舗・事務所の錠は種類が多いため、依頼前に錠の種類と作業内容を伝え、作業前の見積もりで総額を確認してください。",
    link: { href: "/tenpo-office-kagi-kanri/", label: "店舗・オフィスの鍵管理" },
  },
  {
    q: "賃貸住宅で鍵をなくしたときは、先に何をすればよいですか？",
    a: "賃貸住宅の鍵交換は管理会社・大家の承諾が必要なことが多いため、まず連絡してください。鍵開けだけを頼む場合も、作業前に本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["空き巣", "4件", "9件", "28件", "7件", "452件"],
  ["忍込み", "1件", "0件", "1件", "0件", "142件"],
  ["居空き", "0件", "0件", "0件", "0件", "30件"],
  ["事務所荒し", "2件", "2件", "5件", "3件", "153件"],
  ["出店荒し", "10件", "4件", "57件", "2件", "285件"],
  ["侵入窃盗の全体", "19件", "16件", "119件", "15件", "1,725件"],
  ["刑法犯（総数）", "1,621件", "1,546件", "6,162件", "828件", "83,896件"],
];

export default function AreaOsakaNishiPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="大阪市西区"
      pref="大阪府"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["大阪市西区", "大阪府", "鍵開け", "鍵交換", "出店荒し", "業者比較"]}
      lead={[
        <>肥後橋・阿波座・西長堀周辺など、マンションと店舗・事務所が多い大阪市西区で、自宅や店舗の鍵をなくした・替えたいというときに、公式サイトで西区（または全国）への対応を確認できた鍵業者は3社でした。料金表の最低額と、夜間料金・出張料の扱いを並べています。</>,
        <>3社の料金・受付時間は2026年11月23日に公式ページで確認しました。後半では、大阪府警察の犯罪統計（令和7年・令和6年の確定値）から西区の侵入窃盗を手口別に取り出し、隣接する中央区・港区、大阪府全体と比べています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="大阪府警の統計で見る大阪市西区の空き巣・出店荒し（令和7年・確定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            大阪府警察は、年ごとの犯罪統計（確定値）に、刑法犯の認知件数を市区町村別・手口別にまとめた表を載せています。令和7年と令和6年の表から西区の侵入窃盗を手口別に抜き出し、隣接する中央区・港区と大阪府内計（いずれも令和7年）を加えました。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">西区 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">西区 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">中央区 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">港区 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">大阪府 令和7年</th>
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
            出典：<Ext href={SRC.policeR7}>大阪府警察「令和7年中の犯罪統計（確定値）」</Ext>の<Ext href={SRC.policeR7Xlsx}>「9 刑法犯罪種及び手口別発生市区町村別認知件数」</Ext>、<Ext href={SRC.policeR6}>同「令和6年中の犯罪統計（確定値）」</Ext>の<Ext href={SRC.policeR6Pdf}>同じ表</Ext>（いずれも{CHECKED}）。表の「-」は0件として扱いました。大阪府の数値は同じ表の「大阪府内計」の行です。「侵入窃盗の全体」には、表に載せていない手口（倉庫荒しなど）も含まれます。
          </p>
          <p className="leading-loose mb-4">
            西区の侵入窃盗は<Hl>16件から19件</Hl>に増えましたが、手口別に見ると動きは分かれています。住宅をねらう<Hl>空き巣は9件から4件</Hl>に減った一方、営業時間外の店舗に入る<Hl>出店荒しが4件から10件</Hl>に増え、侵入窃盗の半数を占めました。隣の中央区でも出店荒しは39件から57件に増えており、繁華街に近い区で店舗の被害が目立ちます（中央区の令和6年の値は同じ表から確認）。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            店舗や事務所では、閉店後の出入口・裏口の施錠と、錠を防犯性の高いものに替えることが対策になります。住宅でも、玄関の錠を2つにする方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。件数は年ごとに変わるため、1年分の数字だけで地域の安全性を判断することはできません。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>大阪市西区への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・大阪市西区の一覧に57件を掲載）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>大阪府警察の確定値では、西区の空き巣は令和7年に4件と前年の9件から減りましたが、出店荒しは4件から10件に増えました。自宅・店舗とも施錠を確かめ、鍵の紛失や不調があれば早めに交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/osaka-minato/", label: "大阪市港区の鍵開け・鍵交換業者おすすめ3選" },
        { href: "/area/osaka-chuo/", label: "大阪市中央区の鍵開け・鍵交換業者おすすめ5選" },
        { href: "/area/osaka-kita/", label: "大阪市北区の鍵開け・鍵交換業者おすすめ5選" },
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
