import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/kagi-funshitsu/osaka/";
const TITLE = "大阪で鍵をなくしたら｜大阪府警の落とし物公開情報と遺失届の出し方";
const DESC =
  "大阪府内で鍵をなくしたときの警察での手続きを、大阪府警察と警察庁の公式ページで確認しました。2026年11月9日から、遺失届は警察庁の「警察国民向けポータル」でオンライン申請もできます。" +
  "府警の「落とし物公開情報」は11月30日で終了し、検索もポータルに移ります（2026年11月14日確認）。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  otoshita: "https://www.police.pref.osaka.lg.jp/tetsuduki/otoshimono/24863.html",
  tetsuduki: "https://www.police.pref.osaka.lg.jp/tetsuduki/otoshimono/index.html",
  pubNotice: "http://www.otoshimono.police.pref.osaka.jp/normal.html",
  portal: "https://lostproperty.pcf.npa.go.jp/ZDSERVFP/SZDSA0101",
  manual: "https://www.npa.go.jp/bureau/soumu/ishitsubutsu/ishitsusya_ishitsumanual.pdf",
  npa: "https://www.npa.go.jp/bureau/soumu/ishitsubutsu/ishitsu-todokedekensaku.html",
};

const faqs: Faq[] = [
  {
    q: "大阪府は遺失届をネット（オンライン）で申請できますか？",
    a: "できます。大阪府警察は、令和8年（2026年）11月9日から、警察庁の「警察国民向けポータル」でオンラインの遺失届を受け付けています。" +
      "夜間や土日・祝日の届出の受理は原則として翌平日の9時以降で、受理が終わるまでは遺失届から落とし物を調べられません（大阪府警察「落とし物をしたとき」2026年11月14日確認）。",
  },
  {
    q: "急いでいる場合は、どこに届ければよいですか？",
    a: "大阪府警察は、急ぐ場合は近くの警察署や交番に行くよう案内しています。窓口では、落としたときの状況や落とした物の特徴を担当職員に説明します。" +
      "府警のウェブサイトの「遺失届出書」の用紙に、あらかじめボールペン等で記入して持参することもできます。",
  },
  {
    q: "大阪府警の「落とし物公開情報」は使えなくなりますか？",
    a: "落とし物公開情報のお知らせでは、令和8年11月30日（月）にページを終了し、以降は警察庁のウェブサイトを使うよう案内されています。" +
      "警察庁のポータルでは、複数の都道府県の落とし物をまとめて検索できます（2026年11月14日確認）。",
  },
  {
    q: "落としたばかりの鍵も、ポータルで検索できますか？",
    a: "ポータルの注意事項では、警察署等に拾得物件が届けられてから検索できるようになるまで時間がかかり、名前などの個人情報では検索できないとされています。" +
      "急ぐ場合は、落とした場所を管轄する警察署か最寄りの警察署に問い合わせてください。",
  },
  {
    q: "見つかった鍵はどこで受け取りますか？",
    a: "大阪府警察では、落とし物は原則として警察署で受け取ります。受け取る前に、取り扱っている警察署へ電話で連絡し、必要な持ち物を確認します。" +
      "受け取りは土日・祝日・12月29日〜1月3日を除く日の午前9時〜午後5時です。",
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
        { name: "鍵をなくしたときの対処", href: "/kagi-funshitsu/" },
        { name: "大阪で鍵をなくしたら" },
      ]}
      answerLead="大阪府では、2026年11月9日から遺失届をネットで申請できるようになりました。警察庁の「警察国民向けポータル」から、届け出る警察署を選んで申請します。急ぐ場合は、これまでどおり警察署か交番で届け出ます。"
      answerBody={
        <>
          <p>
            オンラインの届出は、夜間や土日・祝日に出すと受理が原則翌平日の9時以降になり、受理が終わるまでは遺失届から落とし物を調べられません。落とし物の検索もポータルに移り、府警の「落とし物公開情報」は11月30日で終了します。
          </p>
          <p>
            電車・バスの中や、デパート・遊園地などの施設内で落とした可能性があるときは、まずその場所の管理者に問い合わせるよう案内されています。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.otoshita}>大阪府警察「落とし物をしたとき」</Ext>／<Ext href={SRC.pubNotice}>大阪府警察 落とし物公開情報「お知らせ」</Ext>（いずれも2026年11月14日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "遺失届の出し方",
          body: (
            <>
              <h3 className="text-base font-bold text-text-primary">ネットで申請する</h3>
              <p>
                大阪府警察は、オンラインの遺失届と落とし物の検索を、警察庁のポータルサイト「遺失物法関係（落とし物の検索、届出等）」で行うよう案内しています。操作方法は警察庁の「遺失者向け遺失物システム操作マニュアル」にまとめられています。
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>落とした場所、または自分の住まいが、ポータルの対象の都道府県（大阪府を含む）にあることを確認する。海外での落とし物は届け出られない</li>
                <li>自宅など、自分の管理下にある場所で落とした物は対象外</li>
                <li>画像を添付できるが、添付した画像は返却されない（公開はされない）</li>
                <li>受け付けると受付番号が、警察署で受理されると受理番号が、それぞれメールで届く。受理番号は以後の手続きに必要なため保管する</li>
              </ul>
              <h3 className="text-base font-bold text-text-primary">警察署・交番で届け出る</h3>
              <p>
                直接警察署または交番に行き、落としたときの状況や落とした物の特徴などを担当職員に説明します。府警のウェブサイトに「遺失届出書」の用紙と記載例があり、印刷して記入してから届け出ることもできます。不明な点は警察署の会計課に相談するよう案内されています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.otoshita}>大阪府警察「落とし物をしたとき」</Ext>／<Ext href={SRC.portal}>警察国民向けポータル</Ext>／<Ext href={SRC.manual}>警察庁「遺失者向け遺失物システム操作マニュアル」</Ext>（2026年11月14日確認）
              </p>
            </>
          ),
        },
        {
          h2: "落とし物を検索する",
          body: (
            <>
              <p>
                大阪府警察の「落とし物公開情報」は、令和8年11月30日（月）に終了すると告知されています。以降は警察庁のポータルで検索します。ポータルでは、複数の都道府県の落とし物をまとめて検索できます。
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>警察署等に拾得物件が届けられてから、検索できるようになるまで時間がかかる</li>
                <li>名前などの個人情報では検索できない</li>
                <li>更新にタイムラグがあり、返還済みの物や、売却・廃棄などの処分をした物が表示されている場合がある</li>
              </ul>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.pubNotice}>大阪府警察 落とし物公開情報「お知らせ」</Ext>／<Ext href={SRC.portal}>警察国民向けポータル</Ext>／<Ext href={SRC.npa}>警察庁「落とし物の届出・検索」</Ext>（2026年11月14日確認）
              </p>
            </>
          ),
        },
        {
          h2: "受け取り・郵送・代理人",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>受け取り：原則として警察署。受け取る前に取り扱っている警察署へ電話し、必要な持ち物を確認する</li>
                <li>取扱時間：土日・祝日・12月29日〜1月3日を除く日の、受け取りは午前9時〜午後5時、問い合わせは午前9時〜午後5時45分</li>
                <li>代理人が受け取る場合：委任状が必要（決まった様式はなく、府警の様式も使える）</li>
                <li>郵送を希望する場合：送付先等を書いた送付依頼書と身分証明書の写しを、落とし物を保管している警察署へ事前に送る。着払いを希望する場合は事前に保管先の警察署へ申し出る</li>
              </ul>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.otoshita}>大阪府警察「落とし物をしたとき」</Ext>（2026年11月14日確認）
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
          { href: "/area/osaka/", label: "大阪の鍵屋・鍵トラブル" },
        ],
      }}
      faqTitle="大阪で鍵をなくしたときのよくある質問"
      faqs={faqs}
      related={[
        { href: "/kagi-funshitsu/tokyo/", label: "東京で鍵をなくしたら", desc: "警視庁の落とし物検索とオンライン遺失届" },
        { href: "/kagi-funshitsu/zenkoku/", label: "道府県警察の落とし物検索・遺失届", desc: "46道府県は共通のポータル" },
        { href: "/kagi-koukan-timing/", label: "鍵交換のタイミング", desc: "紛失後に交換すべきかの目安" },
        { href: "/agents/", label: "鍵業者の比較一覧", desc: "解錠・交換を頼む業者の比べ方" },
      ]}
    />
  );
}
