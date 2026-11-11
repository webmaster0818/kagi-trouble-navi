import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/sash-kagi-koukan/";
const TITLE = "サッシの鍵交換｜窓・勝手口ドア・引戸で替える部品の違いと、メーカー部品通販での探し方";
const DESC =
  "アルミや樹脂のサッシの鍵は、付いている場所で交換する部品が異なります。引違い窓はクレセント、勝手口ドアはシリンダー・サムターン・錠ケース、勝手口引戸や店舗引戸は召合せ錠です。" +
  "YKK AP 部品オンラインショップの掲載数と価格（税込）を2026年11月11日に集計しました。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = {
  ykkTop: "https://parts.ykkap.co.jp/shop/",
  ykkCrescent: "https://parts.ykkap.co.jp/shop/c/c301010/",
  ykkHojo: "https://parts.ykkap.co.jp/shop/c/c301013/",
  ykkKatteCyl: "https://parts.ykkap.co.jp/shop/c/c501211/",
  ykkKatteCase: "https://parts.ykkap.co.jp/shop/c/c501212/",
  ykkHikido: "https://parts.ykkap.co.jp/shop/c/c501510/",
  ykkFaq: "https://parts.ykkap.co.jp/shop/pages/faq.aspx",
  keishicho: "https://www.keishicho.metro.tokyo.lg.jp/kurashi/higai/akisu/akisu.html",
};

// YKK AP Parts SHOP の各カテゴリを 2026-11-11 に取得し（11/10〜11 のショップ刷新でURL・区分が変更）、当サイトで集計（価格は税込・販売中の品のみ）
const partsRows: [string, string, string, string][] = [
  ["引違い窓", "クレセント", "143品（販売中97品）", "1,397〜13,145円"],
  ["引違い窓", "クレセント受", "47品（販売中44品）", "726〜3,300円"],
  ["引違い窓", "補助錠", "3品", "1,210〜1,870円"],
  ["勝手口ドア", "シリンダー・サムターン", "34品", "2,530〜40,920円"],
  ["勝手口ドア", "錠ケース・錠受", "27品", "990〜9,680円"],
  ["勝手口引戸・店舗引戸", "召合せ錠（外シリンダー錠・内サムターン錠）", "15品（価格表示12品）", "1,925〜4,620円"],
];

const faqs: Faq[] = [
  {
    q: "サッシの鍵とは、どの部分のことですか？",
    a: "窓やドアの枠・戸がアルミや樹脂のサッシでできている建具の錠のことで、付いている場所によって部品が異なります。引違い窓ではクレセント（半月形の締め金具）、勝手口ドアではシリンダー・サムターン・錠ケース、勝手口引戸や店舗引戸では2枚の戸が重なる部分の召合せ錠が交換の対象になります。",
  },
  {
    q: "サッシメーカーの部品は個人でも買えますか？",
    a: "YKK APは公式オンラインショップ「Parts SHOP」で、窓やドア、網戸の修理部品などの補修部品を販売しています（2026年11月11日確認）。同サイトのよくある質問では、簡単な工具でお客様が交換できるものを販売しており、交換作業や機能・性能の維持に技術を要する部品は販売していないと案内しています。",
  },
  {
    q: "部品が「販売終了品」になっていたらどうすればいいですか？",
    a: "YKK APの部品通販では、販売終了品には代替品の紹介があり、そちらを購入するよう案内しています。クレセントの一覧でも、販売終了の品の多くに「代替品をご購入ください」と表示されていました（2026年11月11日確認）。代替品の適用商品と寸法を確認してから選んでください。",
  },
  {
    q: "勝手口ドアの鍵を防犯性の高いものにできますか？",
    a: "同じドア向けに、標準品と防犯性能を高めた品の両方が掲載されている場合があります。例として、YKK APの部品通販ではエアリフレ（2005年4月〜）などの勝手口ドア向けに「交換用標準シリンダー（2ロック）」が税込9,295円、「交換用高性能V18シリンダー（2ロック）」が税込40,920円で掲載されていました（2026年11月11日確認）。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月11日"
      updatedIso="2026-11-11"
      crumbs={[{ name: "サッシの鍵交換" }]}
      answerLead="サッシの鍵交換は、どこの鍵かによって替える部品が変わります。引違い窓はクレセント、勝手口ドアはシリンダー・サムターン・錠ケース、勝手口引戸や店舗引戸は召合せ錠です。サッシメーカーの部品通販では、窓やドアの商品名・製造時期・左右の向きから適合する部品を選びます。"
      answerBody={
        <>
          <p>
            YKK APの部品オンラインショップ（Parts SHOP）の該当カテゴリを2026年11月11日に集計したところ、引違い窓のクレセントは143品（販売中97品・税込1,397〜13,145円）、勝手口ドアのシリンダー・サムターンは34品（税込2,530〜40,920円）が掲載されていました。部品の多くには「交換要領書付」と表示されています。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC.ykkTop}>YKK AP 部品オンラインショップ Parts SHOP</Ext>（2026年11月11日確認・掲載数と価格帯は当サイトで集計）
          </p>
        </>
      }
      sections={[
        {
          h2: "場所別：サッシの鍵で交換する部品と掲載数・価格帯",
          body: (
            <>
              <p>
                YKK APの部品通販で、サッシの鍵にあたるカテゴリを集計した結果です。価格は販売中の品の税込価格の最小と最大で、送料は含みません。
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">場所</th>
                      <th className="border border-border px-3 py-2 text-left">部品</th>
                      <th className="border border-border px-3 py-2 text-left">掲載数</th>
                      <th className="border border-border px-3 py-2 text-left whitespace-nowrap">価格（税込）</th>
                    </tr>
                  </thead>
                  <tbody>
                    {partsRows.map(([a, b, c, d]) => (
                      <tr key={a + b}>
                        <td className="border border-border px-3 py-2">{a}</td>
                        <td className="border border-border px-3 py-2">{b}</td>
                        <td className="border border-border px-3 py-2">{c}</td>
                        <td className="border border-border px-3 py-2 font-bold text-text-primary whitespace-nowrap">{d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                引違い窓のクレセントの選び方（右勝手・左勝手、ねじ穴のピッチ、カバーの有無）は<a href="/crescent-koukan/" className="text-primary underline">クレセント錠の交換</a>で詳しく説明しています。召合せ錠のうち3品は価格の表示がなく、代替品・兼用品があると案内されていました。
              </p>
              <p className="text-xs text-text-muted">
                出典：YKK AP 部品オンラインショップ「<Ext href={SRC.ykkCrescent}>引違い窓／クレセント・受け部品</Ext>」「<Ext href={SRC.ykkHojo}>引違い窓／補助錠</Ext>」「<Ext href={SRC.ykkKatteCyl}>勝手口ドアの部品／シリンダー・サムターン</Ext>」「<Ext href={SRC.ykkKatteCase}>勝手口ドアの部品／錠ケース・錠受</Ext>」「<Ext href={SRC.ykkHikido}>勝手口引戸・店舗引戸・汎用引戸の部品／召合せ錠</Ext>」（いずれも2026年11月11日確認・表は当サイトで集計）
              </p>
            </>
          ),
        },
        {
          h2: "部品を探す前にそろえる4つの情報",
          body: (
            <>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  <strong>窓・ドアの商品名</strong>：部品通販の各部品には「適用商品」として窓やドアの商品名（例：エピソード、フレミングJ、プラマードⅢ）が書かれています。商品名は窓やドアの枠に貼られたラベルで確認できる場合があります。
                </li>
                <li>
                  <strong>製造・販売の時期</strong>：同じ商品名でも、時期で部品が分かれています。たとえばクレセントでは「エピソード（2010年12月以前）」と「エピソード（2011年1月以降）」で別の部品が掲載されていました。
                </li>
                <li>
                  <strong>左右の向き</strong>：クレセントは右勝手・左勝手、勝手口ドアの錠ケースやサムターンは右勝手用・左勝手用、または外観右吊元・左吊元で分かれています。
                </li>
                <li>
                  <strong>鍵の数</strong>：勝手口ドアのシリンダーには、鍵穴が1か所の「1ロック」と、主錠と補助錠の2か所の「2ロック」があります。2ロックのシリンダーには、主錠と補助錠が同じ鍵で開く品もあります。
                </li>
              </ol>
              <p className="text-xs text-text-muted">出典：<Ext href={SRC.ykkTop}>YKK AP 部品オンラインショップ Parts SHOP</Ext> 各部品の適用商品情報（2026年11月11日確認）</p>
            </>
          ),
        },
        {
          h2: "勝手口ドアのシリンダーは、同じドアでも防犯性能の異なる品がある",
          body: (
            <>
              <p>
                勝手口ドアのシリンダーには、同じ適用商品（エアリフレ〈2005年4月〜〉、エアクリエ〈2005年4月〜〉、フレミングJ 通風ドア・勝手口ドア〈2009年4月〜〉など）向けに、「交換用標準シリンダー（2ロック）」税込9,295円と、「交換用高性能V18シリンダー（2ロック）」税込40,920円が掲載されていました。高性能V18シリンダーの梱包内容は主錠・補助錠のV18シリンダー各1個と子鍵3本です。
              </p>
              <p>
                フレミングJの勝手口ドア・テラスドア向けには「シリンダーユニット（2個・ディンプル）」が税込9,680円で掲載されていました。価格は変わることがあるため、購入時に部品通販で確認してください。
              </p>
              <p>
                警視庁は窓の防犯対策として、サッシに補助錠を取り付けること、クレセント錠はロック付きのものが有効であること、防犯性能の高い建物部品（CP部品）への交換を挙げています。
              </p>
              <p className="text-xs text-text-muted">
                出典：<Ext href={SRC.ykkKatteCyl}>YKK AP 部品オンラインショップ「勝手口ドアの部品／シリンダー・サムターン」</Ext>（2026年11月11日確認）、<Ext href={SRC.keishicho}>警視庁「侵入窃盗の防犯対策」</Ext>（2026年11月10日確認）
              </p>
            </>
          ),
        },
        {
          h2: "自分で交換するか、依頼するかの判断",
          body: (
            <>
              <p>
                YKK APの部品通販は、簡単な工具でお客様が交換できるものを販売し、商品に同梱の部品交換要領書を読んで作業するよう案内しています。交換作業や機能・性能の維持に技術を要する部品は販売していないとしています。要領書の手順で作業できるかを確認してから購入してください。
              </p>
              <p>
                賃貸住宅の窓やドアは物件の設備のため、交換の前に大家・管理会社に連絡してください。適合する部品が見つからない場合や、窓・ドアそのものの建て付けに不具合がある場合は、窓やドアを取り付けた会社やサッシメーカーの窓口に相談してください。玄関の引き戸の鍵については<a href="/hikido-kagi/" className="text-primary underline">引き戸（玄関）の鍵交換・後付け</a>にまとめています。
              </p>
              <p className="text-xs text-text-muted">出典：<Ext href={SRC.ykkFaq}>YKK AP 部品オンラインショップ「よくある質問」</Ext>（2026年11月11日確認）</p>
            </>
          ),
        },
      ]}
      cta={{
        h2: "窓の防犯もあわせて見直すときは",
        text: "クレセントの交換とあわせて、補助錠の追加や防犯フィルムを検討する方法があります。窓と勝手口の防犯の考え方を確認してから部品を選ぶと、交換後の使い方まで決めやすくなります。",
        links: [
          { href: "/katteguchi-mado-bouhan/", label: "勝手口・窓の防犯対策 →" },
          { href: "/agents/", label: "鍵業者を比較する" },
        ],
      }}
      faqTitle="サッシの鍵交換のよくある質問"
      faqs={faqs}
      related={[
        { href: "/crescent-koukan/", label: "クレセント錠の交換", desc: "右勝手・左勝手とねじ穴のピッチの確かめ方" },
        { href: "/katteguchi-mado-bouhan/", label: "勝手口・窓の鍵の防犯対策", desc: "クレセント錠と補助錠の基礎知識" },
        { href: "/hojo-jou/", label: "補助錠の選び方", desc: "ワンドア・ツーロックの考え方" },
        { href: "/guremon-jou/", label: "グレモン錠とは", desc: "たてすべり出し窓などのハンドル交換部品" },
      ]}
    />
  );
}
