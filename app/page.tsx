"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <nav
        className={`fixed w-full z-50 glass-nav transition-all duration-300 ${
          isScrolled ? "shadow-sm" : ""
        }`}
        id="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button
              type="button"
              className="flex-shrink-0 flex items-center gap-3 cursor-pointer text-left"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Image
                src="/favitai.png"
                alt="Taiwan America Initiative"
                width={56}
                height={56}
                className="h-14 w-14"
              />
              <span className="hidden md:block text-base text-slate-600 font-medium">臺美倡議 Taiwan America Initiative</span>
            </button>

            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                About
              </a>
              <a href="#programs" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                Programs
              </a>
              <a href="#events" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                Events
              </a>
              <a href="#community" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                Community
              </a>
              <a href="https://discord.gg/KFqhjzVnvz" target="_blank" rel="noopener noreferrer" className="gradient-pill text-white px-5 py-2.5 rounded-full font-semibold transition-colors shadow-lg shadow-slate-200">
                Get Involved
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                id="mobile-menu-btn"
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <i className="ph ph-list text-2xl"></i>
              </button>
            </div>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden bg-white border-t border-slate-100 absolute w-full`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
            <a href="#about" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
            <a href="#programs" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>
              Programs
            </a>
            <a href="#events" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>
              Events
            </a>
            <a href="#community" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>
              Community
            </a>
            <div className="pt-4">
              <a href="https://discord.gg/KFqhjzVnvz" target="_blank" rel="noopener noreferrer" className="block w-full text-center gradient-pill text-white px-5 py-3 rounded-lg font-semibold transition-colors">
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden hero-gradient">
        <div className="absolute inset-0 bg-subtle-pattern opacity-50"></div>
        <div className="absolute top-10 right-0 w-96 h-96 bg-taiwan-blue/10 rounded-full blur-3xl opacity-70 -z-10 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-taiwan-red/10 rounded-full blur-3xl opacity-70 -z-10 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="text-left">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-white text-xs font-semibold uppercase tracking-[0.2em] mb-6 gradient-pill">
              Nonprofit · Taiwan-U.S. Partnership
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              Advancing Taiwan-America relations through culture, language, and technology.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-700 leading-relaxed">
              TAI is a nonprofit dedicated to deepening the bond between Taiwan and
              the United States through three flagship programs spanning faith &
              community, business acceleration, and cultural & linguistic exchange.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#programs" className="px-8 py-4 rounded-full text-white font-semibold text-lg transition-all shadow-xl shadow-slate-200 gradient-pill flex items-center justify-center gap-2">
                Explore Our Programs <i className="ph ph-arrow-right"></i>
              </a>
              <a href="#about" className="px-8 py-4 rounded-full bg-white text-slate-700 border border-slate-200 font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center">
                Learn Our Mission
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel rounded-3xl p-8 shadow-2xl shadow-slate-200/80">
              <div className="rounded-2xl bg-hero-sheen p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                    TAI Programs
                  </span>
                  <i className="ph ph-sparkle text-2xl"></i>
                </div>
                <h2 className="text-3xl font-bold mb-4">Three programs. One mission.</h2>
                <p className="text-sm text-white/80 mb-6">
                  TAF, TABA, and TALEC each serve a distinct community — united by a
                  shared commitment to strengthening Taiwan-U.S. ties.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5 backdrop-blur-md">
                    <i className="ph ph-cross text-lg"></i>
                    <span className="text-sm font-semibold">TAF · Truth Alliance Fellowship</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5 backdrop-blur-md">
                    <i className="ph ph-rocket-launch text-lg"></i>
                    <span className="text-sm font-semibold">TABA · Business Accelerator</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5 backdrop-blur-md">
                    <i className="ph ph-book-open text-lg"></i>
                    <span className="text-sm font-semibold">TALEC · Language, Education & Culture</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-white shadow-lg shadow-slate-200 flex items-center justify-center text-taiwan-blue">
              <i className="ph ph-star-four text-2xl"></i>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-white text-xs font-semibold uppercase tracking-[0.2em] gradient-pill">
              About TAI
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-5 mb-4">
              A nonprofit built around the Taiwan-America partnership
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Taiwan America Initiative (TAI) is a nonprofit dedicated to advancing
              Taiwan-U.S. relations through cultural and linguistic exchange and
              technology co-development. We bring together people of faith,
              entrepreneurs, language learners, and cultural leaders across both
              sides of the Pacific.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Faith & Community
              </h3>
              <p className="text-sm text-slate-600">
                A Christian ecumenical, bilingual, and international community
                rooted in shared faith and cross-cultural friendship.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Business Innovation
              </h3>
              <p className="text-sm text-slate-600">
                Accelerating businesses that bridge Taiwan and America through
                mentorship, networks, and cross-border resources.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover sm:col-span-2">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Language & Cultural Exchange
              </h3>
              <p className="text-sm text-slate-600">
                Educational programs and cultural initiatives that deepen mutual
                understanding between Taiwanese and American communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Three programs, one mission
              </h2>
              <p className="text-slate-600 mt-3 max-w-2xl">
                Each TAI program serves a distinct community while advancing our
                shared vision of a deeper, lasting Taiwan-U.S. partnership.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <a href="https://tai.org.tw/taf" className="bg-white border border-slate-100 rounded-2xl p-6 card-hover block group">
              <div className="w-12 h-12 rounded-full bg-taiwan-blue/10 flex items-center justify-center mb-4">
                <i className="ph ph-cross text-2xl text-taiwan-blue"></i>
              </div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold text-slate-900">TAF</h3>
                <i className="ph ph-arrow-up-right text-slate-300 group-hover:text-slate-500 transition-colors"></i>
              </div>
              <p className="text-sm font-medium text-taiwan-blue mb-3">Truth Alliance Fellowship</p>
              <p className="text-sm text-slate-600">
                A Christian ecumenical, bilingual, and international community.
                We gather for shared meals, prayer sessions, and cross-cultural
                fellowship across Taiwan and the United States.
              </p>
            </a>
            <a href="https://tai.org.tw/taba" className="bg-white border border-slate-100 rounded-2xl p-6 card-hover block group">
              <div className="w-12 h-12 rounded-full bg-taiwan-red/10 flex items-center justify-center mb-4">
                <i className="ph ph-rocket-launch text-2xl text-taiwan-red"></i>
              </div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold text-slate-900">TABA</h3>
                <i className="ph ph-arrow-up-right text-slate-300 group-hover:text-slate-500 transition-colors"></i>
              </div>
              <p className="text-sm font-medium text-taiwan-red mb-3">Taiwan-America Business Accelerator</p>
              <p className="text-sm text-slate-600">
                A business accelerator built for companies that connect Taiwan
                and America. We provide mentorship, networks, and resources to
                help cross-border ventures thrive.
              </p>
            </a>
            <a href="https://tai.org.tw/talec" className="bg-white border border-slate-100 rounded-2xl p-6 card-hover block group">
              <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center mb-4">
                <i className="ph ph-book-open text-2xl text-slate-700"></i>
              </div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold text-slate-900">TALEC</h3>
                <i className="ph ph-arrow-up-right text-slate-300 group-hover:text-slate-500 transition-colors"></i>
              </div>
              <p className="text-sm font-medium text-slate-600 mb-3">Taiwan-America Language, Education, and Culture</p>
              <p className="text-sm text-slate-600">
                Cultural and educational programs that foster language learning,
                mutual understanding, and lasting people-to-people ties between
                Taiwan and the United States.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section id="events" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Upcoming Gatherings
              </h2>
              <p className="text-slate-600">Join us in person or virtually across our three programs.</p>
            </div>
            <a
              href="#"
              className="hidden md:inline-flex items-center gap-2 text-slate-900 font-semibold border-b-2 border-taiwan-red pb-1 hover:text-slate-600 hover:border-slate-600 transition-colors"
            >
              View All Events <i className="ph ph-arrow-right"></i>
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className="bg-slate-100 h-48 flex items-center justify-center relative overflow-hidden">
                <i className="ph ph-hands-praying text-6xl text-slate-300"></i>
                <div className="absolute top-4 right-4 gradient-pill px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide text-white shadow-sm">
                  TAF
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                  TAF Fellowship Meal
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  A bilingual gathering for shared meals and prayer, open to the
                  entire TAF community — Taiwanese, American, and international.
                </p>
                <a href="https://tai.org.tw/taf" className="text-sm font-semibold text-slate-900 flex items-center">
                  Learn More <i className="ph ph-caret-right ml-1"></i>
                </a>
              </div>
            </div>

            <div className="group border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className="bg-slate-100 h-48 flex items-center justify-center relative overflow-hidden">
                <i className="ph ph-rocket-launch text-6xl text-slate-300"></i>
                <div className="absolute top-4 right-4 gradient-pill px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide text-white shadow-sm">
                  TABA
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                  TABA Founder Meetup
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Networking and mentorship for entrepreneurs building across the
                  Taiwan-U.S. corridor.
                </p>
                <a href="https://tai.org.tw/taba" className="text-sm font-semibold text-slate-900 flex items-center">
                  Learn More <i className="ph ph-caret-right ml-1"></i>
                </a>
              </div>
            </div>

            <div className="group border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className="bg-slate-100 h-48 flex items-center justify-center relative overflow-hidden">
                <i className="ph ph-book-open text-6xl text-slate-300"></i>
                <div className="absolute top-4 right-4 gradient-pill px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide text-white shadow-sm">
                  TALEC
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                  TALEC Language Exchange
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Regular language and cultural exchange sessions pairing Mandarin
                  and English speakers for mutual learning.
                </p>
                <a href="https://tai.org.tw/talec" className="text-sm font-semibold text-slate-900 flex items-center">
                  Learn More <i className="ph ph-caret-right ml-1"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center md:hidden">
            <a href="#" className="text-slate-900 font-semibold border-b-2 border-taiwan-red pb-1">
              View All Events
            </a>
          </div>
        </div>
      </section>

      <section
        id="community"
        className="py-24 text-white relative overflow-hidden bg-slate-900"
      >
        <div className="absolute inset-0 bg-hero-sheen"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-widest mb-6">
            Get Involved
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            Ready to be part of the <br className="hidden md:block" />
            Taiwan-America community?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether through faith, business, or cultural exchange — there is a place
            for you in TAI. Stay connected with our latest events, programs, and
            opportunities.
          </p>

          <form className="max-w-lg mx-auto mb-8 bg-white/10 p-2 rounded-full backdrop-blur-xl border border-white/20 flex shadow-2xl shadow-blue-900/20">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-transparent border-none text-white placeholder-white/60 px-6 py-3 focus:outline-none rounded-l-full"
              required
            />
            <button
              type="button"
              onClick={() =>
                alert("Thank you for joining! We will be in touch shortly.")
              }
              className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition-colors shadow-lg"
            >
              Join Now
            </button>
          </form>
          <p className="text-xs text-white/60">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <div className="mb-4">
                <Image
                  src="/tai_nobg.png"
                  alt="Taiwan America Initiative"
                  width={460}
                  height={173}
                  className="h-32 w-auto"
                />
              </div>
              <div className="text-slate-500 text-sm mb-6 space-y-1">
                <p className="flex items-center gap-1.5"><i className="ph ph-map-pin"></i> Washington D.C., United States</p>
                <p className="flex items-center gap-1.5"><i className="ph ph-map-pin"></i> Taipei, Taiwan</p>
              </div>
              <div className="flex space-x-4">
                <a href="https://facebook.com/tai.org.tw" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="TAI Facebook">
                  <i className="ph-fill ph-facebook-logo text-2xl"></i>
                </a>
                <a href="https://www.instagram.com/tai.org.tw" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="TAI Instagram">
                  <i className="ph-fill ph-instagram-logo text-2xl"></i>
                </a>
                <a href="https://www.threads.com/@tai.org.tw" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="TAI Threads">
                  <i className="ph-fill ph-threads-logo text-2xl"></i>
                </a>
                <a href="https://discord.gg/KFqhjzVnvz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="TAI Discord">
                  <i className="ph-fill ph-discord-logo text-2xl"></i>
                </a>
                <a href="https://linkedin.com/company/tainitiative" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="TAI LinkedIn">
                  <i className="ph-fill ph-linkedin-logo text-2xl"></i>
                </a>
                <a href="https://github.com/TAInitiative" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="TAI GitHub">
                  <i className="ph-fill ph-github-logo text-2xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Programs</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="https://tai.org.tw/taf" className="hover:text-slate-900 flex items-center gap-1.5"><i className="ph ph-cross"></i> TAF — Truth Alliance Fellowship</a>
                </li>
                <li>
                  <a href="https://tai.org.tw/taba" className="hover:text-slate-900 flex items-center gap-1.5"><i className="ph ph-rocket-launch"></i> TABA — Business Accelerator</a>
                </li>
                <li>
                  <a href="https://tai.org.tw/talec" className="hover:text-slate-900 flex items-center gap-1.5"><i className="ph ph-book-open"></i> TALEC — Language & Culture</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">TAF Community</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="https://www.facebook.com/groups/tafellowship" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 flex items-center gap-1.5">
                    <i className="ph-fill ph-facebook-logo"></i> Facebook Group
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/tafellowship/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 flex items-center gap-1.5">
                    <i className="ph-fill ph-instagram-logo"></i> Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="mailto:partnerships@tai.org.tw" className="hover:text-slate-900">
                    partnerships@tai.org.tw
                  </a>
                </li>
                <li>
                  <a href="mailto:press@tai.org.tw" className="hover:text-slate-900">
                    press@tai.org.tw
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>© 2026 Taiwan America Initiative. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-900">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
