"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTOR = [
  "main section",
  "article section",
  "article h2",
  "article table",
  "article figure",
  "[data-reveal]",
].join(",");

/**
 * スクロールで要素をふわっと表示する。
 * - JS 実行後に html.kt-js を付与し、その時点で画面外にある要素だけを隠す（初期表示・SEO に影響しない）
 * - prefers-reduced-motion の環境では何もしない
 */
export default function ScrollReveal() {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("kt-js");
    const vh = window.innerHeight;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR)).filter((el) => {
      if (el.classList.contains("kt-reveal")) return false;
      // 入れ子の対象は外側だけを動かす
      if (el.parentElement?.closest(".kt-reveal")) return false;
      const r = el.getBoundingClientRect();
      return r.top > vh * 0.92 && r.height > 0;
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("kt-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    targets.forEach((el) => {
      el.classList.add("kt-reveal");
      io.observe(el);
    });
    // ページ内リンク・印刷などで取り残された要素は数秒後に必ず表示する保険
    const fallback = window.setTimeout(() => {
      targets.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) el.classList.add("kt-in");
      });
    }, 2500);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, [pathname]);
  return null;
}
