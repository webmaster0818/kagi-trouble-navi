import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/post-kagi-koukan/";
const TITLE = "ポスト（郵便受け）の鍵交換｜集合ポストは管理会社へ、所有者は3つの方法：ナスタの公式案内で確認";
const DESC =
  "集合ポスト・郵便受けの鍵（ダイヤル錠など）を交換したいとき、番号が分からないときの連絡先を、ポストメーカーのナスタのよくあるご質問・ポスト鍵の交換方法で2026年11月13日に確認しました。" +
  "入居者と管理会社・所有者で窓口が違う点、交換の3つの方法、問い合わせ前に調べておく品番と標識番号シールについて。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const CHECKED = "2026年11月13日確認";

const SRC = {
  faq: "https://www.nasta.co.jp/support/faq/01/",
  open: "https://www.nasta.co.jp/support/about-post/",
  exchange: "https://www.nasta.co.jp/support/exchange-method/",
};

const who: [string, string, string][] = [
  ["開ける番号が分からない・忘れた", "取扱説明書や賃貸契約書などを確認。記載がない、記載の番号で開かない場合は管理会社または所有者（オーナー）に問い合わせる", "ポストの品番と、本体内側（投入口から見える）の標識番号シールの番号を調べてナスタに問い合わせる"],
  ["鍵が壊れた・番号を他人に知られたようなので交換したい", "管理会社または所有者に問い合わせる（セキュリティ管理・費用負担の問題があるため）", "下の3つの方法から選ぶ"],
  ["前の入居者が錠を変えていて、標識番号シールと違う", "管理会社または所有者に相談", "鍵の交換になる"],
];

const faqs: Faq[] = [
  {
    q: "賃貸マンションの集合ポストの鍵を、入居者が自分で交換してもよいですか？",
    a: "ナスタは、一般のユーザー（入居者）からの鍵交換の相談について、マンション・住宅のセキュリティ管理や費用負担などの問題があるため、管理会社または所有者に問い合わせるよう案内しています（" + CHECKED + "）。",
  },
  {
    q: "ポストのダイヤル番号を忘れました。ポスト本体に書いてありますか？",
    a: "ナスタは、セキュリティ確保のため、ポスト本体には番号を記載したシールなどは貼っていないとしています。取扱説明書や賃貸契約書などを確認し、分からない場合は管理会社または所有者に問い合わせてください（" + CHECKED + "）。",
  },
  {
    q: "ナスタのホームページに、すべてのポストの鍵の交換方法が載っていますか？",
    a: "ナスタの「ポスト鍵の交換方法」のページでは、一部の錠（可変ダイヤル錠、プッシュボタン錠、シリンダー錠など）について、保安上の問題からホームページ上ではフリーサポートできないとしています。該当する場合はナスタのお問い合わせ窓口に相談してください（" + CHECKED + "）。",
  },
  {
    q: "鍵を開けたのに扉が開きません。鍵の故障ですか？",
    a: "ナスタは、郵便受けの中がいっぱいだと鍵部分に郵便物が引っかかり、扉が開かなくなる場合があるとしています。投入口から取り出せる場合は、郵便物を少しずつ取り出してください。鍵が空回りする、まったく回らない場合は鍵自体が破損しているとして、交換を案内しています（" + CHECKED + "）。",
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
      crumbs={[{ name: "ポスト（郵便受け）の鍵交換" }]}
      answerLead="マンションの集合ポストの鍵を交換したいときは、入居者はまず管理会社か所有者（オーナー）に問い合わせます。ポストメーカーのナスタは、鍵交換にはマンション・住宅のセキュリティ管理や費用負担の問題があるとして、一般のユーザーには管理会社または所有者への問い合わせを案内しています。"
      answerBody={
        <>
          <p>
            管理会社・所有者が交換する場合、ナスタは「近くの金物店で鍵を買って交換する」「ナスタから鍵を買って交換する」「鍵の購入と交換をどちらもナスタに依頼する」の3つの方法を挙げています。問い合わせの前に、ポストの品番と、本体内側の標識番号シールの番号を調べておくと話が早く進みます。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.faq}>ナスタ「よくあるご質問」</Ext>（{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "入居者と、管理会社・所有者で窓口が違う",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">困っていること</th>
                      <th className="border border-border px-3 py-2 text-left">入居者（一般のユーザー）</th>
                      <th className="border border-border px-3 py-2 text-left">管理会社・所有者</th>
                    </tr>
                  </thead>
                  <tbody>
                    {who.map(([k, a, b]) => (
                      <tr key={k}>
                        <td className="border border-border px-3 py-2 font-medium">{k}</td>
                        <td className="border border-border px-3 py-2">{a}</td>
                        <td className="border border-border px-3 py-2">{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.faq}>ナスタ「よくあるご質問」</Ext>（{CHECKED}）。ナスタ製品についての案内です。ほかのメーカーのポストは、そのメーカーの案内を確認してください。
              </p>
            </>
          ),
        },
        {
          h2: "管理会社・所有者が鍵を交換する3つの方法",
          body: (
            <>
              <ol className="list-decimal pl-5 space-y-1.5">
                <li>鍵を近くの金物店で買い、交換する。</li>
                <li>鍵をナスタから買い、交換する。代引き・運賃の費用は購入者の負担。鍵の適合違いは購入者の責任になるため、取扱説明書やナスタのホームページでポストの機種（品番）を確認する。ポストの写真を添えて問い合わせると確認がスムーズ。</li>
                <li>鍵の購入と交換のどちらもナスタに依頼する。</li>
              </ol>
              <p>
                鍵の破損による交換は、不良の原因がナスタの製品製造上の場合を除いて、サービス料金がかかるとしています。ナスタの「ポスト鍵の交換方法」のページには錠の型番ごとの交換方法が載っていますが、可変ダイヤル錠・プッシュボタン錠・シリンダー錠などの一部は、保安上の問題からホームページ上ではフリーサポートできないとしています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.faq}>ナスタ「よくあるご質問」</Ext>、<Ext href={SRC.exchange}>ナスタ「ポスト鍵の交換方法」</Ext>（いずれも{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "開かないときにメーカーへ問い合わせると、確認されること",
          body: (
            <>
              <p>
                ナスタは、ポストの開錠番号は納品時に添付した書類で確認するよう案内しています。機器の異常やゆがみで開かないと思われる場合や緊急の場合は、近くの支店・営業所に問い合わせるよう案内しており、その際は問い合わせた人の住所・氏名、開錠の必要性、その他の権利などを尋ねるとしています。製品の品番も尋ねる場合があります。
              </p>
              <p>
                集合ポストの強さについて、ナスタは本体自体に金庫のような堅牢性はなく、施錠強度は約30kgf程度で、バールなどを使った意図的な犯罪行為には無効だとしています。現在の郵便配送制度に書留などの手渡しがあるのはそのためだと説明しています。大事な郵便物は早めに取り出してください。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.open}>ナスタ「ポストの開錠に関するお問い合わせについて」</Ext>、<Ext href={SRC.faq}>ナスタ「よくあるご質問」</Ext>（いずれも{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "住まいのほかの鍵は別ページで",
          body: (
            <p>
              退去・入居のときの玄関の鍵の扱いは<a href="/taikyo-kagi-trouble/" className="text-primary underline">退去時の鍵トラブル</a>、賃貸の鍵交換費用を誰が負担するかは<a href="/chintai-kagi-koukan-hiyou/" className="text-primary underline">賃貸の鍵交換費用</a>、物置の鍵は<a href="/monooki-kagi-koukan/" className="text-primary underline">物置の鍵交換</a>にまとめています。
            </p>
          ),
        },
      ]}
      faqTitle="ポスト（郵便受け）の鍵交換のよくある質問"
      faqs={faqs}
      related={[
        { href: "/chintai-kagi-koukan-hiyou/", label: "賃貸の鍵交換費用", desc: "誰が負担するか" },
        { href: "/taikyo-kagi-trouble/", label: "退去時の鍵トラブル", desc: "返却と紛失" },
        { href: "/monooki-kagi-koukan/", label: "物置の鍵交換", desc: "メーカー別の窓口" },
        { href: "/locker-kagi-funshitsu/", label: "ロッカーの鍵の紛失", desc: "管理者への連絡" },
        { href: "/key-box-kanri/", label: "キーボックスの管理", desc: "鍵の保管と受け渡し" },
      ]}
    />
  );
}
