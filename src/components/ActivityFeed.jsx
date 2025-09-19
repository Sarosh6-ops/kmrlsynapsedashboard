"use client";

import { motion } from "framer-motion";
import { Clock3, CheckCircle2, UploadCloud, MessageSquare, FileText, Sparkles } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.4 } },
};

const activities = [
  {
    icon: UploadCloud,
    title: "Uploaded 'Metro Expansion Plan – Phase II'",
    time: "2 minutes ago",
  },
  { icon: CheckCircle2, title: "Processed 12 new documents", time: "12 minutes ago" },
  { icon: FileText, title: "Reviewed 'Safety SOPs – Station Operations'", time: "1 hour ago" },
  { icon: MessageSquare, title: "AI chat summary generated", time: "3 hours ago" },
  { icon: Sparkles, title: "Insight: Pending reviews trending down 18%", time: "Yesterday" },
];

export default function ActivityFeed() {
  return (
    <section className="relative overflow-hidden rounded-xl border border-white/10 bg-[#111111] p-4">
      <div className="absolute inset-px rounded-[10px] bg-gradient-to-b from-transparent to-[#00F5D4]/5 pointer-events-none" />
      <div className="relative">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">Recent Activity</h3>
          <Clock3 className="h-4 w-4 text-[#A0A0A0]" />
        </div>
        <motion.ul variants={container} initial="hidden" animate="show" className="space-y-2">
          {activities.map((a, i) => (
            <motion.li
              key={i}
              variants={item}
              className="group flex items-start gap-3 rounded-lg border border-white/10 bg-[#0D0D0D] p-3 shadow-[0_0_0_0_rgba(0,245,212,0)] transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-[0_0_22px_0_rgba(0,245,212,0.18)]"
            >
              <span className="relative mt-0.5">
                <span className="absolute -inset-2 rounded-full opacity-0 blur-md transition-opacity group-hover:opacity-40" style={{ background: "radial-gradient(ellipse at center, rgba(0,245,212,0.25), transparent 60%)" }} />
                <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-[#0b0b0b]">
                  <a.icon className="h-4 w-4 text-[#00F5D4]" />
                </span>
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm text-white">{a.title}</p>
                <p className="text-[11px] text-[#A0A0A0]">{a.time}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}