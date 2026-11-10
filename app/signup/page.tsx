import Link from "next/link";
import { signup } from "@/app/auth/actions";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = {
  searchParams: Promise<{ error?: string }>;
};

// Extracted component to safely read searchParams inside Suspense
async function SignupErrorAlert({
  searchParams,
}: {
  searchParams: Props["searchParams"];
}) {
  const params = await searchParams;

  if (!params.error) return null;

  return (
    <p
      role="alert"
      className="mt-4 rounded-lg bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-600 font-medium"
    >
      Please check your details and try again. Your password must contain at
      least 8 characters.
    </p>
  );
}

export default function SignupPage({ searchParams }: Props) {
  return (
    <div className="flex flex-col min-h-screen bg-[#e9edde] text-[#2b303a] font-sans">
      {/* Reusable Navbar Component */}
      <Navbar />

      {/* Main Content / Registration Form Container */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-xl rounded-2xl bg-white p-8 sm:p-10 shadow-xl border border-[#2b303a]/10">
          {/* Header Branding / Title */}
          <div className="text-center sm:text-left">
            <span className="inline-block px-3 py-1 bg-[#9c0d38]/10 text-[#9c0d38] font-semibold text-xs rounded-full uppercase tracking-wider border border-[#9c0d38]/20 mb-3">
              New Registration
            </span>
            <h1 className="text-3xl font-extrabold text-[#2b303a] tracking-tight">
              Create account
            </h1>
            <p className="mt-2 text-[#2b303a]/75 text-sm sm:text-base">
              Get started by filling out your student portal information.
            </p>
          </div>

          {/* Suspense boundary required for searchParams */}
          <Suspense fallback={null}>
            <SignupErrorAlert searchParams={searchParams} />
          </Suspense>

          <form action={signup} className="mt-6 space-y-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-semibold text-[#2b303a]"
              >
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                className="w-full rounded-lg border border-[#2b303a]/20 bg-white px-4 py-3 text-[#2b303a] placeholder-[#2b303a]/40 outline-none focus:border-[#9c0d38] focus:ring-2 focus:ring-[#9c0d38]/20 transition-all duration-200"
                placeholder="Your full name"
              />
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-[#2b303a]"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-lg border border-[#2b303a]/20 bg-white px-4 py-3 text-[#2b303a] placeholder-[#2b303a]/40 outline-none focus:border-[#9c0d38] focus:ring-2 focus:ring-[#9c0d38]/20 transition-all duration-200"
                placeholder="you@example.com"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold text-[#2b303a]"
              >
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="w-full rounded-lg border border-[#2b303a]/20 bg-white px-4 py-3 text-[#2b303a] placeholder-[#2b303a]/40 outline-none focus:border-[#9c0d38] focus:ring-2 focus:ring-[#9c0d38]/20 transition-all duration-200"
                placeholder="+234 123 456 7890"
              />
            </div>

            {/* Program of Interest */}
            <div>
              <label
                htmlFor="program"
                className="mb-2 block text-sm font-semibold text-[#2b303a]"
              >
                Program of Interest
              </label>
              <select
                id="program"
                name="program"
                required
                defaultValue=""
                className="w-full rounded-lg border border-[#2b303a]/20 bg-white px-4 py-3 text-[#2b303a] outline-none focus:border-[#9c0d38] focus:ring-2 focus:ring-[#9c0d38]/20 transition-all duration-200"
              >
                <option value="" disabled>
                  Select a program
                </option>
                <option value="UTME">UTME Prep</option>
                <option value="SSCE">SSCE Prep</option>
                <option value="IT">IT &amp; Computer Training</option>
                <option value="Literacy">Adult Literacy</option>
                <option value="General">General Inquiry</option>
              </select>
            </div>

            {/* Gender */}
            <div>
              <span className="mb-2 block text-sm font-semibold text-[#2b303a]">
                Gender
              </span>
              <div className="flex items-center gap-6 pt-1">
                <label className="inline-flex items-center gap-2 text-sm text-[#2b303a] cursor-pointer font-medium">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    required
                    className="h-4 w-4 border-[#2b303a]/30 text-[#9c0d38] focus:ring-[#9c0d38]"
                  />
                  Male
                </label>
                <label className="inline-flex items-center gap-2 text-sm text-[#2b303a] cursor-pointer font-medium">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    required
                    className="h-4 w-4 border-[#2b303a]/30 text-[#9c0d38] focus:ring-[#9c0d38]"
                  />
                  Female
                </label>
                <label className="inline-flex items-center gap-2 text-sm text-[#2b303a] cursor-pointer font-medium">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    required
                    className="h-4 w-4 border-[#2b303a]/30 text-[#9c0d38] focus:ring-[#9c0d38]"
                  />
                  Other
                </label>
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-[#2b303a]"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                minLength={8}
                required
                className="w-full rounded-lg border border-[#2b303a]/20 bg-white px-4 py-3 text-[#2b303a] placeholder-[#2b303a]/40 outline-none focus:border-[#9c0d38] focus:ring-2 focus:ring-[#9c0d38]/20 transition-all duration-200"
                placeholder="At least 8 characters"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#9c0d38] py-3.5 font-semibold text-white shadow-md hover:bg-[#2b303a] focus:outline-none focus:ring-2 focus:ring-[#9c0d38] transition-all duration-200"
            >
              Create account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[#2b303a]/75">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-[#9c0d38] hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
