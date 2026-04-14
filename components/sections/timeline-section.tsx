"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "@/components/ui/image";

const ITEMS = [
  {
    year: "1996",
    title: "Booth President",
    body: "Kacharakanahalli Ward",
  },
  {
    year: "1999",
    title: "Ward President",
    body: "Yuva Morcha, Kacharakanahalli Ward",
  },
  {
    year: "2002",
    title: "General Secretary",
    body: "Yuva Morcha, Devarajeevanahalli Mandal",
  },
  {
    year: "2005",
    title: "President",
    body: "Yuva Morcha, Devarajeevanahalli Mandal",
  },
  {
    year: "2008 - 2020",
    title: "General Secretary",
    body: "Served 12 years as General Secretary, Sarvagna Nagar Assembly Constituency. Also nominated as Vistharak across many parts of Karnataka.",
  },
  {
    year: "2020 - 2025",
    title: "Constituency President",
    body: "Served as President, Sarvagna Nagar Assembly Constituency.",
  },
  {
    year: "2025 - Present",
    title: "Vice President",
    body: "BJP Bengaluru Central District",
  },
] as const;

export function TimelineSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="impact"
      className="relative scroll-mt-20 overflow-hidden bg-[#F7941D] py-16 lg:py-24"
      ref={ref}
    >
      {/* Dimmed Watermarks */}
      {/* Dimmed Watermarks */}
      <div 
        className="pointer-events-none absolute inset-0 select-none opacity-[0.22]" 
        aria-hidden="true"
      >
        <Image
          src="/bg-photo.png"
          alt=""
          fill
          className="object-contain object-left-top grayscale scale-[1.1] -translate-x-[5%] -translate-y-[5%]"
        />
      </div>
      {/* Bottom Right Watermark */}
      <div 
        className="pointer-events-none absolute right-0 bottom-0 h-1/2 w-[80%] md:w-1/2 select-none opacity-[0.08] md:opacity-[0.15]" 
        aria-hidden="true"
      >
        <Image
          src="/Muniraj /muniraj-bg-3.png"
          alt=""
          fill
          className="object-contain object-right-bottom grayscale"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/90">
            Our Journey
          </p>
          <h2 className="font-heading mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Progress & Impact Timeline
          </h2>
        </motion.div>

        {/* Mobile: line left; Desktop: centered spine with alternating rows */}
        <div className="relative mt-16 md:mt-24">
          <div
            className="absolute left-[13px] top-0 bottom-0 w-[2px] bg-white/30 md:left-[65%] md:-translate-x-1/2"
            aria-hidden
          />

          <ul className="relative space-y-16 md:space-y-20">
            {ITEMS.map((item, index) => {
              const isRight = index % 2 === 1;
              const xFrom = isRight ? 40 : -40;

              return (
                <motion.li
                  key={item.year}
                  initial={{ opacity: 0, x: xFrom }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative grid grid-cols-[auto_1fr] md:grid-cols-[1.3fr_0.7fr] md:gap-x-12"
                >
                  {/* Desktop Left Side */}
                  <div className={`hidden md:flex items-start justify-end ${!isRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    {!isRight && (
                      <article className="max-w-md text-right">
                        <EntryBody item={item} align="right" />
                      </article>
                    )}
                  </div>

                  {/* Icon Node (Desktop Center / Mobile Left) */}
                  <div className="absolute left-[13px] top-4 md:left-[65%] md:top-6 flex -translate-x-1/2 items-center justify-center">
                    <div className="relative z-[1] flex items-center justify-center">
                      <span className="size-4 rounded-full border-[3px] border-white bg-[#F7941D] shadow ring-4 ring-[#F7941D]/20" />
                    </div>
                  </div>

                  {/* Desktop Right Side / Mobile Content */}
                  <div className={`flex flex-col pl-10 md:pl-0 ${isRight ? "opacity-100" : "md:opacity-0 md:pointer-events-none"}`}>
                    {(isRight || true) && (
                      <article className={`max-w-sm ${!isRight ? "md:hidden" : ""}`}>
                         <EntryBody item={item} align="left" />
                      </article>
                    )}
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function EntryBody({
  item,
  align,
}: {
  item: (typeof ITEMS)[number];
  align: "left" | "right";
}) {
  return (
    <div className="group relative">
      <span
        className={`pointer-events-none absolute text-7xl font-bold leading-none text-white/10 transition-opacity duration-300 group-hover:opacity-20 sm:text-8xl ${
          align === "right"
            ? "right-0 top-[-8px]"
            : "left-0 top-[-8px]"
        }`}
        aria-hidden
      >
            {item.year}
      </span>
      <div className="relative">
        <p className="text-sm font-bold tracking-wider text-white/80">{item.year}</p>
        <h3 className="font-heading mt-1.5 text-xl font-bold text-white sm:text-2xl">
          {item.title}
        </h3>
        <p
          className={`mt-3 text-sm leading-relaxed text-white/90 md:text-base ${
            align === "right" ? "md:text-right" : "md:text-left"
          }`}
        >
          {item.body}
        </p>
      </div>
    </div>
  );
}
