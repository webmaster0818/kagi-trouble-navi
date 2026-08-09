import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "イモビライザーとは？仕組みと鍵屋で対応できる範囲をわかりやすく解説 | 鍵トラブルナビ",
  description:
    "イモビライザーの仕組み（電子チップのID照合によるエンジン始動制御）を一般知識として解説。イモビ付きの鍵を紛失したときに鍵屋で対応できる範囲、対応業者が限られる理由、ディーラー依頼との使い分け、依頼前の確認事項まで紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/immobilizer/" },
};

const basics = [
  {
    title: "仕組み：鍵のチップと車両側のID照合",
    desc: "イモビライザーは、鍵の内部に埋め込まれた電子チップ（トランスポンダー）のID情報と、車両側に登録されたIDを照合し、一致した場合にのみエンジンの始動を許可する電子的な盗難防止装置です。鍵の溝の形が合っていても、IDが一致しない鍵ではエンジンがかかりません。合鍵の複製だけでは車が動かせないため、盗難への抑止力が高い装置とされています。",
  },
  {
    title: "搭載されている車の見分け方",
    desc: "近年の乗用車の多くにはイモビライザーが標準搭載されており、スマートキー（電子キー）採用車は基本的にイモビライザー付きと考えられます。確実に確認するには、車両の取扱説明書やメーカーの車種情報、メーターまわりのインジケーター（鍵マークの点滅表示など）を確認します。年式や仕様（グレード）によって搭載の有無が分かれる車種もあるため、「同じ車名だから同じ」とは限りません。",
  },
  {
    title: "普通の合鍵との違い",
    desc: "金属の溝を削って作る従来の合鍵は「ドアの開錠・機械的な操作」には使えますが、イモビライザー付き車両では、チップの登録を伴わない合鍵ではエンジンがかかりません。つまりイモビ付き車両の鍵作成は、「鍵の形を作る作業」と「IDを車両に登録する作業」の2段階が必要になるという点が、通常の鍵作成との大きな違いです。",
  },
];

const scope = [
  {
    title: "鍵屋で対応できること（一般的な範囲）",
    desc: "インロック（閉じ込み）時のドア開錠は、イモビライザーの有無に関係なく多くの鍵業者が対応しています。イモビライザーの搭載車両でも「ドアを開けるだけ」ならイモビ登録は不要だからです。また、専用の診断機やキー登録機材を備えた業者であれば、鍵をすべて紛失した場合の鍵作成とイモビ登録まで対応できることがあります。",
  },
  {
    title: "対応業者が限られる理由",
    desc: "イモビ登録には車種ごとに対応した診断機材と技術、車両情報へのアクセスが必要で、設備投資と習熟のハードルが高いためです。すべての鍵業者が対応しているわけではなく、対応車種が国産車の一部に限られる業者、外車や最新モデルは非対応の業者など、対応範囲には大きな差があります。電話の時点で「車種・年式・型式」を伝えて対応可否を確認することが欠かせません。",
  },
  {
    title: "ディーラーとの使い分け",
    desc: "ディーラー（メーカー正規店）に依頼する場合は、鍵の取り寄せと登録を正規の手順で行うため確実性が高い一方、部品の取り寄せに日数がかかることがあり、車両をディーラーまで移動させる（またはレッカー搬送する）必要が生じる場合もあります。鍵業者は現地対応で当日解決できる可能性がある反面、車種によっては対応できません。「急ぎで動かしたいか」「確実性を優先するか」「車を移動できるか」で使い分けるのが基本です。",
  },
];

const ngActions = [
  {
    title: "自分で配線やヒューズをいじって始動を試みる",
    desc: "イモビライザーは車両の電子制御と一体化しています。素人判断で配線を触ると、故障や誤作動でかえって高額な修理につながるおそれがあります。盗難防止装置の解除を自力で試みる行為は、トラブル時に盗難を疑われる原因にもなります。",
  },
  {
    title: "形だけの合鍵でエンジン始動を繰り返し試す",
    desc: "チップ未登録の合鍵ではエンジンはかかりません。車種によっては、認証に失敗した状態を繰り返すとセキュリティが作動し、正規の復帰手順が必要になる場合があります。「回せば動くかもしれない」と試し続けるのは避けましょう。",
  },
  {
    title: "対応可否と総額を確認せずに依頼する",
    desc: "イモビ関連の作業は業者による対応差が大きい分野です。電話で車種・年式を伝えず現地に呼ぶと、「来たけれど対応できない」という空振りや、想定外の追加費用につながります。作業内容ごとの総額見積もりと、キャンセル料の条件を必ず事前に確認してください。費用感の考え方は料金相場ページで解説しています。",
  },
  {
    title: "所有を証明できない状態で作業を求める",
    desc: "車の鍵の開錠・作成では、業者は車検証や身分証で車両の所有・使用の確認を行うのが通常です。確認なしで作業を引き受ける業者はむしろ危険な存在です。他人名義の車（家族・社用車など）の場合は、名義人への確認や委任の手当てが必要になることを見越して連絡しておきましょう。",
  },
];

const faqs = [
  {
    q: "イモビライザーとは何ですか？",
    a: "鍵に内蔵された電子チップのIDと車両側の登録IDを照合し、一致したときだけエンジンの始動を許可する電子的な盗難防止装置です。鍵の形が同じでもIDが一致しない鍵ではエンジンがかからないため、不正な合鍵による盗難への抑止力が高いとされています。",
  },
  {
    q: "イモビライザー付きの車の鍵をなくしたら鍵屋で作れますか？",
    a: "専用の診断機材とキー登録の技術を持つ一部の鍵業者であれば、鍵作成とイモビ登録まで現地対応できる場合があります。ただし対応できる車種・年式は業者ごとに大きく異なるため、電話の時点で車種・年式・型式を伝えて対応可否を確認することが必須です。対応できない場合はディーラーへの依頼になります。",
  },
  {
    q: "インロック（閉じ込み）の開錠だけならイモビライザーは関係ありませんか？",
    a: "ドアの開錠自体はイモビライザーの認証とは別の機構なので、鍵が車内にあるインロックの開錠は多くの鍵業者が対応できます。開錠後は車内の鍵でそのままエンジンをかけられます。詳しい対処手順は車のインロックの記事をご覧ください。",
  },
  {
    q: "ディーラーと鍵屋、どちらに頼むべきですか？",
    a: "確実性を最優先するなら正規手順で鍵を再発行するディーラー、当日中に車を動かしたい・車両を移動させにくい状況なら現地対応できる鍵業者、という使い分けが基本です。鍵業者に頼む場合は対応車種の確認と総額見積もりを先に取り、比較したうえで判断しましょう。",
  },
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
    { "@type": "ListItem", position: 2, name: "イモビライザーとは？鍵屋で対応できる範囲" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "イモビライザーとは？仕組みと鍵屋で対応できる範囲をわかりやすく解説",
  description: "イモビライザーの仕組みと、鍵紛失・インロック時に鍵屋で対応できる範囲、ディーラーとの使い分けを一般知識として解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-09",
  dateModified: "2026-08-09",
};

export default function ImmobilizerPage() {
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
            <span className="text-text-secondary">イモビライザーとは？鍵屋で対応できる範囲</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            イモビライザーとは？仕組みと鍵屋で対応できる範囲をわかりやすく解説
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月9日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：イモビ＝電子照合の盗難防止装置。「開錠」は多くの鍵屋が可能、「鍵作成」は対応業者が限られる</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              イモビライザーは、<strong>鍵に内蔵された電子チップのIDと車両側の登録IDが一致しないとエンジンがかからない</strong>盗難防止装置です。インロック時のドア開錠は認証と別の機構なので多くの鍵業者が対応できますが、<strong>鍵をすべて紛失した場合の鍵作成＋イモビ登録は、専用機材を持つ一部の業者に限られます</strong>。依頼前に車種・年式・型式を伝えて対応可否と総額を確認し、対応不可ならディーラーへの依頼に切り替えるのが基本の流れです。
            </p>
          </div>

          <p className="text-sm text-text-secondary leading-relaxed mb-8">
            「合鍵を作ったのにエンジンがかからない」「鍵をなくしたが、どこに頼めば車を動かせるのか分からない」——こうした戸惑いの多くは、イモビライザーという装置の仕組みを知ることで整理できます。この記事では、イモビライザーの基本的な仕組み、鍵トラブル時に鍵業者で対応できる範囲とできない範囲、ディーラーとの使い分けの考え方を一般知識として解説します。
          </p>

          {/* 仕組み */}
          <h2 className="text-xl font-bold text-text-primary mb-4">イモビライザーの基本知識</h2>
          <div className="space-y-4 mb-10">
            {basics.map((t, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{i + 1}. {t.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl border border-black/10 p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed">
              なお、「エンジンがかからない」＝イモビライザーの問題とは限りません。スマートキー車では<strong>電池切れが原因でエンジンがかからないように見える</strong>ケースが非常に多く、この場合は鍵の電池交換や、電池切れ時の非常始動手順（取扱説明書に記載）で解決します。鍵業者を呼ぶ前に、電池切れの可能性を先に切り分けておくと無駄な出費を防げます。詳しくはスマートキーの電池切れの記事をご覧ください。
            </p>
          </div>

          {/* 対応範囲 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵屋で対応できる範囲・できない範囲</h2>
          <div className="space-y-4 mb-10">
            {scope.map((e, i) => (
              <div key={i} className="bg-surface-alt rounded-xl p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{i + 1}. {e.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>

          {/* 自分でできること */}
          <h2 className="text-xl font-bold text-text-primary mb-4">依頼の前に自分で確認しておくこと</h2>
          <ol className="space-y-3 mb-10">
            {[
              "スペアキーが自宅などにないかを最初に確認する。スペアが1本でも残っていれば、選べる選択肢と費用が大きく変わります。",
              "車検証（または車検証アプリ）で車種・年式・型式を確認し、依頼時に正確に伝えられるようにする。",
              "スマートキー車かどうか、鍵マークの警告表示があるかなど、イモビライザー搭載の手がかりを取扱説明書で確認する。",
              "自動車保険やクレジットカードのロードサービスに、鍵トラブルの補助（開錠対応やレッカー）が付いていないか確認する。",
              "身分証と車検証など、車両の所有・使用を証明できるものを手元に揃えておく。",
            ].map((t, i) => (
              <li key={i} className="flex gap-3 bg-surface-alt rounded-xl p-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">{i + 1}</span>
                <span className="text-sm text-text-secondary leading-relaxed">{t}</span>
              </li>
            ))}
          </ol>

          {/* NG行動 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">やってはいけないNG行動</h2>
          <div className="space-y-4 mb-10">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-600 mb-1.5">NG{i + 1}. {n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 業者に頼む判断 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵業者に依頼する場合の判断基準</h2>
          <div className="bg-surface-alt rounded-xl p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              イモビライザー関連の依頼では、<strong>①インロックの開錠だけなのか、②鍵の全紛失で鍵作成＋イモビ登録まで必要なのか</strong>をまず切り分けます。①なら多くの業者が対応可能で、②なら「イモビ登録対応」を明示している業者に絞ったうえで、電話で車種・年式・型式を伝えて対応可否を確認します。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              見積もりは<strong>出張費・作業費・部品代を含む総額</strong>で取り、「現地で見てから」の一点張りで金額の目安を出さない業者は避けるのが無難です。対応できないと言われた場合や、確実性を優先したい場合は、ディーラーでの鍵再発行に切り替えましょう。緊急でなければ複数社比較が原則です。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              車の鍵トラブルの費用感は<a href="/ryokin/" className="text-primary underline">料金相場ページ</a>、業者の比較ポイントは<a href="/agents/" className="text-primary underline">業者比較ページ</a>にまとめています。
            </p>
          </div>

          {/* 内部リンクCTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">車の鍵トラブルに対応できる業者を比較する</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              車の開錠・鍵作成に対応し、電話で対応車種と総額の目安を答えてくれる業者を中心に比較しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を詳しく見る</a>
              <a href="/car-inlock/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">車のインロック対処法</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">イモビライザーに関するよくある質問</h2>
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
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/car-inlock/", label: "車のインロック（閉じ込み）の対処法" },
              { href: "/smart-key-denchi/", label: "スマートキーの電池切れ対処法" },
              { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処法" },
              { href: "/ryokin/", label: "鍵トラブルの料金相場" },
            ].map((l, i) => (
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
