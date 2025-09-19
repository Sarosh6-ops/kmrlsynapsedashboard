"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Building2 } from "lucide-react";

export default function ProfileCard() {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-24 w-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40" />
      <CardContent className="pt-0">
        <div className="-mt-8 flex items-end gap-4">
          <div className="relative h-16 w-16 rounded-lg ring-2 ring-background overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=160&auto=format&fit=crop"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold leading-tight">Ananya Menon</h3>
            <p className="text-xs text-muted-foreground">Knowledge Manager • Operations</p>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">Edit</Button>
            <Button size="sm">View Profile</Button>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="h-4 w-4" /> ananya.menon@kmrl.in
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone className="h-4 w-4" /> +91 98 76 543210
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Building2 className="h-4 w-4" /> Kochi Metro Rail Ltd.
          </div>
        </div>
      </CardContent>
    </Card>
  );
}