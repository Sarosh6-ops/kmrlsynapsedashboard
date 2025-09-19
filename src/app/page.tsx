"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import ProfileCard from "@/components/dashboard/ProfileCard";
import StatCard from "@/components/dashboard/StatCard";
import DocumentCard from "@/components/dashboard/DocumentCard";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import { Files, Upload, Clock3, HardDrive } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-w-0">
          <Header />

          <main className="px-4 sm:px-6 py-6">
            {/* Welcome / Banner */}
            <section className="mb-6">
              <div className="relative overflow-hidden rounded-lg border bg-card">
                <div className="p-5 sm:p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Welcome back, Ananya</h1>
                      <p className="text-sm text-muted-foreground mt-1">
                        Here's what's happening in KMRL Synapse today.
                      </p>
                    </div>
                    <div className="relative h-12 w-full max-w-[220px] md:max-w-[280px] rounded-md overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1545569341-9eb8b30979d6?q=80&w=800&auto=format&fit=crop"
                        alt="Kochi Metro"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Grid Layout */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main content */}
              <div className="space-y-6 lg:col-span-2">
                {/* KPI Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  <StatCard title="Total Documents" value="4,812" change="+2.1% vs last week" positive Icon={Files} />
                  <StatCard title="New Uploads" value="126" change="+14 today" positive Icon={Upload} />
                  <StatCard title="Pending Reviews" value="18" change="-3 this week" positive={false} Icon={Clock3} />
                  <StatCard title="Storage Used" value="64.3 GB" change="72% of 90 GB" positive Icon={HardDrive} />
                </div>

                {/* Recent Uploads */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-base font-semibold">Recent Uploads</h2>
                    <button className="text-sm text-muted-foreground hover:text-foreground">View all</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <DocumentCard
                      title="Metro Expansion Plan – Phase II"
                      type="PDF"
                      size="3.2 MB"
                      date="Sep 18, 2025"
                      thumbnail="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=200&auto=format&fit=crop"
                    />
                    <DocumentCard
                      title="Safety SOPs – Station Operations"
                      type="DOCX"
                      size="1.1 MB"
                      date="Sep 17, 2025"
                      thumbnail="https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?q=80&w=200&auto=format&fit=crop"
                    />
                    <DocumentCard
                      title="Annual Budget 2025 – Draft v3"
                      type="XLSX"
                      size="890 KB"
                      date="Sep 16, 2025"
                      thumbnail="https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=200&auto=format&fit=crop"
                    />
                    <DocumentCard
                      title="Contract Renewal – Vendor A"
                      type="PDF"
                      size="640 KB"
                      date="Sep 15, 2025"
                      thumbnail="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=200&auto=format&fit=crop"
                    />
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-6">
                <ProfileCard />
                <ActivityFeed />
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}