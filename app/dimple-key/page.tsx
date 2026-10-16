import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ディンプルキーとは？防犯性の仕組みと交換の考え方をわかりやすく解説 | 鍵トラブルナビ",
  description:
    "ディンプルキーとは、鍵の表面に複数の丸いくぼみ（ディンプル）を持つピッキングに強い鍵のことです。構造の仕組み、従来の刻みキーとの防犯性の違い、合鍵が作りにくい理由（登録制・セキュリティカード式）、交換するときの選び方の基準を一般知識としてわかりやすく解説します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/dimple-key/" },
};

const features = [
  {
    title: "ピンの数が多く、配列が複雑",
    desc: "従来の刻みキー（ギザギザの鍵）は、鍵の上下の刻みに合わせて一列に並んだピンを押し上げる構造です。これに対しディンプルキーは、表面のくぼみの深さ・位置に対応するピンが上下・左右・斜めなど複数方向から配置されており、ピンの本数も配列パターンも大幅に多くなっています。理論上の鍵違い数（同じ形の鍵が存在しにくい組み合わせの数）が、刻みキーよりも格段に多いことが特徴です。",
  },
  {
    title: "ピッキングに時間がかかる構造",
    desc: "ピッキングは、鍵穴に特殊な工具を入れてピンを一本ずつ正しい位置に揃える不正解錠の手口です。ディンプルキーは複数方向のピンを同時に揃える必要があるため、ピッキングによる解錠には高度な技術と長い時間が必要とされ、事実上侵入を諦めさせる効果が期待できます。侵入に時間がかかるほど犯行は断念されやすいと警察や防犯機関が広く案内しており、「開けるのに時間がかかる鍵」であること自体が防犯性能といえます。",
  },
  {
    title: "鍵の表裏がなく使いやすい",
    desc: "多くのディンプルキーはリバーシブル仕様で、鍵の裏表を気にせず挿し込めます。暗い場所や急いでいる時でも向きを確かめる必要がないため、防犯性だけでなく日常の使い勝手にも優れています。また、刻みキーに比べてギザギザが少なく、ポケットや鞄の中で他の物を傷つけにくいという実用面の利点もあります。",
  },
  {
    title: "合鍵が簡単には作れない",
    desc: "ディンプルキーのくぼみは深さ・位置の精度要求が高く、一般的な合鍵作製機では正確に複製できないことが多い鍵です。対応設備のある店が限られるうえ、メーカーによっては所有者登録制を採用しており、登録者本人がセキュリティカードや鍵番号で申請しないと純正の合鍵を取り寄せられない仕組みになっています。第三者が勝手に合鍵を作りにくいことも、防犯性能の重要な一部です。",
  },
];

const selfChecks = [
  {
    title: "今使っている鍵の種類を確認する",
    desc: "まず自宅の鍵がどのタイプかを確認してください。鍵の側面がギザギザなら刻みキー、表面に丸いくぼみが並んでいればディンプルキーです。鍵本体やシリンダーの刻印にはメーカー名や型番が入っていることが多く、これが分かると交換の相談や見積もりが正確になります。刻印の意味が分からない場合は、スマホで鍵の写真を撮っておくと業者への説明が円滑になります（写真をSNSに投稿すると複製されるおそれがあるため、投稿は避けてください）。",
  },
  {
    title: "シリンダーの使用年数を調べる",
    desc: "錠前の耐用年数は一般に10年程度が目安とされています。10年以上使っている古い刻みキーの場合、防犯性の面でも部品の摩耗の面でも、ディンプルキーへの交換を検討する適切な時期です。入居時から付いていた鍵で年数が不明な場合は、シリンダーの型番から製造時期の見当がつくこともあります。交換時期の考え方は関連記事で詳しく解説しています。",
  },
  {
    title: "ドアの錠前の規格を確認する",
    desc: "シリンダー交換は、今付いている錠前（錠ケース）の規格に合うシリンダーを選ぶ必要があります。ドア側面の金属プレート（フロントプレート）に刻印された型番をメモしておくと、適合するディンプルシリンダーを探しやすくなります。規格が合えばシリンダー部分だけの交換で済むため、扉ごと替えるような大掛かりな工事は不要です。",
  },
  {
    title: "賃貸の場合は管理会社の承諾を取る",
    desc: "賃貸物件の鍵は貸主の所有物のため、防犯目的でも無断で交換してはいけません。ディンプルキーに替えたい場合は、必ず管理会社・大家の事前承諾を得てください。費用の負担者や、退去時に元のシリンダーへ戻すかどうかも、事前に確認しておくことをおすすめします。詳しくは賃貸の鍵交換費用の記事で解説しています。",
  },
];

const ngActions = [
  {
    title: "「ディンプル＝絶対安全」と過信する",
    desc: "ディンプルキーはピッキングに強い鍵ですが、侵入手口はピッキングだけではありません。無施錠・ガラス破り・サムターン回しなど他の手口への対策（補助錠・ワンドアツーロックなど）と組み合わせることで、効果が高まります。",
  },
  {
    title: "価格の安さだけでシリンダーを選ぶ",
    desc: "同じ「ディンプルキー」でも、メーカーや型番によって耐ピッキング性能・鍵違い数・登録制の有無は異なります。性能表示や公的な防犯性能試験（CP認定など）の有無を確認せず、安さだけで選ぶのはおすすめできません。",
  },
  {
    title: "鍵穴に油（潤滑油）を注す",
    desc: "ディンプルキーのシリンダーは精密なため、一般的な油系潤滑剤はホコリを吸着して動作不良の原因になります。メンテナンスには、鍵穴専用のパウダー系・フッ素系潤滑剤を使用してください。",
  },
  {
    title: "セキュリティカードや鍵番号を放置・公開する",
    desc: "登録制の鍵に付属するセキュリティカードは、合鍵作製の「権利証」にあたる重要品です。紛失すると正規の合鍵が作れなくなる場合があり、逆に第三者に渡ると勝手に複製されるリスクがあります。鍵とは別の場所で厳重に保管してください。",
  },
];

const faqs = [
  {
    q: "ディンプルキーと普通の鍵（刻みキー）の違いは何ですか？",
    a: "刻みキーは鍵の縁のギザギザでピンを押し上げる構造で、ピンが一列に並んでいます。ディンプルキーは表面の丸いくぼみ（ディンプル）でピンを動かす構造で、ピンが上下・左右・斜めなど複数方向に多数配置されています。このためピッキングにかかる時間が大幅に長く、鍵違い数も多いため、防犯性が高いとされています。鍵の表面に丸いくぼみが並んでいれば、ディンプルキーと判断できます。",
  },
  {
    q: "ディンプルキーの合鍵はどこで作れますか？",
    a: "一般的な合鍵店やホームセンターでは対応できないことが多く、対応設備のある店舗でも精度の面で純正キーに劣る場合があります。確実なのはメーカーから純正キーを取り寄せる方法で、登録制の鍵ではセキュリティカードや鍵番号による本人申請が必要です。取り寄せには日数がかかるのが一般的なため、スペアが少なくなったら早めに手配してください。詳しくは合鍵の作り方の記事で解説しています。",
  },
  {
    q: "ディンプルキーへの交換費用はどのくらいですか？",
    a: "交換費用は、選ぶシリンダーのメーカー・型番・性能グレード、依頼する業者、時間帯（深夜・早朝の割増）によって大きく変わるため、一概には言えません。一般的に、防犯性能の高いディンプルシリンダーは従来の刻みキー用シリンダーより部品代が高くなる傾向があります。作業前に「部品代＋作業費＋出張料の総額」の見積もりを必ずご確認ください。料金の目安は料金相場のページで解説しています。",
  },
  {
    q: "ディンプルキーにすれば空き巣対策は万全ですか？",
    a: "ピッキング対策としては非常に有効ですが、万全ではありません。侵入手口にはガラス破り・無施錠の狙い撃ち・サムターン回しなどもあり、鍵の性能だけでは防げないものがあります。ワンドアツーロック（補助錠の追加）、サムターンカバー、窓の補助錠や防犯フィルムなどと組み合わせ、「侵入に時間がかかる家」にすることが空き巣対策の基本です。",
  },
];

const relatedLinks = [
  { href: "/kagi-koukan-timing/", label: "鍵交換のタイミングと目安", desc: "交換を検討すべきサインと考え方" },
  { href: "/aikagi/", label: "合鍵の作り方と値段の考え方", desc: "作れる場所・作れない鍵を解説" },
  { href: "/chintai-kagi-koukan-hiyou/", label: "賃貸の鍵交換費用は誰が負担？", desc: "賃貸物件で交換する場合の手順と費用負担" },
  { href: "/ryokin/", label: "鍵開け・鍵交換の料金相場", desc: "依頼前に確認すべき料金の目安" },
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
    { "@type": "ListItem", position: 2, name: "ディンプルキーとは？防犯性と交換の考え方" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ディンプルキーとは？防犯性の仕組みと交換の考え方",
  description: "ディンプルキーの構造・ピッキング耐性・合鍵が作りにくい理由と、交換時の選び方を一般知識として解説します。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-09",
  dateModified: "2026-08-09",
};

export default function DimpleKeyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />


      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-surface-alt border-b border-black/5">
          <div className="max-w-4xl mx-auto px-4 py-3 text-xs text-text-muted">
            <a href="/" className="hover:text-primary">ホーム</a>
            <span className="mx-1.5">/</span>
            <span className="text-text-secondary">ディンプルキーとは？防犯性と交換の考え方</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            ディンプルキーとは？防犯性の仕組みと交換の考え方をわかりやすく解説
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月9日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">ディンプルキーの要点</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              ディンプルキーとは、鍵の表面に<strong>丸いくぼみ（ディンプル）が複数並んだタイプの鍵</strong>のことです。内部のピンが複数方向に多数配置されているため<strong>ピッキングによる不正解錠に強く</strong>、一般の店では複製が難しいうえ<strong>所有者登録制（セキュリティカード式）を採用したメーカーもある</strong>ため、合鍵を無断で作られにくいことが特徴です。10年以上前の刻みキーを使用している場合は、交換を検討する価値があります。
            </p>
          </div>

          {/* 構造と特徴 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">ディンプルキーの構造と4つの特徴</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            ディンプルキーは、ピンシリンダー錠の一種です。鍵の縁がギザギザに刻まれた従来の「刻みキー」と違い、鍵の表面に彫られたくぼみの深さ・位置で内部のピンを正しい高さに揃える構造になっています。この構造の違いが、防犯性の差につながっています。
          </p>
          <div className="space-y-3 mb-10">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-4">
                <p className="font-bold text-primary text-sm mb-1.5">
                  <span className="inline-block bg-surface-alt rounded px-2 py-0.5 text-xs font-bold text-text-primary mr-2">特徴{i + 1}</span>
                  {f.title}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* 合鍵の考え方 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">合鍵の仕組み（登録制・セキュリティカード式）について</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            ディンプルキーの防犯性を理解するうえで欠かせないのが、合鍵の仕組みです。防犯性の高い鍵ほど「本人以外が合鍵を作れない」仕組みが整っており、メーカーによっては<strong>所有者登録制</strong>を採用しています。購入時に所有者情報を登録し、合鍵が必要になったらセキュリティカードや鍵番号を使って本人が申請し、メーカー純正の鍵が届くという流れです。店頭で誰でもすぐに複製できる刻みキーと異なり、家族や同居人が増えた時の合鍵の手配には日数がかかりますが、その分、第三者による不正な複製を防げます。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            なお、対応設備のある合鍵店でディンプルキーの複製が可能な場合もありますが、純正キーに比べて精度が落ちると鍵の回りが悪くなる原因になります。合鍵の作り方や純正取り寄せとの違いは<a href="/aikagi/" className="text-primary underline">合鍵の作り方と値段の考え方</a>で詳しく解説しています。
          </p>

          {/* 自分でできること */}
          <h2 className="text-xl font-bold text-text-primary mb-4">交換を検討する前の確認事項</h2>
          <ol className="space-y-3 mb-10">
            {selfChecks.map((s, i) => (
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
          <h2 className="text-xl font-bold text-text-primary mb-4">避けるべき行動とよくある誤解</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">避けるべき行動：{n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 交換の考え方・業者 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">ディンプルキーへ交換するときの選び方と業者依頼のポイント</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            交換を決めたら、シリンダー選びは「錠前の規格に適合すること」「耐ピッキング性能などの性能表示を確認すること」「登録制の有無を確認すること」の3点が基本です。防犯性能の目安としては、官民合同会議の基準を満たした製品に付く<strong>CP認定（防犯性能の高い建物部品）</strong>という公的な目印が広く知られています。長く使う設備のため、価格だけでなく性能と合鍵の管理方式まで含めて選ぶことをおすすめします。交換タイミングの考え方は<a href="/kagi-koukan-timing/" className="text-primary underline">鍵交換のタイミングと目安</a>で詳しく解説しています。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            交換費用は、<strong>選ぶシリンダーのグレード・鍵の種類・依頼する時間帯によって大きく変わります</strong>。DIYでの交換も不可能ではありませんが、規格の採寸ミスや取り付け不良は防犯上の弱点になるため、不安がある場合は専門業者に依頼することをおすすめします。依頼時は作業前に総額の見積もりをご確認ください。費用の目安は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、業者の比較は<a href="/agents/" className="text-primary underline">鍵業者の比較</a>で確認してください。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">防犯性の高い鍵への交換は、実績のある業者へご相談ください</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              シリンダー選びから取り付けまで任せられる業者に依頼すると、規格違いによる失敗を防げます。作業前に総額の見積もりを確認してから依頼してください。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">ディンプルキーのよくある質問</h2>
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
