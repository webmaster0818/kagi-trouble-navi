import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/kuruma-kagi-nukenai/";
const TITLE = "車の鍵が抜けないとき｜シフトレバーの位置とキーの回し方：トヨタ・ホンダの取扱説明書で確認";
const DESC =
  "キーを差し込んで回すタイプの車で、エンジンを止めても鍵が抜けないときに確かめることを、トヨタ ヤリスとホンダ N-VANの取扱説明書、トヨタのよくあるご質問で2026年11月15日に確認しました。" +
  "シフトレバーの位置、ACCからOFFへの回し方、ハンドルロックとの違いについて。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const CHECKED = "2026年11月15日確認";

const SRC = {
  toyota: "https://manual.toyota.jp/yaris/2207/cv/ja_JP/contents/vhch04se020401.php",
  toyotaFaq: "https://toyota.jp/faq/show/2383.html",
  honda: "https://www.honda.co.jp/ownersmanual/webom/jpn/n-van/2019/details/136157090-64147.html",
};

// 2社の取扱説明書を同じ項目でそろえた比較（当サイト作成）
const compare: [string, string, string][] = [
  ["キーを抜ける条件（オートマチック車）", "シフトレバーの位置がPのとき、キーを抜き挿しできる（OFF〈LOCK〉の位置）", "セレクトレバーをPに入れないとキーを抜くことができない（無段変速オートマチック車）"],
  ["ACCからOFFへの回し方", "シフトレバーがP（AT車）またはN（MT車）にあることを確認し、キーを押し込みながらOFFまでまわす", "（このページに記載なし）"],
  ["キーの抜き忘れ", "キーが挿してあり、エンジンスイッチがACCまたはOFFのとき、運転席ドアを開けると警告ブザーが鳴る", "エンジンスイッチが0からIのときにキーを差し込んだまま運転席ドアを開けると、キー抜き忘れ警告ブザーが鳴る"],
  ["キーが回らないとき（ハンドルロック）", "ハンドルを右、もしくは左に回しながら、同時にキーを回す（よくあるご質問）", "ハンドルを左右に回しながらキーを回すと、ハンドルロックが解除されキーが回る"],
];

const faqs: Faq[] = [
  {
    q: "エンジンを止めたのに、車の鍵が抜けません。",
    a: "オートマチック車は、シフトレバー（セレクトレバー）がPに入っていないとキーを抜けません。トヨタ ヤリスの取扱説明書は「シフトレバーの位置がPのとき、キーを抜き挿しすることができます」、ホンダ N-VANの取扱説明書は「セレクトレバーをPに入れないとキーを抜くことができません」としています。Pに入っているかを確かめ、キーをOFF（0）の位置まで回してから抜きます（" + CHECKED + "）。",
  },
  {
    q: "キーがACCの位置から、OFFまで回りません。",
    a: "トヨタ ヤリスの取扱説明書は、キーをACCからOFFにまわすには、シフトレバーがP（オートマチック車）もしくはN（マニュアル車）の位置にあることを確認し、キーを押し込みながらOFFまでまわすよう記載しています（" + CHECKED + "）。",
  },
  {
    q: "鍵が抜けないのではなく、差し込んだ鍵が回りません。",
    a: "ハンドルロックがかかっている可能性があります。トヨタのよくあるご質問は、ハンドルを右、もしくは左に回しながら、同時にキーを回すよう案内しています。ホンダ N-VANの取扱説明書も、エンジンスイッチが0からIに回らないときはハンドルを左右に回しながらキーを回すとしています（" + CHECKED + "）。",
  },
  {
    q: "マニュアル車でエンジンスイッチを0にしたら、キーが抜けてしまいました。",
    a: "ホンダ N-VANの取扱説明書は、マニュアル車はエンジンスイッチを0にするとキーが抜けることがあり、ハンドルがロックされ思わぬ事故につながるとして、走行中はエンジンを止めないよう警告しています（" + CHECKED + "）。",
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
      crumbs={[{ name: "車の鍵が抜けないとき" }]}
      answerLead="キーを差し込んで回すタイプのオートマチック車は、シフトレバーがPに入っていないとキーを抜けません。Pに入っていることを確かめ、キーを押し込みながらOFF（LOCK・0）の位置まで回すと抜けるようになります。トヨタとホンダの取扱説明書は、いずれもPに入れることをキーを抜く条件としています。"
      answerBody={
        <>
          <p>
            Pに入れてOFFまで回しても抜けない場合や、キーが曲がっている・欠けている場合は、無理に引き抜いたり工具でこじったりせず、販売店に相談してください。スマートキー（電子キー）でエンジンを始動する車は、キーを差し込まないため、このページの対象ではありません。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.toyota}>トヨタ ヤリス取扱説明書「エンジン（イグニッション）スイッチ（スマートエントリー＆スタートシステム非装着車）」</Ext>、<Ext href={SRC.honda}>ホンダ N-VAN（2019年）取扱説明書「エンジンスイッチ」</Ext>（いずれも{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "キーを抜く条件と回し方（トヨタ・ホンダの比較）",
          body: (
            <>
              <p>2社の取扱説明書とよくあるご質問の記載を、当サイトで同じ項目にそろえました。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">項目</th>
                      <th className="border border-border px-3 py-2 text-left">トヨタ（ヤリス）</th>
                      <th className="border border-border px-3 py-2 text-left">ホンダ（N-VAN）</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compare.map(([k, t, h]) => (
                      <tr key={k}>
                        <td className="border border-border px-3 py-2 font-medium">{k}</td>
                        <td className="border border-border px-3 py-2">{t}</td>
                        <td className="border border-border px-3 py-2">{h}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.toyota}>トヨタ ヤリス取扱説明書「エンジン（イグニッション）スイッチ（スマートエントリー＆スタートシステム非装着車）」</Ext>、<Ext href={SRC.toyotaFaq}>トヨタ よくあるご質問「ハンドルロックがかかっている。キーが回らないが、どうすれば解除が出来る？」</Ext>、<Ext href={SRC.honda}>ホンダ N-VAN（2019年）取扱説明書「エンジンスイッチ」（Hondaスマートキーシステム非装備車）</Ext>（いずれも{CHECKED}）。車種・年式によって操作が異なります。お使いの車の取扱説明書を確認してください。
              </p>
            </>
          ),
        },
        {
          h2: "エンジンスイッチの位置と、キーを抜ける位置",
          body: (
            <>
              <p>トヨタ ヤリスの取扱説明書は、エンジンスイッチの位置を次のように説明しています。</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>OFF（LOCK）：ステアリングロックがかかる。シフトレバーの位置がPのとき、キーを抜き挿しできる</li>
                <li>ACC：アクセサリーソケットなどの電装品が使用できる</li>
                <li>ON：すべての電装品が使用できる</li>
                <li>START：エンジンが始動できる</li>
              </ul>
              <p>
                ACCやONの位置のままではキーは抜けません。また、エンジンがかかっていないときに取扱説明書は、バッテリーあがりを防ぐため、エンジンスイッチをACCやONにしたまま長時間放置しないよう注意しています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.toyota}>トヨタ ヤリス取扱説明書「エンジン（イグニッション）スイッチ（スマートエントリー＆スタートシステム非装着車）」</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "それでも抜けないとき・家の鍵が抜けないとき",
          body: (
            <p>
              条件を確かめても抜けない場合は、キーやエンジンスイッチの不具合が考えられるため、販売店に相談してください。車の鍵が曲がった・変形した場合の考え方は<a href="/kagi-magatta/" className="text-primary underline">鍵が曲がった・変形したとき</a>、玄関などの家の鍵が抜けない場合は<a href="/kagi-nukenai/" className="text-primary underline">鍵が抜けない・刺さらないときの対処法</a>にまとめています。キーを差したまま車外に出てドアがロックされた場合は<a href="/car-inlock/" className="text-primary underline">JAFのインキー料金</a>を参照してください。
            </p>
          ),
        },
      ]}
      faqTitle="車の鍵が抜けないときのよくある質問"
      faqs={faqs}
      related={[
        { href: "/kagi-nukenai/", label: "鍵が抜けない・刺さらないときの対処法", desc: "家の鍵の場合" },
        { href: "/kuruma-kagi-shurui/", label: "車の鍵の種類", desc: "スマートキーとメカニカルキー" },
        { href: "/kuruma-kagi-akanai/", label: "車の鍵（ドア）が開かないとき", desc: "原因の切り分け" },
        { href: "/kagi-magatta/", label: "鍵が曲がった・変形したとき", desc: "曲げ戻さない理由" },
        { href: "/car-inlock/", label: "JAFのインキー料金", desc: "閉じ込めたときの依頼先" },
      ]}
    />
  );
}
