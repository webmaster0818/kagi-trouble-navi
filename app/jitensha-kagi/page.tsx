import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "自転車の鍵をなくした・開かないときの対処法｜防犯登録と本人確認の基礎知識 | 鍵トラブルナビ",
  description:
    "自転車の鍵をなくした・開かないときの対処法を一般知識として解説。防犯登録と本人確認がなぜ重要か、鍵の切断を依頼するときに求められるもの、ワイヤー錠・U字ロック・リング錠（馬蹄錠）の構造の違い、スペアキー・購入店・メーカー取り寄せといった選択肢を順序立てて紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/jitensha-kagi/" },
};

const basics = [
  {
    title: "最初に確認すべきは「自分の自転車だと証明できるか」",
    desc: "自転車の鍵トラブルで最も重要になるのが所有者証明です。自転車には法律に基づく防犯登録の制度があり、車体番号と所有者情報が都道府県の登録システムに紐づいています。鍵をなくして開けられなくなった自転車は、第三者から見れば盗難車の可能性と区別がつきません。そのため鍵屋への解錠・切断依頼でも、購入店やメーカーへの相談でも、防犯登録カード（お客様控え）や販売証明書、身分証明書などで「自分の自転車である」と示せることが、あらゆる対処の出発点になります。防犯登録カードの保管場所を普段から把握しておくことが、いざというときの解決スピードを大きく左右します。",
  },
  {
    title: "リング錠（馬蹄錠）は後輪に固定された「箱型の錠前」",
    desc: "シティサイクル（ママチャリ）の後輪に標準装備されていることが多いのがリング錠で、馬蹄錠とも呼ばれます。後輪を囲むように車体へボルト留めされており、かんぬき（閂）がスポークの間を貫通してタイヤの回転を止める構造です。車体に固定されているため持ち去り防止にはなりませんが、常に自転車と一体なので掛け忘れが起きにくいのが特徴です。鍵をなくした場合は錠前ごと破壊・取り外しをして新品に交換するのが基本的な流れで、錠前自体は自転車店で交換部品として広く扱われています。",
  },
  {
    title: "ワイヤー錠・チェーン錠は「柱などに繋ぐ」ための携帯型",
    desc: "ワイヤー錠・チェーン錠は、車体と構造物（駐輪ラックや柱など）を繋いで持ち去りを防ぐ携帯型の鍵です。ダイヤル式と鍵式があり、ダイヤル式なら番号を思い出せれば道具なしで開けられます。細いワイヤーは切断されやすいため防犯性は太さと素材に依存し、あくまで補助錠という位置づけが一般的です。鍵をなくした場合、自分の所有物であることを前提に切断して外すという選択が取りやすいのもこのタイプで、切断後は新しいものに買い替えるのが現実的です。",
  },
  {
    title: "U字ロックは頑丈さゆえに「なくしたときの難度」も高い",
    desc: "U字ロック（シャックルロック）は、焼き入れ鋼などの太い金属シャックルで構成される防犯性の高い鍵です。ワイヤーカッター程度では切断できないものが多く、盗難対策としては優秀ですが、裏を返せば鍵をなくしたときに自力でどうにかするのが最も難しいタイプでもあります。無理にこじろうとすると車体のフレームやリムを傷めるだけなので、スペアキーを探す、メーカーの合鍵サービス（鍵番号からの取り寄せに対応している製品があります）を確認する、鍵の専門業者に解錠・切断を依頼する、といった選択肢を検討することになります。",
  },
];

const checkSteps = [
  {
    title: "スペアキーと鍵番号（キーナンバー）を確認する",
    desc: "自転車の鍵の多くは購入時にスペアキーが付属しています。まずは自宅の保管場所を確認しましょう。また、鍵本体やパッケージに刻印された鍵番号が分かれば、メーカーによっては番号から合鍵を取り寄せられる製品もあります。ダイヤル式なら番号のメモや写真が残っていないかも確認を。この段階で解決できれば費用も手間も最小で済みます。",
  },
  {
    title: "購入店・自転車店に相談する",
    desc: "リング錠の交換や鍵まわりの作業は、街の自転車店でも広く対応されています。購入店なら販売記録から所有者確認がしやすく、防犯登録の控えと身分証を持参すればスムーズです。錠前の破壊・交換を伴う場合も、自転車の構造を熟知した店に任せられる安心感があります。持ち込みが必要になるため、施錠されたままの自転車を店まで運べるか（後輪ロックなら前輪を持ち上げて押す等）も考えておきましょう。",
  },
  {
    title: "動かせない・持ち込めない場合は出張対応の鍵業者を検討する",
    desc: "U字ロックで構造物に繋がれている、駐輪場から動かせないといった場合は、現場に来てもらえる出張型の鍵業者への依頼が選択肢になります。依頼時には防犯登録カードや身分証による所有者確認を求められるのが通常で、これは盗難への加担を防ぐための正当な手続きです。作業内容（解錠か切断か）、鍵や錠前の状態、作業前の総額見積もりを必ず確認してから依頼しましょう。",
  },
  {
    title: "解決後は「次」に備える",
    desc: "鍵を新しくしたら、スペアキーの保管場所を決める、鍵番号を写真に残す、ダイヤル番号を安全な場所に記録するなど、再発への備えをしておきましょう。防犯登録カードの控えも一緒に保管しておくと、次にトラブルが起きたときの所有者確認が格段に楽になります。防犯性を上げたい場合は、リング錠＋ワイヤー錠のように種類の異なる鍵を併用する二重ロックが一般的な推奨です。",
  },
];

const ngActions = [
  {
    title: "所有者確認を省略して「とにかく壊してほしい」と迫る",
    desc: "所有者確認は業者や店が盗難に加担しないための必須手続きです。確認なしで切断を引き受ける相手のほうがむしろ危険です。防犯登録の控えや身分証を用意し、正規の手順で依頼しましょう。",
  },
  {
    title: "工具で無理にこじ開けようとして車体を傷める",
    desc: "ドライバーやハンマーでリング錠やU字ロックを無理にこじると、スポークやフレーム、リムを傷めて修理費用がかさむ原因になります。錠前より車体のほうが高価であることがほとんどです。破壊するにしても、適切な工具と手順を知る専門店・業者に任せるほうが結果的に安く済みます。",
  },
  {
    title: "放置自転車や他人の自転車の鍵に手を出す",
    desc: "自分の所有と証明できない自転車の鍵を開ける・壊す行為は、窃盗や器物損壊を疑われる重大なリスクがあります。家族の自転車であっても、依頼時には所有者本人の同意と証明書類が必要と考えておきましょう。",
  },
  {
    title: "鍵穴に食用油や汎用潤滑スプレーを注す",
    desc: "鍵が回りにくいときに油を注すのは典型的なNG行為です。油分がホコリを抱き込んで固まり、症状を悪化させます。屋外に置く自転車の鍵穴は特に砂ぼこりを吸い込みやすいため、使うなら鍵穴専用のパウダー系潤滑剤にとどめましょう。",
  },
];

const faqs = [
  {
    q: "自転車の鍵をなくしたら、まず何をすればいいですか？",
    a: "最初にスペアキーと鍵番号の確認、次に防犯登録カード（お客様控え）と身分証の用意です。そのうえで、自転車を動かせるなら購入店や自転車店への持ち込み、動かせないなら出張対応の鍵業者への依頼を検討します。どの窓口でも所有者確認を求められるのが通常なので、証明書類を先に揃えておくと解決までが早くなります。",
  },
  {
    q: "防犯登録の控えをなくしてしまいました。それでも依頼できますか？",
    a: "防犯登録カードがなくても、身分証や販売証明書・保証書・購入時のレシートやメール履歴など、所有を裏付ける材料を組み合わせて確認してもらえる場合があります。対応の可否や必要書類は店舗・業者によって異なるため、依頼前に電話で確認しましょう。あわせて、防犯登録の内容確認や再登録の手続きについては、お住まいの都道府県の防犯登録会や自転車販売店に相談できます。",
  },
  {
    q: "リング錠（馬蹄錠）の鍵だけをなくした場合、錠前ごと交換になりますか？",
    a: "リング錠は構造上、鍵をなくすと錠前ごと破壊して取り外し、新品に交換するのが一般的な流れです。メーカーや製品によっては鍵番号から合鍵を取り寄せられる場合もあるため、鍵番号が分かるなら先に確認する価値があります。交換用のリング錠は自転車店で広く扱われており、取り付けまで依頼できます。",
  },
  {
    q: "ダイヤル式ワイヤー錠の番号を忘れました。どうすればいいですか？",
    a: "番号のメモや設定時の写真が残っていないかをまず確認しましょう。思い出せない場合は、所有者であることを前提に切断して外し、新しい鍵に買い替えるのが現実的です。総当たりで探す方法も理屈上はありますが、桁数が多いと膨大な時間がかかります。切断を店や業者に依頼する場合は、他の鍵と同様に所有者確認の書類を用意してください。",
  },
];

const relatedLinks = [
  { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処法", desc: "紛失時の探し方と届け出の基本手順" },
  { href: "/bike-kagi-funshitsu/", label: "バイクの鍵をなくしたときの対処法", desc: "原付・バイクの鍵紛失の対処" },
  { href: "/kagi-shurui-zukan/", label: "鍵の種類図鑑", desc: "鍵の構造と防犯性の基礎知識" },
  { href: "/ryokin/", label: "鍵開け・鍵交換の料金相場", desc: "依頼前に知っておきたい費用の考え方" },
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
    { "@type": "ListItem", position: 2, name: "自転車の鍵をなくした・開かないとき" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "自転車の鍵をなくした・開かないときの対処法｜防犯登録と本人確認の基礎知識",
  description: "自転車の鍵紛失時の対処手順、防犯登録による所有者証明の重要性、リング錠・ワイヤー錠・U字ロックの構造の違いと切断依頼の一般知識を解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-10",
  dateModified: "2026-08-10",
};

export default function JitenshaKagiPage() {
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
            <span className="text-text-secondary">自転車の鍵をなくした・開かないとき</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            自転車の鍵をなくした・開かないときの対処法｜防犯登録と本人確認の基礎知識
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月10日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：スペアキー・鍵番号の確認→所有者証明の用意→自転車店か出張鍵業者へ。所有者確認が全ての前提</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              自転車の鍵をなくしたら、まず<strong>スペアキーと鍵番号を確認</strong>し、次に<strong>防犯登録カード（お客様控え）と身分証</strong>を用意します。自転車を動かせるなら自転車店への持ち込み、動かせないなら出張対応の鍵業者への依頼が基本の選択肢です。リング錠（馬蹄錠）は錠前ごと交換、ワイヤー錠は切断して買い替え、U字ロックは頑丈なぶん専門業者への依頼が現実的、とタイプごとに対処が変わります。どの窓口でも<strong>所有者確認は必須の手続き</strong>なので、証明書類を先に揃えるのが最短ルートです。
            </p>
          </div>

          {/* 本文解説 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">自転車の鍵トラブルの基礎知識｜押さえておきたい4つのポイント</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            自転車の鍵は、玄関の鍵と違って「所有者証明」と「鍵のタイプ」で対処がほぼ決まります。防犯登録の仕組みと、リング錠・ワイヤー錠・U字ロックそれぞれの構造の違いを押さえておきましょう。
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
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵をなくしたときの対処4ステップ</h2>
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
          <h2 className="text-xl font-bold text-text-primary mb-4">業者に依頼すべきケースと依頼時の注意</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            U字ロックなど頑丈な鍵で構造物に繋がれている、駐輪場から動かせない、深夜早朝で自転車店が開いていない、といった場合は<strong>出張対応の鍵業者への依頼が現実的</strong>です。依頼時には防犯登録カードや身分証による所有者確認が求められ、作業は解錠または切断＋新しい鍵への交換という流れになります。玄関の鍵と同じく、作業前に部品代・作業費・出張費を含む総額見積もりを確認してから正式依頼するのが鉄則です。なお、家の鍵も一緒になくした場合は、悪用リスクへの対応も含めて<a href="/kagi-funshitsu/" className="text-primary underline">鍵をなくしたときの対処法</a>を先に確認してください。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            費用感の考え方は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、依頼先の検討は<a href="/agents/" className="text-primary underline">鍵トラブル業者の比較</a>で確認できます。見積もりの内訳と追加料金の条件を確認してから依頼しましょう。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">動かせない自転車の鍵は、出張対応の業者に相談を</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              防犯登録カードと身分証を手元に用意し、鍵のタイプと状況を伝えたうえで、作業前の総額見積もりを確認してから依頼しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">自転車の鍵のよくある質問</h2>
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
