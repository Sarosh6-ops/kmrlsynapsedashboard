import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-w-0">
          <Header />

          <main className="px-4 sm:px-6 py-6 space-y-6">
            <section className="flex items-center justify-between">
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Support</h1>
              <div className="text-sm text-muted-foreground">Help and documentation</div>
            </section>

            <section className="rounded-lg border bg-card p-4 sm:p-6">
              <div className="text-sm text-muted-foreground">FAQs, contact options, and guides will appear here.</div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}