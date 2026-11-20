import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/anpi-kakunin-kagiake/";
const TITLE = "安否確認で鍵開けを頼むとき｜家族・管理会社・警察の役割と、鍵業者が「警察立ち会い」を条件にする理由、事前の鍵預かりの制度";
const DESC =
  "連絡が取れない家族の安否を確かめたいのに、家の鍵がないときの連絡先の順番を整理。鍵業者が居住者以外からの依頼を警察立ち会いで受けている例、大阪市東成区の緊急時安否確認（かぎ預かり）事業、UR賃貸住宅向け見守りサービスの鍵預託を、2026年11月20日に公式ページで確認しました。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const CHECKED = "2026年11月20日確認";

const SRC = {
  rescueQ042: "https://www.kagi110qq.co.jp/faq/q042.html",
  higashinari: "https://www.city.osaka.lg.jp/higashinari/page/0000430912.html",
  ur: "https://www.ur-net.go.jp/chintai_portal/welfare/kyotenka/kyoju/lrmhph000000u9jy-att/mimamori_260401.pdf",
};

// UR都市機構の案内（見守りサービス4社）のうち、駆けつけ・鍵の扱いに関する記載を当サイトで抜き出したもの
const urRows: [string, string, string, string][] = [
  ["ヤマト運輸", "IoT電球の点灯・消灯がない場合に通知先へ連絡", "依頼に応じてスタッフが訪問", "月額1,738円・初期費用0円"],
  ["東急セキュリティ", "赤外線センサーで24時間動きがない場合に自動通報", "警備員の駆けつけは追加契約（鍵預託プランあり）", "月額1,078円・初期費用0円（web申込）"],
  ["中部電力ミライズコネクト", "電気の使用状況の変化から異変を検知し、本人・緊急連絡先に通知", "在宅確認を行うプランを用意", "月額990円〜・初期費用0円"],
  ["西部ガスリビング", "緊急ペンダントの通報、12時間動きがない場合の自動通報", "24時間365日 警備員が駆けつけ。「鍵を預けているので安心」と記載", "月額3,630円・初期費用16,500円"],
];

const faqs: Faq[] = [
  {
    q: "親と連絡が取れません。鍵屋に電話すれば、すぐ開けてもらえますか？",
    a: "居住者本人からの依頼でない場合、本人確認ができないため、そのままでは受けない業者が一般的です。鍵のレスキューのよくある質問は、鍵開けには居住者本人の身分証明書が必要とし、第三者からの依頼（安否確認や強制執行など）であれば警察の立ち会いのもとで開錠作業が可能と案内しています（" + CHECKED + "）。先に警察へ相談してください。",
  },
  {
    q: "命に関わる状況かもしれないときは、どこに連絡しますか？",
    a: "室内で倒れている様子が見える、呼びかけにうめき声で応じるなど、急病やけがが疑われるときは119番、事件や事故が疑われるときは110番に通報してください。鍵業者の手配を待つ必要はありません。",
  },
  {
    q: "賃貸住宅の場合は、管理会社に開けてもらえますか？",
    a: "管理会社・大家が合鍵を保管していることはありますが、居住者の承諾なく室内に入ることには慎重な対応をとるのが通常です。管理会社に状況を伝え、警察への相談とあわせて対応を相談してください。対応の条件は契約や管理会社によって異なります。",
  },
  {
    q: "あらかじめ鍵を預けておける仕組みはありますか？",
    a: "自治体の事業として、大阪市東成区は65歳以上のひとり暮らしの方を対象に、事前にかぎを預かり、緊急時にそのかぎで自宅内の安否を確認する事業を無料で実施しています（預けるかぎは利用者の負担で作製）。UR都市機構が紹介する見守りサービスにも、鍵預託プランのある警備会社のサービスがあります（いずれも" + CHECKED + "）。お住まいの市区町村の高齢者福祉の窓口・地域包括支援センターにも、同様の制度がないかご確認ください。",
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
      crumbs={[{ name: "安否確認で鍵開けを頼むとき" }]}
      answerLead="連絡が取れない家族の安否を確かめたいときは、鍵業者より先に、緊急なら119番・110番、そうでなければ警察（最寄りの交番・警察署）に相談してください。居住者本人以外からの鍵開けは、警察の立ち会いを条件にしている鍵業者があります。"
      answerBody={
        <>
          <p>
            鍵業者は、他人の家を開けてしまうことを防ぐため、作業前に居住者本人であることを確かめます。そのため、家族であっても、居住者本人がその場にいない状態の鍵開けは、通常の依頼とは扱いが変わります。鍵のレスキュー（鍵の110番救急車）は、居住者本人の身分証明書を原則として求めたうえで、<strong>第三者からの依頼（安否確認や強制執行など）は警察の立ち会いのもとで開錠作業が可能</strong>としています。
          </p>
          <p>
            本記事では、連絡先の順番と、それぞれに頼めることを整理し、あわせて「次に同じことが起きないように」事前に鍵を預けておける制度の例を、自治体・UR都市機構の公式資料で確認しました。鍵を開ける方法そのものは扱いません。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.rescueQ042}>鍵のレスキュー よくある質問「鍵を開けてもらうときに必要な物はありますか？」</Ext>（{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "連絡が取れないときの連絡先の順番",
          body: (
            <>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  <strong>命に関わる兆候がある → 119番・110番</strong>：窓越しに倒れている姿が見える、異臭がする、呼びかけにうめき声が返るなどの場合は、迷わず通報します。救急隊・警察の判断で室内に入ることになり、鍵業者の手配を待つ必要はありません。
                </li>
                <li>
                  <strong>緊急性ははっきりしないが心配 → 警察に相談</strong>：最寄りの交番・警察署に、住所・居住者の氏名・最後に連絡が取れた日時・依頼者との関係を伝えます。鍵のレスキューも、詳しくはフリーダイヤルか「お近くの交番」へ相談するよう案内しています。
                </li>
                <li>
                  <strong>賃貸住宅 → 管理会社・大家にも連絡</strong>：合鍵を保管している場合があります。ただし、居住者の承諾なく室内に入ることの扱いは契約や管理会社によって異なるため、警察への相談とあわせて進めます。
                </li>
                <li>
                  <strong>持ち家で合鍵がない → 警察と相談のうえ鍵業者</strong>：鍵業者に依頼するときは、「安否確認のため、居住者本人は不在」と最初に伝え、警察の立ち会いが必要かどうかを確認します。
                </li>
              </ol>
              <p>
                到着前に、合鍵を持っていそうな家族・親族、近所で鍵を預かっている人がいないかも確かめておくと、壊さずに入れる可能性が上がります。
              </p>
            </>
          ),
        },
        {
          h2: "鍵業者に頼むときに確認しておくこと",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>居住者本人以外からの依頼を受けるか、受ける場合の条件（警察の立ち会い・依頼者の身分証など）</li>
                <li>依頼者の本人確認書類と、居住者との関係が分かるもの（同じ姓でない場合など）</li>
                <li>作業料・出張料・夜間の割増を含めた総額と、警察の到着を待つ間の待機の扱い</li>
                <li>開けられずに錠を壊した場合の扱い（交換が必要になるか、その費用）</li>
              </ul>
              <p>
                鍵のレスキューは、身分証明書を盗難などで持っていない場合は、保険証・クレジットカード・公共料金の領収書など複数の確認物が必要としています。業者ごとの公式料金は<a href="/ryokin-index/" className="text-primary underline">鍵業者の公式料金一覧</a>、業者選びの確認項目は<a href="/kagiya-erabikata/" className="text-primary underline">鍵屋・鍵業者の選び方チェックリスト</a>にまとめています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.rescueQ042}>鍵のレスキュー よくある質問</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "次に備える：事前に鍵を預けておける制度の例",
          body: (
            <>
              <p>
                <strong>大阪市東成区「緊急時安否確認（かぎ預かり）事業」</strong>は、東成区に住む65歳以上のひとり暮らしの方を対象に、事前にかぎを預かり、緊急時にそのかぎを使って自宅内の安否を確認する事業です。流れは、利用申込 → 自宅訪問とかぎの預かり → 協力施設（区内の特別養護老人ホーム2か所）でかぎを保管 → 異変発生時に協力施設でかぎを受け取り → 安否確認、の順です。利用料は無料で、預けるかぎは利用者の負担で作製します。実施主体は区役所と地域包括支援センターなどの事業共同体で、東成警察署も協力しています。
              </p>
              <p>
                UR都市機構は、UR賃貸住宅の入居者向けに民間4社の見守りサービスを紹介しています。鍵と駆けつけに関わる記載を当サイトで表にまとめると次のとおりです。
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">事業者</th>
                      <th className="border border-border px-3 py-2 text-left">異変の見つけ方</th>
                      <th className="border border-border px-3 py-2 text-left">訪問・駆けつけと鍵</th>
                      <th className="border border-border px-3 py-2 text-left">料金（税込）</th>
                    </tr>
                  </thead>
                  <tbody>
                    {urRows.map(([n, a, b, c]) => (
                      <tr key={n}>
                        <td className="border border-border px-3 py-2 font-medium whitespace-nowrap">{n}</td>
                        <td className="border border-border px-3 py-2">{a}</td>
                        <td className="border border-border px-3 py-2">{b}</td>
                        <td className="border border-border px-3 py-2">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.higashinari}>大阪市東成区「東成区緊急時安否確認（かぎ預かり）事業」</Ext>、<Ext href={SRC.ur}>UR都市機構「離れて暮らすご家族のために 見守りサービス」</Ext>（いずれも{CHECKED}）。UR都市機構の案内には、各サービスは救助や救命を約束するものではないこと、契約には緊急連絡先の登録が必要なこと、UR都市機構ではなく各事業者が提供するものであることが記載されています。
              </p>
              <p>
                自宅の外に合鍵を隠しておく方法は、防犯上すすめられません。鍵の預け先と保管の考え方は<a href="/kagi-hokan-basho/" className="text-primary underline">鍵の保管場所</a>、キーボックスを使う場合の注意は<a href="/key-box-kanri/" className="text-primary underline">キーボックスでの鍵管理の注意点</a>にまとめています。
              </p>
            </>
          ),
        },
      ]}
      faqTitle="安否確認と鍵開けのよくある質問"
      faqs={faqs}
      related={[
        { href: "/haikai-boushi-kagi/", label: "徘徊（ひとり歩き）防止の鍵", desc: "玄関の補助錠で考えたいこと" },
        { href: "/key-box-kanri/", label: "キーボックスでの鍵管理", desc: "介護・民泊で使うときの注意" },
        { href: "/kagiya-erabikata/", label: "鍵屋・鍵業者の選び方", desc: "依頼前に確認すること" },
        { href: "/ryokin-index/", label: "鍵業者の公式料金一覧", desc: "確認日つきの公式料金" },
      ]}
    />
  );
}
