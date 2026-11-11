import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/denkijou-shikumi/";
const TITLE = "電気錠の仕組み｜停電したときの3つの動き方と、耐用年数7年・保守点検制度";
const DESC =
  "電気錠は、電気的に施錠・解錠する機構を組み込み、離れた操作盤やカード・テンキー・リモコンで動かす錠です。" +
  "停電時に施錠・状態保持・解錠のどれになるか、場所ごとの使われ方、耐用年数の目安と保守点検制度を2026年11月11日に美和ロックの公式情報で確認しました。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  gloss: "https://www.miwa-lock.co.jp/tec/support/glossary/series/2.html",
  ten: "https://www.miwa-lock.co.jp/tec/support/glossary/series/3.html",
  card: "https://www.miwa-lock.co.jp/tec/support/glossary/series/4.html",
  remo: "https://www.miwa-lock.co.jp/tec/support/glossary/series/5.html",
  teiden: "https://www.miwa-lock.co.jp/tec/support/teiden_info.html",
  life: "https://www.miwa-lock.co.jp/tec/support/maintenance.html",
};

const modes: [string, string, string][] = [
  ["停電時に施錠する", "停電すると施錠し、電気的な操作はできなくなる。外からはキー、内からはサムターンかハンドルで解錠し、扉の開閉で再び施錠する。", "オフィスのIDカードの扉、通用口、門扉に多い"],
  ["停電直前の状態を保持する", "停電したときの施錠・解錠の状態のまま。停電中はキーやサムターンで施錠・解錠する。", "マンションの住戸玄関、タイマーで解錠・施錠を切り替える事務所の扉に多い"],
  ["停電時に解錠する", "停電すると解錠する。停電中はキーで施錠できないため、閉鎖が必要なときは電気錠以外の手段で通路を封鎖する。", "非常口の扉、門扉に多い"],
];

const faqs: Faq[] = [
  {
    q: "電気錠とスマートロックは同じものですか？",
    a: "同じではありません。美和ロックの用語集は、電気錠を「カギを遠隔操作できるように、電気的に施解錠をする機構を組み込んだロックシステム」と説明し、ドアとオンラインで結ばれた操作盤のボタンで作動させるとしています（2026年11月11日確認）。後付けで電池で動くスマートロックについては、スマートロックの基礎知識のページで説明しています。",
  },
  {
    q: "停電するとマンションの玄関は開かなくなりますか？",
    a: "美和ロックは、住戸玄関の電気錠の多くは停電時に直前の状態を保持し、電気錠は作動しなくなるため、キーで施錠・解錠するよう案内しています。共用エントランスのキースイッチ・ノンタッチキー・リモコンキーや、各住戸インターホンの解錠スイッチも停電時には機能しません。電池式の錠前は停電時にも動作します（2026年11月11日確認）。",
  },
  {
    q: "自宅や会社の電気錠が停電時にどう動くか、どう調べればよいですか？",
    a: "美和ロックは、電気錠の型番を調べてカタログで確認するか、制御盤の電源を切って確かめる方法を案内しています。電源を切って確かめるときは、制御盤側と扉側の2人で作業し、閉め出されないよう注意するよう求めています。制御盤が他社製の場合は、停電時の動作が異なることがあります（2026年11月11日確認）。",
  },
  {
    q: "電気錠は何年くらいで交換を考えるものですか？",
    a: "日本ロック工業会は錠の耐用年数を、建物の引き渡し後または購入後から一般錠10年、電気錠7年としています。電気錠には制御器やリーダーなども含まれます。これは保守・点検で基本性能を維持できる取り替えまでの目安で、製品の保証（無償修理）期間とは異なります（美和ロックの案内、2026年11月11日確認）。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月11日"
      updatedIso="2026-11-11"
      crumbs={[{ name: "電気錠の仕組み" }]}
      answerLead="電気錠は、電気的に施錠・解錠する機構を組み込んだ錠で、ドアとオンラインで結ばれた操作盤や、カード・テンキー・リモコンなどの認証装置と組み合わせて動かします。停電すると電気では動かず、錠の種類によって「施錠する」「直前の状態を保持する」「解錠する」のいずれかになります。"
      answerBody={
        <>
          <p>
            美和ロックの用語集は、電気錠は離れた場所から施錠・解錠やドアの開閉を確認できるため、各種のセンサーを組み合わせたセキュリティシステムに応用されていると説明しています。一方で、電気錠本体は水の侵入を排除する構造ではないため、雨がかかる屋外には勧めておらず、屋外に面したドアでは実効耐用年数が短くなるとしています。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.gloss}>美和ロック「錠と防犯の用語集：電気錠」</Ext>、<Ext href={SRC.teiden}>美和ロック「電気錠に関する注意事項」</Ext>（いずれも2026年11月11日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "組み合わせる認証装置：テンキー・カード・リモコン",
          body: (
            <>
              <p>美和ロックの用語集は、電気錠と組み合わせる認証装置を次のように説明しています。</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>テンキーロック：</strong>0から9までの数字ボタンで暗証番号を入力して施錠・解錠する電気錠の一つ。鍵の紛失・盗難・複製による不正な解錠を防げる一方、のぞき見で暗証番号を知られるおそれがあり、入力のたびに数字の配置が変わるランダムテンキー式を勧めています。
                </li>
                <li>
                  <strong>カードロック：</strong>カードのID情報を電気的に読み取る認証装置で、磁気カード・ICカード・バーコードなどの方式があります。紛失しても登録データの変更で対応でき、誰がいつ入退室したかを管理する装置を併設できるとしています。
                </li>
                <li>
                  <strong>リモコンキーロック：</strong>リモコンキーの電波を受信器（または制御器）が受け、ID照合の結果を制御盤に出して電気錠や自動ドアを動かします。紛失したリモコンキーだけを無効にできるとしています。
                </li>
              </ul>
              <p>
                いずれも従来の鍵から取り替えるときはドアの追加加工が必要で、美和ロックはサービス代行店（SD）への相談を案内しています。住宅の玄関のカードキーは<a href="/genkan-cardkey/" className="text-primary underline">玄関のカードキー</a>で扱っています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.ten}>美和ロック「用語集：テンキーロック」</Ext>、<Ext href={SRC.card}>同「カードロック」</Ext>、<Ext href={SRC.remo}>同「リモコンキーロック」</Ext>（いずれも2026年11月11日確認）
              </p>
            </>
          ),
        },
        {
          h2: "停電したときの3つの動き方",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">種類</th>
                      <th className="border border-border px-3 py-2 text-left">停電中の動き</th>
                      <th className="border border-border px-3 py-2 text-left">多く使われる場所（美和ロックの案内）</th>
                    </tr>
                  </thead>
                  <tbody>
                    {modes.map(([k, d, w]) => (
                      <tr key={k}>
                        <td className="border border-border px-3 py-2 font-medium whitespace-nowrap">{k}</td>
                        <td className="border border-border px-3 py-2">{d}</td>
                        <td className="border border-border px-3 py-2">{w}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                美和ロックは、電磁ロックは「通電時施錠」の仕様でキーで操作する機構を持たないため、停電中は施錠できないとしています。また、停電補償機能のある制御盤では、非常口の電気錠は停電補償時間のあいだ施錠を保ち、その後解錠するとしています。停電前に電気錠設備の電源を切るなどの準備は不要で、多くの人が通る扉には「停電中は解錠の手段が変わる」ことを扉の近くに掲示するよう勧めています。
              </p>
              <p className="text-xs text-text-muted">出典：<Ext href={SRC.teiden}>美和ロック「電気錠に関する注意事項」</Ext>（2026年11月11日確認）</p>
            </>
          ),
        },
        {
          h2: "耐用年数の目安と保守点検制度",
          body: (
            <>
              <p>
                美和ロックの案内によると、日本ロック工業会（JLMA）は錠の耐用年数を一般錠10年、電気錠7年（電気錠・制御器・リーダー等を含む）としています。あわせて日本ロック工業会と日本ロックセキュリティ協同組合は、2012年6月9日に錠の保守点検制度を始めました。保守点検の対象は、利用者による保守が難しく老朽化のおそれが高い「避難経路にある錠」と「全ての電気錠」で、申込者を対象に錠メーカーまたは同組合の加盟店が定期的に訪問して点検します。
              </p>
              <p>
                各メーカーの耐用年数の案内は<a href="/maker/taiyou-nensu/" className="text-primary underline">錠の耐用年数と保守点検制度</a>にまとめています。電池で動く錠の電池切れは<a href="/denshijou-denchigire/" className="text-primary underline">電子錠の電池切れ</a>を参照してください。
              </p>
              <p className="text-xs text-text-muted">出典：<Ext href={SRC.life}>美和ロック「錠の耐用年数と保守点検制度について」</Ext>（2026年11月11日確認）</p>
            </>
          ),
        },
      ]}
      cta={{
        h2: "電気錠の不具合や交換を相談するときは",
        text: "電気錠は錠前・制御盤・認証装置の組み合わせで動くため、錠前と制御盤の品番を確認してから、設置したメーカーや管理会社に相談すると話が早く進みます。",
        links: [
          { href: "/smart-lock/", label: "スマートロックの基礎知識 →" },
          { href: "/agents/", label: "鍵業者を比較する" },
        ],
      }}
      faqTitle="電気錠の仕組みのよくある質問"
      faqs={faqs}
      related={[
        { href: "/smart-lock/", label: "スマートロックの基礎知識", desc: "後付けで電子錠化する選択肢" },
        { href: "/genkan-cardkey/", label: "玄関のカードキー", desc: "住宅の玄関で使うカードキーの仕組み" },
        { href: "/denshijou-denchigire/", label: "電子錠の電池切れ", desc: "電池式の錠が開かないときの対処" },
        { href: "/maker/taiyou-nensu/", label: "錠の耐用年数と保守点検制度", desc: "一般錠10年・電気錠7年" },
        { href: "/autolock-shimedashi-yobou/", label: "オートロックマンションの締め出し予防策", desc: "共用玄関と住戸玄関の備え" },
      ]}
    />
  );
}
