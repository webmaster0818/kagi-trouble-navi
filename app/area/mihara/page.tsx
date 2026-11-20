import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/mihara/";
const UPDATED = "2026年11月21日";
const UPDATED_ISO = "2026-11-21";
const CHECKED = "2026年11月21日確認";

const H1 = "【2026年最新】三原市の鍵開け・鍵交換業者おすすめ2選｜広島県警の統計で見る三原市の侵入窃盗の件数も解説する鍵屋比較";
const DESC =
  "広島県三原市への対応を公式サイトで2026年11月21日に確認できた鍵業者2社（カギ110番・鍵のレスキュー）の料金・受付時間を比較。広島県警察「三原市の犯罪等発生状況（令和7年12月末）」から、三原市の侵入窃盗が18件から24件に増えたことを、呉市・竹原市・広島県全体と比べてまとめています。";


export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/hiroshima/mihara/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  police: "https://www.pref.hiroshima.lg.jp/soshiki_file/police/toukei-cwt-04-07.pdf",
  policeKure: "https://www.pref.hiroshima.lg.jp/soshiki_file/police/toukei-cwt-02-07.pdf",
  policeTakehara: "https://www.pref.hiroshima.lg.jp/soshiki_file/police/toukei-cwt-03-07.pdf",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "三原市の一覧ページに13件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトには<Hl>広島県三原市の鍵屋一覧</Hl>があり、13件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間365日受付（三原市ページの表示）" },
    ],
    area: "公式の「広島県三原市」の鍵屋一覧に、13件の店舗を掲載",
    sources: [
      { label: "カギ110番「三原市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間365日", area: "三原市の一覧ページあり" },
  },
  {
    id: "kagi-rescue",
    slug: "kagi-rescue",
    name: "鍵のレスキュー",
    catch: "簡易料金表と出張料を公式に掲載",
    intro: (
      <>
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。三原市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（三原市を名指しした案内はなし）",
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
    q: "三原市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月21日に確認した公式掲載では、カギ110番が11,000円〜（税込）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。どちらも最低額で、鍵の種類や作業の難しさで総額が変わります。作業に入る前に総額の見積もりを受け取ってください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "鍵の生活救急車は三原市に来てくれますか？",
    a: "鍵の生活救急車の公式の対応エリア一覧（2026年11月21日確認）では、広島県は広島市の各区・呉市・福山市・大竹市・東広島市・廿日市市と安芸郡の4町が掲載されており、三原市は掲載されていませんでした。そのため本記事では掲載していません。依頼を考える場合は、対応できるかを電話で確認してください。",
  },
  {
    q: "三原市の侵入窃盗は増えていますか？",
    a: "広島県警察の「三原市の犯罪等発生状況（令和7年12月末）」では、三原市の侵入窃盗は24件で、令和6年の18件から6件（33.3%）増えました。住居侵入は8件から7件です。広島県全体の侵入窃盗は581件から561件に減っており、県全体とは逆の動きでした。数値は暫定値と注記されています。",
    link: { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口と対策" },
  },
  {
    q: "侵入窃盗と住居侵入はどう違うのですか？",
    a: "侵入窃盗は建物に侵入して物を盗む犯罪で、住宅だけでなく事務所や店舗の被害も含みます。住居侵入は、物を盗んだかどうかにかかわらず、正当な理由なく住居などに入る犯罪です。広島県警察の資料では両方を別の行で集計しています。",
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["侵入窃盗", "24件", "18件", "34件", "5件", "561件"],
  ["住居侵入", "7件", "8件", "20件", "3件", "298件"],
  ["刑法犯（総数）", "396件", "351件", "949件", "66件", "14,735件"],
];

export default function AreaMiharaPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="三原市"
      pref="広島県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["三原市", "広島県", "鍵開け", "鍵交換", "侵入窃盗", "業者比較"]}
      lead={[
        <>広島県三原市で鍵のトラブルが起きたときに頼める業者のうち、公式サイトで三原市（または全国）への出張を確認できたのは2社でした。広島市・福山市を対応エリアに挙げる業者でも、三原市は一覧に載っていない場合があるため、依頼の前に対応できるかを確かめておくと安心です。</>,
        <>本記事では、2社の公式に掲載された料金・受付時間を2026年11月21日に確認して比較しました。後半では、広島県警察が市町ごとに公表している「犯罪等発生状況（令和7年12月末）」から、三原市の侵入窃盗の件数を前年や呉市・竹原市・広島県全体と比べています。</>,
      ]}
      agents={agents}
      excludedNote={
        <>※鍵の生活救急車は、2026年11月21日に<Ext href={SRC.seikatsuArea}>公式の対応エリア一覧</Ext>を確認した時点で、広島県の掲載市町に三原市が含まれていなかったため掲載していません。</>
      }
      themeId="toukei"
      themeTitle="広島県警の統計で見る三原市の侵入窃盗（令和7年12月末・暫定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            広島県警察は、市町ごとの「犯罪等発生状況」を公表し、刑法犯の総数と主な罪種の件数を前年と比べて掲載しています。三原市の令和7年（1〜12月）と令和6年の値を、呉市・竹原市・広島県全体の令和7年と並べると次のとおりです。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">三原市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">三原市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">呉市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">竹原市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">広島県 令和7年</th>
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
            出典：広島県警察本部<Ext href={SRC.police}>「三原市の犯罪等発生状況（令和7年12月末）」</Ext>・<Ext href={SRC.policeKure}>「呉市の犯罪等発生状況（令和7年12月末）」</Ext>・<Ext href={SRC.policeTakehara}>「竹原市の犯罪等発生状況（令和7年12月末）」</Ext>（いずれも{CHECKED}）。広島県の数値は同じ資料の「広島県全体」欄です。資料には「掲載の数値は全て暫定値」と注記されています。
          </p>
          <p className="leading-loose mb-4">
            三原市の侵入窃盗は<Hl>令和6年の18件から令和7年は24件</Hl>に増えました（増加率33.3%）。広島県全体では581件から561件に減っており、呉市も47件から34件に減っているため、三原市の増加は周辺と異なる動きです。刑法犯の総数も351件から396件に増えていますが、その中では自転車盗（63件→113件）の増加が最も大きくなっています。全国では、警察庁によると住宅を対象とした侵入窃盗が令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            件数そのものは多くないため、1年分の増減だけで地域の傾向を判断することはできません。それでも、短時間の外出時や就寝前に施錠を確かめる習慣は有効です。玄関に補助錠を加える方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口と対策は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>三原市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・三原市の一覧に13件を掲載）と鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円・全国出張）の2社でした。鍵の生活救急車は公式の対応エリア一覧に三原市の掲載がありませんでした。</>,
        <>広島県警察の暫定値では、三原市の侵入窃盗は令和7年に24件と前年の18件から増え、県全体の減少とは逆の動きでした。外出時・就寝前の施錠を確認し、鍵の不調や紛失があれば交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/onomichi/", label: "尾道市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/higashihiroshima/", label: "東広島市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/fukuyama/", label: "福山市の鍵開け・鍵交換業者おすすめ4選" },
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
