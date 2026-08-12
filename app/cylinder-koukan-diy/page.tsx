import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "シリンダー交換をDIYでやる方法と注意点｜規格確認・採寸・手順の基礎知識 | 鍵トラブルナビ",
  description:
    "玄関の鍵（シリンダー）交換を自分で行う方法を一般知識として解説。同一規格の確認方法、バックセット・扉厚の採寸、フロントプレートを外して交換する基本手順、賃貸での無断交換NGなどDIYで失敗しないための注意点を紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/cylinder-koukan-diy/" },
};

const basics = [
  {
    title: "DIYできるのは「同一規格のシリンダーへの交換」が基本",
    desc: "シリンダー交換のDIYは、今付いている錠前に適合するシリンダーを正しく選べるかどうかで成否がほぼ決まります。作業自体はドライバー1本でできる構造の錠が多い一方、シリンダーは錠前ごとに取り付け規格が異なり、見た目が似ていても付かないことが珍しくありません。基本は、ドア側面のフロントプレートに刻印されたメーカー名・型番から、その錠に対応するシリンダー（同一メーカーの対応品や、対応を明記した互換品）を選ぶことです。プッシュプル錠や電気錠などメーカー専用設計のものは適合の見極めが難しく、DIYの難易度が上がります。",
  },
  {
    title: "採寸の基本｜バックセットと扉厚は必ず測る",
    desc: "交換用シリンダーの選定では、フロント刻印に加えて採寸が重要です。代表的なのがバックセット（ドアの端から鍵穴・ノブの中心までの距離）と扉厚（ドアの厚み）で、対応範囲が製品ごとに決まっています。あわせて、フロントプレートの縦横サイズ、シリンダーを固定するビスの位置なども控えておくと確実です。採寸はメジャーで正確に行い、フロント刻印の写真・ドア全体の写真とセットで記録しておくと、購入時の適合確認や、販売店・業者への相談がスムーズになります。",
  },
  {
    title: "交換手順の概要｜フロントのビスと固定ピンで着脱する構造が一般的",
    desc: "一般的な箱錠系のシリンダー交換は、ドアを開けた状態で行い、ドア側面のフロントプレートのビスを外し、シリンダーを固定しているピン（止め金具）を引き抜いてシリンダーを取り外し、新しいシリンダーを同じ位置に入れてピンとフロントを戻す、という流れです。作業中は部品の向きと順番を写真で記録しながら進めると、迷ったときに戻れます。取り付け後は、必ずドアを開けたままの状態で鍵の抜き差しと施解錠を数回試し、問題がないことを確認してからドアを閉めるのが鉄則です。この確認を怠って建て付けの状態で不具合が出ると、締め出しにつながります。",
  },
  {
    title: "賃貸は無断交換NG｜分譲マンションも規約確認を",
    desc: "賃貸住宅の鍵は貸主の設備であり、入居者が無断でシリンダーを交換することは契約違反や原状回復の問題になります。防犯上の理由で交換したい場合も、必ず事前に大家・管理会社へ相談し、許可と条件（費用負担・元のシリンダーの保管・退去時の扱い）を確認してから進めてください。分譲マンションでも、玄関ドアや錠の扱いが管理規約で定められている場合があるため、事前確認が安全です。賃貸の鍵交換の費用負担の考え方は、賃貸の鍵交換費用の記事で詳しく解説しています。",
  },
];

const checkSteps = [
  {
    title: "フロント刻印と錠の全体写真を記録する",
    desc: "ドア側面のフロントプレートに刻印されたメーカー名・型番を撮影し、室外側・室内側・ドア側面の全体写真も撮ります。この3点が適合確認の基本資料になります。刻印の見方は錠前タイプ図鑑の記事も参考になります。",
  },
  {
    title: "バックセット・扉厚などを採寸する",
    desc: "バックセット、扉厚、フロントプレートの縦横サイズをメジャーで測って控えます。購入予定のシリンダーの対応表と突き合わせ、範囲内に収まっているかを確認します。",
  },
  {
    title: "適合を明記した交換用シリンダーを入手する",
    desc: "型番と採寸値をもとに、対応錠前を明記した製品を選びます。判断に迷ったら、ホームセンターや鍵の販売店で写真と採寸値を見せて相談すると確実です。防犯性を上げたい場合は、ピッキング対策された現行の防犯シリンダーを選ぶのが合理的です。",
  },
  {
    title: "ドアを開けた状態で交換し、動作確認してから閉める",
    desc: "交換作業と動作確認は必ずドアを開けたまま行います。鍵の抜き差し・施解錠・ラッチやデッドボルトの動きを数回確認し、引っかかりがないことを確かめてからドアを閉めましょう。古いシリンダーは、賃貸なら返却・保管し、持ち家でも一定期間保管しておくと安心です。",
  },
];

const ngActions = [
  {
    title: "賃貸で許可を取らずに交換する",
    desc: "賃貸の錠前は貸主の設備です。無断交換は契約違反・原状回復の問題になるため、必ず事前に大家・管理会社の許可を得てから行いましょう。",
  },
  {
    title: "見た目の似た製品を適合確認なしで購入する",
    desc: "シリンダーは錠前ごとに規格が異なり、似ていても取り付けられないことがよくあります。フロント刻印と採寸による適合確認を省いた購入は、買い直しの典型パターンです。",
  },
  {
    title: "ドアを閉めた状態で動作確認をする",
    desc: "取り付け直後にドアを閉めてから不具合が見つかると、そのまま締め出されたり、ドアが開かなくなったりする恐れがあります。動作確認は必ずドアを開けたまま行いましょう。",
  },
  {
    title: "うまく外れないからと錠ケースまで分解する",
    desc: "シリンダーが外れないのに錠ケース内部まで分解すると、復旧できなくなる恐れがあります。手順どおりに進まない時点で作業を止め、専門業者に相談するのが安全です。",
  },
];

const faqs = [
  {
    q: "シリンダー交換は素人でもできますか？",
    a: "一般的な箱錠系の錠であれば、フロントのビスと固定ピンを外して入れ替える構造のため、ドライバーが使えれば作業自体は可能な範囲です。難しいのは作業より「適合するシリンダーを正しく選ぶこと」で、フロント刻印の型番確認とバックセット・扉厚の採寸が欠かせません。プッシュプル錠や電気錠などメーカー専用設計のタイプ、刻印が読めない場合は、無理をせず専門業者への依頼をおすすめします。",
  },
  {
    q: "交換用のシリンダーはどこで買えますか？",
    a: "ホームセンター、鍵の販売店、通信販売などで購入できます。どこで買う場合も、フロント刻印の型番・採寸値と製品の対応表を突き合わせて適合を確認することが前提です。店頭なら、刻印と錠の写真、採寸値のメモを持参して相談すると、選定ミスを防ぎやすくなります。防犯性を高めたい場合は、ピッキング対策された現行の防犯シリンダーを選びましょう。",
  },
  {
    q: "賃貸でも自分でシリンダー交換していいですか？",
    a: "無断での交換はできません。賃貸の錠前は貸主の設備であり、勝手に交換すると契約違反や原状回復の問題になります。防犯上の理由がある場合も、まず大家・管理会社に相談し、許可の有無、費用負担、元のシリンダーの保管方法、退去時の扱いを確認してから進めてください。費用負担の一般的な考え方は賃貸の鍵交換費用の記事で解説しています。",
  },
  {
    q: "DIYでの交換に失敗したらどうなりますか？",
    a: "典型的な失敗は、適合しない製品を買ってしまう、取り付け後に鍵が回らない・抜けない、部品を落とし込んで錠が動かなくなる、といったものです。動作確認をドアを開けたまま行っていれば大半はやり直しできますが、閉めた後に不具合が出ると締め出しや開閉不能につながります。復旧できない状態になったら、それ以上触らず鍵の専門業者に依頼しましょう。",
  },
];

const relatedLinks = [
  { href: "/kagi-koukan-timing/", label: "鍵交換のタイミングと目安", desc: "そもそも交換すべきかの判断はこちら" },
  { href: "/chintai-kagi-koukan-hiyou/", label: "賃貸の鍵交換費用と負担の考え方", desc: "賃貸で交換したい場合の基礎知識" },
  { href: "/joumae-type-zukan/", label: "錠前タイプ図鑑", desc: "フロント刻印と錠の系統の見分け方" },
  { href: "/kagi-shurui-zukan/", label: "鍵の種類図鑑", desc: "防犯シリンダー選びの基礎知識" },
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
    { "@type": "ListItem", position: 2, name: "シリンダー交換のDIY" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "シリンダー交換をDIYでやる方法と注意点｜規格確認・採寸・手順の基礎知識",
  description: "同一規格の確認方法、バックセット・扉厚の採寸、フロントプレートを外す交換手順の概要、賃貸の無断交換NGなどDIYの注意点を一般知識として解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
};

export default function CylinderKoukanDiyPage() {
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
            <span className="text-text-secondary">シリンダー交換のDIY</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            シリンダー交換をDIYでやる方法と注意点｜規格確認・採寸・手順の基礎知識
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月12日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：DIYの成否は作業より「適合確認」で決まる。フロント刻印の型番＋バックセット・扉厚の採寸で同一規格品を選び、作業と動作確認は必ずドアを開けたまま。賃貸の無断交換はNG</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              一般的な箱錠系のシリンダー交換は、<strong>フロントプレートのビスを外し、固定ピンを抜いてシリンダーを入れ替える</strong>構造で、作業自体はドライバーでできる範囲です。難所は製品選定で、<strong>フロント刻印のメーカー名・型番</strong>と<strong>バックセット・扉厚の採寸値</strong>から適合品を確認せずに買うと、取り付け不能の買い直しになりがちです。取り付け後の動作確認は必ずドアを開けたまま行い、問題ないことを確かめてから閉めること。<strong>賃貸での無断交換は契約違反・原状回復の問題になる</strong>ため、必ず事前に管理会社の許可を得てください。
            </p>
          </div>

          {/* 本文解説 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">シリンダー交換DIYの基礎知識4つ</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            「できるかどうか」は腕前より、規格の確認・採寸・住まいの契約条件で決まります。DIYに踏み切る前に押さえるべき4つのポイントを整理します。
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
          <h2 className="text-xl font-bold text-text-primary mb-4">DIY交換の進め方4ステップ</h2>
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
          <h2 className="text-xl font-bold text-text-primary mb-4">シリンダー交換DIYのNG行動</h2>
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
            <strong>フロント刻印が読めない・廃番で適合品が見つからない、プッシュプル錠や電気錠などメーカー専用設計、作業の途中で外れない・戻せない状態になった、防犯設計ごと見直したい</strong>といったケースは、鍵の専門業者への依頼が確実です。刻印・全体写真・採寸値の3点セットを用意すると、電話やメールでの見積もりが早く進みます。そもそも交換すべきタイミングかどうかは<a href="/kagi-koukan-timing/" className="text-primary underline">鍵交換のタイミングと目安</a>を、錠の系統の見分け方は<a href="/joumae-type-zukan/" className="text-primary underline">錠前タイプ図鑑</a>をあわせて参考にしてください。賃貸の方は<a href="/chintai-kagi-koukan-hiyou/" className="text-primary underline">賃貸の鍵交換費用と負担の考え方</a>で、許可と費用負担の基礎を確認してから動きましょう。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            業者依頼の費用は部品グレードと作業範囲で変わります。作業前に部品代・作業費・出張費を含む総額見積もりを必ず確認しましょう。費用感は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、依頼先の検討は<a href="/agents/" className="text-primary underline">鍵トラブル業者の比較</a>で確認できます。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">適合確認に不安が残るなら、写真と採寸値で業者に相談を</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              フロント刻印・全体写真・採寸値があれば、適合確認から見積もりまでスムーズです。無理なDIYで開閉不能にする前に、プロの手を借りるのも合理的な選択です。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">シリンダー交換DIYのよくある質問</h2>
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
