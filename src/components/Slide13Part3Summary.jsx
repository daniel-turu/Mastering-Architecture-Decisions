import { CheckCircle, ArrowRight, Lightbulb, Code2, Database, TrendingUp } from 'lucide-react'

const takeaways = [
  {
    icon: <Database size={18} />,
    title: 'Design the schema before writing a line of code.',
    detail: 'How you store data determines how fast you can retrieve it. Normalization, indexing strategy, and data types are architectural decisions.',
  },
  {
    icon: <Code2 size={18} />,
    title: 'Every query has a cost — know what it is.',
    detail: "Use EXPLAIN ANALYZE to understand how the database engine executes your query. Never assume it\u2019s efficient.",
  },
  {
    icon: <TrendingUp size={18} />,
    title: 'Think in scale from day one.',
    detail: 'What works for 100 users will break at 100,000. Design APIs and queries that can be optimized — not ones that need rewriting.',
  },
  {
    icon: <ArrowRight size={18} />,
    title: 'Cache aggressively. Hit the database intentionally.',
    detail: 'Most read operations don\'t need fresh database data every time. Redis and in-memory stores exist for a reason.',
  },
]

export default function Slide13Part3Summary({ s }) {
  return (
    <div className="flex flex-col items-center gap-8 py-4 text-center">

      {/* Header */}
      <div>
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${s.badge}`}>
          Part 3: Summary
        </span>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-3">
          Think Like an{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-400">
            Architect
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The transition from developer to architect isn't about learning more frameworks — it's about thinking about consequences before writing a single line of code.
        </p>
      </div>

      {/* 4 Key Takeaways */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl text-left">
        {takeaways.map((item, i) => (
          <div
            key={i}
            className={`flex gap-4 p-5 rounded-2xl ${s.card} border border-white/5 hover:border-emerald-500/20 transition-all duration-300 group`}
          >
            <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
              {item.icon}
            </div>
            <div>
              <span className="text-sm font-bold text-slate-100 block leading-snug">{item.title}</span>
              <span className="text-[11px] text-slate-400 block mt-1.5 leading-relaxed">{item.detail}</span>
            </div>
          </div>
        ))}
      </div>

      {/* The Closing Statement */}
      <div className="w-full max-w-3xl">
        <div className="bg-gradient-to-br from-emerald-950/40 to-lime-950/20 border border-emerald-800/40 rounded-2xl p-6 flex flex-col items-center gap-3">
          <Lightbulb size={28} className="text-lime-400" />
          <h3 className="font-display font-bold text-xl text-slate-100">The Backend Developer's Creed</h3>
          <p className="text-sm text-slate-300 italic leading-relaxed max-w-xl text-center">
            "I do not just write APIs. I design systems. I control costs. I make architectural decisions that determine whether this company's infrastructure is a competitive advantage — or a liability."
          </p>
          <div className="flex flex-wrap gap-2 mt-2 justify-center">
            {['Query Efficiency', 'Schema Design', 'Caching', 'Cost Awareness', 'Scalable APIs'].map((tag, i) => (
              <span key={i} className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${s.badge}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
