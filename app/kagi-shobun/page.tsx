import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "古い鍵の正しい処分方法｜個人情報としての扱いと自治体分別の考え方 | 鍵トラブルナビ",
  description:
    "使わなくなった古い鍵の処分方法を一般知識として解説。鍵は住所と結びつくと合鍵を作られ得る「個人情報に近いもの」であること、処分前にやるべき使用先の確認、金属ごみ・不燃ごみなど自治体ごとに異なる分別区分の確認方法、賃貸退去時の鍵の返却ルール、電子キーの扱いを紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/kagi-shobun/" },
};

const basics = [
  {
    title: "鍵は「個人情報に近いもの」として扱うのが基本",
    desc: "鍵そのものに住所は書かれていませんが、鍵には刻み（キーの山谷）や鍵番号という「複製に必要な情報」が物理的に含まれています。住所が分かる書類やキーホルダーと一緒に捨てれば、拾った人が住まいと鍵を結びつけて合鍵を作れてしまう可能性は否定できません。そのため古い鍵は、単なる金属片ではなく個人情報に近いものとして扱うのが基本姿勢です。特にまだ使っている錠の合鍵・スペアキーを誤って捨てないこと、住所に結びつく物と一緒に捨てないこと、この2点が処分の大原則になります。",
  },
  {
    title: "処分前に必ず「どの錠の鍵か」を確認する",
    desc: "処分でいちばん怖い失敗は、「不要だと思って捨てた鍵が、実は現役の錠の鍵だった」というケースです。引き出しに溜まった正体不明の鍵は、捨てる前に自宅・実家・物置・自転車・スーツケース・ロッカー・ポストなど思い当たる錠で一通り試し、どこの鍵かを確認しましょう。どうしても使用先が分からない鍵は、しばらく「保留」として封筒に日付を書いて保管し、一定期間使わなかったら処分する、という二段構えにすると誤処分を防げます。錠前を交換した直後の古い鍵は、交換した錠と一緒に処分して構いません。",
  },
  {
    title: "分別区分は自治体ごとに異なる。「金属ごみ等」の一般論で決めつけない",
    desc: "金属製の鍵は、多くの自治体で不燃ごみ・金属ごみなどの区分で収集される小型金属類に該当しますが、分別区分の名称も出し方のルールも自治体によって異なります。プラスチックの頭部が付いた鍵や、電池を内蔵する電子キー・スマートキーは、金属部分と電子部品で扱いが分かれる場合もあります。したがって「鍵は金属ごみ」と一般論で決めつけず、お住まいの自治体の分別ガイド（ホームページや分別アプリ、ごみ分別冊子）で「鍵」の項目を確認してから出すのが正解です。電子キーの電池は、電池としての分別ルールに従って外して出します。",
  },
  {
    title: "賃貸の鍵は「処分」ではなく「返却」するもの",
    desc: "賃貸住宅の鍵は借主の持ち物ではなく、物件設備の一部です。退去時には、入居時に受け取った鍵を、自分で作った合鍵も含めてすべて貸主・管理会社に返却するのが原則で、勝手に処分してはいけません。合鍵の存在を黙って1本手元に残すことは、次の入居者の防犯に関わる問題になります。紛失した鍵がある場合は正直に申告し、契約に沿った対応（鍵交換費用の負担など）を確認しましょう。退去時にやるべきことの全体像は、引っ越し時の鍵チェックリストの記事で整理しています。",
  },
];

const checkSteps = [
  {
    title: "鍵の使用先を確認し、不要と確定させる",
    desc: "思い当たる錠で試す、家族に心当たりを聞く、鍵番号やメーカー刻印から用途の見当をつける、といった方法で使用先を確認します。使用先が現役の錠なら処分せず保管、錠自体を交換・撤去済みなら処分対象です。判断がつかない鍵は封筒に入れて日付を書き、保留扱いにしましょう。",
  },
  {
    title: "個人情報と切り離す",
    desc: "住所の分かるキーホルダー・タグ・メモ類は必ず外します。鍵番号が刻印されたタグ（純正キーの番号札など）は、その番号から合鍵を作れる場合があるため、鍵本体とは別のごみ回収日に分けて捨てるなど、セットで拾われない工夫をすると安心です。",
  },
  {
    title: "復元しにくい状態にしてから捨てる",
    desc: "より慎重を期すなら、ペンチで曲げる、金属やすりで刻みを削る、複数回に分けて別の日に捨てるなど、拾われても使いにくい状態にする方法があります。硬い鍵を無理に切断しようとしてケガをしないよう、無理のない範囲で行いましょう。電子キーは電池を外し、可能なら本体を破壊してから分別に従って捨てます。",
  },
  {
    title: "自治体の分別ルールを確認して出す",
    desc: "お住まいの自治体の分別ガイドで「鍵」を調べ、指定の区分（不燃ごみ・金属ごみなど）と収集日に従って出します。分からなければ自治体の窓口や分別アプリで確認を。オートロックの共用キーやディンプルキーの登録制カードなど、管理会社・メーカーの管理下にある鍵は、自治体ごみではなく発行元への返却が必要な場合があるため、先に発行元へ確認しましょう。",
  },
];

const ngActions = [
  {
    title: "住所の分かる物と一緒に鍵を捨てる",
    desc: "宛名付きの郵便物や住所入りのタグと鍵を同じ袋で捨てるのは、住まいと鍵を結びつける情報をセットで手放す行為です。個人情報と鍵は必ず切り離して処分しましょう。",
  },
  {
    title: "使用先が不明なまま「たぶん不要」で捨てる",
    desc: "捨てた後で実家の鍵や物置の鍵だったと判明すると、開けられない・防犯上の不安が残るという二重の問題になります。確認できない鍵は保留期間を設けてから処分する運用が安全です。",
  },
  {
    title: "賃貸の鍵や合鍵を自己判断で処分・保持する",
    desc: "賃貸の鍵は退去時に合鍵も含めて全数返却が原則です。勝手に捨てれば紛失扱いになり得ますし、黙って持ち続けるのは次の入居者との間でトラブルの元です。必ず貸主・管理会社の指示に従いましょう。",
  },
  {
    title: "電子キーを電池ごと不燃ごみに混ぜる",
    desc: "電池を内蔵したまま捨てると、収集・処理の過程で発火リスクとなるため、多くの自治体で電池は分別が求められています。電子キー・スマートキーは電池を外し、電池は自治体の電池回収ルールに従って出しましょう。",
  },
];

const faqs = [
  {
    q: "鍵は何ごみとして捨てればいいですか？",
    a: "金属製の鍵は多くの自治体で不燃ごみや金属ごみといった区分に該当しますが、区分の名称や出し方のルールは自治体ごとに異なります。お住まいの自治体の分別ガイドやごみ分別アプリで「鍵」を確認してから出してください。プラスチック頭部付きの鍵や電池内蔵の電子キーは扱いが分かれる場合があるため、迷ったら自治体の窓口に問い合わせるのが確実です。",
  },
  {
    q: "鍵をそのまま捨てるのは危険ですか？",
    a: "鍵単体が拾われても、どこの錠の鍵かが分からなければ悪用は困難です。危険度が上がるのは、住所の分かる物や鍵番号のタグと一緒に捨てた場合です。処分時は個人情報と切り離すことを最優先にし、心配ならペンチで曲げる・刻みを削る・複数回に分けて捨てるなど、復元しにくくする一手間を加えると安心です。",
  },
  {
    q: "引っ越しで前の家の鍵が手元に残っています。どうすべきですか？",
    a: "賃貸だった場合は、合鍵も含めて貸主・管理会社へ返却するのが原則です。返し忘れに気づいたら速やかに連絡しましょう。持ち家を売却した場合は、引き渡し時に全ての鍵を買主へ渡すのが基本です。なお、中古住宅を購入した側・新たに入居した側の視点では、前の所有者・入居者の合鍵が残っている可能性を考え、鍵交換を検討するのが防犯の定石です。",
  },
  {
    q: "スマートキーや電子キーはどう処分すればいいですか？",
    a: "まず内蔵電池を外し、電池は自治体の電池回収ルールに従って出します。本体は自治体の分別区分（小型家電回収の対象になる場合もあります）を確認してください。車のスマートキーは車両に登録された鍵情報の抹消をディーラーに相談できる場合があります。賃貸物件のスマートロック用キーやカードキーは、管理会社への返却が必要なことが多いため、自己判断で捨てず先に確認しましょう。",
  },
];

const relatedLinks = [
  { href: "/hikkoshi-kagi-checklist/", label: "引っ越し時の鍵チェックリスト", desc: "退去・入居時の鍵まわりの手順" },
  { href: "/kagi-koukan-timing/", label: "鍵交換のタイミングと目安", desc: "交換で出た古い鍵の扱いもここから" },
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
  description: "古い鍵を捨てる前の使用先確認、個人情報と切り離す処分手順、自治体ごとに異なる分別区分の確認方法、賃貸退去時の返却原則を一般知識として解説。",
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

      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">🔑</span>
            <span className="text-xl font-bold tracking-tight">鍵トラブルナビ</span>
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="/#trouble" className="hover:text-secondary transition-colors">トラブル別</a>
            <a href="/#service" className="hover:text-secondary transition-colors">サービス別</a>
            <a href="/ryokin/" className="hover:text-secondary transition-colors">料金相場</a>
            <a href="/ryokin-index/" className="hover:text-secondary transition-colors">料金インデックス</a>
            <a href="/kagi-koukan-timing/" className="hover:text-secondary transition-colors">交換の時期</a>
            <a href="/agents/" className="hover:text-secondary transition-colors">業者比較</a>
          </nav>
        </div>
      </header>

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
            <p className="font-bold text-primary mb-2">結論：使用先の確認→個人情報と切り離す→自治体の分別ガイドで区分を確認して処分。賃貸の鍵は処分ではなく全数返却</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              古い鍵は<strong>「複製に必要な情報を含む、個人情報に近いもの」</strong>として扱うのが基本です。処分の手順は、まず<strong>どの錠の鍵かを確認して不要と確定</strong>させ、住所の分かる物や鍵番号タグと切り離し、心配なら曲げる・削るなど復元しにくくしてから、<strong>お住まいの自治体の分別ガイドで区分（不燃ごみ・金属ごみ等は自治体により異なります）を確認して</strong>出します。電子キーは電池を外して分別を。<strong>賃貸の鍵は合鍵も含めて退去時に全数返却が原則</strong>で、自己判断で処分してはいけません。
            </p>
          </div>

          {/* 本文解説 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵の処分の基礎知識｜押さえておきたい4つのポイント</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            鍵の処分は「捨て方」より前に「捨ててよい鍵か」「誰に返す鍵か」の判断が大切です。防犯・分別・契約の3つの視点で整理しましょう。
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
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵の処分でやってはいけないNG行動</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">NG: {n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 業者判断 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">処分とあわせて考えたい「鍵交換」という選択肢</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            古い鍵を処分する場面の多くは、錠前の交換・引っ越し・持ち物の整理といった生活の節目です。特に<strong>中古住宅への入居時や、合鍵の所在が分からなくなったとき</strong>は、鍵を捨てるだけでなく錠前ごと交換して「出回っている合鍵を無効化する」ことが本質的な防犯対策になります。交換を検討すべきサインは<a href="/kagi-koukan-timing/" className="text-primary underline">鍵交換のタイミングと目安</a>を、引っ越し前後の鍵まわりの手順は<a href="/hikkoshi-kagi-checklist/" className="text-primary underline">引っ越し時の鍵チェックリスト</a>を参考にしてください。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            鍵交換を業者に依頼する場合は、作業前に部品代・作業費・出張費を含む総額見積もりを確認するのが鉄則です。費用感は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、依頼先の検討は<a href="/agents/" className="text-primary underline">鍵トラブル業者の比較</a>で確認できます。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">合鍵の所在が不明なら、処分より先に鍵交換の検討を</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              出回っている合鍵は、手元の鍵を捨てても無効になりません。不安があるなら錠前交換で仕切り直すのが確実です。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
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
