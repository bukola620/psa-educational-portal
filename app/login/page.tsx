import Link from "next/link";
import { login } from "@/app/auth/actions";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubmitButton from "@/components/SubmitButton";

type Props = {
  searchParams: Promise<{
    error?: string;
    message?: string;
  }>;
};

async function AuthAlerts({
  searchParams,
}: {
  searchParams: Props["searchParams"];
}) {
  const params = await searchParams;

  return (
    <>
      {params.error && (
        <p
          role="alert"
          className="mt-4 rounded-lg bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-600 font-medium"
        >
          {params.error === "missing-fields"
            ? "Please enter your email and password."
            : "Unable to sign in. Check your details and try again."}
        </p>
      )}

      {params.message === "check-email" && (
        <p className="mt-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-3 text-sm text-emerald-700 font-medium">
          Check your email to confirm your account.
        </p>
      )}
    </>
  );
}

export default function LoginPage({ searchParams }: Props) {
  return (
    <div className="flex flex-col min-h-screen bg-[#e9edde] text-[#2b303a] font-sans">
      {/* Reusable Navbar Component */}
      <Navbar />

      {/* Main Content / Login Form Container */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl border border-[#2b303a]/10">
          <div className="text-center sm:text-left">
            <span className="inline-block px-3 py-1 bg-[#9c0d38]/10 text-[#9c0d38] font-semibold text-xs rounded-full uppercase tracking-wider border border-[#9c0d38]/20 mb-3">
              Secure Access
            </span>
            <h1 className="text-3xl font-extrabold text-[#2b303a] tracking-tight">
              Welcome back
            </h1>
            <p className="mt-2 text-[#2b303a]/75 text-sm sm:text-base">
              Sign in to continue to your student portal account.
            </p>
          </div>

          <Suspense
            fallback={
              <div className="mt-4 h-12 bg-[#2b303a]/5 rounded-lg animate-pulse" />
            }
          >
            <AuthAlerts searchParams={searchParams} />
          </Suspense>

          <form action={login} className="mt-6 space-y-5">
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

            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-[#2b303a]"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-medium text-[#9c0d38] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full rounded-lg border border-[#2b303a]/20 bg-white px-4 py-3 text-[#2b303a] placeholder-[#2b303a]/40 outline-none focus:border-[#9c0d38] focus:ring-2 focus:ring-[#9c0d38]/20 transition-all duration-200"
                placeholder="Enter your password"
              />
            </div>

            <SubmitButton text="Sign In" loadingText="Signing in..." />
          </form>

          <p className="mt-6 text-center text-sm text-[#2b303a]/75">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold text-[#9c0d38] hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
