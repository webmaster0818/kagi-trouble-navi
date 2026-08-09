import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "補助錠の選び方｜ワンドア・ツーロックで玄関の防犯を強化する方法 | 鍵トラブルナビ",
  description:
    "補助錠の種類（面付タイプ・リング状タイプ・内締りタイプ・工事不要タイプ）と選び方を一般知識として解説。賃貸でも使える取り付け方法、ワンドアツーロックの考え方、業者に取り付けを依頼する場合の判断基準まで紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/hojo-jou/" },
};

const types = [
  {
    title: "面付タイプ（外付け補助錠）",
    desc: "ドアの室内側の面にネジで取り付ける補助錠です。錠の本体がドア表面に露出して付くため「面付」と呼ばれます。デッドボルト（かんぬき）がドア枠側の受け金具にしっかり掛かる構造で、こじ開けに対する抵抗力が高いのが特徴です。外側から鍵で施解錠できるシリンダー付きのタイプを選べば、外出時の防犯に有効です。取り付けにはドアへのネジ固定（穴あけ）が必要なため、持ち家向けで、賃貸では管理会社の許可が前提になります。",
  },
  {
    title: "リング状・ガードプレート系タイプ",
    desc: "ドアの隙間やシリンダーまわりを守る系統の防犯部品です。シリンダーを覆うリング状の部品は、シリンダーをつかんで回す・もぎ取るといった破壊的な手口への抵抗力を高めます。ドアとドア枠の隙間を覆うガードプレートは、バールによるこじ開けや隙間からのデッドボルト操作を防ぐ目的で取り付けられます。単体で錠を増やすものではありませんが、既存の錠の弱点を補強する部品として補助錠と組み合わせて使われます。",
  },
  {
    title: "内締りタイプ（在宅時用）",
    desc: "室内側からのみ施錠できるタイプで、チェーンやドアガードもこの系統に含まれます。外から解錠する手段がないため外出時には使えませんが、在宅中・就寝中の侵入対策として有効です。特に一人暮らしや夜間の防犯を強化したい場合に、外出用の補助錠と併用すると隙がなくなります。取り付けが簡単な製品が多いのも利点です。",
  },
  {
    title: "工事不要タイプ（賃貸向け）",
    desc: "ドアに穴を開けずに設置できる補助錠です。ドア枠に金具を挟んで固定するタイプ、強力な粘着テープで取り付けるタイプ、ドアの隙間に差し込むタイプなどがあります。賃貸住宅でも原状回復しやすく、退去時に取り外せるのが最大の利点です。固定力はネジ固定式に劣る場合があるため、製品の対応ドア厚・固定方式を確認し、取り付け後にがたつきがないかチェックしましょう。",
  },
];

const erabikata = [
  {
    title: "目的で選ぶ（外出時用か在宅時用か）",
    desc: "外出時の空き巣対策なら、外から施解錠できるシリンダー付きまたは電子式の補助錠が必要です。在宅時・就寝時の対策が目的なら内締りタイプで足ります。両方をカバーしたい場合は、外出用1つ＋在宅用1つという組み合わせも考えられます。",
  },
  {
    title: "住まいの条件で選ぶ（持ち家か賃貸か）",
    desc: "持ち家ならネジ固定の面付タイプが第一候補です。賃貸なら工事不要タイプから選ぶか、管理会社に相談してネジ固定の許可を得ます。ドアの材質（金属・木製）や厚み、ドア枠の形状によって取り付けられる製品が変わるため、購入前に採寸しておくと失敗がありません。",
  },
  {
    title: "取り付け位置で効果を高める",
    desc: "補助錠はメインの錠から離れた位置（一般に、メイン錠の上方でドアの上部寄り）に取り付けると、こじ開け時に力が分散されて抵抗力が増すとされています。2つの錠が近すぎると、1か所を攻撃するだけで両方に届いてしまうため、間隔を空けることがポイントです。",
  },
  {
    title: "防犯性能の表示を確認する",
    desc: "補助錠にも、官民合同会議による「防犯性能の高い建物部品」（CP認定）に掲載された製品があります。迷ったらCPマークの有無を一つの物差しにしましょう。CP認定制度の詳細は関連記事で解説しています。",
  },
];

const ngActions = [
  {
    title: "賃貸で無断でドアに穴を開ける",
    desc: "ドアや錠前は貸主の所有物です。無断でネジ固定式の補助錠を取り付けると、退去時に原状回復費用を請求されるおそれがあります。賃貸ではまず工事不要タイプを検討し、ネジ固定が必要な場合は必ず管理会社・大家の許可を得てください。",
  },
  {
    title: "メイン錠のすぐ近くに取り付ける",
    desc: "せっかく2つ目の錠を付けても、メイン錠と近接していると攻撃箇所が1か所に集中でき、ワンドアツーロックの効果が薄れます。錠同士の間隔を空けて取り付けるのが基本です。",
  },
  {
    title: "粘着式を汚れた面・不適合な面に貼る",
    desc: "粘着テープ式の補助錠は、取り付け面の汚れ・凹凸・材質によって固定力が大きく変わります。脱脂せずに貼る、対応していない面材に貼るなどすると、使用中に外れて施錠の意味がなくなります。取扱説明書の手順どおりに施工し、定期的に固定状態を点検しましょう。",
  },
  {
    title: "避難経路をふさぐ付け方をする",
    desc: "補助錠を増やすほど、火災や地震の際に室内から素早く開けて避難する動作は複雑になります。操作が難しい製品を家族の理解なく取り付けたり、普段使わない出口まで固く施錠したりすると、緊急時のリスクになります。防犯と避難のバランスを家族で共有しておきましょう。",
  },
];

const faqs = [
  {
    q: "補助錠はなぜ必要なのですか？1つの鍵では不十分ですか？",
    a: "侵入犯は解錠・破壊に時間がかかるほど犯行をあきらめやすいとされ、1枚のドアに錠を2つ設ける「ワンドアツーロック」は警察や防犯機関も推奨する基本対策です。錠が2つあれば突破に必要な時間と手間が増え、外から見えるだけでも抑止効果が期待できます。",
  },
  {
    q: "賃貸住宅でも補助錠は取り付けられますか？",
    a: "取り付けられます。ドア枠に挟んで固定するタイプや粘着テープ式など、ドアに穴を開けない工事不要タイプなら原状回復が容易で、賃貸でも使いやすいです。ネジ固定式を付けたい場合は、事前に大家・管理会社の許可を得てください。",
  },
  {
    q: "補助錠はどの位置に取り付けるのが効果的ですか？",
    a: "メインの錠から間隔を空けた位置、一般にはメイン錠より上方のドア上部寄りが目安とされています。錠同士が近いと攻撃箇所が1か所に集中できてしまうため、離して設置することでこじ開けへの抵抗力が高まります。",
  },
  {
    q: "補助錠の取り付けは業者に頼むべきですか？",
    a: "工事不要タイプや簡単な内締りタイプは自分で設置できます。ネジ固定の面付タイプ、外から施解錠するシリンダー付きタイプは、位置決めや穴あけの精度が防犯性と使い勝手に直結するため、施工に不安があれば鍵業者への依頼が確実です。費用の目安は料金相場ページをご覧ください。",
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
    { "@type": "ListItem", position: 2, name: "補助錠の選び方（ワンドア・ツーロック）" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "補助錠の選び方｜ワンドア・ツーロックで玄関の防犯を強化する方法",
  description: "補助錠の種類（面付・リング状・内締り・工事不要タイプ）と選び方、賃貸での注意点を一般知識として解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-09",
  dateModified: "2026-08-09",
};

export default function HojoJouPage() {
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
            <span className="text-text-secondary">補助錠の選び方（ワンドア・ツーロック）</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            補助錠の選び方｜ワンドア・ツーロックで玄関の防犯を強化する方法
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月9日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：補助錠選びは「目的×住まいの条件」で決まる</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              補助錠は<strong>外出時の防犯なら外から施解錠できるタイプ、在宅時の防犯なら内締りタイプ</strong>を選びます。持ち家ならネジ固定の面付タイプが本命、<strong>賃貸ならドアに穴を開けない工事不要タイプ</strong>が基本です。メインの錠から間隔を空けて取り付け、1枚のドアに錠2つの「ワンドアツーロック」にすることで、侵入に必要な時間と手間を大きく増やせます。
            </p>
          </div>

          <p className="text-sm text-text-secondary leading-relaxed mb-8">
            ワンドアツーロックは、警察や防犯機関も推奨する住まいの防犯の基本です。とはいえ補助錠と一口に言っても、構造も取り付け方法もさまざまで、住まいの条件に合わない製品を選ぶと効果が出ません。この記事では、補助錠の代表的な種類と選び方、取り付けの注意点、業者に頼むべきケースまでを一般知識として整理します。
          </p>

          {/* 種類 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">補助錠の代表的な種類</h2>
          <div className="space-y-4 mb-10">
            {types.map((t, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{i + 1}. {t.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* 選び方 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">失敗しない補助錠の選定基準</h2>
          <div className="space-y-4 mb-10">
            {erabikata.map((e, i) => (
              <div key={i} className="bg-surface-alt rounded-xl p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{i + 1}. {e.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>

          {/* 自分でできること */}
          <h2 className="text-xl font-bold text-text-primary mb-4">購入前に自分で確認しておくこと</h2>
          <ol className="space-y-3 mb-10">
            {[
              "ドアの厚み・材質（金属か木製か）と、ドア枠の形状・隙間を採寸する。製品ごとに対応条件が決まっています。",
              "外開きか内開きか、ドアの吊元（ちょうつがいの位置）が左右どちらかを確認する。対応方向が限定される製品があります。",
              "賃貸の場合は、工事不要タイプで足りるか、ネジ固定の許可を管理会社に取るかを決める。",
              "取り付け予定の位置（メイン錠から離れた上部寄り）に障害物がないか確認する。",
              "在宅時・緊急時に家族全員が室内から素早く開けられる製品かを確認する。",
            ].map((t, i) => (
              <li key={i} className="flex gap-3 bg-surface-alt rounded-xl p-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">{i + 1}</span>
                <span className="text-sm text-text-secondary leading-relaxed">{t}</span>
              </li>
            ))}
          </ol>

          {/* 玄関以外への活用 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">玄関以外にも使える補助錠</h2>
          <div className="bg-white rounded-xl border border-black/10 p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              補助錠が活躍するのは玄関だけではありません。侵入経路として狙われやすい<strong>勝手口・掃き出し窓・ベランダ側の窓</strong>には、サッシのレールに取り付ける窓用補助錠やクレセント錠の補助部品があります。また、室内ドア用の簡易補助錠は、子ども部屋や書斎、在宅勤務スペースのプライバシー確保にも使われています。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              防犯の観点では「玄関だけ固くても、窓が無防備なら意味が薄い」というのが基本です。玄関のワンドアツーロックを整えたら、窓まわりの補助錠や防犯フィルムにも目を向けると、住まい全体の防犯バランスが良くなります。
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
          <h2 className="text-xl font-bold text-text-primary mb-4">業者に取り付けを依頼すべきケースと選び方</h2>
          <div className="bg-surface-alt rounded-xl p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              工事不要タイプ・内締りタイプは自分で設置できる製品がほとんどです。一方、<strong>①外から施解錠できる面付補助錠をネジ固定で取り付けたい、②金属ドアへの穴あけが必要、③ガードプレートなど補強部品もまとめて施工したい、④メイン錠の交換と同時にやりたい</strong>という場合は、鍵業者への依頼が確実です。位置決めと穴あけの精度は、防犯性能だけでなく毎日の使い勝手にも直結します。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              防犯目的の取り付けは緊急性が低いため、複数社から相見積もりを取りましょう。見積もり時にはドアの写真（室内側・側面・ドア枠）と採寸結果を伝えると精度が上がります。部品代・作業費・出張費を含む<strong>総額</strong>と、希望すればCP認定品（防犯建物部品）での提案が可能かを確認するのがポイントです。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              取り付け費用の目安は<a href="/ryokin/" className="text-primary underline">料金相場ページ</a>、業者の比較ポイントは<a href="/agents/" className="text-primary underline">業者比較ページ</a>にまとめています。
            </p>
          </div>

          {/* 内部リンクCTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">補助錠の取り付けに対応できる鍵業者を比較する</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              補助錠の取り付け・防犯工事に対応し、見積もり無料で総額を提示してくれる業者を中心に比較しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を詳しく見る</a>
              <a href="/thumb-turn-taisaku/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">サムターン回し・ピッキング対策</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">補助錠に関するよくある質問</h2>
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
              { href: "/thumb-turn-taisaku/", label: "サムターン回し・ピッキングの手口と対策" },
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
