import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/genkan-cardkey/";
const TITLE = "玄関のカードキー（電気錠）をなくしたとき・使うときの注意｜LIXIL・YKK AP・美和ロックの公式案内を比較";
const DESC =
  "玄関ドアのカードキーは電気錠のキーです。カードキーをなくしたときに登録の抹消・再登録で無効化できるか、シリンダー交換が要るかを、LIXIL・YKK AP の公式案内で比べました。美和ロックのカードキーの保管・停電時・退去時の注意もあわせて、2026年11月9日に確認しています。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  lixil: "https://www.lixil.co.jp/support/door/keylost/",
  ykkCylinder: "https://faq.ykkap.co.jp/faq_detail.html?id=8467",
  ykkDelete: "https://faq.ykkap.co.jp/pro/faq_detail.html?id=8475",
  miwaCard: "https://www.miwa-lock.co.jp/tec/support/cardkey_info.html",
  miwaTeiden: "https://www.miwa-lock.co.jp/tec/support/teiden_info.html",
  miwaTaikyo: "https://www.miwa-lock.co.jp/tec/support/smartlock_info.html",
};

const lostRows: [string, string, string][] = [
  [
    "LIXIL（TOSTEM 製を含む）",
    "紛失したキーの登録を抹消するか、紛失したキー以外のすべてのキーを再登録して無効化できる",
    "一般的な鍵と違いシリンダーごと交換する必要はない。手動キーはそのまま使える",
  ],
  [
    "YKK AP（スマートコントロールキー）",
    "下部錠の刻印が EC-Y7 の機種は、管理用スマートフォンのアプリで紛失したキーの登録を個別に削除できる。それ以外の機種は個別削除ができず、手持ちのすべてのキーを登録し直すと上書きされ、紛失したキーは使えなくなる",
    "リモコンキー・タグキーには非常用の収納カギが入っているため、防犯のためシリンダー交換を勧めている",
  ],
];

const faqs: Faq[] = [
  {
    q: "玄関のカードキーをなくしたら、鍵穴（シリンダー）の交換が必要ですか？",
    a: "メーカーと、なくしたキーの種類で異なります。LIXILは、電気錠用のタグキー・カードキー・リモコンキーを紛失した場合、登録の抹消や再登録で無効化でき、一般的な鍵と違いシリンダーごと交換する必要はないと案内しています。YKK APは、リモコンキーやタグキーには非常用収納カギが入っているため、防犯のためシリンダー交換を勧めています（いずれも2026年11月9日確認）。",
  },
  {
    q: "カードキーの登録を消すにはどうすればよいですか？",
    a: "手順は機種ごとに決まっています。LIXILは公式サポートページでキーの種類別の抹消・再登録の手順を案内しています。YKK APのスマートコントロールキーは、下部錠の刻印が EC-Y7 の機種はアプリで個別に削除でき、それ以外の機種は手持ちのキーをすべて登録し直して上書きします。賃貸マンションや共用部のカードキーは、管理会社・管理組合に連絡してください。",
  },
  {
    q: "停電するとカードキーの玄関はどうなりますか？",
    a: "美和ロックは、停電時は電気で動作する電気錠は動作せず、施錠するか、停電直前の状態を保つか、解錠するかは電気錠の種類によって異なると案内しています。停電時に施錠するタイプでは、外からはキー、内側からはサムターンかハンドルで解錠します。手動キーを持ち歩くと停電や電池切れの際にも困りません。",
  },
  {
    q: "使わなくなったカードキーは、そのまま捨ててもよいですか？",
    a: "美和ロックは、使わなくなったカードキーは捨てる前に必ずハサミを入れるなどしてカード内部のチップやICを物理的に壊し、必要に応じてリーダー側でもカードキーのデータを消去するよう案内しています。",
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
      crumbs={[{ name: "玄関のカードキー" }]}
      answerLead="玄関ドアのカードキーは電気錠のキーです。カードキーをなくしたときは、キーの登録を抹消・再登録して無効化するのが基本で、シリンダー交換が要るかどうかはメーカーとキーの種類で異なります。"
      answerBody={
        <>
          <p>
            LIXILは、カードキーなどを紛失した場合はシリンダーごと交換する必要はなく、手動キーはそのまま使えると案内しています。YKK APは、非常用収納カギが入ったリモコンキー・タグキーを紛失した場合は、防犯のためシリンダー交換を勧めています。まずは自宅のドアのメーカーと、なくしたキーの種類を確かめてください。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.lixil}>LIXIL「玄関ドア・引戸のカギやカギ関連の部品を紛失した時のサポート」</Ext>、<Ext href={SRC.ykkCylinder}>YKK AP よくあるご質問「リモコンキーやタグキーを紛失した場合、シリンダー交換が必要ですか。」</Ext>（いずれも2026年11月9日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "カードキーをなくしたときの対応（メーカー別）",
          body: (
            <>
              <p>LIXILとYKK APが公開している案内を、同じ項目で並べました。</p>
              <div className="space-y-3">
                {lostRows.map(([a, b, c]) => (
                  <div key={a} className="bg-white rounded-xl border border-black/10 p-4">
                    <p className="font-bold text-text-primary mb-2">{a}</p>
                    <p className="text-xs font-bold text-primary">紛失したキーの無効化</p>
                    <p className="mb-2">{b}</p>
                    <p className="text-xs font-bold text-primary">シリンダー交換</p>
                    <p>{c}</p>
                  </div>
                ))}
              </div>
              <p>
                YKK APの案内でシリンダー交換の理由として挙げられているのは、リモコンキー・タグキーに入っている非常用収納カギです。同社は、非常用収納カギの代わりにダミーキーを収納したリモコンキー・タグキーも部品通販で扱っており、その場合は非常用カギを必ず携帯するよう案内しています。電池式の機種は、シリンダー部品を購入して自分で交換することもでき、事前に交換要領書を読んで自分で作業できると判断した場合だけ購入するよう求めています。
              </p>
              <p>
                手動キー（金属の鍵）をなくした場合は、LIXILも防犯上の理由からシリンダーごとの交換を勧めています。鍵をなくしたときの全体の流れは<a href="/kagi-funshitsu/" className="text-primary underline">鍵をなくした時の対処法</a>をご覧ください。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.lixil}>LIXIL「玄関ドア・引戸のカギやカギ関連の部品を紛失した時のサポート」</Ext>、<Ext href={SRC.ykkDelete}>YKK AP よくあるご質問「リモコンキーやタグキー・カードキーを紛失した場合、取り急ぎ紛失したキーの登録情報だけでも使用できないようにしたい。登録の削除は、どのように行うのでしょうか。」</Ext>、<Ext href={SRC.ykkCylinder}>同「リモコンキーやタグキーを紛失した場合、シリンダー交換が必要ですか。」</Ext>（いずれも2026年11月9日確認）
              </p>
            </>
          ),
        },
        {
          h2: "カードキーの保管と処分（美和ロックの注意事項）",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>カードキーは個人の責任で管理し、他人と共有したり貸したりしない</li>
                <li>スキミング（不正に情報を読み取られること）を防ぐため、第三者が手に取れる場所に置かない。キャッシュカードやクレジットカードと同じように保管する</li>
                <li>使わなくなったカードキーは、捨てる前にハサミを入れるなどしてチップやICを物理的に壊す。必要に応じてリーダー側でもデータを消去する</li>
                <li>強い衝撃や圧力を加えない。折り曲げたり、高温多湿の場所や磁気を帯びた場所に置いたままにしたりしない</li>
              </ul>
              <p className="text-xs text-text-muted">出典：<Ext href={SRC.miwaCard}>美和ロック「カードキーの取り扱い・保管に関する重要な注意事項」</Ext>（2026年11月9日確認）</p>
            </>
          ),
        },
        {
          h2: "停電したときと電池が切れたとき",
          body: (
            <>
              <p>
                美和ロックは、停電時には電気錠は動作しないと案内しています。停電時の状態は電気錠の種類で次の3つに分かれます。
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>停電時には施錠する：外からはキー、内側からはサムターンかハンドルで解錠する</li>
                <li>停電直前の状態（施錠または解錠）を保つ：外からはキー、内側からはサムターンかハンドルで施錠・解錠できる</li>
                <li>停電時には解錠する：停電中はキーで施錠できない</li>
              </ul>
              <p>
                どのタイプかは電気錠の型番で確かめられ、問い合わせの際は錠前と制御盤の品番を確認するよう同社は求めています。電池式の玄関の場合は<a href="/denshijou-denchigire/" className="text-primary underline">電子錠の電池切れ対処法</a>をご覧ください。いずれの場合も、手動キーを持ち歩くか、すぐ取り出せる場所に置いておくと締め出しを防げます。
              </p>
              <p className="text-xs text-text-muted">出典：<Ext href={SRC.miwaTeiden}>美和ロック「電気錠に関する注意事項」停電時の電気錠の動作について</Ext>（2026年11月9日確認）</p>
            </>
          ),
        },
        {
          h2: "引っ越し（退去）のとき",
          body: (
            <>
              <p>
                美和ロックは、電気錠やスマートロックを使っている住まいから退去するときは、機種のマニュアルにある「全抹消手順」でID情報を消去し、スマホアプリなどの解約を必ず行うよう案内しています。集合住宅では、共用部のID情報の抹消など退去時に必要なことを現地の管理人に確認するよう求めています。
              </p>
              <p>
                賃貸の場合は、カードキーの返却やなくした場合の扱いを契約書と管理会社で確認してください。退去時の鍵の扱いは<a href="/taikyo-kagi-trouble/" className="text-primary underline">賃貸退去時の鍵トラブル</a>でも解説しています。
              </p>
              <p className="text-xs text-text-muted">出典：<Ext href={SRC.miwaTaikyo}>美和ロック「退去時/電気錠等の中古販売・廃棄時の注意事項」</Ext>（2026年11月9日確認）</p>
            </>
          ),
        },
      ]}
      cta={{
        h2: "カードキーも手動キーもなく、家に入れないときは",
        text: "まず管理会社や家族など、鍵を持っている人に連絡してください。それでも入れない場合は、ドアのメーカーと電気錠の種類を伝えたうえで、作業前に総額の見積もりを確認してから鍵業者に依頼します。",
        links: [
          { href: "/shimedashi/", label: "締め出されたときの対処 →" },
          { href: "/agents/", label: "鍵業者を比較する" },
        ],
      }}
      faqTitle="玄関のカードキーのよくある質問"
      faqs={faqs}
      related={[
        { href: "/denshijou-denchigire/", label: "電子錠の電池切れ対処法", desc: "非常給電と機械キーの併用" },
        { href: "/smart-lock/", label: "スマートロックのメリット・デメリット", desc: "後付け型との違いと締め出しリスク" },
        { href: "/kagi-shurui-zukan/", label: "鍵の種類図鑑", desc: "カードキー・電子錠などの見分け方" },
        { href: "/kagi-funshitsu/", label: "鍵をなくした時の対処法", desc: "届出と交換の判断" },
      ]}
    />
  );
}
