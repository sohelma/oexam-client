const Hero = () => {
  return (
    <div>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-base-100">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="badge badge-outline badge-primary font-bold py-4 px-6 rounded-full animate-bounce">
              🚀 New: BCS Model Test 2026 is Live!
            </div>
            <h1 className="text-6xl font-black leading-tight text-base-content uppercase tracking-tighter">
              O-EXAM: The Smartest{' '}
              <span className="text-primary">Evaluation</span> Tool
            </h1>
            <p className="text-lg opacity-70 max-w-lg leading-relaxed">
              Join thousands of students and prepare for your dreams with
              real-time tracking, instant results, and expert-curated questions.
            </p>
            <div className="flex gap-4">
              <button className="btn btn-primary btn-lg rounded-2xl shadow-xl shadow-primary/20 px-8 font-black uppercase">
                Get Started
              </button>
              <button className="btn btn-ghost btn-lg rounded-2xl border-base-300 px-8 font-black uppercase italic">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Content - Image with Floating Cards */}
          <div className="relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700">
              <img
                src="https://i.ibb.co.com/ympxYbyn/hero-img.jpg"
                alt="kids studying"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Info Card */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-base-100 p-6 rounded-[2rem] shadow-2xl border border-base-100 animate-floating">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/10 text-green-500 rounded-2xl font-bold">
                  ✓
                </div>
                <div>
                  <p className="font-black text-xl leading-none">98.5%</p>
                  <p className="text-xs opacity-50 uppercase font-bold tracking-widest mt-1">
                    Success Rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;