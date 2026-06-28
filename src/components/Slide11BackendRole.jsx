import { Server, Database, Zap, HardDrive, Cpu, Globe, AlertOctagon, ArrowRight } from 'lucide-react'

const decisions = [
  {
    icon: <Database size={18} />,
    label: 'Database Structure',
    desc: 'Schema choices determine query speed and data integrity.',
    cost: 'High Impact',
    color: 'emerald',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
  },
  {
    icon: <Zap size={18} />,
    label: 'Query Efficiency',
    desc: 'A bad query on 50M rows brings a server to its knees.',
    cost: 'Highest Impact',
    color: 'yellow',
    border: 'border-yellow-500/30',
    bg: 'bg-yellow-500/10',
    text: 'text-yellow-400',
  },
  {
    icon: <Globe size={18} />,
    label: 'API Design',
    desc: 'Over-fetching data multiplied across millions of requests is expensive.',
    cost: 'High Impact',
    color: 'blue',
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
  },
  {
    icon: <Cpu size={18} />,
    label: 'Caching Strategy',
    desc: 'Reading from cache vs hitting the DB on every request — night and day.',
    cost: 'High Impact',
    color: 'violet',
    border: 'border-violet-500/30',
    bg: 'bg-violet-500/10',
    text: 'text-violet-400',
  },
  {
    icon: <HardDrive size={18} />,
    label: 'Storage Architecture',
    desc: 'Where files live, how they\'re indexed, and how they\'re retrieved matters.',
    cost: 'Medium Impact',
    color: 'cyan',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
  },
  {
    icon: <Server size={18} />,
    label: 'Processing Model',
    desc: 'Sync vs async, queued jobs, and worker scaling all affect server load.',
    cost: 'High Impact',
    color: 'red',
    border: 'border-red-500/30',
    bg: 'bg-red-500/10',
    text: 'text-red-400',
  },
]

export default function Slide11BackendRole({ s }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch py-4">

      {/* Left: The Mindset Shift */}
      <div className="col-span-1 lg:col-span-5 flex flex-col justify-between text-left gap-6">
        <div>
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${s.badge}`}>
            Part 3: The Backend Responsibility
          </span>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-4">
            You Control <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-400">
              The Cost Center
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Most backend developers think their job ends at building APIs. But backend engineers own the decisions that directly determine how much a company spends every month on infrastructure.
          </p>
        </div>

        {/* The Myth vs Reality */}
        <div className="flex flex-col gap-3">
          {/* Myth */}
          <div className="bg-red-950/20 border border-red-900/50 rounded-2xl p-5 relative overflow-hidden">
            <div className="absolute top-3 right-3 text-[9px] uppercase font-bold text-red-400 tracking-wider px-2 py-0.5 border border-red-800/50 rounded-full bg-red-950/30">
              Junior Thinking
            </div>
            <div className="flex items-start gap-3">
              <AlertOctagon size={18} className="text-red-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-red-300 block mb-1">The Myth</span>
                <p className="text-sm font-serif italic text-slate-300">
                  "I just write APIs. The DevOps team handles the servers and costs."
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <ArrowRight size={20} className="text-slate-600 rotate-90" />
          </div>

          {/* Reality */}
          <div className="bg-emerald-950/20 border border-emerald-900/50 rounded-2xl p-5 relative overflow-hidden">
            <div className="absolute top-3 right-3 text-[9px] uppercase font-bold text-emerald-400 tracking-wider px-2 py-0.5 border border-emerald-800/50 rounded-full bg-emerald-950/30">
              Senior Thinking
            </div>
            <div className="flex items-start gap-3">
              <Server size={18} className="text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-emerald-300 block mb-1">The Reality</span>
                <p className="text-sm font-serif italic text-slate-300">
                  "Every query I write, every endpoint I design, and every schema I create has a direct line to the company's monthly cloud bill."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: 6 Backend Decisions */}
      <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
        <div className={`p-6 sm:p-8 rounded-2xl ${s.card} flex flex-col gap-5 relative`}>
          <div className="absolute top-4 right-4 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-md border border-emerald-500/20">
            6 COST DRIVERS
          </div>

          <div>
            <h3 className="font-display font-bold text-lg text-slate-100">Backend Decisions That Control System Cost</h3>
            <p className="text-xs text-slate-400 mt-1">Each of these is in the backend developer's hands — not the DevOps team's.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {decisions.map((d, idx) => (
              <div
                key={idx}
                className={`flex gap-3 items-start p-3 rounded-xl border ${d.border} ${d.bg}/20 hover:${d.bg} transition-all duration-300 group`}
              >
                <div className={`${d.text} mt-0.5 p-1.5 rounded-lg bg-black/20 border ${d.border} shrink-0`}>
                  {d.icon}
                </div>
                <div>
                  <span className={`text-xs font-bold ${d.text} block`}>{d.label}</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5 leading-relaxed">{d.desc}</span>
                  <span className={`text-[9px] font-bold uppercase tracking-wider mt-1 block ${d.text} opacity-70`}>
                    ⚡ {d.cost}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
