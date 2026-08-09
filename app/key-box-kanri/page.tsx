import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "キーボックスでの鍵管理の注意点｜民泊・介護・現場で使うときのリスクと運用ルール | 鍵トラブルナビ",
  description:
    "ダイヤル式キーボックスで鍵を受け渡す場面（民泊のセルフチェックイン・介護の訪問・建設現場・不動産内覧）が増えています。番号の使い回しや設置場所のリスク、番号変更・記録などの運用ルール、キーボックスに頼らない代替手段を一般知識として解説します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/key-box-kanri/" },
};

const basics = [
  {
    title: "キーボックスは「鍵の受け渡し」を無人化する道具",
    desc: "キーボックスは、中に鍵を入れてダイヤルなどの暗証番号で開け閉めする小型の保管箱で、ドアノブや門扉に掛ける南京錠型や、壁に固定する据え置き型があります。使われる場面は幅広く、民泊・宿泊施設のセルフチェックイン、訪問介護でヘルパーが利用者宅の鍵を使う運用、建設現場や空き物件での関係者間の鍵共有、不動産の内覧対応などが代表例です。対面での受け渡しが不要になる便利な道具ですが、「家の鍵がその箱の中にある」と外部に示す存在でもあり、使い方を誤ると防犯上の弱点そのものになります。",
  },
  {
    title: "最大のリスクは「番号の使い回し」と「変更しない運用」",
    desc: "キーボックスの安全性は、箱の頑丈さよりも番号の運用で決まります。一度でも番号を教えた相手は、その後もずっと開けられるからです。民泊でゲストごとに番号を変えない、介護や現場で退職者・契約終了者が出ても番号を据え置く、といった運用では、鍵を渡した相手が増え続けているのと同じ状態になります。また簡易なダイヤル式は、時間をかけた総当たりで開けられてしまう可能性も否定できません。「誰がいつまで開けられるべきか」を決め、それに合わせて番号を変えることが運用の核心です。",
  },
  {
    title: "設置場所そのものがリスクになる",
    desc: "玄関ドアの正面など目立つ場所にキーボックスを掛けると、「この家は鍵をここに置いています」と宣伝しているのと同じです。空き巣にとっては、時間をかけてでも開ける価値のある標的になり得ます。また、掛けるタイプは箱ごと持ち去って別の場所でじっくり開けられるリスクもあります。人通りから見えにくく、かつ利用者は迷わない場所を選ぶ、持ち去りにくい固定方法を選ぶ、高価でも堅牢な製品を選ぶといった配慮で、リスクはある程度減らせます。",
  },
  {
    title: "業務利用なら「ルールの文書化」とより安全な代替手段の検討を",
    desc: "民泊・介護・現場など業務でキーボックスを使うなら、個人の注意任せではなく運用ルールとして文書化することが重要です。誰に番号を伝えたかの記録、番号変更のタイミング（利用者ごと・契約終了時・定期）、鍵の本数管理、紛失時の対応手順を決めておきます。また、恒常的な運用には、履歴が残り遠隔で権限を無効化できるスマートロックや、施設によっては管理者経由の受け渡しなど、キーボックスより管理しやすい代替手段もあります。民泊では自治体や関係法令のルール・条例で鍵の受け渡し方法に関する取り扱いが定められている場合があるため、事前に確認しましょう。",
  },
];

const checkSteps = [
  {
    title: "「誰が・いつまで開けられるべきか」を書き出す",
    desc: "まず、鍵を渡したい相手と期間を明確にします。民泊なら滞在中のゲストのみ、介護なら担当ヘルパーのみ、現場なら工期中の関係者のみ、といった具合です。この整理をすると、「番号をいつ変えるべきか」（ゲストのチェックアウト後、担当交代時、工期終了時）が自動的に決まります。逆にこの整理ができない使い方は、キーボックスに向いていません。",
  },
  {
    title: "番号変更のルールを決めて実行する",
    desc: "利用者が入れ替わるたびに番号を変えるのが原則です。加えて、変更が発生しない場合でも定期的な変更を組み込みましょう。番号は誕生日・住所・部屋番号など推測されやすいものを避け、過去に使った番号の使い回しもしないこと。変更したら、伝えるべき相手にだけ安全な手段で伝え、古い番号を知る人がもう開けられないことを確認します。",
  },
  {
    title: "設置場所と製品を見直す",
    desc: "通りから見えにくく、利用者には案内しやすい場所を選びます。掛け式なら、持ち去りにくい太い固定部に掛けられているか、工具で簡単に壊れそうな薄い箱でないかを確認しましょう。屋外に常設するなら、風雨によるダイヤルの固着も起こり得るため、定期的に開閉できるか点検します。長期の常設が前提なら、据え置き型や堅牢な製品への買い替えも検討に値します。",
  },
  {
    title: "受け渡しの記録と紛失時の手順を用意する",
    desc: "業務利用なら、誰にいつ番号を伝えたか・鍵を何本入れているかを記録します。中の鍵が紛失した（戻っていない）ことに気づいたら、番号変更だけでは不十分で、住戸側のシリンダー交換まで検討するのが防犯上の筋です。「鍵が戻らなかったらどうするか」を事前に決めておくと、いざというとき対応が速くなります。賃貸物件でのキーボックス設置や鍵の追加は、管理会社・大家さんへの確認も忘れずに。",
  },
];

const ngActions = [
  {
    title: "番号を一度設定したまま何年も変えない",
    desc: "番号を知る人は増える一方で、減ることはありません。過去のゲスト・退職したスタッフ・工事の元請け下請けまで、全員が今も開けられる状態です。利用者の入れ替わり時＋定期の変更をルール化しましょう。",
  },
  {
    title: "玄関の目立つ場所に掛けて「鍵の在り処」を宣伝する",
    desc: "キーボックスの存在自体が「ここに鍵がある」という情報です。目立つ場所への設置は、総当たりや破壊、箱ごとの持ち去りを試みる動機を与えます。見えにくい場所・持ち去りにくい固定を基本にしましょう。",
  },
  {
    title: "番号をメッセージで全員に一斉共有・使い回しにする",
    desc: "グループチャットなどで番号を広く共有すると、転送・スクリーンショットで意図しない範囲まで広がります。伝える相手は最小限にし、必要がなくなった時点で番号を変えるのが原則です。",
  },
  {
    title: "家族用の日常運用として自宅の鍵を常時入れっぱなしにする",
    desc: "「鍵を持ち歩かなくて済むから」と自宅の鍵を常設キーボックスに入れる運用は、家の鍵を1つの暗証番号に集約するのと同じで、住まいの防犯レベルを下げます。日常運用ならスマートロックなど履歴・権限管理のできる手段のほうが適しています。",
  },
];

const faqs = [
  {
    q: "キーボックスは防犯上安全ですか？",
    a: "箱そのものの頑丈さには製品差が大きく、簡易なダイヤル式は時間をかけた総当たりや破壊、箱ごとの持ち去りのリスクがあります。それ以上に重要なのが運用で、番号を変えない・広く共有する使い方では、どんな箱でも安全にはなりません。「一時的な受け渡しの道具」と割り切り、利用者が替わるたびの番号変更・見えにくい設置・記録の3点をセットで運用することが前提です。",
  },
  {
    q: "民泊でキーボックスを使うときの注意点はありますか？",
    a: "ゲストごとに番号を変えることが最重要です。チェックアウト後に前のゲストが開けられる状態を残さないこと。また、民泊の鍵の受け渡し方法については、自治体のルールや条例、関係法令上の取り扱いが定められている場合があるため、営業形態に応じて事前に確認しましょう。運用負荷を考えると、発行・無効化を遠隔でできるスマートロックのほうが管理しやすいケースも多くあります。",
  },
  {
    q: "介護でヘルパーに鍵を渡すためにキーボックスを使っても大丈夫ですか？",
    a: "訪問介護では、事業所とも相談のうえキーボックスが使われることがあります。運用のポイントは、番号を知る人を担当者に限定する、担当交代・契約終了時に必ず番号を変える、設置場所を通りから見えにくくする、の3点です。誰に伝えたかの記録を家族・事業所で共有しておくと、トラブル時の対応がスムーズです。より管理しやすい手段として、履歴の残る電子錠の活用も検討に値します。",
  },
  {
    q: "キーボックスの中の鍵が紛失していたらどうすればいいですか？",
    a: "まず番号を即座に変更し、誰が最後に使ったかを記録から確認します。ただし鍵そのものが第三者の手に渡った可能性がある以上、番号変更だけでは不十分で、住戸のシリンダー交換まで検討するのが防犯上は安心です。賃貸物件なら管理会社・大家さんへの報告が先です。交換を依頼する場合は、作業前に部品代・作業費・出張費を含む総額見積もりを確認しましょう。",
  },
];

const relatedLinks = [
  { href: "/chintai-bouhan/", label: "賃貸住宅の防犯対策", desc: "借りている部屋でできる防犯の基本" },
  { href: "/smart-lock/", label: "スマートロックの基礎知識", desc: "履歴・権限管理ができる受け渡し手段" },
  { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処法", desc: "紛失に気づいたらやるべき手順" },
  { href: "/ryokin/", label: "鍵開け・鍵交換の料金相場", desc: "シリンダー交換の費用感を把握" },
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
    { "@type": "ListItem", position: 2, name: "キーボックスでの鍵管理の注意点" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "キーボックスでの鍵管理の注意点｜民泊・介護・現場で使うときのリスクと運用ルール",
  description: "ダイヤル式キーボックスの利用場面と、番号の使い回し・設置場所のリスク、番号変更・記録などの運用ルール、代替手段の考え方を一般知識として解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-09",
  dateModified: "2026-08-09",
};

export default function KeyBoxKanriPage() {
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
            <span className="text-text-secondary">キーボックスでの鍵管理の注意点</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            キーボックスでの鍵管理の注意点｜民泊・介護・現場で使うときのリスクと運用ルール
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月9日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：キーボックスの安全性は箱ではなく「運用」で決まる。利用者が替わるたびの番号変更・見えにくい設置・記録の3点が必須</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              ダイヤル式キーボックスは民泊・介護・建設現場などで鍵の受け渡しを無人化できる便利な道具ですが、<strong>一度番号を教えた相手はずっと開けられる</strong>という性質上、番号を変えない運用では「鍵を渡した人が増え続ける」状態になります。安全に使う条件は、<strong>利用者が替わるたび＋定期の番号変更、通りから見えにくく持ち去りにくい設置、誰に番号を伝えたかの記録</strong>の3点です。恒常的な業務利用なら、履歴が残り権限を遠隔で無効化できるスマートロックなどの代替手段も検討しましょう。
            </p>
          </div>

          {/* 本文解説 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">キーボックス利用の基礎知識｜押さえておきたい4つのポイント</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            キーボックスそのものは単純な道具です。だからこそ、リスクの正体と運用の考え方を知っているかどうかで、安全性に大きな差がつきます。
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
          <h2 className="text-xl font-bold text-text-primary mb-4">安全に使うための運用ルール4ステップ</h2>
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
          <h2 className="text-xl font-bold text-text-primary mb-4">やってはいけないNG運用</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">NG: {n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 業者判断 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵が戻らない・運用を根本から変えたいときは専門家へ</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            キーボックス内の鍵が紛失した（戻らない）場合は、番号変更だけでなく<strong>住戸側のシリンダー交換</strong>まで検討するのが防犯上の筋です。また、受け渡しの頻度が高い民泊や事業所で「番号管理が回らない」と感じ始めたら、キーボックスの限界です。履歴が残り、権限の発行・無効化を遠隔でできる<strong>スマートロックや電子錠への切り替え</strong>を、鍵の専門業者に相談する価値があります。賃貸物件の場合は、交換・設置の前に管理会社・大家さんの承諾を得てください。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            シリンダー交換やスマートロック設置を依頼する場合は、作業前に部品代・作業費・出張費を含む総額見積もりを必ず確認しましょう。費用感は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、依頼先の検討は<a href="/agents/" className="text-primary underline">鍵トラブル業者の比較</a>で確認できます。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">鍵の受け渡し運用の見直しは業者に相談</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              シリンダー交換からスマートロック設置まで、運用に合った手段を提案できる業者なら安心です。作業前の総額見積もりを確認してから依頼しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">キーボックス管理のよくある質問</h2>
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
