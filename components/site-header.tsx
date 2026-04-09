"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Impact", href: "#impact" },
  { label: "Moments", href: "#moments" },
  { label: "Contact", href: "#contact" },
] as const;

// Custom Social Icons from Footer (Consistent Branding)
const Facebook = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M9.19795 21V12.1575H6V9.09375H9.19795V6.98356C9.19795 3.93422 11.0989 2.25 13.8686 2.25C15.1788 2.25 16.3024 2.34375 16.6259 2.38359V5.25H14.8254C13.425 5.25 13.1344 5.92172 13.1344 6.89391V9.09375H16.5L16.0425 12.1575H13.1344V21H9.19795Z" />
  </svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 105.001 4.999A5 5 0 0012 7zm0 1.5a3.5 3.5 0 11-.001 7.001A3.5 3.5 0 0112 8.5zm5.75-.875a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z" />
  </svg>
);

const SOCIALS = [
  { icon: Twitter, href: "https://x.com", label: "X (Twitter)" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < lastY.current || y < 64) setVisible(true);
      else if (y > lastY.current && y > 64) setVisible(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ type: "spring", stiffness: 320, damping: 32 }}
        className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/80 shadow-sm backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="#home"
            className="flex items-center gap-3 py-2 text-lg font-bold tracking-tight text-[#F7941D]"
          >
            <div className="relative size-6 overflow-hidden ">
              <Image
                src="/bjp2.png"
                alt="BJP Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-base sm:text-lg">Muniraj Karnik</span>
          </Link>

          <nav
            className="hidden items-center gap-8 text-sm font-medium text-[#1A1A1A] lg:flex"
            aria-label="Primary"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded px-1 py-2 transition-colors hover:text-[#F7941D]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Social Icons Desktop */}
            <div className="hidden items-center gap-3 border-r border-black/10 pr-4 lg:flex">
              {SOCIALS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/60 transition-colors hover:text-[#F7941D]"
                  aria-label={social.label}
                >
                  <social.icon className="size-4" />
                </Link>
              ))}
            </div>

           
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-[#1A1A1A] hover:bg-black/5 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/40 lg:hidden"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              id="mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="fixed inset-y-0 right-0 z-[70] flex w-[min(100vw-18px,320px)] flex-col bg-white shadow-xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-black/5 px-4 py-3">
                <span className="font-bold text-[#F7941D]">Menu</span>
                <button
                   type="button"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md hover:bg-black/5"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <X className="size-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-1 p-4" aria-label="Mobile">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-md px-3 py-3 text-base font-medium text-[#1A1A1A]",
                      "min-h-11 hover:bg-[#F7941D]/10",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                <div className="mt-4 flex flex-col gap-4 border-t border-black/5 pt-6">
                  <div className="flex items-center justify-center gap-6">
                    {SOCIALS.map((social) => (
                      <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black/60 transition-colors hover:text-[#F7941D]"
                        aria-label={social.label}
                        onClick={() => setOpen(false)}
                      >
                        <social.icon className="size-5" />
                      </Link>
                    ))}
                  </div>
                  
                 
                </div>
              </nav>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
