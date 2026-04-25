"use client";

import Image from "next/image";
import { useState } from "react";

export default function TABAPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main>
      <nav className="fixed w-full z-50 glass-nav" id="navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/tai_nobg.png"
                alt="Taiwan America Initiative"
                width={500}
                height={188}
                className="h-36 w-auto"
              />
            </a>

            <div className="hidden md:flex space-x-8 items-center">
              <a href="/#about" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">About TAI</a>
              <a href="/#programs" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Programs</a>
              <a href="/taf" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">TAF</a>
              <a href="/talec" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">TALEC</a>
              <a href="https://discord.gg/KFqhjzVnvz" target="_blank" rel="noopener noreferrer" className="gradient-pill text-white px-5 py-2.5 rounded-full font-semibold transition-colors shadow-lg shadow-slate-200">
                Get Involved
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-expanded={mobileMenuOpen}
              >
                <i className="ph ph-list text-2xl"></i>
              </button>
            </div>
          </div>
        </div>

        <div className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden bg-white border-t border-slate-100 absolute w-full`}>
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
            <a href="/#about" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>About TAI</a>
            <a href="/#programs" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>Programs</a>
            <a href="/taf" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>TAF</a>
            <a href="/talec" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>TALEC</a>
            <div className="pt-4">
              <a href="https://discord.gg/KFqhjzVnvz" target="_blank" rel="noopener noreferrer" className="block w-full text-center gradient-pill text-white px-5 py-3 rounded-lg font-semibold transition-colors">
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden hero-gradient">
        <div className="absolute inset-0 bg-subtle-pattern opacity-50"></div>
        <div className="absolute top-10 right-0 w-96 h-96 bg-taiwan-blue/10 rounded-full blur-3xl opacity-70 -z-10 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-taiwan-red/10 rounded-full blur-3xl opacity-70 -z-10 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="text-left">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-white text-xs font-semibold uppercase tracking-[0.2em] mb-6 gradient-pill">
              TAI Program · Business Acceleration
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              Taiwan-America Business Accelerator
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-700 leading-relaxed">
              TABA accelerates businesses that connect Taiwan and America. Whether
              you are a Taiwanese startup expanding West or a U.S. founder building
              in Taipei, we give you the mentorship, networks, and resources to grow
              across the Pacific.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#apply" className="px-8 py-4 rounded-full text-white font-semibold text-lg transition-all shadow-xl shadow-slate-200 gradient-pill flex items-center justify-center gap-2">
                Apply to TABA <i className="ph ph-arrow-right"></i>
              </a>
              <a href="#about" className="px-8 py-4 rounded-full bg-white text-slate-700 border border-slate-200 font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center">
                Learn More
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-taiwan-blue"></span>
                <span>Cross-Border Mentorship</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-taiwan-red"></span>
                <span>Investor Network</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel rounded-3xl p-8 shadow-2xl shadow-slate-200/80">
              <div className="rounded-2xl bg-hero-sheen p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">Accelerator</span>
                  <i className="ph ph-rocket-launch text-2xl"></i>
                </div>
                <h2 className="text-3xl font-bold mb-4">Built for the Taiwan-U.S. corridor.</h2>
                <p className="text-sm text-white/80 mb-6">
                  Resources, connections, and expertise specifically designed for
                  entrepreneurs operating across both markets.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5 backdrop-blur-md">
                    <i className="ph ph-users text-lg"></i>
                    <span className="text-sm font-semibold">Founder-to-Founder Mentorship</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5 backdrop-blur-md">
                    <i className="ph ph-trend-up text-lg"></i>
                    <span className="text-sm font-semibold">Investor Introductions</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5 backdrop-blur-md">
                    <i className="ph ph-globe text-lg"></i>
                    <span className="text-sm font-semibold">Market Entry Support</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-white shadow-lg shadow-slate-200 flex items-center justify-center text-taiwan-blue">
              <i className="ph ph-rocket-launch text-2xl"></i>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-white text-xs font-semibold uppercase tracking-[0.2em] gradient-pill">
              About TABA
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-5 mb-4">
              Accelerating the next generation of Taiwan-U.S. businesses
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              TABA is TAI's business accelerator program, purpose-built for
              companies and entrepreneurs who operate across the Taiwan-U.S.
              corridor. We understand the unique challenges of building cross-border
              businesses — from navigating two distinct regulatory environments to
              bridging cultural and linguistic differences.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Through mentorship from seasoned cross-border founders, introductions
              to investors with Taiwan-U.S. expertise, and a peer network of
              like-minded entrepreneurs, TABA gives you what you need to grow.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover">
              <i className="ph ph-users text-2xl text-taiwan-red mb-3 block"></i>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Mentorship</h3>
              <p className="text-sm text-slate-600">Direct access to founders and operators who have successfully built across Taiwan and the U.S.</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover">
              <i className="ph ph-trend-up text-2xl text-taiwan-red mb-3 block"></i>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Investor Network</h3>
              <p className="text-sm text-slate-600">Introductions to angels and VCs who specifically seek Taiwan-U.S. cross-border opportunities.</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover">
              <i className="ph ph-globe text-2xl text-taiwan-red mb-3 block"></i>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Market Entry</h3>
              <p className="text-sm text-slate-600">Guidance on regulatory, cultural, and operational considerations for entering both markets.</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover">
              <i className="ph ph-handshake text-2xl text-taiwan-red mb-3 block"></i>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Partnerships</h3>
              <p className="text-sm text-slate-600">Facilitated introductions to strategic partners, distributors, and collaborators on both sides of the Pacific.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Who TABA is for
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              TABA serves entrepreneurs at multiple stages, building businesses that
              span both the Taiwanese and American markets.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white border border-slate-100 rounded-2xl p-8 card-hover">
              <div className="w-14 h-14 rounded-full bg-taiwan-blue/10 flex items-center justify-center mb-5">
                <i className="ph ph-airplane-tilt text-2xl text-taiwan-blue"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Taiwanese Startups Going West</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Taiwanese founders and companies looking to expand into the U.S.
                market, access American capital, or hire American talent.
              </p>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-8 card-hover">
              <div className="w-14 h-14 rounded-full bg-taiwan-red/10 flex items-center justify-center mb-5">
                <i className="ph ph-map-pin text-2xl text-taiwan-red"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">U.S. Founders Building in Taiwan</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                American entrepreneurs seeking to access Taiwan's engineering
                talent, manufacturing ecosystem, or semiconductor supply chain.
              </p>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-8 card-hover">
              <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center mb-5">
                <i className="ph ph-arrows-left-right text-2xl text-slate-700"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Cross-Border Tech Teams</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Teams already operating across both markets looking to deepen
                partnerships, raise funding, or scale their operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Pitch */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 mb-12 lg:mb-0">
              <span className="inline-flex items-center py-1.5 px-4 w-fit rounded-full text-white text-xs font-bold uppercase tracking-[0.2em] mb-6 gradient-pill">
                Flagship Event
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Annual Pitch Competition
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Each year, TABA hosts a cross-border pitch competition and demo day,
                connecting Taiwan-U.S. startups with investors, corporate partners,
                and media from both sides of the Pacific.
              </p>
              <p className="text-slate-600 mb-8">
                Competing teams receive feedback from experienced cross-border
                investors, visibility with TABA's partner network, and the chance to
                forge lasting connections that accelerate their growth.
              </p>
              <a href="https://discord.gg/KFqhjzVnvz" target="_blank" rel="noopener noreferrer" className="gradient-pill text-white px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center shadow-lg shadow-slate-200">
                Stay Updated <i className="ph ph-arrow-right ml-2"></i>
              </a>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-hero-sheen p-10 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-60 -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="bg-white/15 p-4 rounded-lg backdrop-blur-md w-fit mb-6">
                    <i className="ph ph-presentation-chart text-3xl text-white"></i>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">
                    Pitch to investors on both sides of the Pacific.
                  </h4>
                  <p className="text-white/80 mb-8">
                    The TABA Annual Pitch Competition brings together the best
                    cross-border startups with investors who understand the
                    Taiwan-U.S. opportunity.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-5 backdrop-blur-md">
                      <i className="ph ph-users-three text-2xl text-white mb-2 block"></i>
                      <p className="text-white font-semibold text-sm">Investor judges from Taiwan & the U.S.</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-5 backdrop-blur-md">
                      <i className="ph ph-trophy text-2xl text-white mb-2 block"></i>
                      <p className="text-white font-semibold text-sm">Prizes, partnerships & follow-on intros</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="apply" className="py-24 text-white relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-hero-sheen"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-widest mb-6">
            Apply to TABA
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            Ready to build your Taiwan-U.S. business?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Join our community on Discord to connect with the TABA team, get
            updates on upcoming cohorts, and meet other cross-border founders.
          </p>
          <a href="https://discord.gg/KFqhjzVnvz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-50 transition-colors shadow-lg text-lg">
            <i className="ph-fill ph-discord-logo text-xl"></i> Join on Discord
          </a>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="mb-4">
                <Image src="/tai_nobg.png" alt="Taiwan America Initiative" width={460} height={173} className="h-32 w-auto" />
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
                A nonprofit advancing Taiwan-U.S. relations through cultural and linguistic exchange and technology co-development.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com/tai.org.tw" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="TAI Facebook"><i className="ph-fill ph-facebook-logo text-2xl"></i></a>
                <a href="https://www.instagram.com/tai.org.tw" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="TAI Instagram"><i className="ph-fill ph-instagram-logo text-2xl"></i></a>
                <a href="https://www.threads.com/@tai.org.tw" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="TAI Threads"><i className="ph-fill ph-threads-logo text-2xl"></i></a>
                <a href="https://discord.gg/KFqhjzVnvz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="TAI Discord"><i className="ph-fill ph-discord-logo text-2xl"></i></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Programs</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="/taf" className="hover:text-slate-900">TAF — Truth Alliance Fellowship</a></li>
                <li><a href="/taba" className="hover:text-slate-900 font-medium text-taiwan-red">TABA — Business Accelerator</a></li>
                <li><a href="/talec" className="hover:text-slate-900">TALEC — Language & Culture</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">TAF Community</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="https://www.facebook.com/groups/tafellowship" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 flex items-center gap-1.5"><i className="ph-fill ph-facebook-logo"></i> Facebook Group</a></li>
                <li><a href="https://www.instagram.com/tafellowship/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 flex items-center gap-1.5"><i className="ph-fill ph-instagram-logo"></i> Instagram</a></li>
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
