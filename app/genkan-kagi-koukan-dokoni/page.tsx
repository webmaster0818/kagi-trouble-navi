import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "玄関の鍵交換はどこに頼む？鍵屋・管理会社・ホームセンター・錠前メーカーの違いと住まい別の連絡先 | 鍵トラブルナビ",
  description:
    "玄関の鍵を交換したいときに、どこへ頼めばよいかを住まい別・依頼先別に整理しました。賃貸は管理会社・大家、分譲マンションは管理規約とオートロック連動の確認、一戸建ては自分で手配するのが基本です。鍵屋・ホームセンター・錠前メーカー・リフォーム会社の役割の違いと、依頼前に確認する錠前の型番までご説明します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/genkan-kagi-koukan-dokoni/" },
};

const rows0 = [["賃貸住宅", "管理会社・大家", "鍵は建物の設備のため、無断で交換すると契約上の問題になる場合があります。費用負担は契約や交換の理由で異なります（<a href=\"/chintai-kagi-koukan-hiyou/\" class=\"text-primary underline\">賃貸の鍵交換費用</a>）。"], ["分譲マンション", "管理会社（管理組合）", "標準管理規約では錠は専有部分ですが、オートロックと連動する鍵は物件情報をもとにした手配が必要です（<a href=\"/bunjo-mansion-kagi-koukan/\" class=\"text-primary underline\">分譲マンションの鍵交換</a>）。"], ["一戸建て", "鍵屋（自分で手配）", "玄関・勝手口など複数の出入口をまとめて検討できます（<a href=\"/ikkodate-kagi-koukan/\" class=\"text-primary underline\">一戸建ての鍵交換</a>）。"], ["店舗・事務所", "建物の管理者・オーナー", "テナントの場合は賃貸借契約の扱いに従います（<a href=\"/tenpo-office-kagi-kanri/\" class=\"text-primary underline\">店舗・オフィスの鍵管理</a>）。"]];

const items1 = [{"title": "出張の鍵屋（鍵業者）", "desc": "現地で錠前の型番を確認し、適合するシリンダーの選定から取り付けまでを行います。鍵の紛失直後など急ぐ場合にも対応しやすい依頼先です。料金の内訳（出張料・作業料・部品代）を作業前に確認してください。依頼時の確認事項は<a href=\"/kagiya-erabikata/\" class=\"text-primary underline\">鍵屋の選び方</a>で解説しています。"}, {"title": "錠前メーカーのサービス店", "desc": "美和ロックの場合、メーカー直接の現地での修理対応は行っておらず、最寄りの同社認定サービス代行店（SD店）へ依頼するよう案内しています。メーカー製品の扱いに詳しい店に依頼したい場合の選択肢です。"}, {"title": "ホームセンター", "desc": "交換用のシリンダーを購入できる店舗があります。取り付けまで依頼できるかどうか、取り寄せにかかる日数は店舗によって異なるため、直接ご確認ください。"}, {"title": "リフォーム会社・工務店", "desc": "ドア本体の傷みや断熱性能の見直しなど、鍵だけでなくドアごと交換する場合の依頼先です。判断の基準は<a href=\"/door-koukan-vs-kagi-koukan/\" class=\"text-primary underline\">ドアごと交換と鍵だけ交換の比較</a>をご覧ください。"}, {"title": "自分で交換する（DIY）", "desc": "錠前の規格が合えば、シリンダーを自分で交換できる場合があります。ただし、採寸や型番の確認を誤ると取り付けられません。手順と注意点は<a href=\"/cylinder-koukan-diy/\" class=\"text-primary underline\">シリンダー交換をDIYで行う方法</a>で解説しています。"}];

const rows2 = [["出張の鍵屋", "急いでいる、型番が分からない、取り付けまで任せたい", "出張料・作業料・部品代を含めた総額、見積もり後に断った場合の費用"], ["メーカーのサービス店", "メーカー製品に詳しい店に頼みたい、同じ鍵番号のシリンダーを手配したい", "取り寄せにかかる日数、取り付けの可否"], ["ホームセンター", "型番が分かっていて、部品を購入して交換したい", "在庫・取り寄せの日数、取り付けサービスの有無"], ["リフォーム会社・工務店", "ドア本体の傷みや断熱性能もあわせて見直したい", "ドア交換の範囲と、マンションの場合は管理規約上の扱い"]];

const faqs = [{"q": "玄関の鍵交換は、鍵屋とホームセンターのどちらに頼むべきですか？", "a": "急ぐ場合や型番が分からない場合は、現地で確認して取り付けまで行う鍵屋が向いています。ホームセンターは部品を購入できる店舗がありますが、取り付けの可否や取り寄せの日数は店舗によって異なります。"}, {"q": "賃貸住宅で、自分で鍵屋を呼んで交換してもよいですか？", "a": "交換の前に管理会社・大家に連絡してください。鍵は建物の設備のため、無断で交換すると契約上の問題になる場合があります。"}, {"q": "錠前メーカーに直接交換を頼めますか？", "a": "美和ロックの場合、メーカー直接の現地での修理対応は行っておらず、同社認定のサービス代行店（SD店）への依頼を案内しています。ほかのメーカーは、各社の案内をご確認ください。"}, {"q": "分譲マンションの鍵は、管理組合の許可がなくても交換できますか？", "a": "国土交通省のマンション標準管理規約では錠は専有部分とされていますが、実際の扱いは各マンションの管理規約によります。オートロックと連動する鍵もあるため、管理会社に確認してから手配してください。"}, {"q": "鍵交換を依頼する前に、自分で準備しておくことはありますか？", "a": "錠前のメーカーと型番、交換したい理由、必要な鍵の本数、希望する鍵の種類を整理しておくと、見積もりを比べやすくなります。ドアの側面の金属板（フロントプレート）の刻印を写真に撮っておくと、業者に伝えるときに便利です。"}, {"q": "鍵交換は鍵開けと同じ日に頼めますか？", "a": "鍵業者によっては、鍵開けの後にそのままシリンダー交換に対応できる場合があります。ただし、オートロック連動の鍵や特殊なシリンダーは部品の取り寄せが必要になることがあります。急がない場合は、後日あらためて複数の見積もりを比べる方法もあります。"}, {"q": "鍵交換にかかる時間はどのくらいですか？", "a": "部品の在庫がある場合と、取り寄せが必要な場合で大きく異なります。見積もりの際に、部品の手配にかかる日数と、当日の作業時間の目安を確認してください。"}];

const related = [{"href": "/door-koukan-vs-kagi-koukan/", "label": "ドアごと交換と鍵だけ交換の判断基準"}, {"href": "/cylinder-koukan-diy/", "label": "シリンダー交換をDIYで行う方法"}, {"href": "/chintai-kagi-koukan-hiyou/", "label": "賃貸の鍵交換費用は誰が負担？"}, {"href": "/ikkodate-kagi-koukan/", "label": "一戸建ての鍵交換で確認すること"}, {"href": "/bunjo-mansion-kagi-koukan/", "label": "分譲マンションの玄関の鍵交換"}, {"href": "/kagi-koukan-timing/", "label": "鍵交換のタイミング"}];

const sources = [{"label": "美和ロック よくあるご質問「錠前が故障したのですが、どこで修理してもらえますか？」", "url": "https://www.miwa-lock.jp/faq/show/48?site_domain=default", "date": "2026年10月17日確認"}, {"label": "美和ロック よくあるご質問「美和ロックの製品記号はどこに書いてありますか？」", "url": "https://www.miwa-lock.jp/faq/show/15?site_domain=default", "date": "2026年10月17日確認"}, {"label": "美和ロック よくあるご質問「マンションでオートロック連動の鍵交換をしたいが、どうすればいいですか？」", "url": "https://www.miwa-lock.jp/faq/show/36?site_domain=default", "date": "2026年10月17日確認"}, {"label": "国土交通省「マンション標準管理規約（単棟型）」令和7年改正版", "url": "https://www.mlit.go.jp/jutakukentiku/house/content/001999022.pdf", "date": "2026年10月17日確認"}];

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
    { "@type": "ListItem", position: 2, name: "玄関の鍵交換はどこに頼む？" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "玄関の鍵交換はどこに頼む？依頼先の違いと住まい別の連絡先",
  description: "玄関の鍵を交換したいときに、どこへ頼めばよいかを住まい別・依頼先別に整理しました。賃貸は管理会社・大家、分譲マンションは管理規約とオートロック連動の確認、一戸建ては自分で手配するのが基本です。鍵屋・ホームセンター・錠前メーカー・リフォーム会社の役割の違いと、依頼前に確認する錠前の型番までご説明します。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-10-17",
  dateModified: "2026-10-17",
};

export default function GenkanKagiKoukanDokoniPage() {
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
            <span className="text-text-secondary">玄関の鍵交換はどこに頼む？</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            玄関の鍵交換はどこに頼む？依頼先の違いと住まい別の連絡先
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年10月17日</p>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">賃貸は管理会社・大家、分譲マンションは管理会社に規約を確認してから、一戸建ては鍵屋などへ自分で依頼するのが基本です。</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: "賃貸住宅の玄関の鍵は建物の設備のため、<strong>交換の前に管理会社・大家に連絡</strong>します。分譲マンションは、国土交通省のマンション標準管理規約で「錠」は専有部分とされていますが、<strong>オートロックと連動する鍵の場合は物件ごとの手配が必要</strong>なため、管理会社に確認してから依頼します。一戸建ては、<strong>出張の鍵屋に依頼するのが一般的</strong>です。なお、美和ロックはメーカー直接の現地修理を受け付けておらず、同社認定のサービス代行店（SD店）への依頼を案内しています。" }} />
          </div>

          <p className="text-sm text-text-secondary leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: "鍵をなくした、引っ越してきた、防犯性の高い鍵に替えたいなど、玄関の鍵を交換したい理由はさまざまです。しかし、いざ交換しようとすると、鍵屋に頼むのか、管理会社に頼むのか、ホームセンターで部品を買えばよいのか、迷う方も多くいます。" }} />
          <p className="text-sm text-text-secondary leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: "この記事では、住まいの種類ごとに最初に連絡する相手と、依頼先ごとの役割の違いを整理します。交換の時期の考え方は<a href=\"/kagi-koukan-timing/\" class=\"text-primary underline\">鍵交換のタイミング</a>、費用の目安は<a href=\"/ryokin/\" class=\"text-primary underline\">鍵開け・鍵交換の料金相場</a>をご覧ください。" }} />

          <h2 className="text-xl font-bold text-text-primary mb-4">住まい別の最初の連絡先</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm bg-white rounded-xl border border-black/10">
              <thead className="bg-surface-alt"><tr><th className="text-left font-bold text-text-primary px-3 py-2 border-b border-black/10">住まい</th><th className="text-left font-bold text-text-primary px-3 py-2 border-b border-black/10">最初の連絡先</th><th className="text-left font-bold text-text-primary px-3 py-2 border-b border-black/10">理由・注意点</th></tr></thead>
              <tbody>
                {rows0.map((r, i) => (
                  <tr key={i} className="border-b border-black/5 align-top">
                    {r.map((c, j) => (
                      <td key={j} className={j === 0 ? "px-3 py-2 font-medium text-text-primary whitespace-nowrap" : "px-3 py-2 text-text-secondary leading-relaxed"} dangerouslySetInnerHTML={{ __html: c }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mb-10" />
          <h2 className="text-xl font-bold text-text-primary mb-4">依頼先ごとの役割の違い</h2>
          <div className="space-y-4 mb-10">
            {items1.map((c, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{i + 1}. {c.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: c.desc }} />
              </div>
            ))}
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-4">依頼先ごとの向いているケース</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm bg-white rounded-xl border border-black/10">
              <thead className="bg-surface-alt"><tr><th className="text-left font-bold text-text-primary px-3 py-2 border-b border-black/10">依頼先</th><th className="text-left font-bold text-text-primary px-3 py-2 border-b border-black/10">向いているケース</th><th className="text-left font-bold text-text-primary px-3 py-2 border-b border-black/10">確認すること</th></tr></thead>
              <tbody>
                {rows2.map((r, i) => (
                  <tr key={i} className="border-b border-black/5 align-top">
                    {r.map((c, j) => (
                      <td key={j} className={j === 0 ? "px-3 py-2 font-medium text-text-primary whitespace-nowrap" : "px-3 py-2 text-text-secondary leading-relaxed"} dangerouslySetInnerHTML={{ __html: c }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: "上記は依頼先を選ぶ際の観点を整理したもので、各店舗・業者の対応内容は個別にご確認ください。" }} />
          <h2 className="text-xl font-bold text-text-primary mb-4">依頼する前に確認しておくこと</h2>
          <div className="bg-surface-alt rounded-xl p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: "依頼先にかかわらず、<strong>錠前のメーカーと型番</strong>が分かると、適合する部品の確認がスムーズになります。美和ロックの場合、ドアの側面にある金属板（フロントプレート）の「MIWA」の刻印の下に、シリーズ名が刻印されています。ただし、製品を特定するための記号の一部は製品本体にないため、特定が必要な場合はサービス代行店に相談するよう案内されています。錠前の種類の見分け方は<a href=\"/joumae-type-zukan/\" class=\"text-primary underline\">錠前タイプ図鑑</a>をご覧ください。" }} />
            <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: "あわせて、交換したい理由（紛失・防犯強化・不具合）、交換後に必要な鍵の本数、ディンプルキーなど希望する鍵の種類を整理しておくと、見積もりを比べやすくなります。鍵の種類と防犯性の目安は<a href=\"/dimple-key/\" class=\"text-primary underline\">ディンプルキーとは</a>や<a href=\"/cp-nintei-jou/\" class=\"text-primary underline\">CP認定錠とは</a>で解説しています。" }} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-4">マンションでオートロックと連動している鍵の場合</h2>
          <div className="bg-white rounded-xl border border-black/10 p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: "1本の鍵で住戸の玄関と共用エントランスの両方を開けられるマンションでは、交換用のシリンダーにも同じ機能を持たせる必要があります。美和ロックは、このような鍵のシステムでシリンダーを追加・交換する場合、<strong>物件名（建築時の工事名称）・住所・建設会社名</strong>を添えて発注してもらい、鍵の構成を確認したうえで製品を手配すると案内しています。" }} />
            <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: "このため、オートロック連動の鍵は、その場で手持ちの部品に交換することができない場合があります。まず管理会社に連絡し、建物の鍵の構成と手配の方法を確認してください。" }} />
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">鍵交換の料金と業者を比較する</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">依頼先が決まったら、同じ条件で複数の見積もりを比べると、部品の種類と総額の違いが分かりやすくなります。</p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を詳しく見る</a>
              <a href="/ryokin-index/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">各社の公式料金を見る</a>
            </div>
          </div>

          <h2 className="text-xl font-bold text-text-primary mb-4">玄関の鍵交換の依頼先に関するよくある質問</h2>
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
