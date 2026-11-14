import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/maker/goal/aikagi/";
const TITLE = "GOAL（ゴール）のスペアキー・フレッシュキーの注文方法｜鍵番号で分かるキーチェンジ機能と納期";
const DESC =
  "GOAL（ゴール）のスペアキーとフレッシュキーは、「GOALオンライン」でキーナンバーを入力して注文できます。受注生産・納期は約2週間（非接触タイプは約3〜4週間）、支払いは代金引換郵便のみ・送料手数料1,144円。鍵番号1〜2桁目の英字でキーチェンジ機能の有無の目安が分かる（GOAL公式 2026年11月1日確認）。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  select: "https://www.goal-lock.com/ec/shopping3/select.html",
  index: "https://www.goal-lock.com/ec/shopping3/ec/index/",
  faq: "https://www.goal-lock.com/ec/shopping3/faq.html",
  history: "https://www.goal-lock.com/company/history.html",
  reasons: "https://www.goal-lock.com/5reasons/index.html",
};

const faqs: Faq[] = [
  {
    q: "GOALの合鍵はどこで注文できますか？",
    a: "GOALは、ロゴの入った純正キーの製作を勧めており、公式の「GOALオンライン」でスペアキー（合鍵）とフレッシュキーを注文できます。注文方法はWEB注文と、注文書をダウンロードしてFAXまたは郵送する方法があります。シリンダーなどスペアキー以外の注文は、サービス代行店のゴールメンテナンスステーション（GMS）が窓口です（2026年11月1日にGOAL公式で確認）。",
  },
  {
    q: "キーナンバーが分からなくても注文できますか？",
    a: "できません。GOALは、使っていないタイプのキー（キーナンバーが分からないもの）は注文できないとし、メーカー純正キーの製作にはキーナンバーが必ず必要だと案内しています。",
  },
  {
    q: "届くまでどのくらいかかりますか？",
    a: "工場で製作するため、非接触タイプのキーは約3〜4週間、その他は約2週間ほどで届くと案内されています。着日・時間の指定はできず、納期の短縮も原則できません。盗難など緊急の事情がある場合はお問い合わせフォームから連絡するよう案内されています。",
  },
  {
    q: "支払い方法と送料は？",
    a: "GOALに直接注文した場合は日本郵便の代金引換郵便のみで、受け取り時に現金で支払います。キー製作の料金は商品により異なり、別途送料手数料1,144円（消費税込）がかかります。代金引換以外の支払いを希望する場合はGMSに相談します。",
  },
  {
    q: "IDタグやセキュリティIDカードをなくした場合は？",
    a: "GOALは、IDタグ（またはセキュリティIDカード）を紛失した場合はスペアキーを製作できないとしています。どうしても鍵を増やす必要がある場合は、新しいシリンダーとキーを製作・交換することになり、GMSが対応します。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月1日"
      updatedIso="2026-11-01"
      crumbs={[
        { name: "キーナンバーと合鍵作成", href: "/key-number-aikagi/" },
        { name: "GOAL（ゴール）のスペアキー" },
      ]}
      answerLead="GOALのスペアキーとフレッシュキーは、公式の「GOALオンライン」でキーナンバーを入力して注文します。受注生産で約2週間（非接触タイプは約3〜4週間）かかり、支払いは代金引換郵便のみです。"
      answerBody={
        <>
          <p>
            注文の流れは、キーの選択 → キーナンバー入力 → キーの詳細・注文情報入力 → 注文主情報入力・本人確認書類のアップロード → 注文内容確認 → 注文完了です。受注生産品のため、確定した注文は入力間違いなどお客様の都合によるキャンセル・返品・交換ができません。賃貸住宅に住んでいる場合は、注文してよいかを物件の管理者に必ず確認するよう案内されています。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.select}>GOALオンライン 注文方法の選択</Ext>／<Ext href={SRC.index}>GOALオンライン「スペアキー（合鍵）およびフレッシュキーご希望のお客様へ」</Ext>／<Ext href={SRC.faq}>GOALオンライン よくあるご質問</Ext>（いずれも2026年11月1日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "鍵番号の1〜2桁目でわかるキーチェンジ機能の有無",
          body: (
            <>
              <p>
                キーチェンジシステムは、鍵の紛失や入居者の入れ替わりのときに、錠前やシリンダーを交換せず、新しいキー（フレッシュキー）を操作することで、それまでのキーを使えなくする仕組みです。フレッシュキーをシリンダーに挿して左右に回りきるまで回すと、以前のキーが使えなくなります。この機能は、あらかじめシリンダーに搭載されている必要があります。
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">キーチェンジ機能</th>
                      <th className="border border-border px-3 py-2 text-left">代表的な例（GOAL公式FAQより）</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border px-3 py-2 whitespace-nowrap font-bold text-text-primary">なし</td>
                      <td className="border border-border px-3 py-2">
                        キーに刻み（カギ山）があるもの。ディンプルキーで、鍵番号の1桁目もしくは2桁目に「V」または「B」があるもの、1・2桁目が「DP」または「DR」のもの
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border px-3 py-2 whitespace-nowrap font-bold text-text-primary">あり</td>
                      <td className="border border-border px-3 py-2">ディンプルキーで、鍵番号の1桁目もしくは2桁目に「M」または「E」があるもの</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                GOALは、上の鍵番号に該当していてもキーチェンジシステムを使えない場合があるとし、利用できるかはお問い合わせフォームで確認するよう案内しています。キーチェンジの回数には建物やシリンダーの種類による制限があり、最後のキーを出荷する際には、次回はシリンダー交換が必要になる旨の案内が同封されます。
              </p>
            </>
          ),
        },
        {
          h2: "純正キーを勧める理由",
          body: (
            <p>
              GOALは、特にくぼみのあるディンプルタイプのキーは精密な寸法で製作しているため、寸法をまねて作った「複製キー」を使うと、抜き差しの違和感だけでなく、シリンダーの破損やキーが抜けなくなるといった事象にいたる場合があると説明しています。また、キーを持ち歩く際は刻印された番号が読み取られないよう注意し、第三者に貸さないよう呼びかけています。
            </p>
          ),
        },
        {
          h2: "注文できないケースと窓口",
          body: (
            <ul className="list-disc pl-5 space-y-1.5">
              <li>キーナンバーが分からないキー（使っていないタイプのキー）は注文不可</li>
              <li>注文画面で「管理会社様へお問い合せください」と表示されたキーは、建物の管理会社に問い合わせる</li>
              <li>注文書一覧にないタイプのキーは、刻印のナンバーとキーの写真を添えてお問い合わせフォームから注文方法を確認する</li>
              <li>キーに組み付けられたセンサー部分が他社製のものは受け付けていない（管理会社に問い合わせ）</li>
              <li>マスターキーは念書の提出など厳重な本人確認が必要で、GMSで受け付ける</li>
            </ul>
          ),
        },
        {
          h2: "GOALの代表的なディンプルキー",
          body: (
            <>
              <p>
                GOALの沿革によると、ディンプルキーのV18シリンダーは1997年に開発・販売され、翌1998年にV18シリンダーのキーチェンジシステム「V18KCH」が開発されています。GOALは、V18シリンダーの鍵違い数を120億、グランブイ（GV）シリンダーを1,000兆2,800億通りとしています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.history}>GOAL「沿革」</Ext>／<Ext href={SRC.reasons}>GOAL「5つの理由」</Ext>（2026年11月1日確認）
              </p>
            </>
          ),
        },
      ]}
      cta={{
        h2: "急いで家に入りたい・鍵を全部なくしたときは",
        text: "GOALの純正キーは届くまで約2週間かかり、キーナンバーが分からないと注文できません。すぐに解錠が必要な場合や、紛失でシリンダー交換を検討する場合は、業者の料金と対応を比べてから依頼してください。",
        links: [
          { href: "/agents/", label: "鍵業者を比較する →" },
          { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
        ],
      }}
      faqTitle="GOALのスペアキーのよくある質問"
      faqs={faqs}
      related={[
        { href: "/maker/", label: "錠メーカー別ガイド", desc: "5社の合鍵の窓口・価格を一覧で比較" },
        { href: "/key-number-aikagi/", label: "キーナンバーで合鍵は作れる？", desc: "刻印の場所と注文できない場合" },
        { href: "/maker/miwa/aikagi/", label: "美和ロック（MIWA）の合鍵", desc: "MIWA Directの5種類と価格" },
        { href: "/maker/showa/spare-key/", label: "ミネベアショウワのスペアキー", desc: "キー名ごとの価格と納期" },
        { href: "/dimple-key/", label: "ディンプルキーの基礎知識", desc: "仕組みと防犯性、交換の考え方" },
        { href: "/maker/goal/oteire/", label: "GOALの錠前のお手入れ", desc: "CQ303潤滑剤か鉛筆の粉、油は使わない" },
        { href: "/maker/goal/koukan/", label: "GOALの鍵交換", desc: "シリンダー交換の窓口GMSと紛失時の2つの方法" },
      ]}
    />
  );
}
