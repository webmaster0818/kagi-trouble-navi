import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/strike-chousei/";
const TITLE = "ストライク（受座）の調整｜ラッチがかからない・ドアがガタつくときに、取付けねじを緩めて位置を動かす：LIXILの取扱い説明書で確認";
const DESC =
  "玄関ドアのラッチがかからない、閉めたドアがガタつくときに行うストライク（受座）の位置調整を、LIXILの玄関ドア・引戸の取扱い説明書とドア枠の取付け説明書で2026年11月20日に確認しました。動かせる幅（室外側3mm・室内側1.5mmなど）と注意点。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const CHECKED = "2026年11月20日確認";

const SRC = {
  lixilDoor: "https://assets.lixil.com/content/dam/lixil-assets/manual/202403/MAP-999A.pdf",
  lixilFrame: "https://assets.lixil.com/content/dam/lixil-assets/manual/oldmpi/2013/MDD_874201.pdf",
  lixilFrame2: "https://assets.lixil.com/content/dam/lixil-assets/manual/oldmpi/2012/MDD_873010.pdf",
  miwaStrike: "https://www.miwa-lock.co.jp/tec/support/glossary/lock/9.html",
  westFaq: "https://www.west-lock.co.jp/faq",
};

// LIXIL の説明書の記載を、症状ごとに当サイトで整理
const cases: [string, string, string][] = [
  [
    "開き戸：ラッチがかからない／ガタつく",
    "ストライクの取付けねじを緩め、ストライクA（表板）を動かす。調整しきれない場合はストライクA・B（表板＋裏板）ごと動かす",
    "ストライクAは室外側に3mm・室内側に1.5mm動く。A・Bごと動かすとさらに室外側へ2mm（合計5mm）",
  ],
  [
    "引戸（戸先錠・合掌錠）：錠がかかりにくい",
    "ストライク（錠受け）の取付けねじを緩めて、上下に動かす",
    "引戸は種類により調整が異なり、内障子の右上部のブランドラベルで確認する。JS・PGシリーズ・k6シリーズは調整不要",
  ],
  [
    "引戸（エルムーブ2）：カギがスムーズにかからない・鎌錠のかかり幅が少ない",
    "ストライクの取付けねじを緩め、上下・室内外の位置を調整",
    "ストライクの切り欠き上端と鎌錠の上面のすき間は4mm以下が目安。開方向のガタつきは調整ねじで直し、一回転で1mm調整板が移動",
  ],
];

const faqs: Faq[] = [
  {
    q: "ストライクとは、どの部品ですか？",
    a: "美和ロックの用語集では、ストライク（受座）はケースから出てくるラッチボルト・デッドボルトを戸の枠側で受ける金具と説明されています。ウエストの用語集も、枠側に取り付け、枠の保護とデッドボルトやラッチボルトの確実な作動を助ける金具としています（" + CHECKED + "）。",
  },
  {
    q: "ドアを閉めてもラッチがかかりません。どうすればよいですか？",
    a: "LIXILの玄関ドア・引戸の取扱い説明書は、ドアのラッチがかからない場合はストライクの取付けねじを緩め、ストライクの位置を調整し、調整後は確実にねじを締めるよう案内しています（" + CHECKED + "）。",
  },
  {
    q: "ねじを全部外してもよいですか？",
    a: "LIXILの取扱い説明書は、ストライク取付けねじを全部外さないよう注意しています。全部外すと枠の中の部品（トロヨケ）が脱落し、取り付けられなくなるおそれがあるためです（" + CHECKED + "）。",
  },
  {
    q: "調整しても直らないときは、どこに相談すればよいですか？",
    a: "ストライクで調整できる幅には限りがあります（LIXILの開き戸の例では合計5mm）。それでも直らない場合は、ドア本体の吊り込みや丁番、ドアクローザー、錠ケースの不調が考えられます。ドアのメーカーや施工会社、賃貸住宅は管理会社に相談してください。",
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
      crumbs={[{ name: "ストライク（受座）の調整" }]}
      answerLead="ドアを閉めてもラッチがかからない、閉めたドアがガタつくときは、枠側の金具「ストライク（受座）」の位置がずれている場合があります。LIXILの取扱い説明書は、ストライクの取付けねじを緩めて位置を動かし、調整後は確実にねじを締めるよう案内しています。"
      answerBody={
        <>
          <p>
            ストライクが動かせる幅は数ミリです。LIXILの開き戸の例では、表板（ストライクA）が室外側に3mm・室内側に1.5mm、表板と裏板ごとならさらに室外側へ2mm（合計5mm）動きます。ねじは全部外さず、緩めるだけにします。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.lixilDoor}>LIXIL「玄関ドア・引戸 取扱い説明書」（MAP-999A）P.45</Ext>、<Ext href={SRC.lixilFrame}>LIXIL ドア〔枠〕取付け説明書（MDD_874201）</Ext>（いずれも{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "症状ごとの調整のしかた（LIXILの説明書より）",
          body: (
            <>
              <p>LIXILの玄関ドア・引戸の取扱い説明書と、ドア枠の取付け説明書に書かれた調整方法を、症状ごとに当サイトで整理しました。製品によって部品の構成は異なり、説明書にも「商品によって装備されているものが異なります」と注記されています。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">症状</th>
                      <th className="border border-border px-3 py-2 text-left">説明書の案内</th>
                      <th className="border border-border px-3 py-2 text-left">動かせる幅・目安</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cases.map(([c, h, w]) => (
                      <tr key={c}>
                        <td className="border border-border px-3 py-2 font-medium">{c}</td>
                        <td className="border border-border px-3 py-2">{h}</td>
                        <td className="border border-border px-3 py-2">{w}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.lixilDoor}>LIXIL「玄関ドア・引戸 取扱い説明書」（MAP-999A・2024年3月発行）P.45〜47</Ext>、<Ext href={SRC.lixilFrame}>LIXIL ドア〔枠〕取付け説明書（MDD_874201）「ストライクの調整」</Ext>（いずれも{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "調整の前に確かめること",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>ドアを閉めたとき、ラッチボルトがストライクの穴のどちら側（上・下・室内側・室外側）に当たっているか</li>
                <li>ドアと枠のすき間が上下で極端に違っていないか（ドア本体が下がっている場合は、ストライクより先に建付けの調整が必要になることがあります）</li>
                <li>ドアクローザーで閉まる速さが弱すぎないか（閉まりきる前に止まると、ラッチがかからないことがあります）</li>
                <li>賃貸住宅の場合は、自分で触らずに管理会社へ連絡するか</li>
              </ul>
              <p>
                LIXILのドア枠の取付け説明書は、ストライクの調整とは別に、枠とドア本体のすき間（左右・上下）を調整する手順を示しています（<Ext href={SRC.lixilFrame2}>LIXIL ドア〔枠〕取付け説明書（MDD_873010）</Ext>、{CHECKED}）。閉まる速さの不調は<a href="/door-closer/" className="text-primary underline">ドアクローザーの不調と鍵の関係</a>にまとめています。
              </p>
            </>
          ),
        },
        {
          h2: "調整後に確かめること",
          body: (
            <>
              <p>
                LIXILの取扱い説明書は、引戸（エルムーブ2）のストライクを調整したあと、ラッチがかかった状態で鍵がスムーズにかかるか（ストライクと接触しないか）、鎌錠とストライクのかかり幅が十分か、施錠した状態で開く方向のガタつきが大きくないか（気密材にすき間ができないか）を確かめるよう案内しています。開き戸でも、鍵をかけたときにデッドボルトが引っかからずに出るかを確かめておくと安心です。
              </p>
              <p>
                鍵を回すと重い・途中で止まる場合は、ストライクの位置ではなくシリンダーや錠ケースの不調のこともあります。症状別の切り分けは<a href="/kagi-mawaranai/" className="text-primary underline">鍵が回らないときの対処</a>、各部の名称は<a href="/cylinder-jou-shikumi/" className="text-primary underline">シリンダー錠の仕組み</a>を参照してください。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.lixilDoor}>LIXIL「玄関ドア・引戸 取扱い説明書」（MAP-999A）「ストライクの調整（エルムーブ２）」</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "ストライクの役割",
          body: (
            <>
              <p>
                ストライク（受座・受け）は、ドアの中の錠ケースから出るラッチボルト（仮締）とデッドボルト（本締）を、枠の側で受け止める金具です。ウエストは、枠の保護とボルトの確実な作動を助ける金具と説明しています。ボルトがストライクの穴にまっすぐ入らないと、ドアが閉まりきらない、鍵がかかりにくいといった症状になります。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.miwaStrike}>美和ロック「錠と防犯の用語集」ストライク（受座）</Ext>、<Ext href={SRC.westFaq}>ウエスト「よくあるご質問」用語集 ストライク（受け）</Ext>（いずれも{CHECKED}）
              </p>
            </>
          ),
        },
      ]}
      faqTitle="ストライクの調整のよくある質問"
      faqs={faqs}
      related={[
        { href: "/cylinder-jou-shikumi/", label: "シリンダー錠の仕組み", desc: "ラッチボルト・デッドボルト・ストライクの役割" },
        { href: "/door-closer/", label: "ドアクローザーの不調と鍵の関係", desc: "閉まる速さが原因のケース" },
        { href: "/doorknob-koukan/", label: "ドアノブ・ラッチ交換の基礎知識", desc: "ラッチ側の不調" },
        { href: "/kagi-mawaranai/", label: "鍵が回らないときの対処", desc: "症状別の切り分け" },
        { href: "/lixil-kagi-koukan/", label: "LIXIL（トステム）の玄関ドアの鍵交換", desc: "シリンダー交換とスペアキー" },
      ]}
    />
  );
}
