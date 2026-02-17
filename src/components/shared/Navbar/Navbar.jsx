"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const user = {
    name: "Habiba Sultana",
    role: "student",
    image: "https://i.ibb.co.com/MxSXSPf3/kids.jpg",
  };

  return (
    <div className="flex bg-base-100/70 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] w-full justify-center sticky top-0 z-50 pt-2 px-2 md:px-0">
      <div className="navbar max-w-7xl px-3 md:px-15 min-h-[70px]">
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            {/* Menu Icon with Animation */}
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden p-2 mr-3 hover:bg-primary/10 rounded-xl transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 8h16M4 16h12"
                />
              </svg>
            </label>

            {/* Modern Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-4 z-[50] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-base-100/90 backdrop-blur-2xl rounded-[2rem] w-64 border-none"
            >
              {/* Header inside mobile menu */}
              <div className="px-4 py-3 mb-2 border-b border-gray-300">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">
                  Navigation
                </p>
              </div>

              <div className="space-y-1">
                {[
                  { name: "Exams", href: "/exams", icon: "📝" },
                  { name: "Results", href: "/results", icon: "🏆" },
                  { name: "Notice", href: "/notice", icon: "📢" },
                  { name: "About", href: "/about", icon: "✨" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-4 py-3 px-4 rounded-2xl transition-all duration-300 hover:bg-primary/10 hover:text-primary group active:scale-95 !outline-none border-none"
                    >
                      <span className="text-lg group-hover:scale-125 transition-transform duration-300">
                        {item.icon}
                      </span>
                      <span className="font-bold text-base-content/80 tracking-tight">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}

                {/* Conditional Question Bank for Teacher/Admin */}
                {(user.role === "teacher" || user.role === "admin") && (
                  <>
                    <div className="divider opacity-30 my-1"></div>
                    <li>
                      <Link
                        href="/manage-questions"
                        className="flex items-center gap-4 py-3 px-4 rounded-2xl bg-primary/5 text-primary font-bold hover:bg-primary/20 transition-all"
                      >
                        <span className="text-lg text-primary">📚</span>
                        <span>Question Bank</span>
                      </Link>
                    </li>
                  </>
                )}
              </div>

              {/* Bottom Decorative Element */}
              <div className="mt-4 p-4 bg-gradient-to-br from-primary/10 to-transparent rounded-[1.5rem] text-center">
                <p className="text-[10px] font-bold opacity-50 uppercase tracking-widest leading-none">
                  O-Exam v2.0
                </p>
              </div>
            </ul>
          </div>

          {/* Logo */}
          <Logo />
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 px-1">
            <li>
              <Link
                href={"/"}
                className="relative px-3 py-2 font-semibold text-base-content/80 group transition-colors duration-300 hover:text-primary !bg-transparent !outline-none border-none"
              >
                Exams
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href={"/results"}
                className="relative px-3 py-2 font-semibold text-base-content/80 group transition-colors duration-300 hover:text-primary !bg-transparent !outline-none border-none"
              >
                Results
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/notice"
                className="relative px-3 py-2 font-semibold text-base-content/80 group transition-colors duration-300 hover:text-primary !bg-transparent !outline-none border-none"
              >
                Notice
                {/* animated underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="relative px-3 py-2 font-semibold text-base-content/80 group transition-colors duration-300 hover:text-primary !bg-transparent !outline-none border-none"
              >
                About
                {/* animated underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>

            {/* for teachers and admin*/}
            {(user.role === "teacher" || user.role === "admin") && (
              <li>
                <Link
                  href="/manage-questions"
                  className="relative px-3 py-2 font-semibold text-base-content/80 group transition-colors duration-300 hover:text-primary !bg-transparent !outline-none border-none"
                >
                  Question Bank
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="navbar-end gap-4">
          {/* User Profile Info */}
          <div className="hidden sm:flex flex-col items-end">
            <p className="text-sm font-bold text-base-content leading-none">
              {user.name}
            </p>
            <span className="text-[10px] font-black uppercase text-primary tracking-widest bg-primary/10 px-2 py-0.5 rounded-md mt-1">
              {user.role}
            </span>
          </div>

          {/* Profile Dropdown */}
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar border-2 border-primary/10 hover:border-primary/40 p-0.5 bg-base-200/50 transition-all duration-300"
            >
              <div className="w-9 rounded-full relative overflow-hidden">
                <Image
                  src={user.image}
                  alt="User"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-5 z-[50] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.1)] menu menu-sm dropdown-content bg-base-100/95 backdrop-blur-xl rounded-[2rem] w-72 !border-none"
            >
              {/* User Profile Header */}
              <div className="px-4 py-4 mb-2 bg-gradient-to-br from-primary/5 to-primary/10 rounded-[1.5rem] flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full border-2 border-primary/20 p-1 mb-2">
                  <img
                    src={user.image}
                    alt="user"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <p className="font-extrabold text-lg text-base-content tracking-tight">
                  {user.name}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-primary text-white rounded-md tracking-widest">
                    {user.role}
                  </span>
                  <span className="text-[11px] font-bold opacity-40">
                    #ID: 12345
                  </span>
                </div>
              </div>

              {/* Menu Items */}
              <div className="px-2 space-y-1">
                {user.role === "student" && (
                  <>
                    <li>
                      <Link
                        href="/dashboard/student"
                        className="rounded-xl py-3 flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-all group !outline-none border-none"
                      >
                        <span className="p-2 bg-base-200 rounded-lg group-hover:bg-primary/20">
                          📊
                        </span>
                        <span className="font-semibold">My Dashboard</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/purchased-exams"
                        className="rounded-xl py-3 flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-all group !outline-none border-none"
                      >
                        <span className="p-2 bg-base-200 rounded-lg group-hover:bg-primary/20">
                          📝
                        </span>
                        <span className="font-semibold">Enrolled Exams</span>
                      </Link>
                    </li>
                  </>
                )}

                {user.role === "teacher" && (
                  <>
                    <li>
                      <Link
                        href="/dashboard/teacher"
                        className="rounded-xl py-3 flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-all group !outline-none border-none"
                      >
                        <span className="p-2 bg-base-200 rounded-lg group-hover:bg-primary/20">
                          👨‍🏫
                        </span>
                        <span className="font-semibold">Instructor Panel</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/create-exam"
                        className="rounded-xl py-3 flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-all group !outline-none border-none"
                      >
                        <span className="p-2 bg-base-200 rounded-lg group-hover:bg-primary/20">
                          ➕
                        </span>
                        <span className="font-semibold">Create New Exam</span>
                      </Link>
                    </li>
                  </>
                )}

                {user.role === "admin" && (
                  <>
                    <li>
                      <Link
                        href="/dashboard/admin"
                        className="rounded-xl py-3 flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-all group !outline-none border-none"
                      >
                        <span className="p-2 bg-base-200 rounded-lg group-hover:bg-primary/20">
                          🛡️
                        </span>
                        <span className="font-semibold">Admin Dashboard</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin/manage-users"
                        className="rounded-xl py-3 flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-all group !outline-none border-none"
                      >
                        <span className="p-2 bg-base-200 rounded-lg group-hover:bg-primary/20">
                          👥
                        </span>
                        <span className="font-semibold">Manage Users</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin/all-exams"
                        className="rounded-xl py-3 flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-all group !outline-none border-none"
                      >
                        <span className="p-2 bg-base-200 rounded-lg group-hover:bg-primary/20">
                          📂
                        </span>
                        <span className="font-semibold">All Exam Data</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin/reports"
                        className="rounded-xl py-3 flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-all group !outline-none border-none"
                      >
                        <span className="p-2 bg-base-200 rounded-lg group-hover:bg-primary/20">
                          📈
                        </span>
                        <span className="font-semibold">System Reports</span>
                      </Link>
                    </li>
                  </>
                )}

                <li>
                  <Link
                    href="/profile"
                    className="rounded-xl py-3 flex items-center gap-3 hover:bg-primary/10 transition-all group !outline-none border-none"
                  >
                    <span className="p-2 bg-base-200 rounded-lg group-hover:bg-primary/20">
                      ⚙️
                    </span>
                    <span className="font-semibold opacity-80">Settings</span>
                  </Link>
                </li>
              </div>

              <div className="divider px-4 my-2 opacity-50"></div>

              <li className="px-2 pb-2">
                {/* Logout Button */}

                <button className="flex items-center justify-center gap-2 bg-error/10 hover:bg-error text-error hover:text-white transition-all duration-300 py-3 rounded-xl font-bold w-full border-none">
                  Logout
                </button>

                {/* {Log in button just to link the pages} */}
                <button className="flex mt-3 items-center justify-center gap-2 bg-error/10 hover:bg-error text-error hover:text-white transition-all duration-300 py-3 rounded-xl font-bold w-full border-none">
                  <Link href={"auth/login"}>log in</Link>
                </button>
              </li>
            </ul>
          </div>

          {/* Action Button */}
          <Link
            href={user.role === "student" ? "/exams" : "/create-exam"}
            className="btn btn-primary rounded-2xl px-7 hidden md:flex font-bold text-white shadow-xl shadow-primary/20 border-none hover:translate-y-[-2px] hover:shadow-primary/40 active:scale-95 transition-all duration-300"
          >
            {user.role === "student" ? "Start Exam" : "Quick Action"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
