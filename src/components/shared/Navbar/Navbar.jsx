'use client';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../Logo/Logo';

const Navbar = () => {
  const user = {
    name: 'Habiba Sultana',
    role: 'student',
    image: 'https://i.ibb.co.com/MxSXSPf3/kids.jpg',
  };

  const navRoutes = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "Pricing", href: "#pricing", icon: "💎" },
    { name: "How it works", href: "#how-it-works", icon: "⚙️" },
    { name: "About", href: "#about", icon: "✨" },
  ];

  return (
    <div className="flex bg-base-100/70 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] w-full justify-center sticky top-0 z-50 pt-2">
      <div className="navbar max-w-[98%] md:max-w-[80%] min-h-[70px]">
        <div className="flex w-full justify-center px-2 md:px-0">
          <div className="navbar px-3 md:px-15 min-h-[70px]">
            {/* LEFT */}
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden p-2">
                  ☰
                </label>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-4 z-[50] p-3 bg-base-100 rounded-2xl w-64"
                >
                  <li>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60 px-4 py-2">
                      Navigation
                    </p>
                  </li>

                  {[
                    { name: "Exams", href: "/exams", icon: "📝" },
                    { name: "Results", href: "/results", icon: "🏆" },
                    { name: "Notice", href: "/notice", icon: "📢" },
                    { name: "About", href: "/about", icon: "✨" },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="flex gap-3 px-4 py-2">
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}

                  {(user.role === "teacher" || user.role === "admin") && (
                    <li>
                      <Link href="/manage-questions">📚 Question Bank</Link>
                    </li>
                  )}
                </ul>
              </div>

              <Logo />
            </div>

            {/* CENTER */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal gap-6">
                <li>
                  <Link href="/">Exams</Link>
                </li>
                <li>
                  <Link href="/results">Results</Link>
                </li>
                <li>
                  <Link href="/notice">Notice</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </div>

            {/* RIGHT */}
            <div className="navbar-end gap-3">
              {user && (
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-9 rounded-full">
                      <Image
                        src={user.image}
                        alt="user"
                        width={40}
                        height={40}
                      />
                    </div>
                  </label>

                  <ul
                    tabIndex={0}
                    className="menu dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-72"
                  >
                    <li className="text-center font-bold">{user.name}</li>
                    <li>
                      <Link href={`layout/${user.role}_dashboard`}>
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <button className="text-error">Logout</button>
                    </li>
                  </ul>
                </div>
              )}

              <Link
                href={user ? `layout/${user.role}_dashboard` : "/login"}
                className="btn btn-primary"
              >
                {user ? "Dashboard" : "Login"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
