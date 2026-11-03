import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/maker/miwa/pr-cylinder/";
const TITLE = "美和ロック（MIWA）のPRシリンダーとは｜2WAY構造・PR-Jとの違い・純正以外の合鍵に注意";
const DESC =
  "美和ロックのPRシリンダーは、メインタンブラーとサイドタンブラーの2WAY構造のロータリーシリンダーで、キーはリバーシブルです。PR-Jとの違い、合鍵はMIWA DirectかSD店で純正を注文すること、" +
  "セキュリティカード付きの場合の注文方法を美和ロック公式で確認しました（2026年11月3日）。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  cyl: "https://www.miwa-lock.co.jp/tec/products/miwa_cylinder.html",
  prps: "https://www.miwa-lock.co.jp/info/?p=705",
  dup: "https://www.miwa-lock.co.jp/tec/support/duplicatekey.html",
};

const faqs: Faq[] = [
  {
    q: "PRシリンダーとはどんな鍵ですか？",
    a: "美和ロックのロータリーシリンダーの一つで、キーとの接触面が異なるメインタンブラーとサイドタンブラーの2WAY構造です。美和ロックは「複製が非常に困難な安全性の高いキー」と説明しています。キーはリバーシブルで、差し込むときに持ち替える必要がありません（美和ロック「シリンダーの種類」2026年11月3日確認）。",
  },
  {
    q: "PRとPR-Jは何が違いますか？",
    a: "PR-Jは、PRシリンダーのキーウェイ部分をすり鉢形状（蓄光部品）にして鍵を差し込みやすくし、大きな樹脂製キーヘッドで扱いやすくしたタイプです。",
  },
  {
    q: "PRシリンダーの合鍵を街の合鍵店で作っても大丈夫ですか？",
    a: "美和ロックは2020年12月23日のお知らせで、PR・PSシリンダーは非常に精密な製品で、純正でない合鍵を使うとシリンダーの破損や製品寿命を大きく損ねるおそれがあるとしています。合鍵はサービス代行店か公式オンラインショップ「MIWA Direct」で注文するよう求めています。",
  },
  {
    q: "セキュリティカードが付いているPRキーの合鍵はどう注文しますか？",
    a: "美和ロック「合鍵を希望されるお客様へ」では、合鍵作製にセキュリティカードが必要なPR（-J）シリンダーの場合、手元の「合鍵/ネクストキーご注文用紙」に書かれた方法・注文先で注文するよう案内しています（2026年11月3日確認）。",
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
        { name: "MIWAのPRシリンダー" },
      ]}
      answerLead="PRシリンダーは、メインタンブラーとサイドタンブラーの2WAY構造を持つ美和ロックのロータリーシリンダーです。キーはリバーシブルで、どちら向きでも差し込めます。"
      answerBody={
        <>
          <p>
            美和ロックは、PR・PSシリンダーに純正でない合鍵を使うと、シリンダーの破損や製品寿命を大きく損ねるおそれがあるとしています。合鍵は公式通販「MIWA Direct」かサービス代行店（SD店）で純正キーを注文してください。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.cyl}>美和ロック「シリンダーの種類」</Ext>／<Ext href={SRC.prps}>美和ロック「PR・PSシリンダーの合鍵複製に関するお願い」</Ext>（いずれも2026年11月3日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "PRシリンダーの仕組み（美和ロック公式の説明）",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>分類：2WAYロータリーシリンダー・リバーシブルキー</li>
                <li>タンブラー：キーとの接触面が異なるメインタンブラーとサイドタンブラーの2WAY構造</li>
                <li>キー：リバーシブルのため、挿入時にキーを持ち替える必要がない</li>
                <li>美和ロックの説明：「複製が非常に困難な安全性の高いキー」</li>
              </ul>
              <p>
                同じ「シリンダーの種類」ページでは、U9シリンダーやWRシリンダーには理論鍵違い数（約1億5千万通り・約1,525億通り）が記載されていますが、PRシリンダーの鍵違い数は記載されていません（2026年11月3日確認）。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.cyl}>美和ロック「シリンダーの種類」</Ext>（2026年11月3日確認）
              </p>
            </>
          ),
        },
        {
          h2: "PR-Jシリンダーとの違い",
          body: (
            <p>
              PR-Jシリンダーは、PRシリンダーのキーウェイ（鍵穴）部分をすり鉢形状（蓄光部品）にしてキーを差し込みやすくし、大きな樹脂製キーヘッドで扱いやすくしたタイプです。合鍵の注文方法は、美和ロックの案内ではPRと同じ「PR（-J）シリンダー」として扱われています。
            </p>
          ),
        },
        {
          h2: "合鍵の注文方法",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>MIWA刻印と鍵番号があるPRキー：公式通販「MIWA Direct」で注文できる（スマートフォンでの鍵の撮影が必要）</li>
                <li>セキュリティカードが必要なPR（-J）キー：手元の「合鍵/ネクストキーご注文用紙」に書かれた方法・注文先で注文</li>
                <li>MIWA刻印がない複製キー、鍵番号がない・消えている鍵、手元に鍵がない場合：MIWA Directでは注文できない</li>
              </ul>
              <p>
                価格や鍵番号の入力方法は、<a href="/maker/miwa/aikagi/" className="text-primary underline">美和ロック（MIWA）の合鍵・純正キーの頼み方</a>にまとめています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.dup}>美和ロック「合鍵を希望されるお客様へ」</Ext>（2026年11月3日確認）
              </p>
            </>
          ),
        },
      ]}
      cta={{
        h2: "鍵をなくした・抜き差しが重いときは",
        text: "手元に鍵が1本もない場合、MIWA Directでは合鍵を注文できません。美和ロックは、鍵番号を過去に他人に見られた可能性がある場合はシリンダー交換を勧めています。抜き差しが重い場合は、純正でない合鍵を使っていないかも確認してください。",
        links: [
          { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処 →" },
          { href: "/kagiana-abura/", label: "鍵穴に油を差してよいか" },
        ],
      }}
      faqTitle="MIWAのPRシリンダーのよくある質問"
      faqs={faqs}
      related={[
        { href: "/maker/miwa/aikagi/", label: "美和ロック（MIWA）の合鍵", desc: "MIWA Directの5種類と注文できない鍵" },
        { href: "/maker/miwa/lb-cylinder/", label: "MIWAのLBシリンダー", desc: "紛失時に鍵だけ無効にできる仕組み" },
        { href: "/maker/miwa/haishi-cylinder/", label: "MIWAの廃止シリンダー", desc: "合鍵の注文期限と見分け方" },
        { href: "/maker/", label: "錠メーカー別ガイド", desc: "5社の合鍵の窓口を一覧で比較" },
      ]}
    />
  );
}
