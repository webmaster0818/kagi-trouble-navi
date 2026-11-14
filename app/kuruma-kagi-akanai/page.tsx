import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/kuruma-kagi-akanai/";
const TITLE = "車の鍵（ドア）が開かないときの原因の切り分け｜電池・電波・置き忘れ・チャイルドプロテクター：トヨタ取扱説明書と日産FAQで確認";
const DESC =
  "スマートキーで車のドアが開かないときに確かめることを、トヨタ ヤリスの取扱説明書と日産のよくあるご質問で2026年11月14日に確認しました。" +
  "電池の消耗、電波をさまたげる場所や持ち物、キーの持ち方、後席だけ開かない場合、キーを車内に閉じ込めた場合の連絡先について。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const CHECKED = "2026年11月14日確認";

const SRC = {
  index: "https://manual.toyota.jp/yaris/2207/cv/ja_JP/contents/vhix01se010401.php",
  smart: "https://manual.toyota.jp/yaris/2207/cv/ja_JP/contents/vhch03se020403.php",
  nissanInlock: "https://faq2.nissan.co.jp/faq/show/6698?site_domain=default",
  nissanBattery: "https://faq2.nissan.co.jp/faq/show/3537?site_domain=default",
};

const checks: [string, string, string][] = [
  ["リモコンもスマートエントリーも反応しない", "キーの電池の消耗・電池切れ", "電池を交換する。電池切れのときはキーに内蔵されたメカニカルキーでドアを開ける"],
  ["特定の場所でだけ反応しない", "強い電波やノイズ（テレビ塔・発電所・ガソリンスタンド・放送局・大型ディスプレイ・空港の近く、コインパーキングなど）", "ドアハンドルにキーを近づけて操作する、リモコン（ワイヤレス機能）を使う、それでも開かなければメカニカルキー"],
  ["かばんや財布に入れていると反応しない", "キーが金属製の財布・かばん、小銭、アルミ箔を使ったカードや箱、カイロ、CD・DVDなどに接している、覆われている", "キーを取り出し、ほかの物から離して操作する"],
  ["スマートフォンなどと一緒に持つと反応しにくい", "携帯電話・無線機、ほかの車の電子キー、パソコン、携帯ゲーム機などを同時に携帯している", "キーだけを手に持って操作する"],
  ["施錠できない（ドアを閉めても鍵がかからない）", "エンジンスイッチがONのまま、または電子キーを車内に置き忘れている", "エンジンスイッチをOFFにし、キーを携帯していることを確かめる"],
  ["後席のドアだけ車内から開かない", "チャイルドプロテクターがかかっている", "いったん車外から開けて、チャイルドプロテクターを解除する"],
];

const faqs: Faq[] = [
  {
    q: "スマートキーで車のドアが開きません。まず何を確かめればよいですか？",
    a: "トヨタの取扱説明書（ヤリス）の症状別さくいんでは、施錠・解錠できないときの確認として、キーの電池の消耗・電池切れ、電波状況を挙げています。スマートエントリー＆スタートシステムで解錠できない場合は、ドアハンドルに電子キーを近づけて操作する、ワイヤレス機能を使う、それでも解錠できない場合はメカニカルキーを使う、の順に案内しています（" + CHECKED + "）。",
  },
  {
    q: "キーを持っているのに、手袋をしているとドアが開きません。故障ですか？",
    a: "トヨタの取扱説明書は、手袋を着用していると施錠・解錠しないことがあるとしています。また、すばやいドアハンドル操作や、作動範囲内に入ってすぐの操作では解錠しないことがあり、センサーにふれて解錠したことを確認してからドアハンドルを引くよう案内しています（" + CHECKED + "）。",
  },
  {
    q: "後ろのドアだけ、車内から開けられません。",
    a: "トヨタの取扱説明書の症状別さくいんでは、リヤドアが開かないときはチャイルドプロテクターがかかっていないかを確認するよう案内しています。かかっていると車内からは開かないため、いったん車外から開けて解除します（" + CHECKED + "）。",
  },
  {
    q: "スマートキーを車内に置いたまま、ドアがロックされてしまいました。",
    a: "日産は、インテリジェントキーには封じ込め防止機能があるものの、キーがインストルメントパネル上面・ドアポケット付近・グローブボックス内・フロア上にあると正常に作動せずロックされるおそれがあるとしています。トヨタの取扱説明書にも、インストルメントパネル上面・ドアポケット付近に電子キーを置いたまま車外に出ると閉じ込めのおそれがあると記載されています。スペアキーを取りに行けない場合は、JAFや自動車保険のロードサービスに連絡してください（" + CHECKED + "）。",
  },
  {
    q: "電池を交換しても、キーが反応しません。",
    a: "日産は、電池交換後に各機能が正常に作動しないときは故障が考えられるとして、日産販売店への相談を案内しています（デイズの例、" + CHECKED + "）。ほかのメーカーの車も、販売店で点検を受けてください。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月14日"
      updatedIso="2026-11-14"
      crumbs={[{ name: "車の鍵（ドア）が開かないとき" }]}
      answerLead="スマートキーやリモコンキーで車のドアが開かないときは、キーの電池、電波の状況、キーの持ち方の順に確かめます。トヨタの取扱説明書は、スマートエントリーで解錠できない場合、ドアハンドルにキーを近づけて操作する、リモコン（ワイヤレス機能）を使う、それでも開かなければキーに内蔵されたメカニカルキーを使う、の順に案内しています。"
      answerBody={
        <>
          <p>
            スマートエントリーは微弱な電波を使っているため、キーの電池が減っているとき、強い電波の出る場所にいるとき、キーが金属の財布や小銭と一緒になっているときなどは正常に作動しない場合があります。キーを車内に閉じ込めた場合は、無理に開けようとせず、ロードサービスに連絡してください。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.smart}>トヨタ ヤリス取扱説明書「スマートエントリー＆スタートシステム」</Ext>、<Ext href={SRC.index}>同「こんなときは（症状別さくいん）」</Ext>（いずれも{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "症状ごとに確かめること",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">症状</th>
                      <th className="border border-border px-3 py-2 text-left">取扱説明書が挙げる原因</th>
                      <th className="border border-border px-3 py-2 text-left">対処</th>
                    </tr>
                  </thead>
                  <tbody>
                    {checks.map(([s, c, a]) => (
                      <tr key={s}>
                        <td className="border border-border px-3 py-2 font-medium">{s}</td>
                        <td className="border border-border px-3 py-2">{c}</td>
                        <td className="border border-border px-3 py-2">{a}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.index}>トヨタ ヤリス取扱説明書「こんなときは（症状別さくいん）」施錠／解錠／ドアの開閉ができない</Ext>、<Ext href={SRC.smart}>同「機能が正常に働かないおそれのある状況」</Ext>（いずれも{CHECKED}）。トヨタ公式サイトに掲載されているヤリスの取扱説明書の記載です。車種・年式によって機能や操作が異なるため、お使いの車の取扱説明書を確認してください。
              </p>
            </>
          ),
        },
        {
          h2: "キーを持っていても開かない、持ち方と操作の注意",
          body: (
            <>
              <p>トヨタの取扱説明書は、電子キーが作動範囲内にあっても、次のような場合は正しく作動しないことがあるとしています。</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>解錠のときに、電子キーがドアガラスやドアハンドルに近づきすぎている、地面の近くや高い場所にある</li>
                <li>手袋を着用している</li>
                <li>すばやくドアハンドルを操作した、作動範囲に入ってすぐにドアハンドルを操作した（センサーにふれて解錠を確認してから引く）</li>
                <li>車の近くでリモコンで施錠すると、スマートエントリーによる解錠ができなくなることがある（リモコンで解錠すると復帰する）</li>
                <li>ロックセンサーの表面に氷・雪・泥が付いている（取り除いて再度操作する）</li>
              </ul>
              <p>
                ドアの鍵穴やドアのすき間が凍って開かない場合は、<a href="/kagiana-touketsu/" className="text-primary underline">鍵穴の凍結で鍵が開かないとき</a>を参照してください。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.smart}>トヨタ ヤリス取扱説明書「スマートエントリー＆スタートシステム」ご留意いただきたいこと</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "キーを車内に閉じ込めた・電池を替えても直らないとき",
          body: (
            <>
              <p>
                日産は、インテリジェントキーの封じ込め防止機能について、キーがインストルメントパネル上面・ドアポケット付近・グローブボックス内・フロア上にあると正常に作動せず、ドアがロックされるおそれがあるとしています。ドアポケットに入れた物がドアを閉めた衝撃でキーに当たり、ロックスイッチが押されるおそれもあるとしています。2019年3月以降に発売した日産車（アトラスF25・F26、クリッパーEV LE0を除く）は、車内にキーがあるときにスペアキーで車外からロック・アンロックできるとしています。
              </p>
              <p>
                閉じ込めてしまいスペアキーもない場合は、JAFや自動車保険のロードサービスに連絡します。料金の条件は<a href="/car-inlock/" className="text-primary underline">JAFのインキー料金</a>にまとめています。電池を交換しても作動しない場合、日産は故障が考えられるとして販売店への相談を案内しています。電池の交換手順は<a href="/smart-key-denchi/" className="text-primary underline">車のスマートキー電池切れ対処法</a>を参照してください。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.nissanInlock}>日産 FAQ No.6698</Ext>、<Ext href={SRC.nissanBattery}>日産 FAQ No.3537（デイズ）</Ext>（いずれも{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "キーをなくして開かない場合",
          body: (
            <p>
              トヨタの取扱説明書は、キーをなくした場合は販売店で純正の新しいキーを作ることができ、スマートエントリー装着車は盗難の危険性が極めて高くなるため、ただちに販売店に相談するよう案内しています（{CHECKED}）。スペアキーも手元にない場合の手順は<a href="/kuruma-kagi-funshitsu-spare-nashi/" className="text-primary underline">車の鍵を紛失してスペアキーもないとき</a>、トヨタ車は<a href="/toyota-smart-key-funshitsu/" className="text-primary underline">トヨタのスマートキーをなくしたとき</a>にまとめています。
            </p>
          ),
        },
      ]}
      faqTitle="車の鍵（ドア）が開かないときのよくある質問"
      faqs={faqs}
      related={[
        { href: "/smart-key-denchi/", label: "車のスマートキー電池切れ対処法", desc: "メカニカルキーと電池交換" },
        { href: "/car-inlock/", label: "JAFのインキー料金", desc: "閉じ込めたときの依頼先" },
        { href: "/kuruma-kagi-funshitsu-spare-nashi/", label: "車の鍵を紛失してスペアキーもないとき", desc: "メーカー3社の公式案内" },
        { href: "/kagiana-touketsu/", label: "鍵穴の凍結で開かないとき", desc: "お湯をかけない理由" },
        { href: "/immobilizer/", label: "イモビライザーとは", desc: "鍵と車両のID照合" },
      ]}
    />
  );
}
