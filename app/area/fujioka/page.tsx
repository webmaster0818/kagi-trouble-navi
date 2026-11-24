import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/fujioka/";
const UPDATED = "2026年11月25日";
const UPDATED_ISO = "2026-11-25";
const CHECKED = "2026年11月25日確認";

const H1 = "【2026年最新】藤岡市の鍵開け・鍵交換業者おすすめ3選｜群馬県警の統計で見る藤岡市の空き巣・忍込みの件数も解説する鍵屋比較";
const DESC =
  "群馬県藤岡市への対応を公式サイトで2026年11月25日に確認できた鍵業者3社の料金・受付時間を比較。群馬県警察の市町村別統計から、藤岡市の空き巣が令和6年の25件から令和7年は13件に減る一方、忍込みが5件から10件に増えたことを、高崎市・富岡市と並べています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/gumma/fujioka/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
  policeCity: "https://www.pref.gunma.jp/uploaded/attachment/690383.pdf",
  policePref: "https://www.pref.gunma.jp/uploaded/attachment/690382.pdf",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "藤岡市の一覧ページに34件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>群馬県藤岡市の鍵屋一覧</Hl>には34件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間受付（藤岡市ページの表示）" },
    ],
    area: "公式の「群馬県藤岡市」の鍵屋一覧に、34件の店舗を掲載",
    sources: [
      { label: "カギ110番「藤岡市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間受付", area: "藤岡市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>群馬県の対応エリアに藤岡市</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示する見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（群馬県）に藤岡市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。藤岡市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（藤岡市を名指しした案内はなし）",
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
    q: "藤岡市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月25日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "藤岡市では空き巣が増えていますか？",
    a: "群馬県警察の市町村別刑法犯認知件数（令和7年12月末現在）では、藤岡市の空き巣は13件で、令和6年の25件から12件減りました。一方、夜間などに家人が寝ている間に侵入する忍込みは5件から10件に増えています。居空きは3件から1件です。",
  },
  {
    q: "高崎市・富岡市と比べるとどうですか？",
    a: "同じ資料の令和7年で、高崎市の空き巣・忍込み・居空きの合計は88件、富岡市は11件でした。人口や住宅の数が異なるため、件数だけで地域の安全性を比べることはできません。",
    link: { href: "/area/takasaki/", label: "高崎市の鍵開け・鍵交換業者おすすめ4選" },
  },
  {
    q: "賃貸住宅で鍵をなくしたときは、先に何をすればよいですか？",
    a: "賃貸住宅の鍵交換は管理会社・大家の承諾が必要なことが多いため、まず連絡してください。鍵開けだけを頼む場合も、作業前に本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["空き巣", "13件", "25件", "37件", "6件", "660件"],
  ["忍込み", "10件", "5件", "49件", "5件", "313件"],
  ["居空き", "1件", "3件", "2件", "0件", "27件"],
  ["住宅を狙う3手口の合計", "24件", "33件", "88件", "11件", "1,000件"],
  ["刑法犯総数", "404件", "474件", "2,567件", "246件", "15,283件"],
];

export default function AreaFujiokaPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="藤岡市"
      pref="群馬県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["藤岡市", "群馬県", "鍵開け", "鍵交換", "忍込み", "業者比較"]}
      lead={[
        <>藤岡市で家の鍵をなくした、玄関や倉庫の鍵を替えたいといったときに、公式サイトで藤岡市（または全国）への対応を確認できた鍵業者は3社でした。料金表の最低額と、夜間の時間外料金・出張料を比べています。</>,
        <>3社の料金・受付時間は2026年11月25日に公式ページで確認しました。後半では、群馬県警察が公表している市町村別の刑法犯認知件数（令和7年12月末現在）から、藤岡市の空き巣・忍込み・居空きの件数を、隣接する高崎市・富岡市、群馬県全体と比べています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="群馬県警の統計で見る藤岡市の空き巣と忍込み（令和7年）"
      theme={
        <>
          <p className="leading-loose mb-4">
            群馬県警察は、市町村別の刑法犯認知件数を、令和7年と令和6年の値と増減を並べた表で公表しています。この表から、住宅を狙う空き巣・忍込み・居空きと刑法犯の総数を、藤岡市と隣接する高崎市・富岡市、群馬県全体について抜き出しました。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">藤岡市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">藤岡市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">高崎市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">富岡市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">群馬県 令和7年</th>
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
            出典：群馬県警察<Ext href={SRC.policeCity}>「市町村別刑法犯認知件数（令和7年12月末現在）」</Ext>、群馬県の数値は<Ext href={SRC.policePref}>「刑法犯の主な手口等の認知・検挙状況（累計）」</Ext>（いずれも群馬県ホームページ掲載のPDF、{CHECKED}）。表の空欄は0件として扱い、「住宅を狙う3手口の合計」は当サイトが空き巣・忍込み・居空きを足して算出しました（群馬県の1,000件は資料の「住宅対象侵入窃盗」と一致）。
          </p>
          <p className="leading-loose mb-4">
            藤岡市の刑法犯の総数は、令和6年の474件から令和7年は<Hl>404件と70件減りました</Hl>。住宅を狙う3つの手口も33件から24件に減り、とくに空き巣は25件から13件とほぼ半分です。ただし、<Hl>忍込みは5件から10件と2倍</Hl>になりました。群馬県全体でも忍込みは184件から313件（約70%増）と大きく増えています。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            忍込みは、夜間に家人が寝ている間に侵入する手口です。就寝前に玄関だけでなく、勝手口・1階の窓・浴室の窓の施錠を確かめる習慣をつけると安心です。窓や勝手口の補助錠は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>藤岡市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・藤岡市の一覧に34件を掲載）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>群馬県警察の令和7年の統計では、藤岡市の空き巣は25件から13件に減りましたが、忍込みは5件から10件に増えました。就寝前の施錠を見直し、鍵の紛失や不調があれば早めに交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/takasaki/", label: "高崎市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/isesaki/", label: "伊勢崎市の鍵開け・鍵交換業者おすすめ3選" },
        { href: "/area/gunma/", label: "群馬県の鍵開け・鍵交換業者おすすめ3選" },
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
