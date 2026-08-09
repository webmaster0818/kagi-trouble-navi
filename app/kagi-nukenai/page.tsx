import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "鍵が抜けない・刺さらないときの対処法｜原因の切り分けとNG行動 | 鍵トラブルナビ",
  description:
    "鍵が抜けない・刺さらない・途中で引っかかるときの対処法を解説。原因の切り分け方（鍵側の摩耗か鍵穴側の汚れか異物か）、自分でできる安全な対処（無理に回さない・鍵穴専用潤滑剤・掃除機での清掃）、油系潤滑剤や力任せに引き抜くなどのNG行動、業者に依頼すべき症状の判断基準を紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/kagi-nukenai/" },
};

const causeFlow = [
  {
    check: "鍵が途中までしか刺さらない",
    cause: "鍵穴内部の異物・ホコリ詰まりが原因の可能性大",
    desc: "鍵穴の内部に砂・ホコリ・小さな異物が入り込み、鍵の進入を物理的に妨げている状態です。イタズラで接着剤や折れた爪楊枝などが詰め込まれているケースもあります。奥まで入らないのに無理に押し込むと、異物をさらに奥へ押し込んでしまうため、まず掃除機で吸い出すことから始めましょう。",
  },
  {
    check: "刺さるが、抜くときに引っかかる・抜けない",
    cause: "鍵の変形・摩耗、または鍵穴内部のピンの動作不良",
    desc: "長年の使用で鍵の山が摩耗したり、わずかに曲がったりすると、内部のピンに引っかかって抜けにくくなります。シリンダー側の潤滑不足やピンの摩耗でも同じ症状が出ます。純正キーと合鍵の両方で試して、特定の鍵だけ引っかかるなら鍵側、どの鍵でも起きるならシリンダー側が疑われます。",
  },
  {
    check: "回した後、元の位置に戻さないと抜けない・戻しても抜けない",
    cause: "鍵の戻し位置のずれ、またはシリンダー内部の故障",
    desc: "多くの錠前は、鍵を挿した時と同じ角度に戻さないと抜けない構造です。まずは鍵をまっすぐ挿入時の角度に戻し、軽く左右に揺らしながらゆっくり引いてみましょう。正しい角度でも抜けない場合は、シリンダー内部の部品の故障・変形が疑われ、自力での分解は悪化のもとです。",
  },
  {
    check: "雨の日や冬の朝など、特定の条件でだけ抜けにくい",
    cause: "湿気による扉まわりの膨張、または鍵穴内部の凍結",
    desc: "木製扉やドア枠は湿気で膨張し、錠前に負荷がかかって鍵の動きが渋くなることがあります。冬の早朝だけ症状が出るなら、鍵穴内部の水分の凍結が疑われます。凍結にお湯をかけるのは再凍結と部品の傷みの原因になるためNGで、解氷スプレーやカイロでゆっくり温めるのが正解です。",
  },
];

const selfSteps = [
  {
    title: "まず力を抜き、無理に引き抜かない",
    desc: "抜けない鍵を力任せに引き抜こうとするのが、最も危険な行動です。鍵は根元に近いほど負荷に弱く、無理な力をかけると鍵穴の中で折れてしまいます。折れると開錠＋折れ込み除去＋場合によってはシリンダー交換となり、被害が一気に拡大します。まず手を止めて、深呼吸してから原因の切り分けに進みましょう。",
  },
  {
    title: "鍵を挿した角度に戻し、軽く揺らしながらゆっくり引く",
    desc: "鍵が抜ける角度は「挿した時と同じ角度」です。鍵をまっすぐの位置に戻し、上下に軽く揺らしたり、鍵を軽く押し込んでから引いたりすると、引っかかっていたピンが外れて抜けることがあります。ドアを軽く押し引きして錠前への負荷を逃がしながら試すのも有効です。あくまで「軽い力で」が原則です。",
  },
  {
    title: "掃除機で鍵穴のホコリ・異物を吸い出す",
    desc: "刺さらない場合や、抜けた後に再発防止したい場合は、掃除機のノズルを鍵穴に当てて内部のホコリや砂を吸い出します。息を吹き込むのは湿気が入るため逆効果です。エアダスターを使う場合は缶を立てて短く噴射し、冷却液が出ないように注意しましょう。",
  },
  {
    title: "鍵穴専用の潤滑剤を使う（応急処置は鉛筆の芯）",
    desc: "潤滑不足が原因の抜けにくさには、鍵穴専用のパウダー系・フッ素系潤滑剤を少量スプレーし、鍵を数回ゆっくり抜き挿しして馴染ませます。手元にない場合の応急処置として、鉛筆の芯（黒鉛）を鍵の溝にこすりつける方法も昔から使われる定番です。改善しても再発するようなら、鍵や錠前の摩耗が進んでいるサインです。",
  },
  {
    title: "鍵本体の汚れ・変形を確認する",
    desc: "抜けた（または別の合鍵がある）場合は、鍵本体を確認しましょう。溝に溜まった汚れは歯ブラシでかき出し、乾いた布で拭きます。目視で曲がりが分かる鍵や、机に置くとガタつく鍵は変形しています。変形した鍵を自分で曲げ戻すのは折れる原因になるためNGで、純正キーからの作り直しが安全です。",
  },
];

const ngActions = [
  {
    title: "油系の潤滑剤（CRE556など）を注す",
    desc: "一時的に滑りが良くなりますが、油分がホコリを吸着して内部で固まり、数日から数週間後にさらに悪化するのが典型パターンです。食用油やハンドクリームでの代用も同様にNG。鍵穴には必ず「鍵穴専用」と明記された潤滑剤を使いましょう。",
  },
  {
    title: "ペンチなどで力任せに引き抜く",
    desc: "工具で強く引くと、鍵穴の中で鍵が折れるリスクが最も高い行為です。折れた場合は取り出し作業が必要になり、状態によってはシリンダー交換まで発展します。鍵が折れてしまった時の対処は「鍵が折れた時の対処法」で解説していますが、折らないことが何より重要です。",
  },
  {
    title: "針金・爪楊枝・ピンセットで鍵穴をいじる",
    desc: "異物が詰まっている場合に自分で掻き出そうとすると、かえって奥へ押し込んだり、内部のピンを傷つけたりします。ピンが変形すると清掃や潤滑では直らず、シリンダー交換が必要になります。異物除去は吸い出し（掃除機）までにとどめましょう。",
  },
  {
    title: "凍結にお湯をかける・ライターで炙る",
    desc: "急激な温度変化は部品を傷め、かけたお湯が再凍結してさらに悪化します。火気は扉の塗装や樹脂部品を傷める危険もあります。凍結が疑われる場合は、解氷スプレーやカイロ、温めた鍵でゆっくり溶かすのが正しい方法です。",
  },
];

const proCases = [
  "掃除機での清掃・専用潤滑剤を試しても抜けない・刺さらない",
  "鍵穴の中で鍵が折れてしまった・折れそうなほど固い",
  "接着剤などのイタズラ・異物の詰め込みが疑われる",
  "鍵は抜けたが、シリンダーの動きが明らかにおかしい（空回り・引っかかりの頻発）",
  "外出先で車や金庫の鍵が抜けなくなった（対応範囲の広い業者が必要）",
];

const faqs = [
  {
    q: "鍵が抜けなくなりました。とりあえず何をすればいいですか？",
    a: "まず力任せに引き抜くのをやめてください。鍵穴の中で折れると被害が拡大します。次に、鍵を挿した時と同じ角度（まっすぐ）に戻し、上下に軽く揺らしながらゆっくり引きます。ドアを軽く押し引きして錠前への負荷を逃がしながら試すのも有効です。それでも抜けなければ、鍵穴専用潤滑剤を試し、改善しない場合は無理をせず鍵の専門業者に相談しましょう。",
  },
  {
    q: "鍵が途中までしか刺さりません。原因は何ですか？",
    a: "鍵穴内部の異物（砂・ホコリ・イタズラによる詰め物）か、鍵自体の変形が主な原因です。まず掃除機で鍵穴の異物を吸い出し、合鍵があれば別の鍵でも試して、鍵側か鍵穴側かを切り分けましょう。無理に押し込むと異物が奥に入り悪化します。接着剤を詰められた形跡がある場合は自力で直せないため、業者への依頼と、悪質なイタズラなら警察への相談も検討してください。",
  },
  {
    q: "抜けにくい鍵に潤滑剤を使ってもいいですか？",
    a: "使ってよいのは「鍵穴専用」のパウダー系・フッ素系潤滑剤だけです。CRE556のような油系潤滑剤は、一時的に改善してもホコリを吸着して内部で固まり、かえって悪化させるため使ってはいけません。手元に専用品がない場合は、鉛筆の芯（黒鉛）を鍵の溝にこすりつける応急処置が安全です。潤滑後も繰り返し症状が出るなら、摩耗が進んでいるサインなので交換を検討しましょう。",
  },
  {
    q: "鍵が抜けないまま放置するとどうなりますか？",
    a: "鍵が挿さったままの玄関は施錠できず、防犯上きわめて危険な状態です。また、抜き差しのたびに内部を傷めて症状が進行し、最終的に回らない・開かないトラブルに発展することがあります。抜けない状態がその日のうちに解消できないなら、在宅を続けられない事情がある場合は特に、早めに鍵の専門業者へ依頼して抜き取りと点検をしてもらうのが安全です。",
  },
];

const relatedLinks = [
  { href: "/kagi-ore/", label: "鍵が折れた時の対処法", desc: "折れ込んだ鍵の取り出しと交換の知識" },
  { href: "/kagi-mawaranai/", label: "鍵が回らない・回りにくい時の対処法", desc: "回転系トラブルの原因と対処" },
  { href: "/kagi-koukan-timing/", label: "鍵交換のタイミングと目安", desc: "摩耗した鍵を交換すべきサイン" },
  { href: "/ryokin/", label: "鍵開け・鍵交換の料金相場", desc: "業者依頼前に知っておきたい費用感" },
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
    { "@type": "ListItem", position: 2, name: "鍵が抜けない・刺さらないときの対処法" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "鍵が抜けない・刺さらないときの対処法",
  description: "鍵が抜けない・刺さらない時の原因の切り分け方、自分でできる安全な対処、NG行動、業者依頼の判断基準を解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-09",
  dateModified: "2026-08-09",
};

export default function KagiNukenaiPage() {
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
            <span className="text-text-secondary">鍵が抜けない・刺さらないときの対処法</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            鍵が抜けない・刺さらないときの対処法｜原因の切り分けとNG行動
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月9日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：抜けない鍵は「力任せに引かない」が鉄則</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              鍵が抜けない時は、<strong>①力任せに引かない（鍵折れ防止）→ ②挿した時と同じ角度に戻し、軽く揺らしながらゆっくり引く → ③鍵穴専用潤滑剤（または鉛筆の芯）を使う</strong>の順で対処します。刺さらない場合は<strong>鍵穴の異物を掃除機で吸い出す</strong>のが先です。<strong>CRE556などの油系潤滑剤はNG</strong>（ホコリを吸着して悪化）。無理に引いて鍵穴の中で折れると被害が一気に拡大するため、改善しなければ専門業者へ依頼しましょう。
            </p>
          </div>

          {/* 原因の切り分け */}
          <h2 className="text-xl font-bold text-text-primary mb-4">原因の切り分け：症状別に見る4パターン</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            「抜けない・刺さらない」と一口に言っても、原因は鍵側（摩耗・変形）、鍵穴側（汚れ・異物・部品の故障）、扉側（建て付け・湿気・凍結）に分かれます。症状から原因の見当をつけると、無駄のない対処ができます。合鍵と純正キーの両方で試すと切り分けの精度が上がります。
          </p>
          <div className="space-y-3 mb-10">
            {causeFlow.map((c, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-4">
                <p className="text-sm text-text-secondary mb-1.5">
                  <span className="inline-block bg-surface-alt rounded px-2 py-0.5 text-xs font-bold text-text-primary mr-2">症状{i + 1}</span>
                  {c.check}
                </p>
                <p className="font-bold text-primary text-sm mb-1">→ {c.cause}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* 自力対処 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">自分でできる対処手順（5ステップ）</h2>
          <ol className="space-y-3 mb-10">
            {selfSteps.map((s, i) => (
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
          <h2 className="text-xl font-bold text-text-primary mb-4">やってはいけないNG行動</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            抜けない・刺さらないトラブルの多くは、正しい手順なら軽症で済みます。被害を拡大させる典型的なNG行動を知っておきましょう。特に力任せの引き抜きは、<a href="/kagi-ore/" className="text-primary underline">鍵が折れるトラブル</a>に直結する最も危険な行動です。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">NG: {n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 業者判断 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">業者に依頼すべきケースと選び方</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-3">次のような状態は自力での解決が難しく、無理をすると悪化するため、鍵の専門業者への依頼が確実です。</p>
          <ul className="space-y-2 mb-6">
            {proCases.map((p, i) => (
              <li key={i} className="flex gap-2 bg-white rounded-lg border border-black/10 px-4 py-3 text-sm text-text-secondary">
                <span className="text-primary font-bold shrink-0">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            依頼時は「鍵が抜けない（刺さらない）」という症状、鍵の種類（刻みキーかディンプルキーか）、いつから起きているかを伝えると、見積もりが正確になります。費用は<strong>作業内容・鍵の種類・時間帯（深夜・早朝の割増）によって大きく変わる</strong>ため、電話口の最低料金を鵜呑みにせず、作業前に「出張費・作業費・部品代込みの総額」を必ず確認しましょう。見積もりに納得できなければ、その場で断って構いません。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            費用感を事前に把握したい方は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>を、料金体系や対応エリアで業者を比べたい方は<a href="/agents/" className="text-primary underline">鍵トラブル業者の比較</a>をご覧ください。抜けにくさが摩耗によるものなら、修理より交換が根本解決になることもあります。交換の判断は<a href="/kagi-koukan-timing/" className="text-primary underline">鍵交換のタイミングと目安</a>が参考になります。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">抜けない鍵は無理せず業者に相談</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              力任せに引いて折ってしまうと、取り出し＋交換で被害が拡大します。清掃・潤滑で直らない場合は、総額見積もりを確認できる業者に相談しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵が抜けない・刺さらない時のよくある質問</h2>
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
