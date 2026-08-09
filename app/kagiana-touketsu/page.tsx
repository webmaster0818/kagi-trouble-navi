import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "鍵穴の凍結・異物で鍵が開かないときの対処法｜お湯をかけるのはNG | 鍵トラブルナビ",
  description:
    "冬の朝に鍵穴が凍結して鍵が入らない・回らないときの対処法を一般知識として解説。解氷スプレー・カイロ・鍵を温める方法と、お湯をかけてはいけない理由（再凍結・部品の変形）、ガムやいたずらなど異物が詰まった場合の正しい対応まで紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/kagiana-touketsu/" },
};

const causes = [
  {
    title: "鍵穴内部の水分の凍結",
    desc: "前日の雨や雪、結露などで鍵穴内部に入り込んだ水分が氷点下で凍り付き、内部のピンやタンブラーの動きを固めてしまう現象です。鍵が途中までしか入らない、入っても回らない、という症状が典型です。寒冷地だけでなく、放射冷却で冷え込んだ朝には温暖な地域でも起こります。玄関ドアのほか、屋外に露出している門扉・物置・自転車の鍵でも起こりやすいトラブルです。",
  },
  {
    title: "ガム・接着剤などのいたずら・異物",
    desc: "鍵穴にガムや接着剤、爪楊枝や小石などを詰められるいたずら被害です。鍵が奥まで入らない、差した鍵がベタつく、鍵穴の入口に異物が見える、といった症状が出ます。接着剤が内部で固まった場合、シリンダー内部の精密な部品に固着してしまうため、自力での除去はほぼ不可能で、シリンダー交換になることが多いトラブルです。いたずらが疑われる場合は、警察への相談も検討しましょう。",
  },
  {
    title: "ほこり・砂・金属粉の蓄積",
    desc: "長年の使用で鍵穴内部にほこりや砂、鍵の摩耗で出た金属粉が溜まり、動きが渋くなるケースです。凍結や異物のような突発的な症状ではなく、「最近ずっと引っかかる」「差し込みが渋い」という形で徐々に進行します。放置すると鍵が抜けない・折れるといった二次トラブルにつながります。",
  },
];

const touketsuTaisho = [
  {
    title: "解氷スプレーを使う",
    desc: "最も確実性が高いのが、車のドア用などとして市販されている解氷スプレー（解氷剤）です。ノズルを鍵穴に当てて噴射すると、アルコール分が氷を溶かして動きを回復させます。寒冷地では車内や玄関先ではなく持ち歩き用に1本用意しておくと安心です。使用後は水分が残りやすいため、後述の鍵穴専用潤滑剤でのメンテナンスまでできると理想的です。",
  },
  {
    title: "カイロやドライヤーで鍵穴を温める",
    desc: "使い捨てカイロを鍵穴（シリンダー部分）に押し当てて数分温めると、内部の氷が溶けて動くようになります。電源が取れる場所なら、ドライヤーの温風を離し気味に当てる方法もあります。金属部分は熱くなりすぎることがあるため、手袋をして少しずつ温めるのがポイントです。",
  },
  {
    title: "鍵（キー）自体を温めてから差す",
    desc: "金属製の鍵をカイロやライターの遠火などで人肌より少し熱い程度に温めてから差し込むと、鍵が熱を伝えて内部の氷を溶かします。一度で溶けなければ、温め直して数回繰り返します。熱しすぎると火傷や鍵の変形につながるため、あくまで「温める」程度にとどめてください。プラスチック部分やスマートキーの電子部品を火に近づけるのは厳禁です。",
  },
  {
    title: "解けた後は水分を飛ばし専用潤滑剤で仕上げる",
    desc: "氷が解けて動くようになっても、内部に水分が残っていると夜にまた凍ります。エアダスターで水分を吹き飛ばすか、しばらくドアを開けた状態で乾燥させ、仕上げに鍵穴専用のパウダースプレー（乾式潤滑剤）を注しておくと再発防止になります。",
  },
];

const ngActions = [
  {
    title: "鍵穴にお湯をかける",
    desc: "「氷はお湯で溶かす」という発想で鍵穴やドアノブにお湯をかけるのは絶対に避けてください。かけた直後は解けても、内部に入り込んだ水分が外気で冷やされて再凍結し、かける前より広範囲ががっちり凍り付きます。さらに、急激な温度変化はシリンダー内部の精密部品の変形や、ドアの塗装・パッキンの劣化を招くおそれもあります。応急のつもりが症状を確実に悪化させる、冬の鍵トラブルで最も多い失敗です。",
  },
  {
    title: "力ずくで鍵を回す・叩く",
    desc: "凍結や異物で固まった状態のまま力任せに回すと、鍵が鍵穴の中で折れてしまいます。折れた鍵の破片が内部に残ると、解錠に加えて破片の摘出やシリンダー交換が必要になり、被害が一気に拡大します。「いつもより固い」と感じた時点で、無理に回すのをやめるのが鉄則です。",
  },
  {
    title: "ライターの火で鍵穴を直接あぶる",
    desc: "鍵穴を直接火であぶると、シリンダー表面の樹脂部品やドアの塗装を傷め、内部のグリスを劣化させます。温める場合は鍵のほうを適温にする、カイロを使うなど、間接的な方法にとどめましょう。",
  },
  {
    title: "異物を針金や爪楊枝でほじり出す",
    desc: "ガムや接着剤、詰められた異物を針金・つまようじ・ピンセットなどでほじるのはやめましょう。異物をさらに奥へ押し込んだり、道具の先端が折れて新たな異物になったりして、業者でも非破壊で対応できなくなる典型的な悪化パターンです。鍵穴の入口に見えていて簡単につまめる物以外は、手を出さないのが正解です。",
  },
  {
    title: "食用油や一般の潤滑油スプレーを注す",
    desc: "動きが渋いからといって、家庭用の潤滑油スプレーやサラダ油、機械油を鍵穴に注ぐのはNGです。油分がほこりや金属粉を吸着して内部で固まり、症状を悪化させます。鍵穴に使ってよいのは、鍵穴専用として売られている乾式（パウダータイプ）の潤滑剤だけと覚えてください。",
  },
];

const faqs = [
  {
    q: "鍵穴が凍結して鍵が回りません。すぐできる対処法はありますか？",
    a: "解氷スプレーがあれば鍵穴に噴射するのが最も確実です。なければ、使い捨てカイロを鍵穴に数分押し当てる、鍵自体を温めてから差し込む方法が有効です。お湯をかけるのは再凍結と部品変形のもとになるため絶対に避けてください。",
  },
  {
    q: "鍵穴にお湯をかけてはいけないのはなぜですか？",
    a: "かけた直後は氷が解けても、内部に残った水分が外気で冷えて再凍結し、以前より広範囲が固く凍り付くためです。急激な温度変化によるシリンダー内部部品の変形や、ドアの塗装・パッキンの劣化を招くおそれもあります。",
  },
  {
    q: "鍵穴の凍結を予防する方法はありますか？",
    a: "鍵穴専用の乾式潤滑剤（パウダースプレー）を定期的に注しておくと、水分が内部に留まりにくくなります。凍結しやすい環境では、鍵穴に養生テープなどで簡易的なカバーをする、防水性のある鍵穴カバー付き錠前を使うといった対策も有効です。油性の潤滑剤は逆効果なので使わないでください。",
  },
  {
    q: "鍵穴にガムや接着剤を詰められました。自分で取れますか？",
    a: "自力での除去はおすすめできません。針金などでほじると異物が奥に入り込み、状況が悪化します。特に接着剤は内部の精密部品に固着するため、シリンダー交換になるケースが多いです。いたずらが疑われる場合は警察への相談も検討しつつ、鍵業者に状況を伝えて見積もりを取りましょう。",
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
    { "@type": "ListItem", position: 2, name: "鍵穴の凍結・異物で鍵が開かないときの対処" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "鍵穴の凍結・異物で鍵が開かないときの対処法",
  description: "冬季の鍵穴凍結への解氷スプレー・カイロでの対処、お湯かけがNGな理由、異物・いたずら被害の正しい対応を解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-09",
  dateModified: "2026-08-09",
};

export default function KagianaTouketsuPage() {
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
            <span className="text-text-secondary">鍵穴の凍結・異物で鍵が開かないときの対処</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            鍵穴の凍結・異物で鍵が開かないときの対処法｜お湯をかけるのはNG
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月9日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：凍結は「温めて溶かす」、異物は「ほじらない」</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              冬の鍵穴凍結は、<strong>解氷スプレー・カイロ・温めた鍵</strong>で氷を溶かせば自力で解決できることが多いトラブルです。ただし<strong>お湯をかけるのは再凍結と部品変形を招くため厳禁</strong>。一方、ガム・接着剤などの<strong>異物は自力でほじると悪化する</strong>ため、無理をせず業者に依頼するのが基本です。力ずくで回すと鍵折れという二次被害につながります。
            </p>
          </div>

          <p className="text-sm text-text-secondary leading-relaxed mb-8">
            寒い朝に限って鍵が回らない、帰宅したら鍵穴に何かが詰まっている。鍵穴のトラブルは突然やってきます。原因が「凍結」なのか「異物」なのかで正しい対処がまったく異なり、間違った応急処置は症状を確実に悪化させます。この記事では、原因の見分け方から自力でできる対処、やってはいけないNG行動、業者に頼む判断までを一般知識として解説します。
          </p>

          {/* 原因 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵穴が詰まる・固まる主な原因</h2>
          <div className="space-y-4 mb-10">
            {causes.map((c, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{i + 1}. {c.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* 凍結対処 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">凍結が原因のとき自分でできる対処法</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            凍結は「氷を安全に溶かす」ことができれば自力解決の可能性が高いトラブルです。以下の方法を、用意できるものから試してください。共通の注意点は「急激に高温にしない」ことです。
          </p>
          <div className="space-y-4 mb-10">
            {touketsuTaisho.map((t, i) => (
              <div key={i} className="bg-surface-alt rounded-xl p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{i + 1}. {t.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* 異物対処 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">異物（ガム・いたずら）が原因のときの対応</h2>
          <div className="bg-white rounded-xl border border-black/10 p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              異物詰まりは凍結と違い、<strong>自力対応の範囲がとても狭い</strong>トラブルです。鍵穴の入口に見えていて、指やピンセットで「つまむだけで取れる」物であれば取り除いても構いません。しかし、奥に入り込んだ物や粘着質の物（ガム・接着剤）は、ほじるほど奥へ押し込まれ、シリンダー内部の精密部品に絡んで固着します。こうなると業者でも非破壊での復旧が難しくなり、シリンダー交換の費用と時間がかかります。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              また、接着剤を詰められた・複数の家で同様の被害があるなど<strong>いたずら・嫌がらせが疑われる場合は、警察への相談（被害届）も検討</strong>してください。賃貸住宅であれば、業者を手配する前に管理会社・大家へ連絡するのが原則です。建物側の設備であるため、費用負担や修理の手配方法が契約で決まっている場合があります。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              「鍵は入るが回らない」「引っかかりが徐々にひどくなってきた」という場合は、異物ではなく内部の汚れや摩耗が原因のこともあります。症状別の対処は<a href="/kagi-mawaranai/" className="text-primary underline">鍵が回らない・重いときの対処法</a>で詳しく解説しています。
            </p>
          </div>

          {/* NG行動 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">やってはいけないNG行動5つ</h2>
          <div className="space-y-4 mb-10">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-600 mb-1.5">NG{i + 1}. {n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 業者判断 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">業者に依頼する判断基準と選び方</h2>
          <div className="bg-surface-alt rounded-xl p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              次のいずれかに当てはまったら、自力対応を切り上げて鍵業者に依頼するタイミングです。<strong>①解氷を試しても回らない・入らない、②異物が奥に入り込んでいる・接着剤が疑われる、③鍵が中で折れてしまった、④凍結対処後も引っかかりが続く</strong>。特に③の鍵折れは、放置すると破片が奥へ移動して摘出の難度が上がるため早めの依頼が得策です。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              依頼時は「凍結か・異物か・鍵折れか」「玄関か・勝手口か・車か」「鍵の種類（刻みキーかディンプルキーか）」を伝えると、対応可否と見積もりの精度が上がります。電話の段階で、出張費・時間帯割増を含めた<strong>総額の見積もり</strong>を確認し、現地での大幅な上乗せがないかをチェックしましょう。異物固着でシリンダー交換になる場合は、交換部品のグレードによって費用が変わる点も事前に確認しておくと安心です。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              作業別の費用感は<a href="/ryokin/" className="text-primary underline">料金相場ページ</a>、優良業者の見分け方は<a href="/agents/" className="text-primary underline">業者比較ページ</a>にまとめています。
            </p>
          </div>

          {/* 内部リンクCTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">鍵穴トラブルに対応できる鍵業者を比較する</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              凍結・異物・鍵折れは非破壊対応の技術力で差が出ます。見積もり無料で総額を提示し、シリンダー交換の要否を説明してくれる業者を選びましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を詳しく見る</a>
              <a href="/kagi-mawaranai/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">鍵が回らないときの対処法</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵穴の凍結・異物に関するよくある質問</h2>
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
              { href: "/kagi-mawaranai/", label: "鍵が回らない・重いときの対処法" },
              { href: "/kagi-ore/", label: "鍵が折れたときの対処法" },
              { href: "/kagi-koukan-timing/", label: "鍵交換のタイミングと判断基準" },
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
