import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/shutter-kagi-koukan/";
const TITLE = "シャッターの鍵交換｜鍵をなくしたとき・鍵がかからないときのメーカー窓口と確認すること";
const DESC =
  "シャッターの鍵は専用品のため、メーカーやグループ会社の窓口で手配します。" +
  "三和シヤッター・文化シヤッター・LIXILの案内（鍵番号の刻印位置、本人確認、紛失時の錠前ごとの交換、鍵がかからないときの切り分け）を2026年11月11日に公式情報で確認しました。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  sanwaKey: "https://faq-sanwa-ss.dga.jp/faq_detail.html?id=51",
  sanwaDiag: "https://faq-sanwa-ss.dga.jp/faq_detail.html?id=508",
  bunkaKey: "https://faq-bunka-s.dga.jp/faq_detail.html?id=30",
  bunkaCopy: "https://faq-bunka-s.dga.jp/faq_detail.html?id=185",
  lixilGarage:
    "https://faq.lixil.co.jp/%E8%BB%8A%E5%BA%AB%E7%94%A8%E3%83%BB%E5%9C%9F%E9%96%93%E7%94%A8%E3%82%B7%E3%83%A3%E3%83%83%E3%82%BF%E3%83%BC%E3%81%AE%E9%8D%B5%E3%81%8C%E3%81%8B%E3%81%8B%E3%82%89%E3%81%AA%E3%81%84-626cd6ce4625bb00235d5750",
};

const makers: [string, string, string][] = [
  [
    "三和シヤッター",
    "シャッターの所有者・管理者から修理受付センターへ電話で注文（WEBフォーム・メールは不可）。キーパーツまたは錠前側に刻印された鍵番号と本数を伝える。キーは直接手渡しが基本で、注文時・引き渡し時に本人確認を行う場合がある。窓シャッター用のレバー錠・つまみ錠はオンラインショップで受け付け。",
    "鍵番号の刻印位置が分からないときは現地調査が必要",
  ],
  [
    "文化シヤッター",
    "手動式の軽量シャッターの鍵は、追加購入できるものがある。グループ会社の文化シヤッターサービスに問い合わせる。",
    "シャッター専用の鍵のため、町の鍵屋などでは作れないと案内",
  ],
  [
    "LIXIL（車庫用・土間用シャッター）",
    "室外からだけ鍵がかからない場合はシリンダー（鍵穴）の故障として、シリンダーの交換・修理を、購入した取扱店またはLIXIL修理受付センターに依頼する。",
    "室内・室外とも鍵がかからない場合は、ロック受け部の位置調整で直ることがある",
  ],
];

const faqs: Faq[] = [
  {
    q: "シャッターの鍵の合鍵は、近くの鍵屋で作れますか？",
    a: "文化シヤッターは、軽量手動シャッターの鍵について「シャッター専用の鍵のため、町の鍵屋さんなどで作ることはできません」と案内し、鍵の手配は文化シヤッターサービスに問い合わせるよう求めています（2026年11月11日確認）。ほかのメーカーの製品も、まずメーカーの窓口に問い合わせてください。",
  },
  {
    q: "シャッターの鍵をなくしました。鍵だけ取り寄せれば大丈夫ですか？",
    a: "三和シヤッターは、住所が分かるものと一緒に鍵をなくした場合、防犯上の観点から錠前ごと一式の交換を勧めています。鍵だけを取り寄せると、なくした鍵でも開けられる状態が続くためです（2026年11月11日確認）。",
  },
  {
    q: "鍵番号はどこに書いてありますか？",
    a: "三和シヤッターは、製品の種類ごとに、キーパーツ側か錠前等の部品側のどちらに鍵番号が刻印されているかを一覧で示しています。刻印位置が分からない、判別できない場合は現地調査が必要としています（2026年11月11日確認）。",
  },
  {
    q: "車庫のシャッターの鍵がかからなくなりました。鍵の故障ですか？",
    a: "LIXILの車庫用・土間用シャッターでは、室内・室外とも鍵がかからない場合は、土間の仕上げ面がガイドレール下部ラベルの標準位置から外れていることが原因で、ロック受け部の調整で対処できるとしています。室外からだけかからない場合はシリンダー（鍵穴）の故障で、交換・修理が必要です（2026年11月11日確認）。",
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
      crumbs={[{ name: "シャッターの鍵交換" }]}
      answerLead="シャッターの鍵はシャッター専用品のため、鍵の追加や錠の交換はシャッターのメーカーやそのグループ会社の窓口に依頼します。三和シヤッターは鍵番号を確認して電話で注文する方式で、住所が分かるものと一緒に鍵をなくした場合は錠前ごと一式の交換を勧めています。"
      answerBody={
        <>
          <p>
            まずシャッター本体のメーカー名（ラベルや取扱説明書）と、キーまたは錠前に刻印された鍵番号を確認してください。賃貸の店舗・倉庫や集合住宅のシャッターは建物の設備のため、所有者・管理者から依頼します。三和シヤッターも、鍵の注文はシャッターの所有者・管理者から行うよう案内しています。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.sanwaKey}>三和シヤッター「シャッターの鍵（キー、スペアキー、キーパーツ）は注文（購入）できますか。」</Ext>、<Ext href={SRC.bunkaCopy}>文化シヤッター「現在使ってる軽量手動シャッターの鍵のみを作りたいが、町の鍵屋さんなどで作ることはできますか。」</Ext>（いずれも2026年11月11日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "メーカー別：鍵の手配と交換の窓口",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">メーカー</th>
                      <th className="border border-border px-3 py-2 text-left">公式の案内</th>
                      <th className="border border-border px-3 py-2 text-left">補足</th>
                    </tr>
                  </thead>
                  <tbody>
                    {makers.map(([m, how, note]) => (
                      <tr key={m}>
                        <td className="border border-border px-3 py-2 whitespace-nowrap font-medium">{m}</td>
                        <td className="border border-border px-3 py-2">{how}</td>
                        <td className="border border-border px-3 py-2">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                三和シヤッターは、価格・費用と納期は担当部署から案内するとしています。文化シヤッターも機種によって追加購入できる場合とできない場合があるため、問い合わせの際は製品の種類（手動・電動、車庫用・店舗用・窓用）と設置場所を伝えると話が早く進みます。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.sanwaKey}>三和シヤッター よくあるご質問</Ext>、<Ext href={SRC.bunkaKey}>文化シヤッター「手動式の軽量シャッターの鍵は、追加購入できますか。」</Ext>、<Ext href={SRC.bunkaCopy}>同「町の鍵屋さんなどで作ることはできますか。」</Ext>、<Ext href={SRC.lixilGarage}>LIXIL「車庫用・土間用シャッターの鍵がかからない」</Ext>（いずれも2026年11月11日確認）
              </p>
            </>
          ),
        },
        {
          h2: "鍵をなくしたとき：鍵の追加か、錠前ごとの交換か",
          body: (
            <>
              <p>
                三和シヤッターは、防犯上の観点から、住所が分かるようなものと一緒に鍵をなくした場合は錠前ごと一式の交換を勧めています。キーは直接手渡しを基本とし、注文時や引き渡し時に本人確認を行う場合があります。
              </p>
              <p>
                鍵を追加するか錠前ごと替えるかは、なくした状況で判断します。家の鍵も一緒になくした場合は、<a href="/kagi-funshitsu/" className="text-primary underline">鍵をなくしたときの対処法</a>の手順（警察への遺失届・管理会社への連絡）も並行して進めてください。
              </p>
              <p className="text-xs text-text-muted">出典：<Ext href={SRC.sanwaKey}>三和シヤッター よくあるご質問</Ext>（2026年11月11日確認）</p>
            </>
          ),
        },
        {
          h2: "鍵がかからないとき：室内と室外のどちらで起きているか",
          body: (
            <>
              <p>LIXILは、車庫用・土間用シャッターの鍵がかからないときの原因を、症状で次の2つに分けています。</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>室内・室外とも鍵がかからない：</strong>土間の仕上げ面が、ガイドレール下部ラベルの標準位置の範囲外にあると鍵がかかりません。ロック受け部の位置を調整します。
                </li>
                <li>
                  <strong>室外からだけ鍵がかからない：</strong>シリンダー（鍵穴）部分の故障です。シリンダーの交換・修理を、購入した取扱店またはLIXIL修理受付センターに依頼します。
                </li>
              </ul>
              <p>
                三和シヤッターの「不具合・トラブルかんたん診断」でも、手動シャッターの症状の一つに「キー（鍵）紛失」があり、設置場所（車庫・倉庫・店舗／窓）と操作方法（電動／手動）から対処を案内しています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.lixilGarage}>LIXIL「車庫用・土間用シャッターの鍵がかからない」</Ext>、<Ext href={SRC.sanwaDiag}>三和シヤッター「不具合・トラブルかんたん診断 ～シャッター編～」</Ext>（いずれも2026年11月11日確認）
              </p>
            </>
          ),
        },
      ]}
      cta={{
        h2: "シャッターの鍵の相談先を決めるときは",
        text: "シャッターの鍵は専用品のため、まずシャッターのメーカーの窓口に、製品の種類と鍵番号を伝えて相談してください。玄関や勝手口の鍵もあわせて見直す場合は、住宅の鍵の交換の考え方も参考になります。",
        links: [
          { href: "/ikkodate-kagi-koukan/", label: "一戸建ての鍵交換 →" },
          { href: "/agents/", label: "鍵業者を比較する" },
        ],
      }}
      faqTitle="シャッターの鍵交換のよくある質問"
      faqs={faqs}
      related={[
        { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処法", desc: "遺失届・管理会社への連絡の手順" },
        { href: "/key-number-aikagi/", label: "鍵番号と合鍵の注文", desc: "刻印の見方とメーカー注文" },
        { href: "/ikkodate-kagi-koukan/", label: "一戸建ての鍵交換", desc: "持ち家の鍵の替え方と相談先" },
        { href: "/kagi-mawaranai/", label: "鍵が回らないとき", desc: "鍵穴まわりの不具合の確かめ方" },
        { href: "/tenpo-office-kagi-kanri/", label: "店舗・オフィスの鍵管理", desc: "複数人で使う鍵の管理方法" },
        { href: "/shutter-kagi-akanai/", label: "シャッターの鍵が開かない", desc: "凍結・左右の錠・停電時の手動切替え" },
      ]}
    />
  );
}
