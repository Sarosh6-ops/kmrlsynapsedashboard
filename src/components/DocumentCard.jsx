"use client";

import { motion } from "framer-motion";
import { FileText, Image as ImageIcon, Sheet, FileBarChart } from "lucide-react";

export default function DocumentCard({
  title,
  kind = "PDF",
  status = "Processed",
  date = "Sep 18, 2025",
  size = "1.2 MB",
  thumbnail,
  delay = 0,
}) {
  const StatusPill = () => (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ${
        status === "Processed"
          ? "bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30"
          : "bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${status === "Processed" ? "bg-[#10B981]" : "bg-[#F59E0B]"}`} />
      {status}
    </span>
  );

  const iconByKind = {
    PDF: FileText,
    DOCX: Sheet,
    XLSX: FileBarChart,
    IMG: ImageIcon,
  };
  const KindIcon = iconByKind[kind] || FileText;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#111111] p-3 shadow-[0_0_0_0_rgba(0,245,212,0)] transition-[box-shadow,transform] hover:-translate-y-1 hover:shadow-[0_0_28px_0_rgba(0,245,212,0.18)]"
    >
      <div className="pointer-events-none absolute inset-px rounded-[10px] bg-gradient-to-b from-transparent to-[#00F5D4]/5" />
      <div className="relative flex items-center gap-3">
        {/* Thumb / Icon */}
        <div className="relative">
          <div className="absolute -inset-2 rounded-lg opacity-0 blur-md transition-opacity group-hover:opacity-40" style={{ background: "radial-gradient(ellipse at center, rgba(0,245,212,0.25), transparent 60%)" }} />
          <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-lg border border-white/10 bg-[#0b0b0b]">
            {thumbnail ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img alt={title} src={thumbnail} className="h-full w-full object-cover" />
            ) : (
              <KindIcon className="h-5 w-5 text-[#00F5D4]" />
            )}
          </div>
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-white">{title}</p>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-[#A0A0A0]">
            <span className="rounded-md border border-white/10 bg-[#0c0c0c] px-1.5 py-0.5 text-white/80">{kind}</span>
            <span>{size}</span>
            <span className="text-white/20">•</span>
            <span>{date}</span>
            <StatusPill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}