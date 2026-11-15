import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/samuratchi-koukan/";
const TITLE = "サムラッチ錠の交換｜古い玄関のサムラッチから替えられる取替錠の扉厚・対応品番と、サムターンだけ替える方法";
const DESC =
  "サムラッチ錠の交換で確かめることを、長沢製作所のカタログとLIXILの取付け説明書で2026年11月15日に確認しました。" +
  "取替錠3種類の標準扉厚、対応するMIWA・GOAL・WEST・ALPHAの既存品番、切欠穴の加工が必要なケース、サムターンだけを防犯型にする部品について。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const CHECKED = "2026年11月15日確認";

const SRC = {
  kodai: "https://www.nagasawa-mfg.co.jp/cms/wp-content/themes/nagasawa/assets/catalog/pdf/catalog_lever_kodai.pdf",
  lixilThumb: "https://assets.lixil.com/content/dam/lixil-assets/manual/201604/MAH-591F.pdf",
};

// 長沢製作所 カタログ「古代・古代 NEO（他社取替対応錠）」P.62〜66 の記載を当サイトで1表にまとめたもの
const torikae: [string, string, string, string, string][] = [
  ["サムラッチケースロック取替錠", "924065", "32〜42mm", "—", "CTS錠"],
  ["サムラッチ取替錠 ワンロック仕様", "924504", "30〜40mm", "40〜50mm", "TU-60錠"],
  ["サムラッチ空錠取替錠", "9216000", "27〜37mm", "37〜47mm", "T-60（51）空錠"],
];

const existing: [string, string][] = [
  ["MIWA", "THM＊30B-1（カエデ）、THM＊35B-1（ケヤキ）、THM＊36B-1（キリ）、THM＊37PB-1（ニレ）"],
  ["GOAL", "CT-5CHA（シャメール）、CT-5NIC（ニース）、CT-5OAK（オーク）"],
  ["WEST", "813（ソフィア）、815（グロスター）、817（クレタ）、廃番（ロードスター）、その他（旧G-5500タイプ）"],
  ["ALPHA", "3690EB（エジンバラ）、3690FL（フローレンス）、その他（3690／3680タイプ）は切欠穴加工が必要"],
];

const faqs: Faq[] = [
  {
    q: "サムラッチ錠は、今の扉に別のメーカーの錠を付けて交換できますか？",
    a: "長沢製作所は、古代シリーズの他社取替対応錠について、既存のサムラッチからの取替えに対応するとしています。カタログには、取替えに対応する既存品としてMIWA・GOAL・WEST・ALPHAの品番が掲載されています。切欠穴を隠す取替プレートがセットされていますが、一部の品番は切欠穴の追加加工が必要です（" + CHECKED + "）。",
  },
  {
    q: "扉の厚さはどのくらいなら取替錠が付きますか？",
    a: "長沢製作所のカタログでは、標準扉厚はサムラッチケースロック取替錠（924065）が32〜42mm、サムラッチ取替錠 ワンロック仕様（924504）が30〜40mm、サムラッチ空錠取替錠（9216000）が27〜37mmです。924504と9216000には特注扉厚の設定があります（" + CHECKED + "）。",
  },
  {
    q: "サムラッチ錠は何年くらいで交換するものですか？",
    a: "長沢製作所のカタログには、日本ロック工業会が錠の耐用年数を10年と定めていること、耐用年数は錠の基本性能を保守・点検により維持できる期間で取替えの時期を表すものであることが記載されています。同社のCTS錠は、ラッチボルトの平らな面に赤いラインが見えたら取替えのサインで、専門の業者に依頼して速やかに交換するよう案内しています（" + CHECKED + "）。",
  },
  {
    q: "錠全体を替えずに、防犯性だけ上げる方法はありますか？",
    a: "LIXILは、サムラッチハンドルのドアにも使える「取替用セキュリティサムターンユニット」の取付け説明書を公開しています。室内側のつまみ（サムターン）を取り外せる部品で、施解錠の操作時以外は抜いておくよう案内しています。対象はLIXILのドアで、取付け説明書の使い分け表にプレナス（レバー・サムラッチ）などのドア名が載っています（" + CHECKED + "）。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月15日"
      updatedIso="2026-11-15"
      crumbs={[{ name: "サムラッチ錠の交換" }]}
      answerLead="サムラッチ錠の交換は、扉の厚さと、いま付いている錠のメーカー・品番を確かめてから取替錠を選びます。長沢製作所は、既存のサムラッチから取り替えられる取替錠を3種類カタログに掲載しており、MIWA・GOAL・WEST・ALPHAの対応品番と、切欠穴の加工が必要になるケースを示しています。"
      answerBody={
        <>
          <p>
            サムラッチ錠の品番は、扉の側面にある錠のフロント板などに刻印されていることがあります。扉厚が取替錠の標準扉厚に入るか、既存の品番が対応表にあるかを確かめ、合わない場合は錠前店やメーカーに相談してください。錠の内部が傷んでいる場合や、扉に追加の穴加工が必要な場合は、専門の業者に依頼します。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.kodai}>長沢製作所 レバーハンドル総合カタログ「古代・古代 NEO（玄関錠：他社取替対応錠）」P.62〜66</Ext>（{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "サムラッチから替えられる取替錠3種類（長沢製作所 古代シリーズ）",
          body: (
            <>
              <p>長沢製作所のカタログに掲載されている、既存のサムラッチからの取替えに対応する取替錠を、当サイトで1つの表にまとめました。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">品名</th>
                      <th className="border border-border px-3 py-2 text-left">品番</th>
                      <th className="border border-border px-3 py-2 text-left">標準扉厚</th>
                      <th className="border border-border px-3 py-2 text-left">特注扉厚</th>
                      <th className="border border-border px-3 py-2 text-left">使用錠</th>
                    </tr>
                  </thead>
                  <tbody>
                    {torikae.map(([n, no, t, s, l]) => (
                      <tr key={no}>
                        <td className="border border-border px-3 py-2 font-medium">{n}</td>
                        <td className="border border-border px-3 py-2">{no}</td>
                        <td className="border border-border px-3 py-2">{t}</td>
                        <td className="border border-border px-3 py-2">{s}</td>
                        <td className="border border-border px-3 py-2">{l}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>シリンダーはNFシリンダーで、ディンプルキーが4本付いています（カタログの記載）。</li>
                <li>切欠穴を隠す取替プレートがセットされています。取替プレートのみの販売は行っていないと記載されています。</li>
                <li>サムラッチ空錠取替錠は鍵のない錠（空錠）で、室内側は押しながら回して施解錠する不正解錠対策サムターンです。</li>
              </ul>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.kodai}>長沢製作所 レバーハンドル総合カタログ「古代・古代 NEO」P.62〜66</Ext>（{CHECKED}）。「—」はカタログに特注扉厚の記載がないものです。仕様は変わることがあるため、注文前にメーカーまたは販売店で確認してください。
              </p>
            </>
          ),
        },
        {
          h2: "取替えに対応する既存のサムラッチ錠の品番",
          body: (
            <>
              <p>同カタログの「取替可能商品一覧（既存サムラッチからの取替えにも対応）」に掲載されている既存品は次のとおりです。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">既存錠のメーカー</th>
                      <th className="border border-border px-3 py-2 text-left">掲載されている品番（商品名）</th>
                    </tr>
                  </thead>
                  <tbody>
                    {existing.map(([m, l]) => (
                      <tr key={m}>
                        <td className="border border-border px-3 py-2 font-medium">{m}</td>
                        <td className="border border-border px-3 py-2">{l}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                このほか、MIWA／蔵王（TRAHPC95B）・天城（TRAHPC96B）・平安（TPMK82B）・天平（TPMK83B）は切欠穴加工を追加することで取付けができ、川口技研／イタリア用はフロント板を別途注文するよう記載されています。一覧にない錠や、扉に穴を追加する加工が必要な場合は、錠前店に相談してください。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.kodai}>長沢製作所 レバーハンドル総合カタログ「古代・古代 NEO」取替可能商品一覧</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "交換の時期の目安と、業者に依頼する場面",
          body: (
            <>
              <p>
                長沢製作所のカタログは、日本ロック工業会が錠の耐用年数を10年と定めていることを紹介し、耐用年数を「取替えの時期を表すもの」と説明しています。同社のCTS錠は、内部部品が破損しても通常操作で施解錠できる設計で、ラッチボルトの平らな面に赤いラインが見えたら取替えのサインとして、専門の業者に依頼して速やかに交換するよう案内しています。
              </p>
              <p>
                鍵の寿命の考え方は<a href="/kagi-jumyou/" className="text-primary underline">鍵の寿命は何年？</a>、錠の形の見分け方は<a href="/joumae-type-zukan/" className="text-primary underline">錠前タイプ図鑑</a>、業者の選び方は<a href="/kagiya-erabikata/" className="text-primary underline">鍵屋・鍵業者の選び方</a>にまとめています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.kodai}>長沢製作所 レバーハンドル総合カタログ「古代・古代 NEO」CTS錠の説明</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "錠ごと替えずに、室内側のサムターンだけ防犯型にする（LIXILのドア）",
          body: (
            <>
              <p>
                LIXILは「〈レバーハンドル、サムラッチハンドル用〉取替用セキュリティサムターンユニット」の取付け説明書を公開しています。室内側のつまみを取り外せるようにする部品で、施解錠の操作時以外はつまみを必ず抜くよう案内しています。つまみを抜き差しするときは下部のボタンを押したまま行い、押さずに抜き差しすると錠本体などが破損するおそれがあるとしています。
              </p>
              <p>
                取付け説明書の使い分け表には、プレナス（レバー・サムラッチ）、クリエラ19（サムラッチ）、ボイーズ（レバー・サムラッチ）、プレナスフラッシュ（レバー・サムラッチ）などのドア名が載っています。説明書は「必ず取付けされる方にお渡しください」としており、取付けを人に頼む場合は説明書も一緒に渡します。サムターン回しへの対策の考え方は<a href="/thumb-turn-taisaku/" className="text-primary underline">サムターン回しの対策</a>を参照してください。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.lixilThumb}>LIXIL 取付け説明書 MAH-591F「取替用セキュリティサムターンユニット」（2016年4月1日発行）</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
      ]}
      faqTitle="サムラッチ錠の交換のよくある質問"
      faqs={faqs}
      related={[
        { href: "/joumae-type-zukan/", label: "錠前タイプ図鑑", desc: "インテグラル錠・箱錠の見分け方" },
        { href: "/cylinder-koukan-diy/", label: "シリンダー交換をDIYで行う方法と注意点", desc: "規格確認と採寸" },
        { href: "/thumb-turn-taisaku/", label: "サムターン回しの対策", desc: "室内側のつまみの防犯" },
        { href: "/kagi-jumyou/", label: "鍵の寿命は何年？", desc: "交換時期の目安" },
        { href: "/doorknob-koukan/", label: "ドアノブ・ラッチの故障と交換", desc: "症状の見方" },
      ]}
    />
  );
}
