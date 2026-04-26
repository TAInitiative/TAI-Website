"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../LanguageContext";

const translations = {
  en: {
    navAboutTAI: "About TAI", navPrograms: "Programs", navTAF: "TAF", navTALEC: "TALEC", navGetInvolved: "Get Involved",
    heroBadge: "TAI Program · Business Acceleration",
    heroTitle: "Taiwan-America Business Accelerator",
    heroBody: "TABA accelerates businesses that connect Taiwan and America. Whether you are a Taiwanese startup expanding West or a U.S. founder building in Taipei, we give you the mentorship, networks, and resources to grow across the Pacific.",
    heroBtn1: "Apply to TABA", heroBtn2: "Learn More",
    heroCardLabel: "Accelerator", heroCardTitle: "Built for the Taiwan-U.S. corridor.",
    heroCardBody: "Resources, connections, and expertise specifically designed for entrepreneurs operating across both markets.",
    heroItem1: "Founder-to-Founder Mentorship", heroItem2: "Investor Introductions", heroItem3: "Market Entry Support",
    aboutBadge: "About TABA", aboutTitle: "Accelerating the next generation of Taiwan-U.S. businesses",
    aboutBody1: "TABA is TAI's business accelerator program, purpose-built for companies and entrepreneurs who operate across the Taiwan-U.S. corridor. We understand the unique challenges of building cross-border businesses — from navigating two distinct regulatory environments to bridging cultural and linguistic differences.",
    aboutBody2: "Through mentorship from seasoned cross-border founders, introductions to investors with Taiwan-U.S. expertise, and a peer network of like-minded entrepreneurs, TABA gives you what you need to grow.",
    f1Title: "Mentorship", f1Body: "Direct access to founders and operators who have successfully built across Taiwan and the U.S.",
    f2Title: "Investor Network", f2Body: "Introductions to angels and VCs who specifically seek Taiwan-U.S. cross-border opportunities.",
    f3Title: "Market Entry", f3Body: "Guidance on regulatory, cultural, and operational considerations for entering both markets.",
    f4Title: "Partnerships", f4Body: "Facilitated introductions to strategic partners, distributors, and collaborators on both sides of the Pacific.",
    whoTitle: "Who TABA is for", whoBody: "TABA serves entrepreneurs at multiple stages, building businesses that span both the Taiwanese and American markets.",
    w1Title: "Taiwanese Startups Going West", w1Body: "Taiwanese founders and companies looking to expand into the U.S. market, access American capital, or hire American talent.",
    w2Title: "U.S. Founders Building in Taiwan", w2Body: "American entrepreneurs seeking to access Taiwan's engineering talent, manufacturing ecosystem, or semiconductor supply chain.",
    w3Title: "Cross-Border Tech Teams", w3Body: "Teams already operating across both markets looking to deepen partnerships, raise funding, or scale their operations.",
    pitchBadge: "Flagship Event", pitchTitle: "Annual Pitch Competition",
    pitchBody1: "Each year, TABA hosts a cross-border pitch competition and demo day, connecting Taiwan-U.S. startups with investors, corporate partners, and media from both sides of the Pacific.",
    pitchBody2: "Competing teams receive feedback from experienced cross-border investors, visibility with TABA's partner network, and the chance to forge lasting connections that accelerate their growth.",
    pitchBtn: "Stay Updated",
    pitchCardTitle: "Pitch to investors on both sides of the Pacific.",
    pitchCardBody: "The TABA Annual Pitch Competition brings together the best cross-border startups with investors who understand the Taiwan-U.S. opportunity.",
    pitchStat1: "Investor judges from Taiwan & the U.S.", pitchStat2: "Prizes, partnerships & follow-on intros",
    ctaBadge: "Apply to TABA", ctaTitle: "Ready to build your Taiwan-U.S. business?",
    ctaBody: "Join our community on Discord to connect with the TABA team, get updates on upcoming cohorts, and meet other cross-border founders.",
    ctaBtn: "Join on Discord",
    footerLocations: "Locations", footerPrograms: "Programs", footerTAFCommunity: "TAF Community", footerFBGroup: "Facebook Group",
    footerPrivacy: "Privacy Policy", footerTerms: "Terms of Service", footerCopyright: "© 2026 Taiwan America Initiative (to be registered). All rights reserved.",
    locationUS: "Washington D.C., United States", locationTW: "Taipei, Taiwan",
    tafProgram: "TAF — Truth Alliance Fellowship", tabaProgram: "TABA — Business Accelerator", talecProgram: "TALEC — Language & Culture",
  },
  zh: {
    navAboutTAI: "關於臺美倡議", navPrograms: "計畫項目", navTAF: "TAF", navTALEC: "TALEC", navGetInvolved: "加入我們",
    heroBadge: "TAI 計畫 · 商業加速",
    heroTitle: "臺美商業加速器",
    heroBody: "TABA 加速連結臺灣與美國的企業發展。無論您是西進的臺灣新創，或是在臺北發展的美國創業者，我們為您提供跨太平洋成長所需的導師輔導、人脈網絡與資源。",
    heroBtn1: "申請加入 TABA", heroBtn2: "了解更多",
    heroCardLabel: "加速器", heroCardTitle: "專為臺美走廊打造。",
    heroCardBody: "專為在兩個市場之間運營的創業者設計的資源、人脈與專業知識。",
    heroItem1: "創業者導師輔導", heroItem2: "投資人引薦", heroItem3: "市場進入支援",
    aboutBadge: "關於 TABA", aboutTitle: "加速下一代臺美企業的成長",
    aboutBody1: "TABA 是臺美倡議的商業加速器計畫，專為在臺美走廊運營的企業與創業者打造。我們深刻理解跨境創業的獨特挑戰——從應對兩個截然不同的監管環境，到跨越文化與語言差異。",
    aboutBody2: "透過經驗豐富的跨境創業者導師輔導、具備臺美專業知識的投資人引薦，以及志同道合的創業者同儕網絡，TABA 為您提供成長所需的一切。",
    f1Title: "導師輔導", f1Body: "直接接觸曾成功在臺灣與美國之間建立事業的創業者與運營者。",
    f2Title: "投資人網絡", f2Body: "引薦專門尋求臺美跨境機會的天使投資人與創投基金。",
    f3Title: "市場進入", f3Body: "提供進入兩個市場時的法規、文化與運營考量指導。",
    f4Title: "夥伴關係", f4Body: "促成與太平洋兩岸的策略夥伴、經銷商與合作者的引薦。",
    whoTitle: "TABA 適合哪些人", whoBody: "TABA 服務不同階段的創業者，協助他們建立橫跨臺灣與美國市場的事業。",
    w1Title: "西進的臺灣新創", w1Body: "希望拓展美國市場、獲取美國資本或招募美國人才的臺灣創業者與企業。",
    w2Title: "在臺灣發展的美國創業者", w2Body: "希望獲取臺灣工程人才、製造業生態系或半導體供應鏈的美國創業者。",
    w3Title: "跨境科技團隊", w3Body: "已在兩個市場運營、希望深化夥伴關係、募資或擴大規模的團隊。",
    pitchBadge: "旗艦活動", pitchTitle: "年度創業競賽",
    pitchBody1: "每年，TABA 舉辦跨境創業競賽與展示日，連結臺美新創與來自太平洋兩岸的投資人、企業夥伴及媒體。",
    pitchBody2: "參賽團隊將獲得經驗豐富的跨境投資人回饋、TABA 夥伴網絡的曝光機會，以及建立加速成長的長久連結的機會。",
    pitchBtn: "掌握最新消息",
    pitchCardTitle: "向太平洋兩岸的投資人進行簡報。",
    pitchCardBody: "TABA 年度創業競賽匯聚最優秀的跨境新創與了解臺美機會的投資人。",
    pitchStat1: "來自臺灣與美國的投資人評審", pitchStat2: "獎金、夥伴關係與後續引薦",
    ctaBadge: "申請加入 TABA", ctaTitle: "準備好打造您的臺美跨境事業了嗎？",
    ctaBody: "在 Discord 上加入我們的社群，與 TABA 團隊連結、掌握即將推出的計畫資訊，並認識其他跨境創業者。",
    ctaBtn: "加入 Discord",
    footerLocations: "據點", footerPrograms: "計畫項目", footerTAFCommunity: "TAF 社群", footerFBGroup: "Facebook 社團",
    footerPrivacy: "隱私政策", footerTerms: "服務條款", footerCopyright: "© 2026 臺美倡議（籌備中）。保留所有權利。",
    locationUS: "美國 華盛頓特區", locationTW: "臺灣 臺北",
    tafProgram: "TAF — 真理聯盟團契", tabaProgram: "TABA — 商業加速器", talecProgram: "TALEC — 語言與文化",
  },
};

export default function TABAPage() {
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
              <a href="/#about" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">{t.navAboutTAI}</a>
              <a href="/#programs" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">{t.navPrograms}</a>
              <a href="/taf" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">{t.navTAF}</a>
              <a href="/talec" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">{t.navTALEC}</a>
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
            <a href="/#about" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>{t.navAboutTAI}</a>
            <a href="/#programs" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>{t.navPrograms}</a>
            <a href="/taf" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>{t.navTAF}</a>
            <a href="/talec" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>{t.navTALEC}</a>
            <div className="pt-4"><a href="https://discord.gg/KFqhjzVnvz" target="_blank" rel="noopener noreferrer" className="block w-full text-center gradient-pill text-white px-5 py-3 rounded-lg font-semibold transition-colors">{t.navGetInvolved}</a></div>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden hero-gradient">
        <div className="absolute inset-0 bg-subtle-pattern opacity-50"></div>
        <div className="absolute top-10 right-0 w-96 h-96 bg-taiwan-blue/10 rounded-full blur-3xl opacity-70 -z-10 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-taiwan-red/10 rounded-full blur-3xl opacity-70 -z-10 -translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="text-left">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-white text-xs font-semibold uppercase tracking-[0.2em] mb-6 gradient-pill">{t.heroBadge}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">{t.heroTitle}</h1>
            <p className="mt-4 max-w-xl text-lg text-slate-700 leading-relaxed">{t.heroBody}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#apply" className="px-8 py-4 rounded-full text-white font-semibold text-lg transition-all shadow-xl shadow-slate-200 gradient-pill flex items-center justify-center gap-2">{t.heroBtn1} <i className="ph ph-arrow-right"></i></a>
              <a href="#about" className="px-8 py-4 rounded-full bg-white text-slate-700 border border-slate-200 font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center">{t.heroBtn2}</a>
            </div>
          </div>
          <div className="relative">
            <div className="glass-panel rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/80">
              <div className="relative w-full aspect-square">
                <Image src="/taba-founder-meetup.png" alt="TABA Founder Meetup" fill className="object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-white shadow-lg shadow-slate-200 flex items-center justify-center text-taiwan-blue"><i className="ph ph-rocket-launch text-2xl"></i></div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-white text-xs font-semibold uppercase tracking-[0.2em] gradient-pill">{t.aboutBadge}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-5 mb-4">{t.aboutTitle}</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">{t.aboutBody1}</p>
            <p className="text-lg text-slate-600 leading-relaxed">{t.aboutBody2}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover"><i className="ph ph-users text-2xl text-taiwan-red mb-3 block"></i><h3 className="text-lg font-semibold text-slate-900 mb-2">{t.f1Title}</h3><p className="text-sm text-slate-600">{t.f1Body}</p></div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover"><i className="ph ph-trend-up text-2xl text-taiwan-red mb-3 block"></i><h3 className="text-lg font-semibold text-slate-900 mb-2">{t.f2Title}</h3><p className="text-sm text-slate-600">{t.f2Body}</p></div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover"><i className="ph ph-globe text-2xl text-taiwan-red mb-3 block"></i><h3 className="text-lg font-semibold text-slate-900 mb-2">{t.f3Title}</h3><p className="text-sm text-slate-600">{t.f3Body}</p></div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover"><i className="ph ph-handshake text-2xl text-taiwan-red mb-3 block"></i><h3 className="text-lg font-semibold text-slate-900 mb-2">{t.f4Title}</h3><p className="text-sm text-slate-600">{t.f4Body}</p></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.whoTitle}</h2><p className="text-slate-600 max-w-2xl mx-auto">{t.whoBody}</p></div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white border border-slate-100 rounded-2xl p-8 card-hover"><div className="w-14 h-14 rounded-full bg-taiwan-blue/10 flex items-center justify-center mb-5"><i className="ph ph-airplane-tilt text-2xl text-taiwan-blue"></i></div><h3 className="text-xl font-semibold text-slate-900 mb-3">{t.w1Title}</h3><p className="text-sm text-slate-600 leading-relaxed">{t.w1Body}</p></div>
            <div className="bg-white border border-slate-100 rounded-2xl p-8 card-hover"><div className="w-14 h-14 rounded-full bg-taiwan-red/10 flex items-center justify-center mb-5"><i className="ph ph-map-pin text-2xl text-taiwan-red"></i></div><h3 className="text-xl font-semibold text-slate-900 mb-3">{t.w2Title}</h3><p className="text-sm text-slate-600 leading-relaxed">{t.w2Body}</p></div>
            <div className="bg-white border border-slate-100 rounded-2xl p-8 card-hover"><div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center mb-5"><i className="ph ph-arrows-left-right text-2xl text-slate-700"></i></div><h3 className="text-xl font-semibold text-slate-900 mb-3">{t.w3Title}</h3><p className="text-sm text-slate-600 leading-relaxed">{t.w3Body}</p></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 mb-12 lg:mb-0">
              <span className="inline-flex items-center py-1.5 px-4 w-fit rounded-full text-white text-xs font-bold uppercase tracking-[0.2em] mb-6 gradient-pill">{t.pitchBadge}</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{t.pitchTitle}</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">{t.pitchBody1}</p>
              <p className="text-slate-600 mb-8">{t.pitchBody2}</p>
              <a href="https://discord.gg/KFqhjzVnvz" target="_blank" rel="noopener noreferrer" className="gradient-pill text-white px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center shadow-lg shadow-slate-200">{t.pitchBtn} <i className="ph ph-arrow-right ml-2"></i></a>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-hero-sheen p-10 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-60 -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="bg-white/15 p-4 rounded-lg backdrop-blur-md w-fit mb-6"><i className="ph ph-presentation-chart text-3xl text-white"></i></div>
                  <h4 className="text-2xl font-bold text-white mb-3">{t.pitchCardTitle}</h4>
                  <p className="text-white/80 mb-8">{t.pitchCardBody}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-5 backdrop-blur-md"><i className="ph ph-users-three text-2xl text-white mb-2 block"></i><p className="text-white font-semibold text-sm">{t.pitchStat1}</p></div>
                    <div className="bg-white/10 rounded-xl p-5 backdrop-blur-md"><i className="ph ph-trophy text-2xl text-white mb-2 block"></i><p className="text-white font-semibold text-sm">{t.pitchStat2}</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="py-24 text-white relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-hero-sheen"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-widest mb-6">{t.ctaBadge}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">{t.ctaTitle}</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">{t.ctaBody}</p>
          <a href="https://discord.gg/KFqhjzVnvz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-50 transition-colors shadow-lg text-lg"><i className="ph-fill ph-discord-logo text-xl"></i> {t.ctaBtn}</a>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold text-slate-900 mb-4">{t.footerLocations}</h4>
              <div className="text-slate-500 text-sm mb-6 space-y-1">
                <p className="flex items-center gap-1.5"><i className="ph ph-map-pin"></i> {t.locationUS}</p>
                <p className="flex items-center gap-1.5"><i className="ph ph-map-pin"></i> {t.locationTW}</p>
              </div>
              <div className="mb-4"><Image src="/tai_nobg.png" alt="Taiwan America Initiative" width={460} height={173} className="h-36 w-auto" /></div>
              <div className="flex flex-wrap gap-3">
                <a href="https://facebook.com/tai.org.tw" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors"><i className="ph-fill ph-facebook-logo text-2xl"></i></a>
                <a href="https://www.instagram.com/tai.org.tw" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors"><i className="ph-fill ph-instagram-logo text-2xl"></i></a>
                <a href="https://www.threads.com/@tai.org.tw" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors"><i className="ph-fill ph-threads-logo text-2xl"></i></a>
                <a href="https://discord.gg/KFqhjzVnvz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors"><i className="ph-fill ph-discord-logo text-2xl"></i></a>
                <a href="https://linkedin.com/company/tainitiative" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors"><i className="ph-fill ph-linkedin-logo text-2xl"></i></a>
                <a href="https://github.com/TAInitiative" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors"><i className="ph-fill ph-github-logo text-2xl"></i></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">{t.footerPrograms}</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="/taf" className="hover:text-slate-900 flex items-center gap-1.5"><i className="ph ph-cross"></i> {t.tafProgram}</a></li>
                <li><a href="/taba" className="hover:text-slate-900 font-medium text-taiwan-red flex items-center gap-1.5"><i className="ph ph-rocket-launch"></i> {t.tabaProgram}</a></li>
                <li><a href="/talec" className="hover:text-slate-900 flex items-center gap-1.5"><i className="ph ph-book-open"></i> {t.talecProgram}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">{t.footerTAFCommunity}</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="https://www.facebook.com/groups/tafellowship" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 flex items-center gap-1.5"><i className="ph-fill ph-facebook-logo"></i> {t.footerFBGroup}</a></li>
                <li><a href="https://www.instagram.com/tafellowship/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 flex items-center gap-1.5"><i className="ph-fill ph-instagram-logo"></i> Instagram</a></li>
              </ul>
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
