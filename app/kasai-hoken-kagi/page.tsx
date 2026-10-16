import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "火災保険の鍵開けサポートとは？付帯サービスの確認方法 | 鍵トラブルナビ",
  description:
    "火災保険や共済に付帯する「鍵開け・鍵トラブルの駆けつけサービス」の一般知識を解説。補償（保険金）ではなくサービス付帯である点、契約により有無・回数・範囲が異なる点、保険証券やコールセンターでの確認手順、利用時の注意点を紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/kasai-hoken-kagi/" },
};

const basics = [
  {
    title: "火災保険の「鍵開けサポート」は補償ではなく付帯サービス",
    desc: "火災保険というと火事や風水害の損害を補償する保険金のイメージが強いですが、保険会社や共済によっては、日常の住まいのトラブルに対応する「駆けつけサービス」を契約に付帯している場合があります。鍵の紛失による鍵開けは、その対象メニューに含まれていることがある代表例です。重要なのは、これは損害に保険金が支払われる「補償」ではなく、提携業者が駆けつける「サービスの付帯」だという点です。付帯の有無や内容は商品・契約・加入時期によって異なるため、「火災保険に入っていれば鍵開けは無料」と一律にはいえません。まずはご自身の契約内容をご確認ください。",
  },
  {
    title: "サービス内容は契約により異なる（応急対応の範囲と回数について）",
    desc: "鍵の駆けつけサービスが付帯している場合でも、その内容は契約によりさまざまです。一般的には、無料となるのは解錠の応急作業までで、特殊な鍵の作業、シリンダー交換や鍵の作成といった作業は対象外または自己負担になる、利用回数に年間の上限がある、対象が契約住宅の玄関に限られる、といった条件が設けられていることがあります。また、無料の範囲を超える作業には通常の料金がかかるため、現場で追加作業を提案されたときのために、どこまでが無料の範囲かを電話の時点で確認しておくことをおすすめします。",
  },
  {
    title: "火災保険以外にも鍵のサポートを含む契約がある",
    desc: "鍵の駆けつけサービスは火災保険だけのものではありません。賃貸入居時に加入する少額短期保険や入居者向けサポートサービス、クレジットカードの付帯サービス、自動車保険のロードサービス（車のインロック対応）、共済の付帯サービス、ガス・電力会社の駆けつけオプションなど、身の回りの契約に類似のサポートが付いていることがあります。鍵のトラブルで業者を探す前に、こうした加入済みの契約に利用できるサポートがないかを確認すると、出費を抑えられる可能性があります。いずれの契約も内容は個別に異なるため、事前の確認が必要です。",
  },
  {
    title: "確認は「証券・約款・マイページ・コールセンター」の順に行う",
    desc: "自分の火災保険に鍵のサポートが付いているかは、保険証券や契約時の書類にサービス案内が同封されていないか、契約者用のマイページやアプリに付帯サービスの項目がないかを確認し、分からない場合は保険会社のコールセンターに直接問い合わせることをおすすめします。問い合わせの際は、証券番号を手元に用意し、「鍵の紛失時の駆けつけサービスの有無」「無料の範囲と回数」「受付の連絡先」を確認してください。緊急時に慌てて調べることは難しいため、平時に確認して受付窓口の連絡先を控えておくことをおすすめします。",
  },
];

const checkSteps = [
  {
    title: "保険証券・契約書類でサービス案内を探す",
    desc: "火災保険の証券や契約時の冊子に、付帯サービスの案内ページや別紙が含まれていることがあります。「駆けつけ」「住まいのサポート」「ホームアシスタンス」といった名称のメニューに鍵開けが含まれていないかを確認してください。",
  },
  {
    title: "マイページ・アプリ・公式サイトで付帯サービスを確認する",
    desc: "契約者用のマイページやアプリには、付帯サービスの一覧や受付窓口が掲載されていることがあります。書類が見当たらない場合も、契約者向けページから確認できることが多いため、ログイン情報を整理しておいてください。",
  },
  {
    title: "コールセンターで「範囲・回数・受付窓口」を確認する",
    desc: "証券番号を用意して保険会社に問い合わせ、鍵の駆けつけサービスの有無、無料になる作業の範囲、年間の利用回数、緊急時の受付電話番号を確認します。回答内容を記録し、ご家族とも共有しておくと、緊急時に迷わず対応できます。",
  },
  {
    title: "賃貸・カード・自動車保険など他の契約も確認する",
    desc: "賃貸の入居者サポート、クレジットカード、自動車保険のロードサービス、共済など、鍵サポートが付いている可能性のある契約を一覧にして、それぞれの窓口を控えておきます。車のインロックは自動車保険・ロードサービスの対象領域のため、車のインロックの記事もあわせて参考にしてください。",
  },
];

const ngActions = [
  {
    title: "「火災保険に入っているから無料のはず」と思い込む",
    desc: "鍵開けサポートの有無・範囲は契約により異なります。付帯していない契約も多くあるため、思い込みで手配を進めず、必ずご自身の契約内容をご確認ください。",
  },
  {
    title: "サービスを確認する前に自分で手配した業者の費用を請求しようとする",
    desc: "駆けつけサービスは、指定の受付窓口を通じて提携業者が対応する形が一般的です。自分で手配した業者の費用が後から精算できるとは限らないため、まず受付窓口に連絡してください。",
  },
  {
    title: "無料の範囲を確認せずに追加作業を承諾する",
    desc: "無料なのは応急解錠までで、鍵作成や交換は有料という条件のことがあります。現場で追加作業を勧められたら、費用と無料範囲を確認し、総額に納得してから承諾してください。",
  },
  {
    title: "緊急時になってから書類を探し始める",
    desc: "締め出しの現場で証券や連絡先を探すことは困難です。平時にサポートの有無と受付窓口を確認し、スマートフォンに控えておくことで、緊急時の時間と出費を抑えられます。",
  },
];

const faqs = [
  {
    q: "火災保険に入っていれば鍵開けは無料になりますか？",
    a: "一律にはいえません。保険会社や共済によっては鍵開けを含む駆けつけサービスを付帯している場合がありますが、付帯の有無・無料になる作業の範囲・利用回数は商品や契約により異なります。まず保険証券や契約者マイページを確認し、分からない場合はコールセンターに「鍵の駆けつけサービスの有無と範囲」を問い合わせてください。",
  },
  {
    q: "鍵をなくして家に入れません。保険のサービスを使う場合はどうすればよいですか？",
    a: "契約に付帯サービスがある場合、専用の受付窓口に連絡し、そこから提携業者が手配される流れが一般的です。自分で手配した業者の費用を後から精算できるとは限らないため、先に受付窓口へ連絡するのが原則です。連絡時には契約者名や証券番号の確認を求められることがあるので、分かるものを手元に用意してください。締め出し時の対応の全体像は、締め出し対処の記事も参考にしてください。",
  },
  {
    q: "無料と言われたのに現場で費用を請求されることはありますか？",
    a: "無料の対象が応急的な解錠作業までで、特殊な鍵の作業・鍵の作成・シリンダー交換などは対象外または自己負担、という条件になっていることがあります。受付の電話の時点で無料の範囲を確認し、現場で追加作業を提案された場合は、作業内容と費用の説明を受けて総額に納得してから承諾してください。",
  },
  {
    q: "火災保険以外で鍵のサポートが付いていることはありますか？",
    a: "あります。賃貸入居時の少額短期保険や入居者サポート、クレジットカードの付帯サービス、自動車保険・ロードサービス（車のインロック）、共済やガス・電力会社の駆けつけオプションなどに、鍵トラブル対応が含まれている場合があります。いずれも内容は契約により異なるため、加入中の契約を一覧にし、それぞれの窓口と範囲を平時に確認しておくことをおすすめします。",
  },
];

const relatedLinks = [
  { href: "/shimedashi/", label: "締め出されたときの対処法", desc: "家に入れないときの対応の全体像" },
  { href: "/ryokin/", label: "鍵開け・鍵交換の料金相場", desc: "サポート対象外のときの料金の目安" },
  { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処法", desc: "紛失時に行うべき手順" },
  { href: "/car-inlock/", label: "車のインロック対処法", desc: "ロードサービスの対象となる車の鍵トラブルの対処法" },
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
    { "@type": "ListItem", position: 2, name: "火災保険の鍵開けサポート" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "火災保険の鍵開けサポートとは？付帯サービスの確認方法",
  description: "火災保険・共済の鍵駆けつけサービスが補償ではなく付帯サービスである点、契約により内容が異なる点、証券・マイページ・コールセンターでの確認手順を一般知識として解説します。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
};

export default function KasaiHokenKagiPage() {
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
            <span className="text-text-secondary">火災保険の鍵開けサポート</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            火災保険の鍵開けサポートとは？付帯サービスの確認方法
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月12日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">火災保険の鍵開けサポートの要点</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              保険会社や共済によっては、火災保険の契約に<strong>鍵開けを含む駆けつけサービス</strong>が付帯していることがあります。ただしこれは損害への保険金支払いではなく<strong>サービスの付帯</strong>であり、有無・無料の範囲（応急解錠までが一般的）・年間回数などは<strong>契約により異なります</strong>。利用する場合は、自分で業者を手配する前に<strong>専用の受付窓口へ連絡</strong>することが原則です。証券・マイページ・コールセンターで、ご自身の契約内容をご確認ください。賃貸の入居者サポートやクレジットカード、自動車保険のロードサービスなど、他の契約に類似のサポートが含まれていることもあるため、平時に契約内容を確認し、窓口の連絡先を控えておくことが最も有効な備えになります。
            </p>
          </div>

          {/* 本文解説 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">火災保険の鍵サポートの基礎知識4つ</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            「保険で鍵開けが無料になった」という事例を正しく理解するには、前提となる仕組みの把握が必要です。補償とサービスの違い、契約による違い、他の契約の可能性、確認手順の4点を整理します。
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
          <h2 className="text-xl font-bold text-text-primary mb-4">ご自身の契約を確認する4つの手順</h2>
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
          <h2 className="text-xl font-bold text-text-primary mb-4">保険の鍵サポートで避けるべき行動</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">避けるべき行動：{n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 業者判断 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">業者に直接依頼すべきケースと依頼時の注意</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            <strong>契約にサービスが付帯していなかった場合、無料の範囲を超える鍵作成・シリンダー交換が必要な場合、サービスの対象外の建物や鍵だった場合</strong>は、通常どおり鍵の専門業者への依頼になります。締め出し時の全体の動き方は<a href="/shimedashi/" className="text-primary underline">締め出されたときの対処法</a>を参考に、深夜早朝の割増や出張料も含めた条件を電話の時点で確認してください。保険や付帯サービスの利用可否は契約により異なるため、当サイトの記事はあくまで一般知識としてお読みください。個別の契約内容は必ず保険会社・共済の窓口でご確認ください。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            業者へ直接依頼する場合は、作業前に作業費・出張料・時間帯割増を含む総額の見積もりを必ずご確認ください。費用の目安は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、依頼先の検討は<a href="/agents/" className="text-primary underline">鍵業者の比較</a>でご確認いただけます。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">サポートを利用できない場合の業者への依頼</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              付帯サービスの確認が済んだら、対象外の作業は通常の依頼となります。電話の時点で、総額の目安と割増条件を確認することをおすすめします。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">火災保険の鍵サポートのよくある質問</h2>
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
