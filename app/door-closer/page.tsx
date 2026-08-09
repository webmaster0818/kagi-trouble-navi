import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ドアクローザーの不調と鍵の関係｜「鍵がかからない」の原因が閉まる速度にあるケースを解説 | 鍵トラブルナビ",
  description:
    "ドアが最後まで閉まらない・鍵がかからない原因が、実は錠前ではなくドアクローザーの不調というケースを一般知識として解説。速度調整弁の仕組みと調整時の注意、油漏れという交換サイン、ラッチ不良との見分け方、業者に相談すべき症状をまとめました。",
  alternates: { canonical: "https://kagi-trouble-navi.com/door-closer/" },
};

const basics = [
  {
    title: "ドアクローザーは「開いたドアを適切な速さで閉める」装置",
    desc: "ドアクローザーは、玄関ドアなどの上部に付いている箱型の装置で、開いたドアをバネの力で閉め、油圧の抵抗で閉まる速度を制御しています。「バタン！」と勢いよく閉まらないのはこの装置のおかげです。多くの製品では、閉まり始めの速度（第1速度）と、閉まり切る直前の速度（第2速度）を、本体の調整弁（調整ネジ）で別々に調整できる構造になっています。ドアの閉まり方に違和感が出たとき、錠前ではなくこの装置が原因になっていることが意外と多いのです。",
  },
  {
    title: "「鍵がかからない」の隠れた原因になりやすい理由",
    desc: "ドアクローザーが不調で閉まる速度が遅すぎたり、閉まり切る手前で止まってしまうと、ドアが半ドア状態になり、ラッチ（斜めのツメ）が受け座（ストライク）に収まりません。この状態では当然デッドボルト（かんぬき）も出せず、「鍵がかからない」「オートロックが作動しない」という症状として現れます。利用者は錠前の故障を疑いがちですが、実際はドアを最後まで押し込む力が足りていないだけ、というケースです。手でドアを最後まで押し込むと普通に施錠できるなら、錠前ではなく閉まる力・建て付け側の問題を疑うのが筋です。",
  },
  {
    title: "ラッチ不良との見分け方：「手で閉めれば掛かるか」がチェックポイント",
    desc: "切り分けはシンプルです。ドアをゆっくり手で最後まで閉めて、鍵が普通にかかるならラッチや錠前は正常で、疑うべきはドアクローザーの速度設定や蝶番の建て付けです。逆に、手で完全に閉めてもラッチが引っかかる・鍵が渋いなら、ラッチの動作不良、受け座のズレ、シリンダーの摩耗など錠前側の問題です。この一手間の切り分けをせずに「鍵が壊れた」と思い込むと、原因と違う箇所の修理を検討してしまうことになります。錠前側の症状は鍵がかからない・回らないときの記事で解説しています。",
  },
  {
    title: "油漏れは寿命のサイン。調整では直らない",
    desc: "ドアクローザーは油圧で速度を制御しているため、本体から油がにじむ・垂れる「油漏れ」が起きると速度制御が効かなくなり、ドアが勢いよく閉まるようになります。油漏れは内部の密閉が失われたサインで、調整弁をいくら回しても直りません。この状態は本体交換が基本的な対処になります。ドアが「バタン！」と閉まる状態は、指はさみなどの事故や、衝撃によるドア・錠前の歪みにもつながるため、放置しないことが大切です。",
  },
];

const checkSteps = [
  {
    title: "症状の切り分け：手で閉めて施錠できるか確認する",
    desc: "まずドアをゆっくり手で最後まで閉め、施錠できるか試します。施錠できるなら錠前は正常で、原因は「閉まる力・速度」側です。次にドアを開けて手を離し、閉まり方を観察します。途中で止まる・極端に遅い・逆に勢いよく閉まる、のどれに当てはまるかで対処が変わります。あわせて本体からの油漏れの有無も目視で確認しましょう。",
  },
  {
    title: "本体・アームの取り付けネジの緩みを確認する",
    desc: "ドアクローザー本体やアームの取り付けネジが緩むと、閉まる動きが乱れたり異音の原因になります。ドライバーで各ネジの緩みを確認し、緩んでいれば締め直します。長年の開閉で少しずつ緩むのはよくあることで、これだけで閉まり方が改善するケースもあります。蝶番側のネジの緩みも、ドアの傾き＝半ドアの原因になるため同時に点検しましょう。",
  },
  {
    title: "速度調整弁を「少しずつ」回して閉まる速度を整える",
    desc: "速度が合っていないだけなら、本体の速度調整弁で調整できます。取扱説明書（メーカーサイトでも型番検索で確認可能）で第1速度・第2速度の弁の位置を確認し、マイナスドライバーなどで少しずつ回して閉まり方を確かめます。締める方向で遅く、緩める方向で速くなるのが一般的です。必ず「わずかに回しては確認」を繰り返し、一度に大きく回さないでください。",
  },
  {
    title: "調整で直らない・油漏れがあるなら交換を検討する",
    desc: "調整弁で改善しない、油漏れがある、本体やアームに破損・変形があるという場合は、本体の寿命・故障と考えて交換を検討します。交換にはドアに合った機種選定（開き勝手・取り付け形式・ドアのサイズや重量への適合）が必要で、既存のネジ穴を流用できるかどうかも機種によって異なります。DIYの難易度は低くないため、選定に不安があれば業者への相談が確実です。",
  },
];

const ngActions = [
  {
    title: "速度調整弁を一度に大きく回す・限界まで緩める",
    desc: "調整弁を緩めすぎると、内部の油が漏れ出して本体が故障する原因になります。油圧が抜ければ速度制御は二度と効きません。調整は必ず少しずつ、閉まり方を確認しながら行い、回しても手応えがおかしいときは中断しましょう。",
  },
  {
    title: "半ドアの原因を確かめずに錠前の修理・交換を進める",
    desc: "「鍵がかからない」の原因がドアクローザーや建て付けにある場合、錠前を交換しても症状は直りません。手で閉めれば施錠できるかという切り分けを先に行い、原因に合った対処を選びましょう。",
  },
  {
    title: "油漏れした本体を調整や注ぎ足しで直そうとする",
    desc: "漏れた油を拭いて調整弁を回しても、失われた油圧は戻りません。市販の油を注ぎ足すこともできない構造です。油漏れは交換のサインと割り切り、勢いよく閉まる状態を放置しないようにしましょう。",
  },
  {
    title: "ドアが閉まらないからと、ドアクローザーを取り外して使い続ける",
    desc: "取り外せば一時的に開閉はできますが、強風でドアが煽られて人やドア本体・錠前を傷める危険があります。玄関ドアの重さを制御なしで受け止めるのは想像以上に危険です。不調のまま外して放置せず、調整または交換で解決しましょう。",
  },
];

const faqs = [
  {
    q: "ドアが最後まで閉まらず鍵がかかりません。錠前の故障ですか？",
    a: "まずドアを手でゆっくり最後まで閉めて、施錠できるか確認してください。施錠できるなら錠前は正常で、ドアクローザーの速度設定が遅すぎるか、蝶番の緩みなど建て付けの問題が疑われます。速度調整弁を少しずつ締め直す・ネジの緩みを点検することで改善することが多いです。手で閉めても掛からない場合は、ラッチや受け座、シリンダー側の問題を疑いましょう。",
  },
  {
    q: "ドアクローザーの速度調整は自分でできますか？",
    a: "多くの製品は本体の速度調整弁をドライバーで回すだけで調整でき、DIYの範囲です。ただし「少しずつ回して閉まり方を確認する」を徹底してください。一度に大きく回したり緩めすぎたりすると、油が漏れて本体が故障し、調整では直らなくなります。弁の位置や回す方向は製品によって異なるため、型番で取扱説明書を確認してから作業するのが安全です。",
  },
  {
    q: "ドアクローザーから油が垂れています。どうすればいいですか？",
    a: "油漏れは内部の油圧が失われつつあるサインで、調整や注ぎ足しでは直せません。速度制御が効かなくなりドアが勢いよく閉まるようになるため、指はさみ事故やドア・錠前の損傷につながる前に、本体交換を検討してください。交換はドアの開き勝手・サイズ・重量に適合する機種選定が必要なので、不安があれば業者に相談するのが確実です。",
  },
  {
    q: "ドアクローザーの不調を業者に頼む場合、鍵屋でいいのですか？",
    a: "ドアクローザーの調整・交換は、鍵業者（ドア周りの金物対応をうたう業者）やドア専門業者、建具業者などが対応します。錠前の不調も同時に疑われる場合は、錠前とドア金物の両方を診られる業者だと切り分けから任せられて効率的です。依頼時は症状（閉まり方・油漏れの有無・手で閉めれば施錠できるか）を伝え、作業前に部品代・作業費・出張費を含む総額見積もりを確認しましょう。",
  },
];

const relatedLinks = [
  { href: "/kagi-mawaranai/", label: "鍵が回らないときの対処法", desc: "錠前側の症状の切り分けと直し方" },
  { href: "/kagi-koukan-timing/", label: "鍵交換のタイミングと目安", desc: "ドア周りの見直しとあわせて検討" },
  { href: "/ryokin/", label: "鍵開け・鍵交換の料金相場", desc: "ドア周りの作業を頼む前の費用感" },
  { href: "/agents/", label: "鍵トラブル業者の比較", desc: "ドア金物に対応できる依頼先の検討" },
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
    { "@type": "ListItem", position: 2, name: "ドアクローザーの不調と鍵の関係" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ドアクローザーの不調と鍵の関係｜「鍵がかからない」の原因が閉まる速度にあるケース",
  description: "ドアクローザーの速度調整弁の仕組みと調整時の注意、油漏れという交換サイン、ラッチ不良・錠前故障との見分け方を一般知識として解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-09",
  dateModified: "2026-08-09",
};

export default function DoorCloserPage() {
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
            <span className="text-text-secondary">ドアクローザーの不調と鍵の関係</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            ドアクローザーの不調と鍵の関係｜「鍵がかからない」の原因が閉まる速度にあるケースを解説
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月9日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：手で閉めて施錠できるなら錠前は正常。疑うべきはドアクローザーの速度設定と建て付け。調整弁は「少しずつ」、油漏れは交換</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              「ドアが最後まで閉まらず鍵がかからない」という症状は、錠前の故障ではなく<strong>ドアクローザー（ドア上部の閉扉装置）の速度不調や取り付けネジの緩み</strong>が原因のことがよくあります。切り分けは<strong>ドアを手でゆっくり閉めて施錠できるか</strong>を試すだけ。施錠できるなら錠前は正常です。速度は本体の調整弁で直せますが、<strong>一度に大きく回すと油が漏れて故障</strong>します。すでに油漏れしている場合は調整では直らず、本体交換が基本です。
            </p>
          </div>

          {/* 本文解説 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">ドアクローザーと鍵の関係｜押さえておきたい4つのポイント</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            ドアクローザーは地味な装置ですが、鍵の掛かり具合と密接に関係しています。誤診しやすいポイントを整理します。
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
          <h2 className="text-xl font-bold text-text-primary mb-4">自分でできる点検・調整の4ステップ</h2>
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
          <h2 className="text-xl font-bold text-text-primary mb-4">調整で直らないとき・原因が切り分けられないときは業者へ</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            速度調整とネジの締め直しで改善しない、油漏れしている、機種選定を伴う交換が必要——この段階まで来たら、業者への依頼が確実です。錠前側の不調も同時に疑われる場合は、<strong>錠前とドア金物の両方に対応できる業者</strong>なら原因の切り分けから任せられます。錠前側の症状の見方は<a href="/kagi-mawaranai/" className="text-primary underline">鍵が回らないときの対処法</a>も参考にしてください。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            依頼時は、症状（閉まり方・油漏れの有無・手で閉めれば施錠できるか）を電話で伝えると話が早く、概算も出やすくなります。作業前には部品代・作業費・出張費を含む総額見積もりを必ず確認しましょう。費用感は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、依頼先の検討は<a href="/agents/" className="text-primary underline">鍵トラブル業者の比較</a>で確認できます。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">ドア周りの不調をまとめて相談できる業者を探す</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              ドアクローザーと錠前、どちらが原因でも診てもらえる業者なら二度手間がありません。作業前の総額見積もりを確認してから依頼しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">ドアクローザーのよくある質問</h2>
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
