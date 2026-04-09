"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export function LegacySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="scroll-mt-24 bg-white py-16 lg:py-24"
      ref={ref}
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-lg"
        >
          {/*
            TODO: Replace /images/muniraj-legacy.jpg with the final candid/meeting photo
            (optimized). Current file is generated from Munirajwithmodi.png.
          */}
          <div
            className="relative overflow-hidden rounded-lg shadow-lg"
            style={{ transform: "rotate(-2deg)" }}
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/muniraj-legacy.jpg"
                alt="Muniraj Karnik in conversation with leadership"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
          <div
            className="absolute -right-2 top-4 z-10 max-w-[11rem] rotate-[15deg] rounded-md bg-[#F7941D] px-4 py-3 text-center text-xs font-bold uppercase tracking-wide text-white shadow-md sm:right-0 sm:top-6 sm:max-w-[12rem]"
            role="note"
          >
            Champion of Growth
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F7941D]">
            Legacy of Leadership
          </p>
          <h2 className="font-heading mt-3 text-3xl font-bold leading-tight text-[#111111] sm:text-4xl">
            A Visionary Leader with{" "}
            <span className="italic text-[#F7941D]">Roots in Service.</span>
          </h2>
          <div className="mt-6 space-y-4 text-[#666666]">
            <p>
              Muniraj Karnik has dedicated over a decade to the socio-economic
              upliftment of the region. His journey began in the very streets he
              now seeks to represent, understanding the nuanced challenges of
              every household.
            </p>
            <p>
              With a focus on transparency, modern infrastructure, and inclusive
              education, Muniraj bridges the gap between traditional values and
              future-forward progress.
            </p>
          </div>
          <Button asChild className="mt-8 rounded-md px-6">
            <Link href="#impact">KNOW MORE →</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
