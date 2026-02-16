import Image from 'next/image';
import Link from 'next/link';
import Logo from '../Logo/Logo';

const Navbar = () => {
  const user = {
    name: 'Habiba Sultana',
    role: 'student',
    image: 'https://ui-avatars.com/api/?name=Habiba+Sultana&background=random',
  };

  const navOptions = (
    <>
      
    </>
  );

  return (
    <div className="flex bg-base-100/70 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] w-full justify-center sticky top-0 z-50 pt-2 px-2 md:px-0">
      <div className="navbar max-w-7xl px-4 md:px-10 min-h-[70px]">
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            {/* menu icon */}
            <label tabIndex={0} className="btn btn-ghost lg:hidden p-1 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </label>{' '}
            {/* menu icon */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-4 z-[1] p-3 shadow-2xl bg-base-100 rounded-2xl w-56 border border-base-200/50"
            >
              <li>
                <Link
                  href={'/'}
                  className="relative p-2 font-semibold transition-all duration-300 hover:text-primary group text-base-content/80 !bg-transparent !outline-none border-none"
                >
                  Exams
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/results'}
                  className="relative p-2 font-semibold transition-all duration-300 hover:text-primary group text-base-content/80 !bg-transparent !outline-none border-none"
                >
                  Results
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/notice'}
                  className="relative p-2 font-semibold transition-all duration-300 hover:text-primary group text-base-content/80 !bg-transparent !outline-none border-none"
                >
                  Notice
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>

              {/* for teachers and admin*/}
              {(user.role === 'teacher' || user.role === 'admin') && (
                <li>
                  <Link
                    href="/manage-questions"
                    className="relative p-2 font-semibold transition-all duration-300 hover:text-primary group text-base-content/80"
                  >
                    Question Bank
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Logo */}
          <Logo/>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 px-1">
            <li>
              <Link
                href={'/'}
                className="relative px-3 py-2 font-semibold text-base-content/80 group transition-colors duration-300 hover:text-primary !bg-transparent !outline-none border-none"
              >
                Exams
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href={'/results'}
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

            {/* for teachers and admin*/}
            {(user.role === 'teacher' || user.role === 'admin') && (
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
              className="mt-5 z-[1] p-3 shadow-2xl menu menu-sm dropdown-content bg-base-100 rounded-3xl w-64 border border-base-200/50"
            >
              <div className="px-4 py-3 mb-2 bg-base-200/30 rounded-2xl text-center">
                <p className="font-bold text-base text-base-content leading-none">
                  {user.name}
                </p>
                <p className="text-[11px] opacity-50 mt-2 tracking-wide font-medium uppercase">
                  {user.role === 'admin'
                    ? 'System Admin'
                    : user.role === 'teacher'
                      ? 'Instructor'
                      : 'Student'}
                </p>
              </div>

              <div className="space-y-1">
                {user.role === 'student' && (
                  <>
                    <li>
                      <Link
                        href="/dashboard/student"
                        className="rounded-xl py-2.5"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/purchased-exams"
                        className="rounded-xl py-2.5"
                      >
                        My Exams
                      </Link>
                    </li>
                  </>
                )}
                {user.role === 'teacher' && (
                  <>
                    <li>
                      <Link
                        href="/dashboard/teacher"
                        className="rounded-xl py-2.5"
                      >
                        Instructor Panel
                      </Link>
                    </li>
                    <li>
                      <Link href="/create-exam" className="rounded-xl py-2.5">
                        Create Exam
                      </Link>
                    </li>
                  </>
                )}
                <li>
                  <Link
                    href="/profile"
                    className="rounded-xl py-2.5 italic opacity-80"
                  >
                    Settings
                  </Link>
                </li>
              </div>

              <div className="divider my-2 before:bg-base-200/50 after:bg-base-200/50"></div>
              <li>
                <button className="btn btn-error btn-sm btn-ghost rounded-xl text-error font-bold hover:bg-error/10">
                  Logout
                </button>
              </li>
            </ul>
          </div>

          {/* Action Button */}
          <Link
            href={user.role === 'student' ? '/exams' : '/create-exam'}
            className="btn btn-primary rounded-2xl px-7 hidden md:flex font-bold text-white shadow-xl shadow-primary/20 border-none hover:translate-y-[-2px] hover:shadow-primary/40 active:scale-95 transition-all duration-300"
          >
            {user.role === 'student' ? 'Start Exam' : 'Quick Action'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
