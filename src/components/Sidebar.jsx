"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Upload,
  Clock3,
  AlertCircle,
  BrainCircuit,
  Settings,
  Bot,
} from "lucide-react";
import Link from "next/link";

const linkVariants = {
  initial: { opacity: 0, y: 8 },
  animate: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i, ease: "easeOut", duration: 0.35 } }),
};

export const Sidebar = () => {
  const NavLink = ({ href = "#", icon: Icon, label, active = false, index, pill }) => (
    <motion.div
      custom={index}
      variants={linkVariants}
      initial="initial"
      animate="animate"
    >
      <Link
        href={href}
        className={`group flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
          active ? "text-[#00F5D4] bg-[#0d0d0d]" : "text-[#A0A0A0] hover:text-white hover:bg-[#0f0f0f]"
        }`}
      >
        <motion.span
          whileHover={{ rotate: 6, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`grid h-8 w-8 place-items-center rounded-md border ${
            active ? "border-[#00F5D4]/50 bg-[#0b0b0b]" : "border-white/10 bg-[#0b0b0b] group-hover:border-[#00F5D4]/40"
          } shadow-[0_0_0_0_rgba(0,245,212,0)] group-hover:shadow-[0_0_20px_0_rgba(0,245,212,0.25)] transition-shadow`}
        >
          <Icon className={`h-4 w-4 ${active ? "text-[#00F5D4]" : "text-white"}`} />
        </motion.span>
        <span className={`flex-1 ${active ? "text-[#00F5D4]" : "group-hover:text-white"}`}>{label}</span>
        {pill ? (
          <span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-xs text-white">{pill}</span>
        ) : null}
      </Link>
    </motion.div>
  );

  return (
    <aside className="relative hidden lg:flex h-dvh flex-col gap-6 border-r border-white/10 bg-[#111111] px-4 py-6">
      {/* Brand */}
      <div className="flex items-center gap-2 px-2">
        <div className="relative">
          <div className="absolute -inset-1 rounded-md bg-[#00F5D4] opacity-20 blur-md" />
          <div className="relative grid h-9 w-9 place-items-center rounded-md bg-[#0b0b0b] ring-1 ring-[#00F5D4]/40">
            <Bot className="h-5 w-5 text-[#00F5D4]" />
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-white/70">KMRL Synapse</p>
          <p className="-mt-0.5 text-xs text-[#A0A0A0]">Intelligence Hub</p>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        <div>
          <p className="mb-2 px-2 text-[10px] uppercase tracking-wider text-[#A0A0A0]">Navigation</p>
          <nav className="space-y-1">
            <NavLink href="/dashboard" icon={LayoutDashboard} label="Dashboard" active index={0} />
            <NavLink href="#" icon={FileText} label="Document Viewer" index={1} />
            <NavLink href="#" icon={MessageSquare} label="Chat Interface" index={2} />
            <NavLink href="#" icon={Upload} label="Upload Documents" index={3} />
          </nav>
        </div>
        <div>
          <p className="mb-2 px-2 text-[10px] uppercase tracking-wider text-[#A0A0A0]">Quick Actions</p>
          <nav className="space-y-1">
            <NavLink href="#" icon={Clock3} label="Recent Documents" pill="12" index={4} />
            <NavLink href="#" icon={AlertCircle} label="Pending Reviews" pill="3" index={5} />
            <NavLink href="#" icon={BrainCircuit} label="AI Insights" pill="8" index={6} />
          </nav>
        </div>
      </div>

      <div className="mt-auto space-y-2">
        <div className="flex items-center gap-2 rounded-md border border-white/10 bg-[#0f0f0f] px-3 py-2 text-sm text-[#A0A0A0]">
          <span className="relative mr-1 inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          AI Assistant: <span className="ml-1 text-white">Online</span>
        </div>
        <Link href="#" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-[#A0A0A0] hover:bg-[#0f0f0f] hover:text-white">
          <Settings className="h-4 w-4" /> Settings
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;