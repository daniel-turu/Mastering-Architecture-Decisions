import { Sparkles, CheckCircle, Database, Layers, Network, DollarSign } from 'lucide-react'
import systemDesignCoverImg from '../assets/system_design_cover.png'

export default function Slide1Cover({ s }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6">
      {/* Text and branding info */}
      <div className="col-span-1 lg:col-span-7 text-left flex flex-col gap-6 order-2 lg:order-1">
        <div>
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${s.badge}`}>
            <Sparkles size={12} />
            System Analysis & Design
          </span>
          
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-4">
            THINKING <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-emerald-400 to-lime-400">
              BEYOND CODING
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-300 my-4 max-w-xl">
            Learn how to evaluate requirements, analyze real-world architecture, and make engineering trade-offs that build scalable, reliable, and cost-effective backend systems.
          </p>
        </div>

        {/* Course Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          <div className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
            <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Network size={16} />
            </div>
            <span>Real-World Systems (WhatsApp, Banking)</span>
          </div>

          <div className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
            <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Layers size={16} />
            </div>
            <span>Architecture & Design Patterns</span>
          </div>

          <div className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
            <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <CheckCircle size={16} />
            </div>
            <span>Trade-Off Analysis & Scalability</span>
          </div>

          <div className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
            <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <DollarSign size={16} />
            </div>
            <span>Reducing Infrastructure Cost</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <div className="flex items-center gap-1.5 text-xs text-emerald-400/90 font-semibold bg-emerald-950/40 w-fit px-3 py-1.5 rounded-lg border border-emerald-900/60">
            <Database size={12} className="animate-pulse" />
            <span>Mastering Architecture Decisions</span>
          </div>
        </div>
      </div>

      {/* Right side Visual (System diagram image with premium border overlay) */}
      <div className="col-span-1 lg:col-span-5 flex justify-center order-1 lg:order-2">
        <div className="relative group max-w-md w-full">
          {/* Glowing outer rings */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-[#0d121f] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img 
              src={systemDesignCoverImg} 
              alt="System Architecture Diagram" 
              className="w-full aspect-square object-cover opacity-90 hover:scale-[1.02] transition duration-700"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?q=80&w=600&auto=format&fit=crop";
              }}
            />
            
            {/* Image Bottom Overlay Badge */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 text-left text-white">
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-widest px-2.5 py-1 rounded font-bold">
                Instructor: Daniel Turu
              </span>
              <h4 className="font-display font-semibold text-base mt-2 text-slate-100">
                Architecting Better Systems
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Scale vertically, horizontally, and strategically.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
