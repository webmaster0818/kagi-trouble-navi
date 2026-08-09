import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "電子錠の電池切れ対処法｜締め出されないための非常給電・機械キー併用の基礎知識 | 鍵トラブルナビ",
  description:
    "住宅用電子錠・テンキー錠の電池切れ対処法を一般知識として解説。電池残量警告のサイン、外部から一時給電できる非常用端子、非常用の機械キー（物理鍵）の併用、電池交換の手順と締め出しを防ぐ日常の習慣をまとめました。締め出された場合の相談先も紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/denshijou-denchigire/" },
};

const basics = [
  {
    title: "住宅用電子錠の多くは電池式。停電よりも「電池切れ」が本当のリスク",
    desc: "住宅用の電子錠・テンキー錠・スマートロックの多くは乾電池で動く電池式です。配線工事が不要で後付けしやすい反面、電池が切れれば暗証番号もカードも受け付けなくなります。一方、電池式は建物の停電の影響を直接受けにくいため、「停電で閉め出される」より「電池切れを放置して閉め出される」ほうがはるかに現実的なリスクです。電池の寿命は製品・使用頻度・電池の種類によって変わるため、残量警告への対応を習慣にすることが最大の対策になります。",
  },
  {
    title: "電池切れの前には必ず「残量警告」のサインが出る",
    desc: "多くの製品は、電池が減ってくると操作時の警告音・ランプの点滅・アプリ通知などで交換時期を知らせます。ある日突然完全に沈黙するのではなく、警告期間が設けられているのが一般的です。つまり電池切れの締め出しは、警告サインの見逃し・後回しによって起こることがほとんどです。「音がいつもと違う」「ランプが赤く点滅している」と気づいたら、その日のうちに電池を交換しましょう。取扱説明書で自宅の製品の警告サインを確認しておくことが第一歩です。",
  },
  {
    title: "完全に切れても「非常給電」で一時的に動かせる製品がある",
    desc: "電池が完全に切れてしまった場合に備えて、扉の外側から一時的に電気を供給して解錠操作を行える「非常用給電端子」を備えた製品があります。9V形などの乾電池を屋外側の端子に接触させて給電するタイプが代表的で、給電している間に暗証番号などで解錠し、入室後に本体の電池を交換する流れです。対応の有無・端子の位置・使う電池の種類は製品によって異なるため、締め出される前に取扱説明書で確認し、必要な電池を用意しておくと安心です。",
  },
  {
    title: "非常用の機械キー（物理鍵）の併用が最後の砦",
    desc: "電子錠の多くは、電子部が動かなくなった場合に備えて非常用の鍵穴（機械キー）を備えています。カバーの内側に鍵穴が隠れているタイプもあります。この機械キーを家の中に保管したままでは意味がないため、1本は持ち歩く、または信頼できる家族に預けておくのが基本です。後付けスマートロックのように機械キーを持たない製品構成で運用する場合は、電池切れ・故障がそのまま締め出しに直結するため、給電手段や予備の入室手段をより意識して確保する必要があります。",
  },
];

const checkSteps = [
  {
    title: "警告サインが出たら「その日のうちに」電池交換する",
    desc: "警告音やランプの点滅に気づいたら、後回しにせずその日のうちに交換しましょう。交換用の電池は製品指定の種類・本数を守り、全部を同時に新品へ交換するのが基本です。古い電池と新しい電池の混用や、指定外の充電池の使用は、電圧の違いから誤動作や液漏れの原因になることがあります。交換後は施錠・解錠を数回試して正常動作を確認します。",
  },
  {
    title: "電池が切れて締め出されたら、非常給電端子を探す",
    desc: "屋外側の本体下部やカバー周辺に給電用の端子がないか確認します。取扱説明書やメーカーサイトに非常時の給電方法が記載されているので、スマホで型番を検索するのも有効です。対応製品なら、指定された電池（9V形など）を端子に当てて給電しながら、通常の方法で解錠します。入室できたらすぐに本体の電池を新品に交換してください。",
  },
  {
    title: "非常用の機械キーで開ける",
    desc: "非常給電に対応していない、または電池を用意できない場合は、非常用の機械キーの出番です。鍵穴がカバーで隠れている製品もあるため、扉の外側をよく確認しましょう。機械キーを持ち歩いていなかった場合は、家族に届けてもらう、賃貸なら管理会社に相談するなど、まず正規の入室手段を探します。この経験をしたら、以後は機械キーの携帯か非常給電用電池の常備を習慣にしましょう。",
  },
  {
    title: "再発防止：交換記録と予備電池の常備をルール化する",
    desc: "締め出しを繰り返さないために、電池交換の時期をカレンダーやスマホに記録し、前回からの経過を把握できるようにしましょう。使用頻度が高い家庭ほど消耗は早まります。予備の電池一式を自宅に常備し、警告が出たら即交換のルールを家族で共有します。長期の旅行や帰省の前には残量警告が出ていないか確認してから出発すると、帰宅時の締め出しを防げます。",
  },
];

const ngActions = [
  {
    title: "残量警告が出ているのに「まだ動くから」と使い続ける",
    desc: "警告後も一定期間は動きますが、その猶予がいつ尽きるかは分かりません。外出中に切れれば締め出しです。警告に気づいた日のうちに交換する習慣が、電子錠トラブルの大半を防ぎます。",
  },
  {
    title: "機械キーを1本も持ち歩かずに運用する",
    desc: "電池切れだけでなく、故障や誤動作の可能性もゼロではありません。非常用の機械キーを家の中だけに保管する運用は、いざというとき役に立ちません。1本は携帯するか、近くに住む家族に預けておきましょう。",
  },
  {
    title: "開かないからと本体を分解したり、扉をこじ開けようとする",
    desc: "電子錠の分解は故障や保証対象外の原因になり、扉やドア枠のこじ開けは錠前より高額な修理につながります。ピッキング用具の使用は論外です。正規の給電・機械キー・業者依頼という手順で解決しましょう。",
  },
  {
    title: "指定外の電池・古い電池の混用でしのぐ",
    desc: "メーカー指定外の電池や新旧混用は、電圧不安定による誤動作・データ消失・液漏れの原因になり得ます。応急でしのいだ場合も、できるだけ早く指定の新品電池一式に交換し直しましょう。",
  },
];

const faqs = [
  {
    q: "電子錠の電池はどれくらいもちますか？",
    a: "製品・電池の種類・1日の使用回数によって大きく変わるため、一概には言えません。重要なのは正確な寿命を当てることではなく、残量警告のサイン（警告音・ランプ点滅・アプリ通知）を知っておき、出たらすぐ交換することです。取扱説明書に警告時の動作が必ず記載されているので、設置したらまず確認しておきましょう。",
  },
  {
    q: "電池が完全に切れて締め出されました。自分で開けられますか？",
    a: "非常用給電端子のある製品なら、指定の乾電池を屋外側の端子に当てて一時給電し、暗証番号などで解錠できます。給電非対応または電池がない場合は、非常用の機械キーで開けるのが正規の手段です。どちらも使えない場合は、家族のスペアキー・賃貸なら管理会社への連絡を試し、それでも入れなければ鍵業者への依頼が現実的です。扉のこじ開けは修理費が高くつくため避けてください。",
  },
  {
    q: "停電のときは電子錠は開かなくなりますか？",
    a: "電池式の電子錠・スマートロックは建物の電源とは独立しているため、停電の直接の影響は受けにくい設計です。一方、建物側の配線で動く電気錠（マンションのオートロックなど）は停電時の動作が製品・設定によって異なります。自宅・自室の錠がどちらのタイプか、停電時にどう動くのかを管理会社や取扱説明書で確認しておくと安心です。",
  },
  {
    q: "電子錠の締め出しで業者を呼ぶときの注意点はありますか？",
    a: "まず電話で「電子錠のメーカー・型番」「症状（電池切れか、操作しても反応しないのか）」を伝えると、対応可否と概算が判断されやすくなります。電子錠は製品によって業者でも即時対応が難しい場合があり、メーカーサポート案内になることもあります。依頼する場合は、作業前に部品代・作業費・出張費を含む総額見積もりを必ず確認しましょう。費用感は料金相場のページが参考になります。",
  },
];

const relatedLinks = [
  { href: "/smart-lock/", label: "スマートロックの基礎知識", desc: "後付け型・交換型の違いと締め出し対策" },
  { href: "/shimedashi/", label: "締め出されたときの対処法", desc: "家に入れないときの正しい手順" },
  { href: "/smart-key-denchi/", label: "車のスマートキー電池切れ対処", desc: "車の電子キーが反応しないときの知識" },
  { href: "/kagi-shurui-zukan/", label: "鍵の種類図鑑", desc: "電子錠・テンキー錠の位置づけを整理" },
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
    { "@type": "ListItem", position: 2, name: "電子錠の電池切れ対処法" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "電子錠の電池切れ対処法｜締め出されないための非常給電・機械キー併用の基礎知識",
  description: "電子錠の電池残量警告のサイン、非常用給電端子による一時給電、非常用機械キーの併用、電池交換と再発防止の習慣を一般知識として解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-09",
  dateModified: "2026-08-09",
};

export default function DenshijouDenchigirePage() {
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
            <span className="text-text-secondary">電子錠の電池切れ対処法</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            電子錠の電池切れ対処法｜締め出されないための非常給電・機械キー併用の基礎知識
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月9日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：残量警告が出たら即交換。切れてしまったら「非常給電」か「機械キー」で開けるのが正規の手順</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              住宅用電子錠の電池切れによる締め出しは、<strong>警告音・ランプ点滅などの残量警告を見逃さず、その日のうちに電池交換</strong>すればほぼ防げます。完全に切れた場合も、<strong>屋外側の端子に乾電池を当てて一時給電できる非常給電機能</strong>や、<strong>非常用の機械キー（物理鍵）</strong>で開けられる製品が多くあります。自宅の製品の非常時の開け方を取扱説明書で事前に確認し、機械キーを1本持ち歩くことが最大の締め出し対策です。
            </p>
          </div>

          {/* 本文解説 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">電子錠と電池切れの基礎知識｜押さえておきたい4つのポイント</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            電子錠は便利な一方、「電気で動く」という性質上、機械式の鍵にはないトラブルの型があります。仕組みを知っておけば、慌てる場面のほとんどは事前に潰せます。
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
          <h2 className="text-xl font-bold text-text-primary mb-4">電池切れへの対処4ステップ（予防〜締め出し時）</h2>
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
          <h2 className="text-xl font-bold text-text-primary mb-4">給電も機械キーも使えないときは業者判断を</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            非常給電に対応していない、機械キーが手元にない、給電しても反応しない（電池切れではなく故障の可能性）——こうした場合は、自力での解決にこだわらず<strong>鍵の専門業者かメーカーサポートへの相談</strong>に切り替えましょう。賃貸住宅なら、その前に管理会社・大家さんへの連絡が先です。建物側で予備手段を用意していることもあります。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            業者に依頼する場合は、電話でメーカー・型番と症状を伝えて対応可否と概算を確認し、作業前に部品代・作業費・出張費を含む総額見積もりを必ず取りましょう。費用感は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、依頼先の検討は<a href="/agents/" className="text-primary underline">鍵トラブル業者の比較</a>で確認できます。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">電子錠のトラブルに対応できる業者を探す</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              電子錠は製品ごとに構造が異なるため、型番を伝えて対応可否を確認してから依頼するのがスムーズです。作業前の総額見積もりも忘れずに。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">電子錠の電池切れのよくある質問</h2>
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
