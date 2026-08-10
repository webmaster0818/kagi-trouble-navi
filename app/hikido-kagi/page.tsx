import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "引き戸（玄関）の鍵交換・後付けの基礎知識｜引違い戸錠・召合せ錠・戸先錠の違い | 鍵トラブルナビ",
  description:
    "玄関引き戸の鍵の仕組みを一般知識として解説。2枚の戸が重なる中央に付く召合せ錠、戸の端に付く戸先錠、引き戸で多用される鎌錠の構造、交換時の採寸ポイント（戸の厚み・ビスピッチなど）、防犯性を高める補助錠の後付けの考え方、業者に依頼すべきケースを紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/hikido-kagi/" },
};

const basics = [
  {
    title: "引き戸の鍵は「召合せ錠」と「戸先錠」の2か所が基本",
    desc: "2枚の戸を左右にスライドさせる引違い戸の玄関では、鍵の付く場所が大きく2つあります。ひとつは2枚の戸が重なる中央部分に付く召合せ錠（めしあわせじょう）で、外側から鍵で施解錠する引き戸のメイン錠です。もうひとつは戸の端（戸先）と柱側の枠に付く戸先錠で、内側からの補助的な施錠や、片方の戸の固定に使われます。開き戸のシリンダー錠とは構造がまったく異なるため、交換部品も引き戸専用のものを選ぶ必要があります。自宅の引き戸のどこに鍵が付いているかをまず確認することが、交換検討の第一歩です。",
  },
  {
    title: "引き戸で多用されるのは「鎌錠」という引っ掛け式の錠",
    desc: "開き戸のデッドボルト（かんぬき）は真っ直ぐ出て枠の穴に入りますが、引き戸は戸がスライドするため、同じ方式では施錠できません。そこで使われるのが鎌錠（かまじょう）です。鎌のような形のフックが施錠時にせり出して回転し、相手側の受けに引っ掛かることで、戸をスライドできないように固定します。召合せ錠にも戸先錠にもこの鎌式の機構が広く使われています。鎌の掛かりが浅くなる、施錠が渋くなるといった症状は、戸の建て付けの狂いや錠の摩耗のサインです。",
  },
  {
    title: "古い引き戸の鍵は防犯面で世代遅れになっていることが多い",
    desc: "昔ながらの引き戸の召合せ錠には、構造が単純で不正解錠への耐性が低い古いタイプが使われていることがあります。長年交換していない引き戸の鍵は、ピッキング対策・鍵違い数の多さといった現行水準の防犯性能を備えたシリンダーを持つ引き戸用錠へ交換することで、防犯性を大きく底上げできます。また、鍵が1か所しかない引き戸は、補助錠を追加して2か所施錠（ワンドア・ツーロック）にするのが防犯の基本的な考え方です。交換を検討すべきサインは鍵交換のタイミングの記事も参考にしてください。",
  },
  {
    title: "交換・後付けの可否は「戸の状態」と「寸法」で決まる",
    desc: "引き戸の錠交換で重要なのは採寸です。戸の厚み、既存の錠の取り付け穴の位置、召合せ錠なら上下のビス（ネジ）の間隔（ビスピッチ）、戸先錠なら戸と枠の隙間などが、交換用製品の適合条件になります。また、戸自体が反っていたり戸車が摩耗して建て付けが狂っていると、新しい錠を付けても鎌の掛かりが合わず施錠不良が再発します。アルミサッシ・木製戸・ガラス入りなど戸の素材によっても選べる製品や加工の難易度が変わるため、状態が悪い戸は錠だけでなく建て付け調整もセットで考える必要があります。",
  },
];

const checkSteps = [
  {
    title: "既存の錠の種類と取り付け位置を確認する",
    desc: "まず自宅の引き戸に付いている鍵が召合せ錠か戸先錠か、あるいは両方かを確認します。外側に鍵穴があるのは通常は召合せ錠です。錠の表面やビスを外した内側にメーカー名・型番の刻印がないかも確認し、スマートフォンで全体と刻印を撮影しておきましょう。この情報だけで適合する交換部品の特定が大きく進みます。",
  },
  {
    title: "戸の厚みとビスピッチを採寸する",
    desc: "交換用の引き戸錠には対応する戸の厚みの範囲が定められています。また召合せ錠は、固定用の上下ビスの中心間距離（ビスピッチ）が合わないと取り付けられません。メジャーで戸の厚み・ビスピッチ・既存の穴の位置を測り、控えておきます。採寸が合えば、既存の穴をそのまま使う無加工に近い交換ができる場合もあります。",
  },
  {
    title: "施錠が渋いだけなら建て付けと受けの位置を点検する",
    desc: "鍵が掛かりにくい原因が錠自体ではなく、戸車の摩耗や敷居の汚れによる戸の傾きにあることは少なくありません。戸をゆっくり閉め、鎌と受けの高さが合っているか目視で確認します。戸車の高さ調整ネジ（戸の下部側面にあることが多い）で戸の傾きを直すと施錠が軽くなることがあります。敷居やレールの清掃も基本のメンテナンスです。",
  },
  {
    title: "防犯を強化したい場合は補助錠の後付けを検討する",
    desc: "引き戸用の補助錠には、戸と枠に取り付けるタイプ、召合せ部分に追加するタイプ、レールに置いて戸の走行を物理的に止める簡易タイプなどがあります。穴あけ不要の製品なら賃貸でも導入しやすい一方、固定力は加工を伴うタイプに劣ります。1か所目の錠を現行水準のものに交換し、2か所目として補助錠を足す組み合わせが、引き戸防犯の考え方の基本です。補助錠の選び方は玄関の鍵の後付けの記事で詳しく解説しています。",
  },
];

const ngActions = [
  {
    title: "開き戸用のシリンダー錠を引き戸に流用しようとする",
    desc: "引き戸と開き戸は施錠の仕組みが根本的に異なり、開き戸用の錠前やシリンダーは引き戸には取り付けられません。必ず引き戸用（引違い戸錠・戸先錠・鎌錠）として販売されている製品から選びましょう。",
  },
  {
    title: "採寸せずに通販で交換用の錠を購入する",
    desc: "戸の厚み・ビスピッチ・穴位置が合わない錠は取り付けられず、無理に付けると戸を傷めて加工費が余計にかかります。購入前の採寸と型番確認は省略しないでください。",
  },
  {
    title: "掛かりが渋い鍵を力任せに回して施錠し続ける",
    desc: "建て付けの狂いで鎌と受けがズレたまま力で施錠を続けると、鎌や受けの変形・破損が進み、最悪の場合は施錠も解錠もできなくなります。渋さを感じたら建て付けの点検を先に行いましょう。",
  },
  {
    title: "賃貸の引き戸に無断で穴あけ加工をする",
    desc: "賃貸住宅で戸や枠に穴をあける補助錠の取り付けや錠の交換を無断で行うと、原状回復義務や契約違反の問題になります。まず大家・管理会社に相談し、許可の範囲内で穴あけ不要タイプを選ぶなどの対応をとりましょう。",
  },
];

const faqs = [
  {
    q: "引き戸の鍵は自分で交換できますか？",
    a: "既存の錠と同じメーカー・同規格の後継品が入手でき、戸の厚みやビスピッチが適合する場合は、ドライバーでの交換が可能なケースもあります。ただし引き戸は開き戸に比べて製品の適合条件が細かく、建て付けの影響も受けやすいため、採寸や型番特定に不安がある場合、戸の加工が必要な場合は、鍵の専門業者や建具店に依頼するのが確実です。",
  },
  {
    q: "召合せ錠と戸先錠はどちらを交換すべきですか？",
    a: "外から鍵で施解錠するメインの鍵は召合せ錠なので、防犯性を上げたい場合はまず召合せ錠を現行水準のシリンダーを備えた製品に交換するのが基本です。そのうえで、戸先錠や補助錠を追加して2か所施錠にすると、こじ開けや不正解錠への抵抗時間を稼げます。どちらか一方だけ新しくしても、もう一方が弱いままでは効果が限定的になる点に注意しましょう。",
  },
  {
    q: "引き戸の鍵が掛かりにくくなりました。錠の故障でしょうか？",
    a: "錠自体の摩耗のこともありますが、引き戸では戸車の摩耗・敷居やレールの汚れ・戸の反りによって鎌と受けの位置がズレ、施錠が渋くなるケースが目立ちます。まずレールの清掃と戸車の高さ調整を試し、それでも改善しない場合に錠の劣化を疑う、という順序で切り分けるのがおすすめです。力任せの施錠は破損を早めるため避けてください。",
  },
  {
    q: "古い引き戸に防犯性の高い鍵を後付けできますか？",
    a: "多くの場合可能です。召合せ錠を現行の防犯性能を持つ引き戸用錠に交換する方法と、補助錠を追加する方法があり、併用が理想です。ただし戸の素材や状態（反り・建て付け）によって選べる製品や加工の要否が変わるため、戸の状態が悪い場合は建て付け調整も含めて業者に相談すると確実です。賃貸の場合は事前に大家・管理会社の許可を得てください。",
  },
];

const relatedLinks = [
  { href: "/genkan-kagi-atozuke/", label: "玄関の鍵の後付け・補助錠", desc: "ワンドア・ツーロックの考え方と選び方" },
  { href: "/kagi-koukan-timing/", label: "鍵交換のタイミングと目安", desc: "交換を検討すべきサインと考え方" },
  { href: "/joumae-type-zukan/", label: "錠前タイプ図鑑", desc: "錠前の構造と型番確認の基礎知識" },
  { href: "/chintai-bouhan/", label: "賃貸住宅の防犯対策", desc: "賃貸でもできる防犯強化の方法" },
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
    { "@type": "ListItem", position: 2, name: "引き戸（玄関）の鍵交換・後付け" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "引き戸（玄関）の鍵交換・後付けの基礎知識｜引違い戸錠・召合せ錠・戸先錠の違い",
  description: "玄関引き戸の召合せ錠・戸先錠・鎌錠の構造、交換時の採寸ポイント、補助錠後付けによる防犯強化の考え方、業者依頼の判断基準を一般知識として解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-10",
  dateModified: "2026-08-10",
};

export default function HikidoKagiPage() {
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
            <span className="text-text-secondary">引き戸（玄関）の鍵交換・後付け</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            引き戸（玄関）の鍵交換・後付けの基礎知識｜引違い戸錠・召合せ錠・戸先錠の違い
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月10日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：引き戸の鍵は中央の召合せ錠＋端の戸先錠。交換は引き戸専用品を採寸のうえ選び、補助錠追加で2か所施錠にするのが防犯の基本</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              玄関引き戸の鍵は、2枚の戸が重なる中央の<strong>召合せ錠</strong>と、戸の端の<strong>戸先錠</strong>が基本で、施錠には鎌形のフックを受けに掛ける<strong>鎌錠</strong>の機構が広く使われています。開き戸用の錠は流用できないため、交換は必ず引き戸専用品から、<strong>戸の厚み・ビスピッチ・型番を確認して</strong>選びます。長年使った引き戸の錠は防犯面で世代遅れのことが多く、<strong>召合せ錠の現行品への交換＋補助錠の後付けで2か所施錠</strong>にするのが防犯強化の基本の考え方です。
            </p>
          </div>

          {/* 本文解説 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">引き戸の鍵の基礎知識｜押さえておきたい4つのポイント</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            引き戸の鍵は開き戸とは構造がまったく違います。どこにどんな錠が付いているのかを知っておくと、交換や防犯強化の相談が具体的に進められます。
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
          <h2 className="text-xl font-bold text-text-primary mb-4">交換・後付けの前に自分でできる4ステップ</h2>
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
          <h2 className="text-xl font-bold text-text-primary mb-4">引き戸の鍵交換でやってはいけないNG行動</h2>
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
            引き戸の鍵交換は、適合部品の特定・戸の加工・建て付け調整という3つのハードルがあり、開き戸のシリンダー交換よりも判断が難しい分野です。<strong>型番が特定できない、戸の反りや戸車の摩耗がある、廃番で後継品が見つからない</strong>といった場合は、鍵の専門業者や建具店への依頼が確実です。交換のタイミングの考え方は<a href="/kagi-koukan-timing/" className="text-primary underline">鍵交換のタイミングと目安</a>を、補助錠を含めた後付けの選択肢は<a href="/genkan-kagi-atozuke/" className="text-primary underline">玄関の鍵の後付け・補助錠</a>を参考にしてください。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            依頼時は、戸の全体・錠の外観・刻印の写真と採寸値を伝えると見積もりの精度が上がります。費用は錠のグレードと加工の有無で変わるため、作業前に部品代・作業費・出張費を含む総額見積もりを必ず確認しましょう。費用感は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、依頼先の検討は<a href="/agents/" className="text-primary underline">鍵トラブル業者の比較</a>で確認できます。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">引き戸の鍵は適合判断が難所。迷ったら専門業者へ</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              戸の写真・刻印・採寸値を用意して相談すれば話が早く進みます。作業前の総額見積もりを確認してから依頼しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">引き戸の鍵のよくある質問</h2>
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
