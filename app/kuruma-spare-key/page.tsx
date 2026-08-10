import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "車のスペアキー作成の基礎知識｜合鍵との違いとディーラー・鍵屋の使い分け | 鍵トラブルナビ",
  description:
    "車のスペアキー作成の一般知識を解説。金属キー・リモコンキー（キーレス）・スマートキーで作成の難易度と手順が大きく変わること、イモビライザー搭載車で必要になる登録作業、ディーラーと鍵の専門業者それぞれの得意分野と使い分け、依頼時に必要な本人確認・車両情報を紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/kuruma-spare-key/" },
};

const basics = [
  {
    title: "「合鍵」と「スペアキー」の実務上の違い",
    desc: "日常会話では同じ意味で使われますが、車の世界では区別して考えると整理しやすくなります。合鍵は今ある鍵を元に刻みを複製した鍵で、スペアキーは純正キーと同等の機能（リモコン操作やエンジン始動）を持つ予備キーを指すのが一般的な使い分けです。金属の刻みだけを複製した合鍵は、ドアの物理的な開け閉めはできても、イモビライザー搭載車ではエンジンが掛からない、リモコン機能が使えない、ということが起こります。「何のための予備か」を先に決めることが、作成方法と依頼先の選択を左右します。",
  },
  {
    title: "金属キーだけの車は複製のハードルが低い",
    desc: "電子部品を持たない昔ながらの金属キー（イモビライザー非搭載車）は、鍵の刻みを写し取る機械加工だけで複製でき、鍵の専門業者や合鍵店で対応しやすいタイプです。ただし、見た目が金属キーでも頭部（グリップ部分）にイモビライザー用のチップが埋め込まれている車種は多く、外見だけでは判別できません。自分の車がイモビライザー搭載かどうかは、取扱説明書や車検証情報をもとにディーラーへ確認するのが確実です。この確認を飛ばして複製すると「ドアは開くのにエンジンが掛からない鍵」ができあがります。",
  },
  {
    title: "リモコンキー・スマートキーは「複製」ではなく「登録」が必要",
    desc: "ボタンで施解錠するリモコンキー（キーレスエントリー）や、携帯するだけでドア解錠・エンジン始動ができるスマートキーは、車両側のコンピューターに鍵の識別情報を登録して初めて機能します。つまり物理的な複製だけでは完結せず、車両への登録作業が必要です。登録には専用の診断機器と手順が必要で、ディーラーのほか、対応設備を持つ鍵の専門業者でも作業できる場合があります。車種・年式によって対応可否が分かれるため、依頼前に車種・年式・型式を伝えて確認するのが基本です。",
  },
  {
    title: "イモビライザーは「鍵とエンジンの照合」の仕組み",
    desc: "イモビライザーは、鍵に内蔵されたチップの識別情報と車両側の情報を照合し、一致しないとエンジンを始動させない盗難防止装置です。現在の乗用車には広く搭載されています。イモビライザー搭載車のスペアキー作成では、金属部分の加工に加えてチップ情報の登録が必須になるため、作成の難易度・所要時間・費用は非搭載車より大きくなります。仕組みの詳細はイモビライザーの解説記事を参考にしてください。鍵を全部なくした場合はさらに手順が増えるため、1本でも残っているうちに予備を作ることが最大の節約になります。",
  },
];

const checkSteps = [
  {
    title: "自分の車の鍵のタイプを確認する",
    desc: "金属キーのみか、リモコンキーか、スマートキーか、イモビライザー搭載かを確認します。取扱説明書の「キー」「盗難防止装置」の項目が手掛かりになります。分からなければ車検証を手元に、ディーラーに車台番号を伝えて確認するのが確実です。このタイプ判定で、どこに依頼できるか・何が必要かがほぼ決まります。",
  },
  {
    title: "依頼先を選ぶ（ディーラーか鍵の専門業者か）",
    desc: "ディーラーは純正キーの取り寄せと車両登録を正規手順で行える確実な窓口で、スマートキーの追加などはメーカーからの部品取り寄せを伴うため日数が掛かることがあります。鍵の専門業者は、対応設備があれば即日での金属キー複製やチップ登録に対応できる場合があり、緊急時や出張対応に強みがあります。時間・確実性・車種対応のどれを優先するかで使い分けましょう。",
  },
  {
    title: "必要なもの（本人確認・車両情報）を準備する",
    desc: "車の鍵は防犯上重要なため、作成時には本人確認書類と、車検証などの車両情報の提示を求められるのが一般的です。所有者と依頼者が異なる場合（家族名義・社用車など）は、委任状や所有者の同意を求められることもあります。スムーズに進めるため、車検証・免許証・今ある鍵を揃えてから依頼しましょう。",
  },
  {
    title: "作成後は動作確認と保管場所の決定を",
    desc: "受け取ったスペアキーは、その場でドアの施解錠・エンジン始動・リモコン操作まで動作確認します。保管は自宅の決まった場所にし、車内に置くのは盗難時に車ごと持ち去られる原因になるため厳禁です。スマートキーの予備は電池切れにも注意し、電池交換の方法も把握しておきましょう。電池切れ時の対処はスマートキーの電池切れの記事で解説しています。",
  },
];

const ngActions = [
  {
    title: "鍵を全部なくすまでスペアキーを作らない",
    desc: "純正キーが1本でも残っていれば、それを元にした作成は比較的スムーズです。全紛失になると、鍵穴からの鍵作成やコンピューターの再設定など工程が一気に増え、時間も費用も大きくなります。「残り1本」になった時点が、スペアキーを作る最適なタイミングです。",
  },
  {
    title: "イモビライザーの有無を確認せずに安い金属複製だけで済ませる",
    desc: "イモビライザー搭載車で刻みだけ複製した鍵は、エンジンが掛からず緊急時の役に立ちません。「ドア開放用」と割り切って作るなら有効ですが、エンジン始動まで求めるならチップ登録込みの作成が必要です。目的と鍵のタイプを必ず突き合わせましょう。",
  },
  {
    title: "スペアキーを車内やナンバープレート裏に隠す",
    desc: "車内・車体への隠し置きは、発見されれば車両ごと盗まれる典型的なリスク行動です。スペアキーは自宅の決まった場所で保管し、家族と場所を共有しておくのが基本です。",
  },
  {
    title: "出所の不明確な相手に車両情報と鍵を渡す",
    desc: "車の鍵の作成は車両情報と本人確認を扱う作業です。所在地や事業者情報が確認できない相手、本人確認をまったく求めない相手への依頼は、複製の悪用リスクを考えると避けるべきです。信頼できる依頼先を選びましょう。",
  },
];

const faqs = [
  {
    q: "車のスペアキーはどこで作れますか？",
    a: "依頼先は主にディーラーと鍵の専門業者です。金属キーのみの車なら合鍵店で複製できる場合もあります。イモビライザー搭載車やスマートキーは車両側への登録作業が必要なため、ディーラーか、対応設備を持つ鍵の専門業者に依頼します。車種・年式によって対応可否が分かれるので、事前に車検証の情報を伝えて確認するのが確実です。",
  },
  {
    q: "ディーラーと鍵屋はどう使い分ければいいですか？",
    a: "確実性・純正部品での作成を重視するならディーラー、スピードや出張対応を重視するなら対応可能な鍵の専門業者、という使い分けが基本です。ディーラーは部品取り寄せで日数が掛かる場合がありますが正規手順で確実です。鍵の専門業者は設備と技術があれば即日対応できる場合があり、鍵の全紛失など緊急時に強みがあります。急ぎ度と車種対応の可否で選びましょう。",
  },
  {
    q: "スマートキーの予備は1本だけで大丈夫ですか？",
    a: "スマートキーを1本しか持っていない状態は、紛失した瞬間に全紛失トラブルへ直行する危険な状態です。全紛失ではコンピューターの再設定を含む大掛かりな作業になり、時間も費用も大きくなります。1本になった時点で予備の作成を検討するのが安全です。また、予備を作ったら電池の状態も定期的に確認しておきましょう。",
  },
  {
    q: "スペアキー作成に必要なものは何ですか？",
    a: "一般に、今ある鍵・運転免許証などの本人確認書類・車検証（車両情報）の3点が基本です。所有者と依頼者が異なる場合は委任状や所有者の同意を求められることがあります。必要書類は依頼先によって異なるため、電話で予約・確認する際にあわせて聞いておくとスムーズです。",
  },
];

const relatedLinks = [
  { href: "/immobilizer/", label: "イモビライザーの基礎知識", desc: "鍵とエンジン照合の仕組みを解説" },
  { href: "/smart-key-denchi/", label: "スマートキーの電池切れ対処", desc: "反応しないときの応急対応" },
  { href: "/car-inlock/", label: "車のインロック対処法", desc: "鍵の閉じ込みが起きたときの手順" },
  { href: "/junsei-key-saihakkou/", label: "純正キーの再発行", desc: "メーカー取り寄せの基礎知識" },
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
    { "@type": "ListItem", position: 2, name: "車のスペアキー作成の基礎知識" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "車のスペアキー作成の基礎知識｜合鍵との違いとディーラー・鍵屋の使い分け",
  description: "金属キー・リモコンキー・スマートキーで変わる作成難度、イモビライザー登録の必要性、ディーラーと鍵業者の使い分け、依頼時の必要書類を一般知識として解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-10",
  dateModified: "2026-08-10",
};

export default function KurumaSpareKeyPage() {
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
            <span className="text-text-secondary">車のスペアキー作成の基礎知識</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            車のスペアキー作成の基礎知識｜合鍵との違いとディーラー・鍵屋の使い分け
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月10日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：鍵のタイプ（金属／リモコン／スマートキー）で作成方法が決まる。イモビライザー搭載車は登録作業が必須で、残り1本になったら作りどき</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              車のスペアキー作成は、<strong>金属キーなら刻みの複製だけで済む一方、イモビライザー搭載車・リモコンキー・スマートキーは車両側への登録作業が必要</strong>で、難易度と手順が大きく変わります。確実性ならディーラー、スピード・出張対応なら設備のある鍵の専門業者、という使い分けが基本です。依頼時は<strong>本人確認書類と車検証</strong>を用意しましょう。鍵を全部なくすと工程と負担が一気に増えるため、<strong>「残り1本」になった時点で予備を作る</strong>のが最も合理的です。
            </p>
          </div>

          {/* 本文解説 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">車のスペアキーの基礎知識｜押さえておきたい4つのポイント</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            車の鍵は家の鍵と違い、電子的な照合の仕組みが絡みます。自分の車の鍵がどのタイプかを知ることが、正しい作成方法と依頼先選びの出発点です。
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
          <h2 className="text-xl font-bold text-text-primary mb-4">スペアキー作成の進め方4ステップ</h2>
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
          <h2 className="text-xl font-bold text-text-primary mb-4">スペアキーにまつわるNG行動</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">NG: {n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 業者判断 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵の専門業者に相談すべきケースと依頼時の注意</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            <strong>鍵を全部なくした、出先で今すぐ必要、ディーラーの納期を待てない</strong>といった場合は、車の鍵に対応できる鍵の専門業者への相談が有力な選択肢です。イモビライザー搭載車への対応可否は業者の設備・技術によって分かれるため、依頼前に車種・年式・型式を伝えて対応可能か確認しましょう。イモビライザーの仕組みは<a href="/immobilizer/" className="text-primary underline">イモビライザーの基礎知識</a>で、スマートキーが反応しないときの対処は<a href="/smart-key-denchi/" className="text-primary underline">スマートキーの電池切れ対処</a>で解説しています。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            費用は鍵のタイプ・車種・作業内容で大きく変わるため、作業前に部品代・作業費・出張費を含む総額見積もりの確認が必須です。費用の考え方は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、依頼先の検討は<a href="/agents/" className="text-primary underline">鍵トラブル業者の比較</a>で確認できます。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">鍵が残り1本なら、なくす前の作成が最大の節約</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              全紛失になる前に、車種・年式を伝えて対応可能な業者やディーラーへ相談を。作業前の総額見積もりを確認してから依頼しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">車のスペアキーのよくある質問</h2>
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
