"use client";

import React, { useState } from "react";
import {
  LuSearch,
  LuEye,
  LuTrash2,
  LuUsers
} from "react-icons/lu";

export default function StudentPage() {

  const [search, setSearch] = useState("");

  const students = [
    {
      id: 1,
      name: "Rahim Ahmed",
      email: "rahim@gmail.com",
      institution: "Ideal School",
      status: "Active",
    },
    {
      id: 2,
      name: "Karim Hasan",
      email: "karim@gmail.com",
      institution: "Scholars School",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Nusrat Jahan",
      email: "nusrat@gmail.com",
      institution: "Green Field School",
      status: "Active",
    },
    {
      id: 4,
      name: "Sabbir Hossain",
      email: "sabbir@gmail.com",
      institution: "Sunrise School",
      status: "Active",
    },
  ];


  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );


  return (

    <div className="max-w-[1400px] mx-auto space-y-8 pb-10">


      {/* Header */}

      <div className="bg-slate-900 p-8 rounded-[3rem] text-white shadow-xl">

        <div>

          <h1 className="text-3xl font-black">
            Student Management
          </h1>

          <p className="text-slate-400 text-sm">
            Manage all registered students
          </p>

        </div>

      </div>



      {/* Search */}

      <div className="bg-white p-6 rounded-3xl shadow-sm border">

        <div className="flex items-center gap-3">

          <LuSearch size={20} />

          <input
            type="text"
            placeholder="Search student..."
            className="w-full outline-none"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />

        </div>

      </div>



      {/* Table */}

      <div className="bg-white rounded-[3rem] border shadow-sm overflow-hidden">

        <div className="p-8 border-b flex items-center gap-3">

          <LuUsers size={20} />

          <h2 className="font-black">
            Student List
          </h2>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="text-left text-xs uppercase text-gray-400">

                <th className="p-6">Name</th>

                <th>Email</th>

                <th>School</th>

                <th>Status</th>

                <th className="text-right pr-8">
                  Actions
                </th>

              </tr>

            </thead>


            <tbody>

              {filteredStudents.map(student => (

                <tr
                  key={student.id}
                  className="border-t hover:bg-gray-50"
                >

                  <td className="p-6 font-semibold">
                    {student.name}
                  </td>


                  <td className="text-gray-600">
                    {student.email}
                  </td>


                  <td className="text-gray-600">
                    {student.institution}
                  </td>


                  <td>

                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-bold
                      ${
                        student.status === "Active"
                        ?
                        "bg-green-100 text-green-600"
                        :
                        "bg-red-100 text-red-600"
                      }`}
                    >
                      {student.status}
                    </span>

                  </td>


                  <td className="text-right pr-8 space-x-2">

                    <button className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                      <LuEye size={18}/>
                    </button>

                    <button className="p-2 bg-red-50 text-red-600 rounded-lg">
                      <LuTrash2 size={18}/>
                    </button>

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