import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/maker/goal/oteire/";
const TITLE = "GOAL（ゴール）の鍵穴・錠前のお手入れ｜CQ303シリンダー潤滑剤か鉛筆の粉、油は使わない";
const DESC =
  "GOAL（ゴール）は、キーの抜き差しや回転が重くなったら、専用の「CQ303シリンダー潤滑剤」か鉛筆（軟らかい芯）の粉を鍵穴に入れるよう案内しています。ミシン油や防錆・潤滑剤は不可。" +
  "ハンドルのから拭き・材質別の注意・純正キーの勧めをGOAL公式で確認しました（2026年11月3日）。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  care: "https://www.goal-lock.com/support/care_lock.html",
};

const faqs: Faq[] = [
  {
    q: "GOALの鍵の抜き差しが重くなったら、何を使えばよいですか？",
    a: "GOALは、シリンダー専用潤滑剤「CQ303シリンダー潤滑剤」か、鉛筆（軟らかい芯）の粉（黒鉛粉）を鍵穴に入れるよう案内しています。鉛筆を使う場合は、キーの切込み面を鉛筆でなぞったあと、抜き差しを数回行います（GOAL「錠前のお手入れについて」2026年11月3日確認）。",
  },
  {
    q: "GOALの鍵穴に市販の潤滑スプレーを使ってもよいですか？",
    a: "GOALは、シリンダーの鍵穴へミシン油などの油や防錆・潤滑剤などを注入することは絶対に避けるよう案内しています。油に埃がつき鍵穴内で粘着するため、作動不良の原因になるとしています。",
  },
  {
    q: "ハンドルの汚れはどう落とせばよいですか？",
    a: "柔らかい布でのから拭きを月に1〜2回程度行い、落ちない場合は水拭き、それでも落ちない場合は中性洗剤を使います。中性洗剤を使ったら水拭きし、最後に必ずから拭きします。シンナーなどの有機溶剤・酸・アルカリ・塩素などの薬品は使わず、錠前に直接水をかけないよう案内されています。",
  },
  {
    q: "合鍵店で作った鍵を使っても問題ありませんか？",
    a: "GOALは、メーカーの純正キー以外の複製キーは、加工精度や加工面の状態によってはシリンダーの作動に悪影響をおよぼすことがあるとして、できる限り純正キーを使うよう案内しています。",
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
        { name: "錠メーカー別ガイド", href: "/maker/" },
        { name: "GOALの錠前のお手入れ" },
      ]}
      answerLead="GOALの鍵の抜き差しや回転が重くなったら、専用の「CQ303シリンダー潤滑剤」か、鉛筆（軟らかい芯）の粉を鍵穴に入れます。ミシン油などの油や防錆・潤滑剤は使わないよう、GOALは案内しています。"
      answerBody={
        <>
          <p>
            油に埃がつくと鍵穴の中で粘着し、作動不良の原因になるためです。ハンドルなど錠前の表面は、月に1〜2回程度、柔らかい布でから拭きします。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.care}>GOAL「錠前のお手入れについて」</Ext>（2026年11月3日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "鍵穴のお手入れ",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>使うもの：シリンダー専用潤滑剤「CQ303シリンダー潤滑剤」、または鉛筆（軟らかい芯）の粉（黒鉛粉）</li>
                <li>鉛筆の場合：キーの切込み面を鉛筆でなぞり、抜き差しを数回行う</li>
                <li>使わないもの：ミシン油などの油、防錆・潤滑剤など（油に埃がつき鍵穴内で粘着し、作動不良の原因になる）</li>
              </ul>
              <p>
                鍵穴に油を差してしまった場合の考え方や、ほかのメーカーの案内は<a href="/kagiana-abura/" className="text-primary underline">鍵穴に油を差してよいか</a>にまとめています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.care}>GOAL「錠前のお手入れについて」</Ext>（2026年11月3日確認）
              </p>
            </>
          ),
        },
        {
          h2: "ハンドルなど錠前の表面のお手入れ",
          body: (
            <>
              <ol className="list-decimal pl-5 space-y-1.5">
                <li>から拭き：柔らかい布で定期的に（月に1〜2回程度）</li>
                <li>水拭き：から拭きで汚れが落ちない場合。最後は必ずから拭き</li>
                <li>中性洗剤：水拭きでも落ちない場合。使ったら水拭きし、最後にから拭き</li>
              </ol>
              <p>
                汚れや埃を付けたまま放置すると、変色・腐蝕するとされています。海岸地帯や交通量の多い道路沿いは、塩分や排気ガスで汚れやすいため、こまめな手入れが勧められています。固いブラシでこすること、シンナーなどの有機溶剤・酸・アルカリ・塩素などの薬品での洗浄、錠前に直接水をかけることは避けます。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.care}>GOAL「錠前のお手入れについて」</Ext>（2026年11月3日確認）
              </p>
            </>
          ),
        },
        {
          h2: "材質ごとの注意（GOAL公式の説明）",
          body: (
            <>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>ステンレス：絶対に錆びない金属ではない。表面の不動態皮膜が、付着物（もらい錆び）や清掃薬剤の酸・塩素系成分、塩害などで壊れ、再生が妨げられると錆びる</li>
                <li>アルミ：不動態皮膜がステンレスほど強固でないため、塗装やアルマイト処理をしている。一度腐食すると元の美観に戻すのは難しい</li>
                <li>黄銅：素材のままでは黒く変色するため塗装している。素地に達する傷があると早く腐食する。一度腐食すると元の美観に戻すのは難しい</li>
              </ul>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.care}>GOAL「錠前のお手入れについて」</Ext>（2026年11月3日確認）
              </p>
            </>
          ),
        },
        {
          h2: "合鍵は純正キーを",
          body: (
            <p>
              GOALは、純正キー以外の複製キーは、加工精度や加工面の状態によってはシリンダーの作動に悪影響をおよぼすことがあるとして、できる限り純正キーを使うよう案内しています。純正キーの注文方法は<a href="/maker/goal/aikagi/" className="text-primary underline">GOAL（ゴール）のスペアキー・フレッシュキーの注文方法</a>にまとめています。
            </p>
          ),
        },
      ]}
      cta={{
        h2: "お手入れで直らないときは",
        text: "潤滑剤を入れても抜き差しが重い、途中までしか入らないといった場合は、無理に回さず業者に相談してください。依頼前に料金と対応を比べることをおすすめします。",
        links: [
          { href: "/agents/", label: "鍵業者の比較一覧 →" },
          { href: "/kagi-mawaranai/", label: "鍵が回らないときの対処" },
        ],
      }}
      faqTitle="GOALの錠前のお手入れのよくある質問"
      faqs={faqs}
      related={[
        { href: "/maker/goal/aikagi/", label: "GOAL（ゴール）のスペアキー注文", desc: "鍵番号でわかるキーチェンジ機能" },
        { href: "/kagiana-abura/", label: "鍵穴に油を差してよいか", desc: "美和ロックの案内と専用潤滑剤" },
        { href: "/kagi-jumyou/", label: "鍵の寿命と交換の目安", desc: "耐用年数の考え方" },
        { href: "/maker/showa/oteire/", label: "ミネベアショウワの錠前のお手入れ", desc: "症状別の対処と8つの注意" },
        { href: "/maker/", label: "錠メーカー別ガイド", desc: "5社の合鍵の窓口を一覧で比較" },
        { href: "/maker/goal/koukan/", label: "GOALの鍵交換", desc: "お手入れで直らないときのシリンダー交換" },
      ]}
    />
  );
}
