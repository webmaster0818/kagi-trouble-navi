import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/daihatsu-kagi-funshitsu/";
const TITLE = "ダイハツ車の鍵をなくしたとき・新しい鍵を作るとき｜キーナンバーと残りのキーを持ってダイハツサービス工場へ：3車種の取扱説明書で確認";
const DESC =
  "ダイハツ車の電子カードキーやエマージェンシーキーをなくしたときの相談先と、新しい鍵を作るときに要るものを、タント・ムーヴ・ロッキーの取扱説明書で2026年11月20日に確認しました。" +
  "キーナンバープレート、登録できるキーの数（最大4個）、イモビライザーについて。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const CHECKED = "2026年11月20日確認";

const SRC = {
  index: "https://www.daihatsu.co.jp/service/torisetu/index.htm",
  tanto: "https://www.daihatsu.co.jp/service/torisetu/tanto/pdf/tanto_full_2608.pdf",
  move: "https://www.daihatsu.co.jp/service/torisetu/move/pdf/move_full_2607.pdf",
  rocky: "https://www.daihatsu.co.jp/service/torisetu/rocky/pdf/rocky_full_2611.pdf",
};

// ダイハツ3車種の取扱説明書を同じ項目でそろえた比較（当サイト作成）
const models: [string, string, string, string][] = [
  [
    "タント（取扱説明書 P.120〜122）",
    "電子カードキー・エマージェンシーキー・キーナンバープレート",
    "エマージェンシーキーの紛失：キーナンバーと残りのキーから、ダイハツサービス工場で純正品の新しいキーを作れる。電子カードキーの紛失：残りの電子カードキーをすべて持って、ただちにダイハツサービス工場に相談",
    "電子カードキーは最大4個まで設定できる",
  ],
  [
    "ムーヴ（取扱説明書 P.120〜122）",
    "キーフリーシステム非装着車：キー（ワイヤレスキー）・キー（スペアキー）・キーナンバープレート。装着車：電子カードキー・エマージェンシーキー・キーナンバープレート",
    "キー（非装着車）またはエマージェンシーキー（装着車）の紛失：キーナンバーと残りのキーから、ダイハツサービス工場で純正品の新しいキーを作れる。電子カードキーの紛失：残りの電子カードキーをすべて持って、ただちに相談",
    "ワイヤレスキー・電子カードキーは最大4個まで設定できる",
  ],
  [
    "ロッキー（取扱説明書 P.134〜136）",
    "電子カードキー・エマージェンシーキー・キーナンバープレート",
    "エマージェンシーキーの紛失：キーナンバーと残りのキーから、ダイハツサービス工場で純正品の新しいキーを作れる。電子カードキーの紛失：残りの電子カードキーをすべて持って、ただちに相談",
    "電子カードキーは最大4個まで設定できる",
  ],
];

const faqs: Faq[] = [
  {
    q: "ダイハツ車の鍵をなくしました。どこに相談すればよいですか？",
    a: "タント・ムーヴ・ロッキーの取扱説明書は、電子カードキーを紛失した状態で放置すると盗難の危険性が極めて高くなるため、車両に付属している残りの電子カードキーをすべて持って、ただちにダイハツサービス工場に相談するよう案内しています（" + CHECKED + "）。",
  },
  {
    q: "新しい鍵を作るには、何が必要ですか？",
    a: "3車種の取扱説明書は、エマージェンシーキー（ムーヴのキーフリーシステム非装着車はキー）をなくしたときは、キーナンバープレートに打刻されたキーナンバーと残りのキーから、ダイハツサービス工場でダイハツ純正品の新しいキーを作れると記載しています。本人確認の書類や費用・日数は、依頼するサービス工場に確認してください（" + CHECKED + "）。",
  },
  {
    q: "キーナンバープレートは、どこに保管すればよいですか？",
    a: "取扱説明書は、キーナンバープレートをお車の中以外の安全な場所（財布の中など）に保管するよう案内しています。車内に置いたままだと、車と一緒になくなるおそれがあります（" + CHECKED + "）。",
  },
  {
    q: "電子カードキーは何個まで持てますか？",
    a: "タント・ロッキーの取扱説明書では電子カードキーは最大4個まで、ムーヴの取扱説明書ではワイヤレスキー・電子カードキーは最大4個まで設定できるとしています。購入方法はダイハツサービス工場への相談になります（" + CHECKED + "）。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月20日"
      updatedIso="2026-11-20"
      crumbs={[{ name: "ダイハツ車の鍵をなくしたとき" }]}
      answerLead="ダイハツ車の鍵をなくしたときは、残っているキーをすべて持ってダイハツサービス工場に相談します。取扱説明書によると、キーナンバープレートに打刻されたキーナンバーと残りのキーがあれば、サービス工場でダイハツ純正品の新しいキーを作れます。"
      answerBody={
        <>
          <p>
            電子カードキーをなくしたまま放置すると盗難の危険性が極めて高くなると、取扱説明書は注意しています。キーナンバープレートが手元にあるかを確かめてから、早めに連絡してください。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.tanto}>ダイハツ タント 取扱説明書「3-1. キー」</Ext>（ダイハツ公式・{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "3車種の取扱説明書で見る、紛失時の案内",
          body: (
            <>
              <p>ダイハツ公式サイトで公開されている3車種の取扱説明書（PDF）を開き、付属するキーの種類と、紛失時の案内を当サイトで同じ項目にそろえました。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">車種（記載ページ）</th>
                      <th className="border border-border px-3 py-2 text-left">渡されるキー</th>
                      <th className="border border-border px-3 py-2 text-left">紛失時の案内</th>
                      <th className="border border-border px-3 py-2 text-left">キーの数</th>
                    </tr>
                  </thead>
                  <tbody>
                    {models.map(([m, k, l, n]) => (
                      <tr key={m}>
                        <td className="border border-border px-3 py-2 font-medium">{m}</td>
                        <td className="border border-border px-3 py-2">{k}</td>
                        <td className="border border-border px-3 py-2">{l}</td>
                        <td className="border border-border px-3 py-2">{n}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.tanto}>タント 取扱説明書</Ext>、<Ext href={SRC.move}>ムーヴ 取扱説明書</Ext>、<Ext href={SRC.rocky}>ロッキー 取扱説明書</Ext>（いずれもダイハツ公式「<Ext href={SRC.index}>取扱説明書</Ext>」で公開、{CHECKED}）。3車種とも、相談先はダイハツサービス工場で共通しています。年式・グレードにより装備が異なるため、お手元の取扱説明書もあわせてご確認ください。
              </p>
            </>
          ),
        },
        {
          h2: "電子カードキーとエマージェンシーキーの違い",
          body: (
            <>
              <p>
                電子カードキーは、持っているだけでドアの施錠・解錠やエンジンの始動ができるキー（キーフリーシステム）です。エマージェンシーキーは電子カードキーに収められた金属のキーで、取扱説明書では、電子カードキーの電池が切れたときやキーフリーシステムが正常に作動しないときに必要になると説明されています。使ったあとはもとに戻し、電子カードキーと一緒に持ち歩くよう案内されています。
              </p>
              <p>
                そのため、電子カードキーごとなくした場合は、中のエマージェンシーキーも一緒になくしたことになります。残りの電子カードキーが何個あるかを確かめて、すべてを持ってサービス工場に相談します。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.tanto}>タント 取扱説明書「エマージェンシーキーを使うには」</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "鍵の形だけ同じものを作っても、エンジンはかからない",
          body: (
            <>
              <p>
                タントの取扱説明書は、エンジンイモビライザーシステムについて「キーに信号発信機が内蔵してあり、あらかじめ登録されたキー以外ではエンジンを始動できません」と説明しています（P.62）。新しいキーは、形を合わせるだけでなく車両への登録が必要になるため、取扱説明書が案内するとおりダイハツサービス工場への相談になります。
              </p>
              <p>
                イモビライザーの仕組みは<a href="/immobilizer/" className="text-primary underline">イモビライザーとは</a>、販売店でのスペアキーの注文は<a href="/kuruma-spare-key/" className="text-primary underline">車のスペアキーは販売店で注文できる</a>にまとめています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.tanto}>タント 取扱説明書「エンジンイモビライザーシステム」</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "相談する前に確かめること",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>キーナンバープレートが手元にあるか（取扱説明書は、車の中以外の安全な場所に保管するよう案内しています）</li>
                <li>残っている電子カードキー・キーが何個あるか（相談のときはすべて持っていきます）</li>
                <li>外出先でなくした場合は、最後に使った場所と、警察への遺失届を出したか</li>
                <li>車をその場から動かす必要があるか（キーがなく車を動かせない場合は、ロードサービスへの相談も考えます）</li>
              </ul>
              <p>
                警察への届け出の手順は<a href="/kagi-funshitsu/" className="text-primary underline">鍵をなくした時の対処法</a>、キーが1本も残っていない場合の考え方は<a href="/kuruma-kagi-funshitsu-spare-nashi/" className="text-primary underline">車の鍵を紛失してスペアキーもないとき</a>にまとめています。電子カードキーが手元にあるのに反応しない場合は電池切れの可能性があり、手順は<a href="/smart-key-denchi/" className="text-primary underline">車のスマートキー電池切れ対処法</a>で説明しています。
              </p>
            </>
          ),
        },
      ]}
      faqTitle="ダイハツ車の鍵をなくしたときのよくある質問"
      faqs={faqs}
      related={[
        { href: "/kuruma-kagi-funshitsu-spare-nashi/", label: "車の鍵を紛失してスペアキーもないとき", desc: "トヨタ・日産・SUBARUの公式案内" },
        { href: "/toyota-smart-key-funshitsu/", label: "トヨタのスマートキーを紛失したとき", desc: "残りのキーを持って販売店へ" },
        { href: "/suzuki-smart-key-funshitsu/", label: "スズキのスマートキーを紛失したとき", desc: "キーナンバーを伝えて販売店に相談" },
        { href: "/honda-smart-key-funshitsu/", label: "ホンダのスマートキーを紛失したとき", desc: "Honda販売店とキーナンバータグ" },
        { href: "/immobilizer/", label: "イモビライザーとは", desc: "鍵と車両のID照合" },
      ]}
    />
  );
}
