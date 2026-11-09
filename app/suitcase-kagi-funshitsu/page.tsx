import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/suitcase-kagi-funshitsu/";
const TITLE = "スーツケースの鍵をなくしたときの対処｜メーカーへの鍵の注文とTSAロックの鍵穴の扱い";
const DESC =
  "スーツケースの鍵をなくしたら、まずメーカーの窓口で鍵を注文できるか確かめます。エース（ACE）は自社製品の鍵を1本1,100円（税込・送料660円）で扱い、手配は3〜4日または2週間程度。ダイヤル式TSAロックの鍵穴は検査員用です。TSA・ANAの案内とあわせ2026年11月9日に確認しました。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  aceKey: "https://aceservice.jp/repair/accessories.html",
  aceFaq: "https://aceservice.jp/customer/question.html",
  aceTsa: "https://store.ace.jp/shop/pages/new_proteca_tsa.aspx",
  tsaTips: "https://www.tsa.gov/travel/travel-tips",
  tsaScreening: "https://www.tsa.gov/travel/security-screening",
  anaUs: "https://www.ana.co.jp/ja/jp/guide/prepare/information/us-baggage/",
};

const faqs: Faq[] = [
  {
    q: "スーツケースの鍵をなくしたら、どこに頼めばよいですか？",
    a: "まずスーツケースのメーカー・ブランドの窓口に、鍵を注文できるか問い合わせてください。たとえばエース（ACE）のカスタマーセンターは、エース製品の鍵を1本1,100円（税込）、別途送料660円（税込）で取り扱っています。他社の製品は扱っていません（2026年11月9日確認）。",
  },
  {
    q: "鍵の注文には何が必要ですか？",
    a: "エースの場合は、スーツケースに記載されたカギ番号を伝えます。カギ番号のないスーツケースは製品番号を伝え、ソフトタイプのトローリーバッグはほとんどの場合カギ番号が書かれていないため、製品番号（5桁もしくは7桁）が必要と案内しています。",
  },
  {
    q: "ダイヤル式のTSAロックに鍵穴がありますが、その鍵をなくしたのでしょうか？",
    a: "エースは、ダイヤルロック式のスーツケースには差し込み用の鍵は付属せず、付属の鍵穴は検査員が検査時の解錠に使うものと案内しています。ダイヤル式の場合は、暗証番号で開け閉めします。",
  },
  {
    q: "ダイヤルの暗証番号を忘れた場合はどうすればよいですか？",
    a: "エースは、「0-0-0」から「9-9-9」まで順に試すか、エースカスタマーセンターに問い合わせるよう案内しています。ダイヤルチェンジボタンはリセットボタンではなく、今の暗証番号と違う番号で押し込むと故障の原因になると注意しています。他社の製品は、各メーカーの取扱説明書や窓口で確認してください。",
  },
  {
    q: "鍵がないまま、米国行きの便に預けても大丈夫ですか？",
    a: "ANAは、米国の空港を出発・乗り継ぎする場合、預ける手荷物には施錠しないことが求められていると案内しています。施錠されている手荷物は、当局の判断で鍵を壊して検査される場合があり、検査による手荷物（鍵部分も含む）の破損・没収についてはANAは責任を負わないとしています。",
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
      crumbs={[{ name: "スーツケースの鍵をなくしたとき" }]}
      answerLead="スーツケースの鍵をなくしたら、まずメーカーの窓口で鍵を注文できるか確かめてください。カギ番号か製品番号が分かれば、取り寄せられる場合があります。"
      answerBody={
        <>
          <p>
            エース（ACE）は、自社製品の鍵を1本1,100円（税込）、送料660円（税込）で取り扱い、鍵の種類によって3〜4日で手配できるタイプと2週間程度かかるタイプがあると案内しています。旅行の出発が近い場合は、日数を先に確かめてください。
          </p>
          <p>
            なお、ダイヤル式のTSAロックに付いている鍵穴は検査員用で、利用者用の鍵は付属しません。この場合は暗証番号で開け閉めします。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.aceKey}>エースカスタマーセンター「スーツケース用カギ・ハンガー」</Ext>、<Ext href={SRC.aceTsa}>エース公式通販「スーツケースの鍵の使い方」</Ext>（いずれも2026年11月9日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "まず確かめること",
          body: (
            <>
              <ol className="list-decimal pl-5 space-y-1.5">
                <li>
                  <strong>鍵の種類</strong>：差し込み式の鍵か、ダイヤル式か。ダイヤル式のTSAロックの鍵穴は検査員用で、利用者用の鍵はもともと付いていません。
                </li>
                <li>
                  <strong>メーカー・ブランド名</strong>：本体やタグ、保証書で確かめます。鍵の注文はメーカーの窓口が基本で、エースのように他社製品の鍵を扱わない窓口もあります。
                </li>
                <li>
                  <strong>カギ番号・製品番号</strong>：エースは、カギ番号がないスーツケースは製品番号を、ソフトタイプのトローリーバッグは製品番号（5桁もしくは7桁）を伝えるよう案内しています。
                </li>
                <li>
                  <strong>出発までの日数</strong>：エースの場合、鍵の手配は3〜4日のタイプと2週間程度のタイプがあります。
                </li>
              </ol>
              <p className="text-xs text-text-muted">出典：<Ext href={SRC.aceKey}>エースカスタマーセンター「スーツケース用カギ・ハンガー」</Ext>（2026年11月9日確認）</p>
            </>
          ),
        },
        {
          h2: "メーカーに鍵を注文する（エースの例）",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr>
                      <th className="border border-border px-3 py-2 text-left bg-surface-alt whitespace-nowrap">取り扱い</th>
                      <td className="border border-border px-3 py-2">エース製品のカギ・ハンガー（他社商品の取り扱いはなし）</td>
                    </tr>
                    <tr>
                      <th className="border border-border px-3 py-2 text-left bg-surface-alt whitespace-nowrap">鍵の価格</th>
                      <td className="border border-border px-3 py-2 font-bold text-text-primary">1本1,100円（税込）＋送料660円（税込）</td>
                    </tr>
                    <tr>
                      <th className="border border-border px-3 py-2 text-left bg-surface-alt whitespace-nowrap">手配の日数</th>
                      <td className="border border-border px-3 py-2">鍵の種類により3〜4日のタイプと2週間程度のタイプがある</td>
                    </tr>
                    <tr>
                      <th className="border border-border px-3 py-2 text-left bg-surface-alt whitespace-nowrap">伝える情報</th>
                      <td className="border border-border px-3 py-2">カギ番号。ない場合は製品番号（ソフトタイプのトローリーバッグは製品番号5桁もしくは7桁）</td>
                    </tr>
                    <tr>
                      <th className="border border-border px-3 py-2 text-left bg-surface-alt whitespace-nowrap">対象外</th>
                      <td className="border border-border px-3 py-2">暗証番号やダイヤル式の錠（カギは付属しない）</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                エースは、エース製サムソナイトについて、2004年にブランド契約が終了し、保持していたパーツの劣化が進んだためアフターサービスを終了したと案内しています。古いサムソナイト製品は、現在のブランドの窓口に問い合わせてください。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.aceKey}>エースカスタマーセンター「スーツケース用カギ・ハンガー」</Ext>、<Ext href={SRC.aceFaq}>同「よくあるご質問」</Ext>（いずれも2026年11月9日確認）
              </p>
            </>
          ),
        },
        {
          h2: "TSAロックの鍵穴と、検査で開けられる場合",
          body: (
            <>
              <p>
                米国運輸保安庁（TSA）は、預け入れ手荷物と機内持ち込み手荷物を検査し、必要な場合は手荷物を開けて中を確かめると説明しています。TSAはいくつかの会社と協力し、検査員が共通の「マスター」キーで開けられる錠を作っており、こうした錠であれば切断されずに済む場合があります。錠のパッケージに、TSAが開けられるかどうかが表示されています。
              </p>
              <p>
                一方で、施錠した預け入れ手荷物をほかの方法で開けられない場合は、錠を切断することがあり、検査のために開けた手荷物の損傷について責任を負わないとしています。検査で手荷物を開けた場合は、「Notice of Baggage Inspection」という通知が中に入れられます。
              </p>
              <p>
                エースは、まれに検査員が鍵穴を正常な位置に戻していない場合があり、その場合はマイナスドライバーなど先端の平らなものを差し込み、左右どちらかに回して所定の位置に戻すよう案内しています。また、日本から出国する際は航空会社によって対応が異なり、TSAロックの鞄でも解錠して預けるよう求められる場合があるとしています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.tsaTips}>TSA「Travel Tips」TSA recognized locks</Ext>、<Ext href={SRC.tsaScreening}>TSA「Security Screening」</Ext>、<Ext href={SRC.aceTsa}>エース公式通販「スーツケースの鍵の使い方」</Ext>（いずれも2026年11月9日確認）
              </p>
            </>
          ),
        },
        {
          h2: "鍵がないまま旅行に出る場合",
          body: (
            <>
              <p>
                ANAは、米国の各空港を出発または乗り継ぎする場合、預ける手荷物には施錠しないことが求められていると案内しています。施錠されている手荷物は、状況によっては当局の判断で手荷物の持ち主や航空会社に知らせずに鍵を壊して検査される場合があり、検査で生じた手荷物（鍵部分も含む）の破損・没収についてANAは責任を負わないとしています。施錠して預ける場合は、貴重品・高価品を入れないよう求めています。
              </p>
              <p>
                米国以外の路線や他の航空会社の扱いは、利用する航空会社の案内で確認してください。
              </p>
              <p className="text-xs text-text-muted">出典：<Ext href={SRC.anaUs}>ANA「米国出入国時の手荷物の取扱いについて」</Ext>（2026年11月9日確認）</p>
            </>
          ),
        },
      ]}
      cta={{
        h2: "閉まったまま開けられないときは",
        text: "メーカーの窓口で鍵の取り寄せや修理の相談ができます。鍵の業者に依頼する場合は、スーツケースのブランドと錠の種類を伝え、作業前に総額を確認してください。",
        links: [
          { href: "/agents/", label: "鍵業者を比較する →" },
          { href: "/kagi-funshitsu/", label: "鍵をなくした時の対処法" },
        ],
      }}
      faqTitle="スーツケースの鍵のよくある質問"
      faqs={faqs}
      related={[
        { href: "/kagi-funshitsu/", label: "鍵をなくした時の対処法", desc: "家の鍵をなくしたときの手順" },
        { href: "/bike-kagi-funshitsu/", label: "バイクの鍵紛失", desc: "メットイン閉じ込めの対処" },
        { href: "/key-number-aikagi/", label: "鍵番号で合鍵を作る", desc: "鍵番号の見方と注意点" },
        { href: "/kagi-shobun/", label: "鍵の処分方法", desc: "使わない鍵の捨て方" },
      ]}
    />
  );
}
