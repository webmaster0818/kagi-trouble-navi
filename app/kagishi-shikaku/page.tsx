import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "鍵師とは｜資格の実態と信頼できる鍵屋の見分け方（鍵師技能検定は国家資格ではありません） | 鍵トラブルナビ",
  description:
    "鍵師という職業の内容、鍵師技能検定の位置付け（民間資格であり国家資格ではありません）、資格の有無だけで業者を判断すべきでない理由を一般知識として解説します。総額見積もり・所在地・実績など、信頼できる鍵屋を見分けるための実務的な確認ポイントもご紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/kagishi-shikaku/" },
};

const basics = [
  {
    title: "鍵師とは「鍵の解錠・交換・修理を仕事にする技術者」の呼び名",
    desc: "鍵師とは、鍵開け（解錠）・鍵交換・鍵の修理・合鍵作製などを仕事にする技術者を指す呼び名です。法律で定義された職業名ではなく、鍵屋・錠前技師・ロックスミスなどと同じく、業界で慣用的に使われている呼称です。そのため「鍵師」と名乗ること自体に法的な要件はなく、名刺や広告に鍵師と記載されていても、それだけで技術力や信頼性が保証されるわけではありません。この前提を理解しておくことで、業者選びで肩書きに惑わされにくくなります。",
  },
  {
    title: "鍵師技能検定は民間団体が実施する民間資格",
    desc: "「鍵師技能検定」は、民間団体（日本鍵師協会）が実施している民間資格です。検定に合格すると等級に応じた鍵師の認定を受けられ、一定の知識・技能を学んだことの目安にはなります。ただしこれは国や都道府県が認定する公的資格ではありません。医師免許や電気工事士のように「資格がなければその仕事をしてはいけない」という業務独占資格でもないため、資格を持たずに鍵業者として営業すること自体は違法ではありません。",
  },
  {
    title: "鍵業者に必要な国家資格は存在しない",
    desc: "2026年時点で、鍵の解錠や交換を行うために必要な国家資格は存在しません。「国家資格保有の鍵師」などの宣伝文句を見かけた場合は、むしろ注意が必要です。関連する法律としては、ピッキング用具などの所持を正当な理由なく禁じた「特殊解錠用具の所持の禁止等に関する法律（いわゆるピッキング防止法）」があり、解錠用具は業務など正当な理由がある場合にのみ所持が認められます。法律が規制しているのは「道具の所持」であり、「資格がないと解錠業ができない」という仕組みではありません。",
  },
  {
    title: "資格は判断の目安の一つであり、実務では総額見積もりと実態の確認が重要",
    desc: "民間資格の有無は、体系的に学んだ技術者かどうかを推し量る目安の一つにはなります。しかし実際のトラブル現場で高額請求などの問題になるのは、技術力よりも料金説明や契約の進め方です。資格表示だけで判断せず、作業前の総額見積もり・会社の実在確認・キャンセル条件の明示など、事業者としての誠実さを確認することが、実務上ははるかに重要です。次の章で具体的な確認ポイントを解説します。",
  },
];

const checkSteps = [
  {
    title: "会社名・所在地・固定電話番号を公式サイトで確認する",
    desc: "依頼前に、運営会社名・住所・連絡先が公式サイトに明記されているか確認してください。所在地の記載がない、携帯電話番号しか掲載されていない、運営者情報のページが存在しないなどの業者は、トラブル時に連絡がつかなくなるリスクがあります。会社名で検索し、実在する業者かどうか、悪い評判が集中していないかを確認しておくことをおすすめします。",
  },
  {
    title: "電話の時点で「総額の概算」と「出張料・キャンセル料」を聞く",
    desc: "信頼できる業者は、電話の段階で「症状からみた概算」「出張料・見積もり後にキャンセルした場合の費用」を説明します。「行ってみないと分からない」の一点張りで概算も答えない場合や、キャンセル料の説明があいまいな場合は、他の業者にも問い合わせてください。複数社に同じ条件で問い合わせることで、料金の目安からかけ離れた業者を避けられます。",
  },
  {
    title: "作業前に書面（またはそれに準ずる形）で総額見積もりを取る",
    desc: "現地に来た作業員には、作業を始める前に部品代・作業費・出張料・時間帯料金をすべて含んだ総額を提示してもらいます。口頭だけでなく、見積書やスマホで撮影した提示内容など、後から確認できる形で残すことをおすすめします。「開けてみないと分からない」と言われた場合も、上限の目安と追加料金の発生条件を必ず確認してから承諾してください。",
  },
  {
    title: "作業員の身分・所属を確認し、賃貸物件の場合は管理会社に連絡する",
    desc: "作業員が到着したら、名刺や社名入りの制服・車両などで所属を確認します。また賃貸住宅の場合、錠前は大家の設備であるため、鍵開けはともかく、鍵交換を伴う作業は管理会社・大家への連絡が原則です。無断交換は契約違反になり得ます。夜間で連絡がつかない場合も、事後速やかに報告してください。",
  },
];

const ngActions = [
  {
    title: "「資格保有」「国家資格」の表示だけで業者を信用する",
    desc: "鍵師系の資格はいずれも民間資格であり、鍵業者に必要な国家資格は存在しません。資格表示は目安の一つに過ぎず、「有資格者在籍」と書いてあっても実際に来る作業員が保有しているとは限りません。料金説明の明確さと会社の実在確認を優先してください。",
  },
  {
    title: "「基本料金○円〜」の最安表示だけで依頼先を決める",
    desc: "極端に安い基本料金を掲げ、現地で作業費・部品代・出張料・深夜料金を上乗せして高額請求となるトラブルは典型的な事例です。判断基準は最安表示ではなく、作業前に総額を確定するかどうかです。総額の提示を渋る業者は、その場で断ってかまいません。",
  },
  {
    title: "作業が終わってから初めて料金を聞く",
    desc: "作業後に想定外の金額を請求されても、開いてしまった後では交渉が難しくなります。金額に納得できないまま作業を始めさせないことが最大の自衛策です。提示額に納得できない場合に備え、見積もり時点で断る・他社と比較するという選択肢を常に残しておいてください。",
  },
  {
    title: "その場で契約を急かされて即決する・現金の全額前払いに応じる",
    desc: "「今決めれば割引」「すぐやらないと開かなくなる」など、判断を急がせる説明には注意が必要です。締め出されて焦っているときほど冷静さを失いがちですが、数十分の比較検討で費用が大きく変わる場合もあります。不審に感じたら一度断り、消費生活センター（188）に相談する方法もあります。",
  },
];

const faqs = [
  {
    q: "鍵師の資格がない業者に依頼するのは危険ですか？",
    a: "資格の有無だけでは、危険とも安全とも判断できません。鍵師技能検定などは民間資格であり、保有していなくても鍵業者としての営業は合法です。逆に資格表示があっても料金トラブルと無関係とは限りません。実務上は、会社の実在確認・電話段階での概算提示・作業前の総額見積もり・キャンセル条件の明示という4点を満たす業者かどうかで判断することをおすすめします。",
  },
  {
    q: "鍵師技能検定は国家資格ですか？",
    a: "国家資格ではありません。民間団体（日本鍵師協会）が実施する民間資格です。鍵の解錠・交換の仕事に必要な国家資格や免許制度は現在存在せず、「国家資格の鍵師」という表現は正確ではありません。関連法規としては、ピッキング用具などの所持を正当な理由なく禁じる特殊解錠用具の所持の禁止等に関する法律がありますが、これは資格制度ではなく道具の所持規制です。",
  },
  {
    q: "信頼できる鍵屋をすぐに見分ける方法はありますか？",
    a: "電話で「概算総額」「出張料」「見積もり後のキャンセル料」の3点を確認する方法が最も効率的です。この3点に明確に答え、作業前の総額見積もりを約束する業者であれば、大きな料金トラブルになる可能性は下がります。いずれかの回答があいまいな業者は避けることをおすすめします。時間に余裕がある場合は、2〜3社に同じ質問をして比較してください。料金の目安は料金相場のページでご確認いただけます。",
  },
  {
    q: "警察や消費生活センターに相談できるのはどんなときですか？",
    a: "作業後に見積もりと大きく異なる高額請求を受けた、契約を強要された、支払うまで帰らないと言われた、などの場合は、消費生活センター（電話188）に相談できます。脅迫的な言動があるなど身の危険を感じる場合は、警察（110）に通報してください。支払った後でも相談は可能なため、請求書・領収書・業者とのやり取りの記録はできるだけ残しておいてください。",
  },
];

const relatedLinks = [
  { href: "/ryokin/", label: "鍵開け・鍵交換の料金相場", desc: "作業別の料金の目安と見積もりの見方" },
  { href: "/agents/", label: "鍵業者の比較", desc: "依頼先を検討する際のポイント" },
  { href: "/kagi-shurui-zukan/", label: "鍵の種類図鑑", desc: "自宅の鍵の種類と防犯性の目安" },
  { href: "/cp-nintei-jou/", label: "CP認定錠とは？", desc: "防犯性能を客観的に示す公的な目印" },
  { href: "/kagiya-erabikata/", label: "鍵屋の選び方｜電話で確認する質問", desc: "依頼前・電話・作業前・支払い時のチェックリスト" },
  { href: "/kagiya-kougaku-seikyuu/", label: "鍵屋に高額請求されたときの対処", desc: "その場での対応・記録の残し方・188への相談" },
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
    { "@type": "ListItem", position: 2, name: "鍵師の資格と信頼できる鍵屋の見分け方" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "鍵師とは｜資格の実態と信頼できる鍵屋の見分け方",
  description: "鍵師という呼び名の意味、鍵師技能検定が民間資格である点、国家資格が存在しない点を整理し、信頼できる鍵屋を見分ける実務上の基準を一般知識として解説します。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-09",
  dateModified: "2026-10-25",
};

export default function KagishiShikakuPage() {
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
            <span className="text-text-secondary">鍵師の資格と信頼できる鍵屋の見分け方</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            鍵師とは｜資格の実態と信頼できる鍵屋の見分け方
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年10月25日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">鍵師の資格と業者選びの要点</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              鍵師とは鍵の解錠・交換・修理を仕事にする技術者の呼び名で、<strong>鍵師技能検定は民間団体が実施する民間資格</strong>です。鍵業者に必要な国家資格や免許制度は存在せず、資格がなくても営業は合法であるため、資格表示だけで信頼性は判断できません。業者選びは資格表示よりも、総額見積もりと会社の実在確認で判断してください。実務上は<strong>会社の所在地・連絡先の実在確認、電話段階での概算提示、作業前の総額見積もり、キャンセル条件の明示</strong>の4点を満たすかどうかが、信頼できる鍵屋を見分ける基準になります。
            </p>
          </div>

          {/* 本文解説 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵師と資格の基礎知識（4つの事実）</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            「鍵師」「有資格者」といった言葉は広告でよく見かけますが、その意味は正確に知られていないことが多くあります。適切な業者選びのために、まず前提となる事実を整理します。
          </p>
          <div className="space-y-3 mb-10">
            {basics.map((t, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-4">
                <p className="font-bold text-primary text-sm mb-1.5">
                  <span className="inline-block bg-surface-alt rounded px-2 py-0.5 text-xs font-bold text-text-primary mr-2">事実{i + 1}</span>
                  {t.title}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* 自分でできること */}
          <h2 className="text-xl font-bold text-text-primary mb-4">信頼できる鍵業者を見分ける4つの手順</h2>
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
          <h2 className="text-xl font-bold text-text-primary mb-4">避けるべき行動とよくある誤解</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">{n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 業者判断 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">総額見積もりを軸とした業者の比較</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            鍵開けや鍵交換を依頼するときの判断軸は、資格の肩書きではなく<strong>作業前に総額を確定できるかどうか</strong>です。部品代・作業費・出張料・時間帯料金をすべて含んだ金額を提示し、キャンセル条件も明示する業者であれば、後から想定外の請求になるリスクを大きく減らせます。作業内容ごとのおおよその費用の目安は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で事前に確認しておくと、提示された見積もりが妥当かどうかを判断しやすくなります。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            緊急時でも、電話で概算・出張料・キャンセル料の3点を聞くだけで、業者の姿勢をおおむね把握できます。複数の業者を落ち着いて比較する場合は<a href="/agents/" className="text-primary underline">鍵業者の比較</a>を参考にしてください。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">料金説明が明確な業者の選び方</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              資格表示よりも、作業前の総額見積もりとキャンセル条件の明示が信頼の目安です。料金の相場を把握してから依頼することで、高額請求のトラブルを避けやすくなります。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵師・資格のよくある質問</h2>
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
