"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

export default function LoginPage() {
  const [role, setRole] = useState("student");
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-center justify-center mb-2">
            Welcome Back
          </h2>
          <p className="text-center text-sm text-base-content/70 mb-6">
            Login to your account
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
            alert(`Login as ${role}`);
          }}>
            {/* Email Input */}
            <div className="form-control w-full">
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

            {/* Password Input */}
            <div className="form-control w-full mt-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-3.5 text-base-content/50" />
                <input
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  className="input input-bordered w-full pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-3.5 text-base-content/50 hover:text-primary transition-colors"
                >
                  {show ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
              <label className="label">
                <Link 
                  href="/forgot-password" 
                  className="label-text-alt link link-hover text-primary ml-auto"
                >
                  Forgot password?
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary uppercase font-bold">
                Login as {role}
              </button>
            </div>
          </form>

          <div className="divider my-6">OR</div>

          <p className="text-center text-sm">
            Don't have an account?{" "}
            <Link href="/auth/registration" className="link link-primary font-bold no-underline hover:underline">
              Register
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
