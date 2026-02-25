"use client";

import { useState } from "react";

export default function TeacherSettings() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="p-6 bg-base-200 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Teacher Settings</h1>

      <div className="grid md:grid-cols-4 gap-6">
        
        {/* Sidebar Tabs */}
        <div className="bg-base-100 rounded-xl shadow-md p-4">
          <ul className="menu">
            <li>
              <button
                onClick={() => setActiveTab("profile")}
                className={activeTab === "profile" ? "active" : ""}
              >
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("exam")}
                className={activeTab === "exam" ? "active" : ""}
              >
                Exam Settings
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("notifications")}
                className={activeTab === "notifications" ? "active" : ""}
              >
                Notifications
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("security")}
                className={activeTab === "security" ? "active" : ""}
              >
                Security
              </button>
            </li>
          </ul>
        </div>

        {/* Content Area */}
        <div className="md:col-span-3 bg-base-100 rounded-xl shadow-md p-6">

          {/* Profile */}
          {activeTab === "profile" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="input input-bordered w-full" />
                <input type="email" placeholder="Email" className="input input-bordered w-full" />
                <input type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                <input type="text" placeholder="Institution Name" className="input input-bordered w-full" />
              </div>

              <button className="btn btn-primary mt-6">Save Changes</button>
            </div>
          )}

          {/* Exam Settings */}
          {activeTab === "exam" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Exam Settings</h2>

              <div className="space-y-4">
                <input type="number" placeholder="Default Exam Duration (minutes)" className="input input-bordered w-full" />
                <input type="number" placeholder="Default Passing Marks (%)" className="input input-bordered w-full" />

                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Allow Negative Marking</span>
                    <input type="checkbox" className="toggle toggle-primary" />
                  </label>
                </div>

                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Shuffle Questions</span>
                    <input type="checkbox" className="toggle toggle-primary" />
                  </label>
                </div>

                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Auto Publish Result</span>
                    <input type="checkbox" className="toggle toggle-primary" />
                  </label>
                </div>
              </div>

              <button className="btn btn-primary mt-6">Save Changes</button>
            </div>
          )}

          {/* Notifications */}
          {activeTab === "notifications" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>

              <div className="space-y-4">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Email Notifications</span>
                    <input type="checkbox" className="toggle toggle-success" defaultChecked />
                  </label>
                </div>

                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">SMS Notifications</span>
                    <input type="checkbox" className="toggle toggle-success" />
                  </label>
                </div>

                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">New Student Alert</span>
                    <input type="checkbox" className="toggle toggle-success" defaultChecked />
                  </label>
                </div>
              </div>

              <button className="btn btn-primary mt-6">Save Changes</button>
            </div>
          )}

          {/* Security */}
          {activeTab === "security" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Security Settings</h2>

              <div className="space-y-4">
                <input type="password" placeholder="Current Password" className="input input-bordered w-full" />
                <input type="password" placeholder="New Password" className="input input-bordered w-full" />
                <input type="password" placeholder="Confirm New Password" className="input input-bordered w-full" />

                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Enable Two-Factor Authentication</span>
                    <input type="checkbox" className="toggle toggle-error" />
                  </label>
                </div>
              </div>

              <button className="btn btn-primary mt-6">Update Password</button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}