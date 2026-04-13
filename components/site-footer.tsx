import Link from "next/link";

const LINKS = {
  common: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Timeline", href: "#impact" },
    { label: "Manifesto", href: "#" },
  ],
  office: [
    { label: "#50/1, BJP Office , 1st floor", href: "#" },
    { label: "Above Ashirvad Super Market", href: "#" },
    { label: "Dodda Banaswadi , Bengaluru -560053", href: "#" },
  ],
  connect: [
    { label: "Contact", href: "#contact" },
    { label: "munirajkarnikbjp@gmail.com", href: "mailto:munirajkarnikbjp@gmail.com" },
    { label: "Call: 944851264 / 789268717", href: "tel:+91944851264" },
  ],
} as const;

export function SiteFooter() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="text-xl font-extrabold text-[#F7941D]">K. Muniraj Karnik</p>
            <p className="mt-1 text-sm font-bold text-white/90 uppercase tracking-widest">
              District Vice President
            </p>
            <p className="text-xs font-semibold text-[#F7941D] uppercase tracking-wider mb-4">
              BJP Bengaluru Central
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-white/75">
              Dedicated to building a transparent, progressive, and inclusive
              future for all citizens of our constituency.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              Navigation
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {LINKS.common.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-[#F7941D]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              Office
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {LINKS.office.map((l) => (
                <li key={l.label}>
                  <span className="cursor-default">{l.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              Connect
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {LINKS.connect.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-[#F7941D]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="inline-flex size-11 min-h-11 min-w-11 items-center justify-center rounded-full border border-white/20 text-white hover:border-[#F7941D] hover:text-[#F7941D]"
                aria-label="Facebook"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M9.19795 21V12.1575H6V9.09375H9.19795V6.98356C9.19795 3.93422 11.0989 2.25 13.8686 2.25C15.1788 2.25 16.3024 2.34375 16.6259 2.38359V5.25H14.8254C13.425 5.25 13.1344 5.92172 13.1344 6.89391V9.09375H16.5L16.0425 12.1575H13.1344V21H9.19795Z" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex size-11 min-h-11 min-w-11 items-center justify-center rounded-full border border-white/20 text-white hover:border-[#F7941D] hover:text-[#F7941D]"
                aria-label="Twitter"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex size-11 min-h-11 min-w-11 items-center justify-center rounded-full border border-white/20 text-white hover:border-[#F7941D] hover:text-[#F7941D]"
                aria-label="Instagram"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 105.001 4.999A5 5 0 0012 7zm0 1.5a3.5 3.5 0 11-.001 7.001A3.5 3.5 0 0112 8.5zm5.75-.875a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/55 sm:text-sm">
          © 2026 MunirajKarnik. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
