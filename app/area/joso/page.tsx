import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/joso/";
const UPDATED = "2026年11月24日";
const UPDATED_ISO = "2026-11-24";
const CHECKED = "2026年11月24日確認";

const H1 = "【2026年最新】常総市の鍵開け・鍵交換業者おすすめ3選｜茨城県警の統計で見る常総市の忍込み・住宅侵入窃盗の件数も解説する鍵屋比較";
const DESC =
  "茨城県常総市への対応を公式サイトで2026年11月24日に確認できた鍵業者3社の料金・受付時間を比較。茨城県警察の市町村別統計（令和7年確定値）から、常総市の住宅侵入窃盗45件のうち忍込みが23件と空き巣を上回り、世帯当たりの忍込みの率が県内44市町村で4番目に高かったことを下妻市・つくばみらい市と並べています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/ibaraki/joso/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  policeList: "https://www.pref.ibaraki.jp/kenkei/a01_safety/statistics/shichoson.html",
  policeR7: "https://www.pref.ibaraki.jp/kenkei/a01_safety/statistics/documents/r07-12_number-of-reported-rrimes.pdf",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "常総市の一覧ページに37件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>茨城県常総市の鍵屋一覧</Hl>には37件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間受付（常総市ページの表示）" },
    ],
    area: "公式の「茨城県常総市」の鍵屋一覧に、37件の店舗を掲載",
    sources: [
      { label: "カギ110番「常総市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間受付", area: "常総市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>茨城県の対応エリアに常総市</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示する見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（茨城県）に常総市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。常総市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（常総市を名指しした案内はなし）",
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
    q: "常総市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月24日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "常総市では忍込みが多いのですか？",
    a: "茨城県警察の確定値では、常総市の住宅侵入窃盗は令和7年に45件（前年39件）でした。内訳は空き巣22件、忍込み23件、居空き0件で、夜間など家人が寝ている間に入られる忍込みが前年の15件から8件増え、空き巣を上回りました。世帯1,000当たりの忍込みの件数（0.970）は、県内44市町村のうち高い方から4番目です。",
  },
  {
    q: "下妻市・つくばみらい市と比べるとどうですか？",
    a: "同じ資料の令和7年で、下妻市の住宅侵入窃盗は23件（世帯1,000当たり1.299）、つくばみらい市は25件（同1.151）、坂東市は15件（同0.754）でした。常総市は45件（同1.898）で、茨城県全体の1.018を上回っています。世帯数が異なるため、件数だけでなく率もあわせてご覧ください。",
    link: { href: "/area/shimotsuma/", label: "下妻市の鍵開け・鍵交換業者おすすめ3選" },
  },
  {
    q: "賃貸住宅で鍵をなくしたときは、先に何をすればよいですか？",
    a: "賃貸住宅の鍵交換は管理会社・大家の承諾が必要なことが多いため、まず連絡してください。鍵開けだけを頼む場合も、作業前に本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["常総市 令和7年", "45件", "22件", "23件", "0件", "1.898"],
  ["常総市 令和6年", "39件", "23件", "15件", "1件", "—"],
  ["下妻市 令和7年", "23件", "9件", "13件", "1件", "1.299"],
  ["つくばみらい市 令和7年", "25件", "8件", "17件", "0件", "1.151"],
  ["坂東市 令和7年", "15件", "9件", "6件", "0件", "0.754"],
  ["茨城県 令和7年", "1,264件", "740件", "502件", "22件", "1.018"],
];

export default function AreaJosoPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="常総市"
      pref="茨城県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["常総市", "茨城県", "鍵開け", "鍵交換", "忍込み", "業者比較"]}
      lead={[
        <>常総市で家の鍵をなくした、玄関の鍵を防犯性の高いものに替えたいといったときに、公式サイトで常総市（または全国）への対応を確認できた鍵業者は3社でした。料金表の最低額と、夜間の時間外料金・出張料を並べています。</>,
        <>3社の料金・受付時間は2026年11月24日に公式ページで確認しました。後半では、茨城県警察の市町村別統計（令和7年確定値）から常総市の住宅侵入窃盗を手口別に取り出し、隣接する下妻市・つくばみらい市・坂東市、茨城県全体と比べています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="茨城県警の統計で見る常総市の忍込み・住宅侵入窃盗（令和7年確定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            茨城県警察は、市町村別の認知件数と犯罪率を公開しています。令和7年12月末（確定値）の「住宅侵入窃盗」の表から、常総市と隣接する下妻市・つくばみらい市・坂東市、茨城県総数を抜き出しました。常総市の令和6年の値は、同じ表の「前年同期比 増減数」から当サイトが算出したものです。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">住宅侵入窃盗</th>
                  <th className="border border-border px-3 py-2 text-left">空き巣</th>
                  <th className="border border-border px-3 py-2 text-left">忍込み</th>
                  <th className="border border-border px-3 py-2 text-left">居空き</th>
                  <th className="border border-border px-3 py-2 text-left">世帯1,000当たり</th>
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
            出典：<Ext href={SRC.policeList}>茨城県警察「市町村別の認知件数・犯罪率」</Ext>の<Ext href={SRC.policeR7}>令和7年12月末（確定値）</Ext>「市町村別認知件数・犯罪率【住宅侵入窃盗】」（{CHECKED}）。右端の数値は世帯1,000当たりの住宅侵入窃盗の認知件数（犯罪率）で、世帯数は令和7年1月1日現在です。表の「-」は0件として扱いました。
          </p>
          <p className="leading-loose mb-4">
            常総市の住宅侵入窃盗は<Hl>39件から45件</Hl>に増えました。空き巣は23件から22件とほぼ横ばいでしたが、<Hl>忍込みが15件から23件</Hl>に増え、空き巣を上回っています。世帯1,000当たりの住宅侵入窃盗は1.898で、県内44市町村のうち高い方から7番目、忍込みに限ると0.970で4番目でした。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            忍込みは、夜間など家人が在宅している時間帯に入られる手口です。就寝前に玄関・勝手口・窓の施錠を確かめること、錠が古い場合は交換や補助錠の追加を検討することが基本になります。玄関の錠を2つにする方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>常総市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・常総市の一覧に37件を掲載）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>茨城県警察の確定値では、常総市の住宅侵入窃盗は令和7年に45件で、そのうち忍込みが23件と空き巣を上回りました。夜間の施錠を確かめ、鍵の紛失や不調があれば早めに交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/shimotsuma/", label: "下妻市の鍵開け・鍵交換業者おすすめ3選" },
        { href: "/area/tsukuba/", label: "つくば市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/toride/", label: "取手市の鍵開け・鍵交換業者おすすめ3選" },
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
