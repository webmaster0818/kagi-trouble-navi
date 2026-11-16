import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/change-key-system/";
const TITLE = "チェンジキーシステムとは｜シリンダーを替えずに前の鍵を使えなくする仕組み：美和ロックのカタログとLIXIL掲載の取扱説明書で確認";
const DESC =
  "チェンジキーシステム（キーチェンジ）の仕組みを、美和ロックのJCシリンダーのカタログと、LIXILが掲載する「MMXⅡ・カギのご使用方法」で2026年11月16日に確認しました。" +
  "シリンダーを交換せず前の鍵を無効にできること、キーチェンジの回数の上限、コンストラクションキーとの関係について。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const CHECKED = "2026年11月16日確認";

const SRC = {
  miwaJc: "https://www.miwa-lock.co.jp/tec/support/pdf/JC_catalog.pdf",
  mmx: "https://assets.lixil.com/content/dam/lixil-assets/manual/oldmpi/2/MDD_871892.pdf",
};

// 2つの資料の記載を同じ項目でそろえた比較（当サイト作成）
const compare: [string, string, string][] = [
  ["前の鍵を無効にする方法", "新しいキー「ネクストキー」を使用するだけで、従来のキーは使用できなくなる", "前の入居者のカギ（Aカギ）に付属するチェンジキーでリセットし、新しく使用するカギ（Bカギ）を登録する"],
  ["シリンダー交換", "シリンダー交換なしに、紛失したキーや以前のキーを無効にできる", "シリンダー交換は不要"],
  ["使う場面（資料の記載）", "入居者が変わった場合、キーを紛失した場合", "引越（退居）から入居のとき"],
  ["キーチェンジの回数", "最大4回（コンストラクションキーシステムを使用する場合は、シングルコンスで3回、ダブルコンスで2回）", "（この資料に記載なし）"],
  ["鍵の構成", "（このページに記載なし）", "子鍵（住戸キー）3本1セット・3本すべて同じカギ番号。チェンジキーは色で区別（子鍵ブラック、チェンジキー イエロー）"],
  ["チェンジキーで解錠できるか", "（このページに記載なし）", "リセットのみで、解錠はできない"],
];

const faqs: Faq[] = [
  {
    q: "チェンジキーシステムなら、鍵をなくしてもシリンダー交換は不要ですか？",
    a: "美和ロックのJCシリンダーのカタログは、入居者が変わった場合やキーを紛失した場合でも、シリンダー交換なしに以前のキーを無効にし、新しいキーで施解錠できるチェンジキーシステムを標準で用意しているとしています（" + CHECKED + "）。ただし、使える回数には上限があり、物件の錠がこの仕組みに対応しているかどうかはシリンダーによって異なります。",
  },
  {
    q: "キーチェンジは何回までできますか？",
    a: "美和ロックのJCシリンダーのカタログでは、キーチェンジは最大4回までです。コンストラクションキーシステムを使用する場合は、シングルコンスで3回、ダブルコンスで2回になると記載されています（" + CHECKED + "）。ほかの製品の回数は、各メーカーの資料で確認してください。",
  },
  {
    q: "コンストラクションキーとは何ですか？",
    a: "美和ロックのカタログは、コンストラクションキーを工事中（施工業者用）と入居前（デベロッパー用）の2段階で設けるダブルコンストラクションキーシステムが可能としています（" + CHECKED + "）。",
  },
  {
    q: "マンションで自分の部屋の鍵を切り替えると、共用部のドアは開かなくなりますか？",
    a: "美和ロックのJCシリンダーのカタログは、子鍵をキーチェンジしても、共用部の逆マスターされる側・マルチされる側のシリンダーはそのまま使用できるとしています（" + CHECKED + "）。物件のキーシステムによって異なるため、管理組合や管理会社に確認してください。",
  },
  {
    q: "賃貸住宅で、入居者が自分で鍵を切り替えてもよいですか？",
    a: "賃貸住宅の鍵とシリンダーは貸主の設備です。入居時に前の入居者の鍵が使えない状態になっているかを確認したい場合や、鍵をなくした場合は、自分で操作する前に管理会社・大家に相談してください。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月16日"
      updatedIso="2026-11-16"
      crumbs={[{ name: "チェンジキーシステムとは" }]}
      answerLead="チェンジキーシステムは、シリンダーを交換せずに、それまで使っていた鍵を使えなくして新しい鍵に切り替えられる仕組みです。美和ロックのJCシリンダーは、入居者が変わった場合や鍵を紛失した場合に、新しいキーを使うだけで従来のキーが使えなくなる仕組みを標準で備え、キーチェンジは最大4回までとしています。"
      answerBody={
        <>
          <p>
            メーカーの資料では、入居者が替わったとき・鍵をなくしたとき、工事中に使った鍵を入居後に使えなくするときの仕組みとして説明されています。鍵の交換（シリンダーごとの取り替え）とは異なり、回数に上限があるため、物件の錠が対応しているか、あと何回切り替えられるかは、管理会社やメーカーに確認する必要があります。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.miwaJc}>美和ロック「JC cylinder」カタログ（PDF）</Ext>（{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "2つのメーカー資料の比較",
          body: (
            <>
              <p>美和ロックのJCシリンダーのカタログと、LIXILのサイトに掲載されている「MMXⅡ・カギのご使用方法」の記載を、当サイトで同じ項目にそろえました。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">項目</th>
                      <th className="border border-border px-3 py-2 text-left">美和ロック JCシリンダー</th>
                      <th className="border border-border px-3 py-2 text-left">MMXⅡ（LIXIL掲載の資料）</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compare.map(([k, m, l]) => (
                      <tr key={k}>
                        <td className="border border-border px-3 py-2 font-medium">{k}</td>
                        <td className="border border-border px-3 py-2">{m}</td>
                        <td className="border border-border px-3 py-2">{l}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.miwaJc}>美和ロック「JC cylinder」カタログ（PDF）</Ext>、<Ext href={SRC.mmx}>LIXIL掲載「MMXⅡ・カギのご使用方法」（MI-1428、PDF）</Ext>（いずれも{CHECKED}）。製品ごとに仕組み・回数・操作が異なります。お使いの錠の資料を確認してください。
              </p>
            </>
          ),
        },
        {
          h2: "チェンジキーシステムとシリンダー交換の違い",
          body: (
            <>
              <p>
                シリンダー交換は、鍵穴の部品ごと新しいものに取り替える方法で、回数の制限はありませんが、部品代と作業費がかかります。チェンジキーシステムは、シリンダーを残したまま鍵だけを切り替える方法です。美和ロックのJCシリンダーでは、キーチェンジの回数は最大4回で、コンストラクションキーシステムを使う物件では3回または2回に減ります。上限に達した後に鍵を使えなくする必要が生じた場合は、シリンダー交換を検討することになります。
              </p>
              <p>
                鍵をなくしたときに交換が必要かの判断は<a href="/kagi-funshitsu/" className="text-primary underline">鍵をなくした時の対処法</a>、賃貸での費用負担は<a href="/chintai-kagi-koukan-hiyou/" className="text-primary underline">賃貸の鍵交換費用は誰が負担？</a>、UR賃貸の場合は<a href="/danchi-kagi-koukan/" className="text-primary underline">団地（UR賃貸）の鍵交換</a>にまとめています。
              </p>
            </>
          ),
        },
        {
          h2: "マスターキー・共用部の鍵との関係",
          body: (
            <>
              <p>
                マンションでは、住戸の鍵で共用部の扉も開けられるようにするキーシステム（逆マスター・マルチ）が使われることがあります。美和ロックのJCシリンダーのカタログは、子鍵をキーチェンジしても、共用部の逆マスターされる側・マルチされる側のシリンダーはそのまま使用できるとしています。JCシリンダー採用物件の共用部のシリンダーはすべてJNシリンダーになるとも記載しています。
              </p>
              <p>
                また、JCシリンダーのキーは専用加工機でのみ製作でき、キーの複製は美和ロックが直接注文を受けるとしています。キーシステムの全体像は<a href="/master-key-shikumi/" className="text-primary underline">マスターキーの仕組み</a>、美和ロックの合鍵の注文方法は<a href="/maker/miwa/aikagi/" className="text-primary underline">MIWAの合鍵</a>を参照してください。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.miwaJc}>美和ロック「JC cylinder」カタログ（PDF）</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
      ]}
      faqTitle="チェンジキーシステムのよくある質問"
      faqs={faqs}
      related={[
        { href: "/master-key-shikumi/", label: "マスターキーの仕組み", desc: "逆マスター・マルチ" },
        { href: "/maker/miwa/aikagi/", label: "MIWAの合鍵", desc: "注文方法" },
        { href: "/danchi-kagi-koukan/", label: "団地（UR賃貸）の鍵交換", desc: "模様替えの手続き" },
        { href: "/kagi-funshitsu/", label: "鍵をなくした時の対処法", desc: "交換の判断" },
        { href: "/cylinder-jou-shikumi/", label: "シリンダー錠の仕組み", desc: "鍵穴の構造" },
      ]}
    />
  );
}
