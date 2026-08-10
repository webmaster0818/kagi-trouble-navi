import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "室内ドア・トイレの鍵が開かないときの対処法｜非常解錠装置（コイン溝）の使い方 | 鍵トラブルナビ",
  description:
    "トイレ・洗面所など室内ドアの鍵が開かないときの対処法を一般知識として解説。多くの室内錠に備わる非常解錠装置（外側のコイン溝）の使い方、子どもが中で閉じ込められたときの落ち着いた対応手順、ラッチ不良で開かない場合の切り分け、無理にこじ開けてはいけない理由を紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/shitsunai-toilet-kagi/" },
};

const basics = [
  {
    title: "多くの室内錠には「非常解錠装置」が付いている",
    desc: "トイレや洗面所のドアに使われる表示錠・間仕切錠の多くには、外側から開けられる非常解錠装置が備わっています。代表的なのはドアノブの外側中央にある細い溝で、硬貨（コイン）やマイナスドライバーの先を差し込んで回すと、内側のロックが解除される仕組みです。これは中で人が倒れた・子どもが閉じ込められたといった緊急時のための正規の機能であり、壊して開ける前に必ず確認すべきポイントです。自宅のトイレ・浴室・洗面所のドアノブに溝や小さな穴がないか、平時に一度確認しておくと、いざというとき慌てずに済みます。",
  },
  {
    title: "室内錠の種類：表示錠・間仕切錠・空錠の違い",
    desc: "室内ドアの錠は用途で種類が分かれます。トイレに多い表示錠は、内側で施錠すると外側の表示窓が赤などに変わり在室が分かるタイプで、通常は非常解錠装置付きです。寝室などに使われる間仕切錠は内側からだけ施錠できるタイプ、鍵機能のないものは空錠と呼ばれます。ほかに、内側のボタンを押して施錠するプッシュ式や、小さなツマミを回すタイプもあります。自宅の室内錠がどのタイプかを知っておくと、開かないときにどの解錠方法が使えるかをすぐ判断できます。",
  },
  {
    title: "「鍵が掛かった」のではなく「ラッチの故障」で開かないこともある",
    desc: "室内ドアが開かない原因は施錠だけではありません。ドアノブを回してもラッチ（ドア側面の斜めのボルト）が引っ込まない故障が起きると、鍵が掛かっていなくてもドアは開きません。ノブが空回りする・いつもよりノブが軽い／重いといった感触があれば、ラッチ機構の故障が疑われます。この場合は非常解錠装置を回しても開かないため、対処の方向がまったく変わります。「施錠されているのか、故障なのか」の切り分けが、室内ドアトラブルの最初の分岐点です。",
  },
  {
    title: "子どもの閉じ込めは「起きる前提」で備えるもの",
    desc: "小さな子どもは、大人の真似をして内鍵を掛けたあと、自分で開けられなくなることがあります。トイレ・浴室・寝室はいずれも起こりやすい場所です。非常解錠装置の位置と回し方を家族全員が知っておく、浴室など危険を伴う場所には子どもの手が届く高さの内鍵を作らない・無効化するなど、閉じ込めは「起きたらどうするか」と「起こさないためにどうするか」の両面で備えるのが基本です。予防策の全体像は子ども・ペットの鍵トラブル対策の記事で詳しく解説しています。",
  },
];

const checkSteps = [
  {
    title: "まず声を掛けて状況を確認する（中に人がいる場合）",
    desc: "中に子どもや家族がいる場合は、ドア越しに声を掛けて落ち着かせ、状態を確認します。子どもなら「ツマミをこっちに回してごらん」と内側からの解錠を誘導できることも多く、これが最も早く安全な解決です。パニックにさせないよう、責めずに穏やかに話し掛けるのがコツです。反応がない・体調不良が疑われる場合は、ためらわず緊急の対応（後述）に切り替えます。",
  },
  {
    title: "非常解錠装置（コイン溝）を探して回す",
    desc: "ドアノブの外側中央や台座部分に、硬貨が入る細い溝、または小さな穴がないか確認します。溝タイプは硬貨やマイナスドライバーを差し込んで回せば解錠できます。穴タイプは細い棒（クリップを伸ばしたものなど）を差し込んで押す・回す構造の製品があります。回す向きが分からなければ両方向を試します。無理な力は不要で、軽く回して手応えがなければ施錠以外の原因（ラッチ故障）を疑いましょう。",
  },
  {
    title: "施錠ではなさそうなら、ラッチ側へアプローチする",
    desc: "非常解錠装置を回しても開かない、ノブが空回りするという場合はラッチの故障が疑われます。ドアと枠の隙間からラッチの位置を確認し、下敷きのような薄い板を差し込んでラッチの斜面を押し込むと開くことがあります（内開き・外開きやラッチの向きによって可否は変わります）。開いたら、故障したラッチは再発防止のため交換が必要です。交換の基礎知識はドアノブ・ラッチの記事を参考にしてください。",
  },
  {
    title: "緊急性が高い場合はためらわず助けを呼ぶ",
    desc: "中の人の反応がない、浴室で倒れている可能性がある、子どもが泣き続けて危険な状態など、緊急性が高い場合は、自力での解錠にこだわらず救急（119番）への通報を優先してください。生命に関わらないが自力で開けられない場合は、出張対応の鍵業者に依頼します。状況（施錠か故障か、錠の種類、中に人がいるか）を伝えると、対応の優先度と方法を適切に判断してもらえます。",
  },
];

const ngActions = [
  {
    title: "いきなりドアを蹴破る・体当たりする",
    desc: "室内ドアは薄く割れやすい一方、破壊すればドアごと交換になり費用も大きくなります。中に人がいる場合は破片やドアの倒れ込みでケガをさせる危険もあります。非常解錠装置の確認が先です。破壊による開放は、緊急時の最終手段と考えましょう。",
  },
  {
    title: "鍵穴や隙間に針金を突っ込んでやみくもにいじる",
    desc: "構造を理解しないまま隙間や穴に異物を突っ込むと、内部機構に引っ掛かって状態が悪化し、業者でも解錠に時間がかかるようになる場合があります。非常解錠装置と薄板でのラッチ押し込み以外は、無理をせず専門業者に任せるのが安全です。",
  },
  {
    title: "子どもを叱りながら対応する",
    desc: "閉じ込められた子どもを叱ると、パニックでドアから離れたり隠れたりして、内側からの解錠誘導ができなくなります。まず安心させて、ツマミの操作を落ち着いて誘導することが、最速の解決につながります。",
  },
  {
    title: "開いたあと、故障したラッチや錠をそのまま使い続ける",
    desc: "一度開いても、ラッチの故障や錠の不調が原因なら再発は時間の問題です。次は外出中や入浴中など、より条件の悪いタイミングで起きるかもしれません。原因となった部品は早めに交換しましょう。",
  },
];

const faqs = [
  {
    q: "トイレの鍵を外側から開ける方法はありますか？",
    a: "トイレに多い表示錠には、外側から開けられる非常解錠装置が付いているのが一般的です。ドアノブの外側中央や台座にある細い溝に硬貨やマイナスドライバーを差し込んで回すと解錠できます。小さな穴タイプは細い棒で押す・回す構造の製品もあります。これは緊急時のための正規の機能なので、閉じ込めの際はまずこの装置を探してください。",
  },
  {
    q: "子どもがトイレに閉じ込められました。どう対応すればいいですか？",
    a: "まずドア越しに穏やかに声を掛けて安心させ、内側のツマミを回すよう誘導します。できない場合は、外側の非常解錠装置（コイン溝）を硬貨で回して開けます。反応がない・体調が心配な場合は、ためらわず119番に通報してください。解決後は、非常解錠装置の使い方を家族で共有し、必要に応じて内鍵の位置や種類を見直すと再発への備えになります。",
  },
  {
    q: "非常解錠装置を回しても開きません。なぜですか？",
    a: "施錠ではなくラッチ（ドア側面の斜めのボルト）の故障で開かない可能性があります。ノブが空回りする、ノブの感触がいつもと違う場合はラッチ故障が濃厚です。ドアの隙間から薄い板でラッチを押し込むと開くことがありますが、構造によっては難しいため、無理をせず鍵の専門業者に依頼してください。開いたあとはラッチまたはノブ一式の交換が必要です。",
  },
  {
    q: "室内ドアの解錠を業者に頼むといくらかかりますか？",
    a: "料金は錠の種類・故障の状態・時間帯・出張距離によって変わるため、一概には言えません。依頼時に「施錠か故障か」「錠のタイプ」「中に人がいるか」を伝えたうえで、作業前に作業費・出張費を含む総額見積もりを必ず確認しましょう。緊急でない場合は複数社の見積もり比較も有効です。費用の考え方は当サイトの料金相場ページで解説しています。",
  },
];

const relatedLinks = [
  { href: "/shimedashi/", label: "締め出されたときの対処法", desc: "玄関の締め出しトラブルはこちら" },
  { href: "/kodomo-pet-kagi-taisaku/", label: "子ども・ペットの鍵トラブル対策", desc: "閉じ込めを予防する環境づくり" },
  { href: "/doorknob-koukan/", label: "ドアノブ・ラッチの故障と交換", desc: "空回り・戻らない症状の直し方" },
  { href: "/ryokin/", label: "鍵開け・鍵交換の料金相場", desc: "依頼前に知っておきたい費用の考え方" },
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
    { "@type": "ListItem", position: 2, name: "室内ドア・トイレの鍵が開かないとき" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "室内ドア・トイレの鍵が開かないときの対処法｜非常解錠装置（コイン溝）の使い方",
  description: "室内錠の非常解錠装置の使い方、子どもの閉じ込め時の対応手順、ラッチ故障との切り分け、破壊せずに開けるための一般知識を解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-10",
  dateModified: "2026-08-10",
};

export default function ShitsunaiToiletKagiPage() {
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
            <span className="text-text-secondary">室内ドア・トイレの鍵が開かないとき</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            室内ドア・トイレの鍵が開かないときの対処法｜非常解錠装置（コイン溝）の使い方
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月10日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：まず外側の非常解錠装置（コイン溝）を硬貨で回す。回しても開かないならラッチ故障を疑い、緊急時は119番、無理なこじ開けはしない</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              トイレなど室内ドアの多くには、外側から開けられる<strong>非常解錠装置（ドアノブ外側のコイン溝や小穴）</strong>が備わっています。閉じ込めが起きたら、まず中の人に声を掛けて内側からの解錠を誘導し、できなければ<strong>硬貨やマイナスドライバーで非常解錠装置を回します</strong>。回しても開かない場合は施錠ではなく<strong>ラッチの故障</strong>の可能性が高く、対処が変わります。中の人の反応がないなど緊急時は<strong>119番への通報を優先</strong>し、蹴破りや針金での無理な解錠は避けましょう。
            </p>
          </div>

          {/* 本文解説 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">室内ドアの鍵の基礎知識｜押さえておきたい4つのポイント</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            室内錠は玄関の鍵と違い、「緊急時に外から開けられること」を前提に設計されているものが多くあります。仕組みを知っていれば、閉じ込めの大半は壊さずに解決できます。
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
          <h2 className="text-xl font-bold text-text-primary mb-4">開かないときの対処4ステップ</h2>
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
          <h2 className="text-xl font-bold text-text-primary mb-4">やってはいけないNG行動</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">NG: {n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 業者判断 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">業者に依頼すべきケースと依頼時の注意</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            非常解錠装置で開かない、ラッチ故障で薄板の差し込みも効かない、錠の種類が分からないといった場合は、<strong>出張対応の鍵業者への依頼が確実</strong>です。生命に関わる緊急性があるなら業者の到着を待たず119番を優先してください。なお、玄関の外に締め出された場合は状況も対処も異なるため、<a href="/shimedashi/" className="text-primary underline">締め出されたときの対処法</a>を参照してください。開いたあとの故障部品の交換は<a href="/doorknob-koukan/" className="text-primary underline">ドアノブ・ラッチの故障と交換</a>で解説しています。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            依頼時は、施錠か故障か・錠のタイプ・中に人がいるかを伝え、作業前に作業費・出張費を含む総額見積もりを確認しましょう。費用感は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、依頼先の検討は<a href="/agents/" className="text-primary underline">鍵トラブル業者の比較</a>で確認できます。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">自力で開かない室内ドアは、壊す前に専門業者へ</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              破壊開放はドア交換の費用まで発生します。状況を伝えて、作業前の総額見積もりを確認してから依頼しましょう。緊急時は119番が最優先です。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">室内ドア・トイレの鍵のよくある質問</h2>
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
