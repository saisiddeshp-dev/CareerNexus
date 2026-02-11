import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full text-foreground relative overflow-hidden font-inter selection:bg-cyan-500/30">
      {/* Background Elements */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background"></div>
         <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]"></div>
      </div>

      <main className="container mx-auto px-4 py-8 relative z-10">
        {children}
      </main>
      <Toaster />
    </div>
  );
}
