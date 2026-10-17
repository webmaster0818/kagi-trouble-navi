import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "鍵穴に油・潤滑スプレーを差してしまったときの対処｜メーカーが使用を控えるよう案内する理由と専用潤滑剤 | 鍵トラブルナビ",
  description:
    "鍵の動きが悪いからと、鍵穴に機械油や市販の潤滑スプレーを差してしまったときの対処をご説明します。錠前メーカーの美和ロックが油や合成潤滑油の使用を控えるよう案内している理由、掃除機での清掃と鍵穴専用潤滑剤への切り替え、業者に相談する目安までまとめました。",
  alternates: { canonical: "https://kagi-trouble-navi.com/kagiana-abura/" },
};

const items1 = [{"title": "これ以上、油や潤滑スプレーを差さない", "desc": "動きが悪いからといって追加で差すと、内部に付着する油分が増えます。まずは使用を止めてください。"}, {"title": "掃除機で鍵穴のごみを吸い出す", "desc": "掃除機の吸い口を鍵穴に当て、左右に振りながら内部のごみを吸い出します。美和ロックは、パソコンのキーボード用のエアダスターでもよいと案内しています。"}, {"title": "鍵を清掃する", "desc": "鍵に付いた油分や汚れを布で拭き取り、古い歯ブラシなどで軽く掃除します。ディンプルキーはくぼみに汚れがたまりやすいため、丁寧にブラッシングしてください。"}, {"title": "鍵穴専用の潤滑剤、または鉛筆の黒鉛を使う", "desc": "鍵穴専用の潤滑剤を少量スプレーするか、鍵の切り込み部分を鉛筆で強めになぞり、数回抜き差しします。黒鉛を使った場合は、終了後に鍵に付いた黒鉛を拭き取ってください。"}, {"title": "改善しない場合は業者に相談する", "desc": "清掃しても動きが改善しない場合は、内部で油分と汚れが固まっている可能性があります。無理に回し続けず、鍵業者やメーカーのサービス店に相談してください。"}];

const rows2 = [["機械油・食用油", "使用しない（埃が付いて内部で粘着する）"], ["市販の合成潤滑油（CRC、シリコンスプレーなど）", "使用しない（美和ロックが使用を控えるよう案内）"], ["鍵穴専用の潤滑剤", "使用する（使用中の鍵に合った錠前メーカーの専用品）"], ["鉛筆の黒鉛", "専用潤滑剤の代わりに使用できる（使用後は鍵を拭き取る）"]];

const rows3 = [["抜き差し・回転が軽くなった", "鍵穴のごみや油分の付着が主な原因だった", "以後は鍵穴専用の潤滑剤か鉛筆の黒鉛でお手入れを続ける"], ["少し改善したが引っかかりが残る", "内部に油分と汚れが残っている、鍵が摩耗している", "予備の鍵で動きを比べ、改善しなければ業者に相談"], ["扉を開けた状態なら軽く回る", "扉の建て付けに問題がある可能性（美和ロックの案内）", "扉の調整を業者に相談"], ["改善しない・鍵が途中までしか入らない", "内部の部品の変形や固着の可能性", "無理に回さず業者に相談"]];

const items4 = [{"title": "溶剤などで鍵穴を洗い流す", "desc": "油分を落とそうとして、溶剤やパーツクリーナーなどを自己判断で鍵穴に吹き付けるのは避けてください。シリンダーの材質や内部への影響が分からないためです。洗浄が必要と思われる場合は、業者に相談してください。"}, {"title": "固いまま力を入れて回す", "desc": "内部で部品の動きが妨げられた状態で無理に回すと、鍵が曲がったり折れたりするおそれがあります。折れた場合の対処は<a href=\"/kagi-ore/\" class=\"text-primary underline\">鍵が折れた時の対処法</a>で解説しています。"}, {"title": "針金などで内部をかき出す", "desc": "道具の先端が内部で引っかかったり折れたりすると、業者でも鍵を壊さずに対応することが難しくなります。"}];

const faqs = [{"q": "鍵穴にCRCを吹いてしまいました。すぐに壊れますか？", "a": "すぐに壊れるとは限りませんが、美和ロックは油や市販の合成潤滑油を差すと、埃が付いて内部で粘着し、作動不良や故障の原因になると案内しています。追加で差すのをやめ、掃除機などで鍵穴を清掃し、以後は鍵穴専用の潤滑剤を使ってください。"}, {"q": "鍵穴専用の潤滑剤はどこで買えますか？", "a": "美和ロックは、同社の鍵穴専用潤滑剤について、一部のホームセンターなどで取り扱いがあるほか、同社のサービス代行店（SD店）で取り扱っていると案内しています。在庫は店舗に直接ご確認ください。"}, {"q": "潤滑剤が手元にない場合はどうすればよいですか？", "a": "美和ロックは、鉛筆の黒鉛で代用できると案内しています。鍵の切り込み部分を鉛筆で強めになぞり、数回鍵穴に抜き差しした後、鍵に付いた黒鉛を拭き取ってください。"}, {"q": "清掃しても鍵が回りにくい場合はどうすればよいですか？", "a": "内部の部品の変形や鍵の摩耗が原因の場合もあります。無理に回さず、鍵業者に相談してください。扉を開けた状態でスムーズに回る場合は、扉の建て付けが原因の可能性もあります。"}, {"q": "シリコンスプレーは油ではないので、鍵穴に使ってもよいですか？", "a": "美和ロックは、鍵穴に差すのを控えるものとして、油とあわせて市販の合成潤滑油（CRC、シリコンスプレー）を挙げています。鍵穴には、使用中の鍵に合った錠前メーカーの鍵穴専用潤滑剤を使ってください。"}, {"q": "鍵穴のお手入れはどのくらいの頻度で行えばよいですか？", "a": "抜き差しが重い、引っかかるといった症状に気付いたときが目安です。ディンプルキーはくぼみに汚れがたまりやすいため、美和ロックは定期的なお手入れを勧めています。"}];

const related = [{"href": "/kagi-mawaranai/", "label": "鍵が回らない・回りにくい時の対処法"}, {"href": "/kagi-nukenai/", "label": "鍵が抜けない・刺さらないときの対処法"}, {"href": "/kagiana-touketsu/", "label": "鍵穴の凍結・異物で鍵が開かないとき"}, {"href": "/kagi-jumyou/", "label": "鍵の寿命は何年？"}, {"href": "/kagi-magatta/", "label": "鍵が曲がった・変形したときの対処"}, {"href": "/dimple-key/", "label": "ディンプルキーとは"}];

const sources = [{"label": "美和ロック「製品のご注意・お手入れ方法」", "url": "https://www.miwa-lock.co.jp/tec/support/safe.html", "date": "2026年10月17日確認"}, {"label": "美和ロック よくあるご質問「鍵が抜けにくい、挿しにくいのですが、どうすればいいですか？」", "url": "https://www.miwa-lock.jp/faq/show/339?site_domain=default", "date": "2026年10月17日確認"}, {"label": "美和ロック よくあるご質問「鍵穴専用潤滑剤 3069は 今使っている鍵穴に使用できますか？」", "url": "https://www.miwa-lock.jp/faq/show/67?site_domain=default", "date": "2026年10月17日確認"}, {"label": "美和ロック よくあるご質問「鍵を回すときに固いのですが、どうすればいいですか？」", "url": "https://www.miwa-lock.jp/faq/show/1463?site_domain=default", "date": "2026年10月17日確認"}, {"label": "美和ロック よくあるご質問「鍵穴専用潤滑剤 3069は DIYショップ、ホームセンター等で購入可能ですか？」", "url": "https://www.miwa-lock.jp/faq/show/66?site_domain=default", "date": "2026年10月17日確認"}];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};
const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kagi-trouble-navi.com/" },
    { "@type": "ListItem", position: 2, name: "鍵穴に油を差してしまったとき" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "鍵穴に油・潤滑スプレーを差してしまったときの対処法",
  description: "鍵の動きが悪いからと、鍵穴に機械油や市販の潤滑スプレーを差してしまったときの対処をご説明します。錠前メーカーの美和ロックが油や合成潤滑油の使用を控えるよう案内している理由、掃除機での清掃と鍵穴専用潤滑剤への切り替え、業者に相談する目安までまとめました。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-10-17",
  dateModified: "2026-10-17",
};

export default function KagianaAburaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />

      <main className="flex-1">
        <div className="bg-surface-alt border-b border-black/5">
          <div className="max-w-4xl mx-auto px-4 py-3 text-xs text-text-muted">
            <a href="/" className="hover:text-primary">ホーム</a>
            <span className="mx-1.5">/</span>
            <span className="text-text-secondary">鍵穴に油を差してしまったとき</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            鍵穴に油・潤滑スプレーを差してしまったときの対処法
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年10月17日</p>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">油を差してしまった場合は、それ以上差さずに鍵と鍵穴を清掃し、以後は鍵穴専用の潤滑剤に切り替えてください。</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: "美和ロックは公式サイトで、<strong>鍵穴に油や市販の合成潤滑油（CRC、シリコンスプレー）などを差すことを控えるよう</strong>案内しています。油に埃が付いて鍵穴の内部で粘着し、作動不良や故障の原因になるためです。差してしまった後は、<strong>掃除機などで鍵穴のごみを吸い出し、鍵を清掃したうえで、鍵穴専用の潤滑剤か鉛筆の黒鉛を使う</strong>方法に切り替えてください。改善しない場合は、鍵業者やメーカーのサービス店に相談します。" }} />
          </div>

          <p className="text-sm text-text-secondary leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: "鍵が回りにくい、抜き差しが重いと感じたとき、身近にある機械油や潤滑スプレーを鍵穴に吹き付けてしまう方は少なくありません。差した直後は動きが軽くなることもありますが、時間がたつにつれて、かえって動きが悪くなる場合があります。" }} />
          <p className="text-sm text-text-secondary leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: "この記事では、鍵穴に油を差してはいけない理由、差してしまった後の対処の手順、業者に相談する目安を、錠前メーカーの公式情報にもとづいてご説明します。鍵が回らない原因全般は<a href=\"/kagi-mawaranai/\" class=\"text-primary underline\">鍵が回らない・回りにくい時の原因と対処法</a>で解説しています。" }} />

          <h2 className="text-xl font-bold text-text-primary mb-4">鍵穴に油を差してはいけない理由</h2>
          <div className="bg-white rounded-xl border border-black/10 p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: "美和ロックの「製品のご注意・お手入れ方法」には、「鍵穴に、油や市販の合成潤滑油（CRC、シリコンスプレー）などをさすのは絶対おやめください。油に埃がつき鍵穴内部で粘着するため、すぐに作動不良になり、故障の原因になります。」と記載されています。" }} />
            <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: "シリンダーの内部には、鍵の形に合わせて動く小さな部品（ピンなど）が並んでいます。油分が付いた状態で埃や金属粉が入り込むと、部品の周りで固まり、部品の動きを妨げます。差した直後に動きが軽くなっても、その後に症状が悪化するのはこのためです。" }} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-4">油を差してしまった後の対処手順</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "次の手順は、美和ロックが案内している鍵・鍵穴のお手入れ方法にもとづいています。ほかのメーカーの錠前をお使いの場合は、各メーカーの案内もあわせてご確認ください。" }} />
          <div className="space-y-4 mb-10">
            {items1.map((c, i) => (
              <div key={i} className="bg-surface-alt rounded-xl p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{i + 1}. {c.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: c.desc }} />
              </div>
            ))}
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵穴に使うもの・使わないもの</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm bg-white rounded-xl border border-black/10">
              <thead className="bg-surface-alt"><tr><th className="text-left font-bold text-text-primary px-3 py-2 border-b border-black/10">種類</th><th className="text-left font-bold text-text-primary px-3 py-2 border-b border-black/10">鍵穴への使用</th></tr></thead>
              <tbody>
                {rows2.map((r, i) => (
                  <tr key={i} className="border-b border-black/5 align-top">
                    {r.map((c, j) => (
                      <td key={j} className={j === 0 ? "px-3 py-2 font-medium text-text-primary whitespace-nowrap" : "px-3 py-2 text-text-secondary leading-relaxed"} dangerouslySetInnerHTML={{ __html: c }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: "美和ロックは、鍵穴用潤滑剤について、使用中の鍵・シリンダーに合った錠前メーカーの専用品を使うよう案内しています。同社の場合、U9・UR・PR・LBシリンダー用の「3069（S）」と、全シリンダー対応の「クリアスムーサス」があります。" }} />
          <h2 className="text-xl font-bold text-text-primary mb-4">清掃後の状態別の判断</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm bg-white rounded-xl border border-black/10">
              <thead className="bg-surface-alt"><tr><th className="text-left font-bold text-text-primary px-3 py-2 border-b border-black/10">清掃後の状態</th><th className="text-left font-bold text-text-primary px-3 py-2 border-b border-black/10">考えられること</th><th className="text-left font-bold text-text-primary px-3 py-2 border-b border-black/10">次の対応</th></tr></thead>
              <tbody>
                {rows3.map((r, i) => (
                  <tr key={i} className="border-b border-black/5 align-top">
                    {r.map((c, j) => (
                      <td key={j} className={j === 0 ? "px-3 py-2 font-medium text-text-primary whitespace-nowrap" : "px-3 py-2 text-text-secondary leading-relaxed"} dangerouslySetInnerHTML={{ __html: c }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: "上記は美和ロックが案内している鍵が回りにくい原因（ごみ・埃、内部の部品の変形、鍵の摩耗・傷、扉の建て付け）にもとづいて整理したものです。" }} />
          <h2 className="text-xl font-bold text-text-primary mb-4">避けるべき行動</h2>
          <div className="space-y-4 mb-10">
            {items4.map((c, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-600 mb-1.5">{i + 1}. {c.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: c.desc }} />
              </div>
            ))}
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-4">業者に相談する目安</h2>
          <div className="bg-surface-alt rounded-xl p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: "清掃しても鍵の抜き差しや回転が改善しない場合、鍵が途中までしか入らない場合、回すときに強い引っかかりがある場合は、鍵業者に相談してください。内部の清掃で改善する場合もあれば、シリンダーの交換が必要になる場合もあります。" }} />
            <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: "美和ロックは、鍵が回りにくい原因として、鍵穴のごみや埃のほか、内部の部品の変形や鍵の摩耗・傷を挙げています。また、扉を開けた状態で鍵がスムーズに回る場合は、扉の建て付けに問題がある可能性があるとしています。交換の目安は<a href=\"/kagi-jumyou/\" class=\"text-primary underline\">鍵の寿命は何年？</a>、費用の目安は<a href=\"/ryokin/\" class=\"text-primary underline\">鍵開け・鍵交換の料金相場</a>をご覧ください。" }} />
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">鍵穴の不調に対応できる業者を探す</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">清掃で改善しない場合は、無理に使い続けず、総額の見積もりを確認したうえで業者に相談してください。</p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵業者を比較する →</a>
              <a href="/kagi-mawaranai/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">鍵が回らないときの対処法</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を詳しく見る</a>
            </div>
          </div>

          <h2 className="text-xl font-bold text-text-primary mb-4">鍵穴の潤滑に関するよくある質問</h2>
          <div className="space-y-3 mb-10">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-xl border border-black/10 overflow-hidden">
                <summary className="px-5 py-4 cursor-pointer font-medium text-text-primary text-sm">Q. {f.q}</summary>
                <div className="px-5 pb-4 text-sm text-text-secondary leading-relaxed">A. {f.a}</div>
              </details>
            ))}
          </div>

          <h2 className="text-xl font-bold text-text-primary mb-4">出典・確認日</h2>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-text-muted leading-relaxed mb-10">
            {sources.map((s, i) => (
              <li key={i}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary underline">{s.label}</a>（{s.date}）
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-text-primary mb-4">関連記事</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {related.map((l, i) => (
              <a key={i} href={l.href} className="bg-white rounded-xl border border-black/10 p-4 text-sm font-medium text-text-primary hover:border-primary/40 hover:text-primary transition-colors">
                {l.label} →
              </a>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
