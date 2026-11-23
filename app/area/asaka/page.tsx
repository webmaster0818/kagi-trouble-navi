import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/asaka/";
const UPDATED = "2026年11月22日";
const UPDATED_ISO = "2026-11-22";
const CHECKED = "2026年11月22日確認";

const H1 = "【2026年最新】朝霞市の鍵開け・鍵交換業者おすすめ3選｜埼玉県警の統計で見る朝霞市の空き巣・忍込みの件数も解説する鍵屋比較";
const DESC =
  "埼玉県朝霞市への対応を公式サイトで2026年11月22日に確認できた鍵業者3社（カギ110番・鍵の生活救急車・鍵のレスキュー）の料金・受付時間を比較。埼玉県警察の市町村別統計（令和7年・確定値）から、朝霞市の空き巣・忍込み・居空きが14件から11件に減ったことを和光市・志木市と並べてまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/saitama/asaka/",
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
    catch: "朝霞市の一覧ページに74件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>埼玉県朝霞市の鍵屋一覧</Hl>には74件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間365日受付（朝霞市ページの表示）" },
    ],
    area: "公式の「埼玉県朝霞市」の鍵屋一覧に、74件の店舗を掲載",
    sources: [
      { label: "カギ110番「朝霞市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間365日", area: "朝霞市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>埼玉県の対応エリアに朝霞市</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示する見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（埼玉県）に朝霞市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。朝霞市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（朝霞市を名指しした案内はなし）",
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
    q: "朝霞市で鍵交換を頼むと、いくらかかりますか？",
    a: "2026年11月22日に確認した公式の料金表では、カギ110番の自宅の鍵交換が14,300円〜（税込・部材費込）、鍵の生活救急車のシリンダー交換が11,000円＋部品代、鍵のレスキューの鍵交換が6,600円〜（税込・部材費別、別に出張料4,400〜8,800円）です。部材費の扱いが各社で異なるため、見積もりで総額を比べてください。",
    link: { href: "/genkan-kagi-koukan-dokoni/", label: "玄関の鍵交換はどこに頼むか" },
  },
  {
    q: "朝霞市の空き巣は増えていますか？",
    a: "埼玉県警察の市町村別の刑法犯認知件数（令和7年・確定値）では、朝霞市の空き巣は8件で、令和6年の11件から減りました。忍込みは3件から2件、居空きは0件から1件で、3つの合計は14件から11件です。",
  },
  {
    q: "和光市・志木市と比べるとどうですか？",
    a: "同じ表の令和7年で、和光市は空き巣3件・忍込み1件（合計4件）、志木市は空き巣5件・忍込み3件（合計8件）でした。朝霞市（11件）は3市の中で最も多いものの、前年からは減っています。",
    link: { href: "/area/niiza/", label: "新座市の鍵開け・鍵交換業者おすすめ3選" },
  },
  {
    q: "賃貸住宅で鍵をなくしたときは、先に何をすればよいですか？",
    a: "賃貸住宅の鍵交換は管理会社・大家の承諾が必要なことが多いため、まず連絡してください。鍵開けだけを頼む場合も、作業前に本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["空き巣", "8件", "11件", "3件", "5件", "1,063件"],
  ["忍込み", "2件", "3件", "1件", "3件", "652件"],
  ["居空き", "1件", "0件", "0件", "0件", "35件"],
  ["3つの合計", "11件", "14件", "4件", "8件", "1,750件"],
  ["刑法犯（総数）", "969件", "1,012件", "445件", "434件", "53,471件"],
];

export default function AreaAsakaPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="朝霞市"
      pref="埼玉県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["朝霞市", "埼玉県", "鍵開け", "鍵交換", "空き巣", "業者比較"]}
      lead={[
        <>埼玉県朝霞市で鍵開けや鍵交換を頼める業者のうち、公式サイトで朝霞市（または全国）への対応を確認できたのは出張型の3社です。料金表の最低額に加え、夜間料金や出張料の扱いを比べておくと、急な依頼でも判断しやすくなります。</>,
        <>各社の料金・受付時間は、公式ページを2026年11月22日に確認しました。後半では、埼玉県警察の市町村別の刑法犯認知件数（令和7年・確定値）から朝霞市の空き巣・忍込み・居空きの件数を前年と比べ、隣接する和光市・志木市と並べています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="埼玉県警の統計で見る朝霞市の空き巣・忍込み（令和7年・確定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            埼玉県警察は、刑法犯の認知件数を市町村別・罪種別に公表しています。この表から空き巣・忍込み・居空き（住宅対象侵入窃盗）を抜き出し、朝霞市の令和7年・令和6年に、隣接する和光市・志木市と埼玉県全体の令和7年を加えました。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">朝霞市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">朝霞市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">和光市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">志木市 令和7年</th>
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
            朝霞市の空き巣・忍込み・居空きの合計は<Hl>令和6年の14件から令和7年は11件</Hl>に減りました。空き巣が11件から8件、忍込みが3件から2件に減り、居空きは0件から1件です。刑法犯の総数も1,012件から969件に減っています。埼玉県全体では忍込みが360件から652件へとほぼ倍増しているなかで、朝霞市では増えていません。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）でした（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            隣の和光市は合計4件、志木市は8件で、朝霞市はこの3市の中では件数が最も多い結果でした。ただし人口や世帯数が異なるため、件数だけで比べることはできません。在宅中でも玄関を施錠しておくこと（居空きへの備え）と、外出時の窓の施錠が基本の対策です。補助錠については<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>朝霞市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・朝霞市の一覧に74件を掲載）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>埼玉県警察の確定値では、朝霞市の空き巣・忍込み・居空きの合計は令和7年に11件で、前年の14件から減りました。在宅中・外出中ともに施錠を確かめ、鍵の紛失や不調があれば早めに交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/niiza/", label: "新座市の鍵開け・鍵交換業者おすすめ3選" },
        { href: "/area/toda/", label: "戸田市の鍵開け・鍵交換業者おすすめ3選" },
        { href: "/area/nerima-ku/", label: "練馬区の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/shiki/", label: "志木市の鍵開け・鍵交換業者おすすめ3選" },
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
