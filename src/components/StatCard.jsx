"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Files, Cpu, Loader, UploadCloud, HardDrive } from "lucide-react";

/*
  StatCard with:
  - Count-up animation for numeric values
  - Hover lift + teal glow
  - Icon is selected by name (string) to avoid passing functions from Server → Client
*/
export default function StatCard({ title, value, trend, icon, progress, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  // Map string -> icon component (client-side only)
  const IconMap = { files: Files, cpu: Cpu, loader: Loader, uploadcloud: UploadCloud, harddrive: HardDrive };
  const IconComp = icon ? IconMap[String(icon).toLowerCase().replace(/\s+/g, "")] : null;

  // Extract number for counting (handles formats like "4,812", "64.3")
  const numeric = typeof value === "number" ? value : parseFloat(String(value).replace(/[^0-9.]/g, "")) || 0;

  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (latest) => {
    // Keep one decimal if original had decimal
    const hasDecimal = /\./.test(String(value));
    return hasDecimal ? latest.toFixed(1) : Math.round(latest).toLocaleString();
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(mv, numeric, { duration: 1.2, ease: "easeOut", delay });
      return controls.stop;
    }
  }, [isInView, mv, numeric, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#111111] p-4 shadow-[0_0_0_0_rgba(0,245,212,0)] transition-[box-shadow,transform] hover:-translate-y-1 hover:shadow-[0_0_28px_0_rgba(0,245,212,0.18)]"
    >
      <div className="pointer-events-none absolute inset-px rounded-[10px] bg-gradient-to-b from-transparent to-[#00F5D4]/5" />
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-[#A0A0A0]">{title}</p>
          <div className="mt-1 flex items-baseline gap-2">
            <p className="text-2xl font-semibold tracking-tight text-white">
              {/* If value contains non-numeric suffix like GB, append it visually */}
              {isFinite(numeric) ? (
                <span>
                  <motion.span>{rounded}</motion.span>
                  {String(value).match(/(GB|MB|%|\+|\s)/) ? (
                    <span className="ml-1 text-sm text-white/80">{String(value).replace(/[0-9.,\s]*/,'')}</span>
                  ) : null}
                </span>
              ) : (
                value
              )}
            </p>
          </div>
          {trend ? <p className="mt-1 text-xs text-[#A0A0A0]">{trend}</p> : null}
          {typeof progress === "number" ? (
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
                transition={{ delay: delay + 0.1, duration: 0.6, ease: "easeOut" }}
                className="h-full bg-[#00F5D4] shadow-[0_0_16px_0_rgba(0,245,212,0.45)]"
              />
            </div>
          ) : null}
        </div>
        {IconComp ? (
          <div className="relative">
            <div className="absolute -inset-2 rounded-lg opacity-0 blur-md transition-opacity group-hover:opacity-40" style={{ background: "radial-gradient(ellipse at center, rgba(0,245,212,0.25), transparent 60%)" }} />
            <div className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-[#0b0b0b] text-white">
              <IconComp className="h-5 w-5 text-[#00F5D4]" />
            </div>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}