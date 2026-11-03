import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/maker/miwa/haishi-cylinder/";
const TITLE = "美和ロック（MIWA）の廃止シリンダー一覧｜ディスク・EC・UX・PX・URの合鍵の注文期限と見分け方";
const DESC =
  "美和ロックが廃止・廃止予定としているシリンダー（ディスク・EC〈76EC・83EC・E6〉・UX・PX・UR）の合鍵・マスターキー複製の注文期限と見分け方を、美和ロック公式の一覧で確認しました。" +
  "UXは2027年4月30日まで、ディスクシリンダーは2030年9月30日までです（2026年11月3日確認）。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  abol: "https://www.miwa-lock.co.jp/tec/support/abolition_cylinder.html",
  dup: "https://www.miwa-lock.co.jp/tec/support/duplicatekey.html",
};

type Row = { name: string; id: string; copy: string; same: string; newp: string };

const rows: Row[] = [
  { name: "ディスクシリンダー", id: "鍵穴が縦向きで平仮名の「く」の字に見える。キーの両側に刻みがある", copy: "2030年9月30日まで", same: "終了", newp: "終了" },
  { name: "ECシリンダー（76EC）", id: "鍵穴が横向き。キーの表面にくぼみがあり、両側に刻みがなくまっすぐ。両側に磁石が埋め込まれている（ECシリンダー共通の識別方法）。くぼみは1か所", copy: "2038年3月31日まで", same: "終了", newp: "終了" },
  { name: "ECシリンダー（83EC）", id: "鍵穴が横向き。キーの表面にくぼみがあり、両側に刻みがなくまっすぐ。両側に磁石が埋め込まれている（ECシリンダー共通の識別方法）。くぼみは4か所", copy: "2036年3月31日まで", same: "終了", newp: "終了" },
  { name: "ECシリンダー（E6）", id: "鍵穴が横向き。キーの表面にくぼみがあり、両側に刻みがなくまっすぐ。両側に磁石が埋め込まれている（ECシリンダー共通の識別方法）。くぼみは6か所", copy: "2039年3月31日まで", same: "終了", newp: "終了" },
  { name: "UXシリンダー", id: "鍵穴が横向きでアルファベットの「W」の字に見える。キーヘッドは片方が丸みを帯びた左右非対称の形", copy: "2027年4月30日まで", same: "終了", newp: "終了" },
  { name: "PXシリンダー", id: "鍵穴が縦向きで複雑な形。キーの刻みが片側にしかない", copy: "2037年9月30日まで", same: "終了", newp: "終了" },
  { name: "URシリンダー（鍵穴A型）", id: "鍵穴が横向き。キーの両側に刻みがありほぼ左右対称。リバーシブル", copy: "2048年10月31日まで", same: "2028年10月31日まで", newp: "終了" },
  { name: "URシリンダー（鍵穴D型）", id: "鍵穴が横向き。キーの両側に刻みがありほぼ左右対称。リバーシブル", copy: "受注可能", same: "受注可能", newp: "マスターキー付物件は終了、なしは受注可能" },
];

const faqs: Faq[] = [
  {
    q: "美和ロックはなぜシリンダーを廃止しているのですか？",
    a: "美和ロックは、数多くの製造に伴い鍵違い数の限界を超えたことと、社会情勢の変化でより高いセキュリティが求められるようになったことを理由に、廃止または廃止予定としています（美和ロック「廃止シリンダー/廃止製品一覧」2026年11月3日確認）。",
  },
  {
    q: "廃止シリンダーの合鍵はいつまで注文できますか？",
    a: "美和ロックの一覧では、合鍵・マスターキー複製の注文対応は、UXが2027年4月30日まで、ディスクが2030年9月30日まで、83ECが2036年3月31日まで、PXが2037年9月30日まで、76ECが2038年3月31日まで、E6が2039年3月31日まで、" +
      "UR（鍵穴A型）が2048年10月31日までです。UR（鍵穴D型）は受注可能とされています（2026年11月3日確認）。",
  },
  {
    q: "廃止シリンダーを使い続けても大丈夫ですか？",
    a: "美和ロックは、鍵違いが多くセキュリティレベルも高いU9・WR・PR・LB・JNシリンダーへの取り替えを勧めています。あわせて、警察庁も推奨する1ドア2ロック（新たな補助錠の設置）への変更も勧めています。",
  },
  {
    q: "URキーはMIWA Directで注文できますか？",
    a: "美和ロック「合鍵を希望されるお客様へ」では、MIWA Directで注文できるキーとしてWR・U9・UR・PR・PSの5種類が挙げられています（2026年11月3日確認）。MIWA刻印と鍵番号があり、手元に鍵があることが条件です。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月3日"
      updatedIso="2026-11-03"
      crumbs={[
        { name: "錠メーカー別ガイド", href: "/maker/" },
        { name: "MIWAの廃止シリンダー" },
      ]}
      answerLead="美和ロックは、ディスク・EC（76EC・83EC・E6）・UX・PX・URシリンダーを廃止または廃止予定としています。合鍵の注文には期限があり、最も早いUXシリンダーは2027年4月30日までです。"
      answerBody={
        <>
          <p>
            美和ロックは、鍵違いが多くセキュリティレベルも高いU9・WR・PR・LB・JNシリンダーへの取り替えと、1ドア2ロック（補助錠の追加）を勧めています。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.abol}>美和ロック「廃止シリンダー/廃止製品一覧」</Ext>（2026年11月3日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "廃止シリンダーの見分け方と注文期限",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">シリンダー</th>
                      <th className="border border-border px-3 py-2 text-left">見分け方（公式の識別方法）</th>
                      <th className="border border-border px-3 py-2 text-left">合鍵・マスターキー複製</th>
                      <th className="border border-border px-3 py-2 text-left">同一キーNo.の追加</th>
                      <th className="border border-border px-3 py-2 text-left">新規物件の製作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r) => (
                      <tr key={r.name}>
                        <td className="border border-border px-3 py-2 font-bold whitespace-nowrap">{r.name}</td>
                        <td className="border border-border px-3 py-2">{r.id}</td>
                        <td className="border border-border px-3 py-2 whitespace-nowrap">{r.copy}</td>
                        <td className="border border-border px-3 py-2">{r.same}</td>
                        <td className="border border-border px-3 py-2">{r.newp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                「同一キーNo.の追加」は既存の子鍵No.と同じNo.でシリンダーを製作できる期限です。既存のキープランに合わせて新しい子鍵No.でシリンダーを製作する「既存物件合わせ」は、UR（鍵穴D型）のマスターキーなし物件を除いて終了しています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.abol}>美和ロック「廃止シリンダー/廃止製品一覧」</Ext>（2026年11月3日確認）
              </p>
            </>
          ),
        },
        {
          h2: "期限が近いシリンダーを使っている場合",
          body: (
            <>
              <p>
                美和ロックの一覧では、合鍵・マスターキー複製の注文対応に期限が示されており、最も早いUXシリンダーは2027年4月30日までです。家族の分の鍵が足りない場合は早めに注文し、あわせてシリンダーの取り替えを検討してください。
              </p>
              <p>
                MIWA Directで注文できるのはWR・U9・UR・PR・PSの5種類です。注文方法は<a href="/maker/miwa/aikagi/" className="text-primary underline">美和ロック（MIWA）の合鍵・純正キーの頼み方</a>にまとめています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.dup}>美和ロック「合鍵を希望されるお客様へ」</Ext>（2026年11月3日確認）
              </p>
            </>
          ),
        },
      ]}
      cta={{
        h2: "シリンダーの取り替えを業者に頼むときは",
        text: "取り替え先のシリンダーの種類と総額を、作業前に確認してください。賃貸の場合は、管理会社・大家の了承を得てから依頼します。",
        links: [
          { href: "/agents/", label: "鍵業者の比較一覧 →" },
          { href: "/kagi-koukan-timing/", label: "鍵交換のタイミング" },
        ],
      }}
      faqTitle="MIWAの廃止シリンダーのよくある質問"
      faqs={faqs}
      related={[
        { href: "/maker/miwa/aikagi/", label: "美和ロック（MIWA）の合鍵", desc: "MIWA Directの5種類と注文できない鍵" },
        { href: "/maker/miwa/pr-cylinder/", label: "MIWAのPRシリンダー", desc: "2WAY構造と純正合鍵の注意" },
        { href: "/maker/miwa/lb-cylinder/", label: "MIWAのLBシリンダー", desc: "紛失時に鍵だけ無効にできる仕組み" },
        { href: "/joumae-type-zukan/", label: "錠前の種類図鑑", desc: "シリンダーの見分け方" },
      ]}
    />
  );
}
