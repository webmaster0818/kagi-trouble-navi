import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "サムターン回し・ピッキングの手口と対策｜今日からできる玄関の防犯強化 | 鍵トラブルナビ",
  description:
    "空き巣の代表的な侵入手口であるサムターン回しとピッキングの仕組みを防犯目的で解説。サムターンカバー・防犯サムターン・補助錠によるワンドアツーロックなど、自分でできる対策から鍵交換の判断基準まで紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/thumb-turn-taisaku/" },
};

const methods = [
  {
    title: "サムターン回しとは",
    desc: "サムターンとは、ドアの室内側に付いている施錠・解錠用のつまみのことです。サムターン回しは、ドアに開けた小さな穴やドアスコープ（のぞき穴）を外した穴、郵便受けの隙間などから特殊な工具を差し込み、室内側のつまみを直接回して解錠する手口を指します。鍵穴を攻撃するのではなく室内側のつまみを操作するため、どれだけ鍵穴側の防犯性が高くても、サムターン側が無防備だと侵入を許してしまう点が特徴です。ドアスコープや郵便受けが付いた玄関ドア、ガラス部分のあるドアは特に注意が必要とされています。",
  },
  {
    title: "ピッキングとは",
    desc: "ピッキングは、鍵穴に特殊な工具を差し込み、内部のピンを一本ずつ操作して正規の鍵と同じ状態を作り出して解錠する手口です。かつて広く普及していた旧式のピンシリンダーやディスクシリンダーは構造が単純で、熟練者であれば短時間で開けられてしまうことが問題になりました。現在の防犯性の高いシリンダー（ディンプルキータイプなど）はピンの数や配置が複雑化しており、ピッキングに対する抵抗力が大幅に高められています。自宅の鍵が古いギザギザの刻みキーのままであれば、シリンダー自体の見直しを検討する価値があります。",
  },
  {
    title: "その他の代表的な侵入手口",
    desc: "破壊的な手口としては、ドリルなどで鍵穴そのものを壊す「鍵穴壊し」、バールでドアと枠の隙間をこじ開ける「こじ破り」、ドアの隙間から金具でデッドボルト（かんぬき）を操作する手口などが知られています。また、住人の施錠忘れを狙った「無締り（むじまり）」からの侵入は、手口以前の問題として依然多いとされています。防犯対策は特定の手口だけでなく、施錠の習慣・鍵の性能・補助的な防犯部品を組み合わせて総合的に考えることが大切です。",
  },
];

const taisaku = [
  {
    title: "サムターンカバーを付ける",
    desc: "室内側のサムターンを覆うカバーで、工具を差し込まれてもつまみに届きにくくする防犯グッズです。両面テープやネジで取り付けるタイプが多く、ホームセンターや通販で入手できます。工事不要で賃貸住宅でも使いやすい、最も手軽なサムターン回し対策です。取り付けの際は、室内からの操作（特に緊急時の脱出）がしにくくならないか確認しましょう。",
  },
  {
    title: "防犯サムターンに交換する",
    desc: "つまみを押しながら回す、ボタンを操作しながら回すなど、単純に回すだけでは解錠できない構造のサムターンです。空回り機能付きや取り外し式のタイプもあります。錠前のメーカー・型番に適合する製品を選ぶ必要があるため、自分で交換する場合はドア側面の刻印（メーカー名・型番）を確認してから購入します。適合が分からない場合は鍵業者に相談するのが確実です。",
  },
  {
    title: "補助錠を付けてワンドアツーロックにする",
    desc: "1枚のドアに2つの錠を付ける「ワンドアツーロック」は、警察や防犯機関も推奨する基本的な考え方です。侵入に手間と時間がかかる家は狙われにくくなるとされており、錠が2つあるだけで視覚的な抑止効果も期待できます。賃貸で使える工事不要タイプもあります。補助錠の種類と選び方は「補助錠の選び方」の記事で詳しく解説しています。",
  },
  {
    title: "防犯性の高いシリンダーへ交換する",
    desc: "旧式シリンダーを使っている場合は、ピッキング抵抗性能の高いディンプルキータイプなどへの交換が根本的な対策になります。防犯性能の目安としては、官民合同会議が定めるCP認定（防犯性能の高い建物部品）の表示が参考になります。鍵交換のタイミングや費用感は関連記事も参照してください。",
  },
  {
    title: "ドアスコープ・郵便受けまわりの対策",
    desc: "サムターン回しの侵入経路になりやすいドアスコープは、室外から回して外せないカバー付きの製品に替える、郵便受けは内側にカバーを付けるなどの対策があります。ドアのガラス部分には防犯フィルムを貼ると、割ってサムターンに手を伸ばす手口への抵抗力が上がります。",
  },
];

const ngActions = [
  {
    title: "見た目だけの対策で満足する",
    desc: "ダミーカメラや防犯ステッカーだけに頼り、錠前そのものが旧式のままというケースです。抑止効果が全くないわけではありませんが、錠の性能とワンドアツーロックという物理的な備えが土台であり、見た目の対策はあくまで補助と考えるべきです。",
  },
  {
    title: "適合を確認せずに部品を購入・交換する",
    desc: "サムターンやシリンダーは錠前のメーカー・型番ごとに規格が異なります。適合しない部品を無理に取り付けると、施錠不良やドアの破損につながり、かえって防犯性が下がります。購入前に必ずドア側面の刻印を確認し、不明な場合は業者に相談しましょう。",
  },
  {
    title: "賃貸で無断でドアに穴を開ける・錠を交換する",
    desc: "賃貸住宅のドアや錠前は大家・管理会社の所有物です。無断でネジ穴を開けたり錠前を交換したりすると、原状回復費用を請求されるおそれがあります。工事不要タイプの補助錠やサムターンカバーを選ぶか、事前に管理会社の許可を得てから施工してください。",
  },
  {
    title: "緊急脱出できない状態にしてしまう",
    desc: "防犯を強化しすぎて、火災や地震のときに室内から素早く開けられなくなるのは本末転倒です。取り外し式サムターンの部品を家族が知らない場所に保管する、操作が複雑な補助錠を高齢者の部屋に付けるなどは避け、家族全員が室内から確実に開けられることを確認しておきましょう。",
  },
];

const faqs = [
  {
    q: "サムターン回し対策で最も手軽な方法は何ですか？",
    a: "サムターンカバーの取り付けです。工事不要で賃貸でも使いやすく、ホームセンターや通販で入手できます。より根本的には、押し回し式などの防犯サムターンへの交換や、補助錠を追加してワンドアツーロックにする方法があります。",
  },
  {
    q: "ピッキングに強い鍵はどのようなものですか？",
    a: "鍵の表面に丸いくぼみが並んだディンプルキータイプなど、内部構造が複雑なシリンダーはピッキングへの抵抗力が高いとされています。選ぶ際は、官民合同会議による「防犯性能の高い建物部品」（CP認定）の表示が一つの目安になります。",
  },
  {
    q: "賃貸住宅でもサムターン回し・ピッキング対策はできますか？",
    a: "できます。工事不要のサムターンカバーや、ドア枠に挟んで固定するタイプの補助錠なら、ドアに穴を開けずに設置でき、退去時に原状回復できます。シリンダー交換をしたい場合は、必ず大家または管理会社の許可を得てから行ってください。",
  },
  {
    q: "防犯目的の鍵交換や補助錠の取り付けは業者に頼むべきですか？",
    a: "サムターンカバーや工事不要の補助錠は自分で設置できます。一方、シリンダー交換・防犯サムターン交換・ネジ固定式の補助錠の取り付けは、適合部品の選定や施工精度が防犯性能に直結するため、不安があれば鍵業者への依頼が確実です。費用の目安は料金相場ページを参照してください。",
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
    { "@type": "ListItem", position: 2, name: "サムターン回し・ピッキングの手口と対策" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "サムターン回し・ピッキングの手口と対策",
  description: "空き巣の代表的な侵入手口の仕組みと、サムターンカバー・防犯サムターン・補助錠による対策を防犯目的で解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-09",
  dateModified: "2026-08-09",
};

export default function ThumbTurnTaisakuPage() {
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
            <span className="text-text-secondary">サムターン回し・ピッキングの手口と対策</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            サムターン回し・ピッキングの手口と対策｜今日からできる玄関の防犯強化
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月9日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：サムターン回し・ピッキング対策の基本</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              サムターン回しは室内側のつまみを工具で回す手口、ピッキングは鍵穴内部を工具で操作する手口です。対策の柱は<strong>①サムターンカバーまたは防犯サムターンで室内側を守る、②補助錠を追加してワンドアツーロックにする、③旧式シリンダーは防犯性の高いものに交換する</strong>の3つです。手軽な順に取り入れれば、賃貸住宅でも今日から防犯性を高められます。
            </p>
          </div>

          <p className="text-sm text-text-secondary leading-relaxed mb-8">
            本記事は、住まいの防犯対策を目的として、空き巣の代表的な侵入手口の「仕組み」と「防ぎ方」を一般知識として解説するものです。手口の詳細な実行方法には触れません。自宅の鍵が古い、ドアスコープ付きの玄関ドアに住んでいる、という方はぜひ最後まで確認してください。
          </p>

          {/* 手口の解説 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">知っておきたい侵入手口の基礎知識</h2>
          <div className="space-y-4 mb-10">
            {methods.map((m, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{m.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* 自分でできる対策 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">自分でできる防犯対策5つ</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            侵入犯罪は「時間がかかる家」「面倒な家」ほど狙われにくくなると言われます。以下の対策は手軽なものから順に並べています。すべてを一度にやる必要はなく、できるところから積み重ねることが大切です。
          </p>
          <div className="space-y-4 mb-10">
            {taisaku.map((t, i) => (
              <div key={i} className="bg-surface-alt rounded-xl p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{i + 1}. {t.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* ワンドアツーロック */}
          <h2 className="text-xl font-bold text-text-primary mb-4">ワンドアツーロックが基本とされる理由</h2>
          <div className="bg-white rounded-xl border border-black/10 p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              侵入をあきらめさせる最大の要因は「解錠・破壊にかかる時間」だとされています。錠が2つあれば、単純に突破すべき関門が2倍になり、作業時間も長くなります。ピッキングにもサムターン回しにも、それぞれの錠ごとに対処しなければならないため、<strong>1つの手口だけでは家に入れない状態</strong>を作れるのがワンドアツーロックの本質です。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              補助錠には、ドアに穴を開けて固定する本格的なタイプから、賃貸でも使える工事不要タイプまで幅があります。種類ごとの特徴と選び方は<a href="/hojo-jou/" className="text-primary underline">補助錠の選び方（ワンドア・ツーロック）</a>で詳しく解説しています。また、メインの錠自体が古い場合は、補助錠の追加より先にシリンダー交換を検討すべきケースもあります。判断の目安は<a href="/kagi-koukan-timing/" className="text-primary underline">鍵交換のタイミング</a>を参考にしてください。
            </p>
          </div>

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
          <h2 className="text-xl font-bold text-text-primary mb-4">業者に依頼すべきケースと選び方</h2>
          <div className="bg-surface-alt rounded-xl p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              サムターンカバーや工事不要の補助錠は自分で設置できますが、次のようなケースは鍵業者への依頼が確実です。<strong>①シリンダーを防犯性の高いものへ交換したい、②防犯サムターンへの交換で適合部品が分からない、③ネジ・ビス固定式の補助錠をドアに正確に取り付けたい、④ドア全体の防犯診断をしてほしい</strong>。錠前は数ミリの施工誤差が施錠不良につながる精密部品であり、防犯目的の工事こそ確実な施工が求められます。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              業者を選ぶ際は、電話やメールの段階でドアのメーカー・錠前の型番（ドア側面の刻印）を伝え、部品代・作業費・出張費を含めた<strong>総額の見積もり</strong>を確認しましょう。防犯目的の作業は緊急性が低いため、複数社から相見積もりを取って比較する余裕があります。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              鍵交換・補助錠取り付けの費用感は<a href="/ryokin/" className="text-primary underline">料金相場ページ</a>、業者の比較ポイントは<a href="/agents/" className="text-primary underline">業者比較ページ</a>にまとめています。
            </p>
          </div>

          {/* 内部リンクCTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">防犯目的の鍵交換・補助錠設置に対応できる業者を比較する</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              防犯工事は急ぎの解錠と違い、じっくり比較できるのが強みです。見積もり無料で、防犯建物部品の取り扱いがある業者を中心に選びましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を詳しく見る</a>
              <a href="/cp-nintei-jou/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">CP認定錠とは</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">サムターン回し・ピッキング対策に関するよくある質問</h2>
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
              { href: "/hojo-jou/", label: "補助錠の選び方（ワンドア・ツーロック）" },
              { href: "/cp-nintei-jou/", label: "CP認定錠とは？防犯性能の物差し" },
              { href: "/kagi-koukan-timing/", label: "鍵交換のタイミングと判断基準" },
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
