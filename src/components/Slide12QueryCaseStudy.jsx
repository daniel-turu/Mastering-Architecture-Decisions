import { AlertOctagon, CheckCircle, TrendingDown, DollarSign, Database, Zap } from 'lucide-react'

export default function Slide12QueryCaseStudy({ s }) {
  return (
    <div className="flex flex-col gap-6 py-4">

      {/* Header */}
      <div className="text-center">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${s.badge}`}>
          Part 3: The Query Case Study
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-2">
          One Query. <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Two Outcomes.</span>
        </h2>
        <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The same business requirement. The same database. Two different approaches — and the cost difference is massive.
        </p>
      </div>

      {/* Side by side comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 items-stretch w-full max-w-5xl mx-auto">

        {/* BAD Query */}
        <div className="lg:col-span-5 bg-red-950/20 border border-red-900/50 rounded-2xl p-5 flex flex-col gap-4 text-left">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-red-400">
              <AlertOctagon size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">Poor Design</span>
            </div>
            <span className="text-[9px] bg-red-500/20 text-red-300 border border-red-500/30 px-2 py-0.5 rounded-full font-bold">
              💸 Expensive
            </span>
          </div>

          {/* The query */}
          <div className="bg-black/40 rounded-xl p-4 border border-red-900/30">
            <div className="text-[9px] text-slate-500 uppercase tracking-wider font-bold mb-2 flex items-center gap-1.5">
              <Database size={10} />
              SQL Query
            </div>
            <code className="text-sm font-mono text-red-300 leading-relaxed block">
              SELECT <span className="text-red-400 font-bold">*</span> FROM users
            </code>
            <div className="mt-2 text-[10px] text-slate-500 font-mono">-- On 50,000,000 records</div>
          </div>

          {/* What happens */}
          <div className="flex flex-col gap-2">
            <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">What happens:</span>
            {[
              'Fetches ALL columns — even unused ones',
              'Loads 50M rows into memory',
              'No index used — full table scan',
              'Server CPU & RAM spike to 95%',
              'Response time: 8–15 seconds',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-[11px] text-red-300/80">
                <span className="text-red-500 mt-0.5 shrink-0">✗</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Cost consequence */}
          <div className="mt-auto bg-red-950/40 border border-red-800/40 rounded-xl p-3 text-center">
            <div className="text-[10px] text-slate-400 mb-1">Consequence:</div>
            <p className="text-xs text-red-300 font-bold">
              "Server can't keep up. CTO orders 3× larger servers."
            </p>
            <div className="text-lg font-mono font-bold text-red-400 mt-1">+$4,000/month</div>
          </div>
        </div>

        {/* Arrow divider */}
        <div className="lg:col-span-1 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-px bg-gradient-to-b from-transparent via-slate-600 to-transparent hidden lg:block" />
            <div className="p-2 rounded-full border border-white/10 bg-white/5">
              <TrendingDown size={16} className="text-emerald-400" />
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-transparent via-slate-600 to-transparent hidden lg:block" />
            <span className="text-[9px] text-slate-500 uppercase tracking-wider font-bold hidden lg:block text-center">Better<br/>Design</span>
          </div>
        </div>

        {/* GOOD Query */}
        <div className="lg:col-span-5 bg-emerald-950/20 border border-emerald-900/50 rounded-2xl p-5 flex flex-col gap-4 text-left">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">Optimized Design</span>
            </div>
            <span className="text-[9px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
              ✅ Efficient
            </span>
          </div>

          {/* The query */}
          <div className="bg-black/40 rounded-xl p-4 border border-emerald-900/30">
            <div className="text-[9px] text-slate-500 uppercase tracking-wider font-bold mb-2 flex items-center gap-1.5">
              <Database size={10} />
              SQL Query
            </div>
            <code className="text-sm font-mono text-emerald-300 leading-relaxed block">
              SELECT <span className="text-emerald-400 font-bold">id, name</span> FROM users
            </code>
            <code className="text-xs font-mono text-slate-400 block mt-1">WHERE active = true</code>
            <code className="text-xs font-mono text-slate-400 block">LIMIT 20 OFFSET 0</code>
            <div className="mt-2 text-[10px] text-slate-500 font-mono">-- With index on `active` column</div>
          </div>

          {/* What happens */}
          <div className="flex flex-col gap-2">
            <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">What happens:</span>
            {[
              'Fetches ONLY needed columns (id, name)',
              'Index lookup — skips 49M+ irrelevant rows',
              'Returns only 20 rows per page',
              'Server load stays under 15%',
              'Response time: 0.04 seconds',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-[11px] text-emerald-300/80">
                <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Cost consequence */}
          <div className="mt-auto bg-emerald-950/40 border border-emerald-800/40 rounded-xl p-3 text-center">
            <div className="text-[10px] text-slate-400 mb-1">Consequence:</div>
            <p className="text-xs text-emerald-300 font-bold">
              "Same result. Same server. No upgrade needed."
            </p>
            <div className="text-lg font-mono font-bold text-emerald-400 mt-1">$0 extra/month</div>
          </div>
        </div>

      </div>

      {/* Bottom lesson bar */}
      <div className="w-full max-w-5xl mx-auto bg-gradient-to-r from-emerald-950/40 to-lime-950/30 border border-emerald-800/40 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <DollarSign size={24} className="text-lime-400 shrink-0" />
          <div className="text-left">
            <span className="text-xs font-bold text-slate-200 block">The Bottom Line</span>
            <span className="text-[11px] text-slate-400 leading-relaxed">A backend developer with good design instincts saves the company real money — every day, on every endpoint.</span>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <div className="text-center px-4 py-2 bg-red-950/40 border border-red-800/40 rounded-xl">
            <div className="text-xs font-mono font-bold text-red-400">SELECT *</div>
            <div className="text-[9px] text-red-300 mt-0.5">8–15 seconds</div>
          </div>
          <Zap size={16} className="text-slate-500" />
          <div className="text-center px-4 py-2 bg-emerald-950/40 border border-emerald-800/40 rounded-xl">
            <div className="text-xs font-mono font-bold text-emerald-400">SELECT id, name</div>
            <div className="text-[9px] text-emerald-300 mt-0.5">0.04 seconds</div>
          </div>
        </div>
      </div>

    </div>
  )
}
