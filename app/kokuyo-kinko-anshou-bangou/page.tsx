import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/kokuyo-kinko-anshou-bangou/";
const TITLE = "コクヨの金庫（テンキー式）の暗証番号を変更する方法｜扉を開けた状態で登録し直す：3機種の取扱説明書で確認";
const DESC =
  "コクヨのテンキー式耐火金庫（コンピューターロック）の暗証番号の変更・登録の流れと注意点を、HS-SCTE355・HS-TES10TK/20TK・ビジネスセーフ HS-E2□□TKN の取扱説明書で2026年11月19日に確認しました。" +
  "変更後の解錠テストや、番号を忘れたときの販売店への照会についても説明します。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const CHECKED = "2026年11月19日確認";

const SRC = {
  scte: "https://www.kokuyo-furniture.co.jp/products/manual/pdf/hs-scte355_computer.pdf",
  tes: "https://www.kokuyo-furniture.co.jp/products/manual/pdf/tk_computer.pdf",
  biz: "https://www.kokuyo-furniture.co.jp/manual/pdf/business_safe_computer_20P_D.pdf",
};

// コクヨ3機種の取扱説明書を同じ項目でそろえた比較（当サイト作成）
const models: [string, string, string, string][] = [
  [
    "学籍簿用耐火金庫 コンピューターロック（HS-SCTE355）",
    "4〜8桁・第1／第2の2種類",
    "「0.0.0.0」。独自の番号を登録すると同時に消滅",
    "第1・第2暗証番号の登録操作をやり直すと、それまでの番号は消滅",
  ],
  [
    "耐火金庫 コンピューターロック（HS-TES10TK・HS-ALTES10TK・HS-TES20TK・HS-ALTES20TK）",
    "4〜8桁・第1／第2の2種類",
    "購入時の番号は説明書の図で案内（独自の番号の登録と同時に無効）",
    "変更専用の項目の記載は確認できず。登録の手順は扉を開けた解錠状態で行う",
  ],
  [
    "ビジネスセーフ（耐火金庫）コンピューターロック（HS-E2□□TKN）",
    "4〜8桁・第1／第2の2種類",
    "「0.0.0.0」",
    "「暗証番号の登録のしかた」の操作で変更。新しい番号で古い番号は上書き",
  ],
];

const faqs: Faq[] = [
  {
    q: "コクヨの金庫の暗証番号は、どうやって変更しますか？",
    a: "HS-SCTE355 とビジネスセーフ HS-E2□□TKN の取扱説明書は、暗証番号を変更するときは「暗証番号の登録のしかた」と同じ操作を行うよう案内しています。扉を開き、カンヌキが扉の中に収まった解錠状態で、テンキーで新しい番号を入力します（ボタンを押す順番は各取扱説明書の図で確認してください）。それまでの番号は消滅（上書き）します（" + CHECKED + "）。",
  },
  {
    q: "扉を閉めたままでも、暗証番号を変えられますか？",
    a: "3機種の取扱説明書は、いずれも登録の前に扉を開き、カンヌキが扉の中に収まっていることを確認するよう案内しています。HS-SCTE355 の取扱説明書は、カンヌキが出ているときは登録操作ができないと記載しています（" + CHECKED + "）。",
  },
  {
    q: "変更したあと、すぐに扉を閉めてもよいですか？",
    a: "取扱説明書は、暗証番号を登録・変更したら扉を閉める前に必ず解錠テストを行うよう案内しています。扉を開けたまま新しい番号を入力し、LEDランプが緑色に点灯して信号音が鳴れば正しく登録されています。番号を間違えて登録したまま扉を閉めると、扉を開けられなくなると記載されています（" + CHECKED + "）。",
  },
  {
    q: "暗証番号を忘れた場合は、どうすればよいですか？",
    a: "HS-SCTE355 の取扱説明書は、暗証番号を忘れたときは必ず購入した販売店を通じて申し出るよう案内し、コクヨに直接問い合わせても盗難防止のため回答できない、照会は有料と記載しています。本体正面右下の製造ロット番号を確認のうえで販売店へ連絡するよう書かれています。販売店が分からない場合や急ぎの場合は、所有者であることを示せる書類を用意して鍵業者に相談する方法もあります（" + CHECKED + "）。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月19日"
      updatedIso="2026-11-19"
      crumbs={[{ name: "金庫が開かない時の対処法", href: "/kinko-kaijo/" }, { name: "コクヨの金庫の暗証番号を変更する方法" }]}
      answerLead="コクヨのテンキー式耐火金庫の暗証番号は、扉を開けてカンヌキを扉の中に収めた解錠状態で、「暗証番号の登録のしかた」と同じ操作をやり直すと変更できます。取扱説明書は、変更後は扉を閉める前に必ず解錠テストを行うよう案内しています。"
      answerBody={
        <>
          <p>
            登録できる暗証番号は4〜8桁の数字で、第1暗証番号・第2暗証番号の2種類を別々に使えます。取扱説明書は、使用者用に第1、管理者用に第2を登録しておくと、番号を忘れたときや緊急時の解錠に役立つとしています。ボタンを押す具体的な順番は機種ごとの図で示されているため、お手持ちの金庫の取扱説明書で確認してください。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.scte}>コクヨ「学籍簿用耐火金庫 コンピューターロック HS-SCTE355 取扱説明書」</Ext>「7.暗証番号の登録のしかた」（{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "3機種の取扱説明書で見る、暗証番号の登録と変更",
          body: (
            <>
              <p>コクヨ公式サイトで公開されているテンキー式（コンピューターロック）の耐火金庫3機種の取扱説明書（PDF）を開き、暗証番号の桁数・購入時の番号・変更の扱いを、当サイトで同じ項目にそろえました。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">機種（取扱説明書）</th>
                      <th className="border border-border px-3 py-2 text-left">登録できる番号</th>
                      <th className="border border-border px-3 py-2 text-left">購入時の番号</th>
                      <th className="border border-border px-3 py-2 text-left">変更の扱い</th>
                    </tr>
                  </thead>
                  <tbody>
                    {models.map(([m, n, f, c]) => (
                      <tr key={m}>
                        <td className="border border-border px-3 py-2 font-medium">{m}</td>
                        <td className="border border-border px-3 py-2">{n}</td>
                        <td className="border border-border px-3 py-2">{f}</td>
                        <td className="border border-border px-3 py-2">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.scte}>HS-SCTE355 取扱説明書</Ext>、<Ext href={SRC.tes}>HS-TES10TK ほか 取扱説明書</Ext>、<Ext href={SRC.biz}>ビジネスセーフ HS-E2□□TKN 取扱説明書</Ext>（いずれもコクヨ公式、{CHECKED}）。3機種とも、登録できる番号は4〜8桁・2種類で共通しています。HS-TES10TK ほかの取扱説明書では、変更だけを扱う項目は確認できませんでした。
              </p>
            </>
          ),
        },
        {
          h2: "変更の前後に確かめること",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>扉を開け、カンヌキが扉の中に収まっているか（収まっていないときはハンドルを下げる、またはキー・ツマミを回して収める。機種により異なる）</li>
                <li>新しい番号を入力した後、LEDランプが緑色に1秒間点灯したか（登録の合図）</li>
                <li>番号が1〜3桁、または9桁以上になっていないか（このときはLEDランプが赤く2回点滅し、登録されない）</li>
                <li>扉を開けたまま新しい番号で解錠テストを行い、LEDランプの緑色点灯と「ピッピッ」という信号音を確認したか</li>
                <li>新しい番号を取扱説明書の「暗証番号控え」に記録し、控えとスペアキーを金庫の外に別々に保管したか</li>
              </ul>
              <p>
                取扱説明書は、「1.2.3.4」や「1.0.0.0」のような単純な番号は避けるよう案内しています。また、第1暗証番号と第2暗証番号の最初の数字が同じだと、短いほうの番号だけで解錠でき、長いほうを登録した意味がなくなる場合があるため、第2暗証番号の最初の数字を第1と変えるよう記載されています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.scte}>HS-SCTE355 取扱説明書</Ext>「暗証番号登録時のご注意」「8.解錠テストのしかた」、<Ext href={SRC.biz}>ビジネスセーフ HS-E2□□TKN 取扱説明書</Ext>「暗証番号の変更のしかた」（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "番号を間違えたとき・忘れたとき",
          body: (
            <>
              <p>
                HS-TES10TK ほかの取扱説明書は、間違った暗証番号を連続4回入力すると警報ブザーが30秒間鳴り続け、鳴り止んでから再度操作するよう案内しています。HS-SCTE355 の取扱説明書にも、連続4回の入力間違いで30秒間ブザーが鳴り、その間はテンキーの操作を受け付けないと記載されています。
              </p>
              <p>
                暗証番号を忘れた場合について、HS-SCTE355 の取扱説明書は、必ず購入した販売店を通じて申し出るよう案内しています。コクヨに直接問い合わせても盗難防止のため回答できず、照会は有料です。連絡の前に、本体正面右下の製造ロット番号を確認するよう書かれています。
              </p>
              <p>
                テンキーを押しても音がしない場合は、番号の問題ではなく電池切れの可能性があります。電池の交換時期のサインと交換の方法は<a href="/kinko-kaijo/" className="text-primary underline">金庫が開かない時の対処法</a>に、使わなくなった金庫の処分は<a href="/kinko-shobun/" className="text-primary underline">開かない金庫・古い金庫の処分方法</a>にまとめています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.tes}>HS-TES10TK ほか 取扱説明書</Ext>「扉の解錠と開けかた」、<Ext href={SRC.scte}>HS-SCTE355 取扱説明書</Ext>「安全上のご注意」「8.解錠テストのしかた」「14.故障かな？と思ったら」（{CHECKED}）
              </p>
            </>
          ),
        },
      ]}
      faqTitle="コクヨの金庫の暗証番号の変更についてよくある質問"
      faqs={faqs}
      related={[
        { href: "/kinko-kaijo/", label: "金庫が開かない時の対処法", desc: "電池切れ・番号忘れ・鍵紛失" },
        { href: "/kinko-shobun/", label: "開かない金庫・古い金庫の処分方法", desc: "回収ルートと注意点" },
        { href: "/genkan-anshou-bangou/", label: "暗証番号式の玄関の鍵（テンキー錠）", desc: "仕組みと使うときの注意" },
        { href: "/denshijou-denchigire/", label: "電子錠の電池切れ対処法", desc: "非常給電と機械キー" },
      ]}
    />
  );
}
