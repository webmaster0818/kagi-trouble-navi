import Link from "next/link";

// 全ページ共通フッター。全21ページへの内部リンク網を保証する（孤立ページゼロ化）。
export default function SiteFooter() {
  return (
    <footer className="bg-[#0D1B2A] text-white/70 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3 text-white">
              <span className="text-2xl">🔑</span>
              <span className="text-lg font-bold">鍵トラブルナビ</span>
            </div>
            <p className="text-sm max-w-sm">
              鍵のトラブルでお困りの方に、一次確認した情報だけで鍵業者を比較・紹介するサービスです。
            </p>
            <ul className="space-y-2 text-sm mt-4">
              <li><Link href="/about/" className="hover:text-white transition-colors">運営者情報</Link></li>
              <li><Link href="/terms/" className="hover:text-white transition-colors">利用規約</Link></li>
              <li><Link href="/privacy/" className="hover:text-white transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="/content-policy/" className="hover:text-white transition-colors">記事の制作ポリシー</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3">トラブル別ガイド</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shimedashi/" className="hover:text-white transition-colors">鍵の閉じ込め・締め出し</Link></li>
              <li><Link href="/kagi-funshitsu/" className="hover:text-white transition-colors">鍵をなくした</Link></li>
              <li><Link href="/kagi-ore/" className="hover:text-white transition-colors">鍵が折れた</Link></li>
              <li><Link href="/kagi-mawaranai/" className="hover:text-white transition-colors">鍵が回らない</Link></li>
              <li><Link href="/car-inlock/" className="hover:text-white transition-colors">車のインロック</Link></li>
              <li><Link href="/kinko-kaijo/" className="hover:text-white transition-colors">金庫が開かない</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3">料金・選び方</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ryokin/" className="hover:text-white transition-colors">鍵開け・鍵交換の料金相場</Link></li>
              <li><Link href="/ryokin-index/" className="hover:text-white transition-colors">主要業者の料金一次確認まとめ</Link></li>
              <li><Link href="/kagi-koukan-timing/" className="hover:text-white transition-colors">鍵交換のタイミング</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3">業者を比較</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/agents/" className="hover:text-white transition-colors">鍵業者一覧・比較</Link></li>
              <li><Link href="/agents/kagi110ban/" className="hover:text-white transition-colors">カギ110番</Link></li>
              <li><Link href="/agents/seikatsu-kyukyusha/" className="hover:text-white transition-colors">鍵の生活救急車</Link></li>
              <li><Link href="/agents/jbr/" className="hover:text-white transition-colors">JBR</Link></li>
              <li><Link href="/agents/kagizaru/" className="hover:text-white transition-colors">鍵猿</Link></li>
              <li><Link href="/agents/kagi-rescue/" className="hover:text-white transition-colors">鍵のレスキュー</Link></li>
              <li><Link href="/agents/kagi-kyukyusha/" className="hover:text-white transition-colors">カギの救急車</Link></li>
              <li><Link href="/agents/kagi110ban-vs-seikatsu9/" className="hover:text-white transition-colors">カギ110番 vs 生活救急車</Link></li>
              <li>
                エリア別: <Link href="/area/tokyo/" className="hover:text-white transition-colors">東京</Link>・<Link href="/area/osaka/" className="hover:text-white transition-colors">大阪</Link>・<Link href="/area/nagoya/" className="hover:text-white transition-colors">名古屋</Link>・<Link href="/area/yokohama/" className="hover:text-white transition-colors">横浜</Link>・<Link href="/area/fukuoka/" className="hover:text-white transition-colors">福岡</Link>・<Link href="/area/sapporo/" className="hover:text-white transition-colors">札幌</Link>
              </li>
              <li>
                <Link href="/area/kyoto/" className="hover:text-white transition-colors">京都</Link>・<Link href="/area/kobe/" className="hover:text-white transition-colors">神戸</Link>・<Link href="/area/saitama/" className="hover:text-white transition-colors">さいたま</Link>・<Link href="/area/chiba/" className="hover:text-white transition-colors">千葉</Link>・<Link href="/area/sendai/" className="hover:text-white transition-colors">仙台</Link>・<Link href="/area/hiroshima/" className="hover:text-white transition-colors">広島</Link>
              </li>
              <li>
                <Link href="/area/sakai/" className="hover:text-white transition-colors">堺</Link>・<Link href="/area/kawasaki/" className="hover:text-white transition-colors">川崎</Link>・<Link href="/area/kitakyushu/" className="hover:text-white transition-colors">北九州</Link>・<Link href="/area/hamamatsu/" className="hover:text-white transition-colors">浜松</Link>・<Link href="/area/shizuoka/" className="hover:text-white transition-colors">静岡</Link>
              </li>
              <li>
                <Link href="/area/okayama/" className="hover:text-white transition-colors">岡山</Link>・<Link href="/area/kumamoto/" className="hover:text-white transition-colors">熊本</Link>・<Link href="/area/niigata/" className="hover:text-white transition-colors">新潟</Link>・<Link href="/area/kagoshima/" className="hover:text-white transition-colors">鹿児島</Link>・<Link href="/area/kanazawa/" className="hover:text-white transition-colors">金沢</Link>
              </li>
              <li>
                <Link href="/area/utsunomiya/" className="hover:text-white transition-colors">宇都宮</Link>・<Link href="/area/matsuyama/" className="hover:text-white transition-colors">松山</Link>・<Link href="/area/naha/" className="hover:text-white transition-colors">那覇</Link>・<Link href="/area/takamatsu/" className="hover:text-white transition-colors">高松</Link>・<Link href="/area/nagano/" className="hover:text-white transition-colors">長野</Link>・<Link href="/area/gifu/" className="hover:text-white transition-colors">岐阜</Link>
              </li>
              <li>
                <Link href="/area/mito/" className="hover:text-white transition-colors">水戸</Link>・<Link href="/area/maebashi/" className="hover:text-white transition-colors">前橋</Link>・<Link href="/area/toyama/" className="hover:text-white transition-colors">富山</Link>・<Link href="/area/fukui/" className="hover:text-white transition-colors">福井</Link>・<Link href="/area/kofu/" className="hover:text-white transition-colors">甲府</Link>
              </li>
              <li>
                <Link href="/area/nagasaki/" className="hover:text-white transition-colors">長崎</Link>・<Link href="/area/oita/" className="hover:text-white transition-colors">大分</Link>・<Link href="/area/miyazaki/" className="hover:text-white transition-colors">宮崎</Link>・<Link href="/area/morioka/" className="hover:text-white transition-colors">盛岡</Link>・<Link href="/area/akita/" className="hover:text-white transition-colors">秋田</Link>・<Link href="/area/yamagata/" className="hover:text-white transition-colors">山形</Link>
              </li>
              <li>
                <Link href="/area/fukushima/" className="hover:text-white transition-colors">福島</Link>・<Link href="/area/tsu/" className="hover:text-white transition-colors">津</Link>・<Link href="/area/otsu/" className="hover:text-white transition-colors">大津</Link>・<Link href="/area/wakayama/" className="hover:text-white transition-colors">和歌山</Link>・<Link href="/area/tokushima/" className="hover:text-white transition-colors">徳島</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-xs text-white/40">
          <p>当サイトはアフィリエイトプログラムに参加しており、紹介先サービスへの申し込みにより報酬を受け取る場合があります。掲載料金は各社公式サイトの確認値または一般的な相場で、実際の費用は各業者の見積もりによります。</p>
          <p className="mt-2">運営: 株式会社MediaX（東京都渋谷区） &copy; 2026 MediaX All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
