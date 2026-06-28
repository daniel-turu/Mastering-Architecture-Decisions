import { Layers, Database, ArrowRight, ShieldCheck, HardDrive, Compass, Construction, HelpCircle } from 'lucide-react'

export default function Slide5Design({ s }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch py-4">
      {/* Left Column: Core Design */}
      <div className="col-span-1 lg:col-span-5 text-left flex flex-col justify-between gap-6">
        <div>
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${s.badge}`}>
            Part 1: System Design
          </span>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-4">
            Designing <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-400">
              The Machine
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-md">
            Once we understand the problem constraints and specifications, we architect the blueprint. We define components, connections, and protocols before writing code.
          </p>
        </div>

        {/* Architect Analogy Card */}
        <div className="bg-emerald-950/20 border border-emerald-900/60 rounded-2xl p-5 relative overflow-hidden shadow-lg hover:border-emerald-500/30 transition-all group">
          <div className="absolute -right-6 -bottom-6 text-emerald-500/5 group-hover:scale-110 transition duration-700">
            <Compass size={120} />
          </div>
          
          <div className="flex items-center gap-2.5 text-emerald-400 mb-3 font-bold text-sm">
            <Construction size={18} className="animate-spin-slow" />
            <span>The Architect Analogy</span>
          </div>
          
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic relative z-10">
            "Think of a system architect designing a blueprint for a skyscraper. You define the load-bearing pillars, electrical wiring, and plumbing before workers start laying concrete blocks. Building software without system design is like laying bricks without a blueprint."
          </p>
        </div>

        {/* Animated Request Flow Infographic */}
        <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-4 flex flex-col gap-3 relative overflow-hidden">
          <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Live Request Flow Pipeline
          </div>
          
          <div className="flex items-center justify-between font-mono text-[9px] text-slate-400 mt-1">
            <div className="flex flex-col items-center gap-1 shrink-0">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                📱
              </div>
              <span>Client</span>
            </div>

            <div className="flex-1 flex items-center justify-center relative px-2">
              <div className="h-0.5 w-full bg-slate-800/80"></div>
              <div className="absolute h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping left-1/4"></div>
              <div className="absolute h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping left-2/4"></div>
              <div className="absolute h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping left-3/4"></div>
            </div>

            <div className="flex flex-col items-center gap-1 shrink-0">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 animate-pulse">
                🎛️
              </div>
              <span>Gateway</span>
            </div>

            <div className="flex-1 flex items-center justify-center relative px-2">
              <div className="h-0.5 w-full bg-slate-800/80"></div>
              <div className="absolute h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping left-1/3"></div>
              <div className="absolute h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping left-2/3"></div>
            </div>

            <div className="flex flex-col items-center gap-1 shrink-0">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                💽
              </div>
              <span>DB / Cache</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Key Design Questions */}
      <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
        <div className={`p-6 sm:p-8 rounded-2xl ${s.card} flex flex-col gap-6 relative text-left`}>
          <div className="absolute top-4 right-4 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-md border border-emerald-500/20">
            BLUEPRINT QUESTIONS
          </div>

          <div>
            <h3 className="font-display font-bold text-lg text-slate-100">
              Key Architectural Decisions
            </h3>
            <p className="text-xs text-slate-400 mt-1">Design decisions that determine system success or failure.</p>
          </div>

          {/* Design Pillars List */}
          <div className="flex flex-col gap-3">
            {[
              {
                icon: <Layers size={16} />,
                title: "What components are needed?",
                desc: "API gateway, message queues, notification microservices, state trackers, load balancers."
              },
              {
                icon: <Database size={16} />,
                title: "What database matches the requirements?",
                desc: "Relational (PostgreSQL) for transactional auth vs NoSQL (MongoDB/Redis) for chats & caches."
              },
              {
                icon: <Compass size={16} />,
                title: "How will data/messages move?",
                desc: "Real-time communication protocols (WebSockets, WebRTC, gRPC) vs polling (REST/GraphQL)."
              },
              {
                icon: <ShieldCheck size={16} />,
                title: "How will users authenticate and authorize?",
                desc: "Stateless tokens (JWTs) vs stateful server sessions vs decentralized OAuth configurations."
              },
              {
                icon: <HardDrive size={16} />,
                title: "How will files be stored?",
                desc: "Local disk folders, object storage clouds (Amazon S3), and content delivery networks (CDNs)."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start p-3 rounded-xl bg-slate-900/40 border border-white/5 hover:border-emerald-500/20 hover:bg-slate-900/60 transition duration-300">
                <div className="text-emerald-400 mt-0.5 bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20">
                  {item.icon}
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-200 block">{item.title}</span>
                  <span className="text-[10px] text-slate-400 block mt-1 leading-relaxed">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
