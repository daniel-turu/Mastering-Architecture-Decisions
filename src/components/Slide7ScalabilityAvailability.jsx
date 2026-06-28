import { TrendingUp, Radio, Users, AlertOctagon, CheckCircle, ArrowUp } from 'lucide-react'

export default function Slide7ScalabilityAvailability({ s }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch py-4">

      {/* LEFT: Scalability */}
      <div className={`flex flex-col gap-5 p-6 rounded-2xl ${s.card} text-left relative overflow-hidden`}>
        <div className="absolute -top-6 -right-6 text-emerald-500/5">
          <TrendingUp size={140} />
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <TrendingUp size={20} />
          </div>
          <div>
            <span className="text-[9px] uppercase tracking-widest text-emerald-500/70 font-bold block">Quality #1</span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-emerald-400">Scalability</h3>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          Can the system grow when the number of users explodes? A scalable system handles increased load without redesigning from scratch.
        </p>

        {/* Growth diagram */}
        <div className={`p-4 rounded-xl border border-white/5 bg-black/20 flex flex-col gap-3`}>
          <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">Real-World Scale Example</span>
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-end gap-0.5 h-10">
                <div className="w-3 bg-emerald-600 rounded-t h-2" />
              </div>
              <span className="text-[10px] text-slate-400 font-mono">Day 1</span>
              <span className="text-xs font-bold text-slate-200">100 users</span>
            </div>
            <ArrowUp size={20} className="text-emerald-400 rotate-90 shrink-0" />
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-end gap-0.5 h-10">
                <div className="w-3 bg-emerald-400 rounded-t h-10" />
              </div>
              <span className="text-[10px] text-slate-400 font-mono">Day 30</span>
              <span className="text-xs font-bold text-emerald-300">1,000,000 users</span>
            </div>
          </div>
          <p className="text-[10px] text-slate-400 leading-relaxed italic">
            If the architecture breaks at 10,000 users — it was <span className="text-red-400 font-bold">bad design from day one.</span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-auto">
          {[
            { label: 'Vertical Scaling', desc: 'Bigger servers (more RAM / CPU)' },
            { label: 'Horizontal Scaling', desc: 'More servers (distribute load)' },
          ].map((item, i) => (
            <div key={i} className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-900/40 hover:border-emerald-500/30 transition">
              <span className="text-xs font-bold text-emerald-300 block">{item.label}</span>
              <span className="text-[10px] text-slate-400 mt-0.5 block">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: Availability */}
      <div className={`flex flex-col gap-5 p-6 rounded-2xl ${s.card} text-left relative overflow-hidden`}>
        <div className="absolute -top-6 -right-6 text-blue-500/5">
          <Radio size={140} />
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
            <Radio size={20} />
          </div>
          <div>
            <span className="text-[9px] uppercase tracking-widest text-blue-500/70 font-bold block">Quality #2</span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-blue-400">Availability</h3>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          Can users access the system when they need it? Availability is measured as the percentage of uptime over a period.
        </p>

        {/* Uptime SLA ladder */}
        <div className={`p-4 rounded-xl border border-white/5 bg-black/20 flex flex-col gap-2`}>
          <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold mb-1">SLA Uptime Tiers</span>
          {[
            { pct: '99%', label: 'Basic', downtime: '~3.65 days/year', color: 'text-yellow-400', barW: 'w-[70%]', barColor: 'bg-yellow-500' },
            { pct: '99.9%', label: 'Standard', downtime: '~8.7 hours/year', color: 'text-blue-400', barW: 'w-[80%]', barColor: 'bg-blue-500' },
            { pct: '99.99%', label: 'Enterprise', downtime: '~52 minutes/year', color: 'text-emerald-400', barW: 'w-[95%]', barColor: 'bg-emerald-500 animate-pulse' },
          ].map((tier, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className={`font-mono font-bold text-xs w-14 shrink-0 ${tier.color}`}>{tier.pct}</span>
              <div className="flex-1 bg-white/5 rounded-full h-2">
                <div className={`${tier.barW} ${tier.barColor} h-2 rounded-full transition-all`} />
              </div>
              <span className="text-[9px] text-slate-400 w-36 shrink-0 text-right">{tier.downtime}</span>
            </div>
          ))}
        </div>

        {/* Bad example card */}
        <div className="bg-red-950/20 border border-red-900/50 p-4 rounded-xl flex gap-3 items-start">
          <AlertOctagon size={18} className="text-red-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-red-300 block">Payday Disaster Example</span>
            <p className="text-[10px] text-slate-400 leading-relaxed mt-0.5">
              A bank's payment gateway goes offline on the 25th of the month. Thousands of users cannot pay rent. This is an availability failure — and it costs the bank reputation, money, and customer trust.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
