"use client";

import React from "react";
import {
  LuUsers,
  LuUserCheck,
  LuFileText,
  LuDownload,
  LuBug
} from "react-icons/lu";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

export default function ReportsPage() {

  const stats = [
    {
      title: "Total Students",
      value: 120,
      icon: <LuUsers />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Total Teachers",
      value: 15,
      icon: <LuUserCheck />,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Total Exams",
      value: 32,
      icon: <LuFileText />,
      color: "bg-indigo-50 text-indigo-600",
    },
  ];


  // Student Growth Chart Data

  const studentData = [
    { month: "Jan", students: 20 },
    { month: "Feb", students: 40 },
    { month: "Mar", students: 60 },
    { month: "Apr", students: 80 },
    { month: "May", students: 100 },
    { month: "Jun", students: 120 },
  ];


  // Exam Performance Chart Data

  const examData = [
    { exam: "Exam 1", score: 70 },
    { exam: "Exam 2", score: 80 },
    { exam: "Exam 3", score: 65 },
    { exam: "Exam 4", score: 90 },
  ];


  const issues = [
    {
      id: 1,
      title: "Student login error",
      status: "Open",
      date: "12 Feb 2026",
    },
    {
      id: 2,
      title: "Exam result not loading",
      status: "In Progress",
      date: "15 Feb 2026",
    },
    {
      id: 3,
      title: "Teacher dashboard slow",
      status: "Resolved",
      date: "18 Feb 2026",
    },
  ];


  return (

    <div className="max-w-[1400px] mx-auto space-y-8 pb-10">


      {/* Header */}

      <div className="bg-slate-900 p-8 rounded-[3rem] text-white shadow-xl">

        <div className="flex justify-between items-center flex-wrap gap-6">

          <div>

            <h1 className="text-3xl font-black">
              Reports & Analytics
            </h1>

            <p className="text-slate-400 text-sm mt-2">
              System reports and statistics
            </p>

          </div>


          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-2xl font-bold">

            <LuDownload size={20}/>

            Export Report

          </button>

        </div>

      </div>



      {/* Statistics Cards */}

      <div className="grid md:grid-cols-3 gap-6">

        {stats.map((item,index)=>(

          <div
            key={index}
            className="bg-white p-8 rounded-[2.5rem] border shadow-sm"
          >

            <div className="flex justify-between mb-4">

              <p className="text-xs uppercase text-gray-400 font-bold">
                {item.title}
              </p>

              <div className={`p-3 rounded-xl ${item.color} text-xl`}>
                {item.icon}
              </div>

            </div>


            <h2 className="text-4xl font-black">
              {item.value}
            </h2>

          </div>

        ))}

      </div>



      {/* Charts */}

      <div className="grid lg:grid-cols-2 gap-8">


        {/* Student Growth Chart */}

        <div className="bg-white p-10 rounded-[3rem] border shadow-sm">

          <h3 className="font-black mb-6">
            Student Growth
          </h3>

          <ResponsiveContainer width="100%" height={250}>

            <LineChart data={studentData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="students"
                stroke="#2563eb"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>



        {/* Exam Performance Chart */}

        <div className="bg-white p-10 rounded-[3rem] border shadow-sm">

          <h3 className="font-black mb-6">
            Exam Performance
          </h3>

          <ResponsiveContainer width="100%" height={250}>

            <BarChart data={examData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="exam" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="score"
                fill="#4f46e5"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>



      {/* Bug & Issues */}

      <div className="bg-white rounded-[3rem] border shadow-sm overflow-hidden">

        <div className="p-8 border-b flex items-center gap-3">

          <LuBug size={20}/>

          <h2 className="font-black">
            Bugs & Issues Report
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="text-xs uppercase text-gray-400">

                <th className="p-6 text-left">
                  Issue
                </th>

                <th>Status</th>

                <th>Date</th>

              </tr>

            </thead>


            <tbody>

              {issues.map(issue=>(

                <tr key={issue.id} className="border-t">

                  <td className="p-6 font-semibold">
                    {issue.title}
                  </td>

                  <td>

                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-bold
                      ${
                        issue.status === "Open"
                        ? "bg-red-100 text-red-600"
                        :
                        issue.status === "Resolved"
                        ? "bg-green-100 text-green-600"
                        :
                        "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {issue.status}
                    </span>

                  </td>

                  <td className="text-gray-600">
                    {issue.date}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}