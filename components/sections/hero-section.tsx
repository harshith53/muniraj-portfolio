"use client";

import Image from "@/components/ui/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

/**
 * Senior Designer Note:
 * The Hero section uses a vibrant saffron background (#F7941D) consistent with the 
 * brand identity. The layout uses a dynamic media stack where the profile image 
 * and a video placeholder overlap to create depth. Glassmorphism is used for 
 * secondary UI elements to maintain a premium feel.
 */

const stagger = 0.1;

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden bg-[#F7941D] pt-24 pb-12 sm:pt-28 lg:py-14"
    >
      {/* Decorative Background Elements */}
      <div 
        className="pointer-events-none absolute -right-20 -top-20 hidden size-[500px] rounded-full bg-white/5 blur-3xl lg:block" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute -bottom-20 -left-20 hidden size-[400px] rounded-full bg-black/5 blur-3xl lg:block" 
        aria-hidden="true" 
      />

      <div className="mx-auto grid max-w-screen-2xl gap-8 px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12 lg:px-12">
        {/* Left Column: Content & Integrated Video */}
        <div className="relative z-20 flex flex-col justify-center py-4 text-center lg:py-6 lg:text-left">
         


          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: stagger * 1 }}
            className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Dedicated to Progress. <br className="hidden lg:block" />
            <span className="text-white/90">Committed to You.</span>
          </motion.h1>

          {/* Integrated Large Video Player */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="group relative mt-6 lg:mt-8 z-30 -mx-2 w-[calc(100%+16px)] sm:w-full sm:mx-0 overflow-hidden rounded-3xl bg-white p-2 sm:p-3 shadow-2xl transition-all hover:shadow-[0_48px_96px_-24px_rgba(0,0,0,0.4)] lg:w-[106%] xl:w-[108%]"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-[1.25rem] bg-gray-950">
              <Image
                src="/images/moments/moment-64.jpg"
                alt="Video placeholder"
                fill
                className="object-cover object-center opacity-80"
              />
              {/* Play UI */}
              <div className="absolute inset-0 flex items-center justify-center transition-colors group-hover:bg-gray-900/20">
                <div className="flex size-14 items-center justify-center rounded-full bg-[#F7941D] text-white shadow-2xl shadow-[#F7941D]/40 ring-4 ring-white transition-transform group-hover:scale-110">
                  <Play size={28} fill="currentColor" className="ml-1.5" />
                </div>
              </div>
              
              {/* Overlay Pattern */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              
              {/* Meta Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white drop-shadow-lg">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/70">
                    Official Message
                  </span>
                  <p className="text-xs font-bold sm:text-sm">
                    Muniraj&apos;s Vision for the Future
                  </p>
                </div>
                <div className="rounded bg-black/60 px-1.5 py-0.5 text-[9px] font-bold backdrop-blur-sm">
                  2:45
                </div>
              </div>

              {/* Progress Bar (Visual Only) */}
              <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-[#F7941D]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-white/90 sm:text-xl lg:mx-0"
          >
            <p className="mb-4">
              Empowering Our Community, Building a Better Future. A voice for the people, a leader for tomorrow.
            </p>
            <div className="relative inline-block mt-2">
              <span className="absolute -inset-1 rounded-lg bg-black/20 blur-sm"></span>
              <p className="relative bg-black/10 backdrop-blur-md rounded-lg px-4 py-3 text-base font-bold text-white border-l-4 border-white">
                “From March 1st 2026 onwards — every action for Banaswadi, visible to you.”
              </p>
            </div>
          </motion.div>
        
        </div>

        {/* Right Column: Refined Profile Image - Full Width Utilized */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block lg:translate-x-6 xl:translate-x-12"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-h-[700px] overflow-hidden rounded-[0.5rem] bg-[#F7941D]">
            <Image
              src="/Munirajimage.png"
              alt="Muniraj Karnik official portrait"
              fill
              priority
              sizes="50vw"
              className="object-cover object-top brightness-[1.05] contrast-[1.05]"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -right-8 top-10 -z-10 size-64 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-8 left-8 -z-10 size-48 rounded-full bg-black/10 blur-3xl" aria-hidden="true" />

          {/* Moved Post Title beneath desktop photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-6 text-center"
          >
             <span className="inline-block rounded-full bg-white/20 px-6 py-2.5 text-xs lg:text-sm font-extrabold uppercase tracking-widest text-white shadow-sm backdrop-blur-md whitespace-nowrap">
              District Vice President <span className="mx-1 text-white/50">·</span> BJP Bengaluru Central
            </span>
           
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button 
                asChild 
                className="h-12 bg-white px-8 text-[#F7941D] transition-all hover:scale-105 hover:bg-white/95 hover:shadow-xl"
              >
                <Link href="#explore">VIEW UPDATES</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 border-2 border-white bg-transparent px-8 text-white transition-all hover:bg-white/10 hover:shadow-xl"
              >
                <Link href="#contact">GET IN TOUCH</Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile-only Image (Stacked below) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative lg:hidden"
        >
          <div className="relative aspect-[4/5] max-h-[450px] overflow-hidden rounded-[2rem] bg-[#F7941D] shadow-xl">
             <Image
                src="/Munirajimage.png"
                alt="Muniraj Karnik official portrait"
                fill
                sizes="100vw"
                className="object-cover object-top"
              />
          </div>

          {/* Moved Post Title beneath mobile photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-6 text-center overflow-hidden"
          >
            <span className="inline-block rounded-full bg-white/20 px-3 sm:px-5 py-2 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-white shadow-sm backdrop-blur-md whitespace-nowrap">
              District Vice President <span className="mx-1 text-white/50">·</span> BJP Bengaluru Central
            </span>
            
            {/* Buttons for Mobile Stack */}
            <div className="mt-8 mb-6 flex flex-col justify-center gap-4 sm:flex-row">
              <Button 
                asChild 
                className="h-12 bg-white px-8 text-[#F7941D] transition-all hover:scale-105 hover:bg-white/95 hover:shadow-xl"
              >
                <Link href="#explore">VIEW UPDATES</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 border-2 border-white bg-transparent px-8 text-white transition-all hover:bg-white/10 hover:shadow-xl"
              >
                <Link href="#contact">GET IN TOUCH</Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      
      </div>
    </section>
  );
}
