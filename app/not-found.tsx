import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#e9edde] text-[#2b303a] font-sans">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg w-full text-center space-y-6 bg-white p-10 rounded-2xl shadow-xl border border-[#2b303a]/10">
          {/* Badge & Big 404 Display */}
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 bg-[#9c0d38]/10 text-[#9c0d38] font-semibold text-xs rounded-full uppercase tracking-wider border border-[#9c0d38]/20">
              Error 404
            </span>
            <h1 className="text-7xl font-extrabold text-[#2b303a] tracking-tight">
              404
            </h1>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#2b303a]">
              Page Not Found
            </h2>
            <p className="text-sm text-[#2b303a]/75 leading-relaxed">
              Sorry, the page you are looking for doesn’t exist or may have been
              moved.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3 bg-[#9c0d38] hover:bg-[#2b303a] text-white font-semibold rounded-lg shadow-md transition-all duration-200 text-sm"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 bg-[#e9edde] hover:bg-[#2b303a]/10 text-[#2b303a] font-semibold rounded-lg border border-[#2b303a]/20 transition-all duration-200 text-sm"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
