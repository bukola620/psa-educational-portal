import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubmitButton from "@/components/SubmitButton";
import { submitInquiry } from "@/app/auth/actions";

type Props = {
  searchParams: Promise<{ success?: string; error?: string }>;
};

// Extracted component to safely await and display URL search parameters
async function ContactFeedbackAlert({
  searchParams,
}: {
  searchParams: Props["searchParams"];
}) {
  const params = await searchParams;

  if (params.success) {
    return (
      <div className="mb-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-center space-y-1">
        <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-lg font-bold mb-2">
          ✓
        </div>
        <h3 className="text-base font-bold text-emerald-900">
          Message Sent Successfully!
        </h3>
        <p className="text-xs text-emerald-800">
          Thank you for reaching out to PSA Educational. Our administrative team
          will get back to you shortly.
        </p>
      </div>
    );
  }

  if (params.error) {
    return (
      <div className="mb-6 rounded-xl bg-red-500/10 border border-red-500/20 p-3 text-center text-sm text-red-600 font-medium">
        {decodeURIComponent(params.error)}
      </div>
    );
  }

  return null;
}

export default function ContactPage({ searchParams }: Props) {
  return (
    <div className="flex flex-col min-h-screen bg-[#e9edde] text-[#2b303a] font-sans">
      {/* Reusable Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 py-12 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Page Header */}
          <div className="text-center space-y-3">
            <span className="inline-block px-3 py-1 bg-[#9c0d38]/10 text-[#9c0d38] font-semibold text-xs rounded-full uppercase tracking-wider border border-[#9c0d38]/20">
              Get In Touch
            </span>
            <h1 className="text-4xl font-extrabold text-[#2b303a] tracking-tight">
              Contact PSA Educational
            </h1>
            <p className="text-lg text-[#2b303a]/75 max-w-2xl mx-auto">
              Have questions about our UTME, SSCE, or IT programs? Reach out to
              us or visit any of our centers in Lagos State.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left Column: Office Locations & Info */}
            <div className="space-y-6">
              {/* Head Office Card */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-[#2b303a]/10 space-y-3 hover:border-[#9c0d38]/40 transition-all">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#9c0d38] text-white flex items-center justify-center font-bold text-xs uppercase">
                    HQ
                  </div>
                  <h2 className="text-xl font-bold text-[#2b303a]">
                    Head Office
                  </h2>
                </div>
                <p className="text-[#2b303a]/80 text-sm leading-relaxed pt-1">
                  4, Birrel Avenue, Opposite Magistrate Court, Sabo, Yaba, Lagos
                  State, Nigeria.
                </p>
              </div>

              {/* Branch Office Card */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-[#2b303a]/10 space-y-3 hover:border-[#9c0d38]/40 transition-all">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2b303a] text-white flex items-center justify-center font-bold text-xs uppercase">
                    BR
                  </div>
                  <h2 className="text-xl font-bold text-[#2b303a]">
                    Branch Office
                  </h2>
                </div>
                <p className="text-[#2b303a]/80 text-sm leading-relaxed pt-1">
                  2, Ondo Close, Off Odolowu Street, Ijesha, Surulere, Lagos
                  State, Nigeria.
                </p>
              </div>

              {/* Quick Info Box */}
              <div className="rounded-2xl bg-[#2b303a] p-7 text-white shadow-xl border border-[#9c0d38]/20 space-y-4">
                <h3 className="text-lg font-bold text-[#e9edde]">
                  Operating Hours
                </h3>
                <div className="space-y-2 text-sm text-[#e9edde]/80">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Monday – Friday:</span>
                    <span className="font-semibold text-white">
                      4:00 PM – 7:30 PM
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Saturday:</span>
                    <span className="font-semibold text-white">
                      9:00 AM – 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold text-[#9c0d38]">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Server-Driven Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#2b303a]/10">
              <h2 className="text-2xl font-extrabold text-[#2b303a]">
                Send Us a Message
              </h2>
              <p className="mt-1 text-sm text-[#2b303a]/75 mb-6">
                Fill out the form below and our administrative team will get
                back to you shortly.
              </p>

              {/* Feedback Alert for Success / Error */}
              <Suspense fallback={null}>
                <ContactFeedbackAlert searchParams={searchParams} />
              </Suspense>

              <form action={submitInquiry} className="space-y-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-semibold text-[#2b303a]"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    className="w-full rounded-lg border border-[#2b303a]/20 bg-white px-4 py-3 text-[#2b303a] placeholder-[#2b303a]/40 outline-none focus:border-[#9c0d38] focus:ring-2 focus:ring-[#9c0d38]/20 transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-[#2b303a]"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-[#2b303a]/20 bg-white px-4 py-3 text-[#2b303a] placeholder-[#2b303a]/40 outline-none focus:border-[#9c0d38] focus:ring-2 focus:ring-[#9c0d38]/20 transition-all duration-200"
                    placeholder="you@example.com"
                  />
                </div>

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

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-[#2b303a]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-lg border border-[#2b303a]/20 bg-white px-4 py-3 text-[#2b303a] placeholder-[#2b303a]/40 outline-none focus:border-[#9c0d38] focus:ring-2 focus:ring-[#9c0d38]/20 transition-all duration-200 resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <SubmitButton
                  text="Submit Inquiry"
                  loadingText="Submitting..."
                />
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Reusable Footer Component */}
      <Footer />
    </div>
  );
}
