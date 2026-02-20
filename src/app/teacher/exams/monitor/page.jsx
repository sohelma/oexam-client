import React from 'react';
import {
  LuActivity,
  LuTriangleAlert,
  LuCircleCheck,
  LuClock,
} from 'react-icons/lu';

const LiveMonitoring = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        <h2 className="text-2xl font-black text-slate-800">
          Live Exam Monitor
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-[2rem] border-l-4 border-primary shadow-sm space-y-2">
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-[10px] font-black uppercase">Active Now</span>
            <LuActivity />
          </div>
          <h3 className="text-3xl font-black text-slate-800">84</h3>
        </div>
        <div className="bg-white p-6 rounded-[2rem] border-l-4 border-amber-400 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-[10px] font-black uppercase">Warnings</span>
            <LuTriangleAlert />
          </div>
          <h3 className="text-3xl font-black text-slate-800">03</h3>
        </div>
        <div className="bg-white p-6 rounded-[2rem] border-l-4 border-emerald-400 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-[10px] font-black uppercase">Submitted</span>
            <LuCircleCheck />
          </div>
          <h3 className="text-3xl font-black text-slate-800">12</h3>
        </div>
      </div>

      <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl overflow-hidden relative">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-black uppercase tracking-tight">
              Physics Mid-Term Exam
            </h4>
            <p className="text-slate-400 text-sm font-bold flex items-center gap-2 justify-center md:justify-start">
              {' '}
              <LuClock /> Time Remaining: 45:12
            </p>
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-2xl font-black text-sm transition-all uppercase tracking-widest">
            End Exam Early
          </button>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -mr-32 -mt-32"></div>
      </div>
    </div>
  );
};

export default LiveMonitoring;
