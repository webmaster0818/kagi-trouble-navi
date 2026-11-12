import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/lixil-kagi-koukan/";
const TITLE = "LIXIL（トステム）の玄関ドアの鍵交換｜鍵をなくしたときのシリンダー交換とスペアキーの注文";
const DESC =
  "LIXIL・TOSTEMの玄関ドアの鍵をなくしたときの対処を、LIXIL公式のサポートページで2026年11月12日に確認しました。" +
  "金属の鍵はシリンダーごとの交換が勧められ、取り付けた業者かLIXIL修理受付センターに依頼するか、LIXILストアで合うシリンダーを買って自分で交換します。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  keylost: "https://www.lixil.co.jp/support/door/keylost/",
  cylFaq: "https://faq.lixil.co.jp/--626cd6ce4625bb00235d5774",
  spare: "https://www.lixil.co.jp/support/door-sparekey/",
  akanai: "https://faq.lixil.co.jp/--68edfbd56f4c06dcabb7a3ee",
  card: "https://faq.lixil.co.jp/--626cd6cd0b6bad001df9a563",
  gate: "https://store.lixil.co.jp/exterior/exterior-parts/gate/sparekeyforthegate.html",
  repair: "https://www.lixil.co.jp/support/purpose/repair.htm",
};

const cases: [string, string][] = [
  ["金属の鍵（手動キー）をなくした", "防犯上、シリンダー（鍵穴）ごとの交換を推奨。取り付けた業者かLIXIL修理受付センターに依頼するか、ドアに合うシリンダーをLIXILストアで買い、同梱の手順書に沿って自分で交換する"],
  ["タグキー・カードキー・リモコンキーをなくした", "紛失したキーの登録を抹消するか、紛失したキー以外をすべて再登録すると無効にできる。シリンダーの交換は不要で、手動キーはそのまま使える"],
  ["鍵が開かず家に入れない", "地域ごとの鍵販売店の一覧から近くの店に相談する。LIXILではカギの解錠はできないとしている"],
];

const faqs: Faq[] = [
  {
    q: "トステム（TOSTEM）の玄関ドアも、LIXILに頼めますか？",
    a: "LIXILの「カギを紛失した時のサポート」は、LIXIL・TOSTEM製のキーの手順を案内しています。スペアキーはLIXIL・TOSTEM・新日軽（ページによってはTOEXも）の住宅用製品を注文できるとしています。新日軽製ドアのシリンダーはLIXILストアでは扱っていないとしています（2026年11月12日確認）。",
  },
  {
    q: "自分でシリンダーを交換するとき、何を確認しますか？",
    a: "LIXILは、ドアを開けたときの戸先部分のラベルでドアの商品名を確認し、LIXILストアの「錠（シリンダー）」ページで商品名の頭文字から探すよう案内しています。種類によってはドアの厚みの計測が必要です。該当商品がなければLIXILストアでは販売していないため、業者か修理受付センターに依頼します（2026年11月12日確認）。",
  },
  {
    q: "電気錠（カードキーやスマートフォンで開けるドア）のシリンダーもストアで買えますか？",
    a: "LIXILは、電気錠のシリンダーはLIXILストアでは販売しておらず、LIXIL修理受付センターに依頼するよう案内しています。ハウスメーカー仕様のドアはストアに扱いがない可能性があるため、施工したハウスメーカーに相談するとしています（2026年11月12日確認）。",
  },
  {
    q: "スペアキー（合鍵）はどれくらいで届きますか？",
    a: "LIXILのスペアキー購入ガイドは、受注後に製造するため2〜5週間ほどかかる（種類によって異なる）としています。防犯の観点から無料の会員登録が必要です（2026年11月12日確認）。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月12日"
      updatedIso="2026-11-12"
      crumbs={[{ name: "LIXIL（トステム）の玄関ドアの鍵交換" }]}
      answerLead="LIXIL（トステム）の玄関ドアの金属の鍵をなくしたときは、防犯上、シリンダー（鍵穴）ごとの交換が勧められています。依頼先は、ドアを取り付けた業者かLIXIL修理受付センターです。自分で替える場合は、ドアの商品名からLIXILストアで合うシリンダーを特定して購入します。"
      answerBody={
        <>
          <p>
            カードキー・タグキー・リモコンキーをなくした場合は、シリンダーの交換は不要です。紛失したキーの登録を抹消するか、残っているキーをすべて再登録すると、なくしたキーは使えなくなります。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.keylost}>LIXIL「玄関ドア・引戸のカギやカギ関連の部品を紛失した時のサポート」</Ext>（2026年11月12日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "なくした鍵の種類で、やることが変わる",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">状況</th>
                      <th className="border border-border px-3 py-2 text-left">LIXILの案内</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cases.map(([k, d]) => (
                      <tr key={k}>
                        <td className="border border-border px-3 py-2 font-medium">{k}</td>
                        <td className="border border-border px-3 py-2">{d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                電気錠のキーの再登録の手順は、FamiLock・タッチキー・CAZAS＋・CAZASなど製品ごとに分かれています。カードキーの仕組みは<a href="/genkan-cardkey/" className="text-primary underline">玄関のカードキー</a>で説明しています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.keylost}>LIXIL「カギやカギ関連の部品を紛失した時のサポート」</Ext>、<Ext href={SRC.card}>LIXIL Q&amp;A「玄関ドア・引戸の電気錠のカードキーやリモコンキーを紛失した」</Ext>、<Ext href={SRC.akanai}>LIXIL Q&amp;A「玄関ドア・引戸のカギが開かない場合の相談先」</Ext>（いずれも2026年11月12日確認）
              </p>
            </>
          ),
        },
        {
          h2: "シリンダーを自分で交換するときの確認",
          body: (
            <>
              <p>
                LIXILは、ドアの商品名を、ドアを開けたときの戸先部分のラベルで確認するよう案内しています。LIXILストアの「錠（シリンダー）」ページで商品名の頭文字から該当製品を探し、種類によってはドアの厚みを測ります。交換は同梱の交換手順書に従い、難しい場合は修理を依頼できます。
              </p>
              <p>
                次の場合はLIXILストアでは購入できないとしています。電気錠（スマートフォン・カードキー・リモコンキー）のシリンダー、ハウスメーカー仕様で扱いのないドア、新日軽製ドアのシリンダー、ハンドル内蔵の一部のS型ハンドル。採寸の一般的な注意は<a href="/cylinder-koukan-diy/" className="text-primary underline">シリンダー交換をDIYで行う方法と注意点</a>にまとめています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.cylFaq}>LIXIL Q&amp;A「玄関ドアのシリンダー（鍵穴）を特定・購入する方法」</Ext>、<Ext href={SRC.repair}>LIXIL「修理のサポート」</Ext>（いずれも2026年11月12日確認）
              </p>
            </>
          ),
        },
        {
          h2: "スペアキー（合鍵）と門扉の鍵",
          body: (
            <>
              <p>
                LIXILのスペアキー購入ガイドは、LIXIL・TOSTEM・新日軽の住宅用スペアキーを公式通販「LIXILストア」で扱うとしています。金属キーは、作りたい鍵を手元に用意し、玄関・勝手口の商品名か鍵の形状・サイズで絞り込んで、WEBフォームか注文用紙で注文します。防犯の観点から会員登録（無料）が必要で、受注後に製造するため2〜5週間ほどかかります。注文後のキャンセルは受け付けていません。
              </p>
              <p>
                門扉のスペアキーもLIXILストアで扱われており、TOEX（LIXIL）と新日軽（LIXIL）の見分け方のガイドが用意されています。商品によっては、キー番号によって製作できない番号があると明記されています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.spare}>LIXIL「スペアキー（合鍵）購入ガイド」</Ext>、<Ext href={SRC.gate}>LIXILストア「門扉用スペアキー」</Ext>（いずれも2026年11月12日確認）
              </p>
            </>
          ),
        },
      ]}
      faqTitle="LIXIL（トステム）の鍵交換のよくある質問"
      faqs={faqs}
      related={[
        { href: "/cylinder-koukan-diy/", label: "シリンダー交換をDIYで行う方法", desc: "規格確認・採寸の基礎" },
        { href: "/genkan-cardkey/", label: "玄関のカードキー", desc: "カードキーを紛失したときの無効化" },
        { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処", desc: "住まいの鍵の紛失で最初にすること" },
        { href: "/key-number-aikagi/", label: "鍵番号と合鍵の注文", desc: "刻印の見方とメーカーへの注文" },
        { href: "/cylinder-jou-shikumi/", label: "シリンダー錠の仕組み", desc: "シリンダー・ラッチ・デッドボルトの役割" },
      ]}
    />
  );
}
