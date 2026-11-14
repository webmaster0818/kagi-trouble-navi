import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/kagi-funshitsu/tokyo/";
const TITLE = "東京で鍵をなくしたら｜警視庁の落とし物検索・オンライン遺失届と遺失物センター";
const DESC =
  "東京都内で鍵をなくしたときの警察での手続きを、警視庁の公式ページで確認しました。遺失届はどこの警察署・交番でも出せ、現金100万円未満なら「警視庁行政手続オンライン」でも提出できます。" +
  "落とし物検索の公表期間は3か月、遺失物センターは文京区後楽です（2026年11月3日確認）。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  idx: "https://www.keishicho.metro.tokyo.lg.jp/sodan/otoshimono/index.html",
  lost: "https://www.keishicho.metro.tokyo.lg.jp/sodan/otoshimono/lost_found.html",
  search: "https://www.keishicho.metro.tokyo.lg.jp/sodan/otoshimono/kensaku.html",
  online: "https://www.keishicho.metro.tokyo.lg.jp/sodan/otoshimono/online.html",
  law: "https://www.keishicho.metro.tokyo.lg.jp/sodan/otoshimono/kaisei.html",
  center: "https://www.keishicho.metro.tokyo.lg.jp/sodan/otoshimono/annai.html",
};

const faqs: Faq[] = [
  {
    q: "東京で鍵をなくしたら、どこの警察署に届ければよいですか？",
    a: "警視庁は、遺失届はどこの警察署・交番等でも構わないと案内しています。なくした場所の管轄でなくても届け出られます。" +
      "ただし、国外で落とした物の届出は受理できないとされています（警視庁「落とし物をした方」2026年11月3日確認）。",
  },
  {
    q: "遺失届はオンラインで出せますか？",
    a: "落とした物に含まれる現金が100万円未満であれば、「警視庁行政手続オンライン」で遺失届を提出できます。" +
      "落とし物の有無をその場で確認したい場合や、現金が100万円以上の場合は、警察署や交番での届出が必要です（警視庁「行政手続オンライン（遺失物関係）」2026年11月3日確認）。",
  },
  {
    q: "落とし物検索で、鍵が届いているか調べられますか？",
    a: "警視庁の「落とし物検索」で、落とし物の種類・場所・月日などから検索できます。ただし、届けられてから検索できるようになるまで時間がかかるため、急ぐ場合は落とした場所を管轄する警察署か最寄りの警察署に問い合わせるよう案内されています。",
  },
  {
    q: "鍵が警察に届いていた場合、いつまでに受け取ればよいですか？",
    a: "警視庁は、落とし主が落とし物を探せる期間・警察での保管期間を3か月としています。落とし物検索での公表も、警察に届けられた日から3か月間です。連絡を受けたら早めに受け取ってください。",
  },
  {
    q: "受け取りに行くときは何を持っていけばよいですか？",
    a: "受け取る人の身分証明書と、郵送で連絡があった場合はその郵便物が必要です。代理人が受け取る場合は、これに加えて本人が作成した委任状が必要です（携帯電話類以外で、同居の親族の場合は委任状は不要）。",
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
        { name: "東京で鍵をなくしたら" },
      ]}
      answerLead="東京都内で鍵をなくしたら、都内のどこの警察署・交番でも遺失届を出せます。落とした物に含まれる現金が100万円未満なら、「警視庁行政手続オンライン」でも届出ができます。"
      answerBody={
        <>
          <p>
            警察に届いているかは、警視庁の「落とし物検索」で調べられます。落とし主が分からない落とし物は、警察に届けられた日から3か月間公表されます。電車や駅で落とした場合は鉄道会社でも確認でき、都内の最寄りの警察署でも問い合わせができます。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.lost}>警視庁「落とし物をした方」</Ext>／<Ext href={SRC.search}>警視庁「落とし物検索」</Ext>／<Ext href={SRC.online}>警視庁「行政手続オンライン（遺失物関係）」</Ext>（いずれも2026年11月3日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "遺失届の出し方（窓口・オンライン）",
          body: (
            <>
              <p>
                警視庁は、最寄りの警察署または交番等に来て届け出るよう案内しています。届出はどこの警察署・交番でも受け付けられます。警視庁のホームページに用紙があり、あらかじめ記入してから持参することもできます。
              </p>
              <p>
                オンラインの場合は「警視庁行政手続オンライン」の遺失届申請を使います。次の場合はオンラインではなく、警察署や交番で届け出ます。
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>落とし物の有無をその場で確認したい場合</li>
                <li>落とした物に含まれる現金が100万円以上の場合</li>
              </ul>
              <p>
                鍵と一緒にキャッシュカード・クレジットカード・携帯電話をなくした場合は、悪用されないよう、カードの発行元や携帯電話会社へも連絡するよう案内されています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.lost}>警視庁「落とし物をした方」</Ext>／<Ext href={SRC.online}>警視庁「行政手続オンライン（遺失物関係）」</Ext>（2026年11月3日確認）
              </p>
            </>
          ),
        },
        {
          h2: "落とし物検索と問い合わせ先",
          body: (
            <>
              <p>
                警視庁の「落とし物検索」は、落とし主が分からない落とし物の情報を、警察に届けられた日から3か月間（埋蔵物は6か月間）公表しています。記名品など落とし主が分かった物や、落とし主に連絡できた物は公表されません。
              </p>
              <p>
                特定の交通機関や商業施設での落とし物は、警視庁のページから案内されている「落とし物お問合せサイト」（お問合せチャット）でも問い合わせができます。
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    {[
                      ["問い合わせ先", "検索結果ページに掲載の問い合わせ先"],
                      ["問い合わせ時間", "平日 午前8時30分〜午後5時15分（土日・祝日・振替休日・12月29日〜1月3日は休み）"],
                      ["遺失物センターの電話", "0570-550-142（警視庁 会計課 遺失物センター）"],
                    ].map(([a, b]) => (
                      <tr key={a}>
                        <th className="border border-border px-3 py-2 text-left whitespace-nowrap bg-surface-alt">{a}</th>
                        <td className="border border-border px-3 py-2">{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                遺失物センターへの電話は混み合ってつながらない場合があるとされています。電車や駅構内での落とし物は各鉄道会社でも確認でき、落としたと思われる場所の近くの警察署にも問い合わせられます。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.search}>警視庁「落とし物検索」</Ext>（2026年11月3日確認）
              </p>
            </>
          ),
        },
        {
          h2: "警視庁遺失物センターでの受け取り",
          body: (
            <>
              <p>
                警視庁遺失物センターは、東京都文京区後楽1丁目9番11号にあります。最寄りはJR・東京メトロ・都営大江戸線の飯田橋駅で、車での来所は控えるよう案内されています。
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>窓口：月曜〜金曜（土日・祝日・12月29日〜1月3日を除く）午前8時30分〜午後4時30分。午後3時以降は混み合う</li>
                <li>窓口予約：「警視庁行政手続オンライン」で来所日を指定すると待ち時間を短くできる（警察署の窓口予約はない）</li>
                <li>ロッカー返還：記名品など落とし主が確認できる物件が対象。無記名品・携帯電話は対象外で、遺失物センターのみ</li>
                <li>受け取りに必要な物：本人の身分証明書、郵送で連絡があった場合はその郵便物、代理人の場合は委任状</li>
              </ul>
              <p>
                受け取りに行けない場合は、送料を負担して郵送等で送ってもらう方法もあります。オンラインで着払いによる送付の手続きもできます。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.center}>警視庁「遺失物センター案内図」</Ext>／<Ext href={SRC.lost}>警視庁「落とし物をした方」</Ext>（2026年11月3日確認）
              </p>
            </>
          ),
        },
        {
          h2: "探せる期間は3か月",
          body: (
            <>
              <p>
                警視庁は、遺失物法（平成19年12月10日施行）により、落とし主が落とし物を探せる期間と警察での保管期間を3か月としています。傘や衣類などの安価な物は、2週間以内に落とし主が見つからない場合に売却等の処分ができるとされているため、早めに問い合わせるよう案内されています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.law}>警視庁「遺失物について」</Ext>（2026年11月3日確認）
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
          { href: "/bouhan-hojo-tokyo/", label: "東京23区の防犯機器補助と鍵交換" },
        ],
      }}
      faqTitle="東京で鍵をなくしたときのよくある質問"
      faqs={faqs}
      related={[
        { href: "/kagi-funshitsu/osaka/", label: "大阪で鍵をなくしたら", desc: "大阪府のオンライン遺失届と落とし物検索" },
        { href: "/kagi-funshitsu/zenkoku/", label: "道府県警察の落とし物検索・遺失届", desc: "46道府県は共通のポータル" },
        { href: "/area/tokyo/", label: "東京都の鍵屋・鍵トラブル", desc: "都内の業者の比べ方" },
        { href: "/kagi-koukan-timing/", label: "鍵交換のタイミング", desc: "紛失後に交換すべきかの目安" },
      ]}
    />
  );
}
