import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "鍵をなくした時どうする？【2026年版】紛失時の手順・警察への届出・交換費用 | 鍵トラブルナビ",
  description:
    "鍵を紛失した時にやるべきことを順番に解説。行動履歴の確認→警察へ遺失届→賃貸は管理会社へ連絡→開かない場合は鍵屋へ。鍵開けは8,000円〜、防犯上シリンダー交換（10,000〜40,000円）を検討すべきケースも。スマートキー・車の鍵の対応も紹介します。",
  alternates: { canonical: "https://kagi-trouble-navi.com/kagi-funshitsu/" },
};

const steps = [
  { title: "直前の行動をたどって探す", desc: "ポケット・カバンの底・レシートの出た店・利用した交通機関など、最後に鍵を使った時点からの行動履歴をたどります。店舗や駅には遺失物窓口があるため電話確認が有効です。" },
  { title: "警察に遺失届を出す", desc: "見つからない場合は最寄りの交番・警察署で遺失届を提出します（オンライン申請に対応する都道府県もあります）。届け出ておくと、鍵が拾得物として届いた際に連絡が来ます。悪用時の証明にもなるため必ず出しておきましょう。" },
  { title: "賃貸なら管理会社・大家に連絡する", desc: "賃貸住宅の鍵紛失は管理会社・大家への報告が原則です。無断で鍵交換をすると契約違反や費用トラブルになることがあります。スペアキー貸し出しや指定業者の案内を受けられる場合もあります。" },
  { title: "家に入れない場合は鍵屋に解錠を依頼する", desc: "スペアキーもなく家に入れない場合は鍵の専門業者へ。一般的な鍵の解錠は8,000〜15,000円、ディンプルキーは15,000〜30,000円が目安です。作業前に総額見積もりと本人確認があります。" },
  { title: "防犯リスクに応じてシリンダー交換を検討する", desc: "住所がわかるもの（免許証・郵便物など）と一緒に紛失した場合は、拾った第三者が侵入できるリスクがあるため、シリンダー交換（10,000〜40,000円）を強くおすすめします。鍵単体の紛失でも、不安が残るなら交換が安心です。" },
];

const faqs = [
  { q: "鍵をなくしたら、まず何をすべきですか？", a: "①行動履歴をたどって探す（立ち寄った店・交通機関へ確認）②見つからなければ警察へ遺失届③賃貸は管理会社・大家へ連絡、の順です。家に入れない場合は鍵業者へ解錠を依頼します。遺失届は拾得時の連絡と悪用時の証明のため必ず出しておきましょう。" },
  { q: "鍵の紛失で交換までした方がいいのはどんな場合ですか？", a: "住所が特定できるもの（免許証・保険証・郵便物など）と一緒になくした場合は、第三者による侵入リスクがあるためシリンダー交換を強くおすすめします。鍵単体でも、自宅周辺で紛失した可能性が高い場合など不安が残るなら交換が安心です。費用は10,000〜40,000円が目安です。" },
  { q: "賃貸の鍵をなくした場合、交換費用は誰が負担しますか？", a: "入居者の過失による紛失は、原則として入居者負担になるのが一般的です。ただし契約内容により異なるため、必ず管理会社・大家に連絡して指示を受けてください。無断交換は契約違反になる場合があります。" },
  { q: "車の鍵・スマートキーをなくした場合は？", a: "車はディーラーまたは鍵業者でスペアキー作成・イモビライザー登録が必要になり、家の鍵より高額（スマートキーは数万円〜）になる傾向があります。ロードサービス（JAF・自動車保険付帯）で対応できる場合もあるため、加入中のサービスを先に確認しましょう。" },
  { q: "火災保険や共済で鍵開け費用は補償されますか？", a: "火災保険や入居者サポートに「鍵開け無料サービス」や「鍵トラブル特約」が付帯している場合があります。依頼前に契約内容を確認すると自己負担を抑えられることがあります。" },
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
    { "@type": "ListItem", position: 2, name: "鍵をなくした時の対処法" },
  ],
};
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "鍵をなくした時どうする？紛失時の対処手順【2026年版】",
  description: "鍵の紛失時にやるべきことを手順で解説。警察への遺失届、賃貸の連絡、解錠・交換の費用目安まで。",
  author: { "@type": "Organization", name: "鍵トラブルナビ編集部" },
  publisher: { "@type": "Organization", name: "鍵トラブルナビ" },
  datePublished: "2026-07-02",
  dateModified: "2026-07-02",
};

export default function KagiFunshitsuPage() {
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
            <span className="text-text-secondary">鍵をなくした時の対処法</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-snug">
            鍵をなくした時どうする？紛失時の対処手順【2026年版】
          </h1>
          <p className="text-sm text-text-muted mb-6">最終更新日：2026年7月2日</p>

          {/* AEO 即答 */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 sm:p-6 mb-10">
            <p className="font-bold text-primary mb-2">結論：鍵をなくしたらこの順で動く</p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              鍵を紛失したら、<strong>①行動履歴をたどって探す → ②警察へ遺失届 → ③賃貸は管理会社へ連絡 → ④入れなければ鍵屋に解錠依頼</strong>の順で対応します。解錠の相場は<strong>8,000〜15,000円</strong>（ディンプルキーは15,000〜30,000円）。住所がわかるものと一緒になくした場合は、防犯のため<strong>シリンダー交換（10,000〜40,000円）</strong>まで行うのが安全です。
            </p>
          </div>

          {/* 手順 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵紛失時の対処手順（5ステップ）</h2>
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

          {/* 警察への遺失届 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">警察への遺失届の出し方</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            探しても鍵が見つからないと判断したら、できるだけ早く警察へ<strong>遺失届（遺失物届）</strong>を提出します。遺失届は「鍵をなくした」という事実を公的な記録として残す手続きで、拾得物として鍵が警察に届けられた際に連絡を受け取れるほか、万が一鍵が悪用された場合に「事前に紛失を届け出ていた」という証明にもなります。手続きに費用はかからず、窓口では数分〜十数分程度で完了するのが一般的です。
          </p>
          <h3 className="text-base font-bold text-text-primary mb-2">提出先と持ち物</h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            遺失届は、最寄りの<strong>交番・駐在所・警察署</strong>のいずれでも提出できます。なくした場所の管轄でなくても受け付けてもらえるため、自宅や勤務先の近くなど行きやすい窓口で構いません。持ち物としては本人確認書類（運転免許証・マイナンバーカードなど）があるとスムーズです。窓口では「いつ・どこでなくしたか（わかる範囲で）」「鍵の特徴（メーカーの刻印・本数・キーホルダーの色や形など）」「連絡先」を聞かれます。鍵の写真がスマホに残っていれば、見せると特徴が正確に伝わり、照合の精度も上がります。
          </p>
          <h3 className="text-base font-bold text-text-primary mb-2">受理番号を必ず控える</h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            遺失届が受理されると<strong>受理番号</strong>が発行されます。この番号は、後日警察へ問い合わせる際の照会や、鍵の悪用被害が発生した場合の証明、火災保険・入居者サポートなどの補償手続きの確認で必要になることがあります。口頭で聞くだけで終わらせず、必ずメモやスマホに控えておきましょう。
          </p>
          <h3 className="text-base font-bold text-text-primary mb-2">オンライン申請に対応する都道府県もある</h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            都道府県警察によっては、遺失届の<strong>電子申請（オンライン届出）</strong>に対応している場合があります。窓口へ行く時間が取れないときは「お住まいの都道府県名＋遺失届 電子申請」で検索し、対応状況を確認してみてください。地域や届出内容によっては窓口での手続きを案内されることもあるため、あくまで補助的な手段として考えておくとよいでしょう。
          </p>
          <h3 className="text-base font-bold text-text-primary mb-2">鍵が見つかった場合の連絡の流れ</h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            拾得物として鍵が警察に届けられ、遺失届の内容と特徴が一致すると、届出時に登録した電話番号などへ警察から連絡が来ます。連絡を受けたら、指定された警察署や遺失物センターへ本人確認書類を持参して受け取りに行きます。拾得物には<strong>原則3か月の保管期間</strong>があり、期間を過ぎると受け取れなくなるため、連絡が来たら早めに引き取りましょう。逆に言えば、遺失届を出していないと、鍵が警察に届いていても持ち主として照合されず、連絡は来ません。「そのうち出てくるだろう」と届出を後回しにしないことが大切です。
          </p>

          {/* 悪用リスクと防犯対策 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵紛失の悪用リスクと防犯対策</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            鍵の紛失で本当に警戒すべきなのは「家に入れないこと」よりも、<strong>拾った第三者に「住所」と「鍵」がセットで渡ってしまうこと</strong>です。ここでは、どんな状況が危険なのか、交換までの間に何ができるのかを整理します。
          </p>
          <h3 className="text-base font-bold text-text-primary mb-2">住所がわかるものと一緒に落とした場合は最も危険</h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            運転免許証・健康保険証・郵便物・宅配伝票・社員証・定期券など、<strong>住所や生活圏が特定できるもの</strong>と一緒に鍵をなくした場合、拾った人がその気になれば玄関まで到達できてしまいます。この状況では「見つかるかもしれない」と様子を見るのではなく、<strong>シリンダー交換を強くおすすめします</strong>。財布ごと・カバンごと紛失した場合も同様で、まずは中に入っていたものを書き出し、住所につながる情報が含まれていなかったかを冷静に整理しましょう。
          </p>
          <h3 className="text-base font-bold text-text-primary mb-2">「ピッキングに強い鍵」でも合鍵作製のリスクは残る</h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            ディンプルキーなどピッキング耐性の高い鍵を使っていても、<strong>鍵そのものが第三者の手に渡った状態</strong>では防犯性能は意味を持ちません。実物の鍵があれば合鍵を作製される可能性があり、後日鍵が手元に戻ってきたとしても、その間に複製されていないことは誰にも証明できません。時間が経ってから見つかった鍵をそのまま使い続けるのはリスクが残る、というのが防犯上の一般的な考え方です。
          </p>
          <h3 className="text-base font-bold text-text-primary mb-2">交換までの間にできる当面の防犯対策</h3>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-text-secondary leading-relaxed mb-4">
            <li>工事不要タイプの簡易補助錠を一時的に取り付け、鍵を1つ増やす</li>
            <li>在宅時もドアガード（チェーン・U字ロック）と施錠を徹底する</li>
            <li>郵便受けに住所・氏名のわかる郵便物をためない</li>
            <li>玄関まわりにテープやマーキングなど不審な痕跡がないか確認する</li>
            <li>集合住宅の場合は管理会社・大家にも状況を共有しておく</li>
          </ul>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            これらはあくまで応急的な対策です。住所が特定されうる状況で紛失した場合は、シリンダー交換が根本的な解決策になります。
          </p>

          {/* 交換判断 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">交換すべき？判断の目安</h2>
          <div className="overflow-x-auto mb-10 rounded-xl border border-black/10">
            <table className="w-full text-sm min-w-[520px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-bold">状況</th>
                  <th className="px-4 py-3 text-left font-bold">推奨対応</th>
                  <th className="px-4 py-3 text-left font-bold">費用目安</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["身分証・住所がわかるものと一緒に紛失", "シリンダー交換を強く推奨", "10,000〜40,000円"],
                  ["自宅周辺で落とした可能性が高い", "交換を推奨", "10,000〜40,000円"],
                  ["外出先で紛失・住所特定の心配なし", "様子見も可（不安なら交換）", "0円〜"],
                  ["スペアなし・家に入れない", "解錠＋必要に応じ交換", "8,000円〜"],
                ].map((r, i) => (
                  <tr key={i} className={i % 2 ? "bg-surface-alt" : "bg-white"}>
                    <td className="px-4 py-3 font-medium text-text-primary">{r[0]}</td>
                    <td className="px-4 py-3 text-text-secondary">{r[1]}</td>
                    <td className="px-4 py-3 text-primary font-bold whitespace-nowrap">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 交換判断の詳細基準 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵交換すべきかの判断基準（3つの観点）</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            上の表を踏まえて、交換するかどうか迷ったときは次の3つの観点で考えると整理しやすくなります。
          </p>
          <div className="space-y-3 mb-4">
            <div className="bg-white rounded-xl border border-black/10 p-4">
              <p className="font-bold text-text-primary text-sm mb-1">（1）住所が特定できるものと同時に紛失した → 交換を推奨</p>
              <p className="text-sm text-text-secondary leading-relaxed">
                免許証や郵便物など住所につながるものと一緒になくした場合は、第三者が自宅に到達できる状態です。鍵が戻ってくるかどうかにかかわらず、交換を前提に動くのが安全です。マンション名や部屋番号入りのキーホルダーを付けていた場合も同じ扱いで考えましょう。
              </p>
            </div>
            <div className="bg-white rounded-xl border border-black/10 p-4">
              <p className="font-bold text-text-primary text-sm mb-1">（2）外出先で鍵単体を紛失 → リスクを評価して判断</p>
              <p className="text-sm text-text-secondary leading-relaxed">
                旅行先や通勤経路など自宅から離れた場所で、個人情報のない鍵単体を落とした場合、拾った人が自宅を特定するのは現実的には困難です。必ずしも交換必須ではありませんが、「自宅周辺で落とした可能性が捨てきれない」「行動範囲が推測されやすい」など特定につながる要素が少しでもあるなら交換を検討しましょう。不安を抱えたまま生活するストレスも、判断材料のひとつです。
              </p>
            </div>
            <div className="bg-white rounded-xl border border-black/10 p-4">
              <p className="font-bold text-text-primary text-sm mb-1">（3）賃貸住宅 → まず管理会社・大家に報告</p>
              <p className="text-sm text-text-secondary leading-relaxed">
                賃貸では鍵が貸主の所有物であることが一般的で、紛失時の報告義務や交換の手順が賃貸借契約書に定められている場合が多くあります。自己判断で交換すると契約違反や退去時のトラブルにつながるおそれがあるため、交換の要否や業者の指定を含めて、必ず先に管理会社・大家へ連絡して指示を受けてください。オートロック付き物件では共用部のセキュリティにも関わるため、報告はいっそう重要です。
              </p>
            </div>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            交換のタイミングや鍵の種類ごとの考え方は、<a href="/kagi-koukan-timing/" className="text-primary underline hover:no-underline">鍵交換の時期・タイミングの解説ページ</a>で詳しく紹介しています。
          </p>

          {/* スペアキー有無別の動き方 */}
          <h2 className="text-xl font-bold text-text-primary mb-4">スペアキーがある場合・ない場合の動き方</h2>
          <h3 className="text-base font-bold text-text-primary mb-2">スペアキーがある場合：入れても「解決」ではない</h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            家族が持っているスペアや自宅に保管していたスペアで家に入れる場合、締め出しそのものは回避できます。ただし<strong>「家に入れた＝解決」ではありません</strong>。なくした鍵が第三者の手に渡っている可能性は残っているため、前述の判断基準に沿って悪用リスクを評価し、必要であればシリンダー交換を検討してください。また、スペアが残り1本になった状態は、次に紛失したら締め出しが確定する状態でもあります。落ち着いたら合鍵の作製やメーカー純正キーの取り寄せも検討しておくと安心です。
          </p>
          <h3 className="text-base font-bold text-text-primary mb-2">スペアキーがない場合：鍵開け業者への依頼を検討</h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-3">
            スペアがなく家に入れない場合は、鍵の専門業者に解錠を依頼するのが現実的な選択肢です。依頼時は次のポイントを押さえるとトラブルを避けやすくなります。
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-text-secondary leading-relaxed mb-4">
            <li>電話の時点で「鍵の種類・メーカー」「ドアや錠の状況」を伝え、概算を確認する</li>
            <li>作業前に総額の見積もりを提示してもらい、内訳（作業費・出張費・時間帯割増など）を確認する</li>
            <li>作業員による本人確認（身分証と住所の照合）は正規の手順なので協力する</li>
            <li>見積もりに納得できなければ断ってよい。キャンセル料の条件は電話時に確認しておく</li>
          </ul>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            賃貸の場合は、業者を手配する前に管理会社・大家への連絡を優先しましょう。夜間・早朝は割増料金が設定されていることが多いため、緊急でなければ日中に依頼するほうが費用を抑えやすくなります。解錠にかかる費用の考え方は<a href="/ryokin/" className="text-primary underline hover:no-underline">料金相場ページ</a>を、業者ごとの特徴や対応範囲は<a href="/agents/" className="text-primary underline hover:no-underline">業者比較ページ</a>を参考にしてください。
          </p>

          {/* 業者選び・内部リンク */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-2">解錠・交換に対応できる鍵業者を比較する</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              紛失時は「解錠＋交換」をまとめて頼めると二度手間になりません。24時間対応・見積もり無料の業者を中心に比較しましょう。
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/agents/" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">鍵トラブル業者を比較する →</a>
              <a href="/ryokin/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">料金相場を詳しく見る</a>
              <a href="/shimedashi/" className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">締め出された時の対処法</a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-text-primary mb-4">鍵の紛失に関するよくある質問</h2>
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
