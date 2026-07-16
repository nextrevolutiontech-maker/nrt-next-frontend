

export const AUTHORS: Record<string, {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  bio: string;
  specializations: Array<{ name: string; icon: string }>;
  experience: string[];
  caseStudies: Array<{ title: string; link: string }>;
  whyFounded: { title: string; content: string[] };
}> = {
  "muhammad-ahsan-khan": {
    name: "Muhammad Ahsan Khan",
    role: "Founder & Business Systems Architect",
    image: "/ahsan_new.jpg",
    linkedin: "https://www.linkedin.com/in/muhammad-ahsan-khan-61a51032a/",
    bio: "Muhammad Ahsan Khan is the Founder and Business Systems Architect at Next Revolution Tech. He specializes in designing enterprise ERP systems, deploying AI automation, and driving business process optimization to help organizations achieve operational efficiency and scalability.",
    specializations: [
      { name: "Enterprise ERP Systems", icon: "Award" },
      { name: "Agentic AI Automation", icon: "BrainCircuit" },
      { name: "Business Process Optimization", icon: "LineChart" },
      { name: "SaaS Architecture", icon: "Code2" },
      { name: "Cloud Infrastructure", icon: "Rocket" }
    ],
    experience: [
      "Architected enterprise healthcare ERP systems, improving operational visibility and reducing manual administrative effort.",
      "Deployed autonomous AI agents for SaaS platforms, streamlining business workflows and enhancing lead qualification processes.",
      "Engineered retail operations platforms and custom business software with complex financial API integrations.",
      "Lead technical consultant and architect on 50+ successful business transformation projects."
    ],
    caseStudies: [
      { title: "Healthcare Operations ERP Platform", link: "/case-studies/pulse-healthcare-erp" },
      { title: "AI-Powered Workflow Automation System", link: "/case-studies/autonomous-ai-agent" },
      { title: "Retail Operations & Inventory Platform", link: "/case-studies/textile-mill-pos" }
    ],
    whyFounded: {
      title: "Why I Founded Next Revolution Tech",
      content: [
        "Throughout my career, I observed a recurring pattern: ambitious businesses were constantly being held back by their own internal operations. They were relying on fragile spreadsheets, disconnected legacy systems, and manual data entry that consumed thousands of hours.",
        "Most software agencies were focused on building isolated apps, not solving core operational bottlenecks. I realized that what businesses truly needed wasn't just code—they needed integrated business systems.",
        "I founded NRT to bridge this gap. Our focus on ERP Systems, AI Automation, and Business Process Optimization was born out of the necessity to give organizations complete visibility into their operations and the scalable infrastructure needed to grow without friction."
      ]
    }
  },
  "muzammil-khan": {
    name: "Muzammil Khan",
    role: "Sales Manager & UI/Frontend Designer",
    image: "/muzamil.jpg",
    linkedin: "https://www.linkedin.com/in/muzammil-khan-nrt",
    bio: "Muzammil Khan is the Sales Manager and UI/Frontend Designer at Next Revolution Tech. He bridges the gap between client requirements and technical execution, designing elegant user interfaces while driving growth and partnership strategies.",
    specializations: [
      { name: "UI/UX & Frontend Design", icon: "Award" },
      { name: "B2B Sales & Development", icon: "LineChart" },
      { name: "Client Relations & Strategy", icon: "BrainCircuit" },
      { name: "Tailwind CSS & Web Design", icon: "Code2" },
      { name: "Conversion Rate Optimization", icon: "Rocket" }
    ],
    experience: [
      "Designed user-centric frontends for enterprise client portfolios and custom business dashboards.",
      "Managed business development pipelines, securing and onboarding key partnerships for the NRT agency.",
      "Facilitated client alignment workshops to translate operational needs into interactive frontend mockups.",
      "Led sales and outreach initiatives, expanding NRT's client base in retail and automation sectors."
    ],
    caseStudies: [
      { title: "Healthcare Operations ERP Platform", link: "/case-studies/pulse-healthcare-erp" },
      { title: "Retail Operations & Inventory Platform", link: "/case-studies/textile-mill-pos" }
    ],
    whyFounded: {
      title: "My Mission at Next Revolution Tech",
      content: [
        "In modern software development, a great backend system is only as good as the interface that exposes it. Users need to feel empowered, not confused, by the tools they use to run their businesses.",
        "Joining NRT allowed me to focus on creating frontend experiences that are not only beautiful but highly intuitive. I believe that enterprise software doesn't have to be clunky or boring; it can be sleek, responsive, and delightful to use.",
        "On the sales and growth side, my objective is to help business leaders understand the value of digital transformation. By matching their organizational goals with our custom ERP and AI automation capabilities, we ensure a partnership built on transparency and high return on investment."
      ]
    }
  },
  "taha-siraj": {
    name: "Taha Siraj",
    role: "Full Stack Engineer & Shopify Developer",
    image: "/taha_siraj.jpg",
    linkedin: "https://www.linkedin.com/in/taha-siraj-nrt",
    bio: "Taha Siraj is a Full Stack MERN Developer and Shopify Specialist at Next Revolution Tech, designing and building scalable web applications and e-commerce solutions for global clients across the UK, Uganda, and beyond.",
    specializations: [
      { name: "MERN Stack Development", icon: "Code2" },
      { name: "Shopify Store Development", icon: "Award" },
      { name: "API Security & Auth (JWT/RBAC)", icon: "BrainCircuit" },
      { name: "Agile Delivery & Consulting", icon: "LineChart" },
      { name: "ERP Module Engineering", icon: "Rocket" }
    ],
    experience: [
      "Built scalable web applications and e-commerce solutions for international clients across the UK, Uganda, and globally.",
      "Designed and customized Shopify storefronts including theme customization, bulk product imports, and catalog management.",
      "Engineered REST APIs with secure JWT authentication and role-based access control (RBAC) for enterprise applications.",
      "Developed student management, exam tracking, and role-based dashboards for ERP-style platforms supporting 500+ users."
    ],
    caseStudies: [
      { title: "Healthcare Operations ERP Platform", link: "/case-studies/pulse-healthcare-erp" },
      { title: "Retail Operations & Inventory Platform", link: "/case-studies/textile-mill-pos" }
    ],
    whyFounded: {
      title: "My Mission at Next Revolution Tech",
      content: [
        "In a fast-paced digital economy, software needs to translate business requirements into working software seamlessly. My goal is to build end-to-end applications that are performant, robust, and secure.",
        "Whether launching a customized Shopify store to save setup time or engineering role-based dashboard access controls for enterprise platforms, I believe in combining tech execution with active client problem-solving.",
        "Working in NRT's Agile environment allows me to deliver value consistently, ensuring high code quality and on-time shipping for every client project."
      ]
    }
  }
};
