"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaHome,
  FaBook,
  FaGraduationCap,
  FaCalendarAlt,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

export default function StudentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen bg-base-200 flex font-sans">
      {/* Sidebar */}
      <aside
        className={`bg-base-100 border-r border-base-300 fixed inset-y-0 left-0 z-20 transition-all duration-0 ${
          sidebarOpen ? "w-64" : "w-20"
        } hidden lg:flex flex-col`}
      >
        <div className="h-16 flex items-center justify-center border-b border-base-300">
          <Link
            href="/"
            className="text-xl font-bold text-primary truncate px-4"
          >
            {sidebarOpen ? "OExam Student" : "OE"}
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <NavItem
            icon={<FaHome size={20} />}
            label="Dashboard"
            href="/layout/student_dashboard"
            active
            collapsed={!sidebarOpen}
          />
          <NavItem
            icon={<FaBook size={20} />}
            label="My Exams"
            href="/layout/student_dashboard/my_exam"
            collapsed={!sidebarOpen}
          />
          <NavItem
            icon={<FaGraduationCap size={20} />}
            label="Results"
            href="#"
            collapsed={!sidebarOpen}
          />
          <NavItem
            icon={<FaCalendarAlt size={20} />}
            label="Schedule"
            href="#"
            collapsed={!sidebarOpen}
          />
          <NavItem
            icon={<FaCog size={20} />}
            label="Settings"
            href="#"
            collapsed={!sidebarOpen}
          />
        </nav>

        <div className="p-4 border-t border-base-300">
          <button className="flex items-center gap-3 text-error hover:bg-base-200 p-3 rounded-lg w-full transition-colors">
            <FaSignOutAlt size={20} />
            {sidebarOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div
        className={`flex-1 flex flex-col transition-all duration-0 ${sidebarOpen ? "lg:ml-64" : "lg:ml-20"}`}
      >
        {/* Top Navbar */}
        <header className="h-16 bg-base-100 border-b border-base-300 flex items-center justify-between px-4 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className="btn btn-ghost btn-sm btn-square text-base-content lg:flex hidden"
            >
              <FaBars size={18} />
            </button>
            <button className="btn btn-ghost btn-sm btn-square text-base-content lg:hidden">
              <FaBars size={18} />
            </button>
            <h1 className="text-lg font-semibold text-base-content">
              Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="btn btn-ghost btn-circle btn-sm">
              <div className="indicator">
                <FaBell size={18} />
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <FaUserCircle size={24} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a className="text-error">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* Dashboard Content Area */}
        <main className="p-6">
          {/* Routes/Content will be rendered here */}
          <div className="border-2 border-dashed border-base-300 rounded-xl h-[calc(100vh-10rem)] flex items-center justify-center text-base-content/30">
            Content Placeholder
          </div>
        </main>
      </div>
    </div>
  );
}

// Sub-components

function NavItem({ icon, label, href, active = false, collapsed = false }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
        active
          ? "bg-primary text-primary-content hover:bg-primary-focus"
          : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
      } ${collapsed ? "justify-center" : ""}`}
    >
      {icon}
      {!collapsed && (
        <span className="font-medium whitespace-nowrap">{label}</span>
      )}
    </Link>
  );
}
