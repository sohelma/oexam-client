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

  const navRoutes = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Pricing', href: '#pricing', icon: '💎' },
    { name: 'How it works', href: '#how-it-works', icon: '⚙️' },
    { name: 'About', href: '#about', icon: '✨' },
  ];

  return (
    <div className="flex bg-base-100/70 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] w-full justify-center sticky top-0 z-50 pt-2">
      <div className="navbar max-w-[98%] md:max-w-[80%] min-h-[70px]">
    <div className="flex bg-base-100/70 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] w-full justify-center sticky top-0 z-50 pt-2 px-2 md:px-0">
      <div className="navbar max-w-7xl px-3 md:px-15 min-h-[70px]">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden p-2 hover:bg-primary/10 rounded-xl transition-all duration-300"
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-4 z-[50] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-base-100/90 backdrop-blur-2xl rounded-[2.5rem] w-64 border-none"
            >
              <div className="px-4 py-3 mb-2 border-b border-gray-200/50">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">
                  Navigation
                </p>
              </div>
              <div className="space-y-1">
                {navRoutes.map(item => (
                {[
                  { name: "Exams", href: "/exams", icon: "📝" },
                  { name: "Results", href: "/results", icon: "🏆" },
                  { name: "Notice", href: "/notice", icon: "📢" },
                  { name: "About", href: "/about", icon: "✨" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-4 py-3 px-4 rounded-2xl transition-all duration-300 hover:bg-primary/10 hover:text-primary group border-none !outline-none"
                    >
                      <span className="text-lg group-hover:scale-125 transition-transform duration-300">
                        {item.icon}
                      </span>
                      <span className="font-bold text-base-content/80">
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
              {/* Version Info Back Again */}
              <div className="mt-4 p-4 bg-gradient-to-br from-primary/5 to-transparent rounded-[1.5rem] text-center">
                <p className="text-[10px] font-black opacity-40 uppercase tracking-[0.2em]">
                  O-Exam v2.0
                </p>
              </div>
            </ul>
          </div>
          <Logo />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">
            {navRoutes.map(item => (
              <li key={item.name}>
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
                  href={item.href}
                  className="relative px-5 py-2 font-bold text-base-content/70 group transition-all duration-300 hover:text-primary !bg-transparent border-none !outline-none"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-[3px] bg-primary rounded-full transition-all duration-300 group-hover:w-2/3 group-hover:left-[16.5%]"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-1 md:gap-3">
          {/* Notification */}
          <button className="btn btn-ghost btn-circle relative group hover:bg-primary/10 transition-all duration-500">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-base-content/70 group-hover:text-primary group-hover:rotate-[15deg] transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="indicator-item flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex items-center justify-center rounded-full h-4 w-4 bg-primary text-[10px] font-black text-white border-2 border-base-100">
                  1
                </span>
              </span>
            </div>
          </button>

          {user && (
            <div className="flex items-center gap-3 ml-2">
              {/* User Name & Role - Desktop Only */}
              <div className="hidden xl:flex flex-col items-end leading-none">
                <p className="text-sm font-black text-base-content">
                  {user.name}
                </p>
                <span className="text-[9px] font-black uppercase text-primary tracking-widest bg-primary/10 px-2 py-0.5 rounded-md mt-1 italic">
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
                  className="mt-5 z-[50] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.1)] menu menu-sm dropdown-content bg-base-100/95 backdrop-blur-xl rounded-[2.5rem] w-72 border-none"
                >
                  <div className="px-4 py-5 mb-2 bg-gradient-to-br from-primary/5 to-primary/15 rounded-[2rem] flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden mb-3">
                      <img
                        src={user.image}
                        alt="user"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-black text-xl text-base-content tracking-tight">
                      {user.name}
                    </p>
                    <span className="text-[10px] font-black uppercase px-3 py-1 bg-primary text-white rounded-full tracking-widest mt-2 shadow-lg shadow-primary/30">
                      {user.role} #id 12345
                    </span>
                  </div>

                  <div className="px-2 space-y-1">
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
                        href="/profile"
                        className="rounded-xl py-3 flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-all group border-none !outline-none"
                      >
                        <span className="p-2 bg-base-200 rounded-lg group-hover:bg-primary/20">
                          👤
                        </span>
                        <span className="font-bold">My Profile</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/profile/settings"
                        className="rounded-xl py-3 flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-all group border-none !outline-none"
                      >
                        <span className="p-2 bg-base-200 rounded-lg group-hover:bg-primary/20">
                          ⚙️
                        </span>
                        <span className="font-bold">Account Settings</span>
                      </Link>
                    </li>
                  </div>
                  <div className="divider px-4 my-2 opacity-30"></div>
                  <li className="px-2 pb-2">
                    <button className="flex items-center justify-center gap-2 bg-error/10 hover:bg-error text-error hover:text-white transition-all duration-500 py-3.5 rounded-2xl font-black w-full border-none shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                        />
                      </svg>
                      LOGOUT
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}

          <Link
            href={user ? `/dashboard/${user.role}` : '/login'}
            className="btn btn-primary text-xs md:text-md btn-sm md:btn-md rounded-xl md:rounded-2xl md:px-8 font-black text-white shadow-xl shadow-primary/20 border-none hover:translate-y-[-3px] hover:shadow-primary/40 active:scale-95 transition-all duration-500 uppercase tracking-tighter"
          >
            {user ? 'Dashboard' : 'Login'}
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
