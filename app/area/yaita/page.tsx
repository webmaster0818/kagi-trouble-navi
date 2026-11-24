import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/yaita/";
const UPDATED = "2026年11月25日";
const UPDATED_ISO = "2026-11-25";
const CHECKED = "2026年11月25日確認";

const H1 = "【2026年最新】矢板市の鍵開け・鍵交換業者おすすめ2選｜栃木県警の統計で見る矢板市の住宅対象窃盗の件数も解説する鍵屋比較";
const DESC =
  "栃木県矢板市への対応を公式サイトで2026年11月25日に確認できた鍵業者2社の料金・受付時間を比較。栃木県警察の市町別統計（令和8年9月累計）から、矢板市の住宅対象窃盗が前年同期の5件から10件に増えたことを、大田原市・さくら市と並べています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/tochigi/yaita/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  npa: "https://www.npa.go.jp/safetylife/seianki26/theme_a/a_b_1_main.html",
  police: "https://www.pref.tochigi.lg.jp/keisatu/n11/documents/20261022110001.pdf",
  policeList: "https://www.pref.tochigi.lg.jp/keisatu/n11/anmati.html",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "矢板市の一覧ページに26件を掲載",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>栃木県矢板市の鍵屋一覧</Hl>には26件の店舗が掲載されています。公式料金表に記載された自宅の料金は、<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途かかる場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間受付（矢板市ページの表示）" },
    ],
    area: "公式の「栃木県矢板市」の鍵屋一覧に、26件の店舗を掲載",
    sources: [
      { label: "カギ110番「矢板市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間受付", area: "矢板市の一覧ページあり" },
  },
  {
    id: "kagi-rescue",
    slug: "kagi-rescue",
    name: "鍵のレスキュー",
    catch: "簡易料金表と出張料を公式に掲載",
    intro: (
      <>
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表には<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記には<Hl>出張料4,400〜8,800円（税込）</Hl>が記載されており、出張料は出張先の地域により異なります。矢板市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記。地域により異なる" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（矢板市を名指しした案内はなし）",
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
    q: "矢板市で鍵開けを頼むと、いくらかかりますか？",
    a: "2026年11月25日に各社の公式で確認した最低額は、カギ110番が11,000円〜（税込）、鍵のレスキューが6,600円〜（税込。別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前の見積もりで総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "鍵の生活救急車は矢板市に来てくれますか？",
    a: "鍵の生活救急車の公式の対応エリア一覧（2026年11月25日確認）では、栃木県は宇都宮市・足利市・栃木市・佐野市・鹿沼市・小山市・真岡市・下野市と一部の町が掲載されており、矢板市は掲載されていませんでした。そのため本記事では掲載していません。依頼を考える場合は、対応できるかを電話で確認してください。",
  },
  {
    q: "矢板市では空き巣などの住宅の被害が増えていますか？",
    a: "栃木県警察の「あんしんまちづくりニュース」令和8年10月号では、矢板市の住宅対象窃盗（空き巣・忍込み・居空きの合計）は令和8年9月累計で10件と、前年同期より5件多くなっています。刑法犯の総数は107件で、前年同期より2件少ない水準です。",
  },
  {
    q: "大田原市・さくら市と比べるとどうですか？",
    a: "同じ資料の令和8年9月累計で、大田原市の住宅対象窃盗は20件、さくら市は12件でした。人口や住宅の数が異なるため、件数だけで地域の安全性を比べることはできません。",
    link: { href: "/area/otawara/", label: "大田原市の鍵開け・鍵交換業者おすすめ2選" },
  },
  {
    q: "賃貸住宅で鍵をなくしたときは、先に何をすればよいですか？",
    a: "賃貸住宅の鍵交換は管理会社・大家の承諾が必要なことが多いため、まず連絡してください。鍵開けだけを頼む場合も、作業前に本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string, string][] = [
  ["住宅対象窃盗", "10件", "5件", "20件", "12件", "500件"],
  ["金属盗", "13件", "12件", "26件", "24件", "758件"],
  ["自転車盗", "5件", "16件", "14件", "49件", "1,368件"],
  ["自動車盗", "2件", "4件", "3件", "2件", "159件"],
  ["刑法犯（総数）", "107件", "109件", "333件", "217件", "9,148件"],
];

export default function AreaYaitaPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="矢板市"
      pref="栃木県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["矢板市", "栃木県", "鍵開け", "鍵交換", "住宅対象窃盗", "業者比較"]}
      lead={[
        <>矢板市で家の鍵をなくした、玄関や倉庫の鍵を替えたいといったときに、公式サイトで矢板市（または全国）への対応を確認できた鍵業者は2社でした。県南部の市を対応エリアに挙げる業者でも、県北部の矢板市は一覧に載っていないことがあるため、依頼の前に対応できるかを確かめておくと安心です。</>,
        <>2社の料金・受付時間は2026年11月25日に公式ページで確認しました。後半では、栃木県警察の「あんしんまちづくりニュース」に載っている市町別の数値（令和8年9月累計）から、矢板市の住宅対象窃盗などの件数を、近隣の大田原市・さくら市、栃木県全体と比べています。</>,
      ]}
      agents={agents}
      excludedNote={
        <>※鍵の生活救急車は、2026年11月25日に<Ext href={SRC.seikatsuArea}>公式の対応エリア一覧</Ext>を確認した時点で、栃木県の掲載市町に矢板市が含まれていなかったため掲載していません。</>
      }
      themeId="toukei"
      themeTitle="栃木県警の統計で見る矢板市の住宅対象窃盗（令和8年9月累計）"
      theme={
        <>
          <p className="leading-loose mb-4">
            栃木県警察本部生活安全企画課の「あんしんまちづくりニュース」令和8年10月号には、令和8年9月までの累計の刑法犯総数と重点抑止犯罪の件数が、前年同期との増減とともに市町別に掲載されています。矢板市の値と、増減から求めた前年同期の値を、隣接する大田原市・さくら市と栃木県全体の値と並べました。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">区分</th>
                  <th className="border border-border px-3 py-2 text-left">矢板市 令和8年9月累計</th>
                  <th className="border border-border px-3 py-2 text-left">矢板市 前年同期</th>
                  <th className="border border-border px-3 py-2 text-left">大田原市 令和8年9月累計</th>
                  <th className="border border-border px-3 py-2 text-left">さくら市 令和8年9月累計</th>
                  <th className="border border-border px-3 py-2 text-left">栃木県 令和8年9月累計</th>
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
            出典：<Ext href={SRC.police}>栃木県警察本部 生活安全企画課「あんしんまちづくりニュース 令和8年10月号」</Ext>（<Ext href={SRC.policeList}>栃木県警察「あんしんまちづくりニュース」</Ext>に掲載、{CHECKED}）。前年同期の値は、表に示された前年同期比の増減から当サイトが算出しました。「住宅対象窃盗」は空き巣・忍込み・居空きの合計、「金属盗」は銅線や側溝の蓋、蛇口などの金属類が被害品となる窃盗の合計と注記されています。栃木県の値は表の「栃木県」行（発生地不明を含まない）です。数値は今後発表される他の統計と異なる場合があると注記されています。
          </p>
          <p className="leading-loose mb-4">
            矢板市の刑法犯の総数は、令和8年9月累計で107件と<Hl>前年同期（109件）とほぼ同じ</Hl>でした。ただ内訳を見ると、自転車盗が16件から5件に減った一方で、住宅対象窃盗（空き巣・忍込み・居空き）は<Hl>5件から10件と2倍</Hl>になっています。件数が少ない市では、数件の増減でも割合が大きく動く点に注意が必要です。全国では、警察庁によると住宅を対象とした侵入窃盗は令和7年に1万7,152件（前年比7.2%増）で、侵入窃盗の発生場所は一戸建住宅が29.1%と最も多くなっています（<Ext href={SRC.npa}>警察庁「住まいる防犯110番」侵入犯罪の現状</Ext>、{CHECKED}）。
          </p>
          <p className="leading-loose mb-4">
            住宅対象窃盗が増えた年は、短い外出やごみ出しの間でも施錠すること、勝手口や窓にも補助錠を付けることが基本の対策です。鍵をなくした場合や、前の入居者から鍵を引き継いだ場合は、シリンダーの交換も検討してください。補助錠の選び方は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>矢板市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・矢板市の一覧に26件を掲載）と鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円・24時間365日体制）の2社でした。</>,
        <>栃木県警察の令和8年9月累計では、矢板市の刑法犯は前年同期並みでしたが、住宅対象窃盗は5件から10件に増えました。外出時の施錠と補助錠を見直し、鍵の紛失や不調があれば早めに交換をご検討ください。</>,
      ]}
      nearby={[
        { href: "/area/otawara/", label: "大田原市の鍵開け・鍵交換業者おすすめ2選" },
        { href: "/area/utsunomiya/", label: "宇都宮の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/nikko/", label: "日光市の鍵開け・鍵交換業者おすすめ2選" },
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
