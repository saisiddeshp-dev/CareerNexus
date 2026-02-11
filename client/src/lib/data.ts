export type SectionType = "thinking" | "job-simulation" | "academic";
export type JobId = "cyber_security" | "ai_ethicist" | "space_architect" | "neuro_designer" | "quantum_analyst";

export interface Option {
  id: string;
  text: string;
  score?: number; // For job sim (+4/-1)
  isCorrect?: boolean; // For academic
}

export interface Question {
  id: string;
  section: SectionType;
  text: string;
  options: Option[];
  jobId?: JobId; // Only for job-simulation
  jobTitle?: string; // Helper for UI
  scenarioContext?: string; // The "Scenario" text
}

export const questions: Question[] = [
  // --- SECTION 1: THINKING STYLE (5 Questions) ---
  {
    id: "th_1",
    section: "thinking",
    text: "When facing a complex problem, what is your first instinct?",
    options: [
      { id: "th_1_a", text: "Break it down into smaller, logical parts." },
      { id: "th_1_b", text: "Look for a similar problem I've solved before." },
      { id: "th_1_c", text: "Brainstorm multiple wild solutions." },
      { id: "th_1_d", text: "Ask others for their perspective." },
    ],
  },
  {
    id: "th_2",
    section: "thinking",
    text: "In a group project, you usually take the role of:",
    options: [
      { id: "th_2_a", text: "The Organizer - keeping track of deadlines." },
      { id: "th_2_b", text: "The Idea Generator - coming up with concepts." },
      { id: "th_2_c", text: "The Mediator - ensuring everyone gets along." },
      { id: "th_2_d", text: "The Executer - getting the work done." },
    ],
  },
  {
    id: "th_3",
    section: "thinking",
    text: "You prefer tasks that have:",
    options: [
      { id: "th_3_a", text: "Clear rules and defined outcomes." },
      { id: "th_3_b", text: "Room for interpretation and creativity." },
      { id: "th_3_c", text: "High social interaction." },
      { id: "th_3_d", text: "Tangible, physical results." },
    ],
  },
  {
    id: "th_4",
    section: "thinking",
    text: "How do you handle failure?",
    options: [
      { id: "th_4_a", text: "Analyze what went wrong to prevent it next time." },
      { id: "th_4_b", text: "Try a completely different approach immediately." },
      { id: "th_4_c", text: "Talk it through with a mentor." },
      { id: "th_4_d", text: "Work harder to fix it." },
    ],
  },
  {
    id: "th_5",
    section: "thinking",
    text: "Your ideal workspace is:",
    options: [
      { id: "th_5_a", text: "Quiet, organized, and minimal." },
      { id: "th_5_b", text: "Colorful, busy, and stimulating." },
      { id: "th_5_c", text: "Open-plan with lots of collaboration." },
      { id: "th_5_d", text: "Outdoors or in a workshop." },
    ],
  },

  // --- SECTION 2: JOB SIMULATION (3 Jobs x 3 Questions for Alpha) ---
  
  // Job 1: Cyber Security Analyst
  {
    id: "job_cs_1",
    section: "job-simulation",
    jobId: "cyber_security",
    jobTitle: "Cyber Security Analyst",
    scenarioContext: "You detect unusual outbound traffic from a senior executive's laptop at 3 AM. It matches a known malware signature, but the executive is currently negotiating a major merger.",
    text: "What is your immediate action?",
    options: [
      { id: "cs_1_a", text: "Immediately isolate the laptop from the network to prevent data leak.", score: 4 }, // Correct/Best
      { id: "cs_1_b", text: "Wait until morning to ask the executive if they are working late.", score: -1 }, // Risk
      { id: "cs_1_c", text: "Monitor the traffic for another hour to be sure.", score: -1 }, // Passive
      { id: "cs_1_d", text: "Email the executive asking them to disconnect wifi.", score: 0 }, // Weak
    ],
  },
  {
    id: "job_cs_2",
    section: "job-simulation",
    jobId: "cyber_security",
    jobTitle: "Cyber Security Analyst",
    scenarioContext: "A phishing email has been clicked by 15 employees. No data seems to have left the network yet, but the malware installs a backdoor.",
    text: "How do you prioritize your response?",
    options: [
      { id: "cs_2_a", text: "Reset all employee passwords immediately.", score: 1 }, 
      { id: "cs_2_b", text: "Identify the infected machines and quarantine them first.", score: 4 }, // Correct
      { id: "cs_2_c", text: "Send a company-wide email warning about phishing.", score: 0 },
      { id: "cs_2_d", text: "Shutdown the email server.", score: -1 }, // Overreaction
    ],
  },
  {
    id: "job_cs_3",
    section: "job-simulation",
    jobId: "cyber_security",
    jobTitle: "Cyber Security Analyst",
    scenarioContext: "You find a vulnerability in a critical legacy system that cannot be patched without breaking the application. The system handles customer data.",
    text: "What do you recommend?",
    options: [
      { id: "cs_3_a", text: "Ignore it since it can't be patched.", score: -1 },
      { id: "cs_3_b", text: "Implement compensating controls like strict network segmentation and monitoring around the system.", score: 4 }, // Best
      { id: "cs_3_c", text: "Demand the system be replaced immediately regardless of cost.", score: 0 },
      { id: "cs_3_d", text: "Disable the system until a fix is found.", score: -1 }, // Business impact
    ],
  },

  // Job 2: AI Ethicist
  {
    id: "job_ai_1",
    section: "job-simulation",
    jobId: "ai_ethicist",
    jobTitle: "AI Ethicist",
    scenarioContext: "Your company's new hiring AI is rejecting female candidates at a 15% higher rate than males for engineering roles, despite equal qualifications.",
    text: "What is your diagnosis and action?",
    options: [
      { id: "ai_1_a", text: "The model is likely trained on biased historical data. Pause deployment and audit the training set.", score: 4 },
      { id: "ai_1_b", text: "Manually adjust the scores of female candidates to match males.", score: -1 }, // Bandaid
      { id: "ai_1_c", text: "Assume the male candidates just happen to be better qualified this time.", score: -1 },
      { id: "ai_1_d", text: "Remove 'Gender' from the input data and redeploy immediately.", score: 1 }, // Incomplete fix (proxies exist)
    ],
  },
  {
    id: "job_ai_2",
    section: "job-simulation",
    jobId: "ai_ethicist",
    jobTitle: "AI Ethicist",
    scenarioContext: "A self-driving car algorithm must choose between hitting a pedestrian who jaywalked or swerving into a wall, injuring the passenger.",
    text: "Which ethical framework do you apply to the code logic?",
    options: [
      { id: "ai_2_a", text: "Prioritize the passenger's safety at all costs (Customer First).", score: 0 },
      { id: "ai_2_b", text: "Minimize total harm (Utilitarianism), likely saving the pedestrian if passenger injury is minor.", score: 4 },
      { id: "ai_2_c", text: "Randomize the decision to avoid liability.", score: -1 },
      { id: "ai_2_d", text: "Hand control back to the driver, even if there isn't time.", score: -1 },
    ],
  },
  {
    id: "job_ai_3",
    section: "job-simulation",
    jobId: "ai_ethicist",
    jobTitle: "AI Ethicist",
    scenarioContext: "A medical AI predicts patient outcomes with 99% accuracy but acts like a 'black box'—doctors can't understand why it recommends a treatment.",
    text: "Do you approve this for hospital use?",
    options: [
      { id: "ai_3_a", text: "Yes, accuracy is the only thing that matters in saving lives.", score: 0 },
      { id: "ai_3_b", text: "No, explainability is crucial for trust and liability. Require 'Explainable AI' features first.", score: 4 },
      { id: "ai_3_c", text: "Approve it only for junior doctors.", score: -1 },
      { id: "ai_3_d", text: "Use it only for non-critical cases.", score: 1 },
    ],
  },

  // Job 3: Space Architect
  {
    id: "job_sa_1",
    section: "job-simulation",
    jobId: "space_architect",
    jobTitle: "Space Architect",
    scenarioContext: "You are designing a Mars habitat. A dust storm will block solar panels for 3 weeks. Storage batteries only last 1 week.",
    text: "What is the critical design change?",
    options: [
      { id: "sa_1_a", text: "Add more solar panels.", score: -1 },
      { id: "sa_1_b", text: "Integrate a compact nuclear Kilopower reactor for backup energy.", score: 4 },
      { id: "sa_1_c", text: "Reduce habitat size to consume less power.", score: 1 },
      { id: "sa_1_d", text: "Instruct astronauts to sleep for 3 weeks.", score: -1 },
    ],
  },
  {
    id: "job_sa_2",
    section: "job-simulation",
    jobId: "space_architect",
    jobTitle: "Space Architect",
    scenarioContext: "Microgravity causes muscle atrophy. You need to design the living quarters of a deep-space station.",
    text: "Which feature is non-negotiable?",
    options: [
      { id: "sa_2_a", text: "Luxurious sleeping pods for mental health.", score: 0 },
      { id: "sa_2_b", text: "Integrated resistive exercise equipment and artificial gravity zones.", score: 4 },
      { id: "sa_2_c", text: "Large viewing windows.", score: 1 },
      { id: "sa_2_d", text: "Zero-G floating zones for fun.", score: -1 },
    ],
  },
  {
    id: "job_sa_3",
    section: "job-simulation",
    jobId: "space_architect",
    jobTitle: "Space Architect",
    scenarioContext: "The radiation shielding material is too heavy for the launch rocket's payload limit.",
    text: "How do you solve this constraint?",
    options: [
      { id: "sa_3_a", text: "Remove the shielding and hope for low solar activity.", score: -1 },
      { id: "sa_3_b", text: "Design the habitat to use Martian soil (regolith) as shielding after landing.", score: 4 },
      { id: "sa_3_c", text: "Make the walls thinner.", score: -1 },
      { id: "sa_3_d", text: "Launch in two parts (doubles the cost).", score: 1 },
    ],
  },

  // --- SECTION 3: ACADEMIC (Science/Math Class 10 - Hard) ---
  {
    id: "acad_1",
    section: "academic",
    text: "Two resistors R1 and R2 are connected in parallel. If R1 > R2, the equivalent resistance R is:",
    options: [
      { id: "ac_1_a", text: "Greater than R1", isCorrect: false },
      { id: "ac_1_b", text: "Between R1 and R2", isCorrect: false },
      { id: "ac_1_c", text: "Less than R2", isCorrect: true }, // Correct (R < min(R1, R2))
      { id: "ac_1_d", text: "Equal to R1 + R2", isCorrect: false },
    ],
  },
  {
    id: "acad_2",
    section: "academic",
    text: "If the roots of the equation ax² + bx + c = 0 are equal, then c is equal to:",
    options: [
      { id: "ac_2_a", text: "-b / 2a", isCorrect: false },
      { id: "ac_2_b", text: "b / 2a", isCorrect: false },
      { id: "ac_2_c", text: "-b² / 4a", isCorrect: false },
      { id: "ac_2_d", text: "b² / 4a", isCorrect: true }, // Correct (D = b^2 - 4ac = 0 => c = b^2/4a)
    ],
  },
  {
    id: "acad_3",
    section: "academic",
    text: "Which of the following hydrocarbons undergoes addition reactions?",
    options: [
      { id: "ac_3_a", text: "C2H6 (Ethane)", isCorrect: false },
      { id: "ac_3_b", text: "C3H8 (Propane)", isCorrect: false },
      { id: "ac_3_c", text: "C2H4 (Ethene)", isCorrect: true }, // Correct (Unsaturated)
      { id: "ac_3_d", text: "CH4 (Methane)", isCorrect: false },
    ],
  },
];
