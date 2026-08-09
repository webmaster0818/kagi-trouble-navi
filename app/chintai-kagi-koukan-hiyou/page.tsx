import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "賃貸の鍵交換費用は誰が負担？入居時・紛失時・退去時のケース別に解説 | 鍵トラブルナビ",
  description:
    "賃貸物件の鍵交換費用を誰が負担するのかをケース別に解説。入居時の交換費用は契約内容次第で、国土交通省の原状回復ガイドラインでは入居者の入れ替わりに伴う交換は貸主負担が妥当とされています。鍵を紛失した場合は借主負担が一般的。無断で鍵交換してはいけない理由と、管理会社への正しい相談手順も紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/chintai-kagi-koukan-hiyou/" },
};

const cases = [
  {
    title: "入居時の鍵交換 → 契約内容次第（特約で借主負担とされることが多い）",
    desc: "新しく入居する際の鍵交換費用は、賃貸借契約書の特約でどう定められているかで決まります。実務上は「鍵交換費用は借主負担」とする特約が広く使われており、初期費用の明細に「鍵交換代」として計上されるのが一般的です。一方で、国土交通省の「原状回復をめぐるトラブルとガイドライン」では、入居者の入れ替わりに伴う鍵交換は物件管理上の問題であり、貸主（大家）負担とすることが妥当と整理されています。特約自体は契約自由の範囲で有効とされることが多いものの、納得できない場合は契約前に交渉の余地があるポイントです。",
  },
  {
    title: "鍵を紛失した・壊した場合 → 借主負担が一般的",
    desc: "借主の不注意で鍵をなくした、鍵を折ってしまったなど、借主側に原因があるトラブルの場合は、鍵の再作成やシリンダー交換の費用は借主負担となるのが一般的です。賃貸借契約における善管注意義務（借りたものを注意して管理する義務）の考え方によるもので、ガイドラインの整理とも整合します。紛失に気づいたら、まず管理会社または大家に連絡し、指示を受けてから対応するのが正しい手順です。",
  },
  {
    title: "経年劣化・自然故障の場合 → 貸主負担が原則",
    desc: "普通に使っていたのに鍵が回らなくなった、シリンダー内部が摩耗して施錠できなくなったなど、経年劣化や自然故障が原因の場合は、設備の維持管理義務を負う貸主（大家）の負担で修理・交換されるのが原則です。故意・過失によらない故障まで借主が負担する必要は基本的にありません。ただし自己判断で業者を呼ぶ前に、必ず管理会社へ症状を伝えて対応を確認しましょう。",
  },
  {
    title: "防犯性を高めたくて借主が希望する交換 → 借主負担＋事前承諾が必要",
    desc: "「前の入居者が合鍵を持っているかもしれないので替えたい」「ディンプルキーに替えたい」など、借主側の希望による交換は借主負担となります。重要なのは費用よりも手続きで、賃貸物件の鍵は建物設備の一部のため、交換には貸主・管理会社の事前承諾が必須です。承諾を得たうえで、取り外した元のシリンダーは退去時に戻せるよう保管しておくのが一般的な運用です。",
  },
  {
    title: "退去時の鍵交換代の請求 → ガイドライン上は貸主負担が妥当とされる",
    desc: "退去精算の際に「次の入居者のための鍵交換代」を請求されるケースがありますが、国土交通省ガイドラインの考え方では、入れ替わりに伴う鍵交換は貸主負担が妥当とされています（借主が鍵を紛失した場合を除く）。契約書に明確な特約がないのに退去時に請求された場合は、根拠となる契約条項を確認し、納得できなければ消費生活センターなどに相談する選択肢もあります。",
  },
];

const selfSteps = [
  {
    title: "賃貸借契約書・重要事項説明書を確認する",
    desc: "まず自分の契約で鍵交換費用がどう定められているかを確認します。「鍵交換費用」「シリンダー交換」「特約事項」などの項目を探し、負担者と金額の記載をチェックしましょう。初期費用の明細（見積書・精算書）に鍵交換代が含まれていたかどうかも判断材料になります。契約書が見つからない場合は、管理会社に契約内容の確認を依頼できます。",
  },
  {
    title: "トラブル時はまず管理会社・大家に連絡する",
    desc: "紛失・故障のどちらでも、最初の連絡先は鍵業者ではなく管理会社（いなければ大家）です。物件によっては提携業者や緊急対応窓口が決まっており、そちらを通すことが契約上求められている場合があります。連絡時は「いつから・どんな症状か・鍵の種類」を伝えるとその後の対応がスムーズです。夜間で管理会社につながらない場合は、24時間の緊急連絡先が契約書類に記載されていないかを確認しましょう。",
  },
  {
    title: "借主負担になる場合は見積もりを比較する",
    desc: "紛失などで借主負担となる場合でも、管理会社指定の業者に必ず頼まなければならないとは限りません（契約で指定がある場合を除く）。管理会社の承諾を得たうえで、複数の鍵業者から総額見積もりを取って比較すると、費用を抑えられることがあります。交換費用は鍵の種類（刻みキー・ディンプルキーなど）や時間帯で大きく変わるため、相場感は事前に把握しておきましょう。",
  },
  {
    title: "紛失時は警察への遺失届も出しておく",
    desc: "鍵を紛失した場合は、鍵交換の手配と並行して警察署・交番に遺失届を提出しておきましょう。後日見つかった際に連絡が来るほか、拾得物として届いていればその場で確認できます。住所が分かるもの（免許証や郵便物）と一緒に鍵をなくした場合は防犯リスクが高いため、見つかったとしてもシリンダー交換を検討するのが安全です。",
  },
];

const ngActions = [
  {
    title: "管理会社に無断で鍵を交換する",
    desc: "賃貸の鍵・シリンダーは貸主の所有物（建物設備）です。無断で交換すると契約違反となり、原状回復費用の請求やトラブルの原因になります。防犯目的でも必ず事前に承諾を取りましょう。",
  },
  {
    title: "連絡なしで自分で業者を手配する",
    desc: "緊急時でも、可能な限り先に管理会社へ連絡を。無断で開錠・交換を依頼すると、費用を負担してもらえるはずのケース（経年劣化など）でも自己負担になったり、指定業者ルールに反したりすることがあります。",
  },
  {
    title: "紛失を放置してそのまま住み続ける",
    desc: "なくした鍵がどこで誰の手に渡るか分かりません。特に住所が特定できる持ち物と一緒に紛失した場合、空き巣被害のリスクがあります。報告しづらくても、管理会社への連絡と交換の相談を早めに行いましょう。",
  },
  {
    title: "退去時の請求を内容確認せずに支払う",
    desc: "退去精算の明細に鍵交換代があった場合、契約書の特約に根拠があるかを確認しましょう。ガイドライン上は入れ替わりに伴う交換は貸主負担が妥当とされており、根拠のない請求は交渉の余地があります。",
  },
];

const faqs = [
  {
    q: "賃貸の入居時に請求される鍵交換費用は払わないといけませんか？",
    a: "賃貸借契約書に「鍵交換費用は借主負担」という特約があり、内容を理解したうえで契約したのであれば、支払い義務が生じるのが一般的です。国土交通省の原状回復ガイドラインでは入れ替わりに伴う鍵交換は貸主負担が妥当と整理されていますが、これは法的な強制力を持つルールではなく、特約が優先される運用が実務上は多くみられます。納得できない場合は契約前の交渉が現実的な対処です。",
  },
  {
    q: "鍵をなくした場合、交換費用は全額自己負担ですか？",
    a: "借主の過失による紛失は、シリンダー交換費用を借主が負担するのが一般的です。金額は鍵の種類（刻みキー・ディンプルキー・電子錠など）や依頼先、時間帯によって大きく変わります。まず管理会社に連絡して手順を確認し、自分で業者を選べる場合は複数の総額見積もりを比較しましょう。火災保険や共済の特約で鍵トラブルの費用が補償される場合もあるため、加入内容の確認もおすすめです。",
  },
  {
    q: "防犯のために自分でディンプルキーに交換してもいいですか？",
    a: "無断での交換はできません。賃貸の鍵は貸主の所有物のため、交換には貸主・管理会社の事前承諾が必要です。承諾が得られた場合、費用は希望者である借主負担が一般的で、取り外した元のシリンダーは退去時に原状回復できるよう保管しておきます。承諾の記録（メール等）を残しておくと退去時のトラブル防止になります。",
  },
  {
    q: "退去時に「次の入居者用の鍵交換代」を請求されました。妥当ですか？",
    a: "国土交通省の原状回復ガイドラインでは、入居者の入れ替わりに伴う鍵交換は物件管理上の問題であり貸主負担が妥当とされています（借主が鍵を紛失・破損した場合を除く）。契約書に借主負担とする明確な特約があるかを確認し、根拠が不明な場合は管理会社に説明を求めましょう。話し合いで解決しない場合は、消費生活センターや自治体の無料法律相談を利用する方法があります。",
  },
];

const relatedLinks = [
  { href: "/kagi-funshitsu/", label: "鍵をなくした時の対処法", desc: "紛失時にやるべきことを手順で解説" },
  { href: "/kagi-koukan-timing/", label: "鍵交換のタイミングと目安", desc: "交換を検討すべきサインを解説" },
  { href: "/dimple-key/", label: "ディンプルキーとは？防犯性と交換の考え方", desc: "防犯性の高い鍵の基礎知識" },
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
    { "@type": "ListItem", position: 2, name: "賃貸の鍵交換費用は誰が負担？" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "賃貸の鍵交換費用は誰が負担？入居時・紛失時・退去時のケース別に解説",
  description: "賃貸の鍵交換費用の負担者をケース別に解説。国交省ガイドラインの考え方と管理会社への正しい相談手順を紹介。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-09",
  dateModified: "2026-08-09",
};

export default function ChintaiKagiKoukanHiyouPage() {
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
            <span className="text-text-secondary">賃貸の鍵交換費用は誰が負担？</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            賃貸の鍵交換費用は誰が負担？入居時・紛失時・退去時のケース別に解説
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月9日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：負担者は「原因」と「契約内容」で決まる</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              賃貸の鍵交換費用は、<strong>入居時の交換は契約（特約）次第</strong>で、実務上は借主負担の特約が多い一方、国土交通省の原状回復ガイドラインでは<strong>入居者の入れ替わりに伴う交換は貸主負担が妥当</strong>と整理されています。<strong>鍵を紛失・破損した場合は借主負担が一般的</strong>、経年劣化による故障は貸主負担が原則です。どのケースでも、<strong>無断で鍵を交換するのはNG</strong>。必ず先に管理会社・大家へ連絡しましょう。
            </p>
          </div>

          {/* ケース別 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">ケース別：鍵交換費用の負担者早わかり</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            賃貸の鍵交換で「誰が払うのか」は、交換が必要になった原因によって考え方が変わります。ここでは代表的な5つのケースについて、一般的な整理を解説します。実際の負担は個別の契約内容が優先されるため、必ずお手元の賃貸借契約書とあわせて確認してください。
          </p>
          <div className="space-y-3 mb-10">
            {cases.map((c, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-4">
                <p className="font-bold text-primary text-sm mb-1.5">
                  <span className="inline-block bg-surface-alt rounded px-2 py-0.5 text-xs font-bold text-text-primary mr-2">ケース{i + 1}</span>
                  {c.title}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* ガイドラインの考え方 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">国土交通省「原状回復ガイドライン」の考え方</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            賃貸の費用負担トラブルで基準としてよく参照されるのが、国土交通省の「原状回復をめぐるトラブルとガイドライン」です。このガイドラインでは、鍵の取り替えについて<strong>「破損や鍵紛失という事情のない場合、入居者の入れ替わりによる物件管理上の問題であり、貸主負担とすることが妥当」</strong>という考え方が示されています。つまり、借主に落ち度がないのに行われる防犯目的・管理目的の交換は、本来は物件を管理する側のコストという整理です。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            ただし、ガイドラインは法律そのものではなく、あくまで一般的な基準・考え方を示すものです。契約書に「鍵交換費用は借主負担とする」といった特約があり、借主が内容を理解して合意していれば、その特約が有効とされる運用が実務上は広くみられます。だからこそ、契約前に特約の内容を確認すること、そして退去時に根拠の不明な請求があれば契約条項を確認することが重要になります。
          </p>

          {/* 自分でできること */}
          <h2 className="text-xl font-bold text-text-primary mb-4">自分でできること（確認と連絡の手順）</h2>
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

          {/* 業者に頼む判断と選び方 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵業者に依頼する場合の判断と選び方</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            借主負担で交換することになった場合や、管理会社から「業者は自分で手配してよい」と言われた場合は、鍵の専門業者に依頼することになります。交換費用は<strong>鍵の種類（刻みキー・ディンプルキー・電子錠など）や依頼する時間帯によって大きく変わる</strong>ため、特定の金額を鵜呑みにせず、作業前に「部品代＋作業費＋出張費を含めた総額」の見積もりを必ず確認しましょう。電話で伝えられる金額は最低料金であることが多い点にも注意が必要です。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            費用感を事前に把握しておきたい方は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>を、料金体系や対応エリアで業者を比べたい方は<a href="/agents/" className="text-primary underline">鍵トラブル業者の比較</a>をご覧ください。賃貸の場合は、見積もり内容を管理会社に共有してから作業に進むとトラブルを防げます。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">交換が必要になったら、まず総額見積もりを</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              管理会社の承諾を得たら、複数の業者から総額見積もりを取って比較するのが安心です。相場を知ってから依頼すれば、高すぎる請求にも気づけます。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">賃貸の鍵交換費用のよくある質問</h2>
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
