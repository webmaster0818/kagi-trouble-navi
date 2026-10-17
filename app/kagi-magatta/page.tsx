import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "鍵が曲がった・変形したときの対処｜曲げ戻さない理由、予備の鍵での合鍵作成、鍵番号からの純正キー注文 | 鍵トラブルナビ",
  description:
    "家の鍵が曲がった・ねじれたときの対処をご説明します。曲げ戻すと折れるおそれがある理由、予備の鍵を使った合鍵の作り直し、鍵番号（キーナンバー）からメーカー純正キーを注文する条件、鍵穴側が傷んでいる場合のシリンダー交換の判断まで、メーカー公式情報にもとづいてまとめました。",
  alternates: { canonical: "https://kagi-trouble-navi.com/kagi-magatta/" },
};

const items1 = [{"title": "平らな机の上に置く", "desc": "鍵を平らな机の上に置き、ガタつく、浮いている部分がある場合は、変形している可能性があります。"}, {"title": "予備の鍵と重ねて比べる", "desc": "予備の鍵がある場合は、刻みやくぼみの位置を合わせて重ね、先端や持ち手の向きにずれがないかを比べます。"}, {"title": "抜き差しの重さを比べる", "desc": "曲がったと思われる鍵と予備の鍵で、鍵穴への抜き差しの重さを比べます。予備の鍵では軽く動く場合は、曲がった鍵が原因と考えられます。予備の鍵でも重い場合は、鍵穴側の汚れや傷みが原因の可能性があります。"}];

const items2 = [{"title": "予備の鍵がある場合", "desc": "曲がった鍵の使用をやめ、予備の鍵を使います。合鍵を作り直すときは、曲がった鍵ではなく、予備の鍵（できれば購入時に付いていた純正キー）をもとに作ってください。曲がった鍵をもとにすると、曲がりや摩耗が合鍵にも反映されるおそれがあるためです。合鍵を作れる場所は<a href=\"/aikagi/\" class=\"text-primary underline\">合鍵の作り方と値段の考え方</a>で解説しています。"}, {"title": "曲がった鍵しか手元にない場合", "desc": "鍵に刻印された鍵番号（キーナンバー）が読み取れれば、メーカー純正キーを注文できる場合があります。美和ロックは、予備の鍵などから鍵番号が分かれば合鍵の製作は可能と案内しています。注文には時間がかかるため、それまでの間は曲がった鍵を無理に使わず、使う場合は力を入れずに抜き差ししてください。"}, {"title": "鍵が鍵穴に入らない・回らない場合", "desc": "家に入れない状況であれば、鍵業者に鍵開けを依頼します。曲がった鍵を無理に押し込むと、鍵穴の内部を傷めたり、鍵が折れたりするおそれがあります。締め出しの対処は<a href=\"/shimedashi/\" class=\"text-primary underline\">家を締め出された時の対処法</a>をご覧ください。"}, {"title": "鍵穴側の傷みが疑われる場合", "desc": "新しい鍵でも抜き差しが重い、回りにくい場合は、鍵穴の内部が傷んでいる可能性があります。この場合は、鍵業者にシリンダーの点検や交換を相談してください。交換の目安は<a href=\"/kagi-jumyou/\" class=\"text-primary underline\">鍵の寿命は何年？</a>で解説しています。"}];

const rows3 = [["注文方法", "公式オンラインショップ「MIWA Direct」からの注文を推奨（鍵の撮影が必要なため、スマートフォンでの注文）"], ["注文できる鍵", "WRキー・U9キー・URキー・PRキー・PSキーの5種類"], ["注文できない鍵", "「MIWA」の刻印がないもの（複製キー）、鍵番号がない・消えているもの、手元に鍵がない場合、マスターキーなどの特殊な鍵"], ["セキュリティカード付きの鍵", "鍵番号とセキュリティカードの番号の両方が必要。シリンダーの種類によって注文方法が異なる"]];

const items4 = [{"title": "ペンチや手で曲げ戻す", "desc": "曲げ戻すと金属に負担がかかり、ひびが入ったり、次に回したときに折れたりするおそれがあります。見た目がまっすぐに戻っても、元の精度には戻りません。"}, {"title": "曲がった鍵を鍵穴に差したまま力を入れる", "desc": "鍵穴の中で鍵が折れると、破片の摘出が必要になります。引っかかりを感じたら、力を入れるのをやめてください。"}, {"title": "曲がった鍵から合鍵を作る", "desc": "曲がりや摩耗が合鍵にも反映され、合鍵も使いにくくなるおそれがあります。予備の鍵か、鍵番号からの注文をご検討ください。"}];

const faqs = [{"q": "少し曲がっただけなら、曲げ戻して使ってもよいですか？", "a": "おすすめしません。曲げ戻すと金属に負担がかかり、鍵穴の中で折れるおそれがあります。予備の鍵を使い、予備の鍵から合鍵を作り直してください。"}, {"q": "曲がった鍵しかありません。合鍵は作れますか？", "a": "鍵番号（キーナンバー）が読み取れれば、メーカー純正キーを注文できる場合があります。美和ロックの場合は、鍵に「MIWA」の刻印と鍵番号があることなどが注文の条件です。"}, {"q": "曲がった鍵で鍵穴が傷むことはありますか？", "a": "曲がった鍵を無理に抜き差しすると、鍵穴の内部を傷めるおそれがあります。新しい鍵でも動きが重い場合は、鍵業者にシリンダーの点検を相談してください。"}, {"q": "車の鍵が曲がった場合も同じ対処でよいですか？", "a": "車の鍵は、イモビライザーなどの電子部品が付いている場合があり、作り直しの方法が異なります。詳しくは車のスペアキー作成の記事をご覧ください。"}, {"q": "鍵番号はどこに書いてありますか？", "a": "多くの鍵では、持ち手の部分などに英数字の鍵番号が刻印されています。鍵番号が分かると合鍵を作られるおそれがあるため、人に見せたり写真を公開したりしないよう注意してください。"}, {"q": "曲がった鍵をそのまま捨ててもよいですか？", "a": "鍵番号が刻印された鍵は、番号から合鍵を作られるおそれがあります。純正キーを注文する場合は注文が済むまで保管し、処分するときは自治体の分別に従ってください。処分の考え方は古い鍵の処分方法の記事で解説しています。"}, {"q": "合鍵を作るとき、曲がった鍵と予備の鍵のどちらを持って行けばよいですか？", "a": "予備の鍵を持って行ってください。曲がった鍵をもとにすると、曲がりや摩耗が合鍵にも反映されるおそれがあります。予備の鍵が純正キーであれば、より精度の高い合鍵を作りやすくなります。"}];

const related = [{"href": "/kagi-ore/", "label": "鍵が折れた時の対処法"}, {"href": "/aikagi/", "label": "合鍵の作り方と値段の考え方"}, {"href": "/key-number-aikagi/", "label": "キーナンバーとは"}, {"href": "/kagi-nukenai/", "label": "鍵が抜けない・刺さらないときの対処法"}, {"href": "/kuruma-spare-key/", "label": "車のスペアキー作成の基礎知識"}, {"href": "/kagiana-abura/", "label": "鍵穴に油を差してしまったときの対処"}];

const sources = [{"label": "美和ロック「合鍵を希望されるお客様へ」", "url": "https://www.miwa-lock.co.jp/tec/support/duplicatekey.html", "date": "2026年10月17日確認"}, {"label": "美和ロック よくあるご質問「鍵を紛失してしまったのですが、合鍵を作ることができますか？」", "url": "https://www.miwa-lock.jp/faq/show/19?site_domain=default", "date": "2026年10月17日確認"}, {"label": "美和ロック よくあるご質問「鍵を回すときに固いのですが、どうすればいいですか？」", "url": "https://www.miwa-lock.jp/faq/show/1463?site_domain=default", "date": "2026年10月17日確認"}];

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
    { "@type": "ListItem", position: 2, name: "鍵が曲がったときの対処" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "鍵が曲がった・変形したときの対処法｜曲げ戻さずに作り直す方法",
  description: "家の鍵が曲がった・ねじれたときの対処をご説明します。曲げ戻すと折れるおそれがある理由、予備の鍵を使った合鍵の作り直し、鍵番号（キーナンバー）からメーカー純正キーを注文する条件、鍵穴側が傷んでいる場合のシリンダー交換の判断まで、メーカー公式情報にもとづいてまとめました。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-10-17",
  dateModified: "2026-10-17",
};

export default function KagiMagattaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />

      <main className="flex-1">
        <div className="bg-surface-alt border-b border-black/5">
          <div className="max-w-4xl mx-auto px-4 py-3 text-xs text-text-muted">
            <a href="/" className="hover:text-primary">ホーム</a>
            <span className="mx-1.5">/</span>
            <span className="text-text-secondary">鍵が曲がったときの対処</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            鍵が曲がった・変形したときの対処法｜曲げ戻さずに作り直す方法
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年10月17日</p>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">曲がった鍵は曲げ戻して使い続けず、予備の鍵や鍵番号から新しい鍵を作り直すことが基本です。</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: "曲がった鍵を手やペンチで曲げ戻すと、金属に負担がかかり、鍵穴の中で折れるおそれがあります。<strong>予備の鍵がある場合は予備を使い、予備の鍵から合鍵を作り直してください</strong>。メーカー純正キーは、美和ロックの場合、<strong>鍵に「MIWA」の刻印と鍵番号（キーナンバー）があれば</strong>公式オンラインショップから注文できます。鍵が鍵穴に入らない・回らない場合や、鍵穴側の傷みが疑われる場合は、鍵業者に相談してください。" }} />
          </div>

          <p className="text-sm text-text-secondary leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: "鍵をかばんの中で押しつぶしてしまった、差したまま体をぶつけてしまったなどの理由で、鍵が曲がることがあります。わずかな曲がりでも、鍵穴の中の部品と鍵の形が合わなくなり、抜き差しが重くなったり、回らなくなったりします。" }} />
          <p className="text-sm text-text-secondary leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: "この記事では、曲がった鍵を使い続けるリスク、新しい鍵を作り直す方法、業者に相談する目安をご説明します。すでに鍵穴の中で折れてしまった場合は、<a href=\"/kagi-ore/\" class=\"text-primary underline\">鍵が折れた時の対処法</a>をご覧ください。" }} />

          <h2 className="text-xl font-bold text-text-primary mb-4">曲がった鍵を使い続けるリスク</h2>
          <div className="bg-white rounded-xl border border-black/10 p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: "鍵が曲がると、鍵穴の中の部品（ピンなど）を正しい位置まで押し上げられず、抜き差しが重くなったり、回転が引っかかったりします。美和ロックは、鍵が回りにくい原因の一つとして、鍵の摩耗や傷を挙げています。" }} />
            <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: "曲がった鍵を無理に回したり、曲げ戻して使い続けたりすると、金属に負担が重なり、鍵穴の中で折れるおそれがあります。鍵が折れると、破片の摘出が必要になり、場合によってはシリンダー交換となるため、曲がりに気付いた時点で作り直すことをおすすめします。" }} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵が曲がっているかを確かめる方法</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "わずかな曲がりは見た目では分かりにくいことがあります。次の方法で確認してください。" }} />
          <div className="space-y-4 mb-10">
            {items1.map((c, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{i + 1}. {c.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: c.desc }} />
              </div>
            ))}
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-4">状況別の対処方法</h2>
          <div className="space-y-4 mb-10">
            {items2.map((c, i) => (
              <div key={i} className="bg-surface-alt rounded-xl p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{i + 1}. {c.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: c.desc }} />
              </div>
            ))}
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-4">美和ロックの純正キーを注文できる条件</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm bg-white rounded-xl border border-black/10">
              <thead className="bg-surface-alt"><tr><th className="text-left font-bold text-text-primary px-3 py-2 border-b border-black/10">項目</th><th className="text-left font-bold text-text-primary px-3 py-2 border-b border-black/10">公式の案内</th></tr></thead>
              <tbody>
                {rows3.map((r, i) => (
                  <tr key={i} className="border-b border-black/5 align-top">
                    {r.map((c, j) => (
                      <td key={j} className={j === 0 ? "px-3 py-2 font-medium text-text-primary whitespace-nowrap" : "px-3 py-2 text-text-secondary leading-relaxed"} dangerouslySetInnerHTML={{ __html: c }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: "上記は美和ロック公式サイトの案内です（2026年10月17日確認）。ほかのメーカーの鍵は、各メーカーの案内をご確認ください。鍵番号の見方は<a href=\"/key-number-aikagi/\" class=\"text-primary underline\">キーナンバーとは</a>、登録制の鍵の再発行は<a href=\"/junsei-key-saihakkou/\" class=\"text-primary underline\">純正キー・セキュリティカードの再発行方法</a>で解説しています。" }} />
          <h2 className="text-xl font-bold text-text-primary mb-4">避けるべき行動</h2>
          <div className="space-y-4 mb-10">
            {items4.map((c, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-600 mb-1.5">{i + 1}. {c.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: c.desc }} />
              </div>
            ))}
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵を曲げないための予防</h2>
          <div className="bg-surface-alt rounded-xl p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: "鍵を差したまま体重をかけない、かばんの底で重い物の下敷きにしない、キーホルダーに重い物を付けすぎないなど、鍵に無理な力がかからない使い方を心がけてください。重いキーホルダーは、鍵を差した状態で鍵にねじる力をかけ続けます。" }} />
            <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: "また、購入時に付いていた純正キーは保管用として残し、普段は合鍵を使う方法もあります。曲がりや摩耗に気付いたときに、精度の高い純正キーから作り直せるためです。鍵の動きが重い場合のお手入れは<a href=\"/kagiana-abura/\" class=\"text-primary underline\">鍵穴に油を差してしまったときの対処</a>で、メーカーが案内している清掃方法をご紹介しています。" }} />
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">鍵の作り直しや鍵開けを相談する</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">曲がった鍵で家に入れない場合や、鍵穴側の傷みが疑われる場合は、総額の見積もりを確認したうえで鍵業者に相談してください。</p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵業者を比較する →</a>
              <a href="/aikagi/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">合鍵の作り方を見る</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を詳しく見る</a>
            </div>
          </div>

          <h2 className="text-xl font-bold text-text-primary mb-4">曲がった鍵に関するよくある質問</h2>
          <div className="space-y-3 mb-10">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-xl border border-black/10 overflow-hidden">
                <summary className="px-5 py-4 cursor-pointer font-medium text-text-primary text-sm">Q. {f.q}</summary>
                <div className="px-5 pb-4 text-sm text-text-secondary leading-relaxed">A. {f.a}</div>
              </details>
            ))}
          </div>

          <h2 className="text-xl font-bold text-text-primary mb-4">出典・確認日</h2>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-text-muted leading-relaxed mb-10">
            {sources.map((s, i) => (
              <li key={i}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary underline">{s.label}</a>（{s.date}）
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-text-primary mb-4">関連記事</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {related.map((l, i) => (
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
