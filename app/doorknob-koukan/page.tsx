import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ドアノブ・ラッチの故障と交換の基礎知識｜ガタつき・空回り・戻らない症状の見方 | 鍵トラブルナビ",
  description:
    "ドアノブがガタつく・空回りする・ラッチが戻らないといった故障症状の見方と、握り玉（ノブ）・レバーハンドルなどドアノブの種類、DIY交換で失敗しやすいポイントを一般知識として解説。バックセットやドア厚など採寸の基本、業者に任せるべきケースの判断基準も紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/doorknob-koukan/" },
};

const basics = [
  {
    title: "ドアノブの不調の多くは「ラッチ」の劣化から始まる",
    desc: "ラッチ（ラッチボルト）は、ドアの側面から出ている三角形の斜めのボルトで、ドアノブやレバーを操作すると引っ込み、離すとバネの力で飛び出して枠の受け（ストライク）に掛かり、ドアを閉じた状態に保つ部品です。毎回の開け閉めで動く消耗部品のため、内部のバネの劣化や摩耗が進むと、ラッチが引っ込んだまま戻らない、動きが渋い、ドアが風で開いてしまう、逆にラッチが引っ掛かってドアが開かない、といった症状が現れます。「ドアノブが壊れた」と感じるトラブルの多くは、実はノブ本体ではなくこのラッチ機構の劣化が原因です。",
  },
  {
    title: "握り玉（ノブ）とレバーハンドル、形で種類が分かれる",
    desc: "ドアノブは大きく、丸い玉を回して開ける握り玉タイプと、水平の取っ手を下げて開けるレバーハンドルタイプに分かれます。握り玉には、鍵付きでノブの中心に鍵穴があるタイプ（インテグラル錠や円筒錠など）と、鍵のない空錠タイプがあります。レバーハンドルは握力の弱い人でも操作しやすく、近年の住宅では主流です。交換の際は「同じ取り付け穴・同じ寸法系統の製品を選ぶ」ことが基本で、握り玉からレバーハンドルへの交換も、対応する交換用製品が各社から出ています。錠前の型ごとの構造の違いは錠前タイプ図鑑で詳しく解説しています。",
  },
  {
    title: "交換時は「バックセット」「ドア厚」「フロント刻印」の3点を確認",
    desc: "交換用のドアノブ・ラッチを選ぶときに必要な情報は主に3つです。第一にバックセット（ドアの端からノブ・鍵穴の中心までの距離）、第二にドアの厚み、第三にドア側面の金属プレート（フロント）に刻印されたメーカー名・型番です。この3点が合わない製品を買うと、穴の位置が合わずに取り付けられません。購入前にメジャーで採寸し、フロント刻印をスマートフォンで撮影しておくと、店頭や業者への相談がスムーズです。",
  },
  {
    title: "室内ドアと玄関ドアでは交換の難易度がまったく違う",
    desc: "鍵のない室内ドアの握り玉・レバー交換は、プラスドライバーでできる比較的やさしい部類のDIYです。一方、玄関ドアは防犯に直結する鍵付き錠前が組み込まれており、部品の選定ミスや取り付け精度の甘さがそのまま防犯性の低下や施錠不良につながります。また、賃貸住宅ではドアノブや錠前は室内側の設備であっても勝手に交換してよいものではなく、事前に大家・管理会社への連絡が必要です。室内ドアは自分で、玄関ドアと賃貸は相談してから、が基本の線引きです。",
  },
];

const checkSteps = [
  {
    title: "症状を切り分ける（ノブか、ラッチか、建て付けか）",
    desc: "まずドアを開けた状態でノブを操作し、ラッチがスムーズに出入りするか確認します。開けた状態では正常なのに閉めると調子が悪い場合は、ドアの建て付けやストライク（受け座）の位置ズレが疑われます。ノブ自体がガタつく・空回りする場合は、固定ネジの緩みか内部機構の摩耗です。この切り分けで「締め直しで済むのか、部品交換が必要なのか」の見当がつきます。",
  },
  {
    title: "ネジの緩みを締め直す",
    desc: "ドアノブの根元の座（丸い台座）やフロントのネジが緩んでいるだけなら、プラスドライバーで締め直すだけでガタつきが解消することがあります。座にネジが見えないタイプは、座を回す・小さな穴のピンを押すなどで外す構造になっていることが多く、製品の説明書やメーカーサイトの手順を確認してから作業しましょう。無理にこじると座が変形します。",
  },
  {
    title: "交換する場合は採寸してから同規格の製品を選ぶ",
    desc: "バックセット、ドア厚、フロント刻印の型番を控え、対応する交換用ノブ・ラッチを選びます。ホームセンターや通販では「どのメーカーの何という型に対応するか」が製品パッケージに記載されているのが一般的です。迷ったら外した古い部品を店頭に持参して照合するのが確実です。取り付けは既存のネジ穴を使い、ラッチの向き（斜面がドアの閉まる方向を向く）を間違えないことがポイントです。",
  },
  {
    title: "作業後は「開けた状態」と「閉めた状態」の両方で動作確認",
    desc: "取り付け後は、ドアを開けた状態でノブ操作・ラッチの出入りを確認し、次に実際に閉めてスムーズに開閉できるか、勝手に開かないかを確認します。閉めたときだけ渋い場合はストライクの位置調整が必要です。鍵付きノブの場合は、施錠・解錠が軽い力でできるかまで必ず確認しましょう。ここで違和感を放置すると、締め出しや開かないトラブルに発展します。",
  },
];

const ngActions = [
  {
    title: "採寸せずに見た目だけで交換用ノブを買う",
    desc: "ドアノブは形が似ていてもバックセットや対応ドア厚が異なると取り付けられません。買い直しの手間を避けるため、バックセット・ドア厚・フロント刻印の3点確認を省略しないようにしましょう。",
  },
  {
    title: "ラッチが引っ掛かるドアを力任せに開け閉めする",
    desc: "ラッチの動きが渋いまま力で開け閉めを続けると、ラッチの破損やストライクの変形が進み、最終的にドアが開かなくなることがあります。室内に人がいるときに開かなくなると閉じ込めにもつながるため、渋さを感じた段階で対処するのが安全です。",
  },
  {
    title: "内部機構に汎用潤滑スプレーを大量に吹き込む",
    desc: "油分の多い汎用スプレーはホコリを抱き込んで固まり、症状を悪化させる原因になります。ラッチ機構の動きが渋いときも、まずは清掃とネジの締め直し、使うとしても少量にとどめ、鍵穴部分には鍵穴専用潤滑剤以外を使わないでください。",
  },
  {
    title: "賃貸住宅で無断でドアノブ・錠前を交換する",
    desc: "賃貸のドアノブや錠前は物件の設備であり、無断交換は契約違反となるおそれがあります。故障の場合はまず大家・管理会社に連絡しましょう。経年劣化による故障なら貸主負担で修理・交換されるのが一般的な考え方です。",
  },
];

const faqs = [
  {
    q: "ドアノブがガタつくのは故障のサインですか？",
    a: "多くの場合、最初は固定ネジの緩みです。座やフロントのネジを締め直すだけで解消することも少なくありません。ただし、締め直しても繰り返しガタつく、空回りする、ラッチの戻りが悪いといった症状を伴う場合は、内部機構の摩耗が進んでいるサインで、ラッチまたはノブ一式の交換を検討する段階です。放置するとドアが開かなくなることもあるため、早めの対処をおすすめします。",
  },
  {
    q: "ラッチだけの交換はできますか？",
    a: "ラッチはノブ本体と別部品として交換できる構造の製品が多く、同じメーカー・同じ型の交換用ラッチが入手できれば、ラッチ単体の交換で直せます。ドア側面のフロントに刻印されたメーカー名・型番から適合部品を探すのが基本です。ただし廃番などで適合部品が見つからない場合は、ノブ・ラッチ一式を現行品に交換することになります。",
  },
  {
    q: "握り玉からレバーハンドルに交換できますか？",
    a: "既存の握り玉の取り付け穴を利用して交換できるレバーハンドル製品が各社から販売されています。選ぶ際は、バックセットとドア厚が適合すること、既存の穴径に対応していることを確認してください。握り玉は握力が必要なため、高齢の家族がいる住まいではレバーへの交換が操作性の面で有効です。玄関など鍵付きの場合は防犯性にも関わるため、製品選びに迷ったら業者に相談しましょう。",
  },
  {
    q: "ドアノブ交換を業者に頼むべきなのはどんなときですか？",
    a: "玄関など鍵付き錠前の交換、フロント刻印が読めず適合部品が特定できない、ドアが既に開かない・閉まらない状態、ドアや枠側の加工が必要になりそうなケースは、業者依頼が安全です。鍵の専門業者や建具店が対応しており、依頼時は症状・ドアの種類・刻印の写真を伝え、作業前に部品代・作業費・出張費を含む総額見積もりを確認しましょう。",
  },
];

const relatedLinks = [
  { href: "/kagi-mawaranai/", label: "鍵が回らないときの対処法", desc: "シリンダー側の不調との切り分けに" },
  { href: "/door-closer/", label: "ドアクローザーの不調と対処法", desc: "ドアの閉まり方がおかしいときはこちら" },
  { href: "/joumae-type-zukan/", label: "錠前タイプ図鑑", desc: "インテグラル錠・箱錠などの見分け方" },
  { href: "/kagi-koukan-timing/", label: "鍵交換のタイミングと目安", desc: "交換を検討すべきサインと考え方" },
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
    { "@type": "ListItem", position: 2, name: "ドアノブ・ラッチの故障と交換" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ドアノブ・ラッチの故障と交換の基礎知識｜ガタつき・空回り・戻らない症状の見方",
  description: "ラッチ不良の典型症状、握り玉・レバーハンドルの種類、バックセット等の採寸ポイント、DIY交換の注意点と業者依頼の判断基準を一般知識として解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-10",
  dateModified: "2026-08-10",
};

export default function DoorknobKoukanPage() {
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
            <span className="text-text-secondary">ドアノブ・ラッチの故障と交換</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            ドアノブ・ラッチの故障と交換の基礎知識｜ガタつき・空回り・戻らない症状の見方
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月10日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：ドアノブ不調の多くはラッチ劣化かネジの緩み。締め直しで直らなければ採寸して同規格に交換、玄関と賃貸は業者・管理会社へ</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              ドアノブのガタつき・空回り・ラッチが戻らないといった症状は、<strong>固定ネジの緩みかラッチ機構の摩耗</strong>が主な原因です。まずドアを開けた状態で症状を切り分け、ネジの締め直しを試し、直らなければ<strong>バックセット・ドア厚・フロント刻印の3点を確認して同規格の交換部品</strong>を選びます。鍵のない室内ドアはDIYでも交換しやすい一方、<strong>玄関などの鍵付き錠前は防犯に直結するため業者依頼が安全</strong>で、賃貸は交換前に大家・管理会社への連絡が必須です。
            </p>
          </div>

          {/* 本文解説 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">ドアノブ・ラッチの基礎知識｜押さえておきたい4つのポイント</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            「ドアノブが壊れた」と一口に言っても、原因はノブ本体・ラッチ・ドアの建て付けと複数あります。仕組みと種類を知っておくと、直せる故障か交換すべき故障かを冷静に判断できます。
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
          <h2 className="text-xl font-bold text-text-primary mb-4">自分でできる点検・交換の4ステップ</h2>
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
          <h2 className="text-xl font-bold text-text-primary mb-4">ドアノブ交換でやってはいけないNG行動</h2>
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
            鍵付きの玄関ドアノブ・錠前の交換、適合部品が特定できない場合、すでにドアが開かない・閉まらない状態は、<strong>無理をせず鍵の専門業者や建具店に依頼するのが安全</strong>です。特に鍵穴側の不調（鍵が回りにくい・引っかかる）を伴う場合は、ラッチではなくシリンダーの問題の可能性もあるため、<a href="/kagi-mawaranai/" className="text-primary underline">鍵が回らないときの対処法</a>で症状を切り分けてください。ドアの閉まる速度や閉まり方がおかしい場合は、ノブではなく<a href="/door-closer/" className="text-primary underline">ドアクローザーの不調</a>が原因のこともあります。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            依頼時は、症状・ドアの種類（室内／玄関、開き戸）・フロント刻印の写真を伝えると話が早く進みます。費用は部品のグレードで変わるため、作業前に部品代・作業費・出張費を含む総額見積もりを必ず確認しましょう。費用感は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、依頼先の検討は<a href="/agents/" className="text-primary underline">鍵トラブル業者の比較</a>で確認できます。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">開かない・閉まらないドアノブは早めに専門業者へ</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              ラッチの故障を放置すると閉じ込めや締め出しに発展することがあります。症状と刻印の写真を用意し、作業前の総額見積もりを確認してから依頼しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">ドアノブ・ラッチのよくある質問</h2>
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
