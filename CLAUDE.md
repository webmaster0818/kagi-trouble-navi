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
- （10/21 解消済み・下記）旧メモ: 鍵の生活救急車公式トップが「カギ開け8,000円・拠点1,900」表示。鍵のレスキューのエリア料金は10/15に公式値へ訂正済み。

## 2026-10-16 scripts/gen_agent_pages.py を停止
- BRANDS が 6/20 の値のまま（JBR を一般向けとして紹介・生活救急車「JBR運営」・sq.jbr.co.jp）。10/14〜15 に page.tsx を公式値へ直接訂正済みのため、再実行で巻き戻らないよう冒頭で exit する（--force-outdated でのみ実行）
- 生活救急車の「2,270拠点」は公式トップに「拠点数2,270店」の記載あり（「1,900点」は2017年1月時点の累計として併記）＝誤りではない

## 2026-10-21 生活救急車の鍵開け料金を 8,800円〜（税込）に統一
- 根拠: 公式料金ページ https://kagi-seikatsukyukyusya.com/price/ （2026-10-21確認）「鍵開け（刻みキー）¥8,800～」「鍵開け（ディンプルキー）¥33,000～」「※価格表記は全て税込です」「※特殊作業となる場合は別途料金」。条件は「刻みキー」（「3ピン以下」は料金表には無く、トップの施工事例のロッカー解錠にのみ出る）。
- 公式トップの「カギ開け8,000円」（税込/税別の記載なし）はサイト内で引用しない。8,000円〜表記は使わない。
- 対象: agentsData（metaDesc・バッジ・料金表・FAQ）、/agents/seikatsu-kyukyusha/（FAQ・料金節）、companies.json（cons・priceRange）、TOP統計バー＋注記、エリア188ページ（紹介文・表の注記・比較表に「刻みキー」条件）。
- 残す: TOP サービスカード「鍵開け／バイクの鍵 8,000円〜」と /kagi-funshitsu/ の「8,000円〜」は業者を特定しない相場目安（生活救急車の値ではない）。

## 2026-10-22 業者データの古い記述を整理（site d9c9824 / deploy b463649fe＋空コミット2本）
- agentsData の jbr・seikatsu-kyukyusha・kagizaru は静的ページ（app/agents/<slug>/page.tsx）があるため本文は表示されていなかった（一覧は name・slug のみ使用）。6/20 時点の「JBRグループ運営」「年間10万件以上」「大手レスキューグループのJBR」「43万件」「深夜早朝の追加料金なし」「年間5万件以上」などを削除して空にし、hasStaticPage: true を付けた。本文は page.tsx が正
- scripts/gen_agent_pages.py の BRANDS（東証上場JBR運営・sq.jbr.co.jp 等）を空にした。3社のページはこのスクリプトで作り直さない
- 鍵猿：ページ表示の「年間10万件以上の問い合わせ実績を公表」と companies.json（TOP 4位以下で非表示）の「年間対応5万件以上」「関西エリア最安級」を削除。10/22 は公式 kagizaru.com・sls.co.jp が 09:24〜10:03（JST）の間 502 で確認できなかったため。公式で確認できたら出典付きで戻してよい
- 生活救急車の公式確認（10/22）：運営 株式会社生活救急車（名古屋市中区栄1-14-15 RSビル502）、2022年11月にJBRから事業承継・JBRと資本関係なし（seikatu-rescue.jp/company/）、最短15分・施工件数240万件以上（公式トップ）。「年間10万件」「深夜早朝の追加料金なし」は公式に記載なし
- JBR 公式（jbr.co.jp）は 10/22「PHPの脆弱性対応に伴う緊急メンテナンス」で 503。jbr ページの記述は 10/14 確認値のまま（変更なし）
- Cloudflare Pages が最初の push（b463649fe）と1本目の空コミットでビルドを起動しなかった（GitHub の check-run 0件）。2本目の空コミットで起動し反映。未反映時は GitHub API の check-runs で起動有無を確かめる
