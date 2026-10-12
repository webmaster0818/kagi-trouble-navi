// 各業者の公式サイトのファーストビュー（2026-10-12 編集部がヘッドレスChromeで取得）。
// 表示時は必ず「出典：〇〇公式サイト」として公式サイトへリンクする。
export interface AgentShot {
  src: string;
  site: string; // 出典表記
  url: string; // 公式サイトURL
  capturedOn: string;
}

const CAPTURED = "2026年10月12日";

export const agentShots: Record<string, AgentShot> = {
  kagi110ban: { src: "/images/agents/kagi110ban.webp", site: "カギ110番 公式サイト", url: "https://kagi110ban.jp/", capturedOn: CAPTURED },
  jbr: { src: "/images/agents/jbr.webp", site: "JBR（ジャパンベストレスキューシステム）公式サイト", url: "https://www.jbr.co.jp/", capturedOn: CAPTURED },
  "seikatsu-kyukyusha": { src: "/images/agents/seikatsu-kyukyusha.webp", site: "カギの生活救急車 公式サイト", url: "https://kagi-seikatsukyukyusya.com/", capturedOn: CAPTURED },
  "kagi-rescue": { src: "/images/agents/kagi-rescue.webp", site: "鍵のレスキュー（鍵の110番救急車）公式サイト", url: "https://www.kagi110qq.co.jp/", capturedOn: CAPTURED },
  kagizaru: { src: "/images/agents/kagizaru.webp", site: "鍵屋の鍵猿 公式サイト", url: "https://sls.co.jp/kagizaru/", capturedOn: CAPTURED },
  "kagi-kyukyusha": { src: "/images/agents/kagi-kyukyusha.webp", site: "カギの110番・カギの救急車 公式サイト", url: "https://www.kagi1109948.com/", capturedOn: CAPTURED },
  "kagi-24h-kyukyusha": { src: "/images/agents/kagi-24h-kyukyusha.webp", site: "鍵の24時間救急車 公式サイト", url: "https://xn--24-zb4a773seofkpbj81n71hr1e.com/", capturedOn: CAPTURED },
  "kagi-trouble-kyukyusha": { src: "/images/agents/kagi-trouble-kyukyusha.webp", site: "カギのトラブル救急車 公式サイト", url: "https://key.asti24.co.jp/", capturedOn: CAPTURED },
};

/** companies.json の id と業者ページ slug の対応 */
export const companyIdToSlug: Record<string, string> = {
  kagi110: "kagi110ban",
  jbr: "jbr",
  "seikatsu-kyukyusha": "seikatsu-kyukyusha",
  "kagi-rescue": "kagi-rescue",
  kagizaru: "kagizaru",
};
