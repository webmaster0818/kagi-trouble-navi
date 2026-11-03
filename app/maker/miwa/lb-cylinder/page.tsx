import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/maker/miwa/lb-cylinder/";
const TITLE = "美和ロック（MIWA）のLBシリンダーとは｜鍵をなくしてもシリンダー交換なしで旧キーを無効にできる仕組み";
const DESC =
  "美和ロックのLBシリンダーは、賃貸住戸向けのチェンジキーシステム（リベロ・キーシステム）を持つ可変タンブラーシリンダーで、理論鍵違い数は約261億通り。入居者の入れ替えや鍵の紛失時に、シリンダーを交換せず以前のキーを無効にできます。" +
  "合鍵の注文方法も美和ロック公式で確認しました（2026年11月3日）。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  cyl: "https://www.miwa-lock.co.jp/tec/products/miwa_cylinder.html",
  dup: "https://www.miwa-lock.co.jp/tec/support/duplicatekey.html",
};

const faqs: Faq[] = [
  {
    q: "LBシリンダーの鍵をなくしたら、シリンダーごと交換が必要ですか？",
    a: "美和ロックは、LBシリンダーについて「入居者が変わった場合や、キーを紛失した場合でも、シリンダー交換をせず以前のキーを無効にすることが可能」と説明しています（美和ロック「シリンダーの種類」2026年11月3日確認）。" +
      "賃貸住宅の場合は、どの方法で対応するかを管理会社・大家に確認してください。",
  },
  {
    q: "LBシリンダーの鍵違い数はどれくらいですか？",
    a: "美和ロックは、LBシリンダーの理論鍵違い数を約261億通りとしています。",
  },
  {
    q: "LBキーの合鍵はMIWA Directで注文できますか？",
    a: "MIWA Directで注文できるのはWR・U9・UR・PR・PSの5種類で、LBは含まれていません。美和ロックは、セキュリティカードが必要なLB（-J）キーの合鍵は、手元の「合鍵/ネクストキーご注文用紙」に書かれた方法・注文先で注文するよう案内しています（美和ロック「合鍵を希望されるお客様へ」2026年11月3日確認）。",
  },
  {
    q: "LB-Jシリンダーとは何ですか？",
    a: "LBシリンダーのキーウェイ部分をすり鉢形状（蓄光部品）にしてキーを差し込みやすくし、大きな樹脂製キーヘッドで扱いやすくしたタイプです。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月3日"
      updatedIso="2026-11-03"
      crumbs={[
        { name: "錠メーカー別ガイド", href: "/maker/" },
        { name: "MIWAのLBシリンダー" },
      ]}
      answerLead="LBシリンダーは、賃貸住戸の管理方式に合わせたチェンジキーシステム（リベロ・キーシステム）を持つ美和ロックのシリンダーです。鍵をなくした場合でも、シリンダーを交換せずに以前のキーを無効にできると美和ロックは説明しています。"
      answerBody={
        <>
          <p>
            キーはリバーシブルで、理論鍵違い数は約261億通りです。合鍵はMIWA Directの注文対象（WR・U9・UR・PR・PS）に含まれず、セキュリティカード付きのLB（-J）キーは「合鍵/ネクストキーご注文用紙」で注文します。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.cyl}>美和ロック「シリンダーの種類」</Ext>／<Ext href={SRC.dup}>美和ロック「合鍵を希望されるお客様へ」</Ext>（いずれも2026年11月3日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "LBシリンダーの仕組み（美和ロック公式の説明）",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>分類：可変タンブラーシリンダー・リバーシブルキー</li>
                <li>チェンジキーシステム：賃貸住戸の管理方式に合わせた「リベロ・キーシステム」</li>
                <li>理論鍵違い数：約261億通り</li>
                <li>入居者が変わった場合や、キーを紛失した場合でも、シリンダー交換をせず以前のキーを無効にできる</li>
                <li>キーはリバーシブルのため、挿入時にキーを持ち替える必要がない</li>
              </ul>
              <p>
                同じ「シリンダーの種類」ページでは、JNシリンダー（理論鍵違い数 約172億通り）にも、シリンダー交換なしに以前のキーを無効にし、新しいキーでのみ施解錠できる「JCシリンダー」が用意されていると記載されています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.cyl}>美和ロック「シリンダーの種類」</Ext>（2026年11月3日確認）
              </p>
            </>
          ),
        },
        {
          h2: "鍵をなくしたときの考え方",
          body: (
            <>
              <p>
                美和ロックの説明では、LBシリンダーは鍵を紛失した場合でも、シリンダーを交換せずに以前のキーを無効にできます。シリンダーの種類が分からない場合は、鍵と一緒に渡された書類や、建物の管理者に確認してください。
              </p>
              <p>
                賃貸住宅の場合は、業者を呼ぶ前に管理会社・大家に連絡してください。警察への遺失届の出し方は<a href="/kagi-funshitsu/" className="text-primary underline">鍵をなくしたときの対処</a>にまとめています。
              </p>
            </>
          ),
        },
        {
          h2: "合鍵の注文方法",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>MIWA Directの注文対象はWR・U9・UR・PR・PSの5種類で、LBは含まれない</li>
                <li>セキュリティカードが必要なLB（-J）キー：手元の「合鍵/ネクストキーご注文用紙」に書かれた方法・注文先で注文（用紙は美和ロックのサイトからもダウンロードできる）</li>
                <li>セキュリティカードの有無が分からない場合：美和ロックに問い合わせる</li>
              </ul>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.dup}>美和ロック「合鍵を希望されるお客様へ」</Ext>（2026年11月3日確認）
              </p>
            </>
          ),
        },
      ]}
      cta={{
        h2: "鍵をなくして家に入れないときは",
        text: "以前のキーを無効にできるシリンダーでも、締め出されてすぐに家に入りたい場合は解錠が必要です。賃貸は管理会社・大家に連絡し、業者に頼む場合は料金と対応を比べてから依頼してください。",
        links: [
          { href: "/agents/", label: "鍵業者の比較一覧 →" },
          { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処" },
        ],
      }}
      faqTitle="MIWAのLBシリンダーのよくある質問"
      faqs={faqs}
      related={[
        { href: "/maker/miwa/aikagi/", label: "美和ロック（MIWA）の合鍵", desc: "MIWA Directの5種類と注文できない鍵" },
        { href: "/maker/miwa/pr-cylinder/", label: "MIWAのPRシリンダー", desc: "2WAY構造と純正合鍵の注意" },
        { href: "/maker/miwa/haishi-cylinder/", label: "MIWAの廃止シリンダー", desc: "合鍵の注文期限と見分け方" },
        { href: "/kagi-funshitsu/zenkoku/", label: "警察の落とし物検索・遺失届", desc: "都道府県ごとの窓口" },
      ]}
    />
  );
}
