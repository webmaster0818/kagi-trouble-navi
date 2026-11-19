import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/tumbler-jou/";
const TITLE = "タンブラー錠とは｜ピン・ディスク・回転式（ロータリー）の違いを、美和ロック・ウエストの公式資料と理論鍵違い数で整理";
const DESC =
  "タンブラーは、シリンダーの中で正しい鍵かどうかを判別する部品です。ピンタンブラー・ディスクタンブラー・回転式タンブラーの違いと、美和ロックの現行シリンダー7種のタンブラー方式・理論鍵違い数を、2026年11月20日に公式資料で確認しました。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const CHECKED = "2026年11月20日確認";

const SRC = {
  miwaCyl: "https://www.miwa-lock.co.jp/tec/products/miwa_cylinder.html",
  miwaAbol: "https://www.miwa-lock.co.jp/tec/support/abolition_cylinder.html",
  westFaq: "https://www.west-lock.co.jp/faq",
};

// 美和ロック「シリンダーの種類」の記載を当サイトで表にしたもの
const miwa: [string, string, string, string][] = [
  ["WR", "ダブルサイドバー式ディスクシリンダー", "約1,525億通り", "リバーシブルキー。当社以外でキーの複製はできないと記載"],
  ["U9", "ロータリーシリンダー（ロッキングバー方式＋回転式タンブラー）", "約1億5千万通り", "タンブラーは9列9枚・4段変化"],
  ["PR／PR-J", "2WAYロータリーシリンダー（メインタンブラー＋サイドタンブラー）", "記載なし", "キーとの接触面が異なる2種類のタンブラー。リバーシブルキー"],
  ["LB／LB-J", "可変タンブラーシリンダー", "約261億通り（LB）", "シリンダーを替えずに以前のキーを無効にできるチェンジキーシステム"],
  ["JN", "リバーシブルピンシリンダー（4方向のピンタンブラー）", "約172億通り", "以前のキーを無効にできるJCシリンダーも用意"],
];

const faqs: Faq[] = [
  {
    q: "タンブラー錠とは何ですか？",
    a: "シリンダーの内部に、正しい鍵が差し込まれたときだけ回転を許す部品（タンブラー）が並んだ錠のことです。タンブラーの形がピン（棒状）か、ディスク（板状）か、回転する部品かによって、ピンシリンダー・ディスクシリンダー・ロータリーシリンダーなどと呼び分けられます。美和ロックの「シリンダーの種類」では、ピンタンブラー・回転式タンブラー・可変タンブラーなどの語が使われています（" + CHECKED + "）。",
  },
  {
    q: "ピンシリンダーとディンプルシリンダーの違いは何ですか？",
    a: "ウエストのよくあるご質問は、ピンシリンダーを鍵穴上部にピンが配置されたシンプルな構造で鍵にギザギザの鍵山がつくもの、ディンプルシリンダーを内部のピンが水平方向に配置され鍵の側面に丸い窪み（ディンプル）があるものと説明し、ディンプルシリンダーは構造がより複雑で不正解錠に強いとしています（" + CHECKED + "）。",
  },
  {
    q: "古いディスクシリンダーは交換したほうがよいですか？",
    a: "美和ロックは、ディスクシリンダーなど廃止となったシリンダーを使っている場合、現行のシリンダーへの取り替えを案内しています。後継品として、鍵違いが多いU9・WR・PR・LB・JNシリンダーが挙げられています（" + CHECKED + "）。",
  },
  {
    q: "「理論鍵違い数」が多いほど安全ですか？",
    a: "理論鍵違い数は、設計上つくれる鍵の違いの数です。数が多いほど同じ鍵ができにくくなりますが、防犯性はこれだけでは決まりません。破壊やこじ開けへの強さは、CP認定などの性能表示もあわせて確認してください。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月20日"
      updatedIso="2026-11-20"
      crumbs={[{ name: "タンブラー錠とは" }]}
      answerLead="タンブラー錠は、シリンダーの中に並んだ「タンブラー」という部品で、差し込まれた鍵が正しいかどうかを判別する錠です。タンブラーの形によって、ピンタンブラー（ピンシリンダー）、ディスクタンブラー（ディスクシリンダー）、回転式タンブラー（ロータリーシリンダー）などに分かれます。"
      answerBody={
        <>
          <p>
            現在の住宅用の鍵（シリンダー錠）の多くはタンブラー錠の一種で、「タンブラー錠」という名前の特別な錠があるわけではありません。違いは、タンブラーの形・数・並び方です。手元の鍵がどの方式かは、鍵の形（ギザギザか、表面に丸い窪みがあるか）や、シリンダーのメーカー刻印で見当をつけられます。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.miwaCyl}>美和ロック「シリンダーの種類」</Ext>、<Ext href={SRC.westFaq}>ウエスト「よくあるご質問」</Ext>（いずれも{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "タンブラーの主な3つの方式",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>ピンタンブラー</strong>：棒状のピンが並ぶ方式。ウエストは、鍵穴上部にピンが配置された構造をピンシリンダー、ピンが水平方向に配置され鍵の側面に丸い窪みがあるものをディンプルシリンダーと説明しています。
                </li>
                <li>
                  <strong>ディスクタンブラー</strong>：板状のディスクが並ぶ方式。美和ロックの現行品では、WRシリンダーが「ダブルサイドバー式ディスクシリンダー」です。旧来のディスクシリンダーは廃止シリンダーとして交換が案内されています。
                </li>
                <li>
                  <strong>回転式タンブラー</strong>：鍵を差すと回転する部品を使う方式。美和ロックのU9シリンダーは、ロッキングバー方式と回転式タンブラーを採用したロータリーシリンダーと説明されています。
                </li>
              </ul>
              <p>
                ディンプルキーの構造と交換の考え方は<a href="/dimple-key/" className="text-primary underline">ディンプルキーとは</a>、鍵の見た目での見分け方は<a href="/kagi-shurui-zukan/" className="text-primary underline">鍵の種類図鑑</a>にまとめています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.westFaq}>ウエスト「よくあるご質問」ピンシリンダー,ディンプルシリンダーとは</Ext>、<Ext href={SRC.miwaCyl}>美和ロック「シリンダーの種類」</Ext>、<Ext href={SRC.miwaAbol}>同「廃止シリンダー/廃止製品一覧」</Ext>（いずれも{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "美和ロックの現行シリンダーで見る、タンブラー方式と理論鍵違い数",
          body: (
            <>
              <p>美和ロックの「シリンダーの種類」に掲載されている各シリンダーの説明から、タンブラーの方式と理論鍵違い数を当サイトで表にまとめました。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">シリンダー</th>
                      <th className="border border-border px-3 py-2 text-left">方式（公式の表記）</th>
                      <th className="border border-border px-3 py-2 text-left">理論鍵違い数</th>
                      <th className="border border-border px-3 py-2 text-left">その他の記載</th>
                    </tr>
                  </thead>
                  <tbody>
                    {miwa.map(([n, t, k, o]) => (
                      <tr key={n}>
                        <td className="border border-border px-3 py-2 font-medium whitespace-nowrap">{n}</td>
                        <td className="border border-border px-3 py-2">{t}</td>
                        <td className="border border-border px-3 py-2 whitespace-nowrap">{k}</td>
                        <td className="border border-border px-3 py-2">{o}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.miwaCyl}>美和ロック「シリンダーの種類」</Ext>（{CHECKED}）。PR・PR-J・LB-Jは、同ページに理論鍵違い数の記載がありません。PR-J・LB-Jは、PR・LBのキーウェイ部分をすり鉢形状にし、大きな樹脂製キーヘッドにした扱いやすいタイプと説明されています。
              </p>
              <p>
                同じメーカーでも、タンブラーの方式によって理論鍵違い数は約1億5千万通り（U9）から約1,525億通り（WR）まで差があります。LB・JNのように、鍵をなくしたときにシリンダーを替えずに以前の鍵を使えなくできる製品もあり、仕組みは<a href="/change-key-system/" className="text-primary underline">チェンジキーシステムとは</a>で説明しています。
              </p>
            </>
          ),
        },
        {
          h2: "合鍵を作るときの注意",
          body: (
            <p>
              ウエストのよくあるご質問は、ギザギザの山鍵は実物を持ち込めば街の鍵屋でも複製できるものの、寸法精度が純正より悪くなりシリンダーの寿命を縮めるおそれがあるとして、純正の合鍵を強く推奨しています。ディンプルキーは特殊な設備がないと複製できないとしています。メーカーごとの注文方法は<a href="/maker/" className="text-primary underline">錠メーカー別 合鍵・純正キーの頼み方</a>にまとめています（<Ext href={SRC.westFaq}>ウエスト「よくあるご質問」</Ext>、{CHECKED}）。
            </p>
          ),
        },
      ]}
      faqTitle="タンブラー錠のよくある質問"
      faqs={faqs}
      related={[
        { href: "/cylinder-jou-shikumi/", label: "シリンダー錠の仕組み", desc: "シリンダー・ラッチボルト・ストライクの役割" },
        { href: "/disc-cylinder/", label: "ディスクシリンダーとは", desc: "見分け方と後継品" },
        { href: "/dimple-key/", label: "ディンプルキーとは", desc: "防犯性の仕組みと交換の考え方" },
        { href: "/change-key-system/", label: "チェンジキーシステムとは", desc: "シリンダーを替えずに前の鍵を無効に" },
        { href: "/cp-nintei-jou/", label: "CP認定錠", desc: "防犯性能の高い建物部品の目印" },
      ]}
    />
  );
}
