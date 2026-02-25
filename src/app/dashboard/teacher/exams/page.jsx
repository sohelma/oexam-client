"use client";

import { useState } from "react";
import { FaSearch, FaEye, FaEdit, FaTrash } from "react-icons/fa";

const examsData = [
  {
    id: 1,
    title: "Mid Term Math Exam",
    subject: "Mathematics",
    duration: 60,
    totalMarks: 100,
    status: "Active",
    date: "2026-03-10",
  },
  {
    id: 2,
    title: "Physics Final Test",
    subject: "Physics",
    duration: 90,
    totalMarks: 100,
    status: "Draft",
    date: "2026-03-15",
  },
  {
    id: 3,
    title: "Chemistry Quiz",
    subject: "Chemistry",
    duration: 45,
    totalMarks: 50,
    status: "Completed",
    date: "2026-02-15",
  },
  {
    id: 4,
    title: "English Grammar Test",
    subject: "English",
    duration: 60,
    totalMarks: 75,
    status: "Active",
    date: "2026-03-20",
  },
  {
    id: 5,
    title: "ICT Practical Exam",
    subject: "ICT",
    duration: 120,
    totalMarks: 100,
    status: "Draft",
    date: "2026-04-01",
  },
];

export default function ExamsPage() {
  const [search, setSearch] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const filteredExams = examsData.filter((exam) => {
    return (
      exam.title.toLowerCase().includes(search.toLowerCase()) &&
      (subjectFilter ? exam.subject === subjectFilter : true) &&
      (statusFilter ? exam.status === statusFilter : true)
    );
  });

  const total = examsData.length;
  const active = examsData.filter((e) => e.status === "Active").length;
  const draft = examsData.filter((e) => e.status === "Draft").length;
  const completed = examsData.filter((e) => e.status === "Completed").length;

  return (
    <div className="p-6 space-y-6">

      {/* Page Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Manage Exams</h1>
        <button className="btn btn-primary">+ Create New Exam</button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title">Total Exams</h2>
            <p className="text-3xl font-bold">{total}</p>
          </div>
        </div>
        <div className="card bg-green-100 shadow">
          <div className="card-body">
            <h2 className="card-title">Active</h2>
            <p className="text-3xl font-bold text-green-600">{active}</p>
          </div>
        </div>
        <div className="card bg-yellow-100 shadow">
          <div className="card-body">
            <h2 className="card-title">Draft</h2>
            <p className="text-3xl font-bold text-yellow-600">{draft}</p>
          </div>
        </div>
        <div className="card bg-blue-100 shadow">
          <div className="card-body">
            <h2 className="card-title">Completed</h2>
            <p className="text-3xl font-bold text-blue-600">{completed}</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search Exam Title..."
            className="input input-bordered w-full pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>

        <select
          className="select select-bordered w-full md:w-1/4"
          value={subjectFilter}
          onChange={(e) => setSubjectFilter(e.target.value)}
        >
          <option value="">All Subjects</option>
          <option>Mathematics</option>
          <option>Physics</option>
          <option>Chemistry</option>
          <option>English</option>
          <option>ICT</option>
        </select>

        <select
          className="select select-bordered w-full md:w-1/4"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option>Active</option>
          <option>Draft</option>
          <option>Completed</option>
        </select>
      </div>

      {/* Exams Table */}
      <div className="overflow-x-auto bg-base-100 shadow rounded-lg">
        <table className="table">
          <thead className="bg-base-200">
            <tr>
              <th>Title</th>
              <th>Subject</th>
              <th>Duration</th>
              <th>Total Marks</th>
              <th>Date</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredExams.map((exam) => (
              <tr key={exam.id}>
                <td className="font-semibold">{exam.title}</td>
                <td>{exam.subject}</td>
                <td>{exam.duration} min</td>
                <td>{exam.totalMarks}</td>
                <td>{exam.date}</td>
                <td>
                  <span
                    className={`badge ${
                      exam.status === "Active"
                        ? "badge-success"
                        : exam.status === "Draft"
                        ? "badge-warning"
                        : "badge-info"
                    }`}
                  >
                    {exam.status}
                  </span>
                </td>
                <td className="flex gap-2 justify-center">
                  <button className="btn btn-sm btn-outline btn-info">
                    <FaEye />
                  </button>
                  <button className="btn btn-sm btn-outline btn-warning">
                    <FaEdit />
                  </button>
                  <button className="btn btn-sm btn-outline btn-error">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredExams.length === 0 && (
          <div className="text-center p-6 text-gray-500">
            No exams found.
          </div>
        )}
      </div>
    </div>
  );
}