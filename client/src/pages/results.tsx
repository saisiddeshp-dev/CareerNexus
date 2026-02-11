import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useAssessment } from "@/hooks/use-assessment";
import { motion } from "framer-motion";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { Link } from "wouter";
import { Download, Share2, RefreshCw } from "lucide-react";

export default function Results() {
  const { calculateResults } = useAssessment();
  
  // In a real app, this would be memoized or stored in state to prevent recalculation on re-renders
  // But for this mockup, we calculate on mount/render
  const results = calculateResults();

  // Prepare Radar Data
  const radarData = [
    { subject: 'Analytical', A: results.thinkingProfile.analytical, fullMark: 100 },
    { subject: 'Creative', A: results.thinkingProfile.creative, fullMark: 100 },
    { subject: 'Social', A: results.thinkingProfile.social, fullMark: 100 },
    { subject: 'Practical', A: results.thinkingProfile.practical, fullMark: 100 },
    { subject: 'Academic', A: Math.max(0, results.academicScore * 5), fullMark: 100 }, // Normalize approx
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto space-y-8 pb-20">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
          >
            Assessment Complete
          </motion.h1>
          <p className="text-xl text-white/60 font-rajdhani uppercase tracking-widest">
            Profile Generated Successfully
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Top Careers */}
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             className="lg:col-span-2 space-y-6"
          >
            <h2 className="text-2xl font-orbitron text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-cyan-500 rounded-full inline-block"></span>
              Top Career Matches
            </h2>

            {results.topCareers.map((career, idx) => (
              <div 
                key={career.jobId}
                className="glass-card p-8 rounded-2xl border-l-4 border-l-cyan-500 relative overflow-hidden group hover:border-l-purple-500 transition-colors duration-300"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <h1 className="text-8xl font-bold font-outline-2 text-transparent stroke-white">0{idx + 1}</h1>
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-bold text-white font-rajdhani">{career.title}</h3>
                    <div className="bg-cyan-500/20 text-cyan-300 px-4 py-1 rounded-full font-mono text-sm">
                      Score: {career.score} pts
                    </div>
                  </div>
                  
                  <p className="text-white/70 mb-6 max-w-lg">
                    Based on your high performance in the simulation scenarios and your {results.thinkingProfile.analytical > results.thinkingProfile.creative ? 'analytical' : 'creative'} thinking style, 
                    you demonstrate strong aptitude for high-stakes decision making in this field.
                  </p>

                  <div className="flex gap-4">
                    <div className="text-sm text-green-400">
                      <span className="block font-bold text-xs uppercase tracking-wider text-white/40 mb-1">Strength</span>
                      Critical Analysis
                    </div>
                    <div className="text-sm text-yellow-400">
                      <span className="block font-bold text-xs uppercase tracking-wider text-white/40 mb-1">Growth Area</span>
                      Risk Management
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Column: Radar & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Radar Chart Card */}
            <div className="glass-card p-6 rounded-3xl flex flex-col items-center justify-center min-h-[400px]">
              <h3 className="text-xl font-orbitron text-white/80 mb-4">Competency Radar</h3>
              <div className="w-full h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                    <PolarGrid stroke="rgba(255,255,255,0.1)" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }} />
                    <Radar
                      name="Aptitude"
                      dataKey="A"
                      stroke="#06b6d4"
                      strokeWidth={3}
                      fill="#06b6d4"
                      fillOpacity={0.3}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Academic Score Card */}
            <div className={`glass-card p-6 rounded-2xl border-l-4 ${results.academicScore > 5 ? 'border-l-green-500' : 'border-l-red-500'}`}>
              <h4 className="text-white/60 font-rajdhani uppercase text-sm mb-2">Academic Eligibility (Class 10)</h4>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-bold text-white">{results.academicScore}</span>
                <span className="text-sm text-white/40 mb-2">/ 12 points</span>
              </div>
              <p className="text-sm text-white/60 mt-2">
                {results.academicScore > 8 ? "High Eligibility: Cleared for Advanced Tech Streams" : "Moderate: Recommended Foundation Course"}
              </p>
            </div>

             <div className="flex gap-4 pt-4">
                <Button variant="outline" className="flex-1 bg-white/5 hover:bg-white/10 border-white/20">
                  <Share2 className="w-4 h-4 mr-2" /> Share
                </Button>
                <Button variant="outline" className="flex-1 bg-white/5 hover:bg-white/10 border-white/20">
                  <Download className="w-4 h-4 mr-2" /> Report
                </Button>
             </div>
             
             <Link href="/">
               <Button variant="ghost" className="w-full mt-4 text-white/40 hover:text-white hover:bg-transparent">
                 <RefreshCw className="w-4 h-4 mr-2" /> Restart Assessment
               </Button>
             </Link>

          </motion.div>

        </div>
      </div>
    </Layout>
  );
}
