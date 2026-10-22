#!/usr/bin/env python3
# Generate agent review pages mirroring app/agents/kagi110ban/page.tsx (approved sample).
# A方式: review section is editor-summarized trends with source attribution; NO fabricated individual reviews.
# Adds a 出典・参照元 (source links) section per okina's A-enhancement request.
import json
import sys

# 2026-10-16 停止: このスクリプトの BRANDS は 6/20 時点の値のまま（JBR を一般向け鍵サービスとして紹介・生活救急車を「JBR運営」・公式URL sq.jbr.co.jp 等）。
# 10/14〜15 に app/agents/*/page.tsx を公式の現行値へ直接訂正済みなので、再実行すると誤った記述に巻き戻る。業者ページは page.tsx を直接編集すること。
if "--force-outdated" not in sys.argv:
    sys.exit("gen_agent_pages.py は停止中（BRANDS が 6/20 の古い値）。app/agents/*/page.tsx を直接編集してください。")
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
SITE = "https://kagi-trouble-navi.com"
UPDATED = "2026年6月20日"
UPDATED_ISO = "2026-06-20"

def js(s):  # escape for JS string inside JSON.stringify we use python json; for inline text use as-is in JSX
    return s

# 2026-10-22: BRANDS の中身（jbr・seikatsu-kyukyusha・kagizaru の 6/20 時点の記述）を削除した。
# 「東証上場のJBRが運営」「生活救急車（JBR運営）」「sq.jbr.co.jp」「年間10万件以上の問い合わせ実績」など、
# 公式（2026-10-22確認）と違う／確認できない記述が残っており、--force-outdated で実行すると本番に戻ってしまうため。
# 3社のページは app/agents/<slug>/page.tsx が正。このスクリプトで作り直さないこと。
BRANDS = []

TOC = [
 ["about","{name}とはどんなサービスか"],
 ["service","対応している鍵トラブルの種類"],
 ["price","{name}の料金体系と相場"],
 ["reviews","利用者のリアルな口コミ・評判"],
 ["merit","メリットと注意点"],
 ["recommend","{name}がおすすめな人"],
 ["compare","他社と比較するときのチェックポイント"],
 ["faq","よくある質問"],
 ["sources","この記事の出典・参照元"],
 ["summary","まとめ"],
]

def arr(items): return "[" + ", ".join(json.dumps(x, ensure_ascii=False) for x in items) + "]"

def render(b):
    name=b["name"]; PATH=f"/agents/{b['slug']}/"
    toc=[[i,l.format(name=name)] for i,l in TOC]
    toc_js="[\n"+",\n".join("    "+json.dumps([i,l],ensure_ascii=False) for i,l in toc)+"\n  ]"
    good_js="[\n"+",\n".join("    "+json.dumps({"title":t,"body":bd,"meta":m},ensure_ascii=False) for t,bd,m in b["good"])+"\n  ]"
    bad_js="[\n"+",\n".join("    "+json.dumps({"title":t,"body":bd,"meta":m},ensure_ascii=False) for t,bd,m in b["bad"])+"\n  ]"
    faq_js="[\n"+",\n".join("    "+json.dumps({"q":q,"a":a},ensure_ascii=False) for q,a in b["faqs"])+"\n  ]"
    price_rows="".join(
      f'\n                  <tr className="border-b border-slate-200"><td className="font-medium">{c0}</td><td className="font-bold text-amber-700">{c1}</td><td className="text-sm text-slate-600">{c2}</td></tr>'
      for c0,c1,c2 in b["price"])
    services_js=arr(b["services"])
    badges="".join(f'\n              <span className="badge badge-lg bg-white/15 border-0 text-white">{x}</span>' for x in b["badges"])
    about_ps="".join(f'\n            <p className="leading-loose mb-4 text-slate-700">{p}</p>' for p in b["about"])
    merit_lis="".join(f'\n                  <li>{x}</li>' for x in b["merit"])
    caution_lis="".join(f'\n                  <li>{x}</li>' for x in b["caution"])
    rec_lis="".join(f'\n              <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span>{x}</li>' for x in b["recommend"])
    sum_ps="".join(f'\n            <p className="leading-loose mb-4 text-slate-700">{p}</p>' for p in b["summary"])
    src_lis="".join(f'\n              <li><a href="{u}" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline break-all">{l}</a></li>' for l,u in b["sources"])

    return f'''import Link from "next/link";
import Image from "next/image";
import type {{ Metadata }} from "next";

const SITE = "{SITE}";
const PATH = "{PATH}";
const UPDATED = "{UPDATED}";

export const metadata: Metadata = {{
  title: {{ absolute: {json.dumps(b["title"],ensure_ascii=False)} }},
  description: {json.dumps(b["desc"],ensure_ascii=False)},
  alternates: {{ canonical: `${{SITE}}${{PATH}}` }},
  openGraph: {{
    title: {json.dumps(b["title"].split("｜")[0],ensure_ascii=False)},
    description: {json.dumps(b["ogdesc"],ensure_ascii=False)},
    url: `${{SITE}}${{PATH}}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  }},
}};

const toc = {toc_js};

const goodReviews = {good_js};

const badReviews = {bad_js};

const faqs = {faq_js};

const sources = {arr([list(s) for s in b["sources"]])};

export default function {b["fn"]}() {{
  const articleSchema = {{
    "@context": "https://schema.org",
    "@type": "Article",
    headline: {json.dumps(b["title"].split("｜")[0],ensure_ascii=False)},
    description: {json.dumps(b["ogdesc"],ensure_ascii=False)},
    image: `${{SITE}}/images/kv-top.jpg`,
    datePublished: "{UPDATED_ISO}T00:00:00+09:00",
    dateModified: "{UPDATED_ISO}T00:00:00+09:00",
    author: {{ "@type": "Organization", name: "鍵トラブルナビ編集部", url: SITE }},
    publisher: {{ "@type": "Organization", name: "鍵トラブルナビ", url: SITE }},
    mainEntityOfPage: {{ "@type": "WebPage", "@id": `${{SITE}}${{PATH}}` }},
  }};
  const faqSchema = {{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({{ "@type": "Question", name: f.q, acceptedAnswer: {{ "@type": "Answer", text: f.a }} }})),
  }};
  const breadcrumbSchema = {{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {{ "@type": "ListItem", position: 1, name: "鍵トラブルナビ", item: `${{SITE}}/` }},
      {{ "@type": "ListItem", position: 2, name: "鍵屋レビュー", item: `${{SITE}}/agents/` }},
      {{ "@type": "ListItem", position: 3, name: {json.dumps(name+"の口コミ・評判",ensure_ascii=False)}, item: `${{SITE}}${{PATH}}` }},
    ],
  }};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(articleSchema) }}}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(faqSchema) }}}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(breadcrumbSchema) }}}} />

      <article className="bg-white text-slate-800">
        <nav aria-label="パンくず" className="max-w-4xl mx-auto px-4 pt-4 text-xs text-slate-500">
          <ol className="flex flex-wrap gap-1">
            <li><Link href="/" className="hover:underline">鍵トラブルナビ</Link></li>
            <li>/</li>
            <li><Link href="/agents/" className="hover:underline">鍵屋レビュー</Link></li>
            <li>/</li>
            <li className="text-slate-700">{name}の口コミ・評判</li>
          </ol>
        </nav>

        <header className="relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 text-white mt-4">
          <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
            <p className="text-sm tracking-widest text-amber-300 mb-3">鍵トラブル業者レビュー</p>
            <h1 className="font-bold text-2xl md:text-4xl leading-relaxed mb-4">{name}の口コミ・評判は？<br className="hidden md:block" />料金・対応スピードを徹底調査</h1>
            <p className="text-slate-200 leading-relaxed max-w-2xl">{b["hero_lead"]}</p>
            <div className="mt-6 flex flex-wrap gap-2">{badges}
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
              <Image src="/images/kv-top.jpg" alt="{name}の鍵トラブル解決サービス" width={{1024}} height={{1024}} className="w-full h-56 md:h-72 object-cover" priority />
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
          <p className="text-sm text-slate-500 mb-8">最終更新日：{{UPDATED}}　／　鍵トラブルナビ編集部</p>

          <nav aria-label="目次" className="mb-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="font-bold text-slate-800 mb-4">この記事の目次</p>
            <ol className="space-y-2 text-sm md:text-base">
              {{toc.map(([id, label], i) => (
                <li key={{id}}>
                  <a href={{`#${{id}}`}} className="text-slate-700 hover:text-amber-700 hover:underline">
                    <span className="text-amber-600 font-bold mr-2">{{String(i + 1).padStart(2, "0")}}</span>{{label}}
                  </a>
                </li>
              ))}}
            </ol>
          </nav>

          <section id="about" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">{name}とはどんなサービスか</h2>{about_ps}
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <Image src="/images/{b['slug']}-features.png" alt="{name}の特徴" width={{1200}} height={{500}} className="w-full h-auto" />
            </div>
          </section>

          <section id="service" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">対応している鍵トラブルの種類</h2>
            <p className="leading-loose mb-5 text-slate-700">玄関まわりの鍵だけでなく、金庫や乗り物の鍵まで幅広く対応しています。どこに相談すべきか分からない鍵トラブルも、まとめて相談しやすいのが利点です。</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {{{services_js}.map((s) => (
                <div key={{s}} className="rounded-xl border border-slate-200 p-4 text-center font-medium text-slate-700">{{s}}</div>
              ))}}
            </div>
          </section>

          <section id="price" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">{name}の料金体系と相場</h2>
            <p className="leading-loose mb-5 text-slate-700">料金は出張費・作業費・部材費を含めた総額を事前に提示する形です。作業内容や鍵の種類によって変わるため、最終的な金額は無料見積もりで確認しましょう。</p>
            <div className="overflow-x-auto">
              <table className="table w-full border border-slate-200">
                <thead><tr className="bg-slate-100 text-slate-700"><th>項目</th><th>料金の目安</th><th>備考</th></tr></thead>
                <tbody>{price_rows}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-500 mt-3">※ 料金は変動する場合があります。正確な金額は無料の見積もりでご確認ください。</p>
          </section>

          <section id="reviews" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">利用者のリアルな口コミ・評判</h2>
            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6 mb-6">
              <p className="text-slate-700 text-sm leading-relaxed">{b["review_summary"]}</p>
            </div>
            <h3 className="font-bold text-lg mb-3">良い口コミの傾向</h3>
            <div className="space-y-4 mb-8">
              {{goodReviews.map((r, i) => (
                <div key={{i}} className="rounded-xl border border-slate-200 p-5">
                  <p className="font-bold mb-1">{{r.title}}</p>
                  <p className="text-sm leading-relaxed mb-2 text-slate-700">{{r.body}}</p>
                  <p className="text-xs text-slate-400">{{r.meta}}</p>
                </div>
              ))}}
            </div>
            <h3 className="font-bold text-lg mb-3">気になる口コミ・注意点</h3>
            <div className="space-y-4">
              {{badReviews.map((r, i) => (
                <div key={{i}} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold mb-1">{{r.title}}</p>
                  <p className="text-sm leading-relaxed mb-2 text-slate-700">{{r.body}}</p>
                  <p className="text-xs text-slate-400">{{r.meta}}</p>
                </div>
              ))}}
            </div>
            <p className="text-xs text-slate-500 mt-4">※ 口コミは各種口コミサイト・Googleのクチコミ等で見られる利用者の声をもとに、編集部が傾向を要約したものです（出典は記事末尾の参照元を参照）。感じ方には個人差があります。</p>
          </section>

          <section id="merit" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">メリットと注意点</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-6">
                <h3 className="font-bold text-emerald-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-sm text-slate-700">{merit_lis}
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-rose-200 bg-rose-50 p-6">
                <h3 className="font-bold text-rose-800 mb-3">注意点</h3>
                <ul className="space-y-2 text-sm text-slate-700">{caution_lis}
                </ul>
              </div>
            </div>
          </section>

          <section id="recommend" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">{name}がおすすめな人</h2>
            <ul className="space-y-3 text-slate-700">{rec_lis}
            </ul>
          </section>

          <section id="compare" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">他社と比較するときのチェックポイント</h2>
            <p className="leading-loose mb-4 text-slate-700">鍵業者は料金の安さだけでなく、対応スピードや見積もりの明確さを含めて比較することが大切です。{b["short"]}を他社と比べる際は、次の点を確認すると判断しやすくなります。</p>
            <ol className="space-y-3 text-slate-700">
              <li className="flex gap-3"><span className="font-bold text-amber-600">1.</span>見積もりに出張費・部材費まで含まれているか（総額で比較）</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">2.</span>到着までの目安時間と対応エリア</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">3.</span>対応してほしい鍵の種類に対応しているか</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">4.</span>作業後の保証やアフター対応の有無</li>
            </ol>
            <p className="leading-loose mt-4 text-slate-700">料金や対応は地域・状況で変わるため、{b["short"]}を含めて<Link href="/" className="text-amber-700 underline">複数の鍵業者を比較</Link>し、見積もりを取ったうえで選ぶのがおすすめです。</p>
          </section>

          <section id="faq" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">よくある質問</h2>
            <div className="space-y-3">
              {{faqs.map((f, i) => (
                <div key={{i}} className="collapse collapse-arrow border border-slate-200 rounded-xl bg-white">
                  <input type="checkbox" defaultChecked={{i === 0}} />
                  <div className="collapse-title font-bold">{{f.q}}</div>
                  <div className="collapse-content"><p className="text-sm leading-relaxed text-slate-700">{{f.a}}</p></div>
                </div>
              ))}}
            </div>
          </section>

          <section id="sources" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">この記事の出典・参照元</h2>
            <p className="leading-loose mb-4 text-slate-700">本記事の事実情報・口コミの傾向は、以下の公式サイトおよび口コミ・比較サイトを参照し、編集部が確認・要約しています（確認日：{{UPDATED}}）。</p>
            <ul className="space-y-2 text-sm">{src_lis}
            </ul>
          </section>

          <section id="summary" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">まとめ</h2>{sum_ps}
            <div className="rounded-2xl bg-slate-800 text-white p-6 text-center mt-6">
              <p className="font-bold text-lg mb-2">鍵のトラブルでお困りの方へ</p>
              <p className="text-slate-300 text-sm mb-4">地域・状況に合った鍵業者を比較して、無料見積もりを取りましょう。</p>
              <Link href="/" className="btn bg-amber-500 hover:bg-amber-600 border-0 text-white">鍵業者を比較して探す</Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}}
'''

for b in BRANDS:
    d=ROOT/"app"/"agents"/b["slug"]
    d.mkdir(parents=True, exist_ok=True)
    (d/"page.tsx").write_text(render(b), encoding="utf-8")
    print("wrote", b["slug"])
# mark hasStaticPage so [slug] doesn't double-generate
cj=ROOT/"data"/"companies.json"
c=json.load(open(cj))
for x in c:
    if x["slug"] in [b["slug"] for b in BRANDS] or x["slug"]=="kagi110ban":
        x["hasStaticPage"]=True
json.dump(c,open(cj,"w"),ensure_ascii=False,indent=2)
print("marked hasStaticPage for static brands")
print("done:",len(BRANDS),"pages")
