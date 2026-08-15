"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavigation } from "@/data/navigation";

function isActive(pathname: string, href: string): boolean {
  const path = href.split("#")[0];
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav
      className="hidden lg:flex items-center gap-1"
      aria-label="Main navigation"
    >
      {mainNavigation.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`focus-ring rounded-pill px-3.5 py-2 text-[0.8125rem] font-medium transition-colors duration-200 ${
              active
                ? "bg-sage-deep text-forest"
                : "text-text-dark hover:bg-sage-deep/70 hover:text-forest"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
