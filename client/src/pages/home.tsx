import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useAssessment } from "@/hooks/use-assessment";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Target, Trophy, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  const { startAssessment } = useAssessment();
  const [agreed, setAgreed] = useState(false);

  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center space-y-8 relative">
        
        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-12 rounded-3xl max-w-4xl w-full relative overflow-hidden group"
        >
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
          
          <div className="relative z-10 space-y-6">
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block"
            >
               <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-rajdhani tracking-widest uppercase mb-4">
                 System v.1.0 Alpha
               </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold font-orbitron tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 pb-2">
              NEXUS
              <span className="block text-2xl md:text-3xl font-light text-white/60 mt-2 font-rajdhani">
                Future-Ready Career Intelligence
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Beyond standard aptitude tests. Experience realistic job simulations, 
              analyze your thinking patterns, and prove your eligibility in a 
              competitive future landscape.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 text-left">
              <FeatureCard 
                icon={<Brain className="w-8 h-8 text-cyan-400" />}
                title="Thinking Profile"
                desc="Analyze your cognitive approach through situational profiling."
                delay={0.4}
              />
              <FeatureCard 
                icon={<Target className="w-8 h-8 text-purple-400" />}
                title="Job Simulation"
                desc="Immersive scenarios from 25+ future-critical professions."
                delay={0.5}
              />
              <FeatureCard 
                icon={<Trophy className="w-8 h-8 text-pink-400" />}
                title="Elite Eligibility"
                desc="High-stakes science & math capability assessment."
                delay={0.6}
              />
            </div>

            {/* Terms and Conditions Section */}
            <div className="flex flex-col items-center space-y-4 mb-8">
              <div className="flex items-center space-x-3 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm group hover:border-cyan-500/30 transition-colors">
                <Checkbox 
                  id="terms" 
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                  className="border-white/30 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                />
                <label 
                  htmlFor="terms" 
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white/70 cursor-pointer"
                >
                  I agree to the{" "}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-500/30">
                        Terms and Conditions
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl bg-slate-950 border-white/10 text-white">
                      <DialogHeader>
                        <DialogTitle className="font-orbitron text-2xl text-cyan-400">Terms & Conditions</DialogTitle>
                        <DialogDescription className="text-white/60 font-rajdhani uppercase tracking-wider">
                          Last Updated: February 2026
                        </DialogDescription>
                      </DialogHeader>
                      <ScrollArea className="h-[400px] pr-4 mt-4">
                        <div className="prose prose-invert prose-sm max-w-none text-white/80 space-y-4">
                          <section>
                            <h3 className="text-cyan-400 font-orbitron text-sm">1. NATURE AND PURPOSE</h3>
                            <p>The Platform provides educational assessments intended solely for guidance and self-reflection. It does not provide professional career counselling or psychological diagnosis.</p>
                          </section>
                          <section>
                            <h3 className="text-cyan-400 font-orbitron text-sm">2. NO GUARANTEE</h3>
                            <p>We do not guarantee admission into any course, job, or institution. Decisions made based on assessment results are entirely your own responsibility.</p>
                          </section>
                          <section>
                            <h3 className="text-cyan-400 font-orbitron text-sm">3. MINORS</h3>
                            <p>Individuals under 18 may use this Platform only with explicit parental or legal guardian consent.</p>
                          </section>
                          <section>
                            <h3 className="text-cyan-400 font-orbitron text-sm">4. LIABILITY</h3>
                            <p>To the maximum extent permitted by law, the Platform and its founders shall not be liable for any direct or indirect damages arising from your use of the service.</p>
                          </section>
                          <section>
                            <h3 className="text-cyan-400 font-orbitron text-sm">5. DATA PRIVACY</h3>
                            <p>We comply with the Indian IT Act 2000 and DPDP Act 2023. We do not sell your personal data to third parties.</p>
                          </section>
                          <p className="text-xs text-white/40 italic">Note: This is an abbreviated version of the full terms provided for the Alpha preview.</p>
                        </div>
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>
                </label>
              </div>
            </div>

            <motion.div
              whileHover={agreed ? { scale: 1.05 } : {}}
              whileTap={agreed ? { scale: 0.95 } : {}}
            >
              <Button 
                onClick={startAssessment}
                disabled={!agreed}
                size="lg" 
                className={`font-orbitron text-lg px-10 py-8 rounded-xl transition-all duration-300 border-none ${
                  agreed 
                    ? "bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_30px_-5px_rgba(6,182,212,0.6)] cursor-pointer" 
                    : "bg-white/10 text-white/30 cursor-not-allowed grayscale"
                }`}
              >
                Initialize Assessment <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

function FeatureCard({ icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors"
    >
      <div className="mb-4 bg-black/30 w-fit p-3 rounded-lg border border-white/5">{icon}</div>
      <h3 className="text-lg font-bold font-orbitron text-white mb-2">{title}</h3>
      <p className="text-sm text-white/60">{desc}</p>
    </motion.div>
  );
}
