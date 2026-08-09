import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "鍵の寿命は何年？シリンダー10年目安の根拠と長持ちさせるメンテナンス習慣 | 鍵トラブルナビ",
  description:
    "鍵・シリンダーの寿命は一般に10年程度が目安とされています（日本ロック工業会が案内する耐用年数の一般値）。寿命が近いサイン、鍵穴専用潤滑剤を使った正しいメンテナンス、やってはいけない油差しなどのNG習慣、交換を検討すべきタイミングを一般知識として解説します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/kagi-jumyou/" },
};

const basics = [
  {
    title: "シリンダーの寿命は「10年程度」が一般的な目安",
    desc: "錠前（シリンダー）の耐用年数は、一般に10年程度が目安とされています。これは日本ロック工業会が錠前の耐用年数として広く案内している一般値で、毎日何度も抜き差し・回転を繰り返す機械部品である以上、内部のピンやバネ、鍵本体の山やくぼみは少しずつ摩耗していきます。10年はあくまで目安であり、使用頻度・設置環境（海沿いの塩害、砂ぼこりの多い立地など）・メンテナンスの有無によって、実際の寿命は前後します。「壊れていないから大丈夫」ではなく、「10年前後から不調が出始めるもの」と捉えておくことが大切です。",
  },
  {
    title: "寿命が近づくと出る典型的なサイン",
    desc: "寿命が近いシリンダーには共通のサインがあります。鍵が回りにくい・引っかかる、差し込みや抜き差しが渋い、鍵を少し上下に揺らさないと回らない、施錠時にいつもと違う抵抗を感じる、といった症状です。これらは内部部品や鍵本体の摩耗・汚れの蓄積によって起こり、放置すると鍵が回らない・抜けない・最悪の場合は鍵穴の中で折れるといった深刻なトラブルに進行します。症状が軽いうちの清掃・メンテナンスで改善することもありますが、摩耗そのものは元に戻らない点は覚えておきましょう。",
  },
  {
    title: "鍵本体の摩耗も寿命の一部。「よく使う1本」から劣化する",
    desc: "寿命というとシリンダー側に目が行きがちですが、鍵本体も金属部品であり摩耗します。特に毎日使う1本だけが摩耗し、スペアキーなら問題なく回るというケースは典型的です。この状態で摩耗した鍵をさらに複製すると、摩耗を引き継いだ精度の低い合鍵ができてしまい、シリンダーへの負担も増します。合鍵はできるだけ状態のよい元鍵（純正キー）から作る、よく使う鍵とスペアを時々ローテーションする、といった習慣が鍵側の寿命を延ばします。",
  },
  {
    title: "寿命は「防犯性の寿命」でもある",
    desc: "物理的にまだ動くとしても、10年以上前のシリンダーは防犯技術の面で世代遅れになっている可能性があります。かつてピッキング被害が社会問題化した古いディスクシリンダーのように、当時は標準的だった製品が、現在では交換推奨とされている例もあります。寿命のサインが出始めた古い鍵は、「修理して延命する」よりも「現行の防犯性能を持つシリンダーへ交換する」ほうが、機能と防犯の両面で合理的な選択になることが多いのです。交換の考え方は鍵交換のタイミングの記事で詳しく解説しています。",
  },
];

const checkSteps = [
  {
    title: "鍵穴の清掃は「掃除機で吸う」が基本",
    desc: "鍵穴の中にはホコリや砂ぼこりが少しずつ入り込みます。メンテナンスの基本は、掃除機のノズルを鍵穴に当ててゴミを吸い出すことです。エアダスターで吹き飛ばす方法もありますが、奥に押し込んでしまう可能性もあるため、吸い出すほうが確実です。頻度は数か月に一度、動きが渋くなったと感じたときに行えば十分です。",
  },
  {
    title: "潤滑には「鍵穴専用」のパウダー系・フッ素系潤滑剤を使う",
    desc: "清掃しても動きが渋いときは、鍵穴専用として売られているパウダー系・フッ素系の潤滑剤を少量だけ注入します。錠前メーカーも鍵穴には専用潤滑剤を使うよう案内しています。注入後に鍵を数回抜き差しして馴染ませ、鍵に付いた余分な粉は拭き取ります。入れすぎは逆効果なので、少量ずつ様子を見るのがコツです。",
  },
  {
    title: "鍵本体の汚れは歯ブラシと乾いた布で落とす",
    desc: "鍵の溝やくぼみに溜まった皮脂や黒ずみは、使い古しの歯ブラシでかき出し、乾いた布で拭き取ります。この汚れをシリンダーに持ち込まないだけでも、内部の汚れの蓄積を減らせます。あわせて鍵の曲がりや欠け、摩耗による山の丸まりがないかも目視で点検しましょう。変形した鍵を無理に使い続けると、鍵穴内での折れの原因になります。",
  },
  {
    title: "年に一度は「ドア全体」の点検を",
    desc: "鍵の不調の原因が、実はシリンダーではなくドア側にあることも少なくありません。蝶番の緩みによるドアの傾き、ラッチや錠のかみ合わせのズレ、ドアクローザーの不調などです。年に一度、ドアを開けた状態でも鍵がスムーズに回るかを確認すると、原因がシリンダーなのかドアの建て付けなのかを切り分けられます。ネジの緩み程度ならドライバーで締め直すだけで改善することもあります。",
  },
];

const ngActions = [
  {
    title: "食用油や一般の潤滑スプレーを鍵穴に注す",
    desc: "油分がホコリを抱き込んで内部で固まり、かえって動作不良を悪化させる代表的なNG行為です。一時的に滑りが良くなっても、時間とともに症状は前より重くなります。鍵穴に使ってよいのは鍵穴専用のパウダー系・フッ素系潤滑剤だけです。",
  },
  {
    title: "回りにくい鍵を力任せに回す・揺らして使い続ける",
    desc: "渋さを力でねじ伏せる使い方は、鍵穴内での鍵折れに直結します。折れた鍵の摘出はさらに手間と費用がかかります。回りにくさを感じたら、まず清掃と専用潤滑剤、それでも改善しなければ摩耗を疑って交換検討という順で対処しましょう。",
  },
  {
    title: "摩耗した鍵から合鍵を作り続ける",
    desc: "摩耗した鍵をコピーすると誤差が積み重なり、「新しい合鍵なのに回らない」という事態が起こります。精度の低い合鍵はシリンダーの摩耗も早めます。合鍵は状態のよい元鍵から作るのが原則です。",
  },
  {
    title: "10年以上前の鍵の不調を応急処置だけで延命し続ける",
    desc: "清掃や潤滑剤で一時的に改善しても、摩耗した部品は元に戻りません。寿命目安を過ぎた鍵の不調は再発を繰り返しがちで、外出先で突然回らなくなるリスクを抱え続けることになります。不調が繰り返すなら、シリンダー交換を前向きに検討するタイミングです。",
  },
];

const faqs = [
  {
    q: "鍵の寿命は何年ですか？",
    a: "錠前（シリンダー）の耐用年数は一般に10年程度が目安とされています。これは日本ロック工業会が広く案内している一般値で、使用頻度や設置環境、メンテナンスの有無によって実際の寿命は前後します。10年を過ぎたら即交換が必要というわけではありませんが、回りにくさなどの不調が出始めたら、摩耗の進行と防犯性能の世代交代の両面から、交換を検討する時期と考えるのが妥当です。",
  },
  {
    q: "鍵穴のメンテナンスには何を使えばいいですか？",
    a: "基本は掃除機でホコリを吸い出す清掃と、鍵穴専用として売られているパウダー系・フッ素系潤滑剤の少量注入です。食用油・機械用の一般的な潤滑スプレーは、内部でホコリを固めて症状を悪化させるため使ってはいけません。鍵本体の汚れは歯ブラシと乾いた布で落とします。この組み合わせを数か月に一度行うだけで、鍵穴のコンディションはかなり保てます。",
  },
  {
    q: "スペアキーだと回るのに、いつも使う鍵だと回りにくいのはなぜですか？",
    a: "毎日使っている鍵だけが摩耗している典型的なサインです。鍵も金属部品なので、使うほど山やくぼみが少しずつ削れ、シリンダーとのかみ合わせの精度が落ちていきます。状態のよいスペアキーを元に純正キーや精度の高い合鍵を用意する、使う鍵をローテーションするなどの対応が有効です。ただしシリンダー側の摩耗も同時に進んでいる場合は、交換の検討も視野に入れましょう。",
  },
  {
    q: "寿命かどうか自分で判断できないときはどうすればいいですか？",
    a: "清掃と専用潤滑剤で改善しない、不調が繰り返す、ドアを開けた状態でも回りにくい（＝シリンダー自体の問題の可能性が高い）といった場合は、鍵の専門業者に点検・交換の相談をするのが確実です。依頼時は症状と鍵の使用年数を伝え、修理と交換のどちらが合理的か、作業前に部品代・作業費・出張費を含む総額見積もりとあわせて確認しましょう。",
  },
];

const relatedLinks = [
  { href: "/kagi-mawaranai/", label: "鍵が回らないときの対処法", desc: "症状別の原因切り分けと直し方" },
  { href: "/kagi-koukan-timing/", label: "鍵交換のタイミングと目安", desc: "交換を検討すべきサインと考え方" },
  { href: "/kagi-ore/", label: "鍵が折れたときの対処法", desc: "摩耗の末に起こるトラブルへの備え" },
  { href: "/kagi-shurui-zukan/", label: "鍵の種類図鑑", desc: "交換先を選ぶための種類別の基礎知識" },
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
    { "@type": "ListItem", position: 2, name: "鍵の寿命とメンテナンス習慣" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "鍵の寿命は何年？シリンダー10年目安の根拠と長持ちさせるメンテナンス習慣",
  description: "シリンダーの寿命10年程度という一般目安、寿命が近いサイン、鍵穴専用潤滑剤による正しいメンテナンスとNG習慣、交換検討の考え方を一般知識として解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-09",
  dateModified: "2026-08-09",
};

export default function KagiJumyouPage() {
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
            <span className="text-text-secondary">鍵の寿命とメンテナンス習慣</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            鍵の寿命は何年？シリンダー10年目安の根拠と長持ちさせるメンテナンス習慣
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月9日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：シリンダーの寿命は10年程度が一般的な目安。専用潤滑剤での定期メンテで延ばし、不調が繰り返すなら交換検討へ</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              錠前（シリンダー)の耐用年数は<strong>一般に10年程度が目安</strong>とされています（日本ロック工業会が案内する一般値）。回りにくい・引っかかるといった症状は寿命が近いサインで、日常のメンテナンスは<strong>掃除機での鍵穴清掃＋鍵穴専用のパウダー系・フッ素系潤滑剤</strong>が基本です。食用油や一般の潤滑スプレーはホコリを固めて症状を悪化させるため厳禁。清掃・潤滑で改善しない不調や10年超の鍵の繰り返す不調は、<strong>修理より交換を検討するタイミング</strong>です。
            </p>
          </div>

          {/* 本文解説 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵の寿命の基礎知識｜押さえておきたい4つのポイント</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            鍵は毎日使う消耗部品です。「壊れるまで使う」のではなく、寿命の目安とサインを知って計画的に付き合うことで、突然の締め出しや鍵折れを防げます。
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
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵を長持ちさせるメンテナンス習慣4ステップ</h2>
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
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵の寿命を縮めるNG習慣</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">NG: {n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 業者判断 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">メンテナンスで改善しないときは交換の検討を</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            清掃と専用潤滑剤で改善しない、改善してもすぐ再発する、という段階まで来た鍵は、内部の摩耗がかなり進んでいる可能性があります。特に使用10年前後の鍵なら、<strong>その場しのぎの修理よりシリンダー交換のほうが、機能面でも防犯面でも合理的</strong>なことが多いです。症状の切り分け方は<a href="/kagi-mawaranai/" className="text-primary underline">鍵が回らないときの対処法</a>を、交換の判断基準は<a href="/kagi-koukan-timing/" className="text-primary underline">鍵交換のタイミングと目安</a>を参考にしてください。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            交換を業者に依頼する場合は、選ぶシリンダーのグレードや時間帯で費用が変わるため、作業前に部品代・作業費・出張費を含む総額見積もりを必ず確認しましょう。費用感は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、依頼先の検討は<a href="/agents/" className="text-primary underline">鍵トラブル業者の比較</a>で確認できます。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">寿命が近い鍵は、壊れる前の交換が安心</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              外出先で突然回らなくなる前に、点検・交換に対応できる業者へ相談を。作業前の総額見積もりを確認してから依頼しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵の寿命のよくある質問</h2>
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
