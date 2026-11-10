import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { logout } from "@/app/auth/actions";
import { Suspense } from "react";
import { connection } from "next/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

async function DashboardContent() {
  await connection(); // Defer execution to request-time

  const supabase = await createClient();

  // Verify user identity
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    redirect("/login");
  }

  const user = data.user;
  const fullName = user.user_metadata?.full_name || user.email?.split("@")[0];
  const email = user.email;
  const phone = user.user_metadata?.phone || "Not provided";
  const gender = user.user_metadata?.gender || "Not specified";
  const purpose = user.user_metadata?.purpose
    ? user.user_metadata.purpose.toUpperCase()
    : "GENERAL";

  return (
    <div className="space-y-8 mt-6">
      {/* Welcome Banner */}
      <section className="rounded-2xl bg-[#2b303a] p-8 text-white shadow-xl border border-[#9c0d38]/20 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#9c0d38]/20 to-transparent pointer-events-none" />

        <span className="inline-block rounded-full bg-[#9c0d38]/30 px-3 py-1 text-xs font-semibold text-[#e9edde] uppercase tracking-wider border border-[#9c0d38]/40">
          Student Portal — Track: {purpose}
        </span>

        <h2 className="mt-4 text-3xl font-bold text-[#e9edde]">
          Welcome back, {fullName}!
        </h2>
        <p className="mt-1 text-[#e9edde]/80 text-sm">
          Here is a summary of your registered account profile details.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#e9edde]/10 text-sm">
          <div>
            <span className="block text-[#e9edde]/60 text-xs">
              Phone Number
            </span>
            <span className="font-semibold text-[#e9edde]">{phone}</span>
          </div>
          <div>
            <span className="block text-[#e9edde]/60 text-xs">Gender</span>
            <span className="font-semibold text-[#e9edde] capitalize">
              {gender}
            </span>
          </div>
          <div>
            <span className="block text-[#e9edde]/60 text-xs">
              Registration Purpose
            </span>
            <span className="font-semibold text-[#e9edde]">{purpose}</span>
          </div>
        </div>
      </section>

      {/* Account Info Details (Directly from actions.ts data) */}
      <section className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-[#2b303a]/10">
        <h3 className="text-xl font-bold text-[#2b303a] mb-4">
          Account Credentials &amp; Metadata
        </h3>
        <div className="space-y-3 divide-y divide-[#2b303a]/10 pt-2 text-sm">
          <div className="flex flex-col sm:flex-row justify-between py-2 sm:items-center">
            <span className="font-medium text-[#2b303a]/70">Full Name:</span>
            <span className="font-semibold text-[#2b303a]">{fullName}</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-between py-2 sm:items-center pt-3">
            <span className="font-medium text-[#2b303a]/70">
              Email Address:
            </span>
            <span className="font-semibold text-[#2b303a]">{email}</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-between py-2 sm:items-center pt-3">
            <span className="font-medium text-[#2b303a]/70">User UUID:</span>
            <span className="font-mono text-xs sm:text-sm bg-[#e9edde] px-2 py-1 rounded text-[#2b303a]/90">
              {user.id}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#e9edde] text-[#2b303a] font-sans">
      <Navbar />

      <main className="flex-1 p-6 md:p-12">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#2b303a]/15 pb-6">
            <div>
              <h1 className="text-3xl font-extrabold text-[#2b303a]">
                Student Dashboard
              </h1>
              <p className="mt-1 text-[#2b303a]/75 text-sm sm:text-base">
                View your registered profile details and account metadata.
              </p>
            </div>

            <form action={logout}>
              <button
                type="submit"
                className="rounded-lg bg-[#9c0d38] px-5 py-3 font-semibold text-white shadow-md hover:bg-[#2b303a] text-sm transition-all duration-200"
              >
                Log out
              </button>
            </form>
          </div>

          {/* Dynamic Content Container with Suspense */}
          <Suspense
            fallback={
              <div className="mt-8 space-y-6 animate-pulse">
                <div className="rounded-2xl bg-[#2b303a]/10 p-8 h-48 border border-[#2b303a]/20"></div>
                <div className="rounded-xl bg-white p-6 h-40"></div>
              </div>
            }
          >
            <DashboardContent />
          </Suspense>
        </div>
      </main>

      <Footer />
    </div>
  );
}
