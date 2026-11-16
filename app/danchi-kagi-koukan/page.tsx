import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/danchi-kagi-koukan/";
const TITLE = "団地の鍵交換｜UR賃貸は「模様替え」の申請が必要：住まいのしおりで確認した手続き・費用負担・退去時の鍵";
const DESC =
  "UR賃貸住宅（団地）で玄関の鍵を交換するときの手続きと費用負担を、UR都市機構の「住まいのしおり」で2026年11月16日に確認しました。" +
  "シリンダー取替えは「模様替え」の承諾申請、紛失時の交換費用は入居者負担、鍵が折れた・入らない場合の修繕は機構負担、退去時に鍵が足りない場合の取扱いについて。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const CHECKED = "2026年11月16日確認";

const SRC = {
  top: "https://www.ur-net.go.jp/chintai_portal/sumainoshiori/",
  nyukyo: "https://www.ur-net.go.jp/chintai_portal/sumainoshiori/lrmhph000000htlk-att/202610_jp_p12-15.pdf",
  shuzen: "https://www.ur-net.go.jp/chintai_portal/sumainoshiori/lrmhph000000htlk-att/202610_jp_p23-34.pdf",
  negaide: "https://www.ur-net.go.jp/chintai_portal/sumainoshiori/lrmhph000000htlk-att/202610_jp_p35-39.pdf",
  taikyo: "https://www.ur-net.go.jp/chintai_portal/sumainoshiori/lrmhph000000htlk-att/202610_jp_p45_48.pdf",
};

// 住まいのしおりの記載を、鍵に関わる場面ごとに当サイトで整理した表
const cases: [string, string, string, string][] = [
  ["鍵を紛失した（入居中）", "防犯上、シリンダーごとの交換をすすめる", "入居者", "3 入居時の手続き「鍵の管理」"],
  ["自分の希望で玄関の鍵（シリンダー）を取り替える", "「模様替え」として承諾申請が必要", "入居者（工事費）", "8 UR都市機構への「願出」・「届出」"],
  ["玄関扉に補助錠を増設する", "「模様替え」として承諾申請が必要", "入居者（工事費）", "同上"],
  ["玄関錠本体（ハンドル・ノブ等を含む）が壊れた", "修繕", "機構", "7 団地の修繕・改良等「住戸内の修繕負担区分（玄関）」"],
  ["鍵が入らない・折れた", "修繕", "機構", "同上"],
  ["退去時に当初の鍵が足りない", "シリンダー錠の取替えが必要", "入居者（取替え費用）", "10 退去時の手続き「鍵の返還」"],
];

const faqs: Faq[] = [
  {
    q: "UR賃貸で鍵をなくしました。管理事務所に合鍵はありますか？",
    a: "UR都市機構の住まいのしおりは、UR都市機構には予備の鍵（マスターキー）がないとしています。鍵を紛失した場合は、防犯上シリンダーごと交換することをすすめており、その交換費用は入居者の負担です（" + CHECKED + "）。",
  },
  {
    q: "UR賃貸で、玄関の鍵を防犯性の高いものに替えてもよいですか？",
    a: "住まいのしおりの「模様替え項目一覧表」では、玄関扉の鍵（シリンダー）の取替えは「模様替え」に当たり、模様替え等承諾申請書と内容のわかる図面・パンフレット等を提出して、住まいセンターの承諾を受ける手続きです。他の錠前部に損傷を与えず、扉や枠に切欠・穿孔を行わないもので、UR都市機構が適合すると認めるシリンダーの場合は、退去時の原状回復義務が免除されます（" + CHECKED + "）。",
  },
  {
    q: "鍵が鍵穴の中で折れました。修理費は自己負担ですか？",
    a: "住まいのしおりの「住戸内の修繕負担区分（玄関）」では、玄関錠の「鍵が入らない、折れた」は機構の負担に分類されています。ただし、入居者の故意・過失、または善管注意義務違反による破損や、油差しなどの日常的な手入れは入居者の負担としています。まず管理サービス事務所に連絡してください（" + CHECKED + "）。",
  },
  {
    q: "退去のとき、鍵は何本返せばよいですか？",
    a: "住まいのしおりは、入居時に渡した鍵は住宅とともに貸与したものとして、退去の際は全部の鍵を管理サービス事務所または管理連絡員に引き渡すよう定めています。当初渡された鍵を紛失している場合は、シリンダー錠の取替えが必要となるため、その費用を支払うことになります（" + CHECKED + "）。",
  },
  {
    q: "都営住宅や市営住宅の団地でも同じですか？",
    a: "このページはUR都市機構の住まいのしおりの記載をまとめたものです。公営住宅（都営・県営・市営など）や公社住宅は管理者ごとに定めが異なるため、入居時に受け取った案内と管理窓口で確認してください。",
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
      crumbs={[{ name: "団地（UR賃貸）の鍵交換" }]}
      answerLead="UR賃貸住宅（団地）で、入居者の希望により玄関の鍵（シリンダー）を取り替える場合は、「模様替え」として住まいセンターの承諾を受ける手続きが必要です。鍵をなくしたときの交換費用は入居者の負担ですが、鍵が入らない・折れたなどの錠の故障は、故意・過失によるものを除き機構の負担に分類されています。"
      answerBody={
        <>
          <p>
            業者に連絡する前に、まず管理サービス事務所（または住まいセンター）に連絡してください。故障として修繕の対象になるのか、入居者の負担で交換するのかによって、依頼先と費用が変わります。UR都市機構には予備の鍵（マスターキー）がないため、締め出された場合も管理事務所で開けてもらうことはできません。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.top}>UR都市機構「住まいのしおり」</Ext>の「3 入居時の手続き」「7 団地の修繕・改良等」「8 UR都市機構への『願出』・『届出』」「10 退去時の手続き」（いずれも2026年10月版のPDF、{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "場面ごとの手続きと費用負担（住まいのしおりの記載を整理）",
          body: (
            <>
              <p>住まいのしおりの章ごとに分かれている鍵の記載を、当サイトで場面ごとに並べ直しました。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">場面</th>
                      <th className="border border-border px-3 py-2 text-left">住まいのしおりの扱い</th>
                      <th className="border border-border px-3 py-2 text-left">費用の負担</th>
                      <th className="border border-border px-3 py-2 text-left">記載のある章</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cases.map(([k, a, b, c]) => (
                      <tr key={k}>
                        <td className="border border-border px-3 py-2 font-medium">{k}</td>
                        <td className="border border-border px-3 py-2">{a}</td>
                        <td className="border border-border px-3 py-2">{b}</td>
                        <td className="border border-border px-3 py-2">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.nyukyo}>住まいのしおり「3 入居時の手続き」</Ext>、<Ext href={SRC.shuzen}>「7 団地の修繕・改良等」</Ext>、<Ext href={SRC.negaide}>「8 UR都市機構への『願出』・『届出』」</Ext>、<Ext href={SRC.taikyo}>「10 退去時の手続き」</Ext>（いずれも{CHECKED}）。修繕負担区分の「機構」は、入居者の故意・過失、または善管注意義務違反による破損を除きます。
              </p>
            </>
          ),
        },
        {
          h2: "自分で鍵を替えるとき：「模様替え」の手続きと原状回復",
          body: (
            <>
              <p>
                住まいのしおりの「模様替え項目一覧表」では、建具に関する次の3項目がいずれも「模様替え」の手続きに分類されています。
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>玄関扉の鍵（シリンダー）の取替え：原状回復義務は条件付きで免除</li>
                <li>玄関扉への補助錠の増設：原状回復義務は免除</li>
                <li>玄関扉のノブのレバーハンドル化：原状回復義務は免除</li>
              </ul>
              <p>
                「模様替え」は、模様替え等承諾申請書と、模様替えの内容がわかる図面・パンフレット等を提出し、UR都市機構の基準により住まいセンターが審査して承諾する手続きです。シリンダーの取替えで原状回復義務が免除されるのは、他の錠前部に損傷を与えず、玄関扉建具（枠共）に切欠・穿孔を行わないもので、UR都市機構が適合すると認めるシリンダーの場合です。免除の項目でも、使用する材料・仕様・施工方法がUR都市機構の定める仕様に適合している必要があり、退去時に汚損や破損があれば補修費用を負担します。
              </p>
              <p>
                鍵業者に見積もりを依頼する際は、「UR賃貸で、模様替えの承諾を受ける予定」であることと、交換予定のシリンダーの品番・パンフレットを申請に使うことを伝えておくと、手続きを進めやすくなります。防犯性能の目安は<a href="/cp-nintei-jou/" className="text-primary underline">CP認定錠とは</a>、補助錠の種類は<a href="/hojo-jou/" className="text-primary underline">補助錠の選び方</a>にまとめています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.negaide}>住まいのしおり「8 UR都市機構への『願出』・『届出』」（模様替えの手続き・模様替えの承諾基準・原状回復義務について・模様替え項目一覧表）</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "鍵が折れた・入らない・ドアガードが切れたとき（修繕の負担区分）",
          body: (
            <>
              <p>住まいのしおりの「住戸内の修繕負担区分（玄関）」では、玄関まわりの次の不具合が機構の負担に分類されています。</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>玄関錠：玄関錠本体（ハンドル・ノブその他金物含む）が壊れた／鍵が入らない、折れた</li>
                <li>玄関ドア：ドアが開かない、閉まりが悪い／扉が変形した</li>
                <li>ドアクローザ：開閉速度の不良、油もれ／アームが破損した</li>
                <li>ドアガード（ドアチェーン）：切れた、錆びた</li>
              </ul>
              <p>
                同じ箇所でも、入居者の故意・過失、または善管注意義務違反によって生じた破損の修理・取替え・調整の費用と、簡単な手入れ・ビスやねじの締め・油差し・清掃などの日常的な手入れは入居者の負担としています。そのほかの修繕は、入居者からの申し出によって機構側が原因や状況を調査し、負担区分を特定したうえで行うとしています。自分で業者を手配する前に、管理サービス事務所へ連絡してください。
              </p>
              <p>
                鍵が折れたときの応急の考え方は<a href="/kagi-ore/" className="text-primary underline">鍵が折れた時の対処法</a>、鍵が抜けない・刺さらないときは<a href="/kagi-nukenai/" className="text-primary underline">鍵が抜けない・刺さらないときの対処法</a>を参照してください。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.shuzen}>住まいのしおり「7 団地の修繕・改良等」（住戸内の修繕負担区分）</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "退去するとき：鍵の返還と、自分で付けた錠前の撤去",
          body: (
            <>
              <p>
                退去の際は、入居時に渡された鍵を全部、管理サービス事務所または管理連絡員に引き渡します。当初渡された鍵を紛失している場合は、シリンダー錠の取替えが必要となるため、その費用を支払います。入居中に浄水器や集合郵便受箱の錠前など、自分で設置したものは撤去を忘れないよう案内されています。
              </p>
              <p>
                入居中に模様替えの承諾を受けて鍵を替えた場合の扱い（原状回復が免除されるか）は、承諾を受けたときの内容によって変わります。退去が決まった段階で、承諾書の控えを用意して管理サービス事務所に確認してください。一般の賃貸住宅の鍵の費用負担は<a href="/chintai-kagi-koukan-hiyou/" className="text-primary underline">賃貸の鍵交換費用は誰が負担？</a>、退去時の鍵の扱いは<a href="/taikyo-kagi-trouble/" className="text-primary underline">退去時の鍵トラブル</a>にまとめています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.taikyo}>住まいのしおり「10 退去時の手続き」（「鍵」の返還・皆さまの設置したものの撤去）</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
      ]}
      faqTitle="団地（UR賃貸）の鍵交換のよくある質問"
      faqs={faqs}
      related={[
        { href: "/chintai-kagi-koukan-hiyou/", label: "賃貸の鍵交換費用は誰が負担？", desc: "入居時・紛失時・退去時" },
        { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処", desc: "交換の判断" },
        { href: "/hojo-jou/", label: "補助錠の選び方", desc: "1ドア2ロック" },
        { href: "/cp-nintei-jou/", label: "CP認定錠とは", desc: "防犯性能の目安" },
        { href: "/change-key-system/", label: "チェンジキーシステムとは", desc: "シリンダーを替えずに鍵を切り替える仕組み" },
      ]}
    />
  );
}
