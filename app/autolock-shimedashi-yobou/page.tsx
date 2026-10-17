import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "オートロックマンションの締め出し予防策｜鍵の持ち出し習慣とスマートタグ活用をわかりやすく解説 | 鍵トラブルナビ",
  description:
    "オートロックマンションで起きやすい締め出し（インロック）の予防策を一般知識として解説。ゴミ出し・郵便受け確認の数分間に締め出しが起きやすい理由、鍵の持ち出し習慣の作り方、スマートタグや家族間ルールの活用、実際に締め出された時に管理会社・管理人を通じて解決する手順までご紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/autolock-shimedashi-yobou/" },
};

const reasons = [
  {
    title: "「一瞬だから」のゴミ出し・郵便受け確認",
    desc: "オートロックの締め出しでもっとも典型的なのが、ゴミ出しや郵便受けの確認、宅配ボックスの荷物取りなど「1〜2分で戻るつもり」の外出です。エントランスの自動ドアは背後で閉まった瞬間に施錠されるため、鍵を持たずに共用部へ出ると、その時点で建物に戻れなくなります。部屋の鍵は開いているのにエントランスを通れない点が、オートロック物件の締め出しの特徴です。",
  },
  {
    title: "家族が在宅していると思い込んだ外出",
    desc: "「家族がいるからインターホンで開けてもらえばいい」と考えて鍵を持たずに出たところ、入れ違いで家族も外出していた、あるいは入浴中や就寝中でインターホンに気づかなかったというケースです。他人の在宅をあてにした外出は、想定が一つ外れるだけで締め出しにつながります。",
  },
  {
    title: "オートロック付き玄関ドア・スマートロックの自動施錠",
    desc: "エントランスだけでなく、住戸の玄関ドア自体がオートロック仕様（ホテルタイプ）の物件や、後付けスマートロックのオートロック機能を使っている場合は、玄関ドアが閉まった瞬間に施錠されます。換気のためにドアを開けた拍子に風で閉まった、荷物の受け取りで一歩外に出たといった一瞬の動作が、締め出しに直結します。",
  },
  {
    title: "鍵の紛失・置き忘れに気づかない",
    desc: "そもそも鍵を職場やジム、買い物先に置き忘れたまま帰宅し、エントランスの前で初めて気づくケースです。オートロック物件では「家に着いてから鍵がないと分かる」と解決の選択肢が限られるため、外出先を出る時に鍵の所持を確認する習慣が重要になります。",
  },
];

const yobou = [
  {
    title: "「鍵を持たずにドアを閉めない」を絶対ルールにする",
    desc: "ゴミ出し・郵便受け・宅配ボックスなど、どんなに短時間でも、共用部へ出る時は鍵を持ってください。これを例外のない決まりにすることが予防の基本です。玄関ドアの内側のドアノブや靴箱の上など「出る時に必ず目に入る場所」を鍵の定位置にし、帰宅したら必ずそこへ戻すようにすると、持ち忘れが起きにくくなります。",
  },
  {
    title: "普段使いの持ち物に鍵を「付けてしまう」",
    desc: "スマホケース、財布、ゴミ出しにも持って出るバッグなど、外に出る時に必ず持つ物に鍵を付けてしまう方法です。「鍵を持つ」ことを意識しなくても持ち出せる状態を作ることが目的で、リール付きキーホルダーやカラビナを使えば着脱の手間もかかりません。",
  },
  {
    title: "スマートタグ（紛失防止タグ）を鍵に付ける",
    desc: "鍵にスマートタグを付けておくと、スマホから鍵の場所を確認でき、置き忘れ時には最後に検知した場所をたどれます。鍵から離れるとスマホに通知が届く設定ができる製品であれば、外出先での置き忘れにその場で気づけます。締め出しの主な原因である「紛失・置き忘れ」への備えとして、手軽で効果的です。ただし、電池切れの状態では機能しないため、電池残量の通知が届いたら早めに交換してください。",
  },
  {
    title: "家族間のルールと連絡手段を決めておく",
    desc: "家族それぞれが自分の鍵を持つ（1本を使い回さない）、外出時は在宅をあてにせず必ず鍵を持つ、締め出された時の連絡順（まず家族へ電話→管理会社）を共有しておく、といった家族間ルールを決めておくと、締め出しの発生も、発生時の復旧時間も大きく減らせます。お子さまにはキーケースをランドセルやバッグに固定するなど、紛失しにくい持たせ方も併せて工夫してください。",
  },
  {
    title: "信頼できる預け先にスペアキーを託す",
    desc: "近居の親族など信頼できる相手にスペアキーを預けておくと、締め出し時の最終手段になります。一方、郵便受けの中や消火栓ボックスなど共用部にスペアキーを隠すことは、防犯上のリスクがあり管理規約にも反するおそれがあるため、避けてください。スマートロックを利用している方は、物理鍵を締め出し時に取り出せる場所（車の中では不可。建物外の信頼できる預け先）に確保しておくことが重要です。",
  },
];

const ngActions = [
  {
    title: "共用部の郵便受けや植木鉢にスペアキーを隠す",
    desc: "エントランス周りのよく使われる隠し場所は部外者にも推測されやすく、住戸の鍵と建物の鍵を同時に第三者へ渡すことになりかねません。オートロックの防犯性を自ら無効化する行為であり、管理規約に抵触するおそれもあります。",
  },
  {
    title: "締め出された時に他の住人の後ろについて入る（共連れ）",
    desc: "自分の部屋に入るためでも、他の住人の解錠に便乗してエントランスを通る行為は不審者と区別がつかず、トラブルの原因になります。まずインターホンで家族に連絡するか、管理会社・管理人に連絡してください。",
  },
  {
    title: "エントランスや玄関ドアを無理にこじ開けようとする",
    desc: "オートロックの自動ドアや玄関錠は共用部・貸主の設備です。無理にこじ開けたり隙間に物を差し込んだりして壊した場合は弁償の問題が生じ、復旧までの費用と時間は鍵開けよりもはるかに大きくなります。ドアに物を挟んで開けたままにするのも、建物全体の防犯を損なう行為です。",
  },
  {
    title: "確認せずに鍵開け業者へ直接依頼する",
    desc: "オートロック物件の締め出しは、管理会社・管理人経由で解決できることが多いトラブルです。先に業者へ依頼すると、業者がエントランスを通れない、賃貸物件の鍵を無断で開ける・壊すことになる、といった問題が生じます。業者への依頼は、管理会社に連絡がつかない、または対応できないと分かってから検討し、その際も物件名と状況を正確に伝えてください。",
  },
];

const faqs = [
  {
    q: "オートロックのマンションで締め出されたら、まずどうすればよいですか？",
    a: "まず同居の家族に連絡して開けてもらえないか確認し、次に管理会社（賃貸なら管理会社・大家、分譲なら管理組合の管理会社）や管理人に連絡するのが基本の順番です。物件によっては管理会社がマスターキーや緊急対応の仕組みを持っています。夜間は管理会社の緊急連絡先（契約書や掲示板に記載）に連絡します。それでも解決しない場合に、鍵開け業者への依頼を検討します。具体的な手順は、締め出されたときの対処法の記事で解説しています。",
  },
  {
    q: "ゴミ出しの時の締め出しを防ぐ簡単な方法はありますか？",
    a: "「鍵を持たずにドアを閉めない」ことを例外のない決まりにするのが最も確実です。具体的な方法としては、玄関ドア内側の目に入る位置を鍵の定位置にする、ゴミ出しに持って出るバッグや部屋着のポケットに鍵を入れてから出る、リール付きキーホルダーで普段の持ち物に鍵を付けておく、などが有効です。「ドアを少し開けたまま行く」のは防犯上おすすめできません。",
  },
  {
    q: "スマートタグを付けていれば締め出しは防げますか？",
    a: "スマートタグは「鍵がどこにあるか」を知らせる製品で、置き忘れ・紛失による締め出しの予防と早期発見には役立ちます。ただし、鍵を部屋に置いたまま外に出るタイプの締め出しは防げません（タグは部屋の中にあると表示されるだけです）。持ち出しの習慣や家族間のルールと組み合わせることで、予防策として機能します。",
  },
  {
    q: "スマートロックのオートロック機能で締め出されないか不安です。",
    a: "後付けスマートロックのオートロック機能を使う場合は、物理鍵を必ず携帯する、スマホと鍵の2系統で解錠手段を持つ、電池残量の警告が出たらすぐに交換する、の3点を徹底してください。電池切れ・スマホの充電切れ・アプリの不具合はいつでも起こり得ます。玄関ドアの外に出る動作（宅配受け取り・ゴミ出し）の時こそ、スマホか鍵のどちらかを必ず身につけてください。",
  },
];

const relatedLinks = [
  { href: "/shimedashi/", label: "家から締め出された時の対処法", desc: "連絡の順番と鍵開け依頼の判断基準" },
  { href: "/smart-lock/", label: "スマートロックの基礎知識", desc: "オートロック機能と締め出しリスク" },
  { href: "/kagi-funshitsu/", label: "鍵を紛失した時にやること", desc: "捜索・届け出・交換の判断を解説" },
  { href: "/ryokin/", label: "鍵開け・鍵交換の料金相場", desc: "依頼前に確認すべき料金の目安" },
  { href: "/door-guard-shimedashi/", label: "ドアガードがかかって家に入れないとき", desc: "家族が中にいる場合・いない場合の対処" },
  { href: "/bunjo-mansion-kagi-koukan/", label: "分譲マンションの玄関の鍵交換", desc: "管理規約での扱いとオートロック連動の鍵" },
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
    { "@type": "ListItem", position: 2, name: "オートロックマンションの締め出し予防策" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "オートロックマンションの締め出し予防策",
  description: "オートロック締め出しの典型パターンと、鍵の持ち出し習慣・スマートタグ・家族間ルールによる予防策、締め出された時の正しい対処順を一般知識として解説します。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-08-09",
  dateModified: "2026-08-09",
};

export default function AutolockShimedashiYobouPage() {
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
            <span className="text-text-secondary">オートロックマンションの締め出し予防策</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            オートロックマンションの締め出し予防策｜鍵の持ち出し習慣とスマートタグ活用
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年8月9日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">締め出し予防の要点</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              オートロックの締め出しは、<strong>ゴミ出しや郵便受け確認など「一瞬の外出」で鍵を持たずに出ること</strong>がほとんどの原因です。予防の柱は、<strong>①どんな短時間でも鍵を持って出る絶対ルール、②普段の持ち物に鍵を付けてしまう工夫、③スマートタグで紛失・置き忘れに早く気づく備え、④家族間のルールと連絡順の共有</strong>の4つです。「鍵を持たずにドアを閉めない」ことを習慣として定着させれば、締め出しはほぼ防げます。万一締め出された場合は、鍵開け業者より先に<strong>家族→管理会社・管理人</strong>の順で連絡してください。
            </p>
          </div>

          {/* 起きる理由 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">オートロックの締め出しが起きる典型的なパターン</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            オートロック物件の締め出しは、鍵の紛失よりも「鍵を部屋に置いたまま出てしまう」不注意が主な原因です。エントランスの自動ドアは閉まると同時に施錠されるため、部屋の鍵が開いていても建物に入れません。まずは典型的なパターンを把握し、ご自身やご家族に当てはまるものがないか確認してください。
          </p>
          <div className="space-y-3 mb-10">
            {reasons.map((r, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-4">
                <p className="font-bold text-primary text-sm mb-1.5">
                  <span className="inline-block bg-surface-alt rounded px-2 py-0.5 text-xs font-bold text-text-primary mr-2">パターン{i + 1}</span>
                  {r.title}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

          {/* 予防策 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">締め出しを防ぐための5つの予防策</h2>
          <ol className="space-y-3 mb-10">
            {yobou.map((y, i) => (
              <li key={i} className="flex gap-3 bg-white rounded-xl border border-black/10 p-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">{i + 1}</span>
                <div>
                  <p className="font-bold text-text-primary text-sm mb-1">{y.title}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{y.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* 締め出された時 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">締め出された場合の連絡先（業者より先に管理会社・管理人へ）</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            オートロック物件で締め出された場合の連絡順は、<strong>①同居家族（インターホンや電話で開けてもらう）→②管理会社・管理人→③それでも解決しなければ鍵開け業者の検討</strong>です。エントランスは共用設備のため、まず管理側を通すことが原則です。また、賃貸物件では住戸の鍵も貸主の設備であり、無断で解錠・破錠するとトラブルになります。管理会社の緊急連絡先は賃貸借契約書やエントランスの掲示板に記載されていることが多いため、あらかじめスマホに登録しておくことをおすすめします。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            深夜で管理会社に連絡がつかない場合や、遠方のため対応できないと言われた場合の判断基準、業者依頼時の注意点は、<a href="/shimedashi/" className="text-primary underline">家から締め出された時の対処法</a>で詳しく解説しています。鍵そのものを紛失した可能性がある場合は、遺失届や鍵交換の検討も必要です（<a href="/kagi-funshitsu/" className="text-primary underline">鍵を紛失した時にやること</a>参照）。
          </p>

          {/* NG行動 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">避けるべき行動</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">避けるべき行動：{n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 業者判断 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵開け業者に依頼する場合の判断とポイント</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            管理会社・管理人・家族のいずれでも解決できない場合に、鍵開け業者への依頼を検討してください。依頼時は<strong>「オートロック物件であること」「エントランスを通れる状態か（他の同行者や管理人の立ち会いがあるか）」「賃貸か分譲か」</strong>を正確に伝えてください。賃貸物件では、解錠や破錠について管理会社の了解を得ておくとトラブルを防げます。また、到着後に本人確認（身分証と住所の確認）を求められるのは正常な対応であり、確認を行わない業者のほうが注意を要します。料金は作業内容・時間帯で変わるため、作業前に総額の見積もりを必ずご確認ください。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            費用の目安は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、依頼先の検討は<a href="/agents/" className="text-primary underline">鍵業者の比較</a>でご確認いただけます。
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">管理会社で解決できない締め出しは、実績のある業者へご相談ください</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              本人確認と作業前の総額見積もりを確実に行う業者を選んでください。オートロック物件である旨を最初に伝えると、手配が円滑に進みます。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">オートロックの締め出し予防のよくある質問</h2>
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
