import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/kagi-hokan-basho/";
const TITLE = "鍵の保管場所｜合鍵を玄関まわりに隠さない理由と、鍵番号・車のスマートキーの保管を警察の公開資料で整理";
const DESC =
  "家の鍵・合鍵・車のスマートキーをどこに置くか。屋外に合鍵を置かない、鍵を見せない・渡さない・写さない、スマートキーは電波を遮断して保管するといった警察の呼びかけを、警視庁・山梨県・鳥取県倉吉警察署・宮城県若柳警察署の公開資料で2026年11月20日に確認して整理しました。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const CHECKED = "2026年11月20日確認";

const SRC = {
  yamanashi: "https://www.pref.yamanashi.jp/documents/75375/kaginokanriwotettei.pdf",
  kurayoshi: "https://www.pref.tottori.lg.jp/secure/1365391/20240809.pdf",
  wakayanagi: "https://www.police.pref.miyagi.jp/wakayanagi/pdf/tiikianzennews04.pdf",
  mpdCar: "https://www.keishicho.metro.tokyo.lg.jp/kurashi/higai/guard/car_bohan.html",
  higashinari: "https://www.city.osaka.lg.jp/higashinari/page/0000430912.html",
};

// 4つの公開資料の呼びかけを、当サイトで「置き場所」の観点に並べ替えたもの
const rows: [string, string, string][] = [
  ["屋外（植木鉢・郵便受け・メーターボックス・玄関マットなど）", "置かない", "倉吉警察署「屋外に合鍵を置かない」、若柳警察署「合鍵を玄関周りに隠さない」"],
  ["鍵そのもの・鍵に刻印された番号", "必要のない人に見せない・渡さない・写真に撮らない", "山梨県の資料（鍵本体のほか、鍵の番号等から合鍵を作製し得る）"],
  ["車のスマートキー（自宅内）", "電波を遮断するケース・金属缶などに入れる。節電モードがあれば設定する", "警視庁「自動車盗難等の防止対策」"],
  ["家族以外に預ける場合", "預け先・本数を決めて記録する。自治体の鍵預かり事業がある地域もある", "大阪市東成区「緊急時安否確認（かぎ預かり）事業」"],
];

const faqs: Faq[] = [
  {
    q: "合鍵を植木鉢の下やメーターボックスに置くのはだめですか？",
    a: "すすめられません。鳥取県の倉吉警察署は侵入窃盗防止の基本として「屋外に合鍵を置かない」こと、宮城県の若柳警察署は「合鍵を玄関周りに隠さない」ことを呼びかけています（" + CHECKED + "）。家族の締め出しに備えるなら、信頼できる親族・知人に預ける、暗証番号式の錠を検討するなど、屋外に置かない方法をとってください。",
  },
  {
    q: "鍵の写真をスマホに保存しておくのは危険ですか？",
    a: "山梨県の資料は、鍵のメーカーや種類によって異なるものの、鍵本体のほか鍵の番号等から合鍵を作製し得るとして、鍵をスマホやデジカメで写して記録しないよう呼びかけています。管理業者を装った者が鍵を借りて刻印の番号から合鍵を作り、侵入した事例も紹介されています（" + CHECKED + "）。",
  },
  {
    q: "車のスマートキーは家のどこに置けばよいですか？",
    a: "警視庁は、スマートキーの電波を悪用する盗難への対策として、電波を遮断する市販の防犯ケースの利用、金属缶に入れる・アルミホイルで包むなどして密閉すること、節電モードがあれば設定して電波の受信待機を止めることを挙げています（" + CHECKED + "）。節電モードの有無と設定方法は車の取扱説明書で確認してください。",
  },
  {
    q: "鍵をなくした可能性があるときは、どうすればよいですか？",
    a: "まず警察に遺失届を出し、住所が分かるものと一緒になくした場合は、錠（シリンダー）の交換を検討してください。賃貸住宅では管理会社・大家への連絡が先です。手順は「鍵をなくしたときの対処」にまとめています。",
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
      crumbs={[{ name: "鍵の保管場所" }]}
      answerLead="鍵の保管場所は「家の外に置かない」「鍵と鍵番号を人に見せない」の2点が基本です。警察の公開資料も、屋外に合鍵を置かないこと、鍵を必要のない人に見せない・渡さない・写真に撮らないことを呼びかけています。車のスマートキーは、家の中でも電波を遮断して保管するよう警視庁が案内しています。"
      answerBody={
        <>
          <p>
            空き巣の対策というと錠の性能に目が向きがちですが、合鍵が玄関の近くにあれば、どれほど防犯性の高い錠でも意味がありません。また、ディンプルキーなどの登録制の鍵でも、刻印された番号から合鍵を作られるおそれがあると、山梨県の資料は注意を促しています。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.kurayoshi}>倉吉警察署「侵入窃盗防止４箇条」</Ext>、<Ext href={SRC.wakayanagi}>若柳警察署「地域安全ニュース」</Ext>、<Ext href={SRC.yamanashi}>山梨県「「鍵」の管理を徹底しましょう！」</Ext>、<Ext href={SRC.mpdCar}>警視庁「自動車盗難等の防止対策」</Ext>（いずれも{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "置き場所ごとの考え方（警察の公開資料から整理）",
          body: (
            <>
              <p>4つの公開資料の呼びかけを、当サイトで置き場所ごとに並べ直しました。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">置き場所・対象</th>
                      <th className="border border-border px-3 py-2 text-left">考え方</th>
                      <th className="border border-border px-3 py-2 text-left">根拠とした資料</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map(([a, b, c]) => (
                      <tr key={a}>
                        <td className="border border-border px-3 py-2 font-medium">{a}</td>
                        <td className="border border-border px-3 py-2">{b}</td>
                        <td className="border border-border px-3 py-2">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                出典：上記の各資料（{CHECKED}）。若柳警察署の資料は、空き巣や忍込みの被害のうち無締り箇所からの侵入が約半数を占めるとして、わずかな時間の外出でも施錠するよう呼びかけています。
              </p>
            </>
          ),
        },
        {
          h2: "合鍵を預けるなら：屋外ではなく「人」か「仕組み」に",
          body: (
            <>
              <p>
                家族の締め出しや、離れて暮らす親の急な体調不良に備えて合鍵を用意する場合は、置き場所ではなく預け先を決めます。
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>近くに住む親族・信頼できる知人に預け、誰に何本預けたかを記録しておく</li>
                <li>自治体の制度を確認する。大阪市東成区は、65歳以上のひとり暮らしの方のかぎを事前に預かり、緊急時に安否確認に使う事業を無料で実施しています（預けるかぎは利用者の負担で作製）</li>
                <li>鍵の受け渡しが多い場合（介護・民泊など）は、キーボックスの運用ルールを決める</li>
                <li>鍵そのものを持たない方法として、暗証番号式・カード式の錠を検討する</li>
              </ul>
              <p>
                安否確認のための鍵預かりは<a href="/anpi-kakunin-kagiake/" className="text-primary underline">安否確認で鍵開けを頼むとき</a>、キーボックスの注意点は<a href="/key-box-kanri/" className="text-primary underline">キーボックスでの鍵管理</a>、暗証番号式の錠は<a href="/genkan-anshou-bangou/" className="text-primary underline">暗証番号式の玄関の鍵</a>にまとめています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.higashinari}>大阪市東成区「東成区緊急時安否確認（かぎ預かり）事業」</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "鍵番号の扱い",
          body: (
            <>
              <p>
                山梨県の資料が紹介している事例では、マンションの管理業者を装った者が「玄関の鍵を点検させてほしい」と住人から鍵を受け取り、刻印された番号をもとにインターネットで合鍵業者に依頼して合鍵を作製し、その住居に侵入しました。資料は、家族等以外の必要のない人に鍵を見せない・渡さない、鍵を写真に撮らないことを対策に挙げています。
              </p>
              <p>
                管理会社や業者を名乗る人に鍵を求められたときは、その場で渡さず、管理会社の代表番号などに自分で電話して確かめてください。鍵番号と合鍵の関係は<a href="/key-number-aikagi/" className="text-primary underline">キーナンバー（鍵番号）で合鍵は作れるか</a>で詳しく説明しています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.yamanashi}>山梨県「「鍵」の管理を徹底しましょう！」</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "車のスマートキーの保管",
          body: (
            <>
              <p>
                警視庁は自動車盗難等の防止対策として、スマートキーの電波を遮断する市販の防犯ケースを使うこと、金属缶に入れる・アルミホイルで包むなどして密閉すること、スマートキーに「節電モード」がある場合は設定して電波の受信待機を止めることを挙げています。玄関の近くにキーを置く習慣がある場合は、置き場所とあわせて見直してください。
              </p>
              <p>
                スペアキーの保管と作り方は<a href="/kuruma-spare-key/" className="text-primary underline">車のスペアキー</a>、イモビライザーの仕組みは<a href="/immobilizer/" className="text-primary underline">イモビライザーとは</a>にまとめています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.mpdCar}>警視庁「自動車盗難等の防止対策」</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
      ]}
      faqTitle="鍵の保管場所のよくある質問"
      faqs={faqs}
      related={[
        { href: "/key-number-aikagi/", label: "鍵番号と合鍵", desc: "番号から合鍵を作れるか" },
        { href: "/key-box-kanri/", label: "キーボックスでの鍵管理", desc: "受け渡しを無人化するときの注意" },
        { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処", desc: "届出と交換の判断" },
        { href: "/akisu-shinnyu-teguchi/", label: "空き巣の侵入手口と対策", desc: "無締りと錠の対策" },
      ]}
    />
  );
}
