import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "家を締め出された時の対処法【2026年版】鍵開け料金相場・賃貸/オートロックの注意点 | 鍵トラブルナビ",
  description:
    "家の締め出し（鍵の閉め出し）で今すぐ入りたい時の対処法を手順で解説します。賃貸物件は管理会社へ、オートロック物件は管理人を通じて連絡してください。鍵業者に依頼する場合の料金相場は、一般的な鍵で8,000〜15,000円です。深夜割増・本人確認・避けるべき行動までご紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/shimedashi/" },
};

const steps = [
  { title: "他の入口・家族・合鍵を確認する", desc: "まずは落ち着いて、勝手口や開いている窓（安全に手が届く範囲）、同居家族・実家の合鍵、大家や管理会社預けの鍵がないかを確認します。数十分で家族が帰宅する場合は、待つことが最も費用のかからない方法です。" },
  { title: "賃貸物件は管理会社・大家に連絡する", desc: "賃貸住宅では管理会社や大家がマスターキー・スペアキーを保管していることがあります。夜間でも緊急連絡先（契約書や物件掲示板に記載）につながる場合があるため、鍵業者に依頼する前に必ず連絡してください。無断で鍵開け・交換をすると費用負担でトラブルになることがあります。" },
  { title: "オートロックは管理人を通じて共用部へ入る", desc: "マンションのオートロックはエントランスと自室の2段階です。エントランスは管理人への連絡が基本です（他の住人の後に続いて入る「共連れ」はトラブルの原因になるため、避けてください）。自室の鍵開けは通常の鍵開けと同じ扱いになります。" },
  { title: "鍵業者に鍵開けを依頼する", desc: "上記で解決しない場合は、鍵の専門業者に依頼してください。依頼時は「鍵の種類（刻みキー/ディンプルキー等）」「建物の種類」「時間帯」を伝えると正確な見積もりが出やすくなります。到着まで15〜60分が目安です。" },
  { title: "作業前に総額の見積もりと本人確認を行う", desc: "正規の業者は悪用防止のため、その家に住んでいることの確認（身分証など）を行います。作業前に出張料・割増込みの総額を必ず確認してから依頼してください。" },
];

const faqs = [
  { q: "家を締め出された時、鍵業者に依頼するといくらかかりますか？", a: "一般的な鍵（ディスクシリンダー等）の鍵開けで8,000〜15,000円、防犯性の高いディンプルキーで15,000〜30,000円が相場の目安です。これに出張料（3,000円前後）や深夜・早朝の割増が加わる場合があります。作業前に必ず総額の見積もりをご確認ください。" },
  { q: "深夜の締め出しでも鍵業者は来てくれますか？", a: "24時間対応の業者であれば、深夜でも出張対応を受けられます。ただし多くの業者で深夜・早朝は割増料金（数千円程度）がかかります。始発まで待てる状況であれば、日中に依頼したほうが費用を抑えられます。" },
  { q: "身分証も家の中にあります。本人確認はどうなりますか？", a: "財布ごと閉め出された場合でも、解錠後に室内の身分証を提示する方法で対応するのが一般的です。正規の業者ほど本人確認を徹底しています（悪用防止のため）。反対に、確認をまったく行わない業者には注意が必要です。" },
  { q: "賃貸で締め出された場合、鍵開け費用は誰が負担しますか？", a: "入居者の不注意による締め出しは、原則として入居者負担です。ただし、管理会社がスペアキーで無料対応する場合や、加入している火災保険・入居者サポートに鍵開け特典が含まれる場合があるため、依頼前に確認することで費用を抑えられます。" },
  { q: "警察は鍵を開けてくれますか？", a: "原則として警察は住宅の鍵開け作業は行いません（緊急の人命に関わる場合を除く）。締め出しは鍵業者か管理会社への連絡が基本です。鍵を紛失した場合は、悪用防止のため警察への遺失届の提出をおすすめします。" },
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
    { "@type": "ListItem", position: 2, name: "家を締め出された時の対処法" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "家を締め出された時の対処法【2026年版】",
  description: "家の締め出しで今すぐ入りたい時の手順、鍵開けの料金相場、賃貸・オートロックの注意点を解説します。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-07-02",
  dateModified: "2026-07-02",
};

export default function ShimedashiPage() {
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
            <span className="text-text-secondary">家を締め出された時の対処法</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            家を締め出された時に今すぐ入るための対処法【2026年版】
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年7月2日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">締め出し時の対処の要点</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              家を締め出された場合は、<strong>①合鍵・家族・他の入口の確認 → ②賃貸物件は管理会社・大家へ連絡 → ③解決しなければ鍵業者に依頼</strong>の順に対応すると、最も早く、費用を抑えて解決できます。鍵業者の鍵開けの料金相場は、一般的な鍵で<strong>8,000〜15,000円</strong>、ディンプルキーで<strong>15,000〜30,000円</strong>です（出張料・深夜割増が加わる場合があります）。窓を割る・こじ開けるといった行為は、修理費のほうが高額になるため避けてください。
            </p>
          </div>

          {/* 手順 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">締め出し時の対処手順（5ステップ）</h2>
          <ol className="space-y-3 mb-10">
            {steps.map((s, i) => (
              <li key={i} className="flex gap-3 bg-white rounded-xl border border-black/10 p-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">{i + 1}</span>
                <div>
                  <p className="font-bold text-text-primary text-sm mb-1">{s.title}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* ケース別フロー */}
          <h2 className="text-xl font-bold text-text-primary mb-4">ケース別の対処フロー</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            締め出しといっても、状況によって適切な対応は異なります。ご自身の状況に当てはまる項目からご確認ください。
          </p>
          <div className="space-y-4 mb-10">
            <div className="bg-white rounded-xl border border-black/10 p-5">
              <h3 className="font-bold text-text-primary text-sm mb-1.5">（a）深夜・早朝に締め出された場合</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                まず同居家族や合鍵を持つ方に連絡し、数時間で合流できる場合は、待つことが最も費用のかからない方法です。待てない場合は24時間対応の鍵業者に依頼することになりますが、多くの業者で深夜・早朝は割増料金がかかります。電話の時点で「割増込みの総額」を確認し、金額に納得できないときは始発後・日中の依頼に切り替えることも一つの判断です。近くにネットカフェや24時間営業の店がある場合は、朝まで安全に待機する選択肢も検討してください。
              </p>
            </div>
            <div className="bg-white rounded-xl border border-black/10 p-5">
              <h3 className="font-bold text-text-primary text-sm mb-1.5">（b）鍵は家の中にある場合（インキー・閉じ込み）</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                鍵を紛失したわけではないため、ドアを開ければ解決します。家族・管理会社の合鍵で開けられる場合はそれが最も早い方法で、合鍵がない場合は鍵業者による解錠作業となります。鍵自体は手元に戻るため、原則として鍵交換までは不要なケースが多く、費用を抑えやすい状況です。依頼時に「鍵は室内にある」と伝えると、業者側も解錠のみの前提で正確な見積もりを出しやすくなります。
              </p>
            </div>
            <div className="bg-white rounded-xl border border-black/10 p-5">
              <h3 className="font-bold text-text-primary text-sm mb-1.5">（c）鍵を紛失している場合</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                外出先で落とした・どこで失くしたか分からない場合は、解錠して家に入るだけでは終わりません。拾った第三者に悪用されるリスクがあるため、警察への遺失届の提出と、状況に応じた鍵交換の検討が必要です。紛失時の探し方・届け出・交換判断の流れは<a href="/kagi-funshitsu/" className="text-primary underline">鍵を紛失した時の対処法</a>で詳しく解説しています。
              </p>
            </div>
            <div className="bg-white rounded-xl border border-black/10 p-5">
              <h3 className="font-bold text-text-primary text-sm mb-1.5">（d）オートロックマンションの場合</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                エントランスのオートロックは共用部のため、住人個人の依頼では鍵業者が作業できないことが多く、まず管理会社・管理人を通じて対応する必要があります。物件の管理会社（夜間は緊急連絡先）に電話し、エントランスの開け方について案内を受けてください。エントランスを通過できれば、自室ドアの解錠は通常の鍵開けと同じ扱いです。他の住人に続いて入る「共連れ」はトラブルの原因になるため、避けてください。
              </p>
            </div>
          </div>

          {/* NG行動 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">避けるべき行動</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { title: "窓を割って入る", desc: "ガラス交換費用（数万円〜）が鍵開けより高額になるうえ、ケガや通報のリスクもあります。防犯ガラスの場合は、割ること自体が困難です。" },
              { title: "針金などでこじ開ける", desc: "シリンダー内部を傷めると鍵開けでは済まず交換（10,000〜40,000円）が必要になり、かえって高額になります。" },
              { title: "ベランダ・窓からの侵入", desc: "転落事故の危険があるほか、不審者として通報される例もあります。特に2階以上では、絶対に行わないでください。" },
              { title: "相場より極端に安い広告で即決", desc: "「◯◯円〜」の過度に安い表示は現地で高額請求になる例があります。作業前に総額見積もりを確認してください。" },
            ].map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">避けるべき行動：{n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 賃貸の場合 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">賃貸物件の場合の初期対応</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            賃貸住宅の締め出しでは、鍵業者に依頼する前に次の3点を確認すると、無料または低コストで解決できる可能性があります。
          </p>
          <ol className="space-y-3 mb-10">
            {[
              { title: "管理会社・大家への連絡が最優先", desc: "管理会社や大家がマスターキー・スペアキーを保管していれば、鍵業者に依頼せずに開けてもらえる可能性があります。また賃貸の鍵は貸主の設備でもあるため、無断で解錠・交換を行うと原状回復や費用負担をめぐるトラブルの原因になります。まず連絡することが原則です。" },
              { title: "火災保険・共済の鍵開けサポート特約を確認", desc: "入居時に加入した火災保険や共済、入居者サポートサービスに「鍵開け駆けつけ」の特約が付いていることがあります。対象であれば自己負担なし〜少額で対応を受けられるため、保険証券・契約書類・サポートアプリをご確認ください。" },
              { title: "夜間・休日の緊急窓口を確認", desc: "管理会社の営業時間外でも、賃貸借契約書や物件エントランスの掲示板、家賃保証会社の書類に24時間の緊急連絡先が記載されていることがあります。深夜の締め出しでは、この緊急窓口の有無で選択肢が大きく変わります。" },
            ].map((s, i) => (
              <li key={i} className="flex gap-3 bg-white rounded-xl border border-black/10 p-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">{i + 1}</span>
                <div>
                  <p className="font-bold text-text-primary text-sm mb-1">{s.title}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* 料金 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵業者に依頼した場合の料金の目安</h2>
          <div className="overflow-x-auto mb-4 rounded-xl border border-black/10">
            <table className="w-full text-sm min-w-[480px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-bold">状況</th>
                  <th className="px-4 py-3 text-left font-bold">料金相場（税込目安）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["鍵開け（一般的な刻みキー）", "8,000〜15,000円"],
                  ["鍵開け（ディンプルキー）", "15,000〜30,000円"],
                  ["出張料（かかる場合）", "3,000円前後"],
                  ["深夜・早朝の割増", "数千円程度"],
                  ["開かず交換になった場合", "＋10,000〜40,000円"],
                ].map((r, i) => (
                  <tr key={i} className={i % 2 ? "bg-surface-alt" : "bg-white"}>
                    <td className="px-4 py-3 font-medium text-text-primary">{r[0]}</td>
                    <td className="px-4 py-3 text-primary font-bold whitespace-nowrap">{r[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-10">
            ※一般的な相場の目安です。鍵の種類・建物の状況・時間帯により変動します。詳しくは<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>をご覧ください。
          </p>

          {/* 依頼前チェックリスト */}
          <h2 className="text-xl font-bold text-text-primary mb-4">業者に依頼する前の確認事項</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            締め出し時は焦って即決しがちですが、依頼前に次の4点を確認することで、高額請求などのトラブルを大きく減らせます。
          </p>
          <ul className="space-y-3 mb-10">
            {[
              { title: "総額見積もりを「作業前」に確認する", desc: "基本料金・作業費・出張料・時間帯割増をすべて含んだ総額について、作業が始まる前に提示を受けてください。「開けてみないと分からない」と言われた場合も、上限額の目安を確認してから依頼することをおすすめします。" },
              { title: "キャンセル料の有無を確認する", desc: "見積もり額に納得できなかった場合にキャンセルできるか、その際にキャンセル料や出張料が発生するかを電話の時点で確認しておくと、現地で断りづらくなる事態を避けられます。" },
              { title: "身分証・名刺・会社情報を確認する", desc: "到着したスタッフの名刺や会社名・所在地を確認してください。正規の業者は依頼者側の本人確認も行います。会社情報の提示を渋る業者への依頼は、避けることをおすすめします。" },
              { title: "提示額が相場からかけ離れていないか確認する", desc: "提示された金額が一般的な相場と大きくずれていないかを冷静に照らし合わせてください。作業別の相場は料金相場ページで確認できます。" },
            ].map((c, i) => (
              <li key={i} className="flex gap-3 bg-white rounded-xl border border-black/10 p-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="5 12 10 17 19 7" /></svg></span>
                <div>
                  <p className="font-bold text-text-primary text-sm mb-1">{c.title}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{c.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            料金の妥当性は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>で、業者ごとの対応エリア・特徴は<a href="/agents/" className="text-primary underline">鍵業者の比較</a>でご確認いただけます。
          </p>

          {/* 業者選び・内部リンク */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">すぐに出張できる鍵業者を比較する</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              締め出しは到着スピードと総額の明確さが重要です。24時間対応・出張見積もり無料の業者を中心に比較してください。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を詳しく見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">締め出しに関するよくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-xl border border-black/10 overflow-hidden">
                <summary className="px-5 py-4 cursor-pointer font-medium text-text-primary text-sm">Q. {f.q}</summary>
                <div className="px-5 pb-4 text-sm text-text-secondary leading-relaxed">A. {f.a}</div>
              </details>
            ))}
          </div>

          {/* 関連する解説 */}
          <h2 className="text-xl font-bold text-text-primary mt-10 mb-4">関連する解説</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/kagiya-erabikata/", label: "鍵屋の選び方｜電話で確認する質問" },
              { href: "/kagiya-kougaku-seikyuu/", label: "鍵屋に高額請求されたときの対処" },
              { href: "/shinya-kagiake/", label: "深夜・早朝に鍵屋を呼ぶときの注意点" },
              { href: "/door-guard-shimedashi/", label: "ドアガードがかかって家に入れないとき" },
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
