import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "古い鍵の正しい処分方法｜個人情報としての扱いと自治体分別の考え方 | 鍵トラブルナビ",
  description:
    "使わなくなった古い鍵の処分方法を一般知識として解説します。鍵は住所と結びつくと合鍵を作られるおそれがある「個人情報に近いもの」であること、処分前に行う使用先の確認、金属ごみ・不燃ごみなど自治体ごとに異なる分別区分の確認方法、賃貸退去時の鍵の返却ルール、電子キーの扱いを紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/kagi-shobun/" },
};

const basics = [
  {
    title: "鍵は「個人情報に近いもの」として扱うのが基本",
    desc: "鍵そのものに住所は書かれていませんが、鍵には刻み（キーの山谷）や鍵番号という「複製に必要な情報」が物理的に含まれています。住所が分かる書類やキーホルダーと一緒に捨てた場合、拾った第三者が住まいと鍵を結びつけて合鍵を作る可能性は否定できません。そのため古い鍵は、単なる金属片ではなく個人情報に近いものとして扱うことが基本です。特に、まだ使っている錠の合鍵・スペアキーを誤って捨てないこと、住所に結びつく物と一緒に捨てないことの2点が、処分の大原則です。",
  },
  {
    title: "処分前に必ず「どの錠の鍵か」を確認する",
    desc: "処分で最も避けるべき失敗は、不要だと思って捨てた鍵が、実は現在使用中の錠の鍵だったというケースです。引き出しに溜まった用途不明の鍵は、捨てる前に自宅・実家・物置・自転車・スーツケース・ロッカー・ポストなど思い当たる錠で一通り試し、どこの鍵かを確認してください。どうしても使用先が分からない鍵は、しばらく「保留」として封筒に日付を書いて保管し、一定期間使わなかった場合に処分するという二段階の方法をとると、誤処分を防げます。錠前を交換した直後の古い鍵は、交換した錠と一緒に処分して構いません。",
  },
  {
    title: "分別区分は自治体ごとに異なるため、一般論で判断しない",
    desc: "金属製の鍵は、多くの自治体で不燃ごみ・金属ごみなどの区分で収集される小型金属類に該当しますが、分別区分の名称も出し方のルールも自治体によって異なります。プラスチックの頭部が付いた鍵や、電池を内蔵する電子キー・スマートキーは、金属部分と電子部品で扱いが分かれる場合もあります。そのため「鍵は金属ごみ」と一般論で判断せず、お住まいの自治体の分別ガイド（ホームページや分別アプリ、ごみ分別冊子）で「鍵」の項目を確認してから出してください。電子キーの電池は、電池としての分別ルールに従って外して出します。",
  },
  {
    title: "賃貸物件の鍵は「処分」ではなく「返却」するもの",
    desc: "賃貸住宅の鍵は借主の持ち物ではなく、物件設備の一部です。退去時には、入居時に受け取った鍵を、自分で作った合鍵も含めてすべて貸主・管理会社に返却するのが原則であり、自己判断で処分してはいけません。合鍵を申告せずに手元に残すことは、次の入居者の防犯に関わる問題になります。紛失した鍵がある場合は正確に申告し、契約に沿った対応（鍵交換費用の負担など）をご確認ください。退去時の手続きの全体像は、引っ越し時の鍵チェックリストの記事で整理しています。",
  },
];

const checkSteps = [
  {
    title: "鍵の使用先を確認し、不要であることを確定する",
    desc: "思い当たる錠で試す、家族に心当たりを聞く、鍵番号やメーカー刻印から用途を推測するなどの方法で使用先を確認します。使用中の錠の鍵であれば処分せずに保管し、錠自体を交換・撤去済みであれば処分の対象です。判断がつかない鍵は封筒に入れて日付を書き、保留扱いにしてください。",
  },
  {
    title: "個人情報と切り離す",
    desc: "住所の分かるキーホルダー・タグ・メモ類は必ず外します。鍵番号が刻印されたタグ（純正キーの番号札など）は、その番号から合鍵を作れる場合があるため、鍵本体とは別のごみ回収日に分けて捨てるなど、一緒に拾われないよう工夫することをおすすめします。",
  },
  {
    title: "復元しにくい状態にしてから捨てる",
    desc: "より慎重に処分する場合は、ペンチで曲げる、金属やすりで刻みを削る、複数回に分けて別の日に捨てるなど、拾われても使いにくい状態にする方法があります。硬い鍵を無理に切断しようとしてけがをしないよう、無理のない範囲で行ってください。電子キーは電池を外し、可能であれば本体を破壊してから分別に従って捨てます。",
  },
  {
    title: "自治体の分別ルールを確認して出す",
    desc: "お住まいの自治体の分別ガイドで「鍵」を調べ、指定の区分（不燃ごみ・金属ごみなど）と収集日に従って出します。分からない場合は、自治体の窓口や分別アプリでご確認ください。オートロックの共用キーやディンプルキーの登録制カードなど、管理会社・メーカーの管理下にある鍵は、自治体ごみではなく発行元への返却が必要な場合があるため、先に発行元へ確認してください。",
  },
];

const ngActions = [
  {
    title: "住所の分かる物と一緒に鍵を捨てる",
    desc: "宛名付きの郵便物や住所入りのタグと鍵を同じ袋で捨てるのは、住まいと鍵を結びつける情報をセットで手放す行為です。個人情報と鍵は必ず切り離して処分してください。",
  },
  {
    title: "使用先が不明なまま「たぶん不要」で捨てる",
    desc: "捨てた後で実家の鍵や物置の鍵だったと判明すると、開けられない・防犯上の不安が残るという二重の問題になります。確認できない鍵は、保留期間を設けてから処分することをおすすめします。",
  },
  {
    title: "賃貸の鍵や合鍵を自己判断で処分・保持する",
    desc: "賃貸の鍵は退去時に合鍵も含めて全数返却が原則です。自己判断で捨てた場合は紛失扱いになるおそれがあり、申告せずに持ち続けることは次の入居者との間でトラブルの原因になります。必ず貸主・管理会社の指示に従ってください。",
  },
  {
    title: "電子キーを電池ごと不燃ごみに混ぜる",
    desc: "電池を内蔵したまま捨てると、収集・処理の過程で発火リスクとなるため、多くの自治体で電池は分別が求められています。電子キー・スマートキーは電池を外し、電池は自治体の電池回収ルールに従って出してください。",
  },
];

const faqs = [
  {
    q: "鍵は何ごみとして捨てればよいですか？",
    a: "金属製の鍵は多くの自治体で不燃ごみや金属ごみといった区分に該当しますが、区分の名称や出し方のルールは自治体ごとに異なります。お住まいの自治体の分別ガイドやごみ分別アプリで「鍵」を確認してから出してください。プラスチック頭部付きの鍵や電池内蔵の電子キーは扱いが分かれる場合があるため、迷った場合は自治体の窓口にお問い合わせください。",
  },
  {
    q: "鍵をそのまま捨てるのは危険ですか？",
    a: "鍵単体が拾われても、どこの錠の鍵かが分からなければ悪用は困難です。危険度が上がるのは、住所の分かる物や鍵番号のタグと一緒に捨てた場合です。処分時は個人情報と切り離すことを最優先にし、心配な場合は、ペンチで曲げる・刻みを削る・複数回に分けて捨てるなど、復元しにくくする処理を加えることをおすすめします。",
  },
  {
    q: "引っ越しで前の家の鍵が手元に残っています。どうすべきですか？",
    a: "賃貸物件だった場合は、合鍵も含めて貸主・管理会社へ返却するのが原則です。返し忘れに気づいた場合は、速やかに連絡してください。持ち家を売却した場合は、引き渡し時にすべての鍵を買主へ渡すのが基本です。なお、中古住宅を購入した方や新たに入居した方は、前の所有者・入居者の合鍵が残っている可能性を考慮し、鍵交換を検討することをおすすめします。",
  },
  {
    q: "スマートキーや電子キーはどう処分すればよいですか？",
    a: "まず内蔵電池を外し、電池は自治体の電池回収ルールに従って出します。本体は自治体の分別区分（小型家電回収の対象になる場合もあります）を確認してください。車のスマートキーは車両に登録された鍵情報の抹消をディーラーに相談できる場合があります。賃貸物件のスマートロック用キーやカードキーは、管理会社への返却が必要なことが多いため、自己判断で捨てず先に確認してください。",
  },
];

const relatedLinks = [
  { href: "/hikkoshi-kagi-checklist/", label: "引っ越し時の鍵チェックリスト", desc: "退去・入居時の鍵まわりの手順" },
  { href: "/kagi-koukan-timing/", label: "鍵交換のタイミングと目安", desc: "交換を検討すべきサインと考え方" },
  { href: "/aikagi/", label: "合鍵作成の基礎知識", desc: "合鍵の管理と作成時の注意点" },
  { href: "/key-box-kanri/", label: "キーボックスでの鍵管理", desc: "スペアキーの安全な保管方法" },
];

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
    { "@type": "ListItem", position: 2, name: "古い鍵の正しい処分方法" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "古い鍵の正しい処分方法｜個人情報としての扱いと自治体分別の考え方",
  description: "古い鍵を捨てる前の使用先確認、個人情報と切り離す処分手順、自治体ごとに異なる分別区分の確認方法、賃貸退去時の返却原則を一般知識として解説します。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-10",
  dateModified: "2026-08-10",
};

export default function KagiShobunPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />


      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-surface-alt border-b border-black/5">
          <div className="max-w-4xl mx-auto px-4 py-3 text-xs text-text-muted">
            <a href="/" className="hover:text-primary">ホーム</a>
            <span className="mx-1.5">/</span>
            <span className="text-text-secondary">古い鍵の正しい処分方法</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            古い鍵の正しい処分方法｜個人情報としての扱いと自治体分別の考え方
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月10日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">古い鍵の処分の要点</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              古い鍵は<strong>「複製に必要な情報を含む、個人情報に近いもの」</strong>として扱うことが基本です。処分の手順は、まず<strong>どの錠の鍵かを確認して不要であることを確定</strong>させ、住所の分かる物や鍵番号タグと切り離します。心配な場合は曲げる・削るなど復元しにくい状態にしてから、<strong>お住まいの自治体の分別ガイドで区分（不燃ごみ・金属ごみ等は自治体により異なります）を確認して</strong>出します。電子キーは電池を外して分別してください。<strong>賃貸物件の鍵は、合鍵も含めて退去時に全数返却するのが原則</strong>であり、自己判断で処分してはいけません。
            </p>
          </div>

          {/* 本文解説 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵の処分の基礎知識（4つのポイント）</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            鍵の処分は「捨て方」より前に「捨ててよい鍵か」「誰に返す鍵か」の判断が大切です。防犯・分別・契約の3つの視点で整理してください。
          </p>
          <div className="space-y-3 mb-10">
            {basics.map((t, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-4">
                <p className="font-bold text-primary text-sm mb-1.5">
                  <span className="inline-block bg-surface-alt rounded px-2 py-0.5 text-xs font-bold text-text-primary mr-2">基礎{i + 1}</span>
                  {t.title}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* 自分でできること */}
          <h2 className="text-xl font-bold text-text-primary mb-4">安全な処分の4ステップ</h2>
          <ol className="space-y-3 mb-10">
            {checkSteps.map((s, i) => (
              <li key={i} className="flex gap-3 bg-white rounded-xl border border-black/10 p-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">{i + 1}</span>
                <div>
                  <p className="font-bold text-text-primary text-sm mb-1">{s.title}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* NG行動 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵の処分で避けるべき行動</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">{n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 業者判断 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">処分とあわせて検討する「鍵交換」という選択肢</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            古い鍵を処分する場面の多くは、錠前の交換・引っ越し・持ち物の整理といった生活の節目です。特に<strong>中古住宅への入居時や、合鍵の所在が分からなくなったとき</strong>は、鍵を捨てるだけでなく、錠前ごと交換して出回っている合鍵を無効化することが、本質的な防犯対策になります。交換を検討すべきサインは<a href="/kagi-koukan-timing/" className="text-primary underline">鍵交換のタイミングと目安</a>を、引っ越し前後の鍵まわりの手順は<a href="/hikkoshi-kagi-checklist/" className="text-primary underline">引っ越し時の鍵チェックリスト</a>を参考にしてください。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            鍵交換を業者に依頼する場合は、作業前に部品代・作業費・出張料を含む総額の見積もりを必ずご確認ください。費用の目安は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、依頼先の検討は<a href="/agents/" className="text-primary underline">鍵業者の比較</a>でご確認いただけます。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">合鍵の所在が不明な場合の鍵交換の検討</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              出回っている合鍵は、手元の鍵を捨てても無効にはなりません。不安がある場合は、錠前を交換することが確実な対策です。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵の処分のよくある質問</h2>
          <div className="space-y-3 mb-10">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-xl border border-black/10 overflow-hidden">
                <summary className="px-5 py-4 cursor-pointer font-medium text-text-primary text-sm">Q. {f.q}</summary>
                <div className="px-5 pb-4 text-sm text-text-secondary leading-relaxed">A. {f.a}</div>
              </details>
            ))}
          </div>

          {/* 関連記事 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedLinks.map((r, i) => (
              <a key={i} href={r.href} className="bg-white rounded-xl border border-black/10 p-4 hover:border-primary/40 transition-colors">
                <p className="font-bold text-primary text-sm mb-1">{r.label}</p>
                <p className="text-xs text-text-muted leading-relaxed">{r.desc}</p>
              </a>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
