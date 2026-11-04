import type { Metadata } from "next";
import SimpleArticle, { Ext, type Faq } from "@/components/SimpleArticle";

const PATH = "/maker/showa/spare-key/";
const TITLE = "ミネベアショウワ（旧ユーシン・ショウワ）のスペアキーの注文方法｜キー名別の価格と納期、FAX・郵送のみ";
const DESC =
  "ミネベアショウワのスペアキーは、注文書をFAXか郵送で大阪支店へ送って注文します（電話・メール不可）。ピンキー1,320円・Xキー1,650円・NXキー1,980円・WX/WSキー1,760円（税込・送料別）、納期は約2〜4週間、支払いはヤマト運輸の代引きのみ（ミネベアショウワ公式 2026年11月1日確認）。";

export const metadata: Metadata = {
  title: `${TITLE} | 鍵トラブルナビ`,
  description: DESC,
  alternates: { canonical: `https://kagi-trouble-navi.com${PATH}` },
};

const SRC = "https://minebeashowa.co.jp/spare-key/";

const rows: [string, string, string, string?][] = [
  ["ピンキー", "1,320円", "約2週間", "3本ピン用・5本ピン用・6本ピン用があり、鍵の長さはそれぞれ異なる"],
  ["MHキー", "4,180円", "約4週間"],
  ["Xキー", "1,650円", "約2週間"],
  ["NXキー", "1,980円", "約2週間"],
  ["WXキー（LIXIL刻印）", "1,760円", "約2週間"],
  ["WSキー（LIXIL刻印）", "1,760円", "約2週間"],
  ["WXキー（SHOWA刻印）", "1,760円", "約2週間"],
  ["スペアキー（三協アルミ向け）", "2,365円", "約4週間"],
  ["メカニカルキー①②（三協アルミ向け）", "各3,300円", "約4週間"],
  ["マイスナーカード", "1,650円", "約2週間"],
  ["特定マイスナーカード", "1,650円", "約3週間", "カードNo.の3桁目の刻印が「X」のカード。念書原紙の郵送が必要"],
  ["エントリーキー①（メカニカルキー付・三協アルミ向け）", "16,500円", "約4週間"],
  ["エントリーキー②（メカニカルキー付・三協アルミ向け）", "34,500円", "約4週間"],
];

const faqs: Faq[] = [
  {
    q: "ミネベアショウワのスペアキーはどうやって注文しますか？",
    a: "注文書を「FAX」または「郵送」でミネベアショウワの大阪支店へ送ります。電話やメールでは注文を受け付けていません。注文書は公式サイトの「スペアキーについて」ページからダウンロードでき、三協アルミ向けのキーやマスターキー・特定マイスナーカードは別の注文書・念書を使います（2026年11月1日にミネベアショウワ公式で確認）。",
  },
  {
    q: "スペアキーの価格はいくらですか？",
    a: "公式の一覧では、ピンキー1,320円、Xキー1,650円、WXキー・WSキー1,760円、NXキー1,980円、MHキー4,180円などで、いずれも税込・送料別です。マスターキー・マスターカードの価格と納期は一覧に載っておらず、別途問い合わせとされています。",
  },
  {
    q: "納期はどのくらいですか？",
    a: "公式の一覧の納期（実働）は、ピンキー・Xキー・NXキー・WX/WSキー・マイスナーカードが約2週間、特定マイスナーカードが約3週間、MHキーと三協アルミ向けのキーが約4週間です。製品が完成しだい順次出荷され、発送の連絡や着日・時間の指定はできません。",
  },
  {
    q: "支払い方法は？",
    a: "ヤマト運輸の代引きのみです。現金、クレジットカード、電子マネーで支払えますが、クレジットカード決済の場合は送付先の個人名とカードの名義人が同一である必要があります。",
  },
  {
    q: "ユーシン・ショウワとミネベアショウワは同じ会社ですか？",
    a: "同じ会社です。ミネベアショウワ公式のお知らせ（2023年4月1日掲載・2026年11月1日確認）によると、株式会社ユーシン・ショウワは令和5年4月2日にミネベアショウワ株式会社へ社名を変更しました（所在地・電話番号等に変更なし）。",
  },
  {
    q: "注文後にキャンセルできますか？",
    a: "注文数量の変更やキャンセルは、注文書の受領日の当日まで可能です。受領日を過ぎると変更・キャンセルの手続きはできません。",
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
      crumbs={[
        { name: "キーナンバーと合鍵作成", href: "/key-number-aikagi/" },
        { name: "ミネベアショウワのスペアキー" },
      ]}
      answerLead="ミネベアショウワのスペアキーは、注文書をFAXか郵送で大阪支店へ送って注文します。価格はピンキー1,320円〜（税込・送料別）、納期は約2〜4週間、支払いはヤマト運輸の代引きのみです。"
      answerBody={
        <>
          <p>
            ミネベアショウワは、スペアキーには同社のロゴが入った「純正キー」の製作を勧めています。特に精密な寸法で作られているディンプルタイプ（くぼみのあるキー）は、寸法をまねて作った「複製キー」を使うと、抜き差しの違和感だけでなく、シリンダーの破損やキーが抜けないといったトラブルが起きる可能性があるとしています。
          </p>
          <p className="text-xs text-text-muted">
            出典：<Ext href={SRC}>ミネベアショウワ「スペアキーについて」</Ext>（2026年11月1日確認）。旧社名は株式会社ユーシン・ショウワで、令和5年4月2日に現社名へ変更（<Ext href="https://minebeashowa.co.jp/company-name-change/">ミネベアショウワ公式のお知らせ</Ext>・2026年11月1日確認）
          </p>
        </>
      }
      sections={[
        {
          h2: "キー名別の価格と納期（公式一覧より）",
          body: (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-alt">
                      <th className="border border-border px-3 py-2 text-left">鍵名</th>
                      <th className="border border-border px-3 py-2 text-left whitespace-nowrap">単価（税込・送料別）</th>
                      <th className="border border-border px-3 py-2 text-left whitespace-nowrap">納期（実働）</th>
                      <th className="border border-border px-3 py-2 text-left">備考</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map(([a, b, c, d]) => (
                      <tr key={a}>
                        <td className="border border-border px-3 py-2 font-bold text-text-primary">{a}</td>
                        <td className="border border-border px-3 py-2 whitespace-nowrap">{b}</td>
                        <td className="border border-border px-3 py-2 whitespace-nowrap">{c}</td>
                        <td className="border border-border px-3 py-2">{d ?? ""}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                一覧に載っていない刻印のキーは問い合わせるよう案内されています。ホテル関係のカードは公式サイトに掲載がなく、同社の担当者へ連絡します。三協アルミ向けのリモコンのみの注文は、三協アルミの支店・営業所が窓口です。
              </p>
              <p className="text-xs text-text-muted">出典：<Ext href={SRC}>ミネベアショウワ「スペアキーについて」スペアキーの種類</Ext>（2026年11月1日確認）</p>
            </>
          ),
        },
        {
          h2: "注文の流れと注意点",
          body: (
            <ul className="list-disc pl-5 space-y-1.5">
              <li>注文書を公式ページからダウンロードし、FAXまたは郵送で大阪支店へ送る（電話・メールは不可）</li>
              <li>数量の変更・キャンセルは注文書の受領日の当日まで</li>
              <li>製品が完成しだい順次出荷。発送の連絡、着日・時間の指定は不可</li>
              <li>支払いはヤマト運輸の代引きのみ（現金・クレジットカード・電子マネー）</li>
              <li>マスターキー・特定マイスナーカードは、念書類の提出など厳重な本人確認が必要。記入・捺印した念書原紙の到着をもって注文確定</li>
            </ul>
          ),
        },
      ]}
      cta={{
        h2: "鍵が手元にない・すぐ必要なときは",
        text: "スペアキーは届くまで約2〜4週間かかります。締め出しですぐに解錠が必要な場合や、紛失でシリンダー交換を検討する場合は、業者の料金と対応を比べてから依頼してください。",
        links: [
          { href: "/agents/", label: "鍵業者を比較する →" },
          { href: "/shimedashi/", label: "締め出されたときの対処" },
        ],
      }}
      faqTitle="ミネベアショウワのスペアキーのよくある質問"
      faqs={faqs}
      related={[
        { href: "/maker/", label: "錠メーカー別ガイド", desc: "5社の合鍵の窓口・価格を一覧で比較" },
        { href: "/key-number-aikagi/", label: "キーナンバーで合鍵は作れる？", desc: "刻印の場所と注文できない場合" },
        { href: "/maker/miwa/aikagi/", label: "美和ロック（MIWA）の合鍵", desc: "MIWA Directの5種類と価格" },
        { href: "/maker/goal/aikagi/", label: "GOAL（ゴール）のスペアキー注文", desc: "鍵番号でわかるキーチェンジ機能" },
        { href: "/junsei-key-saihakkou/", label: "メーカー純正キーの再発行", desc: "純正キー取り寄せの流れ" },
        { href: "/maker/showa/oteire/", label: "ミネベアショウワの錠前のお手入れ", desc: "症状別の対処と8つの注意" },
      ]}
    />
  );
}
