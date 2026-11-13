import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/genkan-anshou-bangou/";
const TITLE = "暗証番号式の玄関の鍵（テンキー錠）｜美和ロック・LIXILの公式資料で見る仕組みと使うときの注意";
const DESC =
  "暗証番号で開ける玄関の鍵（テンキー錠）の仕組みと注意点を、美和ロックの用語集・テンキーユニットの資料と、" +
  "LIXIL FamiLockの説明書で2026年11月13日に確認しました。のぞき見への備え、番号を知られたときの変更、カギの携帯について。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const CHECKED = "2026年11月13日確認";

const SRC = {
  miwaGlossary: "https://www.miwa-lock.co.jp/tec/support/glossary/series/3.html",
  miwaTku: "https://www.miwa-lock.co.jp/tec/products/pdf/TKU003_2020.pdf",
  lixilGuide: "https://assets.lixil.com/content/dam/lixil-assets/manual/202306/MAP-957.pdf",
  lixilInstall: "https://assets.lixil.com/content/dam/lixil-assets/manual/202403/MAM-982B.pdf",
};

const specs: [string, string][] = [
  ["用途", "住宅・マンション・寮・ビル・病院など"],
  ["暗証番号", "数字2桁〜12桁で9種まで登録できる"],
  ["番号を知られたとき", "その番号を無効にして新しい番号を登録できる"],
  ["管理用暗証番号", "登録・抹消の操作にパスワードロックをかける番号（数字4桁〜12桁で1種）。通常の照合には使えない"],
  ["停電したとき", "暗証番号は消えない"],
  ["のぞき見への備え", "使うたびに数字の位置が変わる表示。設定で数字の配列も毎回変わるランダム表示にできる。カバー付の型はのぞき見防止機能つき"],
  ["番号を続けて間違えたとき", "5回連続で間違えると電子音の警報が10秒鳴り、その後3分間は操作できない（設定で解除可）"],
  ["つなぐ機器", "照合結果を接点で出力する。電気錠・自動ドア・シャッターなどの制御には、接点で制御できる制御盤が必要"],
];

const faqs: Faq[] = [
  {
    q: "暗証番号を家族以外に知られてしまったら、どうすればよいですか？",
    a: "美和ロックのテンキーユニット（TKU-003シリーズ）は、他人に暗証番号を知られた場合でも、その番号を無効にして新しい番号を登録できるとしています。" +
      "お使いの製品の取扱説明書で変更方法を確認し、分からなければ施工した会社かメーカーに相談してください（" + CHECKED + "）。",
  },
  {
    q: "停電すると、登録した暗証番号は消えますか？",
    a: "美和ロックのテンキーユニット（TKU-003シリーズ）は、停電時でも暗証番号は消えないとしています。" +
      "ただし電気錠そのものは停電すると電気では動かないため、停電時の錠の動き方は電気錠の仕組みのページを確認してください（" + CHECKED + "）。",
  },
  {
    q: "今の玄関の鍵を、暗証番号式に取り替えられますか？",
    a: "美和ロックの用語集は、テンキーロックについて、従来の鍵から取り替える際にはドアの追加加工が必要で、近くのSD（サービス代行店）に相談するよう案内しています（" + CHECKED + "）。",
  },
  {
    q: "暗証番号で開けられるなら、カギは持ち歩かなくてよいですか？",
    a: "LIXILのFamiLockのかんたん設定ガイドは、機器の故障や電池切れなどで電動の解錠操作ができない場合もあるため、必ずカギも持って出かけるよう案内しています（" + CHECKED + "）。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月13日"
      updatedIso="2026-11-13"
      crumbs={[{ name: "暗証番号式の玄関の鍵" }]}
      answerLead="暗証番号式の玄関の鍵（テンキーロック）は、0から9の数字ボタンで暗証番号を入力して施錠・解錠する電気錠の一つです。美和ロックは、鍵の紛失・盗難・複製による不正な解錠を防げる一方、のぞき見などで番号を知られると容易に解錠されるおそれがあるとして、入力のたびに数字の配置が変わるランダムテンキー式を勧めています。"
      answerBody={
        <>
          <p>
            番号を知られたときは、番号を無効にして新しい番号を登録できる製品があります。電気で動く錠のため、LIXILは機器の故障や電池切れに備えて、カギも持って出かけるよう案内しています。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.miwaGlossary}>美和ロック「錠と防犯の用語集」テンキーロック</Ext>、<Ext href={SRC.miwaTku}>美和ロック「TKU-003 SERIES マジカルテンキーユニット」（PDF）</Ext>、<Ext href={SRC.lixilGuide}>LIXIL「FamiLock AC100V式 かんたん設定ガイド」（PDF）</Ext>（いずれも{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "テンキーロックとは：美和ロックの用語集の説明",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>電気錠の一つで、0から9までの10個の数字ボタンで暗証番号を入力して施錠・解錠する。</li>
                <li>鍵の紛失、盗難、複製による不正な解錠を防ぐことができる。</li>
                <li>暗証番号ののぞき見などで他人に知られると、容易に解錠されるおそれがある。</li>
                <li>入力のたびに数字の配置が変わるランダムテンキー式を勧めている。テンキー表面の磨耗や、手の動きから番号を推測されることを防げるため。</li>
                <li>従来の鍵から取り替えるときは、ドアの追加加工が必要。近くのSD（サービス代行店）に相談する。</li>
              </ul>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.miwaGlossary}>美和ロック「錠と防犯の用語集」テンキーロック</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "製品の例：美和ロックのテンキーユニット（TKU-003シリーズ）",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">項目</th>
                      <th className="border border-border px-3 py-2 text-left">美和ロックの資料の記載</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specs.map(([k, v]) => (
                      <tr key={k}>
                        <td className="border border-border px-3 py-2 font-medium">{k}</td>
                        <td className="border border-border px-3 py-2">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.miwaTku}>美和ロック「TKU-003 SERIES マジカルテンキーユニット」（PDF）</Ext>（{CHECKED}）。製品ごとに機能は違うため、お使いの製品は取扱説明書で確認してください。
              </p>
            </>
          ),
        },
        {
          h2: "戸建ての玄関ドアの例：LIXIL FamiLockのシークレットスイッチ",
          body: (
            <>
              <p>
                LIXILの玄関ドアの電気錠「FamiLock（AC100V式）」では、暗証番号で操作するシークレットスイッチをオプション品として接続できます。かんたん設定ガイドは、シークレットスイッチがある場合、玄関キーの登録に続けて暗証番号を登録するよう案内しており、コントローラーユニットの登録モードで4ケタの暗証番号を2回入力して登録します。
              </p>
              <p>
                工事店向けの取付け説明書は、防犯のため、引き渡し後すみやかにシークレットスイッチの暗証番号を登録するよう求めています。かんたん設定ガイドは、機器の故障や電池切れなどで電動の解錠操作ができない場合もあるため、必ずカギも持って出かけるよう案内しています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.lixilGuide}>LIXIL「FamiLock AC100V式 かんたん設定ガイド」（PDF）</Ext>、<Ext href={SRC.lixilInstall}>LIXIL「FamiLock AC100V式 取付け説明書」（工事店さま用・PDF）</Ext>（いずれも{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "電気を使わないボタン錠・停電時の動きは別ページで",
          body: (
            <p>
              電池や配線を使わない機械式のボタン錠（長沢製作所のキーレックス）の暗証番号の確認・変更は<a href="/maker/nagasawa/keylex/" className="text-primary underline">キーレックスの暗証番号の確認・変更</a>に、停電したときに電気錠が施錠・解錠のどちらになるかは<a href="/denkijou-shikumi/" className="text-primary underline">電気錠の仕組み</a>に、電池式の電子錠で締め出されたときの対処は<a href="/denshijou-denchigire/" className="text-primary underline">電子錠の電池切れ</a>にまとめています。電気錠の耐用年数の目安は<a href="/maker/taiyou-nensu/" className="text-primary underline">錠の耐用年数と保守点検制度</a>で説明しています。
            </p>
          ),
        },
      ]}
      faqTitle="暗証番号式の玄関の鍵のよくある質問"
      faqs={faqs}
      related={[
        { href: "/denkijou-shikumi/", label: "電気錠の仕組み", desc: "停電したときの3つの動き方" },
        { href: "/maker/nagasawa/keylex/", label: "キーレックスの暗証番号", desc: "電気を使わないボタン錠" },
        { href: "/genkan-cardkey/", label: "玄関のカードキー", desc: "なくしたときのメーカー別の案内" },
        { href: "/denshijou-denchigire/", label: "電子錠の電池切れ", desc: "締め出されたときの対処" },
        { href: "/smart-lock/", label: "スマートロックの選び方", desc: "スマホ以外の解錠手段" },
      ]}
    />
  );
}
