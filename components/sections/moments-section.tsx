"use client";

import Image from "@/components/ui/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const MOMENTS = Array.from({ length: 71 }, (_, i) => ({
  src: `/images/moments/moment-${i + 1}.jpg`,
  alt: `Campaign moment ${i + 1}`,
  caption: [
    "Community Meeting", "Field Visit", "Public Speech", "Leadership Dialogue", 
    "Youth Engagement", "Progress Check", "Development Tour", "Citizen Connect"
  ][i % 8],
}));

export function MomentsSection() {
  const [index, setIndex] = useState(0);
  const [itemsVisible, setItemsVisible] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsVisible(4);
      else if (window.innerWidth >= 768) setItemsVisible(3);
      else if (window.innerWidth >= 640) setItemsVisible(2);
      else setItemsVisible(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev: number) => (prev + 1) % MOMENTS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setIndex((prev: number) => (prev - 1 + MOMENTS.length) % MOMENTS.length);
  };

  const handleNext = () => {
    setIndex((prev: number) => (prev + 1) % MOMENTS.length);
  };

  return (
    <section 
      id="moments" 
      className="scroll-mt-24 overflow-hidden bg-[#F5F5F5] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="font-heading text-3xl font-bold text-[#111111] sm:text-4xl">
              <span className="text-[#2E7D32]">Moments of Connection: </span>
              <span className="text-[#111111]">Social Chronicle</span>
            </h2>
            <p className="mt-3 max-w-2xl text-[#666666]">
              A dynamic visual journey through our mission—documented in real-time.
            </p>
          </motion.div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={handlePrev}
              className="rounded-full size-11 p-0 flex items-center justify-center"
              aria-label="Previous slide"
            >
              ←
            </Button>
            <Button 
              variant="outline" 
              onClick={handleNext}
              className="rounded-full size-11 p-0 flex items-center justify-center"
              aria-label="Next slide"
            >
              →
            </Button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <motion.div
            animate={{ x: `${-index * (100 / itemsVisible)}%` }}
            transition={{ type: "spring", stiffness: 80, damping: 20, mass: 1 }}
            className="flex gap-4 lg:gap-6"
          >
            {MOMENTS.map((m: any, i: number) => (
              <div 
                key={`${m.src}-${i}`}
                className="w-full shrink-0 sm:w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-18px)]"
              >
                <MomentCard
                  src={m.src}
                  alt={m.alt}
                  caption={m.caption}
                  aspect="aspect-[4/5]"
                  width={600}
                  height={750}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MomentCard({
  src,
  alt,
  caption,
  aspect,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption: string;
  aspect: string;
  width: number;
  height: number;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg bg-white shadow-sm ${aspect}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[#F7941D]/0 transition-colors duration-300 group-hover:bg-[#F7941D]/45" />
      <p className="absolute inset-x-0 bottom-0 translate-y-full px-4 py-3 text-center text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-y-0">
        <span className="inline-block rounded-md bg-black/55 px-3 py-1">
          {caption}
        </span>
      </p>
    </div>
  );
}
