"use client";

import Image from "next/image";
import { useState } from "react";

export default function TALECPage() {
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
              <a href="/taba" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">TABA</a>
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
            <a href="/taba" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>TABA</a>
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
              TAI Program · Language, Education & Culture
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              Taiwan-America Language, Education, and Culture
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-700 leading-relaxed">
              TALEC deepens Taiwan-U.S. understanding through language exchange,
              education, and cultural programming. We connect people who want to
              learn, teach, and celebrate the rich cultures that define both sides
              of this partnership.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="https://discord.gg/KFqhjzVnvz" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full text-white font-semibold text-lg transition-all shadow-xl shadow-slate-200 gradient-pill flex items-center justify-center gap-2">
                Join TALEC <i className="ph ph-arrow-right"></i>
              </a>
              <a href="#about" className="px-8 py-4 rounded-full bg-white text-slate-700 border border-slate-200 font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center">
                Learn More
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-taiwan-blue"></span>
                <span>Language Exchange</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-taiwan-red"></span>
                <span>Cultural Programming</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel rounded-3xl p-8 shadow-2xl shadow-slate-200/80">
              <div className="rounded-2xl bg-hero-sheen p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">TALEC</span>
                  <i className="ph ph-book-open text-2xl"></i>
                </div>
                <h2 className="text-3xl font-bold mb-4">Language is the bridge between cultures.</h2>
                <p className="text-sm text-white/80 mb-6">
                  Through shared language and cultural curiosity, TALEC builds the
                  human connections that strengthen the Taiwan-U.S. relationship.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5 backdrop-blur-md">
                    <i className="ph ph-translate text-lg"></i>
                    <span className="text-sm font-semibold">Language Exchange Programs</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5 backdrop-blur-md">
                    <i className="ph ph-student text-lg"></i>
                    <span className="text-sm font-semibold">Educational Initiatives</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5 backdrop-blur-md">
                    <i className="ph ph-music-notes text-lg"></i>
                    <span className="text-sm font-semibold">Cultural Events & Arts</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-white shadow-lg shadow-slate-200 flex items-center justify-center text-taiwan-blue">
              <i className="ph ph-book-open text-2xl"></i>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-white text-xs font-semibold uppercase tracking-[0.2em] gradient-pill">
              About TALEC
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-5 mb-4">
              Understanding each other starts with language and culture
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              TALEC is TAI's language, education, and culture program. We believe
              that deep, lasting Taiwan-U.S. relations are built person-to-person —
              through shared language, mutual curiosity, and genuine cultural
              appreciation.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              TALEC creates structured and informal opportunities for Mandarin and
              English speakers to learn from one another, for educators to share
              best practices across borders, and for communities to celebrate
              Taiwanese and American culture together.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover">
              <i className="ph ph-translate text-2xl text-taiwan-blue mb-3 block"></i>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Language Exchange</h3>
              <p className="text-sm text-slate-600">Paired sessions connecting Mandarin and English speakers for mutual language practice and cross-cultural conversation.</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover">
              <i className="ph ph-student text-2xl text-taiwan-blue mb-3 block"></i>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Education Programs</h3>
              <p className="text-sm text-slate-600">Workshops, courses, and resources that support language learning and cross-cultural education for all ages.</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover">
              <i className="ph ph-music-notes text-2xl text-taiwan-blue mb-3 block"></i>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Cultural Events</h3>
              <p className="text-sm text-slate-600">Film screenings, food festivals, art showcases, and celebrations of Taiwanese and American culture and heritage.</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover">
              <i className="ph ph-chalkboard-teacher text-2xl text-taiwan-blue mb-3 block"></i>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Educator Network</h3>
              <p className="text-sm text-slate-600">A community of teachers and educators in both Taiwan and the U.S. sharing resources and cross-border pedagogy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Three pillars of cultural connection
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              TALEC operates across three interconnected areas to foster genuine
              mutual understanding between Taiwan and the United States.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white border border-slate-100 rounded-2xl p-8 card-hover text-center">
              <div className="w-14 h-14 rounded-full bg-taiwan-blue/10 flex items-center justify-center mx-auto mb-5">
                <i className="ph ph-chat-dots text-2xl text-taiwan-blue"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Language</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Structured language exchange and conversation programs pairing
                Mandarin and English speakers for real-world practice and
                friendship.
              </p>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-8 card-hover text-center">
              <div className="w-14 h-14 rounded-full bg-taiwan-red/10 flex items-center justify-center mx-auto mb-5">
                <i className="ph ph-graduation-cap text-2xl text-taiwan-red"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Education</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Educational programming and resources that help people understand
                both countries' history, civic institutions, and social values.
              </p>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-8 card-hover text-center">
              <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center mx-auto mb-5">
                <i className="ph ph-palette text-2xl text-slate-700"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Culture</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Events, arts, food, and storytelling that celebrate what makes
                Taiwanese and American culture unique — and what we share.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-white relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-hero-sheen"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-widest mb-6">
            Join TALEC
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            Ready to deepen your cross-cultural understanding?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you want to learn Mandarin, share your culture, or simply
            connect with people across the Taiwan-U.S. divide — TALEC has a place
            for you. Join our community on Discord to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://discord.gg/KFqhjzVnvz" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-50 transition-colors shadow-lg flex items-center justify-center gap-2 text-lg">
              <i className="ph-fill ph-discord-logo text-xl"></i> Join on Discord
            </a>
            <a href="https://www.instagram.com/tai.org.tw" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-colors backdrop-blur-md flex items-center justify-center gap-2 text-lg">
              <i className="ph-fill ph-instagram-logo text-xl"></i> Follow Us
            </a>
          </div>
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
                <li><a href="/taba" className="hover:text-slate-900">TABA — Business Accelerator</a></li>
                <li><a href="/talec" className="hover:text-slate-900 font-medium text-taiwan-blue">TALEC — Language & Culture</a></li>
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
