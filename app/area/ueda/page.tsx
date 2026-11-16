import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/ueda/";
const UPDATED = "2026年11月16日";
const UPDATED_ISO = "2026-11-16";
const CHECKED = "2026年11月16日確認";

const H1 = "【2026年最新】上田市の鍵開け・鍵交換業者おすすめ3選｜気象庁の平年値で見る上田・菅平の冬の冷え込みと鍵穴の凍結も解説する鍵屋比較";
const DESC =
  "上田市への対応を公式サイトで2026年11月16日に確認できた鍵業者3社（カギ110番・鍵のレスキュー・カギの救急車 上田市受付センター）の料金・受付時間を比較。気象庁の平年値で、上田は12〜2月、菅平は11〜4月に日最低気温が0℃を下回ることと、鍵穴が凍ったときの対処もまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110Ueda: "https://www.kagi110ban.jp/nagano/ueda/",
  k110Price: "https://www.kagi110ban.jp/price/",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescueFaqRural: "https://www.kagi110qq.co.jp/faq/q023.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  kqUeda: "https://www.kagi1109948.com/shop/99nagano-uedashi/",
  seikatsuArea: "https://kagi-help.com/area",
  jmaUeda: "https://www.data.jma.go.jp/stats/etrn/view/nml_amd_ym.php?prec_no=48&block_no=0402&year=&month=&day=&view=",
  jmaSugadaira: "https://www.data.jma.go.jp/stats/etrn/view/nml_amd_ym.php?prec_no=48&block_no=0992&year=&month=&day=&view=",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "上田市の加盟店ページあり",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトには<Hl>長野県上田市の鍵業者一覧のページ</Hl>があり、各店舗の欄に「上田市対応」と表示されています。公式料金表では、自宅の<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料が別途かかる場合があると記載されています。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間365日（上田市ページの表示）" },
    ],
    area: "公式の「長野県上田市」の鍵業者一覧に、上田市対応の店舗を掲載",
    sources: [
      { label: "カギ110番「上田市の鍵屋一覧」", href: SRC.k110Ueda },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間365日", area: "上田市の一覧ページあり" },
  },
  {
    id: "kagi-rescue",
    slug: "kagi-rescue",
    name: "鍵のレスキュー",
    catch: "料金表と出張料を公式に掲載",
    intro: (
      <>
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表で<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記で<Hl>出張料4,400〜8,800円（税込・出張先の地域により異なる）</Hl>を掲載しています。都道府県別の案内ページに長野県はありませんが、公式のよくある質問では「日本全国どこでも出張可能」と回答しており、地方や山間部への出張にも対応するとしています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "出張先の地域により異なる（特定商取引法上の表記）" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（都道府県別ページに長野県はなし）",
    sources: [
      { label: "鍵のレスキュー よくある質問「出張できないエリアはありますか？」", href: SRC.rescueFaq },
      { label: "同「地方や田舎でも来てくれますか？」", href: SRC.rescueFaqRural },
      { label: "簡易料金表", href: SRC.rescuePrice },
      { label: "特定商取引法上の表記", href: SRC.rescueTokusho },
    ],
    checked: CHECKED,
    compare: { price: "6,600円〜（税込）＋出張料", reception: "24時間365日", area: "全国出張（公式FAQ）" },
  },
  {
    id: "kagi-kyukyusha",
    slug: "kagi-kyukyusha",
    name: "カギの救急車 上田市受付センター",
    catch: "上田市専用の受付・長野稲里店が運営",
    intro: (
      <>
        カギの救急車は、全国の鍵屋が加盟する「カギの110番・カギの救急車」のネットワークです。公式の店舗案内には<Hl>「カギの救急車 上田市受付センター」</Hl>があり、上田市全域（天神・別所温泉・真田町・丸子・武石・菅平高原などの地名を掲載）と東御市などの近隣に対応するとしています。受付センターは出張専門で店舗はなく、運営責任店は<Hl>長野市稲里の「カギの救急車 長野稲里店」</Hl>です。合鍵の作製は長野稲里店で受け付けています。料金はページに一律の掲載がなく、電話で見積もりと到着時間を案内するとしています。
      </>
    ),
    rows: [
      { k: "料金", v: "ページに一律の掲載なし", note: "状況・場所・時間で変動するため電話で見積もり（公式）" },
      { k: "電話受付", v: "7:00〜22:00", note: "季節休業：年末年始・盆・GW" },
      { k: "支払い", v: "現金・クレジットカード" },
      { k: "運営責任店", v: "カギの救急車 長野稲里店（長野市稲里）" },
    ],
    area: "上田市全域と近隣（東御市ほか）に対応（受付センターのページ）",
    sources: [{ label: "カギの救急車「上田市受付センター」", href: SRC.kqUeda }],
    checked: CHECKED,
    compare: { price: "電話で見積もり", reception: "7:00〜22:00", area: "上田市受付センターあり" },
  },
];

const faqs: CityFaq[] = [
  {
    q: "上田市で鍵開けを頼むと、いくらかかりますか？",
    a: "各社の公式掲載（税込の最低額、2026年11月16日確認）では、カギ110番が11,000円〜、鍵のレスキューが6,600円〜（別に出張料4,400〜8,800円）です。カギの救急車 上田市受付センターは一律の料金を掲載しておらず、電話で見積もりを案内しています。鍵の種類・時間帯・出張距離で総額が変わるため、作業前に総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "鍵の生活救急車は上田市に来てくれますか？",
    a: "鍵の生活救急車の公式の対応エリア一覧（長野県）には、松本市・岡谷市・諏訪市・塩尻市・安曇野市などが掲載されていますが、上田市の記載はありませんでした（2026年11月16日確認）。このため本ページでは掲載していません。同社は、記載がない地域や記載があっても対応できない場合があるとして、対応可否を電話で確認するよう案内しています。",
  },
  {
    q: "菅平高原の別荘やペンションでも来てもらえますか？",
    a: "カギの救急車 上田市受付センターは、対応地域に菅平高原を掲載しています。鍵のレスキューは全国出張としていますが、場所によっては到着まで時間がかかる場合があるとしています。冬季は路面状況で到着が遅れることもあるため、住所を伝えて到着の目安と出張料を確認してください。",
  },
  {
    q: "冬の朝に鍵穴に鍵が入らない・回らないときは、どうすればよいですか？",
    a: "凍結の可能性があります。力を入れて回すと鍵が曲がったり折れたりするおそれがあるため、無理に回さないでください。お湯をかけると、再び凍ったり部品が変形したりする原因になります。対処の手順は鍵穴の凍結のページにまとめています。",
    link: { href: "/kagiana-touketsu/", label: "鍵穴が凍ったときの対処" },
  },
];

export default function AreaUedaPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="上田市"
      pref="長野県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["上田市", "長野県", "鍵開け", "鍵交換", "鍵穴の凍結", "業者比較"]}
      lead={[
        <>上田市は長野県の東部にあり、上田駅周辺の市街地から、真田・丸子・武石の山あいや標高の高い菅平高原まで、市域が広く広がっています。鍵業者に依頼する際は、市内のどこに来てもらうかで到着時間や出張料が変わります。</>,
        <>本記事では、上田市（または全国）への対応を各社の公式サイトで2026年11月16日に確認できた鍵業者3社を、公式に掲載された料金・受付時間とあわせて比較しました。あわせて、気象庁の平年値をもとに、上田と菅平で冬の鍵穴の凍結に気をつけたい時期をまとめています。</>,
      ]}
      agents={agents}
      excludedNote={
        <>
          ※当サイトがほかのエリアで紹介している鍵の生活救急車は、公式の対応エリア一覧（長野県）に上田市の記載がなかったため掲載していません（<Ext href={SRC.seikatsuArea}>生活救急車「対応エリア」</Ext>、{CHECKED}）。
        </>
      }
      themeId="touketsu"
      themeTitle="上田市で鍵穴の凍結に注意したい時期（気象庁の平年値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            冬の朝に「鍵が入らない」「鍵が回らない」という相談の中には、鍵穴やその周りの凍結が原因のものがあります。上田市内にある気象庁の観測地点「上田」と「菅平」の平年値（1991〜2020年の30年平均）で、日最低気温が0℃を下回る月を確認しました。
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
                <tr className="bg-white">
                  <td className="border border-border px-3 py-2 font-bold">上田（標高502m）</td>
                  <td className="border border-border px-3 py-2">2.5℃</td>
                  <td className="border border-border px-3 py-2 font-bold">-2.4℃</td>
                  <td className="border border-border px-3 py-2 font-bold">-5.0℃</td>
                  <td className="border border-border px-3 py-2 font-bold">-4.4℃</td>
                  <td className="border border-border px-3 py-2 font-bold">-1.1℃</td>
                  <td className="border border-border px-3 py-2">4.3℃</td>
                </tr>
                <tr className="bg-[#F5F8FC]">
                  <td className="border border-border px-3 py-2 font-bold">菅平（標高1,253m）</td>
                  <td className="border border-border px-3 py-2 font-bold">-2.4℃</td>
                  <td className="border border-border px-3 py-2 font-bold">-8.7℃</td>
                  <td className="border border-border px-3 py-2 font-bold">-13.0℃</td>
                  <td className="border border-border px-3 py-2 font-bold">-12.6℃</td>
                  <td className="border border-border px-3 py-2 font-bold">-7.9℃</td>
                  <td className="border border-border px-3 py-2 font-bold">-1.3℃</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-6 leading-relaxed">
            日最低気温の平年値（統計期間1991〜2020年）。太字は0℃未満の月。標高は気象庁の地点一覧による。出典：<Ext href={SRC.jmaUeda}>気象庁「上田（長野県） 平年値（年・月ごとの値）」</Ext>、<Ext href={SRC.jmaSugadaira}>気象庁「菅平（長野県） 平年値（年・月ごとの値）」</Ext>（いずれも{CHECKED}）。平年値は30年間の平均であり、実際の気温は年や日によって変わります。
          </p>
          <p className="leading-loose mb-4">
            上田では<Hl>12月から3月まで</Hl>、菅平では<Hl>11月から4月まで</Hl>、日最低気温の平年値が0℃を下回ります。1月の平年値は上田が-5.0℃、菅平が-13.0℃で、同じ上田市内でも8℃の差があります。当サイトが<Link href="/kagiana-touketsu/kanreichi/" className="text-primary underline">都市別にまとめた冬の最低気温</Link>と比べると、上田の1月の値は長野（-3.9℃）・松本（-4.9℃）と同程度かそれより低い水準です。
          </p>
          <p className="leading-loose mb-4">
            菅平高原の別荘・ペンション・合宿所の勝手口や物置は、冬の間に使う回数が少なく、久しぶりに開けようとしたときに鍵が回らないことがあります。鍵が回らないときは無理に力を加えず、<Link href="/kagiana-touketsu/" className="text-primary underline">鍵穴が凍ったときの対処</Link>を確認してください。それでも開かない場合や、鍵が曲がった・折れた場合は、到着の目安と出張料を確認したうえで鍵業者へご依頼ください。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>上田市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）、カギの救急車 上田市受付センター（料金は電話で見積もり）の3社でした。受付時間は、カギ110番・鍵のレスキューが24時間365日、カギの救急車 上田市受付センターが7:00〜22:00です。</>,
        <>冬の上田市では、上田で12〜3月、菅平で11〜4月に日最低気温の平年値が0℃を下回ります。鍵穴の凍結が疑われる場合は無理に回さず、対処の方法を確認してから依頼を検討してください。</>,
      ]}
      nearby={[
        { href: "/area/nagano/", label: "長野の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/matsumoto/", label: "松本市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/takasaki/", label: "高崎市の鍵開け・鍵交換業者おすすめ4選" },
      ]}
      related={[
        { href: "/kagiana-touketsu/", label: "鍵穴が凍ったときの対処" },
        { href: "/kagiana-touketsu/kanreichi/", label: "鍵穴が凍りやすい時期を都市別に確認" },
        { href: "/kagi-mawaranai/", label: "鍵が回らないときの対処" },
        { href: "/kagiya-erabikata/", label: "鍵屋・鍵業者の選び方チェックリスト" },
      ]}
    />
  );
}
