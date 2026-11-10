import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#e9edde] text-[#2b303a] font-sans">
      {/* Reusable Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 py-12 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Page Header */}
          <div className="text-center space-y-3">
            <span className="inline-block px-3 py-1 bg-[#9c0d38]/10 text-[#9c0d38] font-semibold text-xs rounded-full uppercase tracking-wider border border-[#9c0d38]/20">
              About Us
            </span>
            <h1 className="text-4xl font-extrabold text-[#2b303a] tracking-tight">
              Welcome to PSA Educational
            </h1>
            <p className="text-lg text-[#2b303a]/75 max-w-2xl mx-auto">
              Empowering learners of all ages through quality literacy programs,
              academic preparation, and modern digital skills training in Lagos
              State, Nigeria.
            </p>
          </div>

          {/* History & Evolution Section */}
          <section className="bg-white rounded-2xl p-8 shadow-sm border border-[#2b303a]/10 space-y-4">
            <h2 className="text-2xl font-bold text-[#2b303a]">Our Journey</h2>
            <p className="text-[#2b303a]/80 leading-relaxed">
              PSA Educational is located in Lagos State, Nigeria, where it
              started off as an adult literacy center way back on{" "}
              <span className="font-semibold text-[#9c0d38]">
                July 15th, 2006
              </span>
              . Over the years, we expanded our commitment to educational
              excellence by adding a preparatory center for junior and senior
              secondary students, alongside a specialized computer training
              center to equip students for the digital age.
            </p>
          </section>

          {/* Core Offerings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2b303a]/10 hover:border-[#9c0d38]/40 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#9c0d38]/10 text-[#9c0d38] flex items-center justify-center font-bold mb-4">
                01
              </div>
              <h3 className="text-lg font-bold text-[#2b303a]">
                Adult Literacy Center
              </h3>
              <p className="mt-2 text-sm text-[#2b303a]/75 leading-relaxed">
                Our foundational program dedicated to providing accessible,
                high-quality literacy education for adults since 2006.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2b303a]/10 hover:border-[#9c0d38]/40 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#9c0d38]/10 text-[#9c0d38] flex items-center justify-center font-bold mb-4">
                02
              </div>
              <h3 className="text-lg font-bold text-[#2b303a]">
                Preparatory Center
              </h3>
              <p className="mt-2 text-sm text-[#2b303a]/75 leading-relaxed">
                Comprehensive coaching and academic support tailored for junior
                and senior secondary school students to excel in examinations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2b303a]/10 hover:border-[#9c0d38]/40 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#9c0d38]/10 text-[#9c0d38] flex items-center justify-center font-bold mb-4">
                03
              </div>
              <h3 className="text-lg font-bold text-[#2b303a]">
                Computer Training
              </h3>
              <p className="mt-2 text-sm text-[#2b303a]/75 leading-relaxed">
                Practical, hands-on digital literacy and computer training
                programs designed to bridge the technology gap.
              </p>
            </div>
          </div>

          {/* Contact & Office Locations Section */}
          <section className="rounded-2xl bg-[#2b303a] p-8 text-white shadow-xl border border-[#9c0d38]/20 space-y-6">
            <h2 className="text-2xl font-bold text-[#e9edde]">Our Locations</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-white/5 rounded-xl p-5 border border-white/10 space-y-2">
                <span className="inline-block px-2.5 py-0.5 bg-[#9c0d38] text-white text-xs font-semibold rounded uppercase tracking-wider">
                  Head Office
                </span>
                <p className="text-[#e9edde] text-sm leading-relaxed pt-1">
                  4, Birrel Avenue, Opposite Magistrate Court, Sabo, Yaba, Lagos
                  State.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-5 border border-white/10 space-y-2">
                <span className="inline-block px-2.5 py-0.5 bg-[#e9edde] text-[#2b303a] text-xs font-semibold rounded uppercase tracking-wider">
                  Branch Office
                </span>
                <p className="text-[#e9edde] text-sm leading-relaxed pt-1">
                  2, Ondo Close, Off Odolowu Street, Ijesha, Surulere, Lagos
                  State.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
