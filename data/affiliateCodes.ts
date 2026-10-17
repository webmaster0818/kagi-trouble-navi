// アフィリエイト計測コード（okina 提供 2026-10-17・okina-links-20261017.txt から機械生成）
// ★ASP から渡されたHTMLをそのまま保持する。href/src・パラメータ・http/https・1x1計測imgを一切変更しないこと。
// textLabel は提供HTML内のアンカーテキスト。表示文言を変える場合はコンポーネント側で置換する（タグ・属性は不変）。
export interface AffCode { asp: string; name: string; bannerHtml?: string; textHtml: string; textLabel: string }
export const affiliateCodes: Record<string, AffCode> = {
  "kagi110ban": {
    asp: "A8",
    name: "カギ110番",
    bannerHtml: "<a href=\"https://px.a8.net/svt/ejp?a8mat=4BEIPA+CF578I+39GM+358FJL\" rel=\"nofollow\">\n<img border=\"0\" width=\"336\" height=\"280\" alt=\"\" src=\"https://www20.a8.net/svt/bgt?aid=261017902751&wid=031&eno=01&mid=s00000015223019019000&mc=1\"></a>\n<img border=\"0\" width=\"1\" height=\"1\" src=\"https://www14.a8.net/0.gif?a8mat=4BEIPA+CF578I+39GM+358FJL\" alt=\"\">",
    textHtml: "<a href=\"https://px.a8.net/svt/ejp?a8mat=4BEIPA+CF578I+39GM+354KNM\" rel=\"nofollow\">【カギ110番】</a>\n<img border=\"0\" width=\"1\" height=\"1\" src=\"https://www15.a8.net/0.gif?a8mat=4BEIPA+CF578I+39GM+354KNM\" alt=\"\">",
    textLabel: "【カギ110番】",
  },
};
export const getAff = (slug: string): AffCode | undefined => affiliateCodes[slug];
