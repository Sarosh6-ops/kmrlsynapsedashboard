"use client";

import { motion } from "framer-motion";
import { Plus, UploadCloud } from "lucide-react";
import DocumentCard from "@/components/DocumentCard";

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { delay, duration: 0.5, ease: "easeOut" } }),
};

export default function RecentUploads() {
  const items = [
    {
      title: "Metro Expansion Plan – Phase II",
      kind: "PDF",
      size: "3.2 MB",
      date: "Sep 18, 2025",
      thumbnail:
        "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=200&auto=format&fit=crop",
      status: "Processed",
    },
    {
      title: "Safety SOPs – Station Operations",
      kind: "DOCX",
      size: "1.1 MB",
      date: "Sep 17, 2025",
      thumbnail:
        "https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?q=80&w=200&auto=format&fit=crop",
      status: "Processed",
    },
    {
      title: "Annual Budget 2025 – Draft v3",
      kind: "XLSX",
      size: "890 KB",
      date: "Sep 16, 2025",
      thumbnail:
        "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=200&auto=format&fit=crop",
      status: "Pending",
    },
    {
      title: "Contract Renewal – Vendor A",
      kind: "PDF",
      size: "640 KB",
      date: "Sep 15, 2025",
      thumbnail:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=200&auto=format&fit=crop",
      status: "Processed",
    },
  ];

  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <motion.h2
          variants={sectionVariants}
          initial="hidden"
          animate="show"
          className="text-sm font-semibold text-white"
        >
          Recent Uploads
        </motion.h2>
        <motion.button
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-[#0D0D0D] px-3 py-1.5 text-xs text-white shadow-[0_0_0_0_rgba(0,245,212,0.15)] hover:shadow-[0_0_20px_0_rgba(0,245,212,0.35)]"
        >
          <Plus className="h-4 w-4 text-[#00F5D4]" />
          <span>Upload New</span>
        </motion.button>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((it, i) => (
          <DocumentCard key={it.title} {...it} delay={0.05 * i} />
        ))}
      </div>

      <div className="mt-3 text-[11px] text-[#A0A0A0] inline-flex items-center gap-2">
        <UploadCloud className="h-3.5 w-3.5 text-[#00F5D4]" />
        Drag & drop to upload. Max 100MB per file.
      </div>
    </section>
  );
}