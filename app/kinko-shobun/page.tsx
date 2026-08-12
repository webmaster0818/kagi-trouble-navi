import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "開かない金庫・古い金庫の処分方法｜回収ルートと注意点の基礎知識 | 鍵トラブルナビ",
  description:
    "不要になった金庫や開かなくなった古い金庫の処分方法を一般知識として解説。耐火金庫は自治体のごみ収集で回収不可とされるのが一般的である理由、購入店・メーカー・専門業者という処分ルート、中身の確認と搬出時の重量の注意点を紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/kinko-shobun/" },
};

const basics = [
  {
    title: "耐火金庫は自治体のごみ収集では回収不可とされるのが一般的",
    desc: "家庭用の耐火金庫は、粗大ごみとして出せば処分できると思われがちですが、多くの自治体で収集・処理できない品目（適正処理困難物など）として案内されています。理由は構造にあり、耐火金庫は鋼板の間に耐火性の充填材が詰められた特殊な構成で、自治体の処理施設で破砕・処理しにくいためです。お住まいの自治体の案内で扱いを確認するのが第一歩ですが、「販売店や専門の処理業者に相談を」という案内になっているのが一般的です。手提げ金庫のような小型の金属製品は扱いが異なる場合があるため、これも自治体の分別案内で確認しましょう。",
  },
  {
    title: "処分ルートは「購入店・メーカー・専門業者」の3系統が基本",
    desc: "耐火金庫の処分ルートは大きく3つあります。第一に、買い替えを伴うなら購入店・販売店による引き取りで、新しい金庫の納品と同時に旧金庫を回収してもらえるサービスを設けている店があります。第二に、金庫メーカーの相談窓口で、自社製品の処分方法や引き取りサービスを案内している場合があります。第三に、金庫の運搬・処分を扱う専門業者や、廃棄物の収集運搬の許可を持つ業者への依頼です。いずれのルートも有償が一般的で、金庫のサイズ・重量・設置場所（階段の有無など）によって条件が変わるため、事前の見積もり確認が欠かせません。",
  },
  {
    title: "開かない金庫は「開けてから処分」か「そのまま引き取り」かを選ぶ",
    desc: "鍵をなくした・暗証番号が分からないなどで開かなくなった金庫は、処分の前に中身の問題が残ります。書類や貴重品が入っている可能性があるなら、鍵の専門業者に解錠を依頼して中身を確認してから処分するのが原則です。中身が空だと確実に分かっている場合は、開けずにそのまま引き取りに対応する業者もあります。ただし、所有者確認を求められるのが通常で、これは盗難品の処分に悪用されないための当然の手続きです。解錠の方法や依頼の流れは金庫の鍵開けの記事で詳しく解説しています。",
  },
  {
    title: "耐火金庫は見た目以上に重い｜搬出は無理をしない",
    desc: "耐火金庫は充填材の分だけ見た目より重く、家庭用の小型でも数十キロ、業務用では百キロを超えるクラスもあります。階段や段差のある搬出経路で無理に運ぶと、腰などを痛める、床や壁を傷つける、落として大事故になるといったリスクが現実的です。2階以上からの搬出、エレベーターのない建物、重量級の金庫は、運搬を含めて業者に任せるのが安全です。依頼時には、金庫の型番・おおよそのサイズと重さ（天板のシールや取扱説明書に記載があることが多い）、設置階と搬出経路を伝えると、見積もりが正確になります。",
  },
];

const checkSteps = [
  {
    title: "金庫の型番・サイズ・重量を確認する",
    desc: "金庫の扉の内側や側面・天板のシール、取扱説明書に、メーカー名・型番・重量の記載があるのが一般的です。この情報があると、自治体・販売店・業者のどこに相談してもスムーズに進みます。分からなければ、外寸の採寸と全体写真でも代用できます。",
  },
  {
    title: "中身を出し切り、空であることを確認する",
    desc: "処分前に中身をすべて取り出し、引き出しや内扉の奥まで確認します。権利証・通帳・印鑑など重要品の取り忘れは取り返しがつきません。開かない金庫は、中身の可能性があるなら先に解錠を検討しましょう。",
  },
  {
    title: "自治体の分別案内で扱いを確認する",
    desc: "お住まいの自治体の粗大ごみ・分別案内で「金庫」の項目を確認します。耐火金庫は収集不可で販売店・専門業者への相談を案内されるのが一般的ですが、手提げ金庫など小型品の扱いは自治体によって異なります。",
  },
  {
    title: "処分ルートを選び、見積もりを比較する",
    desc: "買い替えなら購入店の引き取り、そうでなければメーカー窓口や専門業者に相談します。回収費用は重量・設置階・搬出経路で変わるため、条件を伝えたうえで総額の見積もりを取り、可能なら複数の選択肢を比較しましょう。",
  },
];

const ngActions = [
  {
    title: "耐火金庫を粗大ごみとして無断で出す",
    desc: "多くの自治体で耐火金庫は収集できない品目とされており、収集場所に放置される結果になりがちです。必ず自治体の案内を確認し、適切なルートで処分しましょう。",
  },
  {
    title: "中身の確認をせずに引き渡す",
    desc: "書類や貴重品が残ったまま引き渡すと、取り戻せなくなる恐れがあります。開かない金庫も、中身の可能性があるなら解錠して確認してからの処分が原則です。",
  },
  {
    title: "重い金庫を1人で階段搬出しようとする",
    desc: "耐火金庫は見た目以上の重量があり、階段での落下は大けがや建物損傷につながります。重量級や上層階からの搬出は運搬ごと業者に任せましょう。",
  },
  {
    title: "廃棄の許可の有無を確認せず回収をうたう相手に渡す",
    desc: "廃棄物の回収には行政の許可が必要です。連絡先や所在の不明な相手に渡すと不法投棄などのトラブルに巻き込まれる恐れがあるため、販売店・メーカー・許可のある業者という確認できるルートを選びましょう。",
  },
];

const faqs = [
  {
    q: "金庫は粗大ごみに出せますか？",
    a: "耐火金庫は、鋼板の間に耐火充填材が入った特殊な構造のため処理施設で扱いにくく、多くの自治体で収集できない品目（適正処理困難物など）として案内されています。まずお住まいの自治体の分別案内を確認してください。一般的には、購入店・販売店の引き取り、メーカーの相談窓口、金庫を扱う専門業者への依頼が処分ルートになります。手提げ金庫など小型のものは自治体により扱いが異なります。",
  },
  {
    q: "開かなくなった金庫はどうやって処分すればいいですか？",
    a: "中に書類や貴重品が残っている可能性があるなら、まず鍵の専門業者に解錠を依頼して中身を確認してから処分するのが原則です。空だと確実に分かっている場合は、開けないまま引き取りに応じる業者もありますが、所有者確認を求められるのが通常です。解錠と処分をまとめて相談できる業者もあるため、状況を伝えて見積もりを取りましょう。",
  },
  {
    q: "金庫の処分費用はどのくらいかかりますか？",
    a: "処分・回収は有償が一般的で、費用は金庫のサイズ・重量・設置階・搬出経路（階段かエレベーターか）・処分ルートによって大きく変わります。金額はケースバイケースのため、型番や重量、設置状況を伝えたうえで、作業前に総額の見積もりを確認することが大切です。買い替えを伴う場合は、購入店の引き取りサービスの条件も比較材料になります。",
  },
  {
    q: "金庫の中身が分からないまま引き取ってもらえますか？",
    a: "業者によっては未開封のまま引き取りに応じる場合もありますが、盗難品の処分への悪用を防ぐため、所有者確認や本人確認を求められるのが通常です。相続などで引き継いだ開かない金庫は、権利証や遺言書などの重要書類が入っている可能性もあるため、解錠して中身を確認してからの処分をおすすめします。",
  },
];

const relatedLinks = [
  { href: "/kinko-kaijo/", label: "金庫の鍵開け・解錠", desc: "開かない金庫の解錠方法と依頼の流れ" },
  { href: "/kagi-shobun/", label: "不要になった鍵の処分方法", desc: "古い鍵・合鍵の安全な捨て方" },
  { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処法", desc: "金庫の鍵の紛失時もまずこちら" },
  { href: "/ryokin-index/", label: "鍵サービスの料金インデックス", desc: "サービス別の費用感を一覧で確認" },
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
    { "@type": "ListItem", position: 2, name: "金庫の処分方法" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "開かない金庫・古い金庫の処分方法｜回収ルートと注意点の基礎知識",
  description: "耐火金庫が自治体回収不可とされるのが一般的である理由、購入店・メーカー・専門業者という処分ルート、中身確認と搬出重量の注意点を一般知識として解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
};

export default function KinkoShobunPage() {
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
            <span className="text-text-secondary">金庫の処分方法</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            開かない金庫・古い金庫の処分方法｜回収ルートと注意点の基礎知識
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月12日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：耐火金庫は自治体のごみ収集で回収不可とされるのが一般的。「購入店・メーカー・専門業者」の3ルートから選び、中身の確認と搬出の安全を最優先に</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              耐火金庫は鋼板の間に耐火充填材が入った特殊構造のため、多くの自治体で<strong>粗大ごみとして収集できない品目</strong>と案内されています。処分は<strong>①購入店・販売店の引き取り（買い替え時）②メーカーの相談窓口 ③金庫を扱う専門業者</strong>の3ルートが基本で、いずれも有償が一般的です。開かない金庫は、中身の可能性があるなら先に解錠して確認するのが原則。耐火金庫は見た目以上に重く、階段搬出などは無理をせず運搬ごと業者に任せましょう。費用はサイズ・重量・搬出経路で変わるため、作業前の総額見積もり確認が欠かせません。
            </p>
          </div>

          {/* 本文解説 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">金庫処分の基礎知識4つ</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            金庫の処分は「普通のごみとして出せない」「中身の確認が必要」「とにかく重い」という3つの特殊事情があります。回収不可の理由から処分ルート、搬出の注意までを順に整理します。
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
          <h2 className="text-xl font-bold text-text-primary mb-4">処分前に自分でできる準備4ステップ</h2>
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
          <h2 className="text-xl font-bold text-text-primary mb-4">金庫の処分でやってはいけないNG行動</h2>
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
            <strong>開かない金庫の解錠、重量級・上層階からの搬出、解錠から処分までの一括対応</strong>は、金庫を扱う鍵の専門業者に相談するのが確実です。依頼時は、金庫の型番・サイズ・重量（分かる範囲で）、設置階と搬出経路、解錠が必要かどうかを伝えると、見積もりの精度が上がります。所有者確認を求められるのは正常な手続きなので、身分証などを準備しておきましょう。解錠の方法と流れは<a href="/kinko-kaijo/" className="text-primary underline">金庫の鍵開け・解錠</a>で詳しく解説しています。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            処分・解錠とも費用は条件次第で変わるため、作業前に出張費・作業費・運搬処分費を含む総額見積もりを必ず確認してください。費用感は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、依頼先の検討は<a href="/agents/" className="text-primary underline">鍵トラブル業者の比較</a>で確認できます。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">開かない金庫・重い金庫は、解錠と搬出をまとめて相談を</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              型番・サイズ・設置階・搬出経路を伝えれば、解錠から処分までの見積もりがスムーズです。作業前の総額見積もり確認を忘れずに。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">金庫の処分のよくある質問</h2>
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
