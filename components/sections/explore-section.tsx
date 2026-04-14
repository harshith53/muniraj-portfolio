"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import { Calendar, MapPin, Bell, CheckCircle2, ArrowRight, Activity, Recycle, Map, ShieldCheck, Trees, HeartHandshake, GraduationCap, ChevronDown, ChevronUp } from "lucide-react";
import Image from "@/components/ui/image";

// --- DATA ---
const COMMUNITY_WORK = [
  { id: 1, title: "Attended Deen Dayal Upadhyay Prashikshna Workshop with Sarvagnanagar Karyakartas", desc: "Attended deen Dayal upadhyay Prashikshna workshop along with all Karyakartas of Sarvagnanagar constituency", date: "3 Apr 2026", category: "Party Activities" },
  { id: 2, title: "Civic issues discussion in OMBR Layout with RWA President Sri Shylesh", desc: "Had long discussion on Civic issues of OMBR Layout, Banaswadi ward with RWA President Sri Shylesh", date: "30 Mar 2026", category: "Jan Sampark", location: "Ombr" },
  { id: 3, title: "GBA Elections Preparatory Meeting by Corporation Wise", desc: "GBA elections preparatory meeting in corporation wise", date: "26 Mar 2026", category: "Party Activities", location: "Capitol hotel" },
  { id: 4, title: "Attended GBA Preparatory Meeting at Capital Hotel", desc: "Attended GBA preparatory meeting in the capital hotel ..", date: "26 Mar 2026", category: "Party Activities" },
  { id: 5, title: "Public Outreach: Visited 28 Houses, Reached Nearly 68 Voters in OMBR", desc: "Visited 28houses and reached nearly 68voters today in OMBR", date: "25 Mar 2026", category: "Jan Sampark", location: "OMBR Layout" },
  { id: 6, title: "Met about 258 voters in HRBR Layout; conducted voter verification", desc: "Met nearly 258voters in HRBR layout today and did voter verification", date: "25 Mar 2026", category: "Jan Sampark" },
  { id: 7, title: "Met 158 voters in Vijaya Bank Colony for voter verification", desc: "Met nearly 158voters today in Vijaya bank colony and did voter verification", date: "24 Mar 2026", category: "Jan Sampark" },
  { id: 8, title: "Met about 251 voters near Vijaya Bank Colony", desc: "Met nearly 251voters near and around Vijaya bank colony today", date: "23 Mar 2026", category: "Jan Sampark" },
  { id: 9, title: "Visited Approximately Eight Apartments to Discuss Voter Registration", desc: "Visited nearly 8apartments and discussed about voter registration and verification", date: "22 Mar 2026", category: "Jan Sampark" },
  { id: 10, title: "Attended Constituency Core Committee Meeting; Planned Activities and Prashikshana Prep", desc: "attended Constituency core committee meeting and discussed about organisational activities to be conducted for coming days and how to prepare for Coming Prashikshana to held", date: "21 Mar 2026", category: "Constituency Work" },
  { id: 11, title: "Tree-Fall Complaint on HRBR 100 Feet Road Resolved", desc: "Had a complaint of tree fall in HRBR 100 feet road called the forest department and got it cleared", date: "19 Mar 2026", category: "Constituency Work" },
  { id: 12, title: "Meeting at RO Office with All Party Pramukhs", desc: "RO Office meeting with all party Pramukhs", date: "18 Mar 2026", category: "Constituency Work" },
  { id: 13, title: "Reviewing Voter Shifting, Name Corrections, and New Voter Additions", desc: "Today checking the voters status who gave for shifting , Name Correction and new voters addition list", date: "17 Mar 2026", category: "Constituency Work" },
  { id: 14, title: "Visited Nearly 40 Houses in Banasawadi Village for Voter Verification", desc: "Visited nearly 40 houses today in Banasawadi village and did voter verification", date: "16 Mar 2026", category: "Jan Sampark" },
  { id: 15, title: "Met about 62 voters in OMBr layout today", desc: "Met nearly 62voters in OMBr layout today", date: "15 Mar 2026", category: "Jan Sampark" },
  { id: 16, title: "Attended SIR workshop for State BJP BLA 1", desc: "Today attended SIR work shop for State BJP BLA 1", date: "14 Mar 2026", category: "Party Activities" },
  { id: 17, title: "Met voters in OMBR layout; reached 167 voters today", desc: "Met voters in OMBR layout and reached nearly 167 voters today", date: "13 Mar 2026", category: "Jan Sampark" },
  { id: 18, title: "RO Constituency Discusses Voter Verification and Ward Mapping Issues", desc: "Let the constituency RO with the agenda of discussing the Voter verification for the new GBA voter list draft released .. discussed the issues with the proper mapping of voters missed in ward borders", date: "11 Mar 2026", category: "Party Activities" },
  { id: 19, title: "Met Senior Citizens Walking Team Near Bande Park, HRBR Layout", desc: "Met senior citizens walking team near Bande Park HRBR Layout", date: "10 Mar 2026", category: "Jan Sampark", location: "HRBR" },
  { id: 20, title: "Meeting Leaders for Blessings from Sri P C Mohan in Bangalore Central", desc: "Me and Annaya met along with Leaders took Blessings of Sri P C Mohan after Annaya Reciving SC Morcha President for Bangalore Central District", date: "5 Mar 2026", category: "Party Activities", location: "MP Office" },
  { id: 21, title: "Attended Deen Dayal Prashikshana Mahaabhiyan Training at BJP State Office", desc: "Attended Deen Dayal Prashikshana Mahaabhiyan training in BJP State office along with all state leaders ..", date: "5 Mar 2026", category: "Party Activities", location: "BJP State office" },
  { id: 22, title: "Attended Bengaluru Central District Office Bearers Meeting", desc: "Attended Bengaluru Central District office bearers meeting", date: "2 Mar 2026", category: "Party Activities", location: "Bjp Bangalore District office" },
  { id: 23, title: "Participated in Swachh Bharat Program in HRBR with BJP Karyakartas", desc: "Participated in Swachh Bharat program organised by GBA officials in HRBR along with our BJP Karyakartas of Banaswadi", date: "1 Mar 2026", category: "Seva & Relief Work", location: "HRBR" }
];

const ANNOUNCEMENTS = [
  {
    id: 1,
    title: "Voter Registration Drive — Let’s Get Ready",
    date: "7 Apr 2026",
    desc: `With the upcoming BBMP/GBA elections approaching, it is important that every eligible citizen in Banaswadi is registered and ready to vote.\n\nI invite all residents — especially first-time voters, newly shifted residents, and those needing corrections in their voter details — to connect with us for assistance.\n\nOur team will be organizing voter registration and correction drives across the ward to ensure no voice is left out:\n• New voter registration\n• Address change / constituency transfer\n• Corrections in voter ID details\n\nIf you or someone in your family needs support with voter registration, please reach out through this platform or visit our help desk during the drive.\n\nYour vote is your voice. Let’s ensure Banaswadi is fully represented.\n\n— K. Muniraj Karnik.`
  }
];

const PLANS = [
  {
    id: 1,
    icon: <Recycle className="w-8 h-8 text-white" />,
    title: "Clean & Well-Maintained Banaswadi",
    desc: "Cleanliness is the foundation of a healthy community.",
    bullets: [
      "Strengthen daily waste collection and segregation",
      "Eliminate garbage black spots permanently",
      "Improve drainage systems to prevent waterlogging",
      "Regular monitoring of sanitation across all streets"
    ]
  },
  {
    id: 2,
    icon: <Map className="w-8 h-8 text-white" />,
    title: "Roads, Infrastructure & Traffic",
    desc: "Better infrastructure directly improves daily life.",
    bullets: [
      "Repair and maintain internal roads and main stretches",
      "Fix footpaths for safe pedestrian movement",
      "Improve street lighting across all areas",
      "Work with authorities to reduce traffic congestion points"
    ]
  },
  {
    id: 3,
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: "Safety & Crime-Free Neighbourhoods",
    desc: "Every resident should feel safe at all times.",
    bullets: [
      "Increase CCTV coverage in key areas",
      "Improve street lighting in vulnerable zones",
      "Work closely with local police for faster response",
      "Community-driven safety initiatives"
    ]
  },
  {
    id: 4,
    icon: <Trees className="w-8 h-8 text-white" />,
    title: "Environment & Community Spaces",
    desc: "A better future requires sustainable development.",
    bullets: [
      "Develop and maintain parks and open spaces",
      "Tree plantation drives across the ward",
      "Promote eco-friendly practices and awareness",
      "Create spaces for community activities and engagement"
    ]
  },
  {
    id: 5,
    icon: <HeartHandshake className="w-8 h-8 text-white" />,
    title: "Senior Citizens Support",
    desc: "Caring for our senior citizens is a responsibility we must prioritize. I plan to establish a dedicated 24/7 senior citizens helpline.",
    bullets: [
      "Build a responsive local support network",
      "Provide assistance during emergencies and urgent needs",
      "Ensure regular follow-ups for vulnerable residents",
      "Create a dependable point of contact"
    ]
  },
  // Added requested 6th plan
  {
    id: 6,
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    title: "Youth Education & Skilling",
    desc: "Focusing on the overall development of youth to create tomorrow's leaders.",
    bullets: [
      "Upgrade local playgrounds and sports infrastructure",
      "Organize regular job fairs and skill development camps",
      "Set up mentorship programs with industry professionals",
      "Enhance digital literacy programs across all areas"
    ]
  }
];

const TABS = [
  { id: "community", label: "Community Work" },
  { id: "announcements", label: "Announcements" },
  { id: "plans", label: "Upcoming Plans" },
];

const ACTIVITY_FILTERS = ["All", "Jan Sampark", "Party Activities", "Constituency Work", "Seva & Relief Work"];

// --- COMPONENTS ---

export function ExploreSection() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  return (
    <section className="py-24 bg-[#F7941D] relative overflow-hidden" id="explore">
      {/* Background Watermark */}
      <div 
        className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[60%] select-none opacity-[0.15]" 
        aria-hidden="true"
      >
        <Image
          src="/Muniraj /muniraj-bg-2.png"
          alt=""
          fill
          priority
          className="object-cover lg:object-contain object-right grayscale"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70 mb-4">
            Discover
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Explore Initiatives
          </h2>
          <p className="mt-4 text-white/90 font-medium max-w-2xl mx-auto">
            Stay updated with recent activities, ongoing announcements, and our vision for the future of the constituency.
          </p>
        </div>

        {/* Main Tabs Navigation */}
        <div className="flex justify-start md:justify-center mb-12 overflow-x-auto no-scrollbar pb-2 mx-[-1rem] px-[1rem] md:mx-0 md:px-0">
          <div className="bg-white/10 p-1.5 rounded-[2rem] shadow-lg backdrop-blur-md border border-white/20 flex items-center justify-start md:justify-center w-max min-w-min">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-5 py-2.5 md:px-8 md:py-3 rounded-full text-sm font-bold transition-colors
                    ${isActive ? "text-[#F7941D]" : "text-white/80 hover:text-white"}
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="explore-active-tab"
                      className="absolute inset-0 bg-white rounded-full shadow-md"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "community" && <CommunityWorkView />}
              {activeTab === "announcements" && <AnnouncementsView />}
              {activeTab === "plans" && <UpcomingPlansView />}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

// --- TAB VIEWS ---

function CommunityWorkView() {
  const [filter, setFilter] = useState("All");
  const [isExpanded, setIsExpanded] = useState(false);

  // Reset expansion when filter changes
  useEffect(() => {
    setIsExpanded(false);
  }, [filter]);

  const filteredData = useMemo(() => {
    if (filter === "All") return COMMUNITY_WORK;
    return COMMUNITY_WORK.filter((item) => item.category === filter);
  }, [filter]);

  const displayedData = isExpanded ? filteredData : filteredData.slice(0, 5);
  const hasMore = filteredData.length > 5;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Container: Glassmorphism effect matches orange bg */}
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-2xl border border-white/20">
        
        {/* Header & Sub-filter */}
        <div className="mb-10 flex flex-col items-center border-b border-white/20 pb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="bg-white/20 p-2.5 rounded-xl">
              <Activity className="w-5 h-5 text-white" />
            </div>
            Recent Activities
            <span className="text-xs tracking-wider font-bold bg-white text-[#F7941D] px-3 py-1.5 rounded-full ml-auto shadow-md">
              {filteredData.length} entries
            </span>
          </h3>

          {/* Activity Sub-Filter */}
          <div className="flex overflow-x-auto gap-2 justify-start md:justify-center w-full pb-2 no-scrollbar px-1 snap-x">
            {ACTIVITY_FILTERS.map((fName) => (
              <button
                key={fName}
                onClick={() => setFilter(fName)}
                className={`snap-center flex-shrink-0 whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                  filter === fName 
                    ? "bg-white text-[#F7941D] border-white shadow-md shadow-white/20" 
                    : "bg-white/5 text-white/80 border-white/20 hover:bg-white/20 hover:text-white"
                }`}
              >
                {fName}
              </button>
            ))}
          </div>
        </div>
        
        {/* Feed Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-white/40 before:via-white/20 before:to-transparent">
          <AnimatePresence>
            {displayedData.length === 0 && (
              <p className="text-center text-white/50 py-10 w-full animate-fade-in relative z-10 font-bold tracking-wide">
                No activities found for this category.
              </p>
            )}
            {displayedData.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Timeline marker */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#F7941D] bg-white shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2.5 h-2.5 bg-[#F7941D] rounded-full" />
                </div>

                {/* Content Card (Glass effect) */}
                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-white/10 backdrop-blur-md p-5 md:p-6 pb-7 rounded-2xl shadow-xl shadow-black/5 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F7941D] bg-white px-2.5 py-1 rounded-md shadow-sm">
                      {item.category}
                    </span>
                  </div>
                  
                  <h4 className="text-base md:text-lg font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-sm text-white/80 mb-4 leading-relaxed font-medium">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-white/70 mt-auto pt-4 border-t border-white/20">
                    <span className="flex items-center gap-1.5 bg-black/10 px-2 py-1 rounded-md shadow-inner">
                      <Calendar className="w-3.5 h-3.5 text-white/60" />
                      {item.date}
                    </span>
                    {item.location && (
                      <span className="flex items-center gap-1.5 bg-black/10 px-2 py-1 rounded-md shadow-inner">
                        <MapPin className="w-3.5 h-3.5 text-white/60" />
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More / View Less Toggle */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-full border border-white/20 transition-all shadow-lg hover:shadow-xl"
            >
              {isExpanded ? (
                <>Read Less <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>View All {filteredData.length} Activities <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function AnnouncementsView() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {ANNOUNCEMENTS.map((item) => (
        <div key={item.id} className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30 relative overflow-hidden">
          {/* Subtle glow internally to distinguish from standard orange */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full shadow-md shadow-red-500/30">
                <Bell className="w-5 h-5 fill-white" />
              </span>
              <span className="text-sm font-bold uppercase tracking-wider text-white">
                Important Alert
              </span>
              <span className="text-sm font-bold text-white/80 ml-auto flex items-center gap-1.5 bg-black/10 px-3 py-1.5 rounded-full shadow-inner">
                <Calendar className="w-4 h-4 text-white/60" />
                {item.date}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight drop-shadow-md">
              {item.title}
            </h3>

            <div className="space-y-4 text-white/90 leading-relaxed font-medium">
              {item.desc.split("\n").map((paragraph, i) => {
                if (!paragraph.trim()) return <br key={i} />;
                return (
                  <p key={i} className={paragraph.startsWith("•") ? "pl-4 font-bold text-white drop-shadow-sm" : ""}>
                    {paragraph}
                  </p>
                );
              })}
            </div>

            <button className="mt-8 bg-white hover:bg-gray-50 text-[#F7941D] font-bold py-3.5 px-8 rounded-full flex items-center gap-2 transition-transform hover:scale-105 shadow-xl shadow-black/10">
              Get Support Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function UpcomingPlansView() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PLANS.map((plan) => (
          <div 
            key={plan.id}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl shadow-black/5 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
          >
            <div className="mb-6 bg-white/10 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 group-hover:bg-white/20 transition-all border border-white/10 shadow-inner">
              {plan.icon}
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 leading-snug drop-shadow-sm">
              {plan.title}
            </h3>
            
            <p className="text-white/80 mb-6 text-sm font-medium leading-relaxed">
              {plan.desc}
            </p>

            <ul className="space-y-3 mt-auto pt-6 border-t border-white/20">
              {plan.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-white/90 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span className="leading-tight drop-shadow-sm">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
