'use client';
import Link from 'next/link';
import React from 'react';
import {
  LuPlus,
  LuLogOut,
  LuCircleArrowRight,
  LuTrendingUp,
  LuFolder,
  LuUsers,
  LuCalendar,
  LuLightbulb,
  LuClock,
} from 'react-icons/lu';

export default function TeacherPage() {
  const stats = [
    {
      label: 'LIVE EXAMS',
      value: '1',
      icon: <LuCircleArrowRight />,
      color: 'bg-blue-50 text-blue-500',
    },
    {
      label: 'AVG PASS RATE',
      value: '84%', // Value updated for better visual
      icon: <LuTrendingUp />,
      color: 'bg-emerald-50 text-emerald-500',
    },
    {
      label: 'QUESTION BANK',
      value: '128', // Value updated
      icon: <LuFolder />,
      color: 'bg-amber-50 text-amber-500',
    },
    {
      label: 'ACTIVE STUDENTS',
      value: '142',
      icon: <LuUsers />,
      color: 'bg-indigo-50 text-indigo-500',
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto space-y-10 pb-20 lg:pb-10">
      {/* --- Balanced Premium Header (Recommended) --- */}
      <div className="relative group overflow-hidden bg-slate-900 p-8 md:p-10 rounded-[3rem] shadow-2xl border border-slate-800">
        {/* Abstract Background Glows */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-all duration-1000"></div>
        <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-indigo-500/10 blur-[70px] rounded-full"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-primary/20 border border-primary/30 text-primary text-[9px] font-black uppercase tracking-[0.2em]">
                System Dashboard
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-400 text-[9px] font-black uppercase tracking-[0.2em]">
                Pro Tier Educator
              </span>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                Teacher <span className="text-primary">Console</span>
              </h1>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em] mt-1 opacity-60">
                Platform Management Engine
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 self-end md:self-auto">
            <div className="hidden sm:block text-right mr-3">
              <p className="text-sm font-black text-white">Habiba</p>
              <p className="text-[10px] font-bold text-slate-500 italic">
                habiba@edu.com
              </p>
            </div>
            <Link href={'/teacher_dashboard/exams'}>
              
            <button className="bg-primary hover:bg-primary/90 text-white h-14 rounded-2xl px-8 font-black shadow-xl shadow-primary/20 transition-all flex items-center gap-2 active:scale-95">
              <LuPlus className="text-xl" /> New Exam
            </button>
            </Link>
            <button className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 text-slate-400 border border-white/10 hover:bg-red-500/20 hover:text-red-400 transition-all">
              <LuLogOut size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map(stat => (
          <div
            key={stat.label}
            className="bg-white p-8 rounded-[2.5rem] border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 group relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-6 relative z-10">
              <span className="text-[10px] font-black text-slate-400 tracking-[0.15em] uppercase">
                {stat.label}
              </span>
              <span
                className={`p-3 rounded-2xl ${stat.color} group-hover:scale-110 transition-transform duration-500 text-2xl`}
              >
                {stat.icon}
              </span>
            </div>
            <h2 className="text-5xl font-black text-slate-800 tracking-tighter relative z-10">
              {stat.value}
            </h2>
            <div
              className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-5 ${stat.color}`}
            ></div>
          </div>
        ))}
      </div>

      {/* --- Advanced Analytics & Schedule Grid --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Recent Submissions - High Contrast Case */}
        <div className="lg:col-span-7 bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm flex flex-col group hover:shadow-2xl transition-all duration-500">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-xl font-black text-slate-800 tracking-tight">
                Recent Submissions
              </h3>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Live Activity Feed
              </p>
            </div>
            <button className="px-5 py-2 bg-slate-50 hover:bg-primary hover:text-white rounded-xl text-[10px] font-black transition-all uppercase tracking-tighter">
              View All Reports
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center text-center p-10 border-2 border-dashed border-slate-100 rounded-[3rem] bg-slate-50/30 group-hover:bg-white transition-colors">
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-white rounded-[2.5rem] shadow-xl flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-500">
                📂
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full border-4 border-white animate-pulse"></div>
            </div>
            <h4 className="text-lg font-black text-slate-800">
              Everything is quiet
            </h4>
            <p className="text-slate-400 font-bold text-sm max-w-[280px] mt-2">
              No student submissions yet. Once an exam starts, progress reports
              will sync here.
            </p>
          </div>
        </div>

        {/* Right Action Column */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {/* Subject Coverage - Slim & Modern */}
          <div className="bg-slate-900 p-8 rounded-[3rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] rounded-full"></div>
            <h3 className="text-[10px] font-black text-slate-500 tracking-[0.2em] uppercase mb-8 relative z-10">
              Subject Focus
            </h3>
            <div className="space-y-6 relative z-10">
              {[
                {
                  name: 'Mathematics',
                  count: 12,
                  color: 'bg-primary',
                  width: '75%',
                },
                {
                  name: 'Physics',
                  count: 5,
                  color: 'bg-indigo-400',
                  width: '40%',
                },
              ].map(sub => (
                <div key={sub.name} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="font-black text-white text-sm">
                      {sub.name}
                    </span>
                    <span className="text-[10px] font-black text-slate-500">
                      {sub.count} Exams
                    </span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${sub.color} shadow-[0_0_15px_rgba(0,0,0,0.5)]`}
                      style={{ width: sub.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Growth Tip Card - Floating Style */}
          <div className="bg-gradient-to-br from-primary to-indigo-600 p-8 rounded-[3rem] text-white shadow-xl shadow-primary/30 relative overflow-hidden group">
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-2xl border border-white/20">
                <LuLightbulb className="group-hover:animate-bounce" />
              </div>
              <span className="text-[9px] font-black bg-black/20 px-3 py-1 rounded-full uppercase tracking-[0.2em]">
                Insight
              </span>
            </div>
            <h4 className="text-xl font-black leading-tight">
              Your question bank grew by 20% this week!
            </h4>
            <p className="text-xs text-white/70 font-bold mt-2 mb-6">
              Keep adding variety to improve assessment accuracy.
            </p>
            <button className="w-full py-4 bg-white text-primary rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-colors shadow-lg shadow-black/10">
              Analyze Performance
            </button>
          </div>
        </div>

        {/* Full-Width Upcoming Schedule - Premium List */}
        <div className="lg:col-span-12 bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center shadow-inner">
              <LuCalendar size={20} />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-800">
                Upcoming Schedule
              </h3>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Calendar Events
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="group flex items-center gap-6 p-6 bg-slate-50 hover:bg-white rounded-[2rem] border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex flex-col items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform">
                <span className="text-[9px] font-black text-slate-400 uppercase">
                  Oct
                </span>
                <span className="text-xl font-black text-slate-800 leading-none">
                  28
                </span>
              </div>
              <div className="flex-1">
                <h5 className="font-black text-slate-800 text-base">
                  Physics Quiz - Unit 3 Assessment
                </h5>
                <div className="flex items-center gap-4 mt-1 text-slate-400 font-bold text-[11px] uppercase tracking-tighter">
                  <span className="flex items-center gap-1">
                    <LuClock size={12} /> 02:30 PM
                  </span>
                  <span className="flex items-center gap-1">
                    <LuUsers size={12} /> 45 Students
                  </span>
                </div>
              </div>
              <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-300 hover:text-primary transition-colors">
                <LuPlus />
              </button>
            </div>

            <div className="group flex items-center gap-6 p-6 bg-slate-50/50 opacity-60 hover:opacity-100 rounded-[2rem] border border-transparent transition-all">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex flex-col items-center justify-center border border-slate-100">
                <span className="text-[9px] font-black text-slate-400 uppercase">
                  Nov
                </span>
                <span className="text-xl font-black text-slate-800 leading-none">
                  02
                </span>
              </div>
              <div className="flex-1">
                <h5 className="font-black text-slate-800 text-base">
                  Chemistry Lab Viva - Batch B
                </h5>
                <div className="flex items-center gap-4 mt-1 text-slate-400 font-bold text-[11px] uppercase tracking-tighter">
                  <span className="flex items-center gap-1">
                    <LuClock size={12} /> 10:00 AM
                  </span>
                  <span className="flex items-center gap-1">
                    <LuUsers size={12} /> 12 Students
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deployed Exam Table Section */}
      <div className="bg-white rounded-[3rem] border border-slate-200/60 shadow-sm overflow-hidden mb-10">
        <div className="p-8 md:p-10 border-b border-slate-100 bg-slate-50/30 flex justify-between items-center">
          <h3 className="text-xs font-black text-slate-400 tracking-widest uppercase">
            Deployed Exam Repository
          </h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-tighter">
              Live Database Connected
            </span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full border-separate border-spacing-0">
            <thead>
              <tr className="text-slate-400 uppercase text-[10px] font-black tracking-[0.2em]">
                <th className="bg-transparent p-8">Exam Title</th>
                <th className="bg-transparent">Subject</th>
                <th className="bg-transparent text-center">Status</th>
                <th className="bg-transparent">Items</th>
                <th className="bg-transparent text-right pr-10">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="hover:bg-slate-50/80 transition-all group">
                <td className="p-8 border-t border-slate-50">
                  <p className="font-black text-slate-800 text-base group-hover:text-primary transition-colors">
                    Advanced Mathematics Final
                  </p>
                  <span className="text-[10px] font-bold text-slate-400 mt-1 block tracking-wider">
                    CREATED: 2024-10-24
                  </span>
                </td>
                <td className="border-t border-slate-50 font-bold text-slate-500 italic">
                  Mathematics
                </td>
                <td className="border-t border-slate-50 text-center">
                  <span className="bg-emerald-100 text-emerald-600 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-tighter ring-4 ring-emerald-50 inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-pulse"></span>
                    Live
                  </span>
                </td>
                <td className="border-t border-slate-50 font-bold text-slate-500">
                  2 Questions
                </td>
                <td className="border-t border-slate-50 text-right pr-10 space-x-3">
                  <button className="p-3 text-slate-400 hover:bg-primary/10 hover:text-primary rounded-xl transition-all">
                    ✏️
                  </button>
                  <button className="p-3 text-slate-400 hover:bg-error/10 hover:text-error rounded-xl transition-all">
                    🗑️
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
