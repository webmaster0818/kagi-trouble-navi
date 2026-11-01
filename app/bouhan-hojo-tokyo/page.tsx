import type { Metadata } from "next";
import { HOJO_CHECKED, HOJO_CHECKED_ISO, TOKYO_HOJO_SOURCE, WARD_HOJO } from "@/data/tokyoBouhanHojo";

const PATH = "/bouhan-hojo-tokyo/";
const TITLE = "東京都の防犯機器補助で鍵交換は対象になる？23区別の対象品目・補助率・期限一覧（令和8年度）";
const DESC =
  "東京都の防犯機器等購入緊急補助事業（令和8年度）は区市町村を通じた補助で、鍵（錠）の交換が対象になるかは区ごとに違います。23区の公式ページを2026年11月1日に確認し、錠・補助錠の扱い、補助率、上限額、申請期限を一覧にしました。新宿区は錠が対象外、大田区・世田谷区・杉並区は12月28日が期限です。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const faqs = [
  {
    q: "東京都の補助金で鍵交換はできますか？",
    a: "東京都の「令和8年度東京都防犯機器等購入緊急補助事業」は、区市町村が住民向けに行う補助を都が支援する間接補助で、都に直接申請するものではありません。鍵（錠）が対象になるかは区市町村ごとに決まっています。2026年11月1日に23区の公式ページを確認したところ、新宿区を除く22区で錠または補助錠が対象品目に含まれていました。新宿区の対象は防犯カメラなど5品目で、錠は含まれていません。",
  },
  {
    q: "どの区がいちばん補助が手厚いですか？",
    a: "2026年11月1日に確認した範囲では、補助率は世田谷区が10分の10（上限4万円）で最も高く、上限額は台東区の6万円（補助率4分の3・補助対象経費の上限8万円）が最も高い額でした。葛飾区は補助率2分の1で上限5万円です。ただし対象になる錠の条件（CP製品に限る、ディンプルキー等に限る、スマートロックの扱いなど）が区によって違うため、交換する錠が対象かを先に確かめてください。",
  },
  {
    q: "スマートロックは補助の対象になりますか？",
    a: "区によって分かれます。江戸川区は「スマートロックは防犯性の高い錠に該当し、補助対象」と明記し、渋谷区も対象品目の例にスマートロックを挙げています。一方、大田区・品川区・板橋区は対象外とし、中野区は既存の鍵に後付けするスマートロックを対象外としています（いずれも2026年11月1日確認）。",
  },
  {
    q: "申請の期限が早いのはどの区ですか？",
    a: "2026年11月1日時点で、大田区・世田谷区・杉並区の申請期限が令和8年12月28日で最も早く、次いで千代田区・目黒区の令和9年1月29日（中野区は同日までに購入・設置が完了したものが対象）、新宿区・豊島区の1月31日です。墨田区と足立区は区のページに受付の終了日がなく、予算に達した時点で終了するとしており、足立区は9月28日時点で申請額が予算の半分に達したと案内しています。",
  },
  {
    q: "令和7年度に補助を受けた場合はどうなりますか？",
    a: "東京都は、令和7年度に都の補助金の交付を受けた人は令和8年度に再度都の補助を受けられないとしています。多くの区はこれに合わせて、令和7年度に同種の補助（都内の他自治体を含む）を受けた世帯を対象外としています。足立区のように、都の補助が受けられない場合でも区独自の補助だけを算定する区もあります。",
  },
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
    { "@type": "ListItem", position: 2, name: "東京都の防犯機器補助と鍵交換", item: `https://kagi-trouble-navi.com${PATH}` },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: HOJO_CHECKED_ISO,
  dateModified: HOJO_CHECKED_ISO,
};

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="nofollow noopener" className="text-primary underline">
      {children}
    </a>
  );
}

export default function BouhanHojoTokyoPage() {
  const covered = WARD_HOJO.filter((w) => w.lockCovered === "yes");
  const notCovered = WARD_HOJO.filter((w) => w.lockCovered === "no");
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />

      <main className="flex-1">
        <div className="bg-surface-alt border-b border-black/5">
          <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-text-muted">
            <a href="/" className="hover:text-primary">ホーム</a>
            <span className="mx-1.5">/</span>
            <span className="text-text-secondary">東京都の防犯機器補助と鍵交換</span>
          </div>
        </div>

        <article className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">{TITLE}</h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：{HOJO_CHECKED}（東京都と23区の公式ページを同日に確認）</p>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">
              東京都の防犯機器補助は区市町村が窓口で、鍵（錠）が対象かは区ごとに違います。23区では{covered.length}区で錠または補助錠が対象、新宿区は対象外でした（{HOJO_CHECKED}確認）。
            </p>
            <div className="text-text-secondary leading-relaxed text-sm sm:text-base space-y-3">
              <p>
                東京都は、令和7・8年度の2年間の緊急対策として、自宅に設置する防犯機器等の購入に対する補助を区市町村を通じて行っています。申請先はお住まいの区市町村で、対象品目・補助額・受付期間は区市町村ごとに異なります。都のページには令和8年6月30日現在で23区を含む53の区市町村へのリンクが掲載されています。
              </p>
              <p>
                区によって、対象を「CP製品に限る」（文京区）、「ディンプルキー、電子錠及び指紋認証錠に限る」（足立区）とするなど条件が違い、スマートロックの扱いも分かれます。補助を使う予定があるなら、鍵を交換する前に下の一覧と区の公式ページで、交換する錠が対象かを確かめてください。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={TOKYO_HOJO_SOURCE.url}>{TOKYO_HOJO_SOURCE.label}</Ext>（更新日 2026年9月11日）／<Ext href={TOKYO_HOJO_SOURCE.yokoUrl}>{TOKYO_HOJO_SOURCE.yokoLabel}</Ext>（いずれも{HOJO_CHECKED}確認）
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-text-primary mb-2">23区の鍵（錠）の扱いと補助率・上限・期限</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            「鍵（錠）の扱い」は各区のページの品目名をそのまま載せています。期限は申請の受付期限（区のページの表記どおり）です。どの区も予算に達すると期間内でも受付を終えることがあります。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse min-w-[760px]">
              <thead>
                <tr className="bg-surface-alt">
                  <th className="border border-border px-3 py-2 text-left whitespace-nowrap">区</th>
                  <th className="border border-border px-3 py-2 text-left">鍵（錠）の扱い</th>
                  <th className="border border-border px-3 py-2 text-left whitespace-nowrap">補助率</th>
                  <th className="border border-border px-3 py-2 text-left">上限額</th>
                  <th className="border border-border px-3 py-2 text-left">申請期間</th>
                  <th className="border border-border px-3 py-2 text-left whitespace-nowrap">詳しく</th>
                </tr>
              </thead>
              <tbody>
                {WARD_HOJO.map((w) => (
                  <tr key={w.slug} className={w.lockCovered === "no" ? "bg-red-50" : undefined}>
                    <td className="border border-border px-3 py-2 whitespace-nowrap font-bold text-text-primary">{w.ward}</td>
                    <td className="border border-border px-3 py-2">
                      {w.lockCovered === "no" ? <strong className="text-red-700">錠は対象外：</strong> : null}
                      {w.lockItems}
                      {w.note ? <span className="block text-xs text-text-muted mt-1">{w.note}</span> : null}
                    </td>
                    <td className="border border-border px-3 py-2 whitespace-nowrap">{w.rate}</td>
                    <td className="border border-border px-3 py-2">{w.cap}</td>
                    <td className="border border-border px-3 py-2">{w.period}</td>
                    <td className="border border-border px-3 py-2 text-xs leading-relaxed">
                      <Ext href={w.url}>区の公式</Ext>
                      {w.subPage ? (
                        <>
                          <br />
                          <a href={w.subPage} className="text-primary underline">解説ページ</a>
                        </>
                      ) : null}
                      {w.areaNote ? (
                        <>
                          <br />
                          <a href={w.areaNote} className="text-primary underline">{w.ward}の鍵業者と補助</a>
                        </>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted leading-relaxed mb-10">
            出典：各区の公式ページ（表の「区の公式」リンク先、いずれも{HOJO_CHECKED}確認）。港区の品目は区の「助成対象品目」PDF、新宿区の品目は区の「対象となる防犯対策用品とは」PDF、墨田区の品目は区のページの「補助対象物品 定義・要件一覧」で確認しました。港区は助成率4分の3・上限4万円で、費用を支払った日から90日以内の申請が必要です。
          </p>

          <h2 className="text-xl font-bold text-text-primary mb-4">区ごとの違いで特に注意したい点</h2>
          <div className="space-y-3 mb-10">
            {[
              {
                t: "錠が対象外の区がある",
                d: `${notCovered.map((w) => w.ward).join("・")}の補助は、防犯カメラ・カメラ付きインターホン・防犯フィルム・センサーライト・センサーアラームの5品目で、玄関錠・補助錠は対象に入っていません。この区で鍵交換に補助を使うことはできません。`,
              },
              {
                t: "CP製品が条件・推奨の区がある",
                d: "文京区は「防犯性能の高い錠・シリンダー又はサムターン」をCP製品に限るとしています。豊島区は防犯性の高い玄関錠にCP製品を推奨し、練馬区はCPマークの付いた物品を参考にするよう案内しています。品川区は防犯性能の高い錠の例にディンプルキー・CP認定錠を挙げています。見積もりの段階で、交換後のシリンダーがCP部品かどうかを業者に確認してください。",
              },
              {
                t: "対象の錠の種類を限定する区がある",
                d: "足立区は玄関錠を「ディンプルキー、電子錠及び指紋認証錠に限る」とし、補助錠は対象物品の表にありません。北区は「錠前（既存錠からの交換または新しい錠前の増設）」、墨田区は一般的なディスクシリンダー錠より防犯性能が高い錠を対象としています。",
              },
              {
                t: "スマートロックの扱いが分かれる",
                d: "江戸川区は対象と明記、渋谷区は対象品目の例に挙げています。大田区・品川区・板橋区は対象外、中野区は既存の鍵に後付けするスマートロックを対象外としています。大田区は、要件を満たす場合はサムターンカバーとして対象になるとしています。",
              },
              {
                t: "撤去費用は対象外の区が多い",
                d: "大田区・練馬区・杉並区・世田谷区などは、古い機器の撤去費用やリサイクル料を補助の対象外としています。鍵交換の見積もりでは、新しい錠の本体代・取付工事費と、古い錠の撤去費を分けて書いてもらうと申請しやすくなります。",
              },
            ].map((x) => (
              <div key={x.t} className="bg-white rounded-xl border border-black/10 p-4">
                <p className="font-bold text-primary text-sm mb-1.5">{x.t}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-text-primary mb-4">補助を使って鍵を交換する手順</h2>
          <ol className="space-y-3 mb-10">
            {[
              ["区の公式ページで、交換したい錠が対象品目に入っているかを確認する", "CP製品に限る、ディンプルキー等に限る、スマートロックは対象外など、区ごとの条件を見ます。迷う場合は購入前に区の担当課に問い合わせます。"],
              ["賃貸・分譲マンションなら、先に管理会社・大家・管理組合の同意を取る", "多くの区が、賃貸住宅や共同住宅では所有者・管理者の同意書を求めています。エントランスなど共用部分への設置は、多くの区が対象外としています。"],
              ["業者に見積もりを取り、領収書の書き方を確認する", "宛名は申請者本人のフルネーム、製品名（型番）と工事内容、本体代と工事費の内訳がわかる領収書が必要な区がほとんどです。見積書・請求書・レシートでは申請できない区が多くあります。"],
              ["交換後に設置状況の写真を撮る", "玄関など設置場所の全体と本体のアップを求める区があります。"],
              ["期限までに申請する", "電子申請・郵送・窓口の方法と、郵送の「消印有効」か「必着」かは区によって違います。"],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-3 bg-white rounded-xl border border-black/10 p-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">{i + 1}</span>
                <div>
                  <p className="font-bold text-text-primary text-sm mb-1">{t}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{d}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="text-xl font-bold text-text-primary mb-4">区別の解説ページ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {WARD_HOJO.filter((w) => w.subPage).map((w) => (
              <a key={w.slug} href={w.subPage} className="bg-white rounded-xl border border-black/10 p-4 hover:border-primary/40 transition-colors">
                <p className="font-bold text-primary text-sm mb-1">{w.ward}の防犯補助と鍵交換</p>
                <p className="text-xs text-text-muted leading-relaxed">{w.rate}・上限{w.cap}／{w.period}</p>
              </a>
            ))}
          </div>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            目黒区・港区・中野区・新宿区の補助は、それぞれの区の鍵業者ページで解説しています（<a href="/area/meguro-ku/" className="text-primary underline">目黒区</a>・<a href="/area/minato-ku/" className="text-primary underline">港区</a>・<a href="/area/nakano-ku/" className="text-primary underline">中野区</a>・<a href="/area/shinjuku-ku/" className="text-primary underline">新宿区</a>）。多摩地域の市町村の補助は、東京都のページの区市町村リンクから確認できます。
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">東京で鍵交換を頼める業者を比べる</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              補助の対象になる錠かどうかを確かめたうえで、業者の料金と対応を比べてください。都内で依頼できる業者の公式料金は東京都のページにまとめています。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/area/tokyo/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">東京の鍵業者を比較する →</a>
              <a href="/cp-nintei-jou/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">CP認定錠とは</a>
            </div>
          </div>

          <h2 className="text-xl font-bold text-text-primary mb-4">東京都の防犯機器補助と鍵交換のよくある質問</h2>
          <div className="space-y-3 mb-10">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-xl border border-black/10 overflow-hidden">
                <summary className="px-5 py-4 cursor-pointer font-medium text-text-primary text-sm">Q. {f.q}</summary>
                <div className="px-5 pb-4 text-sm text-text-secondary leading-relaxed">A. {f.a}</div>
              </details>
            ))}
          </div>

          <h2 className="text-xl font-bold text-text-primary mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/area/tokyo/", label: "東京の鍵交換・鍵開け業者", desc: "公式表示の料金・受付時間で比較" },
              { href: "/cp-nintei-jou/", label: "CP認定錠の解説", desc: "防犯性能の高い建物部品の見分け方" },
              { href: "/hojo-jou/", label: "補助錠の基礎知識", desc: "1ドア2ロックの考え方と取り付け" },
              { href: "/dimple-key/", label: "ディンプルキーの基礎知識", desc: "仕組みと防犯性、交換の考え方" },
            ].map((r) => (
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
