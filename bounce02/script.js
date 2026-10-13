
"use strict";

const translations = {
    en: {
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navContact: "Contact",
        welcome: "Welcome to My Portfolio",
        aboutText: "I am a Cybersecurity graduate interested in technology.",
        skillsTitle: "My Skills",
        skill1: "Cybersecurity",
        skill2: "Networking",
        skill3: "JavaScript",
        projectsTitle: "My Projects",
        projectsText: "These are my web development projects.",
        contactTitle: "Contact Me",
        nameLabel: "Name",
        emailLabel: "Email",
        sendButton: "Send",
        footerText: "My Portfolio © 2026"
    },

    ar: {
        navAbout: "من أنا",
        navSkills: "مهاراتي",
        navProjects: "مشاريعي",
        navContact: "تواصل معي",
        welcome: "أهلاً بك في معرض أعمالي",
        aboutText: "أنا خريجة أمن سيبراني ومهتمة بالتكنولوجيا.",
        skillsTitle: "مهاراتي",
        skill1: "الأمن السيبراني",
        skill2: "الشبكات",
        skill3: "جافاسكريبت",
        projectsTitle: "مشاريعي",
        projectsText: "هذه مشاريعي في تطوير الويب.",
        contactTitle: "تواصل معي",
        nameLabel: "الاسم",
        emailLabel: "البريد الإلكتروني",
        sendButton: "إرسال",
        footerText: "معرض أعمالي © 2026"
    }
};

const languageButton = document.getElementById("languageButton");

let currentLanguage = "en";

languageButton.addEventListener("click", function () {
    if (currentLanguage === "en") {
        currentLanguage = "ar";
    } else {
        currentLanguage = "en";
    }

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir =
        currentLanguage === "ar" ? "rtl" : "ltr";

    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(function (element) {
        const key = element.dataset.i18n;
        element.textContent = translations[currentLanguage][key];
    });

    languageButton.textContent =
        currentLanguage === "en" ? "العربية" : "English";
});

