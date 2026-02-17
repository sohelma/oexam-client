"use client";

import { useState } from "react";
import Link from "next/link";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

export default function RegistrationPage() {
  const [role, setRole] = useState("student");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-8">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-center justify-center mb-2">
            Create Account
          </h2>
          <p className="text-center text-sm text-base-content/70 mb-6">
            Join us today as a student or teacher
          </p>

          {/* Role Switch */}
          <div role="tablist" className="tabs tabs-boxed bg-base-200 p-1 mb-6">
            <button 
              role="tab"
              className={`tab flex-1 ${role === 'student' ? 'tab-active' : ''}`}
              onClick={() => setRole('student')}
            >
              Student
            </button>
            <button 
              role="tab"
              className={`tab flex-1 ${role === 'teacher' ? 'tab-active' : ''}`}
              onClick={() => setRole('teacher')}
            >
              Teacher
            </button>
          </div>

          <form onSubmit={(e) => {
            e.preventDefault();
            alert(`Registered successfully as ${role}!`);
          }}>
            {/* Full Name */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <div className="relative">
                <FiUser className="absolute left-3 top-3.5 text-base-content/50" />
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full pl-10"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="form-control w-full mt-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-3.5 text-base-content/50" />
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="input input-bordered w-full pl-10"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-control w-full mt-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-3.5 text-base-content/50" />
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Create password"
                  className="input input-bordered w-full pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-3.5 text-base-content/50 hover:text-primary transition-colors"
                >
                  {showPass ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="form-control w-full mt-4">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-3.5 text-base-content/50" />
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm password"
                  className="input input-bordered w-full pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-3.5 text-base-content/50 hover:text-primary transition-colors"
                >
                  {showConfirm ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-8">
              <button className="btn btn-primary uppercase font-bold">
                Register as {role}
              </button>
            </div>
          </form>

          <div className="divider my-6">OR</div>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/auth/login" className="link link-primary font-bold no-underline hover:underline">
              Login
            </Link>
          </p>

           <div className="text-center mt-2">
            <Link href="/" className="text-xs text-base-content/50 hover:text-primary transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
