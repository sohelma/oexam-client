import React from "react";

const Integration = () => {

  const tools = [
    { name: "Question Bank", icon: "📚" },
    { name: "Auto Grading", icon: "⚡" },
    { name: "Proctoring", icon: "🎥" },
    { name: "Analytics", icon: "📊" },
    { name: "Certificates", icon: "🏆" },
    { name: "Results", icon: "🧾" },
  ];

  return (

    <section className="py-24 bg-base-200/20">

      <div className="mx-auto max-w-[1440px] px-6 lg:px-20">

        <div className="grid lg:grid-cols-2 gap-20 items-center">


          {/* LEFT CONTENT */}

          <div className="space-y-6">

            <span className="text-primary font-black uppercase tracking-[0.3em]
            text-[11px] bg-primary/10 px-4 py-2 rounded-full">

              Exam Platform

            </span>

            <h2 className="text-4xl md:text-6xl font-black leading-tight">

              Smart
              <br />

              <span className="text-primary">

                Exam System

              </span>

            </h2>

            <p className="text-base-content/60 text-lg max-w-lg">

              A centralized platform for managing exams,
              monitoring students and generating results
              with complete automation.

            </p>

            <button className="btn btn-primary px-8 rounded-xl font-bold">
              EXPLORE SYSTEM
            </button>

          </div>



          {/* RIGHT HUB LAYOUT */}

          <div className="relative flex flex-col items-center gap-6">


            {/* Top Features */}

            <div className="grid grid-cols-3 gap-6">

              {tools.slice(0,3).map((tool, i) => (

                <div
                  key={i}
                  className="bg-white px-6 py-4 rounded-xl shadow-lg
                  border border-base-200 flex items-center gap-2"
                >

                  <span className="text-xl">
                    {tool.icon}
                  </span>

                  <span className="text-sm font-bold">
                    {tool.name}
                  </span>

                </div>

              ))}

            </div>



            {/* Connection Line */}

            <div className="w-[2px] h-16 bg-primary/20"></div>



            {/* Center Core */}

            <div className="w-28 h-28 rounded-3xl bg-primary text-white
            flex items-center justify-center text-4xl shadow-xl">

              🎓

            </div>



            {/* Connection Line */}

            <div className="w-[2px] h-16 bg-primary/20"></div>



            {/* Bottom Features */}

            <div className="grid grid-cols-3 gap-6">

              {tools.slice(3,6).map((tool, i) => (

                <div
                  key={i}
                  className="bg-white px-6 py-4 rounded-xl shadow-lg
                  border border-base-200 flex items-center gap-2"
                >

                  <span className="text-xl">
                    {tool.icon}
                  </span>

                  <span className="text-sm font-bold">
                    {tool.name}
                  </span>

                </div>

              ))}

            </div>


          </div>


        </div>

      </div>

    </section>

  );

};

export default Integration;