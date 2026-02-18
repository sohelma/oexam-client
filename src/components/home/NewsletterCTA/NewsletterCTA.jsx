import React from 'react';

const NewsletterCTA = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="mx-auto max-w-[98%] md:max-w-[80%] px-4">
        <div className="relative rounded-[3rem] overflow-hidden bg-[#0A1120] p-8 md:p-16 border border-slate-800 shadow-2xl">
          {/* Background Abstract Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 blur-[80px] rounded-full -ml-20 -mb-20"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Content */}
            <div className="space-y-6 text-center lg:text-left">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[11px] px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20">
                Ready to Start?
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-tight">
                Transform your <br />
                <span className="text-primary">Exams Today.</span>
              </h2>
              <p className="text-slate-400 text-lg font-medium max-w-md mx-auto lg:mx-0">
                Join 20,000+ educators worldwide and start conducting secure,
                smart exams in minutes.
              </p>
            </div>

            {/* Right Side: Form */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-[2.5rem] space-y-4">
              <h4 className="text-xl font-bold text-white text-center md:text-left">
                Get a free trial link
              </h4>
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="flex-1 bg-[#161F31] border border-slate-700 rounded-2xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary transition-all"
                />
                <button className="bg-primary hover:bg-primary/90 text-white font-black px-8 py-4 rounded-2xl shadow-lg shadow-primary/20 transition-all active:scale-95 whitespace-nowrap">
                  GET STARTED
                </button>
              </div>
              <p className="text-[11px] text-slate-500 text-center md:text-left font-medium uppercase tracking-wider">
                * No credit card required • 7-day free trial
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Small Text */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🛡️</span>
            <span className="font-black text-base-content text-sm tracking-widest uppercase">
              GDPR Compliant
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔒</span>
            <span className="font-black text-base-content text-sm tracking-widest uppercase">
              SSL Secured
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="font-black text-base-content text-sm tracking-widest uppercase">
              Fast Integration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
