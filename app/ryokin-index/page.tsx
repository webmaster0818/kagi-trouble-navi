import type { Metadata } from "next";

const SITE = "https://kagi-trouble-navi.com";
const PATH = "/ryokin-index/";
const UPDATED = "2026年7月7日";
const CHECKED = "2026年7月7日";

export const metadata: Metadata = {
  title:
    "鍵トラブル料金インデックス｜主要5社の公式料金を実確認【2026年7月】業者×サービス別一覧 | 鍵トラブルナビ",
  description:
    "カギ110番・鍵の生活救急車・鍵のレスキュー・鍵猿・JBRの公式サイトに表示された料金を、当サイトが2026年7月7日に実際に確認して業者×サービス別に一覧化。鍵開け・鍵交換・鍵修理・金庫・車の鍵の料金、出張費・深夜割増の有無を出典URLつきで比較できます。毎月再確認して更新します。",
  alternates: { canonical: `${SITE}${PATH}` },
};

type Row = {
  name: string;
  reviewPath?: string;
  official: string;
  operator: string;
  kaike: string;
  koukan: string;
  shuri: string;
  kinko: string;
  car: string;
  shuccho: string;
  shinya: string;
};

// 各社公式サイトの表示価格を 2026年7月7日 に当サイトが確認（税込・「〜」は最低価格表示）。
// 実際の金額は鍵の種類・状況・エリアにより変動し、現地見積もりで確定します。
const rows: Row[] = [
  {
    name: "カギ110番",
    reviewPath: "/agents/kagi110ban/",
    official: "https://www.kagi110ban.jp/price/",
    operator: "シェアリングテクノロジー株式会社（東証3989）",
    kaike: "6,600円〜",
    koukan: "14,300円〜（部材費込）",
    shuri: "11,000円〜",
    kinko: "11,000円〜",
    car: "13,200円〜",
    shuccho: "見積もり無料（交通費・キャンセル料が別途発生する場合あり）",
    shinya: "公式に記載なし",
  },
  {
    name: "鍵の生活救急車",
    reviewPath: "/agents/seikatsu-kyukyusha/",
    official: "https://kagi-seikatsukyukyusya.com/price/",
    operator: "株式会社生活救急車",
    kaike: "8,800円〜（ディンプル33,000円〜）",
    koukan: "開きドア11,000円＋部品代",
    shuri: "8,800円〜",
    kinko: "8,800円〜（ダイヤル式16,500円〜）",
    car: "8,800円〜（特殊キー33,000円〜）",
    shuccho: "出張見積もり無料・キャンセル無料",
    shinya: "公式に記載なし",
  },
  {
    name: "鍵のレスキュー",
    reviewPath: "/agents/kagi-rescue/",
    official: "https://www.kagi110qq.co.jp/price/price.html",
    operator: "株式会社鍵のレスキュー（特商法表記は株式会社レスキュー）",
    kaike: "6,600円〜",
    koukan: "6,600円〜（部材費別）",
    shuri: "6,600円〜",
    kinko: "手提げ6,600円〜／家庭用44,000円〜",
    car: "国産車インロック6,600円〜／製作16,500円〜",
    shuccho: "固定額の明示なし（条件で最大±8,000円の増減記載）",
    shinya: "公式に記載なし",
  },
  {
    name: "鍵猿",
    reviewPath: "/agents/kagizaru/",
    official: "https://sls.co.jp/kagizaru/price/",
    operator: "SLS株式会社",
    kaike: "8,800〜16,500円（ディンプル〜27,500円）",
    koukan: "刻みキー16,500円〜＋部品代",
    shuri: "8,800〜19,800円",
    kinko: "8,800〜19,800円",
    car: "8,800円〜",
    shuccho: "無料",
    shinya: "あり：夜間5,500円（21:00〜7:59）",
  },
  {
    name: "JBR（ジャパンベストレスキュー）",
    reviewPath: "/agents/jbr/",
    official: "https://www.jbr.co.jp/",
    operator: "ジャパンベストレスキューシステム株式会社",
    kaike: "—",
    koukan: "—",
    shuri: "—",
    kinko: "—",
    car: "—",
    shuccho: "—",
    shinya: "—",
  },
];

const faqs = [
  {
    q: "この料金一覧はどうやって確認していますか？",
    a: "各社の公式サイトに実際に表示されている料金を、当サイト編集部が2026年7月7日に一件ずつ確認し、出典URLとあわせて掲載しています。相場の推測値ではなく、各社が公式に提示している価格表示に基づく一覧です。料金は改定されることがあるため、毎月再確認して更新します。",
  },
  {
    q: "一番安いのはどの業者ですか？",
    a: "鍵開けの最低料金表示だけを見ると、カギ110番と鍵のレスキューが6,600円（税込）〜と低めですが、実際の総額は鍵の種類・作業内容・出張費・時間帯割増によって変わります。たとえば鍵猿は夜間（21:00〜7:59）に5,500円の割増を公式に明記しています。最低価格だけでなく、出張費・割増・部材費を含めた総額の見積もりで比較することが大切です。",
  },
  {
    q: "JBR（ジャパンベストレスキュー）の鍵料金が「—」なのはなぜですか？",
    a: "ジャパンベストレスキューシステム株式会社は、現在、消費者向けに鍵レスキューの料金表を掲載した公式サイトを運営していないため、公式で確認できる価格がありません。かつての「生活救急車」の駆けつけ事業は2022年11月に別法人「株式会社生活救急車」へ承継されており、「鍵の生活救急車」の料金は現在のJBRの料金ではありません。混同にご注意ください。",
  },
  {
    q: "各社の古物商許可番号・法人番号は？",
    a: "今回の確認時点（2026年7月7日）では、5社とも公式サイト上での法人番号・古物商許可番号の明記を確認できませんでした。契約前に不明な場合は、業者に直接確認することをおすすめします。",
  },
  {
    q: "表示価格どおりの金額で作業してもらえますか？",
    a: "表示は多くが「〜（最低価格）」で、実際の金額は鍵の種類・防犯性能・破壊解錠や部材交換の有無・エリア・時間帯で変動します。カギ110番のような加盟店紹介型では、対応する加盟店やエリアにより記載価格で対応できない場合がある旨も公式に記載されています。必ず作業前に総額の見積もりを確認してください。",
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
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "鍵トラブル料金インデックス" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "鍵トラブル料金インデックス｜主要5社の公式料金を実確認【2026年7月】",
  description: "主要な鍵トラブル業者5社の公式サイト表示料金を業者×サービス別に実確認して一覧化。出典URL・確認日つき。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-07-07",
  dateModified: "2026-07-07",
};

const cols: { key: keyof Row; label: string }[] = [
  { key: "kaike", label: "鍵開け" },
  { key: "koukan", label: "鍵交換" },
  { key: "shuri", label: "鍵修理" },
  { key: "kinko", label: "金庫" },
  { key: "car", label: "車の鍵" },
  { key: "shuccho", label: "出張・見積もり" },
  { key: "shinya", label: "深夜・早朝割増" },
];

export default function RyokinIndexPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">🔑</span>
            <span className="text-xl font-bold tracking-tight">鍵トラブルナビ</span>
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="/#trouble" className="hover:text-secondary transition-colors">トラブル別</a>
            <a href="/#service" className="hover:text-secondary transition-colors">サービス別</a>
            <a href="/ryokin/" className="hover:text-secondary transition-colors">料金相場</a>
            <a href="/ryokin-index/" className="hover:text-secondary transition-colors">料金インデックス</a>
            <a href="/agents/" className="hover:text-secondary transition-colors">業者比較</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="bg-surface-alt border-b border-black/5">
          <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-text-muted">
            <a href="/" className="hover:text-primary">ホーム</a>
            <span className="mx-1.5">/</span>
            <span className="text-text-secondary">鍵トラブル料金インデックス</span>
          </div>
        </div>

        <article className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            鍵トラブル料金インデックス｜主要5社の公式料金を実確認【2026年7月】
          </h1>
          <p className="text-sm text-text-muted mb-1">最終更新日：{UPDATED}</p>
          <p className="text-xs text-text-muted mb-6">料金の確認日：{CHECKED}（各社公式サイトを毎月再確認して更新）</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-8">
            <p className="font-bold text-primary mb-2">このページについて</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              主要な鍵トラブル業者の<strong>公式サイトに実際に表示されている料金</strong>を、当サイト編集部が<strong>{CHECKED}に一件ずつ確認</strong>し、業者×サービス別に一覧化しました。相場の推測値ではなく、各社が公式に提示する価格表示に基づく一覧です。金額はすべて税込・「〜」は最低価格表示で、実際の費用は鍵の種類・状況・エリア・時間帯で変動します。出典は各行の公式URLをご確認ください。
            </p>
          </div>

          {/* マトリクス */}
          <h2 className="text-xl font-bold text-text-primary mb-4">業者×サービス別 料金マトリクス（公式表示・{CHECKED}確認）</h2>
          <div className="overflow-x-auto mb-3 rounded-xl border border-black/10">
            <table className="w-full text-xs sm:text-sm min-w-[860px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-3 py-3 text-left font-bold sticky left-0 bg-primary">業者</th>
                  {cols.map((c) => (
                    <th key={c.key} className="px-3 py-3 text-left font-bold whitespace-nowrap">{c.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.name} className={i % 2 ? "bg-surface-alt" : "bg-white"}>
                    <td className="px-3 py-3 font-bold text-text-primary align-top sticky left-0 bg-inherit">
                      {r.reviewPath ? (
                        <a href={r.reviewPath} className="text-primary underline">{r.name}</a>
                      ) : (
                        r.name
                      )}
                    </td>
                    {cols.map((c) => (
                      <td key={c.key} className="px-3 py-3 text-text-secondary align-top">{r[c.key]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-2">
            ※ 金額は各社公式サイトの表示（税込）を{CHECKED}に当サイトが確認したものです。「〜」は最低価格表示で、鍵の種類・作業内容・部材費・エリア・時間帯により変動します。実際の費用は必ず作業前の見積もりでご確認ください。
          </p>
          <div className="text-xs text-text-muted mb-8 space-y-1">
            <p className="font-bold text-text-secondary">出典（各社公式サイト・{CHECKED}確認）</p>
            {rows.map((r) => (
              <p key={r.name}>
                {r.name}：運営 {r.operator}／
                <a href={r.official} target="_blank" rel="noopener nofollow" className="text-primary underline break-all">{r.official}</a>
              </p>
            ))}
          </div>

          {/* 読み解き */}
          <h2 className="text-xl font-bold text-text-primary mb-4">この一覧の読み解き方</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-text-secondary leading-relaxed mb-8">
            <li><strong>最低価格だけで比べない：</strong>鍵開けの最低表示はカギ110番・鍵のレスキューが6,600円〜と低めですが、総額は出張費・部材費・時間帯割増で変わります。</li>
            <li><strong>深夜・早朝割増を公式明記していたのは鍵猿のみ：</strong>夜間（21:00〜7:59）5,500円の割増があります。他社は公式ページに割増の記載を確認できませんでした（かからないという意味ではなく、現地で確認が必要です）。</li>
            <li><strong>ディンプルキーは高くなる：</strong>生活救急車は鍵開けディンプル33,000円〜、鍵猿は〜27,500円と、防犯性の高い鍵は料金が上がります。</li>
            <li><strong>法人番号・古物商許可番号は5社とも公式非掲載：</strong>{CHECKED}時点で公式サイト上の明記を確認できませんでした。気になる場合は業者に直接確認を。</li>
          </ul>

          {/* 企業構造の注意 */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
            <p className="font-bold text-amber-900 mb-2">⚠️ 混同に注意：JBRと「生活救急車」</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              かつてJBR（ジャパンベストレスキューシステム株式会社）が運営していた「生活救急車」の駆けつけ事業は、<strong>2022年11月に別法人「株式会社生活救急車」へ承継</strong>されています。現在の「鍵の生活救急車」の料金は、JBR本体の料金ではありません。JBRは現在、消費者向けの鍵料金表を掲載した公式サイトを運営していないため、本一覧では「—」としています。
            </p>
          </div>

          {/* 内部リンク */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">各社の詳しい評判・料金を見る</h2>
            <div className="flex flex-wrap gap-2">
              {rows.filter((r) => r.reviewPath).map((r) => (
                <a key={r.name} href={r.reviewPath} className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">{r.name}の評判・料金</a>
              ))}
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場の考え方</a>
              <a href="/kagi-koukan-timing/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">鍵交換のベストタイミング</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">料金インデックスに関するよくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-xl border border-black/10 overflow-hidden">
                <summary className="px-5 py-4 cursor-pointer font-medium text-text-primary text-sm">Q. {f.q}</summary>
                <div className="px-5 pb-4 text-sm text-text-secondary leading-relaxed">A. {f.a}</div>
              </details>
            ))}
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white/70 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex flex-col sm:flex-row justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3 text-white">
                <span className="text-2xl">🔑</span>
                <span className="text-lg font-bold">鍵トラブルナビ</span>
              </div>
              <p className="text-sm max-w-sm">
                鍵のトラブルでお困りの方に、信頼できる鍵業者を比較・紹介するサービスです。
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">運営情報</h4>
              <ul className="space-y-2 text-sm">
                <li>運営: 株式会社MediaX</li>
                <li>所在地: 東京都渋谷区</li>
                <li><a href="/terms/" className="hover:text-white transition-colors">利用規約</a></li>
                <li><a href="/privacy/" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
                <li><a href="/content-policy/" className="hover:text-white transition-colors">記事の制作ポリシー</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-xs text-white/40">
            <p>当サイトはアフィリエイトプログラムに参加しており、紹介先サービスへの申し込みにより報酬を受け取る場合があります。料金は各社公式サイトの表示を2026年7月7日に確認したもので、実際の費用は各業者の見積もりによります。</p>
            <p className="mt-2">&copy; 2026 株式会社MediaX All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
