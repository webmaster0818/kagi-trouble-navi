import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/crescent-koukan/";
const TITLE = "クレセント錠の交換｜右勝手・左勝手、ねじ穴のピッチ、カバーの有無で選ぶ交換部品";
const DESC =
  "引違い窓のクレセント錠は、右勝手・左勝手、本体を留めるねじ穴のピッチ（40・45ミリなど）、ねじカバーの有無、適用する窓の商品名で交換部品が決まります。" +
  "YKK AP 部品オンラインショップのクレセント110品と受け42品を2026年11月10日に集計しました。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  crescent: "https://parts.ykkap.co.jp/shop/c/c111112/",
  rightNoCover: "https://parts.ykkap.co.jp/shop/c/c11111211/",
  rightCover: "https://parts.ykkap.co.jp/shop/c/c11111212/",
  leftNoCover: "https://parts.ykkap.co.jp/shop/c/c11111111/",
  leftCover: "https://parts.ykkap.co.jp/shop/c/c11111112/",
  detail: "https://parts.ykkap.co.jp/shop/g/gYKHHW-HH5K13031/",
  hojo: "https://parts.ykkap.co.jp/shop/c/c111117/",
  keishicho: "https://www.keishicho.metro.tokyo.lg.jp/kurashi/higai/akisu/akisu.html",
};

// YKK AP Parts SHOP「引違い窓／錠（クレセント）」4区分を 2026-11-10 に全件取得して集計
const catRows: [string, string, string, string][] = [
  ["右勝手（カバーなし）", "19品", "7品", "1,815〜6,380円"],
  ["右勝手（カバーあり）", "38品", "27品", "2,035〜11,660円"],
  ["左勝手（カバーなし）", "19品", "7品", "1,815〜6,380円"],
  ["左勝手（カバーあり）", "34品", "23品", "1,925〜11,660円"],
];

const faqs: Faq[] = [
  {
    q: "クレセント錠の「ピッチ」とは何ですか？",
    a: "クレセント本体を取り付けるねじ穴どうしの間隔です。YKK APの部品詳細には「本体を取り付けるネジ穴のピッチが45mmです」のように記載されています。2026年11月10日に集計したクレセント110品のうち、品名にピッチが書かれたものは45ミリが71品、40ミリが20品、60ミリと70ミリが各2品でした。",
  },
  {
    q: "右勝手と左勝手を間違えるとどうなりますか？",
    a: "YKK APの部品通販では、クレセントが右勝手と左勝手で別のカテゴリに分かれ、品番も異なります。取り付ける窓の側に合わない部品は使えないため、購入前に今付いているクレセントの向きと、窓の商品名に合う勝手を確認してください。",
  },
  {
    q: "鍵付きのクレセントに交換できますか？",
    a: "適用する窓の商品名によっては、メーカーの部品として鍵付きのクレセントが掲載されています。YKK APの部品通販では、エピソードNEO向けの「鍵付クレセント（右勝手）」が税込7,700円で、梱包内容はクレセント、上下のねじカバー、カラー2個、クレセント受、鍵2本でした（2026年11月10日確認）。警視庁は窓の防犯対策として、クレセント錠はロック付きのものが有効としています。",
  },
  {
    q: "クレセントの受けも一緒に替える必要がありますか？",
    a: "部品によって異なります。YKK APの部品通販では、クレセント受けは三角形状28品・栓抜き形状14品が別に掲載され、販売中の39品は税込726〜3,300円でした。旧製品向けの「補修用クレセント」には、クレセント・クレセント受け・調整ライナー・取付ねじをまとめたセットもあります（2026年11月10日確認）。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月10日"
      updatedIso="2026-11-10"
      crumbs={[{ name: "クレセント錠の交換" }]}
      answerLead="クレセント錠の交換部品は、①右勝手か左勝手か、②本体のねじ穴のピッチ、③ねじカバーの有無、④適用する窓の商品名と製造時期の4点で決まります。サッシメーカーの部品通販では、この4点が品名と「適用商品情報」に書かれています。"
      answerBody={
        <>
          <p>
            YKK APの部品オンラインショップの「引違い窓／錠（クレセント）」を2026年11月10日に全件集計したところ、掲載は110品で、販売中の64品は税込1,815〜11,660円、残る46品は販売終了で代替品の購入が案内されていました。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.crescent}>YKK AP 部品オンラインショップ「窓（木造用サッシ）部品／引違い窓／錠（クレセント）」</Ext>（2026年11月10日確認・数は当サイトで集計）
          </p>
        </>
      }
      sections={[
        {
          h2: "交換前に確かめる4つの項目",
          body: (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-white rounded-xl border border-black/10 p-4">
                  <p className="font-bold text-text-primary mb-1">① 右勝手・左勝手</p>
                  <p>部品通販では右勝手と左勝手が別カテゴリで、品番も別です。今付いているクレセントの向きを確認します。</p>
                </div>
                <div className="bg-white rounded-xl border border-black/10 p-4">
                  <p className="font-bold text-text-primary mb-1">② ねじ穴のピッチ</p>
                  <p>本体を留める2本のねじ穴の間隔です。品名に「ピッチ40」「ピッチ45」のように書かれています。</p>
                </div>
                <div className="bg-white rounded-xl border border-black/10 p-4">
                  <p className="font-bold text-text-primary mb-1">③ ねじカバーの有無</p>
                  <p>ねじを隠すカバーが付く品と付かない品で区分が分かれています。カバーのロゴの有無を見分けの目安にする品もあります。</p>
                </div>
                <div className="bg-white rounded-xl border border-black/10 p-4">
                  <p className="font-bold text-text-primary mb-1">④ 窓の商品名と時期</p>
                  <p>「エピソード（2010年12月以前）」「エピソード（2011年1月以降）」のように、同じ商品名でも時期で部品が異なります。</p>
                </div>
              </div>
              <p>
                フレミングJ・エイピアJやエピソードNEO向けの一部の部品には「窓のラベルをご確認ください」と書かれています。窓に貼られたラベルで商品名を確かめてから選んでください。空掛け防止機能（トリガー）付きと書かれた品もあります。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.detail}>YKK AP 部品オンラインショップ「クレセント右勝手カバー無ピッチ45 HH5K13031」</Ext>ほか各部品の表示（2026年11月10日確認）
              </p>
            </>
          ),
        },
        {
          h2: "YKK AP のクレセントの区分別の掲載数と価格",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">区分</th>
                      <th className="border border-border px-3 py-2 text-left">掲載</th>
                      <th className="border border-border px-3 py-2 text-left">販売中</th>
                      <th className="border border-border px-3 py-2 text-left whitespace-nowrap">販売中の価格（税込）</th>
                    </tr>
                  </thead>
                  <tbody>
                    {catRows.map(([a, b, c, d]) => (
                      <tr key={a}>
                        <td className="border border-border px-3 py-2">{a}</td>
                        <td className="border border-border px-3 py-2">{b}</td>
                        <td className="border border-border px-3 py-2">{c}</td>
                        <td className="border border-border px-3 py-2 font-bold text-text-primary whitespace-nowrap">{d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                カバーなしの区分は掲載19品のうち12品が販売終了で、販売中の品には旧品番の代替品として案内されているものが含まれます。カバーありの区分には、鍵付クレセント（エピソードNEO向け・右勝手 税込7,700円）、脱着ノブクレセント（フレミングⅡ・フレミングJ・エイピアJ用 税込5,720円）も掲載されていました。価格は変わることがあるため、購入時に確認してください。
              </p>
              <p className="text-xs text-text-muted">
                出典：YKK AP 部品オンラインショップ「<Ext href={SRC.rightNoCover}>右勝手（カバーなし）</Ext>」「<Ext href={SRC.rightCover}>右勝手（カバーあり）</Ext>」「<Ext href={SRC.leftNoCover}>左勝手（カバーなし）</Ext>」「<Ext href={SRC.leftCover}>左勝手（カバーあり）</Ext>」（いずれも2026年11月10日確認・表は当サイトで集計）
              </p>
            </>
          ),
        },
        {
          h2: "交換したあとに確認すること",
          body: (
            <>
              <p>
                部品の多くには「交換要領書付」と表示されています。要領書の手順どおりに取り付けたら、窓を閉めてクレセントを掛け、受けにしっかり掛かるか、窓ががたつかないかを確認してください。掛かりが浅い、または固すぎる場合は、受けの位置や窓の建て付けが関係していることがあります。窓を取り付けた会社やサッシメーカーの窓口に相談してください。
              </p>
              <p>
                クレセントは窓を締めるための金具です。警視庁は窓の防犯対策として、サッシに補助錠を取り付けること、クレセント錠はロック付きのものが有効であることを挙げています。YKK APの部品通販では引違い窓用の補助錠3品が税込1,210〜1,870円で掲載されていました。補助錠の考え方は<a href="/hojo-jou/" className="text-primary underline">補助錠の選び方</a>にまとめています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.keishicho}>警視庁「侵入窃盗の防犯対策」</Ext>、<Ext href={SRC.hojo}>YKK AP 部品オンラインショップ「引違い窓／補助錠」</Ext>（いずれも2026年11月10日確認）
              </p>
            </>
          ),
        },
      ]}
      cta={{
        h2: "窓以外のサッシの鍵も替えるときは",
        text: "勝手口ドアのシリンダーや、勝手口引戸の召合せ錠は、クレセントとは別の部品です。場所ごとの部品の違いを確認してから探すと、適合しない部品を買う手間を減らせます。",
        links: [
          { href: "/sash-kagi-koukan/", label: "サッシの鍵交換（場所別の部品）→" },
          { href: "/katteguchi-mado-bouhan/", label: "勝手口・窓の防犯対策" },
        ],
      }}
      faqTitle="クレセント錠の交換のよくある質問"
      faqs={faqs}
      related={[
        { href: "/sash-kagi-koukan/", label: "サッシの鍵交換", desc: "窓・勝手口ドア・引戸で替える部品の違い" },
        { href: "/katteguchi-mado-bouhan/", label: "勝手口・窓の鍵の防犯対策", desc: "クレセント錠と補助錠の基礎知識" },
        { href: "/hojo-jou/", label: "補助錠の選び方", desc: "ワンドア・ツーロックの考え方" },
        { href: "/guremon-jou/", label: "グレモン錠とは", desc: "たてすべり出し窓などのハンドル交換部品" },
      ]}
    />
  );
}
