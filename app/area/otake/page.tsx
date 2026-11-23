import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/otake/";
const UPDATED = "2026年11月23日";
const UPDATED_ISO = "2026-11-23";
const CHECKED = "2026年11月23日確認";

const H1 = "【2026年最新】大竹市の鍵開け・鍵交換業者おすすめ3選｜広島県警の統計で見る大竹市の侵入窃盗・住居侵入の件数も解説する鍵屋比較";
const DESC =
  "広島県大竹市への対応を公式サイトで2026年11月23日に確認できた鍵業者3社の料金・受付時間を比較。広島県警察の資料（令和7年12月末）から、大竹市の侵入窃盗・住居侵入・侵入強盗の件数を前年や廿日市市・広島県全体と並べています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/hiroshima/otake/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  police: "https://www.pref.hiroshima.lg.jp/soshiki_file/police/toukei-cwt-10-07.pdf",
  policeHatsukaichi: "https://www.pref.hiroshima.lg.jp/soshiki_file/police/toukei-cwt-12-07.pdf",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "大竹市の一覧ページに8件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>広島県大竹市の鍵屋一覧</Hl>には8件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間受付（大竹市ページの表示）" },
    ],
    area: "公式の「広島県大竹市」の鍵屋一覧に、8件の店舗を掲載",
    sources: [
      { label: "カギ110番「大竹市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間受付", area: "大竹市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>広島県の対応エリアに大竹市</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示する見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（広島県）に大竹市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。大竹市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（大竹市を名指しした案内はなし）",
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
    q: "大竹市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月23日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "大竹市の侵入窃盗は増えていますか？",
    a: "広島県警察の暫定値では、大竹市の侵入窃盗は令和6年・令和7年とも5件でした。住居侵入は0件から3件、侵入強盗は0件から1件と、前年にはなかった件数が計上されています。",
  },
  {
    q: "廿日市市と比べるとどうですか？",
    a: "同じ資料の令和7年で、廿日市市は侵入窃盗23件（前年13件）、住居侵入16件（同8件）でした。刑法犯の総数が大竹市の約3.7倍（385件）の市であり、件数だけで地域の安全性を比べることはできません。",
    link: { href: "/area/hatsukaichi/", label: "廿日市市の鍵開け・鍵交換業者おすすめ4選" },
  },
  {
    q: "賃貸住宅で鍵をなくしたときは、先に何をすればよいですか？",
    a: "賃貸住宅の鍵交換は管理会社・大家の承諾が必要なことが多いため、まず連絡してください。鍵開けだけを頼む場合も、作業前に本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["侵入窃盗", "5件", "5件", "23件", "13件", "561件"],
  ["侵入強盗", "1件", "0件", "0件", "0件", "5件"],
  ["住居侵入", "3件", "0件", "16件", "8件", "298件"],
  ["自転車盗", "6件", "20件", "55件", "78件", "3,513件"],
  ["器物損壊等", "9件", "3件", "32件", "29件", "1,140件"],
  ["刑法犯総数", "105件", "92件", "385件", "407件", "14,735件"],
];

export default function AreaOtakePage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="大竹市"
      pref="広島県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["大竹市", "広島県", "鍵開け", "鍵交換", "侵入窃盗", "業者比較"]}
      lead={[
        <>広島県の西端、山口県岩国市と接する大竹市で、鍵をなくした・玄関の鍵を替えたいというときに、公式サイトで大竹市（または全国）への対応を確認できた鍵業者は3社でした。鍵の生活救急車の広島県の対応エリア一覧（広島市の各区のほか5市4町）にも、大竹市が含まれています。</>,
        <>3社の料金・受付時間は2026年11月23日に公式ページで確認しました。後半では、広島県警察が市町ごとに公表している「犯罪等発生状況（令和7年12月末）」から、大竹市の侵入窃盗などの件数を前年や隣の廿日市市、広島県全体と比べています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="広島県警の統計で見る大竹市の侵入窃盗・住居侵入（令和7年12月末）"
      theme={
        <>
          <p className="leading-loose mb-4">
            広島県警察は、市町ごとに「犯罪等発生状況」を公表し、刑法犯の総数と主な犯罪の件数を前年と並べています。大竹市と、東に隣接する廿日市市の資料から同じ項目を抜き出し、広島県全体の値を加えました。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">大竹市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">大竹市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">廿日市市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">廿日市市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">広島県 令和7年</th>
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
            出典：広島県警察本部<Ext href={SRC.police}>「大竹市の犯罪等発生状況（令和7年12月末）」</Ext>・<Ext href={SRC.policeHatsukaichi}>「廿日市市の犯罪等発生状況（令和7年12月末）」</Ext>（いずれも{CHECKED}）。件数は1〜12月の累計で、広島県の数値は同じ資料の「広島県全体」欄です。資料には「掲載の数値は全て暫定値」と注記されています。空欄は0件として扱いました。この資料では侵入窃盗の手口（空き巣・忍込みなど）の内訳は公表されていません。
          </p>
          <p className="leading-loose mb-4">
            大竹市の侵入窃盗は<Hl>令和6年・令和7年とも5件</Hl>で横ばいでした。一方で、他人の住居などに入る<Hl>住居侵入が0件から3件</Hl>、人のいる建物に入って金品を奪う侵入強盗が0件から1件と、前年にはなかった件数が計上されています。隣の廿日市市では侵入窃盗が13件から23件、住居侵入が8件から16件に増えました。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            刑法犯の総数は92件から105件に増えましたが、自転車盗は20件から6件に減っています。件数の少ない市では数件の差でも増減率が大きく見えるため、1年分の数字だけで傾向を判断することはできません。在宅中も含めて施錠を習慣にし、玄関の錠を2つにする方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>大竹市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・大竹市の一覧に8件を掲載）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>広島県警察の暫定値では、大竹市の侵入窃盗は令和7年に5件と前年と同じでしたが、住居侵入は0件から3件になりました。外出時・就寝前の施錠を確かめ、鍵の不調や紛失があれば早めに交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/hatsukaichi/", label: "廿日市市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/hiroshima/", label: "広島の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/hiroshima-naka/", label: "広島市中区の鍵開け・鍵交換業者おすすめ4選" },
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
