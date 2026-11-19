import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/hadano/";
const UPDATED = "2026年11月20日";
const UPDATED_ISO = "2026-11-20";
const CHECKED = "2026年11月20日確認";

const H1 = "【2026年最新】秦野市の鍵開け・鍵交換業者おすすめ3選｜神奈川県警の統計で見る秦野市の空き巣・忍込みの件数も解説する鍵屋比較";
const DESC =
  "秦野市への対応を公式サイトで2026年11月20日に確認できた鍵業者3社（カギ110番・鍵の生活救急車・鍵のレスキュー）の料金・受付時間を比較。神奈川県警察の令和8年10月暫定値から、秦野市の侵入盗33件の内訳（空き巣11件・忍込み1件など）を平塚市・県全体と比べてまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/kanagawa/hadano/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
  police: "https://www.police.pref.kanagawa.jp/tokei/hanzai_tokei/mesc0027.html",
  policePdf: "https://www.police.pref.kanagawa.jp/assets/entry/c0027_01.pdf",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "秦野市の加盟店ページあり",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>神奈川県秦野市の鍵屋一覧</Hl>には「秦野市対応」と表示された店舗が掲載されています。公式料金表では、自宅の<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間365日受付（秦野市ページの表示）" },
    ],
    area: "公式の「神奈川県秦野市」の鍵屋一覧に、秦野市対応の店舗を掲載",
    sources: [
      { label: "カギ110番「秦野市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間365日", area: "秦野市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>神奈川県の対応エリアに秦野市</Hl>が掲載されています。公式の料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>がかかり、最終価格は作業前に提示する見積書の価格としています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（神奈川県）に秦野市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表で<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記で<Hl>出張料4,400〜8,800円（税込）</Hl>を掲載しており、出張料は出張先の地域により異なるとしています。秦野市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（秦野市を名指しした案内はなし）",
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
    q: "秦野市で鍵開けを頼むと、いくらかかりますか？",
    a: "各社の公式掲載（2026年11月20日確認）では、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格・20:00〜7:59は時間外料金8,800円）、鍵のレスキューが6,600円〜（税込、別に出張料4,400〜8,800円）です。いずれも最低額で、鍵の種類・時間帯・出張距離で総額が変わるため、作業前に総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "秦野市では、住宅を狙った空き巣は多いですか？",
    a: "神奈川県警察の「窃盗犯 手口別 市区町村別 認知件数」（令和8年10月暫定値）によると、秦野市の侵入盗は33件で、このうち住宅を狙う手口は空き巣11件・忍込み1件・居空き0件の計12件でした。残りは事務所荒し1件・出店荒し6件・その他14件です。暫定値のため、今後変わる場合があります。",
  },
  {
    q: "夜中に鍵をなくした場合、料金は変わりますか？",
    a: "鍵の生活救急車は、20:00〜7:59の作業に時間外料金8,800円がかかると料金表に明記しています。カギ110番と鍵のレスキューは24時間365日の受付としていますが、時間帯による割増の有無は依頼時に総額で確認してください（2026年11月20日確認）。",
  },
  {
    q: "鍵交換と補助錠の追加は、どちらを先に考えればよいですか？",
    a: "鍵をなくした、鍵が古く動きが悪いといった場合は、まず鍵（シリンダー）の交換を検討します。今の鍵に問題がなく、防犯性を高めたい場合は、補助錠を加えて1枚のドアに錠を2つにする方法があります。賃貸住宅では、どちらも作業の前に管理会社・大家へ相談してください。",
    link: { href: "/hojo-jou/", label: "補助錠の選び方" },
  },
];

const statRows: [string, string, string, string][] = [
  ["空き巣", "11件", "13件", "396件"],
  ["忍込み", "1件", "6件", "141件"],
  ["居空き", "0件", "1件", "29件"],
  ["住宅を狙う3手口の合計", "12件", "20件", "566件"],
  ["侵入盗の総数（事務所荒し等を含む）", "33件", "59件", "1,758件"],
];

export default function AreaHadanoPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="秦野市"
      pref="神奈川県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["秦野市", "神奈川県", "鍵開け", "鍵交換", "空き巣", "業者比較"]}
      lead={[
        <>秦野市で鍵のトラブルに対応する業者を、各社の公式サイトで秦野市（または全国）への対応を確かめたうえで掲載しています。料金の表示は、出張料を含むかどうかや夜間の扱いが業者ごとに異なります。</>,
        <>本記事では、2026年11月20日に公式サイトで対応を確認できた鍵業者3社を、公式に掲載された料金・受付時間とあわせて比較しました。あわせて、神奈川県警察が公表している市区町村別の窃盗の手口別件数から、秦野市の空き巣・忍込みの件数を、隣の平塚市・神奈川県全体と比べて整理しています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="神奈川県警の統計で見る秦野市の空き巣・忍込み（令和8年10月暫定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            神奈川県警察は「窃盗犯 手口別 市区町村別 認知件数」を毎月更新して公表しています。最新の令和8年10月暫定値（令和8年1月〜10月の累計）で、秦野市の侵入盗を手口別に見ると次のとおりです。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">手口</th>
                  <th className="border border-border px-3 py-2 text-left">秦野市</th>
                  <th className="border border-border px-3 py-2 text-left">平塚市</th>
                  <th className="border border-border px-3 py-2 text-left">神奈川県</th>
                </tr>
              </thead>
              <tbody>
                {statRows.map(([k, a, b, c], i) => (
                  <tr key={k} className={i % 2 === 1 ? "bg-[#F5F8FC]" : "bg-white"}>
                    <th className="border border-border px-3 py-2 whitespace-nowrap bg-[#EAF1F8] text-left font-bold">{k}</th>
                    <td className="border border-border px-3 py-2">{a}</td>
                    <td className="border border-border px-3 py-2">{b}</td>
                    <td className="border border-border px-3 py-2">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-6 leading-relaxed">
            出典：<Ext href={SRC.police}>神奈川県警察「刑法犯 罪名別 市区町村別 認知件数」</Ext>（<Ext href={SRC.policePdf}>印刷用PDF</Ext>の「窃盗犯 手口別 市区町村別 認知件数」、令和8年10月暫定値、{CHECKED}）。表の「-」は0件として扱い、「住宅を狙う3手口の合計」は当サイトが空き巣・忍込み・居空きを足して算出しました。県警は、この表は市区町村別に発生件数をとらえているため、各警察署で把握している数値とは異なるとしています。
          </p>
          <p className="leading-loose mb-4">
            秦野市の侵入盗は令和8年1月〜10月で33件で、このうち<Hl>住宅を狙う空き巣・忍込み・居空きは計12件</Hl>でした。手口別では<Hl>空き巣が11件</Hl>と大半を占め、夜間に寝ている間に入る忍込みは1件です。神奈川県全体では空き巣396件・忍込み141件で、空き巣が多いという点は県全体と同じでした。暫定値のため、年末までの累計や確定値では数字が変わる可能性があります。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            空き巣は住人の外出中に入る手口のため、短時間の外出でも玄関と窓を施錠することが基本です。玄関に補助錠を加える方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口と対策は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>秦野市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・24時間365日受付）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>神奈川県警察の令和8年10月暫定値では、秦野市の住宅を狙う侵入盗は12件で、うち11件が空き巣でした。外出時の施錠を徹底し、鍵の紛失や不調があれば交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/hiratsuka/", label: "平塚市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/atsugi/", label: "厚木市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/odawara/", label: "小田原市の鍵開け・鍵交換業者おすすめ4選" },
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
