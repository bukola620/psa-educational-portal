"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const slides = [
  {
    image: "/JAMB.jpg",
    title: "UTME & SSCE Academic Excellence",
    subtitle:
      "Comprehensive exam preparation designed to secure your university admissions and top academic results.",
    tag: "UTME / SSCE Prep",
  },
  {
    image: "/IT.jpg",
    title: "Hands-on Practical IT & Computer Training",
    subtitle:
      "Master digital literacy, programming foundations, and practical software applications for the modern workforce.",
    tag: "IT & Digital Skills",
  },
  {
    image: "/classroom.jpg",
    title: "Dedicated Adult & Secondary Education",
    subtitle:
      "Empowering learners across Lagos State since July 15th, 2006 with interactive lectures and expert instruction.",
    tag: "Adult Literacy & Prep",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#e9edde] text-[#2b303a] font-sans">
      {/* Reusable Navbar */}
      <Navbar />

      {/* Hero Carousel Section */}
      <section className="relative w-full overflow-hidden bg-[#2b303a] text-white">
        <div className="relative min-h-137.5 sm:min-h-155 flex items-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#2b303a]/95 via-[#2b303a]/80 to-[#2b303a]/40" />
              </div>

              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-2xl space-y-4">
                    <span className="inline-block px-3 py-1 bg-[#9c0d38] text-[#e9edde] text-xs font-semibold rounded-full uppercase tracking-wider border border-[#9c0d38]/50 shadow-md">
                      {slide.tag}
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-[#e9edde] leading-tight tracking-tight">
                      {slide.title}
                    </h1>
                    <p className="text-base sm:text-lg text-[#e9edde]/85 leading-relaxed">
                      {slide.subtitle}
                    </p>

                    <div className="pt-4 flex flex-wrap gap-4">
                      <Link
                        href="/signup"
                        className="px-6 py-3.5 bg-[#9c0d38] hover:bg-[#9c0d38]/90 text-white font-semibold rounded-lg shadow-lg transition-all duration-200"
                      >
                        Register for Portal
                      </Link>
                      <Link
                        href="/about"
                        className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-[#e9edde] font-semibold rounded-lg border border-white/20 transition-all duration-200"
                      >
                        Learn Our History
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Controls */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-[#9c0d38]"
                    : "w-2.5 bg-[#e9edde]/40 hover:bg-[#e9edde]/70"
                }`}
              />
            ))}
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === 0 ? slides.length - 1 : prev - 1,
                )
              }
              className="p-2 rounded-full bg-black/30 hover:bg-[#9c0d38] text-white transition-colors"
              aria-label="Previous Slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % slides.length)
              }
              className="p-2 rounded-full bg-black/30 hover:bg-[#9c0d38] text-white transition-colors"
              aria-label="Next Slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Main Informational Content */}
      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Welcome / History Overview */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 bg-[#9c0d38]/10 text-[#9c0d38] font-semibold text-xs rounded-full uppercase tracking-wider border border-[#9c0d38]/20">
              Established July 15th, 2006
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2b303a] tracking-tight">
              Welcome to PSA Educational
            </h2>
            <p className="text-base sm:text-lg text-[#2b303a]/75 leading-relaxed">
              Located in Lagos State, Nigeria, PSA Educational began its journey
              as a dedicated adult literacy center. Over the years, we have
              expanded to include a premier preparatory center for junior and
              senior secondary students, alongside a specialized computer
              training hub.
            </p>
          </div>

          {/* Three Core Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#2b303a]/10 hover:border-[#9c0d38]/40 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#9c0d38]/10 text-[#9c0d38] flex items-center justify-center font-bold text-lg">
                  01
                </div>
                <h3 className="text-xl font-bold text-[#2b303a]">
                  Adult Literacy Center
                </h3>
                <p className="text-sm text-[#2b303a]/75 leading-relaxed">
                  Providing accessible, empowering education tailored to adults
                  looking to build foundational reading, writing, and analytical
                  skills.
                </p>
              </div>
              <div className="pt-6 border-t border-[#2b303a]/10 mt-6">
                <span className="text-xs font-semibold text-[#9c0d38] uppercase tracking-wider">
                  Foundational Program
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#2b303a]/10 hover:border-[#9c0d38]/40 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#9c0d38]/10 text-[#9c0d38] flex items-center justify-center font-bold text-lg">
                  02
                </div>
                <h3 className="text-xl font-bold text-[#2b303a]">
                  Preparatory Center (UTME / SSCE)
                </h3>
                <p className="text-sm text-[#2b303a]/75 leading-relaxed">
                  Rigorous academic coaching for junior and senior secondary
                  students, preparing them for external examinations and
                  successful university admissions.
                </p>
              </div>
              <div className="pt-6 border-t border-[#2b303a]/10 mt-6">
                <span className="text-xs font-semibold text-[#9c0d38] uppercase tracking-wider">
                  Academic Excellence
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#2b303a]/10 hover:border-[#9c0d38]/40 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#9c0d38]/10 text-[#9c0d38] flex items-center justify-center font-bold text-lg">
                  03
                </div>
                <h3 className="text-xl font-bold text-[#2b303a]">
                  Computer Training Center
                </h3>
                <p className="text-sm text-[#2b303a]/75 leading-relaxed">
                  Practical digital literacy and IT programs designed to equip
                  students with critical tech skills for academic and
                  professional growth.
                </p>
              </div>
              <div className="pt-6 border-t border-[#2b303a]/10 mt-6">
                <span className="text-xs font-semibold text-[#9c0d38] uppercase tracking-wider">
                  Digital Literacy &amp; IT
                </span>
              </div>
            </div>
          </div>

          {/* Campus Locations Showcase */}
          <section className="rounded-3xl bg-[#2b303a] p-8 sm:p-12 text-white shadow-xl border border-[#9c0d38]/20 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#e9edde]">
                Our Lagos Campuses
              </h2>
              <p className="text-sm text-[#e9edde]/75">
                Visit our Head Office or Branch Office to enroll or make
                inquiries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-3">
                <span className="inline-block px-3 py-1 bg-[#9c0d38] text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                  Head Office
                </span>
                <p className="text-[#e9edde] text-sm leading-relaxed">
                  4, Birrel Avenue, Opposite Magistrate Court, Sabo, Yaba, Lagos
                  State.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-3">
                <span className="inline-block px-3 py-1 bg-[#e9edde] text-[#2b303a] text-xs font-semibold rounded-full uppercase tracking-wider">
                  Branch Office
                </span>
                <p className="text-[#e9edde] text-sm leading-relaxed">
                  2, Ondo Close, Off Odolowu Street, Ijesha, Surulere, Lagos
                  State.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action Banner */}
          <div className="text-center space-y-6 py-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2b303a]">
              Ready to Start Your Journey?
            </h3>
            <p className="text-[#2b303a]/75 max-w-xl mx-auto text-sm sm:text-base">
              Create an account today to manage your registrations, track your
              journey, and access portal services.
            </p>
            <div>
              <Link
                href="/signup"
                className="inline-block px-8 py-4 bg-[#9c0d38] hover:bg-[#9c0d38]/90 text-white font-bold rounded-xl shadow-lg transition-all duration-200"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
