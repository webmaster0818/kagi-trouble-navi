import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "分譲マンションの玄関の鍵交換｜管理規約での錠の扱い・オートロック連動の鍵・管理会社への確認の手順 | 鍵トラブルナビ",
  description:
    "分譲マンションで玄関の鍵を交換したいときに確認することを、国土交通省のマンション標準管理規約と錠前メーカーの公式情報にもとづいて整理しました。錠は専有部分・扉本体は共用部分という扱い、オートロック連動の鍵を交換するときに必要な物件情報、管理会社への確認から交換までの手順をご説明します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/bunjo-mansion-kagi-koukan/" },
};

const rows0 = [["錠（鍵・シリンダー）", "専有部分", "第7条第2項第二号「玄関扉は、錠及び内部塗装部分を専有部分とする。」"], ["玄関扉の内側の塗装", "専有部分", "同上"], ["玄関扉の本体（錠・内部塗装部分を除く）", "共用部分", "第22条関係コメント①（専有部分に含まれない開口部は共用部分として扱う）"]];

const items3 = [{"title": "管理規約と使用細則を確認する", "desc": "玄関扉や錠の扱い、工事の届出が必要かどうかを、管理規約と使用細則で確認します。手元にない場合は管理会社に問い合わせてください。"}, {"title": "管理会社に交換の意向を伝える", "desc": "交換の理由（紛失・防犯強化・不具合）と、オートロック連動の鍵かどうかを確認します。建物の鍵の構成や、手配に必要な物件情報を教えてもらえる場合があります。"}, {"title": "錠前の型番と鍵番号を確認する", "desc": "ドアの側面の金属板（フロントプレート）の刻印や、鍵に刻印された鍵番号を確認します。鍵番号は人に見せないよう注意してください。見方は<a href=\"/key-number-aikagi/\" class=\"text-primary underline\">キーナンバーとは</a>で解説しています。"}, {"title": "業者に見積もりを依頼する", "desc": "オートロック連動の鍵であること、物件情報が分かっていることを伝え、部品の取り寄せにかかる日数と総額の見積もりを確認します。依頼先の選び方は<a href=\"/genkan-kagi-koukan-dokoni/\" class=\"text-primary underline\">玄関の鍵交換はどこに頼む？</a>をご覧ください。"}, {"title": "交換後に必要な届出を行う", "desc": "管理規約や使用細則で届出が定められている場合は、交換後に管理会社に届け出ます。鍵の本数もあわせて記録しておいてください。"}];

const faqs = [{"q": "分譲マンションの玄関の鍵は、自分で交換してよいのですか？", "a": "国土交通省のマンション標準管理規約では、玄関扉の錠は専有部分とされています。ただし、実際の扱いは各マンションの管理規約によるため、交換の前に管理規約と使用細則を確認し、管理会社に相談してください。"}, {"q": "オートロックと連動している鍵も、普通の鍵と同じように交換できますか？", "a": "同じ方法ではできない場合があります。美和ロックは、玄関と共用エントランスの両方を開けられる鍵のシリンダーを交換する場合、物件名（建築時の工事名称）・住所・建設会社名を添えて発注するよう案内しています。"}, {"q": "玄関ドアに補助錠を付けたい場合はどうすればよいですか？", "a": "扉に穴を開ける工事などは、共用部分である扉本体にかかわります。標準管理規約では、開口部の改良工事は管理組合が行うことを原則とし、区分所有者が行う場合は理事長の承認を得る手続きが定められています。事前に管理会社に確認してください。"}, {"q": "鍵交換の費用は管理組合が負担してくれますか？", "a": "錠は専有部分とされているため、標準管理規約の考え方では、鍵の交換は区分所有者の負担で行うことが一般的です。実際の扱いは各マンションの管理規約をご確認ください。"}, {"q": "賃貸に出している分譲マンションの鍵は、誰が交換を手配しますか？", "a": "錠は区分所有者の専有部分とされているため、オーナー（区分所有者）が手配するのが一般的です。入居者から交換の申し出があった場合の扱いは賃貸借契約によるため、管理会社と相談してください。"}, {"q": "管理会社に連絡せずに鍵を交換してしまいました。どうすればよいですか？", "a": "交換した内容（日付・業者・交換した部品）を管理会社に伝え、管理規約や使用細則で必要な届出がないかを確認してください。オートロックと連動する鍵だった場合は、新しい鍵で共用エントランスを開けられるかもあわせて確認します。"}];

const related = [{"href": "/genkan-kagi-koukan-dokoni/", "label": "玄関の鍵交換はどこに頼む？"}, {"href": "/autolock-shimedashi-yobou/", "label": "オートロックマンションの締め出し予防策"}, {"href": "/chintai-kagi-koukan-hiyou/", "label": "賃貸の鍵交換費用は誰が負担？"}, {"href": "/junsei-key-saihakkou/", "label": "純正キー・セキュリティカードの再発行方法"}, {"href": "/cylinder-koukan-diy/", "label": "シリンダー交換をDIYで行う方法"}, {"href": "/door-koukan-vs-kagi-koukan/", "label": "ドアごと交換と鍵だけ交換の判断基準"}];

const sources = [{"label": "国土交通省「マンション標準管理規約（単棟型）」令和7年改正版（第7条・第22条とそのコメント）", "url": "https://www.mlit.go.jp/jutakukentiku/house/content/001999022.pdf", "date": "2026年10月17日確認"}, {"label": "国土交通省「住宅：マンション管理」", "url": "https://www.mlit.go.jp/jutakukentiku/house/jutakukentiku_house_tk5_000052.html", "date": "2026年10月17日確認"}, {"label": "美和ロック よくあるご質問「マンションでオートロック連動の鍵交換をしたいが、どうすればいいですか？」", "url": "https://www.miwa-lock.jp/faq/show/36?site_domain=default", "date": "2026年10月17日確認"}, {"label": "美和ロック よくあるご質問「今使っている鍵に合わせて、シリンダー（鍵穴）の手配が可能ですか？」", "url": "https://www.miwa-lock.jp/faq/show/35?site_domain=default", "date": "2026年10月17日確認"}];

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
    { "@type": "ListItem", position: 2, name: "分譲マンションの鍵交換" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "分譲マンションの玄関の鍵交換｜管理規約での扱いとオートロック連動の鍵",
  description: "分譲マンションで玄関の鍵を交換したいときに確認することを、国土交通省のマンション標準管理規約と錠前メーカーの公式情報にもとづいて整理しました。錠は専有部分・扉本体は共用部分という扱い、オートロック連動の鍵を交換するときに必要な物件情報、管理会社への確認から交換までの手順をご説明します。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-10-17",
  dateModified: "2026-10-17",
};

export default function BunjoMansionKagiKoukanPage() {
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
            <span className="text-text-secondary">分譲マンションの鍵交換</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            分譲マンションの玄関の鍵交換｜管理規約での扱いとオートロック連動の鍵
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年10月17日</p>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">分譲マンションの玄関の錠は、標準管理規約では専有部分とされていますが、交換の前に自分のマンションの管理規約とオートロック連動の有無を管理会社に確認することが基本です。</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: "国土交通省のマンション標準管理規約（令和7年改正）第7条では、「玄関扉は、錠及び内部塗装部分を専有部分とする。」とされ、錠は区分所有者の専有部分です。一方、玄関扉の本体は共用部分として扱われます。また、<strong>1本の鍵で住戸の玄関と共用エントランスの両方を開けられる鍵</strong>の場合、美和ロックは交換用シリンダーの発注に<strong>物件名（建築時の工事名称）・住所・建設会社名</strong>が必要と案内しています。標準管理規約は各マンションが規約を定める際の参考となるひな形のため、実際の扱いは自分のマンションの管理規約をご確認ください。" }} />
          </div>

          <p className="text-sm text-text-secondary leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: "分譲マンションは自分の持ち物であるため、鍵の交換も自由にできると考えがちです。しかし、マンションには建物全体の管理規約があり、玄関扉のどこまでが自分の所有で、どこからが共用部分なのかが定められています。また、オートロックと連動する鍵は、一般的な鍵と同じ方法では交換できない場合があります。" }} />
          <p className="text-sm text-text-secondary leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: "この記事では、管理規約での玄関扉と錠の扱い、オートロック連動の鍵の注意点、管理会社への確認から交換までの手順をご説明します。賃貸住宅にお住まいの場合は<a href=\"/chintai-kagi-koukan-hiyou/\" class=\"text-primary underline\">賃貸の鍵交換費用は誰が負担？</a>をご覧ください。" }} />

          <h2 className="text-xl font-bold text-text-primary mb-4">標準管理規約での玄関扉の扱い</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm bg-white rounded-xl border border-black/10">
              <thead className="bg-surface-alt"><tr><th className="text-left font-bold text-text-primary px-3 py-2 border-b border-black/10">部分</th><th className="text-left font-bold text-text-primary px-3 py-2 border-b border-black/10">扱い</th><th className="text-left font-bold text-text-primary px-3 py-2 border-b border-black/10">根拠</th></tr></thead>
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
          <p className="text-xs text-text-muted leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: "上記は国土交通省のマンション標準管理規約（単棟型・令和7年改正版）の規定です。標準管理規約は各マンションが管理規約を定める際の参考として示されているもので、実際の扱いはマンションごとの管理規約によります。" }} />
          <h2 className="text-xl font-bold text-text-primary mb-4">玄関扉の改良工事の扱い</h2>
          <div className="bg-white rounded-xl border border-black/10 p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: "標準管理規約第22条では、窓枠・窓ガラス・玄関扉などの開口部について、防犯・防音・断熱などの住宅の性能の向上に資する改良工事は、<strong>管理組合がその責任と負担において計画修繕として実施する</strong>とされています。" }} />
            <p className="text-sm text-text-secondary leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: "そのうえで、管理組合が工事を速やかに実施できない場合には、<strong>区分所有者があらかじめ理事長に申請して承認を受けることにより、自分の責任と負担で工事を実施できる</strong>と定められています。承認・不承認の判断は理事会の決議によるとされています。" }} />
            <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: "鍵（シリンダー）の交換だけであれば専有部分の範囲ですが、扉に新しく穴を開けて補助錠を付ける、扉の外側の見た目が変わる部品を取り付けるといった工事は、共用部分である扉本体にかかわります。このような工事を検討する場合は、事前に管理会社に確認してください。補助錠の選び方は<a href=\"/hojo-jou/\" class=\"text-primary underline\">補助錠の選び方</a>、ドアごとの交換は<a href=\"/door-koukan-vs-kagi-koukan/\" class=\"text-primary underline\">ドアごと交換と鍵だけ交換の判断基準</a>で解説しています。" }} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-4">オートロックと連動する鍵の場合</h2>
          <div className="bg-surface-alt rounded-xl p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: "オートロックのあるマンションでは、1本の鍵で住戸の玄関と共用エントランスのオートロックの両方を開けられる仕組みが採用されていることがあります。このような鍵の仕組みでは、各住戸の鍵が共用エントランスの鍵穴にも合うように、建物全体で鍵の構成が設計されています。" }} />
            <p className="text-sm text-text-secondary leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: "美和ロックは、このような鍵のシステム（逆マスターキー）でシリンダーを追加・交換する場合、<strong>①物件名（建築時の工事名称）、②住所、③建設会社（ゼネコン）名</strong>を添えて発注してもらい、鍵の構成の情報を確認したうえで製品を手配すると案内しています。ただし、シリンダーの種類によっては製造が終了しており、手配できない場合があります。" }} />
            <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: "市販のシリンダーにその場で交換すると、新しい鍵で共用エントランスを開けられなくなるおそれがあります。オートロック連動の鍵かどうか分からない場合は、交換の前に管理会社にご確認ください。" }} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-4">管理会社への確認から交換までの手順</h2>
          <div className="space-y-4 mb-10">
            {items3.map((c, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{i + 1}. {c.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: c.desc }} />
              </div>
            ))}
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵をなくしたときの考え方</h2>
          <div className="bg-surface-alt rounded-xl p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: "鍵をなくした場合、住戸の玄関の鍵だけでなく、共用エントランスの安全にもかかわります。オートロック連動の鍵をなくした場合は、早めに管理会社に連絡し、交換の方法を相談してください。紛失時の手順は<a href=\"/kagi-funshitsu/\" class=\"text-primary underline\">鍵をなくした時の対処法</a>、オートロックの締め出しの予防は<a href=\"/autolock-shimedashi-yobou/\" class=\"text-primary underline\">オートロックマンションの締め出し予防策</a>で解説しています。" }} />
            <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: "登録制の鍵（セキュリティカード付きの鍵など）は、合鍵の注文にカードの番号が必要な場合があります。再発行の流れは<a href=\"/junsei-key-saihakkou/\" class=\"text-primary underline\">純正キー・セキュリティカードの再発行方法</a>をご覧ください。" }} />
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">マンションの鍵交換を業者に相談する</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">オートロック連動の鍵は部品の取り寄せが必要な場合があります。管理会社に確認した情報を伝えて、日数と総額の見積もりを比べてください。</p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を詳しく見る</a>
              <a href="/genkan-kagi-koukan-dokoni/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">鍵交換の依頼先を確認する</a>
            </div>
          </div>

          <h2 className="text-xl font-bold text-text-primary mb-4">分譲マンションの鍵交換に関するよくある質問</h2>
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
