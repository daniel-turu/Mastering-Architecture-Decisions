import { TrendingUp, Radio, ShieldCheck, Zap, Code2, Lock, DollarSign } from 'lucide-react'

const qualities = [
  {
    icon: <TrendingUp size={18} />,
    label: 'Scalability',
    desc: 'Can it grow with user demand?',
    color: 'emerald',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
  },
  {
    icon: <Radio size={18} />,
    label: 'Availability',
    desc: 'Is it online when users need it?',
    color: 'blue',
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
  },
  {
    icon: <ShieldCheck size={18} />,
    label: 'Reliability',
    desc: 'Does it consistently do what it says?',
    color: 'violet',
    border: 'border-violet-500/30',
    bg: 'bg-violet-500/10',
    text: 'text-violet-400',
  },
  {
    icon: <Zap size={18} />,
    label: 'Performance',
    desc: 'How fast does it respond?',
    color: 'yellow',
    border: 'border-yellow-500/30',
    bg: 'bg-yellow-500/10',
    text: 'text-yellow-400',
  },
  {
    icon: <Code2 size={18} />,
    label: 'Maintainability',
    desc: 'Can other developers understand it?',
    color: 'cyan',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
  },
  {
    icon: <Lock size={18} />,
    label: 'Security',
    desc: 'Can attackers break it?',
    color: 'red',
    border: 'border-red-500/30',
    bg: 'bg-red-500/10',
    text: 'text-red-400',
  },
  {
    icon: <DollarSign size={18} />,
    label: 'Cost Efficiency',
    desc: 'Does it cost the right amount to run?',
    color: 'lime',
    border: 'border-lime-500/30',
    bg: 'bg-lime-500/10',
    text: 'text-lime-400',
  },
]

export default function Slide6Part2Intro({ s }) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-4 text-center">
      <div>
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${s.badge}`}>
          Part 2: System Qualities
        </span>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-4">
          What Makes a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-400">
            Good System?
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
          A system is not good simply because it <strong className="text-slate-200">works</strong>. Many systems work.
          A great system works <strong className="text-emerald-400">well under pressure</strong> — reliably, quickly, securely, and economically.
        </p>
      </div>

      {/* 7 Qualities Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 w-full max-w-5xl">
        {qualities.map((q, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center gap-2 p-3 rounded-2xl border ${q.border} ${q.bg} hover:scale-[1.04] transition-all duration-300 cursor-default`}
          >
            <div className={`${q.text} p-2 rounded-xl bg-black/20 border ${q.border}`}>
              {q.icon}
            </div>
            <span className={`font-bold text-xs ${q.text} text-center`}>{q.label}</span>
            <span className="text-[9px] text-slate-400 text-center leading-snug hidden sm:block">{q.desc}</span>
          </div>
        ))}
      </div>

      <div className={`w-full max-w-2xl p-4 rounded-2xl ${s.card} text-left border border-white/5`}>
        <p className="text-xs text-slate-400 leading-relaxed text-center italic">
          "The difference between a junior developer and a senior architect is that the senior knows which of these qualities to prioritize — and which trade-offs are acceptable."
        </p>
      </div>
    </div>
  )
}
