import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useAssessment } from "@/hooks/use-assessment";
import { Question, SectionType } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle, Briefcase, Calculator, BrainCircuit } from "lucide-react";
import { useEffect, useState } from "react";

export default function Assessment() {
  const { currentSection, currentQuestion, nextQuestion, totalQuestionsInSection, progress } = useAssessment();
  const [showIntro, setShowIntro] = useState(true);

  // Show intro when section changes
  useEffect(() => {
    setShowIntro(true);
  }, [currentSection]);

  if (!currentQuestion && !showIntro) return null;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto min-h-[80vh] flex flex-col justify-center">
        {/* Header Progress */}
        <div className="mb-8 space-y-4">
          <div className="flex justify-between items-end text-sm font-rajdhani uppercase tracking-widest text-white/60">
            <span>Section: {formatSectionName(currentSection)}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2 bg-white/10" indicatorClassName="bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
        </div>

        <AnimatePresence mode="wait">
          {showIntro ? (
            <SectionIntro 
              key={`intro-${currentSection}`} 
              section={currentSection} 
              onStart={() => setShowIntro(false)} 
            />
          ) : (
            <QuestionCard 
              key={`q-${currentQuestion?.id}`} 
              question={currentQuestion!} 
              onNext={nextQuestion}
              total={totalQuestionsInSection}
            />
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}

function SectionIntro({ section, onStart }: { section: SectionType, onStart: () => void }) {
  const config = {
    "thinking": {
      title: "Module 1: Cognitive Analysis",
      desc: "This section analyzes your problem-solving style and workplace personality. There are no right or wrong answers. Be honest.",
      icon: <BrainCircuit className="w-16 h-16 text-cyan-400" />,
      color: "text-cyan-400"
    },
    "job-simulation": {
      title: "Module 2: Professional Simulation",
      desc: "You will be placed in realistic workplace scenarios across different future careers. Choose the most effective course of action. (+4 for best, -1 for risk)",
      icon: <Briefcase className="w-16 h-16 text-purple-400" />,
      color: "text-purple-400"
    },
    "academic": {
      title: "Module 3: Core Competency",
      desc: "High-stakes assessment of Science and Mathematics principles. Precision is key. (+4 Correct, -1 Incorrect)",
      icon: <Calculator className="w-16 h-16 text-pink-400" />,
      color: "text-pink-400"
    }
  };

  const info = config[section];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="glass-card p-12 rounded-3xl text-center space-y-8"
    >
      <div className="flex justify-center">
        <div className="p-6 bg-white/5 rounded-full border border-white/10 shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]">
          {info.icon}
        </div>
      </div>
      
      <div className="space-y-4">
        <h2 className={`text-4xl font-bold font-orbitron ${info.color}`}>{info.title}</h2>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">{info.desc}</p>
      </div>

      <Button 
        onClick={onStart}
        size="lg" 
        className="mt-8 bg-white text-black hover:bg-gray-200 font-bold px-12 py-6 text-lg rounded-xl font-orbitron"
      >
        Begin Module
      </Button>
    </motion.div>
  );
}

function QuestionCard({ question, onNext, total }: { question: Question, onNext: () => void, total: number }) {
  const { submitAnswer, answers } = useAssessment();
  const [selected, setSelected] = useState<string | null>(answers[question.id] || null);

  const handleSelect = (id: string) => {
    setSelected(id);
    submitAnswer(question.id, id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      {/* Context/Scenario (Job Sim only) */}
      {question.scenarioContext && (
        <div className="bg-purple-500/10 border border-purple-500/20 p-6 rounded-xl flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-purple-400 shrink-0 mt-1" />
          <div>
            <h4 className="text-purple-300 font-bold font-rajdhani uppercase tracking-wider text-sm mb-2">
              Scenario: {question.jobTitle}
            </h4>
            <p className="text-white/90 leading-relaxed font-medium text-lg">
              {question.scenarioContext}
            </p>
          </div>
        </div>
      )}

      {/* Question Text */}
      <div className="glass-card p-8 rounded-2xl border-l-4 border-l-cyan-500">
        <h3 className="text-2xl font-semibold text-white leading-normal">
          {question.text}
        </h3>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 gap-4 mt-6">
        {question.options.map((opt, idx) => (
          <motion.div
            key={opt.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <button
              onClick={() => handleSelect(opt.id)}
              className={`w-full text-left p-6 rounded-xl border transition-all duration-200 flex items-center group
                ${selected === opt.id 
                  ? "bg-cyan-500/20 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]" 
                  : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                }
              `}
            >
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4 transition-colors
                ${selected === opt.id ? "border-cyan-400 bg-cyan-400 text-black" : "border-white/30 text-white/30 group-hover:border-white/60"}
              `}>
                {selected === opt.id && <CheckCircle2 className="w-5 h-5" />}
              </div>
              <span className={`text-lg ${selected === opt.id ? "text-white" : "text-white/70"}`}>
                {opt.text}
              </span>
            </button>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-end pt-8">
        <Button 
          disabled={!selected}
          onClick={onNext}
          size="lg"
          className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-6 text-lg font-rajdhani font-bold rounded-xl"
        >
          {question.id.includes("acad") && question.options[0].id === "ac_3_d" ? "Finish Assessment" : "Next Challenge"} <ArrowRight className="ml-2" />
        </Button>
      </div>
    </motion.div>
  );
}

function formatSectionName(section: SectionType) {
  switch(section) {
    case "thinking": return "Thinking Profile";
    case "job-simulation": return "Job Simulation";
    case "academic": return "Competency Check";
    default: return section;
  }
}
