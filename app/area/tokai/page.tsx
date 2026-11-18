import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/tokai/";
const UPDATED = "2026年11月18日";
const UPDATED_ISO = "2026-11-18";
const CHECKED = "2026年11月18日確認";

const H1 = "【2026年最新】東海市の鍵開け・鍵交換業者おすすめ3選｜名鉄の電車や駅で鍵を落としたときの問い合わせ方法も解説する鍵屋比較";
const DESC =
  "愛知県東海市への対応を公式サイトで2026年11月18日に確認できた鍵業者3社（カギ110番・鍵の生活救急車・鍵のレスキュー）の料金・受付時間を比較。名鉄電車の駅・車内で鍵を落としたときの問い合わせの手順（受付コード・電話窓口）もまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/aichi/tokai/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  meitetsu: "https://www.meitetsu.co.jp/customer-center/index.html",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "東海市の加盟店ページあり",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトには<Hl>愛知県東海市の鍵業者一覧のページ</Hl>があり、掲載店舗の欄に「東海市対応」と表示されています。公式料金表では、自宅の<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料は別途発生する場合があります。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間365日（東海市ページの表示）" },
    ],
    area: "公式の「愛知県東海市」の鍵業者一覧に、東海市対応の店舗を掲載",
    sources: [
      { label: "カギ110番「東海市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間365日", area: "東海市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>愛知県の対応エリアに東海市</Hl>が掲載されています。料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。20:00〜7:59の作業には<Hl>時間外料金8,800円</Hl>がかかり、最終価格は作業前に提示する見積書の価格としています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "見積もり", v: "現地見積もりは無料（公式の料金案内）" },
    ],
    area: "公式の対応エリア一覧（愛知県）に東海市を掲載",
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
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表で<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記で<Hl>出張料4,400〜8,800円（税込）</Hl>を掲載しています。東海市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
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
    q: "東海市で鍵開けを頼むと、いくらかかりますか？",
    a: "各社の公式掲載（2026年11月18日確認）では、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格・ハイセキュリティは29,700円〜）、鍵のレスキューが6,600円〜（税込、別に出張料4,400〜8,800円）です。いずれも最低額のため、作業前に総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "名鉄の電車で鍵を落とした場合、電話で問い合わせできますか？",
    a: "名鉄お客さまサポートセンター（0570-02-5151、9:00〜18:00）の音声ガイダンスで「お忘れ物のお問い合せ」を選べます。ただし名鉄は、チャットボットの「忘れ物を問い合わせる」で受付コードを受け取り、お忘れ物 お問い合わせフォームから問い合わせる方法を案内しています（2026年11月18日確認）。",
  },
  {
    q: "東海市に店舗を構える鍵屋は掲載していますか？",
    a: "当サイトでは、公式サイトで東海市（または全国）への対応を確認できた業者のみを掲載しています。2026年11月18日の確認では、カギの救急車の店舗案内に東海市を対応エリアとする受付は見つからなかったため、掲載していません。",
  },
  {
    q: "鍵をなくしたら、鍵交換までしたほうがよいですか？",
    a: "住所が分かる物と一緒になくした場合や、どこでなくしたか分からない場合は、第三者に使われるおそれがあるため、シリンダー交換を検討してください。賃貸住宅では、交換の前に管理会社・大家へ連絡します。",
    link: { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
  },
];

const steps: [string, string][] = [
  ["1. 受付コードを受け取る", "名鉄公式サイトのチャットボットで「忘れ物を問い合わせる」から検索し、「受付コード（例123-456）」を受け取ります。"],
  ["2. フォームで問い合わせる", "受付コードを受け取ったら、「お忘れ物 お問い合わせフォーム」から問い合わせます。"],
  ["3. 登録まで時間がかかる場合", "駅・車内の忘れ物は検索システムに登録されるまで時間がかかるため、問い合わせ時点で登録がない場合は、時間をあけて再度問い合わせます。"],
  ["電話で問い合わせる場合", "名鉄お客さまサポートセンター 0570-02-5151（9:00〜18:00）。音声ガイダンスで「1.お忘れ物のお問い合せ」を選びます。時間帯によりつながりにくい場合があります。"],
];

export default function AreaTokaiPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="東海市"
      pref="愛知県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["東海市", "愛知県", "鍵開け", "鍵交換", "鍵の落とし物", "業者比較"]}
      lead={[
        <>東海市で鍵をなくしたときは、落とした可能性のある場所への問い合わせと、家に入るための鍵業者への依頼を、並行して考えることになります。電車で通勤・通学する方は、駅や車内で落とした場合の手順も知っておくと落ち着いて対応できます。</>,
        <>本記事では、東海市（または全国）への対応を各社の公式サイトで2026年11月18日に確認できた鍵業者3社を、公式に掲載された料金・受付時間とあわせて比較しました。あわせて、名鉄電車の駅・車内で鍵を落としたときの問い合わせ方法を、名鉄の公式案内にもとづいて整理しています。</>,
      ]}
      agents={agents}
      excludedNote={
        <>※カギの救急車は、2026年11月18日に公式の店舗案内を確認した時点で、東海市を対応エリアに挙げる受付を確認できなかったため掲載していません。</>
      }
      themeId="otoshimono"
      themeTitle="名鉄の電車や駅で鍵を落としたとき（名鉄の公式案内）"
      theme={
        <>
          <p className="leading-loose mb-4">
            名古屋鉄道（名鉄）は、駅・車内のお忘れ物の問い合わせを、<Hl>受付コードを使ったフォーム</Hl>で受け付けています。電話窓口もありますが、名鉄は電話がつながりにくい場合があるとしています。公式案内の手順は次のとおりです。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {steps.map(([k, v], i) => (
                  <tr key={k} className={i % 2 === 1 ? "bg-[#F5F8FC]" : "bg-white"}>
                    <th className="border border-border px-3 py-2 whitespace-nowrap bg-[#EAF1F8] text-left font-bold align-top">{k}</th>
                    <td className="border border-border px-3 py-2 leading-relaxed">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-6 leading-relaxed">
            出典：<Ext href={SRC.meitetsu}>名古屋鉄道「お問い合わせ」</Ext>（{CHECKED}）。名鉄バスの一般路線バス車内の忘れ物は各営業所への電話、高速バス・空港バスなどは別の案内になります。
          </p>
          <p className="leading-loose mb-4">
            鍵に付けた紛失防止タグなど<Hl>GPS機能付きの物は、GPS等で所在が確認された場合でも、運行中の列車に対して個別に捜索はしない</Hl>と名鉄は案内しています。見つかるまでの間は、自宅に入る手段を別に確保する必要があります。
          </p>
          <p className="leading-loose mb-4">
            住所が分かる物と一緒に鍵を落とした場合は、見つかった後も<Link href="/kagi-funshitsu/" className="text-primary underline">鍵をなくしたときの対処</Link>を参考に、シリンダー交換を検討してください。合鍵を手元に置いていない場合は、<Link href="/aikagi/" className="text-primary underline">合鍵の作り方</Link>も確認しておくと、次に備えられます。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>東海市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜・24時間365日）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円・24時間365日）の3社でした。</>,
        <>名鉄の駅・車内で鍵を落とした場合は、チャットボットで受付コードを受け取ってからフォームで問い合わせます。電話はサポートセンター（9:00〜18:00）で受け付けています。</>,
      ]}
      nearby={[
        { href: "/area/nagoya/", label: "名古屋の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/kariya/", label: "刈谷市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/anjo/", label: "安城市の鍵開け・鍵交換業者おすすめ4選" },
      ]}
      related={[
        { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
        { href: "/aikagi/", label: "合鍵の作り方" },
        { href: "/hojo-jou/", label: "補助錠の選び方" },
        { href: "/kagiya-erabikata/", label: "鍵屋・鍵業者の選び方チェックリスト" },
      ]}
    />
  );
}
