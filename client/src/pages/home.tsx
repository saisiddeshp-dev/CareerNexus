import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useAssessment } from "@/hooks/use-assessment";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Target, Trophy } from "lucide-react";
import heroBg from "@/assets/images/hero-bg.png";

export default function Home() {
  const { startAssessment } = useAssessment();

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

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={startAssessment}
                size="lg" 
                className="bg-cyan-500 hover:bg-cyan-400 text-black font-orbitron text-lg px-10 py-8 rounded-xl shadow-[0_0_30px_-5px_rgba(6,182,212,0.6)] transition-all duration-300 border-none"
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
