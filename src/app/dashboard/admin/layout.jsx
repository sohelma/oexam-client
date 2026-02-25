"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import {
  FaTachometerAlt,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUniversity,
  FaChartBar,
  FaCog,
  FaUser,
  FaSignOutAlt,
  FaBars,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";

export default function AdminLayout({ children }) {

  const pathname = usePathname();
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);


  const menu = [
    { name: "Dashboard", path: "/dashboard/admin", icon: <FaTachometerAlt /> },
    { name: "Students", path: "/dashboard/admin/student", icon: <FaUserGraduate /> },
    { name: "Teachers", path: "/dashboard/admin/teacher", icon: <FaChalkboardTeacher /> },
    { name: "Institutions", path: "/dashboard/admin/institutions", icon: <FaUniversity /> },
    { name: "Reports", path: "/dashboard/admin/reports", icon: <FaChartBar /> },
    { name: "Profile & Settings", path: "/dashboard/admin/settings", icon: <FaCog /> },
  ];


  const logout = () => {
    localStorage.removeItem("role");
    router.push("/login");
  };


  return (

    <div className="flex min-h-screen bg-gray-100">


      {/* Sidebar */}

      <div
        className={`bg-white shadow-lg fixed h-full z-50 transition-all

        ${collapsed ? "w-20" : "w-64"}

        ${mobileOpen ? "left-0" : "-left-64"}

        md:left-0`}
      >

        {/* Title */}

        <div className="p-5 text-xl font-bold border-b flex justify-between">

          {!collapsed && "Admin Panel"}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-lg"
          >
            {collapsed ? <FaAngleRight /> : <FaAngleLeft />}
          </button>

        </div>



        {/* Menu */}

        <div className="p-3 space-y-2">

          {menu.map((item, index) => (

            <Link
              key={index}
              href={item.path}
              className={`flex items-center gap-3 p-3 rounded-lg transition

              ${
                pathname === item.path
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >

              {item.icon}

              {!collapsed && item.name}

            </Link>

          ))}

        </div>



        {/* Logout */}

        <div className="absolute bottom-0 w-full p-4 border-t">

          <button
            onClick={logout}
            className="flex items-center gap-3 w-full p-3 rounded-lg
            bg-red-500 text-white hover:bg-red-600"
          >

            <FaSignOutAlt />

            {!collapsed && "Logout"}

          </button>

        </div>


      </div>



      {/* Main */}

      <div
        className={`flex-1 transition-all

        ${collapsed ? "md:ml-20" : "md:ml-64"}`}
      >


        {/* Navbar */}

        <div className="bg-white shadow p-4 flex justify-between items-center">


          {/* Mobile Toggle */}

          <button
            className="md:hidden text-xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <FaBars />
          </button>


          <h1 className="text-xl font-semibold">
            Admin Dashboard
          </h1>


          <div className="font-medium">
            Admin
          </div>

        </div>



        {/* Content */}

        <div className="p-6">
          {children}
        </div>


      </div>


    </div>

  );
}