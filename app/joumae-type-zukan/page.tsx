import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "錠前タイプ図鑑｜インテグラル錠・プッシュプル錠・箱錠の見分け方と型番確認 | 鍵トラブルナビ",
  description:
    "住宅で使われる主要な錠前タイプを一般知識として図鑑形式で解説。ノブ一体型のインテグラル錠・円筒錠、彫込みの箱錠（ケースロック）、玄関で主流のプッシュプル錠、面付箱錠の構造と見分け方、交換時に必要なフロント刻印（メーカー名・型番）と採寸の確認方法を紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/joumae-type-zukan/" },
};

const basics = [
  {
    title: "インテグラル錠・円筒錠｜ドアノブと鍵が一体になったタイプ",
    desc: "握り玉（丸いドアノブ）の中心に鍵穴があるタイプの代表が、インテグラル錠と円筒錠です。円筒錠はノブの操作でラッチだけを動かす簡易なタイプで、デッドボルト（かんぬき）を持たないものが多く、主に室内や勝手口で使われます。インテグラル錠はノブ一体型でありながらデッドボルトを備えるタイプで、勝手口や古いアパートの玄関などで見られます。いずれも構造が比較的シンプルで交換部品も流通していますが、ノブ一体型は防犯面では現行の主流タイプに見劣りするため、玄関に使われている場合は交換検討の候補になりやすい錠です。",
  },
  {
    title: "箱錠（ケースロック）｜ドアに彫り込まれた四角い錠ケース",
    desc: "ドアの内部に四角い金属ケースを彫り込んで納め、ラッチとデッドボルトの両方を内蔵するのが箱錠（彫込箱錠、ケースロック）です。ドア側面の縦長の金属プレート（フロント）にラッチとデッドボルトの2つが並んでいれば、まず箱錠と考えてよい構造です。シリンダー（鍵穴部分）とハンドルが別部品として分かれているため、シリンダーだけの交換、ハンドルだけの交換といった部分交換ができるのが特徴です。住宅からオフィスまで幅広く使われる、現在の錠前の基本形といえます。",
  },
  {
    title: "プッシュプル錠｜押す・引くで開けられる現代の玄関の主流",
    desc: "縦長のバーハンドルを押す・引くだけで開けられるのがプッシュプル錠で、近年の戸建てやマンションの玄関ドアで広く採用されています。内部は箱錠系の構造で、上下2か所にシリンダーを備えるワンドア・ツーロック仕様の製品が多いのも特徴です。ハンドルとシリンダーはメーカー・ドアメーカーごとの専用設計が多く、交換時は汎用品を流用しにくいため、フロント刻印とドアメーカー・ドア型番の確認がほぼ必須になります。見た目が同じでも内部規格が違うことがあるため、型番確認の重要度が最も高いタイプです。",
  },
  {
    title: "面付箱錠・その他｜ドアの内側に「後付け」で箱が見えるタイプ",
    desc: "ドアを彫り込まず、ドアの室内側の面にネジ留めで取り付けるのが面付箱錠です。室内側から錠ケースが箱状に見えるのが特徴で、玄関の補助錠や、こじ開けに強い錠として使われます。彫込み加工が不要なため後付けしやすく、ワンドア・ツーロック化の定番でもあります。このほか、引き戸には鎌錠・召合せ錠といった専用の錠が使われ、開き戸とは構造が別系統です。自宅の錠がどの系統かを見分けるには、「鍵穴の位置（ノブ一体か別か）」「フロントの本数と刻印」「室内側の見た目（彫込みか面付けか）」の3点を観察するのが近道です。",
  },
];

const checkSteps = [
  {
    title: "ドア側面の「フロント刻印」を確認する",
    desc: "ドアを開けて側面を見ると、ラッチやデッドボルトが出ている縦長の金属プレート（フロント）があります。ここにメーカー名（アルファベットのロゴなど）と型番が刻印されているのが一般的で、交換部品の特定に最も重要な情報です。スマートフォンで正面から明るく撮影して控えましょう。刻印が2枚のプレートに分かれている場合は両方撮影します。",
  },
  {
    title: "バックセットとドア厚を採寸する",
    desc: "バックセット（ドアの端から鍵穴・ノブの中心までの距離）とドアの厚みは、交換用の錠・シリンダーを選ぶ際の基本寸法です。メジャーで測って控えておきます。あわせて、ノブやハンドルの固定ビスの間隔、シリンダーの直径なども測っておくと、適合確認がより確実になります。",
  },
  {
    title: "錠の系統を見分ける（一体型か、箱錠系か、面付けか）",
    desc: "鍵穴がノブの中心にあればインテグラル錠・円筒錠の系統、鍵穴とハンドルが別でフロントにラッチとデッドボルトが並んでいれば箱錠系、縦長バーハンドルならプッシュプル錠、室内側に箱状のケースが見えれば面付箱錠、という順で観察すると系統を絞り込めます。引き戸の場合は開き戸用とは別系統なので、引き戸の鍵の記事を参照してください。",
  },
  {
    title: "写真と採寸値をセットにして交換の相談をする",
    desc: "フロント刻印・錠の全体写真（室外側／室内側／ドア側面）・採寸値の3点セットがあれば、ホームセンターでも鍵の専門業者でも適合部品の特定が一気に早くなります。廃番の場合も、この情報があれば互換品や現行の代替品を提案してもらいやすくなります。防犯性を上げたい場合は、交換のついでに現行の防犯性能を持つシリンダーを選ぶのが合理的です。",
  },
];

const ngActions = [
  {
    title: "見た目の形だけで「同じ錠」と判断して部品を買う",
    desc: "錠前は外観が似ていても内部規格・寸法が異なることが多く、特にプッシュプル錠はメーカー専用設計が目立ちます。フロント刻印と採寸の確認を省いた購入は、取り付け不能・買い直しの典型パターンです。",
  },
  {
    title: "刻印を確認せずに錠を分解して戻せなくなる",
    desc: "構造を確認しようと錠ケースまで分解すると、内部のバネや部品の位置が分からなくなり、復旧できずドアが施錠不能・開閉不能になることがあります。確認は「外から見える情報（刻印・寸法・写真）」の範囲にとどめるのが安全です。",
  },
  {
    title: "玄関の錠をグレードだけ下げて交換する",
    desc: "適合品が見つからないからと、防犯性の低い簡易な錠へ安易に置き換えると、住まいの防犯レベルが下がります。玄関の錠は現行の防犯性能（ピッキング対策シリンダーなど）を維持・向上させる方向で選びましょう。",
  },
  {
    title: "賃貸で無断交換・無断加工をする",
    desc: "賃貸住宅の錠前交換やドア加工は、事前に大家・管理会社の許可が必要です。無断で行うと原状回復や契約違反の問題になります。防犯上の希望がある場合も、まず管理会社に相談するのが正しい手順です。",
  },
];

const faqs = [
  {
    q: "自宅の錠前のタイプはどうやって見分ければいいですか？",
    a: "観察ポイントは3つです。第一に鍵穴の位置（ノブの中心ならインテグラル錠・円筒錠系、ノブと別なら箱錠系）、第二にドア側面のフロント（ラッチとデッドボルトが並んでいれば箱錠系）、第三に室内側の見た目（箱状のケースが見えれば面付箱錠）です。縦長バーハンドルの玄関ドアはプッシュプル錠です。この見分けとフロント刻印の型番確認で、ほとんどの錠は系統を特定できます。",
  },
  {
    q: "交換部品の型番はどこを見れば分かりますか？",
    a: "ドア側面のフロント（ラッチ・デッドボルトが出ている金属プレート）に、メーカー名と型番が刻印されているのが一般的です。シリンダーの刻印やドア本体のメーカーシールも手掛かりになります。刻印が摩耗して読めない場合は、錠の全体写真と採寸値（バックセット・ドア厚・ビス間隔）を用意して、鍵の専門業者やメーカーの相談窓口に問い合わせると特定してもらえます。",
  },
  {
    q: "インテグラル錠の玄関は交換したほうがいいですか？",
    a: "インテグラル錠や円筒錠などのノブ一体型は、構造上、現行の主流である箱錠系＋防犯シリンダーの組み合わせに比べて防犯面で見劣りしがちです。ただちに危険というわけではありませんが、玄関に使われている場合は、交換や補助錠追加による2か所施錠化を検討する価値があります。築年数が経った住まいなら、鍵交換のタイミングの記事もあわせて参考にしてください。",
  },
  {
    q: "シリンダーだけの交換と錠前ごとの交換はどう選べばいいですか？",
    a: "鍵の防犯性を上げたい・鍵を紛失して鍵違いにしたい、という目的ならシリンダーのみの交換で足りることが多く、費用も抑えられます。一方、ラッチやデッドボルトの動作不良・錠ケース内部の故障がある場合や、廃番で適合シリンダーがない場合は、錠前一式の交換が必要です。症状と目的を伝えて、業者に作業前の総額見積もりと交換範囲を確認しましょう。",
  },
];

const relatedLinks = [
  { href: "/kagi-shurui-zukan/", label: "鍵の種類図鑑", desc: "シリンダー・キーの種類別の基礎知識" },
  { href: "/kagi-koukan-timing/", label: "鍵交換のタイミングと目安", desc: "交換を検討すべきサインと考え方" },
  { href: "/doorknob-koukan/", label: "ドアノブ・ラッチの故障と交換", desc: "ノブ・ラッチ側の不調はこちら" },
  { href: "/hikido-kagi/", label: "引き戸（玄関）の鍵交換・後付け", desc: "引き戸専用の錠の基礎知識" },
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
    { "@type": "ListItem", position: 2, name: "錠前タイプ図鑑" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "錠前タイプ図鑑｜インテグラル錠・プッシュプル錠・箱錠の見分け方と型番確認",
  description: "インテグラル錠・円筒錠・箱錠・プッシュプル錠・面付箱錠の構造と見分け方、交換時に必要なフロント刻印と採寸の確認方法を一般知識として解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-10",
  dateModified: "2026-08-10",
};

export default function JoumaeTypeZukanPage() {
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
            <span className="text-text-secondary">錠前タイプ図鑑</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            錠前タイプ図鑑｜インテグラル錠・プッシュプル錠・箱錠の見分け方と型番確認
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月10日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：錠前は「鍵穴の位置・フロントの構成・室内側の見た目」で系統を見分けられる。交換の要はドア側面のフロント刻印（メーカー名・型番）の確認</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              住宅の錠前は、ノブ一体型の<strong>インテグラル錠・円筒錠</strong>、ドアに彫り込む<strong>箱錠（ケースロック）</strong>、玄関で主流の<strong>プッシュプル錠</strong>、室内側に後付けする<strong>面付箱錠</strong>が主要タイプです。見分けは「鍵穴がノブと一体か」「ドア側面のフロントにラッチとデッドボルトが並ぶか」「室内側に箱状ケースが見えるか」の3点観察が基本。交換・相談の際は<strong>フロント刻印のメーカー名・型番と、バックセット・ドア厚の採寸値</strong>を控えて写真とセットで伝えるのが最短ルートです。
            </p>
          </div>

          {/* 本文解説 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">主要な錠前タイプ4系統の構造と特徴</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            シリンダー（鍵穴側）の種類が「鍵の種類図鑑」だとすれば、こちらは錠本体の図鑑です。どの系統かが分かると、交換できる範囲と相談の仕方が具体的になります。
          </p>
          <div className="space-y-3 mb-10">
            {basics.map((t, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-4">
                <p className="font-bold text-primary text-sm mb-1.5">
                  <span className="inline-block bg-surface-alt rounded px-2 py-0.5 text-xs font-bold text-text-primary mr-2">タイプ{i + 1}</span>
                  {t.title}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* 自分でできること */}
          <h2 className="text-xl font-bold text-text-primary mb-4">交換前に自分でできる確認4ステップ</h2>
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
          <h2 className="text-xl font-bold text-text-primary mb-4">錠前の確認・交換でやってはいけないNG行動</h2>
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
            <strong>フロント刻印が読めず型番を特定できない、廃番で適合部品が見つからない、プッシュプル錠などメーカー専用設計の交換、錠ケース内部の故障</strong>といったケースは、鍵の専門業者への相談が確実です。刻印・全体写真・採寸値の3点セットを用意すると、電話やメールでの適合確認が早く進みます。シリンダー（鍵穴側）の種類の知識は<a href="/kagi-shurui-zukan/" className="text-primary underline">鍵の種類図鑑</a>を、交換すべきかどうかの判断は<a href="/kagi-koukan-timing/" className="text-primary underline">鍵交換のタイミングと目安</a>をあわせて参考にしてください。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            費用は錠のタイプとグレード、交換範囲（シリンダーのみか一式か）で変わります。作業前に部品代・作業費・出張費を含む総額見積もりを必ず確認しましょう。費用感は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、依頼先の検討は<a href="/agents/" className="text-primary underline">鍵トラブル業者の比較</a>で確認できます。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">型番が分からない錠前は、写真と採寸値で相談を</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              フロント刻印・全体写真・採寸値を用意すれば、適合部品の特定から見積もりまでスムーズに進みます。作業前の総額見積もり確認を忘れずに。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">錠前タイプのよくある質問</h2>
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
