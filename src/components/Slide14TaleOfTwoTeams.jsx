import { Users, Server, DollarSign, TrendingDown, ShieldAlert, Sparkles, CheckCircle2, AlertOctagon } from 'lucide-react'

export default function Slide14TaleOfTwoTeams({ s }) {
  return (
    <div className="flex flex-col gap-6 py-4">
      {/* Header */}
      <div className="text-center">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${s.badge}`}>
          Part 4: Financial Impact
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-2">
          A Tale of{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400">
            Two Teams
          </span>
        </h2>
        <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Imagine two engineering teams tasked with building the exact same product. One skips architecture; the other designs deliberately. Let's look at the numbers.
        </p>
      </div>

      {/* Head-to-Head Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-11 gap-6 items-stretch w-full max-w-5xl mx-auto">
        
        {/* TEAM A: No Architecture */}
        <div className="md:col-span-5 bg-red-950/10 border border-red-900/40 rounded-2xl p-6 flex flex-col justify-between hover:border-red-500/30 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between border-b border-red-950 pb-3 mb-4">
              <span className="text-red-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                <ShieldAlert size={18} />
                Team A: Code First
              </span>
              <span className="text-[10px] bg-red-500/10 text-red-400 font-bold px-2 py-0.5 rounded border border-red-500/20">
                NO PLANNING
              </span>
            </div>

            <p className="text-xs text-slate-400 mb-4 italic">
              "We don't need blueprints, let's just write code and launch!"
            </p>

            <ul className="space-y-3 text-slate-300 text-xs">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✗</span>
                <span><strong>Random Code Structure:</strong> Copy-pasted scripts, unstructured flows.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✗</span>
                <span><strong>Random Database:</strong> No schemas or indexes; slow scans everywhere.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✗</span>
                <span><strong>No Caching:</strong> Hits database for every single click and action.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✗</span>
                <span><strong>No Planning:</strong> Hopes the platform works, scale is an afterthought.</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-red-950/40 border border-red-900/40 rounded-xl p-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-slate-400">Servers Needed:</span>
              <span className="font-mono text-sm font-bold text-red-300 flex items-center gap-1">
                <Server size={14} /> 8 Servers
              </span>
            </div>
            <div className="flex justify-between items-center border-t border-red-950 pt-2 mt-2">
              <span className="text-xs font-bold text-slate-300">Monthly Bill:</span>
              <span className="font-mono text-xl font-extrabold text-red-400">$4,000 / mo</span>
            </div>
          </div>
        </div>

        {/* VS Divider */}
        <div className="md:col-span-1 flex flex-col items-center justify-center">
          <div className="h-full w-px bg-white/5 hidden md:block"></div>
          <div className="bg-slate-900 border border-white/10 rounded-full w-10 h-10 flex items-center justify-center text-xs font-bold my-4 shrink-0 text-slate-400">
            VS
          </div>
          <div className="h-full w-px bg-white/5 hidden md:block"></div>
        </div>

        {/* TEAM B: Good Architecture */}
        <div className="md:col-span-5 bg-emerald-950/10 border border-emerald-900/40 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between border-b border-emerald-950 pb-3 mb-4">
              <span className="text-emerald-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                <Sparkles size={18} />
                Team B: Architect First
              </span>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 font-bold px-2 py-0.5 rounded border border-emerald-500/20">
                SYSTEM DESIGNED
              </span>
            </div>

            <p className="text-xs text-slate-400 mb-4 italic">
              "Let's map out components, queries, and constraints before starting."
            </p>

            <ul className="space-y-3 text-slate-300 text-xs">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span><strong>Optimized Queries:</strong> Indexes, pagination, clean SELECT limits.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span><strong>Aggressive Caching:</strong> Fast cache hits reduce database requests by 90%.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span><strong>Efficient Storage:</strong> Assets served via CDN, database keeps meta-only.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span><strong>Scale Strategy:</strong> Designed to grow horizontally automatically.</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-emerald-950/40 border border-emerald-900/40 rounded-xl p-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-slate-400">Servers Needed:</span>
              <span className="font-mono text-sm font-bold text-emerald-300 flex items-center gap-1">
                <Server size={14} /> 2 Servers
              </span>
            </div>
            <div className="flex justify-between items-center border-t border-emerald-950 pt-2 mt-2">
              <span className="text-xs font-bold text-slate-300">Monthly Bill:</span>
              <span className="font-mono text-xl font-extrabold text-emerald-400">$1,000 / mo</span>
            </div>
          </div>
        </div>

      </div>

      {/* Financial Lesson Box */}
      <div className="w-full max-w-5xl mx-auto bg-gradient-to-r from-emerald-950/40 to-lime-950/20 border border-emerald-800/40 rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-4 text-left">
        <div className="flex items-start gap-3">
          <TrendingDown className="text-lime-400 shrink-0 w-6 h-6 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-slate-200">The Power of Software Architecture</h4>
            <p className="text-xs text-slate-400 mt-0.5 leading-relaxed max-w-xl">
              Same users, same features, same product. The only difference is the design blueprint. Team B saves the company <strong>$3,000 every single month</strong> ($36,000 every year).
            </p>
          </div>
        </div>
        <div className="bg-lime-500/10 border border-lime-500/30 px-5 py-3 rounded-xl text-center shrink-0 w-full md:w-auto">
          <div className="text-[10px] text-lime-400 font-bold uppercase tracking-wider">Annual Infrastructure Savings</div>
          <div className="text-2xl font-mono font-extrabold text-lime-300 mt-0.5">$36,000 Saved</div>
        </div>
      </div>
    </div>
  )
}
