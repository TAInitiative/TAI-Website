"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../LanguageContext";

const translations = {
  en: {
    navAboutTAI: "About TAI", navPrograms: "Programs", navTABA: "TABA", navTALEC: "TALEC", navGetInvolved: "Get Involved",
    heroBadge: "TAI Program · Faith & Community",
    heroTitle: "Truth Alliance Fellowship",
    heroBody: "TAF is a Christian ecumenical, bilingual, and international community for Taiwanese, Taiwanese Americans, and Americans. We gather for shared meals, prayer, and fellowship — building friendships across cultures and borders.",
    heroBtn1: "Join the Fellowship", heroBtn2: "Learn More",
    heroCardLabel: "Community", heroCardTitle: "Faith that bridges cultures.",
    heroCardBody: "A welcoming space where people from all backgrounds come together in shared faith, friendship, and mission.",
    heroItem1: "Fellowship Meals", heroItem2: "Shared Prayer Sessions", heroItem3: "Bilingual Gatherings",
    heroImageCaption: "Our first in-person meetup · July 25, 2026",
    aboutBadge: "About TAF", aboutTitle: "A community rooted in faith and friendship",
    aboutBody1: "Truth Alliance Fellowship is TAI's faith-centered community program. We are Christian and ecumenical — welcoming believers from all denominations who share a heart for Taiwan, America, and the world.",
    aboutBody2: "TAF gatherings are bilingual (English and Mandarin) and open to Taiwanese, Taiwanese Americans, Americans, and international friends. Whether you are new to Taiwan, studying abroad, or simply looking for a cross-cultural faith community, TAF is your home.",
    statMembersLabel: "Members", statMeetingsLabel: "Meetings Held", statSinceLabel: "Founded",
    growthBody: "Since launching in May 2026, TAF has grown to about 20 members through 10 gatherings — with members from Chesterbrook Taiwanese Presbyterian Church in Virginia, Friendship Presbyterian Church in Taipei, and more churches joining as we grow.",
    scheduleBadge: "Meeting Schedule", scheduleTitle: "Our Romans study, meeting by meeting",
    scheduleBody: "TAF gathers biweekly to study the Book of Romans together — in person in Taipei and online. Here's the full schedule.",
    colMeeting: "#", colDateTime: "Date / Time", colTopic: "Topic", colLeader: "Leader", colLocation: "Location",
    statusDone: "Done", statusUpcoming: "Upcoming",
    driveLinkText: "View Study Notes & Resources",
    f1Title: "Fellowship Meals", f1Body: "Regular shared meals where the TAF community comes together over food, conversation, and genuine connection.",
    f2Title: "Prayer Sessions", f2Body: "Bilingual prayer gatherings where we lift up each other, our communities, and the Taiwan-U.S. relationship.",
    f3Title: "Bilingual Community", f3Body: "All TAF events are conducted bilingually in English and Mandarin, so everyone feels welcome and included.",
    f4Title: "International Welcome", f4Body: "Open to all — Taiwanese, Taiwanese American, American, and international friends who share our values.",
    valuesTitle: "What brings us together",
    valuesBody: "TAF is built on the belief that faith, friendship, and shared meals are among the most powerful forces for cross-cultural connection.",
    v1Title: "Ecumenical Faith", v1Body: "We welcome Christians of all denominations and traditions, united by a shared love for Christ and for one another.",
    v2Title: "Genuine Community", v2Body: "Real friendships built around the table — through shared meals, honest conversation, and mutual care.",
    v3Title: "Cross-Cultural Mission", v3Body: "Bridging Taiwan and America through the universal language of faith, hospitality, and shared purpose.",
    ctaBadge: "Join TAF", ctaTitle: "Ready to find your cross-cultural faith community?",
    ctaBody: "Join the TAF community on Facebook and Instagram to stay connected with upcoming gatherings, meals, and prayer sessions.",
    ctaBtn1: "Join on Facebook", ctaBtn2: "Follow on Instagram",
    footerLocations: "Locations", footerPrograms: "Programs", footerTAFCommunity: "TAF Community", footerFBGroup: "Facebook Group",
    footerPrivacy: "Privacy Policy", footerTerms: "Terms of Service", footerCopyright: "© 2026 Taiwan America Initiative (to be registered). All rights reserved.",
    locationUS: "Washington D.C., United States", locationTW: "Taipei, Taiwan",
    tafProgram: "TAF — Truth Alliance Fellowship", tabaProgram: "TABA — Business Accelerator (Coming Soon)", talecProgram: "TALEC — Language & Culture (Coming Soon)",
  },
  zh: {
    navAboutTAI: "關於臺美倡議", navPrograms: "計畫項目", navTABA: "TABA", navTALEC: "TALEC", navGetInvolved: "加入我們",
    heroBadge: "TAI 計畫 · 信仰與社群",
    heroTitle: "真理聯盟團契",
    heroBody: "TAF 是一個基督教普世、雙語的國際社群，歡迎臺灣人、臺裔美國人及美國人參與。我們透過共同聚餐、禱告與交流，跨越文化與國界建立真摯的友誼。",
    heroBtn1: "加入團契", heroBtn2: "了解更多",
    heroCardLabel: "社群", heroCardTitle: "跨越文化的信仰。",
    heroCardBody: "一個溫馨的空間，讓來自不同背景的人在共同的信仰、友誼與使命中相聚。",
    heroItem1: "團契聚餐", heroItem2: "共同禱告聚會", heroItem3: "雙語聚會",
    heroImageCaption: "首次實體聚會 · 2026年7月25日",
    aboutBadge: "關於 TAF", aboutTitle: "以信仰與友誼為根基的社群",
    aboutBody1: "真理聯盟團契是臺美倡議以信仰為核心的社群計畫。我們是基督教普世性的社群——歡迎所有宗派的信徒，只要你對臺灣、美國與世界懷有熱情。",
    aboutBody2: "TAF 聚會以英語和普通話雙語進行，歡迎臺灣人、臺裔美國人、美國人及國際友人參與。無論您是剛到臺灣、在海外求學，還是尋找跨文化信仰社群，TAF 都是您的家。",
    statMembersLabel: "成員人數", statMeetingsLabel: "已舉辦聚會", statSinceLabel: "成立於",
    growthBody: "自2026年5月成立以來，TAF 已透過10次聚會成長至約20位成員——成員來自美國維吉尼亞州的 Chesterbrook Taiwanese Presbyterian Church、臺北的 Friendship Presbyterian Church（信友堂）等教會，並持續有更多教會加入我們的行列。",
    scheduleBadge: "聚會時程", scheduleTitle: "羅馬書查經進度表",
    scheduleBody: "TAF 每兩週聚會一次，一同查考羅馬書——在臺北實體聚會或線上進行。以下是完整時程。",
    colMeeting: "場次", colDateTime: "日期／時間", colTopic: "主題", colLeader: "帶領人", colLocation: "地點",
    statusDone: "已完成", statusUpcoming: "即將舉行",
    driveLinkText: "查看查經筆記與資源",
    f1Title: "團契聚餐", f1Body: "定期舉辦的共同聚餐，讓 TAF 社群成員在美食、對話與真誠的連結中相聚。",
    f2Title: "禱告聚會", f2Body: "雙語禱告聚會，我們為彼此、社群以及臺美關係代禱。",
    f3Title: "雙語社群", f3Body: "所有 TAF 活動均以英語和普通話雙語進行，讓每個人都感到受歡迎。",
    f4Title: "國際接待", f4Body: "向所有人開放——臺灣人、臺裔美國人、美國人及認同我們價值觀的國際友人。",
    valuesTitle: "凝聚我們的力量",
    valuesBody: "TAF 相信信仰、友誼與共同聚餐是跨文化連結最強大的力量。",
    v1Title: "普世信仰", v1Body: "我們歡迎所有宗派與傳統的基督徒，以對基督與彼此的共同愛為紐帶。",
    v2Title: "真實社群", v2Body: "在餐桌旁建立的真摯友誼——透過共同聚餐、真誠對話與相互關懷。",
    v3Title: "跨文化使命", v3Body: "透過信仰、款待與共同目標的普世語言，連結臺灣與美國。",
    ctaBadge: "加入 TAF", ctaTitle: "準備好找到您的跨文化信仰社群了嗎？",
    ctaBody: "在 Facebook 和 Instagram 上加入 TAF 社群，掌握最新的聚餐、禱告聚會等活動資訊。",
    ctaBtn1: "加入 Facebook 社團", ctaBtn2: "追蹤 Instagram",
    footerLocations: "據點", footerPrograms: "計畫項目", footerTAFCommunity: "TAF 社群", footerFBGroup: "Facebook 社團",
    footerPrivacy: "隱私政策", footerTerms: "服務條款", footerCopyright: "© 2026 臺美倡議（籌備中）。保留所有權利。",
    locationUS: "美國 華盛頓特區", locationTW: "臺灣 臺北",
    tafProgram: "TAF — 真理聯盟團契", tabaProgram: "TABA — 商業加速器（即將推出）", talecProgram: "TALEC — 語言與文化（即將推出）",
  },
};

const meetingSchedule = [
  { n: 1, date: "5/11/26 @ 21:00", topic: "Romans 1:1-17", leader: "Austin + Ian", location: "Online", done: true },
  { n: 2, date: "5/25/26 @ 21:00", topic: "Romans 1:18-32", leader: "Austin", location: "Online", done: true },
  { n: 3, date: "6/8/26 @ 21:00", topic: "Romans 2", leader: "Ian", location: "Online", done: true },
  { n: 4, date: "6/22/26 @ 21:00", topic: "Romans 3", leader: "Frances", location: "Online", done: true },
  { n: 5, date: "7/6/26 @ 21:00", topic: "Romans 4", leader: "Jairo", location: "Online", done: true },
  { n: 6, date: "7/25/26 @ 19:00", topic: "Fellowship Dinner!", leader: "Jasmine", location: "川之流精緻涮涮鍋長安店 (TPE)", done: true },
  { n: 7, date: "8/3/26 @ 18:30", topic: "Romans 5", leader: "Mark!", location: "Taipei (CEF)", done: true },
  { n: 8, date: "8/17/26 @ 19:00", topic: "Romans 6", leader: "Austin", location: "Taipei (CEF)", done: true },
  { n: 9, date: "8/31/26 @ 21:00", topic: "Romans 7", leader: "Mark + Austin", location: "Online", done: true },
  { n: 10, date: "9/14/26 @ 21:00", topic: "Romans 8", leader: "Jasmine", location: "Online", done: false },
  { n: 11, date: "9/28/26 @ 21:00", topic: "Romans 9", leader: "Kyle", location: "Online", done: false },
  { n: 12, date: "10/12/26 @ 21:00", topic: "Romans 10", leader: "Jairo", location: "Online", done: false },
  { n: 13, date: "10/26/26 @ 21:00", topic: "Romans 11", leader: "Austin", location: "Online", done: false },
  { n: 14, date: "11/9/26 @ 21:00", topic: "Romans 12", leader: "Mark + Austin", location: "Online", done: false },
  { n: 15, date: "11/23/26 @ 21:00", topic: "Romans 13", leader: "Lilian + Ian", location: "Online", done: false },
  { n: 16, date: "12/7/26 @ 21:00", topic: "Romans 14", leader: "Bella", location: "Online", done: false },
  { n: 17, date: "12/21/26 @ 21:00", topic: "Romans 15", leader: "Jamin", location: "Online", done: false },
  { n: 18, date: "12/28/26 @ 21:00", topic: "Romans 16", leader: "Austin", location: "Online", done: false },
];

export default function TAFPage() {
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
              <a href="/taba" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">{t.navTABA}</a>
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
            <a href="/taba" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>{t.navTABA}</a>
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
              <a href="https://www.facebook.com/groups/tafellowship" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full text-white font-semibold text-lg transition-all shadow-xl shadow-slate-200 gradient-pill flex items-center justify-center gap-2">{t.heroBtn1} <i className="ph ph-arrow-right"></i></a>
              <a href="#about" className="px-8 py-4 rounded-full bg-white text-slate-700 border border-slate-200 font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center">{t.heroBtn2}</a>
            </div>
          </div>
          <div className="relative">
            <div className="glass-panel rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/80">
              <div className="relative w-full aspect-square">
                <Image src="/taf.jpg" alt="TAF Fellowship" fill className="object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent px-5 pt-10 pb-4">
                  <p className="text-white text-sm font-semibold tracking-wide">{t.heroImageCaption}</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-white shadow-lg shadow-slate-200 flex items-center justify-center text-taiwan-blue"><i className="ph ph-cross text-2xl"></i></div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3 mb-10">
            <div className="text-center"><p className="text-4xl font-bold text-taiwan-blue">20+</p><p className="text-sm text-slate-600 mt-1">{t.statMembersLabel}</p></div>
            <div className="text-center"><p className="text-4xl font-bold text-taiwan-blue">10</p><p className="text-sm text-slate-600 mt-1">{t.statMeetingsLabel}</p></div>
            <div className="text-center"><p className="text-4xl font-bold text-taiwan-blue">{language === "en" ? "May 2026" : "2026年5月"}</p><p className="text-sm text-slate-600 mt-1">{t.statSinceLabel}</p></div>
          </div>
          <p className="text-center text-slate-600 max-w-3xl mx-auto leading-relaxed">{t.growthBody}</p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-white text-xs font-semibold uppercase tracking-[0.2em] gradient-pill mb-5">{t.scheduleBadge}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.scheduleTitle}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">{t.scheduleBody}</p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-4 py-3 font-semibold whitespace-nowrap">{t.colMeeting}</th>
                    <th className="px-4 py-3 font-semibold whitespace-nowrap">{t.colDateTime}</th>
                    <th className="px-4 py-3 font-semibold whitespace-nowrap">{t.colTopic}</th>
                    <th className="px-4 py-3 font-semibold whitespace-nowrap">{t.colLeader}</th>
                    <th className="px-4 py-3 font-semibold whitespace-nowrap">{t.colLocation}</th>
                  </tr>
                </thead>
                <tbody>
                  {meetingSchedule.map((m) => (
                    <tr key={m.n} className={`border-t border-slate-100 ${m.done ? "bg-emerald-50/60" : "bg-white"}`}>
                      <td className="px-4 py-3 text-slate-500">{m.n}</td>
                      <td className="px-4 py-3 text-slate-700 whitespace-nowrap">{m.date}</td>
                      <td className="px-4 py-3 text-slate-900 font-medium whitespace-nowrap">{m.topic}</td>
                      <td className="px-4 py-3 text-slate-700 whitespace-nowrap">{m.leader}</td>
                      <td className="px-4 py-3 text-slate-700 whitespace-nowrap">{m.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 mt-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-emerald-50 border border-emerald-200 inline-block"></span> {t.statusDone}</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-white border border-slate-200 inline-block"></span> {t.statusUpcoming}</span>
          </div>
          <div className="text-center mt-8">
            <a href="https://drive.google.com/drive/folders/1803_I18YSCF5rcpTleYcO4IP2fF3lfC6?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all"><i className="ph ph-folder-open text-lg"></i> {t.driveLinkText} <i className="ph ph-arrow-up-right"></i></a>
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
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover"><i className="ph ph-fork-knife text-2xl text-taiwan-blue mb-3 block"></i><h3 className="text-lg font-semibold text-slate-900 mb-2">{t.f1Title}</h3><p className="text-sm text-slate-600">{t.f1Body}</p></div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover"><i className="ph ph-hands-praying text-2xl text-taiwan-blue mb-3 block"></i><h3 className="text-lg font-semibold text-slate-900 mb-2">{t.f2Title}</h3><p className="text-sm text-slate-600">{t.f2Body}</p></div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover"><i className="ph ph-translate text-2xl text-taiwan-blue mb-3 block"></i><h3 className="text-lg font-semibold text-slate-900 mb-2">{t.f3Title}</h3><p className="text-sm text-slate-600">{t.f3Body}</p></div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 card-hover"><i className="ph ph-users-three text-2xl text-taiwan-blue mb-3 block"></i><h3 className="text-lg font-semibold text-slate-900 mb-2">{t.f4Title}</h3><p className="text-sm text-slate-600">{t.f4Body}</p></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.valuesTitle}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">{t.valuesBody}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white border border-slate-100 rounded-2xl p-8 card-hover text-center"><div className="w-14 h-14 rounded-full bg-taiwan-blue/10 flex items-center justify-center mx-auto mb-5"><i className="ph ph-cross text-2xl text-taiwan-blue"></i></div><h3 className="text-xl font-semibold text-slate-900 mb-3">{t.v1Title}</h3><p className="text-sm text-slate-600 leading-relaxed">{t.v1Body}</p></div>
            <div className="bg-white border border-slate-100 rounded-2xl p-8 card-hover text-center"><div className="w-14 h-14 rounded-full bg-taiwan-red/10 flex items-center justify-center mx-auto mb-5"><i className="ph ph-heart text-2xl text-taiwan-red"></i></div><h3 className="text-xl font-semibold text-slate-900 mb-3">{t.v2Title}</h3><p className="text-sm text-slate-600 leading-relaxed">{t.v2Body}</p></div>
            <div className="bg-white border border-slate-100 rounded-2xl p-8 card-hover text-center"><div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center mx-auto mb-5"><i className="ph ph-globe-hemisphere-east text-2xl text-slate-700"></i></div><h3 className="text-xl font-semibold text-slate-900 mb-3">{t.v3Title}</h3><p className="text-sm text-slate-600 leading-relaxed">{t.v3Body}</p></div>
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
            <a href="https://www.facebook.com/groups/tafellowship" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-50 transition-colors shadow-lg flex items-center justify-center gap-2"><i className="ph-fill ph-facebook-logo text-xl"></i> {t.ctaBtn1}</a>
            <a href="https://www.instagram.com/tafellowship/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-colors backdrop-blur-md flex items-center justify-center gap-2"><i className="ph-fill ph-instagram-logo text-xl"></i> {t.ctaBtn2}</a>
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
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">{t.footerPrograms}</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="/taf" className="hover:text-slate-900 font-medium text-taiwan-blue flex items-center gap-1.5"><i className="ph ph-cross"></i> {t.tafProgram}</a></li>
                <li><a href="/taba" className="hover:text-slate-900 flex items-center gap-1.5"><i className="ph ph-rocket-launch"></i> {t.tabaProgram}</a></li>
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
