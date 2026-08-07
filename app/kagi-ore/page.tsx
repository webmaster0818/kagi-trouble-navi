import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "鍵が折れた！鍵穴に詰まった折れ鍵の抜き方と料金相場【2026年版】 | 鍵トラブルナビ",
  description:
    "鍵が鍵穴の中で折れた時の対処法を手順で解説。瞬間接着剤で継ぐのは絶対NG（鍵穴内で固着しシリンダー交換コース）。折れ鍵の抜き取りの料金相場は8,000〜15,000円、抜けずに交換となる場合は＋10,000〜40,000円。折れる原因と予防法も紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/kagi-ore/" },
};

const steps = [
  { title: "それ以上回さない・押し込まない", desc: "折れた瞬間に無理に回したり押し込んだりすると、折れた破片が鍵穴の奥に入り込み、抜き取りの難易度と費用が上がります。まず手を止めましょう。" },
  { title: "破片が飛び出ていればピンセット等で優しく抜く", desc: "鍵穴から破片の頭が数ミリ以上出ている場合は、ピンセットや先の細いラジオペンチでまっすぐ優しく引き抜ける場合があります。左右にこじる・強く挟むのは破片を奥に押し込む原因になるため禁物です。" },
  { title: "抜けなければ鍵屋に「折れ鍵の抜き取り」を依頼", desc: "破片が奥にある・掴めない場合は専用工具（エキストラクター）を持つ鍵の専門業者に依頼するのが確実です。依頼時は「鍵が中で折れた」「鍵の種類」「建物の種類」を伝えると見積もりがスムーズです。" },
  { title: "抜けたらスペアキーで動作確認", desc: "破片を抜いた後は、スペアキーがスムーズに回るか確認します。引っかかりがある場合はシリンダー内部が傷んでいる可能性があるため、業者に点検してもらいましょう。" },
  { title: "同じ鍵を使い続けるかを判断する", desc: "一度折れた鍵の折れ残り側をそのまま使うのは危険です。刻みが残っていれば合鍵店で新しい鍵を作成できる場合があります。鍵自体が古く摩耗している場合は、シリンダーごと交換したほうが安全です。" },
];

const faqs = [
  { q: "折れた鍵の抜き取りはいくらかかりますか？", a: "折れ鍵の抜き取りの相場は8,000〜15,000円が目安です。破片が奥に入り込んでいて分解が必要な場合や、シリンダーが傷んで交換になる場合は＋10,000〜40,000円程度かかります。作業前に総額の見積もりを必ず確認しましょう。" },
  { q: "瞬間接着剤で折れた鍵をくっつけて抜くのはアリですか？", a: "絶対にやめてください。接着剤が鍵穴内部に流れ込むとピンが固着し、抜き取りでは済まずシリンダーごと交換（10,000〜40,000円）になる典型的な失敗例です。鍵屋の現場でも「接着剤で悪化した」ケースは定番のトラブルです。" },
  { q: "なぜ鍵は折れるのですか？", a: "主な原因は①長年の使用による金属疲労・摩耗、②鍵の曲がりを放置して使い続けた、③鍵穴の潤滑不足で重くなったところに無理な力をかけた、の3つです。回りが渋い・曲がっているといった前兆がある鍵は折れる前に合鍵を作っておきましょう。" },
  { q: "折れた鍵から合鍵は作れますか？", a: "刻み（ギザギザ）やディンプルの窪みが破片に残っていれば、2つの破片から合鍵を作成できる場合があります。純正キーの番号（キーナンバー）が分かる場合はメーカー取り寄せも可能です。まずは合鍵店か鍵業者に破片を持って相談してみてください。" },
  { q: "鍵穴に油を差してもいいですか？", a: "食用油やCRC等の一般的な潤滑油はNGです。内部でホコリを固めて動作不良の原因になります。潤滑には鍵穴専用のパウダースプレーを使うか、鉛筆の芯（黒鉛）を鍵に塗る方法が安全です。" },
  { q: "賃貸で鍵が折れたら費用は誰が負担しますか？", a: "原因によって異なります。長年の使用による金属疲労など経年劣化が原因なら貸主（大家・管理会社）負担となるケースが多く、無理な力をかけた・自作の合鍵を使っていたなど借主の過失が原因なら自己負担が一般的です。契約内容にもよるため、自己判断で業者を呼ぶ前にまず管理会社や大家に連絡し、指示を仰ぐのが安全です。無断で手配すると費用を請求できなくなる場合があります。" },
  { q: "夜中に鍵が折れたら朝まで待つべきですか？", a: "状況次第です。家に入れない・鍵がかけられないなど防犯上の問題がある場合は、深夜対応の業者に依頼するのが現実的です（深夜帯は割増料金がかかる点に注意）。一方、別の出入口から入れる・在宅で施錠に支障がないなら、朝まで待って通常時間帯に依頼したほうが割増を避けられます。待つ間は破片に触らず、そのままの状態にしておきましょう。" },
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
    { "@type": "ListItem", position: 2, name: "鍵が折れた時の対処法" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "鍵が折れた！鍵穴に詰まった折れ鍵の抜き方と料金相場【2026年版】",
  description: "鍵が鍵穴の中で折れた時の対処手順、折れ鍵抜き取りの料金相場、NG行動と予防法を解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
};

export default function KagiOrePage() {
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
            <span className="text-text-secondary">鍵が折れた時の対処法</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            鍵が折れた！鍵穴に詰まった折れ鍵の抜き方と料金相場【2026年版】
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年7月4日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：折れたらこの順で動く</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              鍵が鍵穴の中で折れたら、<strong>①それ以上回さない → ②破片が飛び出ていればピンセットで優しく抜く → ③抜けなければ鍵屋に「折れ鍵の抜き取り」を依頼</strong>の順で対処します。抜き取りの相場は<strong>8,000〜15,000円</strong>、シリンダー交換になると<strong>＋10,000〜40,000円</strong>。<strong>瞬間接着剤で継いで抜く方法は固着して交換コースになるため絶対NG</strong>です。
            </p>
          </div>

          {/* 手順 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵が折れた時の対処手順（5ステップ）</h2>
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

          {/* 自力での抜き方 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">折れた鍵の自力での抜き方（試してよい範囲）</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            自力での抜き取りを試してよいのは、<strong>破片の頭が鍵穴から数ミリ以上出ていて、ピンセットや先の細いラジオペンチで確実につかめる場合のみ</strong>です。破片が鍵穴の中に完全に隠れている・つかめるだけの出しろがない場合は、素人が触るほど奥に入り込むため、その時点で業者依頼に切り替えるのが賢明です。
          </p>
          <div className="space-y-3 mb-4">
            {[
              { title: "破片の向きと出しろを確認する", desc: "明かりで鍵穴を照らし、破片がどの角度で残っているかを確認します。鍵穴が回転した状態で折れている場合は、無理に抜くとシリンダーを傷めるため触らないでください。" },
              { title: "ピンセット・ラジオペンチでまっすぐ手前に引く", desc: "破片の平らな面を軽く挟み、鍵を抜く時と同じ方向へまっすぐゆっくり引き抜きます。左右にこじる・上下にゆするのは破片を奥へ送り込む動きになるため禁物です。" },
              { title: "滑りが悪い時は鍵穴専用パウダースプレーのみ使う", desc: "潤滑が必要な場合に使ってよいのは鍵穴専用のパウダー（粉体）スプレーだけです。油を含まない黒鉛系の潤滑剤で、ホームセンターや鍵メーカーの純正品として市販されています。" },
              { title: "2〜3回試して動かなければ中止する", desc: "何度も繰り返すほど破片は奥に入り、内部のピンを傷めます。少し試して動く気配がなければ深追いせず、折れ鍵抜きに対応する鍵業者へ依頼しましょう。" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-4">
                <p className="font-bold text-text-primary text-sm mb-1">{s.title}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-muted mb-10">
            ※上記は一般的な手順です。ディンプルキーや電子錠など構造が複雑な鍵は、無理をせず最初から専門業者に相談することをおすすめします。
          </p>

          {/* NG行動 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">やってはいけないNG行動</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { title: "瞬間接着剤で破片を継ぐ", desc: "接着剤が鍵穴内で固まるとピンが固着し、シリンダーごと交換（10,000〜40,000円）になります。折れ鍵トラブルで最も多い悪化パターンです。" },
              { title: "針金・つまようじでほじる", desc: "破片を奥に押し込んだり、先端が中で折れて異物が増えたりします。内部部品を傷めると抜き取りでは済まなくなります。" },
              { title: "スペアキーを無理に差し込む", desc: "破片が残ったままスペアキーを差すと、スペアまで曲がる・破片がさらに奥へ入るなど二重のトラブルになります。" },
              { title: "折れかけの鍵を使い続ける", desc: "曲がり・ヒビのある鍵は次に回した時に折れます。前兆がある時点で合鍵作成・鍵交換を検討するのが結局一番安上がりです。" },
              { title: "CRC-556など油系潤滑剤を吹き込む", desc: "油分が鍵穴内部でホコリや金属粉を吸着して固まり、破片の抜き取りをさらに難しくします。潤滑剤を使うなら鍵穴専用のパウダースプレー以外は使わないでください。" },
            ].map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">NG: {n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 原因と予防策 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">なぜ鍵は折れるのか・予防策</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            鍵は突然折れるように見えて、実際には前兆があることがほとんどです。原因を知っておくと、折れる前に手を打てます。
          </p>
          <div className="space-y-3 mb-4">
            {[
              { title: "経年の金属疲労・摩耗", desc: "鍵の多くは真鍮など比較的柔らかい金属でできており、毎日の抜き差しと回転で少しずつ摩耗・疲労が蓄積します。長年使った鍵は見た目に異常がなくても内部にダメージが溜まっており、ある日ポキッと折れます。" },
              { title: "合鍵の精度不足", desc: "合鍵から作った合鍵は誤差が積み重なり、鍵穴内で引っかかりやすくなります。引っかかった状態で力をかけるのは折れる典型パターンです。合鍵は純正キー（マスターキー）から作るのが基本です。" },
              { title: "回りにくさ・引っかかりの放置", desc: "「最近鍵が回りにくい」「抜き差しが渋い」は折れる前のサインです。渋いまま力任せに回し続けると、金属疲労した鍵に一気に負荷がかかります。回りにくいと感じた時点での対処法は「鍵が回らない・回りにくい時の対処法」で解説しています。" },
            ].map((c, i) => (
              <div key={i} className="bg-white rounded-xl border border-black/10 p-4">
                <p className="font-bold text-text-primary text-sm mb-1">{c.title}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            予防策としては、①純正キーを保管用に残して普段は精度の高い合鍵を使う、②潤滑は鍵穴専用パウダースプレーで定期的に行う、③曲がり・ヒビのある鍵は使わず作り直す、の3点が基本です。回りにくさが続く場合は<a href="/kagi-mawaranai/" className="text-primary underline">鍵が回らない時の対処法</a>を、鍵自体が寿命を迎えている場合は<a href="/kagi-koukan-timing/" className="text-primary underline">鍵交換の時期の目安</a>を参考に、折れる前の交換を検討してください。
          </p>

          {/* 料金 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵屋に頼んだ場合の料金目安</h2>
          <div className="overflow-x-auto mb-4 rounded-xl border border-black/10">
            <table className="w-full text-sm min-w-[480px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-bold">状況</th>
                  <th className="px-4 py-3 text-left font-bold">料金相場（税込目安）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["折れ鍵の抜き取り", "8,000〜15,000円"],
                  ["抜き取り＋シリンダー分解洗浄", "＋5,000〜10,000円程度"],
                  ["シリンダー交換になった場合", "＋10,000〜40,000円"],
                  ["出張費（かかる場合）", "3,000円前後"],
                  ["深夜・早朝の割増", "数千円程度"],
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
            ※一般的な相場の目安です。鍵の種類・破片の位置・時間帯により変動します。詳しくは<a href="/ryokin/" className="text-primary underline">鍵開け・鍵交換の料金相場</a>をご覧ください。
          </p>

          {/* 依頼の流れと選び方 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">業者に依頼する場合の流れと選び方</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            折れ鍵の抜き取りでは、業者はエキストラクター（折れ鍵専用の抜き取り工具）やピンセット状の特殊工具を使い、シリンダーを傷めないように破片を引き出します。破片が奥深くにある場合は、シリンダーを一度取り外して分解し、内部から破片を取り出すこともあります。依頼から完了までの一般的な流れは次の通りです。
          </p>
          <ol className="space-y-3 mb-4">
            {[
              { title: "電話・フォームで状況を伝える", desc: "「鍵が鍵穴の中で折れた」「破片が見えるか・見えないか」「鍵の種類（ギザギザ・ディンプルなど）」「玄関か勝手口か」を伝えると、概算と到着時間の案内がスムーズです。" },
              { title: "現地で診断・作業前に総額見積もりを確認する", desc: "作業に入る前に、抜き取りだけで済むのか、分解や部品交換が必要なのか、出張費・割増を含めた総額を必ず確認します。口頭だけでなく金額を書面や画面で提示してもらうと安心です。" },
              { title: "抜き取り作業・動作確認", desc: "破片を抜いた後、スペアキーで施解錠がスムーズにできるかその場で確認します。引っかかりが残る場合は内部の点検を依頼しましょう。" },
              { title: "内部損傷があればシリンダー交換の検討", desc: "破片がピンを傷つけている・接着剤などで内部が汚損している場合は、抜き取りだけでは直らずシリンダー交換を提案されることがあります。交換理由と内訳の説明を受け、納得してから依頼しましょう。" },
            ].map((s, i) => (
              <li key={i} className="flex gap-3 bg-white rounded-xl border border-black/10 p-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">{i + 1}</span>
                <div>
                  <p className="font-bold text-text-primary text-sm mb-1">{s.title}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            業者選びのポイントは、①「折れ鍵抜き対応」を明記している、②作業前の総額見積もりを徹底している、③深夜・早朝の割増条件を事前に明示している、の3点です。相場感は<a href="/ryokin/" className="text-primary underline">料金相場のページ</a>で確認し、複数社を比べたい場合は<a href="/agents/" className="text-primary underline">鍵業者の比較ページ</a>を活用してください。その場で相場から大きく外れた金額を提示された場合は、即決せずいったん保留する判断も大切です。
          </p>

          {/* 業者選び・内部リンク */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">折れ鍵に対応できる鍵業者を比較する</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              折れ鍵の抜き取りは専用工具と経験が必要な作業です。「折れ鍵抜き対応」を明記している24時間対応の業者を中心に、作業前の総額見積もりで比較しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を詳しく見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵折れに関するよくある質問</h2>
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
