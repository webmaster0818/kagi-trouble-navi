import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/maker/taiyou-nensu/";
const TITLE = "錠の耐用年数は一般錠10年・電気錠7年｜美和ロック・ミネベアショウワ・アルファの案内と保守点検制度";
const DESC =
  "日本ロック工業会（JLMA）が定めた錠の耐用年数（建物の引き渡し後・購入後から一般錠10年、電気錠7年）と、保証期間との違い、2012年に始まった保守点検制度、部品の保有期間を、" +
  "美和ロック・ミネベアショウワ・アルファの公式ページ（2026年11月4日確認）で比べました。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  miwa: "https://www.miwa-lock.co.jp/tec/support/maintenance.html",
  showa: "https://minebeashowa.co.jp/support/inspection/",
  alpha: "https://www.kk-alpha.com/lock/servicelife/",
};
const CHECKED = "2026年11月4日確認";

type Row = { maker: string; years: string; extra: string; href: string; label: string };
const rows: Row[] = [
  {
    maker: "美和ロック（MIWA）",
    years: "一般錠10年／電気錠7年（電気錠には制御器・リーダ等も含む）",
    extra: "耐用年数は保守・点検で基本性能を維持できる取り替えまでの目安で、保証（無償修理）期間とは異なると説明。保守点検制度の対象と開始日も掲載",
    href: SRC.miwa,
    label: "美和ロック「錠の耐用年数と保守点検制度について」",
  },
  {
    maker: "ミネベアショウワ",
    years: "一般錠10年／電気錠7年（会員会社として順守すると明記）",
    extra: "補修用の製品・部品の保有義務期間を、製造中止時から10年（電気錠は7年）と記載。同じ機能の製品・部品がある場合はこの限りではない",
    href: SRC.showa,
    label: "ミネベアショウワ「錠の耐用年数と保守点検制度」",
  },
  {
    maker: "アルファ",
    years: "日本ロック工業会の耐用年数を紹介（年数の詳細は工業会のガイドラインを参照するよう案内）",
    extra: "錠を適切に保守・点検することで安全上支障なく使用できる標準的な期間として耐用年数が設定されたことを紹介",
    href: SRC.alpha,
    label: "アルファ「錠の耐用年数について」",
  },
];

const faqs: Faq[] = [
  {
    q: "錠の耐用年数はいつから数えますか？",
    a: "美和ロック・ミネベアショウワの公式ページでは、建物（製品）の引き渡し後、あるいは購入後から数えて、一般錠10年・電気錠7年とされています。建物に使われる錠が対象です（" + CHECKED + "）。",
  },
  {
    q: "耐用年数の10年を過ぎたら保証で直してもらえなくなるのですか？",
    a: "耐用年数は保証期間とは別のものです。美和ロックは、耐用年数を、製品の基本性能を保守・点検で維持できる取り替えまでの目安の期間で、製品の保証（無償修理）期間とは異なると説明しています。保証の期間や条件は各メーカーの保証規定で確認してください。",
  },
  {
    q: "錠の保守点検制度とはどんな制度ですか？",
    a: "日本ロック工業会と日本ロックセキュリティ協同組合が2012年6月9日（ロックの日）に始めた制度です。申し込んだ人を対象に、錠メーカーまたは全国の日本ロックセキュリティ協同組合の加盟店が定期的に現地を訪れて点検します。対象は「避難経路にある錠」と「全ての電気錠」です。",
  },
  {
    q: "古い錠の部品はいつまで手に入りますか？",
    a: "ミネベアショウワは、補修用の製品・部品の保有義務期間を製造中止時から10年（電気錠は7年）としています。同じ機能の製品・部品がある場合はこの限りではないとしています。ほかのメーカーは、今回確認したページに部品の保有期間の記載がありませんでした。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月4日"
      updatedIso="2026-11-04"
      crumbs={[
        { name: "錠メーカー別ガイド", href: "/maker/" },
        { name: "錠の耐用年数と保守点検制度" },
      ]}
      answerLead="錠の耐用年数は、日本ロック工業会（JLMA）が定めた「一般錠10年／電気錠7年」です。建物の引き渡し後、あるいは購入後から数え、保証（無償修理）期間とは別のものです。"
      answerBody={
        <>
          <p>
            美和ロックとミネベアショウワは同じ年数を公式ページに掲載しています。耐用年数は「保守・点検で基本性能を保てる取り替えまでの目安」で、過ぎたらすぐ使えなくなるという意味ではありません。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.miwa}>美和ロック「錠の耐用年数と保守点検制度について」</Ext>・<Ext href={SRC.showa}>ミネベアショウワ「錠の耐用年数と保守点検制度」</Ext>（{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "メーカー3社の公式ページの記載を比べる",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">メーカー</th>
                      <th className="border border-border px-3 py-2 text-left">耐用年数の記載</th>
                      <th className="border border-border px-3 py-2 text-left">そのほかの記載</th>
                      <th className="border border-border px-3 py-2 text-left">出典</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r) => (
                      <tr key={r.maker}>
                        <td className="border border-border px-3 py-2 font-bold text-text-primary whitespace-nowrap">{r.maker}</td>
                        <td className="border border-border px-3 py-2">{r.years}</td>
                        <td className="border border-border px-3 py-2">{r.extra}</td>
                        <td className="border border-border px-3 py-2 text-xs"><Ext href={r.href}>{r.label}</Ext></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">各社の公式ページを{CHECKED}。</p>
            </>
          ),
        },
        {
          h2: "耐用年数が決められた理由",
          body: (
            <>
              <p>
                美和ロックの説明によると、日本ロック工業会は、製品寿命が原因で生命・財産・身体への損害が起きるおそれのある、経年劣化による重大事故を防ぐため、業界各社をとりまとめて一般消費者に注意を促す目的で耐用年数のガイドラインを設定しました。耐用年数を過ぎた錠について注意を促し、長く安全に使ってもらうための目安です。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.miwa}>美和ロック「錠の耐用年数と保守点検制度について」</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "保守点検制度（2012年6月9日開始）の対象",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>運営：日本ロック工業会と日本ロックセキュリティ協同組合の共同</li>
                <li>開始：2012年6月9日（ロックの日）</li>
                <li>方法：保守点検の申込者を対象に、錠メーカーまたは全国の日本ロックセキュリティ協同組合加盟店が定期的に現地を訪問して点検する</li>
                <li>対象の錠：利用者による保守が難しく老朽化のおそれが高い「避難経路にある錠」と「全ての電気錠」</li>
              </ul>
              <p>
                対象が避難経路の錠と電気錠に限られているため、一般住宅の玄関の機械式の錠は、日ごろの手入れと交換時期の見きわめが中心になります。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.miwa}>美和ロック</Ext>・<Ext href={SRC.showa}>ミネベアショウワ</Ext>の各公式ページ（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "自宅の錠に当てはめるときの考え方",
          body: (
            <p>
              引き渡しや購入から10年が近い、またはキーの抜き差しが重い・回りにくいといった症状がある場合は、まずメーカーの案内どおりの手入れ（<a href="/maker/goal/oteire/" className="text-primary underline">GOAL</a>・<a href="/maker/showa/oteire/" className="text-primary underline">ミネベアショウワ</a>）を試し、改善しなければシリンダー交換を検討します。症状ごとの交換の判断は<a href="/kagi-jumyou/" className="text-primary underline">鍵の寿命と交換時期</a>にまとめています。
            </p>
          ),
        },
      ]}
      cta={{
        h2: "交換を検討するときは",
        text: "シリンダー交換は、メーカーのサービス代行店や鍵業者に依頼できます。依頼前に料金と対応を比べてください。",
        links: [
          { href: "/agents/", label: "鍵業者の比較一覧 →" },
          { href: "/kagi-koukan-timing/", label: "鍵交換のタイミング" },
        ],
      }}
      faqTitle="錠の耐用年数のよくある質問"
      faqs={faqs}
      related={[
        { href: "/kagi-jumyou/", label: "鍵の寿命と交換時期", desc: "症状から見る交換の目安" },
        { href: "/maker/showa/oteire/", label: "ミネベアショウワの錠前のお手入れ", desc: "症状別の対処と8つの注意" },
        { href: "/maker/nagasawa/keylex/", label: "キーレックスの暗証番号", desc: "電気を使わないボタン錠" },
        { href: "/maker/", label: "錠メーカー別ガイド", desc: "各社の合鍵の窓口を一覧で比較" },
        { href: "/genkan-anshou-bangou/", label: "暗証番号式の玄関の鍵（テンキー錠）", desc: "のぞき見への備えと番号の変更" },
      ]}
    />
  );
}
