import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/kagi-funshitsu/zenkoku/";
const TITLE = "鍵の落とし物を警察で探す・遺失届を出す｜45道府県は警察庁の共通ポータル、東京・大阪は別";
const DESC =
  "鍵をなくしたときの警察での検索と遺失届を、警察庁の公式ページで確認しました。北海道から沖縄まで45道府県は共通の「警察国民向けポータル」で検索・オンライン届出ができ、東京都（警視庁）と大阪府は別のページです（2026年11月3日確認）。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  npa: "https://www.npa.go.jp/bureau/soumu/ishitsubutsu/ishitsu-todokedekensaku.html",
  portal: "https://lostproperty.pcf.npa.go.jp/ZDSERVFP/SZDSA0101",
  manual: "https://www.npa.go.jp/bureau/soumu/ishitsubutsu/ishitsusya_ishitsumanual.pdf",
};

const PREFS =
  "北海道、青森県、岩手県、宮城県、秋田県、山形県、福島県、茨城県、栃木県、群馬県、埼玉県、千葉県、神奈川県、新潟県、山梨県、長野県、静岡県、富山県、石川県、福井県、岐阜県、愛知県、三重県、滋賀県、京都府、兵庫県、奈良県、和歌山県、" +
  "鳥取県、島根県、岡山県、広島県、山口県、徳島県、香川県、愛媛県、高知県、福岡県、佐賀県、長崎県、熊本県、大分県、宮崎県、鹿児島県、沖縄県";

const faqs: Faq[] = [
  {
    q: "鍵をなくしたら、どの都道府県の警察で探せばよいですか？",
    a: "警察庁は、落とし物の検索は「遺失したと思われる場所」の都道府県警察で、遺失届は「遺失したと思われる場所又は居住している場所」の都道府県警察で行うよう案内しています（警察庁「落とし物の届出・検索」2026年11月3日確認）。",
  },
  {
    q: "共通ポータルで遺失届を出すと、受理番号はどう分かりますか？",
    a: "警察国民向けポータルでは、サイトで届出を受け付けた受付番号と、届出先の警察署で受理した受理番号がそれぞれメールで知らされます。受理番号は今後の手続きに必要なため、大切に保管するよう案内されています。",
  },
  {
    q: "オンラインで届け出たら、すぐに受理されますか？",
    a: "警察庁は、オンラインで遺失届を受け付けた後、受理するまでに時間がかかる場合があるとしています。急ぐ場合は、最寄りの警察署または交番等に直接届け出るよう案内しています。",
  },
  {
    q: "落とした直後の鍵も検索できますか？",
    a: "ポータルの注意事項では、警察署等に拾得物件が届けられてから検索できるようになるまで時間がかかるとされています。名前などの個人情報でも検索できません。急ぐ場合は、落とした場所を管轄する警察署か最寄りの警察署に問い合わせてください。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月3日"
      updatedIso="2026-11-03"
      crumbs={[
        { name: "鍵をなくしたときの対処", href: "/kagi-funshitsu/" },
        { name: "警察の落とし物検索・遺失届（全国）" },
      ]}
      answerLead="東京都と大阪府を除く45道府県は、警察庁の「警察国民向けポータル」で落とし物の検索と遺失届のオンライン提出ができます。東京都は警視庁、大阪府は大阪府警察のページで手続きします。"
      answerBody={
        <>
          <p>
            これまでどおり、警察署や交番等で届け出ることもできます。海外での落とし物は届け出られません。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.npa}>警察庁「落とし物の届出・検索」</Ext>／<Ext href={SRC.portal}>警察国民向けポータル「遺失物関係（落とし物の検索、届出等）」</Ext>（いずれも2026年11月3日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "都道府県ごとの窓口",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">都道府県</th>
                      <th className="border border-border px-3 py-2 text-left">落とし物の検索</th>
                      <th className="border border-border px-3 py-2 text-left">遺失届のオンライン提出</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border px-3 py-2">{PREFS}（45道府県）</td>
                      <td className="border border-border px-3 py-2">警察国民向けポータル</td>
                      <td className="border border-border px-3 py-2">警察国民向けポータル</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-3 py-2 font-bold"><a href="/kagi-funshitsu/tokyo/" className="text-primary underline">東京都（警視庁）</a></td>
                      <td className="border border-border px-3 py-2">警視庁「落とし物検索」</td>
                      <td className="border border-border px-3 py-2">警視庁行政手続オンライン</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-3 py-2 font-bold"><a href="/kagi-funshitsu/osaka/" className="text-primary underline">大阪府</a></td>
                      <td className="border border-border px-3 py-2">大阪府警察「落とし物公開情報」</td>
                      <td className="border border-border px-3 py-2">警察庁のページにリンク先の設定なし（警察署・交番で届出）</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                警察庁は、リンク先の設定がない都道府県警察は現在オンラインでの届出ができないため、最寄りの警察署または交番等に届け出るよう案内しています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.npa}>警察庁「落とし物の届出・検索」</Ext>（2026年11月3日確認）
              </p>
            </>
          ),
        },
        {
          h2: "警察国民向けポータルで検索するときの注意",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>検索できるのは、遺失物法に基づき警察署等に届け出られている拾得物件の情報</li>
                <li>拾得物件が届けられてから検索できるようになるまで時間がかかる。名前などの個人情報では検索できない</li>
                <li>更新にタイムラグがあり、返還済みの物や、売却・廃棄などの処分をした物が表示されている場合がある</li>
                <li>公表期間は、落とし主に返還するまで、または保管期間満了日まで</li>
                <li>急ぐ場合は、落とした場所を管轄する警察署か最寄りの警察署に問い合わせる</li>
              </ul>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.portal}>警察国民向けポータル「遺失物関係（落とし物の検索、届出等）」</Ext>（2026年11月3日確認）
              </p>
            </>
          ),
        },
        {
          h2: "ポータルで遺失届を出すときの確認事項",
          body: (
            <>
              <p>
                ポータルの「落とし物をした届（遺失届）を出す」では、届出の前に次の点を確認します。
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>落とした場所、または自分の住まいが45道府県のいずれかにあるか（海外での落とし物は届出できない）</li>
                <li>落とした場所が、自宅など自分の管理下にある場所以外か</li>
                <li>画像を添付できるが、添付した画像は返却されない（公開はされない）</li>
                <li>届出の内容によっては、受理できない場合や修正を求められる場合がある</li>
              </ul>
              <p>
                届出を受け付けると受付番号が、届出先の警察署で受理されると受理番号が、それぞれメールで届きます。操作方法は警察庁の「遺失者向け遺失物システム操作マニュアル」にまとめられています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.portal}>警察国民向けポータル</Ext>／<Ext href={SRC.manual}>警察庁「遺失者向け遺失物システム操作マニュアル」</Ext>（2026年11月3日確認）
              </p>
            </>
          ),
        },
      ]}
      cta={{
        h2: "見つからないときは鍵の交換も検討を",
        text: "鍵が見つからず、住所が分かる物と一緒になくした場合は、シリンダー交換を検討してください。賃貸の場合は、業者を呼ぶ前に管理会社・大家に連絡します。",
        links: [
          { href: "/kagi-funshitsu/", label: "鍵をなくしたときの対処（全体の流れ）→" },
          { href: "/agents/", label: "鍵業者の比較一覧" },
        ],
      }}
      faqTitle="警察での鍵の落とし物探しのよくある質問"
      faqs={faqs}
      related={[
        { href: "/kagi-funshitsu/tokyo/", label: "東京で鍵をなくしたら", desc: "警視庁の落とし物検索とオンライン遺失届" },
        { href: "/kagi-funshitsu/osaka/", label: "大阪で鍵をなくしたら", desc: "大阪府警の落とし物公開情報と届出" },
        { href: "/kagi-koukan-timing/", label: "鍵交換のタイミング", desc: "紛失後に交換すべきかの目安" },
        { href: "/key-number-aikagi/", label: "キーナンバーで合鍵は作れる？", desc: "手元に鍵がない場合の注意" },
      ]}
    />
  );
}
