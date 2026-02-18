import React from 'react';

const Integration = () => {
  const tools = [
    { name: 'Google Classroom', icon: '🏫', color: '#10a37f' },
    { name: 'Zoom', icon: '📹', color: '#2D8CFF' },
    { name: 'Slack', icon: '💬', color: '#4A154B' },
    { name: 'Microsoft Teams', icon: '👥', color: '#6264A7' },
    { name: 'Notion', icon: '📝', color: '#000000' },
    { name: 'Drive', icon: '📁', color: '#FFBB00' },
  ];

  return (
    <section className="py-24 bg-base-200/30 overflow-hidden">
      <div className="mx-auto max-w-[98%] md:max-w-[80%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[11px] px-4 py-1.5 bg-primary/10 rounded-full">
                Ecosystem
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-base-content tracking-tighter leading-tight">
                Connect with your <br />
                <span className="text-primary italic">Favorite Tools</span>
              </h2>
              <p className="text-base-content/60 font-medium text-lg leading-relaxed max-w-lg">
                O-Exam integrates seamlessly with the apps you already use. Sync
                students, schedule meetings, and export reports with one click.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="btn btn-primary rounded-2xl px-8 font-black text-white border-none shadow-xl shadow-primary/20 hover:translate-y-[-3px] transition-all">
                VIEW ALL INTEGRATIONS
              </button>
            </div>
          </div>

          {/* Right Side: Animated Floating Icons */}
          <div className="relative h-[400px] flex items-center justify-center">
            {/* Center Logo Hub */}
            <div className="w-24 h-24 rounded-[2rem] bg-white shadow-2xl flex items-center justify-center text-3xl z-20 border border-base-200 animate-pulse">
              🚀
            </div>

            {/* Floating Icons Loop */}
            {tools.map((tool, idx) => {
              // Simple logic for circular positioning
              const angle = idx * (360 / tools.length) * (Math.PI / 180);
              const radius = 140; // Desktop radius
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={idx}
                  className="absolute p-4 rounded-2xl bg-white shadow-lg border border-base-100 flex items-center gap-3 transition-all duration-500 hover:scale-110 hover:shadow-2xl z-10 group"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <span className="text-xl">{tool.icon}</span>
                  <span className="text-xs font-black text-base-content/70 group-hover:text-primary transition-colors hidden md:block">
                    {tool.name}
                  </span>
                </div>
              );
            })}

            {/* Decorative Background Circles */}
            <div className="absolute inset-0 flex items-center justify-center -z-0">
              <div className="w-[300px] h-[300px] border border-dashed border-primary/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="w-[180px] h-[180px] border border-dashed border-primary/10 rounded-full absolute animate-[spin_15s_linear_infinite_reverse]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
