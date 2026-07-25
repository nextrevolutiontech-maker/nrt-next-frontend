/**
 * Centralized founder & brand identity constants.
 * To swap the founder photo: place the file in /public and update imageUrl.
 */
export const FOUNDER = {
  name: "Muhammad Ahsan Khan",
  title: "Founder & Lead Software Architect",
  linkedInUrl: "https://www.linkedin.com/in/muhammad-ahsan-khan-founder-61a51032a",
  /** Replace with "/founder-ahsan-khan.jpg" when the professional photo is ready */
  imageUrl: "/ceo.png",
} as const;

export const TEAM_MEMBERS = [
  {
    slug: "muhammad-ahsan-khan",
    name: "Muhammad Ahsan Khan",
    title: "Founder & Lead Architect",
    linkedInUrl: "https://www.linkedin.com/in/muhammad-ahsan-khan-founder-61a51032a",
    imageUrl: "/ceo.png",
    bio: "Founder and Lead Solutions Architect at Next Revolution Tech. He specializes in designing enterprise ERP systems, deploying AI automation, and driving business process optimization.",
    skills: ["Enterprise ERP Systems", "Agentic AI Automation", "Business Process Optimization", "SaaS Architecture", "Cloud Infrastructure"]
  },
  {
    slug: "muzammil-khan",
    name: "Muzammil Khan",
    title: "Sales Manager & UI/Frontend Designer",
    linkedInUrl: "",
    imageUrl: "/muzamil.jpg",
    bio: "Sales Manager and UI/Frontend Designer at Next Revolution Tech. He bridges the gap between client requirements and technical execution, designing elegant user interfaces while driving growth and partnership strategies.",
    skills: ["UI/UX Design", "B2B Sales", "Client Relations", "Tailwind CSS", "Web Design"]
  },
  {
    slug: "taha-siraj",
    name: "Taha Siraj",
    title: "Full Stack Engineer & Shopify Developer",
    linkedInUrl: "",
    imageUrl: "/taha_siraj.jpg",
    bio: "Full Stack MERN Developer at Next Revolution Tech, building scalable web applications and e-commerce solutions for international clients across the UK, Uganda, and beyond. With hands-on expertise in React.js, Next.js, Node.js, Express, and MongoDB, he handles both frontend interfaces and backend architecture — including REST API design, JWT authentication, and role-based access control (RBAC) for enterprise-grade systems.",
    skills: ["MERN Stack Development", "Shopify Store Development", "REST API Design", "Agile Execution", "ERP Systems"]
  }
] as const;

export const COMPANY_SOCIAL = {
  linkedInCompany: "https://www.linkedin.com/company/nextrevolutiontech",
  instagram: "https://www.instagram.com/nextrevolutiontech",
  github: "https://github.com/nextrevolutiontech-maker",
} as const;
