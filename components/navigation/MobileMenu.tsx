"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { mainNavigation } from "@/data/navigation";

function isActive(pathname: string, href: string): boolean {
  const path = href.split("#")[0];
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Modal behaviour: focus moves into the drawer, Escape closes it, Tab stays inside.
  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key !== "Tab" || !panel) return;

      const items = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || !panel.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, close]);

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="focus-ring flex h-10 w-10 items-center justify-center rounded-full text-forest-deep transition-colors duration-200 hover:bg-cream"
      >
        <List size={22} aria-hidden />
      </button>

      {open ? (
        <div className="fixed inset-0 z-60">
          <div aria-hidden onClick={close} className="absolute inset-0 bg-forest-deep/35 backdrop-blur-sm" />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="absolute right-3 top-3 bottom-3 flex w-[86%] max-w-sm flex-col rounded-plush bg-warm-white px-7 py-6 shadow-[0_20px_60px_rgba(18,59,34,0.22)]"
          >
            <div className="mb-12 flex items-center justify-between">
              <span className="eyebrow">Menu</span>
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full text-forest-deep transition-colors duration-200 hover:bg-cream"
              >
                <X size={20} aria-hidden />
              </button>
            </div>

            <nav className="flex flex-col" aria-label="Mobile navigation">
              {mainNavigation.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`focus-ring display rounded-soft px-4 py-3 text-3xl transition-colors duration-200 ${
                      active ? "bg-cream text-forest" : "text-forest-deep hover:bg-cream/70"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto pt-8">
              <WhatsAppButton className="w-full" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
