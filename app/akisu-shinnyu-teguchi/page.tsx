import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "空き巣の侵入手口と鍵の関係｜無締り・ガラス破り・合鍵への対策をわかりやすく解説 | 鍵トラブルナビ",
  description:
    "空き巣の代表的な侵入手口（無締り＝鍵のかけ忘れ、ガラス破り、合鍵の悪用、ピッキング、サムターン回しなど）と、鍵まわりでできる対策を一般知識として解説。警察庁「住まいる防犯110番」で公表されている手口の考え方、CP認定錠・補助錠・ワンドアツーロックの役割、今日からできる防犯チェックを紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/akisu-shinnyu-teguchi/" },
};

const teguchi = [
  {
    title: "無締り（鍵のかけ忘れ）",
    desc: "実は空き巣被害でもっとも基本的な侵入経路として警察が繰り返し注意喚起しているのが「無締り」、つまり鍵をかけていない玄関や窓からの侵入です。「ゴミ出しの数分だけ」「2階の窓だから」といった短時間・高所の油断が狙われます。どれほど高性能な鍵を付けても、施錠しなければ防犯性能はゼロです。まずは在宅中も含めて全ての出入口・窓を施錠する習慣が、費用ゼロでできる最大の空き巣対策です。",
  },
  {
    title: "ガラス破り",
    desc: "窓ガラスの一部を割り、そこから手を入れてクレセント錠（窓の半月形の締め金具）を回して侵入する手口です。戸建て住宅では窓からの侵入が大きな割合を占めることが警察庁の広報でも案内されています。ドライバーでガラスの隅を静かに割る「こじ破り」など、大きな音を立てない手法もあるため、「割れたら音で気づくはず」という思い込みは危険です。対策は防犯フィルムや合わせガラス、窓用補助錠でクレセント錠だけに頼らない構造にすることです。",
  },
  {
    title: "合鍵の悪用・不正入手",
    desc: "郵便受けや植木鉢の下に隠したスペアキーを使われる、鍵番号を盗み見られて合鍵を作られる、退去した前の入居者や元交際相手が合鍵を持ち続けている、といった「正規の鍵で開けられてしまう」ケースです。侵入の痕跡が残りにくく、被害に気づくのが遅れがちなのが特徴です。屋外にスペアキーを隠さない、鍵の写真をSNSに載せない、中古物件や賃貸への入居時・人間関係の変化があった時は鍵交換を検討する、といった対策が有効です。",
  },
  {
    title: "ピッキング・鍵穴の破壊",
    desc: "ピッキングは特殊な工具で鍵穴内部のピンを操作して開ける手口、破壊系はドリルなどでシリンダーそのものを壊す手口です。古い刻みキー（ギザギザの鍵）のシリンダーはピッキングへの耐性が低いものがあり、注意が必要です。現在は耐ピッキング性能・耐破壊性能を高めたディンプルキーやCP認定シリンダーが普及しており、「開けるのに時間がかかる鍵」に替えることが直接の対策になります。",
  },
  {
    title: "サムターン回し・カム送り",
    desc: "サムターン回しは、ドアに開けた小さな穴やドアスコープ・郵便受けから工具を入れ、内側のつまみ（サムターン）を直接回して開ける手口です。カム送りは鍵穴を経由せず錠の機構を直接操作する手口で、いずれも「鍵穴をピッキングしない」のが特徴です。防犯サムターンやサムターンカバーの取り付け、対策済み錠への交換が有効です。詳しくはサムターン回し対策の記事で解説しています。",
  },
];

const taisaku = [
  {
    title: "全ての出入口と窓を「必ず施錠」する",
    desc: "費用ゼロで今日からできる最重要の対策です。短時間の外出、在宅中、2階以上の窓も例外にしないこと。家族全員でルール化し、外出時は玄関だけでなく勝手口・浴室やトイレの小窓まで確認する習慣をつけましょう。無締りを狙う手口には、どんな高級錠も無力です。",
  },
  {
    title: "自宅の鍵の防犯性能を確認する",
    desc: "鍵の側面がギザギザの刻みキーで、10年以上使っているなら、耐ピッキング性能の高いシリンダーへの交換を検討する価値があります。目安になるのが、官民合同会議の試験基準を満たした建物部品に付く「CP認定」マークです。CP認定錠は「侵入に5分以上耐える」ことを目安とした試験をクリアしており、侵入犯が犯行を諦めやすい時間の壁を作れます。詳しくはCP認定錠の記事を参照してください。",
  },
  {
    title: "ワンドアツーロック（1ドア2ロック）にする",
    desc: "1枚のドアに錠を2つ設けるワンドアツーロックは、警察や防犯機関が広く推奨する基本対策です。単純に開錠の手間が2倍になるだけでなく、外から見て補助錠の存在が分かること自体に「この家は面倒だ」と思わせる抑止効果があります。賃貸でも取り付けられる工事不要タイプの補助錠もあります。選び方は補助錠の記事で解説しています。",
  },
  {
    title: "窓の防犯を強化する",
    desc: "戸建てでは窓が主要な侵入経路です。クレセント錠は本来「締め金具」であって防犯錠ではないため、窓用補助錠を追加し、ガラスには防犯フィルム（CPマーク付きの貫通に時間がかかるタイプ）を検討しましょう。面格子や補助錠の併用で「破っても開かない窓」に近づけることが目標です。",
  },
  {
    title: "合鍵の管理を見直す",
    desc: "屋外にスペアキーを隠すのは、侵入犯に鍵を渡しているのと同じです。郵便受け・植木鉢・メーターボックスなどの「定番の隠し場所」は真っ先に探されます。スペアは家族が身につけて管理し、鍵番号が写った写真をSNSに投稿しない、登録制の鍵はセキュリティカードを鍵と別に保管する、といった管理も重要です。",
  },
];

const ngActions = [
  {
    title: "「うちは狙われない」と思い込む",
    desc: "空き巣は留守がち・侵入しやすい・逃げやすい家を下見で選ぶとされ、家の資産価値とは関係なく被害に遭います。オートロックのマンション高層階でも無締りの被害は起きています。「自分は大丈夫」という思い込みが無締りにつながる最大の要因です。",
  },
  {
    title: "統計の数字を確かめず対策の優先順位を決める",
    desc: "侵入手口の傾向は年ごとに変化します。警察庁の「住まいる防犯110番」では手口別・建物種別の統計が公表されているので、最新の公表値は警察庁のサイトで確認し、自宅のタイプ（戸建て／共同住宅）に合った優先順位で対策しましょう。",
  },
  {
    title: "高性能な鍵を1つ付けて安心してしまう",
    desc: "ディンプルキーやCP認定錠はピッキング対策として有効ですが、ガラス破りや無締りには効果がありません。玄関の鍵・窓・施錠習慣の3点をセットで考えないと、対策の穴がそのまま侵入経路になります。",
  },
  {
    title: "被害に気づいた後、室内を触ってしまう",
    desc: "帰宅時に窓ガラスが割れている、ドアが開いているなど異変に気づいたら、犯人が室内に残っている危険があるため中に入らず、安全な場所から110番通報してください。室内の物に触ると指紋などの証拠が失われます。鍵の交換や修理は、警察の現場確認が済んでからです。",
  },
];

const faqs = [
  {
    q: "空き巣の侵入手口で一番多いのは何ですか？",
    a: "警察庁の「住まいる防犯110番」では、住宅への侵入窃盗の手口別の統計が公表されており、無締り（鍵のかけ忘れ）とガラス破りが代表的な手口として挙げられています。割合や順位は年や建物の種類（戸建て・共同住宅）によって変わるため、最新の公表値は警察庁のサイトで確認してください。いずれにせよ「施錠の徹底」と「窓の防犯」が対策の二本柱になることは変わりません。",
  },
  {
    q: "ピッキング対策には何が有効ですか？",
    a: "耐ピッキング性能の高いシリンダーへの交換が直接の対策です。目安として、鍵表面に丸いくぼみが並ぶディンプルキーや、官民合同会議の防犯性能試験をクリアした製品に付くCP認定マークが参考になります。あわせて補助錠を追加してワンドアツーロックにすると、開錠にかかる時間をさらに延ばせます。侵入に時間がかかるほど犯行は諦められやすいとされています。",
  },
  {
    q: "賃貸住宅でもできる空き巣対策はありますか？",
    a: "あります。施錠の徹底と合鍵の管理は費用ゼロで今日からできます。設備面では、工事不要で取り付けられる補助錠、窓用補助錠、貼るタイプの防犯フィルム、置き型のセンサーライトなどが原状回復しやすい選択肢です。シリンダー交換をしたい場合は貸主の設備にあたるため、必ず管理会社・大家の承諾を取ってから行いましょう。詳しくは賃貸の防犯強化の記事で解説しています。",
  },
  {
    q: "空き巣に入られた後、鍵はすぐ交換すべきですか？",
    a: "まず室内に入らず110番通報し、警察の現場確認を受けるのが先です。そのうえで、合鍵を作られた可能性や鍵・シリンダーの損傷を考えると、早めの交換をおすすめします。侵入経路になった窓やドアの補強も同時に検討しましょう。交換費用は鍵の種類や時間帯で変わるため、作業前に総額見積もりを確認してください。費用感は料金相場のページで解説しています。",
  },
];

const relatedLinks = [
  { href: "/cp-nintei-jou/", label: "CP認定錠とは？防犯性能の公的な目印", desc: "5分以上の侵入抵抗を目安とした認定制度" },
  { href: "/hojo-jou/", label: "補助錠の選び方とワンドアツーロック", desc: "賃貸でも使える工事不要タイプも紹介" },
  { href: "/thumb-turn-taisaku/", label: "サムターン回し対策の基本", desc: "内側のつまみを狙う手口と防ぎ方" },
  { href: "/dimple-key/", label: "ディンプルキーとは？防犯性の仕組み", desc: "ピッキングに強い鍵の構造を解説" },
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
    { "@type": "ListItem", position: 2, name: "空き巣の侵入手口と鍵の関係" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "空き巣の侵入手口と鍵の関係｜無締り・ガラス破り・合鍵への対策",
  description: "空き巣の代表的な侵入手口と、CP認定錠・補助錠・ワンドアツーロックなど鍵まわりの対策を一般知識として解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-09",
  dateModified: "2026-08-09",
};

export default function AkisuShinnyuTeguchiPage() {
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
            <span className="text-text-secondary">空き巣の侵入手口と鍵の関係</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            空き巣の侵入手口と鍵の関係｜無締り・ガラス破り・合鍵への対策をわかりやすく解説
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月9日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：空き巣対策の基本は「必ず施錠」＋「時間のかかる鍵」＋「窓の防犯」の3点セット</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              空き巣の代表的な侵入手口は、<strong>無締り（鍵のかけ忘れ）・ガラス破り・合鍵の悪用・ピッキング・サムターン回し</strong>などです。警察庁の「住まいる防犯110番」でも手口別の傾向が公表されており、対策の基本は<strong>全ての出入口と窓を必ず施錠すること</strong>、玄関は<strong>CP認定錠など開錠に時間のかかる鍵＋補助錠のワンドアツーロック</strong>にすること、そして<strong>窓を補助錠や防犯フィルムで強化すること</strong>です。侵入に時間がかかる家ほど、犯行は諦められやすくなります。
            </p>
          </div>

          {/* 手口 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">空き巣の代表的な侵入手口5つと鍵の関係</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            空き巣（留守中の住宅を狙う侵入窃盗）の手口は、警察庁が運営する防犯情報サイト「住まいる防犯110番」などで一般に公表されています。手口ごとに「鍵の何が弱点として狙われるのか」が異なるため、まずは代表的な手口を知ることが対策の第一歩です。なお、手口別の割合など具体的な統計数値は年によって変わるため、最新の公表値は警察庁のサイトで確認してください。
          </p>
          <div className="space-y-3 mb-10">
            {teguchi.map((t, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-4">
                <p className="font-bold text-primary text-sm mb-1.5">
                  <span className="inline-block bg-surface-alt rounded px-2 py-0.5 text-xs font-bold text-text-primary mr-2">手口{i + 1}</span>
                  {t.title}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* なぜ時間が対策になるか */}
          <h2 className="text-xl font-bold text-text-primary mb-4">「侵入に5分かかる家」が強い理由</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            空き巣対策で共通して重要なのは<strong>「侵入にかかる時間を延ばす」</strong>という考え方です。侵入に手間取るほど人目につくリスクが高まるため、時間がかかると分かった時点で犯行を諦める傾向があると警察や防犯機関が広く案内しています。この考え方を製品レベルで形にしたのが、官民合同会議の試験基準（侵入までに5分以上の抵抗を目安）を満たした建物部品に付く<strong>CP認定マーク</strong>です。玄関錠だけでなく、ガラスやフィルム、窓の錠にもCP認定品があります。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            逆に言えば、無締りの家は「侵入0秒」の家です。高性能な鍵への交換や補助錠の追加は有効な投資ですが、その効果は<strong>毎回きちんと施錠する習慣</strong>があって初めて成立します。CP認定の詳しい内容は<a href="/cp-nintei-jou/" className="text-primary underline">CP認定錠の記事</a>で、サムターン回しへの個別対策は<a href="/thumb-turn-taisaku/" className="text-primary underline">サムターン回し対策の記事</a>で解説しています。
          </p>

          {/* 自分でできること */}
          <h2 className="text-xl font-bold text-text-primary mb-4">今日からできる空き巣対策チェックリスト</h2>
          <ol className="space-y-3 mb-10">
            {taisaku.map((s, i) => (
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
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵の交換・補助錠の取り付けを業者に頼むときのポイント</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            施錠習慣や合鍵管理は自分でできますが、<strong>シリンダー交換や補助錠の本格的な取り付けは、採寸ミスや取り付け不良がそのまま防犯上の弱点になる</strong>ため、不安があれば鍵の専門業者への依頼が確実です。依頼時は「CP認定品またはそれに準じる性能表示のある部品を使いたい」と伝え、部品代・作業費・出張費を含む総額見積もりを作業前に必ず確認しましょう。防犯目的の交換は緊急の鍵開けと違って時間に余裕があるので、複数社の見積もり比較がしやすい依頼です。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            費用は選ぶ部品のグレードや作業内容によって大きく変わるため、まず<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で費用感をつかみ、<a href="/agents/" className="text-primary underline">鍵トラブル業者の比較</a>で依頼先を検討してください。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">防犯目的の鍵交換・補助錠取り付けは、実績のある業者に相談</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              手口に合った部品選びから取り付けまで任せられる業者なら、対策の穴が生まれません。作業前の総額見積もりを確認してから依頼しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">空き巣の侵入手口のよくある質問</h2>
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
