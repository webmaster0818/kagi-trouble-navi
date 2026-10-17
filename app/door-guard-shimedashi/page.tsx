import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ドアガード（ドアチェーン）がかかって家に入れないとき｜家族が中にいる場合・いない場合の対処と注意点 | 鍵トラブルナビ",
  description:
    "鍵は開いたのにドアガード（ドアチェーン）がかかっていて家に入れないときの対処を、家族が中にいる場合といない場合に分けてご説明します。中の人の応答がないときの119番・110番の判断、管理会社や鍵業者への依頼、隙間から無理に外そうとしてはいけない理由、再発を防ぐ方法までまとめました。",
  alternates: { canonical: "https://kagi-trouble-navi.com/door-guard-shimedashi/" },
};

const rows0 = [["家族が中にいて、連絡がつく", "電話・インターホンで外してもらう", "—"], ["家族が中にいるはずだが、応答がない", "電話・インターホン・呼びかけを続ける", "急病などのおそれがあれば119番。事件性が疑われる場合は110番"], ["中に誰もいないはずなのにかかっている", "無理に開けず、室内に人がいないか確認する", "不審な点があれば110番。なければ管理会社・鍵業者に相談"], ["賃貸・分譲マンションで外せない", "管理会社・管理人に連絡する", "管理会社の指示に従って鍵業者を手配"]];

const items1 = [{"title": "電話・インターホンで呼びかける", "desc": "まず家族の携帯電話に電話をかけ、つながらなければインターホンを鳴らします。眠っている場合は、時間をおいて何度か呼びかけてください。"}, {"title": "応答がなく、体調が心配な場合は119番", "desc": "高齢の家族や持病のある家族が中にいて応答がない場合は、急病のおそれがあります。ためらわずに119番に通報し、ドアガードがかかっていて入れないことを伝えてください。"}, {"title": "子どもがかけてしまった場合", "desc": "小さな子どもが内側からかけてしまい、外し方が分からない場合があります。落ち着いて外し方を伝え、外せない場合や子どもが一人で長時間いる場合は、管理会社や鍵業者に相談してください。子どものいたずら対策は<a href=\"/kodomo-pet-kagi-taisaku/\" class=\"text-primary underline\">子ども・ペットの鍵トラブル対策</a>で解説しています。"}];

const items2 = [{"title": "室内に人がいないかを確認する", "desc": "誰もいないはずなのにドアガードがかかっている場合は、室内に人がいる可能性も考えられます。無理に入らず、隙間から声をかけて確認してください。不審な点がある場合は110番に通報します。"}, {"title": "閉めた拍子にかかることがある", "desc": "ドアを閉めた振動で、ドアガードのアームが倒れてかかる場合があります。不審な点がなければ、管理会社や鍵業者に相談してください。"}, {"title": "管理会社・管理人に連絡する", "desc": "賃貸住宅やマンションでは、ドアガードはドアに取り付けられた設備です。外すために部品を壊す可能性がある場合は、先に管理会社や管理人に相談してください。"}, {"title": "鍵業者に依頼する", "desc": "鍵業者に依頼する場合は、電話で「鍵は開いているが、ドアガード（またはドアチェーン）がかかって入れない」と状況を正確に伝えてください。鍵開けとは作業内容が異なるため、対応の可否と総額の見積もりを確認してから依頼します。依頼時の確認事項は<a href=\"/kagiya-erabikata/\" class=\"text-primary underline\">鍵屋の選び方</a>をご覧ください。"}];

const rows3 = [["ドアガード", "U字型などの金属製のアームを、扉側の受け金具にかける形式", "ドアが数センチ開いたところで、金属のアームに当たって止まる"], ["ドアチェーン", "鎖の先の金具を、扉側のレールに差し込む形式", "ドアが数センチ開いたところで、鎖が張って止まる"]];

const items4 = [{"title": "ドアを強く引く・体当たりする", "desc": "ドアガードの取り付け部分やドア枠が変形し、修理費用がかかるおそれがあります。賃貸住宅では原状回復の対象になる場合があります。"}, {"title": "隙間から手や工具を差し込む", "desc": "ドアの隙間に手や腕を入れると、ドアが閉まったときに挟まれてけがをするおそれがあります。工具を差し込むと、ドアや塗装を傷つける原因にもなります。"}, {"title": "インターネットの解除方法を自己流で試す", "desc": "ドアガードの形状はメーカーや製品によって異なります。製品に合わない方法を試すと、部品を壊して交換が必要になる場合があります。"}];

const faqs = [{"q": "ドアガードは外から外せますか？", "a": "ドアガードやドアチェーンは室内側から操作する設備のため、外から外すことは基本的に想定されていません。中にいる家族に外してもらうか、管理会社や鍵業者に相談してください。"}, {"q": "家族が中にいるはずなのに応答がありません。どうすればよいですか？", "a": "急病などのおそれがある場合は、ためらわずに119番に通報し、ドアガードがかかっていて入れないことを伝えてください。事件性が疑われる場合は110番に通報してください。"}, {"q": "鍵業者に頼む場合、何を伝えればよいですか？", "a": "鍵は開いているがドアガード（ドアチェーン）がかかって入れないこと、ドアの種類（戸建て・マンション）を伝えてください。鍵開けとは作業内容が異なるため、対応の可否と総額の見積もりを確認してから依頼します。"}, {"q": "ドアガードを壊して入った場合、修理は必要ですか？", "a": "部品が変形・破損した場合は交換が必要です。賃貸住宅では、管理会社に連絡して修理の手配と費用負担を確認してください。"}, {"q": "ドアガードを外してもらう作業の料金はいくらですか？", "a": "業者や作業の内容によって異なります。鍵開けとは作業内容が異なるため、電話で状況を正確に伝え、出張料を含めた総額の見積もりと、見積もり後に断った場合の費用を確認してから依頼してください。"}];

const related = [{"href": "/shimedashi/", "label": "家を締め出された時の対処法"}, {"href": "/autolock-shimedashi-yobou/", "label": "オートロックマンションの締め出し予防策"}, {"href": "/kodomo-pet-kagi-taisaku/", "label": "子ども・ペットの鍵トラブル対策"}, {"href": "/hojo-jou/", "label": "補助錠の選び方"}, {"href": "/kagiya-erabikata/", "label": "鍵屋の選び方"}, {"href": "/shitsunai-toilet-kagi/", "label": "室内ドア・トイレの鍵が開かないとき"}];

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
    { "@type": "ListItem", position: 2, name: "ドアガードがかかって入れないとき" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ドアガード（ドアチェーン）がかかって家に入れないときの対処法",
  description: "鍵は開いたのにドアガード（ドアチェーン）がかかっていて家に入れないときの対処を、家族が中にいる場合といない場合に分けてご説明します。中の人の応答がないときの119番・110番の判断、管理会社や鍵業者への依頼、隙間から無理に外そうとしてはいけない理由、再発を防ぐ方法までまとめました。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-10-17",
  dateModified: "2026-10-17",
};

export default function DoorGuardShimedashiPage() {
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
            <span className="text-text-secondary">ドアガードがかかって入れないとき</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            ドアガード（ドアチェーン）がかかって家に入れないときの対処法
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年10月17日</p>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">ドアガードは室内側から操作する設備のため、まず中にいる家族に連絡し、応答がなく体調が心配な場合はためらわずに119番に通報してください。</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: "ドアガードやドアチェーンは、室内側からかけ外しする補助的な錠です。鍵を開けてもドアガードがかかっていると、ドアは少ししか開きません。<strong>中に家族がいる場合は電話やインターホンで外してもらうのが基本</strong>です。<strong>呼びかけても応答がなく、急病などのおそれがある場合は119番</strong>に通報してください。中に誰もいないのにかかっている場合や、外してもらえない場合は、管理会社や鍵業者に相談します。" }} />
          </div>

          <p className="text-sm text-text-secondary leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: "鍵を開けてドアを引いたら、数センチ開いたところで止まってしまった。このような場合は、室内側のドアガード（U字型のアーム）やドアチェーンがかかっていることが原因です。家族が内側からかけたまま眠ってしまった、子どもがいたずらでかけたなど、原因はさまざまです。" }} />
          <p className="text-sm text-text-secondary leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: "ドアの隙間から手や工具を入れて外そうとすると、けがやドアの破損につながるおそれがあります。この記事では、状況別の対処の順番と、業者に依頼する場合の伝え方、再発を防ぐ方法をご説明します。鍵そのものがなくて入れない場合は、<a href=\"/shimedashi/\" class=\"text-primary underline\">家を締め出された時の対処法</a>をご覧ください。" }} />

          <h2 className="text-xl font-bold text-text-primary mb-4">状況別の対処の順番</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm bg-white rounded-xl border border-black/10">
              <thead className="bg-surface-alt"><tr><th className="text-left font-bold text-text-primary px-3 py-2 border-b border-black/10">状況</th><th className="text-left font-bold text-text-primary px-3 py-2 border-b border-black/10">最初に行うこと</th><th className="text-left font-bold text-text-primary px-3 py-2 border-b border-black/10">次の手段</th></tr></thead>
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
          <p className="text-xs text-text-muted leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: "命に関わるおそれがある場合は、費用や手順を考えるより先に119番・110番へ通報してください。" }} />
          <h2 className="text-xl font-bold text-text-primary mb-4">中に家族がいる場合の対処</h2>
          <div className="space-y-4 mb-10">
            {items1.map((c, i) => (
              <div key={i} className="bg-surface-alt rounded-xl p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{i + 1}. {c.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: c.desc }} />
              </div>
            ))}
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-4">中に誰もいない場合の対処</h2>
          <div className="space-y-4 mb-10">
            {items2.map((c, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-5">
                <h3 className="font-bold text-text-primary mb-1.5">{i + 1}. {c.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: c.desc }} />
              </div>
            ))}
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-4">ドアガードとドアチェーンの違い</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm bg-white rounded-xl border border-black/10">
              <thead className="bg-surface-alt"><tr><th className="text-left font-bold text-text-primary px-3 py-2 border-b border-black/10">種類</th><th className="text-left font-bold text-text-primary px-3 py-2 border-b border-black/10">形状</th><th className="text-left font-bold text-text-primary px-3 py-2 border-b border-black/10">かかっているときの見分け方</th></tr></thead>
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
          <p className="text-xs text-text-muted leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: "いずれも室内側からかけ外しする補助的な錠で、在宅時に来訪者の確認をするための設備です。外出時の施錠には使われません。補助錠の種類は<a href=\"/hojo-jou/\" class=\"text-primary underline\">補助錠の選び方</a>で解説しています。" }} />
          <h2 className="text-xl font-bold text-text-primary mb-4">避けるべき行動</h2>
          <div className="space-y-4 mb-10">
            {items4.map((c, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-600 mb-1.5">{i + 1}. {c.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: c.desc }} />
              </div>
            ))}
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-4">賃貸住宅・マンションでの注意点</h2>
          <div className="bg-white rounded-xl border border-black/10 p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: "賃貸住宅では、ドアガードやドアチェーンも建物の設備です。外すために部品を壊した場合や、取り付け部分が変形した場合は、修理の手配と費用負担について管理会社・大家の判断が必要になります。業者を呼ぶ前に管理会社に連絡し、手配の方法を確認してください。" }} />
            <p className="text-sm text-text-secondary leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: "分譲マンションでは、玄関扉の本体は共用部分として扱われることが一般的です。ドアガードの交換や取り付け位置の変更など、扉本体にかかわる作業が必要になった場合は、管理会社に確認してから依頼してください。扱いの詳細は<a href=\"/bunjo-mansion-kagi-koukan/\" class=\"text-primary underline\">分譲マンションの玄関の鍵交換</a>で解説しています。" }} />
            <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: "管理人が常駐しているマンションでは、管理人室に連絡すると、対応の方法を案内してもらえる場合があります。夜間は管理会社の緊急連絡先を確認してください。" }} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-4">再発を防ぐための工夫</h2>
          <div className="bg-surface-alt rounded-xl p-5 mb-10">
            <p className="text-sm text-text-secondary leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: "家族の誰かが外出しているときは、ドアガードをかけないというルールを家族で共有しておくと、締め出しを防げます。帰宅が遅くなる家族がいる日は、先に休む人がかけないようにしておいてください。" }} />
            <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: "ドアガードは防犯上、在宅時の来訪者対応に役立つ設備です。外出中の防犯を強化したい場合は、室外から施錠できる補助錠の設置を検討してください。選び方は<a href=\"/hojo-jou/\" class=\"text-primary underline\">補助錠の選び方</a>、オートロックの締め出し予防は<a href=\"/autolock-shimedashi-yobou/\" class=\"text-primary underline\">オートロックマンションの締め出し予防策</a>で解説しています。" }} />
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">締め出しの対処と料金を確認する</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">ドアガード以外の原因で入れない場合や、鍵業者への依頼を検討している場合は、対処法と料金の目安をあわせてご確認ください。</p>
            <div className="flex flex-wrap gap-2">
              <a href="/shimedashi/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">締め出しの対処法を見る →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を詳しく見る</a>
              <a href="/agents/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">鍵業者を比較する</a>
            </div>
          </div>

          <h2 className="text-xl font-bold text-text-primary mb-4">ドアガード・ドアチェーンに関するよくある質問</h2>
          <div className="space-y-3 mb-10">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-xl border border-black/10 overflow-hidden">
                <summary className="px-5 py-4 cursor-pointer font-medium text-text-primary text-sm">Q. {f.q}</summary>
                <div className="px-5 pb-4 text-sm text-text-secondary leading-relaxed">A. {f.a}</div>
              </details>
            ))}
          </div>


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
