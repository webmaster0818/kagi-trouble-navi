import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/honda-smart-key-funshitsu/";
const TITLE = "ホンダのスマートキーを紛失したとき｜Honda販売店に依頼・キーナンバータグの番号：4車種の取扱説明書で確認";
const DESC =
  "Hondaスマートキーをなくしたときの連絡先と準備を、ホンダのフィット・フィット e:HEV・N-WGN・N-VANの取扱説明書で2026年11月15日に確認しました。" +
  "販売店への依頼、キーナンバータグの番号、イモビライザー、内蔵キーの扱いについて。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const CHECKED = "2026年11月15日確認";

const SRC = {
  fitEhev: "https://www.honda.co.jp/ownersmanual/webom/jpn/fitehev/2023/details/136232090-5111.html",
  nwgn: "https://www.honda.co.jp/ownersmanual/webom/jpn/n-wgn/2023/details/136172090-5051.html",
  fit: "https://www.honda.co.jp/ownersmanual/webom/jpn/fit/2026/details/136231090-14211.html",
  nvan: "https://www.honda.co.jp/ownersmanual/webom/jpn/n-van/2026/details/136267090-12467.html",
};

// ホンダ4車種の取扱説明書を同じ項目でそろえた比較（当サイト作成）
const models: [string, string, string, string][] = [
  ["フィット e:HEV（2023年）「キー」", "キーを紛失したときや、追加購入したいときは、Honda販売店に依頼", "キーを購入する際に必要となる番号が記載。キーとは別に車両以外の場所に保管", "すべてのキーにイモビライザーシステム"],
  ["N-WGN（2023年）「キー」", "キーを紛失したときや、追加購入したいときは、Honda販売店に依頼", "キーを購入する際に必要となる番号が記載。車両以外の場所に保管", "すべてのキーにイモビライザーシステム"],
  ["フィット（2026年）「Hondaスマートキーの取り扱いと電池交換」", "Hondaスマートキーをなくした場合は、Honda販売店へ連絡", "（このページに記載なし）", "内蔵キーはレバーを引きながら取り出す。電池はCR2032"],
  ["N-VAN（2026年）「Hondaスマートキーの取り扱いと電池交換」", "Hondaスマートキーをなくした場合は、Honda販売店へ連絡", "（このページに記載なし）", "内蔵キーはボタンを押しながら取り出す。電池はCR2032"],
];

const faqs: Faq[] = [
  {
    q: "Hondaスマートキーをなくしました。どこに連絡すればよいですか？",
    a: "ホンダの取扱説明書は、Hondaスマートキーをなくした場合はHonda販売店へ連絡するよう案内しています。フィット e:HEV・N-WGNの取扱説明書にも、キーを紛失したときや追加購入したいときはHonda販売店に依頼するよう記載されています（" + CHECKED + "）。",
  },
  {
    q: "新しいキーを頼むときに、何を用意すればよいですか？",
    a: "ホンダの取扱説明書は、キーナンバータグにはキーを購入する際に必要となる番号が記載されているとしています。手元にあれば販売店に伝えます。キーナンバータグがない場合や、必要な書類・本人確認の方法は、依頼する販売店に確認してください（" + CHECKED + "）。",
  },
  {
    q: "スペアキーは残っています。車はそのまま使えますか？",
    a: "残っているキーで車は使えますが、なくしたキーがほかの人の手に渡るおそれがあります。ホンダの取扱説明書は紛失時はHonda販売店に依頼するよう案内しているため、早めに販売店に相談し、なくしたキーの扱いを確認してください（" + CHECKED + "）。",
  },
  {
    q: "鍵屋でホンダのスマートキーを作れますか？",
    a: "ホンダの取扱説明書は、すべてのキーにイモビライザーシステムが付いていること、紛失時はHonda販売店に依頼することを記載しています。販売店以外で作る場合の対応範囲は業者によって異なるため、依頼前に車種・年式で対応できるかを確認してください（" + CHECKED + "）。",
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
      crumbs={[{ name: "ホンダのスマートキーを紛失したとき" }]}
      answerLead="Hondaスマートキーをなくしたときは、Honda販売店に連絡します。ホンダの取扱説明書は、キーを紛失したときや追加購入したいときはHonda販売店に依頼するよう案内しており、キーを購入する際に必要となる番号はキーナンバータグに記載されているとしています。"
      answerBody={
        <>
          <p>
            キーナンバータグは、キーとは別に車両以外の場所に保管するよう案内されています。手元にあれば、販売店に連絡するときに用意します。すべてのキーにはイモビライザーシステムが付いているため、なくしたキーの扱いも販売店で確認してください。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.fitEhev}>ホンダ フィット e:HEV（2023年）取扱説明書「キー」</Ext>、<Ext href={SRC.fit}>ホンダ フィット（2026年）取扱説明書「Hondaスマートキーの取り扱いと電池交換」</Ext>（いずれも{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "4車種の取扱説明書で見る、紛失時の案内",
          body: (
            <>
              <p>ホンダの4車種の取扱説明書を開き、紛失時の案内とキーナンバータグなどの記載を当サイトで同じ項目にそろえました。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">車種・ページ</th>
                      <th className="border border-border px-3 py-2 text-left">紛失時の案内</th>
                      <th className="border border-border px-3 py-2 text-left">キーナンバータグ</th>
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
                出典：<Ext href={SRC.fitEhev}>フィット e:HEV（2023年）「キー」</Ext>、<Ext href={SRC.nwgn}>N-WGN（2023年）「キー」</Ext>、<Ext href={SRC.fit}>フィット（2026年）「Hondaスマートキーの取り扱いと電池交換」</Ext>、<Ext href={SRC.nvan}>N-VAN（2026年）「Hondaスマートキーの取り扱いと電池交換」</Ext>（いずれもホンダ公式の取扱説明書、{CHECKED}）。4車種とも、紛失時の連絡先はHonda販売店で共通しています。
              </p>
            </>
          ),
        },
        {
          h2: "連絡する前に確かめること",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>キーナンバータグが手元にあるか（キーとは別に車両以外の場所に保管するよう案内されています）</li>
                <li>残っているキー（スペアキー）が何本あるか</li>
                <li>外出先でなくした場合は、最後に使った場所と、警察への遺失届を出したか</li>
                <li>車を動かす必要があるか（スペアキーがなく、車をその場から動かせない場合はロードサービスへの相談も考えます）</li>
              </ul>
              <p>
                警察への届け出の手順は<a href="/kagi-funshitsu/" className="text-primary underline">鍵をなくした時の対処法</a>、スペアキーもない場合のトヨタ・日産・SUBARUの案内は<a href="/kuruma-kagi-funshitsu-spare-nashi/" className="text-primary underline">車の鍵を紛失してスペアキーもないとき</a>にまとめています。
              </p>
              <p className="text-xs text-text-muted">
                キーナンバータグの保管の記載の出典：<Ext href={SRC.fitEhev}>フィット e:HEV（2023年）「キー」</Ext>、<Ext href={SRC.nwgn}>N-WGN（2023年）「キー」</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "スマートキーの電池切れと、紛失との見分け",
          body: (
            <p>
              キーが手元にあるのに反応しない場合は、紛失ではなく電池切れの可能性があります。ホンダ フィット・N-VAN（2026年）の取扱説明書では、Hondaスマートキーの電池はボタン電池CR2032で、内蔵キーを取り出してドアを開けることができます（{CHECKED}）。手順は<a href="/smart-key-denchi/" className="text-primary underline">車のスマートキー電池切れ対処法</a>、キーの種類は<a href="/kuruma-kagi-shurui/" className="text-primary underline">車の鍵の種類</a>を参照してください。
            </p>
          ),
        },
      ]}
      faqTitle="ホンダのスマートキーを紛失したときのよくある質問"
      faqs={faqs}
      related={[
        { href: "/kuruma-kagi-funshitsu-spare-nashi/", label: "車の鍵を紛失してスペアキーもないとき", desc: "トヨタ・日産・SUBARUの公式案内" },
        { href: "/toyota-smart-key-funshitsu/", label: "トヨタのスマートキーを紛失したとき", desc: "残りのキーを持って販売店へ" },
        { href: "/suzuki-smart-key-funshitsu/", label: "スズキのスマートキーを紛失したとき", desc: "スズキ販売店とキーナンバープレート" },
        { href: "/kuruma-spare-key/", label: "車のスペアキーは販売店で注文できる", desc: "必要な書類" },
        { href: "/immobilizer/", label: "イモビライザーとは", desc: "鍵と車両のID照合" },
        { href: "/kuruma-kagi-shurui/", label: "車の鍵の種類", desc: "メーカーごとの呼び方" },
      ]}
    />
  );
}
