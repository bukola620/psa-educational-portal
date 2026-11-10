"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) {
      // Send reset password logic (e.g., supabase.auth.resetPasswordForEmail)
      setSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#e9edde] text-[#2b303a] font-sans">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-[#2b303a]/10">
          <div className="text-center space-y-2">
            <span className="inline-block px-3 py-1 bg-[#9c0d38]/10 text-[#9c0d38] font-semibold text-xs rounded-full uppercase tracking-wider border border-[#9c0d38]/20">
              Account Recovery
            </span>
            <h1 className="text-3xl font-extrabold text-[#2b303a] tracking-tight">
              Reset Your Password
            </h1>
            <p className="text-sm text-[#2b303a]/75">
              Enter your registered email address and we will send you
              instructions to reset your password.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-6 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                ✓
              </div>
              <h2 className="text-lg font-bold text-emerald-900">
                Check Your Email
              </h2>
              <p className="text-xs text-emerald-800 leading-relaxed">
                If an account exists for{" "}
                <span className="font-semibold">{email}</span>, you will receive
                a password reset link shortly.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-[#9c0d38] hover:underline"
                >
                  Try another email address
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#2b303a] mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@example.com"
                  className="w-full rounded-lg border border-[#2b303a]/20 bg-white px-4 py-3 text-[#2b303a] placeholder-[#2b303a]/40 outline-none focus:border-[#9c0d38] focus:ring-2 focus:ring-[#9c0d38]/20 transition-all duration-200"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#9c0d38] py-3.5 font-semibold text-white shadow-md hover:bg-[#2b303a] focus:outline-none focus:ring-2 focus:ring-[#9c0d38] transition-all duration-200"
              >
                Send Reset Link
              </button>
            </form>
          )}

          <div className="border-t border-[#2b303a]/10 pt-4 text-center text-sm">
            <p className="text-[#2b303a]/70">
              Remembered your password?{" "}
              <Link
                href="/login"
                className="font-semibold text-[#9c0d38] hover:underline"
              >
                Return to Log in
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
