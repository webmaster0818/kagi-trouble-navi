import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/kuruma-kagi-mark-tenmetsu/";
const TITLE = "車のメーターの鍵マークが点滅するのは故障？｜イモビライザー・セキュリティの表示灯の意味";
const DESC =
  "車を降りたあとにメーターの表示灯が点滅するのは、トヨタ・ホンダの取扱説明書では、盗難防止の仕組みが作動していることを知らせる表示として説明されています。" +
  "2026年11月12日に公式の取扱説明書で確認しました。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  toyotaList: "https://manual.toyota.jp/yaris/2207/cv/ja_JP/contents/vhch02se010401.php",
  toyotaImmo: "https://manual.toyota.jp/yaris/2207/cv/ja_JP/contents/vhch01se030401.php",
  honda: "https://www.honda.co.jp/ownersmanual/webom/jpn/fit/2026/details/136231090-109590.html",
};

const rows: [string, string, string][] = [
  [
    "トヨタ ヤリス（取扱説明書 2207）",
    "セキュリティ表示灯（エンジンイモビライザーシステム）",
    "キーを抜く、またはエンジンスイッチをOFFにすると、システムの作動を知らせるためにインジケーターが点滅する。スマートエントリー＆スタートシステム非装着車は、登録されたキーをエンジンスイッチに挿し込むとシステムが解除され消灯する",
  ],
  [
    "ホンダ フィット（2026年 取扱説明書）",
    "セキュリティアラームシステムの作動表示灯",
    "パワーモードがOFF・ボンネットが閉まっている・すべてのドアとテールゲートが施錠されている、の条件がそろうと自動でセットされ、メーター内の作動表示灯が点滅する。約15秒後に点滅間隔が長くなる。解錠するかパワーモードをONにすると解除され消灯する",
  ],
];

const faqs: Faq[] = [
  {
    q: "エンジンを切ったあと、ずっと点滅しています。バッテリーが上がりませんか？",
    a: "トヨタの取扱説明書は、キーを抜く（またはエンジンスイッチをOFFにする）と、イモビライザーシステムの作動を知らせるためにインジケーターが点滅すると説明しています。作動を知らせる表示として案内されているもので、点滅が続くこと自体を異常とする記載はありません。気になる場合は、車種・年式の取扱説明書か販売店で確認してください（2026年11月12日確認）。",
  },
  {
    q: "鍵マークが点滅していて、エンジンがかかりません。",
    a: "トヨタの取扱説明書は、イモビライザーはキーに信号発信機が内蔵されており、あらかじめ登録されたキー以外ではエンジンを始動できないと説明しています。キーが金属製のものに接したり覆われたりしているとき、他の車両のセキュリティシステム用キーと重なったり近づいたりしているときは、正常に作動しないことがあるとしています（2026年11月12日確認）。",
  },
  {
    q: "車に人が乗っていても、セキュリティは作動しますか？",
    a: "ホンダの取扱説明書は、車内に人が乗っているときやウィンドーが開いているときでもセキュリティアラームシステムは作動すると注意しています。セット後にバッテリーが上がり、充電・交換をすると、警報装置が作動することがあるとしています（2026年11月12日確認）。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月12日"
      updatedIso="2026-11-12"
      crumbs={[{ name: "車の鍵マークの点滅" }]}
      answerLead="エンジンを切って車を降りたあとにメーターの表示灯が点滅するのは、トヨタ・ホンダの取扱説明書では、イモビライザーやセキュリティアラームが作動していることを知らせる表示です。トヨタの取扱説明書は、キーを抜く（スイッチをOFFにする）とシステムの作動を知らせるためにインジケーターが点滅すると説明しています。"
      answerBody={
        <>
          <p>
            表示灯の名前と点滅の条件は車種によって違います。トヨタ ヤリスの取扱説明書では「セキュリティ表示灯」として、ホンダ フィットの取扱説明書では「セキュリティアラームシステム」の作動表示灯として説明されています。自分の車の表示は、車種・年式の取扱説明書で確かめてください。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.toyotaImmo}>トヨタ ヤリス 取扱説明書「エンジンイモビライザーシステム」</Ext>、<Ext href={SRC.honda}>ホンダ フィット 取扱説明書「セキュリティアラームシステム」</Ext>（いずれも2026年11月12日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "メーカーの取扱説明書での説明",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">車種</th>
                      <th className="border border-border px-3 py-2 text-left">表示灯</th>
                      <th className="border border-border px-3 py-2 text-left">点滅の意味</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map(([c, l, d]) => (
                      <tr key={c}>
                        <td className="border border-border px-3 py-2 font-medium">{c}</td>
                        <td className="border border-border px-3 py-2">{l}</td>
                        <td className="border border-border px-3 py-2">{d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                トヨタの取扱説明書の「警告灯／表示灯」の一覧では、セキュリティ表示灯の説明先が「エンジンイモビライザーシステム」のページになっています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.toyotaList}>トヨタ ヤリス 取扱説明書「警告灯／表示灯」</Ext>、<Ext href={SRC.toyotaImmo}>同「エンジンイモビライザーシステム」</Ext>、<Ext href={SRC.honda}>ホンダ フィット 取扱説明書「セキュリティアラームシステム」</Ext>（いずれも2026年11月12日確認）
              </p>
            </>
          ),
        },
        {
          h2: "エンジンがかからない・警報が鳴るとき",
          body: (
            <>
              <p>
                トヨタの取扱説明書は、イモビライザーは登録されたキー以外ではエンジンを始動できない仕組みで、キーが金属製のものに接している・覆われているとき、他の車両のセキュリティシステム用キーと重なっている・近づいているときは正常に作動しないことがあるとしています。車両から離れるときは車内にキーを残さないよう注意しています。
              </p>
              <p>
                ホンダの取扱説明書は、セキュリティアラームの警報装置は停止させるまで約5分間作動し、ホーンが断続的に鳴って非常点滅表示灯が点滅するとしています。スマートキーの電池が弱っているときの始動方法は<a href="/smart-key-denchi/" className="text-primary underline">スマートキーの電池切れ対処法</a>、イモビライザーの仕組みは<a href="/immobilizer/" className="text-primary underline">イモビライザーとは</a>で説明しています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.toyotaImmo}>トヨタ ヤリス 取扱説明書「エンジンイモビライザーシステム」</Ext>、<Ext href={SRC.honda}>ホンダ フィット 取扱説明書「セキュリティアラームシステム」</Ext>（いずれも2026年11月12日確認）
              </p>
            </>
          ),
        },
      ]}
      faqTitle="車の鍵マークの点滅のよくある質問"
      faqs={faqs}
      related={[
        { href: "/immobilizer/", label: "イモビライザーとは", desc: "仕組みと鍵屋で対応できる範囲" },
        { href: "/smart-key-denchi/", label: "スマートキーの電池切れ", desc: "電池が弱ったときの始動方法" },
        { href: "/kuruma-spare-key/", label: "車のスペアキーの注文", desc: "販売店で注文するときの書類" },
        { href: "/car-inlock/", label: "車のインロック", desc: "キーを閉じ込めたときの連絡先" },
      ]}
    />
  );
}
