"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Quote } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const joinSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(10, "Enter a valid phone number"),
  area: z.string().min(2, "Tell us your area"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type JoinForm = z.infer<typeof joinSchema>;

export function JoinSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const form = useForm<JoinForm>({
    resolver: zodResolver(joinSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      area: "",
      message: "",
    },
  });

  function onSubmit(data: JoinForm) {
    toast.success("Thank you! Your query has been submitted.", {
      description: `We have received your message, ${data.fullName}.`,
    });
    form.reset();
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-white py-16 lg:py-24"
      ref={ref}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
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
                    <a href="mailto:aaavenger@munirajkarnik.com" className="hover:underline">
                      aaavenger@munirajkarnik.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="size-5 shrink-0 text-white/80" />
                    <a href="tel:+919767648210" className="hover:underline">
                      +91 97676 48210
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Heading & Form */}
            <div className="p-10 sm:p-12 lg:p-14">
              <div className="mb-10">
                <h2 className="font-heading text-2xl font-bold text-[#111111] sm:text-3xl">
                  Share Your Queries & Issues.
                </h2>
                <div className="mt-2 h-1 w-20 bg-[#F7941D]" />
              </div>

              <form
                className="flex flex-col gap-6"
                onSubmit={form.handleSubmit(onSubmit)}
                noValidate
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-bold text-[#111111]">
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      autoComplete="name"
                      placeholder="Your full name"
                      className="h-11 border-slate-200 focus-visible:ring-[#F7941D]"
                      {...form.register("fullName")}
                    />
                    {form.formState.errors.fullName && (
                      <p className="text-xs text-red-600">{form.formState.errors.fullName.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-bold text-[#111111]">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Phone number"
                      className="h-11 border-slate-200 focus-visible:ring-[#F7941D]"
                      {...form.register("phone")}
                    />
                    {form.formState.errors.phone && (
                      <p className="text-xs text-red-600">{form.formState.errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="area" className="text-sm font-bold text-[#111111]">
                    Your Area
                  </Label>
                  <Input
                    id="area"
                    placeholder="Ward / Locality"
                    className="h-11 border-slate-200 focus-visible:ring-[#F7941D]"
                    {...form.register("area")}
                  />
                  {form.formState.errors.area && (
                    <p className="text-xs text-red-600">{form.formState.errors.area.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-bold text-[#111111]">
                    Describe Your Query or Issue
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about the problem or query you'd like to share..."
                    className="min-h-[140px] border-slate-200 focus-visible:ring-[#F7941D]"
                    {...form.register("message")}
                  />
                  {form.formState.errors.message && (
                    <p className="text-xs text-red-600">{form.formState.errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="mt-2 h-12 w-full bg-[#111111] text-base font-bold text-white transition-all hover:bg-black active:scale-[0.98]"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Submitting..." : "SUBMIT QUERY"}
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
