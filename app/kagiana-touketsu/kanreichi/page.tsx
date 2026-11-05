import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";
import { JMA_ROWS } from "@/data/jmaWinterMin";

const PATH = "/kagiana-touketsu/kanreichi/";
const TITLE = "鍵穴が凍りやすい時期を都市別に確認｜気象庁の平年値で見る冬の最低気温（23市）";
const DESC =
  "旭川・釧路は11月から3月まで、札幌・青森・盛岡・長野・松本などは12月から3月まで、日最低気温の月平均が0℃を下回ります（気象庁 平年値 1991〜2020年）。" +
  "北海道・東北・北関東・甲信・北陸の23市を一覧にしました（2026年11月5日確認）。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const CHECKED = "2026年11月5日確認";
const JMA_TOP = "https://www.data.jma.go.jp/obd/stats/etrn/index.php";

const sorted = [...JMA_ROWS].sort((a, b) => parseFloat(a.jan) - parseFloat(b.jan));
const fiveMonths = JMA_ROWS.filter((r) => r.months.length >= 5).map((r) => r.city);
const fourMonths = JMA_ROWS.filter((r) => r.months.length === 4).map((r) => r.city);
const none = JMA_ROWS.filter((r) => r.months.length === 0).map((r) => r.city);

function span(m: string[]): string {
  if (m.length === 0) return "なし";
  if (m.length === 1) return m[0];
  return `${m[0]}〜${m[m.length - 1]}`;
}

const faqs: Faq[] = [
  {
    q: "日最低気温の月平均が0℃を下回る月が長いのはどの都市ですか？",
    a: "今回の23市では、旭川市と釧路市が11月から3月までの5か月です。札幌市・苫小牧市・函館市・青森市・八戸市・盛岡市・山形市・長野市・松本市は12月から3月までの4か月です（気象庁 平年値 1991〜2020年、" +
      CHECKED +
      "）。",
  },
  {
    q: "月平均の最低気温が0℃以上なら、鍵穴は凍りませんか？",
    a: "月平均は30年間の平均値で、その月の毎日の最低気温ではありません。月平均が0℃以上の富山市・金沢市・福井市・岐阜市でも、寒い朝に0℃を下回る日はあり得ます。雨や雪のあとに冷え込んだ朝は、鍵穴に入った水分が凍ることがあります。",
  },
  {
    q: "鍵穴が凍って鍵が回らないときはどうすればよいですか？",
    a: "熱湯をかける、力任せに回すといった方法は避けてください。鍵を温めてから差し込むなどの対処と避けるべき行動は「鍵穴が詰まる・凍結したときの対処法」のページにまとめています。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月5日"
      updatedIso="2026-11-05"
      crumbs={[
        { name: "鍵穴の凍結・異物", href: "/kagiana-touketsu/" },
        { name: "都市別の冬の最低気温" },
      ]}
      answerLead="気象庁の平年値（1991〜2020年）で日最低気温の月平均が0℃を下回る月は、旭川市・釧路市が11月〜3月、札幌市・青森市・盛岡市・長野市・松本市などが12月〜3月です。富山市・金沢市・福井市・岐阜市は、どの月も月平均では0℃を下回りません。"
      answerBody={
        <>
          <p>
            鍵穴の凍結は、鍵穴に入った水分が0℃を下回って凍ることで起こります。お住まいの都市で「朝の最低気温が0℃を下回りやすい時期」を知っておくと、雨や雪のあとの冷え込みに備えやすくなります。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={JMA_TOP}>気象庁「過去の気象データ検索」平年値（年・月ごとの値）</Ext>（{CHECKED}）。各都市の観測地点のページは下の表にリンクしています。
          </p>
        </>
      }
      sections={[
        {
          h2: "23市の日最低気温の平年値（12月〜3月）",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">都市（観測地点）</th>
                      <th className="border border-border px-3 py-2 text-right">12月</th>
                      <th className="border border-border px-3 py-2 text-right">1月</th>
                      <th className="border border-border px-3 py-2 text-right">2月</th>
                      <th className="border border-border px-3 py-2 text-right">3月</th>
                      <th className="border border-border px-3 py-2 text-left">0℃を下回る月</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sorted.map((r) => (
                      <tr key={r.slug}>
                        <td className="border border-border px-3 py-2 font-bold text-text-primary">
                          <a href={`/area/${r.slug}/`} className="text-primary underline">{r.city}</a>
                          <span className="text-xs font-normal text-text-muted">（<Ext href={r.url}>{r.station}</Ext>）</span>
                        </td>
                        <td className="border border-border px-3 py-2 text-right">{r.dec}℃</td>
                        <td className="border border-border px-3 py-2 text-right">{r.jan}℃</td>
                        <td className="border border-border px-3 py-2 text-right">{r.feb}℃</td>
                        <td className="border border-border px-3 py-2 text-right">{r.mar}℃</td>
                        <td className="border border-border px-3 py-2">{span(r.months)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                値は日最低気温の月平均（平年値・統計期間1991〜2020年）。表は1月の値が低い順です。上越市の観測地点は高田です。出典：気象庁（{CHECKED}）。
              </p>
            </>
          ),
        },
        {
          h2: "0℃を下回る月の長さで見ると",
          body: (
            <ul className="list-disc pl-5 space-y-1.5">
              <li>11月〜3月（5か月）：{fiveMonths.join("・")}</li>
              <li>12月〜3月（4か月）：{fourMonths.join("・")}</li>
              <li>月平均では0℃を下回らない：{none.join("・")}</li>
              <li>上記以外の市は、1月・2月を中心に1〜2か月です（表を参照）</li>
            </ul>
          ),
        },
        {
          h2: "凍結に備えるときの考え方",
          body: (
            <p>
              月平均は目安で、日ごとの気温は年によって変わります。最新の予報は気象庁や各地の気象台の発表で確認してください。凍った鍵穴の対処と避けるべき行動は<a href="/kagiana-touketsu/" className="text-primary underline">鍵穴が詰まる・凍結したときの対処法</a>、鍵が回らないときの原因の切り分けは<a href="/kagi-mawaranai/" className="text-primary underline">鍵が回らない・重いときの対処法</a>にまとめています。
            </p>
          ),
        },
      ]}
      cta={{
        h2: "凍結が解けても鍵が回らないときは",
        text: "鍵穴の内部が傷んでいる場合や、鍵が折れそうな手応えがある場合は、無理に回さず業者に相談してください。依頼前に料金と対応を比べることをおすすめします。",
        links: [
          { href: "/agents/", label: "鍵業者の比較一覧 →" },
          { href: "/kagiana-touketsu/", label: "鍵穴の凍結・異物の対処" },
        ],
      }}
      faqTitle="寒冷地の鍵穴の凍結のよくある質問"
      faqs={faqs}
      related={[
        { href: "/kagiana-touketsu/", label: "鍵穴が詰まる・凍結したときの対処法", desc: "原因別の対処と避けるべき行動" },
        { href: "/kagi-mawaranai/", label: "鍵が回らない・重いときの対処法", desc: "原因の切り分け" },
        { href: "/kagiana-abura/", label: "鍵穴に油を差してよいか", desc: "潤滑剤の選び方" },
        { href: "/area/asahikawa/", label: "旭川市の鍵業者", desc: "地域の鍵業者の比較" },
      ]}
    />
  );
}
