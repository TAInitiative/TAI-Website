"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../LanguageContext";

const translations = {
  en: {
    navAboutTAI: "About TAI", navPrograms: "Programs", navTAF: "TAF", navTABA: "TABA", navGetInvolved: "Get Involved",
    heroBadge: "TAI Program · Language, Education & Culture",
    heroTitle: "Taiwan-America Language, Education, and Culture",
    heroBody: "TALEC deepens Taiwan-U.S. understanding through language exchange, education, and cultural programming. We connect people who want to learn, teach, and celebrate the rich cultures that define both sides of this partnership.",
    heroBtn1: "Join TALEC", heroBtn2: "Learn More",
    heroCardLabel: "TALEC", heroCardTitle: "Language is the bridge between cultures.",
    heroCardBody: "Through shared language and cultural curiosity, TALEC builds the human connections that strengthen the Taiwan-U.S. relationship.",
    heroItem1: "Language Exchange Programs", heroItem2: "Educational Initiatives", heroItem3: "Cultural Events & Arts",
    aboutBadge: "About TALEC", aboutTitle: "Understanding each other starts with language and culture",
    aboutBody1: "TALEC is TAI's language, education, and culture program. We believe that deep, lasting Taiwan-U.S. relations are built person-to-person — through shared language, mutual curiosity, and genuine cultural appreciation.",
    aboutBody2: "TALEC creates structured and informal opportunities for Mandarin and English speakers to learn from one another, for educators to share best practices across borders, and for communities to celebrate Taiwanese and American culture together.",
    f1Title: "Language Exchange", f1Body: "Paired sessions connecting Mandarin and English speakers for mutual language practice and cross-cultural conversation.",
    f2Title: "Education Programs", f2Body: "Workshops, courses, and resources that support language learning and cross-cultural education for all ages.",
    f3Title: "Cultural Events", f3Body: "Film screenings, food festivals, art showcases, and celebrations of Taiwanese and American culture and heritage.",
    f4Title: "Educator Network", f4Body: "A community of teachers and educators in both Taiwan and the U.S. sharing resources and cross-border pedagogy.",
    pillarsTitle: "Three pillars of cultural connection",
    pillarsBody: "TALEC operates across three interconnected areas to foster genuine mutual understanding between Taiwan and the United States.",
    p1Title: "Language", p1Body: "Structured language exchange and conversation programs pairing Mandarin and English speakers for real-world practice and friendship.",
    p2Title: "Education", p2Body: "Educational programming and resources that help people understand both countries' history, civic institutions, and social values.",
    p3Title: "Culture", p3Body: "Events, arts, food, and storytelling that celebrate what makes Taiwanese and American culture unique — and what we share.",
    ctaBadge: "Join TALEC", ctaTitle: "Ready to deepen your cross-cultural understanding?",
    ctaBody: "Whether you want to learn Mandarin, share your culture, or simply connect with people across the Taiwan-U.S. divide — TALEC has a place for you. Join our community on Discord to get started.",
    ctaBtn1: "Join on Discord", ctaBtn2: "Follow Us",
    footerLocations: "Locations", footerPrograms: "Programs", footerTAFCommunity: "TAF Community", footerFBGroup: "Facebook Group",
    footerPrivacy: "Privacy Policy", footerTerms: "Terms of Service", footerCopyright: "© 2026 Taiwan America Initiative (to be registered). All rights reserved.",
    locationUS: "Washington D.C., United States", locationTW: "Taipei, Taiwan",
    tafProgram: "TAF — Truth Alliance Fellowship", tabaProgram: "TABA — Business Accelerator", talecProgram: "TALEC — Language & Culture",
  },
  zh: {
    navAboutTAI: "關於臺美倡議", navPrograms: "計畫項目", navTAF: "TAF", navTABA: "TABA", navGetInvolved: "加入我們",
    heroBadge: "TAI 計畫 · 語言、教育與文化",
    heroTitle: "臺美語言、教育與文化",
    heroBody: "TALEC 透過語言交流、教育與文化活動，深化臺美之間的相互理解。我們連結希望學習、教導並共同慶祝這段夥伴關係兩端豐富文化的人們。",
    heroBtn1: "加入 TALEC", heroBtn2: "了解更多",
    heroCardLabel: "TALEC", heroCardTitle: "語言是文化之間的橋樑。",
    heroCardBody: "透過共同的語言與文化好奇心，TALEC 建立強化臺美關係的人際連結。",
    heroItem1: "語言交流計畫", heroItem2: "教育推廣活動", heroItem3: "文化活動與藝術",
    aboutBadge: "關於 TALEC", aboutTitle: "相互理解從語言與文化開始",
    aboutBody1: "TALEC 是臺美倡議的語言、教育與文化計畫。我們相信深厚持久的臺美關係是建立在人與人之間的——透過共同的語言、相互的好奇心與真誠的文化欣賞。",
    aboutBody2: "TALEC 為普通話與英語使用者創造有組織及非正式的互相學習機會，讓教育者跨境分享最佳實踐，並讓社群共同慶祝臺灣與美國的文化。",
    f1Title: "語言交流", f1Body: "配對普通話與英語使用者的交流課程，進行語言練習與跨文化對話。",
    f2Title: "教育計畫", f2Body: "支援各年齡層語言學習與跨文化教育的工作坊、課程與資源。",
    f3Title: "文化活動", f3Body: "電影放映、美食節、藝術展覽，以及慶祝臺灣與美國文化和傳統的活動。",
    f4Title: "教育者網絡", f4Body: "臺灣與美國的教師和教育工作者社群，共享資源與跨境教學法。",
    pillarsTitle: "文化連結的三大支柱",
    pillarsBody: "TALEC 在三個相互關聯的領域運作，以促進臺灣與美國之間真正的相互理解。",
    p1Title: "語言", p1Body: "有組織的語言交流與對話計畫，配對普通話與英語使用者進行實際練習與交友。",
    p2Title: "教育", p2Body: "幫助人們了解兩國歷史、公民制度與社會價值觀的教育活動與資源。",
    p3Title: "文化", p3Body: "慶祝臺灣與美國文化獨特之處及共同點的活動、藝術、美食與故事。",
    ctaBadge: "加入 TALEC", ctaTitle: "準備好深化您的跨文化理解了嗎？",
    ctaBody: "無論您想學習普通話、分享您的文化，或只是與臺美雙方的人建立連結——TALEC 都有屬於您的位置。在 Discord 上加入我們的社群開始吧。",
    ctaBtn1: "加入 Discord", ctaBtn2: "追蹤我們",
    footerLocations: "據點", footerPrograms: "計畫項目", footerTAFCommunity: "TAF 社群", footerFBGroup: "Facebook 社團",
    footerPrivacy: "隱私政策", footerTerms: "服務條款", footerCopyright: "© 2026 臺美倡議（籌備中）。保留所有權利。",
    locationUS: "美國 華盛頓特區", locationTW: "臺灣 臺北",
    tafProgram: "TAF — 真理聯盟團契", tabaProgram: "TABA — 商業加速器", talecProgram: "TALEC — 語言與文化",
  },
};

export default function TALECPage() {
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
              <a href="/taba" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">{t.navTABA}</a>
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
            <a href="/taba" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>{t.navTABA}</a>
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
              <a href="https://discord.gg/KFqhjzVnvz" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full text-white font-semibold text-lg transition-all shadow-xl shadow-slate-200 gradient-pill flex items-center justify-center gap-2">{t.heroBtn1} <i className="ph ph-arrow-right"></i></a>
              <a href="#about" className="px-8 py-4 rounded-full bg-white text-slate-700 border border-slate-200 font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center">{t.heroBtn2}</a>
            </div>
          </div>
          <div className="relative">
            <div className="glass-panel rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/80">
              <div className="relative w-full aspect-square">
                <Image src="/talec.png" alt="TALEC Language & Culture" fill className="object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-white shadow-lg shadow-slate-200 flex items-center justify-center text-taiwan-blue"><i className="ph ph-book-open text-2xl"></i></div>
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
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover"><i className="ph ph-translate text-2xl text-taiwan-blue mb-3 block"></i><h3 className="text-lg font-semibold text-slate-900 mb-2">{t.f1Title}</h3><p className="text-sm text-slate-600">{t.f1Body}</p></div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover"><i className="ph ph-student text-2xl text-taiwan-blue mb-3 block"></i><h3 className="text-lg font-semibold text-slate-900 mb-2">{t.f2Title}</h3><p className="text-sm text-slate-600">{t.f2Body}</p></div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover"><i className="ph ph-music-notes text-2xl text-taiwan-blue mb-3 block"></i><h3 className="text-lg font-semibold text-slate-900 mb-2">{t.f3Title}</h3><p className="text-sm text-slate-600">{t.f3Body}</p></div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover"><i className="ph ph-chalkboard-teacher text-2xl text-taiwan-blue mb-3 block"></i><h3 className="text-lg font-semibold text-slate-900 mb-2">{t.f4Title}</h3><p className="text-sm text-slate-600">{t.f4Body}</p></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.pillarsTitle}</h2><p className="text-slate-600 max-w-2xl mx-auto">{t.pillarsBody}</p></div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white border border-slate-100 rounded-2xl p-8 card-hover text-center"><div className="w-14 h-14 rounded-full bg-taiwan-blue/10 flex items-center justify-center mx-auto mb-5"><i className="ph ph-chat-dots text-2xl text-taiwan-blue"></i></div><h3 className="text-xl font-semibold text-slate-900 mb-3">{t.p1Title}</h3><p className="text-sm text-slate-600 leading-relaxed">{t.p1Body}</p></div>
            <div className="bg-white border border-slate-100 rounded-2xl p-8 card-hover text-center"><div className="w-14 h-14 rounded-full bg-taiwan-red/10 flex items-center justify-center mx-auto mb-5"><i className="ph ph-graduation-cap text-2xl text-taiwan-red"></i></div><h3 className="text-xl font-semibold text-slate-900 mb-3">{t.p2Title}</h3><p className="text-sm text-slate-600 leading-relaxed">{t.p2Body}</p></div>
            <div className="bg-white border border-slate-100 rounded-2xl p-8 card-hover text-center"><div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center mx-auto mb-5"><i className="ph ph-palette text-2xl text-slate-700"></i></div><h3 className="text-xl font-semibold text-slate-900 mb-3">{t.p3Title}</h3><p className="text-sm text-slate-600 leading-relaxed">{t.p3Body}</p></div>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://discord.gg/KFqhjzVnvz" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-50 transition-colors shadow-lg flex items-center justify-center gap-2 text-lg"><i className="ph-fill ph-discord-logo text-xl"></i> {t.ctaBtn1}</a>
            <a href="https://www.instagram.com/tai.org.tw" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-colors backdrop-blur-md flex items-center justify-center gap-2 text-lg"><i className="ph-fill ph-instagram-logo text-xl"></i> {t.ctaBtn2}</a>
          </div>
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
                <li><a href="/taba" className="hover:text-slate-900 flex items-center gap-1.5"><i className="ph ph-rocket-launch"></i> {t.tabaProgram}</a></li>
                <li><a href="/talec" className="hover:text-slate-900 font-medium text-taiwan-blue flex items-center gap-1.5"><i className="ph ph-book-open"></i> {t.talecProgram}</a></li>
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
