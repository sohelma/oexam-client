'use client';
import Logo from '@/components/shared/Logo/Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LuLayoutDashboard,
  LuUsers,
  LuDatabase,
  LuChartBar,
  LuSettings,
  LuPlus,
} from 'react-icons/lu';

const TeacherLayout = ({ children }) => {
  const pathname = usePathname();

  const menuItems = [
    {
      name: 'Dashboard',
      icon: <LuLayoutDashboard />,
      href: '/teacher',
    },
    {
      name: 'Question Bank',
      icon: <LuDatabase />,
      href: '/teacher/questions',
    },
    {
      name: 'Manage Exams',
      icon: <LuPlus />,
      href: '/teacher/exams',
    },
    {
      name: 'Student List',
      icon: <LuUsers />,
      href: '/teacher/students',
    },
    {
      name: 'Results & Grading',
      icon: <LuChartBar />,
      href: '/teacher/results',
    },
    {
      name: 'System Settings',
      icon: <LuSettings />,
      href: '/teacher/settings',
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* --- Desktop Sidebar --- */}
      <aside className="hidden lg:flex flex-col w-72 bg-white border-r border-slate-200 sticky top-0 h-screen">
        <div className="p-8">
          <Logo />
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {menuItems.map(item => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-xl font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'text-slate-500 hover:bg-slate-100 hover:text-primary'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Info Desktop (Bottom) */}
        <div className="p-6 border-t border-slate-100">
          <div className="flex items-center gap-3">
            <img
              src="https://i.ibb.co.com/MxSXSPf3/kids.jpg"
              className="w-10 h-10 rounded-full object-cover border-2 border-primary/10"
              alt="User"
            />
            <div className="overflow-hidden">
              <p className="text-sm font-black text-slate-800 leading-tight truncate">
                Habiba
              </p>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                Senior Educator
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* --- Main Content Area --- */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        <main className="p-4 md:p-8 lg:p-12 pb-32 lg:pb-12">{children}</main>
      </div>

      {/* --- Mobile Bottom Navigation --- */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200 px-4 py-3 flex justify-between items-end z-[100] shadow-[0_-10px_40px_rgba(0,0,0,0.08)]">
        {/* Left Side: First 2 Items */}
        <div className="flex justify-around w-[100%] mb-1">
          {menuItems.map(item => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center transition-all duration-300 ${
                  isActive ? 'text-primary scale-110' : 'text-slate-400'
                }`}
              >
                <span className="text-2xl mb-1">{item.icon}</span>
                <span
                  className={`text-[8px] font-black uppercase tracking-tighter ${isActive ? 'opacity-100' : 'opacity-60'}`}
                >
                  {item.name.split(' ')[0]}
                </span>
                {isActive && (
                  <div className="w-1 h-1 bg-primary rounded-full mt-1"></div>
                )}
              </Link>
            );
          })}
        </div>

      </nav>
    </div>
  );
};

export default TeacherLayout;
