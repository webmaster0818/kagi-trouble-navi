import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/hitachinaka/";
const UPDATED = "2026年11月19日";
const UPDATED_ISO = "2026-11-19";
const CHECKED = "2026年11月19日確認";

const H1 = "【2026年最新】ひたちなか市の鍵開け・鍵交換業者おすすめ3選｜茨城県警の統計で見るひたちなか市の住宅侵入窃盗の件数も解説する鍵屋比較";
const DESC =
  "ひたちなか市への対応を公式サイトで2026年11月19日に確認できた鍵業者3社（カギ110番・鍵の生活救急車・鍵のレスキュー）の料金・受付時間を比較。茨城県警察の確定値から、ひたちなか市の住宅侵入窃盗（空き巣・忍込み・居空き）の件数を水戸市・茨城県全体と比べてまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/ibaraki/hitachinaka/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  policeList: "https://www.pref.ibaraki.jp/kenkei/a01_safety/statistics/shichoson.html",
  policeR7: "https://www.pref.ibaraki.jp/kenkei/a01_safety/statistics/documents/r07-12_number-of-reported-rrimes.pdf",
  policeR6: "https://www.pref.ibaraki.jp/kenkei/a01_safety/statistics/documents/r6ninti.pdf",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "ひたちなか市の加盟店ページあり",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>茨城県ひたちなか市の鍵屋一覧</Hl>には「ひたちなか市対応」と表示された店舗が掲載されています。公式料金表では、自宅の<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。相談を受けた業者が対応できない場合は、別の業者を紹介する場合があると記載されています。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "受付", v: "24時間年中無休（ひたちなか市ページの表示）" },
    ],
    area: "公式の「茨城県ひたちなか市」の鍵屋一覧に、ひたちなか市対応の店舗を掲載",
    sources: [
      { label: "カギ110番「ひたちなか市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間年中無休", area: "ひたちなか市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>茨城県の対応エリアにひたちなか市</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。20:00〜7:59の作業には<Hl>時間外料金8,800円</Hl>がかかります。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
    ],
    area: "公式の対応エリア一覧（茨城県）にひたちなか市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表で<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記で<Hl>出張料4,400〜8,800円（税込）</Hl>を掲載しています。ひたちなか市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
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
];

const faqs: CityFaq[] = [
  {
    q: "ひたちなか市で玄関の鍵開けを頼むと、いくらかかりますか？",
    a: "各社の公式掲載（2026年11月19日確認）では、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格・20:00〜7:59は時間外料金8,800円）、鍵のレスキューが6,600円〜（税込、別に出張料4,400〜8,800円）です。出張料を含むかどうかなど表示の基準が業者ごとに異なるため、作業前に総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "ひたちなか市に、市名の付いた鍵屋の受付窓口はありますか？",
    a: "カギの救急車の公式店舗データ（2026年11月19日確認）では、ひたちなか市の名前を付けた受付センターは見つかりませんでした。本記事では、ひたちなか市（または全国）への対応を公式に確認できた3社のみを掲載しています。",
  },
  {
    q: "ひたちなか市では空き巣の被害は多いですか？",
    a: "茨城県警察の市町村別認知件数（確定値）によると、ひたちなか市の住宅侵入窃盗は令和7年31件（令和6年32件）で、内訳は空き巣26件・忍込み5件・居空き0件です。世帯1,000当たりの犯罪率は0.449で、県内44市町村のうち高いほうから41番目でした。",
  },
  {
    q: "賃貸住宅で鍵をなくした場合は、すぐに業者を呼んでよいですか？",
    a: "賃貸住宅の鍵交換は、管理会社・大家の承諾が必要な場合が多いため、先に連絡してください。鍵開けだけを依頼する場合も、本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string][] = [
  ["住宅侵入窃盗（合計）", "31件", "32件", "114件", "1,264件"],
  ["空き巣", "26件", "20件", "76件", "740件"],
  ["忍込み", "5件", "12件", "33件", "502件"],
  ["居空き", "0件", "0件", "5件", "22件"],
  ["世帯1,000当たりの犯罪率", "0.449", "0.466", "0.897", "1.018"],
];

export default function AreaHitachinakaPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="ひたちなか市"
      pref="茨城県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["ひたちなか市", "茨城県", "鍵開け", "鍵交換", "空き巣", "業者比較"]}
      lead={[
        <>ひたちなか市で鍵のトラブルが起きたときに頼める業者のうち、公式サイトでひたちなか市（または全国）への対応を確認できたのは、全国から出張する3社でした。料金の表示は、出張料を含むかどうかや夜間の扱いが業者ごとに異なります。</>,
        <>本記事では、3社の公式に掲載された料金・受付時間を2026年11月19日に確認して比較しました。あわせて、茨城県警察の市町村別の統計から、ひたちなか市の住宅侵入窃盗（空き巣・忍込み・居空き）の件数を、水戸市・茨城県全体と並べて整理しています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="茨城県警の統計で見るひたちなか市の住宅侵入窃盗（令和7年確定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            茨城県警察は「市町村別の認知件数・犯罪率」として、住宅侵入窃盗の件数と世帯1,000当たりの犯罪率を市町村ごとに公表しています。ひたちなか市の令和7年・令和6年の件数を、水戸市と茨城県全体の令和7年の件数と並べると次のとおりです。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">項目</th>
                  <th className="border border-border px-3 py-2 text-left">ひたちなか市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">ひたちなか市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">水戸市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">茨城県 令和7年</th>
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
            出典：<Ext href={SRC.policeList}>茨城県警察「市町村別の認知件数・犯罪率」</Ext>の<Ext href={SRC.policeR7}>令和7年12月末（確定値）</Ext>と<Ext href={SRC.policeR6}>令和6年中（確定値）</Ext>の「市町村別認知件数・犯罪率【住宅侵入窃盗】」（いずれも{CHECKED}）。犯罪率は世帯1,000当たりの認知件数で、茨城県は同じ表の「茨城県総数」の行です。
          </p>
          <p className="leading-loose mb-4">
            ひたちなか市の住宅侵入窃盗は<Hl>令和7年31件で、前年の32件とほぼ同じ</Hl>でした。世帯1,000当たりの犯罪率は0.449で、県内44市町村のうち高いほうから41番目と、県内では低い水準です。水戸市（0.897）や茨城県全体（1.018）と比べても半分程度でした。ただし内訳を見ると、空き巣は20件から26件へ増えています（忍込みは12件から5件へ減少）。
          </p>
          <p className="leading-loose mb-4">
            空き巣は住人の外出中に入る手口のため、短時間の外出でも玄関と窓を施錠することが基本です。玄関に補助錠を加える方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口と対策は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>ひたちなか市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）の3社でした。</>,
        <>茨城県警察の確定値では、ひたちなか市の住宅侵入窃盗は令和7年31件で、世帯当たりの犯罪率は県内で低い水準でした。ただし空き巣は前年より増えているため、外出時の施錠をご確認ください。</>,
      ]}
      nearby={[
        { href: "/area/mito/", label: "水戸の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/hitachi/", label: "日立市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/tsukuba/", label: "つくば市の鍵開け・鍵交換業者おすすめ4選" },
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
