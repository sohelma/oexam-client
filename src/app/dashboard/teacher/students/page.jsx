"use client";

import { useState } from "react";
import { FaSearch, FaUserPlus, FaEdit, FaTrash } from "react-icons/fa";

const studentsData = [
  { id: 1, name: "Ayesha Rahman", email: "ayesha@example.com", class: "10", status: "Active" },
  { id: 2, name: "Rakib Hasan", email: "rakib@example.com", class: "9", status: "Pending" },
  { id: 3, name: "Nusrat Jahan", email: "nusrat@example.com", class: "8", status: "Active" },
  { id: 4, name: "Tanvir Ahmed", email: "tanvir@example.com", class: "10", status: "Active" },
  { id: 5, name: "Mim Akter", email: "mim@example.com", class: "7", status: "Pending" },
  { id: 6, name: "Sabbir Hossain", email: "sabbir@example.com", class: "9", status: "Active" },
  { id: 7, name: "Farhana Islam", email: "farhana@example.com", class: "8", status: "Active" },
  { id: 8, name: "Jahidul Islam", email: "jahid@example.com", class: "10", status: "Pending" },
  { id: 9, name: "Tania Sultana", email: "tania@example.com", class: "7", status: "Active" },
  { id: 10, name: "Imran Khan", email: "imran@example.com", class: "9", status: "Active" },
  { id: 11, name: "Sadia Rahman", email: "sadia@example.com", class: "8", status: "Pending" },
  { id: 12, name: "Hasibul Hasan", email: "hasib@example.com", class: "10", status: "Active" },
];

export default function StudentsPage() {
  const [search, setSearch] = useState("");

  const filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  // 🔥 Dynamic Stats
  const totalStudents = studentsData.length;
  const activeStudents = studentsData.filter(s => s.status === "Active").length;
  const pendingStudents = studentsData.filter(s => s.status === "Pending").length;

  return (
    <div className="p-6 bg-base-200 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Student Management</h1>
        <button className="btn btn-primary flex items-center gap-2">
          <FaUserPlus /> Add Student
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="card bg-base-100 shadow-md p-5">
          <h2 className="text-lg font-semibold">Total Students</h2>
          <p className="text-3xl font-bold mt-2">{totalStudents}</p>
        </div>

        <div className="card bg-base-100 shadow-md p-5">
          <h2 className="text-lg font-semibold">Active</h2>
          <p className="text-3xl font-bold text-green-500 mt-2">{activeStudents}</p>
        </div>

        <div className="card bg-base-100 shadow-md p-5">
          <h2 className="text-lg font-semibold">Pending</h2>
          <p className="text-3xl font-bold text-yellow-500 mt-2">{pendingStudents}</p>
        </div>
      </div>

      {/* Search */}
      <div className="mb-4">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search student..."
            className="input input-bordered w-full pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-base-100 shadow-md rounded-lg">
        <table className="table w-full">
          <thead className="bg-base-300">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Class</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={student.id} className="hover">
                <td>{index + 1}</td>
                <td className="font-medium">{student.name}</td>
                <td>{student.email}</td>
                <td>{student.class}</td>
                <td>
                  <span
                    className={`badge ${
                      student.status === "Active"
                        ? "badge-success"
                        : "badge-warning"
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
                <td className="flex justify-center gap-2">
                  <button className="btn btn-sm btn-outline btn-info">
                    <FaEdit />
                  </button>
                  <button className="btn btn-sm btn-outline btn-error">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}

            {filteredStudents.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-5 text-gray-500">
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}