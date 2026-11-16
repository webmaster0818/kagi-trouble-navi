import Link from "next/link";
import Image from "next/image";
import AgentIntro from "@/components/AgentIntro";
import { AffBanner, AffText, hasAff } from "@/components/AffLink";

// 市単位のエリアページ（2026-11-16 新設分から使用）。
// 掲載する業者・料金・受付・対応エリアは、各社公式でその市（または県）への対応を確認できた値だけを渡す。

const SITE = "https://kagi-trouble-navi.com";

export type CityAgent = {
  id: string;
  slug: string;
  name: string;
  catch: string;
  intro: React.ReactNode;
  rows: { k: string; v: string; note?: string }[];
  area: string;
  sources: { label: string; href: string }[];
  checked: string;
  compare: { price: string; reception: string; area: string };
};

export type CityFaq = { q: string; a: string; link?: { href: string; label: string } };

type Props = {
  path: string;
  city: string;
  pref: string;
  h1: string;
  description: string;
  updated: string;
  updatedIso: string;
  tags: string[];
  lead: React.ReactNode[];
  agents: CityAgent[];
  excludedNote?: React.ReactNode;
  themeId: string;
  themeTitle: string;
  theme: React.ReactNode;
  faqs: CityFaq[];
  summary: React.ReactNode[];
  nearby: { href: string; label: string }[];
  related: { href: string; label: string }[];
};

export function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline">
      {children}
    </a>
  );
}

export function Hl({ children }: { children: React.ReactNode }) {
  return (
    <strong className="font-bold bg-[linear-gradient(transparent_65%,rgba(255,152,0,0.30)_65%)]">{children}</strong>
  );
}

function H2({ id, num, children }: { id: string; num: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-20 mt-14 mb-6 bg-[#EAF1F8] border-l-[6px] border-transparent pl-5 pr-4 py-3 text-lg md:text-2xl font-black leading-snug tracking-wide text-foreground"
      style={{ borderImage: "linear-gradient(to bottom, #1B4F8A, #3E86C9) 1" }}
    >
      {num}｜{children}
    </h2>
  );
}

function H4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="relative pl-4 mt-8 mb-3 text-sm md:text-lg font-bold text-foreground">
      <span
        className="absolute left-0 top-0 bottom-0 w-[4px] rounded-l-[2px]"
        style={{ background: "linear-gradient(180deg, #1B4F8A 0%, #3E86C9 100%)" }}
      />
      {children}
    </h4>
  );
}

export default function CityAreaArticle(p: Props) {
  const n = p.agents.length;
  const listTitle = `${p.city}で依頼できる鍵業者${n}選`;
  const crumb = `${p.city}の鍵開け・鍵交換業者おすすめ${n}選`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.h1,
    description: p.description,
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: `${p.updatedIso}T00:00:00+09:00`,
    dateModified: `${p.updatedIso}T00:00:00+09:00`,
    author: { "@type": "Organization", name: "鍵トラブルナビ編集部", url: SITE },
    publisher: { "@type": "Organization", name: "鍵トラブルナビ", url: SITE },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}${p.path}` },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "鍵トラブルナビ", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: crumb, item: `${SITE}${p.path}` },
    ],
  };

  const toc = [
    { href: "#gyosha", label: `1｜${listTitle}`, sub: [{ href: "#hikaku", label: `${p.city}の鍵業者の一覧比較表` }, ...p.agents.map((a, i) => ({ href: `#${a.id}`, label: `1-${i + 1}｜${a.name}` }))] },
    { href: `#${p.themeId}`, label: `2｜${p.themeTitle}` },
    { href: "#irai", label: "3｜依頼する前に確認すること" },
    { href: "#faq", label: `4｜${p.city}の鍵業者でよくある質問` },
    { href: "#matome", label: "5｜まとめ" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="bg-white text-foreground">
        <div className="mx-auto max-w-4xl px-4 pt-4 pb-12 md:pb-16">
          <nav aria-label="パンくず" className="text-xs text-text-muted mb-4">
            <ol className="flex flex-wrap gap-1">
              <li>
                <Link href="/" className="hover:underline">鍵トラブルナビ</Link>
              </li>
              <li>/</li>
              <li className="text-foreground">{crumb}</li>
            </ol>
          </nav>

          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-foreground">{p.h1}</h1>
            <div>
              <span className="inline-block rounded-[2px] bg-primary px-2 py-1 text-xs font-bold tracking-wide text-white">エリア別 鍵業者まとめ</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold tracking-wide text-text-muted">
              <span>
                更新日：<time dateTime={p.updatedIso}>{p.updated}</time>
              </span>
              <span>PR掲載も含みます</span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-[2px] border border-border bg-white px-3 py-1.5 text-xs md:text-sm font-bold tracking-wide text-foreground shadow-[0px_2px_2px_0px_rgba(0,0,0,0.12)]"
                >
                  {t}
                </li>
              ))}
            </ul>
            <figure className="overflow-hidden rounded-[2px]">
              <Image src="/images/kv-top.jpg" alt={`${p.city}の鍵開け・鍵交換業者の比較`} width={1024} height={1024} className="w-full h-52 md:h-72 object-cover" priority />
            </figure>
          </header>

          <div className="mt-6 leading-loose text-foreground">
            {p.lead.map((l, i) => (
              <p key={i} className="mb-4">{l}</p>
            ))}
          </div>

          <nav aria-label="目次" className="mt-10 grid gap-4 rounded-[2px] border border-border px-5 py-8 md:gap-6 md:px-16 md:py-10">
            <div className="text-2xl md:text-[32px] font-bold">
              <span className="bg-gradient-to-r from-primary to-[#3E86C9] bg-clip-text text-transparent">Contents</span>
            </div>
            <ol className="grid gap-2">
              {toc.map((item) => (
                <li key={item.href} className="grid gap-2">
                  <a href={item.href} className="w-fit text-sm md:text-base font-bold tracking-wide leading-relaxed hover:underline">{item.label}</a>
                  {item.sub && (
                    <ol className="grid gap-2 pl-4 md:pl-8">
                      {item.sub.map((s) => (
                        <li key={s.href}>
                          <a href={s.href} className="w-fit text-xs md:text-sm tracking-wide leading-relaxed hover:underline">{s.label}</a>
                        </li>
                      ))}
                    </ol>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <H2 id="gyosha" num="1">{listTitle}</H2>
          <p className="leading-loose mb-4">
            {p.pref}{p.city}への対応を、各社の公式サイトで{p.updated}に確認できた鍵業者{n}社を掲載しています。料金は各社が公式に掲載している最低額で、鍵の種類・時間帯・出張距離によって総額は変わります。作業前に、出張料・部材費を含めた総額の見積もりをご確認ください。
          </p>
          {p.excludedNote && <p className="text-sm text-text-muted leading-relaxed mb-8">{p.excludedNote}</p>}

          <h3 id="hikaku" className="scroll-mt-20 relative pb-3 mb-5 border-b-4 border-[#EAF1F8] text-base md:text-[22px] font-bold text-foreground">
            {p.city}の鍵業者の一覧比較表
            <span className="absolute bottom-[-4px] left-0 h-[4px] w-24 bg-gradient-to-r from-primary to-[#3E86C9]" />
          </h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-border px-3 py-2 whitespace-nowrap text-left">業者名</th>
                  <th className="border border-border px-3 py-2 whitespace-nowrap text-left">鍵開け料金（公式掲載）</th>
                  <th className="border border-border px-3 py-2 whitespace-nowrap text-left">受付</th>
                  <th className="border border-border px-3 py-2 whitespace-nowrap text-left">{p.city}への対応（公式の記載）</th>
                </tr>
              </thead>
              <tbody>
                {p.agents.map((a, i) => (
                  <tr key={a.id} className={i % 2 === 1 ? "bg-[#F5F8FC]" : "bg-white"}>
                    <td className="border border-border px-3 py-2 font-bold whitespace-nowrap">
                      <Link href={`/agents/${a.slug}/`} className="text-primary underline">{a.name}</Link>
                      {hasAff(a.slug) && (
                        <span className="block mt-1">
                          <AffText slug={a.slug} variant="small" label="公式サイト" />
                        </span>
                      )}
                    </td>
                    <td className="border border-border px-3 py-2">{a.compare.price}</td>
                    <td className="border border-border px-3 py-2">{a.compare.reception}</td>
                    <td className="border border-border px-3 py-2">{a.compare.area}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-10">※{p.updated}確認。出典は各社の欄に記載しています。掲載順は順位ではありません。</p>

          {p.agents.map((a, i) => (
            <section key={a.id} id={a.id} className="scroll-mt-20 mb-16">
              <h3 className="relative pb-3 mb-5 border-b-4 border-[#EAF1F8] text-base md:text-[22px] font-bold leading-snug text-foreground">
                1-{i + 1}｜【{a.catch}】{a.name}
                <span className="absolute bottom-[-4px] left-0 h-[4px] w-24 bg-gradient-to-r from-primary to-[#3E86C9]" />
              </h3>
              <AgentIntro slug={a.slug} name={a.name}>{a.intro}</AgentIntro>

              <H4>料金・受付・{p.city}への対応</H4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    {[...a.rows, { k: `${p.city}への対応`, v: a.area }].map((row, j) => (
                      <tr key={row.k} className={j % 2 === 1 ? "bg-[#F5F8FC]" : "bg-white"}>
                        <th className="border border-border px-3 py-2 whitespace-nowrap bg-[#EAF1F8] text-left font-bold w-32 md:w-40">{row.k}</th>
                        <td className="border border-border px-3 py-2">
                          <span className="font-bold">{row.v}</span>
                          {"note" in row && row.note && <span className="block text-xs text-text-muted mt-1">{row.note}</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted mt-2 leading-relaxed">
                出典：
                {a.sources.map((s, j) => (
                  <span key={s.href}>
                    {j > 0 && "、"}
                    <Ext href={s.href}>{s.label}</Ext>
                  </span>
                ))}
                （{a.checked}）
              </p>

              {hasAff(a.slug) && (
                <div className="mt-6 flex flex-col items-center gap-3">
                  <AffBanner slug={a.slug} />
                  <AffText slug={a.slug} variant="button" label={`${a.name}の公式サイトで無料相談`} />
                </div>
              )}
              <div className="mt-6">
                <Link
                  href={`/agents/${a.slug}/`}
                  className="block w-full md:w-80 mx-auto rounded-[2px] bg-primary hover:bg-primary-dark transition-colors px-4 py-4 text-center text-[15px] font-bold text-white"
                >
                  {a.name}の詳細ページを見る
                </Link>
              </div>
            </section>
          ))}

          <H2 id={p.themeId} num="2">{p.themeTitle}</H2>
          {p.theme}

          <H2 id="irai" num="3">依頼する前に確認すること</H2>
          <ul className="list-disc pl-5 space-y-2 leading-loose mb-4">
            <li>賃貸住宅の場合は、業者より先に管理会社・大家へ連絡してください。鍵の交換や費用負担を管理側が決めていることがあります（<Link href="/chintai-kagi-koukan-hiyou/" className="text-primary underline">賃貸の鍵交換費用</Link>）。</li>
            <li>電話では、鍵の種類（刻みキー・ディンプルキーなど）、場所（玄関・車・金庫など）、住所を伝え、出張料・部材費・時間帯の割増を含めた総額を確認してください。</li>
            <li>名前のよく似た鍵業者が複数あります。サービス名だけでなく運営会社名も確認してください（<Link href="/agents/nitamei-kagiya/" className="text-primary underline">名前が似た鍵屋の運営会社一覧</Link>）。</li>
          </ul>
          <p className="leading-loose mb-8 text-sm md:text-base">
            電話で確認する事項と作業前・支払い時の確認事項は、<Link href="/kagiya-erabikata/" className="text-primary underline">鍵屋・鍵業者の選び方チェックリスト</Link>にまとめています。
          </p>

          <H2 id="faq" num="4">{p.city}の鍵業者でよくある質問</H2>
          <div className="space-y-4">
            {p.faqs.map((f) => (
              <div key={f.q} className="rounded-[2px] border border-border">
                <p className="flex gap-3 px-5 py-4 font-bold text-foreground bg-[#EFF3F8]">
                  <span className="text-primary shrink-0">Q.</span>
                  {f.q}
                </p>
                <p className="flex gap-3 px-5 py-4 text-sm leading-relaxed">
                  <span className="text-accent font-bold shrink-0">A.</span>
                  <span>
                    {f.a}
                    {f.link && (
                      <>
                        {" "}
                        <Link href={f.link.href} className="text-primary underline">{f.link.label}</Link>
                      </>
                    )}
                  </span>
                </p>
              </div>
            ))}
          </div>

          <H2 id="matome" num="5">まとめ</H2>
          {p.summary.map((s, i) => (
            <p key={i} className="leading-loose mb-4">{s}</p>
          ))}
          <div className="mt-8 rounded-[2px] bg-primary text-white p-6 text-center">
            <p className="font-bold text-lg mb-2">鍵のトラブルでお困りの方へ</p>
            <p className="text-white/80 text-sm mb-4">各社の詳細ページと公式の料金を比較し、条件に合う業者をお選びください。</p>
            <Link href="/agents/" className="inline-block rounded-[2px] bg-secondary hover:bg-secondary-dark transition-colors px-8 py-3 font-bold text-white">
              鍵業者の一覧・比較を見る
            </Link>
          </div>

          <div className="mt-10">
            <p className="text-sm font-bold text-text-muted mb-3">近隣エリアの鍵業者まとめ</p>
            <ul className="grid gap-3 md:grid-cols-3">
              {p.nearby.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="block rounded-[2px] border border-border bg-white px-4 py-3 text-sm font-bold text-primary hover:bg-[#F5F8FC] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <p className="text-sm font-bold text-text-muted mb-3">関連記事</p>
            <ul className="grid gap-3 md:grid-cols-2">
              {p.related.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="block rounded-[2px] border border-border bg-white px-4 py-3 text-sm font-bold text-primary hover:bg-[#F5F8FC] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </>
  );
}
