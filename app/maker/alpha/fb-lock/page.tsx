import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/maker/alpha/fb-lock/";
const TITLE = "アルファのFBロック｜専用スペアキーは1本3,000円（税別）・セキュリティカードで注文、MIWA錠との対応表";
const DESC =
  "アルファのFBロックは、MIWA製の錠前と互換性があるディンプルキータイプのシリンダー（CP-C認定）。専用スペアキーはセキュリティカードのコピーを添えてFAXか郵送で注文し、1本3,000円（税別）・送料と代引き手数料は同社負担。刻印ごとの対応機種もアルファ公式（2026年11月1日確認）にもとづき解説。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const FB_URL = "https://www.kk-alpha.com/lock/mechanical/fblock.html";
const SUPPORT_URL = "https://www.kk-alpha.com/lock/support/support.html";
const LIFE_URL = "https://www.kk-alpha.com/lock/servicelife/";

const compat: [string, string, string][] = [
  ["LA・MA、WLA", "33〜42", "LA"],
  ["BH、LD、LD・SP", "33〜42", "BH／LD"],
  ["LE、LE･SP、LSP のシリンダーローズ付き", "33〜42", "LE/LSP Aタイプ"],
  ["LE、LE･SP、LSP のシリンダーローズなし", "28〜51", "LE/LSP Bタイプ"],
  ["75PM", "36", "PMK（シルバーのみ）"],
  ["85RA、82RA", "36", "RA"],
  ["HP40", "33〜37", "HPD40（シルバーのみ）"],
  ["NDR", "33〜42", "NDR"],
  ["NDR-AT2", "33〜42", "NDR-AT2"],
  ["TE、PE、LE（アルミサッシメーカーの2シリンダーの玄関錠）", "33〜42／28〜51", "LE／LSP Aタイプ・Bタイプの2個同一キー"],
];

const faqs: Faq[] = [
  {
    q: "FBロックのスペアキーはどうやって注文しますか？",
    a: "アルファへ直接注文できます。公式サイトから注文書をダウンロードし、必要事項を記入してセキュリティカードのコピーを貼り付け、FAXまたは郵送で送ります。注文には、FBロック購入時に付属していたセキュリティカードのコピー、カードに記載された番号、購入者の名前・住所・電話番号が必要です（2026年11月1日にアルファ公式で確認）。",
  },
  {
    q: "スペアキーの料金はいくらですか？",
    a: "スペアキー作成料金は1本3,000円（税別）です。送料はアルファが負担し、支払いは代引きのみで、代引き手数料もアルファが負担します。",
  },
  {
    q: "セキュリティカードがないと合鍵は作れませんか？",
    a: "アルファは、付属のセキュリティカードを販売店に提示した場合のみ同社で鍵の複製を受け付けるとしています。キーの先端にはフローティングボールが内蔵されており、公式は鍵の複製を極めて困難にしたと説明しています。カードをなくした場合の扱いは公式ページに記載がないため、アルファに問い合わせてください。",
  },
  {
    q: "今のMIWAの錠にFBロックを付けられますか？",
    a: "FBロックはMIWA製の錠前と互換性があり、錠前の刻印ごとに対応するFBロックが異なります。公式は、取り替える錠前がFBロックに対応しているかを必ず確認し、それに対応するFBロックを選ぶよう案内しています。扉厚や座の厚みによっては特注品になる場合や取り付かない場合があります。",
  },
  {
    q: "鍵の抜き差しが重いときは油をさしてもよいですか？",
    a: "アルファは、潤滑油などの油を使うと細かいチリや埃が内部に付着して動作不具合の原因になるため使わないよう案内しています。鉛筆の黒い芯（4B位）をディンプルのくぼみに塗り込んで抜き差しする方法を紹介し、FBロックのキーで改善しない場合はアルコールや薄めた中性洗剤を歯ブラシに付けて先端のフローティングボール部を軽くこすり、水洗い・乾燥させるとしています。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月1日"
      updatedIso="2026-11-01"
      crumbs={[
        { name: "錠メーカー別ガイド", href: "/maker/" },
        { name: "アルファのFBロック" },
      ]}
      answerLead="FBロックの専用スペアキーは、付属のセキュリティカードのコピーを添えてFAXか郵送でアルファへ注文します。料金は1本3,000円（税別）で、送料と代引き手数料はアルファが負担します。"
      answerBody={
        <>
          <p>
            FBロックは「防犯性の高いピンシリンダー機構でディンプルキータイプの高性能シリンダー」で、水平2方向・斜め2方向の計4方向のピン配列、アンチピッキングピンを使い、鍵違いは最大1,300億通りと公式は説明しています。CP-C認定シリンダーで、標準で鍵が5本付き、鍵に裏表がないリバーシブルタイプです。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={FB_URL}>アルファ「FBロック」</Ext>、<Ext href={SUPPORT_URL}>アルファ「サポート情報」FBロックスペアキーのご注文</Ext>（いずれも2026年11月1日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "スペアキー注文の流れ（公式）",
          body: (
            <>
              <ol className="list-decimal pl-5 space-y-1.5">
                <li>公式サイトからFBロック専用スペアキー注文書をダウンロードする</li>
                <li>必要事項をすべて記入する（セキュリティカードの番号、購入者の名前・住所・電話番号、必要な本数）</li>
                <li>セキュリティカードのコピーを貼り付ける</li>
                <li>注文書をFAXまたは郵送で送る</li>
                <li>注文書の内容に沿ってスペアキーが製作され、配達業者が届ける</li>
                <li>受け取るときに配達業者に代金を支払う（代引きのみ）</li>
              </ol>
              <p>FBロックはキーホルダーを通す穴の部分が厚いため、今のキーホルダーに入らない場合があると公式は注意しています。</p>
            </>
          ),
        },
        {
          h2: "錠前の刻印と対応するFBロック（公式のラインアップ表）",
          body: (
            <>
              <p>錠前のメーカーと機種は、錠ケースに刻印されたマークで確認できます。交換前に刻印とドアの厚みを確かめてください。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">錠前の刻印</th>
                      <th className="border border-border px-3 py-2 text-left whitespace-nowrap">ドア厚（mm）</th>
                      <th className="border border-border px-3 py-2 text-left">対応FBロック</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compat.map(([a, b, c]) => (
                      <tr key={a}>
                        <td className="border border-border px-3 py-2">{a}</td>
                        <td className="border border-border px-3 py-2 whitespace-nowrap">{b}</td>
                        <td className="border border-border px-3 py-2 font-bold text-text-primary">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                色はシルバーが標準で、ブロンズ・ゴールドはオプションです（PMK・HPD40はシルバーのみ）。PMK用はシリンダーの径が24ミリで交換でき、28ミリでは交換できません。NDRは切り欠き加工穴を34ミリで行う必要があります。LE／LSP用のAタイプ・Bタイプだけはキーの抜き位置（鍵穴の方向）が横向きになります。
              </p>
              <p className="text-xs text-text-muted">出典：<Ext href={FB_URL}>アルファ「FBロック」</Ext>ラインアップ・ご購入・取扱上のご注意（2026年11月1日確認）</p>
            </>
          ),
        },
        {
          h2: "錠の耐用年数について",
          body: (
            <p>
              アルファは、日本ロック工業会（JLMA）が、錠を適切に保守・点検することで安全上支障なく使用できる標準的な期間を耐用年数と設定したことを紹介し、詳細は日本ロック工業会のガイドラインを参照するよう案内しています（<Ext href={LIFE_URL}>アルファ「錠の耐用年数について」</Ext>・2026年11月1日確認）。交換時期の目安は<a href="/kagi-jumyou/" className="text-primary underline">鍵の寿命と交換時期</a>にまとめています。
            </p>
          ),
        },
      ]}
      cta={{
        h2: "鍵が手元にない・すぐ開けたいときは",
        text: "スペアキーは郵送・FAXでの注文後に届きます。締め出しですぐに解錠が必要な場合や、紛失でシリンダー交換を検討する場合は、業者の料金と対応を比べてから依頼してください。",
        links: [
          { href: "/agents/", label: "鍵業者を比較する →" },
          { href: "/shimedashi/", label: "締め出されたときの対処" },
        ],
      }}
      faqTitle="アルファのFBロックのよくある質問"
      faqs={faqs}
      related={[
        { href: "/maker/", label: "錠メーカー別ガイド", desc: "MIWA・GOAL・ウエスト・アルファ・ミネベアショウワ" },
        { href: "/maker/miwa/aikagi/", label: "美和ロック（MIWA）の合鍵", desc: "MIWA Directの5種類と価格" },
        { href: "/cp-nintei-jou/", label: "CP認定錠の解説", desc: "防犯性能の高い建物部品の見分け方" },
        { href: "/kagi-jumyou/", label: "鍵の寿命と交換時期", desc: "耐用年数の考え方" },
      ]}
    />
  );
}
