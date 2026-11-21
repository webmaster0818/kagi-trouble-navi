import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/kamisu/";
const UPDATED = "2026年11月22日";
const UPDATED_ISO = "2026-11-22";
const CHECKED = "2026年11月22日確認";

const H1 = "【2026年最新】神栖市の鍵開け・鍵交換業者おすすめ3選｜茨城県警の統計で見る神栖市の住宅侵入窃盗と忍込みの件数も解説する鍵屋比較";
const DESC =
  "茨城県神栖市への対応を公式サイトで2026年11月22日に確認できた鍵業者3社の料金・受付時間を比較。茨城県警察の市町村別統計から、神栖市の住宅侵入窃盗56件のうち38件が忍込みで、忍込みの犯罪率が県内44市町村中6番目に高いことを、鹿嶋市・潮来市・県全体と並べてまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/ibaraki/kamisu/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  policeList: "https://www.pref.ibaraki.jp/kenkei/a01_safety/statistics/shichoson.html",
  policeR7: "https://www.pref.ibaraki.jp/kenkei/a01_safety/statistics/documents/r07-12_number-of-reported-rrimes.pdf",
  policeR6: "https://www.pref.ibaraki.jp/kenkei/a01_safety/statistics/documents/r6ninti.pdf",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "神栖市の一覧ページに32件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>茨城県神栖市の鍵屋一覧</Hl>には32件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間365日受付（神栖市ページの表示）" },
    ],
    area: "公式の「茨城県神栖市」の鍵屋一覧に、32件の店舗を掲載",
    sources: [
      { label: "カギ110番「神栖市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間365日", area: "神栖市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>茨城県の対応エリアに神栖市</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示する見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（茨城県）に神栖市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。神栖市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（神栖市を名指しした案内はなし）",
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
    q: "神栖市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月22日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円で、出張先の地域により異なる）です。いずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "神栖市では空き巣と忍込みのどちらが多いですか？",
    a: "茨城県警察の令和7年確定値では、神栖市の住宅侵入窃盗56件のうち、忍込みが38件、空き巣が16件、居空きが2件でした。忍込みが空き巣の2倍以上あり、空き巣が多い茨城県全体（空き巣740件・忍込み502件）とは傾向が異なります。",
  },
  {
    q: "夜間に鍵のトラブルが起きた場合、料金は高くなりますか？",
    a: "鍵の生活救急車は、20:00〜7:59の作業に時間外料金8,800円がかかると料金表に明記しています。カギ110番と鍵のレスキューは24時間365日の受付としていますが、時間帯による割増の有無は依頼時に総額で確認してください（2026年11月22日確認）。",
    link: { href: "/shinya-kagiake/", label: "深夜の鍵開けを頼むときの注意点" },
  },
  {
    q: "賃貸住宅で鍵を交換したい場合はどうすればよいですか？",
    a: "賃貸住宅の鍵は貸主の所有物のため、交換の前に管理会社・大家の承諾を取ってください。費用の負担や、交換後の鍵の引き渡し方法もあわせて確認しておくと安心です。",
    link: { href: "/chintai-bouhan/", label: "賃貸住宅の防犯対策" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["住宅侵入窃盗（合計）", "56件", "69件", "25件", "7件", "1,264件"],
  ["空き巣", "16件", "30件", "17件", "3件", "740件"],
  ["忍込み", "38件", "36件", "8件", "4件", "502件"],
  ["居空き", "2件", "3件", "0件", "0件", "22件"],
  ["世帯1,000当たりの犯罪率", "1.315", "1.639", "0.864", "0.641", "1.018"],
];

export default function AreaKamisuPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="神栖市"
      pref="茨城県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["神栖市", "茨城県", "鍵開け", "鍵交換", "忍込み", "業者比較"]}
      lead={[
        <>茨城県神栖市で鍵のトラブルが起きたときに、公式サイトで神栖市（または全国）への対応を確認できた出張型の鍵業者は3社です。出張料や夜間料金の扱いが業者ごとに異なるため、事前に比べておくと判断しやすくなります。</>,
        <>3社の料金・受付時間は、各社の公式ページを2026年11月22日に確認しました。後半では、茨城県警察が公表している市町村別の認知件数・犯罪率から、神栖市の住宅侵入窃盗（空き巣・忍込み・居空き）を前年と比べ、隣接する鹿嶋市・潮来市と県全体に並べています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="茨城県警の統計で見る神栖市の住宅侵入窃盗（令和7年確定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            茨城県警察は「市町村別の認知件数・犯罪率」として、住宅侵入窃盗を空き巣・忍込み・居空きに分けた件数と、世帯1,000当たりの犯罪率を市町村ごとに公表しています。神栖市の令和7年・令和6年の確定値に、隣接する鹿嶋市・潮来市と茨城県全体の令和7年を加えました。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">神栖市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">神栖市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">鹿嶋市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">潮来市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">茨城県 令和7年</th>
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
            出典：<Ext href={SRC.policeList}>茨城県警察「市町村別の認知件数・犯罪率」</Ext>の<Ext href={SRC.policeR7}>令和7年12月末（確定値）</Ext>と<Ext href={SRC.policeR6}>令和6年中（確定値）</Ext>の「市町村別認知件数・犯罪率【住宅侵入窃盗】」（いずれも{CHECKED}）。犯罪率は世帯1,000当たりの認知件数で、茨城県は同じ表の「茨城県総数」の行です。
          </p>
          <p className="leading-loose mb-4">
            神栖市の住宅侵入窃盗は<Hl>令和6年の69件から令和7年は56件</Hl>に減りました。減ったのは空き巣（30件→16件）で、<Hl>忍込みは36件から38件</Hl>とほぼ横ばいです。その結果、令和7年は住宅侵入窃盗の<Hl>約7割（56件中38件）が忍込み</Hl>となりました。茨城県全体では忍込みの割合は約4割（1,264件中502件）で、神栖市は住人の在宅中・就寝中の侵入が目立つ地域といえます。忍込みの世帯1,000当たりの犯罪率は0.893で、県が示す44市町村のワースト順位では6位でした。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            住宅侵入窃盗全体の犯罪率は1.315（44市町村中16位）で、令和6年の1.639（同2位）からは下がっています。隣の鹿嶋市は25件・0.864、潮来市は7件・0.641でした。忍込みへの備えとしては、就寝前に玄関・勝手口・窓の施錠を確かめることが基本です。玄関に補助錠を加える方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口と対策は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>神栖市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・神栖市の一覧に32件）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>茨城県警察の統計では、神栖市の住宅侵入窃盗は令和7年に56件と前年から減りましたが、そのうち38件が忍込みで、忍込みの犯罪率は県内6位でした。就寝前の施錠を確かめ、鍵の紛失や不調があれば交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/tsuchiura/", label: "土浦市の鍵開け・鍵交換業者おすすめ3選" },
        { href: "/area/mito/", label: "水戸の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/tsukuba/", label: "つくば市の鍵開け・鍵交換業者おすすめ4選" },
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
