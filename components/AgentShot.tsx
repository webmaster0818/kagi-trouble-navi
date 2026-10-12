import Image from "next/image";
import { agentShots } from "@/data/agentShots";

/** 業者の公式サイトのファーストビュー画像＋出典表記 */
export default function AgentShot({
  slug,
  name,
  className = "",
  priority = false,
  sizes = "(min-width: 768px) 360px, 100vw",
}: {
  slug: string;
  name: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const shot = agentShots[slug];
  if (!shot) return null;
  return (
    <figure className={`m-0 ${className}`}>
      <a
        href={shot.url}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="block overflow-hidden rounded-lg border border-border bg-white"
      >
        <Image
          src={shot.src}
          alt={`${name}の公式サイトのトップページ`}
          width={1200}
          height={675}
          sizes={sizes}
          priority={priority}
          className="block aspect-[16/9] h-auto w-full object-cover object-top"
        />
      </a>
      <figcaption className="mt-1.5 text-[11px] leading-relaxed text-text-muted">
        出典：
        <a href={shot.url} target="_blank" rel="nofollow noopener noreferrer" className="underline underline-offset-2 hover:text-primary">
          {shot.site}
        </a>
        （{shot.capturedOn}時点）
      </figcaption>
    </figure>
  );
}
