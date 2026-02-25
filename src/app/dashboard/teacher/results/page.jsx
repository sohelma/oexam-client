"use client";

import { useState } from "react";
import { FaSearch, FaDownload } from "react-icons/fa";

const resultsData = [
  { id: 1, student: "Ayesha Rahman", exam: "Mid Term ICT", marks: 85, grade: "A", status: "Pass" },
  { id: 2, student: "Rakib Hasan", exam: "Mid Term ICT", marks: 42, grade: "D", status: "Fail" },
  { id: 3, student: "Nusrat Jahan", exam: "Final Math", marks: 76, grade: "B", status: "Pass" },
  { id: 4, student: "Tanvir Ahmed", exam: "Final Math", marks: 91, grade: "A+", status: "Pass" },
  { id: 5, student: "Mim Akter", exam: "Physics Test", marks: 58, grade: "C", status: "Pass" },
  { id: 6, student: "Sabbir Hossain", exam: "Physics Test", marks: 37, grade: "F", status: "Fail" },
  { id: 7, student: "Farhana Islam", exam: "Mid Term ICT", marks: 88, grade: "A", status: "Pass" },
  { id: 8, student: "Jahidul Islam", exam: "Final Math", marks: 64, grade: "B", status: "Pass" },
  { id: 9, student: "Tania Sultana", exam: "Physics Test", marks: 73, grade: "B", status: "Pass" },
  { id: 10, student: "Imran Khan", exam: "Mid Term ICT", marks: 49, grade: "D", status: "Fail" },
];

export default function ResultsPage() {
  const [search, setSearch] = useState("");
  const [examFilter, setExamFilter] = useState("All");

  const filteredResults = resultsData.filter((r) =>
    (examFilter === "All" || r.exam === examFilter) &&
    r.student.toLowerCase().includes(search.toLowerCase())
  );

  // 🔥 Dynamic Stats
  const total = resultsData.length;
  const pass = resultsData.filter(r => r.status === "Pass").length;
  const fail = resultsData.filter(r => r.status === "Fail").length;
  const average =
    Math.round(resultsData.reduce((acc, r) => acc + r.marks, 0) / total);

  const uniqueExams = ["All", ...new Set(resultsData.map(r => r.exam))];

  return (
    <div className="p-6 bg-base-200 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Results & Grading</h1>
        <button className="btn btn-primary flex items-center gap-2">
          <FaDownload /> Export
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="card bg-base-100 shadow-md p-5">
          <h2 className="text-sm text-gray-500">Total Results</h2>
          <p className="text-3xl font-bold mt-2">{total}</p>
        </div>

        <div className="card bg-base-100 shadow-md p-5">
          <h2 className="text-sm text-gray-500">Pass</h2>
          <p className="text-3xl font-bold text-green-500 mt-2">{pass}</p>
        </div>

        <div className="card bg-base-100 shadow-md p-5">
          <h2 className="text-sm text-gray-500">Fail</h2>
          <p className="text-3xl font-bold text-red-500 mt-2">{fail}</p>
        </div>

        <div className="card bg-base-100 shadow-md p-5">
          <h2 className="text-sm text-gray-500">Average Score</h2>
          <p className="text-3xl font-bold text-blue-500 mt-2">{average}%</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">

        <div className="relative md:w-1/3">
          <input
            type="text"
            placeholder="Search student..."
            className="input input-bordered w-full pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>

        <select
          className="select select-bordered md:w-1/4"
          value={examFilter}
          onChange={(e) => setExamFilter(e.target.value)}
        >
          {uniqueExams.map((exam, index) => (
            <option key={index} value={exam}>
              {exam}
            </option>
          ))}
        </select>

      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-base-100 shadow-md rounded-lg">
        <table className="table w-full">
          <thead className="bg-base-300">
            <tr>
              <th>#</th>
              <th>Student</th>
              <th>Exam</th>
              <th>Marks</th>
              <th>Grade</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredResults.map((r, index) => (
              <tr key={r.id} className="hover">
                <td>{index + 1}</td>
                <td className="font-medium">{r.student}</td>
                <td>{r.exam}</td>
                <td>{r.marks}%</td>
                <td>
                  <span className="badge badge-info">{r.grade}</span>
                </td>
                <td>
                  <span
                    className={`badge ${
                      r.status === "Pass"
                        ? "badge-success"
                        : "badge-error"
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}

            {filteredResults.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-5 text-gray-500">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}