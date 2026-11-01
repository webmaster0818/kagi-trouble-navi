import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/maker/miwa/aikagi/";
const TITLE = "美和ロック（MIWA）の合鍵・純正キーの頼み方｜MIWA Directの5種類と価格、注文できない鍵";
const DESC =
  "美和ロック（MIWA）の純正合鍵は、公式オンラインショップ「MIWA Direct」でWR・U9・UR・PR・PSの5種類を注文できます（1,155円〜1,760円・税込・送料別）。鍵が手元にない、鍵番号が消えている、セキュリティ認証ID番号が分からない場合は注文できません。LB・JCは専用の注文用紙、それ以外はサービス代行店（SD店）へ。美和ロック公式（2026年11月1日確認）にもとづいてまとめました。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  dup: "https://www.miwa-lock.co.jp/tec/support/duplicatekey.html",
  input: "https://www.shop.miwa-lock.co.jp/ec/inputKeyNo",
  orderable: "https://www.shop.miwa-lock.co.jp/ec/orderableKey",
  prps: "https://www.miwa-lock.co.jp/info/?p=705",
  cyl: "https://www.miwa-lock.co.jp/tec/products/miwa_cylinder.html",
};

const faqs: Faq[] = [
  {
    q: "美和ロックの合鍵はどこで注文できますか？",
    a: "美和ロックは、公式オンラインショップ「MIWA Direct」での純正キーの注文を勧めています。MIWA Directで注文できるのはMIWA刻印のあるWR・U9・UR・PR・PSの5種類です。LBキーとJCキーは美和ロックへ専用の注文用紙を送り、それ以外の鍵はお近くの美和ロックサービス代行店（SD店）に注文します（2026年11月1日に美和ロック公式で確認）。",
  },
  {
    q: "MIWA Directの合鍵はいくらですか？",
    a: "MIWA Directの「鍵情報のご入力」ページの表示では、U9キー・URキーが1,155円、WRキーが1,650円、PRキー・PSキーが1,760円です（いずれも税込・送料別、2026年11月1日確認）。",
  },
  {
    q: "鍵をなくして手元に1本もない場合も注文できますか？",
    a: "MIWA Directでは注文できません。美和ロックは、注文できない鍵として「現在お手元に鍵がない場合」を挙げています。あわせて、鍵を紛失した場合はシリンダーを交換すること、特に住所が特定できるものと一緒に紛失した場合は早急な交換を勧めています。",
  },
  {
    q: "合鍵店で作った鍵から純正キーを注文できますか？",
    a: "できません。MIWA刻印がない鍵（複製キー）からは注文できないとされています。美和ロックは、PR・PSシリンダーは非常に精密な製品で、純正でない合鍵を使うとシリンダーの破損や製品寿命を大きく損ねるおそれがあるとして、合鍵はサービス代行店かMIWA Directで注文するよう求めています。",
  },
  {
    q: "鍵番号を人に見られたらどうすればよいですか？",
    a: "美和ロックは、セキュリティ認証IDシステム付きではない鍵の場合、鍵番号を他人に見られると番号だけで不正に複製されるおそれがあるとしています。過去に見られた可能性がある場合はシリンダー交換を勧めています。鍵だけを交換してセキュリティ認証IDシステムを付けるMIWA Direct限定のサービス「あんしん認証プラス」もあります。",
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
        { name: "美和ロック（MIWA）の合鍵" },
      ]}
      answerLead="美和ロックの純正合鍵は、MIWA刻印のあるWR・U9・UR・PR・PSなら公式通販「MIWA Direct」で注文できます。鍵番号の入力と、スマートフォンでの鍵の撮影が必要です。"
      answerBody={
        <>
          <p>
            鍵が手元にない、鍵番号（キーナンバー）がない・消えている、セキュリティ認証ID番号が分からない、マスターキーといった場合はMIWA Directでは注文できません。LB・JCは専用の注文用紙、それ以外の鍵はサービス代行店（SD店）が窓口です。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.dup}>美和ロック「合鍵を希望されるお客様へ」</Ext>／<Ext href={SRC.orderable}>MIWA Direct「ご注文可能なキー」</Ext>／<Ext href={SRC.input}>MIWA Direct「鍵情報のご入力」</Ext>（いずれも2026年11月1日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "MIWA Directで注文できる5種類と価格",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">キー</th>
                      <th className="border border-border px-3 py-2 text-left">価格（税込・送料別）</th>
                      <th className="border border-border px-3 py-2 text-left">シリンダーの特徴（美和ロック公式の説明）</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["U9キー", "1,155円", "ロッキングバー方式と回転式タンブラーのロータリーシリンダー。理論鍵違い数は約1億5千万通り"],
                      ["URキー", "1,155円", "美和ロック「シリンダーの種類」ページには掲載なし"],
                      ["WRキー", "1,650円", "リッジ形状とリバーシブルキーのダブルサイドバー式ディスクシリンダー。理論鍵違い数は約1,525億通り。加工に高い精度が必要なため美和ロック以外でキーの複製はできない"],
                      ["PRキー", "1,760円", "メインタンブラーとサイドタンブラーの2WAY構造のロータリーシリンダー。リバーシブルキー"],
                      ["PSキー", "1,760円", "美和ロック「シリンダーの種類」ページには掲載なし"],
                    ].map(([a, b, c]) => (
                      <tr key={a}>
                        <td className="border border-border px-3 py-2 whitespace-nowrap font-bold text-text-primary">{a}</td>
                        <td className="border border-border px-3 py-2 whitespace-nowrap">{b}</td>
                        <td className="border border-border px-3 py-2">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                出典：価格は<Ext href={SRC.input}>MIWA Direct「鍵情報のご入力」</Ext>、特徴は<Ext href={SRC.cyl}>美和ロック「シリンダーの種類」</Ext>（いずれも2026年11月1日確認）
              </p>
            </>
          ),
        },
        {
          h2: "鍵番号（キーナンバー）の入力のしかた",
          body: (
            <>
              <p>
                MIWA Directでの注文には鍵番号が必要です。鍵番号は純正キーの裏面に記載された数字・アルファベット・記号で、2行で記載されている場合は2行すべてを続けて入力します。使われる文字は、数字、大文字アルファベット（I〈アイ〉とO〈オー〉を除く）、記号（＋ − ＝ ＄ ％ ＆ ＊ ＃ ？ ／）です。
              </p>
              <p>
                注文時に鍵の撮影が必要なため、スマートフォンから注文するよう案内されています。セキュリティ認証IDシステム付きの合鍵は撮影が不要で、パソコンからも注文できます。
              </p>
            </>
          ),
        },
        {
          h2: "MIWA Directで注文できない鍵と、その場合の窓口",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>「MIWA」の刻印がない鍵（複製キー）</li>
                <li>鍵番号がない、または消えている鍵</li>
                <li>現在手元に鍵がない場合</li>
                <li>セキュリティ認証IDシステム付きの鍵で、セキュリティ認証ID番号が分からない場合</li>
                <li>マスターキー（複製には念書の提出など厳重な本人確認が必要）</li>
              </ul>
              <p>
                <strong>LBキー・JCキー</strong>は、美和ロックへ専用の「合鍵/ネクストキーご注文用紙」を送って注文します。緑色のセキュリティカードがある場合とない場合で用紙が分かれています。セキュリティカード付きのJN（チェンジキーシステム機能なし）は「合鍵ご注文用紙」です。
              </p>
              <p>
                <strong>上記以外の鍵</strong>は、美和ロックサービス代行店（SD店）で注文します。SD店ではMIWA Directで受けられない鍵も注文できますが、一部の鍵は納期が3〜4週間程度かかる場合があり、金額・納期は電話で必ず確認するよう案内されています。合鍵の注文を受けていないSD店もあります。
              </p>
            </>
          ),
        },
        {
          h2: "セキュリティ認証IDシステムとあんしん認証プラス",
          body: (
            <>
              <p>
                セキュリティ認証IDシステムは、セキュリティカードに記載されたセキュリティ認証ID番号と、鍵に刻印された鍵番号の2つがそろわないと複製の注文ができない仕組みです。鍵番号だけでの不正な複製を防げます。セキュリティカードは、鍵の引き渡し時にオーナーに渡されるものです。
              </p>
              <p>
                「あんしん認証プラス」は、使っている鍵だけを交換してセキュリティ認証IDシステムを付けるMIWA Direct限定のサービスです。導入後の合鍵の作製にはセキュリティカードのID番号が必要になります。料金は、1つの鍵番号のキーを複数本注文しても一律と案内されています。
              </p>
            </>
          ),
        },
        {
          h2: "PR・PSは純正以外の合鍵に注意",
          body: (
            <p>
              美和ロックは2020年12月23日のお知らせ「PR・PSシリンダーの合鍵複製に関するお願い」で、PR・PSシリンダーは非常に精密な製品で、純正でない合鍵を使うとシリンダーの破損や製品寿命を大きく損ねるおそれがあるとし、合鍵はサービス代行店かMIWA Directで注文するよう求めています（<Ext href={SRC.prps}>美和ロック公式のお知らせ</Ext>、2026年11月1日確認）。抜き差しが重い・引っかかるといった症状が出ている場合は、複製キーを使っていないかも確認してください。
            </p>
          ),
        },
      ]}
      cta={{
        h2: "鍵をなくした・番号を見られたときはシリンダー交換を",
        text: "手元に鍵がない場合、MIWA Directでは合鍵を注文できません。美和ロックは、鍵の紛失時や鍵番号を見られた可能性がある場合はシリンダー交換を勧めています。交換を業者に頼む場合は、料金と対応エリアを比べてから依頼してください。",
        links: [
          { href: "/agents/", label: "鍵業者を比較する →" },
          { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
        ],
      }}
      faqTitle="美和ロックの合鍵のよくある質問"
      faqs={faqs}
      related={[
        { href: "/maker/", label: "錠メーカー別ガイド", desc: "5社の合鍵の窓口・価格を一覧で比較" },
        { href: "/key-number-aikagi/", label: "キーナンバーで合鍵は作れる？", desc: "刻印の場所と注文できない場合" },
        { href: "/maker/goal/aikagi/", label: "GOAL（ゴール）のスペアキー注文", desc: "鍵番号でわかるキーチェンジ機能" },
        { href: "/maker/showa/spare-key/", label: "ミネベアショウワのスペアキー", desc: "キー名ごとの価格と納期" },
        { href: "/junsei-key-saihakkou/", label: "メーカー純正キーの再発行", desc: "純正キー取り寄せの流れ" },
      ]}
    />
  );
}
