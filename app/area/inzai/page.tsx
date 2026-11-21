import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/inzai/";
const UPDATED = "2026年11月21日";
const UPDATED_ISO = "2026-11-21";
const CHECKED = "2026年11月21日確認";

const H1 = "【2026年最新】印西市の鍵開け・鍵交換業者おすすめ3選｜千葉県警の統計で見る印西市の忍込みの減少も解説する鍵屋比較";
const DESC =
  "千葉県印西市への対応を公式サイトで2026年11月21日に確認できた鍵業者3社（カギ110番・鍵の生活救急車・鍵のレスキュー）の料金・受付時間を比較。千葉県警察の市町村別統計（令和8年8月末の暫定値）から、印西市の侵入盗が前年同期の67件から24件に、忍込みが33件から5件に減ったことを白井市と並べてまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/chiba/inzai/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
  policeList: "https://www.police.pref.chiba.jp/keisoka/safe-life_crime_statisticsA-06.html",
  policeXlsx: "https://www.police.pref.chiba.jp/content/common/000069822.xlsx",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "印西市の一覧ページに69件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>印西市の鍵屋一覧</Hl>には69件の店舗が掲載されています。自宅の鍵について、公式料金表では<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料が別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間受付（印西市ページの表示）" },
    ],
    area: "公式の「印西市の鍵屋一覧」に、69件の店舗を掲載",
    sources: [
      { label: "カギ110番「印西市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間受付", area: "印西市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>千葉県の対応エリアに印西市</Hl>が掲載されています。標準価格の料金表では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示される見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（千葉県）に印西市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。印西市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（印西市を名指しした案内はなし）",
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
    q: "印西市で鍵開けを依頼した場合、最低いくらかかりますか？",
    a: "2026年11月21日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。鍵の種類や時間帯で総額が変わるため、作業前に見積もりをご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "印西市の侵入盗は減っているのですか？",
    a: "千葉県警察の市町村別の刑法犯認知件数（令和8年8月末の暫定値）では、印西市の侵入盗は24件で、前年同期の67件から43件減りました。減少の大部分は忍込み（33件→5件）で、空き巣は前年同期と同じ5件です。",
  },
  {
    q: "隣の白井市と比べるとどうですか？",
    a: "同じ表の令和8年8月末の値は、白井市が侵入盗6件・空き巣1件・忍込み0件でした。人口規模が異なるため、件数だけで地域の危険度を比べることはできません。",
    link: { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口と対策" },
  },
  {
    q: "賃貸住宅で鍵をなくしたときは、先に業者を呼んでもよいですか？",
    a: "賃貸住宅の鍵交換は管理会社・大家の承諾が必要な場合が多いため、先に連絡してください。鍵開けだけを頼む場合も、作業前に本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string][] = [
  ["侵入盗（合計）", "24件", "67件", "6件", "2,104件"],
  ["空き巣", "5件", "5件", "1件", "548件"],
  ["忍込み", "5件", "33件", "0件", "158件"],
  ["事務所荒し・出店荒し", "2件", "4件", "2件", "198件"],
  ["その他侵入盗", "12件", "25件", "3件", "1,200件"],
  ["刑法犯（総数）", "392件", "541件", "161件", "26,648件"],
];

export default function AreaInzaiPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="印西市"
      pref="千葉県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["印西市", "千葉県", "鍵開け", "鍵交換", "忍込み", "業者比較"]}
      lead={[
        <>印西市で玄関の鍵が開かなくなったときや鍵を紛失したときに、公式サイトで印西市（または全国）への対応を確認できた鍵業者は3社でした。各社の最低料金に加え、夜間の時間外料金や出張料の扱いが異なるため、総額で比べることをおすすめします。</>,
        <>この記事では、3社の公式料金と受付時間を2026年11月21日に確認して比較表にまとめました。あわせて、千葉県警察の市町村別の刑法犯認知件数（令和8年8月末の暫定値）から、印西市の侵入盗の内訳を前年同期と比べ、隣の白井市・千葉県全体と並べています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="千葉県警の統計で見る印西市の侵入盗と忍込み（令和8年8月末・暫定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            千葉県警察が公表している市町村別の刑法犯認知件数（暫定値・前年同期比）から、侵入盗の区分を抜き出しました。印西市は令和8年8月末と前年同期、比較先の白井市と千葉県全体は令和8年8月末の値です。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">印西市 令和8年8月末</th>
                  <th className="border border-border px-3 py-2 text-left">印西市 前年同期</th>
                  <th className="border border-border px-3 py-2 text-left">白井市 令和8年8月末</th>
                  <th className="border border-border px-3 py-2 text-left">千葉県 令和8年8月末</th>
                </tr>
              </thead>
              <tbody>
                {statRows.map(([k, a, b, c, d], i) => (
                  <tr key={k} className={i % 2 === 1 ? "bg-[#F5F8FC]" : "bg-white"}>
                    <th className="border border-border px-3 py-2 whitespace-nowrap bg-[#EAF1F8] text-left font-bold">{k}</th>
                    <td className="border border-border px-3 py-2">{a}</td>
                    <td className="border border-border px-3 py-2">{b}</td>
                    <td className="border border-border px-3 py-2">{c}</td>
                    <td className="border border-border px-3 py-2">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-6 leading-relaxed">
            出典：<Ext href={SRC.policeList}>千葉県警察「県下全体（警察署別・市町村別を一覧表で見る）」</Ext>の<Ext href={SRC.policeXlsx}>市町村別（暫定値・前年同期比）令和８年８月</Ext>（{CHECKED}）。侵入盗（合計）は表の空き巣・忍込み・事務所荒し・出店荒し・その他侵入盗を、「事務所荒し・出店荒し」は2項目を、当サイトで合計した値です。月末の数値は変更される場合があると注記されています。
          </p>
          <p className="leading-loose mb-4">
            印西市の侵入盗は<Hl>前年同期の67件から24件</Hl>と、3分の1ほどに減りました。とくに<Hl>忍込みは33件から5件</Hl>に減っており、千葉県全体でも忍込みは340件から158件に減っています。一方で空き巣は印西市が5件で横ばい、県全体では469件から548件に増えました。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            同じ表では、印西市の刑法犯の総数も541件から392件に減り、自転車盗は160件から123件になりました。件数は減っていますが、空き巣は留守中のわずかな時間をねらうため、短時間の外出でも玄関と窓を施錠することが基本です。玄関の錠を2つにする方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、窓や勝手口の対策は<Link href="/katteguchi-mado-bouhan/" className="text-primary underline">勝手口・窓の防犯</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>印西市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・印西市の一覧に69件）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>千葉県警察の暫定値では、印西市の侵入盗は令和8年8月末で24件と、前年同期の67件から大きく減りました。空き巣は前年同期と同じ5件のため、外出時の施錠を続け、鍵の紛失や不調があれば交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/sakura/", label: "佐倉市の鍵開け・鍵交換業者おすすめ3選" },
        { href: "/area/kashiwa/", label: "柏市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/chiba/", label: "千葉の鍵開け・鍵交換業者おすすめ4選" },
      ]}
      related={[
        { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口と対策" },
        { href: "/katteguchi-mado-bouhan/", label: "勝手口・窓の防犯" },
        { href: "/hojo-jou/", label: "補助錠の選び方" },
        { href: "/kagiya-erabikata/", label: "鍵屋・鍵業者の選び方チェックリスト" },
      ]}
    />
  );
}
