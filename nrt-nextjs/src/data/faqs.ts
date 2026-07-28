export interface FAQItemData {
  q: string;
  a: string;
  img?: string;
  category?: string;
}

export const HOME_FAQS: FAQItemData[] = [
  {
    q: "What is your approach to implementing custom ERP Systems?",
    a: "Next Revolution Tech engineers custom ERP systems tailored to your unique operational workflows. We integrate multi-branch inventory, real-time financial accounting, automated procurement, and local tax compliance (e.g. FBR). Our modular approach eliminates spreadsheet bottlenecks, prevents stock leaks, and provides 100% code ownership with zero annual per-user license fees.",
    img: "/faq-icons/erp.png",
    category: "ERP",
  },
  {
    q: "How does Agentic AI Workflow Automation benefit enterprise operations?",
    a: "Agentic AI automation replaces repetitive manual tasks with autonomous LLM workflows. It automates 24/7 customer support, lead qualification, document parsing, and database synchronization. By deploying self-governing AI agents, companies reduce operational overhead by up to 40% while accelerating workflow response times from hours to milliseconds.",
    img: "/faq-icons/ai.png",
    category: "AI",
  },
  {
    q: "Do you build bespoke enterprise software from scratch?",
    a: "Yes. We design and build end-to-end custom software solutions, multi-tenant SaaS platforms, and internal management portals. Every platform features scalable microservice or monolithic architectures, role-based access control (RBAC), robust API documentation, and sub-second page performance.",
    img: "/faq-icons/software.png",
    category: "Software",
  },
  {
    q: "How does the Dedicated Technology Team engagement model operate?",
    a: "Our Dedicated Engineering Team model provides instant access to senior full-stack developers, UI/UX designers, and software architects without hiring overhead. Engineers integrate directly into your Slack/Jira communication channels, adhering to Agile sprints, continuous CI/CD deployments, and daily progress reporting.",
    img: "/faq-icons/team.png",
    category: "Teams",
  },
  {
    q: "How does Next Revolution Tech ensure system security and regulatory compliance?",
    a: "All applications built by Next Revolution Tech incorporate enterprise-grade security protocols, including AES-256 data encryption at rest, TLS 1.3 in transit, automated vulnerability scanning, OWASP compliance, and seamless integration with official tax APIs (such as FBR in Pakistan).",
    img: "/faq-icons/nrt.png",
    category: "Security",
  },
  {
    q: "What is the typical timeline and process for an enterprise ERP or custom software project?",
    a: "A standard enterprise build spans 6 to 12 weeks divided into distinct phases: 1) System Audit & Architecture Specs (Week 1-2), 2) Agile Sprint Slices (Week 3-8), 3) QA & Integration Testing (Week 9-10), and 4) Staff Onboarding & Production Go-Live (Week 11-12).",
    img: "/faq-icons/erp.png",
    category: "Process",
  },
];

