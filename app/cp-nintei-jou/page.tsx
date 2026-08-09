import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CP認定錠とは？防犯性能の物差しになる「防犯建物部品」制度をわかりやすく解説 | 鍵トラブルナビ",
  description:
    "CP認定錠（防犯性能の高い建物部品）とは何かを一般知識として解説。官民合同会議による認定制度の仕組み、侵入まで5分以上抵抗するという試験基準の考え方、CPマークの見分け方、鍵交換で選ぶ際のポイントまで紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/cp-nintei-jou/" },
};

const basics = [
  {
    title: "CPマークとは何か",
    desc: "CPは「防犯（Crime Prevention）」の頭文字で、防犯性能の高い建物部品に表示されるマークです。警察庁・国土交通省・経済産業省と、建物部品関連の民間団体で構成される「官民合同会議」が、侵入手口に対する抵抗力の試験を行い、基準を満たした製品を「防犯性能の高い建物部品」として公表しています。この目録に掲載された製品にCPマークの表示が認められます。錠前だけでなく、ドア・ガラス・サッシ・シャッターなど幅広い建物部品が対象です。",
  },
  {
    title: "「5分以上の抵抗」という基準の考え方",
    desc: "認定の中心となる考え方が「侵入までに5分以上かかること」です。侵入をあきらめる理由として「時間がかかること」を挙げる侵入犯が多いという知見に基づき、ピッキングや破壊などの攻撃を想定した試験で、5分以上侵入を防げるかどうかが評価されます。つまりCPマークは「絶対に破られない」ことの保証ではなく、「侵入に時間がかかる＝あきらめさせる可能性が高い」ことを示す物差しです。この点を理解しておくと、過信も軽視もせずに製品を選べます。",
  },
  {
    title: "CP認定錠（防犯性能の高い錠前）の特徴",
    desc: "錠前の分野では、ピッキング・鍵穴壊し・サムターン回しなどの手口への抵抗力が試験されます。認定された錠前は、内部構造が複雑なシリンダー（ディンプルキータイプなど）、ドリル攻撃に耐える部材、防犯サムターンといった要素を備えていることが一般的です。玄関の防犯を考えるときは、シリンダー単体だけでなく、錠前一式やドアとの組み合わせで性能が発揮される点にも注意が必要です。",
  },
];

const erabikata = [
  {
    title: "目録（公表リスト）で製品を確認する",
    desc: "防犯性能の高い建物部品は目録として公表されており、インターネットで検索できます。鍵交換を検討する際は、候補の製品が目録に掲載されているか、CPマークの表示があるかを確認しましょう。カタログやパッケージにCPマークが印刷されているのが目印です。",
  },
  {
    title: "自宅の錠前との適合を確認する",
    desc: "シリンダーは錠前ケースとの組み合わせで使うため、どの製品でも取り付けられるわけではありません。ドア側面のフロントプレートに刻印されたメーカー名と型番を控え、対応するCP認定シリンダーがあるかを確認します。適合が分からない場合は、型番を伝えて鍵業者やメーカーに問い合わせるのが確実です。",
  },
  {
    title: "ドア全体・住まい全体で考える",
    desc: "錠前だけをCP認定品にしても、ドア自体が薄い、ガラス部分が無防備、勝手口や窓が旧式のまま、という状態では効果が限定的です。ワンドアツーロック（補助錠の追加）や窓の防犯対策も含め、住まい全体の「弱い場所」から順に対策するのが合理的です。",
  },
  {
    title: "賃貸の場合は管理会社に相談する",
    desc: "賃貸住宅の錠前交換には大家・管理会社の許可が必要です。防犯性向上が目的であれば相談に応じてもらえる場合も多く、物件によっては貸主負担で交換してもらえることもあります。無断交換は原状回復トラブルの元になるため、必ず事前に確認しましょう。",
  },
];

const ngActions = [
  {
    title: "CPマークを「絶対安全」の保証と考える",
    desc: "CP認定は「5分以上の抵抗」を目安とした試験に基づく制度であり、破られないことを保証するものではありません。施錠の習慣、補助錠、窓の対策などと組み合わせてこそ効果を発揮します。マークだけを理由に他の対策を省略しないようにしましょう。",
  },
  {
    title: "適合確認をせずにシリンダーだけ購入する",
    desc: "CP認定品でも、自宅の錠前ケースやドア厚に適合しなければ取り付けられず、無理な取り付けは施錠不良の原因になります。購入前に必ずフロントプレートの刻印（メーカー・型番）を確認してください。",
  },
  {
    title: "類似マークや「防犯」表記だけで判断する",
    desc: "パッケージに「防犯」と書かれていても、官民合同会議の目録に掲載された製品とは限りません。判断の物差しにするなら、CPマークの有無と目録への掲載を確認するのが確実です。",
  },
  {
    title: "古い錠前に費用をかけて部分修理を重ねる",
    desc: "旧式シリンダーの調子が悪いたびに修理を重ねるより、防犯性の高い錠前への交換で「修理」と「防犯強化」を同時に済ませたほうが合理的な場合があります。交換時期の考え方は関連記事を参考にしてください。",
  },
];

const faqs = [
  {
    q: "CP認定錠とは何ですか？",
    a: "警察庁・国土交通省・経済産業省と民間団体で構成される官民合同会議が、侵入手口を想定した試験により「防犯性能の高い建物部品」と認めた錠前のことです。認定製品は目録として公表され、CPマークを表示できます。錠前のほか、ドア・ガラス・サッシなども対象です。",
  },
  {
    q: "「5分以上の抵抗」とはどういう意味ですか？",
    a: "侵入犯は侵入に時間がかかるほど犯行をあきらめやすいという知見に基づき、ピッキングや破壊などの攻撃に対して5分以上侵入を防げることを目安に試験が行われます。破られないことの保証ではなく、「あきらめさせる時間を稼げる部品」であることを示す基準です。",
  },
  {
    q: "自宅の鍵がCP認定かどうかはどうやって確認できますか？",
    a: "製品のパッケージやカタログのCPマーク表示、およびインターネットで公表されている「防犯性能の高い建物部品」の目録で確認できます。現在使用中の錠前は、ドア側面のフロントプレートに刻印されたメーカー名・型番を控えて調べるか、鍵業者に確認を依頼しましょう。",
  },
  {
    q: "CP認定錠への交換は自分でできますか？費用はどのくらいですか？",
    a: "シリンダー交換自体は適合品を入手できれば自分で行うことも可能ですが、適合確認と施工精度が防犯性能に直結するため、不安があれば鍵業者への依頼が確実です。費用は部品代と作業費で構成され、製品グレードで変わります。目安は料金相場ページで解説しています。",
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
    { "@type": "ListItem", position: 2, name: "CP認定錠とは？防犯性能の物差し" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CP認定錠とは？防犯性能の物差しになる「防犯建物部品」制度を解説",
  description: "官民合同会議による防犯性能の高い建物部品（CP認定）制度の仕組みと、鍵選びでの活用方法を一般知識として解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-09",
  dateModified: "2026-08-09",
};

export default function CpNinteiJouPage() {
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
            <span className="text-text-secondary">CP認定錠とは？防犯性能の物差し</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            CP認定錠とは？防犯性能の物差しになる「防犯建物部品」制度をわかりやすく解説
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月9日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：CP認定錠は「侵入に5分以上かかる」ことを物差しにした認定品</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              CP認定錠とは、警察庁などの官公庁と民間団体で構成される<strong>官民合同会議</strong>が、侵入手口を想定した試験で<strong>「防犯性能の高い建物部品」</strong>と認めた錠前のことです。中心となる基準は<strong>侵入までに5分以上抵抗できること</strong>。鍵交換で防犯性を高めたいときは、CPマークの有無と公表目録への掲載、そして自宅の錠前との適合を確認して選ぶのが基本です。
            </p>
          </div>

          <p className="text-sm text-text-secondary leading-relaxed mb-8">
            「防犯性の高い鍵に替えたい」と思って製品を探すと、さまざまな宣伝文句が並んでいて迷ってしまいます。そこで役立つのが、公的な枠組みで性能が確認された製品を示すCPマークです。この記事では、制度の仕組みから選び方、交換を業者に頼む場合のポイントまでを一般知識として整理します。
          </p>

          {/* 制度の基礎 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">CP認定（防犯建物部品）制度の基礎知識</h2>
          <div className="space-y-4 mb-10">
            {basics.map((b, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{b.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* 選び方 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">CP認定錠の選び方・活用のポイント</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            CPマークは「どれを選べばよいか分からない」ときの信頼できる出発点です。ただし、マークを確認するだけでなく、自宅の状況に合わせた次の視点を持つと失敗がありません。
          </p>
          <div className="space-y-4 mb-10">
            {erabikata.map((e, i) => (
              <div key={i} className="bg-surface-alt rounded-xl p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{i + 1}. {e.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>

          {/* 自分でできること */}
          <h2 className="text-xl font-bold text-text-primary mb-4">交換前に自分でできる確認</h2>
          <ol className="space-y-3 mb-10">
            {[
              "ドア側面のフロントプレートを見て、錠前のメーカー名・型番を控える（写真を撮っておくと確実）。",
              "現在の鍵の形状を確認する。ギザギザの刻みキーなら旧式シリンダーの可能性が高く、交換の優先度が上がります。",
              "候補製品がCPマーク付きか、公表されている目録に掲載されているかを確認する。",
              "賃貸の場合は、管理会社・大家に交換の可否と費用負担を確認する。",
              "シリンダー交換だけで足りるか、補助錠の追加（ワンドアツーロック）も必要かを検討する。",
            ].map((t, i) => (
              <li key={i} className="flex gap-3 bg-surface-alt rounded-xl p-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">{i + 1}</span>
                <span className="text-sm text-text-secondary leading-relaxed">{t}</span>
              </li>
            ))}
          </ol>

          {/* 錠前以外の対象 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">錠前以外にもある「防犯建物部品」</h2>
          <div className="bg-white rounded-xl border border-black/10 p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              CP認定の対象は錠前だけではありません。玄関ドアそのもの、窓ガラス（防犯合わせガラスなど）、サッシ、雨戸・シャッター、面格子、ガラスに貼る防犯フィルムなど、侵入経路になり得る建物部品が幅広く目録に掲載されています。侵入は玄関よりも窓から行われるケースが多いとされるため、玄関の錠前を強化したら、次は窓まわりの部品にも同じ物差しを当ててみるのが効果的です。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              住まい全体を見渡して「どこが一番弱いか」を考え、弱い場所から順にCP認定品などの性能が確認された部品で補強していく。これが、限られた予算で防犯効果を最大化する基本的な考え方です。
            </p>
          </div>

          {/* NG行動 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">やってはいけないNG行動・よくある誤解</h2>
          <div className="space-y-4 mb-10">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-600 mb-1.5">NG{i + 1}. {n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 業者に頼む判断 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">業者に依頼する場合の判断と選び方</h2>
          <div className="bg-surface-alt rounded-xl p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              CP認定シリンダーへの交換は、適合品を入手できれば自分で作業できる場合もあります。しかし、<strong>①適合する製品が分からない、②錠前ケースごとの交換が必要、③ドアの建て付けや補助錠の追加もまとめて相談したい</strong>という場合は、鍵業者に依頼するのが確実です。防犯目的の交換は緊急の解錠と違って時間の余裕があるため、複数社に相見積もりを取り、部品代・作業費・出張費を含む総額で比較しましょう。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              見積もり時には「CP認定品（防犯建物部品）で提案してほしい」と伝えると話が早く、提案されたシリンダーの型番を目録と照合すれば自分でも裏取りできます。防犯診断を掲げ、ドア全体・窓まで含めた提案をしてくれる業者は信頼しやすいと言えます。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              鍵交換の費用感は<a href="/ryokin/" className="text-primary underline">料金相場ページ</a>、業者選びの比較ポイントは<a href="/agents/" className="text-primary underline">業者比較ページ</a>で詳しく解説しています。
            </p>
          </div>

          {/* 内部リンクCTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">防犯性の高い鍵への交換に対応できる業者を比較する</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              CP認定品の取り扱いを明記し、見積もり無料で総額を提示してくれる業者を中心に比較しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を詳しく見る</a>
              <a href="/kagi-koukan-timing/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">鍵交換のタイミング</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">CP認定錠に関するよくある質問</h2>
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
              { href: "/hojo-jou/", label: "補助錠の選び方（ワンドア・ツーロック）" },
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
