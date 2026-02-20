'use client';
import {
  LuPlus,
  LuLogOut,
  LuCircleArrowRight,
  LuTrendingUp,
  LuFolder,
  LuUsers,
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
      value: '0%',
      icon: <LuTrendingUp />,
      color: 'bg-emerald-50 text-emerald-500',
    },
    {
      label: 'QUESTION BANK',
      value: '2',
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
    <div className="max-w-[1400px] mx-auto space-y-10">
      {/* Top Profile & Action Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-6 md:p-8 rounded-[2.5rem] border border-slate-200/60 shadow-sm">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            Teacher
          </h1>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
            Platform Management Engine
          </p>
        </div>

        <div className="flex items-center gap-4 self-end md:self-auto">
          <div className="hidden sm:block text-right mr-2">
            <p className="text-sm font-black text-slate-800">Habiba</p>
            <span className="text-[9px] font-black text-primary bg-primary/10 px-2.5 py-1 rounded-lg uppercase tracking-wider">
              Pro Tier Educator
            </span>
          </div>
          <button className="btn btn-primary h-14 rounded-2xl px-8 font-black text-white shadow-xl shadow-primary/20 border-none hover:translate-y-[-2px] transition-all normal-case text-base">
            <LuPlus className="mr-2 text-xl" /> New Exam
          </button>
          <button className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-400 hover:bg-error/10 hover:text-error transition-all border border-slate-100">
            <LuLogOut size={22} />
          </button>
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
            {/* Background Subtle Decor */}
            <div
              className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-5 ${stat.color}`}
            ></div>
          </div>
        ))}
      </div>

      {/* Submissions & Coverage Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Recent Submissions Card */}
        <div className="lg:col-span-3 bg-white p-8 rounded-[3rem] border border-slate-200/60 shadow-sm flex flex-col min-h-[400px]">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-xs font-black text-slate-400 tracking-widest uppercase">
              Recent Submissions
            </h3>
            <button className="text-xs font-black text-primary hover:underline">
              View All
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center text-slate-200 text-4xl">
              🗂️
            </div>
            <p className="text-slate-400 font-bold text-sm tracking-tight">
              No submissions yet available
            </p>
          </div>
        </div>

        {/* Subject Coverage Card */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[3rem] border border-slate-200/60 shadow-sm">
          <h3 className="text-xs font-black text-slate-400 tracking-widest uppercase mb-10">
            Subject Coverage
          </h3>
          <div className="space-y-8">
            {[
              { name: 'MATHEMATICS', count: 1, color: 'bg-primary' },
              { name: 'PHYSICS', count: 0, color: 'bg-slate-200' },
              { name: 'CHEMISTRY', count: 0, color: 'bg-slate-200' },
              { name: 'BIOLOGY', count: 0, color: 'bg-slate-200' },
            ].map(sub => (
              <div key={sub.name} className="group cursor-default">
                <div className="flex justify-between text-[11px] font-black mb-3">
                  <span className="text-slate-600 group-hover:text-primary transition-colors">
                    {sub.name}
                  </span>
                  <span
                    className={
                      sub.count > 0 ? 'text-primary' : 'text-slate-400'
                    }
                  >
                    {sub.count} Exams
                  </span>
                </div>
                <div className="h-2.5 w-full bg-slate-50 rounded-full overflow-hidden p-0.5 border border-slate-100">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${sub.color}`}
                    style={{ width: sub.count > 0 ? '35%' : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deployed Exam Table Section */}
      <div className="bg-white rounded-[3rem] border border-slate-200/60 shadow-sm overflow-hidden mb-10">
        <div className="p-8 md:p-10 border-b border-slate-100 bg-slate-50/30">
          <h3 className="text-xs font-black text-slate-400 tracking-widest uppercase">
            Deployed Exam Repository
          </h3>
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
                  <span className="bg-emerald-100 text-emerald-600 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-tighter ring-4 ring-emerald-50">
                    Live
                  </span>
                </td>
                <td className="border-t border-slate-50 font-bold text-slate-500">
                  2 Q
                </td>
                <td className="border-t border-slate-50 text-right pr-10 space-x-3">
                  <button className="btn btn-ghost btn-circle btn-sm text-slate-400 hover:bg-primary/10 hover:text-primary transition-all">
                    ✏️
                  </button>
                  <button className="btn btn-ghost btn-circle btn-sm text-slate-400 hover:bg-error/10 hover:text-error transition-all">
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
