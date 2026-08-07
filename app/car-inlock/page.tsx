import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "車のインロック（鍵の閉じ込み）解決法【2026年版】JAF・保険・鍵屋の料金比較 | 鍵トラブルナビ",
  description:
    "車に鍵を閉じ込めた（インロック）時の対処法を手順で解説。JAF会員は無料、非会員は有料（夜間・一般道のドア開放25,630円/JAF公式）。自動車保険のロードサービス付帯なら無料の場合も。鍵屋の相場は8,000〜15,000円。子ども・ペットの閉じ込みは迷わず119番を。",
  alternates: { canonical: "https://kagi-trouble-navi.com/car-inlock/" },
};

const steps = [
  { title: "スペアキーを取りに行けないか確認", desc: "自宅や家族の元にスペアキーがあり、30分〜1時間程度で取りに行ける・持ってきてもらえるなら、それが最も安全で無料の解決策です。" },
  { title: "JAF会員ならJAFに救援依頼（会員は無料）", desc: "JAF会員はキー閉じ込みの解錠を24時間無料で受けられます（JAF公式）。会員証がなくてもアプリや氏名照会で会員確認が可能です。非会員は有料で、救援が混雑している時間帯は会員優先になります。" },
  { title: "自動車保険のロードサービスを確認", desc: "多くの自動車保険（任意保険）にはロードサービスが自動付帯しており、キー閉じ込みの解錠が無料範囲に含まれていることが多いです。保険証券やアプリの緊急連絡先に電話して確認しましょう。利用しても等級には影響しないのが一般的ですが、念のため確認を。" },
  { title: "鍵の専門業者（鍵屋）に依頼", desc: "JAF非会員で保険も使えない場合は鍵屋へ。車種・年式・鍵のタイプ（スマートキーか否か）を伝えると見積もりがスムーズです。到着まで15〜60分が目安です。" },
  { title: "解決後はインロックの原因を取り除く", desc: "スマートキーの電池残量低下は閉じ込みの典型的な原因です。電池を交換し、降車時は鍵を必ず手に持つ習慣（ポケットや車内に置いたまま降りない）をつけましょう。" },
];

const faqs = [
  { q: "JAFを呼ぶといくらかかりますか？", a: "JAF会員は無料です（キー閉じ込みの解錠は会員サービスに含まれます）。非会員は有料で、例えば夜間・一般道でのドア開放作業は25,630円です（JAF公式の掲載料金・2026年7月4日確認）。年会費を考えると、非会員料金1回分で数年分の会費に相当します。" },
  { q: "自動車保険のロードサービスは使えますか？", a: "多くの任意保険にロードサービスが自動付帯しており、キー閉じ込みの解錠は無料範囲に含まれることが多いです。保険会社の緊急デスクに連絡して確認しましょう。一般的にロードサービスの利用だけでは等級（保険料）に影響しませんが、契約により異なるため利用時に確認すると安心です。" },
  { q: "スマートキーなのになぜインロックが起きるのですか？", a: "スマートキーの電池残量低下で車が鍵の存在を検知できなくなるケースや、鍵を車内に置いたままドアハンドルのロック操作をしてしまうケースなどが典型です。電池は1〜2年を目安に交換し、降車時は鍵を身につける習慣が確実な予防策です。" },
  { q: "子どもやペットが車内に閉じ込められました。どうすれば？", a: "夏場の車内は短時間で命に関わる温度になります。ためらわず119番（緊急時は窓を割る判断を含めて消防が対応）に通報してください。JAFも子どもの閉じ込みは優先対応としています。業者の到着を待つより命を優先してください。" },
  { q: "鍵屋に頼むといくらかかりますか？", a: "国産車の一般的な鍵開けで8,000〜15,000円が相場の目安です。輸入車や特殊な防盗機構つきの車は15,000〜30,000円以上かかる場合があります。出張費・深夜割増の有無を含めた総額を作業前に必ず確認しましょう。" },
  { q: "インロックでレッカー移動は必要ですか？", a: "通常は不要です。インロックの解錠はその場での作業で解決することがほとんどで、車を移動させる必要はありません。ただし、鍵の紛失でイモビライザーの再登録が必要になり現地で対応できない場合など、例外的にディーラーへの搬送が必要になるケースはあります。" },
  { q: "スマートキーの電池が切れてドアが開きません。閉じ込みですか？", a: "鍵が手元にあるなら閉じ込みではなく電池切れの可能性が高いです。スマートキー本体に内蔵されたメカニカルキーを取り出し、運転席ドアの鍵穴で開けられる車種が多くあります。取り出し方は取扱説明書やメーカーサイトで確認できます。開けた後はエンジンの始動方法（電池切れ時の非常始動手順）も説明書で確認しましょう。" },
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
    { "@type": "ListItem", position: 2, name: "車のインロック解決法" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "車のインロック（鍵の閉じ込み）解決法【2026年版】",
  description: "車に鍵を閉じ込めた時の対処手順。JAF・自動車保険・鍵屋の使い分けと料金比較、NG行動を解説。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
};

export default function CarInlockPage() {
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
            <span className="text-text-secondary">車のインロック解決法</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            車のインロック（鍵の閉じ込み）解決法【2026年版】
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年7月4日</p>

          {/* 緊急警告 */}
          <div className="bg-red-50 border border-red-300 rounded-2xl p-5 mb-6">
            <p className="font-bold text-red-700 mb-1">⚠️ 子ども・ペットが車内にいる場合</p>
            <p className="text-sm text-red-700 leading-relaxed">
              夏場の車内は短時間で命に関わる温度になります。業者の到着を待たず、<strong>ためらわず119番に通報してください</strong>。窓を割る判断を含めて消防が対応します。
            </p>
          </div>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：インロックしたらこの順で動く</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              車に鍵を閉じ込めたら、<strong>①スペアキーの確保を検討 → ②JAF会員ならJAF（無料） → ③自動車保険のロードサービスを確認（無料付帯が多い） → ④鍵屋に依頼</strong>の順が最安・確実です。JAF非会員は有料（例：夜間・一般道のドア開放<strong>25,630円</strong>・JAF公式）、鍵屋の相場は国産車で<strong>8,000〜15,000円</strong>。針金でこじ開けるのは車両側の故障につながるためNGです。
            </p>
          </div>

          {/* 手順 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">インロック時の対処手順（5ステップ）</h2>
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

          {/* 呼ぶ先の優先順位 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">呼ぶ先の優先順位——どこに連絡すべきか</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            インロック時の連絡先は複数ありますが、<strong>費用を抑えられる順</strong>に確認していくのが基本です。あわてて最初に目についた業者へ電話する前に、次の順番で自分が使えるサービスを整理しましょう。
          </p>
          <div className="space-y-3 mb-10">
            {[
              { label: "a", title: "JAF会員ならまずJAF", desc: "JAF会員はキー閉じ込みの解錠が無料の会員特典に含まれます。家族の誰かが会員であれば適用できる場合もあるため、同乗者・家族の会員状況も確認しましょう。アプリや氏名照会で会員確認ができるので、会員証を持っていなくても諦める必要はありません。" },
              { label: "b", title: "自動車保険のロードサービス", desc: "多くの任意保険には鍵開けサポートを含むロードサービスが付帯しています。契約内容は保険証券・契約者ページ・保険会社の公式アプリで確認できます。証券が手元になくても、保険会社名さえ分かれば緊急デスクの電話番号を検索して問い合わせが可能です。付帯していれば無料で対応してもらえるケースが多く、JAF非会員なら最優先で確認したい選択肢です。" },
              { label: "c", title: "ディーラー・メーカー窓口（スマートキーの場合）", desc: "スマートキーや特殊な防盗機構つきの車は、購入したディーラーや自動車メーカーのカスタマー窓口に相談するのも有効です。鍵の紛失を伴う場合や、鍵の再作成・再登録が必要になりそうな場合は、最初からディーラー経由で進めたほうが結果的にスムーズなことがあります。営業時間内であれば対応方法や費用の目安を教えてもらえます。" },
              { label: "d", title: "鍵の専門業者（鍵屋）", desc: "上記がいずれも使えない、または深夜・遠方でディーラーに頼れない場合の選択肢です。到着が早い一方で料金は業者・条件により幅があるため、後述の「業者に依頼する場合の選び方」を参考に、電話の時点で総額を確認してから依頼しましょう。" },
            ].map((p, i) => (
              <div key={i} className="flex gap-3 bg-white rounded-xl border border-black/10 p-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">{p.label}</span>
                <div>
                  <p className="font-bold text-text-primary text-sm mb-1">{p.title}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 依頼先比較 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">依頼先ごとの料金・特徴の比較</h2>
          <div className="overflow-x-auto mb-4 rounded-xl border border-black/10">
            <table className="w-full text-sm min-w-[520px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-bold">依頼先</th>
                  <th className="px-4 py-3 text-left font-bold">料金の目安</th>
                  <th className="px-4 py-3 text-left font-bold">ポイント</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["JAF（会員）", "無料", "24時間対応。キー閉じ込みは会員サービスに含まれる"],
                  ["JAF（非会員）", "有料（例：夜間・一般道のドア開放 25,630円）", "混雑時は会員優先。その場で入会しても当日は非会員料金の場合あり"],
                  ["自動車保険のロードサービス", "無料のことが多い", "任意保険に自動付帯が主流。等級への影響は一般的になし（要確認）"],
                  ["鍵の専門業者", "8,000〜15,000円（国産車）", "輸入車・特殊キーは15,000〜30,000円以上。総額見積もりを事前確認"],
                ].map((r, i) => (
                  <tr key={i} className={i % 2 ? "bg-surface-alt" : "bg-white"}>
                    <td className="px-4 py-3 font-medium text-text-primary whitespace-nowrap">{r[0]}</td>
                    <td className="px-4 py-3 text-primary font-bold">{r[1]}</td>
                    <td className="px-4 py-3 text-text-secondary">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-10">
            ※JAF料金はJAF公式サイト掲載の料金（2026年7月4日確認）。鍵業者の料金は一般的な相場の目安で、車種・時間帯により変動します。
          </p>

          {/* スマートキー車の注意点 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">スマートキー車の注意点</h2>
          <div className="space-y-4 mb-10">
            <div className="bg-white rounded-xl border border-black/10 p-5">
              <h3 className="font-bold text-text-primary text-sm mb-1.5">電池切れならメカニカルキー（内蔵キー）で開けられる場合がある</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                スマートキーの多くには、本体内部に金属製のメカニカルキー（内蔵キー・エマージェンシーキー）が収納されています。スマートキーの電池が切れてドアが反応しない場合でも、鍵が手元にあるなら、内蔵キーを取り出して運転席ドアの鍵穴に差し込めば開けられる車種が多くあります。鍵穴がカバーで隠れている車種もあるため、取扱説明書やメーカーサイトで内蔵キーの取り出し方と鍵穴の位置を一度確認しておくと、いざという時に業者を呼ばずに済みます。
              </p>
            </div>
            <div className="bg-white rounded-xl border border-black/10 p-5">
              <h3 className="font-bold text-text-primary text-sm mb-1.5">スマートキー紛失時はイモビライザーの再登録が必要</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                車内閉じ込みではなくスマートキー自体を紛失した場合は、単に鍵を開けるだけでは解決しません。現在の車の多くにはイモビライザー（電子的な盗難防止装置）が搭載されており、新しい鍵を使うには車両側への再登録作業が必要です。この作業はディーラーか、イモビライザー対応の設備を持つ一部の鍵業者しか行えないため、依頼前に「スマートキーの作成・再登録に対応しているか」を必ず電話で確認しましょう。対応できない業者に来てもらっても解決せず、出張費だけかかる恐れがあります。
              </p>
            </div>
          </div>

          {/* 子ども・ペットの閉じ込み */}
          <h2 className="text-xl font-bold text-text-primary mb-4">子ども・ペットの閉じ込みは「緊急対応」——ためらわず110番・119番</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-3">
            車内に子どもやペットを残したままインロックした場合は、通常のインロックとは扱いを分けてください。夏場の車内温度は短時間で急上昇し、命に関わる状況になり得ます。晴れた日はもちろん、曇りの日や春・秋でも車内は想像以上に高温になることがあり、「業者の到着を待てば大丈夫」という判断は危険です。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            危険を感じたら<strong>110番・119番への通報もためらわない</strong>でください。緊急性が高い場合は、窓ガラスを割って救出する判断を含めて警察・消防が対応します。ガラスの交換費用より命が優先です。通報と並行してJAFや保険のロードサービスにも連絡し、状況（子ども・ペットが車内にいること）を必ず伝えると優先的に扱われやすくなります。
          </p>

          {/* NG行動 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">やってはいけないNG行動</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { title: "針金・定規でこじ開ける", desc: "最近の車は盗難防止機構や内部配線が複雑で、素人のこじ開けはドア内部の故障・傷につながります。修理費のほうが高くつきます。" },
              { title: "窓ガラスを割る（緊急時以外）", desc: "ガラス交換は数万円規模。人命に関わる緊急時（子ども・ペットの閉じ込み）以外は割らず、JAF・保険・業者を呼びましょう。" },
              { title: "「◯◯円〜」の格安広告で即決", desc: "現地で高額請求になる例があります。会社名・総額見積もり・キャンセル可否を電話で確認してから依頼しましょう。" },
              { title: "エンジンをかけたまま放置して施錠", desc: "半ドアやアイドリング中の施錠はインロックの定番原因です。降車時は必ず鍵を手に持ってからドアを閉める習慣を。" },
            ].map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">NG: {n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 業者の選び方 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">業者に依頼する場合の選び方</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            鍵業者に依頼する場合は、<strong>電話の段階でどれだけ正確に情報を伝え、総額を確定させられるか</strong>がトラブル回避の分かれ目です。次のポイントを押さえて連絡しましょう。
          </p>
          <ul className="space-y-3 mb-6">
            {[
              { title: "車種・年式・鍵の種類を伝える", desc: "メーカー・車種・年式に加え、鍵のタイプ（通常の金属キー／リモコンキー／スマートキー）とイモビライザーの有無（分かる範囲で）を伝えましょう。鍵の種類によって作業の難易度と料金が大きく変わるため、これを伝えずに呼ぶと現地で見積もりが跳ね上がる原因になります。" },
              { title: "出張費・作業費・キャンセル料込みの「総額」で見積もりを取る", desc: "「作業費◯◯円〜」だけでは総額は分かりません。出張費・見積もり後にキャンセルした場合の費用まで含めて、電話口で総額の目安を確認しましょう。総額を答えられない・現地でないと一切分からないという業者は避けたほうが無難です。" },
              { title: "夜間・早朝の割増料金を確認する", desc: "深夜・早朝は割増料金を設定している業者が一般的です。時間帯による加算の有無と金額を事前に確認し、緊急でなければ日中の依頼に切り替えるのも節約手段です。" },
              { title: "会社名・所在地が明記された業者を選ぶ", desc: "運営会社名・所在地・固定電話番号がサイトに明記されているかを確認しましょう。複数の業者に電話して比較する余裕があれば、相場から外れた請求を避けやすくなります。" },
            ].map((c, i) => (
              <li key={i} className="flex gap-3 bg-white rounded-xl border border-black/10 p-4">
                <span className="shrink-0 text-primary font-bold text-sm mt-0.5">✓</span>
                <div>
                  <p className="font-bold text-text-primary text-sm mb-1">{c.title}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{c.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            鍵開け料金の一般的な相場観は<a href="/ryokin/" className="text-primary underline hover:no-underline">料金相場のページ</a>で、業者ごとの特徴の比較は<a href="/agents/" className="text-primary underline hover:no-underline">業者比較のページ</a>で詳しく解説しています。
          </p>

          {/* 業者選び・内部リンク */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">車の鍵開けに対応できる業者を比較する</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              JAF非会員・保険が使えない場合は、車の鍵開け対応を明記した24時間対応の鍵業者へ。車種と鍵のタイプを伝えて総額見積もりで比較しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を詳しく見る</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">車のインロックに関するよくある質問</h2>
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
