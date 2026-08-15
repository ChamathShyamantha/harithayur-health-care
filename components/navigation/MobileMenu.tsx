"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { mainNavigation } from "@/data/navigation";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-full text-forest-deep hover:bg-cream transition-colors duration-200"
      >
        <List size={22} />
      </button>

      {open ? (
        <div className="fixed inset-0 z-[60]">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-forest-deep/30 backdrop-blur-sm"
          />
          <div className="absolute right-3 top-3 bottom-3 w-[85%] max-w-sm rounded-3xl bg-warm-white shadow-2xl flex flex-col p-6">
            <div className="flex items-center justify-between mb-8">
              <span className="font-serif text-2xl text-forest-deep">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full text-forest-deep hover:bg-cream transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-text-dark hover:bg-cream hover:text-forest transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-6">
              <WhatsAppButton className="w-full" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
