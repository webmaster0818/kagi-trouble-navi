import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/locker-kagi-funshitsu/";
const TITLE = "ロッカーの鍵をなくしたとき｜駅のコインロッカーと、職場・学校のロッカー別の手順";
const DESC =
  "ロッカーの鍵をなくしたときは、ロッカーの種類で連絡先が変わります。" +
  "駅のコインロッカーの使用約款（届け出・身分証明・所定書類）、事務用ロッカーのメーカーの案内（鍵番号で合鍵を注文）、警察への遺失届を2026年11月11日に公式情報で確認しました。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  tokyuPolicy: "https://www.tokyu.co.jp/railway/coin-locker/policy/",
  tokyuTop: "https://www.tokyu.co.jp/railway/coin-locker/",
  kiyama: "https://www.town.kiyama.lg.jp/kiji0034633/index.html",
  kiyamaPdf: "https://www.town.kiyama.lg.jp/kiji0034633/3_4633_19847_up_k766naja.pdf",
  kokuyo: "https://www.kokuyo.com/sites/default/files/assets/pdf/support/manual-furniture/lk_locker.pdf",
  npa: "https://www.npa.go.jp/bureau/soumu/ishitsubutsu/ishitsu-todokedekensaku.html",
};

const cases: [string, string, string][] = [
  [
    "駅などのコインロッカー",
    "ロッカーの管理会社（ロッカー扉の約款・駅の案内に記載の連絡先）",
    "身分を証明するものと、所定の書類（収容品の明細など）を求められる",
  ],
  [
    "職場・学校・施設の鍵付きロッカー",
    "ロッカーの管理者（総務・学校・施設の担当者）",
    "購入した販売店へ、鍵番号を確認して合鍵を注文する（コクヨの取扱説明書の案内）",
  ],
  [
    "鍵を外でなくした（場所に心当たりがない）",
    "警察（遺失届）",
    "都道府県警察によってはオンラインで遺失届を出せる",
  ],
];

const faqs: Faq[] = [
  {
    q: "駅のコインロッカーの鍵をなくしたら、すぐに荷物を出してもらえますか？",
    a: "すぐには出せないことがあります。東急電鉄の約款では、届け出のあと身分を証明するものの提示と所定の書類の提出で引き取りとし、出張解錠は当日対応できない場合があり、管理センターの営業時間外は翌日以降の対応、駅窓口では対応しないとしています。基山町のコインロッカー使用約款も、原則として即時の返却はできず数日間を要するとしています（2026年11月11日確認）。",
  },
  {
    q: "コインロッカーの鍵をなくすと費用はかかりますか？",
    a: "かかる場合があります。東急電鉄の約款は出張解錠の費用を、基山町の約款は鍵の交換費を定めています。金額はロッカーごとの約款に書かれているため、ロッカー扉の約款か管理会社の案内で確認してください（2026年11月11日確認）。",
  },
  {
    q: "会社のロッカーの鍵をなくしました。自分で合鍵を作ってよいですか？",
    a: "職場のロッカーは会社の備品のため、まず管理者に報告してください。コクヨのロッカーの取扱説明書は、鍵を紛失したときは鍵番号を確認のうえ、購入した販売店へ合鍵の作成を注文するよう案内しています。鍵番号は鍵穴の周辺に刻印されています（2026年11月11日確認）。",
  },
  {
    q: "どこでなくしたか分かりません。警察に届けるべきですか？",
    a: "遺失届を出してください。警察庁は、遺失したと思われる場所または住んでいる場所の都道府県警察に届け出るよう案内しています。オンラインで届け出た場合は受理まで時間がかかることがあり、急ぐ場合は最寄りの警察署や交番に直接届け出るよう案内しています（2026年11月11日確認）。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月11日"
      updatedIso="2026-11-11"
      crumbs={[{ name: "ロッカーの鍵をなくしたとき" }]}
      answerLead="ロッカーの鍵をなくしたときは、ロッカーの管理者に連絡します。駅のコインロッカーは約款に書かれた管理会社に届け出て、身分証明と所定の書類で荷物を引き取ります。職場や学校のロッカーは管理者に報告し、事務用ロッカーは鍵番号で販売店に合鍵を注文します。"
      answerBody={
        <>
          <p>
            コインロッカーの荷物は、管理会社が本人確認をしてから渡すと約款で定められています。職場や学校のロッカーは備品のため、合鍵の注文や錠の交換は管理者が判断します。どちらも、まず管理する側に連絡してください。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.tokyuPolicy}>東急電鉄「コインロッカー使用約款」</Ext>、<Ext href={SRC.kokuyo}>コクヨ「LKロッカー」取扱説明書（PDF）</Ext>（いずれも2026年11月11日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "ロッカーの種類別：連絡先と求められるもの",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">場面</th>
                      <th className="border border-border px-3 py-2 text-left">連絡先</th>
                      <th className="border border-border px-3 py-2 text-left">公式の案内</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cases.map(([s, to, note]) => (
                      <tr key={s}>
                        <td className="border border-border px-3 py-2 font-medium">{s}</td>
                        <td className="border border-border px-3 py-2">{to}</td>
                        <td className="border border-border px-3 py-2">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.tokyuPolicy}>東急電鉄「コインロッカー使用約款」</Ext>、<Ext href={SRC.kokuyo}>コクヨ「LKロッカー」取扱説明書（PDF）</Ext>、<Ext href={SRC.npa}>警察庁「落とし物の届出・検索」</Ext>（いずれも2026年11月11日確認）
              </p>
            </>
          ),
        },
        {
          h2: "駅のコインロッカー：約款に書かれた手順",
          body: (
            <>
              <p>
                東急電鉄のコインロッカー使用約款は、ロッカー鍵や利用明細書（暗証番号・QRコード）などをなくした場合、直ちに指定の連絡先に届け出るよう定めています。荷物は、身分を証明するものの提示と所定の書類の提出のうえで引き取ります。出張解錠は当日対応できない場合があり、コインロッカー管理センターの営業時間外は翌日以降の対応、駅窓口では対応しないとしています。防犯カメラ付きのロッカーでは、預け入れ時に撮影した顔写真を、鍵をなくしたときの本人確認に使います。
              </p>
              <p>
                基山町（佐賀県）がJR基山駅に設置したコインロッカーの使用約款は、鍵をなくした場合、防犯上の観点から所定の手続きが必要で、原則として即時の返却はできず数日間を要するとしています。引き取りでは身分証明書などを確認し、収容品の明細を提出して現品と一致したときに引き渡すと定めています。
              </p>
              <p>
                費用（出張解錠や鍵の交換）の扱いもロッカーごとの約款に書かれています。問い合わせの前に、ロッカーの番号と設置場所、預けた日時、収容品の内容を控えておくと手続きが進みます。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.tokyuPolicy}>東急電鉄「コインロッカー使用約款」</Ext>、<Ext href={SRC.tokyuTop}>東急電鉄「コインロッカー」</Ext>、<Ext href={SRC.kiyama}>基山町「JR基山駅にコインロッカーが設置されました！」</Ext>、<Ext href={SRC.kiyamaPdf}>基山町コインロッカー使用約款（PDF）</Ext>（いずれも2026年11月11日確認）
              </p>
            </>
          ),
        },
        {
          h2: "職場・学校のロッカー：管理者への報告と鍵番号",
          body: (
            <>
              <p>
                コクヨの「LKロッカー」の取扱説明書は、鍵を紛失したときは鍵番号を確認のうえ、購入した販売店へ合鍵の作成を注文するよう案内しています。鍵番号は鍵穴の周辺に刻印されています。また、万一の紛失に備えてスペアキーは施錠する本体の中に入れず、別の場所に保管するよう求めています。
              </p>
              <p>
                職場や学校のロッカーは備品のため、合鍵の注文や錠の交換は管理者が判断します。なくした鍵に部屋番号や社名が付いていた場合は、そのことも管理者に伝えてください。
              </p>
              <p className="text-xs text-text-muted">出典：<Ext href={SRC.kokuyo}>コクヨ「LKロッカー」取扱説明書（PDF）</Ext>（2026年11月11日確認）</p>
            </>
          ),
        },
        {
          h2: "警察への遺失届",
          body: (
            <>
              <p>
                警察庁は、遺失届を、遺失したと思われる場所または住んでいる場所の都道府県警察に出すよう案内しています。オンラインで届け出られない都道府県警察もあり、その場合は最寄りの警察署または交番に届け出ます。オンラインで受け付けたあと受理まで時間がかかることがあるため、急ぐ場合は警察署や交番に直接届け出てください。届けられた落とし物は、各都道府県警察の拾得物件の公表ページで検索できます。
              </p>
              <p>
                家の鍵も一緒になくした場合は、<a href="/kagi-funshitsu/" className="text-primary underline">鍵をなくしたときの対処法</a>で、管理会社への連絡や鍵の交換の判断までの手順を確認してください。
              </p>
              <p className="text-xs text-text-muted">出典：<Ext href={SRC.npa}>警察庁「落とし物の届出・検索」</Ext>（2026年11月11日確認）</p>
            </>
          ),
        },
      ]}
      faqTitle="ロッカーの鍵をなくしたときのよくある質問"
      faqs={faqs}
      related={[
        { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処法", desc: "遺失届・管理会社への連絡と交換の判断" },
        { href: "/key-number-aikagi/", label: "鍵番号と合鍵の注文", desc: "刻印の見方とメーカーへの注文" },
        { href: "/suitcase-kagi-funshitsu/", label: "スーツケースの鍵をなくしたとき", desc: "メーカーの窓口と確認すること" },
        { href: "/tenpo-office-kagi-kanri/", label: "店舗・オフィスの鍵管理", desc: "複数人で使う鍵の管理方法" },
        { href: "/key-box-kanri/", label: "キーボックスでの鍵管理", desc: "物理鍵の保管・共有の基礎知識" },
      ]}
    />
  );
}
