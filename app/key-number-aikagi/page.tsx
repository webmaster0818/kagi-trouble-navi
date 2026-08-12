import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "キーナンバーとは？鍵穴・番号からの合鍵作成の基礎知識 | 鍵トラブルナビ",
  description:
    "鍵に刻印されたキーナンバー（鍵番号）の基礎知識を解説。キーナンバーが刻印されている場所、番号からメーカー純正キーを取り寄せる方法の一般知識、番号を他人に見られてはいけない防犯上の理由、キーカバーなどの対策を紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/key-number-aikagi/" },
};

const basics = [
  {
    title: "キーナンバーとは｜鍵1本ごとの「設計図を呼び出す番号」",
    desc: "キーナンバー（鍵番号）は、鍵の表面に刻印された英数字の組み合わせで、メーカーがその鍵の刻み・ピン配列を管理するための番号です。メーカーはこの番号から鍵の形状データを特定できるため、鍵の現物がなくても、メーカー名とキーナンバーが分かれば純正キーを製作できる仕組みになっています。つまりキーナンバーは、その鍵の「設計図を呼び出す番号」であり、暗証番号に匹敵する重要情報です。鍵をなくして手元に1本も残っていない場合でも、契約書類などに控えたキーナンバーが再作製の手がかりになる一方、他人に知られると勝手に合鍵を作られるリスクにも直結します。",
  },
  {
    title: "キーナンバーはどこにある？｜鍵本体の刻印とキーカード",
    desc: "キーナンバーは、鍵の持ち手（頭）部分の表裏、または金属部分の付け根あたりに刻印されているのが一般的です。メーカーのロゴとあわせて「英字＋数字」の組み合わせで刻まれていることが多く、小さい刻印なので明るい場所で確認しましょう。また、防犯性の高いディンプルキーなどでは、購入時に「キーカード」や「セキュリティカード」と呼ばれるカードが付属し、そこに番号が記載されている方式もあります。登録制シリンダーでは、このカードがないと追加キーを注文できない運用になっているものもあるため、カードは鍵本体とは別の場所に大切に保管するのが基本です。",
  },
  {
    title: "番号からの純正キー取り寄せの一般知識",
    desc: "メーカー名とキーナンバーが分かれば、メーカー純正の追加キー（子鍵）を取り寄せられるのが一般的です。窓口は、シリンダーの製造メーカーの相談窓口や、メーカーと取引のある鍵の専門業者・販売店で、純正キーは新品の鍵から機械で削り出されるため、使い込んだ鍵をコピーする街の合鍵作成より精度が安定しやすいという特徴があります。登録制のシリンダーでは、所有者登録やキーカードの提示、本人確認を経ないと注文できない仕組みになっているものがあり、納期も即日ではなく取り寄せ期間がかかるのが通常です。詳しくは純正キー再発行の記事で解説しています。",
  },
  {
    title: "キーナンバーを隠すべき防犯上の理由と対策",
    desc: "キーナンバーとメーカーが分かれば鍵を複製できるということは、裏を返せば、番号を見られただけで合鍵を作られる恐れがあるということです。鍵の写真をSNSに投稿して刻印が写り込む、職場や店先で鍵を出しっぱなしにする、車や自転車の鍵をキーナンバーの札ごと吊るしておく、といった行為は避けるべきです。対策としては、刻印部分を覆うキーカバーやキーキャップを付ける、鍵の写真を撮らない・共有しない、キーカードや番号の控えは鍵と別に保管する、が基本です。番号を第三者に知られた可能性がある場合は、シリンダー交換や鍵違いへの変更を検討する理由になります。",
  },
];

const checkSteps = [
  {
    title: "自宅の鍵のメーカー名とキーナンバーの位置を確認する",
    desc: "鍵の頭部分と金属部の付け根を明るい場所で観察し、メーカーロゴとキーナンバーの刻印位置を把握します。確認したら、番号を撮影してクラウドに保存するのではなく、紙に控えて自宅の安全な場所に保管するのが安全側の管理です。",
  },
  {
    title: "キーカード・セキュリティカードの有無と保管場所を確認する",
    desc: "ディンプルキーなどでは購入時にキーカードが付属していることがあります。追加キーの注文に必要になる場合があるため、所在を確認し、鍵本体とは別の場所に保管しましょう。賃貸の場合はカードを管理会社が保管していることもあります。",
  },
  {
    title: "合鍵の作り方を選ぶ｜純正取り寄せか、その場の複製か",
    desc: "精度と防犯管理を重視するならメーカー純正キーの取り寄せ、急ぎで簡易な鍵の複製なら合鍵店での作成、と使い分けます。純正は取り寄せ期間がかかるのが通常なので、時間に余裕を持って手配しましょう。合鍵作成の基本は合鍵の記事で解説しています。",
  },
  {
    title: "刻印を隠すキーカバーなどで日常の露出を減らす",
    desc: "普段使いの鍵には、刻印部分を覆うキーカバーやキャップを付けると、人前で鍵を出したときに番号を読み取られるリスクを減らせます。あわせて、鍵の写真をSNSに載せない、他人に鍵を預けるときは必要最小限にする、といった習慣も有効です。",
  },
];

const ngActions = [
  {
    title: "鍵の写真をSNSやフリマアプリに載せる",
    desc: "刻印が読み取れる写真は、鍵そのものを渡しているのに近い情報流出です。新居の鍵の記念撮影なども、刻印が写らない角度・加工を徹底するか、そもそも投稿しないのが安全です。",
  },
  {
    title: "キーナンバーの控えを鍵と一緒に持ち歩く",
    desc: "番号のメモやキーカードを鍵と同じキーホルダーで持ち歩くと、紛失時に「鍵＋複製手段」を同時に失います。控えは自宅の別の場所に保管しましょう。",
  },
  {
    title: "身元の確認できない相手に番号を伝えて複製を頼む",
    desc: "合鍵の注文は、メーカー窓口や店舗を構える鍵業者など、身元と実績の確認できる相手に依頼しましょう。番号だけで作れるからこそ、渡す相手の信頼性が重要です。",
  },
  {
    title: "番号を見られた可能性を放置する",
    desc: "鍵を長時間預けた、番号が写った写真が流出したなど、複製された可能性が否定できない状況を放置するのは危険です。不安が残る場合はシリンダー交換で鍵違いにするのが根本対策です。",
  },
];

const faqs = [
  {
    q: "キーナンバーはどこに書いてありますか？",
    a: "鍵の持ち手（頭）部分の表裏や、金属部分の付け根あたりに、メーカーロゴとあわせて英数字で刻印されているのが一般的です。ディンプルキーなどでは、鍵本体ではなく付属のキーカード・セキュリティカードに番号が記載されている方式もあります。刻印は小さいため、明るい場所で角度を変えながら確認してください。",
  },
  {
    q: "鍵をすべてなくしても、キーナンバーが分かれば作れますか？",
    a: "メーカー名とキーナンバーが分かれば、メーカー純正キーを取り寄せられるのが一般的です。ただし、登録制シリンダーでは所有者登録やキーカードの提示、本人確認が必要な場合があり、納期も取り寄せ期間がかかるのが通常です。すぐに家に入れない状況なら、鍵開けと純正キー手配を並行して進めることになります。紛失時の全体の動き方は鍵をなくしたときの記事を参照してください。",
  },
  {
    q: "キーナンバーを人に見られるとどんな危険がありますか？",
    a: "メーカーと番号の組み合わせから鍵の形状を特定できるため、本人の知らないところで合鍵を作られる恐れがあります。鍵の写真の写り込み、預けた鍵の放置、番号札を付けたままの保管などが典型的な流出経路です。見られた可能性が否定できない場合は、キーカバーで隠すといった予防ではなく、シリンダー交換による鍵違い化を検討するのが根本的な対策です。",
  },
  {
    q: "純正キーの取り寄せと合鍵店での複製はどちらがいいですか？",
    a: "目的次第です。純正キーは新品の素材から形状データどおりに削り出されるため精度が安定しやすく、登録制シリンダーの管理にも沿った方法ですが、取り寄せ期間がかかります。合鍵店の複製は速さと手軽さが利点ですが、使い込んだ鍵を元にするため精度は元鍵の状態に左右され、ディンプルキーなど対応できない鍵種もあります。防犯性の高い鍵や長く使う鍵は純正取り寄せが向いています。",
  },
];

const relatedLinks = [
  { href: "/aikagi/", label: "合鍵作成の基礎知識", desc: "合鍵の作り方・依頼先の選び方" },
  { href: "/junsei-key-saihakkou/", label: "メーカー純正キーの再発行", desc: "純正キー取り寄せの流れと必要なもの" },
  { href: "/dimple-key/", label: "ディンプルキーの基礎知識", desc: "登録制シリンダー・キーカードの世界" },
  { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処法", desc: "紛失時の動き方の全体像はこちら" },
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
    { "@type": "ListItem", position: 2, name: "キーナンバーと合鍵作成" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "キーナンバーとは？鍵穴・番号からの合鍵作成の基礎知識",
  description: "キーナンバーの刻印場所、番号からのメーカー純正キー取り寄せの一般知識、番号を隠すべき防犯上の理由とキーカバーなどの対策を解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
};

export default function KeyNumberAikagiPage() {
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
            <span className="text-text-secondary">キーナンバーと合鍵作成</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            キーナンバーとは？鍵穴・番号からの合鍵作成の基礎知識
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月12日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：キーナンバーは「メーカーが鍵の形状を特定できる番号」。番号だけで純正キーを作れる半面、他人に見られると合鍵を作られる恐れがあるため、刻印は隠して管理する</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              キーナンバー（鍵番号）は鍵の頭部分などに刻印された英数字で、<strong>メーカー名とセットで分かれば純正キーを取り寄せられる</strong>のが一般的です。ディンプルキーでは付属のキーカードに番号が記載される方式もあり、登録制シリンダーではカード提示や本人確認が注文の条件になることもあります。裏を返せば、<strong>番号を見られただけで合鍵を作られるリスク</strong>があるということ。鍵の写真をSNSに載せない、刻印はキーカバーで覆う、番号の控えとカードは鍵と別に保管する、が管理の基本です。
            </p>
          </div>

          {/* 本文解説 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">キーナンバーの基礎知識4つ</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            キーナンバーは「便利な再作製の手がかり」と「流出したら危険な暗証番号」という2つの顔を持ちます。仕組み・場所・使い方・守り方の順で整理します。
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
          <h2 className="text-xl font-bold text-text-primary mb-4">自分でできるキーナンバー管理4ステップ</h2>
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
          <h2 className="text-xl font-bold text-text-primary mb-4">キーナンバーの扱いでやってはいけないNG行動</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">NG: {n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 業者判断 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">業者・メーカーに相談すべきケースと依頼時の注意</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            <strong>純正キーの取り寄せ、登録制シリンダーの追加キー注文、キーカードを紛失した場合の手続き、番号流出が疑われる場合のシリンダー交換</strong>は、メーカーの相談窓口か鍵の専門業者に相談しましょう。注文には本人確認やキーカードの提示が必要な場合があるため、事前に必要書類を確認しておくとスムーズです。純正キー取り寄せの具体的な流れは<a href="/junsei-key-saihakkou/" className="text-primary underline">メーカー純正キーの再発行</a>を、その場で複製する方法や依頼先の選び方は<a href="/aikagi/" className="text-primary underline">合鍵作成の基礎知識</a>をあわせて参考にしてください。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            費用は鍵の種類（刻みキーかディンプルキーか）や純正・複製の別で変わるため、注文前に金額と納期を確認しましょう。費用感は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、依頼先の検討は<a href="/agents/" className="text-primary underline">鍵トラブル業者の比較</a>で確認できます。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">合鍵の手配は「メーカー名＋キーナンバー」の確認から</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              メーカーロゴと刻印を控えてから相談すると、純正取り寄せか複製かの判断も納期の確認もスムーズです。番号の扱いには十分注意しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">キーナンバーのよくある質問</h2>
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
