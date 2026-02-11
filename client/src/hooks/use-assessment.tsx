import { createContext, useContext, useState, ReactNode } from "react";
import { questions, type Question, type SectionType, type JobId } from "@/lib/data";
import { useLocation } from "wouter";

interface AssessmentState {
  currentSection: SectionType;
  currentQuestionIndex: number;
  answers: Record<string, string>; // questionId -> optionId
  isFinished: boolean;
}

interface AssessmentContextType extends AssessmentState {
  startAssessment: () => void;
  submitAnswer: (questionId: string, optionId: string) => void;
  nextQuestion: () => void;
  calculateResults: () => AssessmentResult;
  currentQuestion: Question | undefined;
  totalQuestionsInSection: number;
  progress: number;
}

interface AssessmentResult {
  thinkingProfile: Record<string, number>;
  jobScores: Record<JobId, number>;
  academicScore: number;
  topCareers: { jobId: JobId; score: number; title: string }[];
}

const AssessmentContext = createContext<AssessmentContextType | null>(null);

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [_, setLocation] = useLocation();
  const [state, setState] = useState<AssessmentState>({
    currentSection: "thinking",
    currentQuestionIndex: 0,
    answers: {},
    isFinished: false,
  });

  const getQuestionsForSection = (section: SectionType) => {
    return questions.filter((q) => q.section === section);
  };

  const currentSectionQuestions = getQuestionsForSection(state.currentSection);
  const currentQuestion = currentSectionQuestions[state.currentQuestionIndex];
  
  const totalQuestionsInSection = currentSectionQuestions.length;
  const progress = ((state.currentQuestionIndex) / totalQuestionsInSection) * 100;

  const startAssessment = () => {
    setState({
      currentSection: "thinking",
      currentQuestionIndex: 0,
      answers: {},
      isFinished: false,
    });
    setLocation("/assessment");
  };

  const submitAnswer = (questionId: string, optionId: string) => {
    setState((prev) => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: optionId },
    }));
  };

  const nextQuestion = () => {
    const isLastQuestion = state.currentQuestionIndex >= currentSectionQuestions.length - 1;

    if (isLastQuestion) {
      if (state.currentSection === "thinking") {
        setState((prev) => ({
          ...prev,
          currentSection: "job-simulation",
          currentQuestionIndex: 0,
        }));
      } else if (state.currentSection === "job-simulation") {
        setState((prev) => ({
          ...prev,
          currentSection: "academic",
          currentQuestionIndex: 0,
        }));
      } else {
        setState((prev) => ({ ...prev, isFinished: true }));
        setLocation("/results");
      }
    } else {
      setState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
    }
  };

  const calculateResults = (): AssessmentResult => {
    const { answers } = state;
    
    // 1. Thinking Profile (Basic aggregation for alpha)
    const thinkingProfile: Record<string, number> = {
      analytical: 0,
      creative: 0,
      social: 0,
      practical: 0
    };

    // 2. Job Scores (+4 / -1)
    const jobScores: Record<string, number> = {};
    
    // 3. Academic Score
    let academicScore = 0;

    questions.forEach(q => {
      const answerId = answers[q.id];
      if (!answerId) return;

      if (q.section === "thinking") {
        // In a real app, options would map to traits. 
        // For alpha, we'll randomize trait distribution based on answer hash
        const traits = ["analytical", "creative", "social", "practical"];
        const trait = traits[answerId.charCodeAt(answerId.length - 1) % 4];
        thinkingProfile[trait] += 10;
      }

      if (q.section === "job-simulation" && q.jobId) {
        if (!jobScores[q.jobId]) jobScores[q.jobId] = 0;
        
        // Find selected option
        const option = q.options.find(o => o.id === answerId);
        if (option?.score) {
          jobScores[q.jobId] += option.score;
        }
      }

      if (q.section === "academic") {
         const option = q.options.find(o => o.id === answerId);
         if (option?.isCorrect) academicScore += 4;
         else academicScore -= 1;
      }
    });

    // Determine Top Careers
    const topCareers = Object.entries(jobScores)
      .map(([jobId, score]) => ({ 
        jobId, 
        score,
        title: questions.find(q => q.jobId === jobId)?.jobTitle || jobId 
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    return {
      thinkingProfile,
      jobScores,
      academicScore,
      topCareers
    };
  };

  return (
    <AssessmentContext.Provider
      value={{
        ...state,
        startAssessment,
        submitAnswer,
        nextQuestion,
        calculateResults,
        currentQuestion,
        totalQuestionsInSection,
        progress
      }}
    >
      {children}
    </AssessmentContext.Provider>
  );
}

export function useAssessment() {
  const context = useContext(AssessmentContext);
  if (!context) throw new Error("useAssessment must be used within AssessmentProvider");
  return context;
}
