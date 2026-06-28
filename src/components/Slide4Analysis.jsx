import { HelpCircle, Users, FileText, Smartphone, HardDrive, MessageSquare, AlertCircle, CheckCircle } from 'lucide-react'

export default function Slide4Analysis({ s }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch py-4">
      {/* Left Column: Core Analysis */}
      <div className="col-span-1 lg:col-span-5 text-left flex flex-col justify-between gap-6">
        <div>
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${s.badge}`}>
            Part 1: System Analysis
          </span>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-4">
            Understanding <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-400">
              The Problem
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-md">
            Before talking about databases, load balancers, or server frameworks, you must fully understand what you are building and why.
          </p>
        </div>

        {/* 5 Core Analysis Questions */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs uppercase font-bold tracking-widest text-slate-500">Core Analysis Framework</h3>
          
          {[
            { q: "What problem exists?", desc: "Define the core pain point." },
            { q: "Who has the problem?", desc: "Identify the users and their environment." },
            { q: "Why does it exist?", desc: "Understand the root cause & current workarounds." },
            { q: "What constraints exist?", desc: "Identify budget, deadlines, tech stack, or legal regulations." },
            { q: "What are we trying to achieve?", desc: "Determine clear, measurable success metrics." }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-2 rounded-lg bg-black/10 border border-white/5 hover:border-white/10 transition">
              <div className="text-emerald-400 font-bold font-mono text-xs mt-0.5 bg-emerald-500/10 w-5 h-5 rounded-full flex items-center justify-center border border-emerald-500/20">
                ?
              </div>
              <div>
                <span className="text-xs font-bold text-slate-200 block">{item.q}</span>
                <span className="text-[10px] text-slate-400 block">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Case Study */}
      <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
        <div className={`p-6 sm:p-8 rounded-2xl ${s.card} flex flex-col gap-5 relative text-left`}>
          <div className="absolute top-4 right-4 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-md border border-emerald-500/20">
            CASE STUDY
          </div>

          <div>
            <h3 className="font-display font-bold text-lg text-slate-100">
              Requirements Gathering Example
            </h3>
            <p className="text-xs text-slate-400 mt-1">Analyzing client specifications for a chat system.</p>
          </div>

          {/* Client Prompt Bubble */}
          <div className="bg-[#0b0e17] border border-white/5 p-4 rounded-xl relative">
            <div className="text-[9px] uppercase tracking-wider text-emerald-400 font-bold mb-1 flex items-center gap-1.5">
              <MessageSquare size={10} /> Client says:
            </div>
            <p className="text-sm font-serif italic text-slate-200">
              "We need a WhatsApp-like messaging platform."
            </p>
          </div>

          {/* The Analysis Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-1">
            {[
              { icon: <Users size={14} />, label: "How many users?", desc: "100 concurrent or 100 million?" },
              { icon: <FileText size={14} />, label: "Text messages only?", desc: "Formatting, links, emojis?" },
              { icon: <Smartphone size={14} />, label: "Voice / Video calls?", desc: "Requires low latency WebRTC." },
              { icon: <HardDrive size={14} />, label: "File Uploads?", desc: "Images, videos, documents, limits?" },
              { icon: <Smartphone size={14} />, label: "Mobile or Web?", desc: "Cross-platform or native clients?" },
              { icon: <CheckCircle size={14} />, label: "Offline support?", desc: "Sync, queueing, local caching?" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-2.5 items-start bg-slate-900/50 p-2.5 rounded-xl border border-white/5 hover:border-emerald-500/10 transition-all">
                <div className="text-emerald-400 mt-0.5 bg-emerald-500/5 p-1 rounded-md border border-emerald-500/10">
                  {item.icon}
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-200 block">{item.label}</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Key Quote banner */}
          <div className="mt-2 bg-emerald-500/10 border border-emerald-500/20 p-3.5 rounded-xl text-center flex items-center gap-3 justify-center">
            <AlertCircle size={18} className="text-emerald-400 shrink-0" />
            <span className="text-xs text-emerald-300 font-bold tracking-wide">
              "A good analyst spends more time asking questions than writing code."
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
