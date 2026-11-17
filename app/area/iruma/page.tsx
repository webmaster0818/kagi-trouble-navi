import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/iruma/";
const UPDATED = "2026年11月17日";
const UPDATED_ISO = "2026-11-17";
const CHECKED = "2026年11月17日確認";

const H1 = "【2026年最新】入間市の鍵開け・鍵交換業者おすすめ4選｜埼玉県警の統計で見る入間市の空き巣・忍込みの増減も解説する鍵屋比較";
const DESC =
  "入間市への対応を公式サイトで2026年11月17日に確認できた鍵業者4社（カギ110番・鍵の生活救急車・鍵のレスキュー・カギの救急車 入間市受付センター）の料金・受付時間・定休日を比較。埼玉県警察の令和7年確定値で、入間市の空き巣・忍込み・居空きが前年の34件から23件に減ったことも整理しています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/saitama/iruma/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  kqIruma: "https://www.kagi1109948.com/shop/99saitama-iruma/",
  police: "https://www.police.pref.saitama.lg.jp/documents/27624/r7keihoukansityouson.pdf",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "入間市の加盟店ページあり",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトには<Hl>埼玉県入間市の鍵業者一覧のページ</Hl>があり、掲載店舗の欄に「入間市対応」と表示されています。公式料金表では、自宅の<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間365日（入間市ページの表示）" },
    ],
    area: "公式の「埼玉県入間市」の鍵業者一覧に、入間市対応の店舗を掲載",
    sources: [
      { label: "カギ110番「入間市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間365日", area: "入間市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>埼玉県の対応エリアに入間市</Hl>が掲載されています。公式の料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>がかかり、最終価格は作業前に提示する見積書の価格としています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "見積もり", v: "現地見積もりは無料（公式の料金案内）" },
    ],
    area: "公式の対応エリア一覧（埼玉県）に入間市を掲載",
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
    catch: "全国統一料金表と出張料を公式に掲載",
    intro: (
      <>
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の全国統一料金表で<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記で<Hl>出張料4,400〜8,800円（税込）</Hl>を掲載しています。入間市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "全国統一料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（市を名指しした案内はなし）",
    sources: [
      { label: "鍵のレスキュー よくある質問「出張できないエリアはありますか？」", href: SRC.rescueFaq },
      { label: "全国統一料金表", href: SRC.rescuePrice },
      { label: "特定商取引法上の表記", href: SRC.rescueTokusho },
    ],
    checked: CHECKED,
    compare: { price: "6,600円〜（税込）＋出張料", reception: "24時間365日", area: "全国出張（公式FAQ）" },
  },
  {
    id: "kagi-kyukyusha",
    slug: "kagi-kyukyusha",
    name: "カギの救急車 入間市受付センター",
    catch: "入間市専用の受付・所沢店が運営",
    intro: (
      <>
        カギの救急車は、全国の鍵屋が加盟する「カギの110番・カギの救急車」のネットワークです。公式の店舗案内には<Hl>「カギの救急車 入間市受付センター」</Hl>があり、入間市全域と近郊に出張するとしています。受付センターは出張専門で店舗はなく、運営責任店は<Hl>所沢市西所沢の「カギの救急車 所沢店」</Hl>です。電話受付は8:00〜19:00で、<Hl>日曜・祝日は店休日</Hl>です。料金は一律の掲載がなく、品番・写真や聞き取りをもとに見積もるとしています。
      </>
    ),
    rows: [
      { k: "料金", v: "ページに一律の掲載なし", note: "品番・写真・聞き取りで見積もり（公式）" },
      { k: "電話受付", v: "8:00〜19:00", note: "店休日：日曜・祝日" },
      { k: "支払い", v: "現金・クレジットカード（VISA/MASTER/JCB）" },
      { k: "運営責任店", v: "カギの救急車 所沢店（所沢市西所沢）" },
    ],
    area: "入間市全域と近郊に対応（受付センターのページ）",
    sources: [{ label: "カギの救急車「入間市受付センター」", href: SRC.kqIruma }],
    checked: CHECKED,
    compare: { price: "電話で見積もり", reception: "8:00〜19:00（日曜・祝日休み）", area: "入間市受付センターあり" },
  },
];

const faqs: CityFaq[] = [
  {
    q: "入間市で鍵開けを頼むと、いくらかかりますか？",
    a: "各社の公式掲載（2026年11月17日確認）では、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格・ハイセキュリティは29,700円〜）、鍵のレスキューが6,600円〜（税込、別に出張料4,400〜8,800円）です。カギの救急車 入間市受付センターは一律の料金を掲載していません。いずれも最低額のため、作業前に総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "日曜日や祝日に鍵が開かなくなった場合は、どこに頼めますか？",
    a: "カギの救急車 入間市受付センターは日曜・祝日が店休日です。カギ110番と鍵のレスキューは24時間365日の受付としています。鍵の生活救急車は、20:00〜7:59の作業に時間外料金8,800円がかかると明記しています（2026年11月17日確認）。",
  },
  {
    q: "入間市の空き巣の件数はどのくらいですか？",
    a: "埼玉県警察の刑法犯認知件数（令和7年・確定値）市町村別によると、入間市の空き巣は8件（令和6年16件）、忍込みは14件（同17件）、居空きは1件（同1件）で、3つの合計は34件から23件に減りました。",
  },
  {
    q: "鍵をなくしたら、鍵交換までしたほうがよいですか？",
    a: "住所が分かる物と一緒になくした場合や、どこでなくしたか分からない場合は、第三者に使われるおそれがあるため、シリンダー交換を検討してください。賃貸住宅では、交換の前に管理会社・大家へ連絡します。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string][] = [
  ["空き巣", "8件", "16件", "1,063件", "1,032件"],
  ["忍込み", "14件", "17件", "652件", "360件"],
  ["居空き", "1件", "1件", "35件", "35件"],
  ["3つの合計", "23件", "34件", "1,750件", "1,427件"],
];

export default function AreaIrumaPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="入間市"
      pref="埼玉県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["入間市", "埼玉県", "鍵開け", "鍵交換", "空き巣", "業者比較"]}
      lead={[
        <>入間市で鍵が開かない・鍵をなくしたといったトラブルが起きたときに、どの業者へ連絡するかを比べられるよう、受付時間と休業日を中心に整理しました。市内専用の受付センターは日曜・祝日が休みのため、休日や夜間は全国対応の受付サービスも候補になります。</>,
        <>本記事では、入間市（または全国）への対応を各社の公式サイトで2026年11月17日に確認できた鍵業者4社を、公式に掲載された料金・受付時間とあわせて比較しました。後半では、埼玉県警察の統計で入間市の住宅を狙った侵入窃盗の件数を前年と比べています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="埼玉県警の統計で見る入間市の空き巣・忍込み（令和7年確定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            埼玉県警察は、刑法犯の認知件数を市町村別に公表しています。この表では、住宅を対象とする侵入窃盗が<Hl>空き巣・忍込み・居空き</Hl>の3つの手口に分けて集計されています。入間市の件数を令和6年と比べ、埼玉県全体の値と並べると次のとおりです。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">手口</th>
                  <th className="border border-border px-3 py-2 text-left">入間市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">入間市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">埼玉県 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">埼玉県 令和6年</th>
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
            出典：<Ext href={SRC.police}>埼玉県警察「刑法犯認知件数（令和7年・確定値）市町村別」</Ext>（{CHECKED}）。表の空欄は0件として扱い、「3つの合計」は当サイトが3項目を足して算出しました。埼玉県の数値は同じ表の「合計」行です。
          </p>
          <p className="leading-loose mb-4">
            入間市の3つの合計は<Hl>令和6年の34件から令和7年は23件</Hl>に減りました。埼玉県全体が1,427件から1,750件へ約23%増えたのとは逆の動きです。内訳では、入間市は<Hl>忍込み（14件）が空き巣（8件）を上回っています</Hl>。県全体では空き巣が最も多いため、入間市の特徴の一つです。ただし件数が少ない市町村では年ごとの増減が大きくなりやすく、1年分だけで傾向を判断することはできません。入間市の刑法犯全体は令和7年944件（令和6年789件）でした。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）です（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            外出時だけでなく在宅中・就寝中も玄関と窓を施錠することが基本です。玄関に補助錠を加えて1枚のドアに錠を2つにする対策は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口と対策は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。鍵をなくした・鍵が古いなどで交換を考える場合は、上の業者に見積もりを依頼してください。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>入間市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）、カギの救急車 入間市受付センター（料金は電話で見積もり・受付8:00〜19:00、日曜・祝日休み）の4社でした。</>,
        <>埼玉県警察の令和7年確定値では、入間市の空き巣・忍込み・居空きの合計は23件で、前年の34件から減りました。一方で忍込みが空き巣より多いため、在宅中・就寝中の施錠と補助錠の設置もあわせてご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/sayama/", label: "狭山市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/tokorozawa/", label: "所沢市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/saitama/", label: "さいたま・埼玉の鍵開け・鍵交換業者おすすめ4選" },
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
