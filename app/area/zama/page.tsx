import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/zama/";
const UPDATED = "2026年11月22日";
const UPDATED_ISO = "2026-11-22";
const CHECKED = "2026年11月22日確認";

const H1 = "【2026年最新】座間市の鍵開け・鍵交換業者おすすめ3選｜神奈川県警の統計で見る座間市の忍込み・空き巣の件数も解説する鍵屋比較";
const DESC =
  "神奈川県座間市への対応を公式サイトで2026年11月22日に確認できた鍵業者3社の料金・受付時間を比較。神奈川県警察の市区町村別統計（令和8年10月暫定値）から、座間市では忍込みが17件と空き巣の6件を上回ることを、海老名市・大和市・県全体と並べてまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/kanagawa/zama/",
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
    catch: "座間市の一覧ページに50件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>座間市（相武台前・入谷など）の鍵屋一覧</Hl>には50件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料が別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間365日受付（公式サイトの表示）" },
    ],
    area: "公式の「座間市の鍵屋一覧」に、50件の店舗を掲載",
    sources: [
      { label: "カギ110番「座間市（相武台前・入谷など）の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間365日受付", area: "座間市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>神奈川県の対応エリアに座間市</Hl>が掲載されています。標準価格の料金表では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示される見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧に座間市を掲載",
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
    catch: "全国統一の簡易料金表と出張料を公式に掲載",
    intro: (
      <>
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されています。座間市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（座間市を名指しした案内はなし）",
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
    q: "座間市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月22日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額で、鍵の種類・時間帯・出張距離で総額が変わるため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "座間市では忍込みが多いのですか？",
    a: "神奈川県警察の「窃盗犯 手口別 市区町村別 認知件数」（令和8年10月暫定値）では、座間市の忍込みは17件で、空き巣の6件より多くなっています。神奈川県全体では空き巣のほうが多く、座間市は県全体と逆の傾向です。暫定値のため、今後変わる場合があります。",
  },
  {
    q: "夜中に鍵をなくした場合、料金は変わりますか？",
    a: "鍵の生活救急車は、20:00〜7:59の作業に時間外料金8,800円がかかると料金表に明記しています。カギ110番と鍵のレスキューは24時間365日の受付としていますが、時間帯による割増の有無は依頼時に総額で確認してください（2026年11月22日確認）。",
  },
  {
    q: "鍵交換と補助錠の追加は、どちらを先に考えればよいですか？",
    a: "鍵をなくした、鍵が古く動きが悪いといった場合は、まず鍵（シリンダー）の交換を検討します。今の鍵に問題がなく、防犯性を高めたい場合は、補助錠を加えて1枚のドアに錠を2つにする方法があります。賃貸住宅では、どちらも作業の前に管理会社・大家へ相談してください。",
    link: { href: "/hojo-jou/", label: "補助錠の選び方" },
  },
];

const statRows: [string, string, string, string, string][] = [
  ["空き巣", "6件", "8件", "7件", "396件"],
  ["忍込み", "17件", "21件", "3件", "141件"],
  ["居空き", "0件", "0件", "0件", "29件"],
  ["住宅を狙う3手口の合計", "23件", "29件", "10件", "566件"],
  ["侵入盗の総数（事務所荒し等を含む）", "53件", "49件", "96件", "1,758件"],
];

export default function AreaZamaPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="座間市"
      pref="神奈川県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["座間市", "神奈川県", "鍵開け", "鍵交換", "忍込み", "業者比較"]}
      lead={[
        <>座間市で鍵が開かない、鍵をなくしたといったときに、公式サイトで座間市（または全国）への対応を確かめた鍵業者3社を掲載しています。最低料金だけでなく、出張料と夜間の扱いを含めた総額で比べることが大切です。</>,
        <>本記事では、3社の公式料金と受付時間を2026年11月22日に確認して比較しました。あわせて、神奈川県警察が毎月更新している市区町村別の窃盗の手口別件数から、座間市の忍込み・空き巣の件数を、隣の海老名市・大和市と神奈川県全体と比べています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="神奈川県警の統計で見る座間市の忍込み・空き巣（令和8年10月暫定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            神奈川県警察は「窃盗犯 手口別 市区町村別 認知件数」を毎月更新して公表しています。最新の令和8年10月暫定値（令和8年1月〜10月の累計）から、座間市と隣の海老名市・大和市、神奈川県全体の侵入盗を手口別に並べました。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">手口</th>
                  <th className="border border-border px-3 py-2 text-left">座間市</th>
                  <th className="border border-border px-3 py-2 text-left">海老名市</th>
                  <th className="border border-border px-3 py-2 text-left">大和市</th>
                  <th className="border border-border px-3 py-2 text-left">神奈川県</th>
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
            出典：<Ext href={SRC.police}>神奈川県警察「刑法犯 罪名別 市区町村別 認知件数」</Ext>（<Ext href={SRC.policePdf}>印刷用PDF</Ext>の「窃盗犯 手口別 市区町村別 認知件数」、令和8年10月暫定値、{CHECKED}）。表の「-」は0件として扱い、「住宅を狙う3手口の合計」は当サイトが空き巣・忍込み・居空きを足して算出しました。県警は、この表は市区町村別に発生件数をとらえているため、各警察署で把握している数値とは異なるとしています。
          </p>
          <p className="leading-loose mb-4">
            座間市の侵入盗は令和8年1月〜10月で53件で、このうち住宅をねらう空き巣・忍込み・居空きは計23件でした。特徴は、<Hl>夜間などに住人が寝ている間に入る忍込みが17件と、空き巣の6件を大きく上回っている</Hl>ことです。神奈川県全体では空き巣（396件）が忍込み（141件）の約2.8倍で、座間市は県全体と逆の傾向でした。隣の海老名市も忍込み21件・空き巣8件と同じ傾向で、大和市は空き巣のほうが多くなっています。暫定値のため、年末までの累計や確定値では数字が変わる可能性があります。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            忍込みへの備えとしては、外出時だけでなく、就寝前に玄関・勝手口・窓の施錠を確かめることが基本です。1枚のドアに錠を2つにする方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口と対策は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>座間市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・座間市の一覧に50件）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>神奈川県警察の令和8年10月暫定値では、座間市の住宅をねらう侵入盗は23件で、うち17件が忍込みでした。就寝前の施錠を確かめ、鍵の紛失や不調があれば交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/yamato/", label: "大和市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/sagamihara/", label: "相模原市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/atsugi/", label: "厚木市の鍵開け・鍵交換業者おすすめ4選" },
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
