import { Code2, Lock, AlertOctagon, CheckCircle, X } from 'lucide-react'

export default function Slide9MaintainabilitySecurity({ s }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch py-4">

      {/* LEFT: Maintainability */}
      <div className={`flex flex-col gap-5 p-6 rounded-2xl ${s.card} text-left relative overflow-hidden`}>
        <div className="absolute -top-6 -right-6 text-cyan-500/5">
          <Code2 size={140} />
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Code2 size={20} />
          </div>
          <div>
            <span className="text-[9px] uppercase tracking-widest text-cyan-500/70 font-bold block">Quality #5</span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-cyan-400">Maintainability</h3>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          Can another developer <strong className="text-slate-100">understand, modify, and extend</strong> the codebase without breaking things? Systems live for years. Developers come and go.
        </p>

        {/* Code comparison */}
        <div className="flex flex-col gap-3">
          <div className="p-3 rounded-xl bg-red-950/20 border border-red-900/40">
            <div className="flex items-center gap-2 mb-2">
              <X size={12} className="text-red-400" />
              <span className="text-[10px] font-bold text-red-300 uppercase tracking-wider">Unmaintainable Code</span>
            </div>
            <code className="text-xs font-mono text-red-300 block bg-black/30 px-2 py-1.5 rounded-lg">
              x1 = f(y, z, a, b)
            </code>
            <p className="text-[10px] text-slate-500 mt-1.5">What does <code className="text-red-400">f</code> do? What is <code className="text-red-400">x1</code>? Nobody knows.</p>
          </div>

          <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-900/40">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle size={12} className="text-emerald-400" />
              <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider">Maintainable Code</span>
            </div>
            <code className="text-xs font-mono text-emerald-300 block bg-black/30 px-2 py-1.5 rounded-lg">
              calculate_total_price(cart, discount, tax, shipping)
            </code>
            <p className="text-[10px] text-slate-500 mt-1.5">Clear. Self-documenting. Any developer can extend it.</p>
          </div>
        </div>

        <div className="mt-auto p-3 bg-cyan-950/20 border border-cyan-900/30 rounded-xl">
          <p className="text-[11px] text-slate-400 italic leading-relaxed">
            "A system built by a team of 5 will be maintained by a team of 20 over the next 10 years. Write for <span className="text-cyan-300 font-bold">the developer after you</span>, not just for the computer."
          </p>
        </div>
      </div>

      {/* RIGHT: Security */}
      <div className={`flex flex-col gap-5 p-6 rounded-2xl ${s.card} text-left relative overflow-hidden`}>
        <div className="absolute -top-6 -right-6 text-red-500/5">
          <Lock size={140} />
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
            <Lock size={20} />
          </div>
          <div>
            <span className="text-[9px] uppercase tracking-widest text-red-500/70 font-bold block">Quality #6</span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-red-400">Security</h3>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          Can an attacker break it? Security is not a feature you add at the end — it is a <strong className="text-slate-100">design decision made from day one</strong>.
        </p>

        {/* Security questions */}
        <div className="flex flex-col gap-2">
          <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">Critical Security Questions</span>
          {[
            { q: 'Can passwords be stolen?', hint: 'Are they hashed? Salted? Stored raw?' },
            { q: 'Can data be leaked?', hint: 'Are APIs authenticated? Is data encrypted in transit?' },
            { q: 'Can transactions be manipulated?', hint: 'Is there input validation? Rate limiting? Idempotency?' },
          ].map((item, i) => (
            <div key={i} className="p-3 rounded-xl bg-red-950/10 border border-red-900/30 hover:border-red-500/30 transition group">
              <div className="flex items-start gap-2">
                <AlertOctagon size={12} className="text-red-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs font-bold text-red-300 block">{item.q}</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">{item.hint}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto grid grid-cols-2 gap-2">
          {[
            { label: 'Encryption', desc: 'TLS, AES-256 at rest & in transit' },
            { label: 'Auth & AuthZ', desc: 'JWT, OAuth2, RBAC policies' },
            { label: 'Input Validation', desc: 'Sanitize every entry point' },
            { label: 'Audit Logging', desc: 'Track every sensitive action' },
          ].map((item, i) => (
            <div key={i} className="p-2 rounded-xl bg-red-950/20 border border-red-900/30 hover:border-red-500/20 transition">
              <span className="text-[10px] font-bold text-red-300 block">{item.label}</span>
              <span className="text-[9px] text-slate-400 mt-0.5 block">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
