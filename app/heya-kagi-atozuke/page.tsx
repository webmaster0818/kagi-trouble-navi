import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/heya-kagi-atozuke/";
const TITLE = "部屋（室内ドア）に鍵を後付けする方法｜3つの方法と賃貸での注意点、外から開けられない内鍵";
const DESC =
  "自分の部屋の室内ドアに鍵を後付けする方法を、穴あけ不要の内鍵・鍵付きドアノブへの交換・ネジ止めの補助錠の3つに分けて解説。賃貸では国土交通省の賃貸住宅標準契約書が模様替えに貸主の書面承諾を求めていること、穴あけ不要の内鍵は外から解錠できないことを、2026年11月9日に一次情報で確認しました。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  mlitPage: "https://www.mlit.go.jp/jutakukentiku/house/jutakukentiku_house_tk3_000023.html",
  mlitPdf: "https://www.mlit.go.jp/common/001479827.pdf",
  nomura: "https://nomuratec.co.jp/product/3507/",
  nomuraManual: "https://nomuratec.co.jp/cms/wp-content/uploads/2022/09/n1062manual.pdf",
};

const ways: { name: string; fit: string; note: string }[] = [
  {
    name: "穴あけ不要の内鍵（ドア枠の受け金具に差し込むタイプなど）",
    fit: "賃貸・内開きの室内ドア",
    note: "室内側からだけ施錠できる。外からは開けられない製品がある",
  },
  {
    name: "ドアノブを鍵付きの室内錠（表示錠・間仕切錠など）に交換",
    fit: "持ち家。賃貸は貸主の承諾が前提",
    note: "多くの室内錠には外から開けられる非常解錠装置が付く。寸法の合う製品選びが必要",
  },
  {
    name: "ネジ止めの補助錠を追加",
    fit: "持ち家。賃貸は貸主の承諾が前提",
    note: "ドアや枠にネジ穴が残る。原状回復の対象になりうる",
  },
];

const faqs: Faq[] = [
  {
    q: "賃貸の部屋のドアに鍵を付けてもよいですか？",
    a: "契約内容によります。国土交通省の賃貸住宅標準契約書（平成30年3月版）第8条第2項は、借主が貸主の書面による承諾を得ずに本物件の増築・改築・移転・改造・模様替えなどを行ってはならないと定めています。ネジ止めの鍵やドアノブの交換を考えている場合は、自分の契約書を確認し、事前に大家・管理会社に相談してください。",
  },
  {
    q: "穴をあけずに室内ドアに鍵を付けられますか？",
    a: "ドア枠の受け金具（ストライク）に取付プレートを差し込んで使う内鍵などがあります。たとえばノムラテックの「快適防犯 どあロックガード 在室ロック」（品番N-1062）は、ドア枠のストライクプレートに差し込むだけで内開きドアを室内側からロックする製品で、同社は「ドアに傷つけません」としています（2026年11月9日確認）。対応するドアの開き方やすき間の寸法は製品ごとに決まっているため、購入前に取付説明書で確認してください。",
  },
  {
    q: "後付けの内鍵は外から開けられますか？",
    a: "製品によっては開けられません。ノムラテックは在室ロックの取付説明書で、室内ドアに内鍵が付いている場合でも、本製品を使うと室外側からドアの鍵を解錠しても室内には入れないため、使うときは同居の方に施錠することを伝えてから使うよう注意しています。急病などで中の人が開けられない場合に備え、家族と使い方を決めておいてください。",
  },
  {
    q: "トイレや寝室のドアノブに付いている鍵とは何が違いますか？",
    a: "表示錠や間仕切錠など、ドアノブに組み込まれた室内錠の多くには、外側からコインなどで開けられる非常解錠装置が付いています。使い方は室内ドア・トイレの鍵が開かないときの対処法で解説しています。後付けの内鍵には、こうした外からの解錠手段がない製品があります。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月9日"
      updatedIso="2026-11-09"
      crumbs={[{ name: "部屋の鍵の後付け" }]}
      answerLead="部屋（室内ドア）に鍵を後付けする方法は、穴あけ不要の内鍵を付ける、ドアノブを鍵付きの室内錠に交換する、ネジ止めの補助錠を足す、の3つです。賃貸は穴あけ不要の内鍵が候補になり、それ以外は貸主の承諾が前提です。"
      answerBody={
        <>
          <p>
            国土交通省の賃貸住宅標準契約書は、貸主の書面による承諾なしに模様替えなどを行わないことを定めています。また、穴あけ不要の内鍵には外から開けられない製品があり、メーカーは同居の方に伝えてから使うよう注意しています。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.mlitPage}>国土交通省「『賃貸住宅標準契約書』について」</Ext>、<Ext href={SRC.nomura}>ノムラテック「快適防犯 どあロックガード 在室ロック」</Ext>（いずれも2026年11月9日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "後付けの3つの方法と向いている住まい",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">方法</th>
                      <th className="border border-border px-3 py-2 text-left">向いている住まい</th>
                      <th className="border border-border px-3 py-2 text-left">注意点</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ways.map((w) => (
                      <tr key={w.name}>
                        <td className="border border-border px-3 py-2 font-bold text-text-primary">{w.name}</td>
                        <td className="border border-border px-3 py-2">{w.fit}</td>
                        <td className="border border-border px-3 py-2">{w.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                玄関ドアに鍵を足したい場合は、防犯のための補助錠が中心になります。<a href="/genkan-kagi-atozuke/" className="text-primary underline">玄関ドアの鍵の後付け方法</a>をご覧ください。
              </p>
            </>
          ),
        },
        {
          h2: "賃貸で室内ドアに鍵を付ける前に",
          body: (
            <>
              <p>
                国土交通省が公開している賃貸住宅標準契約書（平成30年3月版）の第8条第2項は、「乙は、甲の書面による承諾を得ることなく、本物件の増築、改築、移転、改造若しくは模様替又は本物件の敷地内における工作物の設置を行ってはならない。」と定めています（乙は借主、甲は貸主）。標準契約書は使用が法令で義務づけられたものではなく、契約書のひな形です。実際の扱いは、ご自身の賃貸借契約書で確認してください。
              </p>
              <p>
                同じ契約書の原状回復の修繕分担表では、鍵の取替えについて、破損や鍵紛失のない場合は貸主の負担、鍵の紛失または破損による取替えは借主の負担と整理しています。室内ドアに付けた鍵やネジ穴の扱いは契約ごとに異なるため、付ける前に大家・管理会社へ相談しておくと、退去時の行き違いを避けられます。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.mlitPdf}>国土交通省「賃貸住宅標準契約書 平成30年3月版・連帯保証人型」（PDF）</Ext>第8条・修繕分担表（2026年11月9日確認）
              </p>
            </>
          ),
        },
        {
          h2: "穴あけ不要の内鍵の例と、外から開けられない点の注意",
          body: (
            <>
              <p>
                ノムラテックの「快適防犯 どあロックガード 在室ロック」（品番N-1062）は、ドア枠のストライクプレートに取付プレートを差し込み、内開きの室内ドアを室内側からロックする製品です。鍵はつまんでスライドするだけで解錠でき、同社はテレワーク時の作業空間の確保などを用途に挙げています。取付プレートはステンレス製で、付属の固定バネを使うと、ドアを開けても取付プレートが脱落しないと同社は説明しています。
              </p>
              <p>
                同社は取付説明書で「室内ドアにも内鍵が付いている物がありますが、本製品を使用の場合は、室外側からドアの鍵を解錠しても室内には入れないので、ご使用する時は同居の方に施錠する事をお伝えしてからご使用下さい。」と注意しています。小さな子どもが勝手に施錠しないように手の届かない位置で管理する、体調が悪いときは使わないなど、家族で使い方を決めてから付けてください。
              </p>
              <p>
                取付けできるドアの条件（内開きか外開きか、ドアと枠のすき間、ストライクの形）は製品ごとに決まっています。購入前に取付説明書の「取り付け可能サイズ」を確認してください。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.nomura}>ノムラテック「快適防犯 どあロックガード 在室ロック」</Ext>、<Ext href={SRC.nomuraManual}>同 取付説明書（PDF）</Ext>（いずれも2026年11月9日確認）
              </p>
            </>
          ),
        },
        {
          h2: "ドアノブを鍵付きの室内錠に交換する場合",
          body: (
            <>
              <p>
                鍵のないドアノブ（空錠）を、表示錠や間仕切錠など鍵付きの室内錠に替える方法です。交換用の製品は、バックセット・ドア厚・フロントの刻印の3点が今のドアに合うものを選びます。採寸の方法は<a href="/doorknob-koukan/" className="text-primary underline">ドアノブ・ラッチの故障と交換の基礎知識</a>で解説しています。
              </p>
              <p>
                多くの室内錠には、外側から開けられる非常解錠装置が付いています。中で人が倒れた、子どもが閉じこもったといったときの開け方は<a href="/shitsunai-toilet-kagi/" className="text-primary underline">室内ドア・トイレの鍵が開かないときの対処法</a>をご覧ください。
              </p>
            </>
          ),
        },
      ]}
      cta={{
        h2: "取り付けを業者に頼むときは",
        text: "ドアノブの交換やネジ止めの錠の取り付けを依頼する場合は、ドアの写真とフロントの刻印を伝え、作業前に部品代・作業費・出張料を含む総額を確認してください。賃貸は貸主の承諾を得てから依頼します。",
        links: [
          { href: "/agents/", label: "鍵業者を比較する →" },
          { href: "/chintai-bouhan/", label: "賃貸でもできる防犯強化" },
        ],
      }}
      faqTitle="部屋の鍵の後付けのよくある質問"
      faqs={faqs}
      related={[
        { href: "/shitsunai-toilet-kagi/", label: "室内ドア・トイレの鍵が開かないとき", desc: "非常解錠装置の使い方" },
        { href: "/genkan-kagi-atozuke/", label: "玄関ドアの鍵の後付け方法", desc: "補助錠・スマートロックの比較" },
        { href: "/doorknob-koukan/", label: "ドアノブ・ラッチの故障と交換", desc: "採寸と製品選びの基本" },
        { href: "/kodomo-pet-kagi-taisaku/", label: "子ども・ペットの鍵トラブル対策", desc: "閉じ込め予防" },
      ]}
    />
  );
}
