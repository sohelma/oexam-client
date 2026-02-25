"use client";

import React from "react";
import {
  LuUsers,
  LuSchool,
  LuUserCheck,
  LuFileText,
  LuLightbulb,
  LuCalendar,
  LuClock,
} from "react-icons/lu";

export default function AdminDashboard() {

  const stats = [
    {
      label: "TOTAL STUDENTS",
      value: "120",
      icon: <LuUsers />,
      color: "bg-blue-50 text-blue-500",
    },
    {
      label: "TOTAL TEACHERS",
      value: "15",
      icon: <LuUserCheck />,
      color: "bg-emerald-50 text-emerald-500",
    },
    {
      label: "INSTITUTIONS",
      value: "5",
      icon: <LuSchool />,
      color: "bg-amber-50 text-amber-500",
    },
    {
      label: "TOTAL EXAMS",
      value: "32",
      icon: <LuFileText />,
      color: "bg-indigo-50 text-indigo-500",
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto space-y-10 pb-20 lg:pb-10">

      {/* Premium Header */}
      <div className="relative overflow-hidden bg-slate-900 p-8 md:p-10 rounded-[3rem] shadow-2xl border border-slate-800">

        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/20 blur-[100px] rounded-full"></div>

        <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">

          <div>

            <span className="px-3 py-1 rounded-lg bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 text-[10px] font-black uppercase tracking-widest">
              Admin Dashboard
            </span>

            <h1 className="text-3xl md:text-4xl font-black text-white mt-3">
              Admin Console
            </h1>

            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">
              System Management Center
            </p>

          </div>

          <div className="text-right">

            <p className="text-white font-bold">
              Administrator
            </p>

            <p className="text-xs text-slate-400">
              admin@system.com
            </p>

          </div>

        </div>

      </div>


      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map(stat => (

          <div
            key={stat.label}
            className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
          >

            <div className="flex justify-between mb-6">

              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                {stat.label}
              </span>

              <span
                className={`p-3 rounded-2xl ${stat.color} text-2xl`}
              >
                {stat.icon}
              </span>

            </div>

            <h2 className="text-5xl font-black text-slate-800">
              {stat.value}
            </h2>

          </div>

        ))}

      </div>


      {/* Activity + Insight Section */}
      <div className="grid lg:grid-cols-12 gap-8">

        {/* Recent Activity */}
        <div className="lg:col-span-7 bg-white p-10 rounded-[3rem] border shadow-sm">

          <h3 className="text-xl font-black mb-6">
            Recent Activity
          </h3>

          <div className="space-y-4 text-sm text-slate-600">

            <div className="p-4 rounded-xl bg-slate-50">
              New student registered
            </div>

            <div className="p-4 rounded-xl bg-slate-50">
              Teacher added to Institution
            </div>

            <div className="p-4 rounded-xl bg-slate-50">
              New Exam created
            </div>

            <div className="p-4 rounded-xl bg-slate-50">
              Institution updated
            </div>

          </div>

        </div>


        {/* Admin Insight */}
        <div className="lg:col-span-5">

          <div className="bg-gradient-to-br from-indigo-600 to-blue-600 p-8 rounded-[3rem] text-white shadow-xl">

            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-2xl mb-6">
              <LuLightbulb />
            </div>

            <h4 className="text-xl font-black">
              System running smoothly
            </h4>

            <p className="text-sm mt-2 text-white/80">
              All services operational. No issues detected.
            </p>

            <button className="mt-6 w-full py-4 bg-white text-indigo-600 rounded-2xl font-bold">
              View Reports
            </button>

          </div>

        </div>

      </div>


      {/* Upcoming Events */}
      <div className="bg-white p-10 rounded-[3rem] border shadow-sm">

        <div className="flex items-center gap-3 mb-8">

          <LuCalendar size={22} />

          <h3 className="text-lg font-black">
            Upcoming Events
          </h3>

        </div>


        <div className="space-y-4">

          <div className="flex justify-between p-6 bg-slate-50 rounded-2xl">

            <div>

              <h4 className="font-bold">
                System Maintenance
              </h4>

              <p className="text-sm text-slate-500">
                Server upgrade
              </p>

            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <LuClock />
              10:00 PM
            </div>

          </div>


          <div className="flex justify-between p-6 bg-slate-50 rounded-2xl">

            <div>

              <h4 className="font-bold">
                New Exam Release
              </h4>

              <p className="text-sm text-slate-500">
                National Mock Test
              </p>

            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <LuClock />
              2:00 PM
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}