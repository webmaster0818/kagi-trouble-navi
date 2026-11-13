import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/aikagi-kara-aikagi/";
const TITLE = "合鍵から合鍵は作れる？｜美和ロック・ウエストの公式案内で見る誤差と、純正キーで作り直す方法";
const DESC =
  "合鍵（複製キー）をもとにさらに合鍵を作るときの注意を、美和ロック「合鍵をご希望のお客様へ」とウエストのよくある質問で2026年11月13日に確認しました。" +
  "複製を重ねると誤差が増えること、純正キーと複製キーの見分け方、元の純正キーがないときの頼み方をまとめています。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const CHECKED = "2026年11月13日確認";

const SRC = {
  miwa: "https://www.miwa-lock.co.jp/tec/support/duplicatekey.html",
  west: "https://west-lock.co.jp/faq",
};

const rows: [string, string, string][] = [
  ["作るところ", "メーカー（美和ロックは公式オンラインショップ「MIWA Direct」、サービス代行店）", "合鍵店などの店舗で、手元の鍵に倣って複製"],
  ["刻印", "MIWA刻印とキーナンバーが入る", "キーナンバーは入らない"],
  ["精度", "メーカーオリジナルとして作るため高精度", "オリジナルではないため若干の誤差が生じる"],
  ["日数", "作製に日数がかかり、緊急時の即日対応はできない", "即日対応も可能"],
  ["メーカー保証", "—", "おこなっていない"],
];

const faqs: Faq[] = [
  {
    q: "合鍵からさらに合鍵を作っても大丈夫ですか？",
    a: "美和ロックは、複製キーを元にして複製すると、さらに誤差が生じるため、純正キーから複製するよう勧めています。" +
      "ウエストも、店頭での複製は実物の鍵の寸法を測って作るため純正の鍵より寸法精度が悪くなり、使い続けるとシリンダーの寿命を縮めるとしています（" + CHECKED + "）。",
  },
  {
    q: "手元の鍵が純正キーか合鍵か、どう見分けますか？",
    a: "美和ロックは、純正キーにはMIWA刻印とキーナンバーが入り、店舗で複製した複製キーにはキーナンバーが入らないと説明しています。" +
      "ほかのメーカーの鍵も、メーカー名とキーナンバー（鍵番号）の刻印があるかを確かめてください（" + CHECKED + "）。",
  },
  {
    q: "合鍵しか手元にない場合、メーカーに純正キーを注文できますか？",
    a: "美和ロックのMIWA Directでは、鍵に「MIWA」刻印がないもの（複製キー）からは注文できないとしています。" +
      "キーナンバーが消えている鍵、手元に鍵がない場合、マスターキーなどの特殊な鍵も同様です。賃貸住宅なら管理会社や家主に、持ち家なら錠を施工した会社やメーカーのサービス代行店に相談してください（" + CHECKED + "）。",
  },
  {
    q: "キーナンバーを伝えれば、街の合鍵店で作ってもらえますか？",
    a: "ウエストは、キーナンバーは暗号化されているため、キーナンバーだけでの複製はできないとしています。合鍵を作るには、キーナンバーから製作可否を確かめてメーカーに注文する方法を案内しています（" + CHECKED + "）。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月13日"
      updatedIso="2026-11-13"
      crumbs={[{ name: "合鍵", href: "/aikagi/" }, { name: "合鍵から合鍵は作れる？" }]}
      answerLead="合鍵（複製キー）をもとにさらに合鍵を作ることは、錠前メーカーは勧めていません。美和ロックは、複製キーには若干の誤差があり、複製キーを元に複製するとさらに誤差が生じるとして、純正キーから複製するよう案内しています。"
      answerBody={
        <>
          <p>
            ウエストも、店頭で実物の鍵の寸法を測って作る合鍵は純正の鍵より寸法精度が悪くなり、寸法精度の悪い鍵を使い続けるとシリンダーの寿命を縮めるとして、純正の合鍵を強く勧めています。手元に純正キーが残っていれば、その純正キーをもとに作り直すのが確実です。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.miwa}>美和ロック「合鍵をご希望のお客様へ」</Ext>、<Ext href={SRC.west}>ウエスト「よくあるご質問」</Ext>（いずれも{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "純正キーと複製キーの違い：美和ロックの説明",
          body: (
            <>
              <p>
                美和ロックは、使っているキーには純正キーと複製キーの2種類があるとして、違いを次のように説明しています。
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">項目</th>
                      <th className="border border-border px-3 py-2 text-left">純正キー</th>
                      <th className="border border-border px-3 py-2 text-left">複製キー</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map(([k, a, b]) => (
                      <tr key={k}>
                        <td className="border border-border px-3 py-2 font-medium">{k}</td>
                        <td className="border border-border px-3 py-2">{a}</td>
                        <td className="border border-border px-3 py-2">{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                そのうえで、複製キーを元にして複製するとさらに誤差が生じるため、純正キーから複製するよう勧めています。高性能の鍵が主流になっていることから、合鍵はシリンダーの構造を傷めない高精度の純正キーを勧めるとしています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.miwa}>美和ロック「合鍵をご希望のお客様へ」純正キーと複製キーの違い</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "寸法精度とシリンダーの寿命：ウエストの説明",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>ギザギザの山がある鍵は、実物を持ち込めば一般的な街の鍵屋でも複製できるが、ウエストは推奨していない。</li>
                <li>理由は、街の鍵屋では実物の鍵の寸法を測って複製するため、どうしても純正の鍵より寸法精度が悪くなるから。</li>
                <li>寸法精度の悪い鍵を使い続けると、シリンダーの寿命を縮める。</li>
                <li>ディンプルキーは特殊な設備がないと複製できない。</li>
                <li>キーナンバーは暗号化されているため、キーナンバーだけでは複製できない。</li>
              </ul>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.west}>ウエスト「よくあるご質問」</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "合鍵しか手元にないとき：メーカーに注文できない場合",
          body: (
            <>
              <p>
                美和ロックは、公式オンラインショップ「MIWA Direct」で純正キーを注文できない例として、次の4つを挙げています。
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>鍵に「MIWA」刻印がないもの（複製キーからは注文できない）</li>
                <li>鍵番号（キーナンバー）がない、または消えてしまっているもの</li>
                <li>現在、手元に鍵がない場合</li>
                <li>マスターキーなどの特殊な鍵</li>
              </ul>
              <p>
                また、セキュリティ認証IDシステム付きのキーは、セキュリティカードに記載された認証ID番号と鍵に刻印された鍵番号の2つがそろわないと複製の注文ができない仕組みです。鍵番号を過去に他人に見られた可能性がある場合、美和ロックはシリンダー交換を勧めています。
              </p>
              <p>
                賃貸住宅の鍵は、合鍵を作る前に管理会社や家主の決まりを確認してください。ウエストは、キーナンバーが分からない場合はシリンダーから鍵を作ることはできず、シリンダーの交換が必要になるとしています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.miwa}>美和ロック「合鍵をご希望のお客様へ」</Ext>、<Ext href={SRC.west}>ウエスト「よくあるご質問」</Ext>（いずれも{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "メーカー別の純正キーの頼み方は別ページで",
          body: (
            <p>
              美和ロックの純正キーの注文は<a href="/maker/miwa/aikagi/" className="text-primary underline">美和ロック（MIWA）の合鍵・純正キーの頼み方</a>、ゴールは<a href="/maker/goal/aikagi/" className="text-primary underline">GOALのスペアキー・フレッシュキーの注文方法</a>、ウエストは<a href="/maker/west/aikagi/" className="text-primary underline">ウエストの合鍵</a>にまとめています。合鍵を作れる場所の違いは<a href="/aikagi/" className="text-primary underline">合鍵の作り方と値段の考え方</a>、鍵番号の見方は<a href="/key-number-aikagi/" className="text-primary underline">鍵番号（キーナンバー）と合鍵</a>をご覧ください。
            </p>
          ),
        },
      ]}
      faqTitle="合鍵から合鍵を作るときのよくある質問"
      faqs={faqs}
      related={[
        { href: "/aikagi/", label: "合鍵の作り方", desc: "作れる場所・作れない鍵" },
        { href: "/maker/miwa/aikagi/", label: "美和ロックの純正キー", desc: "MIWA Directで注文できる5種類" },
        { href: "/key-number-aikagi/", label: "鍵番号と合鍵", desc: "キーナンバーの見方" },
        { href: "/junsei-key-saihakkou/", label: "メーカー純正キーの再発行", desc: "純正キー取り寄せの流れ" },
        { href: "/kagi-mawaranai/", label: "鍵が回らない", desc: "合鍵が回りにくいときの確認" },
      ]}
    />
  );
}
