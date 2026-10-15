import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import companies from "@/data/companies.json";
import { agents } from "./agents/agentsData";
import { allAreaSlugs } from "@/data/areaRegions";
import { companyIdToSlug } from "@/data/agentShots";
import AreaFinder from "@/components/AreaFinder";
import AgentShot from "@/components/AgentShot";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const TROUBLES = [
  { icon: "shimedashi", title: "鍵の閉じ込め", desc: "家・部屋に入れない", href: "/shimedashi/" },
  { icon: "kagi-ore", title: "鍵が折れた", desc: "鍵穴の中で折れた", href: "/kagi-ore/" },
  { icon: "kagi-mawaranai", title: "鍵穴が回らない", desc: "鍵が回りにくい・動かない", href: "/kagi-mawaranai/" },
  { icon: "kagi-funshitsu", title: "鍵をなくした", desc: "鍵を紛失・防犯が心配", href: "/kagi-funshitsu/" },
  { icon: "car-inlock", title: "車のインロック", desc: "車内に鍵を閉じ込めた", href: "/car-inlock/" },
  { icon: "kinko", title: "金庫が開かない", desc: "暗証番号忘れ・故障", href: "/kinko-kaijo/" },
];

const SERVICES = [
  { icon: "kagiake", name: "鍵開け", price: "8,000円〜", href: "/shimedashi/" },
  { icon: "kagi-koukan", name: "鍵交換", price: "10,000円〜", href: "/kagi-koukan-timing/" },
  { icon: "kagi-shuri", name: "鍵修理", price: "5,000円〜", href: "/kagi-mawaranai/" },
  { icon: "kinko", name: "金庫", price: "15,000円〜", href: "/kinko-kaijo/" },
  { icon: "kuruma-kagi", name: "車の鍵", price: "12,000円〜", href: "/car-inlock/" },
  { icon: "bike", name: "バイクの鍵", price: "8,000円〜", href: "/bike-kagi-funshitsu/" },
];

const PRICES = [
  { service: "鍵開け（一般的な鍵）", price: "8,000〜15,000円", time: "5〜30分" },
  { service: "鍵開け（ディンプルキー）", price: "15,000〜30,000円", time: "15〜60分" },
  { service: "鍵交換（シリンダー交換）", price: "10,000〜25,000円", time: "15〜40分" },
  { service: "鍵交換（ディンプルキー）", price: "20,000〜40,000円", time: "15〜40分" },
  { service: "鍵修理", price: "5,000〜15,000円", time: "10〜30分" },
  { service: "金庫の鍵開け", price: "15,000〜50,000円", time: "30〜120分" },
  { service: "車のインロック解錠", price: "12,000〜30,000円", time: "10〜40分" },
  { service: "バイクの鍵開け", price: "8,000〜20,000円", time: "10〜30分" },
];

const FRAUD = [
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
];

const POINTS = [
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
];

const FAQS = [
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
];

const AGENT_TAGLINES: Record<string, string> = {
  kagi110ban: "全国415社の加盟店・24時間365日受付・鍵開け11,000円〜（税込）",
  jbr: "会員制の駆けつけサービス・一般向けの鍵開け受付なし（2024年上場廃止）",
  "seikatsu-kyukyusha": "株式会社生活救急車（2022年11月にJBRから承継）・鍵開け8,800円〜（税込）",
  "kagi-rescue": "鍵の110番救急車（kagi110qq.co.jp）・営業中・鍵開け6,600円〜＋出張料",
  kagizaru: "鍵屋の鍵猿（SLS株式会社）・全国47都道府県・最短15分・1年保証",
  "kagi-kyukyusha": "加盟店ネットワーク型・「鍵の救急車」等の表記は別業者と公式が告知",
  "kagi-24h-kyukyusha": "株式会社24時間救急車・鍵開け6,600円〜＋出張料・カギの救急車とは別会社",
  "kagi-trouble-kyukyusha": "株式会社アスティ24（川越）・首都圏中心・夜間割増を公式に明示",
};

function Icon({ name, size = 112, className = "" }: { name: string; size?: number; className?: string }) {
  return (
    <Image
      src={`/images/icons/${name}.webp`}
      alt=""
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    />
  );
}

function SectionHead({ eyebrow, title, lead, icon }: { eyebrow: string; title: string; lead?: string; icon?: string }) {
  return (
    <div className="mb-10 text-center md:mb-12">
      {icon && <Icon name={icon} size={64} className="mx-auto mb-4 h-14 w-14 md:h-16 md:w-16" />}
      <span className="kt-eyebrow">{eyebrow}</span>
      <h2 className="mt-3 text-[24px] font-bold leading-snug tracking-wide text-foreground md:text-[32px]">{title}</h2>
      {lead && <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-text-muted md:text-[15px]">{lead}</p>}
    </div>
  );
}

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

export default function Home() {
  const top3 = companies.slice(0, 3);
  const listedAgents = agents.filter((a) => !a.discontinued);

  return (
    <main className="flex flex-col">
      {/* Hero（2026-10-12 okina選定 案B：写真＋キャッチ＋2ボタン＋ネイビー数値帯） */}
      <section className="relative overflow-hidden border-b border-border bg-[#F4F7FB]">
        {/* SP：写真を上部に */}
        <div className="relative h-[230px] md:hidden">
          <Image src="/images/fv-hero.jpg" alt="笑顔で鍵を手にする女性の作業スタッフ" fill priority sizes="100vw" className="object-cover object-[78%_28%]" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F4F7FB] to-transparent" />
        </div>
        {/* PC：写真を右側の背景に */}
        <div className="absolute inset-0 hidden md:block">
          <Image src="/images/fv-hero.jpg" alt="笑顔で鍵を手にする女性の作業スタッフ" fill priority sizes="100vw" className="object-cover object-[right_30%]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#F4F7FB_0%,rgba(244,247,251,0.95)_40%,rgba(244,247,251,0)_66%)]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 pb-8 pt-2 md:pb-16 md:pt-16 lg:pb-24 lg:pt-20">
          <p className="flex flex-wrap items-center gap-2 text-[13px] font-bold tracking-wide text-text-secondary md:text-[15px]">
            <span className="rounded-md bg-primary-dark px-2.5 py-1 text-white">掲載{listedAgents.length}社</span>
            公式情報で中立に比較する、鍵の比較サイト
          </p>
          <h1 className="mt-4 text-[30px] font-black leading-[1.3] tracking-wide text-primary-dark md:mt-5 md:text-[48px] lg:text-[56px]">
            閉じ込め・紛失・交換。
            <br />
            鍵のトラブル、今すぐ解決。
          </h1>
          <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap md:mt-8 md:gap-4">
            <a href="#trouble" className="inline-flex min-h-[60px] items-center justify-center gap-2.5 rounded-xl bg-primary-dark px-8 text-[18px] font-bold text-white shadow-[0_10px_24px_rgba(11,37,69,0.22)] transition hover:brightness-110 md:min-h-[72px] md:text-[20px]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="8" cy="15" r="4" /><path d="M11 12l9-9M17 6l3 3M15 8l2 2" /></svg>
              トラブルから探す
              <ArrowRight />
            </a>
            <a href="#area" className="inline-flex min-h-[60px] items-center justify-center gap-2.5 rounded-xl bg-[#C2410C] px-8 text-[18px] font-bold text-white shadow-[0_10px_24px_rgba(194,65,12,0.25)] transition hover:brightness-110 md:min-h-[72px] md:text-[20px]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
              エリアから探す
              <ArrowRight />
            </a>
          </div>
          <ul className="mt-5 flex flex-wrap gap-2 md:max-w-[620px]">
            {[
              ["鍵の閉じ込め", "/shimedashi/"],
              ["鍵をなくした", "/kagi-funshitsu/"],
              ["鍵が回らない", "/kagi-mawaranai/"],
              ["車のインロック", "/car-inlock/"],
              ["料金相場", "/ryokin/"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="inline-flex min-h-[40px] items-center rounded-full border border-[#cbd5e1] bg-white px-4 text-[13px] font-bold text-primary-dark transition hover:border-primary md:text-[14px]">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <dl className="relative grid grid-cols-2 bg-primary-dark text-white md:grid-cols-4">
          {[
            ["到着スピード", "最短15", "分"],
            ["鍵開け料金", "8,000", "円〜"],
            ["対応エリア", "47", "都道府県"],
            ["エリア別まとめ", String(allAreaSlugs.length), "エリア"],
          ].map(([k, v, u], i) => (
            <div key={k} className={`px-2 py-4 text-center md:py-6 ${i % 2 === 0 ? "border-r border-white/15" : "md:border-r md:border-white/15"} ${i < 2 ? "border-b border-white/15 md:border-b-0" : ""} ${i === 3 ? "md:border-r-0" : ""}`}>
              <dt className="text-[12px] font-medium text-white/80 md:text-[13px]">{k}</dt>
              <dd className="mt-1 text-[26px] font-black leading-none md:text-[34px]">
                {v}
                <span className="ml-0.5 text-[13px] font-bold md:text-[16px]">{u}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>
      <p className="mx-auto w-full max-w-6xl px-4 pt-2 text-[11px] leading-relaxed text-text-muted">
        ※ 到着時間は掲載業者（カギの生活救急車・鍵猿）の公式表示による最短の目安、鍵開け料金はカギの生活救急車の公式表示（2026年10月12日確認）です。鍵の種類・地域・状況により異なります。当サイトは鍵業者ではなく、呼ぶ前の判断材料を提供する比較サイトです。
      </p>

      {/* トラブル別 */}
      <section id="trouble" className="scroll-mt-20 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="TROUBLE" title="今のお困りごとは？" lead="該当するトラブルをお選びください。状況別の対処法と、頼める業者をご案内します。" />
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {TROUBLES.map((t) => (
              <li key={t.title}>
                <Link href={t.href} className="kt-card kt-card-link group flex h-full flex-col overflow-hidden">
                  <span className="flex flex-1 flex-col items-center justify-center px-3 pb-5 pt-7 md:pb-7 md:pt-10">
                    <Icon name={t.icon} size={160} className="h-[88px] w-[88px] md:h-[128px] md:w-[128px]" />
                    <span className="mt-4 text-center text-[11px] leading-relaxed text-text-muted md:text-[13px]">{t.desc}</span>
                  </span>
                  <span className="flex min-h-[52px] items-center justify-center gap-1.5 bg-primary px-2 py-3 text-center text-[14px] font-bold tracking-wide text-white transition-colors group-hover:bg-primary-dark md:text-[16px]">
                    {t.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* エリアから探す */}
      <section id="area" className="scroll-mt-20 border-y border-border bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-4 text-center">
            <Icon name="area" size={64} className="mx-auto mb-4 h-14 w-14 md:h-16 md:w-16" />
            <span className="kt-eyebrow">AREA SEARCH</span>
            <h2 className="mt-3 text-[24px] font-bold tracking-wide text-foreground md:text-[32px]">エリアから探す</h2>
          </div>
          <AreaFinder />
        </div>
      </section>

      {/* サービス別 */}
      <section id="service" className="scroll-mt-20 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="SERVICE" title="サービス別で探す" lead="必要なサービスから、料金の目安と関連ガイドを確認できます" />
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-6">
            {SERVICES.map((s) => (
              <li key={s.name}>
                <Link href={s.href} className="kt-card kt-card-link group flex h-full flex-col overflow-hidden">
                  <span className="flex flex-1 flex-col items-center justify-center px-3 pb-4 pt-6">
                    <Icon name={s.icon} size={128} className="h-[80px] w-[80px] md:h-[96px] md:w-[96px]" />
                    <span className="mt-3 text-[12px] font-bold text-text-muted">{s.price}</span>
                  </span>
                  <span className="flex min-h-[48px] items-center justify-center bg-primary px-2 py-2.5 text-[14px] font-bold tracking-wide text-white transition-colors group-hover:bg-primary-dark md:text-[15px]">
                    {s.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* おすすめ TOP3 */}
      <section id="compare" className="scroll-mt-20 border-y border-border bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="RECOMMEND" title="おすすめ鍵業者 TOP3" lead="実績・料金・対応力を総合評価して厳選" icon="hikaku" />
          <ol className="space-y-6">
            {top3.map((company, index) => {
              const slug = companyIdToSlug[company.id] ?? company.id;
              return (
                <li key={company.id} className={`kt-card relative p-5 md:p-8 ${index === 0 ? "border-primary !border-2" : ""}`}>
                  {index === 0 && (
                    <span className="absolute -top-3 left-5 rounded-full bg-primary px-4 py-1 text-xs font-bold tracking-wider text-white md:left-8">
                      おすすめNo.1
                    </span>
                  )}
                  <div className="grid gap-6 md:grid-cols-[320px_minmax(0,1fr)_190px] md:gap-8">
                    <AgentShot slug={slug} name={company.name} sizes="(min-width: 768px) 320px, 100vw" />
                    <div>
                      <div className="mb-3 flex items-baseline gap-3">
                        <span className="shrink-0 whitespace-nowrap text-[26px] font-bold leading-none text-primary">
                          {index + 1}
                          <span className="ml-0.5 text-sm">位</span>
                        </span>
                        <h3 className="text-xl font-bold text-foreground">{company.name}</h3>
                      </div>
                      <p className="mb-4 text-sm leading-relaxed text-text-muted">{company.tagline}</p>
                      <ul className="mb-5 flex flex-wrap gap-2">
                        {company.features.slice(0, 4).map((feature) => (
                          <li key={feature} className="rounded border border-border px-2.5 py-1 text-xs font-medium text-text-secondary">
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <h4 className="mb-1.5 text-sm font-bold text-foreground">メリット</h4>
                          <ul className="space-y-1 text-sm text-text-muted">
                            {company.pros.slice(0, 2).map((pro) => (
                              <li key={pro} className="flex items-start gap-1.5">
                                <span className="font-bold text-primary">○</span>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="mb-1.5 text-sm font-bold text-foreground">注意点</h4>
                          <ul className="space-y-1 text-sm text-text-muted">
                            {company.cons.slice(0, 2).map((con) => (
                              <li key={con} className="flex items-start gap-1.5">
                                <span className="font-bold text-accent">△</span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 border-t border-border pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                      <div>
                        <p className="text-xs text-text-muted">料金目安</p>
                        <p className="text-2xl font-bold text-primary">{company.priceRange}</p>
                      </div>
                      <div>
                        <p className="text-xs text-text-muted">到着時間</p>
                        <p className="text-base font-bold text-foreground">{company.speed}</p>
                      </div>
                      <a href={company.officialUrl} target="_blank" rel="noopener noreferrer nofollow" className="kt-btn mt-1 w-full text-sm">
                        無料で相談する
                      </a>
                      <Link href={`/agents/${slug}/`} className="inline-flex min-h-[44px] items-center justify-center gap-1 text-sm font-bold text-primary underline-offset-4 hover:underline">
                        口コミ・評判を見る
                        <ArrowRight />
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* 掲載業者一覧 */}
          <div className="mt-16">
            <h3 className="mb-6 text-center text-lg font-bold tracking-wide text-foreground md:text-xl">掲載している鍵業者</h3>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {listedAgents.map((a) => (
                <li key={a.slug} className="kt-card flex flex-col p-3">
                  <AgentShot slug={a.slug} name={a.name} sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 100vw" />
                  <Link href={`/agents/${a.slug}/`} className="group mt-3 flex flex-1 flex-col px-1 pb-1">
                    <span className="font-bold text-foreground group-hover:text-primary">{a.name}</span>
                    <span className="mt-1 text-xs leading-relaxed text-text-muted">{AGENT_TAGLINES[a.slug] ?? "口コミ・評判・料金を見る"}</span>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary">
                      口コミ・評判・料金を見る
                      <ArrowRight />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <Link href="/agents/nitamei-kagiya/" className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-bold text-primary underline-offset-4 hover:underline">
                「救急車」「110番」など名前が似た鍵屋の見分け方
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 料金相場 */}
      <section id="price" className="scroll-mt-20 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHead eyebrow="PRICE" title="サービス別の料金相場" lead="2026年7月時点の料金相場をまとめました" icon="ryokin" />
          <div className="overflow-x-auto rounded-[10px] border border-border bg-white">
            <table className="w-full border-collapse text-sm md:text-[15px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3.5 text-left font-bold md:px-6">サービス</th>
                  <th className="px-4 py-3.5 text-left font-bold md:px-6">料金相場</th>
                  <th className="px-4 py-3.5 text-left font-bold md:px-6">作業時間</th>
                </tr>
              </thead>
              <tbody>
                {PRICES.map((row) => (
                  <tr key={row.service} className="border-t border-border">
                    <td className="px-4 py-3.5 font-medium text-foreground md:px-6">{row.service}</td>
                    <td className="whitespace-nowrap px-4 py-3.5 font-bold text-primary md:px-6">{row.price}</td>
                    <td className="whitespace-nowrap px-4 py-3.5 text-text-muted md:px-6">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-text-muted">
            ※ 上記は目安です。鍵の種類・時間帯・地域によって変動します。必ず事前見積もりを取りましょう。
          </p>
          <div className="mt-8 text-center">
            <Link href="/ryokin/" className="kt-btn">
              鍵開け・鍵交換の料金相場を詳しく見る
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ぼったくり注意 */}
      <section className="border-y border-border bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHead eyebrow="CAUTION" title="ぼったくり業者にご注意ください" lead="鍵業界では悪質な料金請求のトラブルが多発しています" icon="chui" />
          <ol className="kt-card divide-y divide-border overflow-hidden" style={{ borderLeft: "4px solid var(--accent)" }}>
            {FRAUD.map((item, i) => (
              <li key={item.title} className="flex items-start gap-4 p-5 md:p-6">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-muted">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 選び方 */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHead eyebrow="HOW TO CHOOSE" title="失敗しない鍵業者の選び方 5つのポイント" />
          <ol className="grid gap-4">
            {POINTS.map((item) => (
              <li key={item.num} className="kt-card flex items-start gap-5 p-5 md:p-7">
                <span className="shrink-0 font-bold leading-none tracking-wider text-primary text-[28px] md:text-[34px]">{item.num}</span>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-muted md:text-[15px]">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHead eyebrow="FAQ" title="よくある質問" icon="faq" />
          <div className="space-y-3">
            {FAQS.map((item) => (
              <details key={item.q} className="kt-acc kt-card overflow-hidden">
                <summary className="flex min-h-[60px] cursor-pointer items-center justify-between gap-3 px-5 py-4 font-bold text-foreground md:px-6">
                  <span className="flex items-start gap-3">
                    <span className="font-bold text-primary">Q.</span>
                    {item.q}
                  </span>
                  <svg className="kt-chev h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="flex gap-3 border-t border-border px-5 py-4 text-sm leading-relaxed text-text-secondary md:px-6">
                  <span className="font-bold text-accent">A.</span>
                  <span>{item.a}</span>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="kt-card px-6 py-12 text-center md:px-12">
            <h2 className="text-[22px] font-bold tracking-wide text-foreground md:text-[28px]">鍵のトラブル、一人で悩まないでください</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-muted md:text-[15px]">
              24時間365日対応の業者を厳選して比較しています。
              <br className="hidden md:block" />
              まずは料金相場と各社の特徴を確認してからのご相談がおすすめです。
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/agents/" className="kt-btn w-full sm:w-auto">
                24時間対応の業者を比較する
                <ArrowRight />
              </Link>
              <a href="#compare" className="kt-btn w-full sm:w-auto">
                業者を比較する
                <ArrowRight />
              </a>
            </div>
            <p className="mt-4 text-xs text-text-muted">通話料無料・見積もり無料・キャンセル無料</p>
          </div>
        </div>
      </section>
    </main>
  );
}
