import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/disc-cylinder/";
const TITLE = "ディスクシリンダーとは｜見分け方と、後継品・ピッキング防止法の防犯性能表示までの経緯";
const DESC =
  "ディスクシリンダーは、美和ロックが1991年に後継のU9シリンダーを発売するまで主力としていたシリンダーで、現在は廃止シリンダーです。" +
  "鍵穴とキーの形での見分け方、2003年施行のピッキング防止法と防犯性能の表示、交換先のシリンダーを2026年11月10日に公式情報で確認しました。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  miwaAbol: "https://www.miwa-lock.co.jp/tec/support/abolition_cylinder.html",
  miwaHistory: "https://www.miwa-lock.co.jp/corp/history.html",
  miwaCyl: "https://www.miwa-lock.co.jp/tec/products/miwa_cylinder.html",
  miwaPerf: "https://www.miwa-lock.co.jp/tec/products/performance.html",
  law: "https://laws.e-gov.go.jp/law/415AC0000000065",
  order: "https://laws.e-gov.go.jp/law/415CO0000000355",
};

const timeline: [string, string][] = [
  ["1991年（平成3年）", "美和ロックが、ディスクシリンダーに代わる主力シリンダーとして「U9シリンダー」を開発し、販売を開始。"],
  ["2003年（平成15年）", "美和ロックが「PRシリンダー」を発売。9月1日に「特殊開錠用具の所持の禁止等に関する法律」（平成15年法律第65号）が施行。"],
  ["2004年（平成16年）4月", "指定建物錠（シリンダー錠・シリンダー・サムターン）に防犯性能の表示が必要になる（美和ロックの案内）。"],
  ["2030年9月30日", "美和ロックのディスクシリンダーの合鍵・マスターキー複製の注文対応の期限。新規物件・既存物件合わせの製作と同一キーNo.の追加はすでに終了。"],
];

const faqs: Faq[] = [
  {
    q: "自宅の鍵がディスクシリンダーかどうか、どう見分けますか？",
    a: "美和ロックは廃止シリンダー一覧で、ディスクシリンダーの識別方法を「鍵穴が縦向きで平仮名の『く』の字に見える」「キーの両側に刻みがある」と説明しています（2026年11月10日確認）。シリンダーやキーの刻印でメーカー名も確かめてください。",
  },
  {
    q: "ディスクシリンダーの合鍵はまだ作れますか？",
    a: "美和ロックの一覧では、ディスクシリンダーの合鍵・マスターキー複製の注文対応は2030年9月30日までです。新規物件の製作、既存物件に合わせた製作、同一キーNo.でのシリンダー追加はいずれも終了しています（2026年11月10日確認）。",
  },
  {
    q: "「ディスクシリンダー」と名の付く現行品もありますか？",
    a: "あります。美和ロックの現行のシリンダーの種類には、リッジ形状とリバーシブルキーを持つ「ダブルサイドバー式ディスクシリンダー」のWRシリンダー（理論鍵違い数 約1,525億通り）があります。廃止シリンダー一覧の「ディスクシリンダー」とは別の製品です（2026年11月10日確認）。",
  },
  {
    q: "ディスクシリンダーから何に交換すればいいですか？",
    a: "美和ロックは、ディスクシリンダーを含む廃止シリンダーについて、鍵違いが多くセキュリティレベルの高いU9・WR・PR・LB・JNシリンダーへの取り替えと、警察庁も推奨する1ドア2ロック（新たな補助錠の設置）を勧めています。適合するシリンダーは錠ケースの型番で変わるため、型番を確認して販売店や鍵業者に相談してください。",
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
      crumbs={[{ name: "ディスクシリンダーとは" }]}
      answerLead="ディスクシリンダーは、美和ロックが1991年に後継の「U9シリンダー」を発売するまで主力としていたシリンダーです。鍵穴が縦向きで「く」の字に見え、キーの両側に刻みがあるのが見分け方です。美和ロックは廃止シリンダーに挙げ、合鍵の注文は2030年9月30日までとしています。"
      answerBody={
        <>
          <p>
            美和ロックは、ディスクシリンダーなどを廃止・廃止予定とした理由を、数多くの製造に伴い鍵違い数の限界を超えたことと、社会情勢の変化でさらに高いセキュリティが求められるようになったことと説明しています。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.miwaAbol}>美和ロック「廃止シリンダー/廃止製品一覧」</Ext>、<Ext href={SRC.miwaHistory}>美和ロック「沿革」</Ext>（いずれも2026年11月10日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "年表：ディスクシリンダーから防犯性能の表示まで",
          body: (
            <>
              <ol className="border-l-2 border-primary/30 pl-5 space-y-4">
                {timeline.map(([y, t]) => (
                  <li key={y}>
                    <p className="font-bold text-text-primary">{y}</p>
                    <p>{t}</p>
                  </li>
                ))}
              </ol>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.miwaHistory}>美和ロック「沿革」</Ext>、<Ext href={SRC.law}>e-Gov法令検索「特殊開錠用具の所持の禁止等に関する法律」</Ext>、<Ext href={SRC.order}>同 施行令</Ext>、<Ext href={SRC.miwaPerf}>美和ロック「指定建物錠の性能表示」</Ext>、<Ext href={SRC.miwaAbol}>美和ロック「廃止シリンダー/廃止製品一覧」</Ext>（いずれも2026年11月10日確認）
              </p>
            </>
          ),
        },
        {
          h2: "見分け方：鍵穴とキーの形",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">確かめる所</th>
                      <th className="border border-border px-3 py-2 text-left">ディスクシリンダー（美和ロックの識別方法）</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border px-3 py-2 whitespace-nowrap">鍵穴</td>
                      <td className="border border-border px-3 py-2">縦向きで、平仮名の「く」の字に見える</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-3 py-2 whitespace-nowrap">キー</td>
                      <td className="border border-border px-3 py-2">両側に刻みがある</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                同じ一覧には、鍵穴が横向きのECシリンダーや、鍵穴が横向きでアルファベットの「W」の字に見えるUXシリンダーなども載っています。シリンダーごとの合鍵の注文期限は<a href="/maker/miwa/haishi-cylinder/" className="text-primary underline">美和ロックの廃止シリンダー一覧</a>にまとめています。
              </p>
              <p className="text-xs text-text-muted">出典：<Ext href={SRC.miwaAbol}>美和ロック「廃止シリンダー/廃止製品一覧」</Ext>（2026年11月10日確認）</p>
            </>
          ),
        },
        {
          h2: "ピッキング防止法と「指定建物錠」の防犯性能の表示",
          body: (
            <>
              <p>
                2003年に施行された特殊開錠用具の所持の禁止等に関する法律は、業務その他正当な理由による場合を除き、特殊開錠用具の所持を禁止しています（第3条）。また、国家公安委員会が政令で定める建物錠（指定建物錠）について、製造業者等が表示すべき防犯性能の事項を告示すると定めています（第7条）。施行令は、指定建物錠をシリンダー錠、シリンダー、サムターンとしています（施行令第3条）。
              </p>
              <p>
                美和ロックは、平成16年4月から指定建物錠に防犯性能の表示が必要になったと案内し、表示の種類として耐ピッキング性能、耐かぎ穴壊し性能、耐サムターン回し性能、耐カム送り解錠性能、耐こじ破り性能、子鍵本数を挙げています。このうち子鍵本数は出荷する子カギの本数で、防犯性能とは関係がないとしています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.law}>e-Gov法令検索「特殊開錠用具の所持の禁止等に関する法律」</Ext>、<Ext href={SRC.order}>同 施行令</Ext>、<Ext href={SRC.miwaPerf}>美和ロック「指定建物錠の性能表示」</Ext>（いずれも2026年11月10日確認）
              </p>
            </>
          ),
        },
        {
          h2: "交換先として案内されているシリンダー",
          body: (
            <>
              <p>
                美和ロックは廃止シリンダーの使用者に、U9・WR・PR・LB・JNシリンダーへの取り替えと、1ドア2ロック（新たな補助錠の設置）を勧めています。同社の製品紹介では、U9シリンダーはロッキングバー方式と回転式タンブラーを採用し理論鍵違い数は約1億5千万通り、WRシリンダーはダブルサイドバー式ディスクシリンダーで理論鍵違い数は約1,525億通りと説明されています。
              </p>
              <p>
                交換の時期を考えるときは<a href="/kagi-koukan-timing/" className="text-primary underline">鍵交換のタイミング</a>、PRシリンダーの価格や注文方法は<a href="/maker/miwa/pr-cylinder/" className="text-primary underline">美和ロック PRシリンダー</a>を参照してください。賃貸住宅のシリンダーは物件の設備のため、交換の前に大家・管理会社に連絡してください。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.miwaAbol}>美和ロック「廃止シリンダー/廃止製品一覧」</Ext>、<Ext href={SRC.miwaCyl}>美和ロック「シリンダーの種類」</Ext>（いずれも2026年11月10日確認）
              </p>
            </>
          ),
        },
      ]}
      cta={{
        h2: "シリンダーの交換を検討するときは",
        text: "交換用シリンダーは錠ケースの型番と扉の厚さで適合が決まります。錠前の種類と刻印を確認してから、メーカーの販売店や鍵業者に相談すると、見積もりの比較がしやすくなります。",
        links: [
          { href: "/cylinder-koukan-diy/", label: "シリンダー交換の基礎知識 →" },
          { href: "/agents/", label: "鍵業者を比較する" },
        ],
      }}
      faqTitle="ディスクシリンダーのよくある質問"
      faqs={faqs}
      related={[
        { href: "/maker/miwa/haishi-cylinder/", label: "美和ロックの廃止シリンダー一覧", desc: "ディスク・EC・UX・PX・URの合鍵の注文期限" },
        { href: "/kagi-shurui-zukan/", label: "鍵の種類図鑑", desc: "刻みキー・ディンプルキーなどの見分け方" },
        { href: "/cp-nintei-jou/", label: "CP認定錠とは", desc: "防犯性能の判断基準" },
        { href: "/kagi-koukan-timing/", label: "鍵交換のタイミング", desc: "交換を検討すべきサイン" },
        { href: "/kaijo-hyouki-chigai/", label: "「解錠」と「開錠」の違い", desc: "法令・官公庁・メーカーの文書での表記" },
      ]}
    />
  );
}
