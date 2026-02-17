import React from "react";
import { 
  FaUserShield, 
  FaClipboardList, 
  FaDatabase, 
  FaLaptopCode, 
  FaChartLine, 
  FaCogs, 
  FaAward 
} from "react-icons/fa";

const services = [
  {
    title: "User Management",
    icon: <FaUserShield className="text-3xl text-primary" />,
    features: [
      "Student registration and login",
      "Teacher/Examiner creation",
      "Admin panel user management",
      "Role-based access (Student, Teacher, Admin)",
    ],
  },
  {
    title: "Exam Management",
    icon: <FaClipboardList className="text-3xl text-primary" />,
    features: [
      "Create, schedule, and assign exams",
      "Support for multiple question sets",
      "MCQ, short answer, and written Qs",
      "Course/Subject specific assignment",
    ],
  },
  {
    title: "Question Bank System",
    icon: <FaDatabase className="text-3xl text-primary" />,
    features: [
      "Subject & difficulty categorization",
      "Random question generation",
      "Bulk upload (CSV/Excel)",
      "AI-Based Question Generator (OpenAI)",
      "Question Shuffling for fairness",
    ],
  },
  {
    title: "Online Exam Interface",
    icon: <FaLaptopCode className="text-3xl text-primary" />,
    features: [
      "Timer-based with auto-submit",
      "Fullscreen mode security",
      "Tab-Switch Detection & Warning",
      "Basic Webcam Proctoring",
      "Smooth navigation (Next/Prev)",
    ],
  },
  {
    title: "Result & Evaluation",
    icon: <FaAward className="text-3xl text-primary" />,
    features: [
      "Instant auto-marking for MCQs",
      "Manual evaluation for written Qs",
      "Grade & marksheet generation",
      "Downloadable PDF results",
    ],
  },
  {
    title: "Dashboard & Analytics",
    icon: <FaChartLine className="text-3xl text-primary" />,
    features: [
      "Student performance charts",
      "Subject-wise analysis",
      "Attendance & participation reports",
      "Real-time Leaderboard",
    ],
  },
  {
    title: "Technical Features",
    icon: <FaCogs className="text-3xl text-primary" />,
    features: [
      "Responsive (Mobile/Desktop)",
      "Database backup system",
      "English & Bangla support",
      "Exam Resume Logic (Power Failure)",
      "Fast & scalable architecture",
    ],
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-base-100 relative overflow-hidden" id="services">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -z-10 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="badge badge-primary badge-outline font-bold mb-4 py-3 px-4">Core Features</div>
          <h2 className="text-4xl md:text-5xl font-black text-base-content tracking-tight mb-6">
            Everything You Need for <br/> <span className="text-primary">Smart Examinations</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg opacity-70 leading-relaxed">
            A complete suite of tools designed to streamline the assessment process, ensure integrity, and provide actionable insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${index === 6 ? 'md:col-span-2 lg:col-span-1 xl:col-span-1' : ''}`}
            >
              <div className="card-body p-8">
                <div className="mb-6 p-4 bg-primary/10 w-fit rounded-2xl text-primary">
                  {service.icon}
                </div>
                <h3 className="card-title text-xl font-bold mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 opacity-80 group">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 group-hover:bg-secondary transition-colors"></span>
                      <span className="text-sm font-medium leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
