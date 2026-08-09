import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "鍵の種類図鑑｜刻みキー・ディンプル・カード・電子錠まで防犯性の目安と見分け方をわかりやすく解説 | 鍵トラブルナビ",
  description:
    "住宅で使われる鍵の種類を図鑑形式で解説。刻みキー（ディスクシリンダー・ピンシリンダー）、ディンプルキー、ロータリーディスクシリンダー、カードキー、電子錠（テンキー）、スマートロックの仕組み・防犯性の目安・自宅の鍵の見分け方を一般知識としてまとめました。交換を考えるときの選び方も紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/kagi-shurui-zukan/" },
};

const types = [
  {
    title: "刻みキー（ギザギザの鍵）",
    level: "防犯性の目安：低〜中",
    desc: "鍵の縁が山型にギザギザと刻まれた、昔ながらの形の鍵です。内部構造の代表がピンシリンダー（縁の刻みで一列のピンを押し上げる方式）と、鍵の両側にギザギザがある古いディスクシリンダーです。特に古いディスクシリンダーはピッキング被害が社会問題化した経緯があり、メーカー自身が防犯性の高い後継品への交換を案内してきた種類です。10年以上前の刻みキーを使い続けている場合は、交換を検討する価値があります。合鍵を街の合鍵店で安く早く作れるのは利点です。",
  },
  {
    title: "ディンプルキー",
    level: "防犯性の目安：高",
    desc: "鍵の表面に丸いくぼみ（ディンプル）が複数並んだタイプで、現在の住宅用シリンダーの主流です。ピンが上下・左右・斜めなど複数方向に多数配置されており、理論上の鍵違い数が桁違いに多く、ピッキングによる開錠に時間がかかります。メーカーによっては所有者登録制（セキュリティカード式）を採用しており、第三者が勝手に合鍵を作りにくいのも特徴です。仕組みの詳細はディンプルキーの記事で解説しています。",
  },
  {
    title: "ロータリーディスクシリンダー",
    level: "防犯性の目安：中〜高",
    desc: "内部のタンブラー（障害物）が回転式のディスクになっているシリンダーで、ピンを押し上げる方式とは異なる構造を持ちます。旧来のディスクシリンダーの弱点を踏まえて開発された後継系統で、耐ピッキング性能を高めた設計です。見た目の鍵は刻みキーに近い形状のものが多く、「ギザギザだから古くて危険」とは限らない代表例です。型番や刻印で判断するのが確実です。",
  },
  {
    title: "カードキー",
    level: "防犯性の目安：中〜高（方式による）",
    desc: "カードをかざす・差し込むことで解錠するタイプです。ホテルや分譲マンションのエントランスで広く使われ、住戸用の製品もあります。磁気式と非接触IC式があり、現在は複製が難しい非接触IC式が主流です。鍵穴がない（または非常用に限られる）ためピッキングの対象になりにくい一方、カードの紛失・磁気不良・電池切れ（電子錠タイプ）といった機械とは別種のトラブルがあります。紛失時の再発行やカード追加は管理会社・メーカー経由になることが多い点も覚えておきましょう。",
  },
  {
    title: "電子錠・テンキー錠",
    level: "防犯性の目安：中〜高（運用による）",
    desc: "暗証番号の入力や指紋認証などで解錠する、電気仕掛けの錠前です。鍵の持ち歩きが不要で、番号を変えれば「合鍵を回収する」のと同じ効果が得られるため、鍵の受け渡しが多い環境にも向きます。ただし防犯性は運用に大きく左右されます。誕生日など推測されやすい番号、長期間変えない番号、入力を覗き見される「ショルダーハック」への無警戒は弱点になります。電池式の製品は電池切れ対策（残量警告への対応・非常給電方法の把握）が必須です。",
  },
  {
    title: "スマートロック",
    level: "防犯性の目安：中〜高（運用による）",
    desc: "スマホアプリや暗証番号、ハンズフリーで解錠できる錠前で、既存のサムターンに後付けするタイプと、シリンダーごと交換するタイプがあります。オートロック機能により鍵のかけ忘れ（無締り）を防げるのが防犯面の大きな利点で、解錠履歴が残る製品なら家族の帰宅確認にも使えます。一方で電池切れ・通信不具合・粘着剥がれ（後付け型）による締め出しリスクがあり、物理鍵の携帯が事実上必須です。詳しくはスマートロックの記事で解説しています。",
  },
];

const checkSteps = [
  {
    title: "鍵本体の形を見る",
    desc: "まず手元の鍵を観察しましょう。縁がギザギザなら刻みキー系（ピンシリンダー・ディスクシリンダー・ロータリーディスクなど）、表面に丸いくぼみが並んでいればディンプルキー、板状で刻みがなければカードキーやウェーブキー系です。ギザギザが鍵の片側だけか両側かも、種類を絞り込む手がかりになります。",
  },
  {
    title: "鍵とシリンダーの刻印を確認する",
    desc: "鍵の持ち手部分やシリンダーの表面、ドア側面の金属プレート（フロントプレート）には、メーカー名や型番の刻印があります。この刻印をメモするか写真に撮っておくと、種類の特定が確実になり、交換や合鍵の相談もスムーズです。ただし鍵番号が写った写真をSNSに投稿するのは複製リスクがあるため厳禁です。",
  },
  {
    title: "使用年数と「いつから付いているか」を把握する",
    desc: "錠前の耐用年数は一般に10年程度が目安とされています。入居時から付いていた鍵で年数不明の場合は、建物の築年数や過去の交換歴から見当をつけます。古い刻みキーで10年以上経過しているなら、摩耗による不具合と防犯性の両面から交換検討のタイミングです。考え方は鍵交換のタイミングの記事で解説しています。",
  },
  {
    title: "防犯性の目安を公的マークで確認する",
    desc: "防犯性を客観的に判断したいときは、官民合同会議の試験基準を満たした建物部品に付く「CP認定」マークが目安になります。カタログやメーカーサイトで型番を検索すると、CP認定の有無や耐ピッキング性能の表示を確認できます。感覚ではなく表示で判断するのが、種類選びで失敗しないコツです。",
  },
];

const ngActions = [
  {
    title: "見た目だけで「古い鍵＝危険」「新しい鍵＝安全」と決めつける",
    desc: "ギザギザの鍵でもロータリーディスクシリンダーのように耐ピッキング性能を高めた種類があり、逆にディンプルキーでも製品によって性能差があります。種類名や見た目の印象ではなく、型番・性能表示・CP認定の有無で判断しましょう。",
  },
  {
    title: "電子錠・スマートロックを付けて物理鍵を持ち歩かなくなる",
    desc: "電池切れ・通信不具合・故障はいつでも起こり得ます。特に後付けスマートロックのオートロック機能を使う場合、物理鍵を持たない運用は締め出しと隣り合わせです。非常用の解錠手段を必ず確保しておきましょう。",
  },
  {
    title: "種類の違う鍵穴に自己流で潤滑油を注す",
    desc: "シリンダーの種類を問わず、一般的な油系潤滑剤は内部でホコリを固めて動作不良の原因になります。メンテナンスは鍵穴専用のパウダー系・フッ素系潤滑剤を使うのが基本です。動きが渋いまま使い続けるのも、鍵折れの原因になります。",
  },
  {
    title: "賃貸で無断で種類を替える",
    desc: "賃貸住宅の錠前は貸主の設備です。ディンプルキーへの交換もスマートロックのシリンダー交換型も、無断で行えば契約違反となり退去時のトラブルになります。必ず管理会社・大家の承諾を得てから交換しましょう。",
  },
];

const faqs = [
  {
    q: "自宅の鍵の種類はどうやって見分ければいいですか？",
    a: "まず鍵本体の形を見ます。縁がギザギザなら刻みキー系、表面に丸いくぼみが並んでいればディンプルキー、カード状ならカードキーです。次に、鍵の持ち手やドア側面の金属プレート（フロントプレート）に刻印されたメーカー名・型番を確認すると、正確な種類と性能が分かります。型番をメーカーサイトで検索すれば、耐ピッキング性能やCP認定の有無も確認できます。",
  },
  {
    q: "一番防犯性が高い鍵の種類はどれですか？",
    a: "「この種類なら絶対安全」という鍵はありませんが、住宅用として広く選ばれているのは耐ピッキング性能の高いディンプルキーで、客観的な目安としてはCP認定（侵入に5分以上の抵抗を目安とした試験をクリアした建物部品）の有無が参考になります。また、どんなに高性能な鍵でも1つだけでは限界があるため、補助錠を加えたワンドアツーロックにする、無締りをなくすといった組み合わせが実質的な防犯性を決めます。",
  },
  {
    q: "電子錠やスマートロックは停電・電池切れで開かなくなりませんか？",
    a: "多くの住宅用電子錠・スマートロックは電池式のため、停電の直接の影響は受けにくい設計です。ただし電池切れでは動作しなくなるため、残量警告が出たらすぐ交換することが前提です。製品によっては外部から一時給電できる非常用端子や、非常用の物理鍵穴が用意されています。自宅の製品の非常時の開け方を、トラブルが起きる前に取扱説明書で確認しておきましょう。",
  },
  {
    q: "古い刻みキーからディンプルキーへの交換は自分でできますか？",
    a: "錠ケースの規格に適合するシリンダーを選べれば、シリンダー部分だけの交換で済むためDIYも不可能ではありません。ただし規格の採寸ミスや取り付け不良はそのまま防犯上の弱点になるため、不安があれば鍵の専門業者への依頼が確実です。費用は選ぶシリンダーのグレードや依頼時間帯で変わるので、作業前に部品代・作業費・出張費を含む総額見積もりを確認しましょう。費用感は料金相場のページで解説しています。",
  },
];

const relatedLinks = [
  { href: "/dimple-key/", label: "ディンプルキーとは？防犯性の仕組み", desc: "ピッキングに強い構造と交換の考え方" },
  { href: "/smart-lock/", label: "スマートロックの基礎知識", desc: "後付け型・交換型の違いと注意点" },
  { href: "/kagi-koukan-timing/", label: "鍵交換のタイミングと目安", desc: "交換を検討すべきサインと考え方" },
  { href: "/cp-nintei-jou/", label: "CP認定錠とは？防犯性能の公的な目印", desc: "5分以上の侵入抵抗を目安とした認定制度" },
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
    { "@type": "ListItem", position: 2, name: "鍵の種類図鑑" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "鍵の種類図鑑｜刻みキー・ディンプル・カード・電子錠まで防犯性の目安と見分け方",
  description: "刻みキー・ディンプルキー・ロータリーディスク・カードキー・電子錠・スマートロックの仕組みと防犯性の目安、自宅の鍵の見分け方を一般知識として解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-09",
  dateModified: "2026-08-09",
};

export default function KagiShuruiZukanPage() {
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
            <span className="text-text-secondary">鍵の種類図鑑</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            鍵の種類図鑑｜刻みキー・ディンプル・カード・電子錠まで防犯性の目安と見分け方
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月9日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：住宅の鍵は大きく6種類。見分けは「鍵の形」と「刻印の型番」で付けられる</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              住宅で使われる鍵は、<strong>刻みキー（ギザギザの鍵）・ディンプルキー・ロータリーディスクシリンダー・カードキー・電子錠（テンキー）・スマートロック</strong>に大別できます。防犯性の目安は「開錠にどれだけ時間がかかるか」で、古い刻みキーは低め、ディンプルキーやCP認定品は高めというのが一般的な整理です。自宅の鍵は<strong>鍵本体の形（ギザギザか、くぼみか）とシリンダーやフロントプレートの刻印（メーカー名・型番）</strong>で見分けられます。
            </p>
          </div>

          {/* 図鑑 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">住宅で使われる鍵6種類の図鑑</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            それぞれの種類について、仕組み・防犯性の目安・向いている使い方を解説します。防犯性の表記はあくまで種類ごとの一般的な傾向で、同じ種類でも製品によって性能差があります。正確には型番ごとの性能表示やCP認定の有無で確認してください。
          </p>
          <div className="space-y-3 mb-10">
            {types.map((t, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-4">
                <p className="font-bold text-primary text-sm mb-0.5">
                  <span className="inline-block bg-surface-alt rounded px-2 py-0.5 text-xs font-bold text-text-primary mr-2">種類{i + 1}</span>
                  {t.title}
                </p>
                <p className="text-xs font-bold text-secondary mb-1.5">{t.level}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* 自分でできること */}
          <h2 className="text-xl font-bold text-text-primary mb-4">自宅の鍵の種類を見分ける4ステップ</h2>
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
          <h2 className="text-xl font-bold text-text-primary mb-4">やってはいけないNG行動・よくある誤解</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">NG: {n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 業者判断 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">種類を替えたい・選べないときは業者に相談を</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            「古い刻みキーからディンプルキーに替えたい」「スマートロックにしたいが自宅のドアに合うか分からない」という場合、ポイントは<strong>今付いている錠前（錠ケース）の規格に適合する製品を選ぶこと</strong>です。フロントプレートの型番から適合を調べられますが、採寸や選定に不安があれば鍵の専門業者に相談すると、規格違いの失敗がありません。交換の時期の考え方は<a href="/kagi-koukan-timing/" className="text-primary underline">鍵交換のタイミングと目安</a>を参考にしてください。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            交換費用は、選ぶ種類・製品グレード・依頼する時間帯によって大きく変わります。依頼時は作業前に部品代・作業費・出張費を含む総額見積もりを必ず確認しましょう。費用感は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、依頼先の検討は<a href="/agents/" className="text-primary underline">鍵トラブル業者の比較</a>で確認できます。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">鍵の種類選びから交換まで、実績のある業者に相談</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              自宅のドアに合う種類の選定から取り付けまで任せられる業者なら安心です。作業前の総額見積もりを確認してから依頼しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵の種類のよくある質問</h2>
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
