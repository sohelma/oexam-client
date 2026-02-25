import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      label: 'Active Students',
      value: '200K+',
      description: 'Learning every day',
      icon: '🎓',
    },
    {
      label: 'Exams Conducted',
      value: '15M+',
      description: 'Secure sessions held',
      icon: '📝',
    },
    {
      label: 'Global Reach',
      value: '50+',
      description: 'Countries served',
      icon: '🌍',
    },
    {
      label: 'Success Rate',
      value: '99.9%',
      description: 'Platform uptime SLA',
      icon: '⚡',
    },
  ];

  return (
    <section className="py-24 bg-[#0A1120] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-10 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group p-8 rounded-[2.5rem] bg-[#161F31]/50 border border-slate-800 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon & Label */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{stat.icon}</span>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-primary transition-colors">
                  {stat.label}
                </span>
              </div>

              {/* Value */}
              <div className="mb-2">
                <h3 className="text-5xl font-black text-white tracking-tighter group-hover:text-[#2D60FF] transition-colors">
                  {stat.value}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm font-medium text-slate-400 leading-relaxed">
                {stat.description}
              </p>

              {/* Bottom Progress-like line */}
              <div className="mt-6 h-1 w-12 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#2D60FF] w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Trust Badge */}
        <div className="mt-20 text-center">
          <p className="text-slate-500 text-sm font-bold italic tracking-wide">
            Powering the future of digital assessments since 2022&quot;
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
