"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

export default function LoginPage() {
  const [role, setRole] = useState("student");
  const [show, setShow] = useState(false);

  const balls = Array.from({ length: 12 });

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#020617] overflow-hidden px-4">

      {/* 🔵 Blue bouncing balls */}
      {balls.map((_, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 2 + i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-2 h-2 bg-cyan-400/60"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* ⬛ Panel */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-sm border border-slate-800 bg-[#0f172a] p-8 shadow-2xl"
      >
        {/* Title */}
        <h1 className="text-lg font-semibold text-white">
          Exam System Login
        </h1>
        <p className="text-xs text-slate-400 mt-1 mb-6">
          Continue as student or teacher.
        </p>

        {/* Role switch */}
        <div className="flex border border-slate-700 mb-6">
          {["student", "teacher"].map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`flex-1 py-2 text-xs uppercase transition ${
                role === r
                  ? "bg-cyan-400 text-black"
                  : "text-slate-400 hover:bg-slate-800"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Animated form */}
        <AnimatePresence mode="wait">
          <motion.form
            key={role}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert(`Login as ${role}`);
            }}
          >
            {/* Email */}
            <div className="relative">
              <FiMail className="absolute left-3 top-3 text-slate-500" />
              <input
                type="email"
                placeholder="Email address"
                className="w-full border border-slate-700 bg-slate-950 pl-10 pr-3 py-2 text-sm text-white
                           outline-none focus:border-cyan-400"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FiLock className="absolute left-3 top-3 text-slate-500" />
              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                className="w-full border border-slate-700 bg-slate-950 pl-10 pr-10 py-2 text-sm text-white
                           outline-none focus:border-cyan-400"
              />

              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-2.5 text-slate-500 hover:text-cyan-400"
              >
                {show ? <FiEyeOff size={16} /> : <FiEye size={16} />}
              </button>
            </div>

            {/* Forgot */}
            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-[11px] text-slate-400 hover:text-cyan-400"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              className="w-full bg-cyan-400 py-2 text-xs font-semibold text-black uppercase
                         hover:bg-cyan-300 transition"
            >
              Continue as {role}
            </motion.button>
          </motion.form>
        </AnimatePresence>

        {/* Divider */}
        <div className="h-px bg-slate-800 my-6" />

        {/* Signup */}
        <p className="text-[11px] text-slate-400 text-center">
          Need an account?{" "}
          <Link href="/register" className="text-cyan-400 underline">
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
