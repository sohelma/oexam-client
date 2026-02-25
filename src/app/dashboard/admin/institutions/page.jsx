"use client";

import React from "react";
import {
  LuSchool,
  LuEye,
  LuTrash2
} from "react-icons/lu";

export default function InstitutionsPage() {

  const institutions = [
    {
      id: 1,
      name: "Ideal School",
      location: "Dhaka",
      teachers: 6,
      students: 80,
    },
    {
      id: 2,
      name: "Sunrise School",
      location: "Narayanganj",
      teachers: 4,
      students: 60,
    },
    {
      id: 3,
      name: "Green Field School",
      location: "Gazipur",
      teachers: 3,
      students: 40,
    },
    {
      id: 4,
      name: "Scholars School",
      location: "Dhaka",
      teachers: 2,
      students: 30,
    },
  ];


  return (

    <div className="max-w-[1400px] mx-auto space-y-8 pb-10">


      {/* Header */}

      <div className="bg-slate-900 p-8 rounded-[3rem] text-white shadow-xl">

        <h1 className="text-3xl font-black">
          Institution Management
        </h1>

        <p className="text-slate-400 text-sm mt-2">
          Manage registered schools
        </p>

      </div>



      {/* Table */}

      <div className="bg-white rounded-[3rem] border shadow-sm overflow-hidden">

        <div className="p-8 border-b flex items-center gap-3">

          <LuSchool size={20} />

          <h2 className="font-black text-lg">
            Institution List
          </h2>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full min-w-[700px]">

            <thead>

              <tr className="text-left text-xs uppercase text-gray-400">

                <th className="p-6">
                  Institution Name
                </th>

                <th>
                  Location
                </th>

                <th>
                  Teachers Count
                </th>

                <th>
                  Students Count
                </th>

                <th className="text-right pr-8">
                  Actions
                </th>

              </tr>

            </thead>


            <tbody>

              {institutions.map((school) => (

                <tr
                  key={school.id}
                  className="border-t hover:bg-gray-50 transition"
                >

                  <td className="p-6 font-semibold">
                    {school.name}
                  </td>


                  <td className="text-gray-600">
                    {school.location}
                  </td>


                  <td className="text-gray-600 font-medium">
                    {school.teachers}
                  </td>


                  <td className="text-gray-600 font-medium">
                    {school.students}
                  </td>


                  <td className="text-right pr-8 space-x-2">


                    <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">

                      <LuEye size={18} />

                    </button>


                    <button className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100">

                      <LuTrash2 size={18} />

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