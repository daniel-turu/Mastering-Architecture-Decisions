import { ShieldCheck, Zap, AlertOctagon, CheckCircle, Clock } from 'lucide-react'

export default function Slide8ReliabilityPerformance({ s }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch py-4">

      {/* LEFT: Reliability */}
      <div className={`flex flex-col gap-5 p-6 rounded-2xl ${s.card} text-left relative overflow-hidden`}>
        <div className="absolute -top-6 -right-6 text-violet-500/5">
          <ShieldCheck size={140} />
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
            <ShieldCheck size={20} />
          </div>
          <div>
            <span className="text-[9px] uppercase tracking-widest text-violet-500/70 font-bold block">Quality #3</span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-violet-400">Reliability</h3>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          Does the system <strong className="text-slate-100">consistently do what it promises</strong>? A reliable system produces correct results every single time — not just most of the time.
        </p>

        {/* Horror story */}
        <div className="bg-red-950/20 border border-red-900/50 p-4 rounded-xl flex gap-3 items-start">
          <AlertOctagon size={18} className="text-red-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-red-300 block">Nightmare Scenario</span>
            <div className="mt-2 space-y-1 text-[11px] leading-relaxed">
              <p className="text-slate-300 italic">1. You open your banking app.</p>
              <p className="text-slate-300 italic">2. You transfer ₦50,000.</p>
              <p className="text-slate-300 italic">3. The app says: <span className="text-green-400 font-bold">✓ Transfer Successful</span></p>
              <p className="text-red-400 font-bold italic">4. The money never arrives.</p>
              <p className="text-red-400 font-bold italic">5. Your account was debited anyway.</p>
            </div>
            <p className="text-[10px] text-slate-400 mt-2">
              This is an unreliable system. It's online (available), but it cannot be trusted.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-auto">
          {[
            { label: 'Idempotency', desc: 'Same request = same safe result' },
            { label: 'Transactions', desc: 'All-or-nothing data operations' },
          ].map((item, i) => (
            <div key={i} className="p-2.5 rounded-xl bg-violet-950/30 border border-violet-900/40 hover:border-violet-500/30 transition">
              <span className="text-xs font-bold text-violet-300 block">{item.label}</span>
              <span className="text-[10px] text-slate-400 mt-0.5 block">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: Performance */}
      <div className={`flex flex-col gap-5 p-6 rounded-2xl ${s.card} text-left relative overflow-hidden`}>
        <div className="absolute -top-6 -right-6 text-yellow-500/5">
          <Zap size={140} />
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400">
            <Zap size={20} />
          </div>
          <div>
            <span className="text-[9px] uppercase tracking-widest text-yellow-500/70 font-bold block">Quality #4</span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-yellow-400">Performance</h3>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          How fast does the system respond? Users don't care about your infrastructure. They care about results — fast.
        </p>

        {/* Speed comparison */}
        <div className={`p-4 rounded-xl border border-white/5 bg-black/20 flex flex-col gap-3`}>
          <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">Response Time Comparison</span>

          {/* Google */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 w-36 shrink-0">
              <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span className="text-xs font-bold text-slate-200">Google Search</span>
            </div>
            <div className="flex-1 bg-white/5 rounded-full h-3 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-lime-400 h-full rounded-full" style={{ width: '3%' }} />
            </div>
            <span className="font-mono font-bold text-emerald-400 text-xs w-12 text-right">0.3s</span>
          </div>

          {/* Bad system */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 w-36 shrink-0">
              <div className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
              <span className="text-xs font-bold text-slate-200">Poorly Designed</span>
            </div>
            <div className="flex-1 bg-white/5 rounded-full h-3 overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-orange-500 h-full rounded-full animate-pulse" style={{ width: '100%' }} />
            </div>
            <span className="font-mono font-bold text-red-400 text-xs w-12 text-right">10s</span>
          </div>

          <p className="text-[10px] text-slate-400 italic leading-relaxed">
            Same feature. Same data. Different architectural decisions. A user waits 10 seconds, then <span className="text-red-400 font-bold">leaves forever.</span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-auto">
          {[
            { label: 'Caching', desc: 'Serve pre-computed results fast' },
            { label: 'Query Optimization', desc: 'Avoid expensive DB operations' },
            { label: 'CDN Delivery', desc: 'Assets closer to the user' },
            { label: 'Async Processing', desc: 'Don\'t block the main thread' },
          ].map((item, i) => (
            <div key={i} className="p-2 rounded-xl bg-yellow-950/20 border border-yellow-900/30 hover:border-yellow-500/20 transition">
              <span className="text-[10px] font-bold text-yellow-300 block">{item.label}</span>
              <span className="text-[9px] text-slate-400 mt-0.5 block">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
