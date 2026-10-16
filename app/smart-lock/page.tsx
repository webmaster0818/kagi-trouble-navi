import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "スマートロックのメリット・デメリット｜締め出しリスクと賃貸での注意点 | 鍵トラブルナビ",
  description:
    "スマートロックのメリット（オートロックで閉め忘れ防止・ハンズフリー解錠・合鍵の共有が簡単）とデメリット（電池切れ・スマホ紛失による締め出しリスク・本体落下・ハンズフリーの誤作動）を一般知識として解説します。賃貸物件で後付けする場合の原状回復の注意点と、締め出しを防ぐための備えもご紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/smart-lock/" },
};

const merits = [
  {
    title: "オートロックで閉め忘れを防げる",
    desc: "多くのスマートロックには、扉が閉まると自動で施錠されるオートロック機能があります。空き巣被害では無施錠の玄関・窓が狙われるケースが多いと警察の防犯啓発で繰り返し案内されており、「閉め忘れが物理的に起きない」ことは大きな防犯メリットです。ゴミ出しなどの短時間の外出でも確実に施錠されます。",
  },
  {
    title: "鍵を取り出さずに解錠できる",
    desc: "スマホのアプリ操作、ハンズフリー（スマホを持って近づくだけ）、暗証番号、ICカード、指紋など、製品によって多彩な解錠方法が選べます。荷物で両手がふさがっている時でも解錠でき、鞄の底から鍵を探す手間もなくなるため、日常の利便性が大きく向上します。物理鍵の出し入れが減ることで、鍵の紛失リスク自体も下がります。",
  },
  {
    title: "合鍵の発行・削除がアプリで完結する",
    desc: "家族や同居人への「合鍵」は、アプリ上で権限を発行するだけで渡せます。期間限定の合鍵を発行できる製品もあり、来客や家事代行など一時的に鍵を渡す場面で便利です。不要になった場合はアプリから削除できるため、物理的な合鍵の回収漏れというリスクがありません。",
  },
  {
    title: "入退室の履歴が残る",
    desc: "誰がいつ解錠・施錠したかがアプリで確認できる製品が多く、子どもの帰宅確認や家族の見守りに活用できます。施錠状態を外出先から確認できる製品であれば、施錠したかどうかの不安も解消できます。",
  },
];

const demerits = [
  {
    title: "電池切れで締め出されるリスク",
    desc: "後付け型スマートロックの多くは電池駆動です。電池が切れるとスマホからの解錠ができなくなり、物理鍵を持っていなければ締め出しになります。多くの製品には電池残量の通知機能や予備電池構造がありますが、通知を見逃して放置すれば作動しなくなります。電池は切れるものという前提で、早めの交換と物理鍵の携帯を習慣にすることが重要です。",
  },
  {
    title: "スマホの紛失・故障・充電切れ",
    desc: "解錠手段をスマホだけに依存していると、スマホの紛失・故障・充電切れがそのまま締め出しに直結します。暗証番号パッドやICカードなど、スマホ以外の解錠手段を併用できる製品を選ぶ、あるいは物理鍵を財布や職場に確保しておくなどの備えが欠かせません。",
  },
  {
    title: "本体の落下・粘着の劣化（貼り付け型）",
    desc: "工事不要の貼り付け型は、両面テープでサムターン（内側のつまみ)に被せて固定する構造が一般的です。経年や温度変化で粘着が劣化して本体が落下すると、外から解錠できなくなるおそれがあります。定期的な固定状態の確認と、メーカーが案内する取り付け条件（扉の材質・サムターン形状）の遵守が必要です。",
  },
  {
    title: "オートロックによる「うっかり締め出し」",
    desc: "オートロックは閉め忘れを防ぐ一方、スマホも鍵も持たずにゴミ出しに出た瞬間に施錠されてしまう「うっかり締め出し」の典型的な原因でもあります。導入直後は特に起きやすいため、短時間の外出でも解錠手段を必ず持つ習慣を付けるとともに、家族全員への周知が必要です。",
  },
];

const selfSteps = [
  {
    title: "物理鍵を必ず携帯・分散保管する",
    desc: "貼り付け型の場合、スマートロックを付けても元のシリンダーはそのまま使えます。物理鍵を財布に1本入れておく、信頼できる家族に預けておくなど、電子的な手段がすべて使えなくなっても家に入れる手段を確保してください。これが締め出し対策として最も確実な方法です。",
  },
  {
    title: "電池交換の時期をあらかじめ決めておく",
    desc: "残量通知だけに頼らず、「半年ごと」など期日を決めて予防的に交換する運用をおすすめします。使用頻度や環境によって電池の減り方は変わるため、通知が来た場合は先延ばしせず、すぐに交換してください。予備電池を玄関近くに常備しておくのも有効です。",
  },
  {
    title: "スマホ以外の解錠手段を設定しておく",
    desc: "暗証番号・ICカード・指紋など、スマホに依存しない解錠手段を最低1つ設定しておくと、スマホの充電切れ・紛失時にも締め出されません。家族それぞれが複数の手段を使えるようにしておくことをおすすめします。",
  },
  {
    title: "取り付け条件と固定状態を定期確認する",
    desc: "貼り付け型は、扉の材質・サムターンの形状によっては正しく固定できないことがあります。メーカーの適合条件を確認して取り付け、その後も粘着のはがれや本体のぐらつきを定期的にご確認ください。異常がある場合は、早めに貼り直しや補強を行います。",
  },
];

const ngActions = [
  {
    title: "解錠手段をスマホ1つに依存する",
    desc: "スマホの紛失・故障・充電切れで即締め出しになります。物理鍵の携帯か、暗証番号・ICカードなど複数の解錠手段を必ず併用してください。",
  },
  {
    title: "電池残量の警告を放置する",
    desc: "「まだ動くから」と警告を無視して使い続けると、外出中に電池が切れて帰宅時に締め出されます。警告が出た場合は、すぐに交換してください。",
  },
  {
    title: "賃貸で扉に穴を開ける工事をする",
    desc: "ネジ固定・シリンダー交換を伴う設置は、貸主の承諾なしに行うと原状回復義務違反になります。賃貸物件では工事不要の貼り付け型を選ぶか、必ず管理会社の承諾を得てください。",
  },
  {
    title: "家族への共有・練習なしで運用を始める",
    desc: "オートロックの存在を知らない家族が鍵を持たずに外に出て締め出される事例は多く見られます。導入時は全員でアプリ設定と解錠手順を確認し、うっかり外出への注意を共有してください。",
  },
];

const faqs = [
  {
    q: "スマートロックは賃貸でも取り付けられますか？",
    a: "工事不要の貼り付け型（両面テープでサムターンに被せるタイプ）であれば、扉を傷つけないため賃貸物件でも導入しやすいのが一般的です。ただし、ネジ固定やシリンダー交換を伴うタイプは貸主の承諾が必要で、無断で行うと原状回復トラブルの原因になります。貼り付け型でも、退去時に粘着跡が残らないよう取り扱いに注意し、心配な場合は事前に管理会社へご確認ください。",
  },
  {
    q: "スマートロックの電池が切れたら締め出されますか？",
    a: "物理鍵を持っていれば、貼り付け型の多くは元のシリンダーがそのまま使えるため開けられます。物理鍵を持たずに電池が切れると締め出しになるため、残量通知が来たら即交換する、定期交換をルール化する、物理鍵を財布などに常備することが基本の備えです。締め出された場合の対処は、締め出し時の対処法の記事を参考にしてください。",
  },
  {
    q: "スマートロックの防犯性は高いですか？",
    a: "オートロックによる閉め忘れ防止、ピッキングされる物理鍵穴の露出が減る（製品による）、合鍵の無断複製が起きにくいなど、防犯にプラスに働く面があります。一方で、扉の鍵そのものの強度はベースの錠前に依存し、窓など他の侵入経路には効果がありません。スマートロック単体で万全と考えず、シリンダーの防犯性能や窓の対策と組み合わせて検討することをおすすめします。",
  },
  {
    q: "スマートロックの価格や取り付け費用はどのくらいですか？",
    a: "本体価格は製品のグレード（解錠方式の種類・オートロック・遠隔操作対応など）によって大きく異なり、取り付けも自分で貼り付けられるものから業者工事が必要なものまで幅があります。特定の金額を前提にせず、必要な機能を決めてから比較するのがおすすめです。業者に取り付けや錠前ごとの交換を依頼する場合の料金の目安は料金相場のページを参考にし、作業前に総額の見積もりをご確認ください。",
  },
];

const relatedLinks = [
  { href: "/shimedashi/", label: "家の鍵をなくして閉め出された時の対処法", desc: "締め出された際の対応を解説" },
  { href: "/dimple-key/", label: "ディンプルキーとは？防犯性と交換の考え方", desc: "ベースの錠前の防犯性を高める知識" },
  { href: "/chintai-kagi-koukan-hiyou/", label: "賃貸の鍵交換費用は誰が負担？", desc: "賃貸の鍵まわりのルールと費用負担" },
  { href: "/ryokin/", label: "鍵開け・鍵交換の料金相場", desc: "業者に依頼する前に確認する料金の目安" },
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
    { "@type": "ListItem", position: 2, name: "スマートロックのメリット・デメリット" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "スマートロックのメリット・デメリット",
  description: "後付けスマートロックの利点と締め出しリスク（電池切れ・スマホ紛失）、賃貸物件での注意点を一般知識として解説します。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-09",
  dateModified: "2026-08-09",
};

export default function SmartLockPage() {
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
            <span className="text-text-secondary">スマートロックのメリット・デメリット</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            スマートロックのメリット・デメリット｜締め出しリスクと賃貸での注意点
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月9日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">スマートロックを導入する際は、締め出しへの対策が欠かせません。</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              スマートロックは、<strong>オートロックによる閉め忘れ防止・スマホや暗証番号での解錠・合鍵のアプリ管理</strong>が魅力の後付け電子錠です。一方で、最大の弱点は<strong>電池切れ・スマホ紛失・うっかり外出による締め出しリスク</strong>です。対策は「物理鍵を必ず携帯する」「スマホ以外の解錠手段を設定する」「電池は警告が出たらすぐに交換する」の3点です。賃貸物件では<strong>工事を伴う設置に貸主の承諾が必要</strong>な点にも注意してください。
            </p>
          </div>

          {/* 仕組み */}
          <h2 className="text-xl font-bold text-text-primary mb-4">スマートロックと後付け型の仕組み</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            スマートロックは、玄関ドアの錠をスマホや暗証番号などで電子的に施解錠できるようにする機器の総称です。家庭向けで主流なのは<strong>後付け型</strong>で、ドアの内側にあるサムターン（施錠用のつまみ）に本体を被せ、モーターでつまみを回す仕組みです。両面テープで貼り付けるタイプなら扉に穴を開けずに設置でき、既存の鍵はそのまま使えます。このほか、シリンダーや錠前ごと交換する本格的なタイプ、暗証番号パッドやICカードリーダーを追加するタイプなどがあります。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            重要な点は、後付け型は既存の錠前を電動で回しているにすぎないということです。鍵そのものの防犯強度はベースのシリンダーに依存するため、古い錠前の防犯性が気になる場合は<a href="/dimple-key/" className="text-primary underline">ディンプルキーへの交換</a>との組み合わせも検討材料になります。
          </p>

          {/* メリット */}
          <h2 className="text-xl font-bold text-text-primary mb-4">スマートロックの主なメリット</h2>
          <div className="space-y-3 mb-10">
            {merits.map((m, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-4">
                <p className="font-bold text-primary text-sm mb-1.5">
                  <span className="inline-block bg-surface-alt rounded px-2 py-0.5 text-xs font-bold text-text-primary mr-2">メリット{i + 1}</span>
                  {m.title}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* デメリット */}
          <h2 className="text-xl font-bold text-text-primary mb-4">デメリットと締め出しリスク</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            スマートロックのトラブルで最も深刻なのが締め出しです。便利になるほど物理鍵を持ち歩かなくなるため、電子的な手段が使えなくなった瞬間に家に入れなくなります。導入前に、次の4つのリスクをご確認ください。実際に締め出された時の対処は<a href="/shimedashi/" className="text-primary underline">家の鍵をなくして閉め出された時の対処法</a>で解説しています。
          </p>
          <div className="space-y-3 mb-10">
            {demerits.map((d, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-4">
                <p className="font-bold text-red-700 text-sm mb-1.5">
                  <span className="inline-block bg-surface-alt rounded px-2 py-0.5 text-xs font-bold text-text-primary mr-2">注意{i + 1}</span>
                  {d.title}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>

          {/* 自分でできる備え */}
          <h2 className="text-xl font-bold text-text-primary mb-4">締め出しを防ぐために自分でできる備え</h2>
          <ol className="space-y-3 mb-10">
            {selfSteps.map((s, i) => (
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
          <h2 className="text-xl font-bold text-text-primary mb-4">避けるべき行動</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">{n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 賃貸での注意 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">賃貸物件で導入する場合の注意点</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            賃貸の玄関ドアと錠前は貸主の所有物です。<strong>ネジ穴を開ける設置やシリンダー交換を伴うタイプは、貸主・管理会社の事前承諾なしに行うと原状回復義務違反</strong>となり、退去時のトラブルにつながります。賃貸物件では、扉を傷つけない貼り付け型を選ぶことが基本です。貼り付け型でも、退去時にきれいにはがせるか、粘着跡が残らないかを考慮して製品を選び、心配な場合は導入前に管理会社へ連絡することをおすすめします。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            また、賃貸の鍵まわりには「無断で鍵を交換してはいけない」という大原則があります。スマートロック導入をきっかけに鍵の交換も検討する場合は、費用負担のルールとあわせて<a href="/chintai-kagi-koukan-hiyou/" className="text-primary underline">賃貸の鍵交換費用は誰が負担？</a>を確認してください。
          </p>

          {/* 業者判断 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">業者に相談すべきケースと選び方</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            貼り付け型の設置は自分でできますが、「錠前ごと交換する本格的なタイプを付けたい」「扉の形状が特殊で適合が分からない」「スマートロックのトラブルで締め出された」などのケースは、鍵の専門業者に依頼する領域です。特に締め出し時は、無理にこじ開けようとすると扉や錠前を壊して被害が拡大するため、専門業者への依頼が安全です。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            依頼費用は<strong>作業内容・錠前の種類・時間帯によって大きく変わります</strong>。作業前に必ず総額の見積もりをご確認ください。費用の目安は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、依頼先は<a href="/agents/" className="text-primary underline">鍵業者の比較</a>でご確認いただけます。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">取り付け工事や締め出しトラブルの専門業者への相談</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              錠前交換を伴う設置や、スマートロックによる締め出しは、無理をせず専門業者に依頼してください。作業前には総額の見積もりをご確認ください。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">スマートロックのよくある質問</h2>
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
