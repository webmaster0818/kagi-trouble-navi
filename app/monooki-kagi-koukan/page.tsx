import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/monooki-kagi-koukan/";
const TITLE = "物置の鍵交換・鍵の紛失｜ヨド物置・イナバ物置の注文先と、錠セット交換になるケース";
const DESC =
  "物置の鍵をなくした・折れた・回らないときの連絡先を、ヨド物置とイナバ物置の公式の案内で2026年11月12日に確認しました。" +
  "スペアキーは販売店などで注文し、錠の内部が壊れたときは販売店に錠セットの交換を依頼します。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  yodoFaq: "https://www.yodomonooki.jp/faq/",
  yodoShop: "https://www.yodomonookierabi.jp/search/",
  inabaFaq: "https://www.inaba-ss.co.jp/monooki/faq/",
  inabaParts: "https://shop.inaba-ss.co.jp/",
  inabaInq: "https://www.inaba-ss.co.jp/monooki/inquiry/",
};

const rows: [string, string, string][] = [
  [
    "鍵をなくした",
    "購入した販売店か、近くのヨド物置取扱店に注文。分からなければ近くの営業所に問い合わせ。街の合鍵屋では作製できない",
    "本体の錠に刻印された鍵番号でスペアキーを注文。購入した販売店か、イナバ物置パーツショップ（一部の鍵を除く）",
  ],
  [
    "鍵がかからない",
    "本体や扉の傾きが原因のことがある。水準器で水平を調整し、扉の隙間は上吊戸車で調整。直らなければ販売店に相談",
    "物置は扉を約10cm開けた状態で錠前を操作する。正常に動かなければ錠前の故障が考えられるとして販売店への問い合わせを案内",
  ],
  [
    "鍵が回らない・鍵が折れた",
    "回らないときは市販の錠用潤滑油を注入して何度か回す。錠の内部が破損・磨耗している場合や、錠の内部で鍵が折れた場合は、販売店に錠セットの交換を依頼。古い物置は対応できない場合がある",
    "—",
  ],
];

const faqs: Faq[] = [
  {
    q: "物置の鍵をなくしたら、近所の合鍵屋で作れますか？",
    a: "ヨド物置は、鍵を紛失したときは防犯上、購入した販売店か近くのヨド物置取扱店に注文するよう案内しており、街の合鍵屋さんでは作製ができないとしています。納期・価格は依頼する販売店で確認します（2026年11月12日確認）。",
  },
  {
    q: "イナバ物置のスペアキーを注文するには何が必要ですか？",
    a: "イナバ物置は、スペアキーの注文には本体の錠に刻印されている鍵番号が必要だとしています。購入した販売店に連絡するか、イナバ物置パーツショップ（一部の鍵を除く）で注文できます。どのスペアキーを注文すればよいか分からないときは、事前にお問い合わせフォームから問い合わせるよう案内しています（2026年11月12日確認）。",
  },
  {
    q: "物置の鍵穴の中で鍵が折れました。どうすればよいですか？",
    a: "ヨド物置は、錠の内部で鍵が折れた場合は販売店に錠セットの交換を依頼するよう案内しています。古い物置は対応できない場合があるとしています（2026年11月12日確認）。",
  },
  {
    q: "物置の修理は、メーカーに直接頼めますか？",
    a: "ヨド物置は、修理用・メンテナンス部品は購入した販売店かヨド物置取扱店に注文するよう案内しており、同社では施工（組立）と修理業務は受けていないとしています（2026年11月12日確認）。",
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
      crumbs={[{ name: "物置の鍵交換・鍵の紛失" }]}
      answerLead="物置の鍵をなくしたときは、物置を買った販売店（またはメーカーの取扱店・部品通販）にスペアキーを注文するのが基本です。ヨド物置は「街の合鍵屋さんでは作製ができません」と案内しています。錠の内部が壊れた・鍵が中で折れたときは、販売店に錠セットの交換を依頼します。"
      answerBody={
        <>
          <p>
            イナバ物置は、スペアキーの注文に本体の錠に刻印された鍵番号が必要だとしています。鍵をなくす前に、錠の刻印を写真に撮っておくと注文のときに困りません。物置の型番や購入した店が分からないときは、ヨド物置は近くの営業所、イナバ物置はお問い合わせフォームを案内しています。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.yodoFaq}>ヨド物置「よくある質問」</Ext>、<Ext href={SRC.inabaFaq}>イナバ物置「よくあるご質問」</Ext>（いずれも2026年11月12日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "症状別：ヨド物置とイナバ物置の案内",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">症状</th>
                      <th className="border border-border px-3 py-2 text-left">ヨド物置</th>
                      <th className="border border-border px-3 py-2 text-left">イナバ物置</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map(([k, y, i]) => (
                      <tr key={k}>
                        <td className="border border-border px-3 py-2 font-medium whitespace-nowrap">{k}</td>
                        <td className="border border-border px-3 py-2">{y}</td>
                        <td className="border border-border px-3 py-2">{i}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.yodoFaq}>ヨド物置「よくある質問」鍵に関するトラブル</Ext>、<Ext href={SRC.inabaFaq}>イナバ物置「よくあるご質問」メンテナンス・修理等、購入後のご質問</Ext>（いずれも2026年11月12日確認）
              </p>
            </>
          ),
        },
        {
          h2: "注文先：販売店・取扱店・パーツショップ",
          body: (
            <>
              <p>
                ヨド物置は、修理用・メンテナンス部品を購入した販売店かヨド物置取扱店で注文するよう案内しており、同社では施工（組立）と修理業務は受けていないとしています。取扱店は公式の販売店検索で探せます。
              </p>
              <p>
                イナバ物置は、購入した販売店のほか、公式のイナバ物置パーツショップでもスペアキーを注文できるとしています（一部の鍵を除く）。どのスペアキーか分からないときは、注文前にお問い合わせフォームで確認するよう案内しています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.yodoFaq}>ヨド物置「よくある質問」</Ext>、<Ext href={SRC.yodoShop}>ヨド物置 販売店検索</Ext>、<Ext href={SRC.inabaParts}>イナバ物置パーツショップ</Ext>、<Ext href={SRC.inabaInq}>イナバ物置 お問い合わせ</Ext>（いずれも2026年11月12日確認）
              </p>
            </>
          ),
        },
        {
          h2: "鍵が回らない・折れたときに気をつけること",
          body: (
            <>
              <p>
                ヨド物置は、鍵が回らないときは錠穴に市販の錠用潤滑油を注入し、しばらくしてから何度か回すよう案内しています。それでも直らず、錠の内部で破損・磨耗している場合は、販売店に錠セットの交換を依頼します。住宅の鍵穴に一般の油を差してしまったときの注意は<a href="/kagiana-abura/" className="text-primary underline">鍵穴に油を差してしまったときの対処</a>、鍵が折れたときの一般的な対処は<a href="/kagi-ore/" className="text-primary underline">鍵が折れたときの対処</a>で説明しています。
              </p>
              <p>
                シャッター付きの車庫・収納庫の鍵が開かないとき、イナバ物置は、取扱説明書・鍵・シャッターに貼られたシールで製造メーカー名を確かめ、購入した販売店に伝えるよう案内しています。シャッターの鍵は<a href="/shutter-kagi-koukan/" className="text-primary underline">シャッターの鍵交換</a>にまとめています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.yodoFaq}>ヨド物置「よくある質問」</Ext>、<Ext href={SRC.inabaFaq}>イナバ物置「よくあるご質問」</Ext>（いずれも2026年11月12日確認）
              </p>
            </>
          ),
        },
      ]}
      faqTitle="物置の鍵交換・鍵の紛失のよくある質問"
      faqs={faqs}
      related={[
        { href: "/post-kagi-koukan/", label: "ポスト（郵便受け）の鍵交換", desc: "集合ポストは管理会社へ・ナスタの公式案内" },
        { href: "/shutter-kagi-koukan/", label: "シャッターの鍵交換", desc: "鍵番号での注文とメーカー別の窓口" },
        { href: "/kagi-ore/", label: "鍵が折れたときの対処", desc: "鍵穴に残ったときにしないこと" },
        { href: "/kagiana-abura/", label: "鍵穴に油を差してしまったとき", desc: "専用潤滑剤とメーカーの案内" },
        { href: "/key-number-aikagi/", label: "鍵番号と合鍵の注文", desc: "刻印の見方とメーカーへの注文" },
        { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処", desc: "住まいの鍵の紛失で最初にすること" },
      ]}
    />
  );
}
