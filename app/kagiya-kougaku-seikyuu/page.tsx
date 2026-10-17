import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "鍵開け・鍵交換で高額請求されたときの対処｜その場での対応・記録の残し方・クーリング・オフと188への相談 | 鍵トラブルナビ",
  description:
    "鍵開けや鍵交換の作業後に、広告や電話の説明より高い金額を請求されたときの対処を、国民生活センターと消費者庁の公表資料にもとづいてご説明します。その場で支払わない判断、記録の残し方、クーリング・オフが適用できる可能性、消費者ホットライン188への相談までをまとめました。",
  alternates: { canonical: "https://kagi-trouble-navi.com/kagiya-kougaku-seikyuu/" },
};

const items1 = [{"title": "請求の内訳を確認する", "desc": "作業料・出張料・部品代・時間帯の加算など、請求額の内訳を説明してもらいます。電話や広告で聞いた金額と違う場合は、その理由を確認してください。"}, {"title": "納得できなければ、その場では支払わない", "desc": "国民生活センターは、料金や作業内容に納得できない場合は、後日納得した金額で支払う意思があることを示しつつ、その場での支払いはきっぱり断るよう案内しています。相談事例には、夜遅くにもめるのが怖く、近くのコンビニで現金を引き出して支払ったものもあります。"}, {"title": "書面を受け取る", "desc": "契約書・見積書・領収書など、事業者名・所在地・作業内容・金額が記載された書面を受け取ってください。書面を受け取った日は、クーリング・オフの期間を数える起点になります。"}, {"title": "身の危険を感じたら110番", "desc": "大声で威圧される、帰ってもらえないなど身の危険を感じる場合は、ためらわずに110番通報してください。家族や知人に電話をつないだ状態で対応する方法もあります。"}];

const items2 = [{"title": "広告・ホームページの画面", "desc": "依頼のきっかけになった広告やホームページの料金表示を、スクリーンショットで保存します。後日、表示が変更される場合があるためです。"}, {"title": "通話の記録とメモ", "desc": "電話をかけた日時・電話番号と、電話で説明された金額・到着時刻をメモに残します。スマートフォンの発信履歴も保存しておいてください。"}, {"title": "受け取った書面", "desc": "見積書・契約書・領収書など、受け取った書面はすべて保管します。書面を受け取っていない場合は、その事実も記録しておきます。"}, {"title": "作業内容と作業員の情報", "desc": "作業員の名前、車両、作業の内容（鍵を開けただけか、シリンダーを交換したか）、交換した部品の有無を記録します。取り外した部品があれば、捨てずに保管してください。"}];

const rows4 = [["請求額や契約内容に納得できない", "消費者ホットライン「188」（最寄りの消費生活センター等を案内）"], ["身の危険を感じる・帰ってもらえない", "110番"], ["賃貸住宅で鍵を交換された・壊された", "管理会社・大家（あわせて消費生活センター）"], ["火災保険などの付帯サービスを使えたか確認したい", "加入している保険会社・サービス提供会社"]];

const faqs = [{"q": "作業が終わった後でも、支払いを断ることはできますか？", "a": "国民生活センターは、料金や作業内容に納得できない場合は、後日納得した金額で支払う意思を示しつつ、その場での支払いは断るよう案内しています。そのうえで、消費生活センターなどに相談してください。"}, {"q": "自分で呼んだ鍵屋でもクーリング・オフできますか？", "a": "国民生活センターは、見積もりのために呼んだ事業者とその場で契約した場合などは、訪問販売としてクーリング・オフなどが適用できる可能性があるとしています。適用できるかどうかは経緯によって異なるため、消費者ホットライン「188」から消費生活センターに相談してください。"}, {"q": "すでに支払ってしまいました。もう取り戻せませんか？", "a": "支払った後でも、クーリング・オフなどが適用できる可能性があります。訪問販売のクーリング・オフは、書面を受け取った日から数えて8日以内が原則です。受け取った書面と支払いの記録を手元に用意し、早めに消費生活センターに相談してください。"}, {"q": "消費者ホットライン188には何を伝えればよいですか？", "a": "依頼のきっかけ（広告・ホームページ）、電話で説明された金額、実際の請求額、作業内容、受け取った書面の有無、支払いの状況を伝えると、相談が進めやすくなります。"}, {"q": "鍵を交換された後でも、クーリング・オフはできますか？", "a": "消費者庁の特定商取引法ガイドでは、訪問販売のクーリング・オフについて、役務がすでに提供されている場合でも対価を支払う必要はないとしています。ただし、適用できるかどうかは経緯によって異なるため、消費生活センターに相談してください。"}, {"q": "高額請求を受けた業者の名前で、ほかに被害がないか調べられますか？", "a": "消費者庁は、特定商取引法に基づく行政処分や注意喚起を公表しています。業者名や運営会社名で、消費者庁や国民生活センターの公表資料を確認する方法があります。"}];

const related = [{"href": "/kagiya-erabikata/", "label": "鍵屋の選び方｜電話で確認する質問"}, {"href": "/ryokin/", "label": "鍵開け・鍵交換の料金相場"}, {"href": "/agents/nitamei-kagiya/", "label": "名前が似た鍵屋の見分け方"}, {"href": "/shinya-kagiake/", "label": "深夜・早朝に鍵屋を呼ぶときの注意点"}, {"href": "/kagishi-shikaku/", "label": "鍵師とは｜資格の実態"}, {"href": "/shimedashi/", "label": "家を締め出された時の対処法"}];

const sources = [{"label": "国民生活センター「【広告より高額！？】出張解錠サービスの料金トラブルに注意」（2024年11月19日公表）", "url": "https://www.kokusen.go.jp/news/data/n-20241119_1.html", "date": "2026年10月17日確認"}, {"label": "消費者庁 特定商取引法ガイド「訪問販売」", "url": "https://www.no-trouble.caa.go.jp/what/doortodoorsales/", "date": "2026年10月17日確認"}, {"label": "消費者庁「消費者ホットライン（188）」", "url": "https://www.caa.go.jp/policies/policy/local_cooperation/local_consumer_administration/hotline/", "date": "2026年10月17日確認"}, {"label": "消費者庁「鍵の開錠・修理等に関する役務の取引に関する注意喚起」（2022年2月25日）", "url": "https://www.caa.go.jp/notice/entry/027673/", "date": "2026年10月17日確認"}];

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
    { "@type": "ListItem", position: 2, name: "鍵屋に高額請求されたときの対処" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "鍵開け・鍵交換で高額請求されたときの対処｜その場での対応と相談先",
  description: "鍵開けや鍵交換の作業後に、広告や電話の説明より高い金額を請求されたときの対処を、国民生活センターと消費者庁の公表資料にもとづいてご説明します。その場で支払わない判断、記録の残し方、クーリング・オフが適用できる可能性、消費者ホットライン188への相談までをまとめました。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-10-17",
  dateModified: "2026-10-17",
};

export default function KagiyaKougakuSeikyuuPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />

      <main className="flex-1">
        <div className="bg-surface-alt border-b border-black/5">
          <div className="max-w-4xl mx-auto px-4 py-3 text-xs text-text-muted">
            <a href="/" className="hover:text-primary">ホーム</a>
            <span className="mx-1.5">/</span>
            <span className="text-text-secondary">鍵屋に高額請求されたときの対処</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            鍵開け・鍵交換で高額請求されたときの対処｜その場での対応と相談先
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年10月17日</p>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">金額や作業内容に納得できない場合は、その場での支払いを断り、書面と経緯を整理して消費生活センターに相談することが基本です。</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: "国民生活センターは、出張解錠の料金トラブルについて、<strong>納得できない場合は後日納得した金額で支払う意思を示しつつ、その場での支払いはきっぱり断る</strong>こと、<strong>受け取った書面や契約の経緯を整理して消費生活センターなどに相談する</strong>ことを案内しています。見積もりのために呼んだ事業者とその場で契約した場合などは、特定商取引法の訪問販売によるクーリング・オフなどが適用できる可能性があります。" }} />
          </div>

          <p className="text-sm text-text-secondary leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: "「〇〇円〜」という広告を見て鍵屋を呼んだのに、作業後に数万円から十万円を超える金額を請求されたという相談は、国民生活センターにも寄せられています。夜間に一人で対応している場合などは、断りにくさから言われた金額を支払ってしまうことも少なくありません。" }} />
          <p className="text-sm text-text-secondary leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: "この記事では、高額な請求を受けたときにその場で取るべき対応、後日の相談に備えて残しておく記録、クーリング・オフの考え方、相談先を順にご説明します。これから鍵屋を選ぶ段階の方は、<a href=\"/kagiya-erabikata/\" class=\"text-primary underline\">鍵屋の選び方（電話で確認する質問）</a>を先にご覧ください。" }} />

          <h2 className="text-xl font-bold text-text-primary mb-4">国民生活センターに寄せられている相談の例</h2>
          <div className="bg-white rounded-xl border border-black/10 p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: "国民生活センターが2024年11月19日に公表した資料には、次のような相談事例が掲載されています。1件目は、夜に自宅の鍵の紛失に気付き、ホームページに「見積もりは無料」「解錠で2,000円〜」と表示していた事業者に依頼したところ、作業前に料金を知らされないまま、作業後に約10万円を請求された事例です。" }} />
            <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: "2件目は、オートロックのマンションで締め出され、電話で基本料金8,000円と説明された業者に依頼したところ、現地で特殊な鍵だとして約4万円の加算を告げられ、工賃や消費税を含めて約5万円を支払った事例です。いずれも、相談者はクーリング・オフを希望しています。" }} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-4">その場で取るべき4つの対応</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "請求額に納得できない場合は、次の順に対応してください。身の安全を最優先にし、相手ともめそうな場合は無理に一人で対応しないでください。" }} />
          <div className="space-y-4 mb-10">
            {items1.map((c, i) => (
              <div key={i} className="bg-surface-alt rounded-xl p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{i + 1}. {c.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: c.desc }} />
              </div>
            ))}
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-4">後日の相談に備えて残しておく記録</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "消費生活センターなどに相談するときは、契約の経緯を示す資料があると話が進めやすくなります。作業当日のうちに、次のものを手元にまとめておいてください。" }} />
          <div className="space-y-4 mb-10">
            {items2.map((c, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{i + 1}. {c.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: c.desc }} />
              </div>
            ))}
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-4">クーリング・オフが適用できる可能性</h2>
          <div className="bg-surface-alt rounded-xl p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: "国民生活センターは、見積もりのために呼んだ事業者とその場で契約した場合や、広告などの表示額と実際の請求額が大きく異なる場合などは、<strong>特定商取引法の訪問販売によるクーリング・オフなどが適用できる可能性がある</strong>としています。" }} />
            <p className="text-sm text-text-secondary leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: "消費者庁の特定商取引法ガイドによると、訪問販売のクーリング・オフは、法律で決められた書面を受け取った日から数えて<strong>8日以内</strong>であれば、書面または電磁的記録で申込みの撤回や契約の解除ができる制度です。役務がすでに提供されている場合でも、その対価を支払う必要はないとされています。ただし、現金取引で総額が3,000円未満の場合などは適用されません。" }} />
            <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: "実際に適用できるかどうかは、契約の経緯によって異なります。自己判断で諦めず、また自己判断で手続きを進める前に、消費生活センターなどに相談してください。" }} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-4">状況別の相談先</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm bg-white rounded-xl border border-black/10">
              <thead className="bg-surface-alt"><tr><th className="text-left font-bold text-text-primary px-3 py-2 border-b border-black/10">状況</th><th className="text-left font-bold text-text-primary px-3 py-2 border-b border-black/10">相談先</th></tr></thead>
              <tbody>
                {rows4.map((r, i) => (
                  <tr key={i} className="border-b border-black/5 align-top">
                    {r.map((c, j) => (
                      <td key={j} className={j === 0 ? "px-3 py-2 font-medium text-text-primary whitespace-nowrap" : "px-3 py-2 text-text-secondary leading-relaxed"} dangerouslySetInnerHTML={{ __html: c }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: "消費者ホットライン「188」は、地方公共団体が設置している消費生活センターや消費生活相談窓口を案内する全国共通の電話番号です。" }} />
          <h2 className="text-xl font-bold text-text-primary mb-4">次に鍵屋を呼ぶときに備えて</h2>
          <div className="bg-white rounded-xl border border-black/10 p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: "消費者庁は2022年2月、複数の名称でウェブサイトを開設して鍵の開錠・修理等を行っていた事業者に、特定商取引法に基づく業務停止命令等を行い、注意喚起を公表しています。屋号が違っても運営会社が同じ場合や、反対に名前が似ていても別の会社である場合があるため、依頼前に運営会社名と所在地を確認することが大切です。" }} />
            <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: "電話で確認する質問は<a href=\"/kagiya-erabikata/\" class=\"text-primary underline\">鍵屋の選び方</a>、作業別の料金の目安は<a href=\"/ryokin/\" class=\"text-primary underline\">鍵開け・鍵交換の料金相場</a>、名前が似た業者の見分け方は<a href=\"/agents/nitamei-kagiya/\" class=\"text-primary underline\">名前が似た鍵屋の見分け方</a>で解説しています。" }} />
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">依頼前に料金と運営会社を確認する</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">各社の公式料金と運営会社を事前に確認しておくと、請求額が妥当かどうかを判断しやすくなります。</p>
            <div className="flex flex-wrap gap-2">
              <a href="/ryokin-index/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">各社の公式料金を見る →</a>
              <a href="/agents/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">鍵業者を比較する</a>
              <a href="/kagiya-erabikata/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">鍵屋の選び方</a>
            </div>
          </div>

          <h2 className="text-xl font-bold text-text-primary mb-4">鍵屋の高額請求に関するよくある質問</h2>
          <div className="space-y-3 mb-10">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-xl border border-black/10 overflow-hidden">
                <summary className="px-5 py-4 cursor-pointer font-medium text-text-primary text-sm">Q. {f.q}</summary>
                <div className="px-5 pb-4 text-sm text-text-secondary leading-relaxed">A. {f.a}</div>
              </details>
            ))}
          </div>

          <h2 className="text-xl font-bold text-text-primary mb-4">出典・確認日</h2>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-text-muted leading-relaxed mb-10">
            {sources.map((s, i) => (
              <li key={i}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary underline">{s.label}</a>（{s.date}）
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-text-primary mb-4">関連記事</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {related.map((l, i) => (
              <a key={i} href={l.href} className="bg-white rounded-xl border border-black/10 p-4 text-sm font-medium text-text-primary hover:border-primary/40 hover:text-primary transition-colors">
                {l.label} →
              </a>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
