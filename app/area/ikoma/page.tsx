import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/ikoma/";
const UPDATED = "2026年11月16日";
const UPDATED_ISO = "2026-11-16";
const CHECKED = "2026年11月16日確認";

const H1 = "【2026年最新】生駒市の鍵開け・鍵交換業者おすすめ4選｜近鉄の電車や駅で鍵を落としたときの問い合わせ先も解説する鍵屋比較";
const DESC =
  "生駒市への対応を公式サイトで2026年11月16日に確認できた鍵業者4社（カギ110番・鍵の生活救急車・鍵のレスキュー・カギの救急車 生駒市受付センター）の料金・受付時間・時間外料金を比較。近鉄の電車や駅で鍵を落としたときの忘れ物ダイヤル・受け取り場所・本人確認についてもまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110Ikoma: "https://www.kagi110ban.jp/nara/ikoma/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-seikatsukyukyusya.com/price/",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  kqIkoma: "https://www.kagi1109948.com/shop/99nara-ikoma/",
  kintetsu: "https://www.kintetsu.co.jp/tetsudo/owasuremono.html",
  ikomaKotsu: "https://www.city.ikoma.lg.jp/cmsfiles/contents/0000038/38278/R080326_6.pdf",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "生駒市の加盟店ページあり",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトには<Hl>奈良県生駒市の鍵業者一覧のページ</Hl>があり、各店舗の欄に「生駒市対応」と表示されています。公式料金表では、自宅の<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料が別途かかる場合があると記載されています。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間365日（生駒市ページの表示）" },
    ],
    area: "公式の「奈良県生駒市」の鍵業者一覧に、生駒市対応の店舗を掲載",
    sources: [
      { label: "カギ110番「生駒市の鍵屋一覧」", href: SRC.k110Ikoma },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間365日", area: "生駒市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>奈良県の対応エリアに生駒市</Hl>が掲載されています。公式の料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>がかかると明記しており、最終価格は作業前に提示する見積書の価格としています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "受付", v: "24時間受付・年中無休（総合受付コールセンター）" },
    ],
    area: "公式の対応エリア一覧（奈良県）に生駒市を掲載",
    sources: [
      { label: "生活救急車「対応エリア」", href: SRC.seikatsuArea },
      { label: "生活救急車「料金案内」", href: SRC.seikatsuPrice },
    ],
    checked: CHECKED,
    compare: { price: "8,800円〜（標準価格）", reception: "24時間受付（20:00〜7:59は時間外料金）", area: "対応エリア一覧に掲載" },
  },
  {
    id: "kagi-rescue",
    slug: "kagi-rescue",
    name: "鍵のレスキュー",
    catch: "料金表と出張料を公式に掲載",
    intro: (
      <>
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の簡易料金表で<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記で<Hl>出張料4,400〜8,800円（税込・出張先の地域により異なる）</Hl>を掲載しています。公式サイトの都道府県別の案内に奈良県があり、よくある質問では「日本全国どこでも出張可能」と回答しています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "簡易料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "出張先の地域により異なる（特定商取引法上の表記）" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "都道府県別の案内に奈良県あり。よくある質問で「日本全国どこでも出張可能」",
    sources: [
      { label: "鍵のレスキュー よくある質問「出張できないエリアはありますか？」", href: SRC.rescueFaq },
      { label: "簡易料金表", href: SRC.rescuePrice },
      { label: "特定商取引法上の表記", href: SRC.rescueTokusho },
    ],
    checked: CHECKED,
    compare: { price: "6,600円〜（税込）＋出張料", reception: "24時間365日", area: "奈良県の案内あり・全国出張" },
  },
  {
    id: "kagi-kyukyusha",
    slug: "kagi-kyukyusha",
    name: "カギの救急車 生駒市受付センター",
    catch: "生駒市専用の受付・奈良西店が運営",
    intro: (
      <>
        カギの救急車は、全国の鍵屋が加盟する「カギの110番・カギの救急車」のネットワークです。公式の店舗案内には<Hl>「カギの救急車 生駒市受付センター」</Hl>があり、生駒市全域と、近隣の奈良市・大和郡山市・京都府木津川市・精華町に対応するとしています。受付センターは出張専門で店舗はなく、運営責任店は<Hl>奈良市二条大路南の「カギの救急車 奈良西店」</Hl>です。合鍵の作製は奈良西店などの店舗で受け付けています。錠前の修理・交換・取付は、見積もり無料（遠方10km圏内）としています。
      </>
    ),
    rows: [
      { k: "料金", v: "ページに一律の掲載なし", note: "作業前に料金と作業内容を説明するとしている（公式）" },
      { k: "電話受付", v: "9:00〜18:00（不定休）", note: "季節休業：GW・年末年始" },
      { k: "見積もり", v: "錠前の修理・交換・取付は無料（遠方10km圏内）" },
      { k: "運営責任店", v: "カギの救急車 奈良西店（奈良市二条大路南）" },
    ],
    area: "生駒市全域と近隣（奈良市・大和郡山市・木津川市・精華町）に対応（受付センターのページ）",
    sources: [{ label: "カギの救急車「生駒市受付センター」", href: SRC.kqIkoma }],
    checked: CHECKED,
    compare: { price: "電話で見積もり", reception: "9:00〜18:00（不定休）", area: "生駒市受付センターあり" },
  },
];

const faqs: CityFaq[] = [
  {
    q: "生駒市で鍵開けを頼むと、いくらかかりますか？",
    a: "各社の公式掲載（2026年11月16日確認）では、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格・ハイセキュリティは29,700円〜）、鍵のレスキューが6,600円〜（税込、別に出張料4,400〜8,800円）です。カギの救急車 生駒市受付センターは一律の料金を掲載していません。いずれも最低額のため、作業前に総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "夜に鍵をなくした場合、時間帯で料金は変わりますか？",
    a: "鍵の生活救急車は、20:00〜7:59の作業に時間外料金8,800円がかかると料金表に明記しています。カギの救急車 生駒市受付センターの電話受付は9:00〜18:00です。夜間に依頼する場合は、時間帯による割増の有無を含めた総額を電話で確認してください。",
  },
  {
    q: "近鉄の電車の中で鍵を落としました。どこに問い合わせればよいですか？",
    a: "近鉄は、お忘れ物専用ダイヤル（050-3536-3942、8:00〜21:00・年中無休）でオペレーターが近鉄全線の忘れ物を探すとしています。当日の忘れ物は見つかった駅で、翌日以降は近鉄忘れ物センターで受け取ります（2026年11月16日確認）。",
  },
  {
    q: "落とした鍵が見つかっても、家族に受け取りを頼めますか？",
    a: "近鉄は、忘れ物の受け取りは本人に限るとしています。代理人が受け取る場合は、委任状と、委任者および代理人の公的証明書（委任者の公的証明書はコピー可）が必要です。本人が受け取る場合も、住所・氏名が確認できる公的証明書を持参します（2026年11月16日確認）。",
  },
];

export default function AreaIkomaPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="生駒市"
      pref="奈良県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["生駒市", "奈良県", "鍵開け", "鍵交換", "鍵の落とし物", "業者比較"]}
      lead={[
        <>生駒市の資料では、生駒駅を中心に東西に近鉄奈良線、北にけいはんな線、南に近鉄生駒線が運行していると説明されています（<Ext href={SRC.ikomaKotsu}>生駒市「生駒市の公共交通の現状と課題について」</Ext>、{CHECKED}）。通勤・通学で電車を使う方が多い地域では、外出先で鍵を落とした場合の連絡先もあらかじめ確認しておくと、慌てずに対応できます。</>,
        <>本記事では、生駒市（または奈良県・全国）への対応を各社の公式サイトで2026年11月16日に確認できた鍵業者4社を、公式に掲載された料金・受付時間とあわせて比較しました。あわせて、近鉄の電車や駅で鍵を落としたときの問い合わせ先と受け取り方をまとめています。</>,
      ]}
      agents={agents}
      themeId="otoshimono"
      themeTitle="近鉄の電車や駅で鍵を落としたとき（近鉄の公式案内）"
      theme={
        <>
          <p className="leading-loose mb-4">
            鍵をなくしたときは、鍵業者に解錠を依頼する前に、落とした場所に届いていないかを確認します。電車や駅で落とした可能性がある場合の、近鉄の公式案内は次のとおりです。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ["問い合わせ", "お忘れ物専用ダイヤル 050-3536-3942（8:00〜21:00・年中無休）。オペレーターが近鉄全線の忘れ物を探す"],
                  ["当日の受け取り", "忘れ物を発見した駅（保管駅での受け取りは当日のみ。希望駅への送付はできない）"],
                  ["翌日以降の受け取り", "近鉄忘れ物センター。西青山駅以西で見つかったものは近鉄忘れ物センター（大阪）＝鶴橋駅の西改札口から徒歩3分"],
                  ["センターの営業時間", "平日13時〜20時、土休日13時〜18時（年中無休）"],
                  ["警察署への移管後", "警察署での受け取り（交通費は実費負担）"],
                  ["本人確認", "住所・氏名が確認できる公的証明書（運転免許証・健康保険証等）。代理人は委任状と、委任者・代理人の公的証明書が必要"],
                  ["自宅への配送", "希望すれば配送可（送料は利用者負担）。個人情報が記載されたもの・現金類などは配送できない"],
                ].map(([k, v], i) => (
                  <tr key={k} className={i % 2 === 1 ? "bg-[#F5F8FC]" : "bg-white"}>
                    <th className="border border-border px-3 py-2 whitespace-nowrap bg-[#EAF1F8] text-left font-bold w-36">{k}</th>
                    <td className="border border-border px-3 py-2">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-6 leading-relaxed">
            出典：<Ext href={SRC.kintetsu}>近畿日本鉄道「お忘れ物のお問い合せ、引渡しについて」</Ext>（{CHECKED}）
          </p>
          <p className="leading-loose mb-4">
            近鉄は、他社と共同で使用する駅の構内で落とした場合は、近鉄で見つからなければその鉄道会社・交通局にも確認するよう案内しており、けいはんな線の<Hl>長田駅</Hl>がこれに当たります。また、相互直通運転をしている路線では直通運転先で見つかることもあるとしています。列車内の捜索は途中駅ではできないため、時間がかかる場合があります。
          </p>
          <p className="leading-loose mb-4">
            住所が分かる物と一緒に家の鍵をなくした場合は、見つかったとしても、その間に第三者が鍵を手にしていた可能性を考えて、シリンダー交換を検討してください。警察への届け出は<Link href="/kagi-funshitsu/zenkoku/" className="text-primary underline">鍵の落とし物を警察で探す・遺失届を出す</Link>、交換の判断は<Link href="/kagi-funshitsu/" className="text-primary underline">鍵をなくしたときの対処</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>生駒市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）、カギの救急車 生駒市受付センター（料金は電話で見積もり・受付9:00〜18:00）の4社でした。</>,
        <>電車や駅で鍵を落とした可能性がある場合は、近鉄のお忘れ物専用ダイヤルで確認できます。翌日以降は鶴橋駅近くの近鉄忘れ物センターでの受け取りとなり、公的証明書による本人確認があります。</>,
      ]}
      nearby={[
        { href: "/area/nara/", label: "奈良の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/higashiosaka/", label: "東大阪市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/hirakata/", label: "枚方市の鍵開け・鍵交換業者おすすめ4選" },
      ]}
      related={[
        { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
        { href: "/kagi-funshitsu/zenkoku/", label: "鍵の落とし物を警察で探す・遺失届を出す" },
        { href: "/shimedashi/", label: "家から締め出されたときの対処" },
        { href: "/kagiya-erabikata/", label: "鍵屋・鍵業者の選び方チェックリスト" },
      ]}
    />
  );
}
