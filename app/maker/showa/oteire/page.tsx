import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/maker/showa/oteire/";
const TITLE = "ミネベアショウワ（旧ユーシン・ショウワ）の錠前のお手入れ｜症状別の対処と長く使うための8つの注意";
const DESC =
  "ミネベアショウワ（旧ユーシン・ショウワ）は、鍵の抜き差しが重くなったら鉛筆の粉・黒鉛粉・パウダー系のシリンダー専用潤滑剤を使い、鍵穴には油を注さないよう案内しています。" +
  "ねじの緩み・扉の歪み・保護シートなど症状別の対処を公式（2026年11月4日確認）で整理しました。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = "https://minebeashowa.co.jp/support/care/";
const CHECKED = "2026年11月4日確認";

const symptomRows: [string, string][] = [
  ["キーの抜き差し・回転が重い", "鉛筆（軟らかい芯）の粉、黒鉛粉、またはシリンダー専用潤滑剤（パウダー系）を使う。鉛筆はキーの切込み面をなぞってから抜き差しを数回。鍵穴に油は注さない"],
  ["錠・ストライク・ハンドル（ノブ）のねじが緩んだ", "ねじを締め直す"],
  ["扉が垂れ下がり・反り・歪みで枠に当たり、錠が動きにくい", "扉全体の修理が必要。建築物の管理責任者、施工業者または建具メーカーに速やかに依頼する"],
  ["フロントやストライクに保護シートが付いたまま", "必ずはがす。放置すると糊などの影響でさびや変色が起きることがある"],
  ["コピーしたキーで抜き差し・回転が悪い", "シリンダーに悪影響があるため、純正キーを使う"],
  ["錠が掛かったか不安", "キーやサムターンを最後まで回してデッドボルト（かんぬき）を出し、ハンドルやノブを操作して確認する"],
];

const faqs: Faq[] = [
  {
    q: "ミネベアショウワの鍵穴に潤滑スプレーを使ってもよいですか？",
    a: "ミネベアショウワは、鍵穴には絶対に油を注さないよう案内しています。注入直後は良くてもホコリを吸着し、かえって動きを悪くするためです。使うのは鉛筆（軟らかい芯）の粉、黒鉛粉、またはパウダー系のシリンダー専用潤滑剤です（" + CHECKED + "）。",
  },
  {
    q: "錠前の表面はどのくらいの頻度で掃除すればよいですか？",
    a: "清掃の目安は少なくとも月に1〜2回程度とされています。海岸地帯や交通量の多い道路沿いは、塩分や排気ガスで汚れが進みやすいため、こまめな手入れが勧められています。",
  },
  {
    q: "落ちにくい汚れにアルコール消毒液を使ってもよいですか？",
    a: "使わないよう案内されています。落ちにくい汚れは、中性洗剤を薄めた液をやわらかい布かスポンジで使い、洗剤の成分が残らないよう十分に拭き取ります。サンドペーパー、硬いブラシ、シンナーなどの有機溶剤、アルコール消毒液は使いません。中性洗剤の液がシリンダーや電気錠の電飾部品にかからないよう注意します。",
  },
  {
    q: "錠を自分で分解して直してもよいですか？",
    a: "ミネベアショウワは、錠を分解・改造しないよう案内しています。中の部品（バネなど）が飛び出してけがをしたり、正しく組み立て直せなくなったりするためです。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月4日"
      updatedIso="2026-11-04"
      crumbs={[
        { name: "錠メーカー別ガイド", href: "/maker/" },
        { name: "ミネベアショウワの錠前のお手入れ" },
      ]}
      answerLead="ミネベアショウワの鍵の抜き差しや回転が重くなったら、鉛筆（軟らかい芯）の粉・黒鉛粉・パウダー系のシリンダー専用潤滑剤を使います。鍵穴には油を注しません。"
      answerBody={
        <>
          <p>
            油は注入直後は良くても、ホコリを吸着してかえって動きを悪くするとミネベアショウワは説明しています。動きが悪い原因が鍵穴ではなく、ねじの緩みや扉の歪みにあることもあるため、下の症状別の表で確かめてください。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC}>ミネベアショウワ「錠前のお手入れについて」</Ext>（{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "症状別 ミネベアショウワが案内する対処",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">症状・状態</th>
                      <th className="border border-border px-3 py-2 text-left">公式の案内</th>
                    </tr>
                  </thead>
                  <tbody>
                    {symptomRows.map(([a, b]) => (
                      <tr key={a}>
                        <td className="border border-border px-3 py-2 font-bold text-text-primary">{a}</td>
                        <td className="border border-border px-3 py-2">{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC}>ミネベアショウワ「錠前のお手入れについて」</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "やってはいけないこと",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>鍵穴に油を注す（ホコリを吸着して動きが悪くなる）</li>
                <li>鍵穴に針金・マッチ棒などの異物を入れる（詰まるとキーを操作できなくなる）</li>
                <li>錠を分解・改造する（バネなどが飛び出してけがをする、組み立て直せなくなる）</li>
                <li>ゴシゴシ強くこする、サンドペーパー・硬いブラシ・シンナーなどの有機溶剤・アルコール消毒液を使う</li>
              </ul>
              <p>
                鍵穴に異物が詰まってキーが入らない場合は、無理に取り出そうとせず業者に相談してください。鍵穴の手入れ全般は<a href="/kagiana-abura/" className="text-primary underline">鍵穴に油を差してよいか</a>にもまとめています。
              </p>
            </>
          ),
        },
        {
          h2: "表面のお手入れの手順",
          body: (
            <>
              <ol className="list-decimal pl-5 space-y-1.5">
                <li>やわらかい布でから拭きする（強くこすらない）。目安は少なくとも月に1〜2回程度</li>
                <li>落ちにくい汚れは、中性洗剤を薄めた液をやわらかい布かスポンジで使う</li>
                <li>洗剤の成分が残らないよう十分に拭き取る。液がシリンダーや電気錠の電飾部品にかからないようにする</li>
              </ol>
              <p>
                長期間清掃しないと、表面に付いた汚れがしみや腐食の原因になります。海岸地帯や交通量の多い道路沿いは、塩分や排気ガスで汚れが進みやすい環境です。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC}>ミネベアショウワ「錠前のお手入れについて」</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "純正キーとメーカーのほかの案内",
          body: (
            <p>
              コピーしたキーで動きが悪い場合、ミネベアショウワは純正キーの使用を勧めています。純正キーの価格・納期・注文方法は<a href="/maker/showa/spare-key/" className="text-primary underline">ミネベアショウワのスペアキー</a>、錠の交換の目安は<a href="/maker/taiyou-nensu/" className="text-primary underline">錠の耐用年数と保守点検制度</a>にまとめています。
            </p>
          ),
        },
      ]}
      cta={{
        h2: "お手入れで直らないときは",
        text: "潤滑剤を使っても動きが悪い、キーが途中までしか入らないといった場合は、無理に回さず業者に相談してください。依頼前に料金と対応を比べることをおすすめします。",
        links: [
          { href: "/agents/", label: "鍵業者の比較一覧 →" },
          { href: "/kagi-nukenai/", label: "鍵が抜けないときの対処" },
        ],
      }}
      faqTitle="ミネベアショウワの錠前のお手入れのよくある質問"
      faqs={faqs}
      related={[
        { href: "/maker/showa/spare-key/", label: "ミネベアショウワのスペアキー", desc: "キー名別の価格と納期" },
        { href: "/maker/goal/oteire/", label: "GOALの錠前のお手入れ", desc: "CQ303シリンダー潤滑剤と鉛筆の粉" },
        { href: "/kagi-mawaranai/", label: "鍵が回らないときの対処", desc: "原因の切り分け" },
        { href: "/maker/", label: "錠メーカー別ガイド", desc: "各社の合鍵の窓口を一覧で比較" },
      ]}
    />
  );
}
