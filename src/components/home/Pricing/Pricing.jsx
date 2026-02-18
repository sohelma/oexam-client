'use client';

const Pricing = () => {
  const plans = [
    {
      name: 'Standard',
      price: 'Free',
      features: [
        'Up to 50 students',
        'Standard Exam Builder',
        'Basic Reporting',
        'Mobile Support',
      ],
      buttonText: 'Get Started',
      isPopular: false,
    },
    {
      name: 'Pro Educator',
      price: '$49',
      unit: '/month',
      features: [
        'Unlimited Students',
        'AI Proctoring Lite',
        'Advanced Analytics',
        'CSV Exports',
        'Priority Email Support',
      ],
      buttonText: 'Try Pro',
      isPopular: true,
    },
    {
      name: 'Institution',
      price: 'Custom',
      features: [
        'White-label Branding',
        'LMS Integrations',
        'Dedicated Account Manager',
        '24/7 Phone Support',
        'API Access',
      ],
      buttonText: 'Contact Us',
      isPopular: false,
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="mx-auto max-w-[98%] md:max-w-[80%]">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-[#1E293B] tracking-tight">
            Transparent Pricing
          </h2>
          <p className="text-[#64748B] font-medium">
            Scale your assessment capabilities with our flexible tiers.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-10 transition-all duration-500 ${
                plan.isPopular
                  ? 'border-2 border-[#2D60FF] shadow-[0_20px_50px_rgba(45,96,255,0.2)] scale-105 z-10'
                  : 'border border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Popular Tag */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2D60FF] text-white text-[10px] font-black px-4 py-1.5 rounded-lg uppercase tracking-widest shadow-lg shadow-blue-500/40">
                  Most Popular
                </div>
              )}

              {/* Card Title & Price */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#1E293B] mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-[#1E293B] tracking-tighter">
                    {plan.price}
                  </span>
                  {plan.unit && (
                    <span className="text-slate-400 font-bold">
                      {plan.unit}
                    </span>
                  )}
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-[#2D60FF]/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-[#2D60FF]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-slate-600">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button
                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-[#2D60FF] text-white shadow-lg shadow-blue-500/30 hover:bg-blue-600'
                    : 'bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 shadow-sm'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;


