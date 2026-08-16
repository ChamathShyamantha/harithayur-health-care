"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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

  // Rotating a tablet can cross the lg breakpoint with the drawer open. The
  // drawer itself is lg:hidden, so it would vanish while the scroll lock above
  // stayed on and left the page frozen with nothing visible to dismiss.
  useEffect(() => {
    if (!open) return;
    const desktop = window.matchMedia("(min-width: 64rem)");
    const handleChange = () => {
      if (desktop.matches) setOpen(false);
    };
    handleChange();
    desktop.addEventListener("change", handleChange);
    return () => desktop.removeEventListener("change", handleChange);
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

  // The drawer is portalled to <body> rather than rendered in place. The navbar
  // capsule carries backdrop-blur, and a backdrop-filter makes an element the
  // containing block for its fixed-position descendants — so `fixed inset-0`
  // rendered here would resolve to the 64px capsule instead of the viewport, and
  // the whole menu would collapse into the header. Escaping to body is the fix.
  const drawer = (
    <div className="fixed inset-0 z-60 lg:hidden">
      <div aria-hidden onClick={close} className="absolute inset-0 bg-forest-deep/35 backdrop-blur-sm" />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        /* overflow-y-auto so a short handset (or a landscape phone) can still
           reach the consult button rather than having it clipped off. */
        className="absolute right-3 top-3 bottom-3 flex w-[86%] max-w-sm flex-col overflow-y-auto overscroll-contain rounded-plush bg-warm-white px-6 py-6 shadow-[0_20px_60px_rgba(18,59,34,0.22)] sm:px-7"
      >
        <div className="mb-8 flex items-center justify-between sm:mb-12">
          <span className="eyebrow">Menu</span>
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="focus-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-forest-deep transition-colors duration-200 hover:bg-sage-deep"
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
                className={`focus-ring display rounded-soft px-4 py-3 text-[1.75rem] transition-colors duration-200 sm:text-3xl ${
                  active ? "bg-sage-deep text-forest" : "text-forest-deep hover:bg-sage-deep/70"
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
  );

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="focus-ring flex h-11 w-11 items-center justify-center rounded-full text-forest-deep transition-colors duration-200 hover:bg-sage-deep"
      >
        <List size={22} aria-hidden />
      </button>

      {/* `open` is false on the server and on first paint, so the portal only ever
          mounts after a click — there is nothing here to mismatch on hydration. */}
      {open ? createPortal(drawer, document.body) : null}
    </div>
  );
}
