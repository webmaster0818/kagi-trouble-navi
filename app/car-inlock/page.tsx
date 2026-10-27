import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JAFのインキー（インロック・キー閉じ込み）料金｜会員は無料・非会員25,630円の条件と自動車保険のロードサービス | 鍵トラブルナビ",
  description:
    "JAFにインロック（インキー・キー閉じ込み）の解錠を依頼した場合の料金を、JAF公式の料金表で確認しました。会員は無料、非会員は夜間（20時〜8時）・一般道でのドア開放作業で25,630円（税込）です。昼間・高速道路の基本料、2024年4月改定前との違い、自動車保険のロードサービスとの違いも解説します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/car-inlock/" },
};

const steps = [
  { title: "スペアキーを取りに行けないか確認", desc: "自宅や家族の元にスペアキーがあり、30分〜1時間程度で取りに行ける場合や持ってきてもらえる場合は、それが最も安全で無料の解決策です。" },
  { title: "JAF会員はJAFに救援を依頼（会員は無料）", desc: "JAF会員はキー閉じ込みの解錠を無料で受けられます（JAF公式の料金表）。会員として利用するには、救援現場で会員証またはデジタル会員証の提示が必要です（JAFロードサービス利用約款 第6条）。非会員も有料で利用できますが、会員の利用に支障のない範囲での対応となります（同 第7条）。" },
  { title: "自動車保険のロードサービスを確認", desc: "JAF非会員の方は、加入している自動車保険（任意保険）のロードサービスにキー閉じ込みの解錠が含まれているかを確認してください。対象は契約車両で、鍵の種類や利用回数に条件がある場合があります。保険証券や保険会社のアプリに記載された緊急連絡先に電話して確認してください。" },
  { title: "鍵の専門業者に依頼", desc: "JAF非会員で保険も使えない場合は、鍵業者に依頼してください。車種・年式・鍵のタイプ（スマートキーか否か）を伝えると、見積もりが円滑に進みます。到着まで15〜60分が目安です。" },
  { title: "解決後はインロックの原因を取り除く", desc: "スマートキーの電池残量低下は閉じ込みの典型的な原因です。電池を交換し、降車時は鍵を必ず手に持つ習慣（ポケットや車内に置いたまま降りない）をつけてください。" },
];

const faqs = [
  { q: "JAFに依頼するといくらかかりますか？", a: "JAF会員は無料です（キー閉じ込みの解錠は会員サービスに含まれます）。非会員は有料で、夜間（20時〜8時）・一般道でのドア開放作業は25,630円（税込）です（JAF公式の料金表・2026年10月19日確認）。個人会員の入会金は2,000円、年会費は4,000円です。" },
  { q: "昼間や高速道路でキー閉じ込みを依頼した場合、非会員の料金はいくらですか？", a: "JAF公式の料金表では、昼間・高速道路のキー閉じ込みの総額は個別に掲載されていません。非会員の基本料は、一般道（駐車場・自宅を含む）が8時〜20時で15,700円、20時〜8時で19,630円、高速道路の本線上などが8時〜20時で31,410円、20時〜8時で37,270円（いずれも税込）で、これに作業内容に応じた作業料が加わります。正確な金額は依頼時にJAFへご確認ください。" },
  { q: "その場でJAFに入会すれば、今回の料金は無料になりますか？", a: "なりません。JAF公式のよくある質問では、ロードサービスの現場で入会はできるものの、その回のロードサービス料金は会員扱いにならないと案内されています。現場で発行される仮会員証により、次回以降が会員料金の対象となります。" },
  { q: "家族や同乗者がJAF会員の場合は使えますか？", a: "JAFの個人会員・家族会員は、運転中だけでなく同乗中でも、また車の所有者名義に関係なく、会員としてロードサービスを利用できます（JAFロードサービス利用約款 第6条）。救援現場で、会員証またはデジタル会員証を提示する必要があります。" },
  { q: "自動車保険のロードサービスは使えますか？", a: "多くの自動車保険にロードサービスが付帯しています。例えばソニー損保のロードサービス利用規約（2024年3月1日改定版）では、キー閉じ込み時のカギ開けは一般的なシリンダーキーに限ってサービスの対象とされ、イモビライザー等のセキュリティ装置付き車両のカギ開け代はお客様の負担、利用してもノンフリート等級に影響はないと定められています。条件は保険会社・契約ごとに異なるため、保険会社の緊急連絡先でご確認ください。" },
  { q: "スマートキーなのになぜインロックが起きるのですか？", a: "スマートキーの電池残量低下で車が鍵の存在を検知できなくなるケースや、鍵を車内に置いたままドアハンドルのロック操作をしてしまうケースなどが典型です。電池は1〜2年を目安に交換し、降車時は鍵を身につける習慣が確実な予防策です。" },
  { q: "子どもやペットが車内に閉じ込められました。どうすればよいですか？", a: "夏場の車内は短時間で命に関わる温度になります。ためらわず119番（緊急時は窓を割る判断を含めて消防が対応）に通報してください。JAFも子どもの閉じ込みは優先対応としています。業者の到着を待つより命を優先してください。" },
  { q: "鍵業者に依頼するといくらかかりますか？", a: "金額は車種・鍵の種類・時間帯によって変わり、輸入車や特殊な防盗機構を備えた車は高くなる場合があります。金額は業者の見積もりで確認し、出張料・深夜割増の有無を含めた総額を作業前に必ずご確認ください。" },
  { q: "インロックでレッカー移動は必要ですか？", a: "通常は不要です。インロックの解錠はその場での作業で解決することがほとんどで、車を移動させる必要はありません。ただし、鍵の紛失でイモビライザーの再登録が必要になり現地で対応できない場合など、例外的にディーラーへの搬送が必要になるケースはあります。" },
  { q: "スマートキーの電池が切れてドアが開きません。閉じ込みですか？", a: "鍵が手元にある場合は、閉じ込みではなく電池切れと考えられます。スマートキー本体に内蔵されたメカニカルキーを取り出し、運転席ドアの鍵穴で開けられる車種が多くあります。取り出し方は取扱説明書やメーカーサイトで確認できます。開けた後はエンジンの始動方法（電池切れ時の非常始動手順）も説明書で確認してください。" },
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
  headline: "JAFのインキー（インロック・キー閉じ込み）料金と対処法",
  description: "JAFにキー閉じ込みの解錠を依頼した場合の会員・非会員の料金、時間帯・道路別の基本料、自動車保険のロードサービスとの違いと対処手順を解説します。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-07-04",
  dateModified: "2026-10-27",
};

export default function CarInlockPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />


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
            JAFのインロック（キー閉じ込み）料金と対処法
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年10月27日</p>

          {/* 緊急警告 */}
          <div className="bg-red-50 border border-red-300 rounded-2xl p-5 mb-6">
            <p className="font-bold text-red-700 mb-1">子ども・ペットが車内にいる場合</p>
            <p className="text-sm text-red-700 leading-relaxed">
              夏場の車内は短時間で命に関わる温度になります。業者の到着を待たず、<strong>ためらわず119番に通報してください</strong>。窓を割る判断を含めて消防が対応します。
            </p>
          </div>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-6">
            <p className="font-bold text-primary mb-2">JAFのキー閉じ込み料金（会員・非会員）</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              JAFにインロック（インキー・キー閉じ込み）の解錠を依頼した場合、<strong>会員は無料</strong>です。非会員は有料で、JAF公式の料金表では<strong>夜間（20時〜8時）・一般道でのドア開放作業が25,630円（税込）</strong>と掲載されています。現場で入会しても、その回の料金は会員扱いになりません。JAF非会員の方は、先に自動車保険のロードサービスに鍵開けが含まれているかを確認し、どちらも使えない場合に鍵業者へ依頼すると、費用を抑えられます。
            </p>
          </div>
          <div className="overflow-x-auto mb-3 rounded-xl border border-black/10">
            <table className="w-full text-sm min-w-[520px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-bold">項目</th>
                  <th className="px-4 py-3 text-left font-bold">JAF会員</th>
                  <th className="px-4 py-3 text-left font-bold">非会員（入会していない方）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["キー閉じ込み（夜間20時〜8時・一般道でのドア開放作業）", "無料", "25,630円"],
                  ["基本料：一般道（駐車場・自宅を含む）", "無料", "8時〜20時 15,700円／20時〜8時 19,630円"],
                  ["基本料：高速道路の本線上など（A料金）", "無料", "8時〜20時 31,410円／20時〜8時 37,270円"],
                  ["基本料：SA・PA内で作業が完了した場合（B料金）", "無料", "8時〜20時 19,630円／20時〜8時 23,540円"],
                  ["作業料", "工数0.5まで無料", "作業工数表による（工数0.1あたり1,200円）"],
                  ["現場で入会した場合", "—", "その回は会員扱いにならない（次回から会員料金）"],
                ].map((r, i) => (
                  <tr key={i} className={i % 2 ? "bg-surface-alt" : "bg-white"}>
                    <td className="px-4 py-3 font-medium text-text-primary">{r[0]}</td>
                    <td className="px-4 py-3 text-primary font-bold whitespace-nowrap">{r[1]}</td>
                    <td className="px-4 py-3 text-text-secondary">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted leading-relaxed mb-6">
            ※金額はすべて税込です。出典：<a href="https://jaf.or.jp/common/about-road-service/estimate-costs" className="underline" target="_blank" rel="noopener noreferrer">JAF「ロードサービスの料金を調べる」</a>（2024年4月1日改定の料金）、<a href="https://jaf.or.jp/individual/join-us/membership/individual" className="underline" target="_blank" rel="noopener noreferrer">JAF「個人会員について」</a>（入会金2,000円・年会費4,000円、現場で入会した場合の扱い）、<a href="https://jaf.or.jp/common/call-road-service/before-calling/road-service-terms" className="underline" target="_blank" rel="noopener noreferrer">JAFロードサービス利用約款</a>。いずれも2026年10月19日に確認しました。昼間・高速道路でのキー閉じ込みの総額は公式に個別の掲載がないため、依頼時にJAFへご確認ください。
          </p>
          <h3 className="font-bold text-text-primary mb-3">2024年4月の料金改定前との違い（非会員）</h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-3">
            JAFは2024年4月1日にロードサービス料金を改定し、入会していない方の基本料と作業料が上がりました。2024年3月以前に書かれた記事やブログの金額は改定前の料金のため、現在の料金とは異なります。会員の基本料は改定前も改定後も無料です。
          </p>
          <div className="overflow-x-auto mb-3 rounded-xl border border-black/10">
            <table className="w-full text-sm min-w-[520px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-bold">非会員の料金（一般道路）</th>
                  <th className="px-4 py-3 text-left font-bold">改定前</th>
                  <th className="px-4 py-3 text-left font-bold">2024年4月1日以降</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["基本料（8時〜20時）", "8,380円", "15,700円"],
                  ["基本料（20時〜8時）", "10,480円", "19,630円"],
                  ["作業料（作業工数表の工数0.1あたり）", "950円", "1,200円"],
                ].map((r, i) => (
                  <tr key={i} className={i % 2 ? "bg-surface-alt" : "bg-white"}>
                    <td className="px-4 py-3 font-medium text-text-primary">{r[0]}</td>
                    <td className="px-4 py-3 text-text-secondary whitespace-nowrap">{r[1]}</td>
                    <td className="px-4 py-3 text-text-primary font-bold whitespace-nowrap">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted leading-relaxed mb-10">
            ※税込。出典：<a href="https://jaf.or.jp/common/news/2024/20240227-001" className="underline" target="_blank" rel="noopener noreferrer">JAF ニュースリリース（2024年2月27日）</a>添付の「ロードサービス料金表（新旧比較）」（2026年10月27日確認）。新旧比較表には、キー閉じ込みの総額の行はありません。
          </p>

          <h2 className="text-xl font-bold text-text-primary mb-4">JAFと自動車保険のロードサービスの違い</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-3">
            JAFのロードサービスは会員本人にかかるサービスで、運転中だけでなく同乗中でも、また車の所有者名義に関係なく、マイカー・会社の車・レンタカーで利用できます（JAFロードサービス利用約款 第6条）。一方、自動車保険のロードサービスは契約車両が対象で、利用回数に制限がある場合があります（JAF「自動車保険のロードサービスとの違い」）。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-3">
            自動車保険でキー閉じ込みの鍵開けが受けられるかは、保険会社・契約ごとに異なります。例えばソニー損保のロードサービス利用規約（2024年3月1日改定版）では、キー閉じ込み時のカギ開けは一般的なシリンダーキーに限って対象とされ、イモビライザー等のセキュリティ装置付き車両のカギ開け代はお客様の負担、キーの作製は対象外、利用してもノンフリート等級に影響はないと定められています。
          </p>
          <p className="text-xs text-text-muted leading-relaxed mb-10">
            出典：<a href="https://jaf.or.jp/common/about-road-service/contents/comparison" className="underline" target="_blank" rel="noopener noreferrer">JAF「自動車保険のロードサービスとの違い」</a>、<a href="https://www.sonysonpo.co.jp/share/pdf/auto/rs_rules_20240301.pdf" className="underline" target="_blank" rel="noopener noreferrer">ソニー損保「ロードサービス利用規約」（2024年3月1日改定）</a>（いずれも2026年10月19日確認）。ご自身の契約内容は、保険証券や保険会社の緊急連絡先でご確認ください。
          </p>

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
          <h2 className="text-xl font-bold text-text-primary mb-4">連絡先の優先順位</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            インロック時の連絡先は複数ありますが、<strong>費用を抑えられる順</strong>に確認していくのが基本です。あわてて最初に目についた業者へ電話する前に、次の順番でご自身が利用できるサービスを整理してください。
          </p>
          <div className="space-y-3 mb-10">
            {[
              { label: "a", title: "JAF会員の場合はまずJAF", desc: "JAF会員はキー閉じ込みの解錠を無料で受けられます。JAFは会員本人にかかるサービスのため、運転者が会員でなくても、同乗している方が会員であれば利用できます。救援現場では会員証またはデジタル会員証の提示が必要です（提示できない場合は会員として扱われません）。" },
              { label: "b", title: "自動車保険のロードサービス", desc: "多くの自動車保険には、鍵開けを含むロードサービスが付帯しています。契約内容は保険証券・契約者ページ・保険会社の公式アプリで確認できます。証券が手元になくても、保険会社名が分かれば緊急連絡先の電話番号を調べて問い合わせることができます。鍵の種類（セキュリティ装置付きか）により対象外となる場合があるため、電話の際に車種と鍵の種類を伝えてください。JAF非会員の方が最初に確認すべき選択肢です。" },
              { label: "c", title: "ディーラー・メーカー窓口（スマートキーの場合）", desc: "スマートキーや特殊な防盗機構を備えた車は、購入したディーラーや自動車メーカーのカスタマー窓口に相談するのも有効です。鍵の紛失を伴う場合や、鍵の再作成・再登録が必要になりそうな場合は、最初からディーラーを通じて進めたほうが、結果的に円滑に解決することがあります。営業時間内であれば対応方法や費用の目安について案内を受けられます。" },
              { label: "d", title: "鍵の専門業者", desc: "上記がいずれも使えない場合や、深夜・遠方でディーラーに依頼できない場合の選択肢です。到着が早い一方で料金は業者・条件により幅があるため、後述の「業者に依頼する場合の選び方」を参考に、電話の時点で総額を確認してから依頼してください。" },
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
                  ["JAF（非会員）", "有料（例：夜間（20時〜8時）・一般道でのドア開放作業 25,630円・税込）", "会員の利用に支障のない範囲で対応。現場で入会しても、その回は会員扱いにならない"],
                  ["自動車保険のロードサービス", "契約内容による", "契約車両が対象。鍵の種類・利用回数に条件がある場合あり"],
                  ["鍵の専門業者", "業者の見積もりで確認", "車種・鍵の種類・時間帯で変わる。総額見積もりを事前確認"],
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
            ※JAF料金はJAF公式サイト掲載の料金（2026年10月19日確認）。鍵業者の料金は車種・時間帯により変わるため、業者の見積もりでご確認ください。
          </p>

          {/* スマートキー車の注意点 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">スマートキー車の注意点</h2>
          <div className="space-y-4 mb-10">
            <div className="bg-white rounded-xl border border-black/10 p-5">
              <h3 className="font-bold text-text-primary text-sm mb-1.5">電池切れならメカニカルキー（内蔵キー）で開けられる場合がある</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                スマートキーの多くには、本体内部に金属製のメカニカルキー（内蔵キー・エマージェンシーキー）が収納されています。スマートキーの電池が切れてドアが反応しない場合でも、鍵が手元にあるなら、内蔵キーを取り出して運転席ドアの鍵穴に差し込めば開けられる車種が多くあります。鍵穴がカバーで隠れている車種もあるため、取扱説明書やメーカーサイトで内蔵キーの取り出し方と鍵穴の位置を一度確認しておくと、緊急時に業者へ依頼せずに済みます。
              </p>
            </div>
            <div className="bg-white rounded-xl border border-black/10 p-5">
              <h3 className="font-bold text-text-primary text-sm mb-1.5">スマートキー紛失時はイモビライザーの再登録が必要</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                車内閉じ込みではなくスマートキー自体を紛失した場合は、単に鍵を開けるだけでは解決しません。現在の車の多くにはイモビライザー（電子的な盗難防止装置）が搭載されており、新しい鍵を使うには車両側への再登録作業が必要です。この作業はディーラーか、イモビライザー対応の設備を持つ一部の鍵業者しか行えないため、依頼前に「スマートキーの作成・再登録に対応しているか」を必ず電話で確認してください。対応できない業者が出張しても解決せず、出張料だけがかかる恐れがあります。
              </p>
            </div>
          </div>

          {/* 子ども・ペットの閉じ込み */}
          <h2 className="text-xl font-bold text-text-primary mb-4">子ども・ペットの閉じ込みは緊急対応（110番・119番に通報）</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-3">
            車内に子どもやペットを残したままインロックした場合は、通常のインロックとは扱いを分けてください。夏場の車内温度は短時間で急上昇し、命に関わる状況になり得ます。晴れた日はもちろん、曇りの日や春・秋でも車内は想像以上に高温になることがあり、「業者の到着を待てば大丈夫」という判断は危険です。
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            危険を感じたら<strong>110番・119番への通報もためらわない</strong>でください。緊急性が高い場合は、窓ガラスを割って救出する判断を含めて警察・消防が対応します。ガラスの交換費用よりも命を優先してください。通報と並行してJAFや保険のロードサービスにも連絡し、状況（子ども・ペットが車内にいること）を必ず伝えると優先的に扱われやすくなります。
          </p>

          {/* NG行動 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">避けるべき行動</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { title: "針金・定規でこじ開ける", desc: "最近の車は盗難防止機構や内部配線が複雑で、素人のこじ開けはドア内部の故障・傷につながり、結果として修理費のほうが高額になります。" },
              { title: "窓ガラスを割る（緊急時以外）", desc: "ガラス交換の費用がかかります。人命に関わる緊急時（子ども・ペットの閉じ込み）以外は割らず、JAF・保険・業者に依頼してください。" },
              { title: "「◯◯円〜」の格安広告で即決", desc: "現地で高額請求になる例があります。会社名・総額見積もり・キャンセル可否を電話で確認してから依頼してください。" },
              { title: "エンジンをかけたまま放置して施錠", desc: "半ドアやアイドリング中の施錠は、インロックの典型的な原因です。降車時は必ず鍵を手に持ってからドアを閉める習慣をつけてください。" },
            ].map((n, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">避けるべき行動：{n.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 業者の選び方 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">業者に依頼する場合の選び方</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            鍵業者に依頼する場合は、<strong>電話の段階でどれだけ正確に情報を伝え、総額を確定させられるか</strong>が、トラブルを避けるうえで重要です。次のポイントを押さえて連絡してください。
          </p>
          <ul className="space-y-3 mb-6">
            {[
              { title: "車種・年式・鍵の種類を伝える", desc: "メーカー・車種・年式に加え、鍵のタイプ（通常の金属キー／リモコンキー／スマートキー）とイモビライザーの有無（分かる範囲で）を伝えてください。鍵の種類によって作業の難易度と料金が大きく変わるため、これを伝えずに依頼すると、現地で見積もりが大幅に上がる原因になります。" },
              { title: "出張料・作業費・キャンセル料込みの「総額」で見積もりを取る", desc: "「作業費◯◯円〜」だけでは総額は分かりません。出張料・見積もり後にキャンセルした場合の費用まで含めて、電話口で総額の目安を確認してください。総額を答えられない・現地でないと一切分からないという業者は避けることをおすすめします。" },
              { title: "夜間・早朝の割増料金を確認する", desc: "深夜・早朝は割増料金を設定している業者が一般的です。時間帯による加算の有無と金額を事前に確認し、緊急でなければ、日中の依頼に切り替えることで費用を抑えられます。" },
              { title: "会社名・所在地が明記された業者を選ぶ", desc: "運営会社名・所在地・固定電話番号がサイトに明記されているかを確認してください。複数の業者に電話して比較する余裕があれば、相場から外れた請求を避けやすくなります。" },
            ].map((c, i) => (
              <li key={i} className="flex gap-3 bg-white rounded-xl border border-black/10 p-4">
                <span className="shrink-0 text-primary font-bold text-sm mt-0.5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="5 12 10 17 19 7" /></svg></span>
                <div>
                  <p className="font-bold text-text-primary text-sm mb-1">{c.title}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{c.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            各社が公式サイトに表示している料金は<a href="/ryokin-index/" className="text-primary underline hover:no-underline">料金インデックス</a>で、業者ごとの特徴の比較は<a href="/agents/" className="text-primary underline hover:no-underline">業者比較のページ</a>で詳しく解説しています。
          </p>

          {/* 業者選び・内部リンク */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">車の鍵開けに対応できる業者を比較する</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              JAF非会員の方や保険が使えない場合は、車の鍵開け対応を明記した24時間対応の鍵業者に依頼してください。車種と鍵のタイプを伝え、総額の見積もりで比較することをおすすめします。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵業者を比較する →</a>
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

          {/* 関連する解説 */}
          <h2 className="text-xl font-bold text-text-primary mt-10 mb-4">関連する解説</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/shinya-kagiake/", label: "深夜・早朝に鍵屋を呼ぶときの注意点" },
            ].map((l, i) => (
              <a key={i} href={l.href} className="bg-white rounded-xl border border-black/10 p-4 text-sm font-medium text-text-primary hover:border-primary/40 hover:text-primary transition-colors">
                {l.label} →
              </a>
            ))}
          </div>
        </article>
      </main>

    </div>
  );
}
