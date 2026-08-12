import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "店舗・オフィスの鍵管理の基礎知識｜退職時の交換・マスターキー・電子錠化 | 鍵トラブルナビ",
  description:
    "店舗・オフィスの鍵管理を一般知識として解説。鍵管理台帳による貸与管理、従業員退職時に交換を検討すべきケース、マスターキーシステムの仕組み、電子錠・スマートロック化を検討する際の判断軸を紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/tenpo-office-kagi-kanri/" },
};

const basics = [
  {
    title: "鍵管理の出発点は「誰に何本貸与しているか」の台帳化",
    desc: "店舗・オフィスの鍵管理で最初に整えるべきは、鍵の貸与状況を記録する管理台帳です。鍵ごとに管理番号を振り、「どの扉の鍵を・誰に・いつ・何本貸与し・いつ返却されたか」を記録します。貸与時と返却時に本人のサインをもらう運用にすると、紛失や返し忘れが発生したときに責任の所在と影響範囲をすぐ特定できます。台帳がないまま合鍵を作り足していくと、鍵の総数すら分からなくなり、退職者対応も交換判断もできなくなります。紙でもスプレッドシートでも構わないので、現時点の貸与状況の棚卸しから始めましょう。",
  },
  {
    title: "従業員退職時の交換判断｜返却されても安心とは限らない",
    desc: "退職者から鍵が返却されれば形式上は完結しますが、在職中に無断で合鍵を作られていた可能性はゼロにできません。一般的な刻みキーは市中の合鍵店で複製できるためです。そのため、金銭や重要情報を扱う区画の鍵、返却されなかった鍵、退職の経緯にトラブルがあった場合などは、シリンダー交換や鍵違いへの変更を検討するのが安全側の判断です。複製に本人確認や登録が必要な登録制シリンダーを採用しておくと、無断複製のリスク自体を下げられ、退職のたびに交換する負担も軽減できます。",
  },
  {
    title: "マスターキーシステムの一般知識｜利便性とリスクの両面",
    desc: "マスターキーシステムは、各部屋の鍵はその部屋しか開けられない一方、マスターキー1本で複数の扉を開けられるように設計された錠のシステムです。管理者の持ち歩く鍵を減らせる、清掃や巡回の動線が簡単になるといった利点があり、オフィスビルや店舗のバックヤード管理で広く使われています。ただし、マスターキーを1本紛失すると影響が全区画に及び、関係するシリンダー一式の交換が必要になり得るという集中リスクを抱えます。マスターキーの保管者を限定し、持ち出し記録を付けるなど、通常の鍵より厳格な管理が前提のシステムです。",
  },
  {
    title: "電子錠・スマートロック化の検討軸",
    desc: "暗証番号・ICカード・スマートフォンなどで解錠する電子錠やスマートロックは、物理鍵の貸与・回収という管理業務自体をなくせるのが最大の利点です。退職時は権限を削除するだけで済み、誰がいつ解錠したかの履歴が残る製品も多く、店舗の売上金管理区画やオフィスのサーバー室との相性が良い仕組みです。検討軸は、対象の扉の数と種類（防火扉や自動ドアは適合に注意）、停電・電池切れ時の非常用解錠手段の有無、既存の錠を残す後付け型か錠ごと入れ替える型か、初期費用と運用費のバランス、の4点が基本です。電池切れ時の対応は電子錠の電池切れの記事で詳しく解説しています。",
  },
];

const checkSteps = [
  {
    title: "鍵の総数と貸与先を棚卸しして台帳を作る",
    desc: "全扉の鍵について、原鍵と合鍵の本数、保管場所、貸与先を洗い出して台帳化します。この時点で所在不明の鍵が見つかったら、その扉のシリンダー交換を検討する候補になります。",
  },
  {
    title: "貸与・返却のルールを文書化して周知する",
    desc: "貸与時のサイン、退職・異動時の返却期限、紛失時の即時報告義務、合鍵の無断作成禁止をルールとして文書化し、従業員に周知します。ルールが明文化されているだけで、鍵の扱いに対する意識は大きく変わります。",
  },
  {
    title: "重要区画とそれ以外で管理レベルを分ける",
    desc: "金庫周り・事務所・サーバー室・薬品や在庫の保管庫など、被害が大きい区画を特定し、登録制シリンダーや電子錠など高い管理レベルを割り当てます。全扉を一律に厳重化するより、費用対効果の高い設計になります。",
  },
  {
    title: "退職・紛失時の対応フローを事前に決めておく",
    desc: "「返却確認→台帳更新→必要に応じて交換判断」という退職時フロー、「即時報告→影響範囲の特定→交換手配」という紛失時フローをあらかじめ決めておくと、発生時に迷いません。交換判断の目安は鍵交換のタイミングの記事も参考になります。",
  },
];

const ngActions = [
  {
    title: "台帳なしで合鍵を作り足していく",
    desc: "記録のない合鍵は、紛失しても気づけず、退職者対応の抜け穴になります。合鍵の作成は台帳への記録とセットで行い、無断作成は就業ルールで禁止しましょう。",
  },
  {
    title: "退職者の鍵返却を口頭確認だけで済ませる",
    desc: "返却の記録が残っていないと、後から「返した・返していない」の水掛け論になります。返却時は台帳に日付とサインを残し、本数を照合するのが基本です。",
  },
  {
    title: "マスターキーを複数人で共有して持ち歩く",
    desc: "マスターキーは紛失時の影響が全区画に及ぶ特別な鍵です。保管者を限定し、持ち出しを記録せずに日常的に共有する運用は、システム全体をリスクにさらします。",
  },
  {
    title: "紛失が起きても「見つかるだろう」と交換を先送りする",
    desc: "店舗・オフィスの鍵の紛失は、盗難・侵入につながる経営リスクです。影響範囲を特定し、重要区画に関わる紛失なら速やかに交換を判断しましょう。",
  },
];

const faqs = [
  {
    q: "従業員が退職するたびに鍵を交換すべきですか？",
    a: "全退職者について一律に交換する必要はありませんが、判断基準を決めておくべきです。一般的には、鍵が返却されなかった場合、金銭・重要情報を扱う区画の鍵を貸与していた場合、退職の経緯にトラブルがあった場合は交換を検討するのが安全側です。複製に登録が必要な登録制シリンダーや、権限削除だけで済む電子錠を導入すると、退職のたびの交換負担を減らせます。",
  },
  {
    q: "マスターキーシステムとはどんな仕組みですか？",
    a: "各部屋の個別鍵はその部屋だけを開けられ、マスターキー1本で複数の扉を開けられるように設計された錠のシステムです。管理者の鍵の持ち歩きを減らせる利点がある一方、マスターキーを紛失すると影響が全区画に及び、関係するシリンダー一式の交換が必要になり得ます。保管者の限定と持ち出し記録など、通常より厳格な管理が前提です。導入・変更は錠のシステム設計を伴うため、鍵の専門業者への相談が確実です。",
  },
  {
    q: "店舗の鍵管理を電子錠にするメリット・デメリットは？",
    a: "メリットは、物理鍵の貸与・回収業務がなくなること、退職時に権限削除だけで済むこと、解錠履歴が残る製品なら入退室の把握もできることです。デメリットは、初期費用と電池・保守の運用負担、停電・電池切れ時の対応を設計しておく必要があることです。扉の種類によっては後付けできない場合もあるため、導入前に適合確認と非常時の解錠手段の確認が必須です。",
  },
  {
    q: "事務所の鍵を従業員が紛失しました。まず何をすべきですか？",
    a: "まず台帳で紛失した鍵が開けられる扉の範囲を特定し、金銭・重要情報に関わる区画が含まれるなら、シリンダー交換を速やかに検討します。あわせて紛失の経緯を確認し、盗難の可能性があれば警察への届け出も行います。再発防止として、報告義務と対応フローの周知、重要区画の登録制シリンダー化・電子錠化を検討するとよいでしょう。",
  },
];

const relatedLinks = [
  { href: "/denshijou-denchigire/", label: "電子錠の電池切れ対応", desc: "電子錠運用の必須知識はこちら" },
  { href: "/key-box-kanri/", label: "キーボックスでの鍵管理", desc: "物理鍵の保管・共有の基礎知識" },
  { href: "/smart-lock/", label: "スマートロックの基礎知識", desc: "後付け電子錠化の選択肢を知る" },
  { href: "/kagi-koukan-timing/", label: "鍵交換のタイミングと目安", desc: "交換を検討すべきサインと考え方" },
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
    { "@type": "ListItem", position: 2, name: "店舗・オフィスの鍵管理" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "店舗・オフィスの鍵管理の基礎知識｜退職時の交換・マスターキー・電子錠化",
  description: "鍵管理台帳による貸与管理、従業員退職時の交換判断、マスターキーシステムの仕組みとリスク、電子錠化の検討軸を一般知識として解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
};

export default function TenpoOfficeKagiKanriPage() {
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
            <span className="text-text-secondary">店舗・オフィスの鍵管理</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            店舗・オフィスの鍵管理の基礎知識｜退職時の交換・マスターキー・電子錠化
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月12日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：事業所の鍵管理は「台帳化→貸与・返却ルール→重要区画の重点強化」の順で整える。退職時は返却確認だけでなく、区画の重要度に応じた交換判断を</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              店舗・オフィスの鍵管理の土台は、<strong>誰に・どの扉の鍵を・何本貸与しているかの台帳化</strong>です。そのうえで貸与・返却・紛失報告のルールを文書化し、金銭や重要情報を扱う区画には登録制シリンダーや電子錠など高い管理レベルを割り当てます。従業員退職時は、返却されても無断複製の可能性は残るため、<strong>重要区画・未返却・トラブル退職のケースでは交換を検討</strong>するのが安全側の判断。マスターキーは利便性と引き換えに紛失時の影響が全区画に及ぶため、保管者の限定と持ち出し記録が前提です。
            </p>
          </div>

          {/* 本文解説 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">事業所の鍵管理で押さえる基礎知識4つ</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            住宅と違い、事業所の鍵は「複数人で使い、人が入れ替わる」のが前提です。台帳・退職対応・マスターキー・電子錠化という4つのテーマを順に整理します。
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
          <h2 className="text-xl font-bold text-text-primary mb-4">自社でできる鍵管理の整備4ステップ</h2>
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
          <h2 className="text-xl font-bold text-text-primary mb-4">事業所の鍵管理でやってはいけないNG行動</h2>
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
            <strong>マスターキーシステムの導入・再設計、登録制シリンダーへの切り替え、複数扉の一括交換、電子錠・スマートロックの適合確認と施工</strong>は、錠のシステム設計を伴うため鍵の専門業者への相談が確実です。扉の数・種類と管理上の課題（退職対応の負担、履歴の必要性など）を整理して伝えると、提案の精度が上がります。電子錠運用の注意点は<a href="/denshijou-denchigire/" className="text-primary underline">電子錠の電池切れ対応</a>を、物理鍵の保管・共有の工夫は<a href="/key-box-kanri/" className="text-primary underline">キーボックスでの鍵管理</a>をあわせて参考にしてください。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            複数扉の工事は範囲によって費用が大きく変わるため、作業前に部品代・作業費・出張費を含む総額見積もりを必ず確認し、可能なら複数社で比較しましょう。費用感は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、依頼先の検討は<a href="/agents/" className="text-primary underline">鍵トラブル業者の比較</a>で確認できます。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">鍵管理の見直しは、台帳の棚卸しと専門業者への相談から</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              扉の一覧と貸与状況を整理してから相談すると、交換範囲やシステム提案の見積もりがスムーズです。作業前の総額見積もり確認を忘れずに。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">店舗・オフィスの鍵管理のよくある質問</h2>
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
