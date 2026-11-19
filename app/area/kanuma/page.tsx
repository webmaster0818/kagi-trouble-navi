import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/kanuma/";
const UPDATED = "2026年11月18日";
const UPDATED_ISO = "2026-11-18";
const CHECKED = "2026年11月18日確認";

const H1 = "【2026年最新】鹿沼市の鍵開け・鍵交換業者おすすめ4選｜気象庁の平年値で見る鹿沼の冬の朝の冷え込みと鍵穴の凍結も解説する鍵屋比較";
const DESC =
  "鹿沼市への対応を公式サイトで2026年11月18日に確認できた鍵業者4社（カギ110番・鍵の生活救急車・鍵のレスキュー・カギの救急車 鹿沼市コールセンター）の料金・受付時間を比較。気象庁の平年値で鹿沼と宇都宮の冬の最低気温を比べ、鍵穴の凍結に注意したい時期もまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/tochigi/kanuma/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  kqKanuma: "https://www.kagi1109948.com/shop/99tochigi-kanumashi/",
  jmaKanuma: "https://www.data.jma.go.jp/stats/etrn/view/nml_amd_ym.php?prec_no=41&block_no=0335&year=&month=&day=&view=",
  jmaUtsunomiya: "https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_ym.php?prec_no=41&block_no=47615&year=&month=&day=&view=",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "鹿沼市の加盟店ページあり",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>栃木県鹿沼市の鍵業者一覧</Hl>には、「鹿沼市対応」と表示された店舗が掲載されています。公式料金表では、自宅の<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途発生する場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間365日（鹿沼市ページの表示）" },
    ],
    area: "公式の「栃木県鹿沼市」の鍵業者一覧に、鹿沼市対応の店舗を掲載",
    sources: [
      { label: "カギ110番「鹿沼市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間365日", area: "鹿沼市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>栃木県の対応エリアに鹿沼市</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。20:00〜7:59の作業には<Hl>時間外料金8,800円</Hl>がかかり、最終価格は作業前に提示する見積書の価格としています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "見積もり", v: "現地見積もりは無料（公式の料金案内）" },
    ],
    area: "公式の対応エリア一覧（栃木県）に鹿沼市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表で<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記で<Hl>出張料4,400〜8,800円（税込）</Hl>を掲載しています。鹿沼市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
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
    id: "kagi-kyukyusha",
    slug: "kagi-kyukyusha",
    name: "カギの救急車 鹿沼市コールセンター",
    catch: "車・バイク・重機の鍵が中心・宇都宮店の受付",
    intro: (
      <>
        カギの救急車は、全国の鍵屋が加盟する「カギの110番・カギの救急車」のネットワークです。公式の店舗案内にある<Hl>「カギの救急車 鹿沼市コールセンター」</Hl>は、宇都宮市今泉町の「カギの救急車 宇都宮店」の出張受付窓口です。ページでは<Hl>車・バイク・重機の鍵（イモビライザーキー・スマートキー・リモコンキー）を中心</Hl>に扱うとしており、鹿沼市と近郊（日光市・壬生町など）へ出張します。来店時の料金目安として、国産車のイモビライザー付き合鍵作成11,000円〜19,800円などを掲載しています。住宅の鍵を依頼する場合は、電話で対応できるかを確認してください。
      </>
    ),
    rows: [
      { k: "主な対応", v: "車・バイク・重機の鍵（作成・追加登録・修理・インロック等）" },
      { k: "イモビライザー付き合鍵（国産車）", v: "11,000円〜19,800円", note: "来店時の料金目安。車種・年式・作成方法で変動" },
      { k: "鍵をすべてなくした場合のエンジン始動キー作製", v: "44,000円〜99,000円", note: "来店時の料金目安" },
      { k: "電話受付", v: "平日8:30〜18:30・日祝8:30〜17:30（水曜定休、年末年始・GW休み）" },
      { k: "支払い", v: "現金・クレジットカード・QR決済" },
    ],
    area: "鹿沼市および近郊（日光市・壬生町など）へ出張。近郊は別途出張料の場合あり",
    sources: [{ label: "カギの救急車「鹿沼市コールセンター」", href: SRC.kqKanuma }],
    checked: CHECKED,
    compare: { price: "車の鍵は料金目安を掲載", reception: "8:30〜18:30（水曜定休）", area: "鹿沼市の受付窓口あり（車の鍵が中心）" },
  },
];

const faqs: CityFaq[] = [
  {
    q: "鹿沼市で家の鍵開けを頼むと、いくらかかりますか？",
    a: "各社の公式掲載（2026年11月18日確認）では、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格・ハイセキュリティは29,700円〜）、鍵のレスキューが6,600円〜（税込、別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前に総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "車の鍵をすべてなくした場合は、どこに相談できますか？",
    a: "カギの救急車 鹿沼市コールセンターは、車・バイク・重機の鍵を中心に扱うと公式ページに記載しており、鍵をすべてなくした場合のエンジン始動キー作製の料金目安（来店時44,000円〜99,000円）も掲載しています。販売店（ディーラー）で純正キーを注文する方法もあります。",
    link: { href: "/kuruma-spare-key/", label: "車のスペアキーの作り方" },
  },
  {
    q: "冬の朝に鍵が回らないときは、すぐに業者を呼ぶべきですか？",
    a: "鹿沼では12月から2月にかけて日最低気温の平年値が0℃を下回るため、鍵穴の凍結が原因の場合があります。無理に力を加えると鍵が曲がったり折れたりするおそれがあるため、まず凍結時の対処を確認し、それでも開かない場合に業者へ依頼してください。",
    link: { href: "/kagiana-touketsu/", label: "鍵穴が凍ったときの対処" },
  },
  {
    q: "夜間に鍵をなくした場合、どこに頼めますか？",
    a: "カギ110番と鍵のレスキューは24時間365日の受付としています。鍵の生活救急車は20:00〜7:59の作業に時間外料金8,800円がかかると明記しています。カギの救急車 鹿沼市コールセンターの電話受付は平日8:30〜18:30・日祝8:30〜17:30（水曜定休）です（2026年11月18日確認）。",
  },
];

const tempRows: [string, string, string, string, string, string, string][] = [
  ["鹿沼（標高165m）", "4.2℃", "-1.1℃", "-3.5℃", "-3.0℃", "0.1℃", "5.5℃"],
  ["宇都宮（標高119.2m）", "5.7℃", "0.2℃", "-2.2℃", "-1.3℃", "2.1℃", "7.4℃"],
];

export default function AreaKanumaPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="鹿沼市"
      pref="栃木県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["鹿沼市", "栃木県", "鍵開け", "鍵交換", "鍵穴の凍結", "業者比較"]}
      lead={[
        <>鹿沼市で鍵のトラブルが起きたときは、全国から出張する鍵業者のほか、市内の受付窓口を持つ業者にも相談できます。ただし、業者によって得意とする鍵（住宅か車か）や受付時間が異なるため、依頼の前に確認しておくと判断しやすくなります。</>,
        <>本記事では、鹿沼市（または全国）への対応を各社の公式サイトで2026年11月18日に確認できた鍵業者4社を、公式に掲載された料金・受付時間とあわせて比較しました。あわせて、気象庁の平年値から、鹿沼で鍵穴の凍結に注意したい時期を宇都宮と比べて整理しています。</>,
      ]}
      agents={agents}
      themeId="touketsu"
      themeTitle="鹿沼市で鍵穴の凍結に注意したい時期（気象庁の平年値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            冬の朝に「鍵が入らない」「鍵が回らない」という相談の中には、鍵穴やその周りの凍結が原因のものがあります。鹿沼市内にある気象庁の観測地点「鹿沼」と、県庁所在地の「宇都宮」の平年値（1991〜2020年の30年平均）で、11月から4月の日最低気温を比べました。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">観測地点</th>
                  <th className="border border-border px-3 py-2 text-left">11月</th>
                  <th className="border border-border px-3 py-2 text-left">12月</th>
                  <th className="border border-border px-3 py-2 text-left">1月</th>
                  <th className="border border-border px-3 py-2 text-left">2月</th>
                  <th className="border border-border px-3 py-2 text-left">3月</th>
                  <th className="border border-border px-3 py-2 text-left">4月</th>
                </tr>
              </thead>
              <tbody>
                {tempRows.map(([k, ...vals], i) => (
                  <tr key={k} className={i % 2 === 1 ? "bg-[#F5F8FC]" : "bg-white"}>
                    <td className="border border-border px-3 py-2 font-bold">{k}</td>
                    {vals.map((v, j) => (
                      <td key={j} className={`border border-border px-3 py-2${v.startsWith("-") ? " font-bold" : ""}`}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-6 leading-relaxed">
            日最低気温の平年値（統計期間1991〜2020年）。太字は0℃未満の月。標高は気象庁の地点情報による。出典：<Ext href={SRC.jmaKanuma}>気象庁「鹿沼（栃木県） 平年値（年・月ごとの値）」</Ext>、<Ext href={SRC.jmaUtsunomiya}>気象庁「宇都宮（栃木県） 平年値（年・月ごとの値）」</Ext>（いずれも{CHECKED}）。平年値は30年間の平均であり、実際の気温は年や日によって変わります。
          </p>
          <p className="leading-loose mb-4">
            鹿沼では<Hl>12月から2月まで</Hl>日最低気温の平年値が0℃を下回り、1月は<Hl>-3.5℃</Hl>です。宇都宮で0℃を下回るのは1月・2月の2か月で、どの月も鹿沼のほうが<Hl>1.3〜2.0℃低く</Hl>なっています。宇都宮の予報を見て「それほど冷えない」と考えた朝でも、鹿沼ではより冷え込んでいる可能性があります。
          </p>
          <p className="leading-loose mb-4">
            鍵が回らないときは無理に力を加えず、<Link href="/kagiana-touketsu/" className="text-primary underline">鍵穴が凍ったときの対処</Link>を確認してください。寒冷地の都市ごとの最低気温は<Link href="/kagiana-touketsu/kanreichi/" className="text-primary underline">寒冷地の鍵穴凍結</Link>にまとめています。それでも開かない場合や、鍵が曲がった・折れた場合は、到着の目安と出張料を確認したうえで鍵業者へご依頼ください。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>鹿沼市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）、カギの救急車 鹿沼市コールセンター（車・バイク・重機の鍵が中心）の4社でした。</>,
        <>気象庁の平年値では、鹿沼は12〜2月の日最低気温が0℃を下回り、宇都宮より1.3〜2.0℃低くなっています。冬の朝に鍵が回らない場合は、凍結を疑って無理に回さないようにしてください。</>,
      ]}
      nearby={[
        { href: "/area/utsunomiya/", label: "宇都宮の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/oyama/", label: "小山市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/otawara/", label: "大田原市の鍵開け・鍵交換業者おすすめ2選" },
      ]}
      related={[
        { href: "/kagiana-touketsu/", label: "鍵穴が凍ったときの対処" },
        { href: "/kuruma-spare-key/", label: "車のスペアキーの作り方" },
        { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
        { href: "/kagiya-erabikata/", label: "鍵屋・鍵業者の選び方チェックリスト" },
      ]}
    />
  );
}
