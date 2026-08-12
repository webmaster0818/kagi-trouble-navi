import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "玄関ドアごと交換と鍵だけ交換、どちらを選ぶ？判断基準を解説 | 鍵トラブルナビ",
  description:
    "玄関の不調で迷いがちな「ドアごと交換」と「鍵（シリンダー・錠前）だけ交換」の判断基準を一般知識として解説。鍵交換で解決できる症状、ドア本体の劣化・断熱・防犯性能まで見直すべきケース、費用構造の違い、賃貸・分譲での注意点を紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/door-koukan-vs-kagi-koukan/" },
};

const basics = [
  {
    title: "鍵（シリンダー）だけの交換で解決できる範囲",
    desc: "シリンダー交換は、ドア側面の錠前は残したまま鍵穴部分だけを新しいものに入れ替える方法です。鍵を紛失して鍵違いにしたい、防犯性の高いディンプルキーに替えたい、鍵穴の摩耗で鍵が抜き差ししにくい、といった「鍵穴側」に原因がある悩みは、原則としてシリンダー交換で解決できます。工事はドア1枚に対して部品交換のみで完結するため、所要時間も短く、住まいへの影響が最も小さい選択肢です。ドア本体やドア枠に問題がないなら、まずシリンダー交換で足りるかどうかを検討するのが順番として合理的です。",
  },
  {
    title: "錠前一式の交換が必要になるケース",
    desc: "ラッチ（仮締めの三角の金具）やデッドボルト（かんぬき）が引っ込まない・戻らない、ドアノブやハンドルがぐらつく、錠ケース内部から異音がするといった症状は、鍵穴ではなく錠前本体の故障です。この場合はシリンダーだけ替えても直らず、錠ケースを含む錠前一式の交換が必要になります。また、廃番で適合シリンダーが手に入らない場合も一式交換になることがあります。錠前一式の交換でも工事の範囲はドアの錠部分にとどまり、ドア本体はそのまま使い続けられます。",
  },
  {
    title: "ドアごと交換を検討すべきサイン｜劣化・断熱・防犯",
    desc: "ドア本体やドア枠に原因がある場合は、鍵をいくら替えても不調が再発します。具体的には、ドアの反り・歪みで閉まりが悪くデッドボルトが受け座に届かない、蝶番側の劣化でドアが下がっている、表面の腐食や膨れが進んでいる、といった症状です。また、古い玄関ドアは断熱性が低く結露や隙間風の原因になりやすいこと、錠が1つだけの旧式ドアは現行の2ロック標準のドアに防犯面で見劣りすることも、ドアごと交換を検討する動機になります。既存の枠の上に新しい枠をかぶせるカバー工法なら、壁を壊さずに1日程度で交換できるのが一般的とされています。",
  },
  {
    title: "費用構造の違い｜部品交換工事とリフォーム工事",
    desc: "シリンダー交換・錠前交換は「部品代＋作業費（＋出張費）」というシンプルな構成で、鍵の専門業者が対応する部品交換工事です。一方、ドアごと交換は「ドア本体＋枠部材＋撤去処分＋取り付け施工」からなるリフォーム工事で、担い手も建具店・リフォーム会社・サッシ店に変わります。ドア本体のグレード（断熱性能・電気錠の有無・デザイン）によって金額の幅が大きく、鍵交換とは費用の桁も見積もりの取り方も異なります。目的が「鍵の不調の解消」だけなら鍵側の交換、「ドアの劣化・断熱・見た目まで含めた改善」ならドア交換、と目的ベースで切り分けるのが判断の軸です。",
  },
];

const checkSteps = [
  {
    title: "不調の原因が「鍵穴側」か「ドア側」かを切り分ける",
    desc: "ドアを開けた状態で鍵を回してみて、スムーズに施解錠できるなら鍵穴・錠前は正常で、原因はドアの建て付け側にあります。逆に、開けた状態でも鍵が重い・回らないなら鍵穴や錠前側の問題です。この切り分けだけで、相談先が鍵業者か建具・リフォーム業者かがほぼ決まります。",
  },
  {
    title: "ドア本体と枠の状態を目視でチェックする",
    desc: "ドアと枠の隙間が上下で不均等になっていないか、蝶番のビスの緩みや錆はないか、ドア表面の腐食・塗装の剥がれ・膨れはないかを確認します。隙間テープでは埋まらない歪みや、蝶番の劣化が進んでいる場合は、ドア側の寿命を疑うサインです。築年数が経った住まいなら、鍵の寿命の記事もあわせて参考になります。",
  },
  {
    title: "「何を改善したいか」の目的を書き出す",
    desc: "鍵の不調解消だけか、防犯性の向上か、断熱・結露対策か、デザインの刷新かを整理します。防犯性向上だけならシリンダーの高防犯化や補助錠追加で足りることが多く、断熱や結露まで求めるならドア交換の領域です。目的を書き出しておくと、業者への相談時に過剰な工事を勧められても判断がぶれません。",
  },
  {
    title: "持ち家か賃貸か・分譲マンションかを確認する",
    desc: "賃貸住宅では鍵交換もドア交換も大家・管理会社の許可が必須です。分譲マンションでも玄関ドアは共用部分（外側）扱いが一般的で、ドア本体の交換は管理組合のルールに従う必要があります。専有部分として扱われることが多い錠・シリンダーの交換であっても、規約の確認や届け出が求められる場合があります。",
  },
];

const ngActions = [
  {
    title: "ドアの歪みが原因なのに鍵交換を繰り返す",
    desc: "デッドボルトが受け座に届かない原因が建て付けにある場合、シリンダーを何度替えても解決しません。ドアを開けた状態での動作確認という切り分けを飛ばした交換は、出費の無駄になりがちです。",
  },
  {
    title: "症状の切り分けをせずにドア交換を即断する",
    desc: "逆に、鍵穴の不調だけでドアごと交換に踏み切るのも過剰です。シリンダー交換や錠前交換で解決できる症状かどうかを確認してから、工事の規模を決めましょう。",
  },
  {
    title: "賃貸・分譲で無断のドア工事・鍵交換をする",
    desc: "賃貸での無断交換は原状回復や契約違反の問題になり、分譲でも玄関ドアは共用部分の扱いが絡みます。必ず管理会社・管理組合への確認を先に行いましょう。",
  },
  {
    title: "交換を機に防犯グレードを下げる",
    desc: "費用を抑えたいからと、防犯性能の低い簡易な錠やシリンダーへ置き換えると、住まいの防犯レベルが下がります。玄関はピッキング対策シリンダーと2か所施錠を基本線に考えるのが安全です。",
  },
];

const faqs = [
  {
    q: "鍵の調子が悪いとき、まず鍵交換とドア交換のどちらを検討すべきですか？",
    a: "まずはドアを開けた状態で鍵を回し、症状が鍵穴・錠前側かドアの建て付け側かを切り分けてください。開けた状態でスムーズに回るなら原因はドア側の歪みや蝶番の劣化で、鍵を替えても直りません。開けた状態でも重い・回らないなら鍵穴側の問題で、シリンダー交換や錠前交換で解決できる可能性が高いです。工事の規模が小さい順（シリンダー→錠前一式→ドア）で検討するのが基本です。",
  },
  {
    q: "ドアごと交換するとどんなメリットがありますか？",
    a: "鍵・錠だけでなく、ドア本体の反りや腐食といった劣化そのものを解消できるのが最大の違いです。あわせて、断熱性能の高いドアにすれば結露や隙間風の軽減が期待でき、現行の2ロック仕様や電気錠対応のドアを選べば防犯性や利便性も更新できます。既存枠にかぶせるカバー工法なら壁工事なしで施工できるのが一般的です。一方で費用と工期は鍵交換より大きくなるため、目的に対して過剰でないかの見極めが大切です。",
  },
  {
    q: "分譲マンションの玄関ドアは自分で交換できますか？",
    a: "分譲マンションの玄関ドアは、外側が共用部分として扱われるのが一般的で、ドア本体の交換を居住者が単独で行うことは通常できません。管理規約の確認と管理組合への相談が先になります。錠前・シリンダーの交換は専有部分の扱いとして認められることが多いものの、規約で指定や届け出が定められている場合もあるため、事前確認をおすすめします。",
  },
  {
    q: "鍵交換とドア交換では相談する業者が違いますか？",
    a: "違います。シリンダー交換・錠前交換は鍵の専門業者の領域で、その日のうちの対応も期待できます。ドアごと交換は建具店・サッシ店・リフォーム会社が担うリフォーム工事で、現地調査と見積もりを経て後日施工となるのが通常です。どちらの場合も、作業前に部品代・工事費を含む総額見積もりを確認し、複数社比較ができるとより安心です。",
  },
];

const relatedLinks = [
  { href: "/kagi-koukan-timing/", label: "鍵交換のタイミングと目安", desc: "交換を検討すべきサインと考え方" },
  { href: "/joumae-type-zukan/", label: "錠前タイプ図鑑", desc: "錠前の系統と型番確認の基礎知識" },
  { href: "/kagi-jumyou/", label: "鍵の寿命と経年劣化", desc: "寿命のサインと長持ちさせるコツ" },
  { href: "/doorknob-koukan/", label: "ドアノブ・ラッチの故障と交換", desc: "ノブ・ラッチ側の不調はこちら" },
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
    { "@type": "ListItem", position: 2, name: "ドア交換と鍵交換の判断基準" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "玄関ドアごと交換と鍵だけ交換、どちらを選ぶ？判断基準を解説",
  description: "鍵交換で解決できる症状とドアごと交換を検討すべき劣化・断熱・防犯のサイン、費用構造の違い、賃貸・分譲の注意点を一般知識として解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
};

export default function DoorKoukanVsKagiKoukanPage() {
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
            <span className="text-text-secondary">ドア交換と鍵交換の判断基準</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            玄関ドアごと交換と鍵だけ交換、どちらを選ぶ？判断基準を解説
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月12日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：原因が「鍵穴・錠前」なら鍵交換、「ドア本体の劣化・断熱・防犯性能」まで及ぶならドア交換。切り分けは「ドアを開けた状態で鍵を回す」テストが基本</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              玄関の不調は、工事の規模が小さい順に<strong>シリンダー交換 → 錠前一式交換 → ドアごと交換</strong>の3段階で検討するのが合理的です。ドアを開けた状態で鍵がスムーズに回るなら原因は建て付け側で、鍵を替えても直りません。逆に開けた状態でも重いなら鍵穴・錠前側の問題です。ドアの反りや腐食、断熱性の不足、旧式ドアの防犯性まで改善したい場合に初めて、リフォーム工事である<strong>ドアごと交換</strong>が候補になります。賃貸・分譲では管理会社・管理組合への事前確認が必須です。
            </p>
          </div>

          {/* 本文解説 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">「鍵だけ交換」と「ドアごと交換」の違いを整理する</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            同じ「玄関の交換」でも、対象が鍵穴か、錠前一式か、ドア本体かで、解決できる悩み・工事の規模・相談先がまったく変わります。まずは4つの選択肢の守備範囲を押さえましょう。
          </p>
          <div className="space-y-3 mb-10">
            {basics.map((t, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-4">
                <p className="font-bold text-primary text-sm mb-1.5">
                  <span className="inline-block bg-surface-alt rounded px-2 py-0.5 text-xs font-bold text-text-primary mr-2">ポイント{i + 1}</span>
                  {t.title}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* 自分でできること */}
          <h2 className="text-xl font-bold text-text-primary mb-4">依頼前に自分でできる判断4ステップ</h2>
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
          <h2 className="text-xl font-bold text-text-primary mb-4">選択を誤りやすいNG行動</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">NG: {n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 業者判断 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">業者に相談すべきケースと依頼時の注意</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            <strong>鍵穴・錠前側の不調（鍵が重い・回らない・鍵違いにしたい）は鍵の専門業者</strong>へ、<strong>ドア本体の反り・腐食・断熱改善はリフォーム会社・建具店</strong>へ相談するのが基本の振り分けです。切り分けに迷う場合は、まず鍵業者に症状を伝えて現地で診断してもらい、錠側で解決できない場合にドア交換へ進むと無駄がありません。交換すべきかどうかの判断軸は<a href="/kagi-koukan-timing/" className="text-primary underline">鍵交換のタイミングと目安</a>を、自宅の錠の系統と型番の調べ方は<a href="/joumae-type-zukan/" className="text-primary underline">錠前タイプ図鑑</a>をあわせて参考にしてください。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            どちらのルートでも、作業前に部品代・工事費・出張費を含む総額見積もりの確認が鉄則です。鍵側の交換の費用感は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、依頼先の検討は<a href="/agents/" className="text-primary underline">鍵トラブル業者の比較</a>で確認できます。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">まずは症状の切り分けから。鍵側の不調なら鍵の専門業者へ</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              ドアを開けた状態での動作確認と症状のメモを用意すれば、電話相談でも診断がスムーズです。作業前の総額見積もり確認を忘れずに。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">ドア交換と鍵交換のよくある質問</h2>
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
