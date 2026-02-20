import React from 'react';
import { LuSearch, LuFilter, LuEllipsisVertical } from 'react-icons/lu';

const ExamList = () => {
  const exams = [
    {
      id: 1,
      title: 'Term Final Examination',
      subject: 'Physics',
      date: '20 Oct 2024',
      status: 'Upcoming',
      students: 45,
    },
    {
      id: 2,
      title: 'Weekly Quiz - 04',
      subject: 'Math',
      date: '15 Oct 2024',
      status: 'Live',
      students: 120,
    },
    {
      id: 3,
      title: 'Monthly Assessment',
      subject: 'Biology',
      date: '10 Oct 2024',
      status: 'Completed',
      students: 38,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-black text-slate-800">Exam Repository</h2>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1">
            <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search exams..."
              className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl w-full focus:outline-primary"
            />
          </div>
          <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600">
            <LuFilter />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-200/60 overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-50/50 border-b border-slate-100">
            <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <th className="px-8 py-5">Exam Details</th>
              <th className="px-6 py-5">Subject</th>
              <th className="px-6 py-5">Status</th>
              <th className="px-6 py-5">Enrolled</th>
              <th className="px-6 py-5 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {exams.map(exam => (
              <tr
                key={exam.id}
                className="hover:bg-slate-50/50 transition-colors group"
              >
                <td className="px-8 py-6">
                  <p className="font-black text-slate-800 group-hover:text-primary transition-colors">
                    {exam.title}
                  </p>
                  <p className="text-[10px] text-slate-400 font-bold mt-1">
                    {exam.date}
                  </p>
                </td>
                <td className="px-6 py-6 text-sm font-bold text-slate-500">
                  {exam.subject}
                </td>
                <td className="px-6 py-6">
                  <span
                    className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase ${
                      exam.status === 'Live'
                        ? 'bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100'
                        : exam.status === 'Upcoming'
                          ? 'bg-blue-50 text-blue-600 ring-1 ring-blue-100'
                          : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {exam.status}
                  </span>
                </td>
                <td className="px-6 py-6 text-sm font-bold text-slate-500">
                  {exam.students} Students
                </td>
                <td className="px-6 py-6 text-right">
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-400">
                    <LuEllipsisVertical />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExamList;
