import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "車のスマートキー電池切れ対処法｜ドアの開け方・エンジンのかけ方・電池交換の手順 | 鍵トラブルナビ",
  description:
    "車のスマートキーが電池切れになったときの対処法を一般知識として解説。内蔵のメカニカルキーでのドア解錠、キーを近づけてエンジンを始動する一般的な方法（メーカーにより異なるため取扱説明書の確認が前提）、ボタン電池の交換手順まで紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/smart-key-denchi/" },
};

const steps = [
  {
    title: "メカニカルキー（内蔵キー）を取り出してドアを開ける",
    desc: "ほとんどのスマートキーには、電池切れに備えて金属製のメカニカルキー（エマージェンシーキー・内蔵キー）が収納されています。キー本体側面のボタンやレバーを操作しながら引き抜くタイプが一般的です。取り出したメカニカルキーを運転席ドアの鍵穴に差し込んで回せば、電池が切れていてもドアを開けられます。鍵穴が見当たらない車種は、ドアハンドルのカバーの内側に隠れていることが多く、カバーの外し方は取扱説明書に記載されています。",
  },
  {
    title: "警報（セキュリティアラーム）が鳴っても慌てない",
    desc: "メカニカルキーでドアを開けると、車両の盗難警報装置が作動してハザードやホーンが鳴る場合があります。これは正常な動作で、多くの車種ではエンジンを始動する（正規のキーが車内で認証される）と警報は止まります。夜間や住宅街では驚いてしまいますが、故障ではないため落ち着いて次のエンジン始動の手順に進みましょう。",
  },
  {
    title: "キーを近づけてエンジンを始動する",
    desc: "スマートキーは電池が切れても、キー内部の応答チップが車両からの電波に反応できるため、キーを所定の位置に近づければエンジンを始動できる設計になっているのが一般的です。代表的な方法には「スマートキーでスタートボタンに直接触れながら（かざしながら）ボタンを押す」「ハンドル付近の所定の位置にキーをかざしてからブレーキを踏んでボタンを押す」「キーを差し込むスロットに挿入する」などがあり、正しい位置と手順はメーカー・車種で異なります。必ずお乗りの車の取扱説明書（「スマートキーの電池が切れたとき」などの項目）で確認してください。",
  },
  {
    title: "エンジンがかかったら電池を交換する",
    desc: "上記の方法はあくまで応急手段です。エンジンがかかって移動できるようになったら、早めにスマートキーのボタン電池を新品に交換しましょう。電池を放置すると、次に乗るときにまた同じ手順が必要になるうえ、液漏れでキー内部の基板を傷めるおそれもあります。",
  },
];

const denchiKoukan = [
  {
    title: "電池の型番を確認する",
    desc: "スマートキーの電池はコイン形リチウム電池が使われていることが多く、型番はキーの取扱説明書や電池自体の刻印で確認できます。車種・年式によって型番が異なるため、思い込みで購入せず必ず現物か説明書で確認しましょう。コンビニ・家電量販店・ホームセンターなどで入手できます。",
  },
  {
    title: "ケースを開けて電池を入れ替える",
    desc: "一般的な手順は、①メカニカルキーを抜く、②キー側面の溝に薄い工具（マイナスドライバーなど。布を巻くと傷防止になります）を差し込み、ゆっくりひねってケースを開く、③電池の向き（プラス・マイナス）を覚えてから古い電池を外す、④新しい電池を同じ向きにセットしてケースを閉じる、という流れです。内部の基板や端子には素手で触れないようにし、防水パッキンがある場合はずれないように組み戻します。",
  },
  {
    title: "動作確認をする",
    desc: "交換後は、施錠・解錠ボタンが反応するか、車に近づいてドアハンドルでの施解錠が働くかを確認します。交換しても反応しない場合は、電池の向き違い・接触不良のほか、キー本体の故障や車両側の受信部の不具合も考えられます。その場合は販売店（ディーラー）への相談が確実です。",
  },
];

const ngActions = [
  {
    title: "電池切れと決めつけて他の原因を見逃す",
    desc: "スマートキーが反応しない原因は電池切れだけではありません。強い電波を発する施設の近くでは一時的に通信が乱れることがあり、キーをテレビ・スマートフォン・他の電子キーと重ねて保管していると誤作動や電池の早期消耗につながるとされています。電池を替えても直らない場合は、キー本体や車両側の故障を疑い、販売店に相談しましょう。",
  },
  {
    title: "キーの分解時に基板を傷つける・部品を紛失する",
    desc: "ケースを無理にこじ開けると、爪の破損・防水パッキンのずれ・基板の損傷につながります。小さな部品を紛失するとキーごと交換になり、費用も時間もかかります。作業は平らな場所で、部品の向きを写真に撮りながら進めると安全です。",
  },
  {
    title: "鍵穴に潤滑油スプレーを吹き込む",
    desc: "メカニカルキー用の鍵穴が回りにくいからといって、食用油や一般的な潤滑油スプレーを注すのはやめましょう。油分がほこりを固めて動作不良を悪化させます。鍵穴には鍵穴専用の潤滑剤を使うのが原則です。",
  },
  {
    title: "スペアキーがない状態を放置する",
    desc: "スマートキーを1本しか持っていない状態で紛失すると、車に乗れなくなるだけでなく、キーの再登録・作成に日数と費用がかかります。電池切れを機に、スペアキーの有無と保管場所を確認しておきましょう。キーを車内に残したままドアが施錠されてしまった場合の対処は、車のインロック対処法の記事で解説しています。",
  },
];

const faqs = [
  {
    q: "スマートキーの電池が切れたら車のドアはどうやって開けますか？",
    a: "スマートキーに内蔵されているメカニカルキー（金属キー）を取り出し、運転席ドアの鍵穴に差して開けます。鍵穴がドアハンドルのカバー内に隠れている車種もあります。開けた際に警報が鳴る場合がありますが、多くの車種ではエンジンを始動すれば止まります。",
  },
  {
    q: "電池切れのスマートキーでもエンジンはかけられますか？",
    a: "かけられるのが一般的です。キーをスタートボタンに触れさせる、所定の位置にかざす、スロットに挿すなど、電池切れ時専用の始動方法が用意されていますが、位置と手順はメーカー・車種で異なります。お乗りの車の取扱説明書で「電池が切れたとき」の項目を確認してください。",
  },
  {
    q: "スマートキーの電池は自分で交換できますか？",
    a: "多くの場合は自分で交換できます。取扱説明書で電池の型番を確認し、ケース側面の溝から工具でゆっくり開けて、コイン形電池を同じ向きで入れ替えます。基板に素手で触れない、部品を紛失しないよう注意しましょう。不安な場合は販売店やカー用品店でも交換を受け付けています。",
  },
  {
    q: "電池を交換してもスマートキーが反応しません。どうすればいいですか？",
    a: "電池の向きと接触を再確認しても直らない場合は、キー本体の故障、車両側受信部の不具合、補機バッテリーの電圧低下などが考えられます。販売店（ディーラー）への相談が確実です。外出先でドアが開けられず困っている場合は、ロードサービスや車の鍵に対応する鍵業者への依頼も選択肢になります。",
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
    { "@type": "ListItem", position: 2, name: "車のスマートキー電池切れ対処法" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "車のスマートキー電池切れ対処法｜ドアの開け方・エンジンのかけ方・電池交換",
  description: "スマートキー電池切れ時のメカニカルキーでの解錠、エンジン始動の一般的な方法、電池交換手順を解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-09",
  dateModified: "2026-08-09",
};

export default function SmartKeyDenchiPage() {
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
            <span className="text-text-secondary">車のスマートキー電池切れ対処法</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            車のスマートキー電池切れ対処法｜ドアの開け方・エンジンのかけ方・電池交換の手順
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月9日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：電池が切れても「メカニカルキーで開けて、キーを近づけて始動」できる</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              スマートキーの電池が切れても、車に乗れなくなるわけではありません。<strong>①キーに内蔵されたメカニカルキー（金属キー）で運転席ドアを解錠</strong>し、<strong>②スタートボタンにキーを触れさせる・所定の位置にかざすなどの方法でエンジンを始動</strong>できます。始動方法はメーカー・車種で異なるため<strong>取扱説明書の確認が必須</strong>です。移動できたら、早めにボタン電池を新品に交換しましょう。
            </p>
          </div>

          <p className="text-sm text-text-secondary leading-relaxed mb-8">
            出先の駐車場でスマートキーが反応しないと、閉め出されたように感じて焦ってしまいます。しかしスマートキーは電池切れを前提に設計されており、正しい手順を知っていれば自力で解決できるケースがほとんどです。この記事では、ドアの開け方からエンジン始動、電池交換までの流れを一般知識として順に解説します。
          </p>

          {/* 対処手順 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">電池切れ時の対処手順（4ステップ）</h2>
          <div className="space-y-4 mb-10">
            {steps.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-5">
                <h3 className="font-bold text-text-primary mb-1.5">手順{i + 1}. {s.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed">
              <strong className="text-text-primary">重要：</strong>電池切れ時のエンジン始動方法（キーをかざす位置・手順）は<strong>メーカー・車種・年式によって異なります</strong>。本記事の説明は一般的な例であり、確実な手順はお乗りの車の取扱説明書、またはメーカー公式サイトの電子取扱説明書で必ず確認してください。グローブボックスに冊子がない場合も、車種名と「取扱説明書」で検索すれば閲覧できることがほとんどです。
            </p>
          </div>

          {/* 電池交換 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">スマートキーの電池交換の一般的な手順</h2>
          <div className="space-y-4 mb-10">
            {denchiKoukan.map((d, i) => (
              <div key={i} className="bg-surface-alt rounded-xl p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{i + 1}. {d.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>

          {/* 予防 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">電池切れを防ぐためにできること</h2>
          <div className="bg-white rounded-xl border border-black/10 p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              スマートキーの電池寿命は使い方や保管環境によって変わりますが、多くの車種では<strong>電池残量が少なくなると警告</strong>が出ます。メーター内の表示灯やメッセージ、施解錠時の作動ランプの点滅の変化、反応距離が短くなるといったサインが出たら、切れる前に交換するのが安全です。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              また、テレビ・パソコン・スマートフォン・充電器など電磁波を発する機器のそばにキーを置くと、キーが通信を繰り返して電池を早く消耗させることがあるとされています。保管場所を見直すだけでも電池の持ちは変わります。長期間車に乗らない場合の消耗にも注意しましょう。
            </p>
          </div>

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

          {/* 業者・ディーラー判断 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">自力で解決できないときの相談先</h2>
          <div className="bg-surface-alt rounded-xl p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              電池を交換しても反応しない、メカニカルキーが見当たらない・回らない、キー自体を破損してしまった、という場合は自力での解決が難しくなります。相談先の目安は次のとおりです。<strong>①キーの故障・再作成・追加登録は販売店（ディーラー）</strong>が確実です。<strong>②外出先で今すぐ車に乗りたい・キーを車内に閉じ込めたという緊急時は、加入しているロードサービスや自動車保険の付帯サービス、車の鍵に対応する鍵業者</strong>が選択肢になります。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              鍵業者に依頼する場合は、車種・年式・状況（電池切れか、閉じ込みか、紛失か）を伝え、出張費を含めた<strong>総額の見積もり</strong>を電話の段階で確認しましょう。スマートキー搭載車はイモビライザー（電子的な盗難防止装置）の関係で対応範囲が業者によって異なるため、「スマートキー車に対応できるか」を最初に確認するのがポイントです。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              キーを車内に残したまま施錠してしまった場合の対処は<a href="/car-inlock/" className="text-primary underline">車のインロック対処法</a>で詳しく解説しています。費用の目安は<a href="/ryokin/" className="text-primary underline">料金相場ページ</a>、業者選びは<a href="/agents/" className="text-primary underline">業者比較ページ</a>をご覧ください。
            </p>
          </div>

          {/* 内部リンクCTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">車の鍵トラブルに対応できる業者を比較する</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              スマートキー・イモビライザー搭載車への対応を明記し、見積もり無料で総額を提示してくれる業者を中心に比較しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を詳しく見る</a>
              <a href="/car-inlock/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">車のインロック対処法</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">スマートキーの電池切れに関するよくある質問</h2>
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
              { href: "/car-inlock/", label: "車のインロック（閉じ込み）対処法" },
              { href: "/kagi-funshitsu/", label: "鍵をなくした時の対処法" },
              { href: "/ryokin/", label: "鍵トラブルの料金相場" },
              { href: "/agents/", label: "鍵トラブル業者の比較" },
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
