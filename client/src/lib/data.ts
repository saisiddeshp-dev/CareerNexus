export type SectionType = "thinking" | "job-simulation" | "academic";
export type JobId = 
  | "ai_prompt_engineer" | "data_scientist" | "investment_banker" | "product_manager" 
  | "ui_ux_designer" | "management_consultant" | "cybersecurity_analyst" | "digital_marketing_head"
  | "sustainability_consultant" | "blockchain_developer" | "hr_director" | "cloud_architect"
  | "corporate_lawyer" | "supply_chain_manager" | "renewable_energy_engineer" | "growth_hacker"
  | "full_stack_developer" | "bio_tech_researcher" | "financial_risk_manager" | "content_strategist"
  | "hospital_administrator" | "e_commerce_specialist" | "operations_manager" | "user_researcher"
  | "ethical_hacker";

export interface Option {
  id: string;
  text: string;
  score?: number;
  isCorrect?: boolean;
}

export interface Question {
  id: string;
  section: SectionType;
  text: string;
  options: Option[];
  jobId?: JobId;
  jobTitle?: string;
  scenarioContext?: string;
}

export const questions: Question[] = [
  // --- SECTION 1: COGNITIVE & BEHAVIORAL (15 Questions) ---
  {
    id: "th_6",
    section: "thinking",
    text: "When learning a new software or tool, you prefer to:",
    options: [
      { id: "th_6_a", text: "Read the entire manual/documentation first." },
      { id: "th_6_b", text: "Click around and try to figure it out by doing." },
      { id: "th_6_c", text: "Watch a 'Quick Start' video tutorial." },
      { id: "th_6_d", text: "Ask a friend or colleague to show you the basics." },
    ],
  },
  {
    id: "th_7",
    section: "thinking",
    text: "In a high-stakes competition, your primary focus is:",
    options: [
      { id: "th_7_a", text: "Outsmarting the opponent through superior logic." },
      { id: "th_7_b", text: "Creating a unique strategy no one else has thought of." },
      { id: "th_7_c", text: "Ensuring you don't make any preventable errors." },
      { id: "th_7_d", text: "Building a strong, supportive team spirit to win together." },
    ],
  },
  {
    id: "th_8",
    section: "thinking",
    text: "If you find a 'shortcut' that gets the job done faster but skips a minor safety check, you:",
    options: [
      { id: "th_8_a", text: "Never use it; rules exist for a reason." },
      { id: "th_8_b", text: "Use it only if you are 100% sure it won't cause a disaster." },
      { id: "th_8_c", text: "Analyze the risk vs. reward and decide based on the deadline." },
      { id: "th_8_d", text: "Ask for permission before trying the shortcut." },
    ],
  },
  {
    id: "th_9",
    section: "thinking",
    text: "When you are explaining a difficult concept to someone, you use:",
    options: [
      { id: "th_9_a", text: "Data, charts, and mathematical proofs." },
      { id: "th_9_b", text: "Metaphors, stories, and sketches." },
      { id: "th_9_c", text: "Step-by-step instructions and practical examples." },
      { id: "th_9_d", text: "Emotional appeals and real-life human impact stories." },
    ],
  },
  {
    id: "th_10",
    section: "thinking",
    text: "Your ideal workspace looks like:",
    options: [
      { id: "th_10_a", text: "A clean, organized desk with everything in its place." },
      { id: "th_10_b", text: "A 'creative mess' with notes and inspiration everywhere." },
      { id: "th_10_c", text: "A standard office setup that is functional and quiet." },
      { id: "th_10_d", text: "A vibrant, open-plan area where you can talk to others." },
    ],
  },
  {
    id: "th_11",
    section: "thinking",
    text: "When you fail at a task, your first thought is:",
    options: [
      { id: "th_11_a", text: "'What part of the process was logically flawed?'" },
      { id: "th_11_b", text: "'How can I approach this from a completely different angle?'" },
      { id: "th_11_c", text: "'I need to practice more and follow the rules better next time.'" },
      { id: "th_11_d", text: "'Who can I talk to for advice or a morale boost?'" },
    ],
  },
  {
    id: "th_12",
    section: "thinking",
    text: "You are most comfortable making decisions based on:",
    options: [
      { id: "th_12_a", text: "Hard facts and objective evidence." },
      { id: "th_12_b", text: "Your intuition and 'gut feeling'." },
      { id: "th_12_c", text: "Historical data and what has worked in the past." },
      { id: "th_12_d", text: "How the decision will affect the people involved." },
    ],
  },
  {
    id: "th_13",
    section: "thinking",
    text: "How do you handle repetitive tasks?",
    options: [
      { id: "th_13_a", text: "You find it relaxing and try to perfect the efficiency." },
      { id: "th_13_b", text: "You get bored quickly and try to automate it." },
      { id: "th_13_c", text: "You do it diligently because it's part of the job." },
      { id: "th_13_d", text: "You try to turn it into a social activity or a game." },
    ],
  },
  {
    id: "th_14",
    section: "thinking",
    text: "When reading a news article, you are most interested in:",
    options: [
      { id: "th_14_a", text: "The statistics and the 'how' behind the event." },
      { id: "th_14_b", text: "The future implications and 'what if' scenarios." },
      { id: "th_14_c", text: "The factual timeline of what exactly happened." },
      { id: "th_14_d", text: "The personal stories of the individuals affected." },
    ],
  },
  {
    id: "th_15",
    section: "thinking",
    text: "If you were to write a book, it would likely be:",
    options: [
      { id: "th_15_a", text: "A technical guide or a scientific discovery." },
      { id: "th_15_b", text: "A science-fiction or fantasy novel." },
      { id: "th_15_c", text: "A biography or a historical non-fiction." },
      { id: "th_15_d", text: "A book on psychology, self-help, or social change." },
    ],
  },
  {
    id: "th_16",
    section: "thinking",
    text: "When you are part of a team, you are the person who:",
    options: [
      { id: "th_16_a", text: "Double-checks the math and the logic." },
      { id: "th_16_b", text: "Suggests the 'crazy' ideas that might actually work." },
      { id: "th_16_c", text: "Makes sure everyone stays on schedule." },
      { id: "th_16_d", text: "Resolves arguments and keeps the mood positive." },
    ],
  },
  {
    id: "th_17",
    section: "thinking",
    text: "Your favorite type of puzzle is:",
    options: [
      { id: "th_17_a", text: "Sudoku or logic grids." },
      { id: "th_17_b", text: "Riddles or abstract art puzzles." },
      { id: "th_17_c", text: "Crosswords or trivia." },
      { id: "th_17_d", text: "Role-playing games or social strategy games." },
    ],
  },
  {
    id: "th_18",
    section: "thinking",
    text: "In a crisis, you are the one who:",
    options: [
      { id: "th_18_a", text: "Analyzes the cause of the crisis immediately." },
      { id: "th_18_b", text: "Finds a creative way to bypass the problem." },
      { id: "th_18_c", text: "Stays calm and follows the emergency protocol." },
      { id: "th_18_d", text: "Checks on everyone to make sure they are okay." },
    ],
  },
  {
    id: "th_19",
    section: "thinking",
    text: "You view technology primarily as:",
    options: [
      { id: "th_19_a", text: "A tool for calculation and data processing." },
      { id: "th_19_b", text: "A medium for creation and expression." },
      { id: "th_19_c", text: "A way to make life more organized and efficient." },
      { id: "th_19_d", text: "A bridge to connect people across the world." },
    ],
  },
  {
    id: "th_20",
    section: "thinking",
    text: "Which of these words describes you best?",
    options: [
      { id: "th_20_a", text: "Systematic" },
      { id: "th_20_b", text: "Visionary" },
      { id: "th_20_c", text: "Reliable" },
      { id: "th_20_d", text: "Empathetic" },
    ],
  },

  // --- SECTION 2: JOB SIMULATION (25 Jobs) ---
  
  // 1. AI Prompt Engineer
  {
    id: "job_aipe_1",
    section: "job-simulation",
    jobId: "ai_prompt_engineer",
    jobTitle: "AI Prompt Engineer",
    scenarioContext: "Model Hallucination: A model gives a confident but false legal citation.",
    text: "Do you:",
    options: [
      { id: "aipe_1_a", text: "Ban the topic entirely from the prompt.", score: -1 },
      { id: "aipe_1_b", text: "Add a 'System Instruction' to only use provided text or cite 'I don't know'.", score: 4 },
    ],
  },
  {
    id: "job_aipe_2",
    section: "job-simulation",
    jobId: "ai_prompt_engineer",
    jobTitle: "AI Prompt Engineer",
    scenarioContext: "Bias Detection: AI generates only male CEOs in images.",
    text: "Do you:",
    options: [
      { id: "aipe_2_a", text: "Manually edit the generated images.", score: 0 },
      { id: "aipe_2_b", text: "Adjust the prompt to include 'diverse representation' and 'gender-neutral roles'.", score: 4 },
    ],
  },

  // 2. Data Scientist
  {
    id: "job_ds_1",
    section: "job-simulation",
    jobId: "data_scientist",
    jobTitle: "Data Scientist",
    scenarioContext: "Outliers: Data shows one customer spent $1 million when the average is $50.",
    text: "Do you:",
    options: [
      { id: "ds_1_a", text: "Delete it as an error to keep the mean clean.", score: -1 },
      { id: "ds_1_b", text: "Investigate if it's a 'Whale' customer or a data entry glitch.", score: 4 },
    ],
  },
  {
    id: "job_ds_2",
    section: "job-simulation",
    jobId: "data_scientist",
    jobTitle: "Data Scientist",
    scenarioContext: "The board doesn't understand your complex mathematical model.",
    text: "Do you:",
    options: [
      { id: "ds_2_a", text: "Explain the calculus behind the neural network.", score: -1 },
      { id: "ds_2_b", text: "Create a visual dashboard showing 'ROI' impact and key drivers.", score: 4 },
    ],
  },

  // 3. Investment Banker
  {
    id: "job_ib_1",
    section: "job-simulation",
    jobId: "investment_banker",
    jobTitle: "Investment Banker",
    scenarioContext: "Due Diligence: You find a small debt the seller didn't mention.",
    text: "Do you:",
    options: [
      { id: "ib_1_a", text: "Hide it to finish the deal and get the commission.", score: -1 },
      { id: "ib_1_b", text: "Disclose it and renegotiate the price with the buyer.", score: 4 },
    ],
  },

  // 4. Product Manager
  {
    id: "job_pm_1",
    section: "job-simulation",
    jobId: "product_manager",
    jobTitle: "Product Manager",
    scenarioContext: "Feature Bloat: Users want 10 new features but you have 2 weeks.",
    text: "Do you:",
    options: [
      { id: "pm_1_a", text: "Build all 10 by making the team work overtime.", score: -1 },
      { id: "pm_1_b", text: "Use 'RICE' scoring (Reach, Impact, Confidence, Effort) to pick the top 2.", score: 4 },
    ],
  },

  // 5. UI/UX Designer
  {
    id: "job_uiux_1",
    section: "job-simulation",
    jobId: "ui_ux_designer",
    jobTitle: "UI/UX Designer",
    scenarioContext: "Accessibility: Your color scheme looks great but is hard for colorblind people.",
    text: "Do you:",
    options: [
      { id: "uiux_1_a", text: "Keep it for the 'Aesthetic' appeal.", score: -1 },
      { id: "uiux_1_b", text: "Adjust contrast and use patterns to meet 'WCAG' standards.", score: 4 },
    ],
  },

  // 7. Cybersecurity Analyst
  {
    id: "job_csa_1",
    section: "job-simulation",
    jobId: "cybersecurity_analyst",
    jobTitle: "Cybersecurity Analyst",
    scenarioContext: "Ransomware: A server is locked and hackers want 5 BTC.",
    text: "Do you:",
    options: [
      { id: "csa_1_a", text: "Pay the hackers to get the data back fast.", score: -1 },
      { id: "csa_1_b", text: "Restore from 'Offline Backups' and investigate the entry point.", score: 4 },
    ],
  },

  // 17. Full Stack Developer
  {
    id: "job_fsd_1",
    section: "job-simulation",
    jobId: "full_stack_developer",
    jobTitle: "Full Stack Developer",
    scenarioContext: "Security: A user enters <script>alert(1)</script> in a form.",
    text: "Do you:",
    options: [
      { id: "fsd_1_a", text: "Print it back to the screen as-is.", score: -1 },
      { id: "fsd_1_b", text: "'Sanitize' the input to prevent XSS attacks.", score: 4 },
    ],
  },

  // --- SECTION 3: ACADEMIC (Competency Filter) ---
  {
    id: "acad_math_1",
    section: "academic",
    text: "A metallic sphere of radius 4.2 cm is melted and recast into the shape of a cylinder of radius 6 cm. Find the height of the cylinder.",
    options: [
      { id: "ac_m1_a", text: "2.74 cm", isCorrect: true },
      { id: "ac_m1_b", text: "3.12 cm", isCorrect: false },
      { id: "ac_m1_c", text: "2.14 cm", isCorrect: false },
      { id: "ac_m1_d", text: "3.50 cm", isCorrect: false },
    ],
  },
  {
    id: "acad_math_2",
    section: "academic",
    text: "If the sum of the zeros of the quadratic polynomial f(x)=kx² +2x+3k is equal to their product, find the value of k.",
    options: [
      { id: "ac_m2_a", text: "−2/3", isCorrect: true },
      { id: "ac_m2_b", text: "2/3", isCorrect: false },
      { id: "ac_m2_c", text: "−3/2", isCorrect: false },
      { id: "ac_m2_d", text: "1", isCorrect: false },
    ],
  },
  {
    id: "acad_sci_1",
    section: "academic",
    text: "An object is placed at the Center of Curvature of a concave mirror. Where is the image formed?",
    options: [
      { id: "ac_s1_a", text: "At F", isCorrect: false },
      { id: "ac_s1_b", text: "Between C and F", isCorrect: false },
      { id: "ac_s1_c", text: "At C", isCorrect: true },
      { id: "ac_s1_d", text: "Beyond C", isCorrect: false },
    ],
  },
  {
    id: "acad_sci_2",
    section: "academic",
    text: "The breakdown of pyruvate to give carbon dioxide, water, and energy takes place in:",
    options: [
      { id: "ac_s2_a", text: "Cytoplasm", isCorrect: false },
      { id: "ac_s2_b", text: "Mitochondria", isCorrect: true },
      { id: "ac_s2_c", text: "Chloroplast", isCorrect: false },
      { id: "ac_s2_d", text: "Nucleus", isCorrect: false },
    ],
  }
];
