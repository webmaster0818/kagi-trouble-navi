import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/kashima/";
const UPDATED = "2026年11月26日";
const UPDATED_ISO = "2026-11-26";
const CHECKED = "2026年11月26日確認";

const H1 = "【2026年最新】鹿嶋市の鍵開け・鍵交換業者おすすめ3選｜茨城県警の統計で見る鹿嶋市の住宅侵入窃盗・空き巣の件数も解説する鍵屋比較";
const DESC =
  "茨城県鹿嶋市への対応を公式サイトで2026年11月26日に確認できた鍵業者3社の料金・受付時間を比較。茨城県警察の令和8年10月末の暫定値から、鹿嶋市の住宅侵入窃盗が前年同期の19件から10件に、空き巣が13件から4件に減ったことを、神栖市・潮来市と比べています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/ibaraki/kashima/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
  policeList: "https://www.pref.ibaraki.jp/kenkei/a01_safety/statistics/shichoson.html",
  policeR8: "https://www.pref.ibaraki.jp/kenkei/a01_safety/statistics/documents/r0810_keihouhan.pdf",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "鹿嶋市の一覧ページに32件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>茨城県鹿嶋市の鍵屋一覧</Hl>には32件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間受付（鹿嶋市ページの表示）" },
    ],
    area: "公式の「茨城県鹿嶋市」の鍵屋一覧に、32件の店舗を掲載",
    sources: [
      { label: "カギ110番「鹿嶋市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間受付", area: "鹿嶋市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>茨城県の対応エリアに鹿嶋市</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>が加わり、最終価格は作業前に提示する見積書の価格とされています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "有料道路の利用が必要な場所", v: "別途3,300円（税込）" },
    ],
    area: "公式の対応エリア一覧（茨城県）に鹿嶋市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。鹿嶋市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（鹿嶋市を名指しした案内はなし）",
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
    q: "鹿嶋市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月26日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格。20:00〜7:59は時間外料金8,800円が加算）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "鹿嶋市では空き巣が増えていますか？",
    a: "茨城県警察の令和8年10月末の暫定値では、鹿嶋市の空き巣は4件で、前年同期より9件少なくなっています。忍込みは6件で前年同期と同じ件数、居空きは0件で、住宅侵入窃盗の合計は10件（前年同期より9件減）でした。",
  },
  {
    q: "神栖市・潮来市と比べるとどうですか？",
    a: "同じ資料の令和8年10月末で、神栖市の住宅侵入窃盗は30件（空き巣12件・忍込み18件）、潮来市は4件（空き巣4件）でした。人口や世帯数が異なるため、件数だけで地域の安全性を比べることはできません。",
    link: { href: "/area/kamisu/", label: "神栖市の鍵開け・鍵交換業者おすすめ3選" },
  },
  {
    q: "賃貸住宅で鍵をなくしたときは、先に何をすればよいですか？",
    a: "賃貸住宅の鍵交換は管理会社・大家の承諾が必要なことが多いため、まず連絡してください。鍵開けだけを頼む場合も、作業前に本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["空き巣", "4件", "13件", "12件", "4件", "431件"],
  ["忍込み", "6件", "6件", "18件", "0件", "214件"],
  ["居空き", "0件", "0件", "0件", "0件", "13件"],
  ["住宅侵入窃盗（合計）", "10件", "19件", "30件", "4件", "658件"],
  ["自動車盗", "2件", "13件", "9件", "4件", "265件"],
  ["刑法犯（総数）", "348件", "470件", "477件", "123件", "14,074件"],
];

export default function AreaKashimaPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="鹿嶋市"
      pref="茨城県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["鹿嶋市", "茨城県", "鍵開け", "鍵交換", "住宅侵入窃盗", "業者比較"]}
      lead={[
        <>鹿嶋市で家の鍵をなくした、玄関や勝手口の鍵を替えたいといったときに、公式サイトで鹿嶋市（または全国）への対応を確認できた鍵業者は3社でした。料金表の最低額と、夜間の時間外料金・出張料を比べています。</>,
        <>3社の料金・受付時間は2026年11月26日に公式ページで確認しました。後半では、茨城県警察の「市町村別の認知件数・犯罪率」（令和8年10月末・暫定値）から、鹿嶋市の住宅侵入窃盗と空き巣・忍込みの件数を前年同期と比較し、隣接する神栖市・潮来市、茨城県全体と比べています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="茨城県警の統計で見る鹿嶋市の住宅侵入窃盗（令和8年10月末・暫定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            茨城県警察は、刑法犯の総数・乗り物盗・住宅侵入窃盗の認知件数を市町村別にまとめ、前年同期比の増減とともに毎月公表しています。令和8年10月末（1〜10月の累計）の資料から、鹿嶋市の値と、増減から求めた前年同期の値を、隣接する神栖市・潮来市、茨城県全体の値と比べました。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">鹿嶋市 令和8年10月末</th>
                  <th className="border border-border px-3 py-2 text-left">鹿嶋市 前年同期</th>
                  <th className="border border-border px-3 py-2 text-left">神栖市 令和8年10月末</th>
                  <th className="border border-border px-3 py-2 text-left">潮来市 令和8年10月末</th>
                  <th className="border border-border px-3 py-2 text-left">茨城県 令和8年10月末</th>
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
            出典：<Ext href={SRC.policeList}>茨城県警察「市町村別の認知件数・犯罪率」</Ext>の<Ext href={SRC.policeR8}>令和8年10月末「刑法犯総数・乗り物盗・住宅侵入窃盗」（暫定値）</Ext>（{CHECKED}）。前年同期の値は、表に示された前年同期比の増減数から当サイトが算出しました。増減の欄が空欄のものは前年同期と同じ件数として扱っています。茨城県は同じ表の「茨城県総数」の行です。
          </p>
          <p className="leading-loose mb-4">
            鹿嶋市の住宅侵入窃盗は、令和8年1月〜10月で10件と、<Hl>前年同期（19件）からほぼ半分</Hl>になりました。減ったのは空き巣（13件→4件）で、忍込みは6件のまま変わっていません。その結果、<Hl>住宅侵入窃盗10件のうち6件が忍込み</Hl>です。県の資料では、世帯1,000当たりの住宅侵入窃盗の犯罪率は0.345で、44市町村のワースト順位では33位でした。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            刑法犯の総数も470件から348件へと122件（26.0%）減り、自動車盗は13件から2件になっています。件数は減っていますが、忍込みは住人の在宅中、特に就寝中にねらわれる手口です。暫定値のため年末までの累計や確定値では数字が変わる可能性があります。就寝前に玄関・勝手口・窓の施錠を確かめることが基本で、玄関の錠を2つにする方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>鹿嶋市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・鹿嶋市の一覧に32件を掲載）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>茨城県警察の令和8年10月末の暫定値では、鹿嶋市の住宅侵入窃盗は前年同期の19件から10件に減りましたが、そのうち6件は忍込みでした。就寝前の施錠を見直し、鍵の紛失や不調があれば早めに交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/kamisu/", label: "神栖市の鍵開け・鍵交換業者おすすめ3選" },
        { href: "/area/mito/", label: "水戸の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/hitachinaka/", label: "ひたちなか市の鍵開け・鍵交換業者おすすめ3選" },
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
