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
              className="flex-shrink-0 flex items-center cursor-pointer text-left"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Image
                src="/tai_nobg.png"
                alt="Taiwan America Initiative"
                width={500}
                height={188}
                className="h-36 w-auto"
              />
            </button>

            <div className="hidden md:flex space-x-8 items-center">
              <a
                href="#about"
                className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#focus"
                className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
              >
                Focus Areas
              </a>
              <a
                href="#startup"
                className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
              >
                Startups
              </a>
              <a
                href="#events"
                className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
              >
                Events
              </a>
              <a
                href="#community"
                className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
              >
                Community
              </a>
              <button className="gradient-pill text-white px-5 py-2.5 rounded-full font-semibold transition-colors shadow-lg shadow-slate-200">
                Join Initiative
              </button>
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
            <a
              href="#about"
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#focus"
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Focus Areas
            </a>
            <a
              href="#startup"
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Startups
            </a>
            <a
              href="#events"
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </a>
            <a
              href="#community"
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </a>
            <div className="pt-4">
              <button className="w-full gradient-pill text-white px-5 py-3 rounded-lg font-semibold transition-colors">
                Join Initiative
              </button>
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
              Non-Governmental Community Platform
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              Bridging Taiwan & America through bold, people-first collaboration.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-700 leading-relaxed">
              TAI powers a new generation of founders, cultural leaders, and civic
              builders by connecting Taipei, the diaspora, and the United States
              through a shared vision of democratic partnership.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-full text-white font-semibold text-lg transition-all shadow-xl shadow-slate-200 gradient-pill flex items-center justify-center gap-2">
                Start Collaborating <i className="ph ph-arrow-right"></i>
              </button>
              <button className="px-8 py-4 rounded-full bg-white text-slate-700 border border-slate-200 font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center">
                Learn Our Mission
              </button>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-taiwan-blue"></span>
                <span>People-to-people diplomacy</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-taiwan-red"></span>
                <span>Innovation & startup exchange</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel rounded-3xl p-8 shadow-2xl shadow-slate-200/80">
              <div className="rounded-2xl bg-hero-sheen p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                    TAI Impact
                  </span>
                  <i className="ph ph-sparkle text-2xl"></i>
                </div>
                <h2 className="text-3xl font-bold mb-4">The bridge for modern civic leadership.</h2>
                <p className="text-sm text-white/80">
                  Flagship programs for founders, culture makers, and community
                  organizers committed to the Taiwan-US partnership.
                </p>
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
              A shared home for cross-border collaboration
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Taiwan America Initiative is a community-powered platform that
              connects founders, policymakers, and creatives committed to
              democratic resilience. We design programs that strengthen
              connections across Taipei, Silicon Valley, and every city in
              between.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Cultural Exchange
              </h3>
              <p className="text-sm text-slate-600">
                Curated storytelling and education programs that celebrate
                Taiwanese heritage and Taiwanese American identity.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Policy Dialogue
              </h3>
              <p className="text-sm text-slate-600">
                Thoughtful forums connecting civic leaders and community members
                to advance shared democratic values.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="focus" className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Focus areas that move the mission forward
              </h2>
              <p className="text-slate-600 mt-3 max-w-2xl">
                From startup acceleration to cultural diplomacy, each initiative
                is designed to strengthen the Taiwan-US relationship at every
                level.
              </p>
            </div>
            <button className="gradient-pill text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-lg shadow-slate-200 w-fit">
              Explore Programs
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white border border-slate-100 rounded-2xl p-6 card-hover">
              <div className="w-12 h-12 rounded-full bg-taiwan-blue/10 flex items-center justify-center mb-4">
                <i className="ph ph-globe text-2xl text-taiwan-blue"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Global Engagement
              </h3>
              <p className="text-sm text-slate-600">
                Bilateral delegations, student exchanges, and community events
                that connect diaspora leaders.
              </p>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 card-hover">
              <div className="w-12 h-12 rounded-full bg-taiwan-red/10 flex items-center justify-center mb-4">
                <i className="ph ph-lightning text-2xl text-taiwan-red"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Innovation & Startups
              </h3>
              <p className="text-sm text-slate-600">
                Programs that power cross-border partnerships, talent pipelines,
                and investor connectivity.
              </p>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 card-hover">
              <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center mb-4">
                <i className="ph ph-users-three text-2xl text-slate-700"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Community Stewardship
              </h3>
              <p className="text-sm text-slate-600">
                Volunteer-powered networks that mentor future leaders and
                cultivate long-term partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="startup" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5 mb-12 lg:mb-0 flex flex-col justify-center">
              <span className="inline-flex items-center py-1.5 px-4 w-fit rounded-full text-white text-xs font-bold uppercase tracking-[0.2em] mb-6 gradient-pill">
                New Initiative
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                The TAI Startup Ecosystem
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We are building a dedicated bridge for entrepreneurs. Whether you are
                a Taiwanese startup looking West or a US founder seeking engineering
                talent in Taipei, our ecosystem provides the critical resources you
                need.
              </p>

              <div className="space-y-6 mt-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center">
                    <i className="ph ph-rocket-launch text-2xl text-slate-700"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">
                      Founder-to-Founder Mentorship
                    </h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Direct access to successful founders who have navigated
                      cross-border challenges.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center">
                    <i className="ph ph-trend-up text-2xl text-slate-700"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Angel & VC Network</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Exclusive pitch sessions with investors specifically looking for
                      TW-US synergy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <button className="gradient-pill text-white px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center shadow-lg shadow-slate-200">
                  Join the Network <i className="ph ph-arrow-right ml-2"></i>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">


                <div className="sm:col-span-2 bg-hero-sheen p-8 rounded-2xl relative overflow-hidden group cursor-pointer transition-transform hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-60 -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-white/15 p-3 rounded-lg backdrop-blur-md">
                        <i className="ph ph-presentation-chart text-2xl text-white"></i>
                      </div>
                      <i className="ph ph-arrow-up-right text-white opacity-50 text-2xl group-hover:opacity-100 transition-opacity"></i>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Annual Pitch Competition
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Every summer, we host the largest cross-border demo day.
                      Applications open in March.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Upcoming Gatherings
              </h2>
              <p className="text-slate-600">Join us in person or virtually.</p>
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
                <i className="ph ph-microphone-stage text-6xl text-slate-300"></i>
                <div className="absolute top-4 right-4 gradient-pill px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide text-white shadow-sm">
                  Hybrid
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-slate-500 mb-2 font-medium">
                  Oct 15, 2024 • 6:00 PM EST
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                  Voices of the Diaspora: Panel
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  A discussion with leading Taiwanese American authors on identity and
                  storytelling.
                </p>
                <button className="text-sm font-semibold text-slate-900 flex items-center">
                  Register Now <i className="ph ph-caret-right ml-1"></i>
                </button>
              </div>
            </div>

            <div className="group border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className="bg-slate-100 h-48 flex items-center justify-center relative overflow-hidden">
                <i className="ph ph-coffee text-6xl text-slate-300"></i>
                <div className="absolute top-4 right-4 gradient-pill px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide text-white shadow-sm">
                  Taipei
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-slate-500 mb-2 font-medium">
                  Nov 02, 2024 • 10:00 AM CST
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                  Morning Coffee & Tech Talk
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Casual networking event for software engineers and startup founders
                  in Taipei.
                </p>
                <button className="text-sm font-semibold text-slate-900 flex items-center">
                  Register Now <i className="ph ph-caret-right ml-1"></i>
                </button>
              </div>
            </div>

            <div className="group border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className="bg-slate-100 h-48 flex items-center justify-center relative overflow-hidden">
                <i className="ph ph-monitor-play text-6xl text-slate-300"></i>
                <div className="absolute top-4 right-4 gradient-pill px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide text-white shadow-sm">
                  Virtual
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-slate-500 mb-2 font-medium">
                  Nov 20, 2024 • 8:00 PM EST
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                  Policy Roundtable
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Understanding the impact of recent legislation on international
                  trade and travel.
                </p>
                <button className="text-sm font-semibold text-slate-900 flex items-center">
                  Register Now <i className="ph ph-caret-right ml-1"></i>
                </button>
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
            Join the Movement
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            Ready to shape the future of <br className="hidden md:block" />
            Taiwan-US collaboration?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Join over 4,000 members driving innovation, culture, and policy.
            Get exclusive invites to events, mentorship opportunities, and our
            weekly digest.
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
                alert("Thank you for subscribing! We will be in touch shortly.")
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
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
                A non-profit dedicated to strengthening the bond between Taiwan and
                the US through people-to-people diplomacy.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-slate-400 hover:text-slate-900 transition-colors"
                >
                  <i className="ph-fill ph-twitter-logo text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-slate-900 transition-colors"
                >
                  <i className="ph-fill ph-linkedin-logo text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-slate-900 transition-colors"
                >
                  <i className="ph-fill ph-instagram-logo text-2xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Initiative</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" className="hover:text-slate-900">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Leadership
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Financials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Event Archive
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Media Kit
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" className="hover:text-slate-900">
                    partnerships@tai.org
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    press@tai.org
                  </a>
                </li>
                <li className="pt-2">
                  123 Innovation Dr.
                  <br />
                  San Jose, CA 95110
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>© 2024 Taiwan America Initiative. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-900">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-slate-900">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
