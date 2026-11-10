import Link from "next/link";
import Image from "next/image";
import CurrentYear from "@/components/CurrentYear";

export default function Footer() {
  return (
    <footer className="bg-[#2b303a] text-[#e9edde] border-t border-[#9c0d38]/35 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="relative w-32 h-10 flex items-center">
              <Image
                src="/logo.svg"
                alt="PSA Educational Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-[#e9edde]/75 leading-relaxed">
              Empowering learners through adult literacy, junior/senior school
              preparation, and professional computer training since 2006.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-[#e9edde]/80">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#9c0d38] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#9c0d38] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#9c0d38] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="hover:text-[#9c0d38] transition-colors"
                >
                  Portal Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Head Office */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Head Office
            </h4>
            <p className="text-sm text-[#e9edde]/80 leading-relaxed">
              4, Birrel Avenue, Opposite Magistrate Court, Sabo, Yaba, Lagos
              State.
            </p>
          </div>

          {/* Branch Office */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Branch Office
            </h4>
            <p className="text-sm text-[#e9edde]/80 leading-relaxed">
              2, Ondo Close, Off Odolowu Street, Ijesha, Surulere, Lagos State.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 text-center text-xs text-[#e9edde]/60">
          <p>
            &copy; <CurrentYear /> PSA Educational. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
