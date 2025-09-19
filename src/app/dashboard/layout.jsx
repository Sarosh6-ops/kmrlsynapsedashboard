export const metadata = {
  title: "KMRL Synapse · Dashboard",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-dvh relative isolate bg-[#000000] text-white">
      {/* Animated background: subtle grid glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,#00F5D4_1px,transparent_1.5px)] [background-size:28px_28px]" />
        <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full blur-[120px] bg-[#00F5D4]/10 animate-pulse" />
        <div className="absolute -bottom-32 -right-32 h-[360px] w-[360px] rounded-full blur-[110px] bg-[#00F5D4]/10 animate-pulse [animation-duration:5s]" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[280px_1fr]">
        {children}
      </div>
    </div>
  );
}