"use client";

import { motion } from "framer-motion";
import { IdCard, BadgeCheck } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProfileCard() {
  return (
    <motion.section
      variants={cardVariants}
      initial="hidden"
      animate="show"
      className="relative overflow-hidden rounded-xl border border-white/10 bg-[#111111] p-4 sm:p-5 shadow-[0_0_0_0_rgba(0,245,212,0)] hover:shadow-[0_0_28px_0_rgba(0,245,212,0.15)] transition-shadow"
    >
      <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-transparent to-[#00F5D4]/5 pointer-events-none" />
      <div className="relative flex items-center justify-between gap-4">
        {/* Left */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-[#00F5D4] opacity-20 blur" />
            <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-[#00F5D4]/40">
              <img
                alt="Rajesh Kumar"
                src="https://images.unsplash.com/photo-1603415526960-f7e0328d13e8?q=80&w=140&auto=format&fit=crop"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-semibold text-white">Rajesh Kumar</h3>
              <BadgeCheck className="h-4 w-4 text-[#00F5D4]" />
            </div>
            <p className="text-sm text-[#A0A0A0]">Senior Document Analyst</p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#0c0c0c] px-2 py-0.5 text-xs text-white">
                <IdCard className="h-3 w-3 text-[#00F5D4]" /> ID: KMRL2024001
              </span>
              <span className="inline-flex rounded-full border border-white/10 bg-[#0c0c0c] px-2 py-0.5 text-xs text-white">Operations</span>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="text-right">
          <p className="text-3xl font-bold tracking-tight text-white">47</p>
          <p className="text-xs text-[#A0A0A0]">Documents</p>
        </div>
      </div>
    </motion.section>
  );
}