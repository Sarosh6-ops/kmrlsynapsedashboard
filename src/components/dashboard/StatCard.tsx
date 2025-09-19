"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type StatCardProps = {
  title: string;
  value: string;
  change?: string;
  positive?: boolean;
  Icon?: React.ElementType;
};

export default function StatCard({ title, value, change, positive = true, Icon }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs text-muted-foreground">{title}</p>
            <p className="mt-1 text-2xl font-semibold tracking-tight">{value}</p>
            {change && (
              <p className={cn("mt-1 text-xs", positive ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400")}>{change}</p>
            )}
          </div>
          {Icon ? (
            <div className="h-9 w-9 rounded-md grid place-items-center bg-secondary text-secondary-foreground">
              <Icon className="h-5 w-5" />
            </div>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}