import { motion } from "motion/react";
import { Server, Database, Cloud, Cpu, Code2, Layers, CheckCircle2, Bot } from "lucide-react";
import { SEO } from "../components/SEO";
import { InteractiveHero3D } from "../components/ui/InteractiveHero3D";

export function TechStack() {
  const stacks = [
    {
      category: "Frontend Architecture",
      icon: <Code2 className="w-8 h-8" />,
      items: [
        { name: "React (Vite)", desc: "High-performance client-side rendering with instant hot module replacement." },
        { name: "Next.js", desc: "Server-side rendering and static site generation for enterprise SEO." },
        { name: "Tailwind CSS", desc: "Utility-first CSS framework for rapid UI development and strict design systems." },
        { name: "Framer Motion / GSAP", desc: "Advanced physics-based animations for immersive user experiences." }
      ]
    },
    {
      category: "Backend & APIs",
      icon: <Server className="w-8 h-8" />,
      items: [
        { name: "Node.js & Express", desc: "Event-driven, non-blocking I/O model for scalable REST APIs." },
        { name: "NestJS", desc: "Progressive Node.js framework for building efficient, reliable enterprise applications." },
        { name: "Python / FastAPI", desc: "High-performance Python framework for AI model serving and data processing." },
        { name: "GraphQL", desc: "Strongly typed query language for precise data fetching in complex client apps." }
      ]
    },
    {
      category: "Database & Caching",
      icon: <Database className="w-8 h-8" />,
      items: [
        { name: "PostgreSQL", desc: "Advanced open-source relational database for complex queries and ACID compliance." },
        { name: "MongoDB", desc: "Flexible NoSQL document database for rapid prototyping and unstructured data." },
        { name: "Redis", desc: "In-memory data structure store used as a database, cache, and message broker." },
        { name: "Prisma ORM", desc: "Next-generation Node.js and TypeScript ORM for type-safe database access." }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8" />,
      items: [
        { name: "AWS (EC2, S3, RDS)", desc: "Secure, scalable, and reliable cloud computing infrastructure." },
        { name: "Docker & Kubernetes", desc: "Containerization and orchestration for resilient, scalable deployments." },
        { name: "Vercel", desc: "Edge network deployment optimized for frontend frameworks and serverless functions." },
        { name: "GitHub Actions", desc: "Automated CI/CD pipelines for testing, building, and seamless deployments." }
      ]
    },
    {
      category: "Agentic AI & LLMs",
      icon: <Bot className="w-8 h-8" />,
      items: [
        { name: "OpenAI GPT-4", desc: "Integration of advanced language models for natural language processing tasks." },
        { name: "LangChain", desc: "Framework for developing applications powered by language models." },
        { name: "Pinecone / Vector DBs", desc: "High-performance vector databases for similarity search and AI memory." },
        { name: "Custom Agents", desc: "Autonomous AI agents built to execute multi-step workflows." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">
      <SEO
        title="Technology Stack & Infrastructure | Next Revolution Tech"
        description="Explore the enterprise-grade technology stack used by Next Revolution Tech to build scalable software, AI agents, and robust cloud infrastructure."
        schemaType="Service"
        schemaData={{
          name: "Enterprise Tech Stack & Software Architecture Services",
          description: "Explore the enterprise-grade technology stack used by Next Revolution Tech to build scalable software, AI agents, and robust cloud infrastructure.",
          serviceType: "Software Engineering & Cloud Architecture"
        }}
      />

      <section className="pt-32 pb-40 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white text-slate-900 relative overflow-hidden">
        <InteractiveHero3D />
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        
        <div className="mx-auto max-w-7xl relative z-10">
           <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-12">System Architecture</div>
           <h1 className="text-5xl sm:text-[8rem] lg:text-[10rem] font-black tracking-tighter leading-[1] sm:leading-[0.8] mb-12">
              Our <br className="hidden sm:block" />
              <span className="text-orange-600">Tech Stack.</span>
           </h1>
           <p className="text-xl sm:text-3xl font-bold text-slate-900/50 leading-tight max-w-3xl">
              We don't chase trends. We use battle-tested technologies that scale reliably in production environments.
           </p>
        </div>
      </section>

      <section className="py-32 px-4 sm:px-6 lg:px-12 xl:px-24">
         <div className="mx-auto max-w-7xl">
            <div className="space-y-32">
               {stacks.map((stack, i) => (
                 <div key={i} className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    <div className="lg:col-span-4 sticky top-32">
                       <div className="w-16 h-16 rounded-2xl bg-orange-600/10 flex items-center justify-center text-orange-600 mb-8 border border-slate-300">
                          {stack.icon}
                       </div>
                       <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tighter text-slate-900 leading-tight">{stack.category}</h2>
                    </div>
                    
                    <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
                       {stack.items.map((item, j) => (
                         <motion.div 
                           key={j}
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.5, delay: j * 0.1 }}
                           viewport={{ once: true }}
                           className="bg-white p-8 rounded-[2rem] border border-slate-300 shadow-lg hover:shadow-xl transition-shadow"
                         >
                            <div className="flex items-center gap-3 mb-4">
                               <CheckCircle2 className="w-5 h-5 text-slate-900" />
                               <h3 className="text-xl font-bold text-slate-900">{item.name}</h3>
                            </div>
                            <p className="text-sm font-semibold text-slate-900/60 leading-relaxed">
                               {item.desc}
                            </p>
                         </motion.div>
                       ))}
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
