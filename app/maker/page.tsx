import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/maker/";
const TITLE = "錠メーカー別 合鍵・純正キーの頼み方｜MIWA・GOAL・ウエスト・アルファ・ミネベアショウワの窓口と価格";
const DESC =
  "美和ロック（MIWA）・GOAL・ウエスト（WEST）・アルファ（FBロック）・ミネベアショウワ（旧ユーシン・ショウワ）の純正合鍵の注文窓口、価格、納期、支払い方法を各社公式（2026年11月1日確認）にもとづいて一覧にしました。鍵の刻印でメーカーを見分け、メーカーごとの詳しいページへ進めます。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

type Row = { maker: string; window: string; price: string; pay: string; href: string; src: string; srcLabel: string };

const rows: Row[] = [
  {
    maker: "美和ロック（MIWA）",
    window: "公式通販「MIWA Direct」（WR・U9・UR・PR・PS）。LB・JCは専用の注文用紙、それ以外はサービス代行店",
    price: "1,155円〜1,760円（税込・送料別）",
    pay: "MIWA Directは鍵番号の入力とスマートフォンでの鍵の撮影が必要。SD店は金額・納期を電話で確認",
    href: "/maker/miwa/aikagi/",
    src: "https://www.miwa-lock.co.jp/tec/support/duplicatekey.html",
    srcLabel: "美和ロック「合鍵を希望されるお客様へ」",
  },
  {
    maker: "GOAL（ゴール）",
    window: "公式「GOALオンライン」でキーナンバーを入力",
    price: "キーごとに公式の注文ページで表示。送料手数料1,144円",
    pay: "代金引換郵便のみ。納期 約2週間（非接触タイプは約3〜4週間）",
    href: "/maker/goal/aikagi/",
    src: "https://www.goal-lock.com/ec/shopping3/faq.html",
    srcLabel: "GOALオンライン よくあるご質問",
  },
  {
    maker: "ウエスト（WEST）",
    window: "ハウスメーカーの住宅は各ハウスメーカーのメンテナンスセンター、建築設計事務所・工務店の住宅はBLUE WEST会員店",
    price: "公式ページに記載なし（会員店で確認）",
    pay: "公式ページに記載なし",
    href: "/maker/west/aikagi/",
    src: "https://west-lock.co.jp/faq",
    srcLabel: "ウエスト「よくあるご質問」",
  },
  {
    maker: "アルファ（FBロック）",
    window: "注文書にセキュリティカードのコピーを添えてFAX・郵送でアルファへ",
    price: "1本3,000円（税別）。送料はアルファ負担",
    pay: "代引きのみ（代引き手数料はアルファ負担）",
    href: "/maker/alpha/fb-lock/",
    src: "https://www.kk-alpha.com/lock/support/support.html",
    srcLabel: "アルファ「サポート情報」",
  },
  {
    maker: "ミネベアショウワ（旧ユーシン・ショウワ）",
    window: "注文書をFAX・郵送で大阪支店へ（電話・メールは不可）",
    price: "ピンキー1,320円〜（税込・送料別）",
    pay: "ヤマト運輸の代引きのみ。納期 約2〜4週間",
    href: "/maker/showa/spare-key/",
    src: "https://minebeashowa.co.jp/spare-key/",
    srcLabel: "ミネベアショウワ「スペアキーについて」",
  },
];

const faqs: Faq[] = [
  {
    q: "自分の鍵がどのメーカーか分かりません。",
    a: "鍵の持ち手（頭）の部分に、メーカー名やロゴ、キーナンバーが刻印されているのが一般的です。刻印が見当たらない場合は、ドアの側面（錠ケースのフロント）の刻印も確認してください。刻印の場所はキーナンバーの解説ページにまとめています。",
  },
  {
    q: "純正キーと街の鍵屋で作る合鍵は何が違いますか？",
    a: "ウエストは、一般的な鍵屋は実物の鍵の寸法を測って複製するため純正より寸法精度が悪くなり、シリンダーの寿命を縮めるとして純正の合鍵を推奨しています。ミネベアショウワも、ディンプルタイプは複製キーを使うとシリンダーの破損やキーが抜けないといったトラブルの可能性があるとしています（各社公式・2026年11月1日確認）。",
  },
  {
    q: "鍵を全部なくしたら純正キーは作れませんか？",
    a: "メーカーによって条件が違います。美和ロックのMIWA Directは鍵が手元にない場合は注文できず、ウエストはキーナンバーが分かれば製作できるが分からなければシリンダー交換が必要としています。アルファのFBロックはセキュリティカードが必要です。作れない場合は、鍵業者にシリンダー交換を頼むことになります。",
  },
  {
    q: "ユーシン・ショウワとミネベアショウワは同じ会社ですか？",
    a: "同じ会社です。ミネベアショウワ公式のお知らせ（2023年4月1日掲載・2026年11月1日確認）によると、株式会社ユーシン・ショウワは令和5年4月2日にミネベアショウワ株式会社へ社名を変更しました（所在地・電話番号等に変更なし）。",
  },
];

export default function Page() {
  return (
    <SimpleArticle
      path={PATH}
      h1={TITLE}
      description={DESC}
      updated="2026年11月1日"
      updatedIso="2026-11-01"
      crumbs={[{ name: "錠メーカー別ガイド" }]}
      answerLead="純正の合鍵は、メーカーごとに注文窓口が違います。MIWA・GOALは公式通販、ミネベアショウワとアルファはFAX・郵送、ウエストは会員店やハウスメーカーが窓口です。"
      answerBody={
        <>
          <p>
            どのメーカーも、純正キーは受注生産で届くまで日数がかかります（GOALは約2週間、ミネベアショウワは約2〜4週間）。今すぐ家に入りたい場合は、合鍵の注文ではなく鍵業者の解錠を検討してください。
          </p>
          <p className="text-xs text-text-muted">各社の値は、下の表の出典リンク先の公式ページを2026年11月1日に確認したものです。</p>
        </>
      }
      sections={[
        {
          h2: "メーカー別 合鍵の窓口・価格・支払い方法",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">メーカー</th>
                      <th className="border border-border px-3 py-2 text-left">注文窓口</th>
                      <th className="border border-border px-3 py-2 text-left">価格</th>
                      <th className="border border-border px-3 py-2 text-left">支払い・納期など</th>
                      <th className="border border-border px-3 py-2 text-left">出典</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r) => (
                      <tr key={r.href}>
                        <td className="border border-border px-3 py-2 font-bold">
                          <a href={r.href} className="text-primary underline">{r.maker}</a>
                        </td>
                        <td className="border border-border px-3 py-2">{r.window}</td>
                        <td className="border border-border px-3 py-2">{r.price}</td>
                        <td className="border border-border px-3 py-2">{r.pay}</td>
                        <td className="border border-border px-3 py-2 text-xs">
                          <Ext href={r.src}>{r.srcLabel}</Ext>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ),
        },
        {
          h2: "メーカー別の詳しいページ",
          body: (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {rows.map((r) => (
                <a key={r.href} href={r.href} className="bg-white rounded-xl border border-black/10 p-4 hover:border-primary/40 transition-colors">
                  <p className="font-bold text-primary text-sm mb-1">{r.maker}</p>
                  <p className="text-xs text-text-muted leading-relaxed">{r.window}</p>
                </a>
              ))}
            </div>
          ),
        },
        {
          h2: "シリンダー・お手入れのページ",
          body: (
            <ul className="list-disc pl-5 space-y-1.5">
              <li><a href="/maker/miwa/pr-cylinder/" className="text-primary underline">美和ロック（MIWA）のPRシリンダー</a>：2WAY構造・PR-Jとの違い・純正以外の合鍵の注意</li>
              <li><a href="/maker/miwa/lb-cylinder/" className="text-primary underline">美和ロック（MIWA）のLBシリンダー</a>：紛失時もシリンダー交換なしで以前のキーを無効にできる仕組み</li>
              <li><a href="/maker/miwa/haishi-cylinder/" className="text-primary underline">美和ロック（MIWA）の廃止シリンダー</a>：ディスク・EC・UX・PX・URの合鍵の注文期限と見分け方</li>
              <li><a href="/maker/goal/oteire/" className="text-primary underline">GOAL（ゴール）の錠前のお手入れ</a>：CQ303シリンダー潤滑剤か鉛筆の粉、油は使わない</li>
            </ul>
          ),
        },
      ]}
      cta={{
        h2: "合鍵を待てない・鍵をなくしたときは",
        text: "純正キーは届くまで日数がかかります。締め出しですぐに解錠が必要な場合や、紛失でシリンダー交換を検討する場合は、業者の料金と対応を比べてから依頼してください。",
        links: [
          { href: "/agents/", label: "鍵業者を比較する →" },
          { href: "/key-number-aikagi/", label: "キーナンバーで合鍵は作れる？" },
        ],
      }}
      faqTitle="錠メーカーと合鍵のよくある質問"
      faqs={faqs}
      related={[
        { href: "/key-number-aikagi/", label: "キーナンバーで合鍵は作れる？", desc: "刻印の場所と注文できない場合" },
        { href: "/junsei-key-saihakkou/", label: "メーカー純正キーの再発行", desc: "純正キー取り寄せの流れ" },
        { href: "/joumae-type-zukan/", label: "錠前の種類図鑑", desc: "シリンダーの見分け方" },
        { href: "/bouhan-hojo-tokyo/", label: "東京23区の防犯機器補助と鍵交換", desc: "区ごとの対象品目・補助率・期限" },
      ]}
    />
  );
}
