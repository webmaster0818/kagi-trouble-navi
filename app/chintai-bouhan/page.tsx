import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "賃貸でもできる防犯強化｜原状回復OKの範囲で鍵まわりを強くする方法 | 鍵トラブルナビ",
  description:
    "賃貸住宅で原状回復できる範囲の防犯強化を一般知識として解説。工事不要の補助錠・窓用補助錠・防犯フィルム・センサーライト・スマートロック（貼り付け型）の選び方、管理会社への相談が必要なケース、退去時の原状回復の考え方まで。勝手にやってはいけないNG行動も紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/chintai-bouhan/" },
};

const methods = [
  {
    title: "工事不要の補助錠（ドア用）",
    desc: "賃貸の玄関防犯の第一候補が、ドアや枠を傷つけずに取り付けられる補助錠です。ドアの内側に粘着テープや挟み込みで固定するタイプ、外開きドアの枠に取り付けるタイプなどがあり、ネジ穴を開けないため原状回復の心配がほとんどありません。1枚のドアに錠が2つある「ワンドアツーロック」の状態を作れるので、開錠にかかる時間と手間を増やし、侵入を諦めさせる効果が期待できます。製品選びのポイントは補助錠の記事で詳しく解説しています。",
  },
  {
    title: "窓用補助錠・サッシ用ストッパー",
    desc: "窓のクレセント錠は本来「締め金具」であって防犯錠ではありません。サッシのレールに貼り付け・挟み込みで固定する窓用補助錠を追加すると、ガラスを割ってクレセント錠を回されても窓が開かない状態を作れます。数百円程度から入手できる手軽さながら効果的な対策で、換気用に少しだけ開けた位置で固定できるタイプもあります。粘着タイプを選べば原状回復も容易です。",
  },
  {
    title: "防犯フィルム",
    desc: "ガラス破り対策として、窓ガラスの内側に貼る防犯フィルムがあります。貫通までに時間がかかるほど侵入は諦められやすいため、クレセント錠まわりだけの部分貼りよりも全面貼りが理想とされ、性能の目安としてはCPマーク付きの製品が知られています。フィルムは剥がせるとはいえ、糊残りや網入りガラス・複層ガラスへの適合の問題があるため、貼る前に管理会社へ一声かけておくと退去時のトラブルを避けられます。",
  },
  {
    title: "センサーライト・防犯カメラ（置き型/電池式）",
    desc: "人の動きに反応して点灯するセンサーライトは、夜間の侵入者が最も嫌う「光」による対策です。電池式・ソーラー式ならコンセント工事が不要で、クランプやマグネットで固定すれば壁に穴を開けずに設置できます。玄関前やベランダに置くだけの防犯カメラ（電池式）も同様に原状回復が容易です。ただしベランダや共用廊下は共用部分にあたる場合があるため、設置場所によっては管理会社への確認が必要です。カメラは隣室や通行人が映り込まない画角にするなどプライバシーへの配慮も忘れずに。",
  },
  {
    title: "貼り付け型スマートロック",
    desc: "既存のサムターン（内側のつまみ）に粘着テープでかぶせて取り付けるタイプのスマートロックは、シリンダーを交換しないため賃貸でも導入しやすい防犯・利便性アップの選択肢です。オートロック機能により鍵のかけ忘れ（無締り）を防げるのが防犯面での最大の利点です。ただし電池切れ・粘着剥がれによる締め出しリスクがあるため、物理鍵は必ず持ち歩きましょう。詳しくはスマートロックの記事で解説しています。",
  },
];

const selfSteps = [
  {
    title: "まず費用ゼロの対策から始める",
    desc: "全ての外出時・在宅時に玄関と窓を施錠する、ゴミ出しの数分でも鍵をかける、郵便受けや玄関前にスペアキーを隠さない、SNSに鍵や自宅特定につながる写真を載せない。これらは今日からできて、どんな設備投資よりも効果の土台になる習慣です。空き巣の代表的な手口には「無締り」の狙い撃ちが含まれることが警察庁の防犯情報でも案内されています。",
  },
  {
    title: "自宅の弱点を確認する",
    desc: "玄関の鍵が古い刻みキー（ギザギザの鍵）か、窓はクレセント錠だけか、ベランダや共用廊下から侵入しやすい構造か、夜間の玄関前は暗いか。住戸ごとに弱点は違います。1階や角部屋は窓対策を、上層階でもベランダ伝いの侵入を想定して掃き出し窓の対策を優先するなど、弱点に合わせて予算を配分しましょう。",
  },
  {
    title: "原状回復しやすい製品を選ぶ",
    desc: "賃貸での製品選びの基準は「ネジ穴を開けない」「強力すぎる粘着で塗装を傷めない」の2点です。商品説明に「賃貸OK」「工事不要」「穴あけ不要」とある製品を選び、取り付け前に目立たない場所で粘着テープの影響を確認すると安心です。退去時は剥がし跡を掃除し、取り付け前の状態に戻せることがゴールです。",
  },
  {
    title: "管理会社・大家に相談する",
    desc: "シリンダー交換や穴あけを伴う工事はもちろん、防犯フィルムの全面貼りや共用部分への設置など、判断に迷うものは事前に管理会社へ相談しましょう。防犯目的であれば前向きに承諾されることも多く、物件によっては貸主負担で鍵をグレードアップしてくれる場合もあります。無断で行って退去時に原状回復費用を請求されるより、先に確認するほうが確実に安上がりです。",
  },
  {
    title: "鍵そのものを替えたい場合は承諾を得て交換する",
    desc: "「工事不要の対策では不安」「入居時から鍵が古い」という場合は、管理会社の承諾を得たうえでシリンダーを防犯性の高いものに交換する方法があります。この場合、費用を誰が負担するか、退去時に元のシリンダーへ戻す必要があるか（元の部品の保管）を必ず先に確認しましょう。費用負担の考え方は賃貸の鍵交換費用の記事で詳しく解説しています。",
  },
];

const ngActions = [
  {
    title: "無断でシリンダー交換・穴あけ工事をする",
    desc: "賃貸住戸の鍵や扉は貸主の所有物です。防犯目的でも、無断でのシリンダー交換、ドアや枠へのネジ止め・穴あけは契約違反となり、退去時の原状回復費用や交換したことによるトラブルの原因になります。必ず事前に管理会社・大家の承諾を得ましょう。",
  },
  {
    title: "共用部分に勝手に設備を置く",
    desc: "共用廊下・ベランダ（避難経路）・外壁は共用部分にあたることが多く、カメラやライトの設置、物を置くこと自体が管理規約で制限されている場合があります。避難ハッチや隔て板の周りを塞ぐのは安全上も厳禁です。設置前に管理会社へ確認してください。",
  },
  {
    title: "「オートロック付きだから安心」と油断する",
    desc: "建物のエントランスにオートロックがあっても、住人の後に続いて入る「共連れ」などで部外者が入ってしまうことはあり得ます。オートロック付き物件でも玄関・窓の施錠と住戸単位の対策は必要です。",
  },
  {
    title: "強力な粘着剤や両面テープを塗装面に多用する",
    desc: "原状回復のつもりで貼ったものでも、強力すぎる粘着剤は剥がす時に塗装や化粧シートごと剥がしてしまうことがあります。跡が残れば結局補修費がかかるため、「剥がせる」ことをうたう製品を選び、目立たない場所で試してから使いましょう。",
  },
];

const faqs = [
  {
    q: "賃貸でも勝手に鍵を交換していいですか？",
    a: "無断での交換はNGです。賃貸住戸の鍵・シリンダーは貸主の設備にあたるため、防犯目的であっても管理会社・大家の事前承諾が必要です。承諾が得られれば、費用の負担者と退去時に元のシリンダーへ戻すかどうかを確認したうえで交換しましょう。まずは工事不要の補助錠など、承諾のハードルが低い対策から始めるのも現実的です。費用負担の考え方は賃貸の鍵交換費用の記事で解説しています。",
  },
  {
    q: "原状回復できる防犯グッズにはどんなものがありますか？",
    a: "代表的なのは、粘着・挟み込みで取り付ける工事不要のドア用補助錠、サッシに付ける窓用補助錠、置き型・電池式のセンサーライトや防犯カメラ、サムターンに貼り付けるタイプのスマートロックなどです。いずれもネジ穴を開けずに設置でき、退去時に取り外して元に戻せます。防犯フィルムは剥がせますが糊残りの可能性があるため、貼る前に管理会社へ確認しておくと安心です。",
  },
  {
    q: "賃貸の防犯対策は何から始めるべきですか？",
    a: "まず費用ゼロの施錠習慣（全ての外出・在宅時に玄関と窓を施錠、スペアキーを屋外に隠さない）から始めてください。次に、玄関には工事不要の補助錠を追加してワンドアツーロックに、窓には窓用補助錠を追加するのが優先度の高い設備対策です。1階や角部屋など窓からの侵入リスクが高い住戸は、窓対策を優先しましょう。",
  },
  {
    q: "退去時に防犯グッズはどうすればいいですか？",
    a: "自分で取り付けたものは取り外して持ち出し、粘着跡があれば清掃して入居時の状態に戻すのが基本です。管理会社の承諾を得てシリンダー交換をした場合は、承諾時の取り決めに従い、元のシリンダーに戻すか、そのまま引き渡すかを確認してください。承諾時のやり取り（メール等）を保管しておくと、退去時の認識違いを防げます。",
  },
];

const relatedLinks = [
  { href: "/chintai-kagi-koukan-hiyou/", label: "賃貸の鍵交換費用は誰が負担？", desc: "承諾の取り方と費用負担の考え方" },
  { href: "/hojo-jou/", label: "補助錠の選び方とワンドアツーロック", desc: "工事不要タイプの選び方も解説" },
  { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口と鍵の関係", desc: "無締り・ガラス破りなど手口別の対策" },
  { href: "/smart-lock/", label: "スマートロックの基礎知識", desc: "貼り付け型の仕組みと注意点" },
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
    { "@type": "ListItem", position: 2, name: "賃貸でもできる防犯強化" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "賃貸でもできる防犯強化｜原状回復OKの範囲で鍵まわりを強くする方法",
  description: "工事不要の補助錠・防犯フィルム・センサーライトなど、賃貸で原状回復できる範囲の防犯強化と管理会社への相談ポイントを一般知識として解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-09",
  dateModified: "2026-08-09",
};

export default function ChintaiBouhanPage() {
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
            <span className="text-text-secondary">賃貸でもできる防犯強化</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            賃貸でもできる防犯強化｜原状回復OKの範囲で鍵まわりを強くする方法
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月9日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：賃貸の防犯は「工事不要の後付けグッズ」＋「施錠習慣」で十分強化できる</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              賃貸住宅では鍵や扉は貸主の所有物なので勝手な交換・穴あけはNGですが、<strong>工事不要の補助錠・窓用補助錠・防犯フィルム・電池式センサーライト・貼り付け型スマートロック</strong>など、原状回復できる範囲でも防犯は大きく強化できます。基本は<strong>玄関をワンドアツーロックにし、窓にクレセント錠以外の錠を足し、施錠を徹底する</strong>こと。シリンダー交換など設備に手を入れたい場合は、必ず<strong>管理会社・大家の事前承諾</strong>を取りましょう。
            </p>
          </div>

          {/* 前提 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">賃貸の防犯の大前提：「原状回復」と「承諾」の2つのルール</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            賃貸住宅の玄関ドア・鍵・窓・壁は借主の持ち物ではなく、退去時には入居時の状態に戻す<strong>原状回復</strong>が原則です。そのため防犯強化は「①ネジ穴や工事を伴わない後付けグッズで対策する」「②設備に手を入れる場合は管理会社・大家の承諾を得る」という2つのルールの中で進めるのが基本になります。幸い、現在は賃貸向けの工事不要な防犯グッズが充実しており、持ち家に近い水準の対策が原状回復可能な範囲で実現できます。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            狙われやすいポイントは持ち家と同じで、<strong>無締り（鍵のかけ忘れ）と窓</strong>が代表的な侵入経路として警察庁の防犯情報「住まいる防犯110番」でも案内されています。手口の全体像は<a href="/akisu-shinnyu-teguchi/" className="text-primary underline">空き巣の侵入手口と鍵の関係</a>で解説しています。
          </p>

          {/* 方法 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">原状回復OKでできる防犯強化5つの方法</h2>
          <div className="space-y-3 mb-10">
            {methods.map((m, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-4">
                <p className="font-bold text-primary text-sm mb-1.5">
                  <span className="inline-block bg-surface-alt rounded px-2 py-0.5 text-xs font-bold text-text-primary mr-2">方法{i + 1}</span>
                  {m.title}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* 自分でできること */}
          <h2 className="text-xl font-bold text-text-primary mb-4">進め方：費用ゼロの習慣から管理会社への相談まで</h2>
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
          <h2 className="text-xl font-bold text-text-primary mb-4">業者に相談したほうがよいケース</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            工事不要のグッズで足りるのが賃貸防犯の基本ですが、<strong>管理会社の承諾を得てシリンダーを防犯性の高いものに交換する場合や、承諾済みの補助錠をネジ止めでしっかり取り付けたい場合</strong>は、鍵の専門業者に依頼すると採寸ミスや取り付け不良の心配がありません。防犯目的の作業は緊急対応と違って時間に余裕があるため、複数社から見積もりを取って比較しやすいのも利点です。依頼時は「賃貸物件で、管理会社の承諾を得ている」ことを伝え、部品代・作業費・出張費を含む総額見積もりを作業前に確認しましょう。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            費用感は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、依頼先の検討は<a href="/agents/" className="text-primary underline">鍵トラブル業者の比較</a>で確認してください。交換費用を誰が負担するかは<a href="/chintai-kagi-koukan-hiyou/" className="text-primary underline">賃貸の鍵交換費用の記事</a>で詳しく解説しています。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">承諾を得た鍵交換・補助錠の取り付けは、実績のある業者に相談</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              賃貸での作業経験が豊富な業者なら、原状回復を見据えた部品選びまで相談できます。作業前の総額見積もりを確認してから依頼しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">賃貸の防犯強化のよくある質問</h2>
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
