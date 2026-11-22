import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/abiko/";
const UPDATED = "2026年11月22日";
const UPDATED_ISO = "2026-11-22";
const CHECKED = "2026年11月22日確認";

const H1 = "【2026年最新】我孫子市の鍵開け・鍵交換業者おすすめ3選｜千葉県警の統計で見る我孫子市の空き巣・忍込みの件数も解説する鍵屋比較";
const DESC =
  "千葉県我孫子市への対応を公式サイトで2026年11月22日に確認できた鍵業者3社（カギ110番・鍵の生活救急車・鍵のレスキュー）の料金・受付時間を比較。千葉県警察の市町村別統計（令和8年8月末の暫定値）から、我孫子市の空き巣が前年同期の10件から4件に、忍込みが10件から3件に減ったことを柏市と並べてまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/chiba/abiko/",
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
    catch: "我孫子市の一覧ページに69件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>千葉県我孫子市の鍵屋一覧</Hl>には69件の店舗が掲載されています。自宅の鍵について、公式料金表では<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料が別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間365日受付（我孫子市ページの表示）" },
    ],
    area: "公式の「千葉県我孫子市」の鍵屋一覧に、69件の店舗を掲載",
    sources: [
      { label: "カギ110番「我孫子市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間365日", area: "我孫子市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>千葉県の対応エリアに我孫子市</Hl>が含まれています。標準価格の料金表では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示される見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（千葉県）に我孫子市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。我孫子市を個別に扱った案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（我孫子市を名指しした案内はなし）",
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
    q: "我孫子市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月22日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。鍵の種類や時間帯で総額が変わるため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "我孫子市の空き巣は増えていますか？",
    a: "千葉県警察の市町村別の刑法犯認知件数（令和8年8月末の暫定値）では、我孫子市の空き巣は4件で、前年同期の10件から減りました。忍込みも10件から3件に減り、侵入盗全体は38件から31件になっています。",
  },
  {
    q: "刑法犯の総数が増えているのはなぜですか？",
    a: "同じ表で我孫子市の刑法犯の総数は405件から512件に増えました。増加の多くは窃盗のうち侵入盗以外の区分で、車上ねらいが13件から38件、その他非侵入窃盗が98件から180件に増えています。住宅への侵入盗とは別の動きです。",
    link: { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口と対策" },
  },
  {
    q: "賃貸住宅で鍵をなくした場合は、すぐに業者を呼んでよいですか？",
    a: "賃貸住宅の鍵交換は、管理会社・大家の承諾が必要な場合が多いため、先に連絡してください。鍵開けだけを依頼する場合も、本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string][] = [
  ["侵入盗（合計）", "31件", "38件", "102件", "2,104件"],
  ["空き巣", "4件", "10件", "21件", "548件"],
  ["忍込み", "3件", "10件", "8件", "158件"],
  ["事務所荒し・出店荒し", "5件", "2件", "13件", "198件"],
  ["その他侵入盗", "19件", "16件", "60件", "1,200件"],
  ["刑法犯（総数）", "512件", "405件", "1,744件", "26,648件"],
];

export default function AreaAbikoPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="我孫子市"
      pref="千葉県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["我孫子市", "千葉県", "鍵開け", "鍵交換", "空き巣", "業者比較"]}
      lead={[
        <>千葉県我孫子市で鍵をなくしたときや、玄関の鍵を交換したいときに、公式サイトで我孫子市（または全国）への出張を確認できた鍵業者は3社でした。最低料金に加えて、夜間の時間外料金や出張料が加わる条件も並べています。</>,
        <>各社の料金・受付時間は2026年11月22日に公式ページで確認しました。後半では、千葉県警察の市町村別の刑法犯認知件数（令和8年8月末の暫定値）から、我孫子市の空き巣・忍込みなど侵入盗の件数を前年同期と比べ、隣の柏市・千葉県全体と並べています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="千葉県警の統計で見る我孫子市の空き巣と忍込み（令和8年8月末・暫定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            千葉県警察が公表している市町村別の刑法犯認知件数（暫定値・前年同期比）から、侵入盗の区分を抜き出しました。我孫子市は令和8年8月末と前年同期、比較先の柏市・千葉県全体は令和8年8月末の値です。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">我孫子市 令和8年8月末</th>
                  <th className="border border-border px-3 py-2 text-left">我孫子市 前年同期</th>
                  <th className="border border-border px-3 py-2 text-left">柏市 令和8年8月末</th>
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
            出典：<Ext href={SRC.policeList}>千葉県警察「県下全体（警察署別・市町村別を一覧表で見る）」</Ext>の<Ext href={SRC.policeXlsx}>市町村別（暫定値・前年同期比）令和８年８月</Ext>（{CHECKED}）。侵入盗（合計）は表の空き巣・忍込み・事務所荒し・出店荒し・その他侵入盗を当サイトで合計した値です。月末の数値は変更される場合があると注記されています。
          </p>
          <p className="leading-loose mb-4">
            我孫子市の侵入盗は<Hl>前年同期の38件から31件</Hl>に減りました。住宅をねらう手口では、<Hl>空き巣が10件から4件、忍込みが10件から3件</Hl>と、どちらも大きく減っています。一方で、事務所荒し・出店荒しは2件から5件、その他侵入盗は16件から19件と少し増えました。千葉県全体では空き巣が469件から548件に増えており、我孫子市の空き巣の減少は県全体とは異なる動きです。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            刑法犯の総数は405件から512件に増えましたが、増えた分の多くは車上ねらい（13件→38件）や、その他非侵入窃盗（98件→180件）です。隣の柏市は侵入盗102件・空き巣21件で、人口規模が異なるため件数だけで比べることはできません。住宅への侵入が減っている時期でも、外出時の窓の施錠や補助錠の活用は続けてください。補助錠については<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>我孫子市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・我孫子市の一覧に69件）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>千葉県警察の暫定値では、我孫子市の侵入盗は令和8年8月末で31件と前年同期の38件から減り、空き巣・忍込みも減りました。外出時・就寝前の施錠を続け、鍵の紛失や不調があれば早めに交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/kashiwa/", label: "柏市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/inzai/", label: "印西市の鍵開け・鍵交換業者おすすめ3選" },
        { href: "/area/nagareyama/", label: "流山市の鍵開け・鍵交換業者おすすめ4選" },
      ]}
      related={[
        { href: "/thumb-turn-taisaku/", label: "サムターン回し対策" },
        { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口と対策" },
        { href: "/hojo-jou/", label: "補助錠の選び方" },
        { href: "/kagiya-erabikata/", label: "鍵屋・鍵業者の選び方チェックリスト" },
      ]}
    />
  );
}
