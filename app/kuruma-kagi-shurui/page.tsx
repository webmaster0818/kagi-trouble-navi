import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/kuruma-kagi-shurui/";
const TITLE = "車の鍵の種類｜スマートキー・リモコンキー・メカニカルキー・キーナンバープレートの違いと、トヨタ・日産・ホンダでの呼び方";
const DESC =
  "車の鍵の種類を、トヨタ ヤリスの取扱説明書、日産のよくあるご質問、ホンダ フィットの取扱説明書で2026年11月15日に確認しました。" +
  "車を買ったときに渡されるキーの組み合わせ、スマートキーに内蔵された機械式の鍵の役割、メーカーごとの呼び方、電池とキーをなくしたときの相談先について。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const CHECKED = "2026年11月15日確認";

const SRC = {
  toyotaKey: "https://manual.toyota.jp/yaris/2207/cv/ja_JP/contents/vhch03se010401.php",
  nissanFob: "https://faq2.nissan.co.jp/faq/show/6694?category_id=9&site_domain=default",
  nissanInlock: "https://faq2.nissan.co.jp/faq/show/6698?site_domain=default",
  honda: "https://www.honda.co.jp/ownersmanual/webom/jpn/fit/2026/details/136231090-14211.html",
};

// 3社の公式資料を同じ項目でそろえた比較（当サイト作成）
const makers: [string, string, string, string][] = [
  ["トヨタ（ヤリス）", "電子キー（スマートエントリー＆スタートシステム装着車）", "メカニカルキー（挿し込み方向に指定のある片溝キー）", "電池の標準的な寿命は1～2年。なくしたときはトヨタ販売店"],
  ["日産", "インテリジェントキー（フォブタイプ）", "メカニカルキー（キーに内蔵）", "電池が切れたときや車両のバッテリーがあがったときはメカニカルキーで施錠・解錠"],
  ["ホンダ（フィット）", "Hondaスマートキー", "内蔵キー（レバーを引きながら取り出す）", "電池はボタン電池CR2032。なくしたときはHonda販売店"],
];

const faqs: Faq[] = [
  {
    q: "車を買ったときに、どんな鍵を受け取りますか？",
    a: "トヨタ ヤリスの取扱説明書では、スマートエントリー＆スタートシステム装着車は「電子キー」「メカニカルキー」「キーナンバープレート」、非装着車は「キー（ワイヤレス機能装着／非装着）」「キーナンバープレート」を渡すと記載されています（" + CHECKED + "）。",
  },
  {
    q: "スマートキーの中に入っている金属の鍵は何に使いますか？",
    a: "電子キーの電池が切れたときや、スマートエントリーなどの機能が正常に作動しないときにドアを開けるための鍵です。トヨタは使用後はもとにもどして電子キーと一緒に携帯するよう案内しています。日産も、インテリジェントキーの電池が切れたときや車両のバッテリーがあがったときはメカニカルキーで施錠・解錠するとしています（" + CHECKED + "）。",
  },
  {
    q: "スマートキーの電池はどのくらいもちますか？",
    a: "トヨタ ヤリスの取扱説明書では、電池の標準的な寿命は1～2年で、電子キーは常に電波を受信しているため使っていないあいだも電池が消耗するとしています。ホンダ フィットの取扱説明書では、Hondaスマートキーの電池はボタン電池CR2032です（" + CHECKED + "）。交換の手順は車のスマートキー電池切れ対処法のページにまとめています。",
  },
  {
    q: "身に覚えがないのに「新しいキーが登録されました」と表示されました。",
    a: "トヨタ ヤリスの取扱説明書は、追加で新しく電子キーが登録された場合、車外から解錠して運転席ドアを開けたときにメッセージが表示されることが10日ほど続くとしています。登録をした覚えがないのに表示されたときは、お持ちの電子キー以外に登録されている電子キーがないかをトヨタ販売店で確認するよう案内しています（" + CHECKED + "）。",
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
      crumbs={[{ name: "車の鍵の種類" }]}
      answerLead="車の鍵は、ボタンで施錠・解錠するリモコン（ワイヤレス）機能付きのキー、持っているだけでドアの施錠・解錠やエンジン始動ができるスマートキー、その中に入っている機械式の鍵（メカニカルキー）、鍵の番号を記したキーナンバープレートに分けられます。スマートキーの呼び方はメーカーによって異なり、トヨタは「電子キー」、日産は「インテリジェントキー」、ホンダは「Hondaスマートキー」です。"
      answerBody={
        <>
          <p>
            スマートキーにはメカニカルキー（内蔵キー）が入っており、電池切れなどでスマートキーが使えないときにドアを開けるために使います。トヨタの取扱説明書では、キーナンバープレートはキーと一緒に渡されるものとして記載されています。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.toyotaKey}>トヨタ ヤリス取扱説明書「キー」</Ext>、<Ext href={SRC.nissanFob}>日産 FAQ No.6694</Ext>、<Ext href={SRC.honda}>ホンダ フィット取扱説明書「Hondaスマートキーの取り扱いと電池交換」</Ext>（いずれも{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "車を買ったときに渡されるキーの組み合わせ（トヨタ ヤリスの例）",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">車の装備</th>
                      <th className="border border-border px-3 py-2 text-left">渡されるキー</th>
                      <th className="border border-border px-3 py-2 text-left">できること</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border px-3 py-2 font-medium">スマートエントリー＆スタートシステム装着車</td>
                      <td className="border border-border px-3 py-2">電子キー、メカニカルキー、キーナンバープレート</td>
                      <td className="border border-border px-3 py-2">電子キーを持っているだけで施錠・解錠・エンジン始動（スマートエントリー＆スタートシステム）。ボタンでの施錠・解錠（ワイヤレス機能）</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-3 py-2 font-medium">スマートエントリー＆スタートシステム非装着車</td>
                      <td className="border border-border px-3 py-2">キー（ワイヤレス機能装着）、キー（ワイヤレス機能非装着）、キーナンバープレート</td>
                      <td className="border border-border px-3 py-2">キーを差し込んで回す操作。ワイヤレス機能装着のキーはボタンで施錠・解錠。ボタンを押すとキーが展開する</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.toyotaKey}>トヨタ ヤリス取扱説明書「キー」キーについて・キーを使うには</Ext>（{CHECKED}）。車種・年式・グレードによって渡されるキーは異なります。
              </p>
            </>
          ),
        },
        {
          h2: "メーカーごとの呼び方と内蔵キー（トヨタ・日産・ホンダの比較）",
          body: (
            <>
              <p>3社の公式資料に書かれている名称と内蔵キーの扱いを、当サイトで同じ項目にそろえました。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">メーカー</th>
                      <th className="border border-border px-3 py-2 text-left">スマートキーの呼び方</th>
                      <th className="border border-border px-3 py-2 text-left">内蔵された機械式の鍵</th>
                      <th className="border border-border px-3 py-2 text-left">電池・紛失時など</th>
                    </tr>
                  </thead>
                  <tbody>
                    {makers.map(([m, s, k, n]) => (
                      <tr key={m}>
                        <td className="border border-border px-3 py-2 font-medium">{m}</td>
                        <td className="border border-border px-3 py-2">{s}</td>
                        <td className="border border-border px-3 py-2">{k}</td>
                        <td className="border border-border px-3 py-2">{n}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                日産は、フォブタイプのインテリジェントキーでの施錠・解錠の方法として、キーを携帯してドアの「リクエストスイッチ」を押す方法と、キーのリモコンスイッチを押す方法を挙げています。ディーラーオプションのカーアラームを付けた車は、メカニカルキー以外で施錠した車をメカニカルキーで解錠するとアラームが鳴るため注意が必要としています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.toyotaKey}>トヨタ ヤリス取扱説明書「キー」</Ext>、<Ext href={SRC.nissanFob}>日産 FAQ No.6694「インテリジェントキー(フォブタイプ)でのドアの施錠・解錠方法を教えて。」</Ext>、<Ext href={SRC.honda}>ホンダ フィット（2026年）取扱説明書「Hondaスマートキーの取り扱いと電池交換」</Ext>（いずれも{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "スマートキーを持つときの注意",
          body: (
            <>
              <p>トヨタ ヤリスの取扱説明書は、電子キーについて次のような注意を記載しています。</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>電源を入れた電化製品とは10cm以上離して携帯する（10cm以内にあると電波が干渉し、正常に機能しない場合がある）</li>
                <li>テレビ・パソコン・携帯電話や充電器・電磁調理器など磁気を発生する電化製品の1m以内に置かない（電池の著しい消耗を防ぐため）</li>
                <li>航空機内でキーのスイッチを押さない。かばんに入れる場合も、簡単にスイッチが押されないように保管する</li>
                <li>長時間使わないときは節電モードに設定すると、電池の消耗を抑えられる</li>
              </ul>
              <p>
                日産は、インテリジェントキーを車内のインストルメントパネル上面・ドアポケット付近・グローブボックス内・フロア上に置くと、封じ込め防止機能が正常に作動せずロックされるおそれがあるとしています。ドアが開かないときの切り分けは<a href="/kuruma-kagi-akanai/" className="text-primary underline">車の鍵（ドア）が開かないとき</a>を参照してください。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.toyotaKey}>トヨタ ヤリス取扱説明書「キー」</Ext>、<Ext href={SRC.nissanInlock}>日産 FAQ No.6698</Ext>（いずれも{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "キーの種類と、なくしたときの相談先",
          body: (
            <p>
              スマートキーや電子キーは車両側にIDを登録して使うため、なくしたときは販売店に相談します。ホンダは「Hondaスマートキーをなくした場合は、Honda販売店へご連絡ください」としています（{CHECKED}）。手元にキーが残っている場合のスペアキーの注文は<a href="/kuruma-spare-key/" className="text-primary underline">車のスペアキーは販売店で注文できる</a>、すべてなくした場合は<a href="/kuruma-kagi-funshitsu-spare-nashi/" className="text-primary underline">車の鍵を紛失してスペアキーもないとき</a>、キーと車両のID照合の仕組みは<a href="/immobilizer/" className="text-primary underline">イモビライザーとは</a>にまとめています。
            </p>
          ),
        },
      ]}
      faqTitle="車の鍵の種類のよくある質問"
      faqs={faqs}
      related={[
        { href: "/smart-key-denchi/", label: "車のスマートキー電池切れ対処法", desc: "メカニカルキーと電池交換" },
        { href: "/immobilizer/", label: "イモビライザーとは", desc: "鍵と車両のID照合" },
        { href: "/kuruma-spare-key/", label: "車のスペアキーは販売店で注文できる", desc: "必要な書類" },
        { href: "/kuruma-kagi-akanai/", label: "車の鍵（ドア）が開かないとき", desc: "原因の切り分け" },
        { href: "/kuruma-kagi-funshitsu-spare-nashi/", label: "車の鍵を紛失してスペアキーもないとき", desc: "メーカー3社の公式案内" },
        { href: "/honda-smart-key-funshitsu/", label: "ホンダのスマートキーを紛失したとき", desc: "Honda販売店とキーナンバータグ" },
        { href: "/suzuki-smart-key-funshitsu/", label: "スズキのスマートキーを紛失したとき", desc: "スズキ販売店とキーナンバープレート" },
        { href: "/kuruma-kagi-nukenai/", label: "車の鍵が抜けないとき", desc: "シフトレバーの位置とキーの回し方" },
      ]}
    />
  );
}
