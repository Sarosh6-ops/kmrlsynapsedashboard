"use client";

import { Home, FileText, BarChart3, Settings, LifeBuoy, LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Overview", icon: Home, href: "#" },
  { label: "Documents", icon: FileText, href: "#" },
  { label: "Analytics", icon: BarChart3, href: "#" },
  { label: "Settings", icon: Settings, href: "#" },
  { label: "Support", icon: LifeBuoy, href: "#" },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:flex-col border-r bg-sidebar text-sidebar-foreground w-72 shrink-0">
      <div className="flex items-center gap-3 px-6 h-16 border-b">
        <div className="relative h-8 w-8 overflow-hidden rounded-md">
          <Image
            src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=200&auto=format&fit=crop"
            alt="KMRL Synapse"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium tracking-wide">KMRL Synapse</span>
          <span className="text-xs text-muted-foreground">Knowledge Hub</span>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ label, icon: Icon, href }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto px-4 py-4 border-t">
        <Button variant="ghost" className="w-full justify-start gap-2 text-sm">
          <LogOut className="h-4 w-4" /> Sign out
        </Button>
      </div>
    </aside>
  );
}