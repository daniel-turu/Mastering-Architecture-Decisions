import { DollarSign, Server, TrendingDown, AlertOctagon, CheckCircle, ArrowRight } from 'lucide-react'

export default function Slide10CostEfficiency({ s }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-4">
      {/* Header */}
      <div className="text-center">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${s.badge}`}>
          Quality #7 — The Most Ignored
        </span>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-3">
          Cost{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">
            Efficiency
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
          A system can be <strong className="text-slate-200">technically beautiful</strong> and{' '}
          <strong className="text-red-400">financially catastrophic</strong>. Most developers think about elegance, not about the monthly cloud bill.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-5xl">

        {/* The Disaster Card */}
        <div className="bg-red-950/20 border border-red-900/50 rounded-2xl p-5 flex flex-col gap-4 text-left hover:border-red-500/40 transition col-span-1">
          <div className="flex items-center gap-2 text-red-400">
            <AlertOctagon size={18} />
            <span className="text-xs font-bold uppercase tracking-wider">Over-Engineering</span>
          </div>
          <div className="flex flex-col items-center gap-2 py-2">
            <div className="grid grid-cols-5 gap-1.5">
              {Array.from({ length: 20 }).map((_, i) => {
                const anim = i % 3 === 0 ? 'animate-pulse text-red-500' : i % 2 === 0 ? 'animate-bounce text-orange-400' : 'text-red-400/60'
                return (
                  <div key={i} className="w-7 h-7 rounded-lg bg-red-950/40 border border-red-900/50 flex items-center justify-center">
                    <Server size={12} className={anim} />
                  </div>
                )
              })}
            </div>
            <span className="text-xs font-mono text-red-300 font-bold mt-1">20 servers deployed</span>
          </div>
          <p className="text-[10px] text-slate-400 leading-relaxed italic">
            Developer designed 20 servers for a product with 500 active users. The company pays $8,000/month for infrastructure that handles 200 daily requests.
          </p>
        </div>

        {/* The Arrow Column */}
        <div className="flex flex-col items-center justify-center gap-4 p-4 col-span-1">
          <div className={`w-full p-4 rounded-2xl ${s.card} text-center border border-white/5`}>
            <DollarSign size={32} className="text-lime-400 mx-auto mb-2" />
            <h4 className="font-bold text-slate-100 text-sm">The Rule</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
              Use the <strong className="text-lime-400">minimum resources</strong> that satisfy the requirements, then scale when data proves you need to.
            </p>
          </div>

          <ArrowRight size={28} className="text-slate-600 rotate-90 md:rotate-0 shrink-0" />

          <div className="bg-lime-950/20 border border-lime-900/50 rounded-xl p-3 w-full text-center">
            <TrendingDown size={20} className="text-lime-400 mx-auto mb-1" />
            <span className="text-[10px] font-bold text-lime-300 block">Design for today's scale</span>
            <span className="text-[9px] text-slate-400">Architect for tomorrow's growth</span>
          </div>
        </div>

        {/* The Good Design Card */}
        <div className="bg-emerald-950/20 border border-emerald-900/50 rounded-2xl p-5 flex flex-col gap-4 text-left hover:border-emerald-500/40 transition col-span-1">
          <div className="flex items-center gap-2 text-emerald-400">
            <CheckCircle size={18} />
            <span className="text-xs font-bold uppercase tracking-wider">Right-Sizing</span>
          </div>
          <div className="flex flex-col items-center gap-2 py-2">
            <div className="grid grid-cols-2 gap-2">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="w-14 h-14 rounded-xl bg-emerald-900/20 border border-emerald-700/50 flex items-center justify-center animate-pulse">
                  <Server size={22} className="text-emerald-400" />
                </div>
              ))}
            </div>
            <span className="text-xs font-mono text-emerald-300 font-bold mt-1">2 servers — same result</span>
          </div>
          <p className="text-[10px] text-slate-400 leading-relaxed italic">
            Same 500 users, same features, same reliability. But now the company pays $800/month — a <span className="text-emerald-400 font-bold">90% cost saving</span>.
          </p>
        </div>

      </div>

      {/* Bottom quote */}
      <div className="w-full max-w-3xl bg-lime-500/5 border border-lime-500/20 p-4 rounded-2xl flex items-start gap-4 text-left">
        <DollarSign size={24} className="text-lime-400 shrink-0 mt-0.5" />
        <div>
          <p className="text-xs sm:text-sm text-lime-200 font-bold leading-relaxed">
            "The developer writes the code. The company pays the bill."
          </p>
          <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
            Every architectural decision has a financial consequence. A senior engineer understands both the technical and economic cost of every choice they make.
          </p>
        </div>
      </div>
    </div>
  )
}
