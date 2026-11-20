import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/chikusei/";
const UPDATED = "2026年11月20日";
const UPDATED_ISO = "2026-11-20";
const CHECKED = "2026年11月20日確認";

const H1 = "【2026年最新】筑西市の鍵開け・鍵交換業者おすすめ3選｜茨城県警の統計で筑西市の住宅侵入窃盗が倍増した内訳も解説する鍵屋比較";
const DESC =
  "筑西市への対応を公式サイトで2026年11月20日に確認できた鍵業者3社（カギ110番・鍵の生活救急車・鍵のレスキュー）の料金・受付時間を比較。茨城県警察の確定値で、筑西市の住宅侵入窃盗が令和6年50件から令和7年103件に増え、犯罪率が県内3番目に高かったことをまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/ibaraki/chikusei/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
  policeList: "https://www.pref.ibaraki.jp/kenkei/a01_safety/statistics/shichoson.html",
  policeR7: "https://www.pref.ibaraki.jp/kenkei/a01_safety/statistics/documents/r07-12_number-of-reported-rrimes.pdf",
  policeR6: "https://www.pref.ibaraki.jp/kenkei/a01_safety/statistics/documents/r6ninti.pdf",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "筑西市の加盟店ページあり",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>茨城県筑西市の鍵屋一覧</Hl>には「筑西市対応」と表示された店舗が掲載されています。公式料金表では、自宅の<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間365日受付（筑西市ページの表示）" },
    ],
    area: "公式の「茨城県筑西市」の鍵屋一覧に、筑西市対応の店舗を掲載",
    sources: [
      { label: "カギ110番「筑西市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間365日", area: "筑西市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>茨城県の対応エリアに筑西市</Hl>が掲載されています。公式の料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>がかかり、最終価格は作業前に提示する見積書の価格としています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（茨城県）に筑西市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表で<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記で<Hl>出張料4,400〜8,800円（税込）</Hl>を掲載しており、出張料は出張先の地域により異なるとしています。筑西市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（筑西市を名指しした案内はなし）",
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
    q: "筑西市で鍵開けを頼むと、いくらかかりますか？",
    a: "各社の公式掲載（2026年11月20日確認）では、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格・20:00〜7:59は時間外料金8,800円）、鍵のレスキューが6,600円〜（税込、別に出張料4,400〜8,800円）です。いずれも最低額で、鍵の種類・時間帯・出張距離で総額が変わるため、作業前に総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "筑西市の空き巣・忍込みはどのくらい起きていますか？",
    a: "茨城県警察の市町村別認知件数（確定値）によると、筑西市の住宅侵入窃盗は令和7年103件で、令和6年の50件から53件増えました。内訳は空き巣57件（同25件）、忍込み45件（同24件）、居空き1件（同1件）です。世帯1,000当たりの犯罪率は2.595で、県内44市町村のうち高いほうから3番目でした。",
  },
  {
    q: "忍込みが増えているときは、どんな点に気をつければよいですか？",
    a: "忍込みは、夜間に住人が寝ている間に入る手口です。外出時だけでなく、就寝前にも玄関・勝手口・窓の施錠を確認してください。1枚のドアに錠を2つ付ける補助錠の追加も選択肢の一つです。",
    link: { href: "/hojo-jou/", label: "補助錠の選び方" },
  },
  {
    q: "鍵をなくした場合、鍵開けと鍵交換のどちらを頼めばよいですか？",
    a: "家に入れないときは、まず鍵開けを依頼します。なくした鍵が見つからず、住所が分かる物と一緒になくした場合などは、悪用を防ぐためにシリンダーの交換も検討してください。賃貸住宅では、交換の前に管理会社・大家へ連絡してください。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string][] = [
  ["住宅侵入窃盗（合計）", "103件", "50件", "72件", "1,264件"],
  ["空き巣", "57件", "25件", "37件", "740件"],
  ["忍込み", "45件", "24件", "34件", "502件"],
  ["居空き", "1件", "1件", "1件", "22件"],
  ["世帯1,000当たりの犯罪率", "2.595", "1.280", "1.217", "1.018"],
];

export default function AreaChikuseiPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="筑西市"
      pref="茨城県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["筑西市", "茨城県", "鍵開け", "鍵交換", "空き巣", "業者比較"]}
      lead={[
        <>筑西市で鍵のトラブルが起きたときに頼める業者のうち、公式サイトで筑西市（または全国）への対応を確認できたのは、出張型の3社でした。受付時間や夜間の割増の扱いは業者ごとに異なります。</>,
        <>本記事では、3社の公式に掲載された料金・受付時間を2026年11月20日に確認して比較しました。あわせて、茨城県警察の市町村別の統計から、筑西市の住宅侵入窃盗（空き巣・忍込み・居空き）が令和6年から令和7年にかけてどう変わったかを、古河市・茨城県全体と並べて整理しています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="茨城県警の統計で見る筑西市の住宅侵入窃盗（令和7年確定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            茨城県警察は「市町村別の認知件数・犯罪率」として、住宅侵入窃盗を空き巣・忍込み・居空きに分けた件数と、世帯1,000当たりの犯罪率を市町村ごとに公表しています。筑西市の令和7年・令和6年の件数を、古河市と茨城県全体の令和7年と並べると次のとおりです。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">項目</th>
                  <th className="border border-border px-3 py-2 text-left">筑西市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">筑西市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">古河市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">茨城県 令和7年</th>
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
            出典：<Ext href={SRC.policeList}>茨城県警察「市町村別の認知件数・犯罪率」</Ext>の<Ext href={SRC.policeR7}>令和7年12月末（確定値）</Ext>と<Ext href={SRC.policeR6}>令和6年中（確定値）</Ext>の「市町村別認知件数・犯罪率【住宅侵入窃盗】」（いずれも{CHECKED}）。犯罪率は世帯1,000当たりの認知件数で、茨城県は同じ表の「茨城県総数」の行です。
          </p>
          <p className="leading-loose mb-4">
            筑西市の住宅侵入窃盗は<Hl>令和6年の50件から令和7年は103件</Hl>と、2倍を超えました（増加率106.0%）。空き巣が25件から57件へ、忍込み（夜間、住人が寝ている間の侵入）が24件から45件へ、どちらも大きく増えています。世帯1,000当たりの犯罪率は2.595で、<Hl>県内44市町村のうち高いほうから3番目</Hl>でした。茨城県全体（1.018）の2倍以上、同じ県西地域の古河市（1.217）と比べても高い水準です。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            空き巣と忍込みがともに増えているため、外出時に加えて就寝前の施錠も確認することが基本です。勝手口や掃き出し窓など、玄関以外の出入口も見直してください。玄関に補助錠を加える方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口と対策は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>筑西市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・24時間365日受付）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>茨城県警察の確定値では、筑西市の住宅侵入窃盗は令和7年103件で前年の2倍を超え、世帯当たりの犯罪率は県内で3番目に高くなりました。在宅中・就寝中も含めた施錠の確認と、必要に応じた鍵交換・補助錠の設置をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/koga/", label: "古河市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/shimotsuma/", label: "下妻市の鍵開け・鍵交換業者おすすめ3選" },
        { href: "/area/tsukuba/", label: "つくば市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/oyama/", label: "小山市の鍵開け・鍵交換業者おすすめ4選" },
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
