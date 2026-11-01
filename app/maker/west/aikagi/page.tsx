import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/maker/west/aikagi/";
const TITLE = "ウエスト（WEST）の合鍵の頼み方｜キーナンバーの頭文字で分かる注文先とディンプルシリンダー916・917・941";
const DESC =
  "ウエスト（WEST）の合鍵は、ハウスメーカーの住宅なら各ハウスメーカーのメンテナンスセンター、建築設計事務所・工務店が建てた住宅ならBLUE WEST会員店で頼みます。キーナンバーの頭文字で注文できるかが分かり、キーナンバーだけでの複製はできません。ディンプルシリンダー916・917・941の違いとあわせて、ウエスト公式（2026年11月1日確認）にもとづいてまとめました。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const FAQ_URL = "https://west-lock.co.jp/faq";
const DIMPLE_URL = "https://west-lock.co.jp/products/dimplecylinder";

const dimpleKeys: [string, string, string][] = [
  ["EA／EB／EC", "数字0〜9、英字Aのみ", "7"],
  ["FA", "数字0〜9、英字Aのみ", "10"],
  ["HA", "数字0〜9、英字A〜F", "10"],
  ["KA／KB／KC／KD／KE／KF", "数字0〜9、英字A〜F", "12"],
  ["MA／MB／MD／ME／MG", "数字0〜9、英字A〜F", "8"],
];
const pinKeys: [string, string, string][] = [
  ["AG", "数字1〜7", "6〜8"],
  ["AJ", "数字1〜7", "8"],
  ["C", "数字1〜6、英字A〜F", "7"],
  ["F", "数字1〜6、英字A〜F", "4"],
  ["FV", "数字1〜6、英字A〜F", "5"],
  ["G", "数字1〜6、英字A〜F", "7"],
  ["J", "数字1〜7", "7"],
  ["KY", "数字1〜6、英字A〜F", "6"],
  ["NH", "数字1〜7", "7"],
  ["NJ", "数字1〜7", "7"],
  ["NL", "数字1〜7", "6〜8"],
  ["R", "数字1〜6、英字A〜F", "5"],
  ["RL", "数字1〜7", "7"],
  ["SH", "数字1〜7", "8"],
  ["SV", "数字1〜6、英字A〜F", "7"],
  ["TL", "数字1〜7", "8"],
  ["TY", "数字1〜6、英字A〜F", "6"],
  ["V", "数字1〜6、英字A〜F", "4〜7"],
  ["Y", "数字1〜6、英字A〜F", "4〜7"],
];

const cylinders: [string, string, string][] = [
  ["916", "アンチピッキングピンを含む12本のピンを水平2方向に配列", "（鍵違い数の記載なし）"],
  ["917", "アンチピッキングピンを含む20本のピンを水平・垂直の3方向からなるT型に配列", "約2,935億通り"],
  ["941", "5方向32本のピンを配列", "理論上 約25京6289兆通り"],
];

const faqs: Faq[] = [
  {
    q: "ウエストの合鍵はどこで頼めますか？",
    a: "住宅の建て方で窓口が分かれます。ハウスメーカーの住宅の鍵はハウスメーカーの商標による受託製造のため直接購入できず、各ハウスメーカーのメンテナンスセンターに問い合わせます。建築設計事務所・工務店が建てた住宅の鍵は、キーナンバーの頭文字が公式の表に載っていればBLUE WEST会員店で注文できます（2026年11月1日にウエスト公式「よくあるご質問」で確認）。",
  },
  {
    q: "キーナンバーが分かれば街の鍵屋で合鍵を作れますか？",
    a: "キーナンバーだけでは作れません。ウエストは、キーナンバーは暗号化されているため、これだけでの複製はできないとしています。ギザギザの山鍵は実物を持ち込めば一般的な鍵屋でも複製できますが、純正より寸法精度が悪くなりシリンダーの寿命を縮めるとして推奨しておらず、ウエスト純正の合鍵を強く推奨しています。",
  },
  {
    q: "鍵を全部なくした場合はどうなりますか？",
    a: "キーナンバーが分かれば合鍵を製作できます。キーナンバーが分からない場合はシリンダーから鍵を作ることができず、シリンダーの交換が必要になると公式は案内しています。個人はBLUE WEST会員店に相談します。",
  },
  {
    q: "ウエストのシリンダーはオンラインストアで買えますか？",
    a: "販売していません。公式は、代理店もしくは同社窓口へ問い合わせるよう案内しています。個人で既設シリンダーを交換したい場合は、品番や錠ケースフロント部分・レバーハンドルの写真などを用意してBLUE WEST会員店に相談します。",
  },
  {
    q: "鍵の抜き差しが重くなってきました。",
    a: "公式は「商品のお取り扱いについて」に沿ってお手入れするよう案内し、シリンダー専用潤滑剤（シリンダーメンテナンススプレー）をオンラインストアで販売しています。お手入れで解決しない場合、個人はBLUE WEST会員店に症状を相談します。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月1日"
      updatedIso="2026-11-01"
      crumbs={[
        { name: "錠メーカー別ガイド", href: "/maker/" },
        { name: "ウエスト（WEST）の合鍵" },
      ]}
      answerLead="ウエストの合鍵は、ハウスメーカーの住宅なら各ハウスメーカーのメンテナンスセンター、建築設計事務所・工務店が建てた住宅ならBLUE WEST会員店に頼みます。キーナンバーの頭文字が公式の表にあるかで注文できるかが分かります。"
      answerBody={
        <>
          <p>
            キーナンバーは暗号化されているため、番号だけでの複製はできません。ディンプルキーは特殊な設備がないと複製できず、ウエストは純正の合鍵を強く推奨しています。表に載っていない鍵は、刻印を確かめて公式の問い合わせフォームで問い合わせます。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={FAQ_URL}>ウエスト「よくあるご質問」</Ext>（キー、シリンダーに関するご質問・2026年11月1日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "キーナンバーの頭文字で注文できるか確かめる（公式の表）",
          body: (
            <>
              <p>
                鍵に刻印されたキーナンバーの頭文字と、その後の刻印・総刻印数が次の表に当てはまれば、BLUE WEST会員店（法人は代理店）で注文できます。表の「*」の部分は省略しています。
              </p>
              <h3 className="font-bold text-text-primary mt-4">ディンプルシリンダー用キー</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">頭文字</th>
                      <th className="border border-border px-3 py-2 text-left">頭文字以後の刻印</th>
                      <th className="border border-border px-3 py-2 text-left whitespace-nowrap">総刻印数</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dimpleKeys.map(([a, b, c]) => (
                      <tr key={a}>
                        <td className="border border-border px-3 py-2 font-bold text-text-primary">{a}</td>
                        <td className="border border-border px-3 py-2">{b}</td>
                        <td className="border border-border px-3 py-2">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h3 className="font-bold text-text-primary mt-4">ピンシリンダー用キー</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">頭文字</th>
                      <th className="border border-border px-3 py-2 text-left">頭文字以後の刻印</th>
                      <th className="border border-border px-3 py-2 text-left whitespace-nowrap">総刻印数</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pinKeys.map(([a, b, c]) => (
                      <tr key={a}>
                        <td className="border border-border px-3 py-2 font-bold text-text-primary">{a}</td>
                        <td className="border border-border px-3 py-2">{b}</td>
                        <td className="border border-border px-3 py-2">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                出典：<Ext href={FAQ_URL}>ウエスト「よくあるご質問」</Ext>「Q.合鍵が作りたいのですが、注文できますか？」の表（画像）を書き写したもの。2026年11月1日確認。価格・納期は公式ページに記載がなく、会員店で確認してください。
              </p>
            </>
          ),
        },
        {
          h2: "ディンプルシリンダー916・917・941の違い",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">品番</th>
                      <th className="border border-border px-3 py-2 text-left">ピンの配列（公式の説明）</th>
                      <th className="border border-border px-3 py-2 text-left">鍵違い数</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cylinders.map(([a, b, c]) => (
                      <tr key={a}>
                        <td className="border border-border px-3 py-2 font-bold text-text-primary whitespace-nowrap">{a}</td>
                        <td className="border border-border px-3 py-2">{b}</td>
                        <td className="border border-border px-3 py-2">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                3機種とも、無垢の真鍮を削り出したシリンダー、ランダムに配置されたアンチピッキングピン、特殊焼入鋼のドリリング防止ピン、二酸化モリブデンコーティング処理されたピン、キーを抜き差しする位置に戻すクリックボール・システムを共通の特徴としています。941は2014年にiFデザイン賞を受賞したと公式は記載しています。916の製品ページの題名は「916 / 955」です。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={DIMPLE_URL}>ウエスト「Dimple Cylinder」</Ext>と各製品ページ（<Ext href="https://west-lock.co.jp/products/dimplecylinder/dimple_cylinder_916">916 / 955</Ext>・<Ext href="https://west-lock.co.jp/products/dimplecylinder/dimple_cylinder_917">917</Ext>・<Ext href="https://west-lock.co.jp/products/dimplecylinder/dimple_cylinder_941">941</Ext>）、2026年11月1日確認
              </p>
            </>
          ),
        },
        {
          h2: "他メーカーの鍵をウエストのシリンダーに替えたいとき",
          body: (
            <>
              <p>製品によって交換の可否が分かれます。個人はBLUE WEST会員店に相談し、公式は次の情報を用意するよう案内しています。</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>現場についている錠ケースのメーカー名</li>
                <li>品番もしくは型番（確認できれば）</li>
                <li>錠ケースフロント部分、レバーハンドルの写真</li>
              </ul>
              <p>紛失などでシリンダーごと替える場合は、ハンドルのバックセット、ドア厚、錠ケースの刻印、製品の外観写真なども求められます。</p>
            </>
          ),
        },
      ]}
      cta={{
        h2: "鍵が手元にない・すぐ開けたいときは",
        text: "純正の合鍵は会員店経由の注文になります。締め出しですぐに解錠が必要な場合や、紛失でシリンダー交換を検討する場合は、業者の料金と対応を比べてから依頼してください。",
        links: [
          { href: "/agents/", label: "鍵業者を比較する →" },
          { href: "/shimedashi/", label: "締め出されたときの対処" },
        ],
      }}
      faqTitle="ウエスト（WEST）の合鍵のよくある質問"
      faqs={faqs}
      related={[
        { href: "/maker/", label: "錠メーカー別ガイド", desc: "MIWA・GOAL・ウエスト・アルファ・ミネベアショウワ" },
        { href: "/key-number-aikagi/", label: "キーナンバーで合鍵は作れる？", desc: "刻印の場所と注文できない場合" },
        { href: "/dimple-key/", label: "ディンプルキーの基礎知識", desc: "仕組みと合鍵の注意点" },
        { href: "/junsei-key-saihakkou/", label: "メーカー純正キーの再発行", desc: "純正キー取り寄せの流れ" },
      ]}
    />
  );
}
