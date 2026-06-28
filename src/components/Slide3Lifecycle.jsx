import { ArrowRight, ArrowDown, Code, CheckCircle2, AlertOctagon, HelpCircle, Laptop, Layers, ClipboardCheck, Settings, Play } from 'lucide-react'

export default function Slide3Lifecycle({ s }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch py-4">
      {/* Header and Left Column: The Problem & Myth */}
      <div className="col-span-1 lg:col-span-5 flex flex-col justify-between text-left gap-6">
        <div>
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${s.badge}`}>
            Part 1: Defining the Process
          </span>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-4">
            The Professional <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-400">
              Software Lifecycle
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-md">
            Most developers jump straight from requirements to code. This lack of planning leads to massive architectural debt, high development costs, and fragile systems.
          </p>
        </div>

        {/* The Developer Myth Card */}
        <div className="bg-[#1c1212]/80 border border-red-950/60 rounded-2xl p-6 relative overflow-hidden shadow-lg shadow-red-950/10">
          <div className="absolute top-0 right-0 bg-red-600/10 border-l border-b border-red-500/30 text-[9px] text-red-400 font-bold uppercase px-3 py-1 rounded-bl-xl tracking-wider">
            Amateur Loop
          </div>
          <div className="flex items-center gap-2 text-red-400 mb-3 font-bold text-sm tracking-wide">
            <AlertOctagon size={16} />
            <span>The Developer Myth</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono bg-black/30 p-3 rounded-lg border border-red-950/30">
            <span className="text-slate-400 font-semibold">Requirement</span>
            <ArrowRight size={12} className="text-red-500/50" />
            <span className="text-red-400 font-bold bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20">Code</span>
            <ArrowRight size={12} className="text-red-500/50" />
            <span className="text-slate-400 font-semibold">Deploy</span>
          </div>
          
          <p className="text-xs text-red-300/80 mt-3 italic leading-relaxed">
            "We build it fast, but it breaks under load and costs 10x more to refactor later."
          </p>
        </div>
      </div>

      {/* Right Column: The Professional Flow */}
      <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
        <div className={`p-6 sm:p-8 rounded-2xl ${s.card} flex flex-col gap-6 relative`}>
          <div className="absolute top-4 right-4 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-md border border-emerald-500/20">
            PROFESSIONAL PROCESS
          </div>
          
          <h3 className="font-display font-bold text-lg text-slate-100 text-left border-b border-white/5 pb-3">
            System Analysis & Design Lifecycle
          </h3>

          {/* Progress Timeline Tracker */}
          <div className="flex items-center justify-between w-full p-3 bg-black/40 rounded-xl border border-white/5 text-[10px] font-mono">
            {['Problem', 'Analysis', 'Design', 'Code', 'Test', 'Deploy'].map((step, i) => (
              <div key={i} className="flex items-center gap-1.5 shrink-0">
                <span className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400 animate-pulse">
                  {i + 1}
                </span>
                <span className="text-slate-300 font-bold hidden sm:inline">{step}</span>
                {i < 5 && <span className="text-slate-600 font-bold px-1">➔</span>}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Step 1 */}
            <div className="flex gap-3 text-left p-3 rounded-xl bg-slate-900/40 border border-white/5 hover:border-emerald-500/20 transition-all hover:bg-slate-900/60 group">
              <span className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-900/40 flex items-center justify-center font-mono font-bold text-xs group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                1
              </span>
              <div>
                <span className="font-bold text-slate-200 block text-sm">Problem Definition</span>
                <span className="text-[11px] text-slate-400 block mt-0.5">What is the actual issue we are trying to resolve?</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-3 text-left p-3 rounded-xl bg-slate-900/40 border border-white/5 hover:border-emerald-500/20 transition-all hover:bg-slate-900/60 group">
              <span className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-900/40 flex items-center justify-center font-mono font-bold text-xs group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                2
              </span>
              <div>
                <span className="font-bold text-slate-200 block text-sm">System Analysis</span>
                <span className="text-[11px] text-slate-400 block mt-0.5">Gather specifications, scale demands, and constraints.</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-3 text-left p-3 rounded-xl bg-slate-900/40 border border-white/5 hover:border-emerald-500/20 transition-all hover:bg-slate-900/60 group">
              <span className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-900/40 flex items-center justify-center font-mono font-bold text-xs group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                3
              </span>
              <div>
                <span className="font-bold text-slate-200 block text-sm">System Design</span>
                <span className="text-[11px] text-slate-400 block mt-0.5">Design data models, API flows, and node configurations.</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-3 text-left p-3 rounded-xl bg-slate-900/40 border border-white/5 hover:border-emerald-500/20 transition-all hover:bg-slate-900/60 group">
              <span className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-900/40 flex items-center justify-center font-mono font-bold text-xs group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                4
              </span>
              <div>
                <span className="font-bold text-slate-200 block text-sm">Implementation</span>
                <span className="text-[11px] text-slate-400 block mt-0.5">Write clean, standardized code matching the design layout.</span>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-3 text-left p-3 rounded-xl bg-slate-900/40 border border-white/5 hover:border-emerald-500/20 transition-all hover:bg-slate-900/60 group">
              <span className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-900/40 flex items-center justify-center font-mono font-bold text-xs group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                5
              </span>
              <div>
                <span className="font-bold text-slate-200 block text-sm">Testing & Audit</span>
                <span className="text-[11px] text-slate-400 block mt-0.5">Verify load resilience, edge cases, and safety.</span>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex gap-3 text-left p-3 rounded-xl bg-slate-900/40 border border-white/5 hover:border-emerald-500/20 transition-all hover:bg-slate-900/60 group">
              <span className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-900/40 flex items-center justify-center font-mono font-bold text-xs group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                6
              </span>
              <div>
                <span className="font-bold text-slate-200 block text-sm">Deployment & Monitoring</span>
                <span className="text-[11px] text-slate-400 block mt-0.5">Launch with metrics, alert signals, and auto-scaling.</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
