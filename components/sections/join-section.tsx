"use client";

import Image from "@/components/ui/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Lightbulb, Camera, Paperclip, MapPin, Search, CheckCircle2, Copy, Send, Activity, Clock, ShieldCheck, Check, Mail, Phone, Quote } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function JoinSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  // Tab State
  const [activeTab, setActiveTab] = useState<"submit" | "track">("submit");
  
  // -- Submit State --
  const [suggestion, setSuggestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successCode, setSuccessCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // -- Track State --
  const [trackCode, setTrackCode] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [trackResult, setTrackResult] = useState<"received" | "reviewed" | "action" | "resolved" | null>(null);

  // Handlers
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestion.trim()) {
      toast.error("Please describe your suggestion first.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      const charSet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
      let code = "MK-";
      for(let i=0; i<6; i++) code += charSet.charAt(Math.floor(Math.random() * charSet.length));
      
      setSuccessCode(code);
      setIsSubmitting(false);
      setSuggestion("");
      toast.success("Suggestion successfully submitted!");
    }, 1200);
  };

  const handleCopy = () => {
    if (!successCode) return;
    navigator.clipboard.writeText(successCode);
    setCopied(true);
    toast.success("Code copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackCode.trim()) {
      toast.error("Please enter an access code.");
      return;
    }

    setIsTracking(true);
    setTrackResult(null);

    // Simulate database lookup
    setTimeout(() => {
      // Mock random status logic based on code length/value
      const statuses: Array<"received" | "reviewed" | "action" | "resolved"> = ["received", "reviewed", "action", "resolved"];
      const randomStatus = statuses[trackCode.length % 4];
      
      setTrackResult(randomStatus);
      setIsTracking(false);
      
      if (trackCode.length < 5) {
        toast.error("Invalid access code pattern.");
        setTrackResult(null);
      }
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-white py-16 lg:py-24 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Texture */}
      <div className="absolute inset-0 bg-slate-50 opacity-50 z-0" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#F7941D]/5 to-transparent z-0" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-[#F7941D]/10 rounded-full mb-4">
            <Lightbulb className="size-8 sm:size-10 text-[#F7941D]" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-[#111111] sm:text-4xl md:text-5xl">
            Your Voice Matters
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#555555] max-w-2xl mx-auto">
            Share your grassroots concerns, track existing suggestions, and hold us accountable. Every voice shapes Banaswadi's future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5"
        >
          <div className="grid lg:grid-cols-[45%_55%]">
            {/* Left Side: Visual Connect Hub & Quote */}
            <div className="relative overflow-hidden bg-[#F7941D] p-10 text-white sm:p-12 lg:p-14">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/bg-photo.png"
                  alt=""
                  fill
                  className="object-contain object-left-bottom opacity-[0.22] grayscale mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#F7941D] via-[#F7941D]/90 to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="space-y-6">
                  <Quote className="size-10 text-white/40" />
                  <blockquote className="space-y-4">
                    <p className="font-heading text-2xl font-bold leading-tight sm:text-3xl">
                      "No guns but only brotherhood can resolve the problems."
                    </p>
                    <footer className="text-lg font-medium text-white/80">
                      — Atal Bihari Vajpayee
                    </footer>
                  </blockquote>
                </div>

                <p className="mt-8 max-w-sm text-base leading-relaxed text-white/95 border-l-2 border-white/20 pl-4">
                  Muniraj is here to listen. Share your concerns, community problems, or personal 
                  queries directly for swift attention and resolution.
                </p>

                <div className="mt-16 flex flex-col gap-4 pt-8 text-sm font-medium border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <Mail className="size-5 shrink-0 text-white/80" />
                    <a href="mailto:munirajkarnikbjp@gmail.com" className="hover:underline">
                      munirajkarnikbjp@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="size-5 shrink-0 text-white/80" />
                    <a href="tel:+91944851264" className="hover:underline">
                      +91 944851264 / 789268717
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Tabbed Form */}
            <div className="flex flex-col bg-white">
              {/* Tab Headers */}
              <div className="flex border-b border-gray-100 bg-gray-50/50">
            <button
              onClick={() => setActiveTab("submit")}
              className={cn(
                "flex-1 py-5 px-4 text-center text-sm sm:text-base font-bold transition-all relative",
                activeTab === "submit" ? "text-[#F7941D]" : "text-gray-500 hover:text-gray-900"
              )}
            >
              Submit Suggestion
              {activeTab === "submit" && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-[#F7941D]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("track")}
              className={cn(
                "flex-1 py-5 px-4 text-center text-sm sm:text-base font-bold transition-all relative",
                activeTab === "track" ? "text-[#F7941D]" : "text-gray-500 hover:text-gray-900"
              )}
            >
              My Suggestions
              {activeTab === "track" && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-[#F7941D]" />
              )}
            </button>
          </div>

          <div className="p-6 sm:p-10 lg:p-12 min-h-[400px]">
            <AnimatePresence mode="wait">
              {/* === SUBMIT TAB === */}
              {activeTab === "submit" && (
                <motion.div
                  key="submit"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {!successCode ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-3">
                        <label className="text-lg font-bold text-[#111111]">What's on your mind?</label>
                        <Textarea
                          placeholder="Describe your suggestion or infrastructure issue in detail..."
                          className="min-h-[160px] text-base resize-y border-slate-200 focus-visible:ring-[#F7941D] bg-slate-50/50 p-4"
                          value={suggestion}
                          onChange={(e) => setSuggestion(e.target.value)}
                        />
                      </div>

                      {/* Mock Attachment Bar */}
                      <div className="flex flex-wrap items-center gap-3">
                        <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:border-[#F7941D] hover:text-[#F7941D] transition-all">
                          <Paperclip className="size-4" /> Photo
                          <input type="file" accept="image/*" className="hidden" />
                        </label>
                        <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:border-[#F7941D] hover:text-[#F7941D] transition-all">
                          <Camera className="size-4" /> Camera
                          <input type="file" accept="image/*" capture="environment" className="hidden" />
                        </label>
                        <button type="button" onClick={() => {
                          if (navigator.geolocation) {
                            toast.loading("Locating...", { id: "geo" });
                            navigator.geolocation.getCurrentPosition(
                              () => toast.success("Location attached successfully!", { id: "geo" }),
                              () => toast.error("Location access denied.", { id: "geo" })
                            );
                          }
                        }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:border-[#F7941D] hover:text-[#F7941D] transition-all">
                          <MapPin className="size-4" /> Location
                        </button>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting || !suggestion.trim()}
                        className="w-full h-14 mt-6 bg-[#F7941D] text-white text-lg font-bold hover:bg-[#e08419] transition-all shadow-lg hover:shadow-xl group"
                      >
                        {isSubmitting ? "Submitting securely..." : (
                          <span className="flex items-center gap-2">
                            Submit Suggestion <Send className="size-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </span>
                        )}
                      </Button>
                    </form>
                  ) : (
                    // Success State
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8 space-y-6"
                    >
                      <div className="inline-flex justify-center items-center size-20 rounded-full bg-green-100 border-4 border-green-50 mb-4">
                        <CheckCircle2 className="size-10 text-green-600" />
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Suggestion Received!</h3>
                        <p className="mt-2 text-gray-500 max-w-sm mx-auto">
                          Thank you for speaking up. Keep this access code safe to track the status of your suggestion.
                        </p>
                      </div>

                      <div className="mt-6 flex flex-col items-center gap-3">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Your Access Code</p>
                        <div className="group relative flex items-center gap-4 bg-slate-100 border border-slate-200 px-6 py-4 rounded-xl">
                          <span className="font-mono text-3xl font-black tracking-widest text-[#F7941D]">{successCode}</span>
                          <button 
                            onClick={handleCopy}
                            className="p-2 border border-slate-300 rounded-lg hover:bg-white hover:text-[#F7941D] transition-all"
                            title="Copy Code"
                          >
                            {copied ? <Check className="size-5 text-green-600" /> : <Copy className="size-5" />}
                          </button>
                        </div>
                      </div>

                      <Button
                        onClick={() => {
                          setTrackCode(successCode);
                          setActiveTab("track");
                          setSuccessCode(null);
                        }}
                        className="mt-8 bg-transparent text-[#F7941D] font-bold hover:bg-[#F7941D]/10"
                      >
                        Track Status Now →
                      </Button>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* === TRACK TAB === */}
              {activeTab === "track" && (
                <motion.div
                  key="track"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <form onSubmit={handleTrack} className="space-y-6">
                    <div className="space-y-3">
                      <label className="text-lg font-bold text-[#111111]">Access Code</label>
                      <p className="text-sm text-gray-500 pb-2">Enter the code shared with you after submitting a suggestion.</p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Input
                          placeholder="e.g. MK-8A9X2"
                          value={trackCode}
                          onChange={(e) => setTrackCode(e.target.value.toUpperCase())}
                          className="h-14 font-mono text-lg uppercase px-4 border-2 border-slate-200 focus-visible:ring-0 focus-visible:border-[#F7941D]"
                        />
                        <Button
                          type="submit"
                          disabled={isTracking || !trackCode.trim()}
                          className="h-14 px-8 bg-[#111111] text-white font-bold hover:bg-black transition-all"
                        >
                          {isTracking ? "Locating..." : "Track Status"}
                        </Button>
                      </div>
                    </div>
                  </form>

                  {/* Tracker Result Timeline Placeholder */}
                  {trackResult && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-12 border-t border-slate-100 pt-10"
                    >
                      <h4 className="font-bold text-gray-900 mb-8 flex items-center justify-between">
                        <span>Status for: <span className="font-mono text-[#F7941D]">{trackCode}</span></span>
                        <span className="text-xs font-semibold px-3 py-1 bg-slate-100 rounded-full text-slate-500 uppercase tracking-wider">Live</span>
                      </h4>

                      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[22px] before:h-full before:w-0.5 before:bg-slate-200">
                        {/* Status 1: Received */}
                        <div className={cn("relative flex items-center md:items-start group transition-opacity", trackResult ? "opacity-100" : "opacity-40")}>
                          <div className={cn("flex items-center justify-center w-11 h-11 rounded-full border-4 shadow-sm z-10 shrink-0 bg-white transition-colors", 
                            "border-green-500 text-green-600"
                          )}>
                            <Clock className="w-5 h-5" />
                          </div>
                          <div className="ml-6">
                            <h5 className="text-lg font-bold text-gray-900">Suggestion Received</h5>
                            <p className="text-sm text-gray-500 mt-1">Safely logged into our grassroots tracking system.</p>
                          </div>
                        </div>

                        {/* Status 2: Reviewed */}
                        <div className={cn("relative flex items-center md:items-start group transition-opacity", 
                          ["reviewed", "action", "resolved"].includes(trackResult) ? "opacity-100" : "opacity-40 grayscale"
                        )}>
                          <div className={cn("flex items-center justify-center w-11 h-11 rounded-full border-4 shadow-sm z-10 shrink-0 bg-white transition-colors", 
                            ["reviewed", "action", "resolved"].includes(trackResult) ? "border-[#F7941D] text-[#F7941D]" : "border-slate-300 text-slate-400"
                          )}>
                            <ShieldCheck className="w-5 h-5" />
                          </div>
                          <div className="ml-6">
                            <h5 className="text-lg font-bold text-gray-900">Under Review</h5>
                            <p className="text-sm text-gray-500 mt-1">Muniraj's core team is evaluating the details.</p>
                          </div>
                        </div>

                        {/* Status 3: Action Taken */}
                        <div className={cn("relative flex items-center md:items-start group transition-opacity", 
                          ["action", "resolved"].includes(trackResult) ? "opacity-100" : "opacity-40 grayscale"
                        )}>
                          <div className={cn("flex items-center justify-center w-11 h-11 rounded-full border-4 shadow-sm z-10 shrink-0 bg-white transition-colors", 
                             ["action", "resolved"].includes(trackResult) ? "border-blue-500 text-blue-600" : "border-slate-300 text-slate-400"
                          )}>
                            <Activity className="w-5 h-5" />
                          </div>
                          <div className="ml-6">
                            <h5 className="text-lg font-bold text-gray-900">Action in Progress</h5>
                            <p className="text-sm text-gray-500 mt-1">Ground operations or civic requests have been initiated.</p>
                          </div>
                        </div>

                        {/* Status 4: Resolved */}
                        <div className={cn("relative flex items-center md:items-start group transition-opacity", 
                          ["resolved"].includes(trackResult) ? "opacity-100" : "opacity-40 grayscale"
                        )}>
                          <div className={cn("flex items-center justify-center w-11 h-11 rounded-full border-4 shadow-sm z-10 shrink-0 bg-white transition-colors", 
                            ["resolved"].includes(trackResult) ? "border-green-600 text-green-600" : "border-slate-300 text-slate-400"
                          )}>
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <div className="ml-6">
                            <h5 className="text-lg font-bold text-gray-900">Resolved</h5>
                            <p className="text-sm text-gray-500 mt-1">This query has been successfully handled and closed.</p>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
