import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "金庫が開かない時の対処法と鍵開けの料金相場【2026年版】番号忘れ・電池切れ・鍵紛失 | 鍵トラブルナビ",
  description:
    "金庫が開かない時の対処法を原因別に解説。ダイヤル番号忘れ・テンキーの電池切れ・鍵の紛失それぞれの対応と、業者に依頼する際の見積もりの確認点、破壊解錠の判断基準、依頼時に必要な所有者確認まで紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/kinko-kaijo/" },
};

const causes = [
  { title: "テンキー式の電池切れ", desc: "家庭用テンキー金庫で最も多い原因です。多くの機種は電池を交換すれば設定番号はそのまま使えます（電池ボックスは扉の外側にある機種が大半）。交換しても反応しない場合は基板故障の可能性があり、業者による対応が必要です。" },
  { title: "ダイヤル番号を忘れた・合わせても開かない", desc: "ダイヤルは「右に4回→左に3回…」のように回す回数と方向が決まっています。手順が正しいのに開かない場合は番号違いか内部故障です。番号不明の場合、業者はダイヤル探索や解錠技術で対応します（時間がかかるため、料金は高くなる傾向があります）。メーカーに購入証明を提示して番号照会できる場合もあります。" },
  { title: "鍵（シリンダー）の紛失・折れ", desc: "シリンダー式は鍵の紛失・鍵折れが典型トラブルです。ピッキング等の非破壊解錠で対応できる場合が多く、折れた鍵の抜き取り＋合鍵作成で復旧できることもあります。" },
  { title: "長年開けていない・遺品の金庫", desc: "実家の遺品整理などで番号も鍵もわからないケースです。所有者確認（相続関係の説明など）のうえで業者が解錠します。古い金庫は部品が入手できず、開けた後は買い替えになることが多い点にもご留意ください。" },
];

const faqs = [
  { q: "金庫の鍵開けの料金相場はいくらですか？", a: "金額は金庫の種類・状況によって変わり、業務用の大型・防盗金庫やダイヤル番号不明のケースは高くなります。出張料・時間帯割増が加わる場合もあるため、金庫の種類・メーカー・型番を伝えて、事前に見積もりを取ってください。" },
  { q: "テンキー式金庫が反応しません。電池切れですか？", a: "まず電池切れを疑ってください。多くの家庭用機種は扉の外側に電池ボックスがあり、交換すれば設定番号のまま使えます。新品電池でも反応しない場合は基板や配線の故障が考えられ、業者による解錠・修理が必要です。" },
  { q: "ダイヤル番号を忘れた金庫は開けられますか？", a: "開けられます。業者はダイヤル探索などの技術で解錠しますが、時間がかかるため通常の鍵開けより高額になります。メーカーによっては購入証明を提示すると番号を照会できる場合があるため、先にメーカーへ確認するのも一つの方法です。" },
  { q: "金庫の解錠を依頼すると、所有者確認はありますか？", a: "あります。盗難金庫の解錠を防ぐため、正規の業者は身分証の提示や所有経緯（遺品の場合は相続関係の説明など）の確認を行います。確認を一切しない業者はかえって注意が必要です。" },
  { q: "破壊して開けた金庫はまた使えますか？", a: "破壊解錠の方法によります。シリンダーのみの破壊なら部品交換で再使用できる場合がありますが、扉やロック機構ごと破壊した場合は再使用できません。買い替え前提になるか、非破壊で開けられるかを見積もり時に確認してください。" },
];

const lockTypes = [
  { title: "ダイヤル式", desc: "最も多いのは「番号は合っているのに手順が違う」ケースです。ダイヤル錠は機種ごとに「右に4回以上回して1つ目の番号→左に3回回して2つ目→右に2回…」のように回転回数と方向が厳密に決まっており、1回でも回数を間違えると内部のリングが揃わず開きません。途中で行き過ぎた場合は戻さず、最初からやり直すのが基本です。正しい手順は取扱説明書または扉の型番からメーカーサイトで確認できます。手順どおりでも開かない場合は番号の記憶違いか内部機構の摩耗が考えられます。" },
  { title: "テンキー式", desc: "開かない原因として最も多いのが電池切れです。液晶が表示されない・ボタンを押しても無反応・警告音が鳴るといった症状は、まず電池を疑ってください。電池ボックスは扉の表面（テンキーパネルの下部や側面のカバー内）や、非常用鍵穴のカバー内にある機種が一般的です。全ての電池を新品の同一銘柄に交換するのが基本で、多くの機種は電池を替えても設定番号はそのまま維持されます。交換後も反応しない場合は基板や配線の故障が考えられます。" },
  { title: "指紋認証式", desc: "登録した指の状態が変わると認証率が下がります。指先の乾燥・ふやけ・傷・汚れ、センサー面の皮脂汚れが典型的な原因です。指を拭き、センサーを柔らかい布で軽く清掃してから再試行してください。多くの機種はテンキーや非常用鍵の代替解錠手段を備えているため、指紋が認証されない場合は、先にそちらをお試しください。" },
  { title: "鍵式（シリンダー式）", desc: "長年の使用で鍵の山が摩耗すると、内部ピンが正しい位置に揃わず回らなくなります。「奥まで差さるが回らない」「引っかかる」場合は、複製鍵ではなく購入時の元鍵（マスターキー）で試すと開くことがあります。無理に力をかけると鍵折れにつながるため、回りが渋い時点で使用を控えるのが安全です。" },
];

const selfChecks = [
  { title: "型番・メーカー名を確認する", desc: "扉の表面・裏面や側面に銘板（プレートやシール）があり、メーカー名と型番が記載されています。型番がわかれば、メーカーサイトで取扱説明書・対処法・問い合わせ窓口を特定でき、業者へ依頼する場合も見積もり精度が上がります。まず銘板の写真を撮っておくことをおすすめします。" },
  { title: "取扱説明書のリセット手順を確認する", desc: "テンキー式の多くは、説明書にエラー時のリセット手順（電池の入れ直し、一定時間の待機、非常用鍵との併用など）が記載されています。説明書を紛失していても、型番で検索するとメーカーがPDFを公開している場合があります。" },
  { title: "外部電源端子の有無を確認する", desc: "テンキー式の一部機種は、内部電池が完全に切れた場合に備えて扉面に外部電源端子（9V電池を当てる端子やUSB端子）を備えています。端子があれば外から給電して操作できるため、扉面の小さなカバーや端子穴がないかご確認ください。" },
];

const ngActions = [
  { title: "バール等でのこじ開け", desc: "耐火金庫の扉と本体の隙間は数ミリしかなく、バールを差し込んでも開かないうえ、扉が変形するとロック機構が噛み込んで専門業者でも解錠難度が大きく上がります。耐火材が崩れて中の書類や貴重品を傷めるおそれもあり、修理できなくなった場合は買い替えが必要になります。" },
  { title: "ダイヤルやテンキーの分解", desc: "ダイヤル錠の内部は精密なリング機構で、素人が分解すると番号の照合位置が完全に失われ、解錠の手がかりがなくなります。テンキーの基板も同様で、分解後は業者でも破壊解錠しか選べなくなるケースがあります。" },
  { title: "ドリルでの穴あけ・叩く・落とす", desc: "防盗性能のある金庫はドリル攻撃を想定した対策板が入っており、中途半端な穴あけはロックの噛み込みを招きます。衝撃を与えても開くことはなく、内部機構が破損して状況が悪化するおそれがあります。" },
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
    { "@type": "ListItem", position: 2, name: "金庫が開かない時の対処法" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "金庫が開かない時の対処法と鍵開けの料金相場【2026年版】",
  description: "金庫が開かない原因別の対処法と、業者による解錠の料金相場、破壊解錠の判断基準を解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-07-02",
  dateModified: "2026-10-27",
};

export default function KinkoKaijoPage() {
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
            <span className="text-text-secondary">金庫が開かない時の対処法</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            金庫が開かない時の原因別の対処法と鍵開けの料金相場【2026年版】
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年10月27日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">金庫が開かない場合の主な原因と対処法は、次のとおりです。</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              金庫が開かない原因の多くは<strong>テンキーの電池切れ・ダイヤル番号の間違い/忘れ・鍵の紛失</strong>のいずれかです。テンキーはまず電池交換、ダイヤルはメーカーへの番号照会という、ご自身で行える対処法を確認し、解決しない場合は業者に依頼してください。業者による金庫解錠の金額は種類・難易度で変わるため、業者の見積もりで確認してください。依頼時は所有者確認（身分証など）があります。
            </p>
          </div>

          {/* 原因別 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">開かない原因別の対処法</h2>
          <div className="space-y-4 mb-10">
            {causes.map((c, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{i + 1}. {c.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* 料金 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">金庫解錠の料金</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            金額は金庫のメーカー・型番・設置状況・時間帯によって変わるため、業者の見積もりで確認してください。型番を伝えると見積もりが正確になります。各社が公式サイトに表示している料金は<a href="/ryokin-index/" className="text-primary underline">鍵トラブル料金インデックス（確認日を記載）</a>にまとめています。
          </p>

          {/* 依頼前チェック */}
          <h2 className="text-xl font-bold text-text-primary mb-4">業者に依頼する前の確認事項</h2>
          <ol className="space-y-3 mb-10">
            {[
              "金庫のメーカー・型番（扉や側面のプレート）を控える。伝えることで見積もりの精度が大きく上がります。",
              "テンキー式は、まず新品の電池への交換を試す（最も多い原因のため）。",
              "ダイヤル式はメーカーの番号照会サービス（購入証明が必要な場合あり）を確認する。",
              "所有者確認の書類（身分証、遺品の場合は状況を説明できるもの）を用意する。",
              "「非破壊で開けられるか」「開けた後に再使用できるか」を含めて総額見積もりを確認する。",
            ].map((t, i) => (
              <li key={i} className="flex gap-3 bg-surface-alt rounded-xl p-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">{i + 1}</span>
                <span className="text-sm text-text-secondary leading-relaxed">{t}</span>
              </li>
            ))}
          </ol>

          {/* 依頼先 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">金庫が開かない時に依頼できる業者と選び方</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            依頼先は、番号の照会や修理を受け付ける<strong>金庫メーカー</strong>と、現地で解錠する<strong>鍵業者</strong>の2つです。購入証明があり急ぎでなければメーカーへの照会、すぐに開ける必要がある場合や遺品の金庫で購入証明がない場合は鍵業者への依頼が一般的です。当サイトで紹介している次の5社は、いずれも公式サイトで金庫の鍵開け・解錠を案内しています（2026年10月27日確認）。
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 mb-4 text-sm">
            {[
              ["/agents/kagi110ban/", "カギ110番"],
              ["/agents/seikatsu-kyukyusha/", "鍵の生活救急車"],
              ["/agents/kagi-kyukyusha/", "カギの救急車"],
              ["/agents/kagi-rescue/", "鍵のレスキュー"],
              ["/agents/kagizaru/", "鍵猿"],
            ].map(([href, label]) => (
              <li key={href}><a href={href} className="block rounded-lg border border-primary/30 px-4 py-2 text-primary hover:bg-primary/5">{label}の口コミ・評判</a></li>
            ))}
          </ul>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            業者を選ぶ際は、①金庫のメーカー・型番を伝えて対応できるかを確認する、②非破壊で開けられるか・開けた後に再使用できるかを尋ねる、③出張料を含む総額を作業前に提示してもらう、④所有者確認（身分証など）を行う業者かを確かめる、の4点で比べてください。電話での確認事項は<a href="/kagiya-erabikata/" className="text-primary underline">鍵屋・鍵業者の選び方</a>にまとめています。
          </p>

          {/* タイプ別の原因 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">金庫のタイプ別の開かない原因</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            金庫は施錠方式によって「開かない理由」の傾向がはっきり分かれます。お手持ちの金庫がどのタイプかを確認したうえで、該当する原因から順に確認していくと効率的です。
          </p>
          <div className="space-y-4 mb-10">
            {lockTypes.map((t, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{t.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* 自分で確認できること */}
          <h2 className="text-xl font-bold text-text-primary mb-4">業者に依頼する前にご自身で確認できること</h2>
          <div className="space-y-4 mb-10">
            {selfChecks.map((s, i) => (
              <div key={i} className="bg-surface-alt rounded-xl p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{i + 1}. {s.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* メーカー問い合わせ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">メーカー・購入元への問い合わせについて</h2>
          <div className="bg-white rounded-xl border border-black/10 p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              急がない場合は、メーカーや購入元への問い合わせも有力な方法です。多くの金庫メーカーは、<strong>型番と本人確認書類（購入証明や身分証など）</strong>を提示すると、ダイヤル番号の照会や合鍵の作成、解錠サービスに対応している場合があります。所有者確認の手続きがあるため日数はかかりますが、金庫を壊さずに済む確実性の高い方法です。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              一方、「今日中に中の書類が必要」など緊急性が高い場合は、出張対応の鍵業者に依頼するほうが現実的です。<strong>時間に余裕があればメーカー、急ぎなら鍵業者</strong>という使い分けを基本にすることをおすすめします。
            </p>
          </div>

          {/* NG行動 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">避けるべき行動</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            開かない焦りから力ずくで開けようとすると、かえって解錠の難度が上がり、費用も高くなります。次の行動は避けてください。
          </p>
          <div className="space-y-4 mb-10">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-600 mb-1.5">{i + 1}. {n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 業者に依頼する場合 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">業者に依頼する場合のポイント</h2>
          <div className="bg-surface-alt rounded-xl p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              金庫の解錠は、タイプ・メーカー・防盗性能によって作業難度が大きく変わるため、鍵開けの中でも<strong>料金幅が特に大きい</strong>作業です。電話やメールの段階で「メーカー・型番・施錠方式（ダイヤル/テンキー/鍵式など）・開かなくなった経緯」を伝え、出張料や割増を含めた<strong>総額の見積もり</strong>を確認してください。型番が伝わるだけで、現地での追加料金をめぐるトラブルを大幅に減らせます。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              あわせて、<strong>非破壊解錠か破壊解錠か、開けた後に金庫を再利用できるか</strong>も必ずご確認ください。非破壊なら中身も金庫もそのまま、破壊解錠でもシリンダー交換で再使用できる場合と、扉ごと破壊して買い替えになる場合があります。この点を見積もり時に明確に説明する業者は、信頼性が高いといえます。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              各社が公式サイトに表示している料金は<a href="/ryokin-index/" className="text-primary underline">料金インデックス</a>に、料金の内訳は<a href="/ryokin/" className="text-primary underline">料金ページ</a>にまとめています。業者選びの比較ポイントは<a href="/agents/" className="text-primary underline">業者比較ページ</a>をご覧ください。
            </p>
          </div>

          {/* 相続・遺品の金庫 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">相続・遺品の金庫を開ける場合の注意点</h2>
          <div className="bg-white rounded-xl border border-black/10 p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              所有者が亡くなった金庫を開ける場合、業者やメーカーから<strong>依頼者が相続人であることを確認できる書類</strong>（戸籍関係の書類や、故人との関係を示せるものなど）の提示を求められることがあります。第三者の金庫を無断で開けることを防ぐための手続きのため、事前に「遺品の金庫であること」を伝え、必要書類を確認しておくとスムーズです。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              また、中身が不明な金庫は<strong>開封時の記録を残す</strong>ことをおすすめします。現金や貴重品が入っていた場合、相続人間のトラブル防止や相続手続きの資料として役立つため、可能であれば複数の相続人が立ち会い、開封の様子や中身を写真・動画で記録しておくと安心です。重要書類（権利証・保険証券・遺言書など）が見つかった場合は、勝手に処分せず保管してください。
            </p>
          </div>

          {/* 業者選び・内部リンク */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">金庫の解錠に対応できる鍵業者を比較する</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              金庫解錠は技術差が出やすい作業です。金庫対応を明記し、見積もり無料・非破壊解錠の実績がある業者を中心に比較してください。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を詳しく見る</a>
              <a href="/kagi-funshitsu/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">鍵をなくした時の対処法</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">金庫の鍵開けに関するよくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-xl border border-black/10 overflow-hidden">
                <summary className="px-5 py-4 cursor-pointer font-medium text-text-primary text-sm">Q. {f.q}</summary>
                <div className="px-5 pb-4 text-sm text-text-secondary leading-relaxed">A. {f.a}</div>
              </details>
            ))}
          </div>
        </article>
      </main>

    </div>
  );
}
