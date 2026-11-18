import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/suzuki-smart-key-funshitsu/";
const TITLE = "スズキのスマートキー（携帯リモコン）を紛失したとき｜スズキ販売店にキーナンバーを伝えて相談：3車種の取扱説明書で確認";
const DESC =
  "スズキ車の携帯リモコン（キーレスプッシュスタートシステムのキー）をなくしたときの連絡先と準備を、スイフト・ジムニー／ジムニーシエラ・ハスラーの取扱説明書で2026年11月18日に確認しました。" +
  "キーナンバープレート、イモビライザー、ホームセンターで作った合鍵ではエンジンがかからない理由について。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const CHECKED = "2026年11月18日確認";

const SRC = {
  swift: "https://www.suzuki.co.jp/car/owners_manual/data/pdf/Web99011-69T08-000.pdf",
  jimny: "https://www.suzuki.co.jp/car/owners_manual/data/pdf/Web99011-77R42-000.pdf",
  hustler: "https://www.suzuki.co.jp/car/owners_manual/data/pdf/Web99011-65PH0-000.pdf",
};

// スズキ3車種の取扱説明書を同じ項目でそろえた比較（当サイト作成）
const models: [string, string, string, string][] = [
  [
    "スイフト（99011-69T08）",
    "携帯リモコン・キーを紛失したときは、すみやかにスズキ販売店またはスズキ代理店に相談",
    "キー作成時に必要なキーナンバーが打刻。車両以外の場所に保管し、紛失時はキーナンバーを伝えて相談",
    "携帯リモコン2個・格納キー2本。格納キーはドアの施錠・解錠に使えるが、エンジンの始動・停止には使えない",
  ],
  [
    "ジムニー／ジムニーシエラ（99011-77R42）",
    "キー・携帯リモコンを紛失したときは、すみやかにスズキ販売店またはスズキ代理店に相談",
    "紛失時はキーナンバーを伝えて相談（同上）",
    "ホームセンターなどで作ったスペアキーはイモビライザー機能がなく、エンジンを始動できない。純正キーに暗証コードの登録（最大4本）が必要",
  ],
  [
    "ハスラー（99011-65PH0）",
    "キー・携帯リモコンを紛失したときは、すみやかにスズキ販売店またはスズキ代理店に相談",
    "紛失時はキーナンバーを伝えて相談（同上）",
    "ホームセンターなどで作ったスペアキーではエンジンを始動できない。純正キーに暗証コードの登録（最大4本）が必要",
  ],
];

const faqs: Faq[] = [
  {
    q: "スズキのスマートキーをなくしました。どこに連絡すればよいですか？",
    a: "スズキの取扱説明書（スイフト・ジムニー／ジムニーシエラ・ハスラー）は、盗難などを防ぐため、携帯リモコンやキーを紛失したときはすみやかにスズキ販売店またはスズキ代理店に相談するよう案内しています（" + CHECKED + "）。",
  },
  {
    q: "相談するときに、何を伝えればよいですか？",
    a: "取扱説明書は、キーナンバープレートにキー作成時に必要なキーナンバーが打刻されており、万一キーを紛失したときはキーナンバーを伝えて相談するよう案内しています。キーナンバープレートは車両以外の場所に保管するよう書かれています。必要な書類や本人確認の方法は、依頼する販売店に確認してください（" + CHECKED + "）。",
  },
  {
    q: "ホームセンターで合鍵を作れば、車を動かせますか？",
    a: "ジムニー／ジムニーシエラとハスラーの取扱説明書は、ホームセンターなどでスペアキーを作成しても、イモビライザー機能がないためドアの施錠・解錠はできてもエンジンの始動はできず、イモビライザー機能付きのスズキ純正キーに暗証コードを登録（最大4本）する必要があると記載しています（" + CHECKED + "）。",
  },
  {
    q: "携帯リモコンに入っているキーで、エンジンをかけられますか？",
    a: "スイフトの取扱説明書は、携帯リモコンに格納されているキーはドアの施錠・解錠には使えるが、エンジンの始動・停止には使えないとしています。エンジンの始動・停止には携帯リモコンを使います（" + CHECKED + "）。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月18日"
      updatedIso="2026-11-18"
      crumbs={[{ name: "スズキのスマートキーを紛失したとき" }]}
      answerLead="スズキ車の携帯リモコン（スマートキー）をなくしたときは、スズキ販売店またはスズキ代理店に相談します。スズキの取扱説明書は、盗難などを防ぐため紛失時はすみやかに相談し、キーナンバープレートに打刻されたキーナンバーを伝えるよう案内しています。"
      answerBody={
        <>
          <p>
            スズキの取扱説明書では、スマートキーにあたる鍵を「携帯リモコン」と呼んでいます。キーナンバープレートはキーとは別に、車両以外の場所に保管するよう案内されています。手元にあれば、販売店に連絡するときに用意します。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.swift}>スズキ スイフト 取扱説明書（99011-69T08）「ドアの開閉」</Ext>（{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "3車種の取扱説明書で見る、紛失時の案内",
          body: (
            <>
              <p>スズキ公式サイトで公開されている3車種の取扱説明書（PDF）を開き、キーの紛失時の案内とキーナンバープレートなどの記載を、当サイトで同じ項目にそろえました。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">車種（取扱説明書の番号）</th>
                      <th className="border border-border px-3 py-2 text-left">紛失時の案内</th>
                      <th className="border border-border px-3 py-2 text-left">キーナンバープレート</th>
                      <th className="border border-border px-3 py-2 text-left">その他の記載</th>
                    </tr>
                  </thead>
                  <tbody>
                    {models.map(([m, l, t, o]) => (
                      <tr key={m}>
                        <td className="border border-border px-3 py-2 font-medium">{m}</td>
                        <td className="border border-border px-3 py-2">{l}</td>
                        <td className="border border-border px-3 py-2">{t}</td>
                        <td className="border border-border px-3 py-2">{o}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.swift}>スイフト 取扱説明書（99011-69T08）</Ext>、<Ext href={SRC.jimny}>ジムニー／ジムニーシエラ 取扱説明書（99011-77R42）</Ext>、<Ext href={SRC.hustler}>ハスラー 取扱説明書（99011-65PH0）</Ext>（いずれもスズキ公式、{CHECKED}）。3車種とも、紛失時の相談先はスズキ販売店またはスズキ代理店で共通しています。ジムニー／ジムニーシエラには、キーレスプッシュスタートシステムを装備しない仕様もあります。
              </p>
            </>
          ),
        },
        {
          h2: "合鍵を作っても、エンジンがかからない理由",
          body: (
            <>
              <p>
                ジムニー／ジムニーシエラとハスラーの取扱説明書によると、すべてのキーにイモビライザー（車両盗難防止装置）の機能が付いています。スイフトの取扱説明書では、イモビライザーシステムは携帯リモコンが電波で車両と通信し、あらかじめ登録された携帯リモコン以外ではエンジンを始動できないようにする仕組みと説明されています。
              </p>
              <p>
                そのため、ジムニー／ジムニーシエラとハスラーの取扱説明書は、ホームセンターなどで作ったスペアキーでは、ドアの施錠・解錠はできてもエンジンは始動できないと明記しています。新しいキーを使うには、イモビライザー機能付きのスズキ純正キーに暗証コードを登録する必要があり、登録できるのは最大4本です。キーの購入と暗証コードの登録は、スズキ販売店またはスズキ代理店への相談になります。
              </p>
              <p>
                イモビライザーの仕組みは<a href="/immobilizer/" className="text-primary underline">イモビライザーとは</a>、販売店でのスペアキーの注文は<a href="/kuruma-spare-key/" className="text-primary underline">車のスペアキーは販売店で注文できる</a>にまとめています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.swift}>スイフト 取扱説明書（99011-69T08）「イモビライザーシステム」</Ext>、<Ext href={SRC.jimny}>ジムニー／ジムニーシエラ 取扱説明書（99011-77R42）「ドアの開閉」</Ext>、<Ext href={SRC.hustler}>ハスラー 取扱説明書（99011-65PH0）「ドアの開閉」</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "連絡する前に確かめること",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>キーナンバープレートが手元にあるか（車両以外の場所に保管するよう案内されています）</li>
                <li>残っている携帯リモコン・キーが何本あるか（3車種の取扱説明書では、携帯リモコン2個とリモコンに格納できるキー2本が付いていると記載）</li>
                <li>外出先でなくした場合は、最後に使った場所と、警察への遺失届を出したか</li>
                <li>車を動かす必要があるか（携帯リモコンがなく、車をその場から動かせない場合はロードサービスへの相談も考えます）</li>
              </ul>
              <p>
                警察への届け出の手順は<a href="/kagi-funshitsu/" className="text-primary underline">鍵をなくした時の対処法</a>、スペアキーもない場合の考え方は<a href="/kuruma-kagi-funshitsu-spare-nashi/" className="text-primary underline">車の鍵を紛失してスペアキーもないとき</a>にまとめています。
              </p>
            </>
          ),
        },
        {
          h2: "携帯リモコンの電池切れと、紛失との見分け",
          body: (
            <p>
              携帯リモコンが手元にあるのに反応しない場合は、紛失ではなく電池切れの可能性があります。ハスラーの取扱説明書では、携帯リモコンの電池が切れている状態のときは、リモコンをエンジンスイッチに当てるよう表示で案内される場合があると記載されています（<Ext href={SRC.hustler}>ハスラー 取扱説明書</Ext>、{CHECKED}）。手順は<a href="/smart-key-denchi/" className="text-primary underline">車のスマートキー電池切れ対処法</a>、キーの種類は<a href="/kuruma-kagi-shurui/" className="text-primary underline">車の鍵の種類</a>を参照してください。
            </p>
          ),
        },
      ]}
      faqTitle="スズキのスマートキーを紛失したときのよくある質問"
      faqs={faqs}
      related={[
        { href: "/kuruma-kagi-funshitsu-spare-nashi/", label: "車の鍵を紛失してスペアキーもないとき", desc: "トヨタ・日産・SUBARUの公式案内" },
        { href: "/toyota-smart-key-funshitsu/", label: "トヨタのスマートキーを紛失したとき", desc: "残りのキーを持って販売店へ" },
        { href: "/honda-smart-key-funshitsu/", label: "ホンダのスマートキーを紛失したとき", desc: "Honda販売店とキーナンバータグ" },
        { href: "/immobilizer/", label: "イモビライザーとは", desc: "鍵と車両のID照合" },
        { href: "/kuruma-spare-key/", label: "車のスペアキーは販売店で注文できる", desc: "必要な書類" },
      ]}
    />
  );
}
