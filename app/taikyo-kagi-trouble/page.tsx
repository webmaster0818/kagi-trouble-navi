import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "賃貸退去時の鍵トラブル｜返却・合鍵・紛失時の費用負担の基礎知識 | 鍵トラブルナビ",
  description:
    "賃貸住宅の退去時に起こりがちな鍵トラブルを一般知識として解説。鍵の返却ルール、自分で作った合鍵を含む全数返却の考え方、鍵を紛失していた場合の費用負担の一般論、敷金精算との関係、退去立ち会い前に確認すべきポイントを紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/taikyo-kagi-trouble/" },
};

const basics = [
  {
    title: "退去時の鍵返却は「借りたものを全部返す」が大原則",
    desc: "賃貸住宅の鍵は、部屋と同じく大家（貸主）から借りている物です。退去時には、入居時に受け取った鍵を本数どおりすべて返却するのが大原則で、返却のタイミングは退去立ち会いの場か、管理会社の指示する方法（郵送・持参など）によります。入居時に「鍵〇本貸与」と契約書や受領書に記載されているのが一般的なので、退去が決まったら、まず入居時の書類で借りた本数を確認しましょう。玄関だけでなく、物置・ポスト・自転車置き場など付帯設備の鍵も返却対象に含まれることがあります。",
  },
  {
    title: "自分で作った合鍵も「全数返却」を求められるのが一般的",
    desc: "入居中に自分の費用で作った合鍵（スペアキー）についても、退去時にはあわせて返却を求められるのが一般的です。理由は防犯上のもので、退去者の手元に合鍵が残っていると、次の入居者の安全を確保できないためです。合鍵を返し忘れたり、作ったことを申告しなかったりすると、貸主側が鍵交換の必要性を判断できず、トラブルの火種になります。家族に渡した分も含めて、退去前に合鍵の所在をすべて洗い出し、立ち会いまでに回収しておきましょう。返却後に手元の鍵をどうするか迷う場合は、鍵の処分方法の記事も参考になります。",
  },
  {
    title: "鍵を紛失していた場合の費用負担の一般論",
    desc: "借りた鍵を紛失したまま退去する場合、借主の責任による紛失として、シリンダー交換費用などの負担を求められることが一般的です。負担の有無や範囲は賃貸借契約書の定めによるため、まずは契約書の「鍵の紛失」「原状回復」に関する条項を確認しましょう。一方、通常の使用による鍵や錠の自然な摩耗・劣化まで借主が負担する性質のものではない、というのが原状回復の一般的な考え方（国土交通省の原状回復ガイドラインの整理）です。紛失に気づいたら退去立ち会いで指摘される前に自分から申告し、金額と根拠の説明を受けたうえで精算するのが、こじれないための基本です。",
  },
  {
    title: "敷金精算との関係｜相殺の内訳は明細で確認する",
    desc: "鍵の紛失などで借主負担の費用が発生した場合、敷金から差し引く形で精算されるのが一般的な流れです。このとき大切なのは、敷金精算書の明細で「何の費用が・いくら・どんな根拠で」差し引かれたのかを確認することです。契約書に鍵交換費用の負担に関する特約があるか、実際に紛失や破損があったのかによって妥当性は変わります。明細に不明点があれば、精算に同意する前に管理会社へ説明を求めましょう。当事者間で解決しない場合は、自治体の消費生活センターなどの相談窓口を利用する方法があります。",
  },
];

const checkSteps = [
  {
    title: "契約書と入居時の書類で「借りた鍵の本数」を確認する",
    desc: "賃貸借契約書・重要事項説明書・鍵の受領書で、貸与された鍵の本数と種類（玄関・ポスト・付帯設備）を確認します。あわせて、鍵紛失時の負担に関する条項や特約の有無もこの段階でチェックしておくと、立ち会い時に慌てません。",
  },
  {
    title: "手元の鍵と合鍵をすべて集めて本数を照合する",
    desc: "自分・家族・同居人が持つ鍵を全部集め、借りた本数＋自作の合鍵の数と照合します。不足があればこの時点で判明するので、紛失として申告する準備ができます。キーホルダーや車の鍵と混ざっていないかも確認しましょう。",
  },
  {
    title: "紛失・破損があれば立ち会い前に自分から申告する",
    desc: "鍵が足りない、鍵が曲がっている・欠けているといった問題は、退去立ち会いで指摘される前に管理会社へ連絡しておくのが誠実で、精算もスムーズです。負担が発生する場合は、金額の内訳と契約上の根拠を確認したうえで対応します。",
  },
  {
    title: "返却方法と精算明細の受け取り方を確認する",
    desc: "返却は立ち会い時の手渡しか、指定の方法によります。郵送返却を指示された場合は、追跡できる方法で送り、記録を残しましょう。敷金精算は後日明細が届くのが通常なので、鍵関連の費用が含まれていたら内訳を確認します。退去準備全体の流れは引っ越し時の鍵チェックリストの記事が役立ちます。",
  },
];

const ngActions = [
  {
    title: "合鍵を返さず手元に残す",
    desc: "退去後に前の部屋の合鍵を持ち続けることは、防犯上の問題に直結し、トラブルの原因になります。自作した合鍵も含めて全数を返却するのが原則です。",
  },
  {
    title: "紛失を隠して退去立ち会いに臨む",
    desc: "本数が合わなければ立ち会いで判明します。隠していたことでかえって話がこじれるため、紛失は事前に自分から申告し、負担の根拠と金額を確認して精算するのが得策です。",
  },
  {
    title: "無断で鍵を交換したまま退去する",
    desc: "入居中に許可なく鍵を交換していた場合、原状回復の問題になります。交換していた事実があるなら、退去前に管理会社へ申告し、元の鍵の扱いを含めて指示を仰ぎましょう。",
  },
  {
    title: "精算明細を確認せずに同意する",
    desc: "鍵交換費用などが敷金から差し引かれる場合、内訳や契約上の根拠を確認しないまま同意すると、後から疑問が生じても解決しにくくなります。明細の確認と質問は精算前に行いましょう。",
  },
];

const faqs = [
  {
    q: "退去時に合鍵も返さないといけませんか？",
    a: "自分の費用で作った合鍵も含めて、全数の返却を求められるのが一般的です。退去者の手元に鍵が残っていると次の入居者の防犯を確保できないためで、家族に渡した分も含めてすべて回収して返却しましょう。合鍵を作ったこと自体も、退去時に申告しておくのが誠実な対応です。",
  },
  {
    q: "鍵を1本なくしたまま退去します。費用はどのくらい負担するのでしょうか？",
    a: "借主の責任による紛失として、シリンダー交換費用などの負担を求められるのが一般的ですが、負担の有無・範囲・金額は契約書の定めと物件の鍵の種類によって異なります。まず契約書の紛失時条項を確認し、管理会社から金額の内訳と根拠の説明を受けたうえで精算してください。当サイトの賃貸の鍵交換費用の記事で、負担の考え方を詳しく解説しています。",
  },
  {
    q: "鍵の費用は敷金から引かれるのですか？",
    a: "借主負担となった鍵関連の費用は、敷金から差し引いて精算されるのが一般的な流れです。精算書の明細で項目と金額、契約上の根拠を確認し、不明点があれば同意の前に管理会社へ説明を求めましょう。通常使用による自然な摩耗・劣化は借主が負担する性質のものではない、というのが原状回復の一般的な整理です。話し合いで解決しない場合は、消費生活センターなどの窓口に相談する方法があります。",
  },
  {
    q: "退去時に鍵の返却を忘れてしまいました。どうすればいいですか？",
    a: "気づいた時点ですぐ管理会社へ連絡し、指示された方法で返却してください。郵送する場合は、普通郵便ではなく追跡できる方法を使い、送付の記録を残すのが安全です。返却が遅れると鍵交換費用の請求につながる可能性もあるため、放置は禁物です。連絡の際は、部屋番号・契約者名・返却する鍵の本数を伝えるとスムーズです。",
  },
];

const relatedLinks = [
  { href: "/chintai-kagi-koukan-hiyou/", label: "賃貸の鍵交換費用と負担の考え方", desc: "入居・紛失時の費用負担の一般論" },
  { href: "/kagi-shobun/", label: "不要になった鍵の処分方法", desc: "古い鍵・合鍵の安全な捨て方" },
  { href: "/hikkoshi-kagi-checklist/", label: "引っ越し時の鍵チェックリスト", desc: "退去・入居で確認すべき項目一覧" },
  { href: "/chintai-bouhan/", label: "賃貸でもできる防犯対策", desc: "新居の防犯を高める工夫" },
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
    { "@type": "ListItem", position: 2, name: "賃貸退去時の鍵トラブル" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "賃貸退去時の鍵トラブル｜返却・合鍵・紛失時の費用負担の基礎知識",
  description: "退去時の鍵返却ルール、合鍵の全数返却、紛失時の費用負担の一般論、敷金精算との関係と確認ポイントを一般知識として解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
};

export default function TaikyoKagiTroublePage() {
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
            <span className="text-text-secondary">賃貸退去時の鍵トラブル</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            賃貸退去時の鍵トラブル｜返却・合鍵・紛失時の費用負担の基礎知識
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月12日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：退去時は「借りた鍵＋自作の合鍵」を全数返却が原則。紛失していたら隠さず事前申告し、負担の根拠と金額を契約書・精算明細で確認する</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              賃貸の鍵は借り物です。退去時には入居時に受け取った本数どおりの返却に加え、<strong>自分で作った合鍵も全数返却</strong>を求められるのが一般的です。鍵を紛失していた場合は、借主の責任としてシリンダー交換費用などの負担を求められることが一般的ですが、<strong>負担の有無・範囲は契約書の定めによる</strong>ため、紛失時条項の確認が先。費用は敷金から差し引く精算が通常で、明細の内訳と根拠を確認してから同意するのがトラブル回避の基本です。通常使用による自然な摩耗まで借主負担とする性質のものではない、というのが原状回復の一般的な整理です。
            </p>
          </div>

          {/* 本文解説 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">退去時の鍵で押さえるべき基礎知識4つ</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            退去時の鍵トラブルは、「返す本数の食い違い」「合鍵の残存」「紛失時の費用」「敷金精算の内訳」の4か所で起こります。それぞれの一般的なルールと考え方を整理します。
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
          <h2 className="text-xl font-bold text-text-primary mb-4">退去前に自分でできる準備4ステップ</h2>
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
          <h2 className="text-xl font-bold text-text-primary mb-4">退去時の鍵でやってはいけないNG行動</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">NG: {n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 業者判断 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">業者・窓口に相談すべきケースと注意点</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            退去時の鍵の扱いは、原則として<strong>管理会社・大家との間で解決する事柄</strong>であり、借主が勝手に鍵業者を呼んで交換するのは避けるべきです。例外は、退去日直前に鍵を紛失して部屋に入れない・荷出しができないといった緊急時で、この場合も先に管理会社へ連絡し、対応方法の指示を受けてから動きましょう。費用負担の一般的な考え方は<a href="/chintai-kagi-koukan-hiyou/" className="text-primary underline">賃貸の鍵交換費用と負担の考え方</a>で、返却後に残った古い合鍵の扱いは<a href="/kagi-shobun/" className="text-primary underline">不要になった鍵の処分方法</a>で詳しく解説しています。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            緊急の鍵開けなどで業者に依頼する場合は、作業前に出張費・作業費を含む総額見積もりを必ず確認してください。費用感は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、依頼先の検討は<a href="/agents/" className="text-primary underline">鍵トラブル業者の比較</a>で確認できます。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">退去直前の鍵トラブルは、管理会社への連絡が最優先</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              紛失・破損に気づいたら、まず管理会社へ申告して指示を仰ぎましょう。緊急対応で業者を使う場合は、総額見積もりの事前確認が鉄則です。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">賃貸退去時の鍵のよくある質問</h2>
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
