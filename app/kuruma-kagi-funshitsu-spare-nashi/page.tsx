import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/kuruma-kagi-funshitsu-spare-nashi/";
const TITLE = "車の鍵を紛失してスペアキーもないとき｜トヨタ・日産・SUBARUの公式案内を比較：窓口・必要書類・ドアが開かない場合";
const DESC =
  "車の鍵をすべてなくしスペアキーもない場合の手順を、トヨタ・日産・SUBARUのよくあるご質問で2026年11月14日に確認し、同じ項目で比較しました。" +
  "鍵の作成窓口は販売店で、本人確認の書類と車検証が必要です。ドアが開かない場合のロードサービスとキーナンバーの注意も掲載。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const CHECKED = "2026年11月14日確認";

const SRC = {
  toyotaDocs: "https://toyota.jp/faq/show/176.html",
  toyotaManual: "https://manual.toyota.jp/yaris/2207/cv/ja_JP/contents/vhix01se010401.php",
  nissan: "https://faq2.nissan.co.jp/faq/show/8791?category_id=9&site_domain=default",
  subaruBoth: "https://faq.subaru.jp/faq/show/392?site_domain=default",
  subaruPlate: "https://faq.subaru.jp/faq/show/632?site_domain=default",
  subaruCost: "https://faq.subaru.jp/faq/show/495?site_domain=default",
};

const rows: [string, string, string, string][] = [
  [
    "鍵を作る窓口",
    "トヨタ販売店（スマートエントリー装着車は、盗難の危険性が極めて高くなるため、ただちに販売店に相談）",
    "日産販売店に速やかに相談",
    "SUBARU販売店が窓口",
  ],
  [
    "必要な書類（本人の場合）",
    "身分証明（免許証・パスポートなど）、車検証",
    "車検証と、車両名義人の運転免許証またはパスポート",
    "車両情報（車検証）。残っている鍵とキーナンバープレートも用意するよう案内",
  ],
  [
    "家族・法人の人が行く場合",
    "家族：来店者の身分証明・車検証・使用者（所有者）との関係が分かる書類（世帯全員の記載がある住民票など）。法人：来店者の身分証明・車検証・法人との関係が分かる書類（社員証・名刺など）",
    "FAQに記載なし（販売店に確認）",
    "FAQに記載なし（販売店に確認）",
  ],
  [
    "ドアが開かない・エンジンがかからない場合",
    "FAQ No.176に記載なし（ロードサービスの利用を検討）",
    "JAFなどのロードサービスで解錠作業やレッカー移動をしてから、販売店へ車を運び込んでキーを注文する。ロードサービスの費用は利用者の負担",
    "キーを紛失するとエンジンを始動できないため、SUBARU安心ほっとライン（24時間・365日、SUBARU自動車保険プランの加入の有無を問わない）に連絡",
  ],
  [
    "キーナンバー",
    "分かる場合は控えて販売店へ行くと作業がスムーズ",
    "FAQ No.8791に記載なし",
    "キーナンバープレートがない状態で作ると、キーシリンダなどの部品交換が必要になる可能性がある。プレートの再発行はできない",
  ],
  [
    "なくしたキーへの対策",
    "（スマートエントリー装着車は、ただちに販売店へ相談）",
    "インテリジェントキーは該当のIDコードを削除し、拾われても作動しないようにできる",
    "FAQに記載なし",
  ],
  [
    "電話での注文・費用",
    "費用は販売店に相談",
    "電話での注文は受け付けていない。必要書類・価格は販売店に確認",
    "鍵の作成や費用は販売店ごとに設定",
  ],
];

const faqs: Faq[] = [
  {
    q: "車の鍵を全部なくしました。最初にどこへ連絡すればよいですか？",
    a: "トヨタ・日産・SUBARUのよくあるご質問は、いずれも鍵の作成窓口を販売店としています。車が出先にあってドアを開けられない、エンジンをかけられない場合、日産はJAFなどのロードサービスで解錠作業やレッカー移動をしてから販売店に車を運び込むよう、SUBARUはSUBARU安心ほっとラインへの連絡を案内しています（" + CHECKED + "）。",
  },
  {
    q: "販売店で鍵を作るとき、何を持っていけばよいですか？",
    a: "トヨタは身分証明（免許証・パスポートなど）と車検証、日産は車検証と車両名義人の運転免許証またはパスポート、SUBARUは車両情報（車検証）を挙げています（" + CHECKED + "）。車検証を車内に置いている場合は、ドアを開けてからの手続きになるため、販売店に事情を伝えて相談してください。",
  },
  {
    q: "家族の車の鍵を、代わりに作りに行けますか？",
    a: "トヨタは、車検証に記載された使用者（または所有者）の家族が来店する場合、来店者の身分証明・車検証に加えて、使用者（所有者）との関係が分かる書類（世帯全員の記載がある住民票など）が必要としています（" + CHECKED + "）。ほかのメーカーは販売店に確認してください。",
  },
  {
    q: "キーナンバーが分からなくても鍵は作れますか？",
    a: "SUBARUは、キーナンバープレートがない状態でキーを作る場合、キーシリンダなどの部品交換が必要になる可能性があるとし、プレートの再発行はできないとしています。トヨタは、キーナンバーが分かる場合は控えて販売店に行くと作業がスムーズとしています（" + CHECKED + "）。",
  },
  {
    q: "なくした鍵を誰かが拾ったら、車を開けられてしまいますか？",
    a: "日産は、インテリジェントキーの場合は該当のIDコードを削除し、拾われても作動しないようにできるとしています（" + CHECKED + "）。鍵を作るときに、なくしたキーの登録の扱いを販売店に確認してください。",
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
      crumbs={[{ name: "車の鍵を紛失してスペアキーもないとき" }]}
      answerLead="車の鍵をすべてなくし、スペアキーもない場合は、その車のメーカーの販売店で新しい鍵を作ります。トヨタ・日産・SUBARUのよくあるご質問は、いずれも販売店を窓口とし、本人確認の書類と車検証を求めています。車を動かせない場合は、先にロードサービスで解錠やレッカー移動を手配します。"
      answerBody={
        <>
          <p>
            日産は、ドアロックを解錠できない場合はJAFなどのロードサービスで解錠作業やレッカー移動をしてから、販売店へ車を運び込んでキーを注文するよう案内しています。電話での注文は受け付けていません。キーナンバーが分かると手続きが進みやすく、分からない場合は部品交換が必要になることがあります。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.nissan}>日産 FAQ No.8791「キーを紛失した場合の対処方法を教えて。」</Ext>、<Ext href={SRC.toyotaDocs}>トヨタ FAQ No.176</Ext>、<Ext href={SRC.subaruBoth}>SUBARU FAQ No.392</Ext>（いずれも{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "トヨタ・日産・SUBARUの公式案内を同じ項目で比較",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">項目</th>
                      <th className="border border-border px-3 py-2 text-left">トヨタ</th>
                      <th className="border border-border px-3 py-2 text-left">日産</th>
                      <th className="border border-border px-3 py-2 text-left">SUBARU</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map(([k, t, n, s]) => (
                      <tr key={k}>
                        <td className="border border-border px-3 py-2 font-medium">{k}</td>
                        <td className="border border-border px-3 py-2">{t}</td>
                        <td className="border border-border px-3 py-2">{n}</td>
                        <td className="border border-border px-3 py-2">{s}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                出典：トヨタ <Ext href={SRC.toyotaDocs}>FAQ No.176</Ext>・<Ext href={SRC.toyotaManual}>ヤリス取扱説明書「こんなときは（症状別さくいん）」</Ext>、日産 <Ext href={SRC.nissan}>FAQ No.8791</Ext>、SUBARU <Ext href={SRC.subaruBoth}>FAQ No.392</Ext>・<Ext href={SRC.subaruPlate}>No.632</Ext>・<Ext href={SRC.subaruCost}>No.495</Ext>（いずれも{CHECKED}）。「記載なし」は、上記のFAQに書かれていないという意味で、対応しないという意味ではありません。
              </p>
            </>
          ),
        },
        {
          h2: "スペアキーがないときの順番",
          body: (
            <ol className="list-decimal pl-5 space-y-1.5">
              <li>落とした可能性のある場所を確認する（警察への届け出は<a href="/kagi-funshitsu/" className="text-primary underline">鍵をなくした時の対処法</a>）。</li>
              <li>車が出先にあり開けられない・動かせない場合は、JAFや自動車保険のロードサービスに連絡する（<a href="/car-inlock/" className="text-primary underline">JAFのインキー料金</a>）。SUBARU車はSUBARU安心ほっとラインも利用できる。</li>
              <li>車検証と本人確認の書類を用意し、メーカーの販売店に相談する。家族や法人の担当者が行く場合は、関係が分かる書類も必要になる（トヨタの例）。</li>
              <li>新しい鍵ができたら、予備のキーも用意し、キーナンバープレート（タグ）は車外の別の場所に保管する（<a href="/kuruma-spare-key/" className="text-primary underline">車のスペアキーの注文</a>）。</li>
            </ol>
          ),
        },
        {
          h2: "メーカー別の詳しいページ",
          body: (
            <p>
              トヨタ車の取扱説明書の「キーをなくしたときは」とキーナンバーの扱いは<a href="/toyota-smart-key-funshitsu/" className="text-primary underline">トヨタのスマートキーをなくしたとき</a>にまとめています。鍵はあるのにドアが開かない場合は<a href="/kuruma-kagi-akanai/" className="text-primary underline">車の鍵（ドア）が開かないときの原因の切り分け</a>を参照してください。
            </p>
          ),
        },
      ]}
      faqTitle="車の鍵を紛失してスペアキーもないときのよくある質問"
      faqs={faqs}
      related={[
        { href: "/toyota-smart-key-funshitsu/", label: "トヨタのスマートキーをなくしたとき", desc: "取扱説明書と必要書類" },
        { href: "/kuruma-spare-key/", label: "車のスペアキーは販売店で注文できる", desc: "ディーラーと鍵屋の使い分け" },
        { href: "/car-inlock/", label: "JAFのインキー料金", desc: "会員・非会員の条件" },
        { href: "/kuruma-kagi-akanai/", label: "車の鍵（ドア）が開かないとき", desc: "電池・電波・置き忘れ" },
        { href: "/immobilizer/", label: "イモビライザーとは", desc: "鍵と車両のID照合" },
      ]}
    />
  );
}
