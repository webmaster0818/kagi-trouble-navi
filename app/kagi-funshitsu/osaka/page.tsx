import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/kagi-funshitsu/osaka/";
const TITLE = "大阪で鍵をなくしたら｜大阪府警の落とし物公開情報と遺失届の出し方";
const DESC =
  "大阪府内で鍵をなくしたときの警察での手続きを、大阪府警察の公式ページで確認しました。遺失届は警察署・交番に提出し、警察庁の一覧では大阪府はオンライン届出のリンク先がありません。" +
  "落とし物公開情報は提出から概ね2〜4日後に検索可能です（2026年11月3日確認）。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  pub: "http://www.otoshimono.police.pref.osaka.jp/",
  guide: "http://www.otoshimono.police.pref.osaka.jp/guide.html",
  faq: "http://www.otoshimono.police.pref.osaka.jp/faq.html",
  todoke: "https://www.police.pref.osaka.lg.jp/tetsuduki/otoshimono/drop/3764.html",
  shisetsu: "https://www.police.pref.osaka.lg.jp/tetsuduki/otoshimono/drop/3759.html",
  uketori: "https://www.police.pref.osaka.lg.jp/tetsuduki/otoshimono/drop/11733.html",
  npa: "https://www.npa.go.jp/bureau/soumu/ishitsubutsu/ishitsu-todokedekensaku.html",
};

const faqs: Faq[] = [
  {
    q: "大阪で鍵をなくしたら、どこに届ければよいですか？",
    a: "大阪府警察は、警察署または交番に来て「遺失届出書」を提出するよう案内しています。落としたときの状況や落とした物の特徴を担当職員に説明します。" +
      "府警のウェブサイトの用紙に、あらかじめボールペン等で記入して持参することもできます（2026年11月3日確認）。",
  },
  {
    q: "大阪府は遺失届をオンラインで出せますか？",
    a: "警察庁「落とし物の届出・検索」ページ（2026年11月3日確認）では、大阪府警察には遺失届のオンライン届出のリンク先が設定されていません。" +
      "警察庁は、リンク先設定のない都道府県警察は現在オンラインでの届出ができないため、最寄りの警察署または交番等に届け出るよう案内しています。",
  },
  {
    q: "落としたばかりの鍵も、落とし物公開情報で検索できますか？",
    a: "大阪府警察の落とし物公開情報のFAQでは、警察署等に物件が提出されてから概ね2〜4日後に検索が可能になるとされています。急ぐ場合は、落とした場所を管轄する警察署に問い合わせてください。",
  },
  {
    q: "キーホルダーに書いた名前や住所で検索できますか？",
    a: "できません。落とし物公開情報の検索は物品名・拾得日・拾得場所で行い、住所や氏名では検索できないとされています。",
  },
  {
    q: "検索結果に似た鍵が出てきたら、どうすればよいですか？",
    a: "表示されている問合せ先に、平日（土日・祝日・12月29日〜1月3日を除く）の午前9時〜午後5時45分に電話し、問合せ番号を伝えます。問合せ先が警察署以外の場合は、対応時間が異なることがあります。",
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
        { name: "大阪で鍵をなくしたら" },
      ]}
      answerLead="大阪府内で鍵をなくしたら、警察署か交番で「遺失届出書」を提出します。警察に届いているかは、大阪府警察の「落とし物公開情報」で物品名・場所・日付から検索できます。"
      answerBody={
        <>
          <p>
            電車・バスの中や、デパート・遊園地などの施設内で落とした可能性があるときは、まずその場所の管理者に問い合わせるよう案内されています。落とし物公開情報に載るのは、警察署等に提出されてから概ね2〜4日後です。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.todoke}>大阪府警察「『遺失届出書』の届出」</Ext>／<Ext href={SRC.shisetsu}>大阪府警察「電車やデパートなどで落とし物をしたとき」</Ext>／<Ext href={SRC.faq}>落とし物公開情報 FAQ</Ext>（いずれも2026年11月3日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "遺失届の出し方",
          body: (
            <>
              <p>
                大阪府警察は、直接警察署または交番に来て、落としたときの状況や落とした物の特徴などを担当職員に詳しく説明するよう案内しています。府警のウェブサイトに「遺失届出書」の用紙と記載例があり、印刷して記入してから最寄りの警察署・交番に届け出ることもできます。
              </p>
              <p>
                警察庁の「落とし物の届出・検索」ページでは、45道府県が共通の「警察国民向けポータル」でオンライン届出に対応していますが、大阪府警察にはリンク先が設定されていません（2026年11月3日確認）。不明な点は警察署の会計課に相談するよう案内されています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.todoke}>大阪府警察「『遺失届出書』の届出」</Ext>／<Ext href={SRC.npa}>警察庁「落とし物の届出・検索」</Ext>（2026年11月3日確認）
              </p>
            </>
          ),
        },
        {
          h2: "落とし物公開情報で検索する",
          body: (
            <>
              <p>
                「落とし物公開情報」は、大阪府警察が拾得者から提出を受けた落とし物の情報を検索できる府警のサイトです。対象は、大阪府内の警察署・交番・駐在所などで提出を受けた落とし物と、大阪府内で拾われて他の都道府県の警察署等に提出された一部の落とし物（1万円以上の現金・身分証・カード類・携帯電話など）です。
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>物の名前：分類コード表の「分類名」を全角で入力（分類名の後に空白を入れて「種類名」を入れると絞り込める）</li>
                <li>場所：都道府県名・市区町村名・施設名を全角で入力。電車・バスは会社名でも検索可能</li>
                <li>日付：紛失した日を半角数字で入力。期間での検索も可能</li>
                <li>特徴：かばんや財布などの「色」が分かる場合に全角で入力</li>
              </ul>
              <p>
                検索結果には「保管満期日」が表示されます。この日の翌日をもって、落とし主は落とし物の所有権を失うとされています。返還済みの物や、公告の日から3か月（埋蔵物は6か月）を過ぎた物は原則として表示されません。
              </p>
              <p>
                旅行などで大阪府外で落とした場合は、その都道府県の警察のページで検索するよう案内されています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.guide}>落とし物公開情報「ご利用にあたって」</Ext>／<Ext href={SRC.faq}>落とし物公開情報 FAQ</Ext>（2026年11月3日確認）
              </p>
            </>
          ),
        },
        {
          h2: "受け取り・郵送・代理人",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>取扱時間：土日・祝日・12月29日〜1月3日を除く日の、受け取りは午前9時〜午後5時、問い合わせは午前9時〜午後5時45分</li>
                <li>代理人が受け取る場合：委任状が必要（決まった様式はなく、府警の様式も使える）</li>
                <li>郵送を希望する場合：送付先等を書いた送付依頼書と身分証明書の写しを、落とし物を保管している警察署へ事前に送る。着払いを希望する場合は事前に保管先の警察署へ申し出る</li>
              </ul>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.uketori}>大阪府警察「落とし物の受け取りについて」</Ext>（2026年11月3日確認）
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
        { href: "/kagi-funshitsu/zenkoku/", label: "道府県警察の落とし物検索・遺失届", desc: "45道府県は共通のポータル" },
        { href: "/kagi-koukan-timing/", label: "鍵交換のタイミング", desc: "紛失後に交換すべきかの目安" },
        { href: "/agents/", label: "鍵業者の比較一覧", desc: "解錠・交換を頼む業者の比べ方" },
      ]}
    />
  );
}
