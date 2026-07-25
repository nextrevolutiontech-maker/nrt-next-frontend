export interface FAQItemData {
  q: string;
  a: string;
  img?: string;
}

export const HOME_FAQS: FAQItemData[] = [
  {
    q: "What is your approach to implementing ERP Systems?",
    a: "We don't just install software; we align the ERP with your core business processes. From centralized databases to custom portal interfaces, we ensure that the system eliminates manual bottlenecks and provides real-time operational visibility.",
    img: "/faq-icons/erp.png",
  },
  {
    q: "How can AI Automation help my business?",
    a: "AI Automation replaces repetitive, manual tasks with intelligent workflows. This includes automating customer support, qualifying leads, and streamlining data entry, allowing your team to focus on high-value growth initiatives.",
    img: "/faq-icons/ai.png",
  },
  {
    q: "Do you build custom software from scratch?",
    a: "Yes. Whether you need a specialized SaaS platform, an internal management dashboard, or a complex integration with legacy systems, our engineering team builds secure, scalable, and tailored software solutions.",
    img: "/faq-icons/software.png",
  },
  {
    q: "How does the Dedicated Technology Team model work?",
    a: "You get immediate access to a full stack of elite engineers, designers, and project managers without the recruitment overhead. They integrate directly with your operations to provide continuous technical execution for your long-term roadmap.",
    img: "/faq-icons/team.png",
  },
  {
    q: "How is NRT different from a typical development agency?",
    a: "We are an outcome-driven business transformation partner. We focus on delivering operational efficiency, scalability, and business growth through technology, rather than just writing code.",
    img: "/faq-icons/nrt.png",
  },
];
