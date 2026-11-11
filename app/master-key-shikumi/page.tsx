import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/master-key-shikumi/";
const TITLE = "マスターキーの仕組み｜メーカーの定義と「逆マスター」、複製に念書が要る理由";
const DESC =
  "マスターキーは、複数の異なる錠前を1グループとし、そのグループ内の全ての錠前を施錠・解錠できるキーです。" +
  "マンションの共用部で使われる逆マスター、キーシステムの計画、複製に念書と本人確認が要る理由を2026年11月11日に美和ロック・ゴールの公式情報で確認しました。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  direct: "https://www.shop.miwa-lock.co.jp/ec/orderableKey",
  master: "https://www.miwa-lock.co.jp/tec/support/masterkey.html",
  keyplan: "https://www.miwa-lock.co.jp/tec/support/keyplan.html",
  keyplanPdf: "https://www.miwa-lock.co.jp/tec/support/keyplan_sheet.pdf",
  jc: "https://www.miwa-lock.co.jp/tec/support/pdf/JC_catalog.pdf",
  goalHotel: "https://www.goal-lock.com/5fields/hotel.html",
};

const systems: [string, string][] = [
  ["マスターキー（MK）", "複数の異なる錠前を1グループとし、そのグループ内の全ての錠前を施錠・解錠できるキー（MIWA Directの説明）"],
  ["逆マスター", "各住戸・客室の鍵（子鍵）で、共用部の錠を開けられるようにする構成。美和ロックのJCシリンダーのカタログは、共用部のシリンダーを「逆マスター／マルチされるシリンダー」と呼んでいる"],
  ["そのほかの項目", "美和ロックの「キーシステムプラン表」には、システムの欄にGMK・MK・逆MK・マルチ・同一キー・コンストラクションキーが並び、グループごとの鍵違い数や住戸玄関子鍵の本数を記入する"],
];

const faqs: Faq[] = [
  {
    q: "マスターキーの合鍵は、鍵屋やネットで注文できますか？",
    a: "美和ロックは、マスターキーの追加注文を最寄りの美和ロックサービス代行店で受け付け、建物の所有者・代理人など身元の明確な方に限って渡すとしています。依頼者は規定の念書に記入・捺印し、美和ロックが念書を確認したうえで納めます。公式オンラインショップ「MIWA Direct」ではマスターキーは注文できません（2026年11月11日確認）。",
  },
  {
    q: "なぜマスターキーの複製はそこまで厳しいのですか？",
    a: "美和ロックは、マスターキーは管理上便利な一方、手違いで悪意の第三者の手に渡ると、そのキーで自由に建物の中に入れてしまい、盗難や人身に関わる大きな事件に発展する危険性があると説明しています。そのため厳重なチェックの仕組みを取っているとしています（2026年11月11日確認）。",
  },
  {
    q: "マンションで自分の部屋の鍵を交換すると、共用玄関は開けられなくなりますか？",
    a: "物件のキーシステムによって変わります。美和ロックのJCシリンダーのカタログには、子鍵をキーチェンジしても、共用部の逆マスターされる側・マルチされる側のシリンダーはそのまま使用できると書かれています（2026年11月11日確認）。分譲・賃貸とも、住戸の鍵を替える前に管理組合や管理会社に確認してください。",
  },
  {
    q: "ホテルのカードキーで共用出入口が開くのも同じ仕組みですか？",
    a: "ゴールは、逆マスターカードリーダーで、客室用の非接触ICカードや磁気カードを共用出入口の共通鍵に設定できると案内しています。エレベーターシステムと連動すれば、客室フロアへのアクセス制限もできるとしています（2026年11月11日確認）。",
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
      crumbs={[{ name: "マスターキーの仕組み" }]}
      answerLead="マスターキーは、複数の異なる錠前を1グループとし、そのグループ内の全ての錠前を施錠・解錠できるキーです（美和ロックの説明）。マンションやビルでは、建物の工事の段階でキーシステムを計画し、どの鍵でどの錠を開けられるかを決めます。複製には念書の提出など厳重な本人確認が必要です。"
      answerBody={
        <>
          <p>
            美和ロックは、マスターキーの追加注文には規定の念書への記入・捺印を求め、建物の所有者・代理人など身元の明確な方に限って渡す仕組みにしています。注文は最寄りの美和ロックサービス代行店で受け付けます。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.direct}>美和ロック公式オンラインショップ「MIWA Direct」ご注文可能なキー</Ext>、<Ext href={SRC.master}>美和ロック「マスターキーをご注文されるお客様へ」</Ext>（いずれも2026年11月11日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "キーシステムの用語：マスターキーと逆マスター",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">用語</th>
                      <th className="border border-border px-3 py-2 text-left">メーカー資料での説明・使われ方</th>
                    </tr>
                  </thead>
                  <tbody>
                    {systems.map(([k, d]) => (
                      <tr key={k}>
                        <td className="border border-border px-3 py-2 font-medium whitespace-nowrap">{k}</td>
                        <td className="border border-border px-3 py-2">{d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                美和ロックは、キーシステムプランの打ち合わせ用に入力シート（エクセル形式・PDF形式）を公開しています。どの錠をどの鍵で開けられるようにするかは、このような計画の段階で建物ごとに決まります。自分の建物の構成は、管理会社や管理組合が持つ資料で確かめてください。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.direct}>MIWA Direct「ご注文可能なキー」</Ext>、<Ext href={SRC.jc}>美和ロック「JCシリンダー」カタログ（PDF）</Ext>、<Ext href={SRC.keyplan}>美和ロック「キーシステムプラン入力シートのダウンロード」</Ext>、<Ext href={SRC.keyplanPdf}>キーシステムプラン表（PDF）</Ext>（いずれも2026年11月11日確認）
              </p>
            </>
          ),
        },
        {
          h2: "マンションとホテルでの使われ方",
          body: (
            <>
              <p>
                美和ロックのJCシリンダーのカタログは、JCシリンダーを採用した物件の共用部のシリンダー（逆マスター／マルチされるシリンダー）はすべてJNシリンダーになると説明しています。セキュリティ認証IDシステムを設定した場合は、逆マスター／マルチされる側のJNシリンダーも認証ID付きになります。また、子鍵をキーチェンジしても、共用部の逆マスターされる側／マルチされる側のシリンダーはそのまま使用できるとしています。
              </p>
              <p>
                ゴールは、ホテル向けの逆マスターカードリーダーで、客室用の非接触ICカードや磁気カードを共用出入口の共通鍵に設定できると案内しています。電気錠と組み合わせる仕組みは<a href="/denkijou-shikumi/" className="text-primary underline">電気錠の仕組み</a>で説明しています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.jc}>美和ロック「JCシリンダー」カタログ（PDF）</Ext>、<Ext href={SRC.goalHotel}>ゴール「ホテル」</Ext>（いずれも2026年11月11日確認）
              </p>
            </>
          ),
        },
        {
          h2: "マスターキーの複製と管理",
          body: (
            <>
              <p>
                美和ロックは、マスターキーが悪意の第三者の手に渡ると、そのキーで自由に建物の中に入れてしまい、盗難・人身殺傷などの大きな事件に発展する危険性があるとして、安易な事務処理でマスターキーを受け渡すべきではないと説明しています。追加注文には念書を求め、LBシリンダー用のマスターキー・ニュートラルキー・リセットキー・セキュリティカードには別の念書を用意しています。
              </p>
              <p>
                店舗や事務所で、複数の人に鍵を持たせる運用は<a href="/tenpo-office-kagi-kanri/" className="text-primary underline">店舗・オフィスの鍵管理</a>、分譲マンションの住戸の鍵を替えるときの注意は<a href="/bunjo-mansion-kagi-koukan/" className="text-primary underline">分譲マンションの鍵交換</a>を参照してください。
              </p>
              <p className="text-xs text-text-muted">出典：<Ext href={SRC.master}>美和ロック「マスターキーをご注文されるお客様へ」</Ext>（2026年11月11日確認）</p>
            </>
          ),
        },
      ]}
      faqTitle="マスターキーの仕組みのよくある質問"
      faqs={faqs}
      related={[
        { href: "/tenpo-office-kagi-kanri/", label: "店舗・オフィスの鍵管理", desc: "複数人で使う鍵の管理方法" },
        { href: "/bunjo-mansion-kagi-koukan/", label: "分譲マンションの鍵交換", desc: "管理組合への確認と共用部との関係" },
        { href: "/key-number-aikagi/", label: "鍵番号と合鍵の注文", desc: "刻印の見方とメーカーへの注文" },
        { href: "/denkijou-shikumi/", label: "電気錠の仕組み", desc: "停電時の動き方と耐用年数" },
        { href: "/disc-cylinder/", label: "ディスクシリンダーとは", desc: "合鍵・マスターキー複製の注文期限" },
      ]}
    />
  );
}
