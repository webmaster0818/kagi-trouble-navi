import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "純正キー・セキュリティカードの再発行方法｜登録制の鍵をなくしたときの流れと注意点 | 鍵トラブルナビ",
  description:
    "ディンプルキーなど登録制シリンダーの純正キーを再発行する一般的な流れを解説。セキュリティカード（鍵番号カード）の役割、メーカー取り寄せに時間がかかる理由、カードを紛失した場合の対応、取り寄せを待つ間の応急手段を一般知識としてまとめました。",
  alternates: { canonical: "https://kagi-trouble-navi.com/junsei-key-saihakkou/" },
};

const basics = [
  {
    title: "純正キーの再発行は「メーカー取り寄せ」が基本",
    desc: "ディンプルキーをはじめとする防犯性の高い鍵は、街の合鍵店の機械では正確に複製できない、あるいは複製自体を受け付けていないことが多く、メーカーから純正キーを取り寄せるのが基本の入手方法です。純正キーは元の鍵をコピーするのではなく、鍵番号をもとにメーカーが図面どおりに新規製作するため、摩耗したコピーを重ねた合鍵と違って精度が高く、シリンダーへの負担も少なく済みます。注文はシリンダーの購入店・取り付け業者・メーカーの窓口などを通じて行うのが一般的です。",
  },
  {
    title: "登録制シリンダーは「セキュリティカード」がないと注文できない",
    desc: "防犯性の高いシリンダーの多くは所有者登録制を採用しており、購入時に鍵番号やID番号が記載されたセキュリティカード（鍵番号カード）が付属します。純正キーの追加注文時にはこのカードの提示（番号の申告）が必要で、カードを持たない第三者が勝手に合鍵を作れない仕組みになっています。これは防犯上の大きな利点ですが、裏を返せば正当な持ち主でもカードがないと注文が難しくなるということです。カードは鍵と別の場所に保管し、家族がいる場合は保管場所を共有しておきましょう。",
  },
  {
    title: "セキュリティカード自体をなくした場合はメーカーごとに対応が異なる",
    desc: "セキュリティカードを紛失した場合の対応はメーカー・製品によって異なります。本人確認や所定の手続きを経て番号を照会・再発行できる場合もあれば、カードの再発行を行っておらず、鍵の追加ができなくなる製品もあります。再発行不可の製品で手持ちの鍵も失った場合、最終的にはシリンダーごと交換して新しいカードと鍵一式を受け取る形になることもあります。自宅の鍵のメーカーと製品名を控え、紛失時の手続きを一度確認しておくと、いざというとき慌てずに済みます。",
  },
  {
    title: "取り寄せには時間がかかる。数週間単位を見込んでおく",
    desc: "純正キーは注文を受けてからメーカーが製作するため、即日では手に入りません。製品や時期にもよりますが、受け取りまで数週間単位の時間がかかることが多いのが実情です。「鍵をなくした、今日から入れない」という状況の解決策にはならないため、緊急時の対応（スペアキーでの生活、必要に応じた鍵開け・交換）と、純正キーの取り寄せは分けて考える必要があります。鍵の本数に余裕がなくなってきた時点で、なくす前に早めに注文しておくのが理想です。",
  },
];

const checkSteps = [
  {
    title: "手元の鍵とセキュリティカードでメーカー・鍵番号を確認する",
    desc: "まず鍵の持ち手部分の刻印やセキュリティカードの記載から、メーカー名・製品名・鍵番号（ID番号）を確認します。分からない場合は、ドア側面の金属プレート（フロントプレート）やシリンダーの刻印も手がかりになります。なお鍵番号が写った写真をSNSなどに載せるのは複製リスクがあるため厳禁です。番号の控えは他人の目に触れない形で保管しましょう。",
  },
  {
    title: "注文窓口を選ぶ（購入店・取り付け業者・メーカー窓口など）",
    desc: "純正キーの注文は、シリンダーを購入した店舗や取り付けた業者、メーカーが案内する取扱店などを通じて行うのが一般的です。分譲マンションで共用部と連動した鍵の場合は管理会社経由、賃貸の場合は貸主の設備なので管理会社・大家さんへの相談が先です。窓口によって手数料や受け取り方法が異なることがあるため、注文前に必要書類（セキュリティカード・本人確認書類など）と受け取りまでの流れを確認しましょう。",
  },
  {
    title: "本数と納期を確認して注文する",
    desc: "注文時には、必要な本数と納期の目安を確認します。家族の人数分＋予備1本を目安に、まとめて注文すると手間が一度で済みます。納期は数週間単位かかることが多いため、引っ越しや家族の進学など鍵が増える予定があるなら、必要になる時期から逆算して早めに動くのが確実です。受け取り時は、届いた鍵が実際のシリンダーでスムーズに回るかその場で確認しましょう。",
  },
  {
    title: "取り寄せを待つ間の運用を決めておく",
    desc: "純正キーが届くまでの間は、残っているスペアキーでやりくりすることになります。1本しか残っていない場合、その1本をなくすと締め出しになるため、持ち歩き用と保管用を分けられないか、家族間の受け渡しルールをどうするかを決めておきましょう。残り1本もなくしてしまい家に入れない場合は、鍵開けの依頼や、防犯を考えるならシリンダー交換の検討が現実的な選択肢になります。",
  },
];

const ngActions = [
  {
    title: "セキュリティカードを鍵と同じキーケースに入れて持ち歩く",
    desc: "カードと鍵を一緒に持ち歩くと、紛失時に両方同時に失います。拾った第三者に純正キーを注文される理論上のリスクも生まれます。セキュリティカードは自宅の安全な場所に保管し、持ち歩かないのが原則です。",
  },
  {
    title: "登録制の鍵を非対応の店で無理に複製する",
    desc: "精度の低い複製キーは、回りにくい・抜けにくいといった不調やシリンダーの摩耗を早める原因になります。登録制シリンダーの追加キーは純正取り寄せが基本です。応急的に合鍵を検討する場合も、対応可否と精度の限界を理解した上で判断しましょう。",
  },
  {
    title: "鍵番号やカードの写真をSNS・フリマアプリなどに載せる",
    desc: "鍵番号が分かると、悪意ある第三者が複製を試みる手がかりになります。鍵の写真を撮るときは番号が写らないようにし、カードの画像をネットに上げるのは絶対に避けましょう。中古で錠前を売買する際も番号の扱いに注意が必要です。",
  },
  {
    title: "賃貸で勝手に純正キーを追加・シリンダー交換する",
    desc: "賃貸住宅の錠前は貸主の設備です。鍵の追加やシリンダー交換を無断で行うと契約違反になり得ます。鍵をなくした場合の報告義務が契約に定められていることも多いため、まず管理会社・大家さんに連絡し、指示に従って手続きしましょう。",
  },
];

const faqs = [
  {
    q: "純正キーの再発行にはどれくらい時間がかかりますか？",
    a: "メーカーが注文を受けてから製作するため、受け取りまで数週間単位の時間がかかることが一般的です。正確な納期は製品や注文時期、窓口によって異なるので、注文時に必ず確認しましょう。今日明日の締め出しを解決する手段にはならないため、緊急時はスペアキーでの対応や鍵開けの依頼と切り分けて考える必要があります。",
  },
  {
    q: "セキュリティカードをなくしたら純正キーはもう作れませんか？",
    a: "メーカー・製品によって対応が分かれます。本人確認などの手続きを経て対応してもらえる場合もあれば、カードの再発行や番号の照会を行っていない製品もあります。どうしても追加キーを用意できない場合は、シリンダーごと交換して新しい鍵一式とカードを受け取る方法が最終手段になります。まずは自宅の鍵のメーカー窓口か購入店に、製品名を伝えて相談してみましょう。",
  },
  {
    q: "純正キーと合鍵店のコピーキーはどう違うのですか？",
    a: "純正キーは鍵番号をもとにメーカーが図面どおり新規製作する鍵で、精度が高く、元の鍵の摩耗を引き継ぎません。合鍵店のコピーキーは手元の鍵を機械でなぞって複製するため、元の鍵の摩耗やわずかな誤差がそのまま反映されます。ディンプルキーなど登録制の鍵はそもそも店頭複製に対応していないことが多く、純正取り寄せが基本です。詳しくは合鍵の記事で解説しています。",
  },
  {
    q: "純正キーの取り寄せを待つ間に締め出されたらどうすればいいですか？",
    a: "スペアキーを預けている家族や、賃貸なら管理会社・大家さんに連絡するのが先決です。それでも入れない場合は鍵開け業者への依頼が現実的な選択肢になります。依頼時は作業前に部品代・作業費・出張費を含む総額見積もりを必ず確認してください。なお鍵を屋外で紛失して見つからない場合は、開けた後にシリンダー交換まで検討するのが防犯上は安心です。",
  },
];

const relatedLinks = [
  { href: "/aikagi/", label: "合鍵作製の基礎知識", desc: "作れる鍵・作れない鍵と注意点" },
  { href: "/dimple-key/", label: "ディンプルキーとは？防犯性の仕組み", desc: "登録制シリンダーの特徴を解説" },
  { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処法", desc: "紛失時にやるべきことの手順" },
  { href: "/ryokin/", label: "鍵開け・鍵交換の料金相場", desc: "緊急時の費用感を事前に把握" },
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
    { "@type": "ListItem", position: 2, name: "純正キー・セキュリティカードの再発行方法" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "純正キー・セキュリティカードの再発行方法｜登録制の鍵をなくしたときの流れと注意点",
  description: "登録制シリンダーの純正キー取り寄せの一般的な流れ、セキュリティカードの役割と紛失時の対応、取り寄せを待つ間の応急手段を一般知識として解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-09",
  dateModified: "2026-08-09",
};

export default function JunseiKeySaihakkouPage() {
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
            <span className="text-text-secondary">純正キー・セキュリティカードの再発行方法</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            純正キー・セキュリティカードの再発行方法｜登録制の鍵をなくしたときの流れと注意点
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月9日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：登録制の鍵は「セキュリティカード＋メーカー取り寄せ」で純正キーを追加できる。ただし数週間単位かかる</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              ディンプルキーなど登録制シリンダーの追加キーは、<strong>セキュリティカード（鍵番号カード）の情報をもとに、購入店やメーカー窓口経由で純正キーを取り寄せる</strong>のが基本です。受け取りまで数週間単位かかることが多いため、緊急の締め出し対策にはなりません。カード自体をなくした場合の対応はメーカーごとに異なり、<strong>再発行できない製品ではシリンダー交換が最終手段</strong>になることもあります。カードは鍵と別の場所に保管するのが鉄則です。
            </p>
          </div>

          {/* 本文解説 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">純正キー再発行の基礎知識｜登録制シリンダーの仕組み</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            防犯性の高い鍵ほど「簡単に複製できない」仕組みになっており、その分だけ追加キーの入手には手順と時間が必要です。まず全体像を押さえましょう。
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
          <h2 className="text-xl font-bold text-text-primary mb-4">純正キーを取り寄せる4ステップ</h2>
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
          <h2 className="text-xl font-bold text-text-primary mb-4">やってはいけないNG行動・よくある誤解</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">NG: {n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 業者判断 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">今すぐ家に入れない・鍵が1本もないときは業者判断を</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            純正キーの取り寄せは「時間のかかる正攻法」です。手元の鍵をすべて失って家に入れない、屋外で紛失して悪用が心配、という状況では、<strong>鍵開けやシリンダー交換を業者に依頼する</strong>のが現実的な解決策になります。特に外で鍵をなくして見つからない場合は、開けてもらった後もその鍵で誰かが開けられる状態が続くため、シリンダー交換までセットで検討するのが防犯上は安心です。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            依頼時は、作業前に部品代・作業費・出張費を含む総額見積もりを必ず確認しましょう。費用感は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、依頼先の検討は<a href="/agents/" className="text-primary underline">鍵トラブル業者の比較</a>で確認できます。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">締め出し・鍵の全紛失は業者に相談を</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              純正キーの取り寄せは数週間単位。今すぐ入りたい・防犯が心配という場合は、鍵開けとシリンダー交換に対応できる業者への相談が確実です。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">純正キー・セキュリティカードのよくある質問</h2>
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
