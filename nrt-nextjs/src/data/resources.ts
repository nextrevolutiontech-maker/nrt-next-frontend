export type ResourceCategory = 
  | "ERP Systems"
  | "AI Automation"
  | "Business Process Optimization"
  | "Custom Software"
  | "Business Operations"
  | "Dedicated Teams"
  | "Digital Transformation";

export interface ResourceArticle {
  id: string;
  title: string;
  category: ResourceCategory;
  businessProblem: string;
  expectedOutcome: string;
  readingTime: string;
  link: string;
  isPillar: boolean;
  relatedSolutions: string[];
}

export const resourcesData: ResourceArticle[] = [
  {
    id: "playbook-01",
    title: "AI Operations Playbook 2026: How Modern Teams Scale Smarter",
    category: "AI Automation",
    businessProblem: "High operational costs and 15+ hours lost weekly to manual copy-pasting between disconnected systems.",
    expectedOutcome: "Automate 70% of manual workflows with Agentic AI and reclaim 240+ operational hours monthly.",
    readingTime: "15 min read (14-Page Executive Playbook)",
    link: "/playbooks/ai-operations-2026",
    isPillar: true,
    relatedSolutions: ["Agentic AI Workflows", "NRT AI Readiness Score™", "AI Architecture Audit"]
  },
  // ERP Systems (5)
  {
    id: "erp-01",
    title: "What Is Modern ERP Software? A Guide for Decision Makers",
    category: "ERP Systems",
    businessProblem: "Disconnected systems and lack of real-time visibility across departments.",
    expectedOutcome: "A unified system architecture that centralizes data and operations.",
    readingTime: "12 min read",
    link: "/resources/what-is-erp-software",
    isPillar: true,
    relatedSolutions: ["Enterprise ERP Development", "Legacy System Migration"]
  },
  {
    id: "erp-02",
    title: "ERP vs Excel: When to Make the Switch",
    category: "ERP Systems",
    businessProblem: "Heavy reliance on spreadsheets causing manual errors and workflow delays.",
    expectedOutcome: "Automated data flows, eliminated manual entry, and scalable processes.",
    readingTime: "8 min read",
    link: "/resources/erp-vs-excel",
    isPillar: true,
    relatedSolutions: ["Business Process Optimization", "Custom ERP Systems"]
  },
  {
    id: "erp-03",
    title: "The Complete ERP Implementation Guide",
    category: "ERP Systems",
    businessProblem: "High failure rates and cost overruns in software deployments.",
    expectedOutcome: "A structured, phased rollout that guarantees user adoption and ROI.",
    readingTime: "15 min read",
    link: "/resources/erp-implementation-guide",
    isPillar: true,
    relatedSolutions: ["Digital Transformation Consulting", "Enterprise Architecture"]
  },
  {
    id: "erp-04",
    title: "ERP For Manufacturing: Tracking from Floor to Delivery",
    category: "ERP Systems",
    businessProblem: "Inventory blind spots and inefficient supply chain management.",
    expectedOutcome: "End-to-end traceability, reduced waste, and optimized production scheduling.",
    readingTime: "10 min read",
    link: "/resources/erp-for-manufacturing",
    isPillar: false,
    relatedSolutions: ["Manufacturing Resource Planning (MRP)", "Supply Chain Integration"]
  },
  {
    id: "erp-05",
    title: "Understanding the True Cost of ERP Implementation",
    category: "ERP Systems",
    businessProblem: "Unpredictable software scaling costs and hidden licensing fees.",
    expectedOutcome: "Clear cost projections, optimized tech stack, and long-term financial modeling.",
    readingTime: "9 min read",
    link: "/resources/erp-cost-guide",
    isPillar: false,
    relatedSolutions: ["Software Auditing", "Custom Business Software"]
  },

  // AI Automation (5)
  {
    id: "ai-01",
    title: "What Is AI Automation for Enterprise?",
    category: "AI Automation",
    businessProblem: "High operational costs driven by repetitive manual tasks.",
    expectedOutcome: "Autonomous workflows capable of handling complex rule-based operations.",
    readingTime: "11 min read",
    link: "/resources/what-is-ai-automation",
    isPillar: true,
    relatedSolutions: ["AI Agent Development", "Workflow Automation"]
  },
  {
    id: "ai-02",
    title: "How AI Reduces Operational Costs by 40%",
    category: "AI Automation",
    businessProblem: "Scaling operations linearly requires proportional increases in headcount.",
    expectedOutcome: "Non-linear scaling through intelligent document processing and routing.",
    readingTime: "10 min read",
    link: "/resources/how-ai-reduces-costs",
    isPillar: true,
    relatedSolutions: ["Business Process Optimization", "Data Engineering"]
  },
  {
    id: "ai-03",
    title: "Deploying AI Agents for Business Support",
    category: "AI Automation",
    businessProblem: "Slow response times in internal support and customer service.",
    expectedOutcome: "24/7 intelligent tier-1 resolution and data triage systems.",
    readingTime: "7 min read",
    link: "/resources/ai-agents-business",
    isPillar: false,
    relatedSolutions: ["Customer Service Automation", "LLM Integration"]
  },
  {
    id: "ai-04",
    title: "Real-world AI Automation Examples in Operations",
    category: "AI Automation",
    businessProblem: "Uncertainty regarding practical, non-hype AI applications in business.",
    expectedOutcome: "Concrete use cases for automated invoice processing, predictive maintenance, and HR onboarding.",
    readingTime: "8 min read",
    link: "/resources/ai-automation-examples",
    isPillar: false,
    relatedSolutions: ["Custom AI Solutions", "Digital Transformation"]
  },
  {
    id: "ai-05",
    title: "The Ultimate Workflow Automation Guide",
    category: "AI Automation",
    businessProblem: "Fragmented software tools that don't communicate with each other.",
    expectedOutcome: "Seamless API integrations and event-driven data architectures.",
    readingTime: "14 min read",
    link: "/resources/workflow-automation-guide",
    isPillar: true,
    relatedSolutions: ["API Integration", "Business Process Optimization"]
  },

  // Business Systems & Custom Software (4)
  {
    id: "bs-01",
    title: "When To Build Custom Software vs Buying SaaS",
    category: "Custom Software",
    businessProblem: "Off-the-shelf software forcing the business to change its unique processes.",
    expectedOutcome: "A definitive matrix for evaluating build vs. buy based on operational complexity.",
    readingTime: "12 min read",
    link: "/resources/build-vs-buy",
    isPillar: true,
    relatedSolutions: ["Custom Software Development", "SaaS Implementation"]
  },
  {
    id: "bs-02",
    title: "Business Process Optimization Framework",
    category: "Business Process Optimization",
    businessProblem: "Inefficient, poorly documented workflows causing operational bottlenecks.",
    expectedOutcome: "Streamlined, lean processes ready for digital automation.",
    readingTime: "15 min read",
    link: "/resources/bpo-framework",
    isPillar: true,
    relatedSolutions: ["Workflow Auditing", "Digital Transformation"]
  },
  {
    id: "bs-03",
    title: "How to Scale Operations Without Breaking Systems",
    category: "Business Operations",
    businessProblem: "System crashes and data silos as the company experiences rapid growth.",
    expectedOutcome: "Scalable microservices and cloud architectures built for high transaction volumes.",
    readingTime: "9 min read",
    link: "/resources/scale-operations",
    isPillar: false,
    relatedSolutions: ["Cloud Infrastructure", "System Architecture"]
  },
  {
    id: "bs-04",
    title: "Signs Your Business Has Outgrown Spreadsheets",
    category: "Business Operations",
    businessProblem: "Data corruption, version control issues, and lack of security in Excel.",
    expectedOutcome: "Transition to centralized databases with role-based access control.",
    readingTime: "6 min read",
    link: "/resources/outgrown-spreadsheets",
    isPillar: false,
    relatedSolutions: ["Database Migration", "Custom Web Applications"]
  },

  // Dedicated Teams (3)
  {
    id: "dt-01",
    title: "Dedicated Team vs In-House Engineering",
    category: "Dedicated Teams",
    businessProblem: "High recruiting costs and slow time-to-market for technical projects.",
    expectedOutcome: "Immediate access to cohesive, pre-vetted engineering units.",
    readingTime: "10 min read",
    link: "/resources/dedicated-vs-inhouse",
    isPillar: true,
    relatedSolutions: ["Dedicated Technology Teams", "Staff Augmentation"]
  },
  {
    id: "dt-02",
    title: "The Enterprise Staff Augmentation Guide",
    category: "Dedicated Teams",
    businessProblem: "Skill gaps in specialized technologies (AI, Cloud, Enterprise Architecture).",
    expectedOutcome: "Seamless integration of senior engineers into existing workflows.",
    readingTime: "8 min read",
    link: "/resources/staff-augmentation-guide",
    isPillar: false,
    relatedSolutions: ["Team Scaling", "Project Rescue"]
  },
  {
    id: "dt-03",
    title: "How Dedicated Teams Reduce CapEx by 30%",
    category: "Dedicated Teams",
    businessProblem: "Unpredictable software development costs and high overhead.",
    expectedOutcome: "Predictable monthly burn rates and zero recruiting/retention overhead.",
    readingTime: "7 min read",
    link: "/resources/dedicated-teams-roi",
    isPillar: false,
    relatedSolutions: ["Technology Consulting", "Dedicated Technology Teams"]
  }
];
