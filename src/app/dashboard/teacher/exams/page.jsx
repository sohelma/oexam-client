'use client';
import React, { useState } from 'react';
import {
  LuPlus,
  LuActivity,
  LuList,
} from 'react-icons/lu';
import ExamList from './examList/page';
import NewExamSetup from './create/page';
import LiveMonitoring from './monitor/page';


const ExamManagementPage = () => {
  const [activeTab, setActiveTab] = useState('list');

  const tabs = [
    { id: 'list', label: 'All Exams', icon: <LuList /> },
    { id: 'create', label: 'Create New', icon: <LuPlus /> },
    { id: 'monitor', label: 'Live Monitor', icon: <LuActivity /> },
  ];

  return (
    <div className="space-y-8">
      {/* --- Tab Navigation --- */}
      <div className="flex flex-wrap items-center gap-4 bg-white p-2 rounded-[2rem] border border-slate-200/60 w-fit shadow-sm">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-[1.5rem] font-black text-xs uppercase tracking-widest transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                : 'text-slate-400 hover:bg-slate-50'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* --- Dynamic Content Rendering --- */}
      <div className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
        {activeTab === 'list' && <ExamList />}
        {activeTab === 'create' && <NewExamSetup />}
        {activeTab === 'monitor' && <LiveMonitoring />}
      </div>
    </div>
  );
};

export default ExamManagementPage;
