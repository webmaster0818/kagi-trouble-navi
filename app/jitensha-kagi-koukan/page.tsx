import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/jitensha-kagi-koukan/";
const TITLE = "自転車の鍵交換｜交換を考える4つの場面と、警視庁が挙げる錠の種類・リコール対象の錠の確認";
const DESC =
  "自転車の鍵（錠）の交換を考える場面を、鍵が回りにくい・スペアキーがない・防犯を強めたい・リコール対象の錠の4つに分けて整理しました。" +
  "警視庁が挙げる錠の種類、自転車盗の無施錠の割合、ブリヂストンサイクル「一発二錠」の無償点検・改修の対象の見分け方を2026年11月10日に確認しています。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  keishichoBike: "https://www.keishicho.metro.tokyo.lg.jp/kurashi/higai/guard/bicycle_bohan.html",
  keishichoStat: "https://www.keishicho.metro.tokyo.lg.jp/about_mpd/jokyo_tokei/jokyo/hanzai.html",
  npa: "https://www.npa.go.jp/publications/statistics/crime/situation/r7_hanzaijyousei__.pdf",
  bsRecall: "https://www.bscycle.co.jp/info/2019/6624",
  bsHosho: "https://www.bscycle.co.jp/support/insurance.html",
  law: "https://laws.e-gov.go.jp/law/355AC1000000087",
};

const scenes: { h: string; t: string }[] = [
  {
    h: "鍵が回りにくい・引っかかる",
    t: "錠の不調は、走行中に錠が作動するおそれがある部品の不具合と区別が必要です。後輪錠とハンドルロックが連動する錠を使っている場合は、先に下の「リコール対象の錠」を確認してください。そうでなければ、購入した自転車店で錠の点検と交換の要否を相談します。",
  },
  {
    h: "スペアキーがない・鍵を1本なくした",
    t: "手元の鍵で開けられるうちに錠ごと交換すると、なくした鍵が使えなくなります。メーカーの盗難補償に加入している場合は、申請時に鍵の提出を求められることがあるため、交換の前に補償の条件を確認してください。",
  },
  {
    h: "防犯を強めたい",
    t: "警視庁は、常設のキーのほかに防犯性の高い補助錠を使うこと、防犯性能の高い錠に交換することを挙げています。後輪の錠を替えるか、補助錠を足すかを、止める場所に合わせて選びます。",
  },
  {
    h: "リコール対象の錠が付いている",
    t: "ブリヂストンサイクルのハンドルロック「一発二錠」は、2003年9月から2015年5月製造の搭載車が無償点検・改修の対象です。対象の場合は、錠を自分で替えずにメーカーの窓口に連絡してください。",
  },
];

const faqs: Faq[] = [
  {
    q: "自転車の鍵を交換したら、防犯登録の手続きは必要ですか？",
    a: "防犯登録は自転車を利用する人に法律で義務づけられているもので（自転車の安全利用の促進及び自転車等の駐車対策の総合的推進に関する法律 第12条第3項）、登録は利用する自転車について受けます。錠を交換したときの手続きについては、今回確認した法令とメーカーの案内に記載がなかったため、登録をした自転車店か最寄りの警察署に確認してください。ブリヂストンサイクルも、防犯登録の問い合わせ先を最寄りの自転車販売店または警察署としています。",
  },
  {
    q: "どの種類の錠を選べばいいですか？",
    a: "警視庁は自転車盗難防止装置として、鍵穴部分がシリンダー式の馬蹄錠、ワイヤー錠に比べて開錠に時間を要するU字ロック、ワイヤー・スチールジョイント・カバーの3重構造が一般的なジョイントワイヤー錠を紹介しています（2026年11月10日確認）。後輪に固定された錠に加えて補助錠を使うことも挙げています。",
  },
  {
    q: "「一発二錠」が対象かどうかは、どこを見ればわかりますか？",
    a: "ブリヂストンサイクルは、ハンドルロックの表示窓部のラベルの色で確認するよう案内しています。黒色ラベルは全てリコール対象、白色ラベルは対象外で、ハンドルロックケースの色ではなくラベルの色を見るよう注意しています。わからない場合は車種略号・製品コードでの検索か、「一発二錠」無償点検・改修お客様コールセンター（0120-502-092）に問い合わせます（2026年11月10日確認）。",
  },
  {
    q: "自転車は鍵をかけていても盗まれますか？",
    a: "警視庁の「東京の犯罪（令和7年版）」では、自転車盗の被害の61.3パーセントが無施錠によるものでした。施錠していても被害がないとは言えませんが、無施錠の被害が多いことから、警視庁はわずかな時間でも離れるときは必ず鍵をかけるよう呼びかけています。",
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
      crumbs={[{ name: "自転車の鍵交換" }]}
      answerLead="自転車の鍵（錠）の交換は、①鍵が回りにくい、②スペアキーがない、③防犯を強めたい、④リコール対象の錠が付いている、の4つの場面で考えます。④に当たる場合は、自分で錠を替えずにメーカーの無償点検・改修を受けてください。"
      answerBody={
        <>
          <p>
            警察庁によると、令和7年の自転車盗の認知件数は17万2,654件（前年比1,366件・0.8％減）でした。警視庁の統計では、都内の自転車盗の被害の61.3パーセントが無施錠によるもので、46.7パーセントが中高層住宅をはじめとする住宅の敷地内から盗まれています。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.npa}>警察庁「令和７年の犯罪情勢」（令和8年2月）</Ext>、<Ext href={SRC.keishichoStat}>警視庁「東京の犯罪（令和7年版）」</Ext>（いずれも2026年11月10日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "交換を考える4つの場面",
          body: (
            <>
              <div className="space-y-3">
                {scenes.map((s, i) => (
                  <div key={s.h} className="bg-white rounded-xl border border-black/10 p-4">
                    <p className="font-bold text-text-primary mb-1">
                      {i + 1}. {s.h}
                    </p>
                    <p>{s.t}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.keishichoBike}>警視庁「『自転車盗』の防犯対策」</Ext>、<Ext href={SRC.bsRecall}>ブリヂストンサイクル「ハンドルロック『一発二錠』搭載自転車・電動アシスト自転車の無償点検・改修のお知らせ」</Ext>、<Ext href={SRC.bsHosho}>ブリヂストンサイクル「各種補償制度、防犯登録」</Ext>（いずれも2026年11月10日確認）
              </p>
            </>
          ),
        },
        {
          h2: "警視庁が紹介している自転車の錠の種類",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left whitespace-nowrap">錠の種類</th>
                      <th className="border border-border px-3 py-2 text-left">警視庁の説明</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border px-3 py-2 whitespace-nowrap">シリンダー式馬蹄錠</td>
                      <td className="border border-border px-3 py-2">鍵穴部分がシリンダー式で、不正な開錠に対し効果がある</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-3 py-2 whitespace-nowrap">U字ロック</td>
                      <td className="border border-border px-3 py-2">ワイヤー錠に比べ開錠に時間を要するため、盗難防止効果が高い</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-3 py-2 whitespace-nowrap">ジョイントワイヤー錠</td>
                      <td className="border border-border px-3 py-2">ワイヤー＋スチールジョイント＋カバーの3重構造が一般的で、ジョイントにより太くなるため破壊されにくい</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                警視庁は、駅前などの駐輪場や店舗の駐輪場だけでなく、一戸建て住宅やマンション・アパートの敷地内の駐輪場に止めた自転車も盗まれているとして、住宅の敷地内や駐輪場でも必ず鍵をかけるよう呼びかけています。車体をつなぐ固定物があり、さらにロックが掛かる設備のある駐輪場の利用も挙げています。
              </p>
              <p className="text-xs text-text-muted">出典：<Ext href={SRC.keishichoBike}>警視庁「『自転車盗』の防犯対策」</Ext>（2026年11月10日確認）</p>
            </>
          ),
        },
        {
          h2: "リコール対象の錠：ブリヂストンサイクル「一発二錠」",
          body: (
            <>
              <p>
                「一発二錠」は、ハンドルロック（前錠）と後輪錠（サークロック）を組み合わせ、後輪錠の施錠・開錠と連動してハンドルロックも施錠・開錠する錠前システムです。ブリヂストンサイクルは、2003年9月から2015年5月に製造した搭載車（対象台数3,164,913台）について無償点検・改修を行っており、走行時にハンドル操作ができなくなることによる重傷事故が発生しているとしています。
              </p>
              <p>次の症状が一度でも確認された場合は、直ちに使用を中止するよう案内しています。</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>ハンドルロックケースが破損している</li>
                <li>ハンドルロックケースの表示窓の色が正しく表示されない（連動ワイヤーの潰れ・屈曲、後輪錠のツマミが最上部まで上がりきっていない場合にも現れることがある）</li>
                <li>開錠時、ハンドルの動きに引っかかりがある</li>
              </ul>
              <p className="text-xs text-text-muted">出典：<Ext href={SRC.bsRecall}>ブリヂストンサイクル「ハンドルロック『一発二錠』搭載自転車・電動アシスト自転車の無償点検・改修のお知らせ」（2019年6月24日・2024年8月30日更新）</Ext>（2026年11月10日確認）</p>
            </>
          ),
        },
        {
          h2: "交換の前に確認すること：盗難補償と防犯登録",
          body: (
            <>
              <p>
                ブリヂストンサイクルの「3年間自転車盗難補償」では、盗難補償の申請時に、盗難届出警察署名・盗難届出番号などを記入した申請書とあわせて、盗難車のキー3個を販売店に渡すよう定めています。申請は盗難日から60日以内で、加入登録と防犯登録が必要です。メーカーの盗難補償に加入している場合は、錠を交換する前に、交換後の鍵の扱いを購入した販売店に確認してください。
              </p>
              <p>
                自転車を利用する人は、都道府県公安委員会が指定する者が行う防犯登録を受けなければならないと法律で定められています。鍵をなくしたときの対処は<a href="/jitensha-kagi/" className="text-primary underline">自転車の鍵をなくした・開かないとき</a>にまとめています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.bsHosho}>ブリヂストンサイクル「各種補償制度、防犯登録」</Ext>、<Ext href={SRC.law}>e-Gov法令検索「自転車の安全利用の促進及び自転車等の駐車対策の総合的推進に関する法律」第12条第3項</Ext>（いずれも2026年11月10日確認）
              </p>
            </>
          ),
        },
      ]}
      cta={{
        h2: "鍵をなくして自転車を動かせないときは",
        text: "鍵の紛失で自転車を動かせない場合は、所有者であることを示せるかどうかが最初の確認事項です。防犯登録の控えや購入時の書類を用意してから、購入した自転車店に相談してください。",
        links: [
          { href: "/jitensha-kagi/", label: "自転車の鍵をなくしたとき →" },
          { href: "/bike-kagi-funshitsu/", label: "バイクの鍵をなくしたとき" },
        ],
      }}
      faqTitle="自転車の鍵交換のよくある質問"
      faqs={faqs}
      related={[
        { href: "/jitensha-kagi/", label: "自転車の鍵をなくした・開かないとき", desc: "防犯登録と本人確認の基礎知識" },
        { href: "/bike-kagi-funshitsu/", label: "バイクの鍵紛失の対処法", desc: "メットイン閉じ込めとシャッターキー" },
        { href: "/hojo-jou/", label: "補助錠の選び方", desc: "ワンドア・ツーロックの考え方" },
        { href: "/kagi-shurui-zukan/", label: "鍵の種類図鑑", desc: "鍵の構造と防犯性の目安" },
      ]}
    />
  );
}
