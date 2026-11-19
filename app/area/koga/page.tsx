import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/koga/";
const UPDATED = "2026年11月19日";
const UPDATED_ISO = "2026-11-19";
const CHECKED = "2026年11月19日確認";

const H1 = "【2026年最新】古河市の鍵開け・鍵交換業者おすすめ4選｜茨城県警の統計で見る古河市の住宅侵入窃盗の件数も解説する鍵屋比較";
const DESC =
  "古河市への対応を公式サイトで2026年11月19日に確認できた鍵業者4社（カギ110番・鍵の生活救急車・鍵のレスキュー・カギの救急車 古河市コールセンター）の料金・受付時間を比較。茨城県警察の確定値から、古河市の住宅侵入窃盗（空き巣・忍込み・居空き）の件数を前年と比べてまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/ibaraki/koga/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  kqKoga: "https://www.kagi1109948.com/shop/99ibaraki-kogashi/",
  policeList: "https://www.pref.ibaraki.jp/kenkei/a01_safety/statistics/shichoson.html",
  policeR7: "https://www.pref.ibaraki.jp/kenkei/a01_safety/statistics/documents/r07-12_number-of-reported-rrimes.pdf",
  policeR6: "https://www.pref.ibaraki.jp/kenkei/a01_safety/statistics/documents/r6ninti.pdf",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "古河市の加盟店ページあり",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>茨城県古河市の鍵屋一覧</Hl>には「古河市対応」と表示された店舗が掲載されています。公式料金表では、自宅の<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。相談を受けた業者が対応できない場合は、別の業者を紹介する場合があると記載されています。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "受付", v: "24時間年中無休（古河市ページの表示）" },
    ],
    area: "公式の「茨城県古河市」の鍵屋一覧に、古河市対応の店舗を掲載",
    sources: [
      { label: "カギ110番「古河市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間年中無休", area: "古河市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>茨城県の対応エリアに古河市</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。20:00〜7:59の作業には<Hl>時間外料金8,800円</Hl>がかかります。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
    ],
    area: "公式の対応エリア一覧（茨城県）に古河市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表で<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記で<Hl>出張料4,400〜8,800円（税込）</Hl>を掲載しています。古河市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
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
    name: "カギの救急車 古河市コールセンター",
    catch: "車・バイク・重機の鍵が中心・宇都宮店の受付",
    intro: (
      <>
        カギの救急車は、全国の鍵屋が加盟する「カギの110番・カギの救急車」のネットワークです。公式の店舗案内にある<Hl>「カギの救急車 古河市コールセンター」</Hl>は、宇都宮市今泉町の「カギの救急車 宇都宮店」の出張受付窓口です。ページでは<Hl>車・バイク・重機の鍵（イモビライザーキー・スマートキー・リモコンキー）を中心</Hl>に扱うとしており、古河市と近郊（境町・五霞町・野木町・板倉町・加須市など）へ出張します。近郊は別途出張料がかかる場合があると記載されています。住宅の鍵を依頼する場合は、電話で対応できるかを確認してください。
      </>
    ),
    rows: [
      { k: "主な対応", v: "車・バイク・重機の鍵（作成・追加登録・修理・インロック等）" },
      { k: "イモビライザー付き合鍵（国産車）", v: "11,000円〜19,800円", note: "来店時の料金目安。車種・年式・作成方法で変動" },
      { k: "鍵をすべてなくした場合のエンジン始動キー作製", v: "44,000円〜99,000円", note: "来店時の料金目安" },
      { k: "電話受付", v: "平日8:30〜18:30・日祝8:30〜17:30（水曜定休、年末年始・GW休み）" },
      { k: "支払い", v: "現金・クレジットカード・QR決済" },
    ],
    area: "古河市および近郊（境町・五霞町・野木町・板倉町・加須市など）へ出張。近郊は別途出張料の場合あり",
    sources: [{ label: "カギの救急車「古河市コールセンター」", href: SRC.kqKoga }],
    checked: CHECKED,
    compare: { price: "車の鍵は料金目安を掲載", reception: "8:30〜18:30（水曜定休）", area: "古河市の受付窓口あり（車の鍵が中心）" },
  },
];

const faqs: CityFaq[] = [
  {
    q: "古河市で玄関の鍵開けを頼むと、いくらかかりますか？",
    a: "各社の公式掲載（2026年11月19日確認）では、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格・20:00〜7:59は時間外料金8,800円）、鍵のレスキューが6,600円〜（税込、別に出張料4,400〜8,800円）です。出張料を含むかどうかなど表示の基準が業者ごとに異なるため、作業前に総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "車の鍵をなくした場合は、どこに相談できますか？",
    a: "カギの救急車 古河市コールセンターは、車・バイク・重機の鍵を中心に扱う受付窓口で、来店・郵送・出張の3つの方法を案内しています。車のメーカー販売店でもスペアキーを注文できるため、急ぎでない場合は販売店への相談も検討してください。",
    link: { href: "/kuruma-spare-key/", label: "車のスペアキーは販売店で注文できる" },
  },
  {
    q: "古河市では空き巣の被害は増えていますか？",
    a: "茨城県警察の市町村別認知件数（確定値）によると、古河市の住宅侵入窃盗は令和7年72件で、令和6年の49件から23件増えました。内訳は空き巣37件（令和6年30件）、忍込み34件（同18件）、居空き1件（同1件）です。",
  },
  {
    q: "賃貸住宅で鍵をなくした場合は、すぐに業者を呼んでよいですか？",
    a: "賃貸住宅の鍵交換は、管理会社・大家の承諾が必要な場合が多いため、先に連絡してください。鍵開けだけを依頼する場合も、本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string][] = [
  ["住宅侵入窃盗（合計）", "72件", "49件", "1,264件", "993件"],
  ["空き巣", "37件", "30件", "740件", "665件"],
  ["忍込み", "34件", "18件", "502件", "308件"],
  ["居空き", "1件", "1件", "22件", "20件"],
];

export default function AreaKogaPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="古河市"
      pref="茨城県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["古河市", "茨城県", "鍵開け", "鍵交換", "空き巣", "業者比較"]}
      lead={[
        <>古河市は、全国から出張する鍵業者に加えて、市名を冠した車の鍵の受付窓口がある地域です。一方で、料金の表示が「出張費込み」か「別途」か、受付が24時間か日中のみかは業者ごとに異なります。</>,
        <>本記事では、古河市（または全国）への対応を各社の公式サイトで2026年11月19日に確認できた鍵業者4社を、公式に掲載された料金・受付時間とあわせて比較しました。あわせて、茨城県警察の市町村別の統計から、古河市の住宅侵入窃盗（空き巣・忍込み・居空き）の件数を整理しています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="茨城県警の統計で見る古河市の住宅侵入窃盗（令和7年確定値）"
      theme={
        <>
          <p className="leading-loose mb-4">
            茨城県警察は「市町村別の認知件数・犯罪率」として、刑法犯の総数・乗り物盗・住宅侵入窃盗の件数を市町村ごとに公表しています。住宅侵入窃盗は<Hl>空き巣・忍込み・居空き</Hl>の3つの手口に分けて集計されています。古河市と茨城県全体の件数を、令和7年と令和6年で比べると次のとおりです。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">手口</th>
                  <th className="border border-border px-3 py-2 text-left">古河市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">古河市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">茨城県 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">茨城県 令和6年</th>
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
            出典：<Ext href={SRC.policeList}>茨城県警察「市町村別の認知件数・犯罪率」</Ext>の<Ext href={SRC.policeR7}>令和7年12月末（確定値）</Ext>と<Ext href={SRC.policeR6}>令和6年中（確定値）</Ext>の「市町村別認知件数・犯罪率【住宅侵入窃盗】」（いずれも{CHECKED}）。茨城県の数値は同じ表の「茨城県総数」の行です。
          </p>
          <p className="leading-loose mb-4">
            古河市の住宅侵入窃盗は<Hl>令和6年49件から令和7年72件</Hl>へ増えました。特に忍込み（夜間、住人が寝ている間の侵入）が18件から34件へ増えています。同じ表の世帯1,000当たりの犯罪率は1.217で、県内44市町村のうち高いほうから20番目でした。茨城県全体でも、住宅侵入窃盗は993件から1,264件へ増えています。なお、古河市の刑法犯総数は令和7年998件で、前年より148件増えました。
          </p>
          <p className="leading-loose mb-4">
            就寝前や外出時に玄関と窓を施錠することが基本です。玄関に補助錠を加える方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口と対策は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。古い鍵の交換を検討する場合は、上の業者に見積もりを依頼してください。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>古河市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）、カギの救急車 古河市コールセンター（車・バイク・重機の鍵が中心）の4社でした。</>,
        <>茨城県警察の確定値では、古河市の住宅侵入窃盗は令和7年72件で、前年の49件から増えました。忍込みが増えているため、就寝前の施錠もあわせてご確認ください。</>,
      ]}
      nearby={[
        { href: "/area/oyama/", label: "小山市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/tsukuba/", label: "つくば市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/kasukabe/", label: "春日部市の鍵開け・鍵交換業者おすすめ4選" },
      ]}
      related={[
        { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口と対策" },
        { href: "/hojo-jou/", label: "補助錠の選び方" },
        { href: "/kuruma-spare-key/", label: "車のスペアキーは販売店で注文できる" },
        { href: "/kagiya-erabikata/", label: "鍵屋・鍵業者の選び方チェックリスト" },
      ]}
    />
  );
}
