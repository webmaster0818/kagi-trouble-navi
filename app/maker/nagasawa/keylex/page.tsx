import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/maker/nagasawa/keylex/";
const TITLE = "キーレックス（長沢製作所）の暗証番号の確認・変更｜シリーズ別の番号の見方と相談先";
const DESC =
  "電気を使わないボタン錠「キーレックス」の記憶番号（暗証番号）の確認方法・変更方法・通り数をシリーズ別にまとめました。" +
  "スペアキーを作れる鍵の品番、注文・不具合の相談先、ハンドルが下を向いて開かないときの考え方も長沢製作所公式（2026年11月4日確認）にもとづいて解説します。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  faq: "https://nagasawa-mfg.co.jp/keylex/about/faq/",
  top: "https://nagasawa-mfg.co.jp/keylex/",
  outage: "https://www.nagasawa-mfg.co.jp/keylex/power-outage/",
};

const CHECKED = "2026年11月4日確認";

const numberRows: [string, string, string][] = [
  ["4000シリーズ", "32,768通り（1〜15桁）", "本体裏側の、横を向いているピンが記憶番号"],
  ["3100シリーズ", "4,096通り（1〜12桁）", "本体裏側の、横を向いているピンが記憶番号"],
  ["2100シリーズ", "16,384通り（1〜14桁）", "本体リセット装置を外し、ロック板の色で確認"],
  ["1100シリーズ", "16,384通り（1〜14桁）", "本体リセット装置を外し、ロック板の色で確認"],
  ["800シリーズ", "4,096通り（1〜12桁）", "本体裏から見えるロックピンの小さな溝の向きで確認"],
  ["500シリーズ", "4,096通り（1〜12桁）", "本体裏から見えるロックピンの小さな溝の向きで確認"],
];

const faqs: Faq[] = [
  {
    q: "キーレックスの暗証番号（記憶番号）はどこで確認できますか？",
    a: "シリーズによって違います。3100・4000シリーズは本体裏側の横を向いているピン、2100・1100シリーズは本体リセット装置を外したときのロック板の色、800・500シリーズは本体裏から見えるロックピンの溝の向きで確認すると長沢製作所は案内しています（" + CHECKED + "）。",
  },
  {
    q: "暗証番号の変更方法はどこで分かりますか？",
    a: "長沢製作所は、シリーズごとの番号変更方法をYouTubeで公開しています（4000・3100・2100/1100・800/500・047シリーズ）。047シリーズは廃番です。",
  },
  {
    q: "「2323」のように同じ数字を2回使った番号にできますか？",
    a: "できません。長沢製作所によると、同じ番号を複数回押すようには登録できず、「2323」は「23」と同じ扱いになります。また、押す順番は問わず、「1342」と登録しても「1234」で解錠できます。",
  },
  {
    q: "キーレックスのスペアキーは作れますか？",
    a: "子鍵の品番が「Y＋数字5桁」または「W＋数字5桁」に当てはまれば製作できると案内されています。長沢製作所は直接取引をしていないため、注文は取引先の商社、KSS（キーレックスサービスショップ）特約店・加盟店、ホームセンターに問い合わせます。",
  },
  {
    q: "ハンドルが下を向いたまま開きません。故障ですか？",
    a: "長沢製作所は、故障ではなく本体の破損を防ぐための安全装置が働いている場合があるとしています。無理に回さず、公式のよくある質問の案内を確認してください。",
  },
  {
    q: "停電するとキーレックスは開かなくなりますか？",
    a: "キーレックスは電池や配線を使わない機械式のボタン錠で、自動施錠の製品も電気を使わず、トリガーが押されることで施錠する仕組みと案内されています。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月4日"
      updatedIso="2026-11-04"
      crumbs={[
        { name: "錠メーカー別ガイド", href: "/maker/" },
        { name: "長沢製作所 キーレックス" },
      ]}
      answerLead="キーレックスの記憶番号（暗証番号）は、シリーズごとに確認する場所が違います。3100・4000は本体裏のピン、2100・1100はロック板の色、800・500はロックピンの溝の向きで分かります。"
      answerBody={
        <>
          <p>
            番号の変更方法は長沢製作所がシリーズ別にYouTubeで公開しています。長沢製作所は直接の取引をしていないため、注文や不具合の相談は、取り付けた業者かKSS特約店・加盟店が窓口です。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.faq}>長沢製作所 キーレックス「よくあるご質問」</Ext>（{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "シリーズ別 記憶番号の通り数と確認する場所",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">シリーズ</th>
                      <th className="border border-border px-3 py-2 text-left">記憶番号の通り数（桁数）</th>
                      <th className="border border-border px-3 py-2 text-left">今の番号を確認する場所</th>
                    </tr>
                  </thead>
                  <tbody>
                    {numberRows.map(([a, b, c]) => (
                      <tr key={a}>
                        <td className="border border-border px-3 py-2 whitespace-nowrap font-bold text-text-primary">{a}</td>
                        <td className="border border-border px-3 py-2">{b}</td>
                        <td className="border border-border px-3 py-2">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                同じ数字は1回しか登録できず（「2323」は「23」と同じ）、押す順番も問いません（「1342」と登録しても「1234」で開く）。2100・1100・800・500シリーズの確認手順の詳細は、各製品の取扱説明書に記載されています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.faq}>長沢製作所 キーレックス「よくあるご質問」</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "番号を忘れたとき・変えたいときに知っておくこと",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>番号の変更方法：長沢製作所がシリーズ別（4000・3100・2100/1100・800/500・047）の動画をYouTubeで公開。047シリーズは廃番</li>
                <li>4000シリーズの「シリンダー切替」と「プラグ切替」：番号の変更にキーを使うのがシリンダー切替、コインなどを使うのがプラグ切替</li>
                <li>「鍵付」の機種：シリンダーが付き、ボタンでもキーでも解錠できる。記憶番号が分からなくなったときなどに緊急解錠ができる</li>
                <li>番号の管理：使用中のキーレックスの記憶番号をアプリで管理できると案内されている</li>
              </ul>
              <p>
                鍵付ではない機種で番号が分からず開けられない場合は、取り付けた業者かKSS特約店に相談します。賃貸や店舗の扉は、先に管理者・オーナーに確認してください。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.faq}>長沢製作所 キーレックス「よくあるご質問」</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "機能の名前と意味（デッドロック・空錠切替）",
          body: (
            <>
              <dl className="space-y-3">
                <div>
                  <dt className="font-bold text-text-primary">デッドロック機能</dt>
                  <dd>ボタンでの解錠を無効にし、キー操作だけで解錠できるようにする機能。営業中はボタンで、閉店後はキーを持つ人だけが開けられるといった使い方ができる</dd>
                </div>
                <div>
                  <dt className="font-bold text-text-primary">空錠切替</dt>
                  <dd>解錠時に暗証番号を押さなくてよくする機能。切り替えは手動で、手順を誤ると故障の原因になるため説明書どおりに操作する。自動施錠の製品の室内側のツマミは空錠切替用（自動施錠両面ボタン・3100表示錠など、空錠切替のない仕様もある）</dd>
                </div>
              </dl>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.faq}>長沢製作所 キーレックス「よくあるご質問」</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "スペアキー・注文・不具合の相談先",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>スペアキー：子鍵の品番が「Y＋数字5桁」「W＋数字5桁」なら製作可能</li>
                <li>注文先：長沢製作所は直接取引をしていないため、取引先の商社、KSS特約店・加盟店、ホームセンターに問い合わせる</li>
                <li>不具合：取り付けた業者、またはKSS特約店に相談する。KSS特約店は長沢製作所の講習会を受講して認定を受けた鍵店で、取付工事もできる</li>
                <li>施工費：長沢製作所は施工をしていないため見積もりは出せず、KSS特約店・加盟店か鍵屋に問い合わせる</li>
                <li>同じ製品への交換：製品ラインナップで同等品を確認し、見つからなければ製品の写真を添えて公式の問い合わせフォームで相談する</li>
              </ul>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.faq}>長沢製作所 キーレックス「よくあるご質問」</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "電気を使わない仕組みと非常時の開け方",
          body: (
            <>
              <p>
                キーレックスは電池や配線を使わない機械式のボタン錠で、配線工事や電池交換が要らず、停電でも作動します。キーレックス4000シリーズには「非常開装置付」の仕様があり、本体下部のカバーを割り取って中の解除レバーをスライドすると、暗証番号や鍵がなくても扉を開けられます。割ったカバーは再利用できませんが、部品だけ購入して交換できます。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.top}>長沢製作所「キーレックス」</Ext>・<Ext href={SRC.outage}>「停電したら、その扉はどうなる？」</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
      ]}
      cta={{
        h2: "番号が分からず開けられないときは",
        text: "取り付けた業者が分からない場合や急いで開ける必要がある場合は、鍵業者に相談できます。依頼前に料金と対応を比べてください。",
        links: [
          { href: "/agents/", label: "鍵業者の比較一覧 →" },
          { href: "/shimedashi/", label: "締め出されたときの対処" },
        ],
      }}
      faqTitle="キーレックスのよくある質問"
      faqs={faqs}
      related={[
        { href: "/maker/", label: "錠メーカー別ガイド", desc: "各社の合鍵の窓口を一覧で比較" },
        { href: "/maker/taiyou-nensu/", label: "錠の耐用年数と保守点検制度", desc: "一般錠10年・電気錠7年の考え方" },
        { href: "/tenpo-office-kagi-kanri/", label: "店舗・事務所の鍵管理", desc: "従業員の入れ替わりと鍵" },
        { href: "/smart-lock/", label: "スマートロックの選び方", desc: "電池式の鍵との違い" },
      ]}
    />
  );
}
