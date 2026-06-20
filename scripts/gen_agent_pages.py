#!/usr/bin/env python3
# Generate agent review pages mirroring app/agents/kagi110ban/page.tsx (approved sample).
# A方式: review section is editor-summarized trends with source attribution; NO fabricated individual reviews.
# Adds a 出典・参照元 (source links) section per okina's A-enhancement request.
import json
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
SITE = "https://kagi-trouble-navi.com"
UPDATED = "2026年6月20日"
UPDATED_ISO = "2026-06-20"

def js(s):  # escape for JS string inside JSON.stringify we use python json; for inline text use as-is in JSX
    return s

BRANDS = [
{
 "slug":"jbr","fn":"JbrPage","name":"ジャパンベストレスキュー（JBR）","short":"JBR",
 "title":"ジャパンベストレスキュー（JBR）の鍵サービスの口コミ・評判は？料金・対応スピードを徹底調査【2026年最新】｜鍵トラブルナビ",
 "desc":"東証上場のジャパンベストレスキュー（JBR）が運営する鍵トラブル解決サービスの口コミ・評判を徹底調査。鍵開け8,800円〜の料金、全国対応・24時間受付、施工実績、利用者の良い評判・気になる評判まで編集部が中立的にまとめました。",
 "ogdesc":"東証上場JBRの鍵サービスの料金・対応スピード・実績・利用者の口コミを中立的に調査。利用前のメリットと注意点を解説します。",
 "hero_lead":"東証上場のジャパンベストレスキュー（JBR）が「生活救急車」ブランドで提供する鍵トラブル解決サービス。料金や対応スピード、利用者の評価を編集部が中立的に調査しました。",
 "badges":["鍵開け 8,800円〜","24時間受付","全国対応","東証上場企業が運営"],
 "about":[
   "ジャパンベストレスキュー（JBR）は、1997年創業の東京証券取引所 上場企業（証券コード2453・本社 名古屋市）が運営する生活トラブル解決サービスです。鍵のトラブルは「生活救急車」ブランドで提供されており、鍵開け・鍵交換・鍵作成などに全国の拠点ネットワークで対応しています。",
   "出張費・見積もり・キャンセルはいずれも無料で、作業前に提示する見積書の金額で対応する明朗会計を掲げています。上場企業が運営している安心感があり、鍵だけでなく水まわり・ガラスなど他の生活トラブルもまとめて相談しやすいのが特徴です。"],
 "services":["鍵開け","鍵交換","鍵作成","金庫の鍵","車の鍵","バイクの鍵"],
 "price":[
   ["鍵開け（解錠）","8,800円〜（税込）","住宅・刻みキーの目安"],
   ["鍵作製・鍵交換","14,300円〜／11,000円＋部品代〜","作業内容により変動"],
   ["会計方式","出張・見積もり・キャンセル無料","作業前の見積書の価格で対応"]],
 "review_summary":"Googleのクチコミや口コミ・比較サイト（みん評、EPARKくらしのレスキュー、トラブルブック等）を編集部が調査したところ、スピード対応と上場企業ならではの安心感を評価する声が目立ちました。一方で、表示料金より実際の請求が高く感じたという指摘や、支払い方法が地域・店舗で異なる点には慎重な声も見られました。",
 "good":[
   ["緊急時にすぐ駆けつけてくれた","急ぎの鍵トラブルでスピーディに対応してくれたという評価が多く見られます。全国の拠点網により近隣から駆けつ��る体制が評価されています。","対応スピードへの評価傾向"],
   ["見積もり通りで安心して頼めた","出張・見積もり・キャンセルが無料で、提示された見積もり通りの金額で済んだという安心感を挙げる声があります。","料金の明朗さへの評価傾向"],
   ["上場企業が運営していて信頼できた","東証上場の大手が運営しているため、初めてでも安心して依頼できたという評価傾向が見られます。","信頼性への評価傾向"]],
 "bad":[
   ["表示料金より高く感じることがある","ホームページ表示の料金より、部品代・部材費を含めた実際の請求が高く感じたという指摘が一部にあります。作業前の見積もりで総額を必ず確認しましょう。","料金に関する注意傾向"],
   ["支払い方法が店舗・地域で異なる","クレジットカードの可否など、支払い方法が対応店舗や地域によって異なる場合があるとの指摘があります。事前に確認しておくと安心です。","支払いに関する注意傾向"]],
 "merit":["東証上場企業が運営する安心感","全国の拠点ネットワークで対応","24時間受付で緊急時も相談しやすい","出張・見積もり・キャンセル無料の明朗会計","鍵から金庫・車の鍵まで幅広く対応"],
 "caution":["表示料金と実際の請求額に差を感じる声がある","支払い方法が店舗・地域で異なる場合がある","部品代・部材費を含む総額を作業前に確認したい","繁忙期・地域により到着まで時間がかかる場合がある"],
 "recommend":["上場企業の安心感を重視して鍵業者を選びたい人","全国どこでも対応してほしい人","鍵以外の生活トラブルもまとめて相談したい人","作業前に総額を確認してから依頼したい人"],
 "faqs":[
   ["JBR（生活救急車）の鍵開けはいくらからですか","鍵開け（解錠）は8,800円（税込）からが目安です。住宅の刻みキーなどの最小構成の目安で、鍵の種類や作業内容によって金額は変動します。出張・見積もり・キャンセルは無料で、作業前に提示される見積書の金額で対応します。"],
   ["見積もりや出張は無料ですか","出張費・見積もり・キャンセルはいずれも無料です。金額に納得したうえで依頼できるため、まずは無料見積もりで総額を確認するのがおすすめです。"],
   ["対応エリアと受付時間は","全国対応で、24時間受付・年中無休をうたっています。全国約2,200拠点のネットワークにより、地域を問わず鍵トラブルに対応しています。"],
   ["どんな鍵トラブルに対応していますか","鍵開け・鍵交換・鍵作成のほか、金庫、車・バイクの鍵まで幅広く対応しています。対応可否が不明な場合は問い合わせ時に確認しましょう。"]],
 "summary":[
   "ジャパンベストレスキュー（JBR）は、東証上場の大手が「生活救急車」ブランドで運営する鍵トラブル解決サービスです。全国の拠点ネットワークと24時間受付、出張・見積もり・キャンセル無料の明朗会計が評価されています。",
   "一方で、表示料金と実際の請求額の差や、支払い方法が店舗・地域で異なる点には注意が必要です。作業前に部品代を含む総額を確認し、複数社の見積もりを比較すると安心です。まずは無料見積もりから検討してみてください。"],
 "sources":[
   ["JBR公式（会社概要）","https://www.jbr.co.jp/company/"],
   ["カギの生活救急車（公式サービスサイト）","https://www.jbr.ne.jp/key/"],
   ["EPARKくらしのレスキュー（料金・実績）","https://rescue.epark.jp/detail/950"],
   ["みん評（利用者の口コミ）","https://minhyo.jp/jbr-kagi"]],
},
{
 "slug":"seikatsu-kyukyusha","fn":"SeikatsuKyukyushaPage","name":"鍵の生活救急車","short":"鍵の生活救急車",
 "title":"鍵の生活救急車の口コミ・評判は？料金・対応スピード・実績を徹底調査【2026年最新】｜鍵トラブルナビ",
 "desc":"鍵の生活救急車（JBR運営）の口コミ・評判を徹底調査。鍵開け8,800円〜の料金、最短15分の駆けつけ、全国2,270拠点・施工240万件以上の実績、利用者の良い評判・気になる評判まで編集部が中立的にまとめました。",
 "ogdesc":"鍵の生活救急車の料金・対応スピード・実績・利用者の口コミを中立的に調査。利用前のメリットと注意点を解説します。",
 "hero_lead":"東証上場のJBRが運営する「鍵の生活救急車」。最短15分の駆けつけと全国2,270拠点の実績をうたう鍵トラブルサービスの料金・対応・評価を編集部が中立的に調査しました。",
 "badges":["鍵開け 8,800円〜","最短15分駆けつけ","全国2,270拠点","施工240万件以上"],
 "about":[
   "鍵の生活救急車は、東証上場のジャパンベストレスキューシステム株式会社（証券コード2453）が「生活救急車」ブランドで運営する鍵トラブル解決サービスです。鍵開け・鍵交換・鍵作成・鍵修理に加え、金庫や車・バイクの鍵まで全国の拠点で対応しています。",
   "出張費・見積もり・キャンセルはすべて無料で、全国統一の料金表をもとに作業前に料金を説明し、同意を得てから作業する明朗会計を掲げています。施工対応数240万件以上、全国2,270拠点という規模が、緊急時の駆けつけ体制を支えています。"],
 "services":["鍵開け","鍵交換","鍵作成","鍵修理","金庫の鍵","車・バイクの鍵"],
 "price":[
   ["鍵開け","8,800円〜（税込）","住宅・刻みキーの目安"],
   ["鍵交換／ディンプルキー解錠","11,000円＋部品代〜／33,000円〜","鍵の種類・作業内容で変動"],
   ["会計方式","出張・見積もり・キャンセル無料","作業前に説明・同意のうえ作業"]],
 "review_summary":"Googleのクチコミや口コミ・比較サイト（みん評、CMA、EPARK、トラブルブック等）を編集部が調査したところ、駆けつけの速さと事前見積もりの明確さを評価する声が目立ちました。一方で、料金が思ったより高く感じたという声や、支払い方法に制限がある場合がある点には慎重な声も見られました。",
 "good":[
   ["駆けつけが速く助かった","急ぎのトラブルで「すぐ来てくれて助かった」という、対応スピードへの好評が複数見られます。","対応スピードへの評価傾向"],
   ["見積もり通りで追加料金がなかった","事前見積もりどおりで追加料金がなく、明朗会計だったという評価傾向があります。","料金の明朗さへの評価傾向"],
   ["スタッフの対応・説明が丁寧だった","作業の説明が分かりやすく、対応が丁寧で作業も早かったという声が見られます。","対応品質への評価傾向"]],
 "bad":[
   ["料金が割高に感じることがある","「思っていたより高額だった」「部材費がやや高く感じた」など、料金が割高に感じるという声が一定数あります。作業前に総額を確認しましょう。","料金に関する注意傾向"],
   ["支払い方法に制限がある場合がある","クレジットカード払いがパートナー店・エリアによっては利用できない場合があるなど、支払い方法に制限があるという指摘があります。","支払いに関する注意傾向"]],
 "merit":["最短15分の駆けつけをうたうスピード対応","全国2,270拠点・施工240万件以上の実績","東証上場企業の運営による安心感","出張・見積もり・キャンセル無料の明朗会計","鍵から金庫・車の鍵まで幅広く対応"],
 "caution":["料金が割高に感じるという声が一定数ある","支払い方法が店舗・エリアで制限される場合がある","作業前に部材費を含む総額の確認が必要","受付時間の表記に媒体差があり要確認"],
 "recommend":["緊急でとにかく早く駆けつけてほしい人","大手の実績と安心感を重視する人","作業前に料金を説明してから依頼したい人","鍵以外の生活トラブルも相談したい人"],
 "faqs":[
   ["鍵の生活救急車の料金はいくらからですか","鍵開けは8,800円（税込）からが目安です。鍵の種類や作業内容で変動し、鍵交換は11,000円＋部品代〜などとなります。出張・見積もり・キャンセルは無料で、作業前に料金を説明し同意のうえで作業します。"],
   ["どのくらいの時間で来てくれますか","最短15分での駆けつけをうたっています。ただし拠点からの距離や繁忙状況により到着時間は変動するため、依頼時に到着目安を確認するのがおすすめです。"],
   ["対応エリアは全国ですか","全国対応で、拠点数は2,270店とされています。地域を問わず鍵トラブルに対応できる体制です。"],
   ["支払いにクレジットカードは使えますか","現金のほかクレジットカード（VISA/Master/JCB等）に対応するとされていますが、対応店舗・エリアによって利用可否が異なる場合があるため、事前に確認しましょう。"]],
 "summary":[
   "鍵の生活救急車は、東証上場のJBRが運営する鍵トラブル解決サービスです。最短15分の駆けつけ、全国2,270拠点・施工240万件以上の実績、出張・見積もり・キャンセル無料の明朗会計が評価されています。",
   "一方で、料金が割高に感じるという声や、支払い方法の制限には注意が必要です。作業前に部材費を含む総額を確認し、複数社の見積もりを比較すると安心です。まずは無料見積もりから検討してみてください。"],
 "sources":[
   ["鍵の生活救急車 公式（料金）","https://kagi-seikatsukyukyusya.com/price/"],
   ["生活救急車 公式（JBR運営）","https://sq.jbr.co.jp/"],
   ["EPARKくらしのレスキュー（料金・実績）","https://rescue.epark.jp/detail/950"],
   ["みん評（利用者の口コミ）","https://minhyo.jp/jbr-kagi"]],
},
{
 "slug":"kagizaru","fn":"KagizaruPage","name":"鍵猿","short":"鍵猿",
 "title":"鍵猿（かぎざる）の口コミ・評判は？料金・対応スピード・保証を徹底調査【2026年最新】｜鍵トラブルナビ",
 "desc":"鍵猿（SLS株式会社）の口コミ・評判を徹底調査。鍵開け8,800円〜の料金、最短15分到着、全国対応・1年保証、自社スタッフ施工、利用者の良い評判・気になる評判まで編集部が中立的にまとめました。",
 "ogdesc":"鍵猿の料金・対応スピード・保証・利用者の口コミを中立的に調査。利用前のメリットと注意点を解説します。",
 "hero_lead":"SLS株式会社が運営する「鍵猿」。最短15分到着・1年保証・自社スタッフ施工をうたう鍵トラブルサービスの料金や対応、利用者の評価を編集部が中立的に調査しました。",
 "badges":["鍵開け 8,800円〜","最短15分到着","全国対応","1年保証"],
 "about":[
   "鍵猿（かぎざる）は、SLS株式会社（大阪本社）が運営する鍵トラブル解決サービスです。プライバシーマークを取得し、自社コールセンターと自社スタッフによる施工体制で、鍵開け・鍵交換・鍵修理・鍵作成に全国対応しています。",
   "基本料・見積料・出張料はすべて0円で、作業前に明確な合計金額を提示し追加請求しない明朗会計を掲げています。1年間の無料工事保証・無償商品保証があり、年間10万件以上の問い合わせ実績をうたっています。"],
 "services":["鍵開け","鍵交換","鍵修理","鍵作成","金庫の鍵","車・バイクの鍵"],
 "price":[
   ["鍵開け","8,800円〜（税込）","玄関の鍵開けの目安"],
   ["鍵交換","11,000円〜（税込）＋部品代","鍵の種類・作業内容で変動"],
   ["会計方式","基本料・見積料・出張料 0円","作業前に合計金額を提示・追加請求なし"]],
 "review_summary":"Googleのクチコミや口コミ・比較サイト（みん評、セーフリー、専門家の相談室等）を編集部が調査したところ、最短15分の対応スピードと作業の丁寧さを評価する声が目立ちました。一方で、費用が想定より高いと感じたという声や、スタッフ対応にばらつきがあるという指摘も見られました。",
 "good":[
   ["電話一本ですぐ駆けつけてくれた","最短15分・電話一本ですぐ駆けつけたなど、対応スピードへの高評価が多く見られます。","対応スピードへの評価傾向"],
   ["作業が丁寧で安心できた","作業が丁寧で鍵穴に傷が残らない、身なりがきちんとしていて信頼できたという声が見られます。","対応品質への評価傾向"],
   ["全国対応で旅行先でも頼れた","全国対応のため旅行先などでも頼れたという、対応エリアの広さを評価する声があります。","対応エリアへの評価傾向"]],
 "bad":[
   ["費用が想定より高いと感じる声","費用は決して安くない、想定より高いと感じたという料金面の指摘があります。作業前に提示される合計金額を必ず確認しましょう。","料金に関する注意傾向"],
   ["スタッフ対応にばらつきがある","スタッフの対応や口調にばらつきがある、鍵交換後にしばらく回しにくかった等の個別の不満も見られます。","対応品質に関する注意傾向"]],
 "merit":["最短15分到着をうたうスピード対応","基本料・見積料・出張料すべて0円の明朗会計","1年間の無料工事保証・無償商品保証","自社コールセンター・自社スタッフによる施工","クレジットカード対応（VISA/Master/AMEX/Diners）"],
 "caution":["費用が想定より高いと感じる声がある","スタッフ対応にばらつきがあるという指摘がある","電話受付は8:00〜23:00（施工は深夜early朝も対応）","作業前に提示される合計金額の確認が必要"],
 "recommend":["最短スピードで駆けつけてほしい人","作業保証のある業者に依頼したい人","自社スタッフ施工の安心感を重視する人","クレジットカードで支払いたい人"],
 "faqs":[
   ["鍵猿の料金はいくらからですか","玄関の鍵開けは8,800円（税込）から、鍵交換は11,000円（税込）＋部品代からが目安です。基本料・見積料・出張料はすべて0円で、作業前に明確な合計金額を提示し追加請求しないとうたっています。"],
   ["どのくらいの時間で来てくれますか","最短60秒で出動、最短15分で現場到着とうたっています。拠点からの距離や状況により到着時間は変動します。"],
   ["保証はありますか","1年間の無料工事保証・無償商品保証があるとされています。作業後のトラブルに備えられるのは安心材料です。"],
   ["受付時間と対応エリアは","電話受付は8:00〜23:00で、施工は深夜・早朝も対応、365日年中無休とされています。対応エリアは北海道から沖縄まで全国です。"]],
 "summary":[
   "鍵猿は、SLS株式会社が運営する鍵トラブル解決サービスです。最短15分到着のスピード、基本料・見積料・出張料0円の明朗会計、1年間の保証、自社スタッフ施工が評価されています。",
   "一方で、費用が想定より高いと感じる声や、スタッフ対応のばらつきには注意が必要です。作業前に提示される合計金額を確認し、複数社の見積もりを比較すると安心です。まずは無料見積もりから検討してみてください。"],
 "sources":[
   ["鍵猿 公式（SLS株式会社）","https://sls.co.jp/kagizaru/"],
   ["鍵猿 口コミ・評判（みん評）","https://minhyo.jp/kagizaru"],
   ["鍵猿 口コミ・料金（セーフリー）","https://safely.co.jp/ky/vendor/slskagizaru/"],
   ["鍵猿 利用者の口コミ（専門家の相談室）","https://www.sodanshitsu.co.jp/kagizaru/"]],
},
]

TOC = [
 ["about","{name}とはどんなサービスか"],
 ["service","対応している鍵トラブルの種類"],
 ["price","{name}の料金体系と相場"],
 ["reviews","利用者のリアルな口コミ・評判"],
 ["merit","メリットと注意点"],
 ["recommend","{name}がおすすめな人"],
 ["compare","他社と比較するときのチェックポイント"],
 ["faq","よくある質問"],
 ["sources","この記事の出典・参照元"],
 ["summary","まとめ"],
]

def arr(items): return "[" + ", ".join(json.dumps(x, ensure_ascii=False) for x in items) + "]"

def render(b):
    name=b["name"]; PATH=f"/agents/{b['slug']}/"
    toc=[[i,l.format(name=name)] for i,l in TOC]
    toc_js="[\n"+",\n".join("    "+json.dumps([i,l],ensure_ascii=False) for i,l in toc)+"\n  ]"
    good_js="[\n"+",\n".join("    "+json.dumps({"title":t,"body":bd,"meta":m},ensure_ascii=False) for t,bd,m in b["good"])+"\n  ]"
    bad_js="[\n"+",\n".join("    "+json.dumps({"title":t,"body":bd,"meta":m},ensure_ascii=False) for t,bd,m in b["bad"])+"\n  ]"
    faq_js="[\n"+",\n".join("    "+json.dumps({"q":q,"a":a},ensure_ascii=False) for q,a in b["faqs"])+"\n  ]"
    price_rows="".join(
      f'\n                  <tr className="border-b border-slate-200"><td className="font-medium">{c0}</td><td className="font-bold text-amber-700">{c1}</td><td className="text-sm text-slate-600">{c2}</td></tr>'
      for c0,c1,c2 in b["price"])
    services_js=arr(b["services"])
    badges="".join(f'\n              <span className="badge badge-lg bg-white/15 border-0 text-white">{x}</span>' for x in b["badges"])
    about_ps="".join(f'\n            <p className="leading-loose mb-4 text-slate-700">{p}</p>' for p in b["about"])
    merit_lis="".join(f'\n                  <li>{x}</li>' for x in b["merit"])
    caution_lis="".join(f'\n                  <li>{x}</li>' for x in b["caution"])
    rec_lis="".join(f'\n              <li className="flex gap-3"><span className="text-amber-600 font-bold">●</span>{x}</li>' for x in b["recommend"])
    sum_ps="".join(f'\n            <p className="leading-loose mb-4 text-slate-700">{p}</p>' for p in b["summary"])
    src_lis="".join(f'\n              <li><a href="{u}" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline break-all">{l}</a></li>' for l,u in b["sources"])

    return f'''import Link from "next/link";
import Image from "next/image";
import type {{ Metadata }} from "next";

const SITE = "{SITE}";
const PATH = "{PATH}";
const UPDATED = "{UPDATED}";

export const metadata: Metadata = {{
  title: {{ absolute: {json.dumps(b["title"],ensure_ascii=False)} }},
  description: {json.dumps(b["desc"],ensure_ascii=False)},
  alternates: {{ canonical: `${{SITE}}${{PATH}}` }},
  openGraph: {{
    title: {json.dumps(b["title"].split("｜")[0],ensure_ascii=False)},
    description: {json.dumps(b["ogdesc"],ensure_ascii=False)},
    url: `${{SITE}}${{PATH}}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  }},
}};

const toc = {toc_js};

const goodReviews = {good_js};

const badReviews = {bad_js};

const faqs = {faq_js};

const sources = {arr([list(s) for s in b["sources"]])};

export default function {b["fn"]}() {{
  const articleSchema = {{
    "@context": "https://schema.org",
    "@type": "Article",
    headline: {json.dumps(b["title"].split("｜")[0],ensure_ascii=False)},
    description: {json.dumps(b["ogdesc"],ensure_ascii=False)},
    image: `${{SITE}}/images/kv-top.jpg`,
    datePublished: "{UPDATED_ISO}T00:00:00+09:00",
    dateModified: "{UPDATED_ISO}T00:00:00+09:00",
    author: {{ "@type": "Organization", name: "鍵トラブルナビ編集部", url: SITE }},
    publisher: {{ "@type": "Organization", name: "鍵トラブルナビ", url: SITE }},
    mainEntityOfPage: {{ "@type": "WebPage", "@id": `${{SITE}}${{PATH}}` }},
  }};
  const faqSchema = {{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({{ "@type": "Question", name: f.q, acceptedAnswer: {{ "@type": "Answer", text: f.a }} }})),
  }};
  const breadcrumbSchema = {{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {{ "@type": "ListItem", position: 1, name: "鍵トラブルナビ", item: `${{SITE}}/` }},
      {{ "@type": "ListItem", position: 2, name: "鍵屋レビュー", item: `${{SITE}}/agents/` }},
      {{ "@type": "ListItem", position: 3, name: {json.dumps(name+"の口コミ・評判",ensure_ascii=False)}, item: `${{SITE}}${{PATH}}` }},
    ],
  }};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(articleSchema) }}}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(faqSchema) }}}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(breadcrumbSchema) }}}} />

      <article className="bg-white text-slate-800">
        <nav aria-label="パンくず" className="max-w-4xl mx-auto px-4 pt-4 text-xs text-slate-500">
          <ol className="flex flex-wrap gap-1">
            <li><Link href="/" className="hover:underline">鍵トラブルナビ</Link></li>
            <li>/</li>
            <li><Link href="/agents/" className="hover:underline">鍵屋レビュー</Link></li>
            <li>/</li>
            <li className="text-slate-700">{name}の口コミ・評判</li>
          </ol>
        </nav>

        <header className="relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 text-white mt-4">
          <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
            <p className="text-sm tracking-widest text-amber-300 mb-3">鍵トラブル業者レビュー</p>
            <h1 className="font-bold text-2xl md:text-4xl leading-relaxed mb-4">{name}の口コミ・評判は？<br className="hidden md:block" />料金・対応スピードを徹底調査</h1>
            <p className="text-slate-200 leading-relaxed max-w-2xl">{b["hero_lead"]}</p>
            <div className="mt-6 flex flex-wrap gap-2">{badges}
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
              <Image src="/images/kv-top.jpg" alt="{name}の鍵トラブル解決サービス" width={{1024}} height={{1024}} className="w-full h-56 md:h-72 object-cover" priority />
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
          <p className="text-sm text-slate-500 mb-8">最終更新日：{{UPDATED}}　／　鍵トラブルナビ編集部</p>

          <nav aria-label="目次" className="mb-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="font-bold text-slate-800 mb-4">この記事の目次</p>
            <ol className="space-y-2 text-sm md:text-base">
              {{toc.map(([id, label], i) => (
                <li key={{id}}>
                  <a href={{`#${{id}}`}} className="text-slate-700 hover:text-amber-700 hover:underline">
                    <span className="text-amber-600 font-bold mr-2">{{String(i + 1).padStart(2, "0")}}</span>{{label}}
                  </a>
                </li>
              ))}}
            </ol>
          </nav>

          <section id="about" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">{name}とはどんなサービスか</h2>{about_ps}
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <Image src="/images/{b['slug']}-features.png" alt="{name}の特徴" width={{1200}} height={{500}} className="w-full h-auto" />
            </div>
          </section>

          <section id="service" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">対応している鍵トラブルの種類</h2>
            <p className="leading-loose mb-5 text-slate-700">玄関まわりの鍵だけでなく、金庫や乗り物の鍵まで幅広く対応しています。どこに相談すべきか分からない鍵トラブルも、まとめて相談しやすいのが利点です。</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {{{services_js}.map((s) => (
                <div key={{s}} className="rounded-xl border border-slate-200 p-4 text-center font-medium text-slate-700">{{s}}</div>
              ))}}
            </div>
          </section>

          <section id="price" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">{name}の料金体系と相場</h2>
            <p className="leading-loose mb-5 text-slate-700">料金は出張費・作業費・部材費を含めた総額を事前に提示する形です。作業内容や鍵の種類によって変わるため、最終的な金額は無料見積もりで確認しましょう。</p>
            <div className="overflow-x-auto">
              <table className="table w-full border border-slate-200">
                <thead><tr className="bg-slate-100 text-slate-700"><th>項目</th><th>料金の目安</th><th>備考</th></tr></thead>
                <tbody>{price_rows}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-500 mt-3">※ 料金は変動する場合があります。正確な金額は無料の見積もりでご確認ください。</p>
          </section>

          <section id="reviews" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">利用者のリアルな口コミ・評判</h2>
            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6 mb-6">
              <p className="text-slate-700 text-sm leading-relaxed">{b["review_summary"]}</p>
            </div>
            <h3 className="font-bold text-lg mb-3">良い口コミの傾向</h3>
            <div className="space-y-4 mb-8">
              {{goodReviews.map((r, i) => (
                <div key={{i}} className="rounded-xl border border-slate-200 p-5">
                  <p className="font-bold mb-1">{{r.title}}</p>
                  <p className="text-sm leading-relaxed mb-2 text-slate-700">{{r.body}}</p>
                  <p className="text-xs text-slate-400">{{r.meta}}</p>
                </div>
              ))}}
            </div>
            <h3 className="font-bold text-lg mb-3">気になる口コミ・注意点</h3>
            <div className="space-y-4">
              {{badReviews.map((r, i) => (
                <div key={{i}} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold mb-1">{{r.title}}</p>
                  <p className="text-sm leading-relaxed mb-2 text-slate-700">{{r.body}}</p>
                  <p className="text-xs text-slate-400">{{r.meta}}</p>
                </div>
              ))}}
            </div>
            <p className="text-xs text-slate-500 mt-4">※ 口コミは各種口コミサイト・Googleのクチコミ等で見られる利用者の声をもとに、編集部が傾向を要約したものです（出典は記事末尾の参照元を参照）。感じ方には個人差があります。</p>
          </section>

          <section id="merit" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">メリットと注意点</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-6">
                <h3 className="font-bold text-emerald-800 mb-3">メリット</h3>
                <ul className="space-y-2 text-sm text-slate-700">{merit_lis}
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-rose-200 bg-rose-50 p-6">
                <h3 className="font-bold text-rose-800 mb-3">注意点</h3>
                <ul className="space-y-2 text-sm text-slate-700">{caution_lis}
                </ul>
              </div>
            </div>
          </section>

          <section id="recommend" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">{name}がおすすめな人</h2>
            <ul className="space-y-3 text-slate-700">{rec_lis}
            </ul>
          </section>

          <section id="compare" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">他社と比較するときのチェックポイント</h2>
            <p className="leading-loose mb-4 text-slate-700">鍵業者は料金の安さだけでなく、対応スピードや見積もりの明確さを含めて比較することが大切です。{b["short"]}を他社と比べる際は、次の点を確認すると判断しやすくなります。</p>
            <ol className="space-y-3 text-slate-700">
              <li className="flex gap-3"><span className="font-bold text-amber-600">1.</span>見積もりに出張費・部材費まで含まれているか（総額で比較）</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">2.</span>到着までの目安時間と対応エリア</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">3.</span>対応してほしい鍵の種類に対応しているか</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">4.</span>作業後の保証やアフター対応の有無</li>
            </ol>
            <p className="leading-loose mt-4 text-slate-700">料金や対応は地域・状況で変わるため、{b["short"]}を含めて<Link href="/" className="text-amber-700 underline">複数の鍵業者を比較</Link>し、見積もりを取ったうえで選ぶのがおすすめです。</p>
          </section>

          <section id="faq" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">よくある質問</h2>
            <div className="space-y-3">
              {{faqs.map((f, i) => (
                <div key={{i}} className="collapse collapse-arrow border border-slate-200 rounded-xl bg-white">
                  <input type="checkbox" defaultChecked={{i === 0}} />
                  <div className="collapse-title font-bold">{{f.q}}</div>
                  <div className="collapse-content"><p className="text-sm leading-relaxed text-slate-700">{{f.a}}</p></div>
                </div>
              ))}}
            </div>
          </section>

          <section id="sources" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">この記事の出典・参照元</h2>
            <p className="leading-loose mb-4 text-slate-700">本記事の事実情報・口コミの傾向は、以下の公式サイトおよび口コミ・比較サイトを参照し、編集部が確認・要約しています（確認日：{{UPDATED}}）。</p>
            <ul className="space-y-2 text-sm">{src_lis}
            </ul>
          </section>

          <section id="summary" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-amber-500 pl-4 mb-5">まとめ</h2>{sum_ps}
            <div className="rounded-2xl bg-slate-800 text-white p-6 text-center mt-6">
              <p className="font-bold text-lg mb-2">鍵のトラブルでお困りの方へ</p>
              <p className="text-slate-300 text-sm mb-4">地域・状況に合った鍵業者を比較して、無料見積もりを取りましょう。</p>
              <Link href="/" className="btn bg-amber-500 hover:bg-amber-600 border-0 text-white">鍵業者を比較して探す</Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}}
'''

for b in BRANDS:
    d=ROOT/"app"/"agents"/b["slug"]
    d.mkdir(parents=True, exist_ok=True)
    (d/"page.tsx").write_text(render(b), encoding="utf-8")
    print("wrote", b["slug"])
# mark hasStaticPage so [slug] doesn't double-generate
cj=ROOT/"data"/"companies.json"
c=json.load(open(cj))
for x in c:
    if x["slug"] in [b["slug"] for b in BRANDS] or x["slug"]=="kagi110ban":
        x["hasStaticPage"]=True
json.dump(c,open(cj,"w"),ensure_ascii=False,indent=2)
print("marked hasStaticPage for static brands")
print("done:",len(BRANDS),"pages")
