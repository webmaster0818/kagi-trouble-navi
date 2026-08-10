import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "子ども・ペットの鍵トラブル対策｜閉じ込め予防とサムターンいたずら対策 | 鍵トラブルナビ",
  description:
    "子どもやペットが関わる鍵トラブルの予防策を一般知識として解説。室内での閉じ込め・閉め出しが起きる典型パターン、内鍵やサムターンへのいたずら対策、チャイルドロックや補助錠の活用、非常解錠装置の位置を家族で共有しておく大切さ、実際に起きたときの対応手順を紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/kodomo-pet-kagi-taisaku/" },
};

const basics = [
  {
    title: "子どもの鍵トラブルは「大人の真似」から起こる",
    desc: "小さな子どもは、大人が鍵を掛ける動作をよく見ていて、ある日突然それを再現します。トイレや寝室の内鍵を掛けて自分で開けられなくなる、玄関のサムターン（内側のツマミ）を回して親を閉め出す、といったトラブルは、いたずらというより発達過程の自然な行動です。「まだできないはず」と思っていた操作をある日できるようになるのが子どもなので、鍵の対策は「できるようになる前」に先回りして整えるのが基本の考え方です。ツマミを回せる年齢になったら、家の中の施錠できる場所を一度すべて点検しましょう。",
  },
  {
    title: "ペットでも起こる「まさかの施錠」",
    desc: "猫や犬がドアレバーに飛びついたり、サムターンや掛け金に体が触れたりして、偶然施錠・閉鎖状態になる事故は実際に起こり得ます。特にレバーハンドルは猫が体重を掛けるとドアが開いてしまう（逆に閉じ込められる）ことがあり、室内での予期しない閉じ込め・閉め出しの原因になります。ペットのいる家庭では、「この部屋のドアが閉まったら中から開けられるか・外から開けられるか」を部屋ごとに把握しておくことが、対策の出発点になります。",
  },
  {
    title: "玄関の閉め出しは「在宅中」でも起こる",
    desc: "ゴミ出しや宅配の受け取りでほんの数十秒外に出た隙に、子どもがサムターンを回して玄関が開かなくなる。これは在宅中の閉め出しの典型パターンです。中に子どもだけが残る状況は、締め出された側の焦りも大きく、ベランダ越しの無理な侵入などの二次事故につながりやすいのが怖い点です。短時間でも鍵を持って出る習慣、サムターンに子どもの手が届きにくくする工夫、いざというときのスペアキーの備えという三段構えで予防します。締め出し全般の対処は締め出されたときの対処法の記事で解説しています。",
  },
  {
    title: "対策の柱は「操作させない」「開けられるようにしておく」の2本",
    desc: "子ども・ペットの鍵対策は、2つの方向で考えると整理できます。ひとつは操作させない対策で、サムターンカバーやドアノブカバー、ドアの高い位置への補助錠（チャイルドロック）の追加など、そもそも施錠・開錠の操作をできなくする工夫です。もうひとつは起きても開けられる対策で、非常解錠装置付きの室内錠を選ぶ、非常解錠の位置と使い方を家族で共有する、スペアキーを備えるといった備えです。どちらか一方ではなく、両方を組み合わせることで「起こさない・起きても大事にしない」体制が作れます。",
  },
];

const checkSteps = [
  {
    title: "家じゅうの「施錠できる場所」を洗い出す",
    desc: "トイレ・浴室・洗面所・寝室・玄関・勝手口・ベランダの窓など、施錠機構のある場所をリストアップし、それぞれ「子ども（ペット）が操作できるか」「外側から開ける手段があるか」を確認します。室内錠なら非常解錠装置（コイン溝や小穴）の有無と位置を実際に操作して確かめておきましょう。使い方は室内ドア・トイレの鍵の記事で解説しています。",
  },
  {
    title: "操作させない工夫を取り付ける",
    desc: "玄関のサムターンには、カバーを付ける・ツマミを外せるタイプや空転式に交換するなどのいたずら対策があります。室内ドアには、子どもの手が届かない高さに取り付ける補助錠や、ドアノブカバーが市販されています。浴室など危険のある場所は、子どもが内側から施錠できないようにする（内鍵を無効化する・高い位置の錠に変える）方向で考えるのが安全です。",
  },
  {
    title: "「起きたとき」の備えを共有する",
    desc: "非常解錠装置の位置と回し方、スペアキーの保管場所、管理会社や鍵業者の連絡先を、家族全員で共有しておきます。玄関の閉め出し対策としては、短時間の外出でも鍵を持つ習慣に加え、信頼できる家族へのスペアキーの預け先を決めておくと安心です。屋外へのキーボックス設置を検討する場合は、防犯面の注意点をキーボックスでの鍵管理の記事で確認してください。",
  },
  {
    title: "成長・環境の変化に合わせて見直す",
    desc: "子どもの成長は早く、昨日届かなかったツマミに今日は届きます。逆に、ある程度の年齢になれば「閉じ込められたときはこう開ける」を教えるほうが安全になります。ペットも成長や新入りで行動が変わります。対策は一度きりではなく、身長が伸びた・新しい行動を覚えた・引っ越したといった節目で見直しましょう。",
  },
];

const ngActions = [
  {
    title: "閉じ込められた子どもを叱る・急かす",
    desc: "ドアの向こうで叱られた子どもはパニックになり、解錠の誘導ができなくなります。まず「大丈夫だよ」と安心させ、ツマミの操作を落ち着いて誘導することが最速の解決につながります。",
  },
  {
    title: "いきなりドアを破壊しようとする",
    desc: "室内錠の多くは非常解錠装置で外から開けられます。破壊はドア交換の費用と、破片による子ども・ペットのケガのリスクを伴う最終手段です。コイン溝の確認が先、緊急性が高いなら119番が先です。",
  },
  {
    title: "ベランダ伝いの侵入など危険な方法で家に入ろうとする",
    desc: "在宅閉め出しで焦って高所から侵入を試みるのは、転落事故につながる最も危険な行動です。子どもの様子をドアや窓越しに確認しつつ、鍵業者や管理会社、緊急時は消防への連絡という正規ルートで解決しましょう。",
  },
  {
    title: "「一度対策したから大丈夫」と点検をやめる",
    desc: "サムターンカバーは外れていないか、補助錠の位置は今も手が届かないか、非常解錠装置は固着せず回るか。対策グッズも住まいの錠も経年で状態が変わります。定期的な点検と見直しをセットで続けましょう。",
  },
];

const faqs = [
  {
    q: "子どもがトイレに閉じこもってしまいました。すぐできることは？",
    a: "まずドア越しに優しく声を掛けて安心させ、内側のツマミを回すよう誘導します。開けられない場合は、ドアノブ外側の非常解錠装置（コインが入る溝や小穴）を硬貨などで回して解錠します。多くのトイレの表示錠にはこの装置が付いています。反応がない・体調が心配なときは、ためらわず119番に通報してください。詳しい手順は室内ドア・トイレの鍵の記事で解説しています。",
  },
  {
    q: "子どもが玄関のサムターンを回してしまう対策はありますか？",
    a: "サムターンカバーの取り付け、ツマミを取り外せる着脱式や、押しながら回すなど単純な回転では動かないタイプのサムターンへの交換、子どもの手が届かない高い位置への補助錠追加などが一般的な対策です。防犯目的のサムターン対策（サムターン回し対策）と兼ねられる製品もあります。あわせて、短時間の外出でも必ず鍵を持って出る習慣をつけると、在宅閉め出しのリスクを大きく減らせます。",
  },
  {
    q: "ペットが部屋に閉じ込められることは本当にあるのですか？",
    a: "あります。猫や犬がレバーハンドルに飛びついてドアが閉まる・開く、サムターンや掛け金に触れて施錠状態になる、といった偶発的な事故は起こり得ます。ペットのいる部屋のドアは、閉まったときに外から開ける手段があるかを確認しておきましょう。長時間の留守番時は、施錠機構のある部屋への出入りを制限しておくと、閉じ込めと誤施錠の両方を予防できます。",
  },
  {
    q: "業者を呼ぶべきなのはどんなときですか？",
    a: "非常解錠装置がない・固着して回らない、ラッチの故障で開かない、玄関の閉め出しで中に子どもだけが残っているなど、自力での安全な解決が難しいときは鍵の専門業者へ依頼します。生命に関わる緊急性があれば119番が最優先です。業者依頼時は状況（中に人がいるか・錠の種類）を伝え、作業前に総額見積もりを確認しましょう。落ち着いて選べるよう、連絡先は平時に控えておくのがおすすめです。",
  },
];

const relatedLinks = [
  { href: "/shitsunai-toilet-kagi/", label: "室内ドア・トイレの鍵が開かないとき", desc: "非常解錠装置の使い方と対処手順" },
  { href: "/thumb-turn-taisaku/", label: "サムターン回し対策", desc: "防犯面のサムターン対策はこちら" },
  { href: "/shimedashi/", label: "締め出されたときの対処法", desc: "玄関の閉め出しトラブルの手順" },
  { href: "/key-box-kanri/", label: "キーボックスでの鍵管理", desc: "スペアキーの備えと保管の注意点" },
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
    { "@type": "ListItem", position: 2, name: "子ども・ペットの鍵トラブル対策" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "子ども・ペットの鍵トラブル対策｜閉じ込め予防とサムターンいたずら対策",
  description: "子ども・ペットによる閉じ込め・閉め出しの典型パターンと、サムターンいたずら対策・チャイルドロック・非常解錠装置の共有など予防の考え方を一般知識として解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-10",
  dateModified: "2026-08-10",
};

export default function KodomoPetKagiTaisakuPage() {
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
            <span className="text-text-secondary">子ども・ペットの鍵トラブル対策</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            子ども・ペットの鍵トラブル対策｜閉じ込め予防とサムターンいたずら対策
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月10日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：対策は「操作させない」＋「起きても開けられる」の2本柱。施錠できる場所の洗い出しと非常解錠装置の共有を、できるようになる前に</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              子ども・ペットの鍵トラブルは、内鍵での閉じ込めと玄関サムターンによる閉め出しが典型です。予防は<strong>サムターンカバー・ドアノブカバー・高い位置の補助錠（チャイルドロック）で操作させない</strong>こと、そして<strong>非常解錠装置（コイン溝）の位置と使い方・スペアキーの備えを家族で共有し、起きても開けられるようにしておく</strong>ことの2本柱です。家じゅうの施錠できる場所を一度洗い出し、子どもの成長に合わせて見直しましょう。緊急時に反応がなければ119番が最優先です。
            </p>
          </div>

          {/* 本文解説 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">子ども・ペットの鍵トラブルの基礎知識｜押さえておきたい4つのポイント</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            閉じ込め・閉め出しは「不注意」ではなく「起こるもの」として備えるのが正解です。典型パターンを知れば、先回りの対策が具体的になります。
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
          <h2 className="text-xl font-bold text-text-primary mb-4">家庭でできる予防4ステップ</h2>
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
          <h2 className="text-xl font-bold text-text-primary mb-4">業者に相談すべきケースと依頼時の注意</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            <strong>非常解錠装置がない・回らない、ラッチ故障で開かない、玄関の閉め出しで中に子どもだけが残っている</strong>といった場面は、出張対応の鍵業者への依頼が確実です。生命に関わる緊急性があるなら119番を優先してください。また、いたずら対策と防犯対策を兼ねてサムターンの交換や補助錠の追加を検討する場合も、錠の種類に合った製品選びから業者に相談できます。防犯面のサムターン対策は<a href="/thumb-turn-taisaku/" className="text-primary underline">サムターン回し対策</a>を、室内錠の緊急対応は<a href="/shitsunai-toilet-kagi/" className="text-primary underline">室内ドア・トイレの鍵が開かないときの対処法</a>を参考にしてください。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            依頼時は、状況（中に人がいるか・錠の種類・症状）を伝え、作業前に作業費・出張費を含む総額見積もりを確認しましょう。費用感は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、依頼先の検討は<a href="/agents/" className="text-primary underline">鍵トラブル業者の比較</a>で確認できます。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">閉じ込め・閉め出しの「もしも」に備えて連絡先の確認を</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              緊急時に慌てて業者を探すと判断を誤りがちです。平時に依頼先の候補と料金の考え方を確認しておきましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">子ども・ペットの鍵トラブルのよくある質問</h2>
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
