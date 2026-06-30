import companies from "@/data/companies.json";

export default function Home() {
  const top3 = companies.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔑</span>
            <h1 className="text-xl font-bold tracking-tight">鍵トラブルナビ</h1>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#trouble" className="hover:text-secondary transition-colors">トラブル別</a>
            <a href="#service" className="hover:text-secondary transition-colors">サービス別</a>
            <a href="#price" className="hover:text-secondary transition-colors">料金相場</a>
            <a href="#compare" className="hover:text-secondary transition-colors">業者比較</a>
            <a href="#area" className="hover:text-secondary transition-colors">地域別</a>
          </nav>
          <a
            href="tel:0120-000-000"
            className="md:hidden bg-accent text-white px-4 py-2 rounded-full text-sm font-bold btn-emergency"
          >
            📞 今すぐ電話
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        <img
          src="/images/kv-top.jpg"
          alt="鍵交換の作業シーン"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/70 to-[#0a1628]/40" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                🔑 24時間365日対応
              </span>
              <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                ⚡ 最短15分到着
              </span>
              <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                🛡️ 厳選5社比較
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              鍵のトラブル、<br className="md:hidden" />今すぐ解決。
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              深夜でも早朝でも、鍵のプロが駆けつけます。<br />
              全国対応・料金明示の優良業者だけを厳選比較。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#trouble"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl btn-emergency transition-colors"
              >
                🔓 今すぐ業者を探す
              </a>
              <a
                href="tel:0120-000-000"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-gray-100 transition-colors"
              >
                📞 無料相談する
              </a>
            </div>
            <p className="mt-4 text-white/60 text-sm">※ 相談・見積もり無料。料金に納得いただけなければキャンセルOK</p>
          </div>
        </div>
      </section>

      {/* Trouble-based Navigation */}
      <section id="trouble" className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-bold mb-3">
              ★ トラブル別で探す
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              今のお困りごとは？
            </h3>
            <p className="text-text-muted mt-2">該当するトラブルをお選びください。最適な業者をご案内します。</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "🚪", title: "鍵の閉じ込め", desc: "家・部屋に入れない", urgency: true },
              { icon: "💔", title: "鍵が折れた", desc: "鍵穴の中で折れた", urgency: true },
              { icon: "🔧", title: "鍵穴が回らない", desc: "鍵が回りにくい・動かない", urgency: false },
              { icon: "😰", title: "鍵をなくした", desc: "鍵を紛失・防犯が心配", urgency: true },
              { icon: "🚗", title: "車のインロック", desc: "車内に鍵を閉じ込めた", urgency: true },
              { icon: "🔐", title: "金庫が開かない", desc: "暗証番号忘れ・故障", urgency: false },
            ].map((item) => (
              <a
                key={item.title}
                href="#compare"
                className={`group relative flex items-center gap-4 p-5 rounded-xl border-2 transition-all hover:shadow-lg hover:-translate-y-0.5 ${
                  item.urgency
                    ? "border-accent/30 bg-white hover:border-accent"
                    : "border-border bg-white hover:border-primary"
                }`}
              >
                <span className="text-4xl flex-shrink-0">{item.icon}</span>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-foreground group-hover:text-primary">
                    {item.title}
                  </h4>
                  <p className="text-sm text-text-muted">{item.desc}</p>
                </div>
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap ${
                  item.urgency
                    ? "bg-accent text-white"
                    : "bg-secondary text-white"
                }`}>
                  今すぐ相談
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Category Cards */}
      <section id="service" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              サービス別で探す
            </h3>
            <p className="text-text-muted mt-2">必要なサービスから業者を比較できます</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "🔓", name: "鍵開け", price: "8,000円〜" },
              { icon: "🔄", name: "鍵交換", price: "10,000円〜" },
              { icon: "🔧", name: "鍵修理", price: "5,000円〜" },
              { icon: "🔐", name: "金庫", price: "15,000円〜" },
              { icon: "🚗", name: "車の鍵", price: "12,000円〜" },
              { icon: "🏍️", name: "バイクの鍵", price: "8,000円〜" },
            ].map((service) => (
              <div
                key={service.name}
                className="flex flex-col items-center p-5 rounded-xl border border-border bg-background hover:border-primary hover:shadow-md transition-all cursor-pointer group"
              >
                <span className="text-3xl mb-2">{service.icon}</span>
                <h4 className="font-bold text-foreground group-hover:text-primary">{service.name}</h4>
                <p className="text-xs text-text-muted mt-1">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top 3 Recommended Companies */}
      <section id="compare" className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold mb-3">
              厳選比較
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              おすすめ鍵業者 TOP3
            </h3>
            <p className="text-text-muted mt-2">実績・料金・対応力を総合評価して厳選</p>
          </div>
          <div className="space-y-6">
            {top3.map((company, index) => (
              <div
                key={company.id}
                className={`relative bg-white rounded-2xl border-2 p-6 md:p-8 shadow-sm ${
                  index === 0 ? "border-secondary" : "border-border"
                }`}
              >
                {index === 0 && (
                  <span className="absolute -top-3 left-6 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold">
                    👑 おすすめNo.1
                  </span>
                )}
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-bold text-primary">
                        {index + 1}位
                      </span>
                      <h4 className="text-xl font-bold text-foreground">
                        {company.name}
                      </h4>
                    </div>
                    <p className="text-text-muted mb-4">{company.tagline}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {company.features.slice(0, 4).map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center bg-primary/5 text-primary text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-bold text-success mb-1">メリット</h5>
                        <ul className="text-sm text-text-muted space-y-1">
                          {company.pros.slice(0, 2).map((pro) => (
                            <li key={pro} className="flex items-start gap-1">
                              <span className="text-success flex-shrink-0">○</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-accent mb-1">注意点</h5>
                        <ul className="text-sm text-text-muted space-y-1">
                          {company.cons.slice(0, 2).map((con) => (
                            <li key={con} className="flex items-start gap-1">
                              <span className="text-accent flex-shrink-0">△</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-3 md:min-w-[180px]">
                    <div className="text-center">
                      <p className="text-sm text-text-muted">料金目安</p>
                      <p className="text-2xl font-bold text-primary">{company.priceRange}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-text-muted">到着時間</p>
                      <p className="text-lg font-bold text-foreground">{company.speed}</p>
                    </div>
                    <a
                      href={company.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="w-full bg-accent hover:bg-accent-dark text-white text-center py-3 px-6 rounded-full font-bold text-sm transition-colors btn-emergency"
                    >
                      無料で相談する
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Guide Table */}
      <section id="price" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              サービス別の料金相場
            </h3>
            <p className="text-text-muted mt-2">2026年最新の料金相場をまとめました</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-6 py-4 text-left font-bold">サービス</th>
                  <th className="px-6 py-4 text-left font-bold">料金相場</th>
                  <th className="px-6 py-4 text-left font-bold">作業時間</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { service: "鍵開け（一般的な鍵）", price: "8,000〜15,000円", time: "5〜30分" },
                  { service: "鍵開け（ディンプルキー）", price: "15,000〜30,000円", time: "15〜60分" },
                  { service: "鍵交換（シリンダー交換）", price: "10,000〜25,000円", time: "15〜40分" },
                  { service: "鍵交換（ディンプルキー）", price: "20,000〜40,000円", time: "15〜40分" },
                  { service: "鍵修理", price: "5,000〜15,000円", time: "10〜30分" },
                  { service: "金庫の鍵開け", price: "15,000〜50,000円", time: "30〜120分" },
                  { service: "車のインロック解錠", price: "12,000〜30,000円", time: "10〜40分" },
                  { service: "バイクの鍵開け", price: "8,000〜20,000円", time: "10〜30分" },
                ].map((row, i) => (
                  <tr key={row.service} className={i % 2 === 0 ? "bg-background" : "bg-white"}>
                    <td className="px-6 py-4 font-medium text-foreground">{row.service}</td>
                    <td className="px-6 py-4 text-primary font-bold">{row.price}</td>
                    <td className="px-6 py-4 text-text-muted">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mt-4 text-center">
            ※ 上記は目安です。鍵の種類・時間帯・地域によって変動します。必ず事前見積もりを取りましょう。
          </p>
          <div className="text-center mt-6">
            <a href="/ryokin/" className="inline-flex items-center gap-1.5 bg-primary text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-primary/90 transition-colors">
              鍵開け・鍵交換の料金相場を詳しく見る →
            </a>
          </div>
        </div>
      </section>

      {/* Fraud Warning Section */}
      <section className="py-16 bg-accent/5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white border-2 border-accent rounded-2xl p-8 md:p-10">
            <div className="text-center mb-8">
              <span className="inline-block text-4xl mb-3">⚠️</span>
              <h3 className="text-2xl md:text-3xl font-bold text-accent">
                ぼったくり業者にご注意ください
              </h3>
              <p className="text-text-muted mt-2">
                鍵業界では悪質な料金請求のトラブルが多発しています
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "「980円〜」の激安広告に注意",
                  desc: "広告では格安を謳い、現場で「特殊な鍵だった」「部品代が別」などと理由をつけて数万円〜10万円以上を請求するケースが報告されています。",
                },
                {
                  title: "電話で概算を聞いてから依頼する",
                  desc: "優良業者は電話で症状を聞き、概算費用を伝えてくれます。「現場を見ないとわからない」としか言わない業者は要注意。",
                },
                {
                  title: "作業前に必ず見積書をもらう",
                  desc: "現場到着後、作業前に書面で見積もりを出してもらいましょう。口頭だけの説明で作業を始める業者は断りましょう。",
                },
                {
                  title: "断る勇気を持つ",
                  desc: "見積もりが高すぎると感じたら、その場で断ってOK。出張費のみ（またはキャンセル無料）の業者を選べば安心です。",
                },
                {
                  title: "消費者ホットラインに相談を",
                  desc: "被害に遭った場合は消費者ホットライン（188）に相談を。クーリングオフが適用される場合もあります。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-foreground">{item.title}</h4>
                    <p className="text-sm text-text-muted mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              失敗しない鍵業者の選び方 5つのポイント
            </h3>
          </div>
          <div className="space-y-6">
            {[
              {
                num: "01",
                title: "料金の明示性",
                desc: "ホームページや電話で料金目安を明確に提示してくれる業者を選びましょう。「現場を見ないとわからない」だけの業者は避けるのが無難です。",
              },
              {
                num: "02",
                title: "到着スピード",
                desc: "緊急時は到着時間が重要です。「最短15分」「最短30分」など具体的な時間を示す業者、また拠点数が多い業者ほど早く対応できます。",
              },
              {
                num: "03",
                title: "対応実績・口コミ",
                desc: "年間対応件数や利用者の口コミを確認しましょう。実績が多いほど技術力・対応力が高い傾向にあります。",
              },
              {
                num: "04",
                title: "キャンセルポリシー",
                desc: "見積もり後にキャンセルできるか、キャンセル料はかかるか事前に確認を。良心的な業者は「見積もり後のキャンセル無料」を明示しています。",
              },
              {
                num: "05",
                title: "保険・保証の有無",
                desc: "作業中に鍵や扉を傷つけた場合の賠償責任保険に加入しているか確認。また、交換した鍵の保証期間があるかも重要なポイントです。",
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-5 items-start">
                <span className="flex-shrink-0 text-3xl font-bold text-primary/30">
                  {item.num}
                </span>
                <div>
                  <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                  <p className="text-text-muted mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              よくある質問
            </h3>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "深夜・早朝でも対応してもらえますか？",
                a: "はい、当サイトで紹介している業者は24時間365日対応です。深夜・早朝でも追加料金なしの業者もあります。ただし、業者によっては夜間料金が発生する場合があるので、電話時に確認しましょう。",
              },
              {
                q: "鍵開けにはどのくらい時間がかかりますか？",
                a: "一般的なシリンダー錠であれば5〜15分程度、ディンプルキーなど高セキュリティ錠の場合は15〜60分程度かかります。到着後、作業前に所要時間の目安を教えてもらえます。",
              },
              {
                q: "賃貸マンションの鍵を開けてもらう場合、身分証は必要ですか？",
                a: "はい、防犯上の理由から本人確認書類（免許証・保険証など）の提示が必要です。また、賃貸の場合は管理会社への連絡が求められることもあります。",
              },
              {
                q: "見積もり後にキャンセルできますか？",
                a: "優良業者であれば見積もり後のキャンセルは無料で可能です。当サイトで紹介している業者はすべて見積もり無料・キャンセル可能な業者です。ただし一部業者では出張費がかかる場合があるので事前に確認しましょう。",
              },
              {
                q: "ぼったくりに遭ってしまった場合はどうすればいいですか？",
                a: "まずは消費者ホットライン（188番）に相談しましょう。訪問販売に該当する場合はクーリングオフ（8日以内）が適用される可能性があります。領収書・見積書は必ず保管してください。",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-border overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-foreground hover:bg-background transition-colors">
                  <span className="flex items-center gap-3">
                    <span className="text-primary font-bold">Q.</span>
                    {item.q}
                  </span>
                  <span className="text-text-muted group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-5 text-text-muted">
                  <span className="text-accent font-bold">A.</span> {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary-dark to-[#0D2B4A] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            鍵のトラブル、一人で悩まないでください
          </h3>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            24時間365日、プロのスタッフが対応します。<br />
            まずは無料相談・お見積もりからお気軽にどうぞ。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0120-000-000"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl btn-emergency transition-colors"
            >
              📞 0120-000-000（無料）
            </a>
            <a
              href="#compare"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border-2 border-white/50 text-white px-8 py-4 rounded-full text-lg font-bold transition-colors"
            >
              業者を比較する
            </a>
          </div>
          <p className="mt-4 text-white/50 text-sm">通話料無料・見積もり無料・キャンセル無料</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D1B2A] text-white/70 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🔑</span>
                <span className="text-lg font-bold text-white">鍵トラブルナビ</span>
              </div>
              <p className="text-sm">
                鍵のトラブルでお困りの方に、信頼できる鍵業者を比較・紹介するサービスです。
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">トラブル別</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">鍵の閉じ込め</a></li>
                <li><a href="#" className="hover:text-white transition-colors">鍵が折れた</a></li>
                <li><a href="#" className="hover:text-white transition-colors">鍵をなくした</a></li>
                <li><a href="#" className="hover:text-white transition-colors">車のインロック</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">サービス別</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">鍵開け</a></li>
                <li><a href="#" className="hover:text-white transition-colors">鍵交換</a></li>
                <li><a href="#" className="hover:text-white transition-colors">鍵修理</a></li>
                <li><a href="#" className="hover:text-white transition-colors">金庫</a></li>
              </ul>
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
            <p>
              当サイトはアフィリエイトプログラムに参加しており、紹介先サービスへの申し込みにより報酬を受け取る場合があります。
            </p>
            <p className="mt-2">&copy; 2026 株式会社MediaX All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
