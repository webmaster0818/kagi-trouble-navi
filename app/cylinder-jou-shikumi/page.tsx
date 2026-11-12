import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/cylinder-jou-shikumi/";
const TITLE = "シリンダー錠の仕組み｜シリンダー・ラッチボルト・デッドボルト・ストライクの役割と名称";
const DESC =
  "シリンダー錠は、鍵を差し込んで回すシリンダーと、ドアの中の錠ケース、枠側のストライク（受座）でできています。" +
  "各部の名前と役割を、美和ロックの「錠と防犯の用語集」で2026年11月12日に確認しました。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const G = "https://www.miwa-lock.co.jp/tec/support/glossary/lock/";
const SRC = {
  cylinder: `${G}1.html`,
  thumb: `${G}2.html`,
  caseBox: `${G}3.html`,
  latch: `${G}5.html`,
  front: `${G}6.html`,
  dead: `${G}7.html`,
  strike: `${G}9.html`,
  backset: `${G}11.html`,
};

const parts: [string, string][] = [
  ["シリンダー", "鍵を差し込んで錠前を操作する部分。専用の鍵以外では回らない仕組みになっている"],
  ["サムターン", "ドアの室内側に付いている、施錠・解錠に使う金具。ドアを閉めてツマミを回すと、デッドボルトが錠本体から出てストライクにかかる"],
  ["ケース（錠箱）", "錠前の機構を収めた箱。ドアの内部に埋め込む彫込型と、ドアの内側に出る面付型がある"],
  ["ラッチボルト（仮締）", "風などでドアが開かないよう、枠に引っかけて留める部品。先端が斜めで、スプリングの力で常に錠の前面から出ている"],
  ["デッドボルト（本締）", "かんぬきの一種。シリンダーやサムターンの回転に連動して錠ケースから突き出る。引き違い戸の「鎌」もデッドボルトの一種"],
  ["ストライク（受座）", "ケースから出てくるラッチボルト・デッドボルトを、戸の枠側で受ける金具"],
  ["フロント（面座）", "錠のケース先端にある板。デッドボルトとラッチボルトのガイドで、ケースを固定するねじ穴がある。メーカー名や型式記号が刻まれている"],
  ["バックセット", "フロント面（ドアの先端）から、ノブ（レバーハンドル）またはシリンダーの中心までの長さ"],
];

const faqs: Faq[] = [
  {
    q: "鍵を回すと、ドアの中では何が動いていますか？",
    a: "美和ロックの用語集では、デッドボルト（本締）はシリンダーやサムターンの回転に連動して錠ケースから突き出る部品で、枠側のストライク（受座）で受けると説明されています。ドアを閉めたときに留まるのは、スプリングで常に出ているラッチボルト（仮締）です（2026年11月12日確認）。",
  },
  {
    q: "交換用のシリンダーを選ぶとき、どこを見ればいいですか？",
    a: "美和ロックの用語集は、フロント（面座）にはメーカー名や型式記号が刻まれており、交換時や故障時に確認する箇所だとしています。バックセット（ドアの先端からシリンダーの中心までの長さ）も錠を選ぶときの寸法です（2026年11月12日確認）。",
  },
  {
    q: "面付型の錠は、彫込型より防犯性が高いのですか？",
    a: "美和ロックの用語集は、面付型は錠がドア面より奥に位置するため破壊による侵入に対して強く、補助錠や集合住宅の玄関ドアに多く採用されているとしています。シリンダーについては、侵入犯罪で狙われやすいため防犯性の高いCP認定錠のシリンダーへの交換を勧めています（2026年11月12日確認）。",
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
      crumbs={[{ name: "シリンダー錠の仕組み" }]}
      answerLead="シリンダー錠は、鍵を差し込んで回す「シリンダー」、ドアの中で機構を収める「ケース（錠箱）」、枠側でボルトを受ける「ストライク（受座）」でできています。鍵やサムターンを回すとデッドボルト（本締）がケースから出てストライクにかかり、施錠されます。"
      answerBody={
        <>
          <p>
            シリンダーは専用の鍵以外では回らない仕組みになっている部分です。美和ロックは、シリンダーは侵入犯罪で狙われやすいため、防犯性の高いCP認定錠のシリンダーへの交換を勧めています。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.cylinder}>美和ロック「錠と防犯の用語集」シリンダー</Ext>、<Ext href={SRC.dead}>同 デッドボルト（本締）</Ext>、<Ext href={SRC.strike}>同 ストライク（受座）</Ext>（いずれも2026年11月12日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "各部の名前と役割",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">名称</th>
                      <th className="border border-border px-3 py-2 text-left">美和ロックの用語集での説明</th>
                    </tr>
                  </thead>
                  <tbody>
                    {parts.map(([k, d]) => (
                      <tr key={k}>
                        <td className="border border-border px-3 py-2 font-medium whitespace-nowrap">{k}</td>
                        <td className="border border-border px-3 py-2">{d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                出典：美和ロック「錠と防犯の用語集」<Ext href={SRC.cylinder}>シリンダー</Ext>・<Ext href={SRC.thumb}>サムターン</Ext>・<Ext href={SRC.caseBox}>ケース（錠箱）</Ext>・<Ext href={SRC.latch}>ラッチボルト</Ext>・<Ext href={SRC.dead}>デッドボルト</Ext>・<Ext href={SRC.strike}>ストライク</Ext>・<Ext href={SRC.front}>フロント</Ext>・<Ext href={SRC.backset}>バックセット</Ext>（いずれも2026年11月12日確認）
              </p>
            </>
          ),
        },
        {
          h2: "交換や修理のときに確かめる箇所",
          body: (
            <>
              <p>
                フロント（面座）にはメーカー名や型式記号が刻まれており、美和ロックは交換時や故障時に確認する箇所だとしています。バックセットは、ドアの先端からノブ（レバーハンドル）またはシリンダーの中心までの長さです。採寸と交換の流れは<a href="/cylinder-koukan-diy/" className="text-primary underline">シリンダー交換をDIYで行う方法と注意点</a>、錠の系統の見分け方は<a href="/joumae-type-zukan/" className="text-primary underline">錠前タイプ図鑑</a>にまとめています。
              </p>
              <p>
                ドアが閉まりきらない・ラッチが引っかからないなど、鍵ではなくラッチ側の不調は<a href="/doorknob-koukan/" className="text-primary underline">ドアノブ・ラッチ交換の基礎知識</a>を参照してください。室内側のサムターンを回されにくくする対策は<a href="/thumb-turn-taisaku/" className="text-primary underline">サムターン回し対策</a>で説明しています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.front}>美和ロック「錠と防犯の用語集」フロント（面座）</Ext>、<Ext href={SRC.backset}>同 バックセット</Ext>、<Ext href={SRC.thumb}>同 サムターン</Ext>（いずれも2026年11月12日確認）
              </p>
            </>
          ),
        },
      ]}
      faqTitle="シリンダー錠の仕組みのよくある質問"
      faqs={faqs}
      related={[
        { href: "/cylinder-koukan-diy/", label: "シリンダー交換をDIYで行う方法", desc: "規格確認・採寸の基礎" },
        { href: "/joumae-type-zukan/", label: "錠前タイプ図鑑", desc: "フロント刻印と錠の系統の見分け方" },
        { href: "/disc-cylinder/", label: "ディスクシリンダーとは", desc: "旧型シリンダーと交換の考え方" },
        { href: "/cp-nintei-jou/", label: "CP認定錠", desc: "防犯性能の高い建物部品の目印" },
        { href: "/lixil-kagi-koukan/", label: "LIXIL（トステム）の鍵交換", desc: "鍵をなくしたときのシリンダー交換" },
      ]}
    />
  );
}
