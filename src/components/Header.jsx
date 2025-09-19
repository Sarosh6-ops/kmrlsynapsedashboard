"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const linkCls =
  "relative rounded-md px-3 py-2 text-sm text-[#A0A0A0] hover:text-white transition-colors";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0A0A0A]/60">
      <div className="mx-auto flex h-14 items-center justify-between px-4">
        {/* Left nav */}
        <nav className="flex items-center gap-1">
          {[
            { href: "/dashboard", label: "Dashboard" },
            { href: "#", label: "Documents" },
            { href: "#", label: "Chat" },
            { href: "#", label: "Upload" },
          ].map((item, i) => (
            <motion.div key={item.label} whileHover={{ y: -1 }}>
              <Link href={item.href} className={linkCls}>
                <span className="relative">
                  {item.label}
                  <span className="pointer-events-none absolute -inset-1 -z-10 rounded-md opacity-0 blur transition-opacity group-hover:opacity-100" />
                </span>
                <span className="absolute inset-0 -z-10 rounded-md shadow-[0_0_0_0_rgba(0,245,212,0)] group-hover:shadow-[0_0_16px_0_rgba(0,245,212,0.18)]" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Right user */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group flex items-center gap-3 rounded-md border border-white/10 bg-[#0D0D0D] px-2.5 py-1.5 text-sm text-white shadow-[0_0_0_0_rgba(0,245,212,0)] hover:shadow-[0_0_18px_0_rgba(0,245,212,0.25)]"
        >
          <span className="grid h-7 w-7 place-items-center overflow-hidden rounded-full ring-1 ring-white/10">
            <img
              alt="Admin User"
              src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=140&auto=format&fit=crop"
              className="h-full w-full object-cover"
            />
          </span>
          <span className="hidden sm:block">Admin User</span>
          <ChevronDown className="h-4 w-4 text-[#A0A0A0] transition-transform group-hover:rotate-180" />
        </motion.button>
      </div>
    </header>
  );
}