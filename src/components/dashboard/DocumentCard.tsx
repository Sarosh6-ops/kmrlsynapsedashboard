"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, MoreVertical, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

type DocumentCardProps = {
  title: string;
  type: string;
  size: string;
  date: string;
  thumbnail?: string;
};

export default function DocumentCard({ title, type, size, date, thumbnail }: DocumentCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="relative h-12 w-10 rounded-sm overflow-hidden bg-secondary text-secondary-foreground flex items-center justify-center">
            {thumbnail ? (
              <Image src={thumbnail} alt="thumbnail" fill className="object-cover" />
            ) : (
              <FileText className="h-5 w-5" />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium leading-tight">{title}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{type} • {size} • {date}</p>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}