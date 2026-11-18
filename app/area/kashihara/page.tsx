import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/kashihara/";
const UPDATED = "2026年11月18日";
const UPDATED_ISO = "2026-11-18";
const CHECKED = "2026年11月18日確認";

const H1 = "【2026年最新】橿原市の鍵開け・鍵交換業者おすすめ4選｜奈良県警の資料で見る空き巣被害の6割が無施錠という実態も解説する鍵屋比較";
const DESC =
  "橿原市への対応を公式サイトで2026年11月18日に確認できた鍵業者4社（カギ110番・鍵の生活救急車・鍵のレスキュー・カギの救急車 大和高田店）の料金・受付時間を比較。奈良県警察の資料から、県内の空き巣などの住宅対象侵入窃盗の件数と、無施錠の割合もまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/nara/kashihara/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  kqTakada: "https://www.kagi1109948.com/shop/yamatotakada/",
  kqNara: "https://www.kagi1109948.com/shop/reco_nara/",
  policeList: "https://www.police.pref.nara.jp/0000000737.html",
  policeR8: "https://www.police.pref.nara.jp/cmsfiles/contents/0000000/737/R8.11.5.pdf",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "橿原市の加盟店ページあり",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトの<Hl>奈良県橿原市の鍵業者一覧</Hl>には、「橿原市対応」と表示された店舗が掲載されています。公式料金表では、自宅の<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途発生する場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間365日（橿原市ページの表示）" },
    ],
    area: "公式の「奈良県橿原市」の鍵業者一覧に、橿原市対応の店舗を掲載",
    sources: [
      { label: "カギ110番「橿原市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間365日", area: "橿原市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>奈良県の対応エリアに橿原市</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。20:00〜7:59の作業には<Hl>時間外料金8,800円</Hl>がかかり、最終価格は作業前に提示する見積書の価格としています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "見積もり", v: "現地見積もりは無料（公式の料金案内）" },
    ],
    area: "公式の対応エリア一覧（奈良県）に橿原市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表で<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記で<Hl>出張料4,400〜8,800円（税込）</Hl>を掲載しています。橿原市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
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
    name: "カギの救急車 大和高田店",
    catch: "近隣の大和高田市にある実店舗",
    intro: (
      <>
        カギの救急車は、全国の鍵屋が加盟する「カギの110番・カギの救急車」のネットワークです。<Hl>「カギの救急車 大和高田店」</Hl>は、近隣の大和高田市神楽に店舗を構える加盟店で、店舗営業時間は9:00〜18:00（不定休）です。公式の奈良県版の案内ページでは、奈良県内の店舗として奈良西店と大和高田店を挙げ、<Hl>主要エリアに橿原市</Hl>を含めています。大和高田店のページには、<Hl>出張工事の住宅開錠（玄関）11,000円〜、鍵交換14,300円〜</Hl>の料金目安が掲載されています。合鍵は店舗で作製できます。
      </>
    ),
    rows: [
      { k: "住宅の鍵開け（玄関）", v: "11,000円〜", note: "出張工事の料金目安。状況・場所・時間で変動" },
      { k: "鍵交換", v: "14,300円〜（ディンプルキーは19,800円〜）" },
      { k: "合鍵作成（住宅一般）", v: "660円〜" },
      { k: "営業時間", v: "9:00〜18:00（不定休・年末年始と盆は休業）" },
      { k: "店舗", v: "奈良県大和高田市神楽（駐車場あり）" },
    ],
    area: "公式の奈良県版ページで主要エリアに橿原市を掲載（奈良西店・大和高田店）",
    sources: [
      { label: "カギの救急車「大和高田店」", href: SRC.kqTakada },
      { label: "カギの救急車「奈良県に店舗のあるおすすめの鍵屋さん」", href: SRC.kqNara },
    ],
    checked: CHECKED,
    compare: { price: "住宅開錠11,000円〜（目安）", reception: "9:00〜18:00（不定休）", area: "奈良県版ページの主要エリアに橿原市" },
  },
];

const faqs: CityFaq[] = [
  {
    q: "橿原市で鍵開けを頼むと、いくらかかりますか？",
    a: "各社の公式掲載（2026年11月18日確認）では、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格）、鍵のレスキューが6,600円〜（税込、別に出張料4,400〜8,800円）、カギの救急車 大和高田店が住宅の玄関の鍵開けで11,000円〜（料金目安）です。いずれも最低額のため、作業前に総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "合鍵を作りたいだけの場合は、どこに行けばよいですか？",
    a: "カギの救急車 大和高田店（大和高田市神楽）は店舗で合鍵を作製しており、料金目安は住宅一般の鍵で660円〜、ディンプルキーで2,750円〜です（2026年11月18日確認）。メーカー純正キーが必要な鍵は、メーカーへの注文になる場合があります。",
    link: { href: "/aikagi/", label: "合鍵の作り方" },
  },
  {
    q: "奈良県では空き巣の被害はどのくらいありますか？",
    a: "奈良県警察の資料（令和8年11月5日）によると、令和8年10月末までの県内の空き巣などの住宅対象侵入窃盗は86件で、前年同期より44件少なくなっています。被害のうち無施錠だった割合は60％です。",
  },
  {
    q: "夜間に鍵をなくした場合、どこに頼めますか？",
    a: "カギ110番と鍵のレスキューは24時間365日の受付としています。鍵の生活救急車は20:00〜7:59の作業に時間外料金8,800円がかかると明記しています。カギの救急車 大和高田店の営業時間は9:00〜18:00です（2026年11月18日確認）。",
  },
];

export default function AreaKashiharaPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="橿原市"
      pref="奈良県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["橿原市", "奈良県", "鍵開け", "鍵交換", "空き巣", "業者比較"]}
      lead={[
        <>橿原市で鍵のトラブルが起きたときは、全国から出張する鍵業者のほか、近隣の大和高田市にある実店舗の鍵屋にも相談できます。夜間も受け付けるか、出張料が別にかかるかは業者ごとに異なるため、事前に比べておくと急な依頼でも判断しやすくなります。</>,
        <>本記事では、橿原市（または全国）への対応を各社の公式サイトで2026年11月18日に確認できた鍵業者4社を、公式に掲載された料金・受付時間とあわせて比較しました。あわせて、奈良県警察の資料から、県内の空き巣などの被害件数と、被害時に鍵がかかっていなかった割合を整理しています。</>,
      ]}
      agents={agents}
      themeId="museijou"
      themeTitle="奈良県警の資料で見る空き巣被害と無施錠の割合（令和8年10月末）"
      theme={
        <>
          <p className="leading-loose mb-4">
            奈良県警察は、県内の犯罪の発生状況を「やまとの安全」として毎月公表しています。令和8年11月5日付の資料では、令和8年10月末までの暫定値として次の数字が示されています。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">項目</th>
                  <th className="border border-border px-3 py-2 text-left">被害件数（令和8年10月末）</th>
                  <th className="border border-border px-3 py-2 text-left">前年同期との比較</th>
                  <th className="border border-border px-3 py-2 text-left">無施錠被害の割合</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <th className="border border-border px-3 py-2 whitespace-nowrap bg-[#EAF1F8] text-left font-bold">空き巣などの住宅対象侵入窃盗</th>
                  <td className="border border-border px-3 py-2">86件</td>
                  <td className="border border-border px-3 py-2">44件減</td>
                  <td className="border border-border px-3 py-2 font-bold">60％</td>
                </tr>
                <tr className="bg-[#F5F8FC]">
                  <th className="border border-border px-3 py-2 whitespace-nowrap bg-[#EAF1F8] text-left font-bold">自転車盗</th>
                  <td className="border border-border px-3 py-2">616件</td>
                  <td className="border border-border px-3 py-2">127件減</td>
                  <td className="border border-border px-3 py-2 font-bold">78％</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-6 leading-relaxed">
            出典：<Ext href={SRC.policeR8}>奈良県警察本部 生活安全企画課「やまとの安全」令和8年11月5日</Ext>（<Ext href={SRC.policeList}>掲載ページ</Ext>、{CHECKED}）。奈良県全体の暫定値です。橿原市単独の件数はこの資料には掲載されていません。
          </p>
          <p className="leading-loose mb-4">
            件数は前年より減っていますが、<Hl>住宅の被害の6割は鍵がかかっていない状態</Hl>で起きています。同じ資料では「鍵かけの徹底、防犯設備の導入を！」と呼びかけ、防犯性能の高い建物部品（CP部品）を挙げています。短時間のごみ出しや、在宅中の勝手口・窓も施錠することが基本です。
          </p>
          <p className="leading-loose mb-4">
            玄関の鍵をCP部品に交換する考え方は<Link href="/cp-nintei-jou/" className="text-primary underline">CPマーク付きの錠</Link>に、補助錠を加える方法は<Link href="/hojo-jou/" className="text-primary underline">補助錠の選び方</Link>にまとめています。鍵が古い・合鍵の数が分からないなどで交換を考える場合は、上の業者に見積もりを依頼してください。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>橿原市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）、カギの救急車 大和高田店（住宅開錠11,000円〜・営業9:00〜18:00）の4社でした。</>,
        <>奈良県警察の資料では、令和8年10月末までの県内の住宅対象侵入窃盗は86件で前年より減ったものの、無施錠被害の割合は60％でした。在宅中や短時間の外出時も施錠を徹底してください。</>,
      ]}
      nearby={[
        { href: "/area/nara/", label: "奈良の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/yamatokoriyama/", label: "大和郡山市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/ikoma/", label: "生駒市の鍵開け・鍵交換業者おすすめ4選" },
      ]}
      related={[
        { href: "/cp-nintei-jou/", label: "CPマーク付きの錠" },
        { href: "/hojo-jou/", label: "補助錠の選び方" },
        { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
        { href: "/kagiya-erabikata/", label: "鍵屋・鍵業者の選び方チェックリスト" },
      ]}
    />
  );
}
