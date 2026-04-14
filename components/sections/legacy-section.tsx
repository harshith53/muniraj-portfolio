"use client";

import Image from "@/components/ui/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown, ChevronUp, Users, Handshake, Award } from "lucide-react";

const MAIN_SUMMARY = [
  "My journey in public life has always been guided by one belief — real change begins at the grassroots, by staying connected with people and understanding their everyday challenges.",
  "For decades, I have been actively involved in social and political work, engaging closely with communities across our area. My association with public service began early through social and cultural organizations, and over the years, I have taken on various responsibilities — from serving as Ward President to working as General Secretary for over 12 years, and later as President of the Sarvagnanagar Assembly Constituency.",
  "Beyond politics, I have consistently focused on community development and empowerment. I have worked to strengthen local initiatives and contributed to empowering women by supporting the formation of over 200 self-help groups, helping create opportunities for financial independence and stability for many families.",
  "My interest has always gone beyond holding positions — I am deeply committed to being part of administration and governance. I believe leadership should not be distant. It should be accessible, responsible, and focused on solving real problems. Being present on the ground, listening to people, and acting with clarity is what drives me.",
  "Banaswadi and its surrounding areas hold a special place in my journey. My continuous interaction with residents here has shaped my understanding of what truly matters — better infrastructure, safer neighborhoods, cleaner surroundings, and a stronger sense of community.",
  "This website is built with a clear purpose — to create a direct connection between me and you. It is a platform where your voice can reach me without barriers, and where your concerns and suggestions can contribute to meaningful action.",
  "I strongly believe that the future of Banaswadi should be built together. My vision is to work towards a clean, prosperous, well-developed, environmentally sustainable, and crime-free Banaswadi — a place where every resident feels secure, heard, and proud to belong.",
  "Under the guidance of our beloved MP P. C. Mohan and with the constant support of all our constituency BJP leaders, I continue to work forward with dedication and responsibility.",
  "I invite you to be a part of this journey. Share your ideas, concerns, and suggestions through the platform. Your participation will help shape better decisions and stronger outcomes for our community.",
  "Together, we can create the change we want to see."
];

const MILESTONES = [
  {
    year: "2025",
    title: "Expanded Responsibility — Vice President, Bengaluru Central District",
    desc: "As my journey in public service progressed, I was entrusted with the responsibility of serving as BJP Vice President of the Bengaluru Central District. This role, given with the support and confidence of senior party leadership and under the continued guidance of our beloved MP Sri P. C. Mohan, marked an important step in my journey — expanding my responsibilities beyond the constituency to a wider district-level platform. At this level, my focus has been on strengthening coordination across constituencies, supporting local leaders, and ensuring that organizational efforts translate into meaningful impact on the ground. It involves working closely with karyakartas, understanding diverse local challenges, and contributing to both organizational growth and public service initiatives. This responsibility reflects the trust built over years of consistent work at the grassroots. It also reinforces my commitment to stay accessible, responsive, and focused on delivering results that matter to people. As I continue in this role, my approach remains the same — stay connected to the ground, support the team, and work collectively towards building stronger communities and better governance."
  },
  {
    year: "2020",
    title: "Leading from the Front — President, Sarvagnanagar Constituency",
    desc: "From 2020 to 2025, I had the privilege of serving as President of the Sarvagnanagar Assembly Constituency — a responsibility that marked a significant phase in my journey of public service. This role gave me the opportunity to lead from the front while staying deeply connected to the grassroots. My focus was on strengthening the organization, building a cohesive team across all wards, and ensuring continuous engagement with the people. One of the most challenging periods during this time was the COVID-19 pandemic. With the guidance of our beloved MP Sri P. C. Mohan and the collective efforts of our constituency leaders and karyakartas, we worked tirelessly to support people during difficult times. We focused on providing essential assistance, responding to urgent needs, and staying accessible to residents across the constituency. Whether it was helping families in distress, coordinating support, or ensuring timely response on the ground, our priority was to stand with people when they needed it the most. At the same time, we ensured that the strength of the organization continued to grow. Even during challenging circumstances, we remained active, connected, and committed to both service and organizational development. This phase reinforced my belief that true leadership is tested during difficult times — by being present, responsive, and committed to serving people without pause. The experience continues to guide my approach today — to lead with responsibility, stay grounded, and work consistently for the well-being and progress of the community."
  },
  {
    year: "2015",
    title: "Strengthening the Mandate — Banaswadi Elections",
    desc: "The 2015 Banaswadi elections marked another important phase in my journey of public service and grassroots political work. During this time, I continued to play a key role behind the scenes in strengthening the party’s presence at the local level, contributing to the successful re-election of the BJP corporator in Banaswadi. This victory was the result of sustained effort, strong coordination, and continuous engagement with the community. I worked closely, hand in hand, with the beloved A. Kodanda Reddy, focusing on addressing civic issues and improving basic amenities across Banaswadi. Being actively involved at the ground level gave me deeper insight into the real challenges faced by residents. Under the guidance of our beloved MP Sri P. C. Mohan, I also gained valuable understanding of how governance and public service must function — with accountability, responsiveness, and constant presence among people. This phase was a strong learning experience for me. It reinforced my belief that a true leader must always stay connected to the ground, understand grievances first-hand, and work consistently to resolve them. Working as part of the core team in the background, I learned that lasting impact is built through dedication, teamwork, and a genuine commitment to serving people."
  },
  {
    year: "2010",
    title: "Powering the Win — BBMP Banaswadi",
    desc: "The 2010 Banaswadi elections marked a significant milestone in my journey of public service and grassroots political work. During this period, I played a crucial role behind the scenes in strengthening the party’s presence at the local level, contributing to the successful election of a BJP corporator in Banaswadi. This victory was built on consistent ground-level effort, close coordination with karyakartas, and strong engagement with the community. I had the opportunity to work closely, hand in hand, with the beloved Sri A. Kodanda Reddy during this phase. Together, we focused on understanding the real needs of the people and addressing basic civic issues that directly impacted daily life in Banaswadi. Our efforts were centered around improving essential amenities, strengthening local coordination, and ensuring that the concerns of residents were brought forward and acted upon effectively. This phase further deepened my connection with Banaswadi. It reinforced my belief that meaningful political success is built on trust, teamwork, and consistent presence among people. The experience remains a key part of my journey, shaping my continued commitment to the development and well-being of Banaswadi."
  },
  {
    year: "2008",
    title: "Deepening Roots — General Secretary, Sarvagnanagar Constituency",
    desc: "From 2008 to 2020, I had the opportunity to serve as General Secretary of the then newly formed constituency after delimitation, Sarvagnanagar Assembly for over 12 years. This phase was a defining period in my journey. The constituency, being large and diverse, required constant engagement, strong coordination, and a deep understanding of local issues across multiple areas. It was during this time that my close connection with Banaswadi and its people truly began. Regular interaction with residents, understanding their concerns, and working alongside the community helped me build lasting relationships and a strong grassroots presence in the area. As General Secretary, my focus was on strengthening the organization at every level, ensuring smooth coordination across wards, and addressing issues that directly impacted people’s daily lives. This role demanded consistency, accessibility, and the ability to stay connected with people across the constituency at all times. These 12 years shaped my perspective in a significant way. They reinforced my belief that real leadership is built on trust, continuous presence, and genuine engagement with people. The relationships and experiences from this period continue to guide my work today, especially my commitment towards the development and future of Banaswadi."
  },
  {
    year: "2002",
    title: "Broader Leadership — General Secretary, DJhalli Constituency",
    desc: "In 2002, I was entrusted with the responsibility of serving as General Secretary at the constituency level, marking a significant expansion in my public and organizational journey. This role moved me beyond ward-level responsibilities into a wider scope of coordination across multiple areas within the constituency. It involved working closely with leaders, karyakartas, and community members to ensure that organizational efforts were aligned and effective. As General Secretary, I focused on strengthening grassroots connectivity, improving coordination between different teams, and ensuring that issues from various localities were understood and addressed systematically. It required consistent engagement, structured planning, and the ability to bring people together towards a common purpose. This phase played a crucial role in shaping my understanding of larger-scale leadership. It taught me how to manage responsibilities across diverse communities, balance multiple priorities, and stay grounded while working at a broader level. The experience strengthened my commitment to public service and laid a strong foundation for the leadership roles I took on in the years that followed."
  },
  {
    year: "1999",
    title: "Youth Leadership — Yuva Morcha Ward President",
    desc: "In 1999, I was entrusted with the responsibility of serving as Yuva Morcha Ward President for Kacharakanahalli. This phase marked a significant step in my journey, where I began working closely with young individuals in the community. It was an opportunity to channel the energy, ideas, and aspirations of youth towards constructive social and public initiatives. As Ward President, my focus was on encouraging youth participation, building local leadership, and creating a sense of responsibility among young members towards society. We worked together on community activities, awareness initiatives, and strengthening grassroots connections within the ward. This experience helped me understand the power of youth in driving change. It reinforced my belief that when young people are guided with the right values and direction, they can become a strong force for positive transformation. The lessons from this phase continue to influence my approach even today — empowering people, especially youth, to take ownership of their communities and be active contributors to progress."
  },
  {
    year: "1996",
    title: "Grassroots Leadership — BJP Booth President",
    desc: "In 1996, I took on the responsibility of serving as Booth President in Kacharakanahalli Ward — one of my earliest roles in public and political life. This phase was where I truly began working closely with people at the ground level. It was not about positions, but about being present — understanding local issues, building trust within the community, and ensuring that every voice was heard. As Booth President, I learned the importance of direct engagement with residents — addressing everyday concerns, coordinating with local teams, and creating a sense of collective responsibility within the ward. This experience shaped my approach to leadership. It reinforced my belief that strong communities are built through consistent effort, personal connection, and a willingness to stand with people in their daily challenges. Even today, I carry forward the lessons from this phase — staying accessible, grounded, and committed to serving people at the grassroots."
  },
  {
    year: "1993",
    title: "Early Foundation — RSS ITC & OTC",
    desc: "My journey of discipline, service, and nation-building began in 1993 when I actively participated in the activities of the Rashtriya Swayamsevak Sangh (RSS). During this time, I completed the Initial Training Camp (ITC) and later the First Year Officers Training Camp (OTC). This phase played a defining role in shaping my values and approach to public life. The training instilled in me a strong sense of discipline, responsibility, and commitment towards society. It taught me the importance of selfless service, teamwork, and leadership grounded in action rather than words. More importantly, it helped me understand the importance of staying connected to people at the grassroots level — listening, learning, and working alongside communities to address real issues. The principles and experiences from this period continue to guide me even today. They laid the foundation for my long-standing involvement in social work and public life, and shaped my belief that meaningful change comes from consistent effort, strong values, and a deep sense of responsibility towards society."
  }
];

const STATS = [
  { icon: <Users className="h-8 w-8 text-[#F7941D]" />, value: "200+", label: "Women Self help groups created" },
  { icon: <Handshake className="h-8 w-8 text-[#F7941D]" />, value: "1,821+", label: "Voters Connected (Tracking from Mar 1, 2026 – ∞)" },
  { icon: <Award className="h-8 w-8 text-[#F7941D]" />, value: "25+ Years", label: "Public and Political service" },
];

function MilestoneCard({ item, idx }: { item: any; idx: number }) {
  const [expanded, setExpanded] = useState(false);
  const words = item.desc.split(" ");
  const isLong = words.length > 50;
  const shortDesc = isLong ? words.slice(0, 50).join(" ") + "..." : item.desc;
  
  // Pick dynamic watermark image from the moments folder
  let watermarkImg = `/images/moments/moment-${idx + 12}.jpg`;
  if (idx === 2) {
    watermarkImg = `/images/moments/moment-5.jpg`; // Use a different, more relevant election image
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-4 border-[#F7941D] shadow z-20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <div className="w-2.5 h-2.5 bg-[#F7941D] rounded-full" />
      </div>
      
      <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] ml-4 md:ml-0 bg-gray-50 hover:bg-white border border-gray-100 hover:border-[#F7941D]/20 p-6 rounded-2xl shadow-sm transition-all hover:shadow-xl relative z-20">
        <div className="inline-block px-3 py-1 mb-3 rounded text-xs font-black tracking-widest bg-[#F7941D]/10 text-[#F7941D]">
          {item.year}
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{item.title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed transition-all">
          {expanded ? item.desc : shortDesc}
        </p>
        {isLong && (
          <button 
            onClick={() => setExpanded(!expanded)} 
            className="mt-4 text-[11px] font-extrabold uppercase tracking-widest text-[#F7941D] hover:text-[#e08419] flex items-center gap-1 transition-colors"
          >
            {expanded ? "READ LESS" : "SEE MORE"}
          </button>
        )}
      </div>

      {/* Accompanying image filling the opposite space */}
      <div className="hidden md:block absolute top-0 bottom-0 w-[calc(50%-3rem)] rounded-[2rem] overflow-hidden md:group-odd:left-0 md:group-even:right-0 pointer-events-none shadow-md transition-transform duration-700 group-hover:scale-[1.02]">
        <Image src={watermarkImg} alt="" fill className="object-cover" />
      </div>

    </motion.div>
  );
}

export function LegacySection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#journey") {
        setIsExpanded(true);
      }
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Show first 2 paragraphs when collapsed to keep the grid balanced with the image
  const initialSummary = MAIN_SUMMARY.slice(0, 2);
  const extendedSummary = MAIN_SUMMARY.slice(2);

  return (
    <section id="about" className="scroll-mt-24 bg-white py-16 lg:py-24" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Image + Main Summary */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div
              className="relative overflow-hidden rounded-lg shadow-lg"
              style={{ transform: "rotate(-2deg)" }}
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/Munirajwithmodi.png"
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
            
            {/* INITIAL SUMMARY ONLY */}
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#555555]">
              {initialSummary.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
            
            {/* KNOW MORE TOGGLE BUTTON */}
            {!isExpanded && (
              <button 
                onClick={() => setIsExpanded(true)}
                className="mt-8 flex items-center gap-2 rounded-md bg-[#F7941D] px-6 py-3 text-sm font-bold tracking-wide text-white transition-all hover:bg-[#e08419] hover:-translate-y-0.5 hover:shadow-lg"
              >
                KNOW MORE <ChevronDown className="h-4 w-4" />
              </button>
            )}
          </motion.div>
        </div>

        {/* EXPANDED SECTION: Rest of Summary + Journey Timeline */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {/* Highlight Stats Block */}
              <div id="journey" className="mt-10 lg:mt-16 mx-auto max-w-5xl border-t border-gray-100 pt-10 scroll-mt-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {STATS.map((stat, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                    >
                      <div className="flex justify-center mb-4">{stat.icon}</div>
                      <div className="text-3xl font-black text-gray-900 mb-2">{stat.value}</div>
                      <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Rest of the Summary paragraphs */}
              <div className="mt-16 space-y-5 text-base leading-relaxed text-[#555555] mx-auto max-w-4xl pt-6 text-center lg:text-left">
                {extendedSummary.map((para, idx) => (
                  <p 
                    key={idx} 
                    className={idx === extendedSummary.length - 1 ? "font-bold text-[#111111] text-xl text-center py-4" : ""}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Journey Milestones Timeline */}
              <div className="mt-20 mx-auto max-w-4xl border-t border-gray-100 pt-16">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-[#111111]">A Journey of <span className="text-[#F7941D]">Dedication</span></h3>
                  <p className="mt-2 text-gray-500 font-medium">Over 3 decades of active public life and service.</p>
                </div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-[#F7941D]/20 before:via-[#F7941D]/10 before:to-transparent">
                  {MILESTONES.map((item, idx) => (
                    <MilestoneCard key={item.year} item={item} idx={idx} />
                  ))}
                </div>
              </div>

              {/* Close Button */}
              <div className="mt-16 flex justify-center pb-8 border-b border-gray-100">
                <button
                  onClick={() => setIsExpanded(false)}
                  className="flex items-center gap-2 rounded-full border-2 border-[#F7941D] bg-transparent px-8 py-3 font-semibold text-[#F7941D] transition-all hover:bg-[#F7941D] hover:text-white"
                >
                  <ChevronUp className="h-4 w-4" /> READ LESS
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
