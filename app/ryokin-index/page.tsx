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
  {
    q: "なぜ公式料金の表示がない会社があるのですか？",
    a: "鍵業者のなかには、料金を公式サイトに公示せず「現地見積もりで提示」とする会社や、法人向け事業が中心で消費者向けの価格表を持たない会社があります。本ページは当サイトが公式サイト上で実際に確認できた表示のみを掲載する方針のため、公式に価格表示がない会社は「—」または非掲載としています。「—」は「高い」「怪しい」という意味ではなく、公式で確認できなかったという事実の記録です。",
  },
  {
    q: "この表の金額だけで依頼先を決めてもよいですか？",
    a: "おすすめしません。この表はあくまで各社の公式表示を横並びで確認するための「比較の起点」です。実際の請求額は鍵の種類・作業内容・出張距離・時間帯で変わるため、最低表示が安い会社が総額でも安いとは限りません。候補を2〜3社に絞ったうえで、同じ条件を伝えて総額の見積もりを取り、金額と説明の明瞭さで最終判断してください。",
  },
  {
    q: "表に載っていない業者の料金はどこで確認できますか？",
    a: "本ページは編集部が公式サイトで料金表示を一次確認できた主要業者に限定して掲載しています。掲載外の業者を検討する場合は、その業者の公式サイトの料金ページと運営会社情報を直接確認したうえで、作業前見積もりで総額を確かめてください。作業別のおおまかな相場観は当サイトの料金相場ページ（/ryokin/）でも解説しています。",
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

          {/* 使い方ガイド */}
          <h2 className="text-xl font-bold text-text-primary mb-4">この表の使い方</h2>
          <div className="text-sm text-text-secondary leading-relaxed space-y-3 mb-8">
            <p>
              下の表に並んでいる金額は、各社が公式サイトに表示している<strong>下限料金（最低額）</strong>です。「6,600円〜」の「〜」は「この金額から始まる」という意味であって、支払う総額ではありません。まずここを押さえたうえで、次の順番で使ってください。
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>横に見て「比較の起点」にする：</strong>同じサービス（鍵開けなら鍵開けの列）を横に見比べ、下限表示・出張費の扱い・割増の明記有無を確認して、候補を2〜3社に絞ります。</li>
              <li><strong>下限額の差より「何が含まれるか」を見る：</strong>部材費込みか別か、見積もり・キャンセルが無料かどうかで、下限が同じでも総額は変わります。表の但し書きと出典URLまで確認してください。</li>
              <li><strong>最終判断は必ず作業前見積もりで：</strong>この表で決め打ちせず、絞った候補に状況を伝えて総額の見積もりを取り、金額に納得してから作業を依頼します。見積もり金額と表示の差が大きい場合は、その理由の説明を求めましょう。</li>
            </ol>
            <p>
              つまりこの表は「最安の会社を決める表」ではなく、<strong>見積もり前に相手の公式表示を知っておくための資料</strong>です。公式表示を知っていれば、現地で提示された金額が妥当かどうかを判断する物差しになります。
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

          {/* 変動要因 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">公式表示と実勢総額が違う理由</h2>
          <div className="text-sm text-text-secondary leading-relaxed space-y-3 mb-8">
            <p>
              「公式には6,600円〜と書いてあったのに、請求は数万円だった」という声が生まれるのは、公式表示が<strong>もっとも簡単な条件で作業できた場合の下限</strong>だからです。実際の総額は、主に次の4つの要因で上下します。
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>鍵の種類：</strong>ギザギザの刻みキーに比べ、ディンプルキーや特殊錠は解錠の難度が高く、料金も上がります。実際に生活救急車は鍵開け8,800円〜に対しディンプル33,000円〜、鍵猿はディンプルで〜27,500円と、公式表示の段階で差がついています。</li>
              <li><strong>時間帯割増：</strong>深夜・早朝は割増を設ける業者があります。今回の確認では鍵猿が夜間（21:00〜7:59）5,500円を明記していましたが、明記がない業者でも現地で割増がかかる可能性はあり、事前確認が必要です。</li>
              <li><strong>出張距離・エリア：</strong>拠点から現場までの距離やエリアによって出張費・交通費が加算される場合があります。「見積もり無料」でも交通費やキャンセル料は別、という条件の業者もあるため、無料の範囲を確認しましょう。</li>
              <li><strong>部品代：</strong>鍵交換では作業費とは別にシリンダー等の部品代がかかります。部品のグレード（防犯性能）によって幅が大きく、総額を左右する最大の要因になりがちです。「部材費込み」か「＋部品代」かは表の表記で確認できます。</li>
            </ul>
            <p>
              これらはどの業者にも共通する一般的な構造で、変動すること自体は不当ではありません。問題になるのは、<strong>変動の理由を説明しないまま高額請求する業者</strong>です。見積もり時に「何が・いくら加算されるのか」の内訳を確認することが自衛になります。
            </p>
          </div>

          {/* 相見積もり */}
          <h2 className="text-xl font-bold text-text-primary mb-4">相見積もりの取り方</h2>
          <div className="text-sm text-text-secondary leading-relaxed space-y-3 mb-8">
            <p>
              締め出しなどの緊急時でも、電話1〜2本の相見積もりは数分ででき、総額の妥当性を判断する材料になります。手順は次のとおりです。
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>2〜3社に同じ条件を伝える：</strong>鍵穴や鍵本体の写真、刻印されている型番、状況（締め出し・鍵折れ・紛失など）、住所のエリアを揃えて伝えます。条件が同じでないと金額を比較できません。</li>
              <li><strong>電話で「総額レンジ」と「キャンセル料」を聞く：</strong>「最低いくらか」ではなく「うちのケースだと総額はいくらからいくらの幅か」を聞きます。あわせて、出張費・見積もり後に断った場合のキャンセル料の有無を必ず確認します。</li>
              <li><strong>その場での即決を迫られたら保留する：</strong>現地で表示とかけ離れた金額を提示され「今決めれば安くする」と迫られた場合は、いったん保留して他社の見積もりと比べるのが安全です。誠実な業者は見積もり段階での保留を認めます。</li>
            </ol>
            <p>
              電話口で総額レンジを一切答えない、キャンセル料の説明を濁す、といった対応が見られた場合は、その業者を候補から外す判断材料になります。
            </p>
          </div>

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
              <a href="/agents/kagi-kyukyusha/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">カギの救急車の評判・料金</a>
              <a href="/agents/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">業者比較の一覧を見る</a>
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

    </div>
  );
}
