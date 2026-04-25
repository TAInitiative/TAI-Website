"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";

const translations = {
  en: {
    navAbout: "About", navPrograms: "Programs", navEvents: "Events", navCommunity: "Community", navGetInvolved: "Get Involved",
    heroBadge: "Nonprofit · Taiwan-U.S. Partnership",
    heroTitle: "Advancing Taiwan-America relations through culture, language, and technology.",
    heroBody: "TAI is a nonprofit dedicated to deepening the bond between Taiwan and the United States through three flagship programs spanning faith & community, business acceleration, and cultural & linguistic exchange.",
    heroBtn1: "Explore Our Programs", heroBtn2: "Learn Our Mission",
    heroCardLabel: "TAI Programs", heroCardTitle: "Three programs. One mission.",
    heroCardBody: "TAF, TABA, and TALEC each serve a distinct community — united by a shared commitment to strengthening Taiwan-U.S. ties.",
    tafLabel: "TAF · Truth Alliance Fellowship", tabaLabel: "TABA · Business Accelerator", talecLabel: "TALEC · Language, Education & Culture",
    aboutBadge: "About TAI", aboutTitle: "A nonprofit built around the Taiwan-America partnership",
    aboutBody: "Taiwan America Initiative (TAI) is a nonprofit dedicated to advancing Taiwan-U.S. relations through cultural and linguistic exchange and technology co-development. We bring together people of faith, entrepreneurs, language learners, and cultural leaders across both sides of the Pacific.",
    card1Title: "Faith & Community", card1Body: "A Christian ecumenical, bilingual, and international community rooted in shared faith and cross-cultural friendship.",
    card2Title: "Business Innovation", card2Body: "Accelerating businesses that bridge Taiwan and America through mentorship, networks, and cross-border resources.",
    card3Title: "Language & Cultural Exchange", card3Body: "Educational programs and cultural initiatives that deepen mutual understanding between Taiwanese and American communities.",
    programsTitle: "Three programs, one mission",
    programsBody: "Each TAI program serves a distinct community while advancing our shared vision of a deeper, lasting Taiwan-U.S. partnership.",
    tafName: "Truth Alliance Fellowship", tafBody: "A Christian ecumenical, bilingual, and international community. We gather for shared meals, prayer sessions, and cross-cultural fellowship across Taiwan and the United States.",
    tabaName: "Taiwan-America Business Accelerator", tabaBody: "A business accelerator built for companies that connect Taiwan and America. We provide mentorship, networks, and resources to help cross-border ventures thrive.",
    talecName: "Taiwan-America Language, Education, and Culture", talecBody: "Cultural and educational programs that foster language learning, mutual understanding, and lasting people-to-people ties between Taiwan and the United States.",
    eventsTitle: "Upcoming Gatherings", eventsBody: "Join us in person or virtually across our three programs.",
    viewAllEvents: "View All Events", learnMore: "Learn More",
    tafEventTitle: "TAF Fellowship Meal", tafEventBody: "A bilingual gathering for shared meals and prayer, open to the entire TAF community — Taiwanese, American, and international.",
    tabaEventTitle: "TABA Founder Meetup", tabaEventBody: "Networking and mentorship for entrepreneurs building across the Taiwan-U.S. corridor.",
    talecEventTitle: "TALEC Language Exchange", talecEventBody: "Regular language and cultural exchange sessions pairing Mandarin and English speakers for mutual learning.",
    ctaBadge: "Get Involved", ctaTitle: "Ready to be part of the Taiwan-America community?",
    ctaBody: "Whether through faith, business, or cultural exchange — there is a place for you in TAI. Stay connected with our latest events, programs, and opportunities.",
    emailPlaceholder: "Enter your email address", joinNow: "Join Now", noSpam: "No spam, ever. Unsubscribe at any time.",
    footerLocations: "Locations", footerPrograms: "Programs", footerTAFCommunity: "TAF Community", footerFBGroup: "Facebook Group", footerContact: "Contact",
    footerPrivacy: "Privacy Policy", footerTerms: "Terms of Service", footerCopyright: "© 2026 Taiwan America Initiative. All rights reserved.",
    locationUS: "Washington D.C., United States", locationTW: "Taipei, Taiwan",
    tafProgram: "TAF — Truth Alliance Fellowship", tabaProgram: "TABA — Business Accelerator", talecProgram: "TALEC — Language & Culture",
  },
  zh: {
    navAbout: "關於我們", navPrograms: "計畫項目", navEvents: "活動", navCommunity: "社群", navGetInvolved: "加入我們",
    heroBadge: "非營利組織 · 臺美夥伴關係",
    heroTitle: "透過文化、語言與科技，推進臺美關係。",
    heroBody: "臺美倡議（TAI）是一個非營利組織，致力於透過三項旗艦計畫深化臺灣與美國之間的連結，涵蓋信仰社群、商業加速與文化語言交流。",
    heroBtn1: "探索我們的計畫", heroBtn2: "了解我們的使命",
    heroCardLabel: "TAI 計畫項目", heroCardTitle: "三個計畫。一個使命。",
    heroCardBody: "TAF、TABA 與 TALEC 各自服務不同的社群，共同致力於強化臺美關係。",
    tafLabel: "TAF · 真理聯盟團契", tabaLabel: "TABA · 商業加速器", talecLabel: "TALEC · 語言、教育與文化",
    aboutBadge: "關於臺美倡議", aboutTitle: "以臺美夥伴關係為核心的非營利組織",
    aboutBody: "臺美倡議（TAI）是一個非營利組織，致力於透過文化與語言交流及科技共同發展，推進臺美關係。我們匯聚來自太平洋兩岸的信仰人士、創業者、語言學習者與文化領袖。",
    card1Title: "信仰與社群", card1Body: "一個以共同信仰與跨文化友誼為根基的基督教普世、雙語國際社群。",
    card2Title: "商業創新", card2Body: "透過導師輔導、人脈網絡與跨境資源，加速連結臺灣與美國的企業發展。",
    card3Title: "語言與文化交流", card3Body: "透過教育計畫與文化活動，深化臺灣與美國社群之間的相互理解。",
    programsTitle: "三個計畫，一個使命",
    programsBody: "每個 TAI 計畫服務不同的社群，共同推進我們對深化臺美關係的共同願景。",
    tafName: "真理聯盟團契", tafBody: "一個基督教普世、雙語的國際社群。我們透過共同聚餐、禱告與跨文化交流，連結臺灣與美國的夥伴。",
    tabaName: "臺美商業加速器", tabaBody: "專為連結臺灣與美國的企業打造的加速器。我們提供導師輔導、人脈網絡與資源，協助跨境事業蓬勃發展。",
    talecName: "臺美語言、教育與文化", talecBody: "透過文化與教育計畫，促進語言學習、相互理解，並建立臺美之間長久的人際連結。",
    eventsTitle: "近期活動", eventsBody: "線上或線下參與我們三個計畫的活動。",
    viewAllEvents: "查看所有活動", learnMore: "了解更多",
    tafEventTitle: "TAF 團契聚餐", tafEventBody: "雙語聚餐與禱告活動，歡迎所有 TAF 社群成員參與——臺灣人、美國人與國際友人皆受歡迎。",
    tabaEventTitle: "TABA 創業者聚會", tabaEventBody: "為在臺美走廊創業的企業家提供人脈與導師輔導機會。",
    talecEventTitle: "TALEC 語言交流", talecEventBody: "定期舉辦的語言與文化交流活動，配對普通話與英語使用者進行互相學習。",
    ctaBadge: "加入我們", ctaTitle: "準備好成為臺美社群的一份子了嗎？",
    ctaBody: "無論是透過信仰、商業或文化交流——TAI 都有屬於您的位置。掌握我們最新的活動、計畫與機會。",
    emailPlaceholder: "輸入您的電子郵件", joinNow: "立即加入", noSpam: "絕不發送垃圾郵件。隨時可取消訂閱。",
    footerLocations: "據點", footerPrograms: "計畫項目", footerTAFCommunity: "TAF 社群", footerFBGroup: "Facebook 社團", footerContact: "聯絡我們",
    footerPrivacy: "隱私政策", footerTerms: "服務條款", footerCopyright: "© 2026 臺美倡議。保留所有權利。",
    locationUS: "美國 華盛頓特區", locationTW: "臺灣 臺北",
    tafProgram: "TAF — 真理聯盟團契", tabaProgram: "TABA — 商業加速器", talecProgram: "TALEC — 語言與文化",
  },
};

export default function HomePage() {
  const { language, toggle } = useLanguage();
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <nav className={`fixed w-full z-50 glass-nav transition-all duration-300 ${isScrolled ? "shadow-sm" : ""}`} id="navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button type="button" className="flex-shrink-0 flex items-center gap-3 cursor-pointer text-left" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <Image src="/favitai.png" alt="Taiwan America Initiative" width={56} height={56} className="h-14 w-14" />
              <span className="hidden md:block text-base text-slate-600 font-medium">臺美倡議 Taiwan America Initiative</span>
            </button>

            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">{t.navAbout}</a>
              <a href="#programs" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">{t.navPrograms}</a>
              <a href="#events" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">{t.navEvents}</a>
              <a href="#community" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">{t.navCommunity}</a>
              <a href="https://discord.gg/KFqhjzVnvz" target="_blank" rel="noopener noreferrer" className="gradient-pill text-white px-5 py-2.5 rounded-full font-semibold transition-colors shadow-lg shadow-slate-200">{t.navGetInvolved}</a>
              <button onClick={toggle} className="border border-slate-300 hover:border-slate-400 text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-full font-medium transition-colors text-sm">
                {language === "en" ? "中文" : "EN"}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button onClick={toggle} className="border border-slate-300 text-slate-600 px-3 py-1 rounded-full font-medium text-sm">
                {language === "en" ? "中文" : "EN"}
              </button>
              <button className="text-slate-600 hover:text-slate-900 focus:outline-none" onClick={() => setMobileMenuOpen((prev) => !prev)} aria-expanded={mobileMenuOpen} aria-controls="mobile-menu">
                <i className="ph ph-list text-2xl"></i>
              </button>
            </div>
          </div>
        </div>

        <div id="mobile-menu" className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden bg-white border-t border-slate-100 absolute w-full`}>
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
            <a href="#about" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>{t.navAbout}</a>
            <a href="#programs" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>{t.navPrograms}</a>
            <a href="#events" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>{t.navEvents}</a>
            <a href="#community" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>{t.navCommunity}</a>
            <div className="pt-4">
              <a href="https://discord.gg/KFqhjzVnvz" target="_blank" rel="noopener noreferrer" className="block w-full text-center gradient-pill text-white px-5 py-3 rounded-lg font-semibold transition-colors">{t.navGetInvolved}</a>
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
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-white text-xs font-semibold uppercase tracking-[0.2em] mb-6 gradient-pill">{t.heroBadge}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">{t.heroTitle}</h1>
            <p className="mt-4 max-w-xl text-lg text-slate-700 leading-relaxed">{t.heroBody}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#programs" className="px-8 py-4 rounded-full text-white font-semibold text-lg transition-all shadow-xl shadow-slate-200 gradient-pill flex items-center justify-center gap-2">{t.heroBtn1} <i className="ph ph-arrow-right"></i></a>
              <a href="#about" className="px-8 py-4 rounded-full bg-white text-slate-700 border border-slate-200 font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center">{t.heroBtn2}</a>
            </div>
          </div>
          <div className="relative">
            <div className="glass-panel rounded-3xl p-8 shadow-2xl shadow-slate-200/80">
              <div className="rounded-2xl bg-hero-sheen p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">{t.heroCardLabel}</span>
                  <i className="ph ph-sparkle text-2xl"></i>
                </div>
                <h2 className="text-3xl font-bold mb-4">{t.heroCardTitle}</h2>
                <p className="text-sm text-white/80 mb-6">{t.heroCardBody}</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5 backdrop-blur-md"><i className="ph ph-cross text-lg"></i><span className="text-sm font-semibold">{t.tafLabel}</span></div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5 backdrop-blur-md"><i className="ph ph-rocket-launch text-lg"></i><span className="text-sm font-semibold">{t.tabaLabel}</span></div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2.5 backdrop-blur-md"><i className="ph ph-book-open text-lg"></i><span className="text-sm font-semibold">{t.talecLabel}</span></div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-white shadow-lg shadow-slate-200 flex items-center justify-center text-taiwan-blue"><i className="ph ph-star-four text-2xl"></i></div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-white text-xs font-semibold uppercase tracking-[0.2em] gradient-pill">{t.aboutBadge}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-5 mb-4">{t.aboutTitle}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">{t.aboutBody}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover"><h3 className="text-xl font-semibold text-slate-900 mb-2">{t.card1Title}</h3><p className="text-sm text-slate-600">{t.card1Body}</p></div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover"><h3 className="text-xl font-semibold text-slate-900 mb-2">{t.card2Title}</h3><p className="text-sm text-slate-600">{t.card2Body}</p></div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover sm:col-span-2"><h3 className="text-xl font-semibold text-slate-900 mb-2">{t.card3Title}</h3><p className="text-sm text-slate-600">{t.card3Body}</p></div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t.programsTitle}</h2>
            <p className="text-slate-600 mt-3 max-w-2xl">{t.programsBody}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <a href="https://tai.org.tw/taf" className="bg-white border border-slate-100 rounded-2xl p-6 card-hover block group">
              <div className="w-12 h-12 rounded-full bg-taiwan-blue/10 flex items-center justify-center mb-4"><i className="ph ph-cross text-2xl text-taiwan-blue"></i></div>
              <div className="flex items-start justify-between mb-2"><h3 className="text-xl font-semibold text-slate-900">TAF</h3><i className="ph ph-arrow-up-right text-slate-300 group-hover:text-slate-500 transition-colors"></i></div>
              <p className="text-sm font-medium text-taiwan-blue mb-3">{t.tafName}</p>
              <p className="text-sm text-slate-600">{t.tafBody}</p>
            </a>
            <a href="https://tai.org.tw/taba" className="bg-white border border-slate-100 rounded-2xl p-6 card-hover block group">
              <div className="w-12 h-12 rounded-full bg-taiwan-red/10 flex items-center justify-center mb-4"><i className="ph ph-rocket-launch text-2xl text-taiwan-red"></i></div>
              <div className="flex items-start justify-between mb-2"><h3 className="text-xl font-semibold text-slate-900">TABA</h3><i className="ph ph-arrow-up-right text-slate-300 group-hover:text-slate-500 transition-colors"></i></div>
              <p className="text-sm font-medium text-taiwan-red mb-3">{t.tabaName}</p>
              <p className="text-sm text-slate-600">{t.tabaBody}</p>
            </a>
            <a href="https://tai.org.tw/talec" className="bg-white border border-slate-100 rounded-2xl p-6 card-hover block group">
              <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center mb-4"><i className="ph ph-book-open text-2xl text-slate-700"></i></div>
              <div className="flex items-start justify-between mb-2"><h3 className="text-xl font-semibold text-slate-900">TALEC</h3><i className="ph ph-arrow-up-right text-slate-300 group-hover:text-slate-500 transition-colors"></i></div>
              <p className="text-sm font-medium text-slate-600 mb-3">{t.talecName}</p>
              <p className="text-sm text-slate-600">{t.talecBody}</p>
            </a>
          </div>
        </div>
      </section>

      <section id="events" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div><h2 className="text-3xl font-bold text-slate-900 mb-2">{t.eventsTitle}</h2><p className="text-slate-600">{t.eventsBody}</p></div>
            <a href="#" className="hidden md:inline-flex items-center gap-2 text-slate-900 font-semibold border-b-2 border-taiwan-red pb-1 hover:text-slate-600 hover:border-slate-600 transition-colors">{t.viewAllEvents} <i className="ph ph-arrow-right"></i></a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className="relative h-48 overflow-hidden"><Image src="/taf.png" alt="TAF Fellowship Meal" fill className="object-cover" /><div className="absolute top-4 right-4 gradient-pill px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide text-white shadow-sm">TAF</div></div>
              <div className="p-6"><h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">{t.tafEventTitle}</h3><p className="text-slate-600 text-sm mb-4">{t.tafEventBody}</p><a href="https://tai.org.tw/taf" className="text-sm font-semibold text-slate-900 flex items-center">{t.learnMore} <i className="ph ph-caret-right ml-1"></i></a></div>
            </div>
            <div className="group border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className="relative h-48 overflow-hidden"><Image src="/taba-founder-meetup.png" alt="TABA Founder Meetup" fill className="object-cover" /><div className="absolute top-4 right-4 gradient-pill px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide text-white shadow-sm">TABA</div></div>
              <div className="p-6"><h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">{t.tabaEventTitle}</h3><p className="text-slate-600 text-sm mb-4">{t.tabaEventBody}</p><a href="https://tai.org.tw/taba" className="text-sm font-semibold text-slate-900 flex items-center">{t.learnMore} <i className="ph ph-caret-right ml-1"></i></a></div>
            </div>
            <div className="group border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className="relative h-48 overflow-hidden"><Image src="/talec.png" alt="TALEC Language & Culture" fill className="object-cover" /><div className="absolute top-4 right-4 gradient-pill px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide text-white shadow-sm">TALEC</div></div>
              <div className="p-6"><h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">{t.talecEventTitle}</h3><p className="text-slate-600 text-sm mb-4">{t.talecEventBody}</p><a href="https://tai.org.tw/talec" className="text-sm font-semibold text-slate-900 flex items-center">{t.learnMore} <i className="ph ph-caret-right ml-1"></i></a></div>
            </div>
          </div>
          <div className="mt-8 text-center md:hidden"><a href="#" className="text-slate-900 font-semibold border-b-2 border-taiwan-red pb-1">{t.viewAllEvents}</a></div>
        </div>
      </section>

      <section id="community" className="py-24 text-white relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-hero-sheen"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-widest mb-6">{t.ctaBadge}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">{t.ctaTitle}</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">{t.ctaBody}</p>
          <form className="max-w-lg mx-auto mb-8 bg-white/10 p-2 rounded-full backdrop-blur-xl border border-white/20 flex shadow-2xl shadow-blue-900/20">
            <input type="email" placeholder={t.emailPlaceholder} className="flex-1 bg-transparent border-none text-white placeholder-white/60 px-6 py-3 focus:outline-none rounded-l-full" required />
            <button type="button" onClick={() => alert(language === "en" ? "Thank you for joining! We will be in touch shortly." : "感謝您加入！我們將盡快與您聯繫。")} className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition-colors shadow-lg">{t.joinNow}</button>
          </form>
          <p className="text-xs text-white/60">{t.noSpam}</p>
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
                <a href="https://facebook.com/tai.org.tw" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="TAI Facebook"><i className="ph-fill ph-facebook-logo text-2xl"></i></a>
                <a href="https://www.instagram.com/tai.org.tw" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="TAI Instagram"><i className="ph-fill ph-instagram-logo text-2xl"></i></a>
                <a href="https://www.threads.com/@tai.org.tw" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="TAI Threads"><i className="ph-fill ph-threads-logo text-2xl"></i></a>
                <a href="https://discord.gg/KFqhjzVnvz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="TAI Discord"><i className="ph-fill ph-discord-logo text-2xl"></i></a>
                <a href="https://linkedin.com/company/tainitiative" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="TAI LinkedIn"><i className="ph-fill ph-linkedin-logo text-2xl"></i></a>
                <a href="https://github.com/TAInitiative" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="TAI GitHub"><i className="ph-fill ph-github-logo text-2xl"></i></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">{t.footerPrograms}</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="https://tai.org.tw/taf" className="hover:text-slate-900 flex items-center gap-1.5"><i className="ph ph-cross"></i> {t.tafProgram}</a></li>
                <li><a href="https://tai.org.tw/taba" className="hover:text-slate-900 flex items-center gap-1.5"><i className="ph ph-rocket-launch"></i> {t.tabaProgram}</a></li>
                <li><a href="https://tai.org.tw/talec" className="hover:text-slate-900 flex items-center gap-1.5"><i className="ph ph-book-open"></i> {t.talecProgram}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">{t.footerTAFCommunity}</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="https://www.facebook.com/groups/tafellowship" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 flex items-center gap-1.5"><i className="ph-fill ph-facebook-logo"></i> {t.footerFBGroup}</a></li>
                <li><a href="https://www.instagram.com/tafellowship/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 flex items-center gap-1.5"><i className="ph-fill ph-instagram-logo"></i> Instagram</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">{t.footerContact}</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="mailto:contact@tai.org.tw" className="hover:text-slate-900">contact@tai.org.tw</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>{t.footerCopyright}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-900">{t.footerPrivacy}</a>
              <a href="#" className="hover:text-slate-900">{t.footerTerms}</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
