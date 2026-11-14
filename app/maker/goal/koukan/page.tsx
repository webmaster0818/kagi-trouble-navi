import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/maker/goal/koukan/";
const TITLE = "GOAL（ゴール）の鍵交換｜シリンダー交換の窓口はGMS、全国216件の掲載状況と紛失時の2つの方法";
const DESC =
  "GOAL（ゴール）の鍵穴（シリンダー）を交換したいときの窓口、鍵を紛失・盗難にあったときのシリンダー交換とキーチェンジ（フレッシュキー）の違い、補助錠を追加するときの注意を、GOAL公式のよくあるご質問で2026年11月14日に確認しました。" +
  "サービス代行店（GMS）一覧に掲載されている件数を都道府県別に集計しています。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const CHECKED = "2026年11月14日確認";

const SRC = {
  faq: "https://www.goal-lock.com/customer/faq/index.html",
  gms: "https://www.goal-lock.com/support/index.html",
};

// GOAL「サービス代行店一覧（GMS）」の掲載を2026年11月14日に当サイトで集計（地域タブ・都道府県見出しごとの掲載件数）
const gmsByArea: [string, string, number][] = [
  ["北海道", "北海道", 15],
  ["東北", "青森2・岩手1・宮城5・秋田1・山形1・福島1", 11],
  ["関東", "東京29・神奈川15・埼玉11・千葉6・茨城2・栃木2・群馬1", 66],
  ["東海", "愛知7・静岡6・三重2・岐阜1", 16],
  ["甲信越", "新潟2・長野1・山梨1", 4],
  ["北陸", "富山4・石川2・福井1", 7],
  ["近畿", "大阪19・兵庫7・京都5・奈良2・滋賀1・和歌山1", 35],
  ["中国", "広島11・山口5・岡山3・島根3・鳥取2", 24],
  ["四国", "香川2・愛媛2・高知2・徳島1", 7],
  ["九州・沖縄", "福岡14・熊本5・大分3・鹿児島3・佐賀2・沖縄2・長崎1・宮崎1", 31],
];

const faqs: Faq[] = [
  {
    q: "GOALの鍵穴（シリンダー）を交換したいときは、どこに頼めばよいですか？",
    a: "GOALは、最寄りのGMS（ゴールメンテナンスステーション）に相談するよう案内しています。使用中の錠のシリーズ名を伝えると対応がスムーズになるとしています。ハウスメーカーやドアメーカー専用の部品の場合は、各メーカーが対応する場合があります（" + CHECKED + "）。",
  },
  {
    q: "GOALの鍵をなくしました。シリンダー交換は必ず必要ですか？",
    a: "GOALの案内では、鍵を紛失・盗難にあったときはシリンダー（鍵穴部分）の交換が基本です。ただし、シリンダーにキーチェンジシステムが搭載されている場合は、フレッシュキーを注文してシリンダーを左右に回すと、紛失した鍵が使えなくなります。フレッシュキーは注文後2〜3週間かかるとしています（" + CHECKED + "）。",
  },
  {
    q: "シリンダーをGOALオンラインで買えますか？",
    a: "GOALのよくあるご質問では、スペアキー以外（シリンダーなど）の注文はGMSで受け付けるとしています（" + CHECKED + "）。",
  },
  {
    q: "賃貸マンションの玄関に補助錠を追加したいのですが、GMSに直接頼めますか？",
    a: "GOALは、補助錠の取り付けには扉への追加の穴加工が必要になるとして、賃貸住宅の場合はまず管理会社に相談するよう案内しています。分譲マンションでも玄関扉の外側は共用部のため、管理組合に事前に確認するよう案内しています（" + CHECKED + "）。",
  },
  {
    q: "近くにGMSがあるか、どうやって調べますか？",
    a: "GOAL公式サイトの「サービス代行店一覧」に、地域・都道府県ごとの店名・所在地・電話番号・営業時間と、錠前交換・合鍵取次などの取扱いの印が掲載されています。当サイトが2026年11月14日に数えたところ、掲載は216件で、47都道府県すべてに1件以上ありました。営業日や対応内容は、依頼前に各店へ確認してください。",
  },
];

export default function Page() {
  const total = gmsByArea.reduce((s, r) => s + r[2], 0);
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月14日"
      updatedIso="2026-11-14"
      crumbs={[
        { name: "錠メーカー別ガイド", href: "/maker/" },
        { name: "GOAL（ゴール）の鍵交換" },
      ]}
      answerLead="GOAL（ゴール）の錠の鍵穴（シリンダー）を交換したいときは、GOALのサービス代行店であるGMS（ゴールメンテナンスステーション）に相談します。GOALのよくあるご質問では、シリンダーなどスペアキー以外の注文もGMSが受け付けるとしています。"
      answerBody={
        <>
          <p>
            鍵をなくした・盗まれたときの基本はシリンダー交換です。シリンダーにキーチェンジシステムが付いている場合に限り、新しい鍵（フレッシュキー）を注文して操作する方法でも、なくした鍵を使えなくできます。相談するときは、使っている錠のシリーズ名を伝えると話が早く進みます。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.faq}>GOAL「よくあるご質問」</Ext>（{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "鍵交換の窓口：GMSと、ハウスメーカー・ドアメーカー",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>鍵穴を交換したい、製品が故障したようなので修理したい、錠前の動作に問題がある：いずれも最寄りのGMSに相談する。</li>
                <li>ハウスメーカー・ドアメーカー専用の部品：各メーカーが対応する場合がある。建売住宅や玄関ドアごと採用された錠は、住宅会社やドアメーカーの窓口も確認する。</li>
                <li>賃貸住宅：鍵の交換や補助錠の追加の前に、管理会社に相談する（GOALは補助錠の追加について、扉への追加の穴加工が必要になるとしています）。</li>
                <li>分譲マンション：玄関扉の外側は共用部のため、管理組合に事前に確認する。</li>
              </ul>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.faq}>GOAL「よくあるご質問」製品について Q2・Q3・Q5・Q6</Ext>（{CHECKED}）
              </p>
            </>
          ),
        },
        {
          h2: "鍵をなくしたとき：シリンダー交換か、キーチェンジか",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">方法</th>
                      <th className="border border-border px-3 py-2 text-left">使える条件</th>
                      <th className="border border-border px-3 py-2 text-left">GOALの案内</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border px-3 py-2 font-medium">シリンダー（鍵穴部分）の交換</td>
                      <td className="border border-border px-3 py-2">どのシリンダーでも</td>
                      <td className="border border-border px-3 py-2">紛失・盗難時の基本。GMSが対応</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-3 py-2 font-medium">フレッシュキーによるキーチェンジ</td>
                      <td className="border border-border px-3 py-2">シリンダーにキーチェンジシステムがあらかじめ搭載されている場合のみ</td>
                      <td className="border border-border px-3 py-2">フレッシュキーでシリンダーを左右に回すと、紛失した鍵が使えなくなる。注文後2〜3週間かかる。回数に制限があり、最後のキーの出荷時に次回はシリンダー交換が必要である旨の案内が同封される</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                キーチェンジは錠を交換せずに済む一方、届くまでの2〜3週間は、なくした鍵が使える状態が続きます。住所の分かるものと一緒になくした場合など急ぐときは、シリンダー交換を含めてGMSに相談してください。IDタグ（セキュリティIDカード）をなくした場合はスペアキーを作れず、鍵を増やすには新しいシリンダーとキーへの交換になるとGOALは案内しています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.faq}>GOAL「よくあるご質問」製品について Q4、スペアキーのご注文について Q14・Q15・Q17</Ext>（{CHECKED}）。鍵番号からキーチェンジ機能の有無の目安を調べる方法は<a href="/maker/goal/aikagi/" className="text-primary underline">GOALのスペアキー・フレッシュキーの注文方法</a>にまとめています。
              </p>
            </>
          ),
        },
        {
          h2: "GMS（サービス代行店）の掲載件数（当サイト集計）",
          body: (
            <>
              <p>
                GOAL公式サイトの「サービス代行店一覧」に掲載されている店舗を、2026年11月14日に当サイトで地域ごとに数えました。掲載は合計{total}件で、47都道府県すべてに1件以上ありました。このうち「錠前交換」の取扱いの印が付いている店舗は213件、「合鍵取次」の印は184件でした。
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">地域</th>
                      <th className="border border-border px-3 py-2 text-left">都道府県別の内訳</th>
                      <th className="border border-border px-3 py-2 text-right">掲載件数</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gmsByArea.map(([a, d, n]) => (
                      <tr key={a}>
                        <td className="border border-border px-3 py-2 font-medium">{a}</td>
                        <td className="border border-border px-3 py-2">{d}</td>
                        <td className="border border-border px-3 py-2 text-right">{n}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.gms}>GOAL「サービス代行店一覧（GMS／ゴールメンテナンスステーション）」</Ext>（2026年11月14日に当サイトで集計）。都道府県の見出しごとの掲載件数で、同じ会社が複数の店舗を掲載している場合はそれぞれ1件と数えています。掲載は随時更新されるため、最新の一覧と各店の営業時間・対応内容は公式サイトで確認してください。
              </p>
            </>
          ),
        },
        {
          h2: "相談の前に確認しておくこと",
          body: (
            <ul className="list-disc pl-5 space-y-1.5">
              <li>錠のシリーズ名（GOALは、伝えると対応がスムーズになるとしています）。分からない場合は、取扱説明書や住宅の引き渡し書類を確認する</li>
              <li>鍵に刻印されたキーナンバー（キーチェンジやスペアキーの注文に必要）</li>
              <li>賃貸か持ち家か、分譲マンションか（管理会社・管理組合への確認の要否）</li>
              <li>鍵穴が回りにくいだけなら、交換の前にお手入れで改善する場合がある（<a href="/maker/goal/oteire/" className="text-primary underline">GOALの鍵穴・錠前のお手入れ</a>）</li>
            </ul>
          ),
        },
      ]}
      faqTitle="GOAL（ゴール）の鍵交換のよくある質問"
      faqs={faqs}
      related={[
        { href: "/maker/goal/aikagi/", label: "GOALのスペアキー・フレッシュキー", desc: "鍵番号で分かるキーチェンジ機能" },
        { href: "/maker/goal/oteire/", label: "GOALの鍵穴・錠前のお手入れ", desc: "CQ303と鉛筆の粉" },
        { href: "/maker/", label: "錠メーカー別ガイド", desc: "5社の合鍵の窓口と価格" },
        { href: "/cylinder-koukan-diy/", label: "シリンダー交換をDIYで行う方法", desc: "規格確認と採寸" },
        { href: "/kagi-funshitsu/", label: "鍵をなくした時の対処法", desc: "警察への届出と交換の判断" },
      ]}
    />
  );
}
