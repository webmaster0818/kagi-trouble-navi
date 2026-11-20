import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/noda/";
const UPDATED = "2026年11月20日";
const UPDATED_ISO = "2026-11-20";
const CHECKED = "2026年11月20日確認";

const H1 = "【2026年最新】野田市の鍵開け・鍵交換業者おすすめ3選｜千葉県警の統計で見る野田市の侵入盗の増減も解説する鍵屋比較";
const DESC =
  "野田市への対応を公式サイトで2026年11月20日に確認できた鍵業者3社（カギ110番・鍵の生活救急車・鍵のレスキュー）の料金・受付時間を比較。千葉県警察の市町村別統計（令和8年8月末の暫定値）から、野田市の侵入盗が前年同期の112件から45件に減った一方、空き巣は10件から12件に増えたことをまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/chiba/noda/",
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
    catch: "野田市対応の加盟店79件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>千葉県野田市の鍵屋一覧</Hl>には「野田市対応」と表示された店舗が79件掲載されています。公式料金表では、自宅の<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間365日受付（野田市ページの表示）" },
    ],
    area: "公式の「千葉県野田市」の鍵屋一覧に、野田市対応の店舗79件を掲載",
    sources: [
      { label: "カギ110番「野田市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間365日", area: "野田市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>千葉県の対応エリアに野田市</Hl>が掲載されています。公式の料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>がかかり、最終価格は作業前に提示する見積書の価格としています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（千葉県）に野田市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表で<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記で<Hl>出張料4,400〜8,800円（税込）</Hl>を掲載しており、出張料は出張先の地域により異なるとしています。野田市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（野田市を名指しした案内はなし）",
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
    q: "野田市で玄関の鍵開けを頼むと、いくらかかりますか？",
    a: "各社の公式掲載（2026年11月20日確認）では、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格・20:00〜7:59は時間外料金8,800円）、鍵のレスキューが6,600円〜（税込、別に出張料4,400〜8,800円）です。いずれも最低額で、鍵の種類・時間帯・出張距離で総額が変わるため、作業前に総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "野田市では空き巣は増えているのですか？",
    a: "千葉県警察の市町村別の刑法犯認知件数（令和8年8月末の暫定値）によると、野田市の空き巣は12件で、前年同期の10件から2件増えました。一方、忍込みは12件から1件に、空き巣・忍込みを含む侵入盗全体は112件から45件に減っています。刑法犯全体は643件（前年同期635件）でした。",
  },
  {
    q: "野田市の侵入盗は、どの区分が減ったのですか？",
    a: "千葉県警察の表では、侵入盗を空き巣・忍込み・事務所荒し・出店荒し・その他侵入盗に分けています。内訳の定義は表に記載がないため、本記事では表の区分のまま掲載しています。野田市は前年同期の83件から27件に減り、侵入盗全体の減少の大部分を占めました。",
    link: { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口と対策" },
  },
  {
    q: "賃貸住宅で鍵をなくした場合は、すぐに業者を呼んでよいですか？",
    a: "賃貸住宅の鍵交換は、管理会社・大家の承諾が必要な場合が多いため、先に連絡してください。鍵開けだけを依頼する場合も、本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string][] = [
  ["侵入盗（合計）", "45件", "112件", "102件", "2,104件"],
  ["空き巣", "12件", "10件", "21件", "548件"],
  ["忍込み", "1件", "12件", "8件", "158件"],
  ["事務所荒し・出店荒し", "5件", "7件", "13件", "198件"],
  ["その他侵入盗", "27件", "83件", "60件", "1,200件"],
  ["刑法犯（総数）", "643件", "635件", "1,744件", "26,648件"],
];

export default function AreaNodaPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="野田市"
      pref="千葉県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["野田市", "千葉県", "鍵開け", "鍵交換", "空き巣", "業者比較"]}
      lead={[
        <>野田市で鍵のトラブルが起きたときに頼める業者のうち、公式サイトで野田市（または全国）への対応を確認できたのは、出張型の3社でした。夜間の割増や出張料の扱いは業者ごとに異なるため、急な依頼に備えて比べておくと判断しやすくなります。</>,
        <>本記事では、3社の公式に掲載された料金・受付時間を2026年11月20日に確認して比較しました。あわせて、千葉県警察が公表している市町村別の刑法犯認知件数（令和8年8月末の暫定値）から、野田市の侵入盗（空き巣・忍込みなど）の件数を前年同期と比べ、隣の柏市・千葉県全体と並べて整理しています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="千葉県警の統計で見る野田市の侵入盗（令和8年8月末・暫定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            千葉県警察は、刑法犯の認知件数を罪種・手口別に市町村ごとにまとめた表（暫定値・前年同期比）を公表しています。侵入盗の各区分について、野田市の令和8年8月末の件数を前年同期と比べ、柏市・千葉県全体と並べると次のとおりです。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">野田市 令和8年8月末</th>
                  <th className="border border-border px-3 py-2 text-left">野田市 前年同期</th>
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
            野田市の侵入盗は<Hl>前年同期の112件から45件</Hl>に減りました。減少の大部分は「その他侵入盗」（83件→27件）と忍込み（12件→1件）です。一方で<Hl>空き巣は10件から12件</Hl>に増えています。千葉県全体でも、忍込みが340件から158件に減る一方、空き巣は469件から548件に増えており、留守中の住宅をねらう被害が増えている点は県全体と同じ傾向です。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            空き巣は住人の外出中に入る手口のため、ごみ出しや近所への買い物など短時間の外出でも施錠することが基本です。玄関に補助錠を加えて1枚のドアに錠を2つにする方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口と対策は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。合鍵を玄関まわりに置かない理由は<Link href="/kagi-hokan-basho/" className="text-primary underline">鍵の保管場所</Link>で説明しています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>野田市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・野田市対応の加盟店79件を掲載）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>千葉県警察の暫定値では、野田市の侵入盗は令和8年8月末で45件と前年同期の112件から減りましたが、空き巣は10件から12件に増えました。外出時の施錠を徹底し、鍵の不調や紛失があれば交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/kashiwa/", label: "柏市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/nagareyama/", label: "流山市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/kasukabe/", label: "春日部市の鍵開け・鍵交換業者おすすめ4選" },
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
