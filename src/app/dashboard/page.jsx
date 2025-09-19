import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import StatCard from "@/components/StatCard";
import RecentUploads from "@/components/RecentUploads";
import ActivityFeed from "@/components/ActivityFeed";

export default function DashboardPage() {
  return (
    <>
      {/* Left: Sidebar */}
      <Sidebar />

      {/* Right: Content */}
      <div className="min-w-0">
        <Header />

        <main className="px-4 sm:px-6 py-6">
          {/* Welcome */}
          <section className="mb-6">
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#111111]">
              <div className="absolute inset-px rounded-[10px] bg-gradient-to-b from-transparent to-[#00F5D4]/5 pointer-events-none" />
              <div className="relative p-5 sm:p-6">
                <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">Welcome back, Rajesh! 👋</h1>
                <p className="mt-1 text-sm text-[#A0A0A0]">Here's your intelligence hub overview for today.</p>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main column */}
            <div className="space-y-6 lg:col-span-2">
              {/* Profile */}
              <ProfileCard />

              {/* KPI Stats - 5 cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
                <StatCard title="Total Documents" value="4,812" trend="+12 this month" icon="files" delay={0.02} />
                <StatCard title="AI Processes" value="326" trend="+24 today" icon="cpu" delay={0.06} />
                <StatCard title="In Progress" value="18" trend="-3 this week" icon="loader" delay={0.1} />
                <StatCard title="Uploads" value="126" trend="+14 today" icon="uploadcloud" progress={72} delay={0.14} />
                <StatCard title="Storage Used" value="64.3 GB" trend="of 90 GB" icon="harddrive" progress={72} delay={0.18} />
              </div>

              {/* Recent Uploads */}
              <RecentUploads />
            </div>

            {/* Right column */}
            <div className="space-y-6">
              <ActivityFeed />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}