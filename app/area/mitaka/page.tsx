import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/mitaka/";
const UPDATED = "2026年11月20日";
const UPDATED_ISO = "2026-11-20";
const CHECKED = "2026年11月20日確認";

const H1 = "【2026年最新】三鷹市の鍵開け・鍵交換業者おすすめ4選｜警視庁の町丁別統計で見る三鷹市の空き巣の件数も解説する鍵屋比較";
const DESC =
  "三鷹市への対応を公式サイトで2026年11月20日に確認できた鍵業者4社（カギ110番・鍵の生活救急車・鍵のレスキュー・カギの救急車 武蔵野店【三鷹市】）の料金・受付時間を比較。警視庁の町丁別の認知件数から、三鷹市の空き巣・忍込み・居空きの件数を前年と比べてまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/tokyo/mitaka/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  kqMusashino: "https://www.kagi1109948.com/shop/musashino/",
  mpdList: "https://www.keishicho.metro.tokyo.lg.jp/about_mpd/jokyo_tokei/jokyo/ninchikensu.html",
  mpdR7: "https://www.keishicho.metro.tokyo.lg.jp/about_mpd/jokyo_tokei/jokyo/ninchikensu.files/R7.csv",
  mpdR6: "https://www.keishicho.metro.tokyo.lg.jp/about_mpd/jokyo_tokei/jokyo/ninchikensu.files/R6.csv",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "三鷹市の加盟店ページあり",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>東京都三鷹市の鍵屋一覧</Hl>には「三鷹市対応」と表示された店舗が掲載されています。公式料金表では、自宅の<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。相談を受けた業者が対応できない場合は、別の業者を紹介する場合があると記載されています。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "受付", v: "店舗により異なる（三鷹市の一覧に24時間年中無休の店舗あり）" },
    ],
    area: "公式の「東京都三鷹市」の鍵屋一覧に、三鷹市対応の店舗を掲載",
    sources: [
      { label: "カギ110番「三鷹市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "店舗により異なる", area: "三鷹市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>東京都の対応エリアに三鷹市</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。20:00〜7:59の作業には<Hl>時間外料金8,800円</Hl>がかかります。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
    ],
    area: "公式の対応エリア一覧（東京都）に三鷹市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表で<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記で<Hl>出張料4,400〜8,800円（税込）</Hl>を掲載しています。三鷹市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
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
    id: "kagi-kyukyusha-musashino",
    slug: "kagi-kyukyusha",
    name: "カギの救急車 武蔵野店【三鷹市】",
    catch: "三鷹市上連雀に店舗・電話は24時間受付",
    intro: (
      <>
        カギの救急車は、全国の鍵屋が加盟する「カギの110番・カギの救急車」のネットワークです。公式の店舗案内にある<Hl>「カギの救急車 武蔵野店【三鷹市】」</Hl>は、店名は武蔵野店ですが、所在地は<Hl>三鷹市上連雀9丁目</Hl>です。1996年10月にオープンし、2015年10月に現在地へ移転したと記載されています。電話受付は24時間（年中無休）、店舗の営業時間は10:00〜18:00（年中無休）で、合鍵作製・錠前の交換や取付・修理・住宅や車の開錠・金庫の開錠などを扱っています。ページには具体的な料金の掲載はありません。
      </>
    ),
    rows: [
      { k: "料金", v: "金額の掲載なし", note: "依頼前に電話で見積もりを確認" },
      { k: "電話受付", v: "24時間（年中無休）" },
      { k: "店舗の営業時間", v: "10:00〜18:00（年中無休）", note: "変更・臨時休業の場合あり。来店前に電話で確認するよう案内" },
      { k: "所在地", v: "東京都三鷹市上連雀9丁目1-22" },
      { k: "取扱い", v: "合鍵作製・錠前交換/取付/修理・住宅/車開錠・金庫開錠/販売・電気錠/システム工事・防犯カメラ" },
    ],
    area: "三鷹市（店舗所在地）。最寄りは武蔵境駅・三鷹駅・新小金井駅と案内",
    sources: [{ label: "カギの救急車「武蔵野店【三鷹市】」", href: SRC.kqMusashino }],
    checked: CHECKED,
    compare: { price: "金額の掲載なし", reception: "電話24時間・店舗10:00〜18:00", area: "三鷹市内に店舗あり" },
  },
];

const faqs: CityFaq[] = [
  {
    q: "三鷹市で鍵開けを頼むと、いくらかかりますか？",
    a: "各社の公式掲載（2026年11月20日確認）では、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格・20:00〜7:59は時間外料金8,800円）、鍵のレスキューが6,600円〜（税込、別に出張料4,400〜8,800円）です。カギの救急車 武蔵野店【三鷹市】は料金を掲載していません。作業前に総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "「カギの救急車 武蔵野店」は武蔵野市の店ですか？",
    a: "公式の店舗案内では、店名は「武蔵野店」ですが、所在地は東京都三鷹市上連雀9丁目です。最寄り駅として武蔵境駅・三鷹駅・新小金井駅が挙げられています。店舗の営業時間は10:00〜18:00、電話受付は24時間（いずれも年中無休）です。",
  },
  {
    q: "三鷹市では空き巣の被害は増えていますか？",
    a: "警視庁の「区市町村の町丁別、罪種別及び手口別認知件数」によると、三鷹市の空き巣は令和7年5件（令和6年3件）、忍込みは0件（同0件）、居空きは1件（同0件）でした。3つの合計は6件（同3件）で、事務所荒しなども含む侵入窃盗全体は20件（同17件）です。件数は少ないものの、前年より増えています。",
  },
  {
    q: "賃貸住宅で鍵をなくした場合は、すぐに業者を呼んでよいですか？",
    a: "賃貸住宅の鍵交換は、管理会社・大家の承諾が必要な場合が多いため、先に連絡してください。鍵開けだけを依頼する場合も、本人確認の書類を求められることがあります。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const statRows: [string, string, string, string, string][] = [
  ["空き巣", "5件", "3件", "820件", "628件"],
  ["忍込み", "0件", "0件", "158件", "160件"],
  ["居空き", "1件", "0件", "56件", "56件"],
  ["3つの合計", "6件", "3件", "1,034件", "844件"],
  ["侵入窃盗の全体", "20件", "17件", "2,698件", "2,258件"],
];

export default function AreaMitakaPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="三鷹市"
      pref="東京都"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["三鷹市", "東京都", "鍵開け", "鍵交換", "空き巣", "業者比較"]}
      lead={[
        <>三鷹市には、カギの救急車の「武蔵野店」が上連雀に店舗を構えています。店名に「武蔵野」と付いていますが、公式の店舗案内での所在地は三鷹市です。ほかに、出張型の受付サービス3社が三鷹市（または全国）への対応を公式に掲載しています。</>,
        <>本記事では、三鷹市への対応を各社の公式サイトで2026年11月20日に確認できた鍵業者4社を、公式に掲載された料金・受付時間とあわせて比較しました。あわせて、警視庁が公表している町丁別の認知件数から、三鷹市の住宅を狙った侵入窃盗（空き巣・忍込み・居空き）の件数を整理しています。</>,
      ]}
      agents={agents}
      themeId="toukei"
      themeTitle="警視庁の町丁別統計で見る三鷹市の空き巣・忍込み（令和7年）"
      theme={
        <>
          <p className="leading-loose mb-4">
            警視庁は、都内の区市町村・町丁ごとに、罪種別・手口別の刑法犯の認知件数を年ごとに公表しています。侵入窃盗のうち住宅を対象とする<Hl>空き巣・忍込み・居空き</Hl>について、三鷹市と東京都全体の件数を令和7年と令和6年で比べると次のとおりです。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">手口</th>
                  <th className="border border-border px-3 py-2 text-left">三鷹市 令和7年</th>
                  <th className="border border-border px-3 py-2 text-left">三鷹市 令和6年</th>
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
            出典：<Ext href={SRC.mpdList}>警視庁「区市町村の町丁別、罪種別及び手口別認知件数」</Ext>の<Ext href={SRC.mpdR7}>令和7年</Ext>・<Ext href={SRC.mpdR6}>令和6年</Ext>のCSV（いずれも{CHECKED}）。三鷹市は「三鷹市計」、東京都は「合計」の行です。「3つの合計」は当サイトが3項目を足して算出しました。「侵入窃盗の全体」には、事務所荒し・出店荒しなど住宅以外を対象とする手口も含まれます。
          </p>
          <p className="leading-loose mb-4">
            三鷹市の空き巣・忍込み・居空きの合計は<Hl>令和6年3件から令和7年6件</Hl>に増えました。当サイトが同じCSVの町丁別の行を数えたところ、令和7年の6件は4つの町丁にまたがり、下連雀2丁目と中原4丁目が各2件、井口3丁目と中原2丁目が各1件でした。忍込み（夜間、住人が寝ている間の侵入）は両年とも0件で、令和7年の6件のうち5件が空き巣（留守中の侵入）でした。なお、三鷹市の刑法犯の総数は令和7年829件（令和6年803件）でした。
          </p>
          <p className="leading-loose mb-4">
            空き巣は留守中の侵入のため、短時間の外出でも玄関と窓の施錠を確かめることが基本です。玄関に補助錠を加える方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>に、侵入の手口と対策は<Link href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>三鷹市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）、カギの救急車 武蔵野店【三鷹市】（上連雀に店舗・電話24時間受付・料金の掲載なし）の4社でした。</>,
        <>警視庁の町丁別の認知件数では、三鷹市の空き巣・忍込み・居空きの合計は令和7年6件で、前年の3件から増えました。外出時の施錠もあわせてご確認ください。</>,
      ]}
      nearby={[
        { href: "/area/musashino/", label: "武蔵野市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/chofu/", label: "調布市の鍵開け・鍵交換業者おすすめ4選" },
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
