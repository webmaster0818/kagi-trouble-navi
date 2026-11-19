import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/hino/";
const UPDATED = "2026年11月19日";
const UPDATED_ISO = "2026-11-19";
const CHECKED = "2026年11月19日確認";

const H1 = "【2026年最新】日野市の鍵開け・鍵交換業者おすすめ5選｜警視庁の町丁別統計で見る日野市の空き巣・忍込みの件数も解説する鍵屋比較";
const DESC =
  "日野市への対応を公式サイトで2026年11月19日に確認できた鍵業者5社（カギ110番・鍵の生活救急車・鍵のレスキュー・カギの救急車 日野市多摩平受付センター・同 日野市豊田受付センター）の料金・受付時間を比較。警視庁の町丁別の認知件数から、日野市の空き巣・忍込み・居空きの件数を前年と比べてまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/tokyo/hino/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  kqTamadaira: "https://www.kagi1109948.com/shop/99tokyo-hinoshi/",
  kqToyoda: "https://www.kagi1109948.com/shop/99tokyo-hinoshi-toyoda/",
  mpdList: "https://www.keishicho.metro.tokyo.lg.jp/about_mpd/jokyo_tokei/jokyo/ninchikensu.html",
  mpdR7: "https://www.keishicho.metro.tokyo.lg.jp/about_mpd/jokyo_tokei/jokyo/ninchikensu.files/R7.csv",
  mpdR6: "https://www.keishicho.metro.tokyo.lg.jp/about_mpd/jokyo_tokei/jokyo/ninchikensu.files/R6.csv",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "日野市の加盟店ページあり",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>東京都日野市の鍵屋一覧</Hl>には「日野市対応」と表示された店舗が掲載されています。公式料金表では、自宅の<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。相談を受けた業者が対応できない場合は、別の業者を紹介する場合があると記載されています。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "受付", v: "24時間年中無休（日野市ページの表示）" },
    ],
    area: "公式の「東京都日野市」の鍵屋一覧に、日野市対応の店舗を掲載",
    sources: [
      { label: "カギ110番「日野市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間年中無休", area: "日野市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>東京都の対応エリアに日野市</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。20:00〜7:59の作業には<Hl>時間外料金8,800円</Hl>がかかります。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
    ],
    area: "公式の対応エリア一覧（東京都）に日野市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表で<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記で<Hl>出張料4,400〜8,800円（税込）</Hl>を掲載しています。日野市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
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
    id: "kagi-kyukyusha-tamadaira",
    slug: "kagi-kyukyusha",
    name: "カギの救急車 日野市多摩平受付センター",
    catch: "24時間受付・税と出張費込みの料金目安を掲載",
    intro: (
      <>
        カギの救急車は、全国の鍵屋が加盟する「カギの110番・カギの救急車」のネットワークです。公式の店舗案内にある<Hl>「カギの救急車 日野市多摩平受付センター」</Hl>は、日野市全域と近郊へ出張する受付で、運営責任店は八王子市狭間町の「カギの救急車 八王子店」です。出張専門で店舗はなく、合鍵の作製は八王子店で受け付けています。料金目安は<Hl>鍵交換（シリンダー交換）17,600円〜、ディンプルキーのシリンダー交換27,500円〜</Hl>で、消費税・出張費・工事費・商品代をすべて含んだ金額と記載されています。
      </>
    ),
    rows: [
      { k: "鍵交換（シリンダー）", v: "17,600円〜", note: "消費税・出張費・工事費・商品代込み（公式の料金目安）" },
      { k: "鍵交換（ディンプルキー）", v: "27,500円〜" },
      { k: "補助錠・新規の鍵の取り付け", v: "33,000円〜" },
      { k: "鍵の不具合・メンテナンス・修理", v: "14,300円〜" },
      { k: "電話受付", v: "24時間（年中無休）" },
      { k: "支払い", v: "現金・クレジットカード（VISA/MASTER/JCB/American Express/Diners Club）" },
    ],
    area: "日野市全域（旭が丘・豊田・高幡・南平・平山・百草など市内の町名を掲載）と近郊へ出張",
    sources: [{ label: "カギの救急車「日野市多摩平受付センター」", href: SRC.kqTamadaira }],
    checked: CHECKED,
    compare: { price: "鍵交換17,600円〜（税・出張費込）", reception: "24時間（年中無休）", area: "日野市の受付センターあり" },
  },
  {
    id: "kagi-kyukyusha-toyoda",
    slug: "kagi-kyukyusha",
    name: "カギの救急車 日野市豊田受付センター",
    catch: "8:00〜22:00受付・豊田エリアの出張窓口",
    intro: (
      <>
        同じカギの救急車の<Hl>「カギの救急車 日野市豊田受付センター」</Hl>は、日野市の豊田エリアと近郊へ出張する受付です。対応地域として多摩平・豊田・旭が丘・栄町・日野台・富士見町・東平山・西平山・平山・川辺堀之内を挙げています。出張専門で店舗はなく、合鍵の作製は「カギの救急車 聖蹟桜ヶ丘店」で受け付けています。ページには具体的な金額の掲載はありません。よくある質問では、<Hl>電話で作業内容とおおよその金額を伝えてから出動し、作業前に料金を説明する</Hl>としています。
      </>
    ),
    rows: [
      { k: "料金", v: "金額の掲載なし", note: "電話でおおよその金額を案内し、作業前に説明（公式のよくある質問）" },
      { k: "電話受付", v: "8:00〜22:00（年中無休）" },
      { k: "到着の目安", v: "おおむね30分〜60分を目指す（公式のよくある質問・エリアや混雑で変わる）" },
      { k: "支払い", v: "現金・各種クレジットカード・電子マネーなど" },
    ],
    area: "日野市豊田エリア（多摩平・豊田・旭が丘・平山など）と近郊",
    sources: [{ label: "カギの救急車「日野市豊田受付センター」", href: SRC.kqToyoda }],
    checked: CHECKED,
    compare: { price: "金額の掲載なし（電話で案内）", reception: "8:00〜22:00（年中無休）", area: "日野市豊田エリアの受付センターあり" },
  },
];

const faqs: CityFaq[] = [
  {
    q: "日野市で鍵開けを頼むと、いくらかかりますか？",
    a: "各社の公式掲載（2026年11月19日確認）では、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格・20:00〜7:59は時間外料金8,800円）、鍵のレスキューが6,600円〜（税込、別に出張料4,400〜8,800円）です。カギの救急車の日野市の2つの受付センターは、鍵開けの金額を掲載していません。作業前に総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "カギの救急車の2つの受付センターは、何が違いますか？",
    a: "公式の店舗案内では、日野市多摩平受付センターは日野市全域が対象で電話受付は24時間、料金目安（鍵交換17,600円〜・税と出張費込み）を掲載しています。日野市豊田受付センターは豊田エリアと近郊が対象で、電話受付は8:00〜22:00です。合鍵の作製を受け付ける店舗も異なります（八王子店・聖蹟桜ヶ丘店）。",
  },
  {
    q: "日野市では空き巣の被害は増えていますか？",
    a: "警視庁の「区市町村の町丁別、罪種別及び手口別認知件数」によると、日野市の空き巣は令和7年8件（令和6年13件）、忍込みは6件（同1件）、居空きは1件（同1件）でした。3つの合計は両年とも15件ですが、事務所荒しなども含む侵入窃盗全体では令和7年44件（令和6年24件）に増えています。",
  },
  {
    q: "賃貸住宅で鍵をなくした場合は、すぐに業者を呼んでよいですか？",
    a: "賃貸住宅の鍵交換は、管理会社・大家の承諾が必要な場合が多いため、先に連絡してください。鍵開けだけを依頼する場合も、本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string][] = [
  ["空き巣", "8件", "13件", "820件", "628件"],
  ["忍込み", "6件", "1件", "158件", "160件"],
  ["居空き", "1件", "1件", "56件", "56件"],
  ["3つの合計", "15件", "15件", "1,034件", "844件"],
  ["侵入窃盗の全体", "44件", "24件", "2,698件", "2,258件"],
];

export default function AreaHinoPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="日野市"
      pref="東京都"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["日野市", "東京都", "鍵開け", "鍵交換", "空き巣", "業者比較"]}
      lead={[
        <>日野市には、カギの救急車の受付センターが市名を冠して2か所あります。ただし対象地域（市全域か豊田エリアか）と電話の受付時間（24時間か8:00〜22:00か）が異なり、料金の掲載の有無も分かれています。</>,
        <>本記事では、日野市（または全国）への対応を各社の公式サイトで2026年11月19日に確認できた鍵業者5社を、公式に掲載された料金・受付時間とあわせて比較しました。あわせて、警視庁が公表している町丁別の認知件数から、日野市の住宅を狙った侵入窃盗（空き巣・忍込み・居空き）の件数を整理しています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="警視庁の町丁別統計で見る日野市の空き巣・忍込み（令和7年）"
      theme={
        <>
          <p className="leading-loose mb-4">
            警視庁は、都内の区市町村・町丁ごとに、罪種別・手口別の刑法犯の認知件数を年ごとに公表しています。侵入窃盗のうち住宅を対象とする<Hl>空き巣・忍込み・居空き</Hl>について、日野市と東京都全体の件数を令和7年と令和6年で比べると次のとおりです。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">手口</th>
                  <th className="border border-border px-3 py-2 text-left">日野市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">日野市 令和6年</th>
                  <th className="border border-border px-3 py-2 text-left">東京都 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">東京都 令和6年</th>
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
            出典：<Ext href={SRC.mpdList}>警視庁「区市町村の町丁別、罪種別及び手口別認知件数」</Ext>の<Ext href={SRC.mpdR7}>令和7年</Ext>・<Ext href={SRC.mpdR6}>令和6年</Ext>のCSV（いずれも{CHECKED}）。日野市は「日野市計」、東京都は「合計」の行です。「3つの合計」は当サイトが3項目を足して算出しました。「侵入窃盗の全体」には、事務所荒し・出店荒しなど住宅以外を対象とする手口も含まれます。
          </p>
          <p className="leading-loose mb-4">
            日野市の空き巣・忍込み・居空きの合計は<Hl>令和6年・令和7年とも15件</Hl>でしたが、内訳は変わり、空き巣が13件から8件へ減る一方、忍込み（夜間、住人が寝ている間の侵入）が1件から6件へ増えました。当サイトが同じCSVの町丁別の行を数えたところ、令和7年の15件は11の町丁にまたがり、最も多い町丁でも2件（栄町2丁目・日野本町5丁目・平山2丁目・大字新井）でした。なお、日野市の刑法犯の総数は令和7年942件（令和6年816件）でした。
          </p>
          <p className="leading-loose mb-4">
            忍込みが増えているため、外出時だけでなく就寝前にも玄関と窓の施錠を確かめることが大切です。玄関に補助錠を加える方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口と対策は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>日野市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）、カギの救急車 日野市多摩平受付センター（鍵交換17,600円〜・税と出張費込み・24時間受付）、同 日野市豊田受付センター（8:00〜22:00受付・金額は電話で案内）の5社でした。</>,
        <>警視庁の町丁別の認知件数では、日野市の空き巣・忍込み・居空きの合計は令和7年15件で前年と同数でしたが、忍込みが6件に増えました。就寝前の施錠もあわせてご確認ください。</>,
      ]}
      nearby={[
        { href: "/area/hachioji/", label: "八王子市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/tachikawa/", label: "立川市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/fuchu/", label: "府中市の鍵開け・鍵交換業者おすすめ4選" },
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
