"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const SERVICES = [
  {
    id: 1,
    title: "Rapid Response",
    description: "Promptly addressing safety and civic hazards protects the community and demonstrates responsive leadership.",
    quote: "“When a tree fell on HRBR 100 Feet Road, I contacted the forest department and coordinated until the tree was cleared, restoring safe passage for residents.”",
    images: ["/images/service/rain1.jpg", "/images/service/rain2.jpg", "/images/service/rain3.jpg"],
  },
  {
    id: 2,
    title: "Organizational Training",
    description: "Strengthening our team's skills through focused training ensures better service delivery at the grassroots.",
    quote: "“At the Deen Dayal Upadhyay Prashikshna workshop, I sat with Sarvagnanagar karyakartas and discussed practical organizational steps we can use in upcoming campaigns and local outreach.”",
    images: ["/images/service/org2.jpg", "/images/service/org1.jpg", "/images/service/org4.jpg"],
  },
  {
    id: 3,
    title: "Doorstep Verification",
    description: "Direct door-to-door engagement builds trust and keeps voter records accurate for fair participation.",
    quote: "“During Jan Sampark in Banasawadi village I visited nearly 40 houses and conducted voter verification, confirming details and noting needed updates for shifting and name corrections.”",
    images: ["/images/service/door1.jpg", "/images/service/door2.jpg", "/images/service/door3.jpg"],
  },
  {
    id: 4,
    title: "Public Infrastructure Cleaning",
    description: "Maintaining proper hygiene in public roads and parks is vital for a safe and healthy local environment.",
    quote: "“I have closely overseen the regular cleaning of public roads and parks in Banaswadi to maintain proper cleanliness standards for all our families.”",
    images: ["/images/service/clean3.jpg", "/images/service/clean2.jpg", "/images/service/clean1.jpg"],
  },
  {
    id: 5,
    title: "Free Health Camps",
    description: "Organizing accessible medical checkups ensures health resources reach the core communities.",
    quote: "“We organized comprehensive free health camps in the Sarvagnanagar ward, ensuring timely checkups and medical aid reached those who needed it most.”",
    images: ["/images/service/doctor1.jpg", "/images/service/doctor2.jpg", "/images/service/doctor3.jpg"],
  }
];

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = SERVICES[activeIndex];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % SERVICES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const next = () => {
    setActiveIndex((current) => (current + 1) % SERVICES.length);
  };

  const prev = () => {
    setActiveIndex((current) => (current - 1 + SERVICES.length) % SERVICES.length);
  };

  return (
    <section id="services" className="scroll-mt-24 py-24 lg:py-32 overflow-hidden bg-white/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F7941D] mb-4">
            Grassroots Action
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 flex items-center justify-center gap-3">
            At Your Service
          </h2>
          <p className="mt-6 text-gray-500 font-medium tracking-wide text-base md:text-lg max-w-2xl mx-auto">
            What drives my work — one story at a time. True leadership is demonstrated through direct action and commitment to community welfare.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Navigation Buttons */}
        <button 
          onClick={prev}
          className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 transition-all hover:bg-gray-50 hover:scale-105 active:scale-95 hidden md:flex"
          aria-label="Previous service"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        
        <button 
          onClick={next}
          className="absolute right-0 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 transition-all hover:bg-gray-50 hover:scale-105 active:scale-95 hidden md:flex"
          aria-label="Next service"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        <div className="min-h-[750px] lg:min-h-[600px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">
                {/* Text Content */}
                <div className="pt-4 md:pt-0">
                  <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold mb-6 bg-orange-100 text-orange-600 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Community Service
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                    {activeService.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-10 min-h-[80px]">
                    {activeService.description}
                  </p>
                  
                  {/* Quote block */}
                  <div className="relative pl-8 border-l-4 border-[#F7941D] bg-orange-50/50 py-6 pr-6 rounded-r-2xl">
                    <Quote className="absolute left-2 -top-3 w-10 h-10 text-orange-200/50 fill-orange-200/50 -rotate-12" />
                    <p className="relative z-10 text-lg md:text-xl italic text-gray-800 leading-relaxed font-medium min-h-[100px]">
                      {activeService.quote}
                    </p>
                  </div>
                </div>

                {/* Image Bento Gallery */}
                <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-4 h-[400px] sm:h-[500px] lg:h-[600px]">
                  {/* Large Feature Image */}
                  <div className="row-span-2 col-span-1 rounded-[2rem] overflow-hidden relative shadow-xl group">
                    <Image 
                      src={activeService.images[0]} 
                      alt={`${activeService.title} Main`} 
                      fill 
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  
                  {/* Sub Image 1 (Top Right) */}
                  <div className="row-span-1 col-span-1 rounded-[2rem] overflow-hidden relative shadow-lg group bg-slate-100">
                    <Image 
                      src={activeService.images[1]} 
                      alt={`${activeService.title} Detail 1`} 
                      fill 
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-transparent" />
                  </div>
                  
                  {/* Sub Image 2 (Bottom Right) */}
                  <div className="row-span-1 col-span-1 rounded-[2rem] overflow-hidden relative shadow-lg group bg-slate-100">
                     <Image 
                       src={activeService.images[2]} 
                       alt={`${activeService.title} Detail 2`} 
                       fill 
                       className="object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                     />
                     <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-[-4rem] left-1/2 -translate-x-1/2 flex items-center justify-center gap-3">
          {SERVICES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`transition-all duration-300 rounded-full ${
                i === activeIndex 
                  ? "w-8 h-2.5 bg-[#F7941D]" 
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
