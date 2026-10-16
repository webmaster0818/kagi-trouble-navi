@AGENTS.md

# 作業ログ（鍵トラブルナビ）

## 2026-10-12 デザイン全面リニューアル（okina依頼）
- 共通: SiteHeader（白・sticky・スマホはdetailsメニュー）をlayoutに追加し、各ページ個別のsticky header 54件を撤去。ロゴは components/SiteLogo.tsx の LOGO_MARK_SRC に画像パスを入れるだけで差し替え可（選定中のため現状は文字ロゴ）。favicon未変更。
- トークン: globals.css。primary=#12305A、枠線#CBD3DF。ボタンは .kt-btn ＋既存の bg-accent/bg-secondary/amber系aタグをCSSで同一ネイビーに統一。
- 絵文字を全廃（ヘッダー🔑・⚠️・📅・✓→SVG）。★は口コミ評価値の表記なので残置。
- アイコン: Nano Banana Pro生成の単色ネイビー線画18種 public/images/icons/*.webp（透過512px）。
- 業者画像: 公式サイトFVを2026-10-12取得 public/images/agents/<slug>.webp（8社全て）。data/agentShots.ts＋components/AgentShot.tsx（出典リンク付き）。TOP・/agents/・業者詳細・エリア188ページ（AgentIntro）に表示。
- TOP「エリアから探す」: data/areaRegions.ts＋components/AreaFinder.tsx。東京都別枠（23区＋多摩6）、地方8ブロック、全て折りたたみ初期。23区ページは既に全て存在したため新規ページなし（sitemap変更なし）。
- スクロールアニメ: components/ScrollReveal.tsx（JS実行後に画面外要素だけ隠す・reduced-motion対応）。
- SEO: 全256ページの title/description/canonical/ld+json を旧デプロイと比較し差分0を確認。

## 2026-10-12 業者ページ拡張＋事実訂正（okina「続けて」）
- 新規: /agents/kagi-24h-kyukyusha/（鍵の24時間救急車＝株式会社24時間救急車・大阪市西区）、/agents/kagi-trouble-kyukyusha/（カギのトラブル救急車＝株式会社アスティ24・川越）、/agents/nitamei-kagiya/（名前が似た鍵屋10件の運営会社一覧）。sitemap 250→253URL。
- 訂正: /agents/kagi-rescue/ の「2023年末サービス終了」は誤り。閉鎖したのは別サイト kagi-rescue.com（2016年時点の屋号キーレスキューサービス→鍵猿へ誘導）。「鍵のレスキュー 鍵の110番救急車」(kagi110qq.co.jp) は営業中。公式で料金・出張料・キャンセル規定を再確認して現役ページに戻した。kagizaru本文の該当文も修正。
- 訂正: /agents/kagi-kyukyusha/ のtitle「カギの救急車（鍵の救急車）」は誤り。公式(kagi1109948.com 2026-02-26告知)は「鍵の救急車」「鍵の24時間救急車」「鍵の110番救急車」等は別業者と明言。title・注意ブロック・「カギの生活救急車（JBR）」表記を修正。料金行は据え置き（目安ページを再特定できず）。
- 口コミの創作なし: 新2社は第三者口コミのまとまった評価を確認できず、reviews配列は空＝「口コミの確かめ方」表示。
- 未対応/要確認: 鍵の生活救急車公式トップが「カギ開け8,000円・拠点1,900」表示に変化（サイト内は8,800円〜/2,270拠点）。エリア約190ページの鍵のレスキュー「8,000円〜＋出張料0〜8,800円」も公式現行(6,600円〜＋4,400〜8,800円)とずれ。いずれも料金の書き換えのため未実施。

## 2026-10-16 scripts/gen_agent_pages.py を停止
- BRANDS が 6/20 の値のまま（JBR を一般向けとして紹介・生活救急車「JBR運営」・sq.jbr.co.jp）。10/14〜15 に page.tsx を公式値へ直接訂正済みのため、再実行で巻き戻らないよう冒頭で exit する（--force-outdated でのみ実行）
- 生活救急車の「2,270拠点」は公式トップに「拠点数2,270店」の記載あり（「1,900点」は2017年1月時点の累計として併記）＝誤りではない
