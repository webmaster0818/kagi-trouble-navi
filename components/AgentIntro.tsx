import AgentShot from "./AgentShot";
import { agentShots } from "@/data/agentShots";

/** エリアページの業者紹介文。公式サイト画像がある業者は本文と画像を並べて配置する。 */
export default function AgentIntro({ slug, name, children }: { slug: string; name: string; children: React.ReactNode }) {
  if (!agentShots[slug]) return <p className="leading-loose">{children}</p>;
  return (
    <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_300px] md:items-start">
      <p className="leading-loose">{children}</p>
      <AgentShot slug={slug} name={name} sizes="(min-width: 768px) 300px, 100vw" />
    </div>
  );
}
