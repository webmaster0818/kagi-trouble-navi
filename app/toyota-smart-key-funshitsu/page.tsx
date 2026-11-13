import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/toyota-smart-key-funshitsu/";
const TITLE = "トヨタのスマートキー（電子キー）を紛失したとき｜残りのキーを持ってすぐ販売店へ・必要な書類";
const DESC =
  "トヨタ車のスマートキー（電子キー）をなくしたときの対応を、トヨタ公式サイトのよくあるご質問と、そこに掲載された取扱説明書（カローラ ツーリング）の抜粋で2026年11月13日に確認しました。" +
  "盗難の危険、販売店に持っていくもの、本人・家族・法人で違う書類、キーナンバープレートの保管について。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const CHECKED = "2026年11月13日確認";

const SRC = {
  manual: "https://toyota.jp/pages/contents/faq/2.0/pdf/8820/8820_02.pdf",
  manualFaq: "https://toyota.jp/faq/show/8820.html",
  docs: "https://toyota.jp/faq/show/176.html",
};

const docs: [string, string][] = [
  ["車検証に記載の使用者（または所有者）本人", "身分証明（免許証、パスポートなど）、車検証"],
  ["使用者（または所有者）の家族", "来店した人の身分証明、車検証、来店した人と使用者（または所有者）との関係が分かる書類（世帯全員の記載がある住民票など）"],
  ["使用者（または所有者）が法人", "来店した人の身分証明、車検証、来店した人と法人との関係が分かる書類（社員証・名刺など）"],
];

const faqs: Faq[] = [
  {
    q: "トヨタのスマートキーをなくしました。まず何をすればよいですか？",
    a: "トヨタの取扱説明書（カローラ ツーリング）は、電子キーを紛失した状態で放置すると盗難の危険性が極めて高くなるとして、車両に付属している残りの電子キーをすべて持って、ただちにトヨタ販売店に相談するよう案内しています（" + CHECKED + "）。",
  },
  {
    q: "販売店に行くとき、どんな書類が必要ですか？",
    a: "トヨタのよくあるご質問は、紛失などで販売店でキーを追加・新規作成するとき、車検証に記載の使用者（または所有者）本人なら身分証明（免許証、パスポートなど）と車検証が必要としています。家族や法人の場合は、来店した人との関係が分かる書類も必要です。詳細は近くのトヨタ販売店に相談してください（" + CHECKED + "）。",
  },
  {
    q: "キーナンバーが分かると何が違いますか？",
    a: "取扱説明書（カローラ ツーリング）は、キーナンバープレートに打刻されたキーナンバーと残りのキーから、トヨタ販売店でトヨタ純正品の新しいキーを作れるとしています。よくあるご質問も、キーナンバーが分かる場合は控えてから販売店に行くと作業がスムーズとしています（" + CHECKED + "）。",
  },
  {
    q: "キーナンバープレートはどこに保管すればよいですか？",
    a: "取扱説明書（カローラ ツーリング）は、キーナンバープレートを車の中以外の安全な場所（財布の中など）に保管するよう案内しています（" + CHECKED + "）。",
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
      crumbs={[{ name: "車のスペアキー", href: "/kuruma-spare-key/" }, { name: "トヨタのスマートキーの紛失" }]}
      answerLead="トヨタ車のスマートキー（電子キー）をなくしたときは、車両に付属している残りの電子キーをすべて持って、ただちにトヨタ販売店に相談します。トヨタの取扱説明書は、電子キーを紛失した状態で放置すると盗難の危険性が極めて高くなるとしています。"
      answerBody={
        <>
          <p>
            販売店でキーを追加・新規作成するときは、車検証に記載の使用者（または所有者）本人なら、身分証明（免許証、パスポートなど）と車検証が必要です。キーナンバーが分かる場合は控えてから行くと、作業がスムーズに進みます。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.manual}>トヨタ「カローラ ツーリング」取扱説明書 7-2 緊急時の対処法（PDF）</Ext>（<Ext href={SRC.manualFaq}>トヨタ よくあるご質問</Ext>掲載の抜粋）、<Ext href={SRC.docs}>トヨタ よくあるご質問「紛失などによりトヨタ販売店でクルマのキーを追加・新規作成する際、必要な書類などはありますか？」</Ext>（いずれも{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "取扱説明書の「キーをなくしたときは」",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>キーナンバープレートに打刻されたキーナンバーと残りのキーから、トヨタ販売店でトヨタ純正品の新しいキーを作ることができる。</li>
                <li>キーナンバープレートは、車の中以外の安全な場所（財布の中など）に保管する。</li>
                <li>電子キーを紛失した状態で放置すると、盗難の危険性が極めて高くなる。車両に付属している残りの電子キーをすべて持って、ただちにトヨタ販売店に相談する。</li>
                <li>スマートエントリー＆スタートシステムの故障などで販売店に車両を持っていくときも、車両に付属しているすべての電子キーを持っていく。</li>
              </ul>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.manual}>トヨタ「カローラ ツーリング」取扱説明書 7-2 緊急時の対処法（PDF）</Ext>（{CHECKED}）。車種・年式によって取扱説明書の記載は異なるため、お乗りの車の取扱説明書もあわせて確認してください。
              </p>
            </>
          ),
        },
        {
          h2: "販売店でキーを作るときに必要な書類",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">来店する人</th>
                      <th className="border border-border px-3 py-2 text-left">注文時に必要な書類など</th>
                    </tr>
                  </thead>
                  <tbody>
                    {docs.map(([k, v]) => (
                      <tr key={k}>
                        <td className="border border-border px-3 py-2 font-medium">{k}</td>
                        <td className="border border-border px-3 py-2">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.docs}>トヨタ よくあるご質問（No.176）</Ext>（{CHECKED}）。費用と日数はトヨタの公式ページに記載がないため、販売店で確認してください。
              </p>
            </>
          ),
        },
        {
          h2: "電池切れ・ほかのメーカーは別ページで",
          body: (
            <p>
              なくしたのではなく電池が切れて反応しないときは<a href="/smart-key-denchi/" className="text-primary underline">車のスマートキー電池切れ対処法</a>、トヨタ・日産のスペアキーの注文と、ディーラー・鍵業者の使い分けは<a href="/kuruma-spare-key/" className="text-primary underline">車のスペアキーは販売店で注文できる</a>、鍵とエンジンを照合する仕組みは<a href="/immobilizer/" className="text-primary underline">イモビライザーとは</a>にまとめています。
            </p>
          ),
        },
      ]}
      faqTitle="トヨタのスマートキーを紛失したときのよくある質問"
      faqs={faqs}
      related={[
        { href: "/kuruma-spare-key/", label: "車のスペアキー", desc: "販売店での注文と書類" },
        { href: "/smart-key-denchi/", label: "スマートキーの電池切れ", desc: "ドアの開け方・始動のしかた" },
        { href: "/immobilizer/", label: "イモビライザーとは", desc: "鍵とエンジンの照合" },
        { href: "/kuruma-kagi-mark-tenmetsu/", label: "車の鍵マークの点滅", desc: "トヨタの取扱説明書で確認" },
        { href: "/car-inlock/", label: "車のインキー", desc: "JAFのロードサービス" },
      ]}
    />
  );
}
