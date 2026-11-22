import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/isehara/";
const UPDATED = "2026年11月23日";
const UPDATED_ISO = "2026-11-23";
const CHECKED = "2026年11月23日確認";

const H1 = "【2026年最新】伊勢原市の鍵開け・鍵交換業者おすすめ3選｜神奈川県警の統計で見る伊勢原市の忍込み・空き巣の件数も解説する鍵屋比較";
const DESC =
  "神奈川県伊勢原市への対応を公式サイトで2026年11月23日に確認できた鍵業者3社の料金・受付時間を比較。神奈川県警察の令和8年10月暫定値から、伊勢原市では忍込み（7件）が空き巣（5件）を上回ったことを秦野市・厚木市と並べています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/kanagawa/isehara/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  police: "https://www.police.pref.kanagawa.jp/tokei/hanzai_tokei/mesc0027.html",
  policePdf: "https://www.police.pref.kanagawa.jp/assets/entry/c0027_01.pdf",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "伊勢原市の一覧ページに44件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>神奈川県伊勢原市の鍵屋一覧</Hl>には44件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間受付（伊勢原市ページの表示）" },
    ],
    area: "公式の「神奈川県伊勢原市」の鍵屋一覧に、44件の店舗を掲載",
    sources: [
      { label: "カギ110番「伊勢原市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間受付", area: "伊勢原市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>神奈川県の対応エリアに伊勢原市</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示する見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（神奈川県）に伊勢原市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。伊勢原市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（伊勢原市を名指しした案内はなし）",
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
    q: "伊勢原市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月23日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "伊勢原市ではどんな侵入盗が多いですか？",
    a: "神奈川県警察の令和8年10月暫定値では、伊勢原市の侵入盗は40件で、住宅をねらう手口は忍込み7件・空き巣5件・居空き1件でした。県全体では空き巣が忍込みの約2.8倍ですが、伊勢原市は忍込みのほうが多くなっています。",
  },
  {
    q: "秦野市・厚木市と比べるとどうですか？",
    a: "同じ表で、秦野市は侵入盗33件（空き巣11件・忍込み1件）、厚木市は124件（空き巣15件・忍込み2件・居空き1件）でした。人口や世帯数が異なるため、件数だけで地域の安全性を比べることはできません。",
    link: { href: "/area/hadano/", label: "秦野市の鍵開け・鍵交換業者おすすめ3選" },
  },
  {
    q: "賃貸住宅で鍵をなくしたときは、先に何をすればよいですか？",
    a: "賃貸住宅の鍵交換は管理会社・大家の承諾が必要なことが多いため、まず連絡してください。鍵開けだけを頼む場合も、作業前に本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string][] = [
  ["空き巣", "5件", "11件", "15件", "396件"],
  ["忍込み", "7件", "1件", "2件", "141件"],
  ["居空き", "1件", "0件", "1件", "29件"],
  ["事務所荒し・出店荒し", "4件", "7件", "11件", "291件"],
  ["侵入盗の全体", "40件", "33件", "124件", "1,758件"],
  ["刑法犯（総数）", "442件", "611件", "1,412件", "43,536件"],
];

export default function AreaIseharaPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="伊勢原市"
      pref="神奈川県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["伊勢原市", "神奈川県", "鍵開け", "鍵交換", "忍込み", "業者比較"]}
      lead={[
        <>神奈川県伊勢原市で鍵をなくした、玄関の鍵を替えたいといったときに、公式サイトで伊勢原市（または全国）への対応を確認できた鍵業者は3社でした。各社の最低料金に加えて、夜間の時間外料金や出張料の扱いも比べています。</>,
        <>料金・受付時間は、2026年11月23日に各社の公式ページで確認しました。後半では、神奈川県警察の「窃盗犯 手口別 市区町村別 認知件数」（令和8年10月暫定値）から伊勢原市の侵入盗を手口別に取り出し、隣接する秦野市・厚木市、神奈川県全体と比べています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="神奈川県警の統計で見る伊勢原市の侵入盗（令和8年1〜10月・暫定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            神奈川県警察は、刑法犯の認知件数を市区町村別にまとめた表を毎月更新しています。令和8年10月暫定値（1〜10月の累計）の「窃盗犯 手口別 市区町村別 認知件数」から、伊勢原市と隣接する秦野市・厚木市、神奈川県全体の侵入盗を手口別に抜き出しました。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">伊勢原市</th>
                  <th className="border border-border px-3 py-2 text-left">秦野市</th>
                  <th className="border border-border px-3 py-2 text-left">厚木市</th>
                  <th className="border border-border px-3 py-2 text-left">神奈川県</th>
                </tr>
              </thead>
              <tbody>
                {statRows.map(([k, v1, v2, v3, v4], i) => (
                  <tr key={k} className={i % 2 === 1 ? "bg-[#F5F8FC]" : "bg-white"}>
                    <th className="border border-border px-3 py-2 whitespace-nowrap bg-[#EAF1F8] text-left font-bold">{k}</th>
                    <td className="border border-border px-3 py-2">{v1}</td>
                    <td className="border border-border px-3 py-2">{v2}</td>
                    <td className="border border-border px-3 py-2">{v3}</td>
                    <td className="border border-border px-3 py-2">{v4}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-6 leading-relaxed">
            出典：<Ext href={SRC.police}>神奈川県警察「刑法犯 罪名別 市区町村別 認知件数」</Ext>（<Ext href={SRC.policePdf}>印刷用PDF</Ext>の「刑法犯 罪名別」「窃盗犯 手口別」の各表、令和8年10月暫定値、{CHECKED}）。表の「-」は0件として扱い、「事務所荒し・出店荒し」は当サイトが2つの手口を足して算出しました。県警は、この表は市区町村別に発生件数をとらえているため、各警察署で把握している数値とは異なるとしています。
          </p>
          <p className="leading-loose mb-4">
            伊勢原市の侵入盗は令和8年1月〜10月で40件で、このうち住宅をねらう空き巣・忍込み・居空きは計13件でした。特徴は、<Hl>住人が寝ている間などに入る忍込みが7件と、空き巣の5件を上回っている</Hl>ことです。神奈川県全体では空き巣（396件）が忍込み（141件）の約2.8倍で、隣の秦野市（空き巣11件・忍込み1件）や厚木市（同15件・2件）も空き巣のほうが多く、伊勢原市は周辺と逆の傾向でした。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            また、伊勢原市の侵入盗40件のうち23件は、表の空き巣・忍込み・居空き・事務所荒し・出店荒しのいずれにも当たらない「その他」の手口です。刑法犯の総数（442件）は秦野市（611件）より少ないものの、侵入盗の件数は秦野市の33件を上回っています。暫定値のため、年末までの累計や確定値では数字が変わる可能性があります。就寝前も玄関と窓の施錠を確かめることが基本で、玄関の錠を2つにする方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>伊勢原市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・伊勢原市の一覧に44件を掲載）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>神奈川県警察の暫定値では、伊勢原市の令和8年1〜10月の侵入盗は40件で、忍込み（7件）が空き巣（5件）を上回っていました。在宅中・就寝前も施錠を確かめ、鍵の不調や紛失があれば早めに交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/hadano/", label: "秦野市の鍵開け・鍵交換業者おすすめ3選" },
        { href: "/area/atsugi/", label: "厚木市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/hiratsuka/", label: "平塚市の鍵開け・鍵交換業者おすすめ4選" },
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
