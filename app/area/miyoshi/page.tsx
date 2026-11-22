import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/miyoshi/";
const UPDATED = "2026年11月23日";
const UPDATED_ISO = "2026-11-23";
const CHECKED = "2026年11月23日確認";

const H1 = "【2026年最新】三次市の鍵開け・鍵交換業者おすすめ2選｜広島県警の統計で見る三次市の侵入窃盗の件数も解説する鍵屋比較";
const DESC =
  "広島県三次市への出張を公式サイトで2026年11月23日に確認できた鍵業者2社（カギ110番・鍵のレスキュー）の料金・受付時間を比較。広島県警察の資料から、三次市の侵入窃盗が令和6年の2件から令和7年は9件に増えたことを庄原市・広島県全体と並べています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/hiroshima/miyoshi/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  police: "https://www.pref.hiroshima.lg.jp/soshiki_file/police/toukei-cwt-08-07.pdf",
  policeShobara: "https://www.pref.hiroshima.lg.jp/soshiki_file/police/toukei-cwt-09-07.pdf",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "三次市の一覧ページに7件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>広島県三次市の鍵屋一覧</Hl>には7件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間受付（三次市ページの表示）" },
    ],
    area: "公式の「広島県三次市」の鍵屋一覧に、7件の店舗を掲載",
    sources: [
      { label: "カギ110番「三次市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間受付", area: "三次市の一覧ページあり" },
  },
  {
    id: "kagi-rescue",
    slug: "kagi-rescue",
    name: "鍵のレスキュー",
    catch: "簡易料金表と出張料を公式に掲載",
    intro: (
      <>
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。三次市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（三次市を名指しした案内はなし）",
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
    q: "三次市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月23日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "鍵の生活救急車は三次市に来てくれますか？",
    a: "鍵の生活救急車の公式の対応エリア一覧（2026年11月23日確認）では、広島県は広島市の各区・呉市・福山市・大竹市・東広島市・廿日市市と安芸郡の4町が掲載されており、三次市は掲載されていませんでした。そのため本記事では掲載していません。依頼を考える場合は、対応できるかを電話で確認してください。",
  },
  {
    q: "三次市の侵入窃盗は増えていますか？",
    a: "広島県警察の暫定値では、三次市の侵入窃盗は令和6年の2件から令和7年は9件に増えました。隣の庄原市も4件から12件に増えています。一方、広島県全体は581件から561件に減っています。",
  },
  {
    q: "賃貸住宅で鍵をなくしたときは、先に何をすればよいですか？",
    a: "賃貸住宅の鍵交換は管理会社・大家の承諾が必要なことが多いため、まず連絡してください。鍵開けだけを頼む場合も、作業前に本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["侵入窃盗", "9件", "2件", "12件", "4件", "561件"],
  ["住居侵入", "5件", "4件", "7件", "3件", "298件"],
  ["自転車盗", "16件", "6件", "9件", "2件", "3,513件"],
  ["車上ねらい", "5件", "1件", "4件", "0件", "318件"],
  ["器物損壊等", "15件", "12件", "8件", "7件", "1,140件"],
  ["刑法犯総数", "184件", "163件", "98件", "89件", "14,735件"],
];

export default function AreaMiyoshiPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="三次市"
      pref="広島県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["三次市", "広島県", "鍵開け", "鍵交換", "侵入窃盗", "業者比較"]}
      lead={[
        <>広島県三次市で鍵が開かなくなった、鍵をなくしたといったときに頼める業者のうち、公式サイトで三次市（または全国）への出張を確認できたのは2社でした。広島市や福山市を対応エリアに挙げる業者でも、県北の三次市は一覧に入っていないことがあるため、依頼の前に対応できるかを確かめておくと安心です。</>,
        <>2社の料金・受付時間は、2026年11月23日に公式ページで確認しました。後半では、広島県警察が市町ごとに公表している「犯罪等発生状況（令和7年12月末）」から、三次市の侵入窃盗などの件数を前年や隣接する庄原市、広島県全体と比べています。</>,
      ]}
      agents={agents}
      excludedNote={
        <>※鍵の生活救急車は、2026年11月23日に<Ext href={SRC.seikatsuArea}>公式の対応エリア一覧</Ext>を確認した時点で、広島県の掲載市町（広島市の各区・呉市・福山市・大竹市・東広島市・廿日市市と安芸郡の4町）に三次市が含まれていなかったため掲載していません。</>
      }
      themeId="toukei"
      themeTitle="広島県警の統計で見る三次市の侵入窃盗（令和7年12月末）"
      theme={
        <>
          <p className="leading-loose mb-4">
            広島県警察は、市町ごとに「犯罪等発生状況」を公表しており、刑法犯の総数と主な犯罪の件数を前年と並べています。三次市と、北に隣接する庄原市の資料から同じ項目を抜き出し、広島県全体の値を加えました。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">三次市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">三次市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">庄原市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">庄原市 令和6年</th>
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
            出典：広島県警察本部<Ext href={SRC.police}>「三次市の犯罪等発生状況（令和7年12月末）」</Ext>・<Ext href={SRC.policeShobara}>「庄原市の犯罪等発生状況（令和7年12月末）」</Ext>（いずれも{CHECKED}）。件数は1〜12月の累計で、広島県の数値は同じ資料の「広島県全体」欄です。資料には「掲載の数値は全て暫定値」と注記されています。空欄は0件として扱いました。この資料では侵入窃盗の手口（空き巣・忍込みなど）の内訳は公表されていません。
          </p>
          <p className="leading-loose mb-4">
            三次市の侵入窃盗は<Hl>令和6年の2件から令和7年は9件</Hl>に増えました。隣の庄原市も4件から12件に増えており、県北の2市はいずれも件数が増加しています。広島県全体では581件から561件に減っているため、県全体とは異なる動きです。他人の住居などに入る住居侵入も、三次市で4件から5件、庄原市で3件から7件になっています。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            刑法犯の総数は163件から184件に増え、自転車盗（6件→16件）や車上ねらい（1件→5件）も増えました。件数が少ない地域では、数件の差で増加率が大きく見える点にも注意が必要です。外出時の施錠を基本に、玄関の錠を2つにする方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>三次市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・三次市の一覧に7件を掲載）と鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円・全国出張）の2社でした。鍵の生活救急車は公式の対応エリア一覧に三次市の掲載がありませんでした。</>,
        <>広島県警察の暫定値では、三次市の侵入窃盗は令和7年に9件と前年の2件から増え、県全体の減少とは逆の動きでした。外出時・就寝前の施錠を確認し、鍵の不調や紛失があれば交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/mihara/", label: "三原市の鍵開け・鍵交換業者おすすめ2選" },
        { href: "/area/higashihiroshima/", label: "東広島市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/hiroshima/", label: "広島の鍵開け・鍵交換業者おすすめ4選" },
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
