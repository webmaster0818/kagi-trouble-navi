import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/shutter-kagi-akanai/";
const TITLE = "シャッターの鍵が開かない・シャッターが上がらないとき｜LIXILの取扱説明書で確かめる凍結・左右の錠・停電時の手動切替え";
const DESC =
  "シャッターの鍵が開かない、解錠しても上がらないときに確かめることを、LIXIL「シングルシャッターS」の取扱説明書（手動・電動）で2026年11月14日に確認しました。" +
  "鍵穴の凍結と解氷剤、左右2か所の錠、室内側のツマミ、停電時の手動切替えと修理の連絡先について。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const CHECKED = "2026年11月14日確認";

const SRC = {
  manual: "https://assets.lixil.com/content/dam/lixil-assets/manual/202307/UD120C.pdf",
  electric: "https://assets.lixil.com/content/dam/lixil-assets/manual/202409/UD121G.pdf",
  gate: "https://assets.lixil.com/content/dam/lixil-assets/manual/202307/UA227C.pdf",
};

const manualChecks: [string, string][] = [
  ["鍵穴が凍っている", "溶けてから操作する。解氷剤は使わない（鍵が作動しなくなるおそれがある）"],
  ["片側の錠しか開けていない", "錠はシャッターの左右にある。両方の錠を解錠する"],
  ["室内側から開け閉めした後、道路側から鍵が使えない", "室内側のツマミを、施錠・解錠とも水平になるまで回す。水平まで回さないと道路側から施錠・解錠できなくなる"],
  ["鍵が奥まで入らない", "鍵には向きがある。鍵穴のくぼみと鍵の溝を同じ側に向けて差し込む"],
  ["連結バーを持って開け閉めしている", "連結バーが変形し、施錠・解錠できなくなる。連結バーを持って開閉しない"],
  ["鍵を差したまま開け閉めしている", "鍵が壊れるだけでなく、シャッターが動かなくなる場合がある。鍵を差したまま開閉しない"],
  ["シャッターの羽根（スラット）や座板が床に凍りついている", "シャッターを前後にゆすって雪や凍結部分を取り除く。取れない場合は融けるまで待つ"],
];

const faqs: Faq[] = [
  {
    q: "冬の朝、シャッターの鍵穴に鍵が入りません。解氷スプレーを使ってもよいですか？",
    a: "LIXIL「シングルシャッターS」（手動タイプ）の取扱説明書は、鍵穴が凍結したときは溶けてから操作し、解氷剤は使わないよう案内しています。鍵が作動しなくなるおそれがあるためです。鍵穴に異物を入れたり、注油したりすることも禁止しています（" + CHECKED + "）。製品によって案内が異なるため、お使いの製品の取扱説明書を確認してください。",
  },
  {
    q: "鍵を回したのに、シャッターが上がりません。",
    a: "LIXILの手動シャッターの取扱説明書では、錠はシャッターの左右にあり、両方の錠を解錠・施錠するよう案内しています。片側だけ解錠していないか確認してください（" + CHECKED + "）。",
  },
  {
    q: "電動シャッターが停電で動きません。鍵で開けられますか？",
    a: "LIXIL「シングルシャッターS」（電動タイプ）の取扱説明書では、ガードプレート内部の鍵は停電時のみ解錠するもので、停電時は手動操作に切り替えて開閉するよう案内しています。停電が直ったら、クラッチ復帰錠を操作して電動に戻します（" + CHECKED + "）。",
  },
  {
    q: "シャッターの鍵をなくして開けられません。",
    a: "LIXILの手動シャッターの取扱説明書は、紛失時は鍵に刻印された番号で発注し、番号が不明の場合はシリンダー錠ごとの交換になるとしています。電動タイプのガードプレートの鍵は、番号が不明の場合はガードプレートごとの交換になります（" + CHECKED + "）。鍵番号が分からない、急いで開けたい場合は、購入した販売店（工事店）またはメーカーの修理窓口に相談してください。",
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
      crumbs={[
        { name: "シャッターの鍵交換", href: "/shutter-kagi-koukan/" },
        { name: "シャッターの鍵が開かない" },
      ]}
      answerLead="手動シャッターの鍵が開かない、解錠したのに上がらないときは、鍵穴の凍結、左右2か所の錠の片方の開け忘れ、室内側のツマミの位置を確かめます。LIXILの取扱説明書は、鍵穴が凍ったときは溶けてから操作し、解氷剤や油は使わないよう案内しています。"
      answerBody={
        <>
          <p>
            無理に鍵を回したり、シャッターを力任せに持ち上げたりすると、鍵や部品が壊れて修理が必要になります。確かめても開かない場合は使用をやめ、購入した販売店（工事店）か、取扱説明書に記載されたメーカーの修理窓口に連絡してください。電動シャッターが動かない場合は、停電・ブレーカー・リモコンの電池を先に確かめます。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.manual}>LIXIL「シングルシャッターS Fタイプ 手動タイプ」取扱説明書（UD120）</Ext>（{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "手動シャッター：鍵が開かない・上がらないときに確かめること",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">状況</th>
                      <th className="border border-border px-3 py-2 text-left">取扱説明書の案内</th>
                    </tr>
                  </thead>
                  <tbody>
                    {manualChecks.map(([k, v]) => (
                      <tr key={k}>
                        <td className="border border-border px-3 py-2 font-medium">{k}</td>
                        <td className="border border-border px-3 py-2">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                施錠・解錠の操作は、シャッターが完全に閉まった状態で行うよう案内されています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.manual}>LIXIL「シングルシャッターS Fタイプ 手動タイプ」取扱説明書（UD120）</Ext>、スラットの凍結は<Ext href={SRC.electric}>同 電動タイプ（UD121）</Ext>（いずれも{CHECKED}）。LIXILのシングルシャッターSの記載です。ほかのメーカー・製品は、その製品の取扱説明書を確認してください。
              </p>
            </>
          ),
        },
        {
          h2: "凍結したときの扱いは製品ごとに違う",
          body: (
            <>
              <p>
                同じLIXILの取扱説明書でも、凍結したときの案内は製品によって異なります。シャッター（シングルシャッターS 手動タイプ）は「溶けてから操作し、解氷剤は使用しない」としている一方、開き門扉（ST錠仕様）は「錠が凍結して動かなくなった場合は無理に動かさず、市販のスプレー式霜取り剤を使用する」としています。どちらも、鍵穴に油を入れないことは共通しています。
              </p>
              <p>
                お湯をかける方法の注意点など、鍵穴の凍結全般は<a href="/kagiana-touketsu/" className="text-primary underline">鍵穴の凍結・異物で鍵が開かないとき</a>にまとめています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.manual}>LIXIL シャッター取扱説明書（UD120）</Ext>、<Ext href={SRC.gate}>LIXIL 開き門扉AA・AB（ST錠仕様）取扱説明書（UA227）</Ext>（いずれも{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "電動シャッターが動かないとき",
          body: (
            <>
              <p>LIXIL「シングルシャッターS」電動タイプの取扱説明書の「故障かなと思ったら」では、次の順に確かめるよう案内しています。</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>電動で動かない：屋内の電源が入っているか、停電していないか（停電時は手動操作で開閉）、クラッチ開放錠を操作して手動のままになっていないか（クラッチ復帰錠を操作して電動に切り替える）</li>
                <li>光電センサーで止まる：シャッターの下に障害物がないか、センサーのレンズ面が汚れていないか</li>
                <li>リモコンで動かない：リモコンの電池の消耗・向き、届く距離の範囲内で操作しているか</li>
              </ul>
              <p>
                ガードプレート内部の鍵は停電時にだけ解錠するもので、鍵は「施錠」の位置にしないと抜けません。リモコンを紛失・盗難にあった場合は、リモコン裏面のIDコードで登録を抹消するため、販売店に問い合わせるよう案内しています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.electric}>LIXIL「シングルシャッターS C・Fタイプ 電動タイプ」取扱説明書（UD121）</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "直らないときの連絡先",
          body: (
            <p>
              LIXILの手動シャッターの取扱説明書は、製品に異常が生じたときは使用を中止し、取扱説明書に記載のシャッター専用フリーダイヤル（年中無休・24時間対応）または購入した販売店（工事店）に連絡するよう案内し、利用者自身による修理は危険なのでやめるよう記載しています。修理料金は技術料・部品代・出張料などで構成されるとしています（{CHECKED}）。鍵をなくした場合の鍵番号の確認や、三和シヤッター・文化シヤッターの窓口は<a href="/shutter-kagi-koukan/" className="text-primary underline">シャッターの鍵交換</a>にまとめています。
            </p>
          ),
        },
      ]}
      faqTitle="シャッターの鍵が開かないときのよくある質問"
      faqs={faqs}
      related={[
        { href: "/shutter-kagi-koukan/", label: "シャッターの鍵交換", desc: "メーカー窓口と鍵がかからないとき" },
        { href: "/kagiana-touketsu/", label: "鍵穴の凍結で開かないとき", desc: "お湯をかけない理由" },
        { href: "/monooki-kagi-koukan/", label: "物置の鍵交換", desc: "メーカー別の窓口" },
        { href: "/kagi-mawaranai/", label: "鍵が回らない時の原因と対処法", desc: "避けるべき行動" },
        { href: "/lixil-kagi-koukan/", label: "LIXILの鍵交換", desc: "スペアキーと門扉の鍵" },
      ]}
    />
  );
}
