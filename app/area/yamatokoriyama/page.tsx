import type { Metadata } from "next";
import Link from "next/link";
import CityAreaArticle, { Ext, Hl, type CityAgent, type CityFaq } from "@/components/CityAreaArticle";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/area/yamatokoriyama/";
const UPDATED = "2026年11月17日";
const UPDATED_ISO = "2026-11-17";
const CHECKED = "2026年11月17日確認";

const H1 = "【2026年最新】大和郡山市の鍵開け・鍵交換業者おすすめ4選｜JR郡山駅・近鉄郡山駅の電車や駅で鍵を落としたときの問い合わせ先も解説する鍵屋比較";
const DESC =
  "大和郡山市への対応を公式サイトで2026年11月17日に確認できた鍵業者4社（カギ110番・鍵の生活救急車・鍵のレスキュー・カギの救急車 生駒市受付センター）の料金・受付時間を比較。JR西日本と近鉄の電車や駅で鍵を落としたときの問い合わせ先と、受け取りに必要な書類もまとめています。";

export const metadata: Metadata = {
  title: { absolute: `${H1}｜鍵トラブルナビ` },
  description: DESC,
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: { title: H1, description: DESC, url: `${SITE}${PATH}`, type: "article", images: ["/images/kv-top.jpg"] },
};

const SRC = {
  k110City: "https://www.kagi110ban.jp/nara/yamatokoriyama/",
  k110Price: "https://www.kagi110ban.jp/price/",
  seikatsuArea: "https://kagi-help.com/area",
  seikatsuPrice: "https://kagi-help.com/price",
  rescueFaq: "https://www.kagi110qq.co.jp/faq/q022.html",
  rescuePrice: "https://www.kagi110qq.co.jp/price/price.html",
  rescueTokusho: "https://www.kagi110qq.co.jp/about/transaction.html",
  kqIkoma: "https://www.kagi1109948.com/shop/99nara-ikoma/",
  cityAccess: "https://www.city.yamatokoriyama.lg.jp/soshiki/kikakuseisakuka/shinoshokai/2/15573.html",
  jrWest: "https://www.jr-odekake.net/railroad/service/left.html",
  kintetsu: "https://www.kintetsu.co.jp/tetsudo/owasuremono.html",
};

const agents: CityAgent[] = [
  {
    id: "kagi110ban",
    slug: "kagi110ban",
    name: "カギ110番",
    catch: "大和郡山市の加盟店ページあり",
    intro: (
      <>
        カギ110番は、シェアリングテクノロジー株式会社が運営する、加盟店を紹介する形の鍵トラブル受付サービスです。公式サイトには<Hl>奈良県大和郡山市の鍵業者一覧のページ</Hl>があり、掲載店舗の欄に「大和郡山市対応」と表示されています。公式料金表では、自宅の<Hl>鍵開けが11,000円〜、鍵交換（部材費込）が14,300円〜（いずれも税込）</Hl>です。交通費や、依頼者の都合によるキャンセル料が別途かかる場合があると記載されています。
      </>
    ),
    rows: [
      { k: "鍵開け（自宅）", v: "11,000円〜（税込）", note: "公式料金表。加盟店・エリアにより異なる場合あり" },
      { k: "鍵交換（自宅）", v: "14,300円〜（税込・部材費込）" },
      { k: "別途かかる場合", v: "交通費・依頼者の都合によるキャンセル料" },
      { k: "受付", v: "24時間365日（大和郡山市ページの表示）" },
    ],
    area: "公式の「奈良県大和郡山市」の鍵業者一覧に、大和郡山市対応の店舗を掲載",
    sources: [
      { label: "カギ110番「大和郡山市の鍵屋一覧」", href: SRC.k110City },
      { label: "カギ110番「料金のご案内」", href: SRC.k110Price },
    ],
    checked: CHECKED,
    compare: { price: "11,000円〜（税込）", reception: "24時間365日", area: "大和郡山市の一覧ページあり" },
  },
  {
    id: "seikatsu-kyukyusha",
    slug: "seikatsu-kyukyusha",
    name: "鍵の生活救急車",
    catch: "夜間の時間外料金を料金表に明記",
    intro: (
      <>
        鍵の生活救急車は、株式会社生活救急車が運営する鍵トラブルの受付サービスです。公式の対応エリア一覧では、<Hl>奈良県の対応エリアに大和郡山市</Hl>が掲載されています。公式の料金表（標準価格）では、玄関・建物の<Hl>鍵開け・解錠が8,800円〜（ハイセキュリティは29,700円〜）</Hl>、鍵交換（シリンダーのみ）が11,000円＋部品代です。<Hl>20:00〜7:59の作業には時間外料金8,800円</Hl>がかかり、最終価格は作業前に提示する見積書の価格としています。
      </>
    ),
    rows: [
      { k: "鍵開け（玄関・建物）", v: "8,800円〜", note: "標準価格。ハイセキュリティは29,700円〜" },
      { k: "鍵交換（シリンダーのみ）", v: "11,000円＋部品代" },
      { k: "時間外料金", v: "8,800円（20:00〜7:59）" },
      { k: "見積もり", v: "現地見積もりは無料（公式の料金案内）" },
    ],
    area: "公式の対応エリア一覧（奈良県）に大和郡山市を掲載",
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
    catch: "全国統一料金表と出張料を公式に掲載",
    intro: (
      <>
        鍵のレスキュー（鍵の110番救急車）は、株式会社レスキューが運営する出張専門の鍵業者です。公式の全国統一料金表で<Hl>鍵開け6,600円〜（税込）</Hl>、特定商取引法上の表記で<Hl>出張料4,400〜8,800円（税込）</Hl>を掲載しています。大和郡山市を名指しした案内ページはありませんが、公式のよくある質問で「日本全国どこでも出張可能」と回答し、24時間365日体制としています。
      </>
    ),
    rows: [
      { k: "鍵開け", v: "6,600円〜（税込）", note: "全国統一料金表。正式な金額は現地の見積もり" },
      { k: "鍵交換", v: "6,600円〜（税込・部材費別）" },
      { k: "出張料", v: "4,400〜8,800円（税込）", note: "特定商取引法上の表記" },
      { k: "受付", v: "24時間365日体制（公式のよくある質問）" },
    ],
    area: "公式のよくある質問で「日本全国どこでも出張可能」（市を名指しした案内はなし）",
    sources: [
      { label: "鍵のレスキュー よくある質問「出張できないエリアはありますか？」", href: SRC.rescueFaq },
      { label: "全国統一料金表", href: SRC.rescuePrice },
      { label: "特定商取引法上の表記", href: SRC.rescueTokusho },
    ],
    checked: CHECKED,
    compare: { price: "6,600円〜（税込）＋出張料", reception: "24時間365日", area: "全国出張（公式FAQ）" },
  },
  {
    id: "kagi-kyukyusha",
    slug: "kagi-kyukyusha",
    name: "カギの救急車 生駒市受付センター",
    catch: "近隣エリアに大和郡山市を明記",
    intro: (
      <>
        カギの救急車は、全国の鍵屋が加盟する「カギの110番・カギの救急車」のネットワークです。大和郡山市専用の受付ページは見当たりませんでしたが、<Hl>「カギの救急車 生駒市受付センター」のページに、近隣の対応エリアとして奈良県大和郡山市</Hl>が明記されています。受付センターは出張専門で、運営責任店は奈良市二条大路南の「カギの救急車 奈良西店」です。錠前の修理・交換・取付は見積もり無料（遠方10km圏内）としており、大和郡山市内でも場所によっては対象外となる可能性があるため、電話で確認してください。
      </>
    ),
    rows: [
      { k: "料金", v: "ページに一律の掲載なし", note: "作業前に料金と作業内容を説明するとしている（公式）" },
      { k: "電話受付", v: "9:00〜18:00（不定休あり）", note: "季節休業：GW・年末年始" },
      { k: "見積もり", v: "錠前の修理・交換・取付は無料（遠方10km圏内）" },
      { k: "支払い", v: "現金・クレジットカード" },
    ],
    area: "生駒市受付センターのページに、近隣エリアとして大和郡山市を掲載",
    sources: [{ label: "カギの救急車「生駒市受付センター」", href: SRC.kqIkoma }],
    checked: CHECKED,
    compare: { price: "電話で見積もり", reception: "9:00〜18:00（不定休あり）", area: "生駒市受付センターの近隣エリア" },
  },
];

const faqs: CityFaq[] = [
  {
    q: "大和郡山市で鍵開けを頼むと、いくらかかりますか？",
    a: "各社の公式掲載（2026年11月17日確認）では、カギ110番が11,000円〜（税込）、鍵の生活救急車が8,800円〜（標準価格・ハイセキュリティは29,700円〜）、鍵のレスキューが6,600円〜（税込、別に出張料4,400〜8,800円）です。カギの救急車 生駒市受付センターは一律の料金を掲載していません。いずれも最低額のため、作業前に総額をご確認ください。",
    link: { href: "/ryokin-index/", label: "各社の公式料金の一覧はこちら" },
  },
  {
    q: "JRの電車や駅で鍵を落とした場合は、どこに問い合わせればよいですか？",
    a: "JR西日本は、お忘れ物専用ダイヤル（0570-00-4146、9時〜19時・年中無休。06-6133-4146も利用可）と、チャットで問い合わせる「find chat」を案内しています。拾得物はシステムに登録して管理しており、登録に時間がかかるため、問い合わせの時点では見つからない場合もあるとしています（2026年11月17日確認）。",
  },
  {
    q: "近鉄の電車や駅で鍵を落とした場合は、どこに問い合わせればよいですか？",
    a: "近鉄は、お忘れ物専用ダイヤル（050-3536-3942、8:00〜21:00・年中無休）で近鉄全線の忘れ物を探すとしています。当日の忘れ物は見つかった駅で、翌日以降は近鉄忘れ物センターで受け取ります（2026年11月17日確認）。",
  },
  {
    q: "見つかった鍵を家族に受け取ってもらえますか？",
    a: "JR西日本・近鉄とも、代理人が受け取る場合は委任状が必要としています。近鉄は、委任者と代理人の公的証明書（委任者の分はコピー可）も必要としています。本人が受け取る場合も、運転免許証などの公的証明書を持参してください（2026年11月17日確認）。",
  },
];

export default function AreaYamatokoriyamaPage() {
  return (
    <CityAreaArticle
      path={PATH}
      city="大和郡山市"
      pref="奈良県"
      h1={H1}
      description={DESC}
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      tags={["大和郡山市", "奈良県", "鍵開け", "鍵交換", "鍵の落とし物", "業者比較"]}
      lead={[
        <>大和郡山市には、JR郡山駅と近鉄郡山駅があります。市の案内では、市役所までの所要時間を近鉄郡山駅から徒歩約5分、JR郡山駅から徒歩約15分としています（<Ext href={SRC.cityAccess}>大和郡山市「市の位置・アクセス」</Ext>、{CHECKED}）。JRと近鉄の両方を使う地域のため、電車や駅で鍵を落とした場合は、どちらの会社に問い合わせるかを先に確認しておくと手続きが進めやすくなります。</>,
        <>本記事では、大和郡山市（または全国）への対応を各社の公式サイトで2026年11月17日に確認できた鍵業者4社を、公式に掲載された料金・受付時間とあわせて比較しました。あわせて、JR西日本と近鉄の忘れ物の問い合わせ先と受け取り方をまとめています。</>,
      ]}
      agents={agents}
      themeId="otoshimono"
      themeTitle="JR郡山駅・近鉄郡山駅の電車や駅で鍵を落としたとき（各社の公式案内）"
      theme={
        <>
          <p className="leading-loose mb-4">
            鍵をなくしたときは、鍵業者に解錠を依頼する前に、落とした可能性のある場所に届いていないかを確認します。JR西日本と近鉄の公式案内を、同じ項目で並べると次のとおりです。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 text-left">項目</th>
                  <th className="border border-border px-3 py-2 text-left">JR西日本</th>
                  <th className="border border-border px-3 py-2 text-left">近鉄</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["電話", "お忘れ物専用ダイヤル 0570-00-4146（9時〜19時・年中無休）／06-6133-4146", "お忘れ物専用ダイヤル 050-3536-3942（8:00〜21:00・年中無休）"],
                  ["電話以外", "チャットで問い合わせる「find chat」（電話が混み合う場合に案内）", "公式ページに記載なし"],
                  ["見つかるまで", "拾得物はシステムに登録して管理。登録に時間がかかるため、時間をあけて再度問い合わせるよう案内", "オペレーターが近鉄全線の忘れ物を探す"],
                  ["受け取り場所", "保管されている駅や忘れ物センター（交通費は自己負担）", "当日は見つかった駅、翌日以降は近鉄忘れ物センター（大阪は鶴橋駅 西改札口から徒歩3分）"],
                  ["本人確認", "運転免許証・マイナンバーカードなどの公的証明書。受領書に住所・氏名・電話番号を記入", "住所・氏名が確認できる公的証明書。所定の用紙に住所・氏名・電話番号を記入"],
                  ["代理人", "委任状が必要", "委任状と、委任者・代理人の公的証明書（委任者の分はコピー可）が必要"],
                ].map(([k, jr, kin], i) => (
                  <tr key={k} className={i % 2 === 1 ? "bg-[#F5F8FC]" : "bg-white"}>
                    <th className="border border-border px-3 py-2 whitespace-nowrap bg-[#EAF1F8] text-left font-bold">{k}</th>
                    <td className="border border-border px-3 py-2">{jr}</td>
                    <td className="border border-border px-3 py-2">{kin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-6 leading-relaxed">
            出典：<Ext href={SRC.jrWest}>JR西日本「お忘れ物をしたら」</Ext>、<Ext href={SRC.kintetsu}>近畿日本鉄道「お忘れ物のお問い合せ、引渡しについて」</Ext>（いずれも{CHECKED}）。当サイトが両社の案内を同じ項目に整理したものです。
          </p>
          <p className="leading-loose mb-4">
            JR西日本は、GPSなどで所在が分かっている場合でも個別の捜索はできず、乗務員への連絡も緊急時を除いて行わないとしています。問い合わせの際は、<Hl>落とした日時・場所、乗車区間と時刻、鍵の特徴（キーホルダーの色や形など）</Hl>を伝えられるようにしておくと照合が進めやすくなります。近鉄は、忘れ物センターから警察署へ移管された後は警察署での受け取りになるとしています。
          </p>
          <p className="leading-loose mb-4">
            住所が分かる物と一緒に家の鍵をなくした場合は、鍵が見つかったとしても、その間に第三者が手にしていた可能性を考えて、シリンダー交換を検討してください。警察への届け出は<Link href="/kagi-funshitsu/zenkoku/" className="text-primary underline">鍵の落とし物を警察で探す・遺失届を出す</Link>、交換の判断は<Link href="/kagi-funshitsu/" className="text-primary underline">鍵をなくしたときの対処</Link>にまとめています。
          </p>
        </>
      }
      faqs={faqs}
      summary={[
        <>大和郡山市への対応を公式に確認できた鍵業者は、カギ110番（鍵開け11,000円〜）、鍵の生活救急車（鍵開け8,800円〜・20:00〜7:59は時間外料金8,800円）、鍵のレスキュー（鍵開け6,600円〜＋出張料4,400〜8,800円）、カギの救急車 生駒市受付センター（料金は電話で見積もり・受付9:00〜18:00）の4社でした。</>,
        <>電車や駅で鍵を落とした可能性がある場合は、JR西日本（0570-00-4146）または近鉄（050-3536-3942）のお忘れ物専用ダイヤルで確認できます。受け取りの際は公的証明書による本人確認があり、代理人の場合は委任状が必要です。</>,
      ]}
      nearby={[
        { href: "/area/nara/", label: "奈良の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/ikoma/", label: "生駒市の鍵開け・鍵交換業者おすすめ4選" },
        { href: "/area/higashiosaka/", label: "東大阪市の鍵開け・鍵交換業者おすすめ4選" },
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
