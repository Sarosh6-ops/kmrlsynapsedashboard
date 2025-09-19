"use client";

import { Bell, Search } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="flex items-center gap-3 px-4 sm:px-6 h-16">
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search documents, people, tags..."
            className="pl-9 h-9 rounded-md"
          />
        </div>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] grid place-items-center">
            3
          </span>
        </Button>
        <div className="h-8 w-[1px] bg-border" />
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8 rounded-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop"
              alt="User avatar"
              fill
              className="object-cover"
            />
          </div>
          <div className="hidden sm:block leading-tight">
            <p className="text-sm font-medium">Ananya Menon</p>
            <p className="text-xs text-muted-foreground">Knowledge Manager</p>
          </div>
        </div>
      </div>
    </header>
  );
}