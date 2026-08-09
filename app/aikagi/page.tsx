import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "合鍵の作り方と値段の考え方｜作れる場所・作れない鍵・純正取り寄せとの違い | 鍵トラブルナビ",
  description:
    "合鍵（スペアキー）の作り方を解説。合鍵専門店・ホームセンター・鍵業者・メーカー純正取り寄せの違い、登録制・セキュリティカード式の鍵は店頭で作れない理由、値段が鍵の種類で大きく変わる仕組みをわかりやすく紹介。合鍵から合鍵を作ってはいけない理由も解説します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/aikagi/" },
};

const places = [
  {
    title: "合鍵専門店（マシンカット複製）",
    desc: "駅前や商業施設にある合鍵店では、持ち込んだ鍵を機械でなぞって複製します。刻みキー（ギザギザの鍵）なら短時間で作れるのが最大の利点です。一方で、複製はあくまで「持ち込んだ鍵のコピー」なので、元の鍵が摩耗していれば誤差ごと写し取られます。店舗の設備や技術によって仕上がりの精度に差が出る点も知っておきましょう。",
  },
  {
    title: "ホームセンターの合鍵コーナー",
    desc: "多くのホームセンターにも合鍵作製サービスがあります。対応できる鍵の種類は店舗の設備次第で、シンプルな刻みキーが中心です。ディンプルキーや特殊形状の鍵は「対応不可」または「預かりで日数がかかる」対応になることが一般的です。買い物ついでに作れる手軽さが魅力ですが、防犯性の高い鍵は次に紹介する純正取り寄せが確実です。",
  },
  {
    title: "鍵の専門業者（出張の鍵屋）",
    desc: "鍵開けや鍵交換を行う専門業者でも、合鍵作製に対応していることがあります。特殊な鍵への対応力が高い場合があるほか、「鍵をなくして家に入れない」ような緊急時には、開錠とあわせて鍵作成まで相談できるのが強みです。ただし出張を伴う場合は出張費がかかるのが一般的なので、急ぎでないなら店舗持ち込みや純正取り寄せと比較しましょう。",
  },
  {
    title: "メーカー純正キーの取り寄せ",
    desc: "鍵に刻印された鍵番号をもとに、メーカーが新品の鍵を製造して届けてくれる方法です。複製ではなく「元データから作る新品」なので精度が最も高く、摩耗の連鎖が起きません。ディンプルキーや登録制の鍵はこの方法が基本です。申し込みは錠前メーカーの窓口や代理店、購入した建材店・管理会社経由などで、手元に届くまで日数がかかるのが一般的です。",
  },
];

const cannotMake = [
  {
    title: "登録制（セキュリティカード式）の鍵",
    desc: "防犯性の高いディンプルキーの一部は所有者登録制で、合鍵の作製にはセキュリティカードや登録情報による本人確認が必要です。この仕組みの鍵は、そもそも店頭での複製を受け付けてもらえないのが原則です。「勝手に合鍵を作られない」ことが防犯性能の一部なので、不便さは安全性の裏返しといえます。",
  },
  {
    title: "純正でない合鍵（コピーのコピー）",
    desc: "多くの店では、合鍵からさらに合鍵を作ることを断られるか、非推奨とされます。複製のたびに誤差が積み重なり、鍵穴で回らない・抜けないトラブルの原因になるためです。合鍵を作るときは必ず純正キー（元鍵）を持ち込むのが原則です。",
  },
  {
    title: "特殊形状・電子部品付きの鍵",
    desc: "カードキー、リモコンキー、チップ内蔵の鍵などは、一般的な合鍵店の機械では複製できません。管理会社・メーカー・専門窓口を通じた追加発行の手続きになります。マンションのオートロックと連動した鍵も、管理組合・管理会社経由での手配が必要なことが一般的です。",
  },
  {
    title: "刻印が読めないほど摩耗した鍵",
    desc: "鍵番号の刻印が消えていると純正取り寄せの手続きが難しくなり、摩耗が激しい鍵はコピー元としても不適切です。この状態まで使い込んだ鍵は、合鍵作製ではなくシリンダーごと交換する方が結果的に安心です。",
  },
];

const selfSteps = [
  {
    title: "鍵の種類と鍵番号を確認する",
    desc: "鍵の側面がギザギザなら刻みキー、表面に丸いくぼみが並んでいればディンプルキーです。鍵本体にはメーカー名と鍵番号が刻印されていることが多く、これが分かれば「店頭で作れるか」「純正取り寄せになるか」の見当がつきます。ただし鍵番号は合鍵作製に使える重要情報なので、写真をSNSに載せる・人に見せるのは絶対に避けてください。",
  },
  {
    title: "必ず純正キー（元鍵）を持ち込む",
    desc: "合鍵を作るときは、普段使っている合鍵ではなく、最初に受け取った純正キーを持ち込みましょう。純正キーは製造時の正確な形状を保っているため、複製の精度が最も高くなります。純正キーは日常使いせず、合鍵作製用・非常用として保管しておくのが理想的な運用です。",
  },
  {
    title: "登録制の鍵はセキュリティカードを用意する",
    desc: "登録制の鍵の合鍵が必要な場合は、購入時に付属したセキュリティカード（またはIDカード・登録番号）を手元に用意し、メーカーの案内に沿って申請します。カードを紛失している場合の手続きはメーカーによって異なるため、まず錠前メーカーの窓口か、物件なら管理会社に確認しましょう。",
  },
  {
    title: "賃貸の場合は契約・管理会社に確認する",
    desc: "賃貸物件では、合鍵の作製について契約で制限されている場合があります。無断で作ると退去時のトラブル（本数不足・返却義務違反）の原因になるため、作る前に管理会社へ確認するのが安全です。退去時には作った合鍵も含めて全て返却するのが原則です。",
  },
];

const ngActions = [
  {
    title: "合鍵からさらに合鍵を作る",
    desc: "複製を重ねるたびに誤差が蓄積し、「回らない」「抜けない」トラブルの原因になります。作るときは必ず純正キーから。すでに合鍵しか手元にない場合は、純正キーの取り寄せを検討しましょう。",
  },
  {
    title: "鍵の写真をSNSに投稿する",
    desc: "鍵の形状や鍵番号が写った写真からは合鍵が複製され得ます。新居の鍵の記念撮影などをネットに公開するのは、住所情報と組み合わさると非常に危険です。",
  },
  {
    title: "精度の低い合鍵を使い続ける",
    desc: "回りにくい合鍵を無理に使い続けると、シリンダー内部を傷めたり、鍵穴の中で折れたりするリスクがあります。回りが悪い合鍵は使用をやめ、純正キーから作り直しましょう。",
  },
  {
    title: "他人の鍵を無断で複製する",
    desc: "家族以外の鍵を本人の同意なく複製することは、犯罪に問われ得る行為です。また賃貸で契約に反して無断複製することもトラブルの元です。合鍵は正当な権利者が正規の手順で作るものです。",
  },
];

const faqs = [
  {
    q: "合鍵の値段はいくらくらいですか？",
    a: "合鍵の値段は、鍵の種類（刻みキーかディンプルキーか）、作製方法（店頭複製かメーカー純正取り寄せか）、依頼先によって大きく変わるため、一律にはいえません。一般的な傾向として、シンプルな刻みキーの店頭複製は安価で短時間、ディンプルキーや登録制の鍵の純正取り寄せは費用も日数もかかります。緊急の鍵トラブルとあわせて依頼する場合の費用感は、料金相場のページを参考にしてください。",
  },
  {
    q: "ディンプルキーの合鍵はホームセンターで作れますか？",
    a: "対応していない店舗が多く、対応可能でも預かりで日数がかかったり、純正キーに比べ精度が落ちたりする場合があります。ディンプルキーは、メーカーから純正キーを取り寄せるのが精度・確実性の面で基本です。所有者登録制（セキュリティカード式）の鍵は、そもそも本人申請による純正取り寄せしかできない仕組みになっています。",
  },
  {
    q: "純正キーがなく、合鍵しか手元にありません。どうすればいいですか？",
    a: "合鍵から合鍵を作るのは精度低下の原因になるため推奨されません。鍵番号が分かればメーカーから純正キーを取り寄せられる場合があるので、まず鍵の刻印を確認しましょう。賃貸なら管理会社に相談すれば手配してもらえることがあります。鍵番号も分からず摩耗が進んでいる場合は、シリンダー交換で鍵一式を新しくする選択肢も検討してください。",
  },
  {
    q: "合鍵を作るのに必要なものはありますか？",
    a: "店頭複製なら元になる鍵（できれば純正キー）を持ち込めば作れるのが一般的ですが、防犯上の観点から身分証の提示を求める店舗もあります。メーカー純正取り寄せでは鍵番号が必要で、登録制の鍵ではさらにセキュリティカードなどによる本人確認が必須です。賃貸物件の場合は、事前に管理会社へ作製可否を確認しておきましょう。",
  },
];

const relatedLinks = [
  { href: "/dimple-key/", label: "ディンプルキーとは？防犯性と交換の考え方", desc: "登録制の仕組みと防犯性を解説" },
  { href: "/kagi-funshitsu/", label: "鍵をなくした時の対処法", desc: "紛失時にやるべきことを手順で解説" },
  { href: "/chintai-kagi-koukan-hiyou/", label: "賃貸の鍵交換費用は誰が負担？", desc: "賃貸の鍵まわりの費用負担ルール" },
  { href: "/ryokin/", label: "鍵開け・鍵交換の料金相場", desc: "依頼前に知っておきたい費用感" },
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
    { "@type": "ListItem", position: 2, name: "合鍵の作り方と値段の考え方" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "合鍵の作り方と値段の考え方（作れない鍵も解説）",
  description: "合鍵を作れる場所の種類、純正キー取り寄せとの違い、登録制の鍵が店頭で作れない理由を一般知識として解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-09",
  dateModified: "2026-08-09",
};

export default function AikagiPage() {
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
            <span className="text-text-secondary">合鍵の作り方と値段の考え方</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            合鍵の作り方と値段の考え方｜作れる場所・作れない鍵も解説
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月9日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：合鍵は「鍵の種類」で作り方も値段も大きく変わる</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              合鍵は、<strong>シンプルな刻みキーなら合鍵店やホームセンターの店頭で短時間で複製できます</strong>が、ディンプルキーは対応店が限られ、<strong>メーカー純正キーの取り寄せ（日数がかかる）が基本</strong>です。さらに<strong>登録制・セキュリティカード式の鍵は本人申請でしか作れず、店頭複製は不可</strong>。値段も鍵の種類と作製方法で大きく変わるため、まず自分の鍵のタイプを確認することが第一歩です。作るときは必ず<strong>純正キー（元鍵）から</strong>作りましょう。
            </p>
          </div>

          {/* 作れる場所 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">合鍵を作れる場所は4種類</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            合鍵の作製方法は大きく分けて「持ち込んだ鍵を機械で複製する方法」と「鍵番号からメーカーが新品を作る方法」の2つがあり、依頼先によって対応範囲・精度・かかる日数が異なります。それぞれの特徴を押さえておきましょう。
          </p>
          <div className="space-y-3 mb-10">
            {places.map((p, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-4">
                <p className="font-bold text-primary text-sm mb-1.5">
                  <span className="inline-block bg-surface-alt rounded px-2 py-0.5 text-xs font-bold text-text-primary mr-2">{i + 1}</span>
                  {p.title}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* 複製と純正の違い */}
          <h2 className="text-xl font-bold text-text-primary mb-4">店頭複製とメーカー純正取り寄せの違い</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            この2つの違いは「コピー」か「新品」かです。店頭複製は持ち込んだ鍵をなぞって削るため、<strong>元の鍵の摩耗や複製機の誤差がそのまま仕上がりに反映されます</strong>。普段使いで摩耗した合鍵をコピー元にすると、誤差が積み重なって回りにくい鍵ができあがることがあります。一方、純正取り寄せは鍵番号から製造時の正確な形状データで新品を作るため、<strong>精度は新品同様</strong>です。そのぶん日数と手続きが必要になります。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            使い分けの目安は、「急ぎ・簡易な刻みキーなら店頭複製」「精度重視・ディンプルキー・長く使う鍵なら純正取り寄せ」です。回りにくい合鍵を無理に使い続けるとシリンダーを傷める原因になります。すでに鍵の回りが悪い場合は<a href="/kagi-mawaranai/" className="text-primary underline">鍵が回らない・回りにくい時の対処法</a>も参考にしてください。
          </p>

          {/* 作れない鍵 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">店頭では作れない鍵・断られる鍵</h2>
          <div className="space-y-3 mb-10">
            {cannotMake.map((c, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-4">
                <p className="font-bold text-primary text-sm mb-1">{c.title}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* 自分でできること */}
          <h2 className="text-xl font-bold text-text-primary mb-4">合鍵を作る前に自分で確認すること</h2>
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
          <h2 className="text-xl font-bold text-text-primary mb-4">やってはいけないNG行動</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">NG: {n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 業者判断 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵業者に相談すべきケースと選び方</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            「鍵をなくして家に入れない状態で、合鍵も手元にない」「純正キーが1本もなく複製元がない」「特殊な鍵でどこに頼めばいいか分からない」といったケースは、店頭の合鍵作製では解決できないため、鍵の専門業者に相談するのが確実です。緊急の開錠が必要な場合の手順は<a href="/kagi-funshitsu/" className="text-primary underline">鍵をなくした時の対処法</a>で解説しています。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            業者に依頼する場合の費用は、<strong>鍵の種類・作業内容・時間帯によって大きく変わります</strong>。電話口の金額は最低料金であることが多いため、作業前に「出張費・作業費込みの総額」を必ず確認しましょう。費用感は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、依頼先の比較は<a href="/agents/" className="text-primary underline">鍵トラブル業者の比較</a>でチェックできます。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">合鍵で解決できないトラブルは業者に相談</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              鍵の紛失・純正キーなし・特殊キーなどは専門業者の領域です。総額見積もりを確認してから依頼しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">合鍵のよくある質問</h2>
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
