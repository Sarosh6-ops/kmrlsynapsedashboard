"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, FilePlus, UserPlus, CheckCircle2 } from "lucide-react";

const activities = [
  { icon: FilePlus, label: "Uploaded ‘Metro Expansion Plan - Phase II’.", time: "2h ago" },
  { icon: UserPlus, label: "New collaborator added to ‘Safety SOPs’.", time: "5h ago" },
  { icon: CheckCircle2, label: "Review completed for ‘Annual Budget 2025’.", time: "Yesterday" },
  { icon: Clock, label: "Reminder set for ‘Contract Renewal’.", time: "2d ago" },
];

export default function ActivityFeed() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="space-y-4">
          {activities.map(({ icon: Icon, label, time }, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-md grid place-items-center bg-secondary text-secondary-foreground shrink-0">
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="text-sm leading-snug">{label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{time}</p>
              </div>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}