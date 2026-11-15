import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/autolock-shurui/";
const TITLE = "オートロックの種類｜マンションの共用玄関・玄関ドアの自動施錠・後付けスマートロックの違いと、LIXIL・YKK APの自動施錠の比較";
const DESC =
  "オートロックと呼ばれる仕組みを3つに分け、玄関ドアの自動施錠をLIXIL・YKK APの公式資料で2026年11月15日に確認しました。" +
  "自動施錠の初期設定、解錠後にドアを開けなかったときの再施錠までの秒数、サムターンで開けたときの動き、電池式とAC100V式の違い、締め出しの注意点について。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const CHECKED = "2026年11月15日確認";

const SRC = {
  lixilBattery: "https://assets.lixil.com/content/dam/lixil-assets/manual/202306/MAP-954.pdf",
  lixilAc: "https://assets.lixil.com/content/dam/lixil-assets/manual/202306/MAP-955.pdf",
  ykkAuto: "https://faq.ykkap.co.jp/faq_detail.html?id=9139",
  ykkTimer: "https://faq.ykkap.co.jp/faq_detail.html?id=8498",
};

// LIXIL・YKK AP の公式資料を同じ項目でそろえた比較（当サイト作成）
const compare: [string, string, string][] = [
  ["自動施錠の切替え", "ドアの自動施錠切替えスイッチでON／OFF。ONの場合、電気的に解錠した後のドアの開閉で自動施錠", "自動施錠の設定は出荷時OFF。屋外側から電子キー（リモコンキー・タグキー・スマートフォン）で解錠した後に自動で施錠する機能"],
  ["解錠したのにドアを開けなかったとき", "しめ忘れ防止機能：30秒後に自動施錠", "タイマー施錠（誤操作防止）機能：25秒以内にドアが開かなければ自動で施錠。下部錠刻印【EC-Y7】は25秒または50秒に設定可（出荷時25秒）。OFFにはできない"],
  ["室内側のつまみ（サムターン）で開けたとき", "シリンダー・サムターンを手で回して施解錠した場合は、しめ忘れ防止機能を含め自動施錠しない", "標準仕様では、つまみで解錠してドアを開けても自動では施錠されず、施錠操作が必要"],
  ["2つの錠の扱い", "連動施錠ON：上のサムターン（またはシリンダー）を手で施錠すると下のサムターンも自動で施錠。不正解錠防止機能：1つめの解錠から20秒以内に2つめを解錠しないと再ロック", "ピッキング防止機能：一方を解錠してから50秒以内にもう一方を解錠してドアを開けないと再び自動で施錠。OFFにはできない"],
];

const faqs: Faq[] = [
  {
    q: "戸建ての玄関ドアの電気錠は、ドアを閉めれば必ず鍵がかかりますか？",
    a: "製品と設定によります。YKK APは、スマートドアはマンションやホテルのドアでイメージされるオートロックにはならないとしています。自動施錠の設定は出荷時OFFで、ONにしても、室内からつまみで解錠してドアを開けた場合は自動では施錠されません。LIXILのFamiLockも、シリンダーやサムターンを手で回して解錠した場合は自動施錠しないと取扱説明書に記載しています（" + CHECKED + "）。",
  },
  {
    q: "鍵を開けたのに、しばらくしたら勝手に鍵がかかりました。故障ですか？",
    a: "故障ではない可能性があります。LIXILのFamiLock（電池式）は、電気的に解錠したあとドアを開けないと30秒後に自動施錠する「しめ忘れ防止機能」があります。YKK APのスマートコントロールキーは、電子キーで解錠してから25秒以内にドアが開かなかった場合、誤操作として自動的に施錠します（" + CHECKED + "）。",
  },
  {
    q: "自動施錠で締め出されないために、何に気をつければよいですか？",
    a: "LIXILの取扱説明書は、自動施錠ONの場合、帰宅時に荷物と一緒に玄関キーを室内に置いてもう一度外に出ないよう注意しています。ドアが閉まり自動施錠され、締め出されるおそれがあるためです。また、停電時や故障など万が一に備えて、カギ（シリンダー用の鍵）も携帯するよう案内しています（" + CHECKED + "）。",
  },
  {
    q: "電池式とAC100V式（電気式）では何が違いますか？",
    a: "LIXILのFamiLock 電池式はアルカリ乾電池単3形8本で作動し、電池寿命は1日10回の使用で約1年と記載されています。AC100V式は電源につないで使う方式で、取扱説明書はサムターンの作動途中で停電となった場合は手動でサムターンを回し、完全に施錠または解錠するよう注意しています（" + CHECKED + "）。",
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
      crumbs={[{ name: "オートロックの種類" }]}
      answerLead="「オートロック」と呼ばれる仕組みは、マンションの共用玄関のオートロック、戸建て住宅などの玄関ドアに組み込まれた電気錠・電子錠の自動施錠機能、後付けのスマートロックのオートロック機能の3つに分けられます。玄関ドアの自動施錠は、ドアを閉めれば必ず鍵がかかるとは限りません。LIXIL・YKK APとも、室内側のつまみで開けた場合は自動では施錠されないと案内しています。"
      answerBody={
        <>
          <p>
            YKK APは、スマートドアについて「マンションやホテルのドアでイメージされるオートロック」にはならないと説明しています。自動施錠は、屋外側から電子キーで解錠した後に施錠する機能で、出荷時はOFFです。どの動き方になるかは、メーカー・機種・設定によって異なります。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.ykkAuto}>YKK AP よくあるご質問「スマートドアは、オートロックされますか。」</Ext>（{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "オートロックと呼ばれる3つの仕組み",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>マンションの共用玄関のオートロック</strong>：建物の入口の扉を、住戸のインターホンからの操作や居住者の鍵・カードで開ける仕組みです。設備は管理組合・管理会社が管理します。締め出されたときの連絡先と予防策は<a href="/autolock-shimedashi-yobou/" className="text-primary underline">オートロックマンションの締め出し予防策</a>にまとめています。
                </li>
                <li>
                  <strong>玄関ドアに組み込まれた電気錠・電子錠の自動施錠</strong>：住宅メーカーやサッシメーカーの玄関ドアに付いている機能です。電源は乾電池の電池式と、家庭用電源につなぐAC100V式があります。この記事では次の節で、LIXILとYKK APの公式資料を同じ項目で比べています。
                </li>
                <li>
                  <strong>後付けスマートロックのオートロック機能</strong>：既存のサムターンの上に取り付ける製品などで、ドアが閉まってから一定時間で施錠する機能を持つものがあります。注意点は<a href="/smart-lock/" className="text-primary underline">スマートロックのメリット・デメリット</a>と<a href="/kagi-shimewasure-taisaku/" className="text-primary underline">鍵の閉じ忘れ対策</a>を参照してください。
                </li>
              </ul>
              <p>
                電気錠そのものの仕組み（停電時の動き方・耐用年数）は<a href="/denkijou-shikumi/" className="text-primary underline">電気錠の仕組み</a>、カードキーをなくしたときの対応は<a href="/genkan-cardkey/" className="text-primary underline">玄関のカードキー（電気錠）をなくしたとき</a>にまとめています。
              </p>
            </>
          ),
        },
        {
          h2: "玄関ドアの自動施錠：LIXILとYKK APの比較",
          body: (
            <>
              <p>LIXIL「FamiLock」の取扱い説明書と、YKK AP「スマートドア」「スマートコントロールキー」のよくあるご質問を、当サイトで同じ項目にそろえて比較しました。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">項目</th>
                      <th className="border border-border px-3 py-2 text-left">LIXIL FamiLock（電池式）</th>
                      <th className="border border-border px-3 py-2 text-left">YKK AP スマートドア</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compare.map(([k, l, y]) => (
                      <tr key={k}>
                        <td className="border border-border px-3 py-2 font-medium">{k}</td>
                        <td className="border border-border px-3 py-2">{l}</td>
                        <td className="border border-border px-3 py-2">{y}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.lixilBattery}>LIXIL「FamiLock 電池式 取扱い説明書」MAP-954（2023年6月1日発行）</Ext>、<Ext href={SRC.ykkAuto}>YKK AP よくあるご質問「スマートドアは、オートロックされますか。」</Ext>、<Ext href={SRC.ykkTimer}>同「スマートコントロールキーのタイマー施錠機能（誤操作防止機能）とは、どのような場合に作動するものですか。」</Ext>（いずれも{CHECKED}）。機種・年式・設定によって動作が異なります。お使いのドアの取扱説明書を確認してください。
              </p>
            </>
          ),
        },
        {
          h2: "電池式とAC100V式の違い（LIXIL FamiLock）",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>電池式：アルカリ乾電池単3形8本で作動します。電池寿命は1日10回の使用で約1年で、交換が必要になると操作時に知らせると記載されています。電池寿命に近づくとサムターンの動きが遅くなるが異常ではない、とも記載されています。</li>
                <li>AC100V式：取扱い説明書は、サムターンの作動途中で停電となった場合は、意図しない状態になっていることがあるため、手動でサムターンを回して完全に施錠または解錠するよう注意しています。</li>
                <li>どちらの方式も、停電・故障・電池切れに備えて、シリンダー用のカギを携帯するよう案内しています。</li>
              </ul>
              <p>
                電子錠の電池が切れたときの対処は<a href="/denshijou-denchigire/" className="text-primary underline">電子錠の電池切れ対処法</a>を参照してください。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.lixilBattery}>LIXIL「FamiLock 電池式 取扱い説明書」MAP-954</Ext>、<Ext href={SRC.lixilAc}>LIXIL「FamiLock AC100V式 取扱い説明書」MAP-955（いずれも2023年6月1日発行）</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "自動施錠で締め出されないための注意",
          body: (
            <>
              <p>
                LIXILの取扱い説明書は、自動施錠ONの場合、電気錠で解錠した後は自動施錠されるため、帰宅時などに荷物と一緒に玄関キーを室内に置いて、もう一度外に出ないよう注意しています。ドアが閉まり自動施錠され、締め出されるおそれがあるためです。また、ドアが閉まりきらないなどで施錠できない場合や自動施錠をOFFにしている場合に備え、LEDやブザー音で施錠を確認するよう案内しています。
              </p>
              <p>
                締め出されてしまった場合の連絡の順番は<a href="/shimedashi/" className="text-primary underline">家を締め出されたらどうする？</a>にまとめています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.lixilBattery}>LIXIL「FamiLock 電池式 取扱い説明書」MAP-954 ご使用上の注意事項</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
      ]}
      faqTitle="オートロックの種類のよくある質問"
      faqs={faqs}
      related={[
        { href: "/autolock-shimedashi-yobou/", label: "オートロックマンションの締め出し予防策", desc: "共用玄関のオートロック" },
        { href: "/denkijou-shikumi/", label: "電気錠の仕組み", desc: "停電したときの動き方" },
        { href: "/genkan-cardkey/", label: "玄関のカードキー（電気錠）をなくしたとき", desc: "メーカー別の対応" },
        { href: "/smart-lock/", label: "スマートロックのメリット・デメリット", desc: "後付けのオートロック" },
        { href: "/denshijou-denchigire/", label: "電子錠の電池切れ対処法", desc: "非常給電と機械キー" },
      ]}
    />
  );
}
