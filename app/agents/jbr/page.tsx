import Link from "next/link";
import AgentShot from "@/components/AgentShot";
import AgentCompareTable from "@/components/AgentCompareTable";
import VerificationNote from "@/components/VerificationNote";
import type { Metadata } from "next";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/agents/jbr/";
const UPDATED = "2026年10月14日";

export const metadata: Metadata = {
  title: { absolute: "ジャパンベストレスキュー（JBR）の口コミ・評判｜鍵の「生活救急車」は今どこが運営？【2026年10月】｜鍵トラブルナビ" },
  description: "ジャパンベストレスキューシステム（JBR）の口コミ・評判を、鍵・水まわり・社員評価に分け、出典を明記して整理しました。鍵の「生活救急車」は2022年に株式会社生活救急車へ承継され、JBRは2024年3月に上場廃止となっています。現在JBRが提供する会員制の駆けつけサービスと、鍵トラブルの依頼先を解説します。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "ジャパンベストレスキュー（JBR）の口コミ・評判｜鍵の「生活救急車」は今どこが運営？【2026年10月】",
    description: "JBRの口コミ・評判を、出典を明記して整理し、鍵サービスの運営移管の経緯と現在の依頼先を一次情報で解説します。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const toc = [
  ["about", "ジャパンベストレスキュー（JBR）とはどんな会社か"],
  ["history", "鍵の「生活救急車」がJBRから離れた経緯"],
  ["now", "現在のJBRのサービス（会員制の駆けつけ）"],
  ["reviews", "JBRの口コミ・評判（鍵・水まわり・社員評価を分けて）"],
  ["irai", "鍵トラブルの依頼先"],
  ["faq", "よくある質問"],
  ["sources", "本記事の出典・参照元"],
  ["summary", "まとめ"],
];

const timeline = [
  ["1997年2月", "ジャパンベストレスキューシステム株式会社（JBR）創業（名古屋市）", "https://www.jbr.co.jp/company/"],
  ["2022年10月3日", "株式会社アクアライン（6173）が、JBRの完全子会社「駆けつけ事業準備株式会社」の株式51％を取得すると発表（両社の駆けつけBtoC事業の統合が目的）", "https://www.nihon-ma.co.jp/news/20221003_6173-2/"],
  ["2022年11月", "JBRの生活緊急サービス事業（生活救急車）を事業承継", "https://www.seikatu-rescue.jp/company/"],
  ["2022年12月2日", "駆けつけ事業準備株式会社が「株式会社生活救急車」に商号変更", "https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=8180001153391"],
  ["2024年3月25日", "JBRが東証で上場廃止（株式併合による）", "https://www.jpx.co.jp/news/1023/20240222-11.html"],
  ["現在", "株式会社生活救急車は公式サイトで「ジャパンベストレスキューシステム株式会社とは資本関係を含め一切関係ございません」と表明", "https://www.seikatu-rescue.jp/company/"],
];

const reviewSources = [
  { kind: "鍵（承継前のJBR時代の投稿を含む）", site: "みん評「JBRカギの生活救急車」", url: "https://minhyo.jp/jbr-kagi", note: "鍵サービスの口コミ。現在の運営は株式会社生活救急車" },
  { kind: "水まわり", site: "みん評「JBR生活救急車（水トラブル）」", url: "https://minhyo.jp/jbr-water", note: "水まわりサービスの口コミ" },
  { kind: "社員の会社評価（サービスの評価ではない）", site: "転職会議・就活会議など", url: "https://jobtalk.jp/companies/476/answers", note: "「ジャパンベストレスキュー 評判」で上位に出るのは主にこの種類" },
];

const faqs = [
  { q: "ジャパンベストレスキュー（JBR）に鍵開けを直接依頼できますか", a: "JBRの公式サイトで案内している駆けつけは、会員制のカスタマーサポート（安心入居サポート、アクト安心ライフ24、緊急サポート24など）です。会員以外の方が鍵開けを依頼する窓口としては、2022年11月にJBRから事業を承継した株式会社生活救急車の「カギの生活救急車」があります（2026年10月14日確認）。" },
  { q: "鍵の「生活救急車」はJBRのサービスですか", a: "現在はJBRのサービスではありません。生活救急車の事業は2022年11月にJBRから株式会社生活救急車へ承継され、同社は公式サイトで「ジャパンベストレスキューシステム株式会社とは資本関係を含め一切関係ございません」と表明しています。" },
  { q: "JBRは上場していますか", a: "上場していません。JBRは2024年3月25日に東京証券取引所で上場廃止になりました（JPXの公表）。「東証上場のJBRが運営する鍵サービス」という説明は古い情報です。" },
  { q: "賃貸の入居時に入った「安心入居サポート」で鍵開けを依頼できますか", a: "安心入居サポートはJBRの会員制サービスで、公式サイトでは24時間365日の電話受付と緊急駆けつけを案内しています。対象となるトラブルと費用負担は契約によって異なるため、契約書や会員証に記載された番号に電話し、費用の有無を事前にご確認ください。" },
];

export default function JbrPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ジャパンベストレスキュー（JBR）の口コミ・評判｜鍵の「生活救急車」は今どこが運営？",
    description: "JBRの口コミ・評判を鍵・水まわり・社員評価に分けて整理し、鍵サービスの運営移管の経緯と現在の依頼先を一次情報で解説した記事です。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-06-20T00:00:00+09:00",
    dateModified: "2026-10-14T00:00:00+09:00",
    author: { "@type": "Organization", name: "鍵トラブルナビ編集部", url: SITE },
    publisher: { "@type": "Organization", name: "鍵トラブルナビ", url: SITE },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}${PATH}` },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "鍵トラブルナビ", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "鍵業者の口コミ・評判", item: `${SITE}/agents/` },
      { "@type": "ListItem", position: 3, name: "ジャパンベストレスキュー（JBR）の口コミ・評判", item: `${SITE}${PATH}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="bg-white text-slate-800">
        <nav aria-label="パンくず" className="max-w-4xl mx-auto px-4 pt-4 text-xs text-slate-500">
          <ol className="flex flex-wrap gap-1">
            <li><Link href="/" className="hover:underline">鍵トラブルナビ</Link></li>
            <li>/</li>
            <li><Link href="/agents/" className="hover:underline">鍵業者の口コミ・評判</Link></li>
            <li>/</li>
            <li className="text-slate-700">ジャパンベストレスキュー（JBR）の口コミ・評判</li>
          </ol>
        </nav>

        <header className="relative overflow-hidden border-y border-border bg-white text-foreground mt-4">
          <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
            <p className="text-sm font-bold tracking-widest text-primary mb-3">鍵業者の口コミ・評判</p>
            <h1 className="font-bold text-2xl md:text-4xl leading-relaxed mb-4 text-primary-dark">ジャパンベストレスキュー（JBR）の口コミ・評判<br className="hidden md:block" />鍵の「生活救急車」は今どこが運営？</h1>
            <p className="text-text-secondary leading-relaxed max-w-2xl">「JBR 口コミ」「ジャパンベストレスキュー 評判」で表示される情報には、承継前の鍵サービスの口コミ・水まわりの口コミ・社員による会社評価が混在しています。本記事ではそれぞれを分けたうえで、現在のJBRのサービスと鍵トラブルの依頼先を一次情報にもとづいて整理しました。</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded border border-border bg-white px-3 py-1.5 text-sm font-bold text-foreground">鍵の生活救急車＝現在は株式会社生活救急車</span>
              <span className="inline-flex items-center rounded border border-border bg-white px-3 py-1.5 text-sm font-bold text-foreground">JBRは2024年3月上場廃止</span>
              <span className="inline-flex items-center rounded border border-border bg-white px-3 py-1.5 text-sm font-bold text-foreground">JBRの駆けつけは会員制</span>
              <span className="inline-flex items-center rounded border border-border bg-white px-3 py-1.5 text-sm font-bold text-foreground">2026年10月14日 一次確認</span>
            </div>
            <AgentShot slug="jbr" name="JBR（ジャパンベストレスキュー）" priority className="mt-8 md:max-w-[640px]" sizes="(min-width: 768px) 640px, 100vw" />
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
          <p className="text-sm text-slate-500 mb-8">最終更新日：{UPDATED}　／　鍵トラブルナビ編集部</p>

          <nav aria-label="目次" className="mb-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="font-bold text-slate-800 mb-4">この記事の目次</p>
            <ol className="space-y-2 text-sm md:text-base">
              {toc.map(([id, label], i) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-slate-700 hover:text-amber-700 hover:underline">
                    <span className="text-amber-600 font-bold mr-2">{String(i + 1).padStart(2, "0")}</span>{label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <section id="about" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">ジャパンベストレスキュー（JBR）とはどんな会社か</h2>
            <div className="overflow-x-auto">
              <table className="table w-full border border-slate-200 text-sm">
                <tbody>
                  <tr className="border-b border-slate-200"><th className="bg-slate-50 w-40">社名</th><td>ジャパンベストレスキューシステム株式会社</td></tr>
                  <tr className="border-b border-slate-200"><th className="bg-slate-50">創業</th><td>1997年2月</td></tr>
                  <tr className="border-b border-slate-200"><th className="bg-slate-50">本社</th><td>名古屋市中区錦1-10-20 アーバンネット伏見ビル5F</td></tr>
                  <tr className="border-b border-slate-200"><th className="bg-slate-50">代表者</th><td>代表取締役社長 若月光博（2025年9月30日現在）</td></tr>
                  <tr className="border-b border-slate-200"><th className="bg-slate-50">資本金・従業員</th><td>1億円／連結329名・単体244名（2025年9月30日現在）</td></tr>
                  <tr><th className="bg-slate-50">上場</th><td>2024年3月25日に上場廃止（現在は非上場）</td></tr>
                </tbody>
              </table>
              <p className="text-xs text-slate-500 mt-2">出典：<a href="https://www.jbr.co.jp/company/" target="_blank" rel="noopener nofollow" className="underline">JBR 企業概要</a>（2026年10月14日確認）・<a href="https://www.jpx.co.jp/news/1023/20240222-11.html" target="_blank" rel="noopener nofollow" className="underline">JPX 上場廃止等の決定</a></p>
            </div>
          </section>

          <section id="history" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">鍵の「生活救急車」がJBRから離れた経緯</h2>
            <p className="leading-loose mb-5 text-slate-700">「生活救急車」は、もともとJBRのブランドでした。2022年に事業が分離されて別会社（株式会社生活救急車）となり、承継の時点では水まわり修理の株式会社アクアラインが株式の51％を取得しています。現在、株式会社生活救急車は、JBRとは資本関係を含め一切関係がない旨を公式に表明しています。</p>
            <ol className="space-y-3">
              {timeline.map(([d, t, u]) => (
                <li key={d} className="rounded-xl border border-slate-200 p-4">
                  <p className="font-bold text-slate-800 text-sm">{d}</p>
                  <p className="text-sm text-slate-700 leading-relaxed">{t}<a href={u} target="_blank" rel="noopener nofollow" className="ml-1 text-xs text-blue-700 underline">出典</a></p>
                </li>
              ))}
            </ol>
            <p className="text-sm text-slate-600 mt-4">口コミサイトの「JBRカギの生活救急車」には、承継前の投稿も含まれます。現在の生活救急車の料金・口コミは<Link href="/agents/seikatsu-kyukyusha/" className="text-amber-700 underline">鍵の生活救急車の口コミ・評判</Link>で解説しています。</p>
          </section>

          <section id="now" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">現在のJBRのサービス（会員制の駆けつけ）</h2>
            <p className="leading-loose mb-4 text-slate-700">JBRの公式サイトで現在案内している「緊急駆け付けサービス」は、<strong>独自の会員制カスタマーサポート</strong>です。</p>
            <ul className="space-y-2 text-sm text-slate-700 mb-4">
              <li className="rounded-xl border border-slate-200 p-4"><strong>安心入居サポート</strong>：24時間365日電話受付・緊急駆けつけ（賃貸の入居時に加入するケースが多いサービス）</li>
              <li className="rounded-xl border border-slate-200 p-4"><strong>アクト安心ライフ24（年額）／緊急サポート24（月額）</strong>：水まわり・鍵・ガス・電気設備などのトラブルに24時間365日対応する駆けつけサービス</li>
            </ul>
            <p className="leading-loose text-slate-700">現在「JBR」の名称を目にするのは、こうした会員サービスに加入している場合がほとんどです。会員の方は、まず契約書や会員証に記載された番号にお問い合わせください（対象のトラブル・費用負担は契約ごとに異なります）。</p>
            <p className="text-xs text-slate-500 mt-2">出典：<a href="https://www.jbr.co.jp/emergency/" target="_blank" rel="noopener nofollow" className="underline">JBR 緊急駆け付けサービス</a>（2026年10月14日確認）</p>
          </section>

          <section id="reviews" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">JBRの口コミ・評判（鍵・水まわり・社員評価を分けて）</h2>
            <p className="leading-loose mb-5 text-slate-700">「ジャパンベストレスキュー 評判」で表示される情報には、種類の異なる3つの情報が混在しています。読む前に、どの種類の情報かを区別することをおすすめします。</p>
            <div className="overflow-x-auto mb-6">
              <table className="table w-full border border-slate-200 text-sm">
                <thead><tr className="bg-slate-100 text-slate-700"><th>種類</th><th>主な掲載先</th><th>注意</th></tr></thead>
                <tbody>
                  {reviewSources.map((r) => (
                    <tr key={r.kind} className="border-b border-slate-200">
                      <td className="font-medium">{r.kind}</td>
                      <td><a href={r.url} target="_blank" rel="noopener nofollow" className="text-blue-700 underline">{r.site}</a></td>
                      <td className="text-xs text-slate-600">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6">
              <p className="text-slate-700 text-sm leading-relaxed">鍵サービスの口コミ（みん評）を編集部が確認した傾向では、<strong>好意的な声</strong>は「明細・料金を作業前に示してくれた」「全国対応で依頼しやすい」、<strong>否定的な声</strong>は「サイトの表示額と実際の見積もりに差があった」「料金・品質にばらつきがある」です。いずれも承継前のJBR時代の投稿を含みます。</p>
              <p className="text-slate-500 text-xs leading-relaxed mt-3">※ 個別の口コミの引用ではなく、編集部の要約です（2026年7月時点の閲覧に基づく）。件数・平均点は、掲載先で最新の値をご確認ください。</p>
            </div>
          </section>

          <section id="irai" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">鍵トラブルの依頼先</h2>
            <ol className="space-y-3 text-slate-700">
              <li className="flex gap-3"><span className="font-bold text-amber-600">1.</span><span><strong>JBRの会員サービスに加入している場合</strong> → 契約書・会員証に記載の番号へ連絡し、費用の有無を事前に確認</span></li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">2.</span><span><strong>賃貸物件に住んでいる場合</strong> → 管理会社・大家の緊急連絡先へ連絡（鍵の交換には管理会社の承諾が必要な場合が多い）</span></li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">3.</span><span><strong>いずれにも当てはまらない場合</strong> → 鍵業者に直接依頼。旧JBRの鍵サービスを引き継いだのは<Link href="/agents/seikatsu-kyukyusha/" className="text-amber-700 underline">鍵の生活救急車</Link>。全国の加盟店を手配する<Link href="/agents/kagi110ban/" className="text-amber-700 underline">カギ110番</Link>や、自社施工の<Link href="/agents/kagizaru/" className="text-amber-700 underline">鍵猿</Link>との比較も可能です</span></li>
            </ol>
          </section>

          <section id="faq" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">よくある質問</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div key={i} className="collapse collapse-arrow border border-slate-200 rounded-xl bg-white">
                  <input type="checkbox" defaultChecked={i === 0} />
                  <div className="collapse-title font-bold">{f.q}</div>
                  <div className="collapse-content"><p className="text-sm leading-relaxed text-slate-700">{f.a}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section id="sources" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">本記事の出典・参照元</h2>
            <p className="leading-loose mb-4 text-slate-700">確認日：{UPDATED}</p>
            <ul className="space-y-2 text-sm">
              {[
                ["JBR 企業概要", "https://www.jbr.co.jp/company/"],
                ["JBR 緊急駆け付けサービス", "https://www.jbr.co.jp/emergency/"],
                ["JPX 上場廃止等の決定（ジャパンベストレスキューシステム）", "https://www.jpx.co.jp/news/1023/20240222-11.html"],
                ["国税庁法人番号公表サイト（株式会社生活救急車の変更履歴）", "https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=8180001153391"],
                ["日本M&Aセンター M&Aニュース（アクアラインによる株式取得・2022年10月3日）", "https://www.nihon-ma.co.jp/news/20221003_6173-2/"],
                ["株式会社生活救急車 運営企業", "https://www.seikatu-rescue.jp/company/"],
                ["みん評（JBRカギの生活救急車）", "https://minhyo.jp/jbr-kagi"],
              ].map(([l, u]) => (
                <li key={u}><a href={u} target="_blank" rel="noopener nofollow" className="text-amber-700 underline break-all">{l}</a></li>
              ))}
            </ul>
          </section>

          <AgentCompareTable current="jbr" />
          <VerificationNote officialUrl="https://www.jbr.co.jp/" officialLabel="JBR 公式サイト" checkedNote="2026年10月14日確認" />

          <section id="summary" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">まとめ</h2>
            <p className="leading-loose mb-4 text-slate-700">ジャパンベストレスキュー（JBR）は1997年創業の名古屋の会社で、2024年3月に上場廃止となり、現在は会員制の駆けつけサービス（安心入居サポートなど）を提供しています。鍵の「生活救急車」は2022年に株式会社生活救急車へ承継され、現在はJBRと資本関係のない別会社が運営しています。</p>
            <p className="leading-loose mb-4 text-slate-700">「JBR 口コミ」で表示される情報には、承継前の鍵サービス・水まわり・社員評価が混在しています。会員の方は会員窓口へ、会員でない方は生活救急車を含む複数の鍵業者から見積もりを取り、総額で比較して選ぶことをおすすめします。</p>
            <div className="rounded-2xl bg-slate-800 text-white p-6 text-center mt-6">
              <p className="font-bold text-lg mb-2">鍵のトラブルでお困りの方へ</p>
              <p className="text-slate-300 text-sm mb-4">地域・状況に合った鍵業者を比較し、見積もりをご確認ください。</p>
              <Link href="/" className="btn bg-amber-500 hover:bg-amber-600 border-0 text-white">鍵業者を比較して探す</Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
