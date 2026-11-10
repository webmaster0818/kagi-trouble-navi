import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/kaijo-hyouki-chigai/";
const TITLE = "「解錠」と「開錠」の違い｜法令・官公庁・メーカーの文書での使われ方を確認";
const DESC =
  "鍵を開けることを表す「解錠」と「開錠」は、法令・官公庁・メーカーの文書でどちらも使われています。法律名の「特殊開錠用具」、建築基準法施行令の「解錠」、消費者庁・国民生活センター・警視庁・JAFの表記を2026年11月10日に確認しました。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  law: "https://laws.e-gov.go.jp/law/415AC0000000065",
  kenchiku: "https://laws.e-gov.go.jp/law/325CO0000000338",
  caa: "https://www.caa.go.jp/notice/entry/027673/",
  kokusen: "https://www.kokusen.go.jp/news/data/n-20241119_1.html",
  keishichoAkisu: "https://www.keishicho.metro.tokyo.lg.jp/kurashi/higai/akisu/akisu.html",
  keishichoBike: "https://www.keishicho.metro.tokyo.lg.jp/kurashi/higai/guard/bicycle_bohan.html",
  jaf: "https://jaf.or.jp/common/call-road-service/before-calling/road-service-terms",
  miwaPerf: "https://www.miwa-lock.co.jp/tec/products/performance.html",
};

// 2026-11-10 に各文書を開いて確認した表記
const usageRows: { who: string; doc: string; word: string; href: string }[] = [
  { who: "法律", doc: "特殊開錠用具の所持の禁止等に関する法律（平成15年法律第65号）", word: "開錠（「特殊開錠」「特殊開錠用具」）", href: SRC.law },
  { who: "政令", doc: "建築基準法施行令 第125条の2（屋外への出口等の施錠装置の構造等）", word: "解錠（「かぎを用いることなく解錠できるもの」「解錠方法を表示」）", href: SRC.kenchiku },
  { who: "消費者庁", doc: "鍵の開錠・修理等に関する役務の取引に関する注意喚起（2022年2月25日）", word: "開錠", href: SRC.caa },
  { who: "国民生活センター", doc: "【広告より高額！？】出張解錠サービスの料金トラブルに注意（2024年11月19日）", word: "解錠", href: SRC.kokusen },
  { who: "警視庁", doc: "侵入窃盗の防犯対策", word: "解錠（「不正解錠」）", href: SRC.keishichoAkisu },
  { who: "警視庁", doc: "「自転車盗」の防犯対策", word: "開錠（「不正な開錠」）", href: SRC.keishichoBike },
  { who: "JAF", doc: "ロードサービス利用約款", word: "開錠（「ドアロックの開錠」）", href: SRC.jaf },
  { who: "美和ロック", doc: "指定建物錠の性能表示", word: "両方（「耐カム送り解錠性能」と、法律名の「特殊開錠用具」）", href: SRC.miwaPerf },
];

const faqs: Faq[] = [
  {
    q: "「解錠」と「開錠」は意味が違いますか？",
    a: "今回確認した法令・官公庁・メーカーの文書では、どちらも施錠された錠を開ける意味で使われており、両者の意味を区別する記述はありませんでした。同じ警視庁のページでも、侵入窃盗の防犯対策では「不正解錠」、自転車盗の防犯対策では「不正な開錠」と書かれています（2026年11月10日確認）。",
  },
  {
    q: "法律ではどちらが使われていますか？",
    a: "法令によって異なります。いわゆるピッキング防止法の正式名称は「特殊開錠用具の所持の禁止等に関する法律」で、「開錠」を使っています。一方、建築基準法施行令第125条の2は、避難用の出口の戸の施錠装置を「屋内からかぎを用いることなく解錠できるもの」とするよう定めています。e-Gov法令検索で「解錠」を含む法令には、ほかに船員法施行規則、航空法施行規則、地方税法施行規則があります。",
  },
  {
    q: "鍵業者に頼むときは、どちらの言葉で探せばいいですか？",
    a: "どちらの表記も使われているため、検索や問い合わせではどちらを使っても構いません。国民生活センターは「出張解錠サービス」、消費者庁は「鍵の開錠・修理等に関する役務」として、料金トラブルへの注意を呼びかけています。依頼前に総額を確認する方法は鍵屋の選び方の記事にまとめています。",
  },
  {
    q: "「特殊開錠」とはどういう意味ですか？",
    a: "特殊開錠用具の所持の禁止等に関する法律は、特殊開錠を「施錠された状態にある錠を本来の方法によらないで開くこと」と定義しています（第2条第2号）。同法は、業務その他正当な理由による場合を除き、特殊開錠用具の所持を禁止しています（第3条）。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月10日"
      updatedIso="2026-11-10"
      crumbs={[{ name: "「解錠」と「開錠」の違い" }]}
      answerLead="「解錠」と「開錠」は、どちらも鍵を開けることを表す言葉として、法令・官公庁・メーカーの文書で使われています。法律名の「特殊開錠用具」は「開錠」、建築基準法施行令や国民生活センターの注意喚起は「解錠」で、同じ機関の中でも両方の表記がありました。"
      answerBody={
        <>
          <p>
            2026年11月10日に法令と官公庁・団体・メーカーの文書8件を確認したところ、「開錠」が4件、「解錠」が3件、両方を使うものが1件でした。どの文書にも、二つの言葉の意味を区別する説明はありませんでした。
          </p>
          <p className="text-xs text-text-muted">出典：下の表の各文書（いずれも2026年11月10日確認・表は当サイトで作成）</p>
        </>
      }
      sections={[
        {
          h2: "文書ごとの表記",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left whitespace-nowrap">発行元</th>
                      <th className="border border-border px-3 py-2 text-left">文書</th>
                      <th className="border border-border px-3 py-2 text-left">表記</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usageRows.map((r) => (
                      <tr key={r.doc}>
                        <td className="border border-border px-3 py-2 whitespace-nowrap">{r.who}</td>
                        <td className="border border-border px-3 py-2">
                          <Ext href={r.href}>{r.doc}</Ext>
                        </td>
                        <td className="border border-border px-3 py-2 font-bold text-text-primary">{r.word}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                美和ロックの「指定建物錠の性能表示」のページは、本文の1か所で法律名を「特殊解錠用具の所持の禁止等に関する法律」と書き、注記では「特殊開錠用具の所持の禁止等に関する法律（ピッキング法）」と書いています。法律の正式名称は「開錠」です。
              </p>
            </>
          ),
        },
        {
          h2: "法令の中の「開錠」と「解錠」",
          body: (
            <>
              <p>
                <strong>開錠</strong>：特殊開錠用具の所持の禁止等に関する法律は、特殊開錠を「施錠された状態にある錠を本来の方法によらないで開くこと」と定義し（第2条第2号）、業務その他正当な理由による場合を除いて特殊開錠用具の所持を禁止しています（第3条）。建物錠の販売・取付け・特殊開錠を行う営業を営む者には、顧客の依頼で特殊開錠を行うとき、その者の氏名・住所を確認するよう努める責務を定めています（第10条）。
              </p>
              <p>
                <strong>解錠</strong>：建築基準法施行令第125条の2は、屋外に設ける避難階段に屋内から通じる出口などの戸の施錠装置を、屋内からかぎを用いることなく解錠できるものとし、戸の近くの見やすい場所に解錠方法を表示するよう定めています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.law}>e-Gov法令検索「特殊開錠用具の所持の禁止等に関する法律」</Ext>、<Ext href={SRC.kenchiku}>e-Gov法令検索「建築基準法施行令」</Ext>（いずれも2026年11月10日確認）
              </p>
            </>
          ),
        },
        {
          h2: "文章を書くときの選び方",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-2">
                <li>法律名や法律上の用語（特殊開錠・特殊開錠用具）を書くときは、法律の表記どおり「開錠」にします。</li>
                <li>建築基準法施行令の避難用の出口の規定を引くときは、条文どおり「解錠」にします。</li>
                <li>それ以外はどちらを選んでも構いませんが、1つの文書の中では表記をそろえると読みやすくなります。官公庁の文書を引用するときは、引用元の表記をそのまま使います。</li>
              </ul>
              <p>
                鍵業者に開けてもらうときの注意は、表記に関係なく同じです。料金トラブルを避けるための確認事項は<a href="/kagiya-erabikata/" className="text-primary underline">鍵屋の選び方</a>、夜間に依頼するときの注意は<a href="/shinya-kagiake/" className="text-primary underline">深夜・早朝に鍵屋を呼ぶときの注意点</a>にまとめています。
              </p>
            </>
          ),
        },
      ]}
      cta={{
        h2: "鍵を開けてもらう必要があるときは",
        text: "締め出しや鍵の紛失で業者に頼む場合は、依頼前に作業内容と総額を確認してください。国民生活センターは、広告の「○○円～」をうのみにしないよう呼びかけています。",
        links: [
          { href: "/shimedashi/", label: "家を締め出されたときの対処法 →" },
          { href: "/agents/", label: "鍵業者を比較する" },
        ],
      }}
      faqTitle="「解錠」と「開錠」のよくある質問"
      faqs={faqs}
      related={[
        { href: "/kagiya-erabikata/", label: "鍵屋の選び方", desc: "依頼前に電話で確認すること" },
        { href: "/shinya-kagiake/", label: "深夜・早朝に鍵屋を呼ぶとき", desc: "夜間加算の確認と待ち方" },
        { href: "/thumb-turn-taisaku/", label: "サムターン回し・ピッキングへの備え", desc: "防犯性の高い錠と補助錠" },
        { href: "/disc-cylinder/", label: "ディスクシリンダーとは", desc: "見分け方と防犯性能の表示までの経緯" },
        { href: "/jitensha-kagi-koukan/", label: "自転車の鍵交換", desc: "警視庁が紹介する錠の種類とリコール対象の錠" },
      ]}
    />
  );
}
