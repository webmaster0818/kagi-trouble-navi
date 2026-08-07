import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "鍵が回らない・回りにくい時の原因と対処法【2026年7月】やってはいけないNGと料金相場 | 鍵トラブルナビ",
  description:
    "鍵が回らない・固い・回りにくい時の原因（ホコリ詰まり・潤滑不足・鍵の摩耗・凍結）と正しい対処法を解説。油（CRE556）を注すのはNG。直らない場合のシリンダー交換の料金相場は8,000〜25,000円が目安。無理に回して鍵を折らないための手順を紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/kagi-mawaranai/" },
};

const steps = [
  { title: "まず無理に回さない・力を入れすぎない", desc: "回らないからと力任せに回すと、鍵穴の中で鍵が折れてしまい、鍵開け＋シリンダー交換でかえって高額になります。まずは一度手を止め、原因を切り分けましょう。合鍵を使っている場合は、摩耗の少ない純正キー（元鍵）で試すと回ることがあります。" },
  { title: "鍵穴と鍵の汚れ・異物を取り除く", desc: "鍵穴にホコリ・砂・糸くずが詰まると回らなくなります。掃除機やエアダスターで鍵穴の異物を吸い出し、鍵本体も乾いた布で拭きます。濡らしたり洗剤を使うのは避けてください（内部のサビの原因になります）。" },
  { title: "鍵穴専用の潤滑剤を使う（油はNG）", desc: "潤滑不足が原因なら、鍵穴専用の潤滑剤（パウダー系・フッ素系）を少量スプレーします。応急処置として鉛筆の芯（黒鉛）を鍵の溝にこすりつける方法も有効です。※CRE556などの一般的な潤滑油（オイル系）は絶対に使わないでください。ホコリを吸着して数日〜数週間後にさらに悪化します。" },
  { title: "扉のゆがみ・建て付けを確認する", desc: "鍵は回るのに開かない・閉まりにくい場合は、扉のゆがみや金具（デッドボルトと受け座のズレ）が原因のことがあります。扉を軽く押し引きしながら鍵を回すと動くことがあります。頻発するなら建て付けの調整が必要です。" },
  { title: "直らなければ鍵の専門業者へ", desc: "上記でも回らない・鍵やシリンダーが摩耗している場合は、無理をせず鍵の専門業者へ。放置して完全に回らなくなると開錠＋交換が必要になり高額化します。依頼時は鍵の種類（刻みキー/ディンプルキー）と症状を伝えると見積もりが正確になります。作業前に総額を必ず確認しましょう。" },
];

const faqs = [
  { q: "鍵が回らない時、油（CRE556）を注してもいいですか？", a: "おすすめしません。CRE556などのオイル系潤滑剤は一時的に滑りが良くなりますが、粘度でホコリを吸着し、数日〜数週間後にかえって固まって悪化させることが多いためです。鍵穴には「鍵穴専用潤滑剤（パウダー系・フッ素系）」を使うか、応急処置なら鉛筆の芯（黒鉛）を鍵にこすりつけてください。" },
  { q: "鍵が回りにくい主な原因は何ですか？", a: "①鍵穴のホコリ・ゴミ詰まり ②潤滑不足 ③鍵やシリンダーの経年摩耗・変形 ④扉のゆがみ・金具のズレ ⑤冬場の凍結 が主な原因です。合鍵は純正キーより精度が落ち摩耗しやすいため、合鍵で回りにくい場合は元鍵で試すと改善することがあります。" },
  { q: "鍵が鍵穴の中で折れてしまいました。どうすればいいですか？", a: "自分で取り出そうとすると奥に押し込んで悪化させることがあります。折れた鍵の一部が出ていればラジオペンチで慎重に引き抜ける場合もありますが、無理なら鍵の専門業者に依頼してください。折れ込んだ鍵の除去とシリンダー交換で対応するのが一般的です。" },
  { q: "直らない場合、鍵交換の料金はいくらですか？", a: "シリンダー交換の相場は一般的な鍵で8,000〜15,000円、防犯性の高いディンプルキーで15,000〜25,000円程度が目安です（部品代＋作業費）。これに出張費や深夜・早朝の割増が加わる場合があります。作業前に総額の見積もりを確認しましょう。" },
  { q: "冬に鍵が回らないのは凍結ですか？", a: "気温が氷点下になると鍵穴内部の水分が凍って回らなくなることがあります。お湯をかけると再凍結や部品の傷みの原因になるため避け、市販の解氷スプレーやカイロで鍵穴周辺を温める、温めた鍵をゆっくり挿すなどで対応します。凍結を繰り返す場合は鍵穴用の防水・潤滑ケアが有効です。" },
];

const causeFlow = [
  {
    check: "スペアキー（合鍵）だと回らないが、純正キー（元鍵）なら回る",
    cause: "鍵側の摩耗・変形が原因",
    desc: "シリンダーは正常で、鍵そのものの山が摩耗・変形している可能性が高い状態です。合鍵は元鍵より精度が低く、複製を重ねるほど誤差が蓄積します。回る純正キーを元に、精度の高い合鍵を作り直すのが基本の対処です。摩耗した合鍵からさらに合鍵を作るのは避けましょう。",
  },
  {
    check: "純正キーを含め、どの鍵を挿しても回らない・固い",
    cause: "シリンダー側の汚れ・故障が原因",
    desc: "鍵穴内部のホコリ詰まりや潤滑不足、内部ピンの摩耗・故障が疑われます。まずは掃除機で鍵穴の異物を吸い出し、鍵穴専用潤滑剤でケアします。それでも改善しない場合はシリンダー内部の故障の可能性が高く、分解せず専門業者への相談が安全です。",
  },
  {
    check: "ドアを手前に引く・押しながらだと回る",
    cause: "扉の建て付け・ラッチ（かんぬき）のずれが原因",
    desc: "鍵やシリンダーではなく、扉の傾きでデッドボルトと受け座（ストライク）の位置がずれている状態です。蝶番のネジのゆるみや経年の歪みが典型的な原因で、放置するとずれが進行します。受け座の位置調整や蝶番の締め直しなど、建て付け側の調整で改善します。",
  },
  {
    check: "梅雨や夏など、特定の季節だけ回りにくい",
    cause: "湿気によるドア枠・扉の膨張が原因",
    desc: "木製の扉やドア枠は湿気で膨張し、乾燥すると元に戻るため、季節によって症状が出たり消えたりします。冬だけ回らない場合は鍵穴内部の凍結も疑われます。毎年繰り返すようなら、建て付け調整や扉まわりのメンテナンスを検討しましょう。",
  },
];

const maintenanceTips = [
  {
    title: "鍵本体を歯ブラシで清掃する",
    desc: "使い古しの歯ブラシで、鍵の溝や刻み（ディンプルキーはくぼみ）に溜まった汚れをかき出します。ポケットや鞄の中の糸くず・皮脂汚れは意外と多く、これだけで滑りが戻ることがあります。仕上げに乾いた布で拭き取り、水洗いや洗剤は使わないのがポイントです。",
  },
  {
    title: "鍵穴は掃除機でホコリを吸い出す",
    desc: "鍵穴の入り口に掃除機のノズルを当て、内部のホコリや砂を吸い出します。息を吹き込むのは水分（湿気）が入るため逆効果です。エアダスターを使う場合は缶を立てて短く噴射し、液が出ないように注意します。",
  },
  {
    title: "鍵穴専用パウダースプレーで潤滑する",
    desc: "清掃後、鍵穴専用の潤滑剤（パウダー系・フッ素系）を少量スプレーし、鍵を数回抜き挿しして馴染ませます。「鍵穴用」と明記された製品を選ぶのが重要で、家庭用の潤滑油で代用してはいけません。",
  },
  {
    title: "応急処置は鉛筆の黒鉛を鍵に塗る",
    desc: "専用潤滑剤が手元にない時は、鉛筆（Bや2Bなど濃いもの）の芯を鍵の溝全体にこすりつけ、そのまま抜き挿しします。黒鉛（グラファイト）は昔から使われる乾式の潤滑成分で、ホコリを吸着しにくいのが利点です。あくまで応急処置なので、後日専用スプレーでケアしましょう。",
  },
];

const proCases = [
  "歯ブラシ清掃・掃除機・専用潤滑剤を試しても改善しない",
  "鍵が途中までしか刺さらない・異物が詰まって取れない",
  "鍵は回るのに空回りして施錠・解錠できない（内部部品の破損の疑い）",
  "鍵穴の中で鍵が折れてしまった",
  "扉の建て付け調整が必要で自分では直せない",
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
    { "@type": "ListItem", position: 2, name: "鍵が回らない・回りにくい時の対処法" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "鍵が回らない・回りにくい時の原因と対処法【2026年7月】",
  description: "鍵が回らない・固い時の原因と正しい対処法、やってはいけないNG、直らない場合の料金相場を解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-07-15",
  dateModified: "2026-07-15",
};

export default function KagiMawaranaiPage() {
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
            <a href="/kagi-koukan-timing/" className="hover:text-secondary transition-colors">交換の時期</a>
            <a href="/agents/" className="hover:text-secondary transition-colors">業者比較</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-surface-alt border-b border-black/5">
          <div className="max-w-4xl mx-auto px-4 py-3 text-xs text-text-muted">
            <a href="/" className="hover:text-primary">ホーム</a>
            <span className="mx-1.5">/</span>
            <span className="text-text-secondary">鍵が回らない・回りにくい時の対処法</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            鍵が回らない・回りにくい！原因と正しい対処法【2026年7月】
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年7月15日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：鍵が回らない時はこの順で</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              鍵が回らない時は、<strong>①無理に回さない（鍵折れ防止）→ ②鍵穴のホコリ・異物を除去 → ③鍵穴専用潤滑剤（または鉛筆の芯）を使う</strong>のが正しい順番です。<strong>CRE556などの油はNG</strong>（ホコリを吸着して悪化）。それでも直らない・摩耗している場合はシリンダー交換で、相場は一般的な鍵で<strong>8,000〜15,000円</strong>、ディンプルキーで<strong>15,000〜25,000円</strong>が目安です。
            </p>
          </div>

          {/* 原因の切り分けフローチャート */}
          <h2 className="text-xl font-bold text-text-primary mb-4">原因の切り分けフローチャート（4つのチェック）</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            対処の前に、まず「どこが悪いのか」を切り分けると無駄がありません。以下の4つを上から順に試し、当てはまった項目の原因から対処しましょう。切り分けには純正キー（元鍵）とスペアキーの両方があると確実です。
          </p>
          <div className="space-y-3 mb-10">
            {causeFlow.map((c, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-4">
                <p className="text-sm text-text-secondary mb-1.5">
                  <span className="inline-block bg-surface-alt rounded px-2 py-0.5 text-xs font-bold text-text-primary mr-2">チェック{i + 1}</span>
                  {c.check}
                </p>
                <p className="font-bold text-primary text-sm mb-1">→ {c.cause}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* 手順 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵が回らない時の対処手順（5ステップ）</h2>
          <ol className="space-y-3 mb-10">
            {steps.map((s, i) => (
              <li key={i} className="flex gap-3 bg-white rounded-xl border border-black/10 p-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">{i + 1}</span>
                <div>
                  <p className="font-bold text-text-primary text-sm mb-1">{s.title}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* 自分でできるメンテナンス */}
          <h2 className="text-xl font-bold text-text-primary mb-4">自分でできる鍵・鍵穴のメンテナンス</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            「回りにくい」段階なら、道具を使った簡単なメンテナンスで改善するケースが多くあります。いずれも一般的な手入れ方法で、特別な技術は不要です。半年〜1年に1回を目安に行うと、トラブルの予防にもなります。
          </p>
          <div className="space-y-3 mb-10">
            {maintenanceTips.map((m, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-4">
                <p className="font-bold text-text-primary text-sm mb-1">{m.title}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* NG行動 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">やってはいけないNG行動</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { title: "油（CRE556）を注す", desc: "一時的に滑りますが、粘度でホコリを吸着し数日〜数週間後にさらに固まります。鍵穴には専用のパウダー系・フッ素系潤滑剤を使いましょう。" },
              { title: "力任せに回す", desc: "回らないまま無理に回すと鍵穴の中で鍵が折れ、開錠＋シリンダー交換で高額に。少しでも抵抗が強い時は止めましょう。" },
              { title: "針金などでこじる", desc: "シリンダー内部のピンを傷めると、清掃や潤滑では直らず交換（10,000〜25,000円）が必要になります。" },
              { title: "凍結にお湯をかける", desc: "急な温度差で部品を傷めたり、水分が再凍結して悪化します。解氷スプレーやカイロで温めるのが正解です。" },
            ].map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">NG: {n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 料金 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">直らない場合の料金目安（鍵開け・交換）</h2>
          <div className="overflow-x-auto mb-4 rounded-xl border border-black/10">
            <table className="w-full text-sm min-w-[480px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-bold">作業</th>
                  <th className="px-4 py-3 text-left font-bold">料金相場（税込目安）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["鍵開け（回らなくなった場合）", "8,000〜15,000円"],
                  ["シリンダー交換（一般的な鍵）", "8,000〜15,000円"],
                  ["シリンダー交換（ディンプルキー）", "15,000〜25,000円"],
                  ["折れ込んだ鍵の取り出し", "8,000〜15,000円"],
                  ["出張費・深夜割増（かかる場合）", "3,000円前後〜"],
                ].map((r, i) => (
                  <tr key={i} className={i % 2 ? "bg-surface-alt" : "bg-white"}>
                    <td className="px-4 py-3 font-medium text-text-primary">{r[0]}</td>
                    <td className="px-4 py-3 text-primary font-bold whitespace-nowrap">{r[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-10">
            ※一般的な相場の目安です。鍵の種類・状況・時間帯により変動します。各社の公式料金は<a href="/ryokin-index/" className="text-primary underline">鍵トラブル料金インデックス</a>、相場の詳細は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>をご覧ください。
          </p>

          {/* 放置のリスクと交換の判断 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">「回りにくい」を放置するリスクと交換の判断</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            「固いけれど一応回るから」と使い続けるのは危険です。回りにくさはシリンダー内部の摩耗や汚れが進行しているサインで、<strong>多くの場合は完全に回らなくなる故障の前兆</strong>です。ある日突然回らなくなれば、外出先から帰宅して家に入れない「締め出し」状態になりかねません。締め出された場合の対処は<a href="/shimedashi/" className="text-primary underline">家の鍵をなくして閉め出された時の対処法</a>で解説しています。また、固い鍵を毎日無理に回し続けると金属疲労が蓄積し、鍵穴の中で折れるリスクも高まります。折れてしまった場合は<a href="/kagi-ore/" className="text-primary underline">鍵が折れた時の対処法</a>を参照してください。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            交換を判断する目安として、シリンダー（錠前）の寿命は<strong>一般的に10年程度</strong>とされています（日本ロック工業会が錠前の耐用年数として広く案内している一般値）。10年前後使っていて回りにくさが出てきたなら、清掃で一時的に改善しても部品の摩耗は戻らないため、シリンダー交換を前向きに検討するタイミングです。防犯性能も年々進化しており、古い刻みキーからディンプルキーへ替えることでピッキング対策にもなります。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            「まだ使えるか」「替えるべきか」の詳しい判断基準は<a href="/kagi-koukan-timing/" className="text-primary underline">鍵交換のタイミングと目安</a>で解説しています。
          </p>

          {/* 業者に依頼すべきケースと選び方 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">業者に依頼すべきケースと選び方のポイント</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-3">次のような状態は自力での解決が難しく、悪化させる前に鍵の専門業者へ依頼するのが確実です。</p>
          <ul className="space-y-2 mb-6">
            {proCases.map((p, i) => (
              <li key={i} className="flex gap-2 bg-white rounded-lg border border-black/10 px-4 py-3 text-sm text-text-secondary">
                <span className="text-primary font-bold shrink-0">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            業者選びで最も重要なのは、<strong>作業を始める前に「出張費・部品代・作業費を含めた総額」の見積もりを確認する</strong>ことです。電話で伝えられる金額は最低料金であることが多く、現地で症状を見たうえでの総額提示と、追加料金の有無を必ず確認しましょう。見積もりに納得できなければ、その場で断って構いません。キャンセル料の条件も作業前に確認しておくと安心です。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            費用感を事前に把握しておきたい方は<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>を、料金体系や対応エリアで業者を比べたい方は<a href="/agents/" className="text-primary underline">鍵トラブル業者の比較</a>をご覧ください。相場を知ったうえで見積もりを取れば、高すぎる請求にも気づけます。
          </p>

          {/* 業者選び・内部リンク */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">直らない鍵は無理せず業者に相談</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              自分で直そうとして鍵を折ると、かえって高額になります。潤滑・清掃で直らない場合は、料金の明確な業者に総額見積もりを取って相談しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin-index/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">各社の公式料金を見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵が回らないトラブルのよくある質問</h2>
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
