'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LuDatabase,
  LuPlus,
  LuUsers,
  LuChartBar,
  LuSettings,
  LuLayoutDashboard
} from "react-icons/lu";

export default function TeacherLayout({ children }) {
  const pathname = usePathname();

  const menuItems = [
    {
      name: 'Dashboard',
      icon: <LuLayoutDashboard />,
      href: '/dashboard/teacher',
    },
    {
      name: 'Question Bank',
      icon: <LuDatabase />,
      href: '/dashboard/teacher/questions',
    },
    {
      name: 'Manage Exams',
      icon: <LuPlus />,
      href: '/dashboard/teacher/exams',
    },
    {
      name: 'Student List',
      icon: <LuUsers />,
      href: '/dashboard/teacher/students',
    },
    {
      name: 'Results & Grading',
      icon: <LuChartBar />,
      href: '/dashboard/teacher/results',
    },
    {
      name: 'System Settings',
      icon: <LuSettings />,
      href: '/dashboard/teacher/settings',
    },
  ];

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-base-200 p-4">
        {menuItems.map(item => (
          <Link key={item.name} href={item.href} className="flex items-center gap-2 py-2">
            {item.icon}
            {item.name}
          </Link>
        ))}
      </aside>

      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}