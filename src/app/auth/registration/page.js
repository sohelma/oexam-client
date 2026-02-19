"use client";

import { useState } from "react";
<<<<<<< HEAD
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
=======
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

export default function RegistrationPage() {
    const [role, setRole] = useState("student");
    const [showPass, setShowPass] = useState(false);

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [uploading, setUploading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    /* ================= IMAGE HANDLER ================= */

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    /* ================= SUBMIT ================= */

    const onSubmit = async (data) => {
        try {
            let imageUrl = "";

            if (image) {
                setUploading(true);

                const formData = new FormData();
                formData.append("image", image);

                const res = await fetch(
                    "https://api.imgbb.com/1/upload?key=YOUR_IMGBB_API_KEY",
                    { method: "POST", body: formData }
                );

                const imgData = await res.json();
                imageUrl = imgData?.data?.url || "";
            }

            const finalData = {
                ...data,
                role,
                profileImage: imageUrl,
            };

            alert(JSON.stringify(finalData, null, 2));
        } catch {
            alert("Image upload failed");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#ece9f6] p-4">
            <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

                {/* ================= LEFT PRIMARY PANEL ================= */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col justify-center items-center text-center
                     bg-gradient-to-br from-[#2b4bee] to-[#1f36b8]
                     text-white p-12"
                >
                    <h2 className="text-4xl font-bold mb-4 text-yellow-300">
                        Get Started
                    </h2>

                    <p className="text-sm opacity-90 mb-8">
                        Already have an account?
                    </p>

                    <Link
                        href="/auth/login"
                        className="px-8 py-2 rounded-full border border-yellow-300
                       text-yellow-300 hover:bg-yellow-300 hover:text-[#2b4bee] transition"
                    >
                        Log in
                    </Link>

                    <div className="flex gap-3 mt-10">
                        <span className="w-3 h-3 rounded-full bg-white/80" />
                        <span className="w-3 h-3 rounded-full border border-white/60" />
                        <span className="w-3 h-3 rounded-full border border-white/60" />
                    </div>
                </motion.div>

                {/* ================= RIGHT REGISTER FORM ================= */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="p-10 md:p-12 flex flex-col justify-center"
                >
                    <h1 className="text-3xl font-semibold text-[#2b4bee] mb-8">
                        Create Account
                    </h1>

                    {/* Role switch */}
                    <div className="flex gap-3 mb-6">
                        {["student", "teacher"].map((r) => (
                            <button
                                key={r}
                                type="button"
                                onClick={() => setRole(r)}
                                className={`px-4 py-1.5 text-xs rounded-full border transition ${role === r
                                    ? "bg-[#2b4bee] text-white border-[#2b4bee]"
                                    : "text-gray-500 border-gray-300 hover:bg-gray-100"
                                    }`}
                            >
                                {r}
                            </button>
                        ))}
                    </div>

                    {/* ===== FORM ===== */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                        <Input
                            icon={<FiUser />}
                            placeholder="Username"
                            error={errors.name}
                            {...register("name", { required: "Username required" })}
                        />

                        {role === "teacher" && (
                            <>
                                <Input
                                    placeholder="Institution name"
                                    error={errors.institution}
                                    {...register("institution", { required: "Required" })}
                                />
                                <Input
                                    placeholder="Institution location"
                                    error={errors.location}
                                    {...register("location", { required: "Required" })}
                                />
                            </>
                        )}

                        <Input
                            icon={<FiMail />}
                            type="email"
                            placeholder="E-mail"
                            error={errors.email}
                            {...register("email", { required: "Email required" })}
                        />

                        <PasswordInput
                            show={showPass}
                            toggle={() => setShowPass(!showPass)}
                            error={errors.password}
                            register={register("password", {
                                required: "Password required",
                                minLength: { value: 6, message: "Min 6 characters" },
                            })}
                        />


                        {/* ===== PROFILE IMAGE BELOW FORM ===== */}
                        <div className="flex flex-col items-center gap-3 mt-8">
                            <label className="cursor-pointer">
                                <div className="w-24 h-24 rounded-full border-2 border-dashed border-[#2b4bee]
                              flex items-center justify-center overflow-hidden bg-[#eef1ff]">
                                    {preview ? (
                                        <img src={preview} alt="preview" className="w-full h-full object-cover" />
                                    ) : (
                                        <span className="text-xs text-[#2b4bee]">Upload Photo</span>
                                    )}
                                </div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />
                            </label>

                            {uploading && (
                                <p className="text-xs text-[#2b4bee]">Uploading image...</p>
                            )}
                        </div>

                        {/* Terms */}
                        <label className="flex items-center gap-2 text-sm text-gray-600">
                            <input
                                type="checkbox"
                                {...register("terms", { required: true })}
                                className="accent-[#2b4bee]"
                            />
                            I accept the terms of the agreement
                        </label>
                        {errors.terms && (
                            <p className="text-red-500 text-xs">You must accept terms</p>
                        )}

                        <button className="w-full bg-[#2b4bee] text-white py-3 rounded-xl font-semibold hover:bg-[#1f36b8] transition">
                            Sign Up
                        </button>
                    </form>


                </motion.div>
            </div>

            {/* ===== BACK BUTTON ===== */}
            <Link
                href="/"
                className="mt-6 flex items-center gap-2 text-sm text-gray-600 hover:text-[#2b4bee] transition"
            >
                <FiArrowLeft />
                Back to Home
            </Link>
        </div>
    );
}

/* ================= INPUT COMPONENTS ================= */

function Input({ icon, error, ...props }) {
    return (
        <div>
            <div className="flex items-center border-b border-gray-300 py-2">
                {icon && <span className="text-gray-400 mr-3">{icon}</span>}
                <input {...props} className="w-full outline-none text-sm placeholder-gray-400" />
            </div>
            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
        </div>
    );
}

function PasswordInput({ show, toggle, error, register }) {
    return (
        <div>
            <div className="flex items-center border-b border-gray-300 py-2">
                <FiLock className="text-gray-400 mr-3" />
                <input
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    {...register}
                    className="w-full outline-none text-sm placeholder-gray-400"
                />
                <button type="button" onClick={toggle} className="text-gray-400">
                    {show ? <FiEyeOff /> : <FiEye />}
                </button>
            </div>
            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
>>>>>>> nosib
        </div>
      </div>
    </div>
  );
}
