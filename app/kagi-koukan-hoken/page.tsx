import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/kagi-koukan-hoken/";
const TITLE = "鍵交換は保険で補償される？空き巣に壊された鍵は「建物の盗難補償」、賃貸の入居者用保険には「鍵取替え費用」を設ける商品も";
const DESC =
  "鍵交換の費用が火災保険・賃貸の入居者用保険で出るかどうかを、補償の種類ごとに整理。SOMPOダイレクトの火災保険（建物の盗難補償で侵入時に壊された鍵の損害を補償）と、Chubbのリビングプロテクト総合保険（費用保険金に鍵取替え費用）の公式掲載を2026年11月20日に確認しました。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const CHECKED = "2026年11月20日確認";

const SRC = {
  sompoDirect: "https://www.sompo-direct.co.jp/eraberu/ins_detail/tonan.html",
  chubb: "https://www.chubb.com/jp-jp/individuals-families/living-protect.html",
};

// 公式掲載をもとに、当サイトで「どの補償で見るか」を整理したもの
const rows: [string, string, string][] = [
  ["空き巣に玄関の鍵を壊された（持ち家）", "建物の盗難補償", "SOMPOダイレクトの火災保険は、建物で盗難補償を選んだ場合、空き巣などが侵入する際に壊した窓ガラスや鍵などの損害を補償すると掲載。補償例に「空き巣に入られ、玄関の鍵を壊された。」"],
  ["賃貸住宅で鍵の取り替えが必要になった", "入居者用保険の費用保険金", "Chubbのリビングプロテクト総合保険（賃貸住宅入居者用）は、事故に伴う費用保険金の一つに「鍵取替え費用」を掲載。支払いの条件・限度額はパンフレット・約款で確認"],
  ["家財の盗難（鍵は壊されていない）", "家財の盗難補償", "鍵の交換費用が対象かは商品ごとに異なる。契約の約款・費用保険金の一覧で確認"],
  ["鍵をなくした・自分で壊した", "公式掲載では確認できず", "上の2社の掲載は盗難・事故に伴うもの。紛失だけの場合に対象となるかは、契約先に確認"],
];

const faqs: Faq[] = [
  {
    q: "空き巣に鍵を壊されました。火災保険で鍵交換の費用は出ますか？",
    a: "建物に盗難補償を付けていれば、対象になる商品があります。SOMPOダイレクトの火災保険は、建物でこの補償を選択した場合、空き巣などが屋内に侵入する際に壊した窓ガラスや鍵などの損害を補償すると掲載しています（" + CHECKED + "）。盗難補償を付けているか、建物と家財のどちらに付けているかで変わるため、保険証券で確認してください。",
  },
  {
    q: "賃貸に住んでいます。鍵の交換費用を補償する保険はありますか？",
    a: "賃貸住宅の入居者用保険のなかに、費用保険金として鍵の取替え費用を設けている商品があります。Chubbのリビングプロテクト総合保険は、事故に伴う諸費用の一つに「鍵取替え費用」を挙げています（" + CHECKED + "）。どの事故の場合に、いくらまで支払われるかは、パンフレット・約款でご確認ください。",
  },
  {
    q: "鍵をなくしただけでも、保険で交換できますか？",
    a: "今回確認した2社の公式掲載からは、紛失だけの場合に鍵交換の費用が支払われるかは確認できませんでした。補償の対象は商品・特約によって異なるため、契約先の保険会社・代理店に問い合わせてください。なお、火災保険の付帯サービスとして鍵開けの駆けつけを受けられる場合がありますが、補償（保険金）とは別のものです。",
  },
  {
    q: "保険で直す前に、業者に交換を頼んでもよいですか？",
    a: "盗難の場合は、まず警察に被害を届け出てください。保険会社への連絡も先に行い、写真の保存や見積書の取り方を確認しておくと手続きが円滑です。安全上すぐに交換が必要なときは、その旨を保険会社に伝えたうえで進めてください。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月20日"
      updatedIso="2026-11-20"
      crumbs={[{ name: "鍵交換と保険" }]}
      answerLead="鍵交換の費用が保険で出るかは、「なぜ交換が必要になったか」と「どの補償に入っているか」で決まります。空き巣に壊された場合は建物の盗難補償、賃貸住宅では入居者用保険の費用保険金（鍵取替え費用）が対象になる商品があります。鍵をなくしただけの場合は、契約先への確認が必要です。"
      answerBody={
        <>
          <p>
            SOMPOダイレクトの火災保険は、建物で盗難補償を選んだ場合に、空き巣などが屋内に侵入する際に壊した窓ガラスや鍵などの損害を補償すると掲載しています。賃貸住宅の入居者向けでは、Chubbのリビングプロテクト総合保険が、事故に伴う費用保険金の一つとして「鍵取替え費用」を挙げています。
          </p>
          <p>
            どちらも「盗難補償を付けているか」「費用保険金の対象にどの事故が含まれるか」で結果が変わるため、本記事の内容は、手元の保険証券・約款を確認する際の目安としてご利用ください。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.sompoDirect}>SOMPOダイレクト「盗難被害の補償内容｜じぶんでえらべる火災保険」</Ext>、<Ext href={SRC.chubb}>Chubb「リビングプロテクト総合保険」</Ext>（いずれも{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "交換が必要になった理由ごとに、見るべき補償",
          body: (
            <>
              <p>2社の公式掲載をもとに、鍵交換が必要になった理由ごとに、どの補償を確認すればよいかを当サイトで整理しました。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">状況</th>
                      <th className="border border-border px-3 py-2 text-left">確認する補償</th>
                      <th className="border border-border px-3 py-2 text-left">公式掲載で確認できたこと</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map(([a, b, c]) => (
                      <tr key={a}>
                        <td className="border border-border px-3 py-2 font-medium">{a}</td>
                        <td className="border border-border px-3 py-2 whitespace-nowrap">{b}</td>
                        <td className="border border-border px-3 py-2">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.sompoDirect}>SOMPOダイレクト</Ext>、<Ext href={SRC.chubb}>Chubb</Ext>（いずれも{CHECKED}）。他社の商品では名称・対象が異なる場合があります。
              </p>
            </>
          ),
        },
        {
          h2: "「建物」と「家財」の違いが分かれ目",
          body: (
            <>
              <p>
                火災保険は、補償の対象を「建物」と「家財」に分けて選びます。SOMPOダイレクトの掲載では、侵入時に壊された窓ガラスや鍵の損害は「建物でこの補償を選択した場合」の補償とされ、家財で選択した場合は現金なども一定の金額の範囲内で補償するとされています。家財だけに盗難補償を付けている場合は、盗まれた家財は補償されても、壊された錠は対象外になることがあります。
              </p>
              <p>
                賃貸住宅の入居者が加入する保険は、家財と賠償責任を中心とした入居者用の商品です。Chubbのリビングプロテクト総合保険も、家財の損害保険金に、借家人賠償責任・修理費用などのセット特約を組み合わせた構成で、鍵取替え費用は費用保険金の一つとして掲載されています。鍵を借主の負担で交換するかどうかは契約内容によるため、<a href="/chintai-kagi-koukan-hiyou/" className="text-primary underline">賃貸の鍵交換費用は誰が負担？</a>もあわせてご確認ください。
              </p>
            </>
          ),
        },
        {
          h2: "付帯サービスの「鍵開け」とは別もの",
          body: (
            <p>
              火災保険には、鍵の紛失時などに業者が駆けつける付帯サービスが付いていることがあります。これは保険金の支払い（補償）ではなく、保険会社が提供するサービスで、対象となる作業や回数・時間の上限はサービスごとに決まっています。付帯サービスの確認方法は<a href="/kasai-hoken-kagi/" className="text-primary underline">火災保険の鍵開けサポートとは</a>にまとめています。保険が使えない場合の業者ごとの公式料金は<a href="/ryokin-index/" className="text-primary underline">鍵業者の公式料金一覧</a>をご覧ください。
            </p>
          ),
        },
      ]}
      faqTitle="鍵交換と保険のよくある質問"
      faqs={faqs}
      related={[
        { href: "/kasai-hoken-kagi/", label: "火災保険の鍵開けサポート", desc: "付帯サービスの確認方法" },
        { href: "/chintai-kagi-koukan-hiyou/", label: "賃貸の鍵交換費用は誰が負担？", desc: "入居時・紛失時・退去時" },
        { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口と対策", desc: "被害のあとの錠の見直し" },
        { href: "/ryokin-index/", label: "鍵業者の公式料金一覧", desc: "確認日つきの公式料金" },
      ]}
    />
  );
}
