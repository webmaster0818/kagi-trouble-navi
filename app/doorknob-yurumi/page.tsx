import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/doorknob-yurumi/";
const TITLE = "ドアノブ・レバーハンドルの緩みの直し方｜締め直すネジの場所と締め付けの強さ（美和ロックの案内）";
const DESC =
  "ドアノブやレバーハンドルがグラグラするときは、まず取付ねじの増し締めを試します。緩みやすいのはハンドル根元の止めネジと、座の内側の取付ネジの2か所。美和ロックが公開している点検方法・推奨締め付けトルク・インパクトドライバーを使わない理由を、2026年11月9日に公式で確認してまとめました。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  faqHazure: "https://www.miwa-lock.jp/faq/show/1532?site_domain=default",
  faqNeji: "https://www.miwa-lock.jp/faq/show/121?site_domain=default",
  faqTare: "https://www.miwa-lock.jp/faq/show/41?site_domain=default",
  faqTorihazushi: "https://www.miwa-lock.jp/faq/show/37?site_domain=default",
  faqNejiFunshitsu: "https://www.miwa-lock.jp/faq/show/40?site_domain=default",
  safe: "https://www.miwa-lock.co.jp/tec/support/safe.html",
};

const torque: [string, string, string][] = [
  ["4mmねじ", "錠前に使われる一般的なねじ", "1.5N・m（1.4〜1.9N・m）"],
  ["5mmねじ", "大きな長座などをとめるねじ", "3.0N・m（2.9〜3.9N・m）"],
];

const faqs: Faq[] = [
  {
    q: "ドアノブがグラグラするとき、最初に何をすればよいですか？",
    a: "美和ロックは、まずネジの増し締めを試すよう案内しています。ハンドルやノブを上下に揺する、または内外に押し引きして緩みを確かめ、ガタつきやねじの頭の飛び出しがあれば取付ねじを締め直します（美和ロック「製品のご注意・お手入れ方法」2026年11月9日確認）。",
  },
  {
    q: "どこのネジを締めればよいですか？",
    a: "美和ロックのFAQでは、緩みやすい場所として2つを挙げています。1つはレバーハンドルの根元側面にある小さな止めネジ（イモネジ）で、ドライバーか六角レンチで締め直します。もう1つは座（金具）の内部でドアの内外から挟み込んでいる貫通ビスで、カバー（化粧座）を外して左右の固定ビスを均等に締め直します。",
  },
  {
    q: "電動のインパクトドライバーで締めてもよいですか？",
    a: "美和ロックは、締め付けトルクが高いインパクトドライバーは使わないよう案内しています。締め付けが強すぎると作動に支障が出たり、ねじが外せなくなったり、折れたりする場合があるためです。呼び2番の手回しドライバーで、推奨の強さで締めます。",
  },
  {
    q: "ネジを締め直してもハンドルが下がったままです。",
    a: "美和ロックは、ハンドルが垂れ下がる原因として多いのは、ハンドルや座の取り付きの曲がりや、経年変化によるバネの劣化など錠ケースに起因するものだとしています。取付ねじの締め直しで直らない場合は、取付の修正や錠ケースの交換が必要になるため、同社の認定サービス代行店（SD店）への相談を案内しています。",
  },
  {
    q: "ネジをなくしてしまいました。ネジだけ買えますか？",
    a: "美和ロック製品の場合、同社FAQは、ネジは最寄りの美和ロックサービス代行店（SD店）へ依頼するよう案内しています。他のメーカーの製品は、各メーカーの窓口に問い合わせてください。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月9日"
      updatedIso="2026-11-09"
      crumbs={[{ name: "ドアノブの緩みの直し方" }]}
      answerLead="ドアノブやレバーハンドルの緩みは、取付ねじの増し締めで直ることがあります。締めるのは、ハンドル根元の止めネジ（イモネジ）と、座の内側の取付ネジの2か所です。"
      answerBody={
        <>
          <p>
            美和ロックは、取付ねじが緩んだまま使い続けると、ハンドルが外れて転倒したり、扉の開け閉めができなくなったりするおそれがあるとして、使用頻度の高い扉は定期的な点検と増し締めを勧めています。締めるときは呼び2番のドライバーを使い、インパクトドライバーは使いません。
          </p>
          <p>
            締め直しても直らない、ハンドルが下がったまま戻らないといった場合は、錠ケース側の不具合の可能性があります。交換の判断は<a href="/doorknob-koukan/" className="text-primary underline">ドアノブ・ラッチの故障と交換の基礎知識</a>をご覧ください。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.safe}>美和ロック「製品のご注意・お手入れ方法」</Ext>、<Ext href={SRC.faqHazure}>美和ロック よくある質問「ドアノブが外れそうです。対処方法を教えてください。」</Ext>（いずれも2026年11月9日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "緩んでいるかどうかの確かめ方",
          body: (
            <>
              <p>
                美和ロックが案内している点検の方法は、ハンドルやノブを上下に揺する、または内外に押し引きすることです。ガタつきがある、ねじの頭が飛び出してきている、という場合は取付ねじの増し締めを行います。
              </p>
              <p>
                開け閉めのたびに力が加わる扉は、ねじが少しずつ緩みます。ハンドルにぶら下がる、手すり代わりに使うといった使い方は、取り付けの狂いや錠前の破損につながるおそれがあると同社は注意しています。
              </p>
              <p className="text-xs text-text-muted">出典：<Ext href={SRC.safe}>美和ロック「製品のご注意・お手入れ方法」</Ext>（2026年11月9日確認）</p>
            </>
          ),
        },
        {
          h2: "締め直すネジは2か所",
          body: (
            <>
              <div className="bg-white rounded-xl border border-black/10 p-4">
                <p className="font-bold text-text-primary mb-1">1. レバーハンドルの止めネジ（イモネジ）</p>
                <p>
                  ハンドルの根元の側面にある小さな固定ネジです。ここが緩むとハンドルが抜けてしまいます。ドライバーか六角レンチで締め直します。
                </p>
              </div>
              <div className="bg-white rounded-xl border border-black/10 p-4">
                <p className="font-bold text-text-primary mb-1">2. 座（金具）の内側の取付ネジ</p>
                <p>
                  ドアの内側と外側から挟み込んでいる貫通ビスです。ここが緩むとノブ全体がガタつき、外れやすくなります。カバー（化粧座）を外し、左右の固定ビスを均等に締め直します。
                </p>
              </div>
              <p>
                座にネジが見えないタイプもあります。美和ロックのFAQでは、ノブの中に鍵穴がある機種は多くの場合、室内側の座を反時計方向に回すのが取り外しの始まりで、ほかに室内側のノブの小さな穴に押しピンを差し込みながら外す機種や、ノブやハンドルを先に外す機種もあるとしています。錠の種類が分からないときや外せないときは、同社のサービス代行店（SD店）に問い合わせるよう案内しています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.faqHazure}>美和ロック よくある質問「ドアノブが外れそうです。対処方法を教えてください。」</Ext>、<Ext href={SRC.faqTorihazushi}>同「ドアノブを自分で交換したいのですが、取り外し方を教えてください。」</Ext>（いずれも2026年11月9日確認）
              </p>
            </>
          ),
        },
        {
          h2: "締め付けの強さ（美和ロックの推奨トルク）",
          body: (
            <>
              <p>
                締め付けが弱いと早いうちにまた緩み、強すぎると作動に支障が出たり、ねじが外せなくなったり折れたりします。美和ロックは小ねじの推奨締め付けトルクを次のとおり公開しています。呼び2番のドライバーを使う前提の値です。
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left whitespace-nowrap">ねじ</th>
                      <th className="border border-border px-3 py-2 text-left">使われる場所</th>
                      <th className="border border-border px-3 py-2 text-left">推奨締め付けトルク</th>
                    </tr>
                  </thead>
                  <tbody>
                    {torque.map(([a, b, c]) => (
                      <tr key={a}>
                        <td className="border border-border px-3 py-2 whitespace-nowrap">{a}</td>
                        <td className="border border-border px-3 py-2">{b}</td>
                        <td className="border border-border px-3 py-2 font-bold text-text-primary">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                トルクを測る工具がない場合は、手回しのドライバーで締め、締めすぎないことを優先してください。締め付けトルクが高いインパクトドライバーは使わないよう、同社は明記しています。
              </p>
              <p className="text-xs text-text-muted">出典：<Ext href={SRC.safe}>美和ロック「製品のご注意・お手入れ方法」取り付けねじのゆるみにご注意ください</Ext>（2026年11月9日確認）</p>
            </>
          ),
        },
        {
          h2: "締め直しで直らないときは",
          body: (
            <>
              <p>
                美和ロックは、ハンドルが垂れ下がって水平に戻らない症状の原因として、ハンドルや座の取り付きの曲がりや、経年変化によるバネの劣化など錠ケースに起因するものが多いとしています。この場合は取付の修正や錠ケースの交換が必要になり、同社はサービス代行店（SD店）への相談を案内しています。
              </p>
              <p>
                また同社のFAQでは、日本ロック工業会が錠の耐用年数を一般錠で10年、電気錠で7年としていることを紹介し、耐用年数を超える場合は取り換えを検討するよう案内しています。年数の考え方は<a href="/maker/taiyou-nensu/" className="text-primary underline">錠の耐用年数</a>にまとめています。
              </p>
              <p>
                賃貸住宅のドアノブは物件の設備です。ネジの増し締めで直らない場合は、交換や修理を自分で手配する前に、大家・管理会社へ連絡してください。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.faqTare}>美和ロック よくある質問「ハンドルが垂れ下がっていて、水平に戻りません。修理できますか？」</Ext>、<Ext href={SRC.faqHazure}>同「ドアノブが外れそうです。対処方法を教えてください。」</Ext>（いずれも2026年11月9日確認）
              </p>
            </>
          ),
        },
      ]}
      cta={{
        h2: "締め直しで直らない・ドアが開かないときは",
        text: "ラッチが引っ込まない、ドアが開かない状態になった場合は、無理に操作せず専門業者に相談してください。作業前に部品代・作業費・出張料を含む総額を確認してから依頼します。",
        links: [
          { href: "/agents/", label: "鍵業者を比較する →" },
          { href: "/doorknob-koukan/", label: "ドアノブ交換の基礎知識" },
        ],
      }}
      faqTitle="ドアノブの緩みのよくある質問"
      faqs={faqs}
      related={[
        { href: "/doorknob-koukan/", label: "ドアノブ・ラッチの故障と交換", desc: "交換が必要な症状と採寸のポイント" },
        { href: "/shitsunai-toilet-kagi/", label: "室内ドア・トイレの鍵が開かないとき", desc: "非常解錠装置の使い方" },
        { href: "/maker/taiyou-nensu/", label: "錠の耐用年数", desc: "交換を検討する年数の目安" },
        { href: "/door-closer/", label: "ドアクローザーの不調と対処法", desc: "閉まり方がおかしいときの切り分け" },
      ]}
    />
  );
}
