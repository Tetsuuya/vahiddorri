"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState<"fadeIn" | "fadeOut">("fadeIn");

  useEffect(() => {
    // When pathname changes, trigger smooth crossfade entrance
    setTransitionStage("fadeOut");
    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setTransitionStage("fadeIn");
    }, 150);

    return () => clearTimeout(timeout);
  }, [pathname, children]);

  return (
    <div
      className={`w-full flex-1 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        transitionStage === "fadeIn"
          ? "opacity-100 translate-y-0 filter-none"
          : "opacity-0 translate-y-2 blur-[1px]"
      }`}
    >
      {displayChildren}
    </div>
  );
}
