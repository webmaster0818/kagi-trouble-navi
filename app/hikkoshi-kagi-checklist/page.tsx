import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "引っ越し時の鍵チェックリスト｜旧居の返却・新居の防犯確認を漏れなく | 鍵トラブルナビ",
  description:
    "引っ越しで発生する鍵まわりの手続きをチェックリスト形式で解説。旧居では全ての鍵の返却と合鍵の回収、スマートロックの原状回復、新居では受け取り本数の確認、前入居者の合鍵リスクと鍵交換の検討まで、一般知識として整理します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/hikkoshi-kagi-checklist/" },
};

const kyuukyo = [
  {
    title: "貸与された鍵をすべて返却する",
    desc: "賃貸の退去では、入居時に受け取った鍵（玄関の鍵のほか、オートロックのキー、宅配ボックスや物置、ポストの鍵など）をすべて返却するのが原則です。入居時の契約書や受領書に本数が記載されていることが多いので、事前に照合しておきましょう。返し忘れや紛失があると、鍵交換費用（シリンダー交換代）を請求される場合があります。",
  },
  {
    title: "自分で作った合鍵を回収・処分する",
    desc: "入居中に自分で作った合鍵は、家族や恋人に渡した分も含めてすべて回収します。合鍵の扱いは契約によりますが、返却を求められるケースと、貸主立ち会いのもとで処分するケースがあります。回収漏れの合鍵が出回ったままだと、次の入居者の防犯上の問題になるだけでなく、トラブル時に自分が疑われる火種にもなります。",
  },
  {
    title: "後付けした鍵・スマートロックを原状回復する",
    desc: "工事不要タイプの補助錠や粘着固定式のスマートロックを付けていた場合は、取り外して粘着跡をきれいにし、原状回復した状態で退去します。ネジ固定式を許可を得て付けていた場合は、退去時の扱い（撤去か残置か）を管理会社と確認しておきましょう。無断で付けていた場合は、修繕費用の請求につながることがあります。",
  },
  {
    title: "鍵の返却方法と記録を確認する",
    desc: "退去立ち会いで手渡しするのが基本ですが、遠方への引っ越しなどで郵送返却になる場合は、普通郵便ではなく記録の残る方法で送り、いつ・何本返したかを控えておきましょう。「返した・返していない」の水掛け論は、敷金精算のトラブルで実際によくあるパターンです。",
  },
];

const shinkyo = [
  {
    title: "受け取った鍵の本数と種類を確認する",
    desc: "新居の入居時は、受け取った鍵の本数・種類（玄関・オートロック・ポスト・物置など）を契約書類の記載と照合し、受領書に正確な本数で署名します。この記録が退去時の返却基準になるため、実際の本数と書類が食い違ったまま進めるのは避けましょう。全ての鍵が実際に施解錠できるかの動作確認もこのタイミングで行います。",
  },
  {
    title: "前入居者の合鍵リスクを把握する",
    desc: "賃貸で鍵交換がされていない場合、前の入居者やその関係者が合鍵を持っている可能性を否定できません。鍵は返却されていても、入居中に作られた合鍵まで全て回収されたかは確認しようがないからです。入居時に「鍵交換済みか」「前入居者から引き継いだ鍵か」を管理会社に確認することが、新居の防犯の出発点になります。",
  },
  {
    title: "鍵交換の実施・費用負担を確認する",
    desc: "賃貸の鍵交換は、入居者負担の特約になっているケース、貸主が負担するケースなど契約によってさまざまです。交換されていない場合は、費用負担の交渉や、許可を得て自分で業者に交換を依頼する選択肢もあります。賃貸の鍵交換費用の負担の考え方は、賃貸の鍵交換費用の記事で詳しく解説しています。",
  },
  {
    title: "持ち家（中古住宅）は原則交換を検討する",
    desc: "中古住宅の購入では、前所有者・仲介・工事関係者など、これまで誰が鍵に触れてきたか把握できません。引き渡し後にシリンダー交換をしておくと、出回っている可能性のある合鍵を一括で無効にできます。新築でも工事期間中に使われた鍵がある場合は、引き渡し時に本設の鍵へ切り替わる仕組み（工事用キーの無効化）になっているかを確認すると安心です。",
  },
];

const ngActions = [
  {
    title: "合鍵を「記念に」残す・無断で処分する",
    desc: "退去後も旧居の合鍵を持ち続けるのは、防犯上の問題であると同時に、旧居で何かあった際に疑いを向けられかねない行為です。処分の仕方も自己判断せず、契約と管理会社の指示に従って返却・処分しましょう。",
  },
  {
    title: "鍵を普通郵便でそのまま送る",
    desc: "郵送返却が必要な場合に、記録の残らない方法で送るのはNGです。紛失すれば鍵交換費用の負担問題になり、届いた・届かないの争いにもなります。追跡できる方法で送り、送付記録と本数の控えを残しましょう。住所が分かる書類と鍵を同封するのも、紛失時のリスクを高めるため避けるべきです。",
  },
  {
    title: "新居の鍵の状態を確認しないまま住み始める",
    desc: "「鍵がかかるから大丈夫」と受け取ったまま使い始めると、交換されていない鍵・回っているだけで劣化したシリンダー・本数の食い違いに、あとから気づくことになります。入居初日に、交換の有無・全ての鍵の動作・受領本数の3点だけでも確認しておきましょう。",
  },
  {
    title: "賃貸で無断で鍵を交換する",
    desc: "前入居者の合鍵が不安でも、賃貸の錠前は貸主の所有物です。無断でシリンダーを交換すると契約違反となり、原状回復や再交換の費用を請求されるおそれがあります。交換したい場合は必ず管理会社・大家に相談し、許可と条件（業者指定・鍵の預け入れなど）を確認してから進めましょう。",
  },
];

const faqs = [
  {
    q: "退去時に返す鍵には何が含まれますか？",
    a: "入居時に貸与された鍵一式が対象です。玄関の鍵のほか、オートロックのキーやカードキー、ポスト・宅配ボックス・物置の鍵なども含まれます。加えて、入居中に自分で作った合鍵も回収して、契約に沿って返却・処分するのが原則です。本数は入居時の受領書と照合しましょう。",
  },
  {
    q: "旧居の鍵を1本なくしたまま退去するとどうなりますか？",
    a: "契約内容によりますが、防犯上の理由からシリンダー交換費用を請求されるのが一般的な取り扱いです。まずは正直に管理会社へ申告し、精算方法を確認しましょう。黙って退去すると、敷金精算の段階でトラブルになりやすくなります。紛失時の基本対応は鍵をなくしたときの記事も参考にしてください。",
  },
  {
    q: "新居の鍵交換は必ずすべきですか？",
    a: "賃貸では、入居時に鍵交換済みかを管理会社に確認するのが第一歩です。交換されていない場合、前入居者側の合鍵が残っている可能性を排除できないため、費用負担を確認のうえ交換を検討する価値があります。中古住宅の購入では、関係者の合鍵を一括で無効化できるため、引き渡し後の交換を検討するのが一般的な考え方です。",
  },
  {
    q: "引っ越しを機に防犯性の高い鍵に変えることはできますか？",
    a: "可能です。持ち家なら、ピッキングに強いディンプルキーやCP認定の錠前への交換を自由に選べます。賃貸では貸主の許可が前提ですが、交換のタイミングとして引っ越し直後は合理的です。どんな鍵を選ぶかは鍵交換のタイミングの記事、費用の考え方は料金相場ページを参考にしてください。",
  },
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
    { "@type": "ListItem", position: 2, name: "引っ越し時の鍵チェックリスト（旧居・新居）" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "引っ越し時の鍵チェックリスト｜旧居の返却・新居の防犯確認を漏れなく",
  description: "旧居の鍵返却・合鍵回収と、新居の受け取り確認・前入居者の合鍵リスク・鍵交換の検討をチェックリスト形式で解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-09",
  dateModified: "2026-08-09",
};

export default function HikkoshiKagiChecklistPage() {
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
            <span className="text-text-secondary">引っ越し時の鍵チェックリスト（旧居・新居）</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            引っ越し時の鍵チェックリスト｜旧居の返却・新居の防犯確認を漏れなく
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月9日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：旧居は「全部返す・合鍵も回収」、新居は「本数確認・交換済みか確認」が軸</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              引っ越しの鍵まわりは、旧居では<strong>貸与された鍵一式の返却・自作した合鍵の回収・後付け錠の原状回復</strong>、新居では<strong>受け取り本数と動作の確認・鍵交換済みかどうかの確認</strong>が軸になります。特に賃貸の新居で交換がされていない場合、前入居者側の合鍵が残っている可能性を排除できないため、費用負担を確認したうえで<strong>鍵交換を検討する</strong>のが防犯の定石です。無断交換や返却漏れは費用トラブルのもとになるので、必ず管理会社との確認を挟みましょう。
            </p>
          </div>

          <p className="text-sm text-text-secondary leading-relaxed mb-8">
            引っ越しは荷造りや住所変更に気を取られがちですが、鍵の扱いを誤ると、敷金精算のトラブルや新居の防犯不安という形であとから響いてきます。旧居側は「きちんと手放す」、新居側は「安全な状態で受け取る」がテーマです。この記事では、退去と入居それぞれで確認すべき鍵まわりの項目をチェックリスト形式で整理し、やってはいけない行動と業者に相談すべきケースまで一般知識として解説します。
          </p>

          {/* 旧居 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">旧居（退去時）のチェックリスト</h2>
          <div className="space-y-4 mb-10">
            {kyuukyo.map((t, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{i + 1}. {t.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* 新居 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">新居（入居時）のチェックリスト</h2>
          <div className="space-y-4 mb-10">
            {shinkyo.map((e, i) => (
              <div key={i} className="bg-surface-alt rounded-xl p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{i + 1}. {e.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>

          {/* 自分でできること */}
          <h2 className="text-xl font-bold text-text-primary mb-4">引っ越し前後に自分でできる準備</h2>
          <ol className="space-y-3 mb-10">
            {[
              "入居時の契約書・鍵受領書を探し、旧居の鍵の本数と合鍵の扱い（返却か処分か）を確認する。",
              "家族・パートナーに渡した合鍵を早めに回収する。退去直前だと回収が間に合わないことがあります。",
              "後付けした補助錠やスマートロックを外し、粘着跡の清掃まで済ませておく。",
              "新居の管理会社に「鍵交換済みか」「費用負担はどちらか」を入居前に確認しておく。",
              "入居当日に、受け取った全ての鍵で施解錠の動作確認をし、本数を受領書と照合する。",
            ].map((t, i) => (
              <li key={i} className="flex gap-3 bg-surface-alt rounded-xl p-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">{i + 1}</span>
                <span className="text-sm text-text-secondary leading-relaxed">{t}</span>
              </li>
            ))}
          </ol>

          {/* NG行動 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">やってはいけないNG行動</h2>
          <div className="space-y-4 mb-10">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-600 mb-1.5">NG{i + 1}. {n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 業者に頼む判断 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵業者に相談すべきケースと選び方</h2>
          <div className="bg-surface-alt rounded-xl p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              引っ越しに伴う鍵業者への依頼で多いのは、<strong>①新居（賃貸）の鍵交換を許可を得て実施する、②中古住宅の購入でシリンダーを一新する、③防犯性の高い鍵やスマートロックへ引っ越しを機にアップグレードする</strong>ケースです。緊急トラブルと違って日程に余裕があるため、複数社の相見積もりでじっくり比較できるのがこの場面の利点です。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              見積もりは<strong>部品代（シリンダー代）・作業費・出張費を含む総額</strong>で取り、希望する鍵の種類（ディンプルキーやCP認定品など）での提案が可能かも確認しましょう。賃貸の場合は、管理会社の指定業者・指定部品の条件があるかを先に確認しておくと、二度手間を防げます。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              交換費用の考え方は<a href="/ryokin/" className="text-primary underline">料金相場ページ</a>、業者の比較ポイントは<a href="/agents/" className="text-primary underline">業者比較ページ</a>にまとめています。
            </p>
          </div>

          {/* 内部リンクCTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">鍵交換に対応できる業者を比較する</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              引っ越しに伴う鍵交換は時間に余裕のある依頼です。見積もり無料で総額を提示し、希望の鍵種で提案してくれる業者を比較しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を詳しく見る</a>
              <a href="/chintai-kagi-koukan-hiyou/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">賃貸の鍵交換費用の考え方</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">引っ越しと鍵に関するよくある質問</h2>
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
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/chintai-kagi-koukan-hiyou/", label: "賃貸の鍵交換費用は誰が負担する？" },
              { href: "/kagi-koukan-timing/", label: "鍵交換のタイミングと判断基準" },
              { href: "/aikagi/", label: "合鍵作成の基礎知識" },
              { href: "/ryokin/", label: "鍵トラブルの料金相場" },
            ].map((l, i) => (
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
