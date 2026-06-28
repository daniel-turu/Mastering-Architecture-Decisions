import { User, BookOpen } from 'lucide-react'

export default function Slide15Conclusion({ s }) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-6 text-center">
      {/* Badge */}
      <div>
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${s.badge}`}>
          Presentation Summary
        </span>
        
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-4">
          Master the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-emerald-400 to-lime-400">
            Architect Mindset
          </span>
        </h2>
        
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The difference between writing code and designing systems is awareness. A great backend developer sees the entire system, weighs trade-offs, and builds with scalability, reliability, and cost in mind.
        </p>
      </div>

      {/* Summary Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl text-left mt-2">
        {[
          {
            num: '1',
            title: 'Analyze First',
            desc: 'Understand problems, scale requirements, constraints, and users before write a line of code.'
          },
          {
            num: '2',
            title: 'Blueprint Early',
            desc: 'Define system components, communication channels, schemas, and databases beforehand.'
          },
          {
            num: '3',
            title: 'Measure Quality',
            desc: 'Constantly evaluate load handling, security, availability, and response performance metrics.'
          },
          {
            num: '4',
            title: 'Mind the Cost',
            desc: 'Choose resources intentionally. Keep your servers lean and queries highly optimized.'
          }
        ].map((item, idx) => (
          <div key={idx} className={`p-5 rounded-2xl ${s.card} border border-white/5 hover:border-emerald-500/20 transition-all duration-300`}>
            <span className="text-2xl font-extrabold font-mono text-emerald-400 block mb-2 opacity-50">
              0{item.num}
            </span>
            <span className="text-sm font-bold text-slate-100 block mb-1">
              {item.title}
            </span>
            <span className="text-[11px] text-slate-400 leading-relaxed block">
              {item.desc}
            </span>
          </div>
        ))}
      </div>

      {/* Presenter Sign-Off Footer */}
      <div className="w-full max-w-2xl mt-6 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <User size={20} />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-200 block">Presenter: Daniel Turu</span>
            <span className="text-[10px] text-slate-400 block">
              Software engineer and technical educator
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-black/30 border border-white/5 px-3 py-1.5 rounded-lg">
          <BookOpen size={12} className="text-emerald-400" />
          <span>Architecture Design Presentation &copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  )
}
