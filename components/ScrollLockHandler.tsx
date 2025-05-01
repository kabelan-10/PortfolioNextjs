"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollLockHandler() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const navEntries = performance.getEntriesByType("navigation");
    const navType = (navEntries[0] as PerformanceNavigationTiming).type;

    if (navType === "reload" && isHomePage) {
      console.log("Scroll lock applied.");

      // Lock scroll on both html and body
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.height = "100vh";
      document.documentElement.style.height = "100vh";

      const timer = setTimeout(() => {
        console.log("Scroll lock removed.");
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        document.body.style.height = "";
        document.documentElement.style.height = "";
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isHomePage]);

  return null;
}
