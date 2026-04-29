"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../LanguageContext";

const translations = {
  en: {
    navAbout: "About", navPrograms: "Programs", navEvents: "Events", navCommunity: "Community", navStaff: "Staff", navGetInvolved: "Get Involved",
    staffBadge: "Our Team", staffTitle: "The people behind TAI",
    staffBody: "Our leadership team brings together diverse expertise united by a shared mission.",
    austin_name: "Austin Hua",
    austin_fullname: "Seth Austin Harding",
    austin_role: "Founder & Chair",
    austin_bio: "Austin is the founder and chair of the Taiwan America Initiative. He is dedicated to building lasting bridges between Taiwan and the United States through faith, culture, and innovation.",
    mark_name: "Mark Chen",
    mark_fullname: "Hao-Yuan Chen",
    mark_role: "Co-Founder & President",
    mark_bio: "Mark is the co-founder and president of the Taiwan America Initiative. He leads the organization's day-to-day operations and strategic direction, driving TAI's mission forward across all three programs.",
    ctaBadge: "Get Involved", ctaTitle: "Join the Taiwan-America community",
    ctaBody: "Whether through faith, business, or cultural exchange — there is a place for you in TAI.",
    ctaBtn: "Join on Discord",
    footerLocations: "Locations", footerPrograms: "Programs", footerContact: "Contact",
    footerCopyright: "© 2026 Taiwan America Initiative (to be registered). All rights reserved.",
    locationUS: "Washington D.C., United States", locationTW: "Taipei, Taiwan",
    tafProgram: "TAF — Truth Alliance Fellowship", tabaProgram: "TABA — Business Accelerator", talecProgram: "TALEC — Language & Culture",
  },
  zh: {
    navAbout: "關於我們", navPrograms: "計畫項目", navEvents: "活動", navCommunity: "社群", navStaff: "團隊", navGetInvolved: "加入我們",
    staffBadge: "我們的團隊", staffTitle: "TAI 背後的人",
    staffBody: "我們的領導團隊匯聚多元專業，以共同使命為紐帶。",
    austin_name: "Austin Hua",
    austin_fullname: "華士頓",
    austin_role: "創辦人暨主席",
    austin_bio: "Austin 是臺美倡議的創辦人暨主席，致力於透過信仰、文化與創新，在臺灣與美國之間建立長久的橋樑。",
    mark_name: "Mark Chen",
    mark_fullname: "陳皓圓",
    mark_role: "共同創辦人暨理事長",
    mark_bio: "Mark 是臺美倡議的共同創辦人暨理事長，負責組織的日常運營與戰略方向，推動 TAI 三大計畫的使命向前邁進。",
    ctaBadge: "加入我們", ctaTitle: "加入臺美社群",
    ctaBody: "無論是透過信仰、商業或文化交流——TAI 都有屬於您的位置。",
    ctaBtn: "加入 Discord",
    footerLocations: "據點", footerPrograms: "計畫項目", footerContact: "聯絡我們",
    footerCopyright: "© 2026 臺美倡議（籌備中）。保留所有權利。",
    locationUS: "美國 華盛頓特區", locationTW: "臺灣 臺北",
    tafProgram: "TAF — 真理聯盟團契", tabaProgram: "TABA — 商業加速器", talecProgram: "TALEC — 語言與文化",
  },
};

const staff = [
  {
    nameKey: "austin_name" as const,
    fullnameKey: "austin_fullname" as const,
    roleKey: "austin_role" as const,
    bioKey: "austin_bio" as const,
    photo: "/austin_.png",
    linkedin: "https://www.linkedin.com/in/austin-hua",
    accentClass: "bg-taiwan-blue/10",
    iconColor: "text-taiwan-blue",
  },
  {
    nameKey: "mark_name" as const,
    fullnameKey: "mark_fullname" as const,
    roleKey: "mark_role" as const,
    bioKey: "mark_bio" as const,
    photo: "/mark-chen.jpg",
    linkedin: "https://www.linkedin.com/in/mark-chen-next/",
    accentClass: "bg-taiwan-red/10",
    iconColor: "text-taiwan-red",
  },
];

export default function StaffPage() {
  const { language, toggle } = useLanguage();
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main>
      <nav className="fixed w-full z-50 glass-nav" id="navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="flex-shrink-0 flex items-center gap-3">
              <Image src="/favitai.png" alt="Taiwan America Initiative" width={56} height={56} className="h-14 w-14" />
              <span className="hidden md:block text-base text-slate-600 font-medium">臺美倡議 Taiwan America Initiative</span>
            </a>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="/#about" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">{t.navAbout}</a>
              <a href="/#programs" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">{t.navPrograms}</a>
              <a href="/#events" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">{t.navEvents}</a>
              <a href="/#community" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">{t.navCommunity}</a>
              <a href="/staff" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">{t.navStaff}</a>
              <a href="https://discord.gg/KFqhjzVnvz" target="_blank" rel="noopener noreferrer" className="gradient-pill text-white px-5 py-2.5 rounded-full font-semibold transition-colors shadow-lg shadow-slate-200">{t.navGetInvolved}</a>
              <button onClick={toggle} className="border border-slate-300 hover:border-slate-400 text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-full font-medium transition-colors text-sm">{language === "en" ? "中文" : "EN"}</button>
            </div>
            <div className="md:hidden flex items-center gap-2">
              <button onClick={toggle} className="border border-slate-300 text-slate-600 px-3 py-1 rounded-full font-medium text-sm">{language === "en" ? "中文" : "EN"}</button>
              <button className="text-slate-600 hover:text-slate-900 focus:outline-none" onClick={() => setMobileMenuOpen((prev) => !prev)} aria-expanded={mobileMenuOpen}><i className="ph ph-list text-2xl"></i></button>
            </div>
          </div>
        </div>
        <div className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden bg-white border-t border-slate-100 absolute w-full`}>
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
            <a href="/#about" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>{t.navAbout}</a>
            <a href="/#programs" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>{t.navPrograms}</a>
            <a href="/#events" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>{t.navEvents}</a>
            <a href="/#community" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>{t.navCommunity}</a>
            <a href="/staff" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>{t.navStaff}</a>
            <div className="pt-4"><a href="https://discord.gg/KFqhjzVnvz" target="_blank" rel="noopener noreferrer" className="block w-full text-center gradient-pill text-white px-5 py-3 rounded-lg font-semibold transition-colors">{t.navGetInvolved}</a></div>
          </div>
        </div>
      </nav>

      <section id="team" className="pt-36 pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-white text-xs font-semibold uppercase tracking-[0.2em] gradient-pill">{t.staffBadge}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-5 mb-4">{t.staffTitle}</h2>
            <p className="text-slate-600 max-w-xl mx-auto">{t.staffBody}</p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 max-w-2xl mx-auto">
            {staff.map((member) => (
              <div key={member.nameKey} className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm card-hover flex flex-col">
                <div className={`relative w-full aspect-square ${member.accentClass}`}>
                  <Image
                    src={member.photo}
                    alt={t[member.nameKey]}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-slate-900">{t[member.nameKey]}</h3>
                    {member.fullnameKey && (
                      <p className="text-sm text-slate-400 mt-0.5">{t[member.fullnameKey]}</p>
                    )}
                    <span className={`inline-block mt-2 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${member.accentClass} ${member.iconColor}`}>
                      {t[member.roleKey]}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm flex-1">{t[member.bioKey]}</p>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${member.iconColor} hover:opacity-70 transition-opacity`}>
                    <i className="ph-fill ph-linkedin-logo text-lg"></i> LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-white relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-hero-sheen"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-widest mb-6">{t.ctaBadge}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">{t.ctaTitle}</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">{t.ctaBody}</p>
          <a href="https://discord.gg/KFqhjzVnvz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-50 transition-colors shadow-lg">
            <i className="ph-fill ph-discord-logo text-xl"></i> {t.ctaBtn}
          </a>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h4 className="font-bold text-slate-900 mb-4">{t.footerLocations}</h4>
              <div className="text-slate-500 text-sm mb-6 space-y-1">
                <p className="flex items-center gap-1.5"><i className="ph ph-map-pin"></i> {t.locationUS}</p>
                <p className="flex items-center gap-1.5"><i className="ph ph-map-pin"></i> {t.locationTW}</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">{t.footerPrograms}</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="/taf" className="hover:text-slate-900 flex items-center gap-1.5"><i className="ph ph-cross"></i> {t.tafProgram}</a></li>
                <li><a href="/taba" className="hover:text-slate-900 flex items-center gap-1.5"><i className="ph ph-rocket-launch"></i> {t.tabaProgram}</a></li>
                <li><a href="/talec" className="hover:text-slate-900 flex items-center gap-1.5"><i className="ph ph-book-open"></i> {t.talecProgram}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">{t.footerContact}</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="mailto:contact@tai.org.tw" className="hover:text-slate-900 flex items-center gap-1.5"><i className="ph ph-envelope"></i> contact@tai.org.tw</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-10 pb-6 flex flex-col items-center gap-4">
            <Image src="/tai_nobg.png" alt="Taiwan America Initiative" width={460} height={173} className="h-36 w-auto" />
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="https://facebook.com/tai.org.tw" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors"><i className="ph-fill ph-facebook-logo text-2xl"></i></a>
              <a href="https://www.instagram.com/tai.org.tw" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors"><i className="ph-fill ph-instagram-logo text-2xl"></i></a>
              <a href="https://www.threads.com/@tai.org.tw" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors"><i className="ph-fill ph-threads-logo text-2xl"></i></a>
              <a href="https://discord.gg/KFqhjzVnvz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors"><i className="ph-fill ph-discord-logo text-2xl"></i></a>
              <a href="https://linkedin.com/company/tainitiative" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors"><i className="ph-fill ph-linkedin-logo text-2xl"></i></a>
              <a href="https://github.com/TAInitiative" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors"><i className="ph-fill ph-github-logo text-2xl"></i></a>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-8 text-center text-sm text-slate-500">
            <p>{t.footerCopyright}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
