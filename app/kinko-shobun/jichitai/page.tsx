import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/kinko-shobun/jichitai/";
const TITLE = "金庫の捨て方は自治体で違う｜20市区の分別ルール（耐火金庫・手提げ金庫）";
const DESC =
  "耐火金庫は中央区・札幌市・横浜市・大阪市・広島市など18市区で市区の収集対象外、世田谷区は販売店への引取依頼を案内し、" +
  "相模原市は扉が開き中が空のものに限り粗大ごみの直接搬入ができます。手提げ金庫は大きさや重さで分かれます。" +
  "各市区の公式の分別案内（2026年11月5日・6日・13日確認）で整理しました。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const CHECKED = "2026年11月5日・6日・13日確認";

type Row = {
  name: string;
  area: string;
  small: string;
  fire: string;
  src: string;
  srcName: string;
  srcDate: string;
};

const rows: Row[] = [
  {
    name: "東京都中央区",
    area: "/area/chuo-ku/",
    small: "一辺30cm以下は燃やさないごみ、30cmを超えるものは粗大ごみ",
    fire: "どんな大きさでも収集できない。専門業者へ依頼",
    src: "https://www.city.chuo.lg.jp/kurashi/gomi/bunbetsu/wakekata/ichiran/kagyou/ki.html",
    srcName: "中央区「ごみの分け方・出し方一覧表-き-」",
    srcDate: "掲載日2026年11月4日",
  },
  {
    name: "東京都練馬区",
    area: "/area/nerima-ku/",
    small: "金庫（手さげ）は不燃ごみ",
    fire: "金庫（大型・耐火）は区では収集できない。メーカーまたは販売店に相談",
    src: "https://www.city.nerima.tokyo.jp/kurashi/gomi/wakekata/bunbetsu/kagyo.html",
    srcName: "練馬区「品目検索　か行」",
    srcDate: "更新日2026年10月1日",
  },
  {
    name: "東京都杉並区",
    area: "/area/suginami-ku/",
    small: "金庫（手提げ）で最大辺が30cmを超えるものは粗大ごみ",
    fire: "大型の金庫は収集不可",
    src: "https://www.city.suginami.tokyo.jp/gomibunbetsu/ki/00223.html",
    srcName: "杉並区「金庫（手提げ）【最大辺が30ｃｍ超】」",
    srcDate: "更新日2025年1月20日",
  },
  {
    name: "東京都江戸川区",
    area: "/area/edogawa-ku/",
    small: "（一覧の「た行」に手提げ金庫の行なし）",
    fire: "耐火金庫は収集できない。専門業者へ依頼",
    src: "https://www.city.edogawa.tokyo.jp/e025/kurashi/gomi_recycle/kategomi/hinmoku/ta.html",
    srcName: "江戸川区「資源・ごみの分け方・出し方　一覧表（品目名：た行）」",
    srcDate: "更新日2026年4月1日",
  },
  {
    name: "東京都新宿区",
    area: "/area/shinjuku-ku/",
    small: "（粗大ごみの案内に手提げ金庫の記載なし）",
    fire: "耐火金庫などは区では収集できない。区が専門業者を紹介するため、管轄の清掃事務所・清掃センターに問い合わせる",
    src: "https://www.city.shinjuku.lg.jp/seikatsu/file09_01_00016.html",
    srcName: "新宿区「粗大ごみの出し方」",
    srcDate: "最終更新日2026年7月1日",
  },
  {
    name: "東京都大田区",
    area: "/area/ota-ku/",
    small: "（収集できないものの案内に手提げ金庫の記載なし）",
    fire: "ピアノ・耐火金庫は区では収集できない。大人2人で持ち上げられないような重量物も同様。メーカーや販売店に相談",
    src: "https://www.city.ota.tokyo.jp/seikatsu/gomi/shigentogomi/syuusyuu.html",
    srcName: "大田区「区では収集できないもの」",
    srcDate: "更新日2022年4月1日",
  },
  {
    name: "東京都品川区",
    area: "/area/shinagawa-ku/",
    small: "金庫（手提げ）は陶器・ガラス・金属ごみ",
    fire: "耐火金庫は区で収集できない。区が専門処理業者を案内",
    src: "https://www.city.shinagawa.tokyo.jp/kurashi/gomi/1003962/1009403/1003972.html",
    srcName: "品川区「資源・ごみ品目一覧」",
    srcDate: "更新日2026年10月20日",
  },
  {
    name: "東京都世田谷区",
    area: "/area/setagaya-ku/",
    small: "（分別一覧〈50音順〉に手提げ金庫の行なし）",
    fire: "耐火金庫は販売店に引取を依頼。引取店が見つからないときは清掃事務所に相談",
    src: "https://www.city.setagaya.lg.jp/02241/407.html",
    srcName: "世田谷区「資源・ごみの分別（50音順）」",
    srcDate: "最終更新日2026年7月17日",
  },
  {
    name: "札幌市",
    area: "/area/sapporo/",
    small: "耐火性能のない手提げ金庫は燃やせないごみ。耐火性のない金庫は大きさにより燃やせないごみか大型ごみ",
    fire: "耐火金庫は据置型・手提げ式とも市で収集しないもの。金属商に相談",
    src: "https://www.city.sapporo.jp/seiso/bunbetsu/index.html",
    srcName: "札幌市「家庭ごみ50音分別辞典」",
    srcDate: "更新日2026年4月28日",
  },
  {
    name: "さいたま市",
    area: "/area/saitama/",
    small: "（ごみの出し方のページに手提げ金庫の記載なし）",
    fire: "市で処理・収集できない適正処理困難物。一般廃棄物処分業許可業者の施設で処理",
    src: "https://www.city.saitama.lg.jp/001/006/010/003/index.html",
    srcName: "さいたま市「ごみの出し方」",
    srcDate: "ページに更新日の表示なし",
  },
  {
    name: "千葉市",
    area: "/area/chiba/",
    small: "手提げ金庫は不燃ごみ",
    fire: "排出禁止物等。購入店・メーカーなどに相談するか、千葉市が許可した処理業者（事典に業者名と連絡先を掲載）へ",
    src: "https://www.city.chiba.jp/kankyo/junkan/shushugyomu/documents/koukaiyou_gomibunbetsujiten-240510.pdf",
    srcName: "千葉市「ごみ分別事典」（PDF）",
    srcDate: "2024年5月版",
  },
  {
    name: "船橋市",
    area: "/area/funabashi/",
    small: "（市で収集しないごみの案内に手提げ金庫の記載なし）",
    fire: "処理困難物。販売店やメーカー、または一般廃棄物協同組合に相談",
    src: "https://www.city.funabashi.lg.jp/kurashi/gomi/001/p001548.html",
    srcName: "船橋市「市で収集しないごみ」",
    srcDate: "更新日2025年5月27日",
  },
  {
    name: "横浜市",
    area: "/area/yokohama/",
    small: "（市では収集しないごみの案内に手提げ金庫の記載なし）",
    fire: "処理困難物。販売店または資源循環局事務所に相談",
    src: "https://www.city.yokohama.lg.jp/lang/residents/living-guide/garbage/garbage.html",
    srcName: "横浜市「市では収集しないごみとリサイクル」",
    srcDate: "最終更新日2025年11月14日",
  },
  {
    name: "川崎市",
    area: "/area/kawasaki/",
    small: "金庫は粗大ごみまたは処理困難物",
    fire: "耐火性の金庫は市では処理しない。販売店等に相談",
    src: "https://www.city.kawasaki.jp/kurashi/category/261-1-10-2-0-0-0-0-0-0.html",
    srcName: "川崎市「ごみの分別に迷ったら」",
    srcDate: "更新日2026年4月1日",
  },
  {
    name: "相模原市",
    area: "/area/sagamihara/",
    small: "手提げ金庫（金属製）は金物類、50cm以上は粗大ごみ。金属製以外は燃やすしかないごみ（一般ごみ）、50cm以上は粗大ごみ",
    fire: "耐火金庫（扉が開くものに限る）は粗大ごみの直接搬入のみ可（戸別収集はできない）",
    src: "https://www.city.sagamihara.kanagawa.jp/kurashi/1026489/recycle/1026493/1036314/1036284.html",
    srcName: "相模原市「ごみ分別検索」",
    srcDate: "最終更新日2026年11月6日",
  },
  {
    name: "名古屋市",
    area: "/area/nagoya/",
    small: "（粗大ごみのページに手提げ金庫の記載なし）",
    fire: "処理困難なもの（ガスボンベ・消火器などと同じ扱い）として市では収集しない",
    src: "https://www.city.nagoya.jp/kurashi/gomi/1012183/1035058/1012184/1033988.html",
    srcName: "名古屋市「粗大ごみの分け方・出し方について」",
    srcDate: "更新日2026年10月26日",
  },
  {
    name: "大阪市",
    area: "/area/osaka/",
    small: "手提げ金庫は「大阪市で収集しないもの」から除かれている（出し方はこのページに記載なし）",
    fire: "金庫（手提げ金庫を除く）は市で収集しない。相談窓口として大阪セーフ・ファニチュア協同組合を案内",
    src: "https://www.city.osaka.lg.jp/kankyo/page/0000369364.html",
    srcName: "大阪市「大阪市で収集しないもの」",
    srcDate: "2024年9月27日",
  },
  {
    name: "神戸市",
    area: "/area/kobe/",
    small: "指定袋に入る5kg以下の手提げ金庫は燃えないごみ、5kgを超えるものは大型ごみ。耐火でない金庫も同じ",
    fire: "市では収集できない。販売店・製造元などへ相談",
    src: "https://www.city.kobe.lg.jp/a04164/kurashi/recycle/gomi/dashikata/hayamihyo/c03_ta.html",
    srcName: "神戸市「品目 た行」",
    srcDate: "最終更新日2026年4月2日",
  },
  {
    name: "広島市",
    area: "/area/hiroshima/",
    small: "（か行の金庫の項目は耐火金庫のみ）",
    fire: "金庫（耐火金庫）は市では収集しない。販売店や専門の処理業者に引き取りを依頼。相談先として中国セーフ・ファニチュア協同組合を案内",
    src: "https://www.city.hiroshima.lg.jp/living/gomi-kankyo/1021277/1003072/1026094/1008420.html",
    srcName: "広島市「家庭ごみ分別50音事典_か行」",
    srcDate: "更新日2026年4月1日",
  },
  {
    name: "北九州市",
    area: "/area/kitakyushu/",
    small: "手さげ金庫は粗大ごみ（事前申込制）",
    fire: "耐火金庫は市が収集しないもの。専門の処理業者に依頼",
    src: "https://www.city.kitakyushu.lg.jp/contents/924_10058.html",
    srcName: "北九州市「分別早見表（た行）」",
    srcDate: "更新日2026年7月8日",
  },
];

const faqs: Faq[] = [
  {
    q: "耐火金庫を粗大ごみに出せる自治体はありますか？",
    a: "今回確認した20市区のうち、相模原市は耐火金庫を粗大ごみとして市の受入施設へ直接搬入できます。" +
      "扉を開けて中が空であることを確認できるものに限られ、戸別収集はできません。持ち運びが困難な重いものは断ることがあり、荷降ろしは持ち込む本人が行います。" +
      "世田谷区は販売店に引取を依頼し、引取店が見つからないときは清掃事務所に相談するよう案内しています。" +
      "ほかの18市区（中央区・練馬区・杉並区・江戸川区・新宿区・大田区・品川区・札幌市・さいたま市・千葉市・船橋市・横浜市・川崎市・名古屋市・大阪市・神戸市・広島市・北九州市）は、耐火金庫や大型の金庫を市区では収集していません（" +
      CHECKED +
      "）。ほかの市区町村については、お住まいの自治体の分別案内で「金庫」「耐火金庫」の項目を確認してください。",
  },
  {
    q: "手提げ金庫は何ごみになりますか？",
    a: "自治体と大きさで変わります。中央区は一辺30cm以下が燃やさないごみ・30cm超が粗大ごみ、練馬区と千葉市は不燃ごみ、杉並区は最大辺30cm超が粗大ごみ、品川区は陶器・ガラス・金属ごみ、相模原市は金属製が金物類・50cm以上が粗大ごみ、札幌市は燃やせないごみ（耐火性能があるものは市で収集しない）、北九州市は粗大ごみ、神戸市は指定袋に入る5kg以下が燃えないごみ・5kg超が大型ごみです。",
  },
  {
    q: "鍵をなくして開かない金庫も、そのまま処分してよいですか？",
    a: "中身が残っている可能性があるなら、処分の前に解錠して確認してください。引き渡した後は中身を取り戻せないことがあります。解錠の依頼方法は「金庫の鍵開け・解錠」のページにまとめています。",
  },
  {
    q: "無料で回収するという業者に頼んでもよいですか？",
    a: "名古屋市は、市の許可のない回収業者に粗大ごみなどの処分を頼まないよう注意を呼びかけています。耐火金庫は、各自治体が案内する購入店・メーカー・許可業者などのルートで処分してください。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月13日"
      updatedIso="2026-11-13"
      crumbs={[
        { name: "金庫の処分方法", href: "/kinko-shobun/" },
        { name: "自治体別の金庫の分別ルール" },
      ]}
      answerLead="耐火金庫は、今回確認した20市区のうち18市区で市区の収集対象外です。世田谷区は販売店への引取依頼を案内し、相模原市は扉が開き中が空のものに限り粗大ごみとして直接搬入できます。手提げ金庫は、自治体によって不燃ごみ（燃えないごみ）か粗大ごみに分かれ、境目は「一辺30cm」「50cm」「5kg」など自治体ごとに違います。札幌市のように、手提げ金庫でも耐火性能があれば収集しない市もあります。"
      answerBody={
        <>
          <p>
            耐火金庫を処分するときの相談先も自治体で違います。メーカー・販売店へ相談するよう案内する区市（練馬区・大田区・世田谷区・船橋市・横浜市・川崎市・神戸市など）、専門業者や許可業者を案内する区市（中央区・江戸川区・新宿区・品川区・さいたま市・千葉市・北九州市）、業界の協同組合を相談窓口に挙げる市（大阪市・広島市）、金属商への相談を案内する市（札幌市）があります。相模原市は、条件を満たせば市の粗大ごみ受入施設へ持ち込めます。
          </p>
          <p className="text-xs text-text-muted">
            出典：下の表に記載した各市区の公式ページ（{CHECKED}）
          </p>
        </>
      }
      sections={[
        {
          h2: "20市区の金庫の分別ルール一覧",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">市区</th>
                      <th className="border border-border px-3 py-2 text-left">手提げ金庫など小型</th>
                      <th className="border border-border px-3 py-2 text-left">耐火金庫・大型の金庫</th>
                      <th className="border border-border px-3 py-2 text-left">出典</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r) => (
                      <tr key={r.name}>
                        <td className="border border-border px-3 py-2 font-bold text-text-primary">
                          <a href={r.area} className="text-primary underline">{r.name}</a>
                        </td>
                        <td className="border border-border px-3 py-2">{r.small}</td>
                        <td className="border border-border px-3 py-2">{r.fire}</td>
                        <td className="border border-border px-3 py-2 text-xs">
                          <Ext href={r.src}>{r.srcName}</Ext>（{r.srcDate}）
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-text-muted">
                いずれも {CHECKED}。表の市区名から各地域の鍵業者の比較ページに移動できます。手数料は自治体や品目で異なるため、申し込み時に各市区の案内で確認してください。
              </p>
            </>
          ),
        },
        {
          h2: "自治体で違う5つの点",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  小型と粗大ごみの境目：中央区は「一辺30cm」、杉並区は「最大辺30cm」、相模原市は「50cm」、神戸市は「指定袋に入り5kg以下」で分けています。
                </li>
                <li>
                  耐火金庫の相談先：練馬区・大田区はメーカーや販売店、世田谷区は販売店（引取店が見つからないときは清掃事務所）、神戸市は販売店・製造元など、千葉市は購入店・メーカーなどか市が許可した処理業者、札幌市は金属商を案内しています。新宿区は清掃事務所・清掃センターに問い合わせると専門業者を紹介し、品川区も専門処理業者を案内すると記載しています。
                </li>
                <li>
                  重さによる制限：大田区は、耐火金庫に加えて「大人2人で持ち上げられないような重量物」も区では収集できないとしています。
                </li>
                <li>
                  市に持ち込める例：相模原市は、耐火金庫を「市では処理できないもの」の例外として、扉を開けて中が空であることを確認できるものに限り粗大ごみとして持ち込めるとしています。持ち運びが困難な重いものは断ることがあり、荷降ろしは持ち込む本人が行います（<Ext href="https://www.city.sagamihara.kanagawa.jp/kurashi/1026489/recycle/1026493/katei/1008311.html">相模原市「市では処理できないもの」</Ext>、最終更新日2026年6月11日）。
                </li>
                <li>
                  手提げ金庫の扱い：大阪市は収集しない品目を「金庫（手提げ金庫を除く）」と表記し、札幌市は手提げ金庫でも耐火性能がある場合は市で収集しないものとしています。
                </li>
              </ul>
            </>
          ),
        },
        {
          h2: "開かない金庫は処分の前に中身を確認する",
          body: (
            <p>
              鍵をなくした、暗証番号が分からないなどで開かない金庫は、中身が残っている可能性があるなら処分の前に解錠して確認してください。依頼の流れは<a href="/kinko-kaijo/" className="text-primary underline">金庫の鍵開け・解錠</a>、処分ルート全体と搬出時の注意は<a href="/kinko-shobun/" className="text-primary underline">金庫の処分方法</a>にまとめています。
            </p>
          ),
        },
      ]}
      cta={{
        h2: "開かない金庫の解錠を相談するときは",
        text: "金庫のメーカー名・型番・大きさを伝えると、対応の可否を確かめやすくなります。依頼前に料金と対応を比べることをおすすめします。",
        links: [
          { href: "/agents/", label: "鍵業者の比較一覧 →" },
          { href: "/kinko-kaijo/", label: "金庫の鍵開け・解錠" },
        ],
      }}
      faqTitle="自治体別の金庫の捨て方のよくある質問"
      faqs={faqs}
      related={[
        { href: "/kinko-shobun/", label: "金庫の処分方法", desc: "購入店・メーカー・専門業者の3つのルート" },
        { href: "/kinko-kaijo/", label: "金庫の鍵開け・解錠", desc: "開かない金庫の解錠方法と依頼の流れ" },
        { href: "/kagi-shobun/", label: "不要になった鍵の処分方法", desc: "古い鍵・合鍵の捨て方" },
        { href: "/bouhan-hojo-tokyo/", label: "東京都の防犯機器補助", desc: "区市町村別の一覧" },
      ]}
    />
  );
}
