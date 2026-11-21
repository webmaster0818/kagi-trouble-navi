import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/daito/";
const UPDATED = "2026年11月18日";
const UPDATED_ISO = "2026-11-18";
const CHECKED = "2026年11月18日確認";

const H1 = "【2026年最新】大東市の鍵開け・鍵交換業者おすすめ5選｜大阪府警の統計で見る大東市の空き巣・忍込みの件数も解説する鍵屋比較";
const DESC =
  "大東市への対応を公式サイトで2026年11月18日に確認できた鍵業者5社（カギ110番・鍵の生活救急車・鍵のレスキュー・カギの救急車 大東市住道駅前受付センター・同 大東市鴻池新田受付センター）の料金・受付時間を比較。大阪府警察の令和7年確定値から、大東市の空き巣・忍込み・居空きの件数を前年と比べてまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/osaka/daito/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  kqSuminodo: "https://www.kagi1109948.com/shop/99osaka-daitoshi/",
  kqKonoike: "https://www.kagi1109948.com/shop/99osaka-daitoshi-2/",
  policeR7: "https://www.police.pref.osaka.lg.jp/seikatsu/hanzai/23306.html",
  policeR6: "https://www.police.pref.osaka.lg.jp/seikatsu/hanzai/17666.html",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "大東市の加盟店ページあり",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>大阪府大東市の鍵業者一覧</Hl>には「大東市対応」と表示された店舗が掲載されています。公式料金表では、自宅の<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途発生する場合があると記載されています。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間365日（大東市ページの表示）" },
    ],
    area: "公式の「大阪府大東市」の鍵業者一覧に、大東市対応の店舗を掲載",
    sources: [
      { label: "カギ110番「大東市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間365日", area: "大東市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>大阪府の対応エリアに大東市</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。20:00〜7:59の作業には<Hl>時間外料金8,800円</Hl>がかかり、最終価格は作業前に提示する見積書の価格としています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "見積もり", v: "現地見積もりは無料（公式の料金案内）" },
    ],
    area: "公式の対応エリア一覧（大阪府）に大東市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表で<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記で<Hl>出張料4,400〜8,800円（税込）</Hl>を掲載しています。大東市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（市を名指しした案内はなし）",
    sources: [
      { label: "鍵のレスキュー よくある質問「出張できないエリアはありますか？」", href: SRC.rescueFaq },
      { label: "簡易料金表", href: SRC.rescuePrice },
      { label: "特定商取引法上の表記", href: SRC.rescueTokusho },
    ],
    checked: CHECKED,
    compare: { price: "6,600円〜（税込）＋出張料", reception: "24時間365日", area: "全国出張（公式FAQ）" },
  },
  {
    id: "kagi-kyukyusha-suminodo",
    slug: "kagi-kyukyusha",
    name: "カギの救急車 大東市住道駅前受付センター",
    catch: "8:00〜22:00受付・料金目安を掲載",
    intro: (
      <>
        カギの救急車は、全国の鍵屋が加盟する「カギの110番・カギの救急車」のネットワークです。公式の店舗案内にある<Hl>「カギの救急車 大東市住道駅前受付センター」</Hl>は、大東市内と近郊（門真市・四條畷市・東大阪市・寝屋川市・交野市・八尾市・大阪市鶴見区など）へ出張する受付です。出張専門で店舗はなく、合鍵の作製は近鉄八尾駅前店で受け付けています。料金目安は<Hl>鍵交換（シリンダー交換）16,500円〜、ディンプルキーのシリンダー交換22,000円〜</Hl>で、消費税・出張費・工事費・商品代を含んだ金額と記載されています。
      </>
    ),
    rows: [
      { k: "鍵交換（シリンダー）", v: "16,500円〜", note: "消費税・出張費・工事費・商品代込み（公式の料金目安）" },
      { k: "鍵交換（ディンプルキー）", v: "22,000円〜" },
      { k: "補助錠・新規の鍵の取り付け", v: "22,000円〜" },
      { k: "電話受付", v: "8:00〜22:00（年中無休）" },
      { k: "支払い", v: "現金・クレジットカード（VISA/MASTER/JCB/American Express/Diners Club）" },
    ],
    area: "大東市内および近郊エリアへ出張（受付センターのページ）",
    sources: [{ label: "カギの救急車「大東市住道駅前受付センター」", href: SRC.kqSuminodo }],
    checked: CHECKED,
    compare: { price: "鍵交換16,500円〜（税・出張費込）", reception: "8:00〜22:00（年中無休）", area: "大東市の受付センターあり" },
  },
  {
    id: "kagi-kyukyusha-konoike",
    slug: "kagi-kyukyusha",
    name: "カギの救急車 大東市鴻池新田受付センター",
    catch: "住宅の鍵開けの料金目安を掲載・喜連瓜破店が対応",
    intro: (
      <>
        同じカギの救急車の<Hl>「大東市鴻池新田受付センター」</Hl>は、大阪市平野区の「カギの救急車 喜連瓜破店」が対応する出張専門の受付です。大東市全域へ出張するとしており、対応町名として住道・野崎・北条・深野・龍間などを挙げています。料金目安は<Hl>住宅の鍵開け（一般のシリンダー錠）16,500円〜、ディンプルキーなどの特殊な鍵開け27,500円〜</Hl>で、消費税・出張費・工事費・商品代込みの金額です。車・バイクの鍵、スマートロック・電気錠などには現在対応していないと記載されています。
      </>
    ),
    rows: [
      { k: "住宅の鍵開け（一般シリンダー錠）", v: "16,500円〜", note: "消費税・出張費・工事費・商品代込み（公式の料金目安）" },
      { k: "住宅の特殊な鍵開け", v: "27,500円〜", note: "ディンプルキー・防犯サムターン等" },
      { k: "鍵交換（シリンダー）", v: "16,500円〜（ディンプルキーは24,200円〜）" },
      { k: "電話受付", v: "10:00〜18:00（GW・年末年始は休業、不定休あり）" },
      { k: "対応していない作業", v: "車・バイク関係、スマートロック・電気錠、自動ドアの脱着など" },
    ],
    area: "大東市全域へ出張（受付センターのページ）。近隣の東大阪市・門真市・四條畷市なども対応",
    sources: [{ label: "カギの救急車「大東市鴻池新田受付センター」", href: SRC.kqKonoike }],
    checked: CHECKED,
    compare: { price: "鍵開け16,500円〜（税・出張費込）", reception: "10:00〜18:00", area: "大東市の受付センターあり" },
  },
];

const faqs: CityFaq[] = [
  {
    q: "大東市で鍵開けを頼むと、いくらかかりますか？",
    a: "各社の公式掲載（2026年11月18日確認）では、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格）、鍵のレスキューが6,600円〜（税込、別に出張料4,400〜8,800円）、カギの救急車 大東市鴻池新田受付センターが住宅の一般的な鍵で16,500円〜（税・出張費込み）です。表示の基準（出張料を含むかどうか）が業者ごとに異なるため、作業前に総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "車の鍵の閉じ込みは、どこに頼めますか？",
    a: "カギの救急車 大東市鴻池新田受付センターは、車・バイク関係の作業に現在対応していないと公式ページに記載しています。車の鍵については、依頼前に各業者へ対応できるかを確認してください。",
    link: { href: "/car-inlock/", label: "車のインロックの対処" },
  },
  {
    q: "大東市では空き巣の被害は増えていますか？",
    a: "大阪府警察の犯罪統計（確定値）によると、大東市の空き巣は令和7年6件（令和6年6件）、忍込みは0件（同3件）、居空きは0件（同0件）でした。事務所荒しなども含む侵入窃盗全体では、令和7年16件（令和6年28件）です。",
  },
  {
    q: "賃貸住宅で鍵をなくした場合は、すぐに業者を呼んでよいですか？",
    a: "賃貸住宅の鍵交換は、管理会社・大家の承諾が必要な場合が多いため、先に連絡してください。鍵開けだけを依頼する場合も、本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string][] = [
  ["空き巣", "6件", "6件", "452件", "440件"],
  ["忍込み", "0件", "3件", "142件", "92件"],
  ["居空き", "0件", "0件", "30件", "47件"],
  ["3つの合計", "6件", "9件", "624件", "579件"],
  ["侵入窃盗の全体", "16件", "28件", "1,725件", "1,497件"],
];

export default function AreaDaitoPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="大東市"
      pref="大阪府"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["大東市", "大阪府", "鍵開け", "鍵交換", "空き巣", "業者比較"]}
      lead={[
        <>大東市には、カギの救急車の受付センターが市名を冠して2か所あり、全国から出張する業者とあわせて選択肢の多い地域です。一方で、料金の表示が「出張費込み」か「別途」か、受付が24時間か日中のみかは業者ごとに異なります。</>,
        <>本記事では、大東市（または全国）への対応を各社の公式サイトで2026年11月18日に確認できた鍵業者5社を、公式に掲載された料金・受付時間とあわせて比較しました。あわせて、大阪府警察の犯罪統計から、大東市の住宅を狙った侵入窃盗（空き巣・忍込み・居空き）の件数を整理しています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="大阪府警の統計で見る大東市の空き巣・忍込み（令和7年確定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            大阪府警察は、毎年の犯罪統計（確定値）で「刑法犯罪種及び手口別発生市区町村別認知件数」を公表しています。この表では、侵入窃盗のうち住宅を対象とする<Hl>空き巣・忍込み・居空き</Hl>が手口ごとに集計されています。大東市と大阪府内の件数を、令和7年と令和6年で比べると次のとおりです。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">手口</th>
                  <th className="border border-border px-3 py-2 text-left">大東市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">大東市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">大阪府内 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">大阪府内 令和6年</th>
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
            出典：<Ext href={SRC.policeR7}>大阪府警察「令和7年中の犯罪統計（確定値）」</Ext>、<Ext href={SRC.policeR6}>同「令和6年中の犯罪統計（確定値）」</Ext>の「9 刑法犯罪種及び手口別発生市区町村別認知件数」（いずれも{CHECKED}）。表の「-」は0件として扱い、「3つの合計」は当サイトが3項目を足して算出しました。大阪府内の数値は同じ表の「大阪府内計」の行です。「侵入窃盗の全体」には、事務所荒し・出店荒しなど住宅以外を対象とする手口も含まれます。
          </p>
          <p className="leading-loose mb-4">
            大東市の空き巣・忍込み・居空きの合計は<Hl>令和7年6件・令和6年9件</Hl>で、件数は多くありません。ただし大阪府内全体では579件から624件へ増えており、特に忍込み（夜間、住人が寝ている間の侵入）は92件から142件へ増えています。なお、大東市の刑法犯全体の認知件数は令和7年1,181件（令和6年1,218件）でした。
          </p>
          <p className="leading-loose mb-4">
            件数が少ない年でも、外出時や就寝前に玄関と窓を施錠することが基本です。玄関に補助錠を加える方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口と対策は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。古い鍵の交換を検討する場合は、上の業者に見積もりを依頼してください。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>大東市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）、カギの救急車 大東市住道駅前受付センター（鍵交換16,500円〜・税と出張費込み）、同 大東市鴻池新田受付センター（鍵開け16,500円〜・税と出張費込み）の5社でした。</>,
        <>大阪府警察の確定値では、大東市の空き巣・忍込み・居空きの合計は令和7年6件と少数でした。府内全体では忍込みが増えているため、就寝前の施錠もあわせてご確認ください。</>,
      ]}
      nearby={[
        { href: "/area/higashiosaka/", label: "東大阪市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/neyagawa/", label: "寝屋川市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/osaka/", label: "大阪の鍵開け・鍵交換業者おすすめ5選" },
        { href: "/area/shijonawate/", label: "四條畷市の鍵開け・鍵交換業者おすすめ3選" },
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
