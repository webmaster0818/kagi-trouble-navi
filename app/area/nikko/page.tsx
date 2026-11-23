import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/nikko/";
const UPDATED = "2026年11月24日";
const UPDATED_ISO = "2026-11-24";
const CHECKED = "2026年11月24日確認";

const H1 = "【2026年最新】日光市の鍵開け・鍵交換業者おすすめ2選｜気象庁の平年値で見る奥日光・五十里の冬の冷え込みと鍵穴の凍結も解説する鍵屋比較";
const DESC =
  "日光市への対応を公式サイトで2026年11月24日に確認できた鍵業者2社（カギ110番・鍵のレスキュー）の料金・受付時間を比較。気象庁の平年値で市内の奥日光・五十里と宇都宮の冬の最低気温を比べ、奥日光では1月の日最低気温の平年値が-7.9℃になるなど、鍵穴の凍結に注意したい時期もまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/tochigi/nikko/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  jmaOkunikko: "https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_ym.php?prec_no=41&block_no=47690&year=&month=&day=&view=",
  jmaIkari: "https://www.data.jma.go.jp/stats/etrn/view/nml_amd_ym.php?prec_no=41&block_no=1015&year=&month=&day=&view=",
  jmaStations: "https://www.data.jma.go.jp/stats/etrn/select/prefecture.php?prec_no=41&block_no=&year=&month=&day=&view=",
  jmaUtsunomiya: "https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_ym.php?prec_no=41&block_no=47615&year=&month=&day=&view=",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "日光市の一覧ページに25件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>栃木県日光市の鍵屋一覧</Hl>には25件の店舗が掲載されています。公式料金表では、自宅の<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間受付（日光市ページの表示）" },
    ],
    area: "公式の「栃木県日光市」の鍵屋一覧に、25件の店舗を掲載",
    sources: [
      { label: "カギ110番「日光市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間受付", area: "日光市の一覧ページあり" },
  },
  {
    id: "kagi-rescue",
    slug: "kagi-rescue",
    name: "鍵のレスキュー",
    catch: "簡易料金表と出張料を公式に掲載",
    intro: (
      <>
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表で<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記で<Hl>出張料4,400〜8,800円（税込）</Hl>を掲載しており、出張料は出張先の地域により異なるとしています。日光市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（日光市を名指しした案内はなし）",
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
    q: "日光市で家の鍵開けを頼むと、いくらかかりますか？",
    a: "各社の公式掲載（2026年11月24日確認）では、カギ110番が11,000円〜（税込）、鍵のレスキューが6,600円〜（税込、別に出張料4,400〜8,800円）です。いずれも最低額で、鍵の種類・時間帯・出張距離で総額が変わるため、作業前に総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "鍵の生活救急車は日光市に来てくれますか？",
    a: "鍵の生活救急車の公式の対応エリア一覧（2026年11月24日確認）では、栃木県は宇都宮市・足利市・栃木市・佐野市・鹿沼市・小山市・真岡市・下野市と一部の町が掲載されており、日光市は掲載されていませんでした。そのため本記事では掲載していません。依頼を考える場合は、対応できるかを電話で確認してください。",
  },
  {
    q: "冬の朝に鍵が回らないときは、すぐに業者を呼ぶべきですか？",
    a: "気象庁の平年値では、市内の奥日光・五十里とも12月から3月まで日最低気温が0℃を下回るため、鍵穴の凍結が原因の場合があります。無理に力を加えると鍵が曲がったり折れたりするおそれがあるため、まず凍結時の対処を確認し、それでも開かない場合に業者へ依頼してください。",
    link: { href: "/kagiana-touketsu/", label: "鍵穴が凍ったときの対処" },
  },
  {
    q: "別荘や賃貸住宅の鍵をなくした場合は、どうすればよいですか？",
    a: "管理会社や管理者がいる場合は、先に連絡してください。鍵交換は所有者・管理者の承諾が必要なことが多く、鍵開けだけを頼む場合も本人確認の書類を求められることがあります。出張料は出張先の地域で変わるため、依頼の前に総額をご確認ください。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const tempRows: [string, string, string, string, string, string, string][] = [
  ["奥日光（標高1,291.9m）", "0.2℃", "-4.9℃", "-7.9℃", "-7.8℃", "-4.6℃", "0.2℃"],
  ["五十里（標高620m）", "1.8℃", "-2.7℃", "-5.5℃", "-5.3℃", "-1.9℃", "3.1℃"],
  ["宇都宮（標高119.2m）", "5.7℃", "0.2℃", "-2.2℃", "-1.3℃", "2.1℃", "7.4℃"],
];

export default function AreaNikkoPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="日光市"
      pref="栃木県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["日光市", "栃木県", "鍵開け", "鍵交換", "鍵穴の凍結", "業者比較"]}
      lead={[
        <>日光市で鍵のトラブルが起きたときに頼める業者のうち、公式サイトで日光市（または全国）への対応を確認できたのは2社でした。日光市は面積が広く、出張料や到着までの時間は場所によって変わるため、依頼の前に総額と対応の可否を確かめておくと安心です。</>,
        <>本記事では、2社の公式に掲載された料金・受付時間を2026年11月24日に確認して比較しました。あわせて、気象庁の平年値から、市内の観測地点「奥日光」「五十里」で鍵穴の凍結に注意したい時期を、宇都宮と比べて整理しています。</>,
      ]}
      agents={agents}
      excludedNote={
        <>※鍵の生活救急車は、2026年11月24日に<Ext href={SRC.seikatsuArea}>公式の対応エリア一覧</Ext>を確認した時点で、栃木県の掲載市町に日光市が含まれていなかったため掲載していません。</>
      }
      themeId="touketsu"
      themeTitle="日光市で鍵穴の凍結に注意したい時期（気象庁の平年値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            冬の朝に「鍵が入らない」「鍵が回らない」という相談の中には、鍵穴やその周りの凍結が原因のものがあります。日光市内にある気象庁の観測地点のうち、30年分の気温の平年値が公開されている「奥日光」と「五十里」、県庁所在地の「宇都宮」の平年値（1991〜2020年の30年平均）で、11月から4月の日最低気温を比べました。
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
            日最低気温の平年値（統計期間1991〜2020年）。太字は0℃未満の月。標高は<Ext href={SRC.jmaStations}>気象庁の地点情報（栃木県）</Ext>による。出典：<Ext href={SRC.jmaOkunikko}>気象庁「奥日光（日光）（栃木県） 平年値（年・月ごとの値）」</Ext>、<Ext href={SRC.jmaIkari}>気象庁「五十里（栃木県） 平年値（年・月ごとの値）」</Ext>、<Ext href={SRC.jmaUtsunomiya}>気象庁「宇都宮（栃木県） 平年値（年・月ごとの値）」</Ext>（いずれも{CHECKED}）。平年値は30年間の平均であり、実際の気温は年や日によって変わります。
          </p>
          <p className="leading-loose mb-4">
            奥日光では<Hl>12月から3月まで</Hl>日最低気温の平年値が0℃を下回り、1月は<Hl>-7.9℃</Hl>です。11月と4月も0.2℃で、0℃をわずかに上回るだけです。標高620mの五十里でも12月から3月は0℃を下回り、1月は-5.5℃でした。宇都宮の1月（-2.2℃）と比べると、<Hl>五十里で3.3℃、奥日光で5.7℃低く</Hl>なります。同じ日光市内でも、標高の高い地域ほど凍結に注意する期間が長いといえます。
          </p>
          <p className="leading-loose mb-4">
            鍵が回らないときは無理に力を加えず、<Link href="/kagiana-touketsu/" className="text-primary underline">鍵穴が凍ったときの対処</Link>を確認してください。寒冷地の都市ごとの最低気温は<Link href="/kagiana-touketsu/kanreichi/" className="text-primary underline">寒冷地の鍵穴凍結</Link>にまとめています。それでも開かない場合や、鍵が曲がった・折れた場合は、出張料を含めた総額を確認したうえで鍵業者へご依頼ください。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>日光市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・日光市の一覧に25件を掲載）と鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円・24時間365日体制）の2社でした。</>,
        <>気象庁の平年値では、奥日光・五十里とも12〜3月の日最低気温が0℃を下回り、1月は宇都宮より3.3〜5.7℃低くなっています。冬の朝に鍵が回らない場合は、凍結を疑って無理に回さないようにしてください。</>,
      ]}
      nearby={[
        { href: "/area/kanuma/", label: "鹿沼市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/utsunomiya/", label: "宇都宮の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/otawara/", label: "大田原市の鍵開け・鍵交換業者おすすめ2選" },
      ]}
      related={[
        { href: "/kagiana-touketsu/", label: "鍵穴が凍ったときの対処" },
        { href: "/hojo-jou/", label: "補助錠の選び方" },
        { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
        { href: "/kagiya-erabikata/", label: "鍵屋・鍵業者の選び方チェックリスト" },
      ]}
    />
  );
}
