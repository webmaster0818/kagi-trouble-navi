import type { ReactNode } from "react";

export type Faq = { q: string; a: string };
export type Section = { h2: string; body: ReactNode };
export type Crumb = { name: string; href?: string };
export type Related = { href: string; label: string; desc: string };

type Props = {
  path: string;
  h1: string;
  description: string;
  updated: string; // 表示用 例: 2026年11月1日
  updatedIso: string;
  crumbs: Crumb[]; // ホームの後ろ
  answerLead: string;
  answerBody: ReactNode;
  sections: Section[];
  cta?: { h2: string; text: string; links: { href: string; label: string }[] };
  faqTitle: string;
  faqs: Faq[];
  related: Related[];
};

const SITE = "https://kagi-trouble-navi.com";

export function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="nofollow noopener" className="text-primary underline">
      {children}
    </a>
  );
}

export default function SimpleArticle(p: Props) {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE}/` },
      ...p.crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: c.name,
        item: `${SITE}${c.href ?? p.path}`,
      })),
    ],
  };
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.h1,
    description: p.description,
    author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
    publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
    datePublished: p.updatedIso,
    dateModified: p.updatedIso,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />

      <main className="flex-1">
        <div className="bg-surface-alt border-b border-black/5">
          <div className="max-w-4xl mx-auto px-4 py-3 text-xs text-text-muted">
            <a href="/" className="hover:text-primary">ホーム</a>
            {p.crumbs.map((c) => (
              <span key={c.name}>
                <span className="mx-1.5">/</span>
                {c.href ? (
                  <a href={c.href} className="hover:text-primary">{c.name}</a>
                ) : (
                  <span className="text-text-secondary">{c.name}</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">{p.h1}</h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：{p.updated}</p>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">{p.answerLead}</p>
            <div className="text-text-secondary leading-relaxed text-sm sm:text-base space-y-3">{p.answerBody}</div>
          </div>

          {p.sections.map((s, i) => (
            <section key={i} className="mb-10">
              <h2 className="text-xl font-bold text-text-primary mb-4">{s.h2}</h2>
              <div className="text-sm text-text-secondary leading-relaxed space-y-3">{s.body}</div>
            </section>
          ))}

          {p.cta ? (
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
              <h2 className="text-lg font-bold text-text-primary mb-2">{p.cta.h2}</h2>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">{p.cta.text}</p>
              <div className="flex flex-wrap gap-2">
                {p.cta.links.map((l, i) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className={
                      i === 0
                        ? "px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors"
                        : "px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors"
                    }
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ) : null}

          <h2 className="text-xl font-bold text-text-primary mb-4">{p.faqTitle}</h2>
          <div className="space-y-3 mb-10">
            {p.faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-xl border border-black/10 overflow-hidden">
                <summary className="px-5 py-4 cursor-pointer font-medium text-text-primary text-sm">Q. {f.q}</summary>
                <div className="px-5 pb-4 text-sm text-text-secondary leading-relaxed">A. {f.a}</div>
              </details>
            ))}
          </div>

          <h2 className="text-xl font-bold text-text-primary mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {p.related.map((r) => (
              <a key={r.href} href={r.href} className="bg-white rounded-xl border border-black/10 p-4 hover:border-primary/40 transition-colors">
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
